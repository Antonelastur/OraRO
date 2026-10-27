import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '@/components/Breadcrumb'
import { clase } from '@/data/clase.js'
import { materialMeta } from '@/components/materialMeta'
import { TIPURI_MATERIAL, toateLectiile } from '@/lib/lectii'
import { cn } from '@/lib/utils'
import type { Clase, LectieCuContext } from '@/types'

const TOATE_LECTIILE = toateLectiile(clase as unknown as Clase)
const CU_PLAN = TOATE_LECTIILE.filter((x) => (x.lectie.planLectie?.desfasurare?.length ?? 0) > 0)

const fara = (text: string) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const chip = (activ: boolean) =>
  cn(
    'rounded-full border px-3.5 py-1.5 text-sm font-medium',
    activ ? 'border-accent bg-accent-soft text-accent-ink' : 'border-border text-ink-soft hover:border-accent',
  )

export function BibliotecaPage() {
  const [sectiune, setSectiune] = useState<'planuri' | 'materiale'>('planuri')

  return (
    <section>
      <Breadcrumb items={[{ label: 'Bibliotecă' }]} />
      <h1 className="text-2xl font-bold text-ink">Bibliotecă</h1>
      <p className="mt-1 text-ink-soft">
        Planurile de lecție, pentru profesoară, și materialele create până acum.
      </p>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Secțiune">
        <button type="button" aria-pressed={sectiune === 'planuri'} onClick={() => setSectiune('planuri')} className={chip(sectiune === 'planuri')}>
          Planuri de lecție ({CU_PLAN.length})
        </button>
        <button type="button" aria-pressed={sectiune === 'materiale'} onClick={() => setSectiune('materiale')} className={chip(sectiune === 'materiale')}>
          Materiale
        </button>
      </div>

      {sectiune === 'planuri' ? <Planuri /> : <Materiale />}
    </section>
  )
}

function Planuri() {
  const [clasaActiva, setClasaActiva] = useState('toate')
  const [cautare, setCautare] = useState('')

  const clase_ = useMemo(() => {
    const vazute = new Map<string, string>()
    for (const x of CU_PLAN) vazute.set(x.clasaId, x.clasaTitlu)
    return [...vazute.entries()]
  }, [])

  // Pe unități, în ordinea din date.
  const grupuri = useMemo(() => {
    const q = fara(cautare.trim())
    const rezultat = new Map<string, { titlu: string; lectii: LectieCuContext[] }>()
    for (const x of CU_PLAN) {
      if (clasaActiva !== 'toate' && x.clasaId !== clasaActiva) continue
      if (q && !fara(`${x.lectie.titlu} ${x.unitateTitlu}`).includes(q)) continue
      const cheie = `${x.clasaId}/${x.unitateId}`
      const grup = rezultat.get(cheie) ?? { titlu: `${x.clasaTitlu} · ${x.unitateTitlu}`, lectii: [] }
      grup.lectii.push(x)
      rezultat.set(cheie, grup)
    }
    return [...rezultat.entries()]
  }, [clasaActiva, cautare])

  const total = grupuri.reduce((n, [, g]) => n + g.lectii.length, 0)

  return (
    <div>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setClasaActiva('toate')} className={chip(clasaActiva === 'toate')}>
          Toate clasele
        </button>
        {clase_.map(([id, titlu]) => (
          <button key={id} type="button" onClick={() => setClasaActiva(id)} className={chip(clasaActiva === id)}>
            {titlu}
          </button>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="sr-only">Caută în planuri</span>
        <input
          type="search"
          value={cautare}
          onChange={(e) => setCautare(e.target.value)}
          placeholder="Caută o lecție sau o unitate"
          className="w-full max-w-md rounded-lg border border-border bg-bg px-3 py-2 text-sm text-ink focus:border-accent focus:outline-none"
        />
      </label>

      {total === 0 ? (
        <p className="mt-8 text-ink-soft">Niciun plan de lecție nu se potrivește.</p>
      ) : (
        <div className="mt-6 flex flex-col gap-8">
          {grupuri.map(([cheie, grup]) => (
            <section key={cheie} aria-label={grup.titlu}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">{grup.titlu}</h2>
              <ul className="mt-2 flex flex-col gap-2">
                {grup.lectii.map(({ clasaId, unitateId, lectie }) => (
                  <li key={lectie.id}>
                    <Link
                      to={`/biblioteca/plan/${clasaId}/${unitateId}/${lectie.id}`}
                      className="block rounded-xl border border-border bg-bg-alt px-4 py-3 hover:border-accent"
                    >
                      <span className="block text-sm font-medium text-ink">{lectie.titlu}</span>
                      <span className="block text-xs text-ink-soft">
                        {lectie.planLectie!.tipOra} · {lectie.planLectie!.durata} min · {lectie.planLectie!.desfasurare.length} etape
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}

function Materiale() {
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
    <div>
      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={() => setTipActiv('toate')} className={chip(tipActiv === 'toate')}>
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
              <li key={`${m.tip}-${m.clasaId}-${m.unitateId}-${m.lectieId}`}>
                <Link
                  // Testul are linkul privat spre varianta B: se deschide din plan, nu din pagina elevilor.
                  to={m.tip === 'test' ? `/biblioteca/plan/${m.clasaId}/${m.unitateId}/${m.lectieId}` : `/${m.clasaId}/${m.unitateId}/${m.lectieId}`}
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
    </div>
  )
}

export default BibliotecaPage
