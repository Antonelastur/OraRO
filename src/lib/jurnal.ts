// Jurnalul orelor: lecțiile parcurse și reflecția de după oră. Date private,
// trăiesc doar în localStorage, pe browserul curent, până apare backendul.
// Vezi docs/data-model.md, secțiunea 10, și docs/architecture.md, secțiunea 5.
//
// Jurnalul ține minte pe grupă, nu pe lecție. 5 A și 5 B fac aceleași lecții,
// dar nu neapărat în același ritm, așa că fiecare are propriul progres.
// Vezi docs/agenda.md, secțiunea 4.3.
import { useCallback, useState } from 'react'
import { orar } from '@/data/orar-2026-2027'
import { grupeDupaClasa, grupePentruClasa } from '@/lib/orar'

export const CUM_A_MERS = ['Excelent', 'Bine', 'Acceptabil', 'Trebuie schimbat'] as const

export type Reflectie = {
  cumAMers: string
  notite: string
  refolosire: string
  pastrez: string
  schimb: string
}

// ponytail: o singură intrare pe lecție și grupă (ultima predare); istoricul pe
// ani vine cu backendul.
export type IntrareJurnal = { parcursaLa: string; reflectie: Reflectie }
export type Jurnal = Record<string, IntrareJurnal>

const CHEIE = 'oraro:jurnal-ore'

export const reflectieGoala: Reflectie = { cumAMers: '', notite: '', refolosire: '', pastrez: '', schimb: '' }

/** Cheia unei lecții, pentru o grupă anume. Patru segmente. */
export function cheieLectie(grupa: string, clasa: string, unitate: string, lectie: string) {
  return `${grupa}/${clasa}/${unitate}/${lectie}`
}

export function grupele(clasa: string): string[] {
  return grupePentruClasa(orar, clasa)
}

const CHEIE_GRUPA = 'oraro:grupa-selectata'

function citesteGrupe(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(CHEIE_GRUPA) ?? '{}') as Record<string, string>
  } catch {
    return {}
  }
}

/** Grupa la care lucrează acum, pentru o clasă. Prima din orar, dacă n-a ales. */
export function grupaSalvata(clasa: string): string {
  const alese = citesteGrupe()
  const disponibile = grupele(clasa)
  const aleasa = alese[clasa]
  return aleasa && disponibile.includes(aleasa) ? aleasa : (disponibile[0] ?? clasa)
}

/** Hook pentru grupa curentă a unei clase, ținută minte între pagini. */
export function useGrupa(clasa: string): [string, (grupa: string) => void] {
  const [grupa, setGrupa] = useState(() => grupaSalvata(clasa))

  const alege = useCallback(
    (noua: string) => {
      setGrupa(noua)
      try {
        localStorage.setItem(CHEIE_GRUPA, JSON.stringify({ ...citesteGrupe(), [clasa]: noua }))
      } catch {
        // Stocare blocată: alegerea ține până la reîncărcare.
      }
    },
    [clasa],
  )

  return [grupa, alege]
}

export function formateazaData(iso: string) {
  return new Date(iso).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })
}

/**
 * Jurnalul vechi avea trei segmente, `clasa/unitate/lectie`, fără grupă. Până
 * acum Antoanela a mers în pas la 5 A și 5 B, deci o intrare veche se copiază
 * la toate grupele clasei. Rulează o singură dată, la citire.
 */
export function migreaza(vechi: Jurnal, grupe: Record<string, string[]> = grupeDupaClasa(orar)): Jurnal {
  const nou: Jurnal = {}
  for (const [cheie, intrare] of Object.entries(vechi)) {
    const bucati = cheie.split('/')
    if (bucati.length !== 3) {
      // Deja migrată, sau o cheie pe care nu o recunoaștem: o lăsăm cum e.
      nou[cheie] = intrare
      continue
    }
    const [clasa, unitate, lectie] = bucati
    const tinte = grupe[clasa] ?? []
    if (tinte.length === 0) {
      // Clasă fără grupe în orar: păstrăm intrarea, ca să nu pierdem date.
      nou[cheie] = intrare
      continue
    }
    for (const grupa of tinte) {
      nou[cheieLectie(grupa, clasa, unitate, lectie)] = intrare
    }
  }
  return nou
}

function citeste(): Jurnal {
  try {
    return migreaza(JSON.parse(localStorage.getItem(CHEIE) ?? '{}') as Jurnal)
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
    (chei: string | string[], reflectie: Reflectie, parcursaLa?: string) =>
      scrie((j) => {
        const nou = { ...j }
        for (const cheie of [chei].flat()) {
          nou[cheie] = {
            parcursaLa: parcursaLa ?? j[cheie]?.parcursaLa ?? new Date().toISOString(),
            reflectie,
          }
        }
        return nou
      }),
    [scrie],
  )

  const sterge = useCallback(
    (chei: string | string[]) =>
      scrie((j) => {
        const rest = { ...j }
        for (const cheie of [chei].flat()) delete rest[cheie]
        return rest
      }),
    [scrie],
  )

  return { jurnal, salveaza, sterge }
}
