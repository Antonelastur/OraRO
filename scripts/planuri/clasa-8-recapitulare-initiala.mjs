// Schițe de plan de lecție, model în 6 pași (momentele lecției), pentru
// Recapitularea inițială, clasa a VIII-a. Cele două ore sunt administrative,
// din proiectarea ghidului (ediția 2025), fără pagină de manual asociată.
// 50 min / lecție.

const org = {
  etapa: 'Moment organizatoric',
  timp: '3 min',
  activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
}

export default {
  'lectia-1': {
    titlu: 'Prezentarea manualului',
    data: null,
    tipOra: 'Organizare, prezentarea disciplinei',
    durata: 50,
    obiective: ['Se familiarizează cu structura și resursele manualului de clasa a VIII-a.'],
    resurse: [
      'Manualul de clasa a VIII-a, Editura Art Klett, ediția 2025, câte un exemplar pentru fiecare elev',
      'Caietele elevilor',
      'Tablă, pentru harta unităților',
    ],
    desfasurare: [
      org,
      { etapa: 'Captarea atenției', timp: '7 min', activitate: 'Îi întreb pe elevi ce își amintesc că le-a plăcut cel mai mult la română în clasa a VII-a și ce așteptări au de la anul acesta, care se încheie cu Evaluarea Națională.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '3 min', activitate: 'Anunț că ora e dedicată manualului nou și organizării anului: cum e construit, ce vom parcurge și cum lucrăm.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '7 min', activitate: 'Recapitulăm pe scurt cele patru domenii ale disciplinei, lectură, comunicare orală, limbă, redactare, așa cum le-au întâlnit până acum.' },
      { etapa: 'Dirijarea învățării', timp: '20 min', activitate: 'Parcurgem împreună manualul: cuprinsul, cele cinci unități, structura unei lecții, rubricile recurente, resursele digitale și paginile de recapitulare și evaluare; notăm pe tablă harta anului.' },
      { etapa: 'Obținerea performanței', timp: '10 min', activitate: 'Fiecare elev caută în manual, contra cronometru, trei lucruri date de mine, o rubrică, o pagină de evaluare, un text la alegere, și notează la ce pagină le-a găsit.' },
    ],
    evaluare: 'Observarea sistematică a participării; verificarea exercițiului de orientare în manual.',
  },
  'lectia-2': {
    titlu: 'Recapitulare și evaluare inițială',
    data: null,
    tipOra: 'Recapitulare și evaluare inițială',
    durata: 50,
    obiective: ['Recapitulează selectiv conținuturile asociate clasei a VII-a și susține un test predictiv.'],
    resurse: [
      'Test predictiv tipărit, câte un exemplar pentru fiecare elev',
      'Tablă, pentru recapitularea noțiunilor',
    ],
    desfasurare: [
      org,
      { etapa: 'Captarea atenției', timp: '4 min', activitate: 'Le spun elevilor că testul de azi nu se trece în catalog și că rezultatul îmi arată de unde pornim împreună în anul Evaluării Naționale.' },
      { etapa: 'Enunțarea subiectului și a obiectivelor', timp: '3 min', activitate: 'Anunț că recapitulăm pe scurt noțiunile-cheie din clasa a VII-a, apoi susținem un test predictiv de comprehensiune, limbă și redactare.' },
      { etapa: 'Reactualizarea cunoștințelor anterioare', timp: '10 min', activitate: 'Reluăm rapid, cu exemple la tablă, textul epic și liric, figurile de stil, părțile de propoziție și modurile verbale, noțiuni din clasa a VII-a pe care testul le atinge.' },
      { etapa: 'Dirijarea învățării', timp: '5 min', activitate: 'Distribui testele, citesc cerințele cu voce tare, explic structura și timpul de lucru și răspund la întrebările de clarificare.' },
      { etapa: 'Obținerea performanței', timp: '25 min', activitate: 'Elevii rezolvă individual testul predictiv; supraveghez discret, gestionez timpul și strâng lucrările la final.' },
    ],
    evaluare: 'Evaluare inițială scrisă, cu punctaj orientativ, fără notă în catalog; rezultatele se folosesc pentru planul de recuperare pe semestrul I.',
  },
}
