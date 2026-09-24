// Programul anului: fiecare oră din orar, așezată pe zilele reale de curs, cu
// lecția care îi revine. Asta e `ScheduleItem` din docs/data-model.md §11,
// blocantul funcției „Ora de azi". Vezi și docs/agenda.md, secțiunea 4.4.
//
// Nimic nu se stochează. Sloturile ies din calendar plus orar, lecțiile din
// src/data/, statutul din jurnal. Se schimbă structura anului sau orarul,
// programul se recalculează singur.
import type { AnScolar, Saptamana } from '@/lib/an-scolar'
import type { Disciplina, IntervalOrar, IntrareOrar } from '@/lib/orar'
import { grupePentruClasa } from '@/lib/orar'
import type { Jurnal } from '@/lib/jurnal'
import { cheieLectie } from '@/lib/jurnal'
import type { Clase } from '@/types'

/** Un loc în orar, la o dată anume. Există și fără lecție în spate. */
export type Slot = {
  id: string // „2026-09-07/3", data și ora
  data: string
  ora: number
  start: string // „10:10"
  final: string // „11:00"
  clasa: string // grupa, cum îi spune școala: „5 A"
  disciplina: Disciplina
  clasaOraRO: string | null
}

/** Lecția la care trimite ora, fără să o copieze. */
export type ReferintaLectie = {
  clasaId: string
  unitateId: string
  lectieId: string
  titlu: string
}

export type Statut = 'programata' | 'in_desfasurare' | 'parcursa' | 'reprogramata'

export type OraProgramata = Slot & {
  lectie: ReferintaLectie | null
  statut: Statut
}

/** Momentul de referință, dat explicit ca să fie verificabil. */
export type Moment = { data: string; hhmm: string }

/**
 * „La 8 B, pe 24 septembrie, eram la lecția a doua din Unitatea I." Din punctul
 * ăsta se recalculează tot restul, înainte și înapoi. Rezolvă cazul real:
 * recapitularea a ținut mai mult, iar planul s-a decalat.
 *
 * Unitatea e obligatorie, pentru că id-urile de lecție se reiau de la capăt în
 * fiecare unitate: `lectia-1` există la toate.
 */
export type Ancora = { data: string; unitateId: string; lectieId: string }

/** Identifică o lecție în cadrul clasei. Id-ul singur nu e unic. */
export function cheieReferinta(lectie: { unitateId: string; lectieId: string }): string {
  return `${lectie.unitateId}/${lectie.lectieId}`
}

export function idSlot(data: string, ora: number): string {
  return `${data}/${ora}`
}

/**
 * Ultima zi de curs a fiecărei grupe. Clasa a VIII-a încheie mai devreme, iar
 * asta îi oprește toate orele, nu doar româna.
 */
export function finalPeGrupa(an: AnScolar, orar: IntrareOrar[]): Record<string, string> {
  const rezultat: Record<string, string> = {}
  for (const final of an.finalPeClasa) {
    for (const grupa of grupePentruClasa(orar, final.clasa)) {
      rezultat[grupa] = final.dataFinal
    }
  }
  return rezultat
}

/**
 * Toate orele anului, în ordine cronologică.
 *
 * Doar zilele de curs, iar Săptămâna Verde și Școala altfel nu intră deloc:
 * clasele fac activități cu diriginții lor, iar Antoanela nu e dirigintă, deci
 * în săptămânile alea nu are ore. Confirmat pe 24 septembrie 2026.
 */
export function genereazaSloturi(
  saptamani: Saptamana[],
  orar: IntrareOrar[],
  intervale: IntervalOrar[],
  final: Record<string, string> = {},
): Slot[] {
  const oreDinInterval = new Map(intervale.map((i) => [i.ora, i]))
  const sloturi: Slot[] = []

  for (const saptamana of saptamani) {
    if (saptamana.speciala !== null) continue
    for (const zi of saptamana.zile) {
      if (zi.tip !== 'curs') continue
      const numarZi = ((new Date(`${zi.data}T00:00:00Z`).getUTCDay() + 6) % 7) + 1
      for (const intrare of orar) {
        if (intrare.zi !== numarZi) continue
        const ultima = final[intrare.clasa]
        if (ultima && zi.data > ultima) continue
        const interval = oreDinInterval.get(intrare.ora)
        if (!interval) continue
        sloturi.push({
          id: idSlot(zi.data, intrare.ora),
          data: zi.data,
          ora: intrare.ora,
          start: interval.start,
          final: interval.final,
          clasa: intrare.clasa,
          disciplina: intrare.disciplina,
          clasaOraRO: intrare.clasaOraRO,
        })
      }
    }
  }

  return sloturi.sort((a, b) => (a.data === b.data ? a.ora - b.ora : a.data < b.data ? -1 : 1))
}

export function sloturiDinZi(sloturi: Slot[], data: string): Slot[] {
  return sloturi.filter((s) => s.data === data)
}

/** Orele unei grupe care au lecții în spate. Restul rămân sloturi goale. */
export function sloturiGrupei(sloturi: Slot[], grupa: string): Slot[] {
  return sloturi.filter((s) => s.clasa === grupa && s.clasaOraRO !== null)
}

/** Lecțiile unei clase, în ordinea din manual, cu unitatea din care vin. */
export function lectiileClasei(clase: Clase, clasaId: string): ReferintaLectie[] {
  const clasa = clase[clasaId]
  if (!clasa) return []
  return clasa.unitati.flatMap((unitate) =>
    unitate.lectii.map((lectie) => ({
      clasaId,
      unitateId: unitate.id,
      lectieId: lectie.id,
      titlu: lectie.titlu,
    })),
  )
}

/**
 * Cu câte ore se mută planul din cauza ancorei. Null dacă ancora nu prinde:
 * lecția nu există la clasa asta, sau data cade după ultima oră a grupei. O
 * ancoră care nu prinde trebuie văzută, nu ignorată în tăcere.
 */
export function decalajAncorei(
  sloturi: Slot[],
  lectii: ReferintaLectie[],
  ancora: Ancora,
): number | null {
  const iLectie = lectii.findIndex((l) => cheieReferinta(l) === cheieReferinta(ancora))
  const iSlot = sloturi.findIndex((s) => s.data >= ancora.data)
  if (iLectie < 0 || iSlot < 0) return null
  return iSlot - iLectie
}

/**
 * Așază lecțiile peste orele unei grupe, una pe oră, în ordine.
 *
 * Fără ancoră, prima lecție cade pe prima oră. Cu ancoră, lecția numită cade pe
 * prima oră din ziua dată, iar restul se mută cu ea. Orele rămase în urma
 * decalajului nu primesc lecție: acolo s-a consumat altceva.
 */
export function asazaLectii(
  sloturi: Slot[],
  lectii: ReferintaLectie[],
  ancora?: Ancora,
): Map<string, ReferintaLectie> {
  const rezultat = new Map<string, ReferintaLectie>()
  const decalaj = ancora ? (decalajAncorei(sloturi, lectii, ancora) ?? 0) : 0

  lectii.forEach((lectie, i) => {
    const slot = sloturi[i + decalaj]
    if (slot) rezultat.set(slot.id, lectie)
  })

  return rezultat
}

function esteInDesfasurare(slot: Slot, acum: Moment): boolean {
  return slot.data === acum.data && acum.hhmm >= slot.start && acum.hhmm < slot.final
}

/**
 * Programul complet: sloturi, lecțiile așezate peste ele, statutul fiecărei ore.
 *
 * `parcursa` se citește din jurnal, nu se ține a doua oară. `reprogramata`
 * marchează ora care avea lecție în planul de bază și a rămas fără, pentru că
 * planul s-a decalat.
 */
export function programeaza(
  sloturi: Slot[],
  clase: Clase,
  optiuni: { jurnal?: Jurnal; ancore?: Record<string, Ancora>; acum?: Moment } = {},
): OraProgramata[] {
  const { jurnal = {}, ancore = {}, acum } = optiuni
  const grupe = [...new Set(sloturi.filter((s) => s.clasaOraRO !== null).map((s) => s.clasa))]
  const asezari = new Map<string, ReferintaLectie>()
  const cuLectieInPlanulDeBaza = new Set<string>()

  for (const grupa of grupe) {
    const aleGrupei = sloturiGrupei(sloturi, grupa)
    const clasaId = aleGrupei[0]?.clasaOraRO
    if (!clasaId) continue
    const lectii = lectiileClasei(clase, clasaId)
    for (const [id, lectie] of asazaLectii(aleGrupei, lectii, ancore[grupa])) {
      asezari.set(id, lectie)
    }
    for (const id of asazaLectii(aleGrupei, lectii).keys()) {
      cuLectieInPlanulDeBaza.add(id)
    }
  }

  return sloturi.map((slot) => {
    const lectie = asezari.get(slot.id) ?? null
    return { ...slot, lectie, statut: statut(slot, lectie, jurnal, cuLectieInPlanulDeBaza, acum) }
  })
}

function statut(
  slot: Slot,
  lectie: ReferintaLectie | null,
  jurnal: Jurnal,
  cuLectieInPlanulDeBaza: Set<string>,
  acum?: Moment,
): Statut {
  if (lectie) {
    const cheie = cheieLectie(slot.clasa, lectie.clasaId, lectie.unitateId, lectie.lectieId)
    if (jurnal[cheie]) return 'parcursa'
  }
  if (acum && esteInDesfasurare(slot, acum)) return 'in_desfasurare'
  if (!lectie && slot.clasaOraRO !== null && cuLectieInPlanulDeBaza.has(slot.id)) return 'reprogramata'
  return 'programata'
}

/** Ora care se desfășoară acum. Null în pauză, în vacanță sau după program. */
export function oraDeAcum(program: OraProgramata[], acum: Moment): OraProgramata | null {
  return program.find((o) => esteInDesfasurare(o, acum)) ?? null
}

/** Ora care urmează, fie mai târziu azi, fie în prima zi cu ore de după. */
export function oraUrmatoare(program: OraProgramata[], acum: Moment): OraProgramata | null {
  return (
    program.find((o) => o.data > acum.data || (o.data === acum.data && o.start > acum.hhmm)) ?? null
  )
}

/**
 * Ce deschide aplicația la intrare: ora în desfășurare, altfel următoarea.
 * Vezi docs/roadmap.md, ETAPA 1, pasul 3.
 */
export function oraDeAzi(program: OraProgramata[], acum: Moment): OraProgramata | null {
  return oraDeAcum(program, acum) ?? oraUrmatoare(program, acum)
}

/** Ziua întreagă, cu orele fără conținut OraRO la locul lor. */
export function programulZilei(program: OraProgramata[], data: string): OraProgramata[] {
  return program.filter((o) => o.data === data)
}

/**
 * Lecțiile care nu mai încap în anul școlar, pentru o grupă. Zero înseamnă că
 * planul ține. Orice altceva e de recuperat sau de comprimat.
 */
export function lectiiNeasezate(
  sloturi: Slot[],
  clase: Clase,
  grupa: string,
  ancora?: Ancora,
): ReferintaLectie[] {
  const aleGrupei = sloturiGrupei(sloturi, grupa)
  const clasaId = aleGrupei[0]?.clasaOraRO
  if (!clasaId) return []
  const lectii = lectiileClasei(clase, clasaId)
  const asezate = new Set([...asazaLectii(aleGrupei, lectii, ancora).values()].map(cheieReferinta))
  return lectii.filter((l) => !asezate.has(cheieReferinta(l)))
}
