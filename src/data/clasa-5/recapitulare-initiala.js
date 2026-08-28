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
// rezolvareGhid rămâne null aici intenționat, document intern, nu se publică;
// conținutul real e în notite-profesor/clasa-5/recapitulare-initiala.md
// (needatat în git, vezi .gitignore).
// planLectie conține o schiță de plan în 6 pași (momentele lecției), afișată
// pe site sub eticheta discretă „Doar profesor” din PlanProfesor.tsx.
// Planurile ERR mai vechi din notite-profesor/ rămân neatinse, sunt altă formă.

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
      planLectie: {
        titlu: 'Jocuri și activități de intercunoaștere',
        data: null,
        tipOra: 'Organizare, intercunoaștere',
        durata: 50,
        obiective: [
          'Elevii se familiarizează cu profesorul și cu specificul orei de română la gimnaziu.',
          'Elevii își exprimă pasiunile și așteptările de la disciplină, iar profesorul comunică regulile de organizare a orei și criteriile de evaluare.',
        ],
        resurse: [
          'Jocul „Cartea de vizită”, fișă tipărită (/materiale/clasa-5/recapitulare-initiala/lectia-1/joc.pdf)',
          'Fișă cu așteptările elevilor',
          'Manualul de clasa a V-a, pentru prezentarea Unității I',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor și a instrumentelor de scris pentru prima oră de română din gimnaziu.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: 'Le cer elevilor să spună într-un cuvânt cum se simt în prima zi de școală și pornesc de la răspunsuri o scurtă discuție despre ce așteaptă de la ora de română.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '3 min',
            activitate: 'Anunț că ora e dedicată cunoașterii reciproce și organizării disciplinei și scriu pe tablă cele două repere ale orei: ne cunoaștem, stabilim regulile de lucru.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Întreb ce le-a plăcut și ce li s-a părut greu la română în clasa a IV-a, ca să văd cu ce bagaj vin în gimnaziu.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Conduc jocul „Cartea de vizită” din fișa tipărită, fiecare elev își completează și își prezintă cartea de vizită, apoi prezint pe scurt disciplina, manualul și Unitatea I și comunic regulile de organizare a orei și criteriile de evaluare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează fișa cu trei așteptări proprii de la orele de română și o citește cu voce tare; strâng fișele ca să le folosesc pe parcursul anului.',
          },
        ],
        evaluare: 'Observarea sistematică a participării la joc și la discuție; fișa cu așteptări, fără notare.',
      },
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
      planLectie: {
        titlu: 'Recapitulare inițială, exerciții',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții variate, cunoștințe de vocabular, fonetică și ortografie din ciclul primar: sinonime, antonime, grupuri de sunete, despărțirea în silabe, scrierea corectă.',
          'Recunoaște părțile de vorbire și tipurile de propoziție învățate în ciclul primar și redactează, după dictare, un text funcțional simplu.',
        ],
        resurse: [
          'Fișă de exerciții tipărită (/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa.pdf)',
          'Tablă, caiete',
          'Un scurt text pentru dictare, pregătit de profesor',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și mă asigur că fiecare are caietul și un instrument de scris pentru lucrul pe fișă.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Le propun un joc scurt de cuvinte, găsesc repede un sinonim și un antonim pentru „vesel”, ca să reintre în atmosfera exercițiilor de limbă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm, prin exerciții, vocabularul, fonetica, ortografia și gramatica din ciclul primar și că la final scriem un text scurt după dictare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reamintesc pe scurt, cu exemple la tablă, ce sunt sinonimele și antonimele, cum se despart cuvintele în silabe și care sunt părțile de vorbire învățate în clasa a IV-a.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Distribui fișa de exerciții, circul prin clasă și ofer sprijin individual, apoi corectăm pe rând la tablă exercițiile de vocabular, fonetică, ortografie și gramatică.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Dictez un text funcțional scurt, un bilet sau un anunț, pe care elevii îl scriu singuri respectând ortografia și punctuația; verific câteva caiete pe loc.',
          },
        ],
        evaluare: 'Observarea sistematică a rezolvării fișei; verificarea textului scris după dictare, fără notare în catalog.',
      },
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
        titlu: 'Evaluare inițială, receptarea mesajului scris',
        data: null,
        tipOra: 'Evaluare inițială',
        durata: 50,
        obiective: [
          'Se identifică nivelul de înțelegere a unui text citit, la începutul clasei a V-a.',
          'Se verifică vocabularul activ și competențele de bază formate în ciclul primar.',
        ],
        resurse: [
          'Test inițial de receptare a mesajului scris, tipărit, câte un exemplar pentru fiecare elev',
          'Text-suport la prima vedere, potrivit vârstei',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și așez clasa pentru lucru individual, câte unul în bancă.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: 'Le spun că testul de azi nu se trece în catalog și că rezultatul mă ajută să văd de unde pornim împreună, ca să lucreze liniștiți.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că elevii citesc un text nou și răspund la întrebări care arată cât de bine înțeleg ce citesc și cât de bogat le e vocabularul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintesc pe scurt pașii lecturii unui text la prima vedere: citesc de două ori, subliniez cuvintele necunoscute, caut răspunsul în text.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele, citesc cu voce tare cerințele, explic cum se completează și cât timp au la dispoziție, apoi răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '33 min',
            activitate: 'Elevii rezolvă individual testul de receptare a mesajului scris; supraveghez discret, gestionez timpul și strâng lucrările la final.',
          },
        ],
        evaluare: 'Evaluare inițială scrisă, cu punctaj orientativ, fără notă în catalog; rezultatele se discută la lecția de analiză și remediere.',
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
        titlu: 'Evaluare inițială, elemente de construcție a comunicării',
        data: null,
        tipOra: 'Evaluare inițială',
        durata: 50,
        obiective: [
          'Se verifică nivelul de cunoaștere a elementelor de bază de construcție a comunicării, formate în ciclul primar: părți de vorbire, propoziția, punctuația.',
        ],
        resurse: [
          'Test inițial de construcție a comunicării, tipărit, câte un exemplar pentru fiecare elev',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și așez clasa pentru lucru individual.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '2 min',
            activitate: 'Le reamintesc că e a doua probă din evaluarea inițială, tot fără notă, și că împreună cele două teste îmi arată clar unde stăm.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că testul de azi verifică părțile de vorbire, propoziția și punctuația, adică regulile de bază ale limbii, învățate în ciclul primar.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Recapitulăm în două minute, la tablă, ce este substantivul, verbul, adjectivul și ce semne de punctuație închid o propoziție.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '6 min',
            activitate: 'Distribui testele, citesc cerințele, explic modul de completare și timpul de lucru și răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '33 min',
            activitate: 'Elevii rezolvă individual testul de construcție a comunicării; supraveghez discret, gestionez timpul și strâng lucrările la final.',
          },
        ],
        evaluare: 'Evaluare inițială scrisă, cu punctaj orientativ, fără notă în catalog; erorile frecvente se centralizează pentru lecția de remediere.',
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
        titlu: 'Analiza testului inițial și remediere',
        data: null,
        tipOra: 'Analiză și remediere',
        durata: 50,
        obiective: [
          'Elevii înțeleg rezultatele obținute la testele inițiale și tipurile de erori frecvente la nivelul clasei.',
          'Se stabilesc, pentru fiecare elev, obiective individuale realiste pentru începutul anului.',
        ],
        resurse: [
          'Lucrările corectate de la cele două teste inițiale',
          'Fișă individuală de progres, câte una pentru fiecare elev',
          'Tablă, pentru centralizarea erorilor frecvente',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătesc lucrările corectate și fișele individuale de progres.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Prezint, centralizat și fără nume, trei tipuri de greșeli care au apărut cel mai des în clasă și întreb elevii care cred că e cauza lor.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '3 min',
            activitate: 'Anunț că azi înțelegem ce a ieșit la testele inițiale și ce are fiecare de exersat mai departe, fără să ne comparăm între noi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '9 min',
            activitate: 'Reluăm regulile pe care s-au poticnit cei mai mulți elevi: despărțirea în silabe, acordul, punctuația propoziției, cu exemple corectate la tablă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Discut pe rând greșelile tipice, arăt cum se corectează fiecare, apoi înmânez lucrările și trec pe la fiecare elev pentru o observație scurtă și concretă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează fișa individuală de progres cu două lucruri pe care le face bine și două obiective de exersat până la prima recapitulare.',
          },
        ],
        evaluare: 'Observarea sistematică a participării la discuție; fișa individuală de progres, folosită ca reper pe parcursul semestrului.',
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
