import { Video as VideoIcon, ArrowUpRight } from 'lucide-react'

// Afișează linkul spre videoul lecției (NotebookLM sau materiale aduse
// de profesoară). Vizionarea integrală, obligatorie înainte de a lega linkul.
function Video({ video }) {
  if (!video?.link) return null

  return (
    <section className="material-card material-video rounded-2xl border border-border border-t-[3px] border-t-[var(--card-color)] bg-bg-alt p-5">
      <div className="mb-3 flex items-center gap-2 text-[var(--card-color)]">
        <VideoIcon className="h-4.5 w-4.5" aria-hidden="true" />
        <h3 className="text-sm font-semibold text-ink">Video</h3>
      </div>
      <a
        className="inline-flex items-center gap-1 text-sm font-medium text-[var(--card-color)] hover:underline"
        href={video.link}
        target="_blank"
        rel="noreferrer"
      >
        Deschide videoul
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </section>
  )
}

export default Video
