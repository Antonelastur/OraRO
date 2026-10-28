// Joc de sortare pentru tabla electronică: elevii vin pe rând, aleg un cuvânt și
// ating categoria potrivită (de exemplu o culoare de semafor). Înlocuiește jocurile
// cu bilețele decupate. Se verifică la sfârșit, cu butonul „Verifică”, ca
// discuția din clasă să nu fie stricată de un răspuns dat pe loc.
import { useState } from 'react'
import { Check, Gamepad2, RotateCcw, X } from 'lucide-react'
import { aseaza, neasezate, rezultat, scoate, stareInitiala, verifica } from '@/lib/sortare'
import { cn } from '@/lib/utils'
import type { JocSortare as DateJoc } from '@/types'

export function JocSortare({ joc }: { joc: DateJoc }) {
  const [stare, setStare] = useState(stareInitiala)
  const [ales, setAles] = useState<number | null>(null)

  const nea = neasezate(joc, stare)
  const r = rezultat(joc, stare)
  const nimicAsezat = nea.length === joc.elemente.length

  function puneAici(categorie: string) {
    if (ales === null) return
    setStare((s) => aseaza(s, ales, categorie))
    setAles(null)
  }

  function chip(index: number, { inCategorie }: { inCategorie: boolean }) {
    const e = joc.elemente[index]
    const gresit = stare.verificat && r.gresite.includes(index)
    const corect = stare.verificat && inCategorie && !gresit
    const esteAles = ales === index
    return (
      <button
        key={index}
        type="button"
        aria-pressed={inCategorie ? undefined : esteAles}
        aria-label={inCategorie ? `${e.text}, scoate din categorie` : undefined}
        onClick={(ev) => {
          ev.stopPropagation()
          if (inCategorie) setStare((s) => scoate(s, index))
          else setAles(esteAles ? null : index)
        }}
        className={cn(
          'inline-flex items-center gap-2 rounded-2xl border-2 bg-bg px-5 py-3 text-xl font-semibold text-ink shadow-sm lg:text-3xl',
          esteAles ? 'border-accent ring-4 ring-accent/40' : 'border-border hover:border-accent',
          corect && 'border-good bg-good-soft',
          gresit && 'border-bad bg-bad-soft',
        )}
      >
        {e.text}
        {corect && <Check className="h-6 w-6 text-good" aria-label="corect" />}
        {gresit && <X className="h-6 w-6 text-bad" aria-label="greșit" />}
      </button>
    )
  }

  return (
    <section aria-label={`Joc: ${joc.titlu}`} className="mt-8 max-w-6xl rounded-3xl border border-border bg-bg-alt p-5 lg:p-7">
      <div className="flex items-center gap-3">
        <Gamepad2 className="h-7 w-7 text-accent-ink" aria-hidden="true" />
        <h2 className="text-xl font-bold text-ink lg:text-3xl">Joc: {joc.titlu}</h2>
      </div>
      {joc.instructiune && <p className="mt-2 text-lg text-ink-soft lg:text-2xl">{joc.instructiune}</p>}

      <div
        className="mt-5 grid gap-4"
        style={{ gridTemplateColumns: `repeat(${joc.categorii.length}, minmax(0, 1fr))` }}
      >
        {joc.categorii.map((c) => {
          const dinCategorie = joc.elemente.map((_, i) => i).filter((i) => stare.asezat[i] === c.id)
          return (
            <div
              key={c.id}
              onClick={() => puneAici(c.id)}
              className={cn('min-h-48 rounded-2xl border-4 p-4', ales !== null && 'cursor-pointer')}
              style={{ borderColor: c.culoare, backgroundColor: `color-mix(in srgb, ${c.culoare} 12%, transparent)` }}
            >
              <button
                type="button"
                onClick={(ev) => {
                  ev.stopPropagation()
                  puneAici(c.id)
                }}
                disabled={ales === null}
                aria-label={`Pune cuvântul ales pe ${c.nume}`}
                className="flex w-full items-center gap-3 text-left disabled:cursor-default"
              >
                <span
                  className="h-10 w-10 shrink-0 rounded-full border-2 border-black/40 lg:h-14 lg:w-14"
                  style={{ backgroundColor: c.culoare }}
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-xl font-bold text-ink lg:text-3xl">{c.nume}</span>
                  {c.descriere && <span className="block text-base text-ink-soft lg:text-xl">{c.descriere}</span>}
                </span>
              </button>
              <div className="mt-4 flex flex-wrap gap-3">{dinCategorie.map((i) => chip(i, { inCategorie: true }))}</div>
            </div>
          )
        })}
      </div>

      <div className="mt-5">
        <p className="text-base font-semibold uppercase tracking-wide text-ink-soft lg:text-lg">
          {nea.length > 0 ? 'Cuvinte de așezat' : 'Toate cuvintele sunt așezate'}
        </p>
        <div className="mt-3 flex flex-wrap gap-3">{nea.map((i) => chip(i, { inCategorie: false }))}</div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={nimicAsezat}
          onClick={() => setStare((s) => verifica(s))}
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-lg font-semibold text-navy hover:brightness-105 disabled:opacity-50"
        >
          <Check className="h-5 w-5" aria-hidden="true" />
          Verifică
        </button>
        <button
          type="button"
          onClick={() => {
            setStare(stareInitiala())
            setAles(null)
          }}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg px-5 py-3 text-lg font-semibold text-ink hover:border-accent"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
          Reia jocul
        </button>
        {stare.verificat && (
          <p role="status" className="text-lg font-semibold text-ink lg:text-2xl">
            {r.corecte} din {r.total} la locul potrivit
            {r.neasezate.length > 0 ? `; ${r.neasezate.length} nu sunt așezate încă` : ''}.
          </p>
        )}
      </div>
    </section>
  )
}

export default JocSortare
