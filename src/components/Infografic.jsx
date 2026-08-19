import { BarChart3 } from 'lucide-react'
import { caleMaterial } from '../lib/utils.ts'

// Afișează infograficul unei lecții, finalizat vizual în Canva
// și urcat în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Infografic({ infografic }) {
  if (!infografic) return null

  return (
    <section className="material-card material-infografic rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5">
      <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
        <BarChart3 className="h-4.5 w-4.5" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-ink">Infografic</h3>
      </div>
      <a href={caleMaterial(infografic.fisier)} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-border">
        <img src={caleMaterial(infografic.fisier)} alt={infografic.titlu ?? 'Infografic'} className="w-full" />
      </a>
      {infografic.titlu && <p className="mt-2 text-xs text-ink-soft">{infografic.titlu}</p>}
    </section>
  )
}

export default Infografic
