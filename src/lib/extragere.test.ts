import { describe, expect, it } from 'vitest'
import { clase } from '@/data/clase.js'
import { toateLectiile } from '@/lib/lectii'
import { arataRaspunsul, curent, marimiFinale, marimiGrupe, pachetGrupe, ramase, stareInitiala, trage } from '@/lib/extragere'
import type { Clase, JocExtragere, JocGrupe } from '@/types'

const joc: JocExtragere = {
  tip: 'extragere',
  titlu: 'T',
  faraRepetare: true,
  elemente: [{ text: 'a' }, { text: 'b' }, { text: 'c', raspuns: 'x' }],
  sursa: 'test',
}

describe('extragerea la sorți', () => {
  it('alege după numărul aleatoriu dat și nu arată răspunsul', () => {
    const s = trage(joc, stareInitiala(), () => 0.5)
    expect(curent(s)).toBe(1)
    expect(s.raspunsVizibil).toBe(false)
  })

  it('fără repetare, fiecare bilet iese o singură dată și la sfârșit nu mai trage', () => {
    let s = stareInitiala()
    for (let i = 0; i < 3; i++) s = trage(joc, s, () => 0)
    expect([...s.trase].sort()).toEqual([0, 1, 2])
    expect(ramase(joc, s)).toEqual([])
    expect(trage(joc, s, () => 0)).toBe(s)
  })

  it('cu repetare, biletele rămân toate disponibile', () => {
    const cub: JocExtragere = { ...joc, faraRepetare: false }
    let s = stareInitiala()
    for (let i = 0; i < 5; i++) s = trage(cub, s, () => 0.99)
    expect(s.trase).toEqual([2, 2, 2, 2, 2])
    expect(ramase(cub, s)).toEqual([0, 1, 2])
  })

  it('răspunsul se arată la cerere și dispare la următorul bilet', () => {
    let s = arataRaspunsul(trage(joc, stareInitiala(), () => 0))
    expect(s.raspunsVizibil).toBe(true)
    s = trage(joc, s, () => 0)
    expect(s.raspunsVizibil).toBe(false)
  })

  it('un aleator de 1 nu iese din listă', () => {
    expect(curent(trage(joc, stareInitiala(), () => 1))).toBe(2)
  })
})

describe('împărțirea în grupe', () => {
  const grupe: JocGrupe = {
    tip: 'grupe',
    titlu: 'G',
    etichete: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((nume) => ({ nume, culoare: '#000' })),
    maxPerGrupa: 4,
    sursa: 'test',
  }

  it('numărul de grupe iese din mărimea maximă și grupele sunt egale', () => {
    const p = pachetGrupe(grupe, 25, () => 0.3)
    expect(p.numarGrupe).toBe(7)
    expect(p.bilete).toHaveLength(25)
    const m = marimiFinale(p)
    expect(Math.max(...m)).toBeLessThanOrEqual(4)
    expect(Math.max(...m) - Math.min(...m)).toBeLessThanOrEqual(1)
    expect(m.reduce((a, b) => a + b, 0)).toBe(25)
  })

  it('o clasă mică are puține grupe, una foarte mare nu depășește culorile', () => {
    expect(pachetGrupe(grupe, 6, () => 0).numarGrupe).toBe(2)
    expect(pachetGrupe(grupe, 60, () => 0).numarGrupe).toBe(8)
  })

  it('numără elevii care au tras până acum', () => {
    const p = pachetGrupe(grupe, 8, () => 0.9)
    const m = marimiGrupe(p, 3)
    expect(m.reduce((a, b) => a + b, 0)).toBe(3)
  })
})

describe('jocurile de extragere și de grupe din date', () => {
  it('au biletele, culorile și sursa completate', () => {
    for (const { clasaId, unitateId, lectie } of toateLectiile(clase as unknown as Clase)) {
      for (const [i, etapa] of (lectie.planLectie?.desfasurare ?? []).entries()) {
        const j = etapa.joc
        const loc = `${clasaId}/${unitateId}/${lectie.id} pasul ${i + 1}`
        if (j?.tip === 'extragere') {
          expect(j.elemente.length, loc).toBeGreaterThanOrEqual(2)
          expect(j.sursa.trim(), loc).not.toBe('')
          for (const e of j.elemente) expect(e.text.trim(), loc).not.toBe('')
        }
        if (j?.tip === 'grupe') {
          expect(j.etichete.length, loc).toBeGreaterThanOrEqual(2)
          expect(j.maxPerGrupa, loc).toBeGreaterThanOrEqual(2)
          expect(j.sursa.trim(), loc).not.toBe('')
        }
      }
    }
  })
})
