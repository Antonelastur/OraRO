// Alege jocul potrivit pentru o etapă: sortare, extragere la sorți sau împărțire în grupe.
import { JocExtragere } from '@/components/JocExtragere'
import { JocGrupe } from '@/components/JocGrupe'
import { JocSortare } from '@/components/JocSortare'
import type { JocPeTabla as DateJoc } from '@/types'

export function JocPeTabla({ joc }: { joc: DateJoc }) {
  switch (joc.tip) {
    case 'sortare':
      return <JocSortare joc={joc} />
    case 'extragere':
      return <JocExtragere joc={joc} />
    case 'grupe':
      return <JocGrupe joc={joc} />
  }
}

export default JocPeTabla
