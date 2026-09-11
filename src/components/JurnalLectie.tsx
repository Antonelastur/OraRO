// Starea lecției în jurnalul profesoarei: parcursă sau nu, plus reflecția de
// după oră. Date private, doar în localStorage, pe acest calculator.
import { useState } from 'react'
import { CheckCircle2, Lock } from 'lucide-react'
import { cheieLectie, formateazaData, reflectieGoala, useJurnal } from '@/lib/jurnal'
import { ReflectieOra } from './ReflectieOra'

const ETICHETE: [keyof typeof reflectieGoala, string][] = [
  ['cumAMers', 'Cum a mers ora'],
  ['notite', 'Notițele mele'],
  ['refolosire', 'Când voi refolosi lecția'],
  ['pastrez', 'Ce vreau să păstrez'],
  ['schimb', 'Ce vreau să schimb'],
]

const butonSecundar = 'rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-ink-soft hover:bg-ink/5'
const butonPrincipal = 'rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-navy hover:brightness-105'

export function JurnalLectie({ clasa, unitate, lectie }: { clasa: string; unitate: string; lectie: string }) {
  const cheie = cheieLectie(clasa, unitate, lectie)
  const { jurnal, salveaza, sterge } = useJurnal()
  const intrare = jurnal[cheie]
  const [editez, setEditez] = useState(false)

  const completate = intrare ? ETICHETE.filter(([camp]) => intrare.reflectie[camp].trim()) : []

  return (
    <section className="mt-6 rounded-xl border border-ink/15 bg-ink/5 p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-ink/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Jurnalul orei
        </span>
        <span className="text-xs text-ink-soft">privat · salvat doar pe acest calculator</span>
      </div>

      {editez ? (
        <ReflectieOra
          initial={intrare?.reflectie ?? reflectieGoala}
          onSalveaza={(r) => {
            salveaza(cheie, r)
            setEditez(false)
          }}
        >
          <button type="submit" className={butonPrincipal}>
            {intrare ? 'Salvează reflecția' : 'Salvează și marchează ca parcursă'}
          </button>
          <button type="button" onClick={() => setEditez(false)} className={butonSecundar}>
            Renunță
          </button>
        </ReflectieOra>
      ) : intrare ? (
        <>
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <CheckCircle2 className="h-4 w-4 text-good" aria-hidden="true" />
            Parcursă pe {formateazaData(intrare.parcursaLa)}
          </p>

          {completate.length > 0 ? (
            <dl className="mt-3 flex flex-col gap-2">
              {completate.map(([camp, eticheta]) => (
                <div key={camp}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{eticheta}</dt>
                  <dd className="whitespace-pre-line text-sm text-ink">{intrare.reflectie[camp]}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-2 text-sm text-ink-soft">Nu ai scris încă o reflecție pentru ora asta.</p>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={() => setEditez(true)} className={butonSecundar}>
              {completate.length > 0 ? 'Editează reflecția' : 'Scrie reflecția'}
            </button>
            <button
              type="button"
              onClick={() => {
                if (completate.length === 0 || window.confirm('Marchezi lecția ca neparcursă? Reflecția scrisă se șterge.')) {
                  sterge(cheie)
                }
              }}
              className={butonSecundar}
            >
              Marchează ca neparcursă
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-ink-soft">Lecția nu e marcată ca parcursă.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => salveaza(cheie, reflectieGoala)} className={butonPrincipal}>
              Marchează ca parcursă
            </button>
            <button type="button" onClick={() => setEditez(true)} className={butonSecundar}>
              Scrie reflecția
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default JurnalLectie
