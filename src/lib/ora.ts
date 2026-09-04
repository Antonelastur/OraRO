// Stratul de derivare: proiectează forma actuală a datelor în modelul OraRO 2.0.
// Fișierele din src/data/ rămân sursă de adevăr, aici se calculează blocurile
// orei. Vezi docs/architecture.md, secțiunea 2.
import type { Lectie } from '@/types'

export type BlocOra = {
  index: number
  titlu: string
  minute: number
  secunde: number
  instructiuni: string
}

// „22 min" → 22. Acceptă și „5-7 min" sau „3", ia primul număr găsit.
export function minuteDinTimp(timp: string): number {
  const gasit = String(timp).match(/\d+/)
  return gasit ? Number(gasit[0]) : 0
}

export function blocuriOra(lectie: Lectie): BlocOra[] {
  const etape = lectie.planLectie?.desfasurare ?? []
  return etape.map((etapa, index) => {
    const minute = minuteDinTimp(etapa.timp)
    return {
      index,
      titlu: etapa.etapa,
      minute,
      secunde: minute * 60,
      instructiuni: etapa.activitate,
    }
  })
}

export function durataTotala(blocuri: BlocOra[]): number {
  return blocuri.reduce((total, bloc) => total + bloc.minute, 0)
}

export function formateazaCeas(secunde: number): string {
  const negativ = secunde < 0
  const absolut = Math.abs(secunde)
  const m = Math.floor(absolut / 60)
  const s = absolut % 60
  return `${negativ ? '+' : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
