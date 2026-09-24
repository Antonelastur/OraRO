import { describe, expect, it } from 'vitest'
import { an20262027 } from '@/data/an-scolar-2026-2027'
import { intervale, orar } from '@/data/orar-2026-2027'
import { genereazaSaptamani } from '@/lib/an-scolar'
import { cheieLectie } from '@/lib/jurnal'
import {
  asazaLectii,
  cheieReferinta,
  decalajAncorei,
  finalPeGrupa,
  genereazaSloturi,
  idSlot,
  lectiiNeasezate,
  lectiileClasei,
  oraDeAcum,
  oraDeAzi,
  oraUrmatoare,
  programeaza,
  programulZilei,
  sloturiDinZi,
  sloturiGrupei,
} from '@/lib/program'
import type { Clase } from '@/types'

const saptamani = genereazaSaptamani(an20262027)
const final = finalPeGrupa(an20262027, orar)
const sloturi = genereazaSloturi(saptamani, orar, intervale, final)

// Două clase de probă, cu lecții numărate, ca verificările să nu depindă de
// conținutul real din src/data/, care se schimbă de la o unitate la alta.
function claseDeProba(nrLectii: number): Clase {
  return {
    'clasa-5': {
      titlu: 'Clasa a V-a',
      unitati: [
        {
          id: 'unitatea-1',
          titlu: 'Unitatea I',
          lectii: Array.from({ length: nrLectii }, (_, i) => ({
            id: `l${i + 1}`,
            titlu: `Lecția ${i + 1}`,
            obiective: [],
            sursaManual: '',
            rezolvareGhid: null,
            planLectie: null,
            materiale: {
              prezentare: null, video: null, test: null, fisa: null,
              joc: null, infografic: null, schema: null, altele: [],
            },
          })),
        },
      ],
    },
  }
}

describe('sloturile anului', () => {
  it('prima zi de curs e luni, 7 septembrie 2026, cu cele trei ore de luni', () => {
    const prima = sloturiDinZi(sloturi, '2026-09-07')
    expect(prima.map((s) => s.clasa)).toEqual(['5 A', '5 B', '8 B'])
    expect(prima.map((s) => s.ora)).toEqual([1, 2, 3])
  })

  it('id-ul e data și ora', () => {
    expect(sloturi[0].id).toBe(idSlot('2026-09-07', 1))
  })

  it('poartă intervalul orar din orarul școlii', () => {
    const aTreia = sloturi.find((s) => s.ora === 3)!
    expect([aTreia.start, aTreia.final]).toEqual(['10:10', '11:00'])
  })

  it('nu generează nimic în vacanțe, în zile libere sau în weekend', () => {
    const inVacanta = ['2026-12-28', '2026-12-25', '2026-10-05', '2026-09-12', '2026-11-30']
    for (const data of inVacanta) expect(sloturiDinZi(sloturi, data)).toEqual([])
  })

  it('nu generează nimic în Săptămâna Verde și în Școala altfel', () => {
    expect(sloturiDinZi(sloturi, '2026-10-21')).toEqual([])
    expect(sloturiDinZi(sloturi, '2026-12-16')).toEqual([])
  })

  it('e în ordine cronologică', () => {
    const chei = sloturi.map((s) => `${s.data}/${String(s.ora).padStart(2, '0')}`)
    expect([...chei].sort()).toEqual(chei)
  })

  it('păstrează orele fără conținut OraRO, ca ziua să arate întreagă', () => {
    const joi = sloturiDinZi(sloturi, '2026-09-10')
    expect(joi.length).toBe(2)
    expect(joi.every((s) => s.clasaOraRO === null)).toBe(true)
    expect(joi.every((s) => s.disciplina === 'latina')).toBe(true)
  })

  it('o săptămână întreagă de curs are 20 de ore', () => {
    const aDoua = sloturi.filter((s) => s.data >= '2026-09-14' && s.data <= '2026-09-18')
    expect(aDoua.length).toBe(20)
  })
})

describe('finalul pe grupă', () => {
  it('8 B se oprește pe 11 iunie 2027, restul merg până pe 18', () => {
    expect(final).toEqual({ '8 B': '2027-06-11' })
    const ultimele = sloturi.filter((s) => s.data > '2027-06-11')
    expect(ultimele.length).toBeGreaterThan(0)
    expect(ultimele.some((s) => s.clasa === '8 B')).toBe(false)
  })

  it('oprește și educația socială de la 8 B, nu doar româna', () => {
    const dupa = sloturi.filter((s) => s.clasa === '8 B' && s.data > '2027-06-11')
    expect(dupa).toEqual([])
  })
})

describe('așezarea lecțiilor', () => {
  const aleiA = sloturiGrupei(sloturi, '5 A')
  const lectii = lectiileClasei(claseDeProba(5), 'clasa-5')

  it('grupa primește numai orele ei, cele cu conținut', () => {
    expect(aleiA.every((s) => s.clasa === '5 A' && s.clasaOraRO === 'clasa-5')).toBe(true)
  })

  it('fără ancoră, prima lecție cade pe prima oră', () => {
    const asezare = asazaLectii(aleiA, lectii)
    expect(asezare.get(aleiA[0].id)?.lectieId).toBe('l1')
    expect(asezare.get(aleiA[4].id)?.lectieId).toBe('l5')
  })

  it('ancora mută tot planul, înainte și înapoi', () => {
    const data = aleiA[10].data
    const asezare = asazaLectii(aleiA, lectii, { data, unitateId: 'unitatea-1', lectieId: 'l1' })
    const primaDinZi = aleiA.find((s) => s.data === data)!
    expect(asezare.get(primaDinZi.id)?.lectieId).toBe('l1')
    expect(asezare.get(aleiA[0].id)).toBeUndefined()
  })

  it('o ancoră cu o lecție care nu există lasă planul neatins, dar se vede', () => {
    const ancora = { data: aleiA[10].data, unitateId: 'unitatea-1', lectieId: 'inexistenta' }
    expect(decalajAncorei(aleiA, lectii, ancora)).toBeNull()
    expect(asazaLectii(aleiA, lectii, ancora).get(aleiA[0].id)?.lectieId).toBe('l1')
  })

  it('o ancoră de după ultima oră a grupei nu prinde', () => {
    expect(decalajAncorei(aleiA, lectii, { data: '2027-08-01', unitateId: 'unitatea-1', lectieId: 'l1' })).toBeNull()
  })

  it('decalajul e numărul de ore cu care s-a mutat planul', () => {
    expect(decalajAncorei(aleiA, lectii, { data: aleiA[0].data, unitateId: 'unitatea-1', lectieId: 'l1' })).toBe(0)
    const ancora = { data: aleiA[7].data, unitateId: 'unitatea-1', lectieId: 'l1' }
    const mutat = decalajAncorei(aleiA, lectii, ancora)!
    expect(aleiA[mutat].data).toBe(aleiA[7].data)
  })

  it('lecțiile care nu mai încap în an se raportează', () => {
    const prea = claseDeProba(1000)
    const rest = lectiiNeasezate(sloturi, prea, '5 A')
    expect(rest.length).toBe(1000 - sloturiGrupei(sloturi, '5 A').length)
  })

  it('o ancoră din altă unitate nu prinde, deși id-ul de lecție se repetă', () => {
    expect(decalajAncorei(aleiA, lectii, { data: aleiA[5].data, unitateId: 'unitatea-9', lectieId: 'l1' })).toBeNull()
  })

  it('cheia unei lecții include unitatea, pentru că id-urile se reiau', () => {
    expect(cheieReferinta({ unitateId: 'unitatea-2', lectieId: 'lectia-1' })).toBe('unitatea-2/lectia-1')
  })

  it('un plan care încape nu lasă nimic pe dinafară', () => {
    expect(lectiiNeasezate(sloturi, claseDeProba(5), '5 A')).toEqual([])
  })
})

describe('programul și statutul orelor', () => {
  const clase = claseDeProba(5)

  it('orele fără conținut OraRO rămân fără lecție, dar în program', () => {
    const program = programeaza(sloturi, clase)
    const latina = program.find((o) => o.disciplina === 'latina')!
    expect(latina.lectie).toBeNull()
    expect(latina.statut).toBe('programata')
  })

  it('5 A și 5 B primesc aceleași lecții, fiecare pe orele ei', () => {
    const program = programeaza(sloturi, clase)
    const primaLaA = program.find((o) => o.clasa === '5 A' && o.lectie)!
    const primaLaB = program.find((o) => o.clasa === '5 B' && o.lectie)!
    expect(primaLaA.lectie!.lectieId).toBe('l1')
    expect(primaLaB.lectie!.lectieId).toBe('l1')
    expect(primaLaA.id).not.toBe(primaLaB.id)
  })

  it('lecția trecută în jurnal apare ca parcursă, doar la grupa ei', () => {
    const jurnal = {
      [cheieLectie('5 A', 'clasa-5', 'unitatea-1', 'l1')]: {
        parcursaLa: '2026-09-07T09:00:00.000Z',
        reflectie: { cumAMers: 'Bine', notite: '', refolosire: '', pastrez: '', schimb: '' },
      },
    }
    const program = programeaza(sloturi, clase, { jurnal })
    const laA = program.find((o) => o.clasa === '5 A' && o.lectie?.lectieId === 'l1')!
    const laB = program.find((o) => o.clasa === '5 B' && o.lectie?.lectieId === 'l1')!
    expect(laA.statut).toBe('parcursa')
    expect(laB.statut).toBe('programata')
  })

  it('ora din timpul căreia ne uităm e în desfășurare', () => {
    const program = programeaza(sloturi, clase, { acum: { data: '2026-09-07', hhmm: '08:20' } })
    const acum = program.filter((o) => o.statut === 'in_desfasurare')
    expect(acum.length).toBe(1)
    expect(acum[0].clasa).toBe('5 A')
  })

  it('în pauză nu e nimic în desfășurare', () => {
    const program = programeaza(sloturi, clase, { acum: { data: '2026-09-07', hhmm: '08:55' } })
    expect(program.some((o) => o.statut === 'in_desfasurare')).toBe(false)
  })

  it('ora rămasă fără lecție din cauza decalajului se vede ca reprogramată', () => {
    const aleiA = sloturiGrupei(sloturi, '5 A')
    const ancore = { '5 A': { data: aleiA[3].data, unitateId: 'unitatea-1', lectieId: 'l1' } }
    const program = programeaza(sloturi, clase, { ancore })
    const goale = program.filter((o) => o.statut === 'reprogramata')
    expect(goale.length).toBeGreaterThan(0)
    expect(goale.every((o) => o.clasa === '5 A' && o.lectie === null)).toBe(true)
  })

  it('fără decalaj nu există ore reprogramate', () => {
    const program = programeaza(sloturi, clase)
    expect(program.some((o) => o.statut === 'reprogramata')).toBe(false)
  })
})

describe('săptămânile speciale', () => {
  const clase = claseDeProba(200)

  it('nu apar deloc în program: Antoanela nu e dirigintă, deci nu are ore', () => {
    const program = programeaza(sloturi, clase)
    const inVerde = program.filter((o) => o.data >= '2026-10-19' && o.data <= '2026-10-23')
    expect(inVerde).toEqual([])
  })

  it('lecția de după Săptămâna Verde e următoarea la rând, nu una sărită', () => {
    const program = programeaza(sloturi, clase)
    const aleiA = program.filter((o) => o.clasa === '5 A' && o.lectie)
    const inainte = aleiA.filter((o) => o.data < '2026-10-19').at(-1)!
    const dupa = aleiA.find((o) => o.data > '2026-10-23')!
    const numar = (id: string) => Number(id.replace('l', ''))
    expect(numar(dupa.lectie!.lectieId)).toBe(numar(inainte.lectie!.lectieId) + 1)
  })
})

describe('ora de azi', () => {
  const program = programeaza(sloturi, claseDeProba(5))

  it('în timpul orei, ora de azi e ora curentă', () => {
    const acum = { data: '2026-09-07', hhmm: '08:20' }
    expect(oraDeAcum(program, acum)?.clasa).toBe('5 A')
    expect(oraDeAzi(program, acum)?.clasa).toBe('5 A')
  })

  it('în pauză, ora de azi e următoarea', () => {
    const acum = { data: '2026-09-07', hhmm: '08:55' }
    expect(oraDeAcum(program, acum)).toBeNull()
    expect(oraDeAzi(program, acum)?.clasa).toBe('5 B')
  })

  it('după ultima oră a zilei trece la prima din ziua următoare', () => {
    const urmatoarea = oraUrmatoare(program, { data: '2026-09-07', hhmm: '15:00' })!
    expect(urmatoarea.data).toBe('2026-09-08')
    expect(urmatoarea.ora).toBe(1)
  })

  it('în vacanță arată prima oră de după', () => {
    const urmatoarea = oraDeAzi(program, { data: '2026-12-28', hhmm: '09:00' })!
    expect(urmatoarea.data).toBe('2027-01-11')
  })

  it('după încheierea anului nu mai urmează nimic', () => {
    expect(oraDeAzi(program, { data: '2027-07-01', hhmm: '09:00' })).toBeNull()
  })

  it('ziua se vede întreagă, cu orele fără conținut la locul lor', () => {
    const marti = programulZilei(program, '2026-09-08')
    expect(marti.map((o) => o.ora)).toEqual([1, 2, 3, 4, 5, 6])
    expect(marti.filter((o) => o.clasaOraRO === null).length).toBe(3)
  })
})
