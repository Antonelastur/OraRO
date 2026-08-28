import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type BreadcrumbItem = { label: string; to?: string }

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-ink-soft" aria-label="Traseu">
      <Link to="/" className="hover:text-accent-ink">
        Acasă
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-border" aria-hidden="true" />
          {item.to ? (
            <Link to={item.to} className="hover:text-accent-ink">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-ink" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}

export default Breadcrumb
