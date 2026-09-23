// Planificarea pe unități: din calendar și din numărul de lecții rezultă
// săptămânile în care cade fiecare unitate de învățare.
//
// Săptămânile se derivă, nu se introduc. Dacă se schimbă structura anului sau
// numărul de lecții, intervalele se recalculează singure.
// Vezi docs/agenda.md, secțiunea 3, și docs/architecture.md, secțiunea 2.
import type { Saptamana } from '@/lib/an-scolar'

export type UnitateDePlanificat = {
  titlu: string
  nrLectii: number
}

export type UnitatePlanificata = UnitateDePlanificat & {
  saptamanaStart: number // numerotarea școlii, 1 la 36
  saptamanaFinal: number
  module: number[]
}

/** Câte ore intră într-o săptămână, ținând cont de zilele libere. */
export function orePeSaptamana(saptamana: Saptamana, orarSaptamanal: number): number {
  return Math.round((orarSaptamanal * saptamana.zileLucratoare) / 5)
}

/**
 * Împarte unitățile pe săptămâni, o lecție pe oră, în ordinea din manual.
 * Întoarce intervalul de săptămâni al fiecărei unități.
 *
 * `dela` mută startul, pentru cazul în care o parte din an e deja parcursă.
 */
export function planificaUnitati(
  saptamani: Saptamana[],
  unitati: UnitateDePlanificat[],
  orarSaptamanal: number,
  dela = 1,
): UnitatePlanificata[] {
  const deCurs = saptamani.filter((s) => s.tip === 'curs' && (s.numarCurs ?? 0) >= dela)
  const rezultat: UnitatePlanificata[] = []

  let index = 0
  let ramaseInSaptamana = deCurs[0] ? orePeSaptamana(deCurs[0], orarSaptamanal) : 0

  for (const unitate of unitati) {
    let deAsezat = unitate.nrLectii
    const module = new Set<number>()

    // Sărim peste săptămânile fără ore, ca să nu raportăm un start gol.
    while (index < deCurs.length && ramaseInSaptamana === 0) {
      index += 1
      ramaseInSaptamana = deCurs[index] ? orePeSaptamana(deCurs[index], orarSaptamanal) : 0
    }

    const start = deCurs[index]?.numarCurs ?? deCurs.at(-1)!.numarCurs!
    let ultima = start

    while (deAsezat > 0 && index < deCurs.length) {
      const saptamana = deCurs[index]
      const folosite = Math.min(deAsezat, ramaseInSaptamana)
      if (folosite > 0) {
        deAsezat -= folosite
        ramaseInSaptamana -= folosite
        ultima = saptamana.numarCurs!
        if (saptamana.modulId !== null) module.add(saptamana.modulId)
      }
      if (ramaseInSaptamana === 0) {
        index += 1
        ramaseInSaptamana = deCurs[index] ? orePeSaptamana(deCurs[index], orarSaptamanal) : 0
      }
    }

    rezultat.push({
      ...unitate,
      saptamanaStart: start,
      saptamanaFinal: ultima,
      module: [...module].sort((a, b) => a - b),
    })
  }

  return rezultat
}

/** „S8-S15", sau „S7" pentru o unitate care ține o singură săptămână. */
export function intervalSaptamani(unitate: UnitatePlanificata): string {
  return unitate.saptamanaStart === unitate.saptamanaFinal
    ? `S${unitate.saptamanaStart}`
    : `S${unitate.saptamanaStart}-S${unitate.saptamanaFinal}`
}

/** Intervalul de săptămâni al fiecărui modul, pentru capul planificării. */
export function intervalePeModul(saptamani: Saptamana[]): Map<number, string> {
  const harta = new Map<number, string>()
  for (const saptamana of saptamani) {
    if (saptamana.tip !== 'curs' || saptamana.modulId === null) continue
    const existent = harta.get(saptamana.modulId)
    harta.set(
      saptamana.modulId,
      existent ? `${existent.split('-')[0]}-S${saptamana.numarCurs}` : `S${saptamana.numarCurs}`,
    )
  }
  return harta
}
