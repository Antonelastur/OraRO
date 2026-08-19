import { Presentation, ArrowUpRight } from 'lucide-react'
import { caleMaterial } from '../lib/utils.ts'

// Afișează prezentarea unei lecții, exportată din Canva sau NotebookLM
// și urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Prezentare({ prezentare }) {
  if (!prezentare) return null

  return (
    <section className="material-card material-prezentare rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5">
      <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
        <Presentation className="h-4.5 w-4.5" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-ink">Prezentare</h3>
      </div>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-color)] hover:underline"
        href={caleMaterial(prezentare.fisier)}
        target="_blank"
        rel="noreferrer"
      >
        Deschide prezentarea
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </section>
  )
}

export default Prezentare
