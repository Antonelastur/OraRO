import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { CalendarOff, Check, ChevronLeft, ChevronRight, CirclePlay, Clock } from 'lucide-react'
import {
  acumLocal, dataLunga, numeZiDinData, stareaZilei, useProgram, ziCuOre,
} from '@/lib/agenda'
import { NUME_DISCIPLINE } from '@/lib/orar'
import type { OraProgramata } from '@/lib/program'
import { cn } from '@/lib/utils'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } }
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }

function caleLectie(ora: OraProgramata): string | null {
  if (!ora.lectie) return null
  const { clasaId, unitateId, lectieId } = ora.lectie
  return `/${clasaId}/${unitateId}/${lectieId}`
}

/** Cardul mare al orei curente: ce se deschide când intri în aplicație. */
function CardulOrei({ ora, eticheta }: { ora: OraProgramata; eticheta?: string }) {
  const cale = caleLectie(ora)
  const acum = ora.statut === 'in_desfasurare'

  return (
    <motion.section
      variants={item}
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

function RandOra({ ora }: { ora: OraProgramata }) {
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
    ora.statut === 'parcursa' && 'opacity-60',
    ora.statut === 'in_desfasurare' && 'border-accent',
  )

  return (
    <motion.li variants={item}>
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

export function OraDeAziPage() {
  const acum = useMemo(acumLocal, [])
  const program = useProgram(acum)
  const [data, setData] = useState(acum.data)

  const stare = stareaZilei(program, data)
  const esteAzi = data === acum.data
  const inainte = ziCuOre(program, data, -1)
  const dupa = ziCuOre(program, data, 1)

  // Cardul mare are sens doar azi: ora care se ține acum, altfel prima care
  // urmează. Când ziua s-a încheiat, sau e zi liberă, arată prima oră de după,
  // ca să nu rămână ecranul fără răspuns la „și acum ce urmează".
  const oraDinZi =
    esteAzi && stare.fel === 'curs'
      ? (stare.ore.find((o) => o.statut === 'in_desfasurare') ??
         stare.ore.find((o) => o.start > acum.hhmm) ??
         null)
      : null

  const oraDeDupa =
    esteAzi && !oraDinZi ? (program.find((o) => o.data > acum.data) ?? null) : null

  const oraPrincipala = oraDinZi ?? oraDeDupa
  const etichetaCard = oraDeDupa
    ? `${numeZiDinData(oraDeDupa.data)}, ${dataLunga(oraDeDupa.data)}`
    : undefined

  const restul =
    stare.fel === 'curs' ? stare.ore.filter((o) => o.id !== oraDinZi?.id) : []

  return (
    <div>
      <p className="text-sm font-medium text-accent-ink">Agendă</p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink lg:text-4xl">
        {esteAzi ? 'Ora de azi' : numeZiDinData(data)}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-3">
        <p className="text-ink-soft">
          {numeZiDinData(data)}, {dataLunga(data)}
          {stare.saptamana?.numarCurs && (
            <>
              <span className="mx-2 text-ink-soft/50">·</span>
              săptămâna {stare.saptamana.numarCurs}
              {stare.saptamana.modulId && `, modulul ${stare.saptamana.modulId}`}
            </>
          )}
        </p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => inainte && setData(inainte)}
            disabled={!inainte}
            aria-label="Ziua cu ore dinainte"
            className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-bg-alt text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {!esteAzi && (
            <button
              type="button"
              onClick={() => setData(acum.data)}
              className="rounded-lg border border-border bg-bg-alt px-3 py-1.5 text-sm font-medium text-ink"
            >
              Azi
            </button>
          )}
          <button
            type="button"
            onClick={() => dupa && setData(dupa)}
            disabled={!dupa}
            aria-label="Ziua cu ore de după"
            className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-bg-alt text-ink-soft transition-colors hover:text-ink disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <motion.div variants={container} initial="hidden" animate="show" className="mt-8">
        {stare.fel === 'liber' && !oraPrincipala ? (
          <motion.section
            variants={item}
            className="flex items-center gap-4 rounded-2xl border border-border bg-bg-alt p-6 shadow-card"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold">
              <CalendarOff className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-ink">{stare.motiv}</span>
              <span className="block text-sm text-ink-soft">Nu ai ore în ziua asta.</span>
            </span>
          </motion.section>
        ) : (
          <>
            {stare.fel === 'liber' && (
              <p className="mb-4 text-ink-soft">{stare.motiv}. Nu ai ore în ziua asta.</p>
            )}
            {oraPrincipala && <CardulOrei ora={oraPrincipala} eticheta={etichetaCard} />}
            {restul.length > 0 && (
              <>
                <h2 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  {oraDinZi ? 'Restul zilei' : 'Orele zilei'}
                </h2>
                <ul className="grid gap-2">
                  {restul.map((ora) => (
                    <RandOra key={ora.id} ora={ora} />
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </motion.div>
    </div>
  )
}

export default OraDeAziPage
