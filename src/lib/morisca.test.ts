import { describe, expect, it } from 'vitest'
import { unghiNou, urmatorulVerb } from '@/lib/morisca'
import { clase } from '@/data/clase.js'
import { toateLectiile } from '@/lib/lectii'
import type { Clase, JocMorisca } from '@/types'

const joc: JocMorisca = {
  tip: 'morisca',
  titlu: 't',
  centru: 'trecutul',
  padele: [
    { timp: 'a', culoare: '#111' },
    { timp: 'b', culoare: '#222' },
  ],
  verbe: [
    { infinitiv: 'a alerga', forme: ['alergam', 'am alergat'] },
    { infinitiv: 'a cânta', forme: ['cântam', 'am cântat'] },
    { infinitiv: 'a citi', forme: ['citeam', 'am citit'] },
  ],
  sursa: 's',
}

describe('morisca', () => {
  it('nu repetă un verb în aceeași rundă', () => {
    const iesite: number[] = []
    for (let i = 0; i < 3; i++) iesite.push(urmatorulVerb(joc, iesite, () => 0))
    expect([...iesite].sort()).toEqual([0, 1, 2])
  })

  it('începe o rundă nouă după ce au ieșit toate, fără să repete ultimul verb', () => {
    const iesite = [0, 1, 2]
    const urmator = urmatorulVerb(joc, iesite, () => 0)
    expect(urmator).not.toBe(2)
    expect(urmator).toBeGreaterThanOrEqual(0)
    expect(urmator).toBeLessThan(3)
  })

  it('cu un singur verb îl întoarce mereu', () => {
    const unul = { ...joc, verbe: [joc.verbe[0]] }
    expect(urmatorulVerb(unul, [0, 0], () => 0.9)).toBe(0)
  })

  it('se învârte un număr întreg de ture', () => {
    for (const r of [0, 0.5, 0.99]) expect(unghiNou(0, () => r) % 360).toBe(0)
    expect(unghiNou(720, () => 0)).toBeGreaterThan(720)
  })

  it('datele reale au câte o formă pe fiecare paletă, fără forme goale, și sursa marcată', () => {
    let gasite = 0
    for (const { clasaId, unitateId, lectie } of toateLectiile(clase as unknown as Clase)) {
      for (const [i, etapa] of (lectie.planLectie?.desfasurare ?? []).entries()) {
        const j = etapa.joc
        if (j?.tip !== 'morisca') continue
        gasite++
        const loc = `${clasaId}/${unitateId}/${lectie.id} pasul ${i + 1}`
        expect(j.padele.length, loc).toBe(4)
        expect(j.verbe.length, loc).toBeGreaterThan(1)
        expect(j.sursa.trim(), loc).not.toBe('')
        for (const v of j.verbe) {
          expect(v.forme.length, loc).toBe(j.padele.length)
          for (const f of v.forme) expect(f.trim(), loc).not.toBe('')
          expect(new Set(v.forme).size, loc).toBe(v.forme.length)
        }
      }
    }
    expect(gasite).toBeGreaterThan(0)
  })
})
