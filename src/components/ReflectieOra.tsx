// Formularul de reflecție de după oră, cu câmpurile din docs/ux.md, secțiunea 14.
// Toate câmpurile sunt opționale. Butoanele vin din exterior, prin children.
import { useState } from 'react'
import { CUM_A_MERS, type Reflectie } from '@/lib/jurnal'

const CAMPURI: { cheie: Exclude<keyof Reflectie, 'cumAMers'>; eticheta: string; randuri: number }[] = [
  { cheie: 'notite', eticheta: 'Notițele mele', randuri: 3 },
  { cheie: 'refolosire', eticheta: 'Când voi refolosi lecția?', randuri: 1 },
  { cheie: 'pastrez', eticheta: 'Ce vreau să păstrez?', randuri: 2 },
  { cheie: 'schimb', eticheta: 'Ce vreau să schimb?', randuri: 2 },
]

export function ReflectieOra({
  initial,
  onSalveaza,
  children,
}: {
  initial: Reflectie
  onSalveaza: (reflectie: Reflectie) => void
  children: React.ReactNode
}) {
  const [r, setR] = useState(initial)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSalveaza(r)
      }}
      className="flex flex-col gap-5"
    >
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Cum a mers ora?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {CUM_A_MERS.map((varianta) => {
            const ales = r.cumAMers === varianta
            return (
              <label
                key={varianta}
                className={`cursor-pointer rounded-lg border px-3.5 py-2 text-sm font-medium has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent ${
                  ales ? 'border-accent bg-accent-soft text-accent-ink' : 'border-border text-ink-soft hover:bg-ink/5'
                }`}
              >
                <input
                  type="radio"
                  name="cumAMers"
                  value={varianta}
                  checked={ales}
                  onChange={() => setR({ ...r, cumAMers: varianta })}
                  className="sr-only"
                />
                {varianta}
              </label>
            )
          })}
        </div>
      </fieldset>

      {CAMPURI.map(({ cheie, eticheta, randuri }) => (
        <label key={cheie} className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{eticheta}</span>
          <textarea
            value={r[cheie]}
            onChange={(e) => setR({ ...r, [cheie]: e.target.value })}
            rows={randuri}
            className="rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
          />
        </label>
      ))}

      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </form>
  )
}

export default ReflectieOra
