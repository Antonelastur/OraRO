import { Video as VideoIcon, ArrowUpRight } from 'lucide-react'
import { MaterialCard } from './MaterialCard.tsx'
import { caleMaterial } from '../lib/utils.ts'

// Afișează linkul spre videoul lecției (NotebookLM sau materiale aduse
// de profesoară). Vizionarea integrală, obligatorie înainte de a lega linkul.
// Un link care începe cu „/” e un fișier din public/materiale, deci primește baza aplicației.
function Video({ video }) {
  if (!video?.link) return null
  const href = video.link.startsWith('/') ? caleMaterial(video.link) : video.link

  return (
    <MaterialCard tip="video" titlu="Video" Icon={VideoIcon}>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-ink)] hover:underline"
        href={href}
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
