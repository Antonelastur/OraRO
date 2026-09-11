import { FileText, Download } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'
import { caleMaterial } from '../lib/utils.ts'

// Afișează fișa de lucru și/sau fișa de exerciții, urcate în
// public/materiale/<clasa>/<unitatea>/<lectia>/. Descărcabile, pentru tipărit la clasă.
function Fisa({ fisa }) {
  const linkuri = [
    fisa?.fisier && { cale: fisa.fisier, text: 'Fișa de lucru' },
    fisa?.exercitii && { cale: fisa.exercitii, text: 'Fișa de exerciții' },
  ].filter(Boolean)
  if (linkuri.length === 0) return null

  return (
    <MaterialCard tip="fisa" titlu={linkuri.length > 1 ? 'Fișe de lucru' : linkuri[0].text} Icon={FileText}>
      <div className="flex flex-col items-start gap-1.5">
        {linkuri.map((l) => (
          <a
            key={l.cale}
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
            href={caleMaterial(l.cale)}
            download
          >
            {linkuri.length > 1 ? `${l.text}, PDF` : 'Descarcă PDF'}
            <Download className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </MaterialCard>
  )
}

export default Fisa
