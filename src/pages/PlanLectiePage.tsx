// Planul lecției, pentru profesoară: planul cu instrucțiunile, jurnalul orei și
// testul privat. Stă în Bibliotecă și se deschide pe laptopul ei, nu pe tablă.
// Ecranul elevilor e pagina lecției și cockpitul. Vezi docs/ux.md, secțiunea 4.
import { Link, useParams } from 'react-router-dom'
import { Play, Presentation } from 'lucide-react'
import { clase } from '@/data/clase.js'
import { Breadcrumb } from '@/components/Breadcrumb'
import { PlanProfesor } from '@/components/PlanProfesor'
import { JurnalLectie } from '@/components/JurnalLectie'
import Test from '@/components/Test.jsx'
import type { Clase } from '@/types'

const CLASE = clase as unknown as Clase

export function PlanLectiePage() {
  const { clasa, unitate, lectie } = useParams()
  const dateClasa = CLASE[clasa!]
  const dateUnitate = dateClasa?.unitati.find((u) => u.id === unitate)
  const dateLectie = dateUnitate?.lectii.find((l) => l.id === lectie)

  if (!dateClasa || !dateUnitate || !dateLectie) {
    return <p>Lecția „{lectie}" nu există în unitatea „{unitate}".</p>
  }

  const caleLectie = `/${clasa}/${unitate}/${lectie}`
  const areEtape = (dateLectie.planLectie?.desfasurare?.length ?? 0) > 0

  return (
    <section>
      <Breadcrumb
        items={[
          { label: 'Bibliotecă', to: '/biblioteca' },
          { label: dateLectie.titlu },
        ]}
      />
      <p className="text-sm font-medium text-accent-ink">Plan de lecție</p>
      <h1 className="mt-1 text-2xl font-bold text-ink lg:text-3xl">{dateLectie.titlu}</h1>
      <p className="mt-1 text-sm text-ink-soft">
        {dateClasa.titlu} · {dateUnitate.titlu}
      </p>
      <p className="mt-3 inline-block rounded-full border border-border bg-bg-alt px-3 py-1 text-xs text-ink-soft">
        Sursă manual: {dateLectie.sursaManual}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {areEtape && (
          <Link
            to={`${caleLectie}/cockpit`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-navy hover:brightness-105"
          >
            <Play className="h-4 w-4" aria-hidden="true" />
            Pornește ora (ecranul elevilor)
          </Link>
        )}
        <Link
          to={caleLectie}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-alt px-5 py-3 text-sm font-semibold text-ink hover:-translate-y-0.5"
        >
          <Presentation className="h-4 w-4" aria-hidden="true" />
          Vezi ce văd elevii
        </Link>
      </div>

      {dateLectie.planLectie ? (
        <PlanProfesor plan={dateLectie.planLectie} />
      ) : (
        <p className="mt-8 text-ink-soft">Lecția nu are încă un plan de lecție.</p>
      )}

      <JurnalLectie clasa={clasa!} unitate={unitate!} lectie={lectie!} />

      {dateLectie.materiale.test && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Test test={dateLectie.materiale.test} />
        </div>
      )}
    </section>
  )
}

export default PlanLectiePage
