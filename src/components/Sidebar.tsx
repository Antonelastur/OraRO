import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { LayoutDashboard, GraduationCap, LibraryBig, Settings, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/clase', label: 'Clase', icon: GraduationCap, end: false },
  { to: '/biblioteca', label: 'Bibliotecă', icon: LibraryBig, end: false },
  { to: '/setari', label: 'Setări', icon: Settings, end: false },
]

export function SidebarNav({ onCautaClick }: { onCautaClick: () => void }) {
  return (
    <div className="flex h-full flex-col gap-6 text-white">
      <div className="flex items-center gap-2.5 px-2">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent to-accent-ink text-base font-bold text-white">
          O
        </span>
        <div className="flex flex-col leading-tight">
          <span className="font-semibold">OraRO</span>
          <span className="text-xs text-white/50">Limba și literatura română</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onCautaClick}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white/90"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1">Caută...</span>
        <kbd className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] text-white/40">Ctrl K</kbd>
      </button>

      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className="relative">
            {({ isActive }) => (
              <span
                className={cn(
                  'relative z-10 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive ? 'text-white' : 'text-white/55 hover:text-white/85',
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 -z-10 rounded-xl bg-white/10"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon className="h-4.5 w-4.5 shrink-0" />
                {label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export function Sidebar({ onCautaClick }: { onCautaClick: () => void }) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 shrink-0 bg-sidebar p-4 lg:flex">
      <SidebarNav onCautaClick={onCautaClick} />
    </aside>
  )
}

export default Sidebar
