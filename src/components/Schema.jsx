import { Workflow } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'
import { caleMaterial } from '../lib/utils.ts'

// Afișează schema unei lecții, finalizată vizual în Canva
// și urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Schema({ schema }) {
  if (!schema) return null

  return (
    <MaterialCard tip="schema" titlu="Schemă" Icon={Workflow}>
      <a href={caleMaterial(schema.fisier)} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-border">
        <img src={caleMaterial(schema.fisier)} alt={schema.titlu ?? 'Schemă'} className="w-full" />
      </a>
      {schema.titlu && <p className="mt-2 text-xs text-ink-soft">{schema.titlu}</p>}
    </MaterialCard>
  )
}

export default Schema
