// Ce se vede pe tablă. Ecranul elevilor arată doar ce trebuie să știe copiii:
// pașii, cronometrul, materialele și tema. Planul de lecție, jurnalul și
// testul rămân pentru profesoară, în Bibliotecă. Atenție: separarea ține de
// ce afișează interfața, nu de controlul accesului; datele sunt în același
// bundle. Vezi docs/architecture.md, secțiunea despre conținut privat.
import type { Lectie } from '@/types'
import { TIPURI_MATERIAL, type TipMaterial } from '@/lib/lectii'

// Testul nu apare aici: are linkul privat spre varianta B și baremul.
export const MATERIALE_ELEVI = TIPURI_MATERIAL.filter((tip) => tip !== 'test')

const LINIE_TEMA = /^\s*[–-]\s*Tema\s*:\s*/i

function cuMajuscula(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/** Tema pentru acasă, din liniile „– Tema: …” ale planului. Nimic dacă planul nu are. */
export function temaAcasa(lectie: Lectie): string[] {
  const rezultat: string[] = []
  for (const etapa of lectie.planLectie?.desfasurare ?? []) {
    for (const linie of etapa.activitate.split('\n')) {
      if (LINIE_TEMA.test(linie)) rezultat.push(cuMajuscula(linie.replace(LINIE_TEMA, '').trim()))
    }
  }
  return rezultat
}

/** Indicele etapei în care se dă tema, sau -1. */
export function etapaTemei(lectie: Lectie): number {
  const etape = lectie.planLectie?.desfasurare ?? []
  return etape.findIndex((etapa) => etapa.activitate.split('\n').some((linie) => LINIE_TEMA.test(linie)))
}

/** Materialele pe care le au elevii la oră, fără test. */
export function materialeElevi(lectie: Lectie): TipMaterial[] {
  return MATERIALE_ELEVI.filter((tip) => Boolean(lectie.materiale[tip]))
}
