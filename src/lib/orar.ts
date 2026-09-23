// Orarul săptămânal: ce are profesoara în fiecare zi și la ce oră.
// Împreună cu calendarul, de aici iese ScheduleItem. Vezi docs/agenda.md §4.3.

export type Disciplina =
  | 'romana'
  | 'spaniola'
  | 'latina'
  | 'educatie-sociala'
  | 'storytelling'
  | 'educatie-media'
  | 'optional'

export type IntrareOrar = {
  zi: number // 1 = luni, 5 = vineri
  ora: number // 1 la 6
  clasa: string // „5 A", cum îi spune școala
  disciplina: Disciplina
  // Clasa din src/data/, doar la disciplinele cu conținut OraRO. Null în rest:
  // slotul există, lecția nu.
  clasaOraRO: string | null
}

export type IntervalOrar = { ora: number; start: string; final: string }

export const ZILE = ['luni', 'marți', 'miercuri', 'joi', 'vineri'] as const

export const NUME_DISCIPLINE: Record<Disciplina, string> = {
  romana: 'Limba și literatura română',
  spaniola: 'Limba spaniolă',
  latina: 'Limba latină',
  'educatie-sociala': 'Educație socială',
  storytelling: 'Opțional de storytelling',
  'educatie-media': 'Opțional de educație media',
  optional: 'Opțional',
}

export function numeZi(zi: number): string {
  return ZILE[zi - 1] ?? ''
}

/** Orele unei zile, în ordine. */
export function oreleZilei(orar: IntrareOrar[], zi: number): IntrareOrar[] {
  return orar.filter((o) => o.zi === zi).sort((a, b) => a.ora - b.ora)
}

/** Are conținut în OraRO, deci se poate deschide o lecție pe ora asta. */
export function areContinutOraRO(intrare: IntrareOrar): boolean {
  return intrare.clasaOraRO !== null
}

export function numarOre(orar: IntrareOrar[]): number {
  return orar.length
}

/** Câte ore pe săptămână, grupate după o cheie: clasă, disciplină, zi. */
export function orePe(
  orar: IntrareOrar[],
  cheie: (intrare: IntrareOrar) => string,
): Map<string, number> {
  const harta = new Map<string, number>()
  for (const intrare of orar) {
    const k = cheie(intrare)
    harta.set(k, (harta.get(k) ?? 0) + 1)
  }
  return harta
}

/** Orele de la o clasă, la o disciplină anume. */
export function orePeClasaSiDisciplina(
  orar: IntrareOrar[],
  clasa: string,
  disciplina: Disciplina,
): IntrareOrar[] {
  return orar.filter((o) => o.clasa === clasa && o.disciplina === disciplina)
}

function minute(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

/** Ora care se desfășoară la un moment dat, sau null dacă e pauză sau e liber. */
export function oraLaMoment(intervale: IntervalOrar[], hhmm: string): IntervalOrar | null {
  const acum = minute(hhmm)
  return intervale.find((i) => acum >= minute(i.start) && acum < minute(i.final)) ?? null
}

/** Ora care urmează după un moment dat. Null dacă ziua s-a terminat. */
export function urmatoareaOra(intervale: IntervalOrar[], hhmm: string): IntervalOrar | null {
  const acum = minute(hhmm)
  return intervale.find((i) => minute(i.start) > acum) ?? null
}
