import type { Clase, Lectie, LectieCuContext } from '@/types'

export const TIPURI_MATERIAL = ['prezentare', 'video', 'fisa', 'joc', 'infografic', 'schema', 'test'] as const
export type TipMaterial = (typeof TIPURI_MATERIAL)[number]

export function materialePrezente(lectie: Lectie): TipMaterial[] {
  return TIPURI_MATERIAL.filter((tip) => Boolean(lectie.materiale[tip]))
}

export function areMateriale(lectie: Lectie): boolean {
  return materialePrezente(lectie).length > 0 || lectie.materiale.altele.length > 0
}

export function completitudineLectie(lectie: Lectie) {
  const total = TIPURI_MATERIAL.length + 1
  const gata = materialePrezente(lectie).length + (lectie.planLectie ? 1 : 0)
  return { gata, total }
}

export function toateLectiile(clase: Clase): LectieCuContext[] {
  const rezultat: LectieCuContext[] = []
  for (const [clasaId, clasa] of Object.entries(clase)) {
    for (const unitate of clasa.unitati) {
      for (const lectie of unitate.lectii) {
        rezultat.push({
          clasaId,
          clasaTitlu: clasa.titlu,
          unitateId: unitate.id,
          unitateTitlu: unitate.titlu,
          lectie,
        })
      }
    }
  }
  return rezultat
}
