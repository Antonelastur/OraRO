import { FileText, Download } from 'lucide-react'
import { caleMaterial } from '../lib/utils.ts'

// Afișează fișa de lucru, urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
// Descărcabilă direct, gândită pentru tipărit la clasă.
function Fisa({ fisa }) {
  if (!fisa) return null

  return (
    <section className="material-card material-fisa rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5">
      <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
        <FileText className="h-4.5 w-4.5" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-ink">Fișă de lucru</h3>
      </div>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-color)] hover:underline"
        href={caleMaterial(fisa.fisier)}
        download
      >
        Descarcă PDF
        <Download className="h-3.5 w-3.5" />
      </a>
    </section>
  )
}

export default Fisa
