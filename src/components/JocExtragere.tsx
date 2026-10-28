// Extragere la sorți pe tabla electronică: în loc de bilețele decupate, elevii apasă
// „Trage” și pe ecran apare un bilet (o situație, un cuvânt, o sarcină, o față de cub).
// Cu `faraRepetare`, fiecare bilet iese o singură dată. Răspunsul, dacă există, se arată la cerere.
import { useState } from 'react'
import { Dices, Eye, RotateCcw } from 'lucide-react'
import { arataRaspunsul, curent, ramase, stareInitiala, trage } from '@/lib/extragere'
import type { JocExtragere as DateJoc } from '@/types'

export function JocExtragere({ joc }: { joc: DateJoc }) {
  const [stare, setStare] = useState(stareInitiala)
  const index = curent(stare)
  const bilet = index === null ? null : joc.elemente[index]
  const mai = ramase(joc, stare).length
  const gata = mai === 0

  return (
    <section aria-label={`Joc: ${joc.titlu}`} className="mt-8 max-w-6xl rounded-3xl border border-border bg-bg-alt p-5 lg:p-7">
      <div className="flex items-center gap-3">
        <Dices className="h-7 w-7 text-accent-ink" aria-hidden="true" />
        <h2 className="text-xl font-bold text-ink lg:text-3xl">Joc: {joc.titlu}</h2>
      </div>
      {joc.instructiune && <p className="mt-2 text-lg text-ink-soft lg:text-2xl">{joc.instructiune}</p>}

      <div
        className="mt-5 flex min-h-56 flex-col justify-center rounded-2xl border-4 border-accent bg-bg p-6 lg:p-8"
        aria-live="polite"
      >
        {bilet ? (
          <>
            {bilet.eticheta && (
              <p className="text-base font-semibold uppercase tracking-wide text-accent-ink lg:text-xl">{bilet.eticheta}</p>
            )}
            <p className="mt-1 text-3xl font-bold leading-tight text-ink lg:text-5xl">{bilet.text}</p>
            {bilet.detaliu && (
              <div className="mt-4 flex flex-col gap-2 text-lg text-ink-soft lg:text-2xl">
                {bilet.detaliu.split('\n').map((linie, i) => (
                  <p key={i}>{linie}</p>
                ))}
              </div>
            )}
            {bilet.raspuns && (
              <div className="mt-5">
                {stare.raspunsVizibil ? (
                  <p className="rounded-xl border-2 border-good bg-good-soft px-4 py-3 text-xl font-semibold text-ink lg:text-3xl">
                    {bilet.raspuns}
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={() => setStare(arataRaspunsul)}
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-alt px-5 py-3 text-lg font-semibold text-ink hover:border-accent"
                  >
                    <Eye className="h-5 w-5" aria-hidden="true" />
                    Arată răspunsul
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <p className="text-2xl text-ink-soft lg:text-4xl">Apasă „{joc.buton ?? 'Trage un bilet'}”.</p>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={gata}
          onClick={() => setStare((s) => trage(joc, s))}
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-4 text-xl font-semibold text-navy hover:brightness-105 disabled:opacity-50"
        >
          <Dices className="h-6 w-6" aria-hidden="true" />
          {joc.buton ?? 'Trage un bilet'}
        </button>
        <button
          type="button"
          onClick={() => setStare(stareInitiala())}
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg px-5 py-3 text-lg font-semibold text-ink hover:border-accent"
        >
          <RotateCcw className="h-5 w-5" aria-hidden="true" />
          Reia jocul
        </button>
        {joc.faraRepetare && (
          <p role="status" className="text-lg font-semibold text-ink lg:text-2xl">
            {gata ? 'Au ieșit toate biletele.' : `Mai sunt ${mai} din ${joc.elemente.length}.`}
          </p>
        )}
      </div>

      {joc.faraRepetare && stare.trase.length > 0 && (
        <p className="mt-3 text-base text-ink-soft lg:text-xl">
          Au ieșit: {stare.trase.map((i) => joc.elemente[i].eticheta ?? joc.elemente[i].text).join(', ')}.
        </p>
      )}
    </section>
  )
}

export default JocExtragere
