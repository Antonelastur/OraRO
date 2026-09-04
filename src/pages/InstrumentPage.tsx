import { Link, useParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { gasesteInstrument } from '@/components/instrumente'

export function InstrumentPage() {
  const { instrument } = useParams()
  const gasit = gasesteInstrument(instrument)

  if (!gasit) {
    return (
      <section>
        <p className="text-ink">Instrumentul „{instrument}” nu există.</p>
        <Link to="/instrumente" className="mt-4 inline-block text-accent-ink underline">
          Înapoi la instrumente
        </Link>
      </section>
    )
  }

  const { nume, descriere, Component } = gasit

  return (
    <section>
      <Link
        to="/instrumente"
        className="inline-flex items-center gap-1 text-sm font-medium text-ink-soft hover:text-ink"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        Instrumente
      </Link>

      <h1 className="mt-3 text-2xl font-bold text-ink lg:text-3xl">{nume}</h1>
      <p className="mt-1 text-sm text-ink-soft">{descriere}</p>

      <div className="mt-10 flex justify-center">
        <Component />
      </div>
    </section>
  )
}

export default InstrumentPage
