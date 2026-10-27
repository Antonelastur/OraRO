// Logica cockpitului: cronometrul pe ceasul real și starea orei, păstrată între
// reîncărcări. Fără React, ca să se poată testa. Vezi docs/ux.md, secțiunea 5.
//
// Cronometrul nu mai scade câte o secundă pe tick. Ține minte momentul în care
// expiră etapa (`scadenta`), iar secundele rămase se calculează din ceas. Așa nu
// rămâne în urmă când fila e în fundal sau când laptopul adoarme.
import type { BlocOra } from '@/lib/ora'

export type StareCockpit = {
  pas: number
  /** Secundele rămase când cronometrul stă. Când merge, contează `scadenta`. */
  ramasPauza: number
  /** Momentul (ms, epoch) în care expiră etapa, doar cât merge cronometrul. */
  scadenta: number | null
  /** Nota rapidă scrisă în timpul orei, ajunge în notițele reflecției. */
  nota: string
  salvatLa: number
}

/** O oră întreruptă se reia doar dacă a trecut mai puțin de atât. */
export const VALABILITATE_MS = 6 * 60 * 60 * 1000

type Depozit = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>

const PREFIX = 'oraro:cockpit:'

export function stareInitiala(blocuri: BlocOra[], acum = Date.now()): StareCockpit {
  return { pas: 0, ramasPauza: blocuri[0]?.secunde ?? 0, scadenta: null, nota: '', salvatLa: acum }
}

export function secundeRamase(stare: StareCockpit, acum: number): number {
  if (stare.scadenta === null) return stare.ramasPauza
  // ceil: 00:01 rămâne pe ecran până trece o secundă întreagă.
  return Math.ceil((stare.scadenta - acum) / 1000) || 0
}

export function porneste(stare: StareCockpit, acum: number): StareCockpit {
  if (stare.scadenta !== null) return stare
  return { ...stare, scadenta: acum + stare.ramasPauza * 1000 }
}

export function opreste(stare: StareCockpit, acum: number): StareCockpit {
  if (stare.scadenta === null) return stare
  return { ...stare, ramasPauza: secundeRamase(stare, acum), scadenta: null }
}

/** Mută ora la alt pas. Cronometrul se oprește și se reîncarcă cu durata etapei. */
export function mutaLa(stare: StareCockpit, pas: number, blocuri: BlocOra[]): StareCockpit {
  if (blocuri.length === 0) return stare
  const nou = Math.min(Math.max(pas, 0), blocuri.length - 1)
  return { ...stare, pas: nou, ramasPauza: blocuri[nou].secunde, scadenta: null }
}

export function reseteazaPas(stare: StareCockpit, blocuri: BlocOra[]): StareCockpit {
  return mutaLa(stare, stare.pas, blocuri)
}

/** Ora n-a fost atinsă: nimic de păstrat pentru reluare. */
export function esteNeatinsa(stare: StareCockpit, blocuri: BlocOra[]): boolean {
  return (
    stare.pas === 0 &&
    stare.scadenta === null &&
    stare.nota === '' &&
    stare.ramasPauza === (blocuri[0]?.secunde ?? 0)
  )
}

/** Cât a mai rămas din plan: restul etapei curente (fără depășire) plus etapele următoare. */
export function secundePlanRamase(blocuri: BlocOra[], pas: number, ramasPas: number): number {
  const urmatoare = blocuri.slice(pas + 1).reduce((total, bloc) => total + bloc.secunde, 0)
  return Math.max(ramasPas, 0) + urmatoare
}

export type LinieInstructiune = { text: string; item: boolean }

/** Împarte instrucțiunile etapei în rânduri; cele care încep cu „– ” devin elemente de listă. */
export function liniiInstructiuni(text: string): LinieInstructiune[] {
  return text
    .split('\n')
    .map((linie) => linie.trim())
    .filter(Boolean)
    .map((linie) =>
      /^[–-]\s+/.test(linie)
        ? { text: linie.replace(/^[–-]\s+/, ''), item: true }
        : { text: linie, item: false },
    )
}

function valida(brut: unknown, acum: number, blocuri: BlocOra[]): StareCockpit | null {
  if (typeof brut !== 'object' || brut === null) return null
  const s = brut as Record<string, unknown>
  const { pas, ramasPauza, scadenta, nota, salvatLa } = s
  if (typeof pas !== 'number' || !Number.isInteger(pas) || pas < 0 || pas >= blocuri.length) return null
  if (typeof ramasPauza !== 'number' || !Number.isFinite(ramasPauza)) return null
  if (scadenta !== null && (typeof scadenta !== 'number' || !Number.isFinite(scadenta))) return null
  if (typeof nota !== 'string') return null
  if (typeof salvatLa !== 'number' || !Number.isFinite(salvatLa)) return null
  if (acum - salvatLa > VALABILITATE_MS || salvatLa - acum > VALABILITATE_MS) return null
  return { pas, ramasPauza, scadenta, nota, salvatLa }
}

export function citeste(
  cheie: string,
  acum: number,
  blocuri: BlocOra[],
  depozit: Depozit | undefined = globalThis.localStorage,
): StareCockpit | null {
  try {
    const brut = depozit?.getItem(PREFIX + cheie)
    return brut ? valida(JSON.parse(brut), acum, blocuri) : null
  } catch {
    return null
  }
}

export function salveaza(
  cheie: string,
  stare: StareCockpit,
  acum = Date.now(),
  depozit: Depozit | undefined = globalThis.localStorage,
): void {
  try {
    depozit?.setItem(PREFIX + cheie, JSON.stringify({ ...stare, salvatLa: acum }))
  } catch {
    // Stocare blocată: ora merge mai departe, doar că nu se mai poate relua după reîncărcare.
  }
}

export function sterge(cheie: string, depozit: Depozit | undefined = globalThis.localStorage): void {
  try {
    depozit?.removeItem(PREFIX + cheie)
  } catch {
    // Nimic de făcut.
  }
}

/** Trei bipuri scurte, la expirarea timpului. Eșuează în tăcere dacă browserul nu permite sunetul. */
export function semnalSonor(): void {
  try {
    const Ctx =
      globalThis.AudioContext ??
      (globalThis as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctx) return
    const ctx = new Ctx()
    const durata = 0.18
    for (const t of [0, 0.3, 0.6]) {
      const oscilator = ctx.createOscillator()
      const volum = ctx.createGain()
      oscilator.frequency.value = 880
      oscilator.connect(volum)
      volum.connect(ctx.destination)
      const start = ctx.currentTime + t
      volum.gain.setValueAtTime(0.0001, start)
      volum.gain.exponentialRampToValueAtTime(0.25, start + 0.02)
      volum.gain.exponentialRampToValueAtTime(0.0001, start + durata)
      oscilator.start(start)
      oscilator.stop(start + durata + 0.02)
    }
    setTimeout(() => void ctx.close(), 1500)
  } catch {
    // Fără sunet.
  }
}
