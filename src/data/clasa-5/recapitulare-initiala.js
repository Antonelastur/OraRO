// Recapitulare inițială — clasa a V-a
// Sursă: proiectarea pe unități de învățare 2022-2023 (Editura Art Klett,
// Sâmihăian, Dobra, Halaszi, Davidoiu-Roman), planificarea calendaristică
// anuală, pentru lecțiile 1-2.
// Lecțiile 3-5 urmează structura din planurile de lecție detaliate,
// Clasa a V-a/U1/S1_Planuri_lectie.docx, care descrie Săptămâna I ca 4 ore
// (Ora 1 intercunoaștere, Ora 2 evaluare receptare, Ora 3 evaluare
// comunicare, Ora 4 analiză și remediere), nu 3 ore ca în proiectarea pe
// unități. Contradicție semnalată și confirmată cu Antoanela: se urmează
// planurile de lecție detaliate pentru evaluarea inițială.
//
// rezolvareGhid și planLectie rămân null aici intenționat, document intern,
// nu se publică. Conținutul lor real e în
// notite-profesor/clasa-5/recapitulare-initiala.md (needatat în git, vezi
// .gitignore).

export const recapitulareInitiala = {
  id: 'recapitulare-initiala',
  titlu: 'Recapitulare inițială',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Jocuri și activități de intercunoaștere',
      obiective: [
        'Elevii se familiarizează cu profesorul și cu specificul disciplinei la gimnaziu, prin activități de intercunoaștere.',
        'Elevii își exprimă liber pasiunile și așteptările de la orele de română, iar profesorul comunică regulile de organizare a orei.',
      ],
      sursaManual: 'Planuri de lecție, Săptămâna I, Ora 1, Clasa a V-a/U1/S1_Planuri_lectie.docx (joc „Cartea de vizită”, prezentarea disciplinei, norme de organizare, teaser Unitatea I); Ghidul profesorului, Editura Art Klett, III.1, ORA 1 (fișa cu așteptări, format de joc adaptat, deja publicat)',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: { fisier: '/materiale/clasa-5/recapitulare-initiala/lectia-1/joc.pdf' },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Recapitulare inițială, exerciții',
      obiective: [
        'Recapitulează, prin exerciții variate, cunoștințe de vocabular, fonetică și ortografie din ciclul primar: sinonime, antonime, grupuri de sunete, despărțirea în silabe, scrierea corectă.',
        'Recunoaște părțile de vorbire și tipurile de propoziție învățate în ciclul primar și redactează, după dictare, un text funcțional simplu.',
      ],
      sursaManual: 'Proiectarea pe unități de învățare 2022-2023, fără pagină de manual, Caietul elevului indisponibil',
      rezolvareGhid: null,
      planLectie: null,
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Evaluare inițială, receptarea mesajului scris',
      obiective: [
        'Se identifică nivelul de înțelegere a unui text citit, la începutul clasei a V-a.',
        'Se verifică vocabularul activ și competențele de bază formate în ciclul primar.',
      ],
      sursaManual: 'Planuri de lecție, Săptămâna I, Ora 2, Clasa a V-a/U1/S1_Planuri_lectie.docx; textul de test, Clasa a V-a/U1/S1_L2_Test_initial_receptare.docx, e material de sprijin original',
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
      id: 'lectia-4',
      titlu: 'Evaluare inițială, elemente de construcție a comunicării',
      obiective: [
        'Se verifică nivelul de cunoaștere a elementelor de bază de construcție a comunicării, formate în ciclul primar: părți de vorbire, propoziția, punctuația.',
      ],
      sursaManual: 'Planuri de lecție, Săptămâna I, Ora 3, Clasa a V-a/U1/S1_Planuri_lectie.docx; textul de test, Clasa a V-a/U1/S1_L3_Test_initial_comunicare.docx, itemii de gramatică verificați pe conținutul din manual',
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
      id: 'lectia-5',
      titlu: 'Analiza testului inițial și remediere',
      obiective: [
        'Elevii înțeleg rezultatele obținute la testele inițiale și tipurile de erori frecvente la nivelul clasei.',
        'Se stabilesc, pentru fiecare elev, obiective individuale realiste pentru începutul anului.',
      ],
      sursaManual: 'Planuri de lecție, Săptămâna I, Ora 4, Clasa a V-a/U1/S1_Planuri_lectie.docx; fișă individuală, Clasa a V-a/U1/S1_L4_Fisa_remediere.docx',
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
