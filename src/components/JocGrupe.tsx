// Împărțirea clasei în grupe pe culori, pe tablă: se spune câți elevi sunt, apoi fiecare
// elev trage o culoare. Înlocuiește bilețelele colorate decupate; grupele ies egale.
import { useState } from 'react'
import { RotateCcw, Users } from 'lucide-react'
import { marimiFinale, marimiGrupe, pachetGrupe, type PachetGrupe } from '@/lib/extragere'
import type { JocGrupe as DateJoc } from '@/types'

export function JocGrupe({ joc }: { joc: DateJoc }) {
  const [elevi, setElevi] = useState(25)
  const [pachet, setPachet] = useState<PachetGrupe | null>(null)
  const [trase, setTrase] = useState(0)

  const ultimul = pachet && trase > 0 ? pachet.bilete[trase - 1] : null
  const finale = pachet ? marimiFinale(pachet) : []
  const acum = pachet ? marimiGrupe(pachet, trase) : []

  return (
    <section aria-label={`Joc: ${joc.titlu}`} className="mt-8 max-w-6xl rounded-3xl border border-border bg-bg-alt p-5 lg:p-7">
      <div className="flex items-center gap-3">
        <Users className="h-7 w-7 text-accent-ink" aria-hidden="true" />
        <h2 className="text-xl font-bold text-ink lg:text-3xl">Joc: {joc.titlu}</h2>
      </div>
      {joc.instructiune && <p className="mt-2 text-lg text-ink-soft lg:text-2xl">{joc.instructiune}</p>}

      {!pachet ? (
        <form
          className="mt-5 flex flex-wrap items-end gap-4"
          onSubmit={(ev) => {
            ev.preventDefault()
            setPachet(pachetGrupe(joc, elevi))
            setTrase(0)
          }}
        >
          <label className="flex flex-col gap-1 text-lg font-semibold text-ink lg:text-2xl">
            Câți elevi sunt azi în clasă?
            <input
              type="number"
              min={2}
              max={40}
              value={elevi}
              onChange={(e) => setElevi(Math.max(2, Math.min(40, Number(e.target.value) || 2)))}
              className="w-32 rounded-xl border-2 border-border bg-bg px-4 py-3 text-2xl text-ink focus:border-accent focus:outline-none"
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-xl font-semibold text-navy hover:brightness-105"
          >
            Pregătește grupele
          </button>
        </form>
      ) : (
        <>
          <div
            className="mt-5 flex min-h-40 items-center gap-6 rounded-2xl border-4 bg-bg p-6"
            style={{ borderColor: ultimul === null ? 'var(--color-border)' : joc.etichete[ultimul].culoare }}
            aria-live="polite"
          >
            {ultimul === null ? (
              <p className="text-2xl text-ink-soft lg:text-4xl">Apasă „Trage o culoare”.</p>
            ) : (
              <>
                <span
                  className="h-24 w-24 shrink-0 rounded-full border-4 border-black/40 lg:h-32 lg:w-32"
                  style={{ backgroundColor: joc.etichete[ultimul].culoare }}
                  aria-hidden="true"
                />
                <p className="text-4xl font-bold text-ink lg:text-6xl">{joc.etichete[ultimul].nume}</p>
              </>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={trase >= pachet.bilete.length}
              onClick={() => setTrase((t) => t + 1)}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-xl font-semibold text-navy hover:brightness-105 disabled:opacity-50"
            >
              Trage o culoare
            </button>
            <button
              type="button"
              onClick={() => {
                setPachet(null)
                setTrase(0)
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg px-5 py-3 text-lg font-semibold text-ink hover:border-accent"
            >
              <RotateCcw className="h-5 w-5" aria-hidden="true" />
              Reia
            </button>
            <p role="status" className="text-lg font-semibold text-ink lg:text-2xl">
              {trase >= pachet.bilete.length
                ? `Toți cei ${pachet.bilete.length} elevi au tras.`
                : `Au tras ${trase} din ${pachet.bilete.length} elevi.`}
            </p>
          </div>

          <ul className="mt-5 grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))' }}>
            {Array.from({ length: pachet.numarGrupe }, (_, g) => (
              <li
                key={g}
                className="flex items-center gap-3 rounded-xl border-2 bg-bg px-4 py-3"
                style={{ borderColor: joc.etichete[g].culoare }}
              >
                <span
                  className="h-7 w-7 shrink-0 rounded-full border-2 border-black/40"
                  style={{ backgroundColor: joc.etichete[g].culoare }}
                  aria-hidden="true"
                />
                <span className="text-lg font-semibold text-ink lg:text-2xl">
                  {joc.etichete[g].nume}: {acum[g]} din {finale[g]}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default JocGrupe
