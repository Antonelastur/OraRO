// Afișează infograficul unei lecții, finalizat vizual în Canva
// și urcat în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Infografic({ infografic }) {
  if (!infografic) return null

  return (
    <section className="material material-infografic">
      <h3>Infografic</h3>
      <img src={infografic.fisier} alt={infografic.titlu ?? ''} />
    </section>
  )
}

export default Infografic
