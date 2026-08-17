import { useState } from 'react'

// Motor reutilizabil pentru jocuri de tip quiz și pentru escape room.
// Forma datelor, comună pentru ambele tipuri de joc:
// {
//   tip: 'quiz' | 'escape-room',
//   titlu: string,
//   pasi: [{
//     intrebare: string,
//     variante: [{ text: string, corect: boolean, explicatie: string }],
//     indiciu: string | null,
//     sursa: string,   // citare manual sau ghid, obligatorie
//   }],
// }
function Joc({ joc }) {
  const [pasCurent, setPasCurent] = useState(0)
  const [scor, setScor] = useState(0)
  const [variantaAleasa, setVariantaAleasa] = useState(null)
  const [indiciuVizibil, setIndiciuVizibil] = useState(false)

  if (!joc) return null

  const pasi = joc.pasi ?? []
  const gata = pasCurent >= pasi.length
  const pas = pasi[pasCurent]

  function alegeVarianta(varianta) {
    if (variantaAleasa) return
    setVariantaAleasa(varianta)
    if (varianta.corect) setScor((s) => s + 1)
  }

  function urmatorulPas() {
    setVariantaAleasa(null)
    setIndiciuVizibil(false)
    setPasCurent((p) => p + 1)
  }

  return (
    <section className="material material-joc">
      <h3>{joc.tip === 'escape-room' ? 'Escape room' : 'Joc'}: {joc.titlu}</h3>

      {gata ? (
        <p>
          Scor final: {scor} din {pasi.length}.
        </p>
      ) : (
        <div className="joc-pas">
          <p>{pas.intrebare}</p>
          <ul className="joc-variante">
            {pas.variante.map((varianta) => (
              <li key={varianta.text}>
                <button
                  type="button"
                  disabled={Boolean(variantaAleasa)}
                  onClick={() => alegeVarianta(varianta)}
                >
                  {varianta.text}
                </button>
              </li>
            ))}
          </ul>

          {pas.indiciu && !variantaAleasa && (
            <button type="button" onClick={() => setIndiciuVizibil(true)}>
              Arată indiciul
            </button>
          )}
          {indiciuVizibil && !variantaAleasa && <p className="joc-indiciu">{pas.indiciu}</p>}

          {variantaAleasa && (
            <div className="joc-feedback">
              <p>{variantaAleasa.corect ? 'Corect.' : 'Nu tocmai.'}</p>
              <p>{variantaAleasa.explicatie}</p>
              <p className="joc-sursa">Sursă: {pas.sursa}</p>
              <button type="button" onClick={urmatorulPas}>
                {pasCurent + 1 < pasi.length ? 'Pasul următor' : 'Vezi scorul'}
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default Joc
