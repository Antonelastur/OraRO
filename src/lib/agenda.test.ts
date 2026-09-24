import { describe, expect, it } from 'vitest'
import { clase } from '@/data/clase.js'
import { dataLunga, dataPentruAncora, numeZiDinData, sloturi, stareaZilei, ziCuOre } from '@/lib/agenda'
import { decalajAncorei, lectiileClasei, programeaza, sloturiGrupei } from '@/lib/program'
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

describe('reperul pus din pagina lecției', () => {
  it('pornește de la prima oră a grupei care nu a trecut încă', () => {
    // Luni, 28 septembrie, la 10:30: ora de 8 B de la 10:10 e în desfășurare,
    // deci reperul se mută pe ora următoare, cea de marți dimineață.
    expect(dataPentruAncora(program, '8 B', { data: '2026-09-28', hhmm: '10:30' })).toBe('2026-09-29')
  })

  it('rămâne azi dacă ora grupei e mai târziu în aceeași zi', () => {
    expect(dataPentruAncora(program, '8 B', { data: '2026-09-28', hhmm: '07:00' })).toBe('2026-09-28')
  })

  it('sare peste zilele în care grupa nu are ore', () => {
    // Joi are numai latină, deci pentru 5 A următoarea oră e vineri.
    expect(dataPentruAncora(program, '5 A', { data: '2026-09-24', hhmm: '15:30' })).toBe('2026-09-25')
  })

  it('după ultima oră a grupei nu mai are unde să pornească', () => {
    expect(dataPentruAncora(program, '8 B', { data: '2027-06-12', hhmm: '08:00' })).toBeNull()
  })

  it('reperul pus așa mută efectiv planul grupei', () => {
    const acum = { data: '2026-09-24', hhmm: '15:30' }
    const data = dataPentruAncora(program, '8 B', acum)!
    const ancora = { data, unitateId: 'unitatea-1', lectieId: 'lectia-2' }
    const decalaj = decalajAncorei(sloturiGrupei(sloturi, '8 B'), lectiileClasei(clase as unknown as Clase, 'clasa-8'), ancora)
    expect(decalaj).toBeGreaterThan(0)

    const mutat = programeaza(sloturi, clase as unknown as Clase, { ancore: { '8 B': ancora } })
    const prima = mutat.find((o) => o.clasa === '8 B' && o.data >= data && o.lectie)!
    expect(prima.lectie!.unitateId).toBe('unitatea-1')
    expect(prima.lectie!.lectieId).toBe('lectia-2')
  })

  it('reperul unei grupe nu atinge celelalte clase', () => {
    const ancora = { data: '2026-09-25', unitateId: 'unitatea-1', lectieId: 'lectia-2' }
    const mutat = programeaza(sloturi, clase as unknown as Clase, { ancore: { '8 B': ancora } })
    const laA = (p: typeof program) => p.find((o) => o.clasa === '5 A' && o.data === '2026-09-25')!.lectie!.lectieId
    expect(laA(mutat)).toBe(laA(program))
  })
})
