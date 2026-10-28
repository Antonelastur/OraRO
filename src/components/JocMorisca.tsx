// Morișca pe tabla electronică: în loc de planșa cu bilețele lipite, morișca se învârte și,
// când se oprește, fiecare paletă arată o formă a trecutului pentru același verb.
// Timpurile se arată doar la cerere, ca elevii să le spună ei.
import { useEffect, useRef, useState } from 'react'
import { Eye, RotateCcw, Wind } from 'lucide-react'
import { unghiNou, urmatorulVerb } from '@/lib/morisca'
import type { JocMorisca as DateJoc } from '@/types'

// Poziția cardurilor în jurul moriștii, în ordinea paletelor: stânga-sus, dreapta-sus, dreapta-jos, stânga-jos.
const POZITII = ['lg:col-start-1 lg:row-start-1', 'lg:col-start-3 lg:row-start-1', 'lg:col-start-3 lg:row-start-2', 'lg:col-start-1 lg:row-start-2']
const UNGHIURI_PALETE = [315, 45, 135, 225]
const PALETA = 'M200 200 C176 130 176 66 214 8 C278 70 262 152 200 200 Z'

type Faza = 'asteapta' | 'invarte' | 'oprita'

export function JocMorisca({ joc }: { joc: DateJoc }) {
  const [faza, setFaza] = useState<Faza>('asteapta')
  const [unghi, setUnghi] = useState(0)
  const [iesite, setIesite] = useState<number[]>([])
  const [timpuri, setTimpuri] = useState(false)
  const cronometru = useRef<number | null>(null)
  // Cine a cerut mișcare redusă vede o învârtire scurtă.
  const [redus] = useState(() => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true)

  useEffect(
    () => () => {
      if (cronometru.current !== null) window.clearTimeout(cronometru.current)
    },
    [],
  )

  const durata = redus ? 400 : 2800
  const verb = iesite.length > 0 ? joc.verbe[iesite[iesite.length - 1]] : null
  const arataFormele = faza === 'oprita' && verb !== null

  function invarte() {
    if (faza === 'invarte') return
    setIesite((i) => [...i, urmatorulVerb(joc, i)])
    setTimpuri(false)
    setUnghi((u) => unghiNou(u))
    setFaza('invarte')
    cronometru.current = window.setTimeout(() => setFaza('oprita'), durata)
  }

  function reia() {
    if (cronometru.current !== null) window.clearTimeout(cronometru.current)
    setFaza('asteapta')
    setIesite([])
    setTimpuri(false)
  }

  return (
    <section aria-label={`Joc: ${joc.titlu}`} className="mt-8 max-w-6xl rounded-3xl border border-border bg-bg-alt p-5 lg:p-7">
      <div className="flex items-center gap-3">
        <Wind className="h-7 w-7 text-accent-ink" aria-hidden="true" />
        <h2 className="text-xl font-bold text-ink lg:text-3xl">Joc: {joc.titlu}</h2>
      </div>
      {joc.instructiune && <p className="mt-2 text-lg text-ink-soft lg:text-2xl">{joc.instructiune}</p>}

      <p className="mt-4 min-h-10 text-2xl font-bold text-ink lg:text-4xl" aria-live="polite">
        {arataFormele ? `Verbul: ${verb.infinitiv}` : faza === 'invarte' ? 'Morișca se învârte...' : 'Apasă „Învârte morișca”.'}
      </p>

      <div className="mt-4 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_minmax(0,26rem)_1fr] lg:grid-rows-2 lg:gap-x-6">
        <div className="relative mx-auto aspect-square w-full max-w-md lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <svg
            viewBox="0 0 400 400"
            className="h-full w-full"
            role="img"
            aria-label="Morișca"
            style={{ transform: `rotate(${unghi}deg)`, transition: faza === 'invarte' ? `transform ${durata}ms cubic-bezier(0.15, 0.6, 0.2, 1)` : 'none' }}
          >
            {joc.padele.map((p, i) => (
              <path key={p.timp} d={PALETA} fill={p.culoare} stroke="#ffffff" strokeWidth="4" transform={`rotate(${UNGHIURI_PALETE[i]} 200 200)`} />
            ))}
          </svg>
          <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-bg-alt bg-bg text-center shadow">
            {timpuri ? <span className="text-sm font-bold leading-tight text-ink lg:text-xl">{joc.centru}</span> : <span className="h-3 w-3 rounded-full bg-border" />}
          </div>
        </div>

        {joc.padele.map((p, i) => (
          <div
            key={p.timp}
            className={`rounded-2xl border-4 bg-bg p-4 lg:p-5 ${POZITII[i] ?? ''}`}
            style={{ borderColor: p.culoare }}
          >
            <p className="min-h-12 text-3xl font-bold text-ink lg:min-h-16 lg:text-5xl">{arataFormele ? verb.forme[i] : '?'}</p>
            <p className="mt-1 min-h-7 text-lg font-semibold text-ink-soft lg:text-2xl" style={{ color: timpuri && arataFormele ? p.culoare : undefined }}>
              {timpuri && arataFormele ? p.timp : ''}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={faza === 'invarte'}
          onClick={invarte}
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-xl font-semibold text-navy hover:brightness-105 disabled:opacity-50"
        >
          <Wind className="h-6 w-6" aria-hidden="true" />
          Învârte morișca
        </button>
        {arataFormele && !timpuri && (
          <button
            type="button"
            onClick={() => setTimpuri(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg px-5 py-3 text-lg font-semibold text-ink hover:border-accent"
          >
            <Eye className="h-5 w-5" aria-hidden="true" />
            Arată timpurile
          </button>
        )}
        <button
          type="button"
          onClick={reia}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg px-5 py-3 text-lg font-semibold text-ink hover:border-accent"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
          Reia jocul
        </button>
      </div>
    </section>
  )
}

export default JocMorisca
