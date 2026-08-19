import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Breadcrumb } from '@/components/Breadcrumb'
import { clase } from '@/data/clase.js'
import { areMateriale } from '@/lib/lectii'

export function ClasePage() {
  return (
    <section>
      <Breadcrumb items={[{ label: 'Clase' }]} />
      <h1 className="text-2xl font-bold text-ink">Clase</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {Object.entries(clase).map(([id, dateClasa]) => {
          const totalLectii = dateClasa.unitati.reduce((n, u) => n + u.lectii.length, 0)
          const cuMateriale = dateClasa.unitati.reduce(
            (n, u) => n + u.lectii.filter(areMateriale).length,
            0,
          )
          return (
            <motion.div key={id} whileHover={{ y: -3 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
              <Link
                to={`/${id}`}
                className="block rounded-2xl border border-border bg-bg-alt p-6 shadow-card hover:shadow-elevated"
              >
                <h2 className="text-lg font-semibold text-ink">{dateClasa.titlu}</h2>
                <p className="mt-1 text-sm text-ink-soft">
                  {dateClasa.unitati.length > 0
                    ? `${dateClasa.unitati.length} ${dateClasa.unitati.length === 1 ? 'unitate' : 'unități'} · ${totalLectii} lecții · ${cuMateriale} cu materiale`
                    : 'În lucru'}
                </p>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ClasePage
