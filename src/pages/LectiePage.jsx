import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Play } from 'lucide-react'
import { clase } from '../data/clase.js'
import { Breadcrumb } from '../components/Breadcrumb.tsx'
import Prezentare from '../components/Prezentare.jsx'
import Video from '../components/Video.jsx'
import Test from '../components/Test.jsx'
import Fisa from '../components/Fisa.jsx'
import Joc from '../components/Joc/index.jsx'
import Infografic from '../components/Infografic.jsx'
import Schema from '../components/Schema.jsx'
import { PlanProfesor } from '../components/PlanProfesor.tsx'
import { areMateriale } from '../lib/lectii.ts'

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
      <Breadcrumb
        items={[
          { label: 'Clase', to: '/clase' },
          { label: dateClasa.titlu, to: `/${clasa}` },
          { label: dateUnitate.titlu, to: `/${clasa}/${unitate}` },
          { label: dateLectie.titlu },
        ]}
      />
      <h1 className="text-2xl font-bold text-ink lg:text-3xl">{dateLectie.titlu}</h1>

      {dateLectie.obiective?.length > 0 && (
        <ul className="mt-4 flex flex-col gap-2">
          {dateLectie.obiective.map((obiectiv) => (
            <li key={obiectiv} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-good" />
              <span>{obiectiv}</span>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-3 inline-block rounded-full border border-border bg-bg-alt px-3 py-1 text-xs text-ink-soft">
        Sursă manual: {dateLectie.sursaManual}
      </p>

      {/* Intrarea în cockpit. Apare doar dacă lecția are un plan cu etape. */}
      {dateLectie.planLectie?.desfasurare?.length > 0 && (
        <div className="mt-6">
          <Link
            to={`/${clasa}/${unitate}/${lectie}/cockpit`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-navy hover:brightness-105"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Start oră
          </Link>
          <p className="mt-2 text-xs text-ink-soft">
            {dateLectie.planLectie.desfasurare.length} etape · {dateLectie.planLectie.durata} min
          </p>
        </div>
      )}

      {areMateriale(dateLectie) ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Prezentare prezentare={materiale.prezentare} />
          <Video video={materiale.video} />
          <Fisa fisa={materiale.fisa} />
          <Joc joc={materiale.joc} />
          <Infografic infografic={materiale.infografic} />
          <Schema schema={materiale.schema} />
          <Test test={materiale.test} />
        </div>
      ) : (
        <p className="mt-8 text-ink-soft">Materialele pentru această lecție sunt încă în lucru.</p>
      )}

      <PlanProfesor plan={dateLectie.planLectie} />
    </section>
  )
}

export default LectiePage
