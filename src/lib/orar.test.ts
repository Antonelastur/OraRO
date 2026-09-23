import { describe, expect, it } from 'vitest'
import { intervale, orar } from '@/data/orar-2026-2027'
import {
  areContinutOraRO,
  numeZi,
  oraLaMoment,
  orePe,
  orePeClasaSiDisciplina,
  oreleZilei,
  urmatoareaOra,
} from '@/lib/orar'

describe('încărcătura săptămânală', () => {
  it('are 20 de ore pe săptămână', () => {
    expect(orar.length).toBe(20)
  })

  it.each([[1, 3], [2, 6], [3, 3], [4, 2], [5, 6]])(
    'ziua %i are %i ore', (zi, cate) => {
      expect(oreleZilei(orar, zi).length).toBe(cate)
    },
  )

  it('la 8 B are doar română și educație socială', () => {
    const optB = orar.filter((o) => o.clasa === '8 B')
    expect([...new Set(optB.map((o) => o.disciplina))].sort()).toEqual(['educatie-sociala', 'romana'])
  })

  it('fiecare clasă de română are exact 4 ore', () => {
    for (const clasa of ['5 A', '5 B', '8 B']) {
      expect(orePeClasaSiDisciplina(orar, clasa, 'romana').length).toBe(4)
    }
  })

  it('orele se împart pe discipline cum a dat școala', () => {
    expect([...orePe(orar, (o) => o.disciplina).entries()].sort()).toEqual([
      ['educatie-sociala', 4],
      ['latina', 2],
      ['romana', 12],
      ['spaniola', 1],
      ['storytelling', 1],
    ])
  })

  it('predă la cinci clase', () => {
    expect([...orePe(orar, (o) => o.clasa).keys()].sort()).toEqual(['5 A', '5 B', '7 A', '7 B', '8 B'])
  })
})

describe('orele fără conținut OraRO', () => {
  it('doar româna are lecții în spate', () => {
    const cu = orar.filter(areContinutOraRO)
    expect(cu.length).toBe(12)
    expect(cu.every((o) => o.disciplina === 'romana')).toBe(true)
  })

  it('opt ore ocupă slotul fără lecție', () => {
    expect(orar.filter((o) => !areContinutOraRO(o)).length).toBe(8)
  })

  it('clasele a V-a trimit către aceeași sursă de lecții', () => {
    const cinci = orar.filter((o) => o.clasa.startsWith('5') && o.disciplina === 'romana')
    expect(cinci.every((o) => o.clasaOraRO === 'clasa-5')).toBe(true)
  })

  it('latina și educația socială nu trimit nicăieri', () => {
    const fara = orar.filter((o) => o.disciplina === 'latina' || o.disciplina === 'educatie-sociala')
    expect(fara.every((o) => o.clasaOraRO === null)).toBe(true)
  })
})

describe('intervalele orare', () => {
  it('ziua începe la 8:00 și se închide la 14:00', () => {
    expect(intervale[0].start).toBe('08:00')
    expect(intervale.at(-1)!.final).toBe('14:00')
  })

  it('pauza mare ține de la 9:50 la 10:10', () => {
    expect(intervale[1].final).toBe('09:50')
    expect(intervale[2].start).toBe('10:10')
  })

  it('fiecare oră are 50 de minute', () => {
    const minute = (s: string) => Number(s.slice(0, 2)) * 60 + Number(s.slice(3))
    expect(intervale.every((i) => minute(i.final) - minute(i.start) === 50)).toBe(true)
  })
})

describe('ora de la un moment dat', () => {
  it.each([['08:30', 1], ['09:45', 2], ['10:15', 3], ['13:59', 6]])(
    'la %s se desfășoară ora %i', (moment, ora) => {
      expect(oraLaMoment(intervale, moment)?.ora).toBe(ora)
    },
  )

  it.each(['07:30', '09:55', '14:00', '16:00'])('la %s nu se ține oră', (moment) => {
    expect(oraLaMoment(intervale, moment)).toBeNull()
  })

  it('în pauza mare urmează ora a treia', () => {
    expect(urmatoareaOra(intervale, '10:00')?.ora).toBe(3)
  })

  it('după ultima oră nu mai urmează nimic', () => {
    expect(urmatoareaOra(intervale, '14:00')).toBeNull()
  })
})

describe('zilele', () => {
  it('numerele se traduc în nume', () => {
    expect([1, 3, 5].map(numeZi)).toEqual(['luni', 'miercuri', 'vineri'])
  })

  it('joi nu are nicio oră de română', () => {
    expect(oreleZilei(orar, 4).some((o) => o.disciplina === 'romana')).toBe(false)
  })
})
