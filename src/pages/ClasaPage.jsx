import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { clase } from '../data/clase.js'
import { Breadcrumb } from '../components/Breadcrumb.tsx'
import { ProgresBara } from '../components/ProgresBara.tsx'
import { areMateriale } from '../lib/lectii.ts'

function ClasaPage() {
  const { clasa } = useParams()
  const dateClasa = clase[clasa]

  if (!dateClasa) {
    return <p>Clasa „{clasa}" nu există în OraRO.</p>
  }

  return (
    <section>
      <Breadcrumb items={[{ label: 'Clase', to: '/clase' }, { label: dateClasa.titlu }]} />
      <h1 className="text-2xl font-bold text-ink">{dateClasa.titlu}</h1>

      {dateClasa.unitati.length === 0 ? (
        <p className="mt-8 text-ink-soft">Încă nu există nicio unitate aprobată pentru această clasă.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {dateClasa.unitati.map((unitate) => {
            const total = unitate.lectii.length
            const cuMateriale = unitate.lectii.filter(areMateriale).length
            return (
              <motion.div key={unitate.id} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
                <Link
                  to={`/${clasa}/${unitate.id}`}
                  className="block rounded-2xl border border-border bg-bg-alt p-6 shadow-card hover:shadow-elevated"
                >
                  <h2 className="text-lg font-semibold text-ink">{unitate.titlu}</h2>
                  <p className="mt-1 text-sm text-ink-soft">
                    {total} {total === 1 ? 'lecție' : 'lecții'}
                  </p>
                  <ProgresBara className="mt-3" compact gata={cuMateriale} total={total} />
                </Link>
              </motion.div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ClasaPage
