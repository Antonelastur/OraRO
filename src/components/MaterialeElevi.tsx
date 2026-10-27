// Materialele pe care le au elevii la oră: prezentarea, videoul, fișele de lucru
// și de exerciții, jocul, infograficul și schema. Fără test: are linkul privat
// spre varianta B și baremul. Le folosesc și pagina lecției, și cockpitul.
import Prezentare from '@/components/Prezentare.jsx'
import Video from '@/components/Video.jsx'
import Fisa from '@/components/Fisa.jsx'
import Joc from '@/components/Joc/index.jsx'
import Infografic from '@/components/Infografic.jsx'
import Schema from '@/components/Schema.jsx'
import { materialeElevi } from '@/lib/elevi'
import type { Lectie, MaterialElev } from '@/types'

// `tipuri` limitează afișarea la materialele unui pas; fără el le arată pe toate.
export function MaterialeElevi({ lectie, className = '', tipuri }: { lectie: Lectie; className?: string; tipuri?: MaterialElev[] }) {
  const arata = materialeElevi(lectie).filter((tip) => !tipuri || tipuri.includes(tip as MaterialElev))
  if (arata.length === 0) return null
  const { materiale } = lectie
  const ia = <T,>(tip: MaterialElev, valoare: T): T | null => (arata.includes(tip) ? valoare : null)

  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      <Prezentare prezentare={ia('prezentare', materiale.prezentare)} />
      <Video video={ia('video', materiale.video)} />
      <Fisa fisa={ia('fisa', materiale.fisa)} />
      <Joc joc={ia('joc', materiale.joc)} />
      <Infografic infografic={ia('infografic', materiale.infografic)} />
      <Schema schema={ia('schema', materiale.schema)} />
    </div>
  )
}

export default MaterialeElevi
