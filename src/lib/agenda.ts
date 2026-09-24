// Agenda: programul anului, construit din datele reale ale anului 2026-2027.
//
// Stratul ăsta leagă calendarul, orarul și lecțiile, ca paginile să nu facă
// asamblarea fiecare pe cont propriu. Vezi docs/agenda.md, secțiunea 4.4.
import { useCallback, useMemo, useState } from 'react'
import { an20262027 } from '@/data/an-scolar-2026-2027'
import { clase } from '@/data/clase.js'
import { intervale, orar } from '@/data/orar-2026-2027'
import { genereazaSaptamani, saptamanaPentruData } from '@/lib/an-scolar'
import type { Saptamana, Zi } from '@/lib/an-scolar'
import { useJurnal } from '@/lib/jurnal'
import type { Ancora, OraProgramata } from '@/lib/program'
import { finalPeGrupa, genereazaSloturi, programeaza, programulZilei } from '@/lib/program'
import type { Clase } from '@/types'

export const saptamani = genereazaSaptamani(an20262027)
export const sloturi = genereazaSloturi(saptamani, orar, intervale, finalPeGrupa(an20262027, orar))

const CHEIE_ANCORE = 'oraro:ancore'

export function citesteAncore(): Record<string, Ancora> {
  try {
    return JSON.parse(localStorage.getItem(CHEIE_ANCORE) ?? '{}') as Record<string, Ancora>
  } catch {
    return {}
  }
}

/** Ancorele pe grupă, ținute minte între sesiuni. Vezi `Ancora` din program.ts. */
export function useAncore(): [Record<string, Ancora>, (grupa: string, ancora: Ancora | null) => void] {
  const [ancore, setAncore] = useState(citesteAncore)

  const schimba = useCallback((grupa: string, ancora: Ancora | null) => {
    setAncore((vechi) => {
      const nou = { ...vechi }
      if (ancora) nou[grupa] = ancora
      else delete nou[grupa]
      try {
        localStorage.setItem(CHEIE_ANCORE, JSON.stringify(nou))
      } catch {
        // Stocare blocată: ancora ține până la reîncărcare.
      }
      return nou
    })
  }, [])

  return [ancore, schimba]
}

/** Programul complet al anului, cu statutul fiecărei ore la momentul dat. */
export function useProgram(acum?: { data: string; hhmm: string }): OraProgramata[] {
  const { jurnal } = useJurnal()
  const [ancore] = useAncore()
  return useMemo(
    () => programeaza(sloturi, clase as unknown as Clase, { jurnal, ancore, acum }),
    [jurnal, ancore, acum],
  )
}

export type StareaZilei =
  | { fel: 'curs'; saptamana: Saptamana; ore: OraProgramata[] }
  | { fel: 'liber'; motiv: string; saptamana: Saptamana | null }

const NUME_ZILE = ['luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă', 'duminică']

/**
 * Ce e într-o zi: ore, sau motivul pentru care nu sunt. Weekendul, vacanța,
 * ziua liberă și săptămânile speciale se spun pe nume, ca să nu rămână ecranul
 * gol fără explicație.
 */
export function stareaZilei(program: OraProgramata[], data: string): StareaZilei {
  const saptamana = saptamanaPentruData(saptamani, data)
  const ore = programulZilei(program, data)
  if (ore.length > 0) return { fel: 'curs', saptamana: saptamana!, ore }

  if (saptamana?.speciala) return { fel: 'liber', motiv: saptamana.speciala, saptamana }

  const zi: Zi | undefined = saptamana?.zile.find((z) => z.data === data)
  const motiv =
    zi?.tip === 'weekend' ? 'Weekend'
    : zi?.denumire ? zi.denumire
    : zi?.tip === 'vacanta' ? 'Vacanță'
    : saptamana === null ? 'În afara anului școlar'
    : 'Fără ore'

  return { fel: 'liber', motiv, saptamana: saptamana ?? null }
}

export function numeZiDinData(data: string): string {
  const zi = new Date(`${data}T00:00:00Z`).getUTCDay()
  return NUME_ZILE[(zi + 6) % 7]
}

export function dataLunga(data: string): string {
  return new Date(`${data}T00:00:00Z`).toLocaleDateString('ro-RO', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  })
}

/** Ziua următoare sau precedentă care are ore. Null dacă nu mai există. */
export function ziCuOre(program: OraProgramata[], dela: string, directie: 1 | -1): string | null {
  const zile = [...new Set(program.map((o) => o.data))]
  return directie === 1
    ? (zile.find((d) => d > dela) ?? null)
    : ([...zile].reverse().find((d) => d < dela) ?? null)
}

/** Momentul curent, în forma cerută de program.ts. */
export function acumLocal(): { data: string; hhmm: string } {
  const d = new Date()
  const doua = (n: number) => String(n).padStart(2, '0')
  return {
    data: `${d.getFullYear()}-${doua(d.getMonth() + 1)}-${doua(d.getDate())}`,
    hhmm: `${doua(d.getHours())}:${doua(d.getMinutes())}`,
  }
}
