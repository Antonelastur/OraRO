import { Presentation, ArrowUpRight } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'
import { caleMaterial } from '../lib/utils.ts'

// Afișează prezentarea unei lecții, exportată din Canva sau NotebookLM
// și urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Prezentare({ prezentare }) {
  if (!prezentare) return null

  return (
    <MaterialCard tip="prezentare" titlu="Prezentare" Icon={Presentation}>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
        href={caleMaterial(prezentare.fisier)}
        target="_blank"
        rel="noreferrer"
      >
        Deschide prezentarea
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </MaterialCard>
  )
}

export default Prezentare
