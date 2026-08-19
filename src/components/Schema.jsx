import { Workflow } from 'lucide-react'
import { caleMaterial } from '../lib/utils.ts'

// Afișează schema unei lecții, finalizată vizual în Canva
// și urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Schema({ schema }) {
  if (!schema) return null

  return (
    <section className="material-card material-schema rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5">
      <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
        <Workflow className="h-4.5 w-4.5" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-ink">Schemă</h3>
      </div>
      <a href={caleMaterial(schema.fisier)} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-border">
        <img src={caleMaterial(schema.fisier)} alt={schema.titlu ?? 'Schemă'} className="w-full" />
      </a>
      {schema.titlu && <p className="mt-2 text-xs text-ink-soft">{schema.titlu}</p>}
    </section>
  )
}

export default Schema
