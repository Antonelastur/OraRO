// Afișează fișa de lucru, urcată în public/materiale/<clasa>/<unitatea>/<lectia>/.
function Fisa({ fisa }) {
  if (!fisa) return null

  return (
    <section className="material material-fisa">
      <h3>Fișă de lucru</h3>
      <a href={fisa.fisier} target="_blank" rel="noreferrer">
        Deschide fișa
      </a>
    </section>
  )
}

export default Fisa
