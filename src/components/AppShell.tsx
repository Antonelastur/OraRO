import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, Moon, Sun } from 'lucide-react'
import { Sidebar, SidebarNav } from './Sidebar'
import { SearchPalette, useSearchPalette } from './SearchPalette'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Switch } from './ui/switch'
import { TooltipProvider } from './ui/tooltip'
import { useTheme } from '@/contexts/ThemeContext'

export function AppShell() {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { deschis, setDeschis } = useSearchPalette()
  const [meniuMobilDeschis, setMeniuMobilDeschis] = useState(false)

  return (
    <TooltipProvider delayDuration={200}>
    <div className="min-h-svh bg-bg text-ink">
      <Sidebar onCautaClick={() => setDeschis(true)} />
      <SearchPalette open={deschis} onOpenChange={setDeschis} />

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-border bg-bg/85 px-5 py-3 backdrop-blur-md lg:px-8">
          <Sheet open={meniuMobilDeschis} onOpenChange={setMeniuMobilDeschis}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-lg text-ink-soft hover:bg-ink/5 lg:hidden"
                aria-label="Deschide meniul"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SidebarNav
                onCautaClick={() => {
                  setMeniuMobilDeschis(false)
                  setDeschis(true)
                }}
              />
            </SheetContent>
          </Sheet>

          <button
            type="button"
            onClick={() => setDeschis(true)}
            className="hidden flex-1 max-w-xs items-center gap-2 rounded-full border border-border bg-bg-alt px-3.5 py-1.5 text-sm text-ink-soft hover:border-accent sm:flex"
          >
            Caută în OraRO...
          </button>

          <div className="ml-auto flex items-center gap-2.5">
            <Sun className="h-4 w-4 text-ink-soft" />
            <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} aria-label="Comută tema" />
            <Moon className="h-4 w-4 text-ink-soft" />
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-5 py-8 lg:px-8 lg:py-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
    </TooltipProvider>
  )
}

export default AppShell
