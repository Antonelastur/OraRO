import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { clase } from '../data/clase.js'
import { Breadcrumb } from '../components/Breadcrumb.tsx'
import { MaterialChips } from '../components/MaterialChips.tsx'
import { MotivUnitate } from '../components/MotivUnitate.tsx'
import { ProgresBara } from '../components/ProgresBara.tsx'
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/ui/tooltip.tsx'
import { Check } from 'lucide-react'
import { areMateriale, completitudineLectie } from '../lib/lectii.ts'
import { cheieLectie, useJurnal } from '../lib/jurnal.ts'

function UnitatePage() {
  const { clasa, unitate } = useParams()
  const { jurnal } = useJurnal()
  const dateClasa = clase[clasa]
  const dateUnitate = dateClasa?.unitati.find((u) => u.id === unitate)

  if (!dateClasa || !dateUnitate) {
    return <p>Unitatea „{unitate}" nu există pentru clasa „{clasa}".</p>
  }

  return (
    <section>
      <div className="relative overflow-hidden">
        <MotivUnitate clasa={clasa} unitate={unitate} />
        <Breadcrumb
          items={[
            { label: 'Clase', to: '/clase' },
            { label: dateClasa.titlu, to: `/${clasa}` },
            { label: dateUnitate.titlu },
          ]}
        />
        <h1 className="relative text-2xl font-bold text-ink">{dateUnitate.titlu}</h1>

        <ProgresBara
          className="relative mt-4 max-w-md"
          gata={dateUnitate.lectii.filter(areMateriale).length}
          total={dateUnitate.lectii.length}
        />
      </div>

      <ol className="mt-6 flex flex-col gap-2">
        {dateUnitate.lectii.map((lectie, index) => {
          const { gata, total } = completitudineLectie(lectie)
          return (
            <motion.li key={lectie.id} whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 400, damping: 30 }}>
              <Link
                to={`/${clasa}/${unitate}/${lectie.id}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-bg-alt px-4 py-3.5 hover:border-accent"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-semibold text-accent-ink">
                  {index + 1}
                </span>
                <span className="flex-1 text-base font-medium text-ink">{lectie.titlu}</span>
                {jurnal[cheieLectie(clasa, unitate, lectie.id)] && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-good/10 px-2 py-1 text-xs font-medium text-good">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    Parcursă
                  </span>
                )}
                <MaterialChips materiale={lectie.materiale} />
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="hidden shrink-0 rounded-full bg-bg px-2 py-1 text-sm font-medium text-ink-soft sm:block">
                      {gata}/{total}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    {gata} din {total} elemente gata: plan de lecție și cele 7 tipuri de materiale
                  </TooltipContent>
                </Tooltip>
              </Link>
            </motion.li>
          )
        })}
      </ol>
    </section>
  )
}

export default UnitatePage
