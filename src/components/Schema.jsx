// Afișează schema unei lecții, finalizată vizual în Canva
// și urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Schema({ schema }) {
  if (!schema) return null

  return (
    <section className="material material-schema">
      <h3>Schemă</h3>
      <img src={schema.fisier} alt={schema.titlu ?? ''} />
    </section>
  )
}

export default Schema
