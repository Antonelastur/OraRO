// Cockpitul orei. Mod special, fără sidebar și fără antet: profesorul îl
// proiectează în clasă. Vezi docs/ux.md, secțiunea 5.
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, ChevronLeft, ChevronRight, Pause, Play, RotateCcw, X } from 'lucide-react'
import { clase } from '../data/clase.js'
import { blocuriOra, durataTotala, formateazaCeas } from '@/lib/ora'
import type { Clase } from '@/types'

const CLASE = clase as unknown as Clase

export function CockpitPage() {
  const { clasa, unitate, lectie } = useParams()
  const dateClasa = CLASE[clasa!]
  const dateUnitate = dateClasa?.unitati.find((u) => u.id === unitate)
  const dateLectie = dateUnitate?.lectii.find((l) => l.id === lectie)

  const blocuri = useMemo(() => (dateLectie ? blocuriOra(dateLectie) : []), [dateLectie])

  const [pas, setPas] = useState(0)
  const [ramas, setRamas] = useState(0)
  const [merge, setMerge] = useState(false)

  const blocCurent = blocuri[pas]
  const caleLectie = `/${clasa}/${unitate}/${lectie}`

  // La schimbarea pasului, cronometrul se reîncarcă cu durata blocului și se oprește.
  useEffect(() => {
    if (!blocCurent) return
    setRamas(blocCurent.secunde)
    setMerge(false)
  }, [blocCurent])

  useEffect(() => {
    if (!merge) return
    const id = setInterval(() => setRamas((r) => r - 1), 1000)
    return () => clearInterval(id)
  }, [merge])

  const inainte = useCallback(() => setPas((p) => Math.min(p + 1, blocuri.length - 1)), [blocuri.length])
  const inapoi = useCallback(() => setPas((p) => Math.max(p - 1, 0)), [])

  useEffect(() => {
    function laTasta(e: KeyboardEvent) {
      const tinta = e.target as HTMLElement | null
      if (tinta && ['INPUT', 'TEXTAREA'].includes(tinta.tagName)) return
      if (e.code === 'Space') {
        e.preventDefault()
        setMerge((m) => !m)
      } else if (e.key === 'ArrowRight') {
        inainte()
      } else if (e.key === 'ArrowLeft') {
        inapoi()
      }
    }
    window.addEventListener('keydown', laTasta)
    return () => window.removeEventListener('keydown', laTasta)
  }, [inainte, inapoi])

  if (!dateClasa || !dateUnitate || !dateLectie) {
    return (
      <Ecran>
        <p className="text-lg text-ink">Lecția nu există.</p>
        <Link to="/clase" className="mt-4 text-accent-ink underline">
          Înapoi la clase
        </Link>
      </Ecran>
    )
  }

  if (blocuri.length === 0) {
    return (
      <Ecran>
        <p className="text-lg text-ink">
          Lecția „{dateLectie.titlu}" nu are încă un plan cu etape, deci ora nu poate fi condusă din cockpit.
        </p>
        <Link to={caleLectie} className="mt-4 text-accent-ink underline">
          Înapoi la lecție
        </Link>
      </Ecran>
    )
  }

  const total = durataTotala(blocuri)
  const depasit = ramas < 0

  return (
    <div className="flex min-h-svh flex-col bg-bg text-ink">
      {/* Antet minim: cine, unde, ieșire. */}
      <header className="flex items-center justify-between gap-4 border-b border-border px-5 py-3 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink lg:text-base">{dateLectie.titlu}</p>
          <p className="truncate text-xs text-ink-soft">
            {dateClasa.titlu} · {dateUnitate.titlu} · {total} min
          </p>
        </div>
        <Link
          to={caleLectie}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5"
        >
          <X className="h-4 w-4" aria-hidden="true" />
          Închide ora
        </Link>
      </header>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Zona principală, lizibilă de la distanță. */}
        <main className="flex flex-1 flex-col justify-center px-6 py-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-ink lg:text-base">
            Pasul {pas + 1}/{blocuri.length} · {blocCurent.titlu}
          </p>

          <p
            className={`mt-4 font-bold tabular-nums leading-none ${depasit ? 'text-bad' : 'text-ink'}`}
            style={{ fontSize: 'clamp(3.5rem, 11vw, 8rem)' }}
            aria-live="off"
          >
            {formateazaCeas(ramas)}
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            {depasit ? `Ai depășit cele ${blocCurent.minute} minute alocate` : `din ${blocCurent.minute} min alocate`}
          </p>

          <p
            className="mt-8 max-w-3xl text-ink"
            style={{ fontSize: 'clamp(1.125rem, 2.2vw, 1.75rem)', lineHeight: 1.45 }}
          >
            {blocCurent.instructiuni}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setMerge((m) => !m)}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-navy hover:brightness-105"
            >
              {merge ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="h-5 w-5" aria-hidden="true" />}
              {merge ? 'Pauză' : 'Pornește cronometrul'}
            </button>

            <button
              type="button"
              onClick={() => {
                setRamas(blocCurent.secunde)
                setMerge(false)
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-3.5 text-sm font-medium text-ink-soft hover:bg-ink/5"
              aria-label="Resetează cronometrul"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Resetează
            </button>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={inapoi}
                disabled={pas === 0}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-3.5 text-sm font-medium text-ink-soft hover:bg-ink/5 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                Înapoi
              </button>
              <button
                type="button"
                onClick={inainte}
                disabled={pas === blocuri.length - 1}
                className="inline-flex items-center gap-1.5 rounded-xl border border-accent bg-accent-soft px-5 py-3.5 text-sm font-semibold text-accent-ink hover:brightness-105 disabled:opacity-40"
              >
                Următorul pas
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <p className="mt-6 text-xs text-ink-soft">
            Spațiu pornește și oprește cronometrul, săgețile stânga și dreapta schimbă pasul.
          </p>
        </main>

        {/* Planul orei. */}
        <aside className="border-t border-border px-6 py-6 lg:w-80 lg:shrink-0 lg:border-l lg:border-t-0 lg:px-6 lg:py-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Planul orei</p>
          <ol className="mt-3 flex flex-col gap-1">
            {blocuri.map((bloc) => {
              const parcurs = bloc.index < pas
              const curent = bloc.index === pas
              return (
                <li key={bloc.index}>
                  <button
                    type="button"
                    onClick={() => setPas(bloc.index)}
                    aria-current={curent ? 'step' : undefined}
                    className={`flex w-full items-start gap-2.5 rounded-lg px-3 py-2 text-left text-sm hover:bg-ink/5 ${
                      curent ? 'bg-accent-soft font-semibold text-ink' : 'text-ink-soft'
                    }`}
                  >
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center">
                      {parcurs ? (
                        <Check className="h-4 w-4 text-good" aria-hidden="true" />
                      ) : (
                        <span
                          className={`h-2.5 w-2.5 rounded-full border ${
                            curent ? 'border-accent-ink bg-accent-ink' : 'border-ink-soft'
                          }`}
                        />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">{bloc.titlu}</span>
                    <span className="shrink-0 tabular-nums text-xs text-ink-soft">{bloc.minute}′</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </aside>
      </div>
    </div>
  )
}

// Ecran simplu pentru stările în care ora nu poate porni.
function Ecran({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-svh place-items-center bg-bg px-6 text-center">
      <div>{children}</div>
    </div>
  )
}

export default CockpitPage
