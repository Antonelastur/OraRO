// Afișează prezentarea unei lecții, exportată din Canva sau NotebookLM
// și urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Prezentare({ prezentare }) {
  if (!prezentare) return null

  return (
    <section className="material material-prezentare">
      <h3>Prezentare</h3>
      <a href={prezentare.fisier} target="_blank" rel="noreferrer">
        Deschide prezentarea
      </a>
    </section>
  )
}

export default Prezentare
