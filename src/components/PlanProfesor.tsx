import { Lock } from 'lucide-react'
import type { PlanLectie } from '@/types'

// Planul de lecție. Document intern: nu se publică niciodată, apare doar
// pentru cine deschide codul. Tratament vizual sobru, fără culorile și
// iconițele zonei elevilor, ca să nu fie confundat cu un material de clasă.
export function PlanProfesor({ plan }: { plan: PlanLectie }) {
  if (!plan) return null

  return (
    <section className="mt-8 rounded-xl border border-ink/15 bg-ink/5 p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-ink/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Doar profesor
        </span>
        <span className="text-xs text-ink-soft">nepublicat · vizibil doar pe cod</span>
      </div>

      <h2 className="text-base font-bold text-ink">Plan de lecție — {plan.titlu}</h2>
      <p className="mt-1 text-sm text-ink-soft">
        {plan.tipOra} · {plan.durata} minute{plan.data ? ` · ${plan.data}` : ''}
      </p>

      {plan.obiective?.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Obiective</p>
          <ul className="mt-1.5 list-disc pl-5 text-sm text-ink">
            {plan.obiective.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      )}

      {plan.resurse?.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Resurse</p>
          <ul className="mt-1.5 list-disc pl-5 text-sm text-ink">
            {plan.resurse.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      )}

      {plan.desfasurare?.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Desfășurare</p>
          <ol className="mt-1.5 flex flex-col gap-2">
            {plan.desfasurare.map((etapa, i) => (
              <li key={i} className="text-sm text-ink">
                <span className="font-semibold">{etapa.etapa}</span>
                <span className="text-ink-soft"> · {etapa.timp}</span>
                <br />
                {etapa.activitate}
              </li>
            ))}
          </ol>
        </div>
      )}

      {plan.evaluare && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Evaluare</p>
          <p className="mt-1.5 whitespace-pre-line text-sm text-ink">{plan.evaluare}</p>
        </div>
      )}
    </section>
  )
}

export default PlanProfesor
