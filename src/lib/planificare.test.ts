import { describe, expect, it } from 'vitest'
import { an20262027 } from '@/data/an-scolar-2026-2027'
import { genereazaSaptamani, saptamaniPentruClasa } from '@/lib/an-scolar'
import {
  intervalSaptamani,
  intervalePeModul,
  orePeSaptamana,
  planificaUnitati,
} from '@/lib/planificare'

const toate = genereazaSaptamani(an20262027)
const a5a = saptamaniPentruClasa(toate, 'clasa-5', an20262027)
const a8a = saptamaniPentruClasa(toate, 'clasa-8', an20262027)
const curs = (s: typeof toate, n: number) => s.find((x) => x.numarCurs === n)!

describe('orele dintr-o săptămână', () => {
  it('o săptămână întreagă dă orarul complet', () => {
    expect(orePeSaptamana(curs(a5a, 2), 4)).toBe(4)
  })

  it('săptămâna de două zile dă mai puțin', () => {
    expect(orePeSaptamana(curs(a5a, 15), 4)).toBe(2)
  })

  it('săptămâna de trei zile dă mai puțin', () => {
    expect(orePeSaptamana(curs(a5a, 30), 4)).toBe(2)
  })
})

describe('intervalele modulelor', () => {
  it('clasa a V-a are cele cinci module pe săptămânile publicate', () => {
    expect([...intervalePeModul(a5a).values()]).toEqual([
      'S1-S7', 'S8-S15', 'S16-S20', 'S21-S29', 'S30-S36',
    ])
  })

  it('clasa a VIII-a încheie modulul 5 mai devreme', () => {
    expect(intervalePeModul(a8a).get(5)).toBe('S30-S35')
  })
})

describe('planificarea unităților', () => {
  const unitati = [
    { titlu: 'Unitatea I', nrLectii: 24 },
    { titlu: 'Unitatea II', nrLectii: 24 },
  ]

  it('prima unitate pornește din săptămâna 1', () => {
    const plan = planificaUnitati(a5a, unitati, 4)
    expect(plan[0].saptamanaStart).toBe(1)
  })

  it('unitățile se înlănțuie, fără găuri și fără suprapuneri', () => {
    const plan = planificaUnitati(a5a, unitati, 4)
    expect(plan[1].saptamanaStart).toBeGreaterThanOrEqual(plan[0].saptamanaFinal)
  })

  it('nu depășește ultima săptămână a clasei', () => {
    const plan = planificaUnitati(a5a, unitati, 4)
    expect(plan.at(-1)!.saptamanaFinal).toBeLessThanOrEqual(36)
  })

  it('o unitate mai lungă ocupă mai multe săptămâni', () => {
    const scurt = planificaUnitati(a5a, [{ titlu: 'X', nrLectii: 4 }], 4)
    const lung = planificaUnitati(a5a, [{ titlu: 'X', nrLectii: 40 }], 4)
    expect(lung[0].saptamanaFinal).toBeGreaterThan(scurt[0].saptamanaFinal)
  })

  it('reține modulele atinse de fiecare unitate', () => {
    const plan = planificaUnitati(a5a, [{ titlu: 'X', nrLectii: 40 }], 4)
    expect(plan[0].module).toEqual([1, 2])
  })

  it('pornirea din altă săptămână mută tot planul', () => {
    const plan = planificaUnitati(a5a, unitati, 4, 10)
    expect(plan[0].saptamanaStart).toBe(10)
  })

  it('săptămânile scurte împing planificarea, nu o comprimă', () => {
    // Săptămânile 12, 15 și 30 au sub cinci zile. O unitate care le traversează
    // trebuie să ocupe mai multe săptămâni decât ar reieși dintr-o împărțire
    // simplă la patru.
    const plan = planificaUnitati(a5a, [{ titlu: 'X', nrLectii: 32 }], 4, 8)
    const simplu = 8 + 32 / 4 - 1
    expect(plan[0].saptamanaFinal).toBeGreaterThan(simplu)
  })
})

describe('formatarea intervalului', () => {
  it('scrie intervalul cu două capete', () => {
    expect(intervalSaptamani({ titlu: 'X', nrLectii: 8, saptamanaStart: 8, saptamanaFinal: 15, module: [2] }))
      .toBe('S8-S15')
  })

  it('o singură săptămână se scrie simplu', () => {
    expect(intervalSaptamani({ titlu: 'X', nrLectii: 4, saptamanaStart: 7, saptamanaFinal: 7, module: [1] }))
      .toBe('S7')
  })
})
