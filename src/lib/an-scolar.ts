// Motorul de calendar: din structura anului școlar rezultă fiecare săptămână și
// fiecare zi, încadrate pe modul, vacanță sau zi liberă. De aici iese maparea
// dată calendaristică către lecție, adică ScheduleItem.
// Vezi docs/agenda.md, secțiunea 3, și docs/data-model.md, secțiunea 11.

// Datele circulă ca șiruri ISO, „2026-09-07". Toate calculele se fac în UTC, ca
// fusul orar al calculatorului să nu mute zilele.

export type Interval = { dataStart: string; dataFinal: string }

export type Modul = Interval & { numar: number }
export type Vacanta = Interval & { denumire: string }
export type SaptamanaSpeciala = Interval & { denumire: string }
export type ZiLibera = { data: string; denumire: string }
export type FinalClasa = { clasa: string; dataFinal: string }

export type AnScolar = {
  id: string
  denumire: string
  primaZiDeLuni: string
  module: Modul[]
  vacante: Vacanta[]
  saptamaniSpeciale: SaptamanaSpeciala[]
  zileLibere: ZiLibera[]
  dataFinal: string
  finalPeClasa: FinalClasa[]
  sursa?: string
}

export type TipZi = 'curs' | 'vacanta' | 'libera' | 'weekend' | 'inafara'
export type TipSaptamana = 'curs' | 'vacanta' | 'inafara'

export type Zi = {
  data: string
  tip: TipZi
  modulId: number | null
  denumire: string | null
}

export type Saptamana = {
  // Numărul intern, care acoperă fiecare săptămână a anului, vacanțele incluse.
  numarCalendaristic: number
  // Numărul pe care îl folosește școala, sare peste vacanțe. Null în vacanță.
  numarCurs: number | null
  numarISO: number
  dataStart: string // luni
  dataFinal: string // duminică
  modulId: number | null
  tip: TipSaptamana
  zileLucratoare: number
  // Prima și ultima zi cu ore, pentru săptămânile parțiale. Școala scrie
  // „Săptămâna 30, 5-7 mai", nu lunea în care începe săptămâna.
  primaZiDeCurs: string | null
  ultimaZiDeCurs: string | null
  speciala: string | null
  zile: Zi[]
}

export type Luna = {
  an: number
  luna: number // 1 la 12
  denumire: string
  saptamani: number[] // numere calendaristice
}

const ZI_MS = 86_400_000

const LUNI_RO = [
  'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
  'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie',
]

function msDinIso(iso: string): number {
  const [an, luna, zi] = iso.split('-').map(Number)
  return Date.UTC(an, luna - 1, zi)
}

function isoDinMs(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10)
}

export function adaugaZile(iso: string, zile: number): string {
  return isoDinMs(msDinIso(iso) + zile * ZI_MS)
}

// Luni = 1, duminică = 7, ca în ISO 8601.
export function ziSaptamanii(iso: string): number {
  const zi = new Date(msDinIso(iso)).getUTCDay()
  return zi === 0 ? 7 : zi
}

export function esteLuni(iso: string): boolean {
  return ziSaptamanii(iso) === 1
}

// Lunea săptămânii în care cade data. Dacă data e deja luni, se întoarce ea.
export function lunaSaptamanii(iso: string): string {
  return adaugaZile(iso, -(ziSaptamanii(iso) - 1))
}

export function numarISO(iso: string): number {
  // Joia din aceeași săptămână decide anul ISO, apoi numărăm de la prima joi.
  const joi = adaugaZile(iso, 4 - ziSaptamanii(iso))
  const anISO = Number(joi.slice(0, 4))
  const primaZiAnului = `${anISO}-01-01`
  const diferenta = (msDinIso(joi) - msDinIso(primaZiAnului)) / ZI_MS
  return Math.floor(diferenta / 7) + 1
}

function inInterval(data: string, interval: Interval): boolean {
  return data >= interval.dataStart && data <= interval.dataFinal
}

function clasificaZi(data: string, an: AnScolar): Zi {
  const modul = an.module.find((m) => inInterval(data, m))

  if (ziSaptamanii(data) >= 6) {
    return { data, tip: 'weekend', modulId: modul?.numar ?? null, denumire: null }
  }

  const vacanta = an.vacante.find((v) => inInterval(data, v))
  if (vacanta) {
    return { data, tip: 'vacanta', modulId: null, denumire: vacanta.denumire }
  }

  const libera = an.zileLibere.find((z) => z.data === data)
  if (libera) {
    // O zi liberă contează doar dacă ar fi fost zi de curs.
    const tip: TipZi = modul ? 'libera' : 'inafara'
    return { data, tip, modulId: modul?.numar ?? null, denumire: libera.denumire }
  }

  if (modul) {
    return { data, tip: 'curs', modulId: modul.numar, denumire: null }
  }

  return { data, tip: 'inafara', modulId: null, denumire: null }
}

function ultimaDataDinAn(an: AnScolar): string {
  const capete = [
    an.dataFinal,
    ...an.module.map((m) => m.dataFinal),
    ...an.vacante.map((v) => v.dataFinal),
    ...an.finalPeClasa.map((f) => f.dataFinal),
  ]
  return capete.reduce((maxim, data) => (data > maxim ? data : maxim))
}

/**
 * Generează săptămânile anului școlar, de la prima zi de luni până la ultima
 * dată din structură. Numerotarea de curs sare peste vacanțe, ca la școală.
 */
export function genereazaSaptamani(an: AnScolar): Saptamana[] {
  // Dacă data primită nu e luni, pornim de la lunea săptămânii ei. Interfața
  // anunță corecția, motorul nu se blochează.
  let start = esteLuni(an.primaZiDeLuni) ? an.primaZiDeLuni : lunaSaptamanii(an.primaZiDeLuni)

  const ultima = ultimaDataDinAn(an)
  const saptamani: Saptamana[] = []
  let numarCurs = 0

  // 53 e plafonul: un an calendaristic nu atinge mai multe săptămâni ISO.
  for (let index = 0; index < 53; index += 1) {
    const dataFinal = adaugaZile(start, 6)
    const zile = Array.from({ length: 7 }, (_, i) => clasificaZi(adaugaZile(start, i), an))
    const zileDeCurs = zile.filter((z) => z.tip === 'curs')

    const tip: TipSaptamana = zileDeCurs.length > 0
      ? 'curs'
      : zile.some((z) => z.tip === 'vacanta')
        ? 'vacanta'
        : 'inafara'

    if (tip === 'curs') numarCurs += 1

    const speciala = an.saptamaniSpeciale.find(
      (s) => s.dataStart <= dataFinal && s.dataFinal >= start,
    )

    saptamani.push({
      numarCalendaristic: index + 1,
      numarCurs: tip === 'curs' ? numarCurs : null,
      numarISO: numarISO(start),
      dataStart: start,
      dataFinal,
      modulId: zileDeCurs[0]?.modulId ?? null,
      tip,
      zileLucratoare: zileDeCurs.length,
      primaZiDeCurs: zileDeCurs[0]?.data ?? null,
      ultimaZiDeCurs: zileDeCurs.at(-1)?.data ?? null,
      speciala: speciala?.denumire ?? null,
      zile,
    })

    if (dataFinal >= ultima) break
    start = adaugaZile(start, 7)
  }

  return saptamani
}

/** Câte săptămâni de curs are anul. Rezultă din calendar, nu se scrie de mână. */
export function numarSaptamaniDeCurs(saptamani: Saptamana[]): number {
  return saptamani.filter((s) => s.tip === 'curs').length
}

export function saptamanaPentruData(saptamani: Saptamana[], data: string): Saptamana | null {
  return saptamani.find((s) => data >= s.dataStart && data <= s.dataFinal) ?? null
}

/**
 * Săptămânile unei clase. Anul nu se termină la aceeași dată pentru toată lumea:
 * clasa a VIII-a încheie mai devreme. Vezi docs/agenda.md, secțiunea 3.
 */
export function saptamaniPentruClasa(
  saptamani: Saptamana[],
  clasa: string,
  an: AnScolar,
): Saptamana[] {
  const exceptie = an.finalPeClasa.find((f) => f.clasa === clasa)
  const final = exceptie?.dataFinal ?? an.dataFinal
  return saptamani.filter((s) => s.tip !== 'curs' || s.dataStart <= final)
}

export function dataFinalPentruClasa(an: AnScolar, clasa: string): string {
  return an.finalPeClasa.find((f) => f.clasa === clasa)?.dataFinal ?? an.dataFinal
}

/** Orele efective dintr-un interval de săptămâni, la un orar de N ore pe săptămână. */
export function oreEfective(saptamani: Saptamana[], orePeSaptamana: number): number {
  return saptamani
    .filter((s) => s.tip === 'curs')
    .reduce((total, s) => total + Math.round((orePeSaptamana * s.zileLucratoare) / 5), 0)
}

/** Vederea pe luni, fiecare lună trimițând către săptămânile care o ating. */
export function genereazaLuni(saptamani: Saptamana[]): Luna[] {
  const luni = new Map<string, Luna>()

  for (const saptamana of saptamani) {
    for (const zi of saptamana.zile) {
      const an = Number(zi.data.slice(0, 4))
      const luna = Number(zi.data.slice(5, 7))
      const cheie = `${an}-${luna}`
      let intrare = luni.get(cheie)
      if (!intrare) {
        intrare = { an, luna, denumire: LUNI_RO[luna - 1], saptamani: [] }
        luni.set(cheie, intrare)
      }
      if (!intrare.saptamani.includes(saptamana.numarCalendaristic)) {
        intrare.saptamani.push(saptamana.numarCalendaristic)
      }
    }
  }

  return [...luni.values()].sort((a, b) => a.an - b.an || a.luna - b.luna)
}
