import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { CalendarOff, GraduationCap, LibraryBig } from 'lucide-react'
import { clase } from '@/data/clase.js'
import { CardOra, RandOra } from '@/components/CardOra'
import { intrare, succesiune } from '@/lib/animatii'
import {
  acumLocal, dataLunga, numeZiDinData, oraDeDeschidere, stareaZilei, useProgram,
} from '@/lib/agenda'
import { areMateriale, toateLectiile } from '@/lib/lectii'

export function DashboardPage() {
  const acum = useMemo(acumLocal, [])
  const program = useProgram(acum)
  const stare = stareaZilei(program, acum.data)
  const deschidere = oraDeDeschidere(program, acum)

  const etichetaCard =
    deschidere && !deschidere.astazi
      ? `${numeZiDinData(deschidere.ora.data)}, ${dataLunga(deschidere.ora.data)}`
      : undefined

  // Restul zilei, fără ora din card. Dacă ziua s-a încheiat, lista rămâne goală
  // și pagina trece direct la acces rapid.
  const restul =
    stare.fel === 'curs' && deschidere?.astazi
      ? stare.ore.filter((o) => o.id !== deschidere.ora.id)
      : []

  const lectii = toateLectiile(clase)
  const cuMateriale = lectii.filter(({ lectie }) => areMateriale(lectie)).length

  return (
    <div>
      <p className="text-sm font-medium text-accent-ink">
        {numeZiDinData(acum.data)}, {dataLunga(acum.data)}
        {stare.saptamana?.numarCurs && (
          <>
            <span className="mx-2 text-accent-ink/50">·</span>
            săptămâna {stare.saptamana.numarCurs}
            {stare.saptamana.modulId && `, modulul ${stare.saptamana.modulId}`}
          </>
        )}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-ink lg:text-4xl">OraRO</h1>

      <motion.div variants={succesiune} initial="hidden" animate="show" className="mt-6">
        {deschidere ? (
          <CardOra ora={deschidere.ora} eticheta={etichetaCard} />
        ) : (
          <motion.section
            variants={intrare}
            className="flex items-center gap-4 rounded-2xl border border-border bg-bg-alt p-6 shadow-card"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-soft text-gold">
              <CalendarOff className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-ink">
                {stare.fel === 'liber' ? stare.motiv : 'Ziua s-a încheiat'}
              </span>
              <span className="block text-sm text-ink-soft">Nu mai urmează nicio oră.</span>
            </span>
          </motion.section>
        )}

        {restul.length > 0 && (
          <>
            <div className="mb-3 mt-8 flex items-baseline justify-between gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                Restul zilei
              </h2>
              <Link to="/ora-de-azi" className="text-sm font-medium text-accent-ink hover:underline">
                Vezi toată agenda
              </Link>
            </div>
            <ul className="grid gap-2">
              {restul.map((ora) => (
                <RandOra
                  key={ora.id}
                  ora={ora}
                  trecuta={ora.data === acum.data && ora.final <= acum.hhmm}
                />
              ))}
            </ul>
          </>
        )}
      </motion.div>

      <h2 className="mb-3 mt-10 text-sm font-semibold uppercase tracking-wide text-ink-soft">
        Acces rapid
      </h2>
      <motion.div
        variants={succesiune}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-2"
      >
        <motion.div variants={intrare}>
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
                {lectii.length} lecții, {cuMateriale} cu materiale
              </span>
            </span>
          </Link>
        </motion.div>
        <motion.div variants={intrare}>
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
