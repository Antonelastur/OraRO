import { FileText, Download } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'
import { caleMaterial } from '../lib/utils.ts'

// Afișează fișa de lucru, urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
// Descărcabilă direct, gândită pentru tipărit la clasă.
function Fisa({ fisa }) {
  if (!fisa) return null

  return (
    <MaterialCard tip="fisa" titlu="Fișă de lucru" Icon={FileText}>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
        href={caleMaterial(fisa.fisier)}
        download
      >
        Descarcă PDF
        <Download className="h-3.5 w-3.5" />
      </a>
    </MaterialCard>
  )
}

export default Fisa
