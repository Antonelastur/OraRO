// Instrumentele de clasă. Toate funcționează fără backend și sunt gândite să
// stea pe proiector: text mare, contrast bun, puține butoane.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Dices, Play, Pause, RotateCcw, Shuffle, UserRound, Users } from 'lucide-react'
import { bip, formateazaCeas, imparteInEchipe, useListaClasei } from '@/lib/instrumente'

const BTN = 'inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold transition-colors'
const BTN_PRIMAR = `${BTN} bg-accent text-navy hover:brightness-105`
const BTN_SECUNDAR = `${BTN} border border-border text-ink-soft hover:bg-ink/5`
const AFISAJ = 'font-bold tabular-nums leading-none text-ink'

/* ------------------------------------------------------------------ */

export function Cronometru() {
  const [sutimi, setSutimi] = useState(0)
  const [merge, setMerge] = useState(false)

  useEffect(() => {
    if (!merge) return
    const id = setInterval(() => setSutimi((s) => s + 1), 10)
    return () => clearInterval(id)
  }, [merge])

  const total = Math.floor(sutimi / 100)
  const rest = String(sutimi % 100).padStart(2, '0')

  return (
    <div className="flex flex-col items-center gap-8">
      <p className={AFISAJ} style={{ fontSize: 'clamp(4rem, 16vw, 11rem)' }}>
        {formateazaCeas(total)}
        <span className="text-ink-soft" style={{ fontSize: '0.4em' }}>,{rest}</span>
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" className={BTN_PRIMAR} onClick={() => setMerge((m) => !m)}>
          {merge ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="h-5 w-5" aria-hidden="true" />}
          {merge ? 'Pauză' : 'Pornește'}
        </button>
        <button type="button" className={BTN_SECUNDAR} onClick={() => { setSutimi(0); setMerge(false) }}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Resetează
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

const PRESETURI = [1, 2, 3, 5, 10, 15]

export function NumaratoareInversa() {
  const [minute, setMinute] = useState(5)
  const [ramas, setRamas] = useState(5 * 60)
  const [merge, setMerge] = useState(false)
  const sunatDeja = useRef(false)

  useEffect(() => {
    setRamas(minute * 60)
    setMerge(false)
    sunatDeja.current = false
  }, [minute])

  useEffect(() => {
    if (!merge) return
    const id = setInterval(() => setRamas((r) => r - 1), 1000)
    return () => clearInterval(id)
  }, [merge])

  useEffect(() => {
    if (ramas === 0 && !sunatDeja.current) {
      sunatDeja.current = true
      bip()
    }
  }, [ramas])

  const gata = ramas <= 0

  return (
    <div className="flex flex-col items-center gap-8">
      <p
        className={`${AFISAJ} ${gata ? 'text-bad' : ''}`}
        style={{ fontSize: 'clamp(4rem, 18vw, 12rem)' }}
        aria-live="off"
      >
        {gata ? '00:00' : formateazaCeas(ramas)}
      </p>
      {gata && <p className="text-lg font-semibold text-bad">Timpul a expirat</p>}

      <div className="flex flex-wrap justify-center gap-2">
        {PRESETURI.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMinute(m)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              minute === m ? 'bg-accent-soft text-accent-ink' : 'border border-border text-ink-soft hover:bg-ink/5'
            }`}
          >
            {m} min
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" className={BTN_PRIMAR} onClick={() => setMerge((m) => !m)} disabled={gata}>
          {merge ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="h-5 w-5" aria-hidden="true" />}
          {merge ? 'Pauză' : 'Pornește'}
        </button>
        <button
          type="button"
          className={BTN_SECUNDAR}
          onClick={() => { setRamas(minute * 60); setMerge(false); sunatDeja.current = false }}
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Resetează
        </button>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

const FETE_ZAR: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[28, 28], [72, 72]],
  3: [[26, 26], [50, 50], [74, 74]],
  4: [[28, 28], [72, 28], [28, 72], [72, 72]],
  5: [[28, 28], [72, 28], [50, 50], [28, 72], [72, 72]],
  6: [[28, 25], [72, 25], [28, 50], [72, 50], [28, 75], [72, 75]],
}

function FataZar({ valoare }: { valoare: number }) {
  return (
    <svg viewBox="0 0 100 100" className="h-32 w-32 sm:h-40 sm:w-40" role="img" aria-label={`Zar, ${valoare}`}>
      <rect x="4" y="4" width="92" height="92" rx="18" fill="var(--color-bg-alt)" stroke="var(--color-border)" strokeWidth="3"/>
      {FETE_ZAR[valoare].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="9" fill="var(--color-accent-ink)" />
      ))}
    </svg>
  )
}

export function Zar() {
  const [zaruri, setZaruri] = useState<number[]>([1])
  const [numar, setNumar] = useState(1)
  const [rostogolesc, setRostogolesc] = useState(false)

  function arunca() {
    setRostogolesc(true)
    const pana = Date.now() + 500
    const id = setInterval(() => {
      setZaruri(Array.from({ length: numar }, () => 1 + Math.floor(Math.random() * 6)))
      if (Date.now() >= pana) {
        clearInterval(id)
        setRostogolesc(false)
      }
    }, 70)
  }

  useEffect(() => {
    setZaruri(Array.from({ length: numar }, () => 1 + Math.floor(Math.random() * 6)))
  }, [numar])

  const suma = zaruri.reduce((a, b) => a + b, 0)

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-5">
        {zaruri.map((v, i) => <FataZar key={i} valoare={v} />)}
      </div>
      {numar > 1 && <p className="text-2xl font-bold text-ink">Total: {suma}</p>}

      <div className="flex flex-wrap justify-center gap-2">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setNumar(n)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              numar === n ? 'bg-accent-soft text-accent-ink' : 'border border-border text-ink-soft hover:bg-ink/5'
            }`}
          >
            {n} {n === 1 ? 'zar' : 'zaruri'}
          </button>
        ))}
      </div>

      <button type="button" className={BTN_PRIMAR} onClick={arunca} disabled={rostogolesc}>
        <Dices className="h-5 w-5" aria-hidden="true" />
        Aruncă
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------ */

function ListaClasei({ text, setText, nume }: { text: string; setText: (v: string) => void; nume: string[] }) {
  const [deschis, setDeschis] = useState(nume.length === 0)

  return (
    <div className="w-full max-w-xl">
      <button
        type="button"
        onClick={() => setDeschis((d) => !d)}
        className="text-sm font-medium text-accent-ink hover:underline"
      >
        {deschis ? 'Ascunde lista clasei' : `Lista clasei, ${nume.length} elevi`}
      </button>
      {deschis && (
        <div className="mt-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
            placeholder={'Un nume pe rând:\nAndrei Popescu\nMaria Ionescu\n...'}
            className="w-full rounded-xl border border-border bg-bg-alt p-3 text-sm text-ink outline-none focus:border-accent"
          />
          <p className="mt-1.5 text-xs text-ink-soft">
            Lista se salvează în acest browser, pe acest calculator. Nu ajunge nicăieri altundeva.
          </p>
        </div>
      )}
    </div>
  )
}

export function SelectorElev() {
  const { text, setText, nume } = useListaClasei()
  const [ales, setAles] = useState<string | null>(null)
  const [scosi, setScosi] = useState<string[]>([])
  const [faraRepetare, setFaraRepetare] = useState(true)

  const disponibili = faraRepetare ? nume.filter((n) => !scosi.includes(n)) : nume

  function alege() {
    if (disponibili.length === 0) return
    const n = disponibili[Math.floor(Math.random() * disponibili.length)]
    setAles(n)
    if (faraRepetare) setScosi((s) => [...s, n])
  }

  return (
    <div className="flex flex-col items-center gap-7">
      <div className="grid h-40 w-full max-w-2xl place-items-center overflow-hidden rounded-2xl border-2 border-border bg-bg-alt px-6 sm:h-48">
        {ales ? (
          <p className="text-center font-bold text-ink" style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}>{ales}</p>
        ) : (
          <p className="text-ink-soft">Apasă „Alege un elev”</p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <button type="button" className={BTN_PRIMAR} onClick={alege} disabled={disponibili.length === 0}>
          <UserRound className="h-5 w-5" aria-hidden="true" />
          Alege un elev
        </button>
        <button type="button" className={BTN_SECUNDAR} onClick={() => { setScosi([]); setAles(null) }}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Ia de la capăt
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm text-ink-soft">
        <input
          type="checkbox"
          checked={faraRepetare}
          onChange={(e) => { setFaraRepetare(e.target.checked); setScosi([]) }}
          className="h-4 w-4 accent-[var(--color-accent-ink)]"
        />
        Nu repeta un elev până nu trec toți
      </label>

      {faraRepetare && nume.length > 0 && (
        <p className="text-sm text-ink-soft">
          {disponibili.length === 0
            ? 'Au fost aleși toți. Apasă „Ia de la capăt”.'
            : `Au mai rămas ${disponibili.length} din ${nume.length}.`}
        </p>
      )}

      <ListaClasei text={text} setText={setText} nume={nume} />
    </div>
  )
}

/* ------------------------------------------------------------------ */

const CULORI_ROATA = ['#3b5fa8', '#a1417e', '#1c7f5e', '#b0512f', '#6f5ea8', '#0a7d75', '#846b36', '#c1503a']

export function RoataAleatorie() {
  const { text, setText, nume } = useListaClasei()
  const [unghi, setUnghi] = useState(0)
  const [seInvarte, setSeInvarte] = useState(false)
  const [castigator, setCastigator] = useState<string | null>(null)

  const felii = useMemo(() => (nume.length ? nume : ['Adaugă nume în lista clasei']), [nume])
  const pasUnghi = 360 / felii.length

  function invarte() {
    if (seInvarte || nume.length === 0) return
    setSeInvarte(true)
    setCastigator(null)
    const indice = Math.floor(Math.random() * felii.length)
    // Acul e sus; rotim ca mijlocul feliei alese să ajungă în dreptul lui.
    const tinta = 360 * 5 + (360 - (indice * pasUnghi + pasUnghi / 2))
    setUnghi((u) => u + tinta)
    setTimeout(() => { setSeInvarte(false); setCastigator(felii[indice]) }, 4000)
  }

  const R = 150
  const cale = (i: number) => {
    const a0 = ((i * pasUnghi - 90) * Math.PI) / 180
    const a1 = (((i + 1) * pasUnghi - 90) * Math.PI) / 180
    const x0 = 160 + R * Math.cos(a0), y0 = 160 + R * Math.sin(a0)
    const x1 = 160 + R * Math.cos(a1), y1 = 160 + R * Math.sin(a1)
    return `M160 160 L${x0} ${y0} A${R} ${R} 0 ${pasUnghi > 180 ? 1 : 0} 1 ${x1} ${y1} Z`
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <svg viewBox="0 0 320 320" className="h-72 w-72 sm:h-96 sm:w-96">
          <g style={{ transform: `rotate(${unghi}deg)`, transformOrigin: '160px 160px', transition: seInvarte ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 1)' : 'none' }}>
            {felii.map((n, i) => {
              const mij = ((i * pasUnghi + pasUnghi / 2 - 90) * Math.PI) / 180
              return (
                <g key={i}>
                  <path d={cale(i)} fill={CULORI_ROATA[i % CULORI_ROATA.length]} stroke="#faf7f0" strokeWidth="2"/>
                  <text
                    x={160 + R * 0.62 * Math.cos(mij)}
                    y={160 + R * 0.62 * Math.sin(mij)}
                    fill="#ffffff"
                    fontSize={felii.length > 16 ? 8 : felii.length > 10 ? 10 : 12}
                    fontWeight="600"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${i * pasUnghi + pasUnghi / 2}, ${160 + R * 0.62 * Math.cos(mij)}, ${160 + R * 0.62 * Math.sin(mij)})`}
                  >
                    {n.length > 14 ? n.slice(0, 13) + '…' : n}
                  </text>
                </g>
              )
            })}
          </g>
          <circle cx="160" cy="160" r="22" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="3"/>
          <polygon points="160,14 150,42 170,42" fill="#10233f"/>
        </svg>
      </div>

      {castigator && (
        <p className="text-center font-bold text-ink" style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}>{castigator}</p>
      )}

      <button type="button" className={BTN_PRIMAR} onClick={invarte} disabled={seInvarte || nume.length === 0}>
        <Shuffle className="h-5 w-5" aria-hidden="true" />
        Învârte roata
      </button>

      <ListaClasei text={text} setText={setText} nume={nume} />
    </div>
  )
}

/* ------------------------------------------------------------------ */

export function GeneratorEchipe() {
  const { text, setText, nume } = useListaClasei()
  const [numarEchipe, setNumarEchipe] = useState(3)
  const [echipe, setEchipe] = useState<string[][] | null>(null)

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <span className="text-sm text-ink-soft">Câte echipe:</span>
        {[2, 3, 4, 5, 6].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setNumarEchipe(n)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              numarEchipe === n ? 'bg-accent-soft text-accent-ink' : 'border border-border text-ink-soft hover:bg-ink/5'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      <button
        type="button"
        className={BTN_PRIMAR}
        onClick={() => setEchipe(imparteInEchipe(nume, numarEchipe))}
        disabled={nume.length < numarEchipe}
      >
        <Users className="h-5 w-5" aria-hidden="true" />
        Împarte echipele
      </button>
      {nume.length > 0 && nume.length < numarEchipe && (
        <p className="text-sm text-bad">Ai mai puțini elevi decât echipe.</p>
      )}

      {echipe && (
        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {echipe.map((echipa, i) => (
            <div key={i} className="rounded-2xl border-2 border-border bg-bg-alt p-4">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide" style={{ color: CULORI_ROATA[i % CULORI_ROATA.length] }}>
                Echipa {i + 1}
              </p>
              <ul className="flex flex-col gap-1">
                {echipa.map((n) => <li key={n} className="text-base text-ink">{n}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}

      <ListaClasei text={text} setText={setText} nume={nume} />
    </div>
  )
}

/* ------------------------------------------------------------------ */
