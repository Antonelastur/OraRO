// Cardul orei și rândul dintr-o zi. Le folosesc și „Ora de azi", și
// dashboardul, ca ora să arate la fel oriunde apare.
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Check, CirclePlay, Clock } from 'lucide-react'
import { caleLectie } from '@/lib/agenda'
import { intrare } from '@/lib/animatii'
import { NUME_DISCIPLINE } from '@/lib/orar'
import type { OraProgramata } from '@/lib/program'
import { cn } from '@/lib/utils'

/** Cardul mare: ce se deschide când intri în aplicație. */
export function CardOra({ ora, eticheta }: { ora: OraProgramata; eticheta?: string }) {
  const cale = caleLectie(ora)
  const acum = ora.statut === 'in_desfasurare'

  return (
    <motion.section
      variants={intrare}
      className={cn(
        'rounded-2xl border p-5 shadow-card sm:p-6',
        acum ? 'border-accent bg-accent-soft' : 'border-border bg-bg-alt',
      )}
    >
      <p className={cn('text-sm font-medium', acum ? 'text-accent-ink' : 'text-ink-soft')}>
        {eticheta ?? (acum ? 'Acum' : 'Urmează')}
        <span className="mx-2 text-ink-soft/50">·</span>
        {ora.start}-{ora.final}
      </p>

      <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        {ora.clasa}
        <span className="ml-3 text-lg font-semibold text-ink-soft sm:text-xl">
          {NUME_DISCIPLINE[ora.disciplina]}
        </span>
      </h2>

      {ora.lectie ? (
        <>
          <p className="mt-3 text-lg text-ink">{ora.lectie.titlu}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to={cale!}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Deschide lecția
            </Link>
            <Link
              to={`${cale}/cockpit`}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-alt px-4 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <CirclePlay className="h-4 w-4" />
              Pornește ora
            </Link>
          </div>
        </>
      ) : (
        <p className="mt-3 text-ink-soft">Oră fără conținut în OraRO.</p>
      )}
    </motion.section>
  )
}

/** Un rând din lista zilei. `trecuta` estompează orele care s-au terminat. */
export function RandOra({ ora, trecuta = false }: { ora: OraProgramata; trecuta?: boolean }) {
  const cale = caleLectie(ora)
  const continut = (
    <>
      <span className="w-[4.2rem] shrink-0 text-sm tabular-nums text-ink-soft">{ora.start}</span>
      <span className="w-12 shrink-0 text-sm font-semibold text-ink">{ora.clasa}</span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm text-ink">
          {ora.lectie ? ora.lectie.titlu : NUME_DISCIPLINE[ora.disciplina]}
        </span>
        {ora.statut === 'reprogramata' && (
          <span className="block text-xs text-ink-soft">oră mutată, fără lecție</span>
        )}
      </span>
      {ora.statut === 'parcursa' && <Check className="h-4 w-4 shrink-0 text-accent-ink" />}
      {ora.statut === 'in_desfasurare' && <Clock className="h-4 w-4 shrink-0 text-accent-ink" />}
    </>
  )

  const clase = cn(
    'flex items-center gap-3 rounded-xl border border-border bg-bg-alt px-4 py-3 shadow-card',
    (ora.statut === 'parcursa' || trecuta) && 'opacity-60',
    ora.statut === 'in_desfasurare' && 'border-accent',
  )

  return (
    <motion.li variants={intrare}>
      {cale ? (
        <Link to={cale} className={cn(clase, 'transition-transform hover:-translate-y-0.5')}>
          {continut}
        </Link>
      ) : (
        <div className={clase}>{continut}</div>
      )}
    </motion.li>
  )
}
