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

export const recapitulareInitiala = {
  id: 'recapitulare-initiala',
  titlu: 'Recapitulare inițială',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Jocuri și activități de intercunoaștere',
      obiective: [],
      sursaManual: 'Ghidul profesorului, Editura Art Klett, III.1, ORA 1 (idee de fișă cu așteptări); formatul de joc e propunere originală',
      rezolvareGhid: null,
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
      obiective: [],
      sursaManual: 'Proiectarea pe unități de învățare 2022-2023, fără pagină de manual, Caietul elevului indisponibil',
      rezolvareGhid: null,
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
      planLectie: {
        titlu: 'Unitatea I — Ora 2',
        data: '16 septembrie 2026',
        tipOra: 'Evaluare inițială',
        durata: 50,
        obiective: [
          'Se identifică nivelul de înțelegere a unui text citit, la începutul clasei a V-a.',
          'Se verifică vocabularul activ și competențele de bază formate în ciclul primar.',
        ],
        resurse: ['Fișă de test tipărită, S1_L2_Test_initial_receptare.docx'],
        desfasurare: [
          { etapa: 'Moment organizatoric', timp: '2 min', activitate: 'Salut, prezența, distribuirea fișelor de test.' },
          { etapa: 'Instructaj', timp: '3 min', activitate: 'Se explică structura testului și timpul de lucru. Se precizează că testul are scop de orientare, nu de sancționare.' },
          { etapa: 'Rezolvarea testului', timp: '40 min', activitate: 'Elevii lucrează individual, în liniște. Profesorul monitorizează fără a interveni pe conținut.' },
          { etapa: 'Colectare și încheiere', timp: '5 min', activitate: 'Se colectează fișele. Se anunță că rezultatele vor fi discutate la ora următoare de analiză.' },
        ],
        evaluare: 'Evaluare inițială, sumativă, testul propriu-zis. Rezultatele nu se notează în catalog, se folosesc pentru stabilirea obiectivelor individuale la Ora 4.',
      },
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
      planLectie: {
        titlu: 'Unitatea I — Ora 3',
        data: '17 septembrie 2026',
        tipOra: 'Evaluare inițială',
        durata: 50,
        obiective: [
          'Se verifică nivelul de cunoaștere a elementelor de bază de construcție a comunicării, formate în ciclul primar: părți de vorbire, propoziția, punctuația.',
        ],
        resurse: ['Fișă de test tipărită, S1_L3_Test_initial_comunicare.docx'],
        desfasurare: [
          { etapa: 'Moment organizatoric', timp: '2 min', activitate: 'Salut, prezența, distribuirea fișelor de test.' },
          { etapa: 'Instructaj', timp: '3 min', activitate: 'Se explică structura testului și timpul de lucru.' },
          { etapa: 'Rezolvarea testului', timp: '40 min', activitate: 'Elevii lucrează individual, în liniște.' },
          { etapa: 'Colectare și încheiere', timp: '5 min', activitate: 'Se colectează fișele. Se anunță ora de analiză a rezultatelor.' },
        ],
        evaluare: 'Evaluare inițială, sumativă, testul propriu-zis.',
      },
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
      planLectie: {
        titlu: 'Unitatea I — Ora 4',
        data: '18 septembrie 2026',
        tipOra: 'Analiză și remediere',
        durata: 50,
        obiective: [
          'Elevii înțeleg rezultatele obținute la testele inițiale și tipurile de erori frecvente la nivelul clasei.',
          'Se stabilesc, pentru fiecare elev, obiective individuale realiste pentru începutul anului.',
        ],
        resurse: ['Rezultatele centralizate ale celor două teste', 'Fișa S1_L4_Fisa_remediere.docx, una per elev'],
        desfasurare: [
          { etapa: 'Moment organizatoric', timp: '3 min', activitate: 'Salut, prezența.' },
          { etapa: 'Prezentarea rezultatelor generale', timp: '10 min', activitate: 'Profesorul prezintă, fără a individualiza, tendințele generale ale clasei, ce a mers bine, ce a fost dificil. Ton constructiv, testul inițial arată de unde pornim, nu o notă definitivă.' },
          { etapa: 'Discuție pe tipuri de erori frecvente', timp: '15 min', activitate: 'Se discută 2-3 tipuri de greșeli frecvente identificate în teste, exemple rezolvate împreună la tablă, fără a expune lucrarea vreunui elev.' },
          { etapa: 'Completarea fișei individuale', timp: '15 min', activitate: 'Fiecare elev primește propriul test corectat și completează, împreună cu profesorul, fișa de remediere individuală, identifică 1-2 obiective personale realiste.' },
          { etapa: 'Încheiere', timp: '7 min', activitate: 'Discuție de grup, cum ne ajută să știm de unde pornim. Se anunță ora următoare, începe lectura textului „Prietenul meu" de Ioana Pârvulescu.' },
        ],
        evaluare: 'Formativă, implicare în discuție, completarea corectă și realistă a fișei individuale de progres.',
      },
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
