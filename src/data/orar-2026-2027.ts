// Orarul săptămânal 2026-2027, prof. Antoanela Pohoață.
// Introdus o singură dată pe an, din orarul școlii.
//
// Orarul acoperă toate disciplinele. OraRO are conținut numai la limba și
// literatura română, deci restul orelor ocupă slotul fără lecții în spate:
// `clasaOraRO` e null acolo. Vezi docs/agenda.md, secțiunea 4.3.
import type { IntervalOrar, IntrareOrar } from '@/lib/orar'

// Ziua se închide la 14:00 fix: șase ore de 50 de minute, pauze de 10 minute și
// pauza mare de 20 de minute după ora a doua.
export const intervale: IntervalOrar[] = [
  { ora: 1, start: '08:00', final: '08:50' },
  { ora: 2, start: '09:00', final: '09:50' },
  { ora: 3, start: '10:10', final: '11:00' },
  { ora: 4, start: '11:10', final: '12:00' },
  { ora: 5, start: '12:10', final: '13:00' },
  { ora: 6, start: '13:10', final: '14:00' },
]

const ro = (zi: number, ora: number, clasa: string, clasaOraRO: string): IntrareOrar =>
  ({ zi, ora, clasa, disciplina: 'romana', clasaOraRO })

const alta = (zi: number, ora: number, clasa: string, disciplina: IntrareOrar['disciplina']): IntrareOrar =>
  ({ zi, ora, clasa, disciplina, clasaOraRO: null })

export const orar: IntrareOrar[] = [
  // Luni
  ro(1, 1, '5 A', 'clasa-5'),
  ro(1, 2, '5 B', 'clasa-5'),
  ro(1, 3, '8 B', 'clasa-8'),

  // Marți
  ro(2, 1, '8 B', 'clasa-8'),
  ro(2, 2, '5 A', 'clasa-5'),
  alta(2, 3, '5 A', 'spaniola'),
  ro(2, 4, '5 B', 'clasa-5'),
  alta(2, 5, '5 B', 'storytelling'),
  // Antoanela a re-trimis grila de marți identic cu prima dată, deci ora
  // asta e 8 B. Ce fel de oră e rămâne de confirmat: a numit-o „op", dar a
  // spus și că 8 B are educație socială marți. Nu ghicim, vezi TODO-ul de
  // la finalul fișierului.
  alta(2, 6, '8 B', 'optional'),

  // Miercuri
  ro(3, 1, '8 B', 'clasa-8'),
  ro(3, 2, '5 B', 'clasa-5'),
  ro(3, 3, '5 A', 'clasa-5'),

  // Joi
  alta(4, 1, '7 A', 'latina'),
  alta(4, 2, '7 A', 'latina'),

  // Vineri
  ro(5, 1, '5 B', 'clasa-5'),
  alta(5, 2, '7 B', 'educatie-sociala'),
  ro(5, 3, '5 A', 'clasa-5'),
  ro(5, 4, '8 B', 'clasa-8'),
  alta(5, 5, '8 B', 'educatie-sociala'),
  alta(5, 6, '7 A', 'educatie-sociala'),
]

// TODO, de lămurit cu Antoanela, două lucruri care nu încap în grila de marți:
//   1. Marți ora 6 e „8 B op" sau „8 B educație socială"? A spus și una, și
//      alta. Dacă e educație socială, 8 B are două ore de educație socială,
//      marți și vineri.
//   2. Opționalul de educație media de la 7 B: a spus că e marți, dar marți
//      are deja șase ore ocupate, iar ziua se închide la 14:00. Unde cade?
