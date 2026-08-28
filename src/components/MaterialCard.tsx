import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

// Învelișul comun al celor șapte carduri de material din pagina lecției.
// Antet plin în tenta tipului (--card-tint), iconiță și titlu în nuanța
// închisă a aceleiași culori (--card-ink); corpul stă pe fundalul cardului.
export function MaterialCard({
  tip,
  titlu,
  Icon,
  wide = false,
  children,
}: {
  tip:
    | 'prezentare'
    | 'video'
    | 'fisa'
    | 'joc'
    | 'infografic'
    | 'schema'
    | 'test'
  titlu: string
  Icon: LucideIcon
  wide?: boolean
  children: ReactNode
}) {
  return (
    <section
      className={`material-card material-${tip} overflow-hidden rounded-2xl border border-border bg-bg-alt${
        wide ? ' sm:col-span-2' : ''
      }`}
    >
      <div
        className="flex items-center gap-2 px-5 py-2.5 text-[var(--card-ink)]"
        style={{ backgroundColor: 'var(--card-tint)' }}
      >
        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
        <h3 className="text-base font-bold">{titlu}</h3>
      </div>
      <div className="p-5">{children}</div>
    </section>
  )
}

export default MaterialCard
