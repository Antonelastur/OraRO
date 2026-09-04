import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  Dices, GraduationCap, Hourglass, LayoutDashboard, LibraryBig, Search, Settings,
  Shuffle, Timer, UserRound, Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Grupurile din docs/ux.md, secțiunea 2. Aici stau doar intrările care duc
// undeva real. Restul se adaugă pe măsură ce funcțiile devin utilizabile;
// un meniu plin de pagini goale încalcă regula de finalizare din CLAUDE.md.
const GRUPURI = [
  {
    titlu: null,
    intrari: [{ to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true }],
  },
  {
    titlu: 'Lecții',
    intrari: [
      { to: '/clase', label: 'Toate clasele', icon: GraduationCap, end: true },
      { to: '/clasa-5', label: 'Clasa a V-a', icon: null, end: false },
      { to: '/clasa-6', label: 'Clasa a VI-a', icon: null, end: false },
      { to: '/clasa-7', label: 'Clasa a VII-a', icon: null, end: false },
      { to: '/clasa-8', label: 'Clasa a VIII-a', icon: null, end: false },
    ],
  },
  {
    titlu: 'Resurse',
    intrari: [{ to: '/biblioteca', label: 'Bibliotecă', icon: LibraryBig, end: false }],
  },
  {
    titlu: 'Instrumente',
    intrari: [
      { to: '/instrumente/cronometru', label: 'Cronometru', icon: Timer, end: false },
      { to: '/instrumente/numaratoare-inversa', label: 'Numărătoare inversă', icon: Hourglass, end: false },
      { to: '/instrumente/selector-elev', label: 'Selector elev', icon: UserRound, end: false },
      { to: '/instrumente/roata-aleatorie', label: 'Roată aleatorie', icon: Shuffle, end: false },
      { to: '/instrumente/generator-echipe', label: 'Generator echipe', icon: Users, end: false },
      { to: '/instrumente/zar', label: 'Zar', icon: Dices, end: false },
    ],
  },
] as const

const JOS = [{ to: '/setari', label: 'Setări', icon: Settings, end: false }] as const

type Intrare = { to: string; label: string; icon: React.ElementType | null; end: boolean }

function Legatura({ to, label, icon: Icon, end }: Intrare) {
  return (
    <NavLink to={to} end={end} className="relative">
      {({ isActive }) => (
        <span
          className={cn(
            'relative z-10 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
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
          {Icon ? (
            <Icon className="h-4.5 w-4.5 shrink-0" />
          ) : (
            <span className="h-4.5 w-4.5 shrink-0" aria-hidden="true" />
          )}
          {label}
        </span>
      )}
    </NavLink>
  )
}

export function SidebarNav({ onCautaClick }: { onCautaClick: () => void }) {
  return (
    <div className="flex h-full flex-col gap-5 text-white">
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

      <nav className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto pb-2">
        {GRUPURI.map((grup, i) => (
          <div key={grup.titlu ?? `grup-${i}`} className="flex flex-col gap-0.5">
            {grup.titlu && (
              <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-white/35">
                {grup.titlu}
              </p>
            )}
            {grup.intrari.map((intrare) => (
              <Legatura key={intrare.to} {...(intrare as Intrare)} />
            ))}
          </div>
        ))}
      </nav>

      <div className="flex flex-col gap-0.5 border-t border-white/10 pt-3">
        {JOS.map((intrare) => (
          <Legatura key={intrare.to} {...(intrare as Intrare)} />
        ))}
      </div>
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
