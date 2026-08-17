import { Link, useParams } from 'react-router-dom'
import { clase } from '../data/clase.js'
import Prezentare from '../components/Prezentare.jsx'
import Video from '../components/Video.jsx'
import Test from '../components/Test.jsx'
import Fisa from '../components/Fisa.jsx'
import Joc from '../components/Joc/index.jsx'
import Infografic from '../components/Infografic.jsx'
import Schema from '../components/Schema.jsx'

function LectiePage() {
  const { clasa, unitate, lectie } = useParams()
  const dateClasa = clase[clasa]
  const dateUnitate = dateClasa?.unitati.find((u) => u.id === unitate)
  const dateLectie = dateUnitate?.lectii.find((l) => l.id === lectie)

  if (!dateClasa || !dateUnitate || !dateLectie) {
    return <p>Lecția „{lectie}" nu există în unitatea „{unitate}".</p>
  }

  const { materiale } = dateLectie

  return (
    <section>
      <p>
        <Link to={`/${clasa}/${unitate}`}>{dateUnitate.titlu}</Link>
      </p>
      <h1>{dateLectie.titlu}</h1>
      {dateLectie.obiective?.length > 0 && (
        <ul>
          {dateLectie.obiective.map((obiectiv) => (
            <li key={obiectiv}>{obiectiv}</li>
          ))}
        </ul>
      )}
      <p className="sursa-manual">Sursă manual: {dateLectie.sursaManual}</p>

      <Prezentare prezentare={materiale.prezentare} />
      <Video video={materiale.video} />
      <Fisa fisa={materiale.fisa} />
      <Joc joc={materiale.joc} />
      <Infografic infografic={materiale.infografic} />
      <Schema schema={materiale.schema} />
      <Test test={materiale.test} />
    </section>
  )
}

export default LectiePage
