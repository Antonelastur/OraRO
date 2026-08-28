import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { GraduationCap, LibraryBig } from 'lucide-react'
import { clase } from '@/data/clase.js'
import { materialMeta } from '@/components/materialMeta'
import { TIPURI_MATERIAL, areMateriale, toateLectiile } from '@/lib/lectii'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function DashboardPage() {
  const lectii = toateLectiile(clase)
  const totalLectii = lectii.length
  const lectiiCuMateriale = lectii.filter(({ lectie }) => areMateriale(lectie)).length

  const statisticiTipuri = TIPURI_MATERIAL.map((tip) => ({
    tip,
    ...materialMeta[tip],
    numar: lectii.filter(({ lectie }) => Boolean(lectie.materiale[tip])).length,
  })).filter((s) => s.numar > 0)

  return (
    <div>
      <p className="text-sm font-medium text-accent-ink">Dashboard</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink lg:text-4xl">OraRO</h1>
      <p className="mt-2 max-w-xl text-ink-soft">
        Lecții, fișe, jocuri și prezentări pentru ora de limba și literatura română, organizate pe clasă și
        unitate.
      </p>

      <motion.div variants={container} initial="hidden" animate="show" className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <motion.div variants={item} className="rounded-2xl border border-border bg-bg-alt p-4 shadow-card">
          <p className="text-2xl font-bold text-ink">{totalLectii}</p>
          <p className="text-xs text-ink-soft">lecții create</p>
        </motion.div>
        <motion.div variants={item} className="rounded-2xl border border-border bg-bg-alt p-4 shadow-card">
          <p className="text-2xl font-bold text-ink">{lectiiCuMateriale}</p>
          <p className="text-xs text-ink-soft">cu materiale</p>
        </motion.div>
        {statisticiTipuri.slice(0, 2).map(({ tip, label, numar }) => (
          <motion.div key={tip} variants={item} className="rounded-2xl border border-border bg-bg-alt p-4 shadow-card">
            <p className="text-2xl font-bold text-ink">{numar}</p>
            <p className="text-xs text-ink-soft">{label.toLowerCase()}</p>
          </motion.div>
        ))}
      </motion.div>

      <h2 className="mt-10 mb-3 text-sm font-semibold uppercase tracking-wide text-ink-soft">Acces rapid</h2>
      <motion.div variants={container} initial="hidden" animate="show" className="grid gap-3 sm:grid-cols-2">
        <motion.div variants={item}>
          <Link
            to="/clase"
            className="flex items-center gap-4 rounded-2xl border border-border bg-bg-alt p-5 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent-ink">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-ink">Clase</span>
              <span className="block text-sm text-ink-soft">
                {Object.values(clase).reduce((n, c) => n + c.unitati.length, 0)} unități în lucru
              </span>
            </span>
          </Link>
        </motion.div>
        <motion.div variants={item}>
          <Link
            to="/biblioteca"
            className="flex items-center gap-4 rounded-2xl border border-border bg-bg-alt p-5 shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold">
              <LibraryBig className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-ink">Bibliotecă</span>
              <span className="block text-sm text-ink-soft">toate materialele, într-un singur loc</span>
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DashboardPage
