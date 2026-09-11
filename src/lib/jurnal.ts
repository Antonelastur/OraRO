// Jurnalul orelor: lecțiile parcurse și reflecția de după oră. Date private,
// trăiesc doar în localStorage, pe browserul curent, până apare backendul.
// Vezi docs/data-model.md, secțiunea 10, și docs/architecture.md, secțiunea 5.
import { useCallback, useState } from 'react'

export const CUM_A_MERS = ['Excelent', 'Bine', 'Acceptabil', 'Trebuie schimbat'] as const

export type Reflectie = {
  cumAMers: string
  notite: string
  refolosire: string
  pastrez: string
  schimb: string
}

// ponytail: o singură intrare pe lecție (ultima predare); istoricul pe ani vine cu backendul.
export type IntrareJurnal = { parcursaLa: string; reflectie: Reflectie }
type Jurnal = Record<string, IntrareJurnal>

const CHEIE = 'oraro:jurnal-ore'

export const reflectieGoala: Reflectie = { cumAMers: '', notite: '', refolosire: '', pastrez: '', schimb: '' }

export function cheieLectie(clasa: string, unitate: string, lectie: string) {
  return `${clasa}/${unitate}/${lectie}`
}

export function formateazaData(iso: string) {
  return new Date(iso).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })
}

function citeste(): Jurnal {
  try {
    return JSON.parse(localStorage.getItem(CHEIE) ?? '{}') as Jurnal
  } catch {
    // Fereastră privată, stocare blocată sau conținut stricat: pornim gol.
    return {}
  }
}

export function useJurnal() {
  const [jurnal, setJurnal] = useState<Jurnal>(citeste)

  const scrie = useCallback((modifica: (j: Jurnal) => Jurnal) => {
    setJurnal((vechi) => {
      const nou = modifica(vechi)
      try {
        localStorage.setItem(CHEIE, JSON.stringify(nou))
      } catch {
        // Nu putem salva; starea rămâne valabilă până la reîncărcarea paginii.
      }
      return nou
    })
  }, [])

  // Fără `parcursaLa`, păstrează data existentă (editarea reflecției nu mută data orei).
  const salveaza = useCallback(
    (cheie: string, reflectie: Reflectie, parcursaLa?: string) =>
      scrie((j) => ({
        ...j,
        [cheie]: { parcursaLa: parcursaLa ?? j[cheie]?.parcursaLa ?? new Date().toISOString(), reflectie },
      })),
    [scrie],
  )

  const sterge = useCallback(
    (cheie: string) =>
      scrie((j) => {
        const rest = { ...j }
        delete rest[cheie]
        return rest
      }),
    [scrie],
  )

  return { jurnal, salveaza, sterge }
}
