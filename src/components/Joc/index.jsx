import { useState } from 'react'
import { Gamepad2, ArrowUpRight } from 'lucide-react'
import { cn, caleMaterial } from '../../lib/utils.ts'

// Motor reutilizabil pentru jocuri de tip quiz și pentru escape room, plus
// jocuri de clasă fără răspunsuri corecte dintr-o sursă (intercunoaștere,
// energizante), livrate ca fișier de tipărit:
// { titlu: string, fisier: string }
//
// Forma datelor pentru quiz și escape room:
// {
//   tip: 'quiz' | 'escape-room',
//   titlu: string,
//   pasi: [{
//     intrebare: string,
//     variante: [{ text: string, corect: boolean, explicatie: string }],
//     indiciu: string | null,
//     sursa: string,   // citare manual sau ghid, obligatorie
//   }],
// }
function Joc({ joc }) {
  const [pasCurent, setPasCurent] = useState(0)
  const [scor, setScor] = useState(0)
  const [variantaAleasa, setVariantaAleasa] = useState(null)
  const [indiciuVizibil, setIndiciuVizibil] = useState(false)

  if (!joc) return null

  // Jocuri de clasă, fără răspunsuri corecte dintr-o sursă (intercunoaștere,
  // jocuri de energizare), vin ca fișier de tipărit, nu ca quiz.
  if (joc.fisier) {
    return (
      <section className="material-card material-joc rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5">
        <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
          <Gamepad2 className="h-4.5 w-4.5" aria-hidden="true" />
          <h3 className="text-sm font-semibold text-ink">Joc: {joc.titlu}</h3>
        </div>
        <a
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-color)] hover:underline"
          href={caleMaterial(joc.fisier)}
          target="_blank"
          rel="noreferrer"
        >
          Deschide jocul
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </section>
    )
  }

  const pasi = joc.pasi ?? []
  const gata = pasCurent >= pasi.length
  const pas = pasi[pasCurent]

  function alegeVarianta(varianta) {
    if (variantaAleasa) return
    setVariantaAleasa(varianta)
    if (varianta.corect) setScor((s) => s + 1)
  }

  function urmatorulPas() {
    setVariantaAleasa(null)
    setIndiciuVizibil(false)
    setPasCurent((p) => p + 1)
  }

  return (
    <section className="material-card material-joc rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5 sm:col-span-2">
      <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
        <Gamepad2 className="h-4.5 w-4.5" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-ink">
          {joc.tip === 'escape-room' ? 'Escape room' : 'Joc'}: {joc.titlu}
        </h3>
      </div>

      {gata ? (
        <p className="text-base font-medium text-ink">
          Scor final: {scor} din {pasi.length}.
        </p>
      ) : (
        <div>
          <div className="mb-4 flex flex-col gap-1.5 text-xs text-ink-soft">
            <span>
              Întrebarea {pasCurent + 1} din {pasi.length}
            </span>
            <div className="h-1.5 overflow-hidden rounded-full bg-border">
              <div
                className="h-full bg-[var(--card-color)] transition-all"
                style={{ width: `${(pasCurent / pasi.length) * 100}%` }}
              />
            </div>
          </div>

          <p className="mb-3.5 text-base font-medium text-ink">{pas.intrebare}</p>
          <ul className="flex flex-col gap-2">
            {pas.variante.map((varianta) => {
              const esteAleasa = varianta === variantaAleasa
              let stare = ''
              if (variantaAleasa) {
                if (esteAleasa) stare = varianta.corect ? 'corect' : 'gresit'
                else if (varianta.corect) stare = 'corect-ratat'
              }
              return (
                <li key={varianta.text}>
                  <button
                    type="button"
                    disabled={Boolean(variantaAleasa)}
                    onClick={() => alegeVarianta(varianta)}
                    className={cn(
                      'w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-left text-sm text-ink transition-colors',
                      !variantaAleasa && 'hover:border-[var(--card-color)]',
                      stare === 'corect' && 'border-good bg-good-soft font-semibold text-good',
                      stare === 'gresit' && 'border-bad bg-bad-soft text-bad',
                      stare === 'corect-ratat' && 'border-dashed border-good',
                    )}
                  >
                    {varianta.text}
                  </button>
                </li>
              )
            })}
          </ul>

          {pas.indiciu && !variantaAleasa && (
            <button
              type="button"
              onClick={() => setIndiciuVizibil(true)}
              className="mt-3 text-xs font-medium text-[var(--card-color)] hover:underline"
            >
              Arată indiciul
            </button>
          )}
          {indiciuVizibil && !variantaAleasa && (
            <p className="mt-2 text-sm italic text-ink-soft">{pas.indiciu}</p>
          )}

          {variantaAleasa && (
            <div className="mt-4 flex flex-col items-start gap-2 border-t border-border pt-3.5">
              <p className={cn('text-sm font-semibold', variantaAleasa.corect ? 'text-good' : 'text-bad')}>
                {variantaAleasa.corect ? 'Corect.' : 'Nu tocmai.'}
              </p>
              <p className="text-sm text-ink-soft">{variantaAleasa.explicatie}</p>
              <p className="text-xs italic text-ink-soft">Sursă: {pas.sursa}</p>
              <button
                type="button"
                onClick={urmatorulPas}
                className="mt-1 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-ink"
              >
                {pasCurent + 1 < pasi.length ? 'Pasul următor' : 'Vezi scorul'}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Joc
