import { Sun, Moon } from 'lucide-react'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/contexts/ThemeContext'

export function SetariPage() {
  const { theme, toggleTheme } = useTheme()

  return (
    <section>
      <Breadcrumb items={[{ label: 'Setări' }]} />
      <h1 className="text-2xl font-bold text-ink">Setări</h1>

      <div className="mt-6 flex max-w-md items-center justify-between rounded-2xl border border-border bg-bg-alt p-5 shadow-card">
        <div className="flex items-center gap-3">
          {theme === 'dark' ? <Moon className="h-5 w-5 text-accent" /> : <Sun className="h-5 w-5 text-gold" />}
          <div>
            <p className="font-medium text-ink">Temă {theme === 'dark' ? 'întunecată' : 'deschisă'}</p>
            <p className="text-sm text-ink-soft">Preferința se salvează pe acest dispozitiv.</p>
          </div>
        </div>
        <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} aria-label="Comută tema" />
      </div>
    </section>
  )
}

export default SetariPage
