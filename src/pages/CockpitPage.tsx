// Cockpitul orei. Mod special, fără sidebar și fără antet, proiectat pe tablă.
// Arată doar ce trebuie să știe elevii: pasul, cronometrul, materialele și tema.
// Planul de lecție, jurnalul și reflecția sunt în Bibliotecă, pe laptopul
// profesoarei, care nu e legat la tablă. Vezi docs/ux.md, secțiunile 5 și 14.
//
// Cronometrul merge pe ceasul real, iar pasul și timpul se păstrează dacă pagina
// se reîncarcă în timpul orei. Logica e în src/lib/cockpit.ts.
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Check, ChevronLeft, ChevronRight, Maximize, Minimize, Pause, Play, RotateCcw, Volume2, VolumeX, X } from 'lucide-react'
import { clase } from '../data/clase.js'
import { blocuriOra, durataTotala, formateazaCeas } from '@/lib/ora'
import {
  citeste, esteNeatinsa, mutaLa, opreste, porneste, reseteazaPas, salveaza,
  secundePlanRamase, secundeRamase, semnalSonor, stareInitiala, sterge, type StareCockpit,
} from '@/lib/cockpit'
import { etapaTemei, temaAcasa } from '@/lib/elevi'
import { MaterialeElevi } from '@/components/MaterialeElevi'
import type { Clase } from '@/types'

const CLASE = clase as unknown as Clase

// Mărimea textului instrucțiunilor. Implicit 1, pentru proiector.
const SCARI_TEXT = [0.85, 1, 1.3, 1.7]
const CHEIE_TEXT = 'oraro:cockpit-text'
const CHEIE_SUNET = 'oraro:cockpit-sunet'

function citesteSetare(cheie: string): string | null {
  try {
    return localStorage.getItem(cheie)
  } catch {
    return null
  }
}

function scrieSetare(cheie: string, valoare: string) {
  try {
    localStorage.setItem(cheie, valoare)
  } catch {
    // Setarea ține până la reîncărcare.
  }
}

function ceasul(ms: number): string {
  return new Date(ms).toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })
}

const butonMic =
  'inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5 disabled:opacity-40'

export function CockpitPage() {
  const { clasa, unitate, lectie } = useParams()
  const navigate = useNavigate()
  const dateClasa = CLASE[clasa!]
  const dateUnitate = dateClasa?.unitati.find((u) => u.id === unitate)
  const dateLectie = dateUnitate?.lectii.find((l) => l.id === lectie)

  const blocuri = useMemo(() => (dateLectie ? blocuriOra(dateLectie) : []), [dateLectie])
  const tema = useMemo(() => (dateLectie ? temaAcasa(dateLectie) : []), [dateLectie])
  const pasTema = useMemo(() => (dateLectie ? etapaTemei(dateLectie) : -1), [dateLectie])

  const caleLectie = `/${clasa}/${unitate}/${lectie}`
  // Tabla e alt calculator decât al profesoarei, deci starea orei nu depinde de grupă.
  const cheie = `${clasa}/${unitate}/${lectie}`

  // Ora întreruptă (reîncărcare, filă închisă din greșeală) se reia de unde a rămas.
  const [reluata] = useState(() => (blocuri.length ? citeste(cheie, Date.now(), blocuri) : null))
  const [stare, setStare] = useState<StareCockpit>(() => reluata ?? stareInitiala(blocuri))
  const [anuntReluare, setAnuntReluare] = useState(() => Boolean(reluata && !esteNeatinsa(reluata, blocuri)))
  const [acum, setAcum] = useState(() => Date.now())
  const [scaraText, setScaraText] = useState(() => {
    const brut = citesteSetare(CHEIE_TEXT)
    const salvat = brut === null ? NaN : Number(brut)
    return Number.isInteger(salvat) && salvat >= 0 && salvat < SCARI_TEXT.length ? salvat : 1
  })
  const [sunet, setSunet] = useState(() => citesteSetare(CHEIE_SUNET) !== '0')
  const [ecranComplet, setEcranComplet] = useState(false)

  const merge = stare.scadenta !== null
  const blocCurent = blocuri[stare.pas]
  const ramas = secundeRamase(stare, acum)
  const ultimulPas = stare.pas === blocuri.length - 1

  // Ceasul interfeței: des cât merge cronometrul, rar altfel (pentru ora estimată de final).
  useEffect(() => {
    const actualizeaza = () => setAcum(Date.now())
    actualizeaza()
    const id = setInterval(actualizeaza, merge ? 250 : 1000)
    document.addEventListener('visibilitychange', actualizeaza)
    return () => {
      clearInterval(id)
      document.removeEventListener('visibilitychange', actualizeaza)
    }
  }, [merge])

  // Starea se păstrează la fiecare schimbare; o oră neatinsă nu lasă nimic în urmă.
  useEffect(() => {
    if (blocuri.length === 0) return
    if (esteNeatinsa(stare, blocuri)) sterge(cheie)
    else salveaza(cheie, stare)
  }, [stare, blocuri, cheie])

  // Semnal la expirarea etapei, o singură dată pe etapă. Etapele fără durată în plan nu sună.
  const anuntat = useRef(ramas <= 0)
  useEffect(() => {
    if (ramas > 0) {
      anuntat.current = false
    } else if (merge && !anuntat.current && (blocCurent?.minute ?? 0) > 0) {
      anuntat.current = true
      if (sunet) semnalSonor()
    }
  }, [ramas, merge, sunet, blocCurent])

  useEffect(() => {
    const laSchimbare = () => setEcranComplet(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', laSchimbare)
    return () => document.removeEventListener('fullscreenchange', laSchimbare)
  }, [])

  const comutaCronometru = useCallback(
    () => setStare((s) => (s.scadenta === null ? porneste(s, Date.now()) : opreste(s, Date.now()))),
    [],
  )
  const inainte = useCallback(() => setStare((s) => mutaLa(s, s.pas + 1, blocuri)), [blocuri])
  const inapoi = useCallback(() => setStare((s) => mutaLa(s, s.pas - 1, blocuri)), [blocuri])
  const laPas = useCallback((pas: number) => setStare((s) => mutaLa(s, pas, blocuri)), [blocuri])
  // „Închide ora" păstrează starea, ca ora să se poată relua. „Încheie ora", de la
  // ultimul pas, o șterge.
  const iese = useCallback(() => navigate(caleLectie), [navigate, caleLectie])
  const incheie = useCallback(() => {
    sterge(cheie)
    navigate(caleLectie)
  }, [cheie, navigate, caleLectie])

  const comutaEcranComplet = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen?.()
    else void document.documentElement.requestFullscreen?.().catch(() => {})
  }, [])

  const schimbaText = useCallback((delta: number) => {
    setScaraText((s) => {
      const nou = Math.min(Math.max(s + delta, 0), SCARI_TEXT.length - 1)
      scrieSetare(CHEIE_TEXT, String(nou))
      return nou
    })
  }, [])

  const comutaSunet = useCallback(() => {
    setSunet((s) => {
      scrieSetare(CHEIE_SUNET, s ? '0' : '1')
      return !s
    })
  }, [])

  useEffect(() => {
    function laTasta(e: KeyboardEvent) {
      const tinta = e.target as HTMLElement | null
      if (tinta && ['INPUT', 'TEXTAREA'].includes(tinta.tagName)) return
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (e.code === 'Space') {
        e.preventDefault()
        comutaCronometru()
      } else if (e.key === 'ArrowRight') {
        inainte()
      } else if (e.key === 'ArrowLeft') {
        inapoi()
      } else if (e.key === 'f' || e.key === 'F') {
        comutaEcranComplet()
      } else if (e.key === '+' || e.key === '=') {
        schimbaText(1)
      } else if (e.key === '-') {
        schimbaText(-1)
      }
    }
    window.addEventListener('keydown', laTasta)
    return () => window.removeEventListener('keydown', laTasta)
  }, [inainte, inapoi, comutaCronometru, comutaEcranComplet, schimbaText])

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
  const expirat = ramas <= 0 && blocCurent.minute > 0
  const restPlan = secundePlanRamase(blocuri, stare.pas, ramas)
  const scara = SCARI_TEXT[scaraText]
  const aratTema = tema.length > 0 && (stare.pas === pasTema || ultimulPas)

  return (
    <div className="flex min-h-svh flex-col bg-bg text-ink">
      {/* Antet minim: cine, cât a mai rămas, comenzile de proiecție, ieșire. */}
      <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border px-5 py-3 lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink lg:text-base">{dateLectie.titlu}</p>
          <p className="truncate text-xs text-ink-soft lg:text-sm">
            {dateClasa.titlu} · {dateUnitate.titlu} · {total} min
          </p>
        </div>

        <p className="text-sm tabular-nums text-ink lg:text-base" aria-label="Timp rămas din plan">
          <span className="font-semibold">Mai ai în plan {Math.ceil(restPlan / 60)} min</span>
          <span className="text-ink-soft"> · gata la {ceasul(acum + restPlan * 1000)}</span>
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => schimbaText(-1)}
            disabled={scaraText === 0}
            aria-label="Micșorează textul"
            className={butonMic}
          >
            A−
          </button>
          <button
            type="button"
            onClick={() => schimbaText(1)}
            disabled={scaraText === SCARI_TEXT.length - 1}
            aria-label="Mărește textul"
            className={butonMic}
          >
            A+
          </button>
          <button
            type="button"
            onClick={comutaSunet}
            aria-pressed={sunet}
            aria-label={sunet ? 'Oprește sunetul de final' : 'Pornește sunetul de final'}
            className={butonMic}
          >
            {sunet ? <Volume2 className="h-4 w-4" aria-hidden="true" /> : <VolumeX className="h-4 w-4" aria-hidden="true" />}
          </button>
          {typeof document !== 'undefined' && document.fullscreenEnabled && (
            <button type="button" onClick={comutaEcranComplet} className={butonMic}>
              {ecranComplet ? (
                <Minimize className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Maximize className="h-4 w-4" aria-hidden="true" />
              )}
              {ecranComplet ? 'Ieși din ecran complet' : 'Ecran complet'}
            </button>
          )}
          <button type="button" onClick={iese} className={butonMic}>
            <X className="h-4 w-4" aria-hidden="true" />
            Închide ora
          </button>
        </div>
      </header>

      {anuntReluare && (
        <div
          role="status"
          className="flex flex-wrap items-center gap-3 border-b border-border bg-gold-soft px-5 py-2.5 text-sm text-ink lg:px-8"
        >
          <span>
            Am reluat ora de unde ai rămas: pasul {stare.pas + 1}/{blocuri.length}.
          </span>
          <button
            type="button"
            onClick={() => {
              setStare(stareInitiala(blocuri))
              setAnuntReluare(false)
            }}
            className="rounded-lg border border-border bg-bg-alt px-3 py-1.5 font-medium hover:bg-ink/5"
          >
            Începe de la capăt
          </button>
          <button type="button" onClick={() => setAnuntReluare(false)} className="text-ink-soft underline hover:text-ink">
            Continuă
          </button>
        </div>
      )}

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Zona principală, lizibilă de la distanță. */}
        <main
          className={`flex flex-1 flex-col justify-center px-6 py-8 lg:px-12 ${expirat && merge ? 'bg-bad-soft' : ''}`}
        >
          <p className="text-base font-semibold uppercase tracking-wide text-accent-ink lg:text-lg">
            Pasul {stare.pas + 1}/{blocuri.length} · {blocCurent.titlu}
          </p>

          <p
            className={`mt-4 font-bold tabular-nums leading-none ${depasit ? 'text-bad' : 'text-ink'}`}
            style={{ fontSize: 'clamp(4rem, min(13vw, 22vh), 10rem)' }}
            aria-live="off"
          >
            {formateazaCeas(ramas)}
          </p>
          <p className={`mt-2 text-base lg:text-lg ${expirat ? 'font-semibold text-bad' : 'text-ink-soft'}`}>
            {blocCurent.minute === 0
              ? 'Etapa nu are durată stabilită în plan'
              : expirat
                ? depasit
                  ? `Timpul etapei a trecut (${blocCurent.minute} min alocate)`
                  : 'Timpul etapei s-a încheiat'
                : `din ${blocCurent.minute} min alocate`}
          </p>

          {blocCurent.elevi && (
            <div
              className="mt-8 flex max-w-5xl flex-col gap-[0.6em] text-ink"
              style={{ fontSize: `calc(clamp(1.25rem, 2.3vw, 2rem) * ${scara})`, lineHeight: 1.4 }}
            >
              {blocCurent.elevi.split('\n').map((linie, i) => (
                <p key={i}>{linie}</p>
              ))}
            </div>
          )}

          {aratTema && (
            <section
              aria-label="Tema pentru acasă"
              className="mt-8 max-w-5xl rounded-2xl border border-accent bg-accent-soft p-5 lg:p-6"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-ink lg:text-base">
                Tema pentru acasă
              </h2>
              <ul className="mt-2 flex flex-col gap-2" style={{ fontSize: `calc(clamp(1.25rem, 2.3vw, 2rem) * ${scara})`, lineHeight: 1.4 }}>
                {tema.map((linie) => (
                  <li key={linie}>{linie}</li>
                ))}
              </ul>
            </section>
          )}

          <MaterialeElevi lectie={dateLectie} className="mt-8 max-w-5xl" />

          {/* Comenzile rămân la vedere chiar când textul e mare și pagina derulează. */}
          <div className="sticky bottom-0 -mx-6 mt-8 border-t border-border bg-bg px-6 py-4 lg:-mx-12 lg:px-12">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={comutaCronometru}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-lg font-semibold text-navy hover:brightness-105"
            >
              {merge ? <Pause className="h-5 w-5" aria-hidden="true" /> : <Play className="h-5 w-5" aria-hidden="true" />}
              {merge ? 'Pauză' : 'Pornește cronometrul'}
            </button>

            <button
              type="button"
              onClick={() => setStare((s) => reseteazaPas(s, blocuri))}
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-4 text-sm font-medium text-ink-soft hover:bg-ink/5"
              aria-label="Resetează cronometrul"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Resetează
            </button>

            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={inapoi}
                disabled={stare.pas === 0}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-4 text-sm font-medium text-ink-soft hover:bg-ink/5 disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                Înapoi
              </button>
              {ultimulPas ? (
                <button
                  type="button"
                  onClick={incheie}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-accent bg-accent-soft px-6 py-4 text-base font-semibold text-accent-ink hover:brightness-105"
                >
                  <Check className="h-5 w-5" aria-hidden="true" />
                  Încheie ora
                </button>
              ) : (
                <button
                  type="button"
                  onClick={inainte}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-accent bg-accent-soft px-6 py-4 text-base font-semibold text-accent-ink hover:brightness-105"
                >
                  Următorul pas
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <p className="mt-3 text-xs text-ink-soft lg:text-sm">
            Spațiu: cronometru. Săgeți: schimbă pasul. F: ecran complet. + și −: mărimea textului.
          </p>
          </div>
        </main>

        {/* Planul orei. */}
        <aside className="border-t border-border px-6 py-6 lg:w-96 lg:shrink-0 lg:border-l lg:border-t-0 lg:px-6 lg:py-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft lg:text-sm">Planul orei</p>
          <ol className="mt-3 flex flex-col gap-1">
            {blocuri.map((bloc) => {
              const parcurs = bloc.index < stare.pas
              const curent = bloc.index === stare.pas
              return (
                <li key={bloc.index}>
                  <button
                    type="button"
                    onClick={() => laPas(bloc.index)}
                    aria-current={curent ? 'step' : undefined}
                    className={`flex w-full items-start gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-ink/5 lg:text-base ${
                      curent ? 'bg-accent-soft font-semibold text-ink' : 'text-ink-soft'
                    }`}
                  >
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center">
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
                    <span className="shrink-0 tabular-nums text-xs text-ink-soft lg:text-sm">{bloc.minute}′</span>
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
