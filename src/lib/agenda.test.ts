import { describe, expect, it } from 'vitest'
import { clase } from '@/data/clase.js'
import { dataLunga, numeZiDinData, sloturi, stareaZilei, ziCuOre } from '@/lib/agenda'
import { programeaza } from '@/lib/program'
import type { Clase } from '@/types'

const program = programeaza(sloturi, clase as unknown as Clase)

describe('starea unei zile', () => {
  it('o zi de curs vine cu orele ei și cu săptămâna', () => {
    const stare = stareaZilei(program, '2026-09-28')
    expect(stare.fel).toBe('curs')
    if (stare.fel !== 'curs') return
    expect(stare.ore.length).toBe(3)
    expect(stare.saptamana.numarCurs).toBe(4)
    expect(stare.saptamana.modulId).toBe(1)
  })

  it.each([
    ['2026-09-12', 'Weekend'],
    ['2026-10-05', 'Ziua Internațională a Educației'],
    ['2026-12-01', 'Ziua Națională a României'],
    ['2026-12-28', 'Vacanța de iarnă'],
    ['2026-10-21', 'Săptămâna Verde'],
    ['2026-12-16', 'Școala altfel'],
  ])('ziua %s e liberă și spune de ce: %s', (data, motiv) => {
    const stare = stareaZilei(program, data)
    expect(stare.fel).toBe('liber')
    if (stare.fel !== 'liber') return
    expect(stare.motiv).toBe(motiv)
  })

  it('o dată din afara anului școlar se spune pe nume', () => {
    const stare = stareaZilei(program, '2025-03-04')
    expect(stare.fel).toBe('liber')
    if (stare.fel !== 'liber') return
    expect(stare.motiv).toBe('În afara anului școlar')
  })
})

describe('navigarea între zile', () => {
  it('sare peste weekend', () => {
    expect(ziCuOre(program, '2026-09-11', 1)).toBe('2026-09-14')
    expect(ziCuOre(program, '2026-09-14', -1)).toBe('2026-09-11')
  })

  it('sare peste vacanță și peste Săptămâna Verde', () => {
    expect(ziCuOre(program, '2026-10-16', 1)).toBe('2026-11-02')
  })

  it('după ultima zi de curs nu mai urmează nimic', () => {
    expect(ziCuOre(program, '2027-06-18', 1)).toBeNull()
  })
})

describe('datele scrise în română', () => {
  it('numește ziua săptămânii', () => {
    expect(numeZiDinData('2026-09-07')).toBe('luni')
    expect(numeZiDinData('2026-09-13')).toBe('duminică')
  })

  it('scrie data întreagă, cu diacritice', () => {
    expect(dataLunga('2026-09-07')).toBe('7 septembrie 2026')
    expect(dataLunga('2027-02-22')).toBe('22 februarie 2027')
  })
})
