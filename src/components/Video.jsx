// Afișează linkul spre videoul lecției (NotebookLM sau materiale aduse
// de profesoară). Vizionarea integrală, obligatorie înainte de a lega linkul.
function Video({ video }) {
  if (!video?.link) return null

  return (
    <section className="material material-video">
      <h3>Video</h3>
      <a href={video.link} target="_blank" rel="noreferrer">
        Deschide videoul
      </a>
    </section>
  )
}

export default Video
