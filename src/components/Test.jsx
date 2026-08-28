import { ClipboardCheck, ArrowUpRight, Download } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'
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
    <MaterialCard tip="test" titlu="Test" Icon={ClipboardCheck}>
      <div className="flex flex-col gap-1.5">
        {areLink && (
          <a
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
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
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
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
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
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
    </MaterialCard>
  )
}

export default Test
