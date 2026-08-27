// Recapitulare inițială — clasa a VI-a
// Sursă: proiectarea pe unități 2023-2024 (Editura Art Klett, Sâmihăian, Dobra,
// Halaszi, Davidoiu-Roman, Corcheș), Unitatea I, primul rând: „Activități de
// recapitulare inițială și prezentarea manualului”, alocat oficial 2 ore, fără
// detaliere pe conținut.
//
// Cele 6 lecții de mai jos reiau, câte una per temă, exact conținutul de
// gramatică și vocabular din Unitatea I, clasa a V-a (lecțiile 9-14), singurul
// bloc din materia deja construită în OraRO care se pretează unei recapitulări
// de început de an la clasa a VI-a. Materialele (joc, schemă) sunt reutilizate
// direct din clasa-5/unitatea-1.js, nu duplicate: e aceeași materie, recapitulată,
// nu una nouă. Dacă materialul din clasa a V-a se modifică vreodată, recapitularea
// se actualizează automat odată cu el.
//
// Prezentarea manualului nou de clasa a VI-a e integrată în prima lecție
// (Propoziția), nu separat, conform deciziei din 2026-08-26.
//
// Cele 6 ore depășesc cu 4 ore alocarea oficială de 2 ore. Diferența se acoperă
// din cele 2 ore la dispoziția profesorului, prevăzute în proiectare după
// Unitatea a II-a; celelalte 2 ore rămân, în mod realist, din flexibilitatea
// primelor zile de școală, când orarul oricum nu e stabilizat complet. Decizie
// confirmată cu Antoanela, nu se redeschide fără motiv nou.
//
// rezolvareGhid și planLectie rămân null aici intenționat, document intern,
// nu se publică.

import { unitatea1 as unitatea1ClasaAVa } from '../clasa-5/unitatea-1.js'

const lectieClasaAVa = (id) => unitatea1ClasaAVa.lectii.find((l) => l.id === id)

export const recapitulareInitiala = {
  id: 'recapitulare-initiala',
  titlu: 'Recapitulare inițială',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Propoziția. Tipuri de propoziții',
      obiective: [
        'Reactualizează definiția propoziției și clasificarea propozițiilor după alcătuire și după aspectul predicatului, învățate în clasa a V-a.',
        'Se familiarizează cu manualul nou de clasa a VI-a, cu Caietul elevului și cu Cartea mea de gramatică.',
      ],
      sursaManual: 'Recapitulare după clasa a V-a, Art 5, pp. 24-25 (Propoziția); proiectarea pe unități clasa a VI-a, Unitatea I, activități de recapitulare inițială și prezentarea manualului',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: lectieClasaAVa('lectia-9').materiale.joc,
        infografic: null,
        schema: lectieClasaAVa('lectia-9').materiale.schema,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Cuvântul și dicționarul',
      obiective: [
        'Reactualizează rolul dicționarului, structura unui articol de dicționar și ordonarea alfabetică a cuvintelor, învățate în clasa a V-a.',
      ],
      sursaManual: 'Recapitulare după clasa a V-a, Art 5, pp. 26-27; proiectarea pe unități clasa a VI-a, Unitatea I, activități de recapitulare inițială',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: lectieClasaAVa('lectia-10').materiale.joc,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Sinonimele. Antonimele',
      obiective: [
        'Reactualizează identificarea și folosirea adecvată a sinonimelor și a antonimelor, învățate în clasa a V-a.',
      ],
      sursaManual: 'Recapitulare după clasa a V-a, Art 5, pp. 28-29; proiectarea pe unități clasa a VI-a, Unitatea I, activități de recapitulare inițială',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: lectieClasaAVa('lectia-11').materiale.joc,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Câmpul lexical',
      obiective: [
        'Reactualizează definiția câmpului lexical și gruparea termenilor după trăsături de sens comune, învățate în clasa a V-a.',
      ],
      sursaManual: 'Recapitulare după clasa a V-a, Art 5, pp. 30-31; proiectarea pe unități clasa a VI-a, Unitatea I, activități de recapitulare inițială',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: lectieClasaAVa('lectia-12').materiale.schema,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Tipurile de sunete',
      obiective: [
        'Reactualizează diferențierea vocalelor, consoanelor și semivocalelor și corespondența sunet-literă, învățate în clasa a V-a.',
      ],
      sursaManual: 'Recapitulare după clasa a V-a, Art 5, pp. 32-33; proiectarea pe unități clasa a VI-a, Unitatea I, activități de recapitulare inițială',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: lectieClasaAVa('lectia-13').materiale.schema,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Silaba. Accentul',
      obiective: [
        'Reactualizează despărțirea în silabe și identificarea accentului corect, conform DOOM3, învățate în clasa a V-a.',
      ],
      sursaManual: 'Recapitulare după clasa a V-a, Art 5, pp. 34-35; proiectarea pe unități clasa a VI-a, Unitatea I, activități de recapitulare inițială',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: lectieClasaAVa('lectia-14').materiale.joc,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
  ],
}
