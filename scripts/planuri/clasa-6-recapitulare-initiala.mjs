// Schițe de plan de lecție, model în 6 pași (momentele lecției), pentru
// Recapitularea inițială, clasa a VI-a. Cele 6 ore reiau materia de vocabular,
// fonetică și sintaxă din clasa a V-a, Unitatea I (lecțiile 9-14), cu
// materialele reutilizate de acolo. Prima oră include prezentarea manualului
// de clasa a VI-a. Recapitularea nu se notează în catalog. 50 min / lecție.

const org = {
  etapa: 'Moment organizatoric',
  timp: '3 min',
  activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
}

export default {
  'lectia-1': {
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
      'Schema „Propoziția. Tipuri de propoziții” (/materiale/clasa-5/unitatea-1/lectia-9/schema.svg)',
      'Quizul „Subiectul și predicatul” (materialul de joc al lecției)',
    ],
    desfasurare: [
      { etapa: 'Moment organizatoric', timp: '3 min', activitate: 'Salut elevii la prima oră de română din clasa a VI-a, verific prezența și mă asigur că fiecare are manualul nou și un caiet.' },
      { etapa: 'Captarea atenției', timp: '5 min', activitate: 'Le cer elevilor câte o propoziție despre vacanța lor și scriu două dintre ele pe tablă, una scurtă și una mai bogată în detalii.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '2 min', activitate: 'Anunț că facem cunoștință cu manualul de clasa a VI-a și că recapitulăm propoziția, materie din clasa a V-a.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '8 min', activitate: 'Pornind de la propozițiile de pe tablă, reamintim ce este propoziția, care sunt subiectul și predicatul și cum le recunoaștem.' },
      { etapa: 'Dirijarea învățării', timp: '20 min', activitate: 'Prezint manualul, cuprinsul cu cele cinci unități și rubricile lecțiilor, Pentru început, Explorare, Repere, Aplicații, Provocări, Portofoliu. Apoi, cu schema din clasa a V-a, reluăm propoziția simplă și dezvoltată, afirmativă și negativă, pe enunțuri date.' },
      { etapa: 'Obținerea performanței', timp: '12 min', activitate: 'Elevii rezolvă quizul „Subiectul și predicatul”, apoi discutăm răspunsurile greșite.' },
    ],
    evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
  },
  'lectia-2': {
    titlu: 'Cuvântul și dicționarul',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează rolul dicționarului, structura unui articol de dicționar și ordonarea alfabetică a cuvintelor, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 26-27, ca reper pentru recapitulare',
      'Quizul „Cuvântul și dicționarul” (materialul de joc al lecției)',
      'Un dicționar tipărit sau dexonline.ro',
    ],
    desfasurare: [
      org,
      { etapa: 'Captarea atenției', timp: '5 min', activitate: 'Le arăt un dicționar tipărit și îi întreb care a fost ultimul cuvânt pe care l-au căutat și de ce.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '2 min', activitate: 'Anunț că recapitulăm cum e alcătuit un articol de dicționar și cum găsim repede un cuvânt.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '8 min', activitate: 'Reamintim ordinea alfabetică și părțile unui articol de dicționar: cuvântul-titlu, informațiile gramaticale, sensurile numerotate, exemplele.' },
      { etapa: 'Dirijarea învățării', timp: '20 min', activitate: 'Ordonăm alfabetic un șir de cuvinte care încep cu aceeași literă, apoi căutăm împreună în dicționar trei cuvinte noi pentru elevi și citim articolele, marcând fiecare parte a lor.' },
      { etapa: 'Obținerea performanței', timp: '12 min', activitate: 'Elevii rezolvă quizul „Cuvântul și dicționarul”, apoi discutăm răspunsurile.' },
    ],
    evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
  },
  'lectia-3': {
    titlu: 'Sinonimele. Antonimele',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează identificarea și folosirea adecvată a sinonimelor și a antonimelor, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 28-29, ca reper pentru recapitulare',
      'Quizul „Sinonime și antonime” (materialul de joc al lecției)',
      'Caietele elevilor',
    ],
    desfasurare: [
      org,
      { etapa: 'Captarea atenției', timp: '5 min', activitate: 'Spun un cuvânt și cer în lanț, de la fiecare elev, un sinonim sau un antonim pentru el.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '2 min', activitate: 'Anunț că recapitulăm sinonimele și antonimele și cum le alegem potrivit contextului.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '8 min', activitate: 'Reamintim definițiile, faptul că sinonimele și antonimele sunt aceeași parte de vorbire și că alegerea lor depinde de context.' },
      { etapa: 'Dirijarea învățării', timp: '20 min', activitate: 'Lucrăm la tablă exerciții de înlocuire a unui cuvânt cu sinonimul potrivit în enunțuri diferite și de formare a perechilor de antonime, cu exemplele de la pp. 28-29 din manualul de clasa a V-a.' },
      { etapa: 'Obținerea performanței', timp: '12 min', activitate: 'Elevii rezolvă quizul „Sinonime și antonime”, apoi corectăm împreună.' },
    ],
    evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
  },
  'lectia-4': {
    titlu: 'Câmpul lexical',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează definiția câmpului lexical și gruparea termenilor după trăsături de sens comune, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 30-31, ca reper pentru recapitulare',
      'Schema „Câmpul lexical” (/materiale/clasa-5/unitatea-1/lectia-12/schema.svg)',
      'Caietele elevilor',
    ],
    desfasurare: [
      org,
      { etapa: 'Captarea atenției', timp: '6 min', activitate: 'Le cer elevilor cât mai multe cuvinte legate de școală și le grupez pe tablă, fără să spun încă după ce criteriu.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '2 min', activitate: 'Anunț că recapitulăm câmpul lexical și gruparea cuvintelor după sens.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '7 min', activitate: 'Îi rog pe elevi să ghicească criteriul după care am grupat cuvintele și reamintim definiția câmpului lexical.' },
      { etapa: 'Dirijarea învățării', timp: '22 min', activitate: 'Cu ajutorul schemei din clasa a V-a reluăm exemplul de câmp lexical, apoi construim împreună câmpul lexical al cuvântului familie, tema primei unități din clasa a VI-a.' },
      { etapa: 'Obținerea performanței', timp: '10 min', activitate: 'Fiecare elev grupează în caiet o listă de cuvinte date pe două sau trei câmpuri lexicale și le denumește.' },
    ],
    evaluare: 'Observarea sistematică a elevilor; verificarea grupării pe câmpuri lexicale, fără notare.',
  },
  'lectia-5': {
    titlu: 'Tipurile de sunete',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează diferențierea vocalelor, consoanelor și semivocalelor și corespondența sunet-literă, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 32-33, ca reper pentru recapitulare',
      'Schema „Tipurile de sunete” (/materiale/clasa-5/unitatea-1/lectia-13/schema.svg)',
      'Caietele elevilor',
    ],
    desfasurare: [
      org,
      { etapa: 'Captarea atenției', timp: '6 min', activitate: 'Le cer elevilor să-și pronunțe rar prenumele și să numere câte sunete aud și câte litere scriu.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '2 min', activitate: 'Anunț că recapitulăm vocalele, consoanele și semivocalele și legătura dintre sunet și literă.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '7 min', activitate: 'Reamintim vocalele limbii române și diferența dintre vocală și consoană, pe exemplele date de elevi.' },
      { etapa: 'Dirijarea învățării', timp: '22 min', activitate: 'Cu ajutorul schemei din clasa a V-a reluăm semivocalele și cazurile în care numărul literelor diferă de al sunetelor, apoi anunț că în Unitatea I vom învăța diftongul, triftongul și hiatul, care pornesc de aici.' },
      { etapa: 'Obținerea performanței', timp: '10 min', activitate: 'Fiecare elev clasifică în caiet sunetele din trei cuvinte date, marcând vocalele, consoanele și semivocalele.' },
    ],
    evaluare: 'Observarea sistematică a elevilor; verificarea clasificării sunetelor, fără notare.',
  },
  'lectia-6': {
    titlu: 'Silaba. Accentul',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează despărțirea în silabe și identificarea accentului corect, conform DOOM3, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 34-35, ca reper pentru recapitulare',
      'Quizul „Silaba și accentul” (materialul de joc al lecției)',
      'DOOM3 sau dexonline.ro',
    ],
    desfasurare: [
      org,
      { etapa: 'Captarea atenției', timp: '5 min', activitate: 'Le cer elevilor să bată din palme silabele numelor lor și ale unor cuvinte date.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '2 min', activitate: 'Anunț că recapitulăm silaba și accentul, folosind DOOM3.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '8 min', activitate: 'Reamintim că fiecare silabă are o vocală și ce este silaba accentuată, pe cuvintele de la începutul orei.' },
      { etapa: 'Dirijarea învățării', timp: '20 min', activitate: 'Despărțim împreună în silabe cuvinte cu o consoană și cu două consoane între vocale și verificăm în DOOM3 accentul unor cuvinte des greșite.' },
      { etapa: 'Obținerea performanței', timp: '12 min', activitate: 'Elevii rezolvă quizul „Silaba și accentul”, apoi corectăm împreună răspunsurile.' },
    ],
    evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz, fără notare.',
  },
}
