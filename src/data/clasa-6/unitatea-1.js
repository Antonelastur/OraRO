// Unitatea I: Acasă, în familie, printre cărți — clasa a VI-a
// Sursă: Limba și literatura română, manual Art Klett (Sâmihăian, Dobra, Halaszi,
// Davidoiu-Roman, Corcheș), ediția 2023; proiectarea pe unități de învățare
// 2023-2024; planificarea calendaristică.
//
// Manualul își numerotează singur lecțiile Unității I, L1 până la L17 (cuprins,
// pp. 6, 8-9), pe 19 ore de recapitulare inițială + unitate (2 ore recapitulare
// inițială, tratate separat, în afara acestui fișier). Cele 22 de lecții de mai
// jos urmează însă orele din proiectarea pe unități, nu numerotarea manualului:
// decizie explicită a Antoanelei, o resursă pe oră de curs, nu pe pagină de
// manual. Acolo unde o singură lecție de manual (o singură pagină sau pereche de
// pagini) e predată în 2 ore și deci apare aici ca 2 lecții de site, sursaManual
// notează explicit „partea 1/2” și „partea 2/2”, ca să nu pară o eroare de
// citare: paginile citate sunt corecte, doar împărțite pe două ore de curs.
//
// Paginile manualului au fost verificate direct în Art 6.pdf (căutare de text +
// citire pagină cu pagină), nu presupuse. „Semnificațiile textului” apare de
// două ori ca lecție distinctă în manual (L4 și L7), câte o dată pentru fiecare
// text de bază al unității, nu ca variantă split a aceleiași lecții.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: schema și infografic sunt originale, desenate pornind de la
// structurile și exemplele din manual (organizatoare grafice, diagrama
// autor-narator-personaj de la p. 14, exemplele cu „păianjen”). Jocurile
// (quiz) folosesc situații și reguli reale din paginile citate. Fișele
// lecțiilor 4, 7, 9, 10, 15, 18 și 19 sunt materiale de sprijin originale,
// generate cu scripts/build_clasa6_fise.py, cu conținutul de bază (definiții,
// trăsături de specie) din Art 6, notat în casete „Reper”. Pentru lecțiile 1
// și 5 (prezentare) și 22 (test), materialul rămâne null — necesită NotebookLM/
// Canva, respectiv forma finală construită de Antoanela în Google Forms.
// Lecția 12 (joc de rol) rămâne fără material propriu: manualul conține deja,
// la p. 27, o activitate completă de joc de rol, gata de folosit la oră.

export const unitatea1 = {
  id: 'unitatea-1',
  titlu: 'Unitatea I: Acasă, în familie, printre cărți',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ literar. Un păianjen care se crede Spiderman de Adina Popescu',
      obiective: [
        'Identifică informații esențiale din textul narativ Un păianjen care se crede Spiderman de Adina Popescu, povestit din perspectiva unui păianjen narator.',
      ],
      sursaManual: 'Manual, Lecția 1, pp. 10-12 (Un păianjen care se crede Spiderman de Adina Popescu); Ghidul profesorului, Unitatea I',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Un păianjen care se crede Spiderman de Adina Popescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul narativ Un păianjen care se crede Spiderman de Adina Popescu, povestit din perspectiva unui păianjen narator.',
        ],
        resurse: [
          'Manual Art 6, pp. 10-12',
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
            timp: '8 min',
            activitate: 'Brainstorming pe tema „acasă”: fiecare elev notează primele idei și imagini care îi vin în minte, apoi le adunăm pe tablă. Prezint modelul blazonului familiei de la p. 10, pe care îl completează acasă, pentru portofoliu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că deschidem Unitatea I cu un text al Adinei Popescu, în care întâmplările sunt povestite de un păianjen.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim ce știu elevii despre textul narativ din clasa a V-a: întâmplări, personaje, cine povestește.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc model textul de la pp. 10-12, elevii urmăresc în manual. Clarific cuvintele necunoscute și ne oprim scurt la momentele-cheie: păianjenul ascuns în Alice în Țara Minunilor, familia Mariei mutată de trei luni, fuga prin paginile cărții, plecarea pe fir.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev împarte foaia în patru cadrane și completează impresiile de lectură de la p. 12, apoi notează o întrebare pe care i-ar pune-o autoarei.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; impresiile de lectură; blazonul familiei, în portofoliu.',
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
      titlu: 'Narațiunea. Acțiunea. Timpul și spațiul',
      obiective: [
        'Identifică acțiunea, indiciile de timp și de spațiu dintr-un text narativ, pe baza textului Un păianjen care se crede Spiderman.',
      ],
      sursaManual: 'Manual, Lecția 2, p. 13',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Narațiunea. Acțiunea. Timpul și spațiul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică acțiunea, indiciile de timp și de spațiu dintr-un text narativ, pe baza textului Un păianjen care se crede Spiderman.',
        ],
        resurse: [
          'Manual Art 6, p. 13',
          'Schema „Acțiunea, timpul și spațiul într-o narațiune” (/materiale/clasa-6/unitatea-1/lectia-2/schema.svg)',
          'Coli A4 pentru ideile principale',
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
            activitate: 'Îi întreb pe elevi care li s-a părut cea mai amuzantă scenă din text și care cea mai tristă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că urmărim firul întâmplărilor și aflăm unde și când se petrec.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm pe scurt textul, pe cele nouă secvențe marcate în manual.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Grupe de 2-3 elevi primesc câte o secvență, găsesc cuvintele-cheie și scriu ideea principală pe o jumătate de coală. Doi elevi ordonează colile pe tablă, apoi toți notează ideile. Căutăm indiciile de spațiu și de timp, anotimpul, partea zilei, pasajele care trimit la întâmplări anterioare, și fixăm reperele cu schema lecției.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Exercițiul „facem un film” de la p. 13: elevii decid câte scene ar filma, după schimbările de spațiu, de timp și de personaje, și își justifică alegerea.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; interevaluare prin turul galeriei, pe colile cu ideile principale. Temă opțională: banda desenată de la Provocări.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-2/schema.svg', titlu: 'Acțiunea, timpul și spațiul într-o narațiune' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Narațiunea la persoana I. Autorul, naratorul, personajul',
      obiective: [
        'Diferențiază autorul, naratorul și personajul într-un text narativ la persoana I, pe baza textului Un păianjen care se crede Spiderman.',
      ],
      sursaManual: 'Manual, Lecția 3, pp. 14-15',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Narațiunea la persoana I. Autorul, naratorul, personajul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Diferențiază autorul, naratorul și personajul într-un text narativ la persoana I, pe baza textului Un păianjen care se crede Spiderman.',
        ],
        resurse: [
          'Manual Art 6, pp. 14-15',
          'Schema „Autorul, naratorul, personajul” (/materiale/clasa-6/unitatea-1/lectia-3/schema.svg)',
          'Coli pentru postere',
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
            activitate: 'Le arăt imaginea păpușarului cu marionetele de la p. 15 și îi întreb cine mânuiește și cine joacă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să deosebim autorul, naratorul și personajul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Răspundem la întrebările de la p. 14: cine relatează, la ce persoană, care sunt personajele, ce text din clasa a V-a avea tot un narator-personaj.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic cele două lumi de la p. 14, lumea reală a autorului și a cititorului și ficțiunea în care trăiesc naratorul și personajele. Discutăm de ce păianjenul-narator nu e Adina Popescu, ce figură de stil îl face să vorbească, personificarea, și cum își spune gândurile și sentimentele, cu exemple din text.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Trei grupe realizează posterul-profil al unui personaj, Maria, mama sau păianjenul, după organizatorul grafic de la p. 15. Un reprezentant al fiecărei grupe îl prezintă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; posterele grupelor. Temă de portofoliu: rescrierea textului din perspectiva Mariei.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-3/schema.svg', titlu: 'Autorul, naratorul, personajul' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului (Un păianjen care se crede Spiderman)',
      obiective: [
        'Formulează o opinie argumentată despre semnificația textului Un păianjen care se crede Spiderman.',
      ],
      sursaManual: 'Manual, Lecția 4, p. 16',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului (Un păianjen care se crede Spiderman)',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie argumentată despre semnificația textului Un păianjen care se crede Spiderman.',
        ],
        resurse: [
          'Manual Art 6, p. 16',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-4/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi cum li se pare ideea de a alege un păianjen ca narator și ce efect a avut asupra lor.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm ce vrea să ne spună textul despre familie și că fiecare își va argumenta părerea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Asociem emoțiile din relatarea păianjenului, tristețe, dezgust, frică, furie, bucurie, cu momentele din text.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Discutăm întrebările de interpretare de la p. 16: de ce își consideră păianjenul familie pe Maria și pe părinții ei, ce spune raftul cu Roald Dahl despre fată, de ce se crede Spiderman, ce notă ar da titlului. În grupe de 4-5 elevi discută afirmația că observațiile celor din familie nu înseamnă că nu țin la tine.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi fiecare formulează într-un enunț ideea din text pe care a apreciat-o cel mai mult.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; autoevaluare. Temă de portofoliu: textul de 90-100 de cuvinte despre responsabilitățile din familie.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-4/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Textul descriptiv literar în proză. Indescriptibil de Simona Popescu',
      obiective: [
        'Identifică trăsăturile textului descriptiv literar în proză, pe baza textului Indescriptibil de Simona Popescu.',
      ],
      sursaManual: 'Manual, Lecția 5, pp. 17-18 (Indescriptibil de Simona Popescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul descriptiv literar în proză. Indescriptibil de Simona Popescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile textului descriptiv literar în proză, pe baza textului Indescriptibil de Simona Popescu.',
        ],
        resurse: [
          'Manual Art 6, pp. 17-18',
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
            timp: '8 min',
            activitate: 'Fiecare elev descrie în câteva rânduri prima carte de care își amintește ceva deosebit, apoi schimbă caietul cu colegul de bancă și discută.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un text în care o carte neobișnuită, un dicționar, e descrisă ca o lume vie.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Pornind de la descrierile scrise, discutăm ce cuvinte i-au ajutat pe colegi să-și imagineze cartea.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc model textul de la pp. 17-18, clarificăm cuvintele din subsol, nacelă, nabab, naiadă, crisalidă, și discutăm ce carte e descrisă, cum arată ea, ce e jocul de-a ghicitul și de ce cuvintele par vietăți într-un furnicar.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează un enunț din text care l-a atras și le explică colegilor alegerea, apoi definește, ca într-un articol de dicționar, o emoție simțită la lectură.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea impresiilor de lectură.',
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
      id: 'lectia-6',
      titlu: 'Descrierea în proză',
      obiective: [
        'Recunoaște elementele descrierii într-un text în proză: obiectul descris, proprietățile și elementele componente.',
      ],
      sursaManual: 'Manual, Lecția 6, p. 19',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea în proză',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște elementele descrierii într-un text în proză: obiectul descris, proprietățile și elementele componente.',
        ],
        resurse: [
          'Manual Art 6, p. 19',
          'Schema „Descrierea în proză” (/materiale/clasa-6/unitatea-1/lectia-6/schema.svg)',
          'Un dicționar sau dexonline.ro',
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
            activitate: 'Le cer elevilor să scrie ce văd, ce simt și ce gândesc când aud cuvintele familie și carte, apoi comparăm câteva răspunsuri.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm din ce se compune o descriere și cum o recunoaștem într-un text în proză.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Căutăm în dicționar cuvintele din Indescriptibil pe care elevii nu le cunosc, în afara celor din subsol.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei completăm elementele descrierii Dicționarului școlarului din primul paragraf: obiectul, proprietățile, elementele componente. Comparăm cele două secvențe de la p. 19, una despre cum arată cartea, alta despre cum o simte copilul, explicăm comparația „ca niște jucării cu cheiță” și fixăm Reperele, cu cele cinci simțuri.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'În perechi, elevii identifică secvența descriptivă din paragraful al treilea și explică rolul adjectivelor din paragraful al cincilea.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea aplicațiilor lucrate în perechi.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-6/schema.svg', titlu: 'Descrierea în proză' },
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Semnificațiile textului (Indescriptibil)',
      obiective: [
        'Formulează o opinie argumentată despre semnificația textului Indescriptibil de Simona Popescu.',
      ],
      sursaManual: 'Manual, Lecția 7, p. 20',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului (Indescriptibil)',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie argumentată despre semnificația textului Indescriptibil de Simona Popescu.',
        ],
        resurse: [
          'Manual Art 6, p. 20',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-7/fisa.pdf)',
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
            activitate: 'Scriu pe tablă enunțul „Descrierile sunt ca și cum ai desena lumea, bucățică cu bucățică.” și îi întreb pe elevi cum îl înțeleg.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că discutăm ce spune textul despre cuvinte, lectură și imaginație și că fiecare își va argumenta părerea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm cele două perspective asupra dicționarului, cum arată și cum e simțit de copil.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Discutăm de ce dicționarul e numit o jucărie din care cititorii fac alte jucării și dacă fiecare cuvânt cheamă altă imagine pentru fiecare om. În perechi, elevii descriu o grădină prin cele cinci simțuri și compară textele. Încheiem cu lumea lăuntrică, mai mare decât lumea din afară, și cu titlul.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi, în perechi, scriu o ghicitoare bazată pe descriere și o citesc clasei, care încearcă s-o dezlege.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; aprecieri pe ghicitorile citite.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-7/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Textele continue și discontinue',
      obiective: [
        'Diferențiază textele continue de textele discontinue și recunoaște exemple din fiecare categorie.',
      ],
      sursaManual: 'Manual, Lecția 8, p. 21',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textele continue și discontinue',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Diferențiază textele continue de textele discontinue și recunoaște exemple din fiecare categorie.',
        ],
        resurse: [
          'Manual Art 6, p. 21',
          'Infograficul „Texte continue și texte discontinue” (/materiale/clasa-6/unitatea-1/lectia-8/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi ce cărți se pot citi „de la mijloc spre sfârșit sau pe sărite”, ca dicționarul din Indescriptibil, și de ce.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să deosebim textele continue de cele discontinue.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm tipurile de texte citite până acum în unitate, narativ și descriptiv, și cum e organizat fiecare în pagină.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Observăm imaginile de la p. 21, comparăm felul în care e organizată informația și le grupăm în două categorii. Cu infograficul definim textele continue, în propoziții și paragrafe, și textele discontinue: liste, tabele, calendare, grafice, articole de dicționar, scheme.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă aplicațiile de la p. 21, apoi completează autoevaluarea pentru lecțiile 1-8: ce li s-a părut cel mai important, ce le-a plăcut, ce a fost dificil.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea achizițiilor din lecțiile 1-8.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-6/unitatea-1/lectia-8/infografic.svg', titlu: 'Texte continue și texte discontinue' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Text auxiliar. Lectura în trei, în doi, de unul singur de Rodica Zane',
      obiective: [
        'Compară textul auxiliar Lectura în trei, în doi, de unul singur de Rodica Zane cu textele de bază ale unității, folosind jurnalul cu dublă intrare.',
      ],
      sursaManual: 'Manual, Lecția 9, „Noi pagini, alte idei”, pp. 22-23 (Lectura în trei, în doi, de unul singur de Rodica Zane)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Lectura în trei, în doi, de unul singur de Rodica Zane',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Compară textul auxiliar Lectura în trei, în doi, de unul singur de Rodica Zane cu textele de bază ale unității, folosind jurnalul cu dublă intrare.',
        ],
        resurse: [
          'Manual Art 6, pp. 22-23',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-9/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce își amintesc mai bine: prima carte pe care le-a citit-o cineva sau prima pe care au citit-o singuri.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un text despre cum învățăm să citim și îl comparăm cu textele unității.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Explic jurnalul cu dublă intrare: pagina împărțită în două, în stânga pasajul, în dreapta de ce l-am ales.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Elevii citesc individual fragmentul de la p. 22, completând jurnalul, apoi își confruntă jurnalele în grupuri de 3-4. Comparăm bobul de mazăre din Foarte gras fără nas cu păianjenul Adinei Popescu și lectura celor doi frați cu lectura dicționarului din Indescriptibil, apoi stabilim tema principală a textului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi fiecare alege, din lista de la p. 23, ce așteaptă de la o carte bună și își explică alegerea.',
          },
        ],
        evaluare: 'Jurnalul cu dublă intrare; fișa lecției; observarea sistematică. Temă de portofoliu: pagina de jurnal despre prima carte citită singur.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-9/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Valori etice în legendele popoarelor. Legenda păianjenului și a albinei',
      obiective: [
        'Identifică valorile etice transmise de Legenda păianjenului și a albinei și recunoaște trăsăturile legendei ca specie.',
      ],
      sursaManual: 'Manual, Lecția 10, pp. 24-25 (Legenda păianjenului și a albinei)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Valori etice în legendele popoarelor. Legenda păianjenului și a albinei',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Identifică valorile etice transmise de Legenda păianjenului și a albinei și recunoaște trăsăturile legendei ca specie.',
        ],
        resurse: [
          'Manual Art 6, pp. 24-25',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-10/fisa.pdf)',
          'O foaie pentru acoperirea paragrafelor la lectura predictivă',
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
            activitate: 'Le cer elevilor să noteze cu ce asociază albina și păianjenul, apoi comparăm asocierile.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim o legendă despre originea păianjenului și a albinei și căutăm valorile pe care le transmite.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Ne amintim de păianjenul Adinei Popescu, singur și fără familie, și le cer un simbol care ar sugera ideea de familie.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citim legenda paragraf cu paragraf, cu restul textului acoperit, iar elevii fac predicții și le verifică. Notăm valorile fetei, ale băiatului și ale mamei, apoi fixăm Reperele de la p. 25: legenda, cele mitologice sau deceuri și cele istorice. Extindem cu Arahne, tradiția islamică și Femeia Păianjen a tribului Hopi.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi, în grupe de 2-3, aleg semnificația legendei dintre cele trei variante de la p. 24 și o argumentează.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Temă de portofoliu: povestea unui păianjen, de la Provocări.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-10/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Contextul de comunicare (I)',
      obiective: [
        'Analizează contextul de comunicare dintr-un dialog: identitatea interlocutorilor, relația dintre ei, locul și scopul comunicării.',
      ],
      sursaManual: 'Manual, Lecția 11, pp. 26-27, partea 1/2 (Contextul de comunicare, analiza dialogului Maria-mama)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Contextul de comunicare (I)',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Analizează contextul de comunicare dintr-un dialog: identitatea interlocutorilor, relația dintre ei, locul și scopul comunicării.',
        ],
        resurse: [
          'Manual Art 6, pp. 26-27',
          'Quizul „Contextul de comunicare” (materialul de joc al lecției)',
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
            activitate: 'Le cer elevilor un exemplu de situație în care se simt în largul lor când comunică și una în care le e greu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm ce e contextul de comunicare și de ce contează pentru a ne înțelege.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Discutăm în care dintre situațiile de la p. 26 se poate realiza o comunicare bună și de ce.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Analizăm dialogul dintre Maria și mama ei de la p. 26: cine sunt, ce relație au, unde vorbesc, ce vrea Maria, ce exprimă ultima replică a mamei, de ce „Fugiți!” și de ce „URIAȘ” e scris cu majuscule. Ne imaginăm cum ar anunța Maria descoperirea la ora de română, apoi fixăm componentele contextului de comunicare din Repere, p. 27.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă quizul „Contextul de comunicare”, apoi discutăm răspunsurile greșite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Contextul de comunicare',
          pasi: [
            {
              intrebare: 'În dialogul dintre Maria și mama ei, despre păianjenul din cameră, care este relația dintre cei doi interlocutori?',
              variante: [
                { text: 'Relație de familie, mamă și fiică', corect: true, explicatie: 'Contextul de comunicare include identitatea și relația dintre interlocutori, aici o relație de familie.' },
                { text: 'Relație de prietenie, între colegi', corect: false, explicatie: 'Cele două personaje sunt mamă și fiică, nu colege.' },
                { text: 'Relație profesională, elev și profesor', corect: false, explicatie: 'Dialogul se poartă acasă, nu la școală.' },
              ],
              indiciu: 'Recitește prima replică: „Fugiți! Un păianjen URIAȘ în camera mea!”',
              sursa: 'Manual, Lecția 11, p. 26',
            },
            {
              intrebare: 'De ce apelează Maria la mama ei în acest dialog?',
              variante: [
                { text: 'Îi solicită ajutorul, ca să scape de păianjen', corect: true, explicatie: 'Maria cere insistent ajutorul mamei: „Caută-l!”' },
                { text: 'Vrea s-o convingă că în cameră e ordine', corect: false, explicatie: 'Dimpotrivă, mama e cea care observă dezordinea.' },
                { text: 'Îi reproșează ceva mamei', corect: false, explicatie: 'Maria cere ajutor, nu face un reproș.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 11, p. 26',
            },
            {
              intrebare: 'De ce crezi că autoarea a scris cu majusculă cuvântul URIAȘ, în prima replică a Mariei?',
              variante: [
                { text: 'Ca să arate spaima și exagerarea Mariei', corect: true, explicatie: 'Majuscula are aici rol expresiv, marchează intensitatea emoției, nu o regulă gramaticală obișnuită.' },
                { text: 'Pentru că toate adjectivele se scriu cu majusculă', corect: false, explicatie: 'Adjectivele nu se scriu cu majusculă în mod normal.' },
                { text: 'Din greșeală de tipar', corect: false, explicatie: 'E o alegere stilistică deliberată a autoarei.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 11, p. 26',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Contextul de comunicare (II), joc de rol',
      obiective: [
        'Construiește, prin joc de rol, un dialog adecvat unui context de comunicare dat.',
      ],
      sursaManual: 'Manual, Lecția 11, pp. 26-27, partea 2/2 (Contextul de comunicare, joc de rol pe perechi)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Contextul de comunicare (II), joc de rol',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Construiește, prin joc de rol, un dialog adecvat unui context de comunicare dat.',
        ],
        resurse: [
          'Manual Art 6, p. 27, jocul de rol și grila de evaluare',
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
            activitate: 'Îi întreb pe elevi cine are un animal de companie și cum i-a convins pe părinți să-l primească.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare pereche va juca un dialog adaptat unui context dat și că ceilalți îl vor evalua.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim componentele contextului de comunicare de ora trecută: cine vorbește, cu cine, unde, când, cu ce intenție.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '10 min',
            activitate: 'Formez cele patru perechi și le dau scenariile de la p. 27, copil și părinte, frate și soră, nepot și bunicul care aude greu, copil și vecin. Explic grila cu cele trei criterii, apoi perechile își pregătesc dialogul.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '25 min',
            activitate: 'Perechile își joacă dialogul, iar colegii acordă calificative pe grilă, cu exemple concrete. La final, fiecare spune ce i s-a părut cel mai dificil: adaptarea la interlocutor, bruiajele sau înțelegerea intențiilor celuilalt.',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 27; observarea sistematică a elevilor.',
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
      id: 'lectia-13',
      titlu: 'Cuvântul. Sinonimele și antonimele',
      obiective: [
        'Reactualizează și aprofundează identificarea și folosirea adecvată a sinonimelor și a antonimelor.',
      ],
      sursaManual: 'Manual, Lecția 12, pp. 28-29',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Cuvântul. Sinonimele și antonimele',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Reactualizează și aprofundează identificarea și folosirea adecvată a sinonimelor și a antonimelor.',
        ],
        resurse: [
          'Manual Art 6, pp. 28-29',
          'Schema „Cuvântul. Sinonimele și antonimele” (/materiale/clasa-6/unitatea-1/lectia-13/schema.svg)',
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
            activitate: 'În perechi, elevii alcătuiesc în două minute cât mai multe cuvinte din literele prinse în pânza de păianjen de la p. 28.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că vorbim despre forma și sensul cuvintelor și aprofundăm sinonimele și antonimele.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Pentru trei dintre cuvintele găsite spunem forma și sensul, apoi găsim antonime pentru însorit și tânăr.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic cuvântul ca sens și formă și rolul contextului, cu exemplul ban. Arătăm că sinonimia și antonimia leagă două cuvinte, o expresie și un cuvânt sau două expresii, și lucrăm exercițiile de la p. 29: intrusul din seriile de sinonime, perechea fără antonime, sinonime pentru a spăla putina sau a umbla cu cioara vopsită.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii găsesc sinonimul potrivit în context pentru adjectivul mare în cele șase enunțuri, apoi, pe grupe, completează tabelul cu bucurie, cunoscut, a pleca și scriu câte un enunț.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea aplicațiilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-13/schema.svg', titlu: 'Cuvântul. Sinonimele și antonimele' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Sensurile cuvintelor',
      obiective: [
        'Diferențiază sensul propriu de bază, sensul propriu secundar și sensul figurat al unui cuvânt.',
      ],
      sursaManual: 'Manual, Lecția 13, pp. 30-31',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Sensurile cuvintelor',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Diferențiază sensul propriu de bază, sensul propriu secundar și sensul figurat al unui cuvânt.',
        ],
        resurse: [
          'Manual Art 6, pp. 30-31',
          'Schema „Sensurile cuvintelor” (/materiale/clasa-6/unitatea-1/lectia-14/schema.svg)',
          'DEX sau dexonline.ro',
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
            activitate: 'Citim cele trei enunțuri cu păianjen de la p. 30, păianjenul porții, păianjenul din bibliotecă, păianjenii de emoții, și îi întreb unde cuvântul numește ceva concret.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să deosebim sensul propriu de bază, sensul propriu secundar și sensul figurat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim, de ora trecută, că sensul unui cuvânt se stabilește în context.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic cele trei sensuri, cu exemplele din Repere: și-a scrântit piciorul, piciorul paharului, părinții sunt picioarele de sprijin ale copiilor. Asociem sensurile lui inimă, apoi citim articolul DEX pentru aripă și stabilim sensul din fiecare enunț.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'În perechi, elevii precizează sensul propriu sau figurat al cuvintelor din exercițiul 4 de la p. 31, apoi scriu enunțuri cu a crește și a înflori, o dată cu sens propriu, o dată cu sens figurat.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea enunțurilor construite.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-14/schema.svg', titlu: 'Sensurile cuvintelor' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Omonimele. Cuvintele polisemantice',
      obiective: [
        'Diferențiază omonimele de cuvintele polisemantice și recunoaște exemple din fiecare categorie.',
      ],
      sursaManual: 'Manual, Lecția 14, pp. 32-33',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Omonimele. Cuvintele polisemantice',
        data: null,
        tipOra: 'Predare, vocabular',
        durata: 50,
        obiective: [
          'Diferențiază omonimele de cuvintele polisemantice și recunoaște exemple din fiecare categorie.',
        ],
        resurse: [
          'Manual Art 6, pp. 32-33',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-15/fisa.pdf)',
          'DEX sau dexonline.ro',
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
            activitate: 'Le cer elevilor să descrie cele două imagini de la p. 32 folosind de fiecare dată substantivul ramă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să deosebim omonimele de cuvintele cu mai multe sensuri legate între ele.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim sensurile unui cuvânt din ora trecută și cum citim un articol de dicționar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Comparăm articolele DEX pentru ramă1 și ramă2 și definim omonimele. Explic tipurile din Repere, lexicale totale (lac) și parțiale (bandă), lexico-gramaticale (sare), apoi omofonele și omografele, cu véselă și vesélă, care nu sunt omonime. Trecem la masă, cuvânt polisemantic, și stabilim diferența: sensurile lui sunt legate, ale omonimelor nu.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi formulează enunțuri cu două omonime ale substantivului masă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-15/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Diftongul, triftongul, hiatul',
      obiective: [
        'Identifică diftongul, triftongul și vocalele în hiat într-un cuvânt dat.',
      ],
      sursaManual: 'Manual, Lecția 15, pp. 34-35',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Diftongul, triftongul, hiatul',
        data: null,
        tipOra: 'Predare, fonetică',
        durata: 50,
        obiective: [
          'Identifică diftongul, triftongul și vocalele în hiat într-un cuvânt dat.',
        ],
        resurse: [
          'Manual Art 6, pp. 34-35',
          'Schema „Diftongul, triftongul, hiatul” (/materiale/clasa-6/unitatea-1/lectia-16/schema.svg)',
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
            activitate: 'Citim cu voce tare replicile din ilustrația de la p. 34, cu păianjen, leoaică, tigroaică, te-ai, și îi rog pe elevi să asculte grupurile de sunete.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să recunoaștem diftongul, triftongul și vocalele în hiat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim vocalele, consoanele și semivocalele din recapitularea inițială.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic diftongul ascendent (floa-re) și descendent (mâi-ne), triftongul (cre-ioa-ne), hiatul (ca-i-să). Insist pe capcanele din Repere: ce, ci, ge, gi înaintea unei vocale nu formează de obicei diftong (ceas, gheață), iar e din este și el se pronunță cu diftong, eu și ei cu triftong.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă exercițiile de la p. 35: despart în silabe și încercuiesc diftongii, identifică vocalele în hiat și completează tabelul cu cuvinte cu diftong, triftong și hiat.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea tabelului completat.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-6/unitatea-1/lectia-16/schema.svg', titlu: 'Diftongul, triftongul, hiatul' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Despărțirea în silabe',
      obiective: [
        'Desparte în silabe cuvinte care conțin grupuri consonantice, diftongi și triftongi, conform regulilor învățate.',
      ],
      sursaManual: 'Manual, Lecția 16, pp. 36-37',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Despărțirea în silabe',
        data: null,
        tipOra: 'Predare, fonetică',
        durata: 50,
        obiective: [
          'Desparte în silabe cuvinte care conțin grupuri consonantice, diftongi și triftongi, conform regulilor învățate.',
        ],
        resurse: [
          'Manual Art 6, pp. 36-37',
          'Quizul „Despărțirea în silabe” (materialul de joc al lecției)',
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
            activitate: 'Cântăm sau ascultăm primele versuri din Un elefant se legăna și urmărim în partitura de la p. 36 cum sunt despărțite cuvintele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm regulile de despărțire în silabe și excepțiile lor.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim diftongul, triftongul și hiatul, fiindcă despărțirea în silabe pornește de la vocale.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Descoperim regulile din Repere, pe rând: o consoană între vocale (le-gă-na), două consoane (pân-ză) și excepția cu l sau r (ca-blu, co-dru), trei consoane (pen-tru) și excepțiile (sculp-tor, punc-te), două vocale alăturate (a-vi-on, ma-iou). Închei cu liniuța de despărțire, care nu se confundă cu cratima.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă quizul „Despărțirea în silabe”, apoi completează autoevaluarea pentru lecțiile 12-16.',
          },
        ],
        evaluare: 'Rezultatele la quiz; autoevaluarea achizițiilor din lecțiile 12-16.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Despărțirea în silabe',
          pasi: [
            {
              intrebare: 'În câte silabe se desparte cuvântul elefant?',
              variante: [
                { text: '3 silabe: e-le-fant', corect: true, explicatie: 'O consoană între două vocale trece la silaba următoare, de aceea „l” trece la „le”.' },
                { text: '4 silabe: e-l-e-fant', corect: false, explicatie: 'Consoana „l” nu poate forma singură o silabă, trebuie să însoțească o vocală.' },
                { text: '2 silabe: ele-fant', corect: false, explicatie: 'Silaba „ele” ar conține două vocale separate, ceea ce nu e corect.' },
              ],
              indiciu: 'O silabă conține, de obicei, o singură vocală.',
              sursa: 'Manual, Lecția 16, p. 36',
            },
            {
              intrebare: 'Cuvântul pânză se desparte pân-ză. Câte consoane sunt între cele două vocale, â și ă?',
              variante: [
                { text: 'Două: n și z', corect: true, explicatie: 'Când sunt două consoane între vocale, prima rămâne la silaba dinainte, a doua trece la silaba următoare.' },
                { text: 'O singură consoană, n', corect: false, explicatie: 'Sunt de fapt două consoane, n și z, între cele două vocale.' },
                { text: 'Trei consoane', corect: false, explicatie: 'Doar n și z se află între vocalele â și ă.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 16, p. 36',
            },
            {
              intrebare: 'Cuvântul rupea conține diftongul ea. Ce se întâmplă cu o consoană aflată înaintea unui diftong, la despărțirea în silabe?',
              variante: [
                { text: 'Trece la silaba următoare, ca în ru-pea', corect: true, explicatie: 'Dacă înaintea unei consoane se află un diftong sau un triftong, consoana trece la silaba următoare.' },
                { text: 'Rămâne la silaba dinainte', corect: false, explicatie: 'Regula pentru consoana dinaintea unui diftong e alta: trece la silaba următoare.' },
                { text: 'Se desparte de diftong', corect: false, explicatie: 'Diftongul nu se desparte niciodată în silabe diferite.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 16, p. 37',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Trăsăturile stilului. Jurnalul ca specie',
      obiective: [
        'Identifică trăsăturile stilului (proprietate, puritate, originalitate, adecvare situațională) într-un text-suport, Jurnalul Annei Frank.',
      ],
      sursaManual: 'Manual, Lecția 17, pp. 38-39, partea 1/2 (Redactarea unei narațiuni la persoana I. Stilul — text-suport, Jurnalul Annei Frank)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Trăsăturile stilului. Jurnalul ca specie',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Identifică trăsăturile stilului (proprietate, puritate, originalitate, adecvare situațională) într-un text-suport, Jurnalul Annei Frank.',
        ],
        resurse: [
          'Manual Art 6, pp. 38-39',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-18/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi dacă au citit sau au ținut vreodată un jurnal și la ce le-ar folosi.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim o pagină dintr-un jurnal celebru și învățăm ce face un stil bun.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim narațiunea la persoana I și naratorul-personaj din Lecția 3.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Prezint contextul, Amsterdam, 1942, o familie ascunsă doi ani, și citim însemnarea din 8 iulie 1942 de la p. 38. Marcăm elementele narațiunii, timpul, locul, orele, succesiunea, participanții, și ale jurnalului, data și adresarea către Kitty. Fixăm Reperele de la p. 39: proprietatea termenilor, puritatea, originalitatea, adecvarea situațională.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi analizează stilul Annei Frank după cele trei criterii de la Aplicații.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-18/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Redactarea unei pagini de jurnal',
      obiective: [
        'Redactează o pagină de jurnal la persoana I, cu respectarea trăsăturilor stilului învățate.',
      ],
      sursaManual: 'Manual, Lecția 17, pp. 38-39, partea 2/2 (Redactarea unei narațiuni la persoana I. Stilul — redactare și interevaluare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Redactarea unei pagini de jurnal',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o pagină de jurnal la persoana I, cu respectarea trăsăturilor stilului învățate.',
        ],
        resurse: [
          'Manual Art 6, p. 39, grila de interevaluare',
          'Fișa lecției (/materiale/clasa-6/unitatea-1/lectia-19/fisa.pdf)',
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
            activitate: 'Fiecare elev face o listă cu evenimente importante din familie, aniversări, un frate nou, o nuntă, și alege unul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare scrie azi o pagină de jurnal despre evenimentul ales și că o evaluăm în perechi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim trăsăturile stilului, cu exemple din jurnalul Annei Frank, și elementele unei pagini de jurnal.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '7 min',
            activitate: 'Cu sprijinul fișei lecției, elevii își fac planul: data, adresarea, ordinea întâmplărilor, emoțiile pe care vor să le transmită.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '28 min',
            activitate: 'Elevii redactează pagina de jurnal, apoi schimbă caietele cu un coleg și se evaluează pe grila de la p. 39.',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 39; observarea sistematică a elevilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-6/unitatea-1/lectia-19/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea I: narațiune, personaje, tipuri de text.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 40-41, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea I: narațiune, personaje, tipuri de text.',
        ],
        resurse: [
          'Manual Art 6, pp. 40-41',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
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
            timp: '4 min',
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură învățată în unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm lectura și comunicarea orală din Unitatea I, pe un text nou.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm autorul, naratorul și personajul, timpul și spațiul, descrierea, textele continue și discontinue, legenda și contextul de comunicare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Citim fragmentul din Catherine cea îndărătnică de Karen Cushman de la p. 40 și rezolvăm ghidat cerințele de lectură de la p. 41: secolul și anul, locul, autoarea și naratoarea, persoana, arborele genealogic al familiei, ce așteaptă fiecare de la Catherine.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, lectură și comunicare”, apoi discutăm răspunsurile greșite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce diferență există între autor și narator, într-un text narativ?',
              variante: [
                { text: 'Autorul aparține lumii reale, naratorul aparține ficțiunii', corect: true, explicatie: 'Autorul construiește textul din lumea reală; naratorul e vocea care relatează povestea, în interiorul ficțiunii.' },
                { text: 'Sunt mereu aceeași persoană', corect: false, explicatie: 'Autorul și naratorul nu se confundă niciodată, chiar dacă naratorul povestește la persoana I.' },
                { text: 'Naratorul scrie cartea, autorul o citește', corect: false, explicatie: 'E invers: autorul scrie, cititorul citește, iar naratorul relatează în interiorul textului.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 3, pp. 14-15',
            },
            {
              intrebare: 'Un text organizat în liste, tabele sau grafice, fără legătură gramaticală directă între secvențe, este un text...',
              variante: [
                { text: 'discontinuu', corect: true, explicatie: 'Textele discontinue prezintă informația în secvențe separate: liste, tabele, grafice, scheme.' },
                { text: 'continuu', corect: false, explicatie: 'Textele continue sunt organizate în propoziții și paragrafe, curgătoare.' },
                { text: 'narativ', corect: false, explicatie: 'Narativ se referă la tipul de conținut, nu la modul de organizare grafică a textului.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 8, p. 21',
            },
            {
              intrebare: 'În textul Un păianjen care se crede Spiderman, la ce persoană este relatată acțiunea?',
              variante: [
                { text: 'Persoana I, naratorul e chiar păianjenul', corect: true, explicatie: 'Naratorul-personaj e păianjenul, care relatează întâmplările din perspectiva lui.' },
                { text: 'Persoana a III-a', corect: false, explicatie: 'Textul e relatat la persoana I, de către păianjen.' },
                { text: 'Persoana a II-a', corect: false, explicatie: 'Persoana a II-a nu se folosește pentru relatarea unei narațiuni.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 1, p. 10',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de vocabular și de fonetică din Unitatea I: sinonime, antonime, sensurile cuvintelor, omonime, diftong, triftong, silabă.',
      ],
      sursaManual: 'Manual, Recapitulare, pp. 40-41, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de vocabular și de fonetică din Unitatea I: sinonime, antonime, sensurile cuvintelor, omonime, diftong, triftong, silabă.',
        ],
        resurse: [
          'Manual Art 6, pp. 40-41',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
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
            timp: '4 min',
            activitate: 'Scriu pe tablă cuvântul familie și le cer elevilor să-l despartă în silabe și să spună ce observă la ultimele două vocale.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm vocabularul, fonetica și redactarea din Unitatea I.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm sinonimele și antonimele, sensurile cuvintelor, omonimele și cuvintele polisemantice, diftongul, triftongul, hiatul, regulile de despărțire și trăsăturile stilului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat cerințele de limbă de la p. 41, pe fragmentul din Catherine cea îndărătnică: sensul lui pergament, sinonime pentru izbăvit, îndărătnică, a unelti, omonimele lui tors, alt sens pentru ceas, diftongi, triftongi, hiaturi, despărțirea în silabe.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi discutăm greșelile. Ca temă, scriu pagina de jurnal din vremea lui Catherine, cerința 21.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Care este antonimul cuvântului harnic?',
              variante: [
                { text: 'leneș', corect: true, explicatie: 'Antonimele sunt cuvinte cu formă diferită și sens opus.' },
                { text: 'silitor', corect: false, explicatie: 'Silitor e mai degrabă sinonim, nu antonim, cu harnic.' },
                { text: 'priceput', corect: false, explicatie: 'Priceput nu e opus lui harnic ca sens.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 12, pp. 28-29',
            },
            {
              intrebare: 'Cuvântul ramă poate denumi și o ramă de tablou, și un pește de apă dulce. Ce fel de cuvinte sunt acestea?',
              variante: [
                { text: 'omonime', corect: true, explicatie: 'Omonimele au aceeași formă, dar sensuri complet diferite, fără nicio legătură între ele.' },
                { text: 'sinonime', corect: false, explicatie: 'Sinonimele au formă diferită și sens asemănător, nu e cazul aici.' },
                { text: 'cuvinte polisemantice', corect: false, explicatie: 'La cuvintele polisemantice, sensurile au o legătură între ele; la omonime, nu.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 14, pp. 32-33',
            },
            {
              intrebare: 'În cuvântul uriaș (u-ri-aș), sunetele i și a se află în hiat. Ce înseamnă asta?',
              variante: [
                { text: 'Sunt două vocale alăturate, dar fiecare rămâne în silaba ei', corect: true, explicatie: 'Hiatul apare când două vocale alăturate nu formează diftong, ci rămân în silabe diferite.' },
                { text: 'Formează împreună un diftong', corect: false, explicatie: 'Dacă ar forma diftong, ar fi în aceeași silabă, nu despărțite.' },
                { text: 'Una dintre ele nu se pronunță', corect: false, explicatie: 'Ambele vocale se pronunță, doar că în silabe diferite.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 15, pp. 34-35',
            },
            {
              intrebare: 'Când o singură consoană se află între două vocale, la despărțirea în silabe, consoana...',
              variante: [
                { text: 'trece la silaba următoare', corect: true, explicatie: 'Regula de bază: o consoană între două vocale trece la silaba următoare, ca în le-gă-na.' },
                { text: 'rămâne la silaba dinainte', corect: false, explicatie: 'Regula spune contrariul: consoana trece la silaba următoare.' },
                { text: 'se dublează', corect: false, explicatie: 'Consoana nu se dublează, doar se atașează silabei următoare.' },
              ],
              indiciu: null,
              sursa: 'Manual, Lecția 16, p. 36',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea I.',
      ],
      sursaManual: 'Manual, Evaluare, p. 42',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea I.',
        ],
        resurse: [
          'Testul, Manual Art 6, p. 42',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '2 min',
            activitate: 'Le spun elevilor că e prima probă scrisă a anului și îi liniștesc în privința timpului de lucru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se dă proba scrisă a Unității I, cu o parte de lectură și vocabular și o parte de redactare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc structura probei, 60 de puncte la partea A, 30 la pagina de jurnal, 10 din oficiu, și cum își împart timpul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Elevii rezolvă individual proba pe o foaie separată; supraveghez discret, gestionez timpul și strâng lucrările la final.',
          },
        ],
        evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
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
