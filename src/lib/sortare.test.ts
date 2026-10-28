import { describe, expect, it } from 'vitest'
import { clase } from '@/data/clase.js'
import { toateLectiile } from '@/lib/lectii'
import { aseaza, neasezate, rezultat, scoate, stareInitiala, verifica } from '@/lib/sortare'
import type { Clase, JocSortare } from '@/types'

const joc: JocSortare = {
  tip: 'sortare',
  titlu: 'T',
  categorii: [
    { id: 'a', nume: 'A', culoare: '#f00' },
    { id: 'b', nume: 'B', culoare: '#0f0' },
  ],
  elemente: [
    { text: 'x', categorie: 'a' },
    { text: 'y', categorie: 'b' },
    { text: 'z', categorie: 'b' },
  ],
  sursa: 'test',
}

describe('jocul de sortare', () => {
  it('începe fără nimic așezat și nu e verificat', () => {
    const s = stareInitiala()
    expect(s.verificat).toBe(false)
    expect(neasezate(joc, s)).toEqual([0, 1, 2])
  })

  it('așază, scoate și mută un cuvânt', () => {
    let s = aseaza(stareInitiala(), 0, 'a')
    expect(s.asezat).toEqual({ 0: 'a' })
    s = aseaza(s, 0, 'b')
    expect(s.asezat).toEqual({ 0: 'b' })
    s = scoate(s, 0)
    expect(s.asezat).toEqual({})
  })

  it('verificarea numără corecte, greșite și neașezate', () => {
    let s = aseaza(stareInitiala(), 0, 'a')
    s = aseaza(s, 1, 'a')
    s = verifica(s)
    expect(rezultat(joc, s)).toEqual({ corecte: 1, total: 3, gresite: [1], neasezate: [2] })
  })

  it('o mutare după verificare șterge semnele de corect și greșit', () => {
    const s = aseaza(verifica(aseaza(stareInitiala(), 0, 'a')), 1, 'b')
    expect(s.verificat).toBe(false)
  })
})

describe('jocurile de sortare din date', () => {
  it('au categorii și elemente valide, cu sursă', () => {
    let gasite = 0
    for (const { clasaId, unitateId, lectie } of toateLectiile(clase as unknown as Clase)) {
      for (const [i, etapa] of (lectie.planLectie?.desfasurare ?? []).entries()) {
        const j = etapa.joc
        if (j?.tip !== 'sortare') continue
        gasite++
        const loc = `${clasaId}/${unitateId}/${lectie.id} pasul ${i + 1}`
        const ids = j.categorii.map((c) => c.id)
        expect(j.categorii.length, loc).toBeGreaterThanOrEqual(2)
        expect(new Set(ids).size, loc).toBe(ids.length)
        expect(j.sursa.trim(), loc).not.toBe('')
        for (const e of j.elemente) expect(ids, `${loc}: ${e.text}`).toContain(e.categorie)
        for (const id of ids) expect(j.elemente.some((e) => e.categorie === id), `${loc}: categoria ${id} goală`).toBe(true)
      }
    }
    expect(gasite).toBeGreaterThan(0)
  })
})
