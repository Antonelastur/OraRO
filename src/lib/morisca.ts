// Logica Moriștii de pe tablă: ce verb iese la fiecare învârtire. Fără interfață, ca să se poată testa.
// Vezi src/components/JocMorisca.tsx.
import type { JocMorisca } from '@/types'

export type Aleator = () => number

/** Verbul următor: unul care n-a ieșit încă în runda curentă; când s-au terminat, începe o rundă nouă. */
export function urmatorulVerb(joc: JocMorisca, iesite: number[], aleator: Aleator = Math.random): number {
  const n = joc.verbe.length
  const ultimul = iesite.at(-1)
  const runda = iesite.length % n === 0 ? [] : iesite.slice(-(iesite.length % n))
  let candidati = joc.verbe.map((_, i) => i).filter((i) => !runda.includes(i))
  if (n > 1 && ultimul !== undefined) candidati = candidati.filter((i) => i !== ultimul || candidati.length === 1)
  return candidati[Math.min(candidati.length - 1, Math.floor(aleator() * candidati.length))]
}

/** Unghiul final al moriștii: număr întreg de ture, ca să se oprească în poziția de pornire. */
export const unghiNou = (unghi: number, aleator: Aleator = Math.random): number =>
  unghi + 360 * (3 + Math.floor(aleator() * 3))
