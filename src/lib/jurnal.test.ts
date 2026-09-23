import { describe, expect, it } from 'vitest'
import { orar } from '@/data/orar-2026-2027'
import { grupeDupaClasa, grupePentruClasa } from '@/lib/orar'
import { cheieLectie, migreaza, type Jurnal } from '@/lib/jurnal'

const grupe = grupeDupaClasa(orar)
const reflectie = { cumAMers: 'Bine', notite: 'n', refolosire: '', pastrez: '', schimb: '' }
const intrare = { parcursaLa: '2026-09-21T08:00:00.000Z', reflectie }

describe('grupele din orar', () => {
  it('clasa a V-a are două grupe', () => {
    expect(grupePentruClasa(orar, 'clasa-5')).toEqual(['5 A', '5 B'])
  })

  it('clasa a VIII-a are una singură', () => {
    expect(grupePentruClasa(orar, 'clasa-8')).toEqual(['8 B'])
  })

  it('o clasă care nu apare în orar nu are grupe', () => {
    expect(grupePentruClasa(orar, 'clasa-7')).toEqual([])
  })
})

describe('cheia lecției', () => {
  it('poartă grupa, ca 5 A și 5 B să nu se amestece', () => {
    expect(cheieLectie('5 A', 'clasa-5', 'unitatea-1', 'l3'))
      .not.toBe(cheieLectie('5 B', 'clasa-5', 'unitatea-1', 'l3'))
  })
})

describe('migrarea jurnalului vechi', () => {
  it('o lecție de clasa a V-a se copiază la ambele grupe', () => {
    const vechi: Jurnal = { 'clasa-5/unitatea-1/l3': intrare }
    const nou = migreaza(vechi, grupe)
    expect(Object.keys(nou).sort()).toEqual([
      '5 A/clasa-5/unitatea-1/l3',
      '5 B/clasa-5/unitatea-1/l3',
    ])
  })

  it('păstrează data și reflecția, nu doar bifa', () => {
    const nou = migreaza({ 'clasa-5/unitatea-1/l3': intrare }, grupe)
    expect(nou['5 A/clasa-5/unitatea-1/l3']).toEqual(intrare)
  })

  it('o lecție de clasa a VIII-a merge la singura grupă', () => {
    const nou = migreaza({ 'clasa-8/unitatea-2/l7': intrare }, grupe)
    expect(Object.keys(nou)).toEqual(['8 B/clasa-8/unitatea-2/l7'])
  })

  it('nu strică intrările deja migrate', () => {
    const deja: Jurnal = { '5 A/clasa-5/unitatea-1/l3': intrare }
    expect(migreaza(deja, grupe)).toEqual(deja)
  })

  it('rulată de două ori dă același rezultat', () => {
    const o = migreaza({ 'clasa-5/unitatea-1/l3': intrare }, grupe)
    expect(migreaza(o, grupe)).toEqual(o)
  })

  it('nu pierde intrările unei clase fără grupe în orar', () => {
    const orfan: Jurnal = { 'clasa-7/unitatea-1/l1': intrare }
    expect(migreaza(orfan, grupe)).toEqual(orfan)
  })

  it('un jurnal gol rămâne gol', () => {
    expect(migreaza({}, grupe)).toEqual({})
  })

  it('migrează mai multe lecții deodată', () => {
    const vechi: Jurnal = {
      'clasa-5/unitatea-1/l1': intrare,
      'clasa-5/unitatea-1/l2': intrare,
      'clasa-8/unitatea-1/l1': intrare,
    }
    expect(Object.keys(migreaza(vechi, grupe)).length).toBe(5)
  })
})
