// Testele verifică motorul de calendar față de structura publicată de școală,
// https://principelecarol.ro/structura-anului-scolar.html. Dacă engine-ul nu
// reproduce exact numerele și intervalele de acolo, e greșit.
import { describe, expect, it } from 'vitest'
import { an20262027 } from '@/data/an-scolar-2026-2027'
import {
  dataFinalPentruClasa,
  esteLuni,
  genereazaLuni,
  genereazaSaptamani,
  numarSaptamaniDeCurs,
  oreEfective,
  saptamanaPentruData,
  saptamaniPentruClasa,
  ziSaptamanii,
} from '@/lib/an-scolar'

const saptamani = genereazaSaptamani(an20262027)
const deCurs = saptamani.filter((s) => s.tip === 'curs')
const curs = (numar: number) => deCurs.find((s) => s.numarCurs === numar)!

describe('aritmetica zilelor', () => {
  it('7 septembrie 2026 e luni', () => {
    expect(ziSaptamanii('2026-09-07')).toBe(1)
    expect(esteLuni('2026-09-07')).toBe(true)
  })

  it('recunoaște weekendul', () => {
    expect(ziSaptamanii('2026-09-12')).toBe(6)
    expect(ziSaptamanii('2026-09-13')).toBe(7)
  })
})

describe('numerotarea săptămânilor', () => {
  it('anul are 36 de săptămâni de curs', () => {
    expect(numarSaptamaniDeCurs(saptamani)).toBe(36)
  })

  it('numerele de curs sunt consecutive, de la 1', () => {
    expect(deCurs.map((s) => s.numarCurs)).toEqual(
      Array.from({ length: 36 }, (_, i) => i + 1),
    )
  })

  it('săptămânile de vacanță nu primesc număr de curs', () => {
    const vacanta = saptamani.filter((s) => s.tip === 'vacanta')
    expect(vacanta.length).toBeGreaterThan(0)
    expect(vacanta.every((s) => s.numarCurs === null)).toBe(true)
  })

  it('numărul calendaristic rămâne continuu peste vacanțe', () => {
    expect(saptamani.map((s) => s.numarCalendaristic)).toEqual(
      saptamani.map((_, i) => i + 1),
    )
  })

  it('23 septembrie 2026 cade în săptămâna de curs 3, modulul 1', () => {
    const saptamana = saptamanaPentruData(saptamani, '2026-09-23')!
    expect(saptamana.numarCurs).toBe(3)
    expect(saptamana.modulId).toBe(1)
    expect(saptamana.dataStart).toBe('2026-09-21')
  })
})

describe('intervalele publicate de școală', () => {
  it.each([
    [1, '2026-09-07', '2026-09-11'],
    [7, '2026-10-19', '2026-10-23'],
    [8, '2026-11-02', '2026-11-06'],
    [14, '2026-12-14', '2026-12-18'],
    [16, '2027-01-11', '2027-01-15'],
    [21, '2027-02-22', '2027-02-26'],
    [35, '2027-06-07', '2027-06-11'],
    [36, '2027-06-14', '2027-06-18'],
  ])('săptămâna %i ține de la %s la %s', (numar, prima, ultima) => {
    const saptamana = curs(numar)
    expect(saptamana.primaZiDeCurs).toBe(prima)
    expect(saptamana.ultimaZiDeCurs).toBe(ultima)
  })

  it('fiecare modul are numărul de săptămâni publicat', () => {
    const peModul = [1, 2, 3, 4, 5].map(
      (id) => deCurs.filter((s) => s.modulId === id).length,
    )
    expect(peModul).toEqual([7, 8, 5, 9, 7])
  })
})

describe('săptămânile parțiale', () => {
  it('săptămâna 15 are două zile, 21 și 22 decembrie', () => {
    const saptamana = curs(15)
    expect(saptamana.zileLucratoare).toBe(2)
    expect(saptamana.primaZiDeCurs).toBe('2026-12-21')
    expect(saptamana.ultimaZiDeCurs).toBe('2026-12-22')
  })

  it('săptămâna 30 începe miercuri, după vacanța de primăvară', () => {
    const saptamana = curs(30)
    expect(saptamana.dataStart).toBe('2027-05-03')
    expect(saptamana.primaZiDeCurs).toBe('2027-05-05')
    expect(saptamana.ultimaZiDeCurs).toBe('2027-05-07')
    expect(saptamana.zileLucratoare).toBe(3)
  })
})

describe('zilele libere din timpul modulelor', () => {
  it.each([
    [5, 4, 'Ziua Internațională a Educației'],
    [12, 3, 'Sfântul Andrei'],
    [34, 4, 'Ziua Copilului'],
  ])('săptămâna %i are %i zile lucrătoare', (numar, zile) => {
    expect(curs(numar).zileLucratoare).toBe(zile)
  })

  it('30 noiembrie și 1 decembrie sunt marcate libere, nu de curs', () => {
    const saptamana = curs(12)
    const libere = saptamana.zile.filter((z) => z.tip === 'libera')
    expect(libere.map((z) => z.data)).toEqual(['2026-11-30', '2026-12-01'])
  })

  it('o săptămână întreagă are cinci zile lucrătoare', () => {
    expect(curs(2).zileLucratoare).toBe(5)
  })
})

describe('săptămânile speciale', () => {
  it('Săptămâna Verde e săptămâna 7', () => {
    expect(curs(7).speciala).toBe('Săptămâna Verde')
  })

  it('Școala altfel e săptămâna 14', () => {
    expect(curs(14).speciala).toBe('Școala altfel')
  })

  it('restul săptămânilor nu poartă marcaj special', () => {
    expect(deCurs.filter((s) => s.speciala !== null).map((s) => s.numarCurs)).toEqual([7, 14])
  })
})

describe('anul se termină la două date', () => {
  it('clasa a VIII-a încheie pe 11 iunie 2027', () => {
    expect(dataFinalPentruClasa(an20262027, 'clasa-8')).toBe('2027-06-11')
  })

  it('celelalte clase încheie pe 18 iunie 2027', () => {
    expect(dataFinalPentruClasa(an20262027, 'clasa-5')).toBe('2027-06-18')
  })

  it('clasa a VIII-a are 35 de săptămâni de curs, nu 36', () => {
    const ale8a = saptamaniPentruClasa(saptamani, 'clasa-8', an20262027)
    expect(numarSaptamaniDeCurs(ale8a)).toBe(35)
  })

  it('clasa a V-a păstrează toate cele 36', () => {
    const ale5a = saptamaniPentruClasa(saptamani, 'clasa-5', an20262027)
    expect(numarSaptamaniDeCurs(ale5a)).toBe(36)
  })
})

describe('vacanțele', () => {
  it.each([
    ['2026-10-26', 'Vacanța de toamnă'],
    ['2026-12-28', 'Vacanța de iarnă'],
    ['2027-02-17', 'Vacanța de schi'],
    ['2027-04-27', 'Vacanța de primăvară'],
    ['2027-07-15', 'Vacanța de vară'],
  ])('%s cade în %s', (data, denumire) => {
    const zi = saptamanaPentruData(saptamani, data)!.zile.find((z) => z.data === data)!
    expect(zi.tip).toBe('vacanta')
    expect(zi.denumire).toBe(denumire)
  })

  it('calendarul merge până la finalul vacanței de vară', () => {
    expect(saptamani.at(-1)!.dataFinal >= '2027-09-05').toBe(true)
  })

  it('nu depășește plafonul de 53 de săptămâni', () => {
    expect(saptamani.length).toBeLessThanOrEqual(53)
  })
})

describe('orele efective', () => {
  it('patru ore pe săptămână, un an întreg, țin cont de săptămânile scurte', () => {
    // 36 de săptămâni pline ar însemna 144 de ore. Zilele libere și cele două
    // săptămâni parțiale scad totalul.
    const ore = oreEfective(saptamani, 4)
    expect(ore).toBeLessThan(144)
    expect(ore).toBeGreaterThan(120)
  })

  it('o clasă fără ore nu produce ore', () => {
    expect(oreEfective(saptamani, 0)).toBe(0)
  })
})

describe('vederea pe luni', () => {
  // Anul școlar atinge treisprezece luni calendaristice, nu douăsprezece:
  // începe în septembrie 2026 și vacanța de vară se termină în septembrie 2027.
  // Grila „cele 12 luni" merge din septembrie 2026 până în august 2027, iar
  // rămășița din septembrie 2027 ține deja de anul următor.
  it('atinge treisprezece luni calendaristice', () => {
    expect(genereazaLuni(saptamani).length).toBe(13)
  })

  it('pornește din septembrie 2026 și se închide în septembrie 2027', () => {
    const luni = genereazaLuni(saptamani)
    expect([luni[0].an, luni[0].luna, luni[0].denumire]).toEqual([2026, 9, 'septembrie'])
    expect([luni.at(-1)!.an, luni.at(-1)!.luna]).toEqual([2027, 9])
  })

  it('primele douăsprezece luni merg din septembrie 2026 în august 2027', () => {
    const doisprezece = genereazaLuni(saptamani).slice(0, 12)
    expect([doisprezece[0].an, doisprezece[0].luna]).toEqual([2026, 9])
    expect([doisprezece.at(-1)!.an, doisprezece.at(-1)!.luna]).toEqual([2027, 8])
  })

  it('fiecare lună trimite către cel puțin o săptămână', () => {
    expect(genereazaLuni(saptamani).every((l) => l.saptamani.length > 0)).toBe(true)
  })
})

describe('data de start greșită', () => {
  it('o dată care nu e luni se corectează la lunea săptămânii ei', () => {
    const gresit = genereazaSaptamani({ ...an20262027, primaZiDeLuni: '2026-09-09' })
    expect(gresit[0].dataStart).toBe('2026-09-07')
    expect(numarSaptamaniDeCurs(gresit)).toBe(36)
  })
})
