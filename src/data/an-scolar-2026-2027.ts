// Structura anului școlar 2026-2027, așa cum e publicată de școală.
// Sursa: https://principelecarol.ro/structura-anului-scolar.html
//
// Datele nu se deduc și nu se calculează. Se introduc din sursa oficială și se
// pot edita, pentru că structura se stabilește anual prin ordin de ministru, iar
// vacanța de schi prin decizie a inspectoratului județean.
import type { AnScolar } from '@/lib/an-scolar'

export const an20262027: AnScolar = {
  id: '2026-2027',
  denumire: 'Anul școlar 2026-2027',
  primaZiDeLuni: '2026-09-07',
  sursa: 'https://principelecarol.ro/structura-anului-scolar.html',

  module: [
    { numar: 1, dataStart: '2026-09-07', dataFinal: '2026-10-23' },
    { numar: 2, dataStart: '2026-11-02', dataFinal: '2026-12-22' },
    { numar: 3, dataStart: '2027-01-11', dataFinal: '2027-02-12' },
    { numar: 4, dataStart: '2027-02-22', dataFinal: '2027-04-23' },
    { numar: 5, dataStart: '2027-05-05', dataFinal: '2027-06-18' },
  ],

  vacante: [
    { denumire: 'Vacanța de toamnă', dataStart: '2026-10-24', dataFinal: '2026-11-01' },
    { denumire: 'Vacanța de iarnă', dataStart: '2026-12-23', dataFinal: '2027-01-10' },
    { denumire: 'Vacanța de schi', dataStart: '2027-02-15', dataFinal: '2027-02-21' },
    { denumire: 'Vacanța de primăvară', dataStart: '2027-04-24', dataFinal: '2027-05-04' },
    { denumire: 'Vacanța de vară', dataStart: '2027-06-19', dataFinal: '2027-09-05' },
  ],

  saptamaniSpeciale: [
    { denumire: 'Săptămâna Verde', dataStart: '2026-10-19', dataFinal: '2026-10-23' },
    { denumire: 'Școala altfel', dataStart: '2026-12-14', dataFinal: '2026-12-18' },
  ],

  // Doar zilele care taie efectiv un modul. Restul sărbătorilor legale cad în
  // vacanțe sau în weekend, deci nu schimbă programul.
  zileLibere: [
    { data: '2026-10-05', denumire: 'Ziua Internațională a Educației' },
    { data: '2026-11-30', denumire: 'Sfântul Andrei' },
    { data: '2026-12-01', denumire: 'Ziua Națională a României' },
    { data: '2027-06-01', denumire: 'Ziua Copilului' },
  ],

  dataFinal: '2027-06-18',

  // Clasa a VIII-a încheie cursurile cu o săptămână mai devreme.
  finalPeClasa: [{ clasa: 'clasa-8', dataFinal: '2027-06-11' }],
}
