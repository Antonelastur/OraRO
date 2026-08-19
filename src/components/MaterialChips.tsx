import { materialMeta } from './materialMeta'
import { TIPURI_MATERIAL } from '@/lib/lectii'
import type { Materiale } from '@/types'

export function MaterialChips({ materiale }: { materiale: Materiale }) {
  const prezente = TIPURI_MATERIAL.filter((tip) => Boolean(materiale[tip]))

  if (prezente.length === 0) {
    return <span className="text-sm text-ink-soft">—</span>
  }

  return (
    <span className="flex shrink-0 gap-1.5">
      {prezente.map((tip) => {
        const { label, Icon } = materialMeta[tip]
        return (
          <span
            key={tip}
            title={label}
            className={`chip-${tip} grid h-7 w-7 place-items-center rounded-lg text-[var(--chip-color)]`}
            style={{ backgroundColor: 'color-mix(in srgb, var(--chip-color) 14%, transparent)' }}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        )
      })}
    </span>
  )
}

export default MaterialChips
