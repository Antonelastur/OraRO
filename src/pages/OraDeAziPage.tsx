import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { CalendarOff, ChevronLeft, ChevronRight } from 'lucide-react'
import { CardOra, RandOra } from '@/components/CardOra'
import { intrare, succesiune } from '@/lib/animatii'
import {
  acumLocal, dataLunga, numeZiDinData, oraDeDeschidere, stareaZilei, useProgram, ziCuOre,
} from '@/lib/agenda'

export function OraDeAziPage() {
  const acum = useMemo(acumLocal, [])
  const program = useProgram(acum)
  const [data, setData] = useState(acum.data)

  const stare = stareaZilei(program, data)
  const esteAzi = data === acum.data
  const inainte = ziCuOre(program, data, -1)
  const dupa = ziCuOre(program, data, 1)

  // Cardul mare are sens doar azi. Când ziua s-a încheiat, sau e zi liberă,
  // arată prima oră de după, ca să nu rămână ecranul fără răspuns la „și acum
  // ce urmează".
  const deschidere = esteAzi ? oraDeDeschidere(program, acum) : null
  const oraDinZi = deschidere?.astazi ? deschidere.ora : null
  const etichetaCard =
    deschidere && !deschidere.astazi
      ? `${numeZiDinData(deschidere.ora.data)}, ${dataLunga(deschidere.ora.data)}`
      : undefined

  const restul = stare.fel === 'curs' ? stare.ore.filter((o) => o.id !== oraDinZi?.id) : []

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

      <motion.div variants={succesiune} initial="hidden" animate="show" className="mt-8">
        {stare.fel === 'liber' && !deschidere ? (
          <motion.section
            variants={intrare}
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
            {deschidere && <CardOra ora={deschidere.ora} eticheta={etichetaCard} />}
            {restul.length > 0 && (
              <>
                <h2 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  {oraDinZi ? 'Restul zilei' : 'Orele zilei'}
                </h2>
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
          </>
        )}
      </motion.div>
    </div>
  )
}

export default OraDeAziPage
