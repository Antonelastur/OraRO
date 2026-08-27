// Recapitulare inițială — clasa a VIII-a
// Sursă: 8. Ghid.pdf (Editura Art Klett, Sâmihăian, Dobra, Halaszi,
// Davidoiu-Roman, Corcheș, 2025), Proiectarea unităților de învățare,
// Unitatea I, primele două rânduri: „Prezentarea manualului” și
// „Recapitulare/evaluare inițială”, fiecare 1 oră, fără pagină de manual
// asociată (activități administrative de început de an).
//
// Discrepanță de ediție rezolvată explicit cu Antoanela: 8_proiectare pe
// unitati.doc și 8_planificare calendaristica.doc din sursele locale sunt
// scrise pentru anul școlar 2022-2023, cu o structură de unități diferită
// de manualul din folder (ediție 2025). S-a ales manualul nou + ghidul ca
// autoritate — ghidul conține propriile planificare și proiectare
// actualizate pentru ediția 2025, folosite aici.
//
// Convenție de numerotare: ore de curs din proiectarea ghidului, ca la
// clasele a VI-a și a VII-a (vezi nota din CLAUDE.md).
//
// rezolvareGhid și planLectie rămân null, document intern, nu se publică.

export const recapitulareInitiala = {
  id: 'recapitulare-initiala',
  titlu: 'Recapitulare inițială',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Prezentarea manualului',
      obiective: [
        'Se familiarizează cu structura și resursele manualului de clasa a VIII-a.',
      ],
      sursaManual: 'Ghidul profesorului, Proiectarea unităților de învățare, Unitatea I, „Prezentarea manualului” (fără pagină asociată)',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Recapitulare și evaluare inițială',
      obiective: [
        'Recapitulează selectiv conținuturile asociate clasei a VII-a și susține un test predictiv.',
      ],
      sursaManual: 'Ghidul profesorului, Proiectarea unităților de învățare, Unitatea I, „Recapitulare/evaluare inițială” (fără pagină asociată)',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
  ],
}
