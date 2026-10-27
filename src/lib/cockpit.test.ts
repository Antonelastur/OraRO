import { describe, expect, it } from 'vitest'
import type { BlocOra } from '@/lib/ora'
import {
  VALABILITATE_MS, citeste, esteNeatinsa, mutaLa, opreste, porneste,
  reseteazaPas, salveaza, secundePlanRamase, secundeRamase, stareInitiala, sterge,
} from '@/lib/cockpit'

const bloc = (index: number, minute: number): BlocOra => ({
  index, titlu: `Etapa ${index + 1}`, minute, secunde: minute * 60, elevi: '',
})
const blocuri = [bloc(0, 5), bloc(1, 10), bloc(2, 20)]
const T0 = 1_000_000_000_000

function depozitFals() {
  const date = new Map<string, string>()
  return {
    date,
    getItem: (k: string) => date.get(k) ?? null,
    setItem: (k: string, v: string) => void date.set(k, v),
    removeItem: (k: string) => void date.delete(k),
  }
}

describe('cronometrul pe ceasul real', () => {
  it('pornește cu durata primei etape, oprit', () => {
    const s = stareInitiala(blocuri, T0)
    expect(s.pas).toBe(0)
    expect(s.scadenta).toBeNull()
    expect(secundeRamase(s, T0 + 99_000)).toBe(300)
  })

  it('scade după ceas, nu după număr de tickuri', () => {
    const s = porneste(stareInitiala(blocuri, T0), T0)
    expect(secundeRamase(s, T0)).toBe(300)
    expect(secundeRamase(s, T0 + 60_000)).toBe(240)
    // Fila a stat 4 minute în fundal: următoarea citire arată timpul corect.
    expect(secundeRamase(s, T0 + 240_000)).toBe(60)
  })

  it('pauza păstrează secundele rămase, iar reluarea continuă de acolo', () => {
    const mers = porneste(stareInitiala(blocuri, T0), T0)
    const oprit = opreste(mers, T0 + 100_000)
    expect(oprit.scadenta).toBeNull()
    expect(secundeRamase(oprit, T0 + 500_000)).toBe(200)
    const reluat = porneste(oprit, T0 + 500_000)
    expect(secundeRamase(reluat, T0 + 560_000)).toBe(140)
  })

  it('după expirare numără negativ, fără -0', () => {
    const s = porneste(stareInitiala(blocuri, T0), T0)
    expect(secundeRamase(s, T0 + 300_000)).toBe(0)
    expect(Object.is(secundeRamase(s, T0 + 300_000), -0)).toBe(false)
    expect(secundeRamase(s, T0 + 345_000)).toBe(-45)
  })

  it('porneste și opreste de două ori la rând nu schimbă nimic', () => {
    const s = porneste(stareInitiala(blocuri, T0), T0)
    expect(porneste(s, T0 + 5_000)).toBe(s)
    const o = opreste(s, T0 + 5_000)
    expect(opreste(o, T0 + 9_000)).toBe(o)
  })
})

describe('navigarea între pași', () => {
  it('mută pasul, oprește cronometrul și îl reîncarcă', () => {
    const mers = porneste(stareInitiala(blocuri, T0), T0)
    const s = mutaLa(mers, 1, blocuri)
    expect(s.pas).toBe(1)
    expect(s.scadenta).toBeNull()
    expect(s.ramasPauza).toBe(600)
  })

  it('nu iese din plan, nici înainte, nici înapoi', () => {
    const s = stareInitiala(blocuri, T0)
    expect(mutaLa(s, -3, blocuri).pas).toBe(0)
    expect(mutaLa(s, 99, blocuri).pas).toBe(2)
  })

  it('resetează doar etapa curentă', () => {
    const s = opreste(porneste(mutaLa(stareInitiala(blocuri, T0), 1, blocuri), T0), T0 + 120_000)
    expect(s.ramasPauza).toBe(480)
    const r = reseteazaPas(s, blocuri)
    expect(r.pas).toBe(1)
    expect(r.ramasPauza).toBe(600)
  })
})

describe('timpul rămas din plan', () => {
  it('adună restul etapei curente cu etapele următoare', () => {
    expect(secundePlanRamase(blocuri, 0, 300)).toBe(300 + 600 + 1200)
    expect(secundePlanRamase(blocuri, 1, 240)).toBe(240 + 1200)
    expect(secundePlanRamase(blocuri, 2, 100)).toBe(100)
  })

  it('o etapă depășită nu scade din ce urmează', () => {
    expect(secundePlanRamase(blocuri, 1, -90)).toBe(1200)
  })
})

describe('păstrarea orei între reîncărcări', () => {
  it('o stare salvată se citește înapoi', () => {
    const d = depozitFals()
    const s = porneste(mutaLa(stareInitiala(blocuri, T0), 1, blocuri), T0 + 1000)
    salveaza('5 A/clasa-5/u1/l1', s, T0 + 2000, d)
    const citit = citeste('5 A/clasa-5/u1/l1', T0 + 60_000, blocuri, d)
    expect(citit).toEqual({ ...s, salvatLa: T0 + 2000 })
    // Cronometrul care mergea continuă pe ceasul real și după reîncărcare.
    expect(secundeRamase(citit!, T0 + 61_000)).toBe(600 - 60)
  })

  it('grupele diferite nu se amestecă', () => {
    const d = depozitFals()
    salveaza('5 A/c/u/l', stareInitiala(blocuri, T0), T0, d)
    expect(citeste('5 B/c/u/l', T0, blocuri, d)).toBeNull()
  })

  it('o oră veche de peste șase ore nu se mai reia', () => {
    const d = depozitFals()
    salveaza('k', mutaLa(stareInitiala(blocuri, T0), 1, blocuri), T0, d)
    expect(citeste('k', T0 + VALABILITATE_MS - 1, blocuri, d)).not.toBeNull()
    expect(citeste('k', T0 + VALABILITATE_MS + 1, blocuri, d)).toBeNull()
  })

  it('ignoră datele stricate sau care nu mai se potrivesc cu planul', () => {
    const d = depozitFals()
    d.date.set('oraro:cockpit:a', '{nu e json')
    d.date.set('oraro:cockpit:b', JSON.stringify({ pas: 7, ramasPauza: 1, scadenta: null, salvatLa: T0 }))
    d.date.set('oraro:cockpit:c', JSON.stringify({ pas: 0, ramasPauza: 'x', scadenta: null, salvatLa: T0 }))
    d.date.set('oraro:cockpit:d', 'null')
    for (const k of ['a', 'b', 'c', 'd', 'lipsa']) expect(citeste(k, T0, blocuri, d)).toBeNull()
  })

  it('șterge starea', () => {
    const d = depozitFals()
    salveaza('k', stareInitiala(blocuri, T0), T0, d)
    sterge('k', d)
    expect(citeste('k', T0, blocuri, d)).toBeNull()
  })

  it('fără stocare disponibilă nu aruncă', () => {
    expect(citeste('k', T0, blocuri, undefined)).toBeNull()
    expect(() => salveaza('k', stareInitiala(blocuri, T0), T0, undefined)).not.toThrow()
    expect(() => sterge('k', undefined)).not.toThrow()
  })

  it('recunoaște o oră neatinsă', () => {
    const s = stareInitiala(blocuri, T0)
    expect(esteNeatinsa(s, blocuri)).toBe(true)
    expect(esteNeatinsa(mutaLa(s, 1, blocuri), blocuri)).toBe(false)
    expect(esteNeatinsa(porneste(s, T0), blocuri)).toBe(false)
  })
})
