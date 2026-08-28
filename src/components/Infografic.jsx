import { LayoutTemplate } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'
import { caleMaterial } from '../lib/utils.ts'

// Afișează infograficul unei lecții, finalizat vizual în Canva
// și urcat în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Infografic({ infografic }) {
  if (!infografic) return null

  return (
    <MaterialCard tip="infografic" titlu="Infografic" Icon={LayoutTemplate}>
      <a href={caleMaterial(infografic.fisier)} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xl border border-border">
        <img src={caleMaterial(infografic.fisier)} alt={infografic.titlu ?? 'Infografic'} className="w-full" />
      </a>
      {infografic.titlu && <p className="mt-2 text-xs text-ink-soft">{infografic.titlu}</p>}
    </MaterialCard>
  )
}

export default Infografic
