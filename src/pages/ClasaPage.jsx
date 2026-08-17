import { Link, useParams } from 'react-router-dom'
import { clase } from '../data/clase.js'

function ClasaPage() {
  const { clasa } = useParams()
  const dateClasa = clase[clasa]

  if (!dateClasa) {
    return <p>Clasa „{clasa}" nu există în OraRO.</p>
  }

  return (
    <section>
      <h1>{dateClasa.titlu}</h1>
      {dateClasa.unitati.length === 0 ? (
        <p>Încă nu există nicio unitate aprobată pentru această clasă.</p>
      ) : (
        <ul>
          {dateClasa.unitati.map((unitate) => (
            <li key={unitate.id}>
              <Link to={`/${clasa}/${unitate.id}`}>{unitate.titlu}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ClasaPage
