import { materialMeta } from './materialMeta'
import { TIPURI_MATERIAL } from '@/lib/lectii'
import type { Materiale } from '@/types'

// Chip-urile din lista de lecții: iconiță plus eticheta scurtă a tipului,
// pe fondul în tenta tipului, textul în nuanța închisă.
export function MaterialChips({ materiale }: { materiale: Materiale }) {
  const prezente = TIPURI_MATERIAL.filter((tip) => Boolean(materiale[tip]))

  if (prezente.length === 0) {
    return <span className="text-sm text-ink-soft">—</span>
  }

  return (
    <span className="flex shrink-0 flex-wrap justify-end gap-1.5">
      {prezente.map((tip) => {
        const { short, Icon } = materialMeta[tip]
        return (
          <span
            key={tip}
            className={`chip chip-${tip} inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-[var(--chip-ink)]`}
            style={{ backgroundColor: 'var(--chip-tint)' }}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {short}
          </span>
        )
      })}
    </span>
  )
}

export default MaterialChips
