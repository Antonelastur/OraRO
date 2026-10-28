// Alege jocul potrivit pentru o etapă: sortare, extragere la sorți, împărțire în grupe sau morișca.
import { JocExtragere } from '@/components/JocExtragere'
import { JocGrupe } from '@/components/JocGrupe'
import { JocMorisca } from '@/components/JocMorisca'
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
    case 'morisca':
      return <JocMorisca joc={joc} />
  }
}

export default JocPeTabla
