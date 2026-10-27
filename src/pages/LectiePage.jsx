import { Link, useParams } from 'react-router-dom'
import { CheckCircle2, Play } from 'lucide-react'
import { clase } from '../data/clase.js'
import { Breadcrumb } from '../components/Breadcrumb.tsx'
import { MaterialeElevi } from '../components/MaterialeElevi.tsx'
import { materialeElevi, temaAcasa } from '../lib/elevi.ts'

// Pagina lecției e ecranul elevilor: se deschide și pe tablă. Planul de lecție,
// jurnalul orei și testul privat sunt în Bibliotecă, pe laptopul profesoarei
// (PlanLectiePage). Vezi docs/ux.md, secțiunea 4.

function LectiePage() {
  const { clasa, unitate, lectie } = useParams()
  const dateClasa = clase[clasa]
  const dateUnitate = dateClasa?.unitati.find((u) => u.id === unitate)
  const dateLectie = dateUnitate?.lectii.find((l) => l.id === lectie)

  if (!dateClasa || !dateUnitate || !dateLectie) {
    return <p>Lecția „{lectie}" nu există în unitatea „{unitate}".</p>
  }

  const tema = temaAcasa(dateLectie)

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
        <>
        <h2 className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink-soft">Ce învățăm azi</h2>
        <ul className="mt-2 flex flex-col gap-2">
          {dateLectie.obiective.map((obiectiv) => (
            <li key={obiectiv} className="flex items-start gap-2.5 text-sm text-ink-soft">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-good" />
              <span>{obiectiv}</span>
            </li>
          ))}
        </ul>
        </>
      )}

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

      {materialeElevi(dateLectie).length > 0 ? (
        <MaterialeElevi lectie={dateLectie} className="mt-6" />
      ) : (
        <p className="mt-8 text-ink-soft">Materialele pentru această lecție sunt încă în lucru.</p>
      )}

      {tema.length > 0 && (
        <section aria-label="Tema pentru acasă" className="mt-8 rounded-2xl border border-accent bg-accent-soft p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-ink">Tema pentru acasă</h2>
          <ul className="mt-2 flex flex-col gap-1.5 text-base text-ink">
            {tema.map((linie) => (
              <li key={linie}>{linie}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  )
}

export default LectiePage
