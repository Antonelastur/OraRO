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
import type { Lectie } from '@/types'

export function MaterialeElevi({ lectie, className = '' }: { lectie: Lectie; className?: string }) {
  if (materialeElevi(lectie).length === 0) return null
  const { materiale } = lectie

  return (
    <div className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      <Prezentare prezentare={materiale.prezentare} />
      <Video video={materiale.video} />
      <Fisa fisa={materiale.fisa} />
      <Joc joc={materiale.joc} />
      <Infografic infografic={materiale.infografic} />
      <Schema schema={materiale.schema} />
    </div>
  )
}

export default MaterialeElevi
