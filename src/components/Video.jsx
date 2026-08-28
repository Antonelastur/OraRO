import { Video as VideoIcon, ArrowUpRight } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'

// Afișează linkul spre videoul lecției (NotebookLM sau materiale aduse
// de profesoară). Vizionarea integrală, obligatorie înainte de a lega linkul.
function Video({ video }) {
  if (!video?.link) return null

  return (
    <MaterialCard tip="video" titlu="Video" Icon={VideoIcon}>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
        href={video.link}
        target="_blank"
        rel="noreferrer"
      >
        Deschide videoul
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </MaterialCard>
  )
}

export default Video
