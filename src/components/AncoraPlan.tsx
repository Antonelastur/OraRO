// „Sunt aici cu clasa": mută planul calendaristic pe lecția curentă.
//
// Planul se așază mecanic, o lecție pe oră, și nu știe unde ai ajuns de fapt.
// Ancora îi spune: de la ora următoare încolo, lecția asta. Restul se
// recalculează singur. Vezi docs/agenda.md, secțiunea 4.4.
import { MapPin, Users } from 'lucide-react'
import { acumLocal, dataLunga, dataPentruAncora, useAncore, useProgram } from '@/lib/agenda'
import { grupele } from '@/lib/jurnal'
import { cheieReferinta } from '@/lib/program'

const buton = 'rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5'

export function AncoraPlan({
  clasa, unitate, lectie, grupa, areMaiMulteGrupe,
}: {
  clasa: string
  unitate: string
  lectie: string
  grupa: string
  areMaiMulteGrupe: boolean
}) {
  const acum = acumLocal()
  const program = useProgram(acum)
  const [ancore, schimbaAncora] = useAncore()

  const aici = cheieReferinta({ unitateId: unitate, lectieId: lectie })
  const ancorata = (g: string) => ancore[g] && cheieReferinta(ancore[g]) === aici
  const altele = grupele(clasa).filter((g) => g !== grupa && !ancorata(g))

  const pune = (grupe: string[]) => {
    for (const g of grupe) {
      const data = dataPentruAncora(program, g, acum)
      if (data) schimbaAncora(g, { data, unitateId: unitate, lectieId: lectie })
    }
  }

  const eticheta = areMaiMulteGrupe ? ` la ${grupa}` : ''

  if (ancorata(grupa)) {
    return (
      <div className="mt-4 border-t border-ink/10 pt-4">
        <p className="flex items-center gap-2 text-sm text-ink">
          <MapPin className="h-4 w-4 shrink-0 text-accent-ink" aria-hidden="true" />
          Planul pornește de aici{eticheta}, de pe {dataLunga(ancore[grupa].data)}.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" onClick={() => schimbaAncora(grupa, null)} className={buton}>
            Renunță la reper{eticheta}
          </button>
          {altele.length > 0 && (
            <button type="button" onClick={() => pune(altele)} className={buton}>
              <Users className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
              Pune reperul și la {altele.join(', ')}
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-4 border-t border-ink/10 pt-4">
      <p className="text-sm text-ink-soft">
        Dacă ai rămas în urmă sau ai luat-o înainte, mută planul pe lecția asta.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" onClick={() => pune([grupa])} className={buton}>
          <MapPin className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
          Continui de aici{eticheta}
        </button>
        {altele.length > 0 && (
          <button type="button" onClick={() => pune([grupa, ...altele])} className={buton}>
            <Users className="mr-1.5 inline h-3.5 w-3.5" aria-hidden="true" />
            Continui de aici la {[grupa, ...altele].join(' și ')}
          </button>
        )}
      </div>
    </div>
  )
}

export default AncoraPlan
