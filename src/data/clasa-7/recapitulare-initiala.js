// Recapitulare inițială — clasa a VII-a
// Sursă: proiectarea pe unități 2024-2025 (Editura Art Klett, Sâmihăian,
// Dobra, Halaszi, Davidoiu-Roman, Corcheș), Unitatea I, primele două rânduri:
// „Prezentarea manualului” și „Recapitulare/evaluare inițială”, fiecare 1 oră,
// fără pagină de manual asociată (activități administrative de început de an,
// nu lecții numerotate de manual).
//
// Convenție de numerotare pentru clasa a VII-a, confirmată explicit: ore de
// curs din proiectare (ca la clasa a VI-a), nu numerotarea proprie a
// manualului (ca la clasa a V-a) — vezi nota din CLAUDE.md.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.

export const recapitulareInitiala = {
  id: 'recapitulare-initiala',
  titlu: 'Recapitulare inițială',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Prezentarea manualului',
      obiective: [
        'Se familiarizează cu structura și resursele manualului de clasa a VII-a.',
      ],
      sursaManual: 'Proiectarea pe unități clasa a VII-a, Unitatea I, „Prezentarea manualului” (fără pagină asociată)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea manualului',
        data: null,
        tipOra: 'Organizare, prezentarea manualului',
        durata: 50,
        obiective: [
          'Se familiarizează cu structura și resursele manualului de clasa a VII-a.',
        ],
        resurse: [
          'Manualul Art 7, varianta tipărită și cea digitală',
          'Ghidul profesorului Art 7, II.1, Prezentarea manualului',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii la prima oră de română din clasa a VII-a, verific prezența și mă asigur că fiecare are manualul nou și un caiet.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: 'Îi întreb pe elevi ce carte, ce film sau ce loc nou au descoperit în vacanță și ce i-a surprins.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că facem cunoștință cu manualul de clasa a VII-a și cu felul în care vom lucra anul acesta.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Discutăm ce și-au amintit elevii din clasa a VI-a, ce le-a plăcut și ce li s-a părut greu.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Prezint manualul: tema anului, orizonturile lumii și ale cunoașterii, cele cinci unități, Călătorie în necunoscut, Aproape de ceilalți, Harta sentimentelor, Cu noroc, fără noroc, Lumea de pe scenă, rubricile lecțiilor și varianta digitală, cu minitestele. Explic cum vom fi evaluați: testul de la finalul fiecărei unități, proiectele, portofoliul, autoevaluarea.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'În perechi, elevii răsfoiesc manualul și găsesc primul text al anului, o lecție de gramatică nouă și proiectul unei unități, apoi fiecare notează ce unitate îl atrage cel mai mult și de ce.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor, fără notare.',
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
      id: 'lectia-2',
      titlu: 'Recapitulare și evaluare inițială',
      obiective: [
        'Recapitulează selectiv conținuturile asociate clasei a VI-a și susține un test predictiv.',
      ],
      sursaManual: 'Proiectarea pe unități clasa a VII-a, Unitatea I, „Recapitulare/evaluare inițială” (fără pagină asociată)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare și evaluare inițială',
        data: null,
        tipOra: 'Recapitulare inițială',
        durata: 50,
        obiective: [
          'Recapitulează selectiv conținuturile asociate clasei a VI-a și susține un test predictiv.',
        ],
        resurse: [
          'Caietele elevilor, tabla',
          'Test inițial pregătit de profesor, doar dacă se aplică: manualul și Ghidul nu conțin unul, iar în OraRO nu există încă',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Jocul „Adevărat sau fals”: citesc cinci afirmații despre materia clasei a VI-a, iar elevii ridică mâna dreaptă pentru adevărat și stânga pentru fals.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm câteva teme importante din clasa a VI-a, ca să vedem de unde pornim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reamintim, cu întrebări rapide, reperele de lectură din clasa a VI-a: naratorul, momentele subiectului, tipurile de personaje, descrierea, dialogul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '12 min',
            activitate: 'Lucrăm la tablă exerciții scurte de limbă din clasa a VI-a: modurile verbului, cazurile substantivului, pronumele personal, adjectivul și adverbul, subiectul, predicatul și complementele.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '20 min',
            activitate: 'Dacă aleg să aplic un test inițial, elevii îl rezolvă individual. Altfel, rezolvă individual exerciții de fixare pe aceleași teme, iar la final corectăm împreună.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; testul inițial, dacă se aplică, fără notare în catalog.',
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
