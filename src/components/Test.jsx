import { ClipboardCheck, ArrowUpRight, Download } from 'lucide-react'
import { caleMaterial } from '../lib/utils.ts'

// Afișează linkurile spre Google Forms și, opțional, o variantă PDF
// descărcabilă/tipăribilă. Punctajul și forma finală a testului rămân
// la latitudinea profesoarei, nu se generează aici.
// Opțional, testul poate avea mai multe niveluri de dificultate
// (fiecare cu link propriu) și o rubrică/descriptori de evaluare.
function Test({ test }) {
  const areNiveluri = test?.niveluri?.length > 0
  const areLink = Boolean(test?.linkGoogleForms)
  const areRubrica = Boolean(test?.rubrica)
  const arePrintabil = Boolean(test?.fisierPrintabil)

  if (!areNiveluri && !areLink && !areRubrica && !arePrintabil) return null

  return (
    <section className="material-card material-test rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5">
      <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
        <ClipboardCheck className="h-4.5 w-4.5" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-ink">Test</h3>
      </div>

      <div className="flex flex-col gap-1.5">
        {areLink && (
          <a
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-color)] hover:underline"
            href={test.linkGoogleForms}
            target="_blank"
            rel="noreferrer"
          >
            Deschide testul
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}

        {arePrintabil && (
          <a
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-color)] hover:underline"
            href={caleMaterial(test.fisierPrintabil)}
            download
          >
            Descarcă PDF, de tipărit
            <Download className="h-3.5 w-3.5" />
          </a>
        )}

        {areNiveluri && (
          <ul className="flex flex-col gap-1.5">
            {test.niveluri.map((nivel) => (
              <li key={nivel.nivel}>
                <a
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-color)] hover:underline"
                  href={nivel.linkGoogleForms}
                  target="_blank"
                  rel="noreferrer"
                >
                  {nivel.nivel}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {areRubrica && <p className="mt-3 whitespace-pre-line text-sm text-ink-soft">{test.rubrica}</p>}
    </section>
  )
}

export default Test
