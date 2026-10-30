import { existsSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { clase } from '@/data/clase.js'
import { toateLectiile } from '@/lib/lectii'
import { blocuriOra } from '@/lib/ora'
import { MATERIALE_ELEVI, areMaterialePePasi, etapaTemei, materialeElevi, materialePas, temaAcasa } from '@/lib/elevi'
import type { Clase, Lectie } from '@/types'

const lectie = (desfasurare: { etapa: string; timp: string; activitate: string; elevi?: string }[], materiale = {}): Lectie =>
  ({
    id: 'l', titlu: 'T', obiective: [], sursaManual: '', rezolvareGhid: null,
    planLectie: { titlu: 'T', data: null, tipOra: '', durata: 50, obiective: [], resurse: [], desfasurare, evaluare: '' },
    materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [], ...materiale },
  }) as Lectie

describe('tema pentru acasă', () => {
  const l = lectie([
    { etapa: 'Aplicații', timp: '5 min', activitate: '– Ex. 1 la tablă.' },
    { etapa: 'Temă', timp: '5 min', activitate: '– Tema: „Aplicații”, ex. 2 și 5; fișa de exerciții, pagina 2.\n– Verific caietele mâine.' },
  ])

  it('ia doar linia „Tema:”, fără prefix, și nu duce cu ea vocea profesorului', () => {
    expect(temaAcasa(l)).toEqual(['„Aplicații”, ex. 2 și 5; fișa de exerciții, pagina 2.'])
  })

  it('începe cu majusculă', () => {
    expect(temaAcasa(lectie([{ etapa: 'Temă', timp: '3 min', activitate: '– Tema: recitirea fragmentului.' }]))).toEqual([
      'Recitirea fragmentului.',
    ])
  })

  it('arată etapa în care se dă tema', () => {
    expect(etapaTemei(l)).toBe(1)
  })

  it('fără temă în plan nu inventează una', () => {
    const fara = lectie([{ etapa: 'Evaluare', timp: '45 min', activitate: '– Elevii rezolvă testul.' }])
    expect(temaAcasa(fara)).toEqual([])
    expect(etapaTemei(fara)).toBe(-1)
    expect(temaAcasa({ ...fara, planLectie: null })).toEqual([])
  })
})

describe('materialele elevilor', () => {
  it('nu includ testul, cu linkul lui privat', () => {
    expect(MATERIALE_ELEVI).not.toContain('test')
    const l = lectie([], { test: { linkDocument: 'https://docs.google.com/x' }, joc: { titlu: 'J', fisier: 'j.pdf' } })
    expect(materialeElevi(l)).toEqual(['joc'])
  })
})

describe('etapa pentru elevi', () => {
  it('textul pentru elevi vine din câmpul lor, nu din instrucțiunile profesorului', () => {
    const l = lectie([
      { etapa: 'Captarea atenției', timp: '5 min', activitate: '– Descriu eu o casă.', elevi: ' Ascultați și desenați casa. ' },
      { etapa: 'Lectura', timp: '5 min', activitate: '– Citesc cu voce tare.' },
    ])
    const blocuri = blocuriOra(l)
    expect(blocuri[0].elevi).toBe('Ascultați și desenați casa.')
    expect(blocuri[1].elevi).toBe('')
    expect(JSON.stringify(blocuri)).not.toContain('Descriu eu')
  })
})

describe('pe datele reale', () => {
  const toate = toateLectiile(clase as unknown as Clase)

  it('aproape fiecare lecție cu plan are tema scoasă din plan', () => {
    const cuPlan = toate.filter((x) => x.lectie.planLectie?.desfasurare?.length)
    const cuTema = cuPlan.filter((x) => temaAcasa(x.lectie).length > 0)
    expect(cuPlan.length).toBeGreaterThan(400)
    expect(cuTema.length).toBeGreaterThan(cuPlan.length * 0.9)
  })

  it('nicio temă nu începe cu liniuță sau cu „Tema:”', () => {
    for (const { lectie: l } of toate) {
      for (const linie of temaAcasa(l)) expect(linie).toMatch(/^[^\s–:-]/)
    }
  })
})

describe('materialele la pasul în care se folosesc', () => {
  const materiale = { fisa: { exercitii: '/f.pdf' }, schema: { fisier: '/s.svg' } }
  const l = lectie(
    [
      { etapa: 'Notițe', timp: '5 min', activitate: '–', materiale: ['schema'] },
      { etapa: 'Fișa', timp: '15 min', activitate: '–', materiale: ['fisa', 'joc'] },
      { etapa: 'Temă', timp: '5 min', activitate: '–' },
    ],
    materiale,
  )

  it('lecția cu materiale legate de pași se recunoaște', () => {
    expect(areMaterialePePasi(l)).toBe(true)
    expect(areMaterialePePasi(lectie([{ etapa: 'A', timp: '5 min', activitate: '–' }], materiale))).toBe(false)
  })

  it('un pas arată doar materialele pe care lecția le are', () => {
    expect(materialePas(l, 0)).toEqual(['schema'])
    expect(materialePas(l, 1)).toEqual(['fisa'])
    expect(materialePas(l, 2)).toEqual([])
  })

  it('blocul orei duce materialele pasului', () => {
    expect(blocuriOra(l).map((b) => b.materiale)).toEqual([['schema'], ['fisa', 'joc'], []])
  })

  it('pe datele reale, fiecare material legat de un pas există în lecție', () => {
    for (const { clasaId, unitateId, lectie: x } of toateLectiile(clase as unknown as Clase)) {
      (x.planLectie?.desfasurare ?? []).forEach((etapa, i) => {
        for (const tip of etapa.materiale ?? []) {
          expect(MATERIALE_ELEVI, `${clasaId}/${unitateId}/${x.id} pasul ${i + 1}`).toContain(tip)
          expect(Boolean(x.materiale[tip]), `${clasaId}/${unitateId}/${x.id} pasul ${i + 1}: ${tip}`).toBe(true)
        }
      })
    }
  })
})

describe('videoclipurile din lecții', () => {
  it('un link care începe cu „/” trimite la un fișier care există în public', () => {
    for (const { clasaId, unitateId, lectie: x } of toateLectiile(clase as unknown as Clase)) {
      const link = x.materiale.video?.link
      if (link?.startsWith('/')) expect(existsSync(`public${link}`), `${clasaId}/${unitateId}/${x.id}: ${link}`).toBe(true)
    }
  })
})

describe('textele pentru elevi, pe datele reale', () => {
  const toate = toateLectiile(clase as unknown as Clase)

  it('nu conțin linii de pauză lungi, „&”, „versus” sau vocea profesorului la persoana I', () => {
    for (const { clasaId, unitateId, lectie: x } of toate) {
      for (const etapa of x.planLectie?.desfasurare ?? []) {
        if (!etapa.elevi) continue
        const loc = `${clasaId}/${unitateId}/${x.id}: ${etapa.etapa}`
        expect(etapa.elevi, loc).not.toMatch(/—|&|\bversus\b|\bvs\b/i)
        expect(etapa.elevi, loc).not.toMatch(/\b(distribui|împart|explic eu|trec printre|notez pe tablă|circul)\b/i)
      }
    }
  })
})
