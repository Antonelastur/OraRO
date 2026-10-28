// Logica jocului de sortare de pe tablă: cuvinte așezate pe categorii, apoi verificate.
// Fără interfață aici, ca să se poată testa. Vezi src/components/JocSortare.tsx.
import type { JocSortare } from '@/types'

export type StareSortare = {
  /** Indicele elementului → id-ul categoriei pe care e așezat. */
  asezat: Record<number, string>
  verificat: boolean
}

export const stareInitiala = (): StareSortare => ({ asezat: {}, verificat: false })

export function aseaza(stare: StareSortare, index: number, categorie: string): StareSortare {
  return { asezat: { ...stare.asezat, [index]: categorie }, verificat: false }
}

export function scoate(stare: StareSortare, index: number): StareSortare {
  const asezat = { ...stare.asezat }
  delete asezat[index]
  return { asezat, verificat: false }
}

export const verifica = (stare: StareSortare): StareSortare => ({ ...stare, verificat: true })

export function neasezate(joc: JocSortare, stare: StareSortare): number[] {
  return joc.elemente.map((_, i) => i).filter((i) => stare.asezat[i] === undefined)
}

export function rezultat(joc: JocSortare, stare: StareSortare) {
  const gresite = joc.elemente
    .map((_, i) => i)
    .filter((i) => stare.asezat[i] !== undefined && stare.asezat[i] !== joc.elemente[i].categorie)
  const total = joc.elemente.length
  const corecte = joc.elemente.filter((e, i) => stare.asezat[i] === e.categorie).length
  return { corecte, total, gresite, neasezate: neasezate(joc, stare) }
}
