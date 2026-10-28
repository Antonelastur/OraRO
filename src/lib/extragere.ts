// Logica jocurilor de extragere la sorți și de împărțire în grupe, de pe tablă.
// Fără interfață aici, ca să se poată testa; generatorul aleatoriu se poate înlocui în teste.
// Vezi src/components/JocExtragere.tsx și src/components/JocGrupe.tsx.
import type { JocExtragere, JocGrupe } from '@/types'

export type Aleator = () => number

export type StareExtragere = {
  /** Indicii bileților trași, în ordine; ultimul e cel de pe ecran. */
  trase: number[]
  raspunsVizibil: boolean
}

export const stareInitiala = (): StareExtragere => ({ trase: [], raspunsVizibil: false })

export function ramase(joc: JocExtragere, stare: StareExtragere): number[] {
  const toate = joc.elemente.map((_, i) => i)
  return joc.faraRepetare ? toate.filter((i) => !stare.trase.includes(i)) : toate
}

export function trage(joc: JocExtragere, stare: StareExtragere, aleator: Aleator = Math.random): StareExtragere {
  const candidati = ramase(joc, stare)
  if (candidati.length === 0) return stare
  const index = candidati[Math.min(candidati.length - 1, Math.floor(aleator() * candidati.length))]
  return { trase: [...stare.trase, index], raspunsVizibil: false }
}

export const arataRaspunsul = (stare: StareExtragere): StareExtragere => ({ ...stare, raspunsVizibil: true })

export const curent = (stare: StareExtragere): number | null => stare.trase.at(-1) ?? null

// Grupe: pachetul de bilete are exact cât clasa, așa încât grupele ies egale (cel mult cu unul în plus).
export type PachetGrupe = { numarGrupe: number; bilete: number[] }

export function pachetGrupe(joc: JocGrupe, elevi: number, aleator: Aleator = Math.random): PachetGrupe {
  const n = Math.max(0, Math.floor(elevi))
  const numarGrupe = Math.max(1, Math.min(joc.etichete.length, Math.ceil(n / joc.maxPerGrupa)))
  const bilete: number[] = []
  for (let i = 0; i < n; i++) bilete.push(i % numarGrupe)
  // Fisher-Yates
  for (let i = bilete.length - 1; i > 0; i--) {
    const j = Math.min(i, Math.floor(aleator() * (i + 1)))
    ;[bilete[i], bilete[j]] = [bilete[j], bilete[i]]
  }
  return { numarGrupe, bilete }
}

/** Câți elevi au tras fiecare grupă, după `trase` bilete. */
export function marimiGrupe(pachet: PachetGrupe, trase: number): number[] {
  const m = Array(pachet.numarGrupe).fill(0)
  for (const g of pachet.bilete.slice(0, trase)) m[g]++
  return m
}

/** Mărimea finală a fiecărei grupe. */
export const marimiFinale = (pachet: PachetGrupe): number[] => marimiGrupe(pachet, pachet.bilete.length)
