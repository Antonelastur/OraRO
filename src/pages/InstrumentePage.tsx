import { Link } from 'react-router-dom'
import { INSTRUMENTE } from '@/components/instrumente'

export function InstrumentePage() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-ink lg:text-3xl">Instrumente</h1>
      <p className="mt-2 max-w-2xl text-ink-soft">
        Uneltele mici de care ai nevoie în timpul orei. Toate merg fără internet și sunt gândite să
        stea pe proiector.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INSTRUMENTE.map(({ id, nume, descriere, icon: Icon }) => (
          <Link
            key={id}
            to={`/instrumente/${id}`}
            className="group rounded-2xl border border-border bg-bg-alt p-5 transition-colors hover:border-accent"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent-ink">
              <Icon className="h-5.5 w-5.5" aria-hidden="true" />
            </span>
            <p className="mt-3.5 text-base font-semibold text-ink">{nume}</p>
            <p className="mt-1 text-sm text-ink-soft">{descriere}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-xs text-ink-soft">
        Lista clasei, folosită de selector, de roată și de generatorul de echipe, se salvează în acest
        browser, pe acest calculator. Nu pleacă nicăieri și nu o vede nimeni altcineva.
      </p>
    </section>
  )
}

export default InstrumentePage
