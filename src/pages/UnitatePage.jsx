import { Link, useParams } from 'react-router-dom'
import { clase } from '../data/clase.js'

function UnitatePage() {
  const { clasa, unitate } = useParams()
  const dateClasa = clase[clasa]
  const dateUnitate = dateClasa?.unitati.find((u) => u.id === unitate)

  if (!dateClasa || !dateUnitate) {
    return <p>Unitatea „{unitate}" nu există pentru clasa „{clasa}".</p>
  }

  return (
    <section>
      <p>
        <Link to={`/${clasa}`}>{dateClasa.titlu}</Link>
      </p>
      <h1>{dateUnitate.titlu}</h1>
      <table>
        <thead>
          <tr>
            <th>Lecție</th>
            <th>Materiale</th>
          </tr>
        </thead>
        <tbody>
          {dateUnitate.lectii.map((lectie) => (
            <tr key={lectie.id}>
              <td>
                <Link to={`/${clasa}/${unitate}/${lectie.id}`}>{lectie.titlu}</Link>
              </td>
              <td>
                {Object.entries(lectie.materiale)
                  .filter(([, valoare]) => (Array.isArray(valoare) ? valoare.length > 0 : valoare))
                  .map(([tip]) => tip)
                  .join(', ') || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default UnitatePage
