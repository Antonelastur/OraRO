// Progres binar pe o unitate: câte lecții au măcar un material, din total.
// Se folosește în antetul paginii Unitate și pe cardurile din pagina Clasă.
export function ProgresBara({
  gata,
  total,
  compact = false,
  className = '',
}: {
  gata: number
  total: number
  compact?: boolean
  className?: string
}) {
  const pct = total > 0 ? Math.round((gata / total) * 100) : 0

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${compact ? 'h-1.5' : 'h-2'} flex-1 overflow-hidden rounded-full bg-border`}
        role="progressbar"
        aria-valuenow={gata}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${gata} din ${total} lecții cu material`}
      >
        <div className="h-full rounded-full bg-accent-ink" style={{ width: `${pct}%` }} />
      </div>
      <span
        className={`shrink-0 font-medium text-ink ${compact ? 'text-xs' : 'text-sm'}`}
      >
        {gata} / {total}
        {compact ? '' : ' lecții cu material'}
      </span>
    </div>
  )
}

export default ProgresBara
