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
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.

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
      planLectie: {
        titlu: 'Propoziția. Tipuri de propoziții',
        data: null,
        tipOra: 'Recapitulare inițială',
        durata: 50,
        obiective: [
          'Reactualizează definiția propoziției și clasificarea propozițiilor după alcătuire și după aspectul predicatului, învățate în clasa a V-a.',
          'Se familiarizează cu manualul nou de clasa a VI-a.',
        ],
        resurse: [
          'Manualul Art 6, pentru prezentarea cuprinsului și a rubricilor',
          'Manual Art 5, pp. 24-25, ca reper pentru recapitulare',
          'Schema „Tipurile de propoziție” (/materiale/clasa-5/unitatea-1/lectia-9/schema.svg)',
          'Quizul „Subiectul și predicatul” (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii la prima oră de română din clasa a VI-a, verific prezența și mă asigur că fiecare are manualul nou și un caiet.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Le cer elevilor câte o propoziție despre vacanța lor și scriu două dintre ele pe tablă, una scurtă și una mai bogată în detalii.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că facem cunoștință cu manualul de clasa a VI-a și că recapitulăm propoziția, materie din clasa a V-a.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Pornind de la propozițiile de pe tablă, reamintim ce este propoziția, care sunt subiectul și predicatul și cum le recunoaștem.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Prezint manualul, cuprinsul cu cele cinci unități și rubricile lecțiilor, Pentru început, Explorare, Repere, Aplicații, Provocări, Portofoliu. Apoi, cu schema din clasa a V-a, reluăm propoziția simplă și dezvoltată, afirmativă și negativă, pe enunțuri date.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Subiectul și predicatul”, apoi discutăm răspunsurile greșite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
      },
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
      planLectie: {
        titlu: 'Cuvântul și dicționarul',
        data: null,
        tipOra: 'Recapitulare inițială',
        durata: 50,
        obiective: [
          'Reactualizează rolul dicționarului, structura unui articol de dicționar și ordonarea alfabetică a cuvintelor, învățate în clasa a V-a.',
        ],
        resurse: [
          'Manual Art 5, pp. 26-27, ca reper pentru recapitulare',
          'Quizul „Cuvântul și dicționarul” (materialul de joc al lecției)',
          'Un dicționar tipărit sau dexonline.ro',
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
            activitate: 'Le arăt un dicționar tipărit și îi întreb care a fost ultimul cuvânt pe care l-au căutat și de ce.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm cum e alcătuit un articol de dicționar și cum găsim repede un cuvânt.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reamintim ordinea alfabetică și părțile unui articol de dicționar: cuvântul-titlu, informațiile gramaticale, sensurile numerotate, exemplele.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Ordonăm alfabetic un șir de cuvinte care încep cu aceeași literă, apoi căutăm împreună în dicționar trei cuvinte noi pentru elevi și citim articolele, marcând fiecare parte a lor.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Cuvântul și dicționarul”, apoi discutăm răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
      },
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
      planLectie: {
        titlu: 'Sinonimele. Antonimele',
        data: null,
        tipOra: 'Recapitulare inițială',
        durata: 50,
        obiective: [
          'Reactualizează identificarea și folosirea adecvată a sinonimelor și a antonimelor, învățate în clasa a V-a.',
        ],
        resurse: [
          'Manual Art 5, pp. 28-29, ca reper pentru recapitulare',
          'Quizul „Sinonime și antonime” (materialul de joc al lecției)',
          'Caietele elevilor',
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
            activitate: 'Spun un cuvânt și cer în lanț, de la fiecare elev, un sinonim sau un antonim pentru el.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm sinonimele și antonimele și cum le alegem potrivit contextului.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reamintim definițiile, faptul că sinonimele și antonimele sunt aceeași parte de vorbire și că alegerea lor depinde de context.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Lucrăm la tablă exerciții de înlocuire a unui cuvânt cu sinonimul potrivit în enunțuri diferite și de formare a perechilor de antonime, cu exemplele de la pp. 28-29 din manualul de clasa a V-a.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Sinonime și antonime”, apoi corectăm împreună.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
      },
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
      planLectie: {
        titlu: 'Câmpul lexical',
        data: null,
        tipOra: 'Recapitulare inițială',
        durata: 50,
        obiective: [
          'Reactualizează definiția câmpului lexical și gruparea termenilor după trăsături de sens comune, învățate în clasa a V-a.',
        ],
        resurse: [
          'Manual Art 5, pp. 30-31, ca reper pentru recapitulare',
          'Schema „Câmpul lexical, exemplu” (/materiale/clasa-5/unitatea-1/lectia-12/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: 'Le cer elevilor cât mai multe cuvinte legate de școală și le grupez pe tablă, fără să spun încă după ce criteriu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm câmpul lexical și gruparea cuvintelor după sens.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Îi rog pe elevi să ghicească criteriul după care am grupat cuvintele și reamintim definiția câmpului lexical.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei din clasa a V-a reluăm exemplul de câmp lexical, apoi construim împreună câmpul lexical al cuvântului familie, tema primei unități din clasa a VI-a.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev grupează în caiet o listă de cuvinte date pe două sau trei câmpuri lexicale și le denumește.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea grupării pe câmpuri lexicale, fără notare.',
      },
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
      planLectie: {
        titlu: 'Tipurile de sunete',
        data: null,
        tipOra: 'Recapitulare inițială',
        durata: 50,
        obiective: [
          'Reactualizează diferențierea vocalelor, consoanelor și semivocalelor și corespondența sunet-literă, învățate în clasa a V-a.',
        ],
        resurse: [
          'Manual Art 5, pp. 32-33, ca reper pentru recapitulare',
          'Schema „Vocale, consoane, semivocale” (/materiale/clasa-5/unitatea-1/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: 'Le cer elevilor să-și pronunțe rar prenumele și să numere câte sunete aud și câte litere scriu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm vocalele, consoanele și semivocalele și legătura dintre sunet și literă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reamintim vocalele limbii române și diferența dintre vocală și consoană, pe exemplele date de elevi.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei din clasa a V-a reluăm semivocalele și cazurile în care numărul literelor diferă de al sunetelor, apoi anunț că în Unitatea I vom învăța diftongul, triftongul și hiatul, care pornesc de aici.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev clasifică în caiet sunetele din trei cuvinte date, marcând vocalele, consoanele și semivocalele.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea clasificării sunetelor, fără notare.',
      },
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
      planLectie: {
        titlu: 'Silaba. Accentul',
        data: null,
        tipOra: 'Recapitulare inițială',
        durata: 50,
        obiective: [
          'Reactualizează despărțirea în silabe și identificarea accentului corect, conform DOOM3, învățate în clasa a V-a.',
        ],
        resurse: [
          'Manual Art 5, pp. 34-35, ca reper pentru recapitulare',
          'Quizul „Silaba și accentul” (materialul de joc al lecției)',
          'DOOM3 sau dexonline.ro',
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
            activitate: 'Le cer elevilor să bată din palme silabele numelor lor și ale unor cuvinte date.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm silaba și accentul, folosind DOOM3.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reamintim că fiecare silabă are o vocală și ce este silaba accentuată, pe cuvintele de la începutul orei.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Despărțim împreună în silabe cuvinte cu o consoană și cu două consoane între vocale și verificăm în DOOM3 accentul unor cuvinte des greșite.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Silaba și accentul”, apoi corectăm împreună răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
      },
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
