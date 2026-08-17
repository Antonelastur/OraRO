// Afișează doar linkul spre Google Forms. Punctajul și forma finală
// a testului rămân la latitudinea profesoarei, nu se generează aici.
function Test({ test }) {
  if (!test?.linkGoogleForms) return null

  return (
    <section className="material material-test">
      <h3>Test</h3>
      <a href={test.linkGoogleForms} target="_blank" rel="noreferrer">
        Deschide testul
      </a>
    </section>
  )
}

export default Test
