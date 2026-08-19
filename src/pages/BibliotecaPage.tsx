import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '@/components/Breadcrumb'
import { clase } from '@/data/clase.js'
import { materialMeta } from '@/components/materialMeta'
import { TIPURI_MATERIAL, toateLectiile } from '@/lib/lectii'
import { cn } from '@/lib/utils'

const TOATE_LECTIILE = toateLectiile(clase)

export function BibliotecaPage() {
  const [tipActiv, setTipActiv] = useState('toate')

  const materiale = useMemo(() => {
    const rezultat: {
      tip: (typeof TIPURI_MATERIAL)[number]
      clasaId: string
      clasaTitlu: string
      unitateId: string
      lectieId: string
      lectieTitlu: string
    }[] = []
    for (const { clasaId, clasaTitlu, unitateId, lectie } of TOATE_LECTIILE) {
      for (const tip of TIPURI_MATERIAL) {
        if (lectie.materiale[tip]) {
          rezultat.push({ tip, clasaId, clasaTitlu, unitateId, lectieId: lectie.id, lectieTitlu: lectie.titlu })
        }
      }
    }
    return rezultat
  }, [])

  const filtrate = tipActiv === 'toate' ? materiale : materiale.filter((m) => m.tip === tipActiv)

  return (
    <section>
      <Breadcrumb items={[{ label: 'Bibliotecă' }]} />
      <h1 className="text-2xl font-bold text-ink">Bibliotecă</h1>
      <p className="mt-1 text-ink-soft">Toate materialele create până acum, dintr-un singur loc.</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTipActiv('toate')}
          className={cn(
            'rounded-full border px-3.5 py-1.5 text-sm font-medium',
            tipActiv === 'toate'
              ? 'border-accent bg-accent-soft text-accent-ink'
              : 'border-border text-ink-soft hover:border-accent',
          )}
        >
          Toate ({materiale.length})
        </button>
        {TIPURI_MATERIAL.map((tip) => {
          const numar = materiale.filter((m) => m.tip === tip).length
          if (numar === 0) return null
          const { label } = materialMeta[tip]
          return (
            <button
              key={tip}
              type="button"
              onClick={() => setTipActiv(tip)}
              className={cn(
                `chip-${tip}`,
                'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                tipActiv === tip ? 'border-[var(--chip-color)] text-[var(--chip-color)]' : 'border-border text-ink-soft hover:border-[var(--chip-color)]',
              )}
              style={tipActiv === tip ? { backgroundColor: 'color-mix(in srgb, var(--chip-color) 14%, transparent)' } : undefined}
            >
              {label} ({numar})
            </button>
          )
        })}
      </div>

      {filtrate.length === 0 ? (
        <p className="mt-8 text-ink-soft">Niciun material de acest tip încă.</p>
      ) : (
        <ul className="mt-6 flex flex-col gap-2">
          {filtrate.map((m) => {
            const { label, Icon } = materialMeta[m.tip]
            return (
              <li key={`${m.tip}-${m.clasaId}-${m.lectieId}`}>
                <Link
                  to={`/${m.clasaId}/${m.unitateId}/${m.lectieId}`}
                  className={cn(
                    `chip-${m.tip}`,
                    'flex items-center gap-3 rounded-xl border border-border bg-bg-alt px-4 py-3 hover:border-[var(--chip-color)]',
                  )}
                >
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-[var(--chip-color)]"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--chip-color) 14%, transparent)' }}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-medium text-ink">{m.lectieTitlu}</span>
                    <span className="block text-xs text-ink-soft">
                      {label} · {m.clasaTitlu}
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default BibliotecaPage
