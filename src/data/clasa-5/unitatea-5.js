// Unitatea V: Călătoresc prin basme — clasa a V-a
// Sursă: manual Art Klett (cuprins pp. 6, 8-9, numerotare proprie L1-L11),
// proiectarea pe unități 2022-2023, planificarea calendaristică. Aceeași
// convenție ca la Unitățile I-IV: o lecție de site per lecție de manual, cu
// excepția redactării și a recapitulării (2 ore fiecare, despărțite).
//
// Contradicția semnalată anterior între proiectare („Aladin și lampa
// fermecată”) și planificarea calendaristică („fragment din 1001 de nopți,
// povestite de Eusebiu Camilar”) a fost verificată direct în manual (Art
// 5.pdf, pp. 149-150): nu e o contradicție reală. Manualul nu dă fragmentului
// un titlu separat, îl introduce ca parte din Lecția 5, „Noi pagini, alte
// idei”: colecția e O mie și una de nopți, fragmentul e „istorisit de
// Eusebiu Camilar”, iar episodul povestit este chiar cel cu Aladin și lampa.
// Ambele surse aveau parțial dreptate; sursaManual de mai jos reflectă acum
// formularea exactă din manual.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx. Planurile ERR mai
// vechi din notite-profesor/ rămân neatinse, sunt altă formă.
//
// Materiale: schema pentru lecțiile 10 (Numeralul cardinal) și 11 (Numeralul
// ordinal). Joc pentru 9 (Acte de limbaj: a promite, a declara), 15 și 16
// (recapitulare). Restul rămân null, listate în materiale-restante.md.

export const unitatea5 = {
  id: 'unitatea-5',
  titlu: 'Unitatea V: Călătoresc prin basme',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ literar. Zâna Munților, basm cules de Petre Ispirescu',
      obiective: [
        'Identifică informații esențiale din basmul Zâna Munților, cules de Petre Ispirescu.',
      ],
      sursaManual: 'Art 5, Lecția 1, pp. 140-143 (Zâna Munților, basm cules de Petre Ispirescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Zâna Munților, basm cules de Petre Ispirescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din basmul Zâna Munților, cules de Petre Ispirescu.',
        ],
        resurse: [
          'Manual Art 5, pp. 140-143',
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
            timp: '7 min',
            activitate: 'Îi întreb pe elevi ce basme au citit sau au auzit în copilărie și ce le plăcea la ele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim basmul Zâna Munților, cules de Petre Ispirescu, și desprindem informațiile esențiale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintesc, de la legenda din Unitatea IV, ce înseamnă fir al acțiunii și informație esențială.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc basmul cu voce tare împreună cu elevii, clarific cuvintele vechi și populare și urmărim firul întâmplărilor, cu exemplele de la pp. 140-143.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează în caiet cine, unde, când și ce se întâmplă în basm și citește răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea informațiilor esențiale notate.',
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
      titlu: 'Acțiunea. Timpul și spațiul',
      obiective: [
        'Înțelege noțiunea de miraculos în basme și identifică reperele de timp și de spațiu din textul-suport.',
      ],
      sursaManual: 'Art 5, Lecția 2, pp. 144-145',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Acțiunea. Timpul și spațiul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Înțelege noțiunea de miraculos în basme și identifică reperele de timp și de spațiu din textul-suport.',
        ],
        resurse: [
          'Manual Art 5, pp. 144-145',
          'Schema „Acțiunea. Timpul și spațiul” (/materiale/clasa-5/unitatea-5/lectia-2/schema.svg)',
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
            activitate: 'Îi întreb pe elevi ce lucruri se întâmplă în basm care nu s-ar putea întâmpla în realitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi înțelegem ce este miraculosul din basme și identificăm reperele de timp și de spațiu ale acțiunii.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm reperele temporale și spațiale și momentele acțiunii, lucrate în Unitățile II și IV.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției definim miraculosul, identificăm timpul nedeterminat și spațiul fabulos și momentele acțiunii, cu exemplele de la pp. 144-145.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează trei elemente de miraculos din basm și completează o axă a timpului cu momentele acțiunii.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului despre miraculos și a axei timpului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-2/schema.svg', titlu: 'Acțiunea. Timpul și spațiul' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Personajele',
      obiective: [
        'Identifică personajele și rolul lor în basm și le compară cu alte personaje din basme cunoscute (Făt-Frumos, Cenușăreasa).',
      ],
      sursaManual: 'Art 5, Lecția 3, pp. 146-147',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Personajele',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Identifică personajele și rolul lor în basm și le compară cu alte personaje din basme cunoscute (Făt-Frumos, Cenușăreasa).',
        ],
        resurse: [
          'Manual Art 5, pp. 146-147',
          'Schema „Personajele, în basm” (/materiale/clasa-5/unitatea-5/lectia-3/schema.svg)',
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
            activitate: 'Le cer elevilor să numească un erou și un răufăcător din basmele pe care le știu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi identificăm personajele basmului și rolul fiecăruia și le comparăm cu personaje din basme cunoscute.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm caracterizarea personajului și modelul eroic, din Unitatea IV.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției stabilim rolurile din basm, eroul, ajutoarele, adversarul, donatorul, și le comparăm cu Făt-Frumos și Cenușăreasa, cu exemplele de la pp. 146-147.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează un tabel cu personajele din Zâna Munților, rolul fiecăruia și un personaj asemănător din alt basm.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea tabelului de personaje.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-3/schema.svg', titlu: 'Personajele, în basm' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează o opinie despre semnificația basmului Zâna Munților și despre atitudinile personajelor.',
      ],
      sursaManual: 'Art 5, Lecția 4, p. 148',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie despre semnificația basmului Zâna Munților și despre atitudinile personajelor.',
        ],
        resurse: [
          'Manual Art 5, p. 148',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-4/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce răsplată primește personajul bun și ce pățește cel rău și dacă li se pare drept.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm ce ne învață basmul și ce părere avem despre atitudinile personajelor.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm rolurile personajelor stabilite ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției ghidez discuția despre semnificația basmului, răsplata binelui și pedeapsa răului, cerând argumente din text, cu exemplele de la p. 148.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev scrie o opinie de trei sau patru rânduri despre mesajul basmului, sprijinită pe o faptă a unui personaj.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea opiniei scrise și a argumentului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-4/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Text auxiliar. Aladin și lampa fermecată, din O mie și una de nopți',
      obiective: [
        'Formulează un răspuns personal despre valorile culturale ale basmelor de pretutindeni, pe baza episodului lui Aladin din O mie și una de nopți.',
      ],
      sursaManual: 'Art 5, Lecția 5, „Noi pagini, alte idei”, pp. 149-150 (fragment din O mie și una de nopți, istorisit de Eusebiu Camilar — episodul lui Aladin și al lămpii fermecate)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Aladin și lampa fermecată, din O mie și una de nopți',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Formulează un răspuns personal despre valorile culturale ale basmelor de pretutindeni, pe baza episodului lui Aladin din O mie și una de nopți.',
        ],
        resurse: [
          'Manual Art 5, pp. 149-150',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-5/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce știu despre Aladin din filme sau desene și ce și-ar dori dacă ar avea trei dorințe.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim episodul lui Aladin din O mie și una de nopți și ne formulăm un răspuns personal despre ce prețuiesc basmele din culturi diferite.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile basmului stabilite până acum: miraculos, roluri, răsplata binelui.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citim fragmentul, clarific termenii și numele, apoi comparăm cu Zâna Munților ce valori transmit ambele basme, cu ajutorul fișei lecției și al exemplelor de la pp. 149-150.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev scrie un răspuns personal de câteva rânduri despre o valoare comună basmelor de pretutindeni.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea răspunsului personal.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-5/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Diversitate culturală și lingvistică',
      obiective: [
        'Identifică similitudini între culturi diferite și etimologia unor cuvinte, pe baza unor basme din culturi variate.',
      ],
      sursaManual: 'Art 5, Lecția 6, pp. 151-152',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Diversitate culturală și lingvistică',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Identifică similitudini între culturi diferite și etimologia unor cuvinte, pe baza unor basme din culturi variate.',
        ],
        resurse: [
          'Manual Art 5, pp. 151-152',
          'Infograficul „Diversitate culturală și lingvistică” (/materiale/clasa-5/unitatea-5/lectia-6/infografic.svg)',
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
            activitate: 'Le dau exemple de cuvinte românești venite din alte limbi, „basm”, „zână”, și îi întreb pe elevi dacă bănuiau că nu sunt toate „de-ale noastre” dintotdeauna.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi căutăm ce au în comun basmele din culturi diferite și de unde vin unele cuvinte.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm similitudinile între culturi discutate la sărbătorile de iarnă și la modelele eroice, din Unitățile III și IV.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul infograficului comparăm motive de basm din culturi variate și urmărim etimologia câtorva cuvinte, cu exemplele de la pp. 151-152.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev notează două motive de basm întâlnite în culturi diferite și originea a două cuvinte discutate.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea notării despre motive și etimologie.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-5/unitatea-5/lectia-6/infografic.svg', titlu: 'Diversitate culturală și lingvistică' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Proiect de grup. Itinerar multicultural (anunțare)',
      obiective: [
        'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Itinerar multicultural.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 153 (anunțare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect de grup. Itinerar multicultural (anunțare)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Itinerar multicultural.',
        ],
        resurse: [
          'Manual Art 5, p. 153',
          'Fișa proiectului (/materiale/clasa-5/unitatea-5/lectia-7/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce țară le-ar plăcea să viziteze și ce ar vrea să afle despre basmele de acolo.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț tema proiectului de grup Itinerar multicultural și faptul că azi înțelegem ce are de făcut fiecare grupă, până când și cum se notează.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reluăm ce am învățat la proiectul de grup din Unitatea III despre roluri, calendar și criterii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Prezint pas cu pas fișa proiectului: produsele cerute, împărțirea pe grupe și roluri, calendarul și criteriile de evaluare, cu exemplele de la p. 153.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Grupele se formează, își aleg țara sau cultura și rolurile și notează în fișă primii doi pași și cine răspunde de fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a organizării grupelor; verificarea fișei de pornire a proiectului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-7/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Elemente paraverbale și nonverbale în prezentarea orală',
      obiective: [
        'Identifică elementele paraverbale și nonverbale dintr-o comunicare orală și le exersează într-o prezentare.',
      ],
      sursaManual: 'Art 5, Lecția 7, pp. 155-156',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Elemente paraverbale și nonverbale în prezentarea orală',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică elementele paraverbale și nonverbale dintr-o comunicare orală și le exersează într-o prezentare.',
        ],
        resurse: [
          'Manual Art 5, pp. 155-156',
          'Quizul „Elemente paraverbale și nonverbale” (materialul de joc al lecției)',
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
            activitate: 'Spun aceeași propoziție în două feluri, plictisit și entuziast, și îi întreb pe elevi ce s-a schimbat, deși cuvintele au fost la fel.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem elementele paraverbale și nonverbale ale unei prezentări și le exersăm.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm comunicarea verbală, nonverbală și paraverbală, din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu exemplele de la pp. 155-156 separăm elementele paraverbale, intonație, ritm, volum, de cele nonverbale, gest, mimică, postură, contact vizual, și le observăm într-o scurtă prezentare model.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev prezintă în 30 de secunde un basm preferat, colegii notează un element paraverbal și unul nonverbal reușit, apoi elevii rezolvă quizul.',
          },
        ],
        evaluare: 'Observarea sistematică a prezentărilor scurte; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Elemente paraverbale și nonverbale',
          pasi: [
            {
              intrebare: 'Ce sunt elementele nonverbale, într-o prezentare orală?',
              variante: [
                { text: 'Gesturile, mimica, postura corpului', corect: true, explicatie: 'Nonverbalul se transmite fără cuvinte, prin corp.' },
                { text: 'Intonația și ritmul vorbirii', corect: false, explicatie: 'Acestea sunt elemente paraverbale, nu nonverbale.' },
                { text: 'Cuvintele alese pentru prezentare', corect: false, explicatie: 'Alegerea cuvintelor ține de comunicarea verbală.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 155',
            },
            {
              intrebare: 'Ce sunt elementele paraverbale?',
              variante: [
                { text: 'Intonația, ritmul, intensitatea vocii', corect: true, explicatie: 'Paraverbalul ține de cum sună vocea, nu de gesturi sau cuvinte.' },
                { text: 'Gesturile mâinilor', corect: false, explicatie: 'Gesturile sunt elemente nonverbale.' },
                { text: 'Textul scris al prezentării', corect: false, explicatie: 'Textul scris ține de comunicarea verbală, nu de paraverbal.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 155',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Acte de limbaj: a promite, a declara',
      obiective: [
        'Identifică și performează actele de limbaj a promite și a declara.',
      ],
      sursaManual: 'Art 5, Lecția 8, p. 157',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Acte de limbaj: a promite, a declara',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică și performează actele de limbaj a promite și a declara.',
        ],
        resurse: [
          'Manual Art 5, p. 157',
          'Quizul „Acte de limbaj: a promite, a declara” (materialul de joc al lecției)',
          'Bilețele cu situații de comunicare',
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
            activitate: 'Le spun „Promit că...” și „Declar că...” și îi întreb pe elevi ce se schimbă între cele două începuturi.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem și exersăm actele de limbaj a promite și a declara.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm actele de limbaj a întreba, a solicita, a felicita, din Unitatea IV.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu exemplele de la p. 157 arăt când folosim o promisiune, cu angajament pentru viitor, și o declarație, care schimbă o stare prin simpla rostire, apoi elevii formulează, în perechi, enunțuri pentru situații date.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Câteva perechi joacă situația în fața clasei, apoi elevii rezolvă quizul „Acte de limbaj: a promite, a declara” și discutăm răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a jocurilor de rol; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Acte de limbaj: a promite, a declara',
          pasi: [
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Îți promit că voi termina proiectul la timp”?',
              variante: [
                { text: 'o promisiune', corect: true, explicatie: 'Verbul „promit” marchează explicit acest tip de act de limbaj.' },
                { text: 'o declarație', corect: false, explicatie: 'O declarație afirmă un fapt, nu se angajează pentru viitor.' },
                { text: 'o felicitare', corect: false, explicatie: 'Nu exprimi apreciere pentru nimic, ci un angajament.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 157',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Declar deschisă întrecerea”?',
              variante: [
                { text: 'o declarație', corect: true, explicatie: 'Verbul „declar” marchează explicit un act de declarare, care produce o schimbare de stare prin simpla rostire.' },
                { text: 'o promisiune', corect: false, explicatie: 'Nu te angajezi pentru viitor, ci afirmi o stare de fapt, chiar prin rostire.' },
                { text: 'o interzicere', corect: false, explicatie: 'Nu interzici nimic, dimpotrivă, deschizi o activitate.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 157',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Numeralul. Numeralul cardinal',
      obiective: [
        'Identifică numeralele cardinale și transcrie corect în litere numerele dintr-un text.',
      ],
      sursaManual: 'Art 5, Lecția 9, p. 158',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Numeralul. Numeralul cardinal',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică numeralele cardinale și transcrie corect în litere numerele dintr-un text.',
        ],
        resurse: [
          'Manual Art 5, p. 158',
          'Schema „Numeralul cardinal” (/materiale/clasa-5/unitatea-5/lectia-10/schema.svg)',
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
            activitate: 'Le amintesc formula „a fost odată ca niciodată” și numerele magice din basme, trei probe, șapte zmei, și le scriu pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm numeralul cardinal și scrierea corectă a numerelor în litere.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm ce este numeralul, noțiune întâlnită în ciclul primar, și diferența față de substantiv și adjectiv.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definim numeralul cardinal, discutăm scrierea numerelor compuse, „douăzeci și trei”, și cazurile în care „un”, „o” sunt numeral, cu exemplele de la p. 158.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev transcrie corect în litere cinci numere dintr-un text și subliniază numeralele cardinale.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea transcrierii numerelor în litere.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-10/schema.svg', titlu: 'Numeralul cardinal' },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Numeralul ordinal. Numeralul, aspecte normative',
      obiective: [
        'Identifică numeralele ordinale și respectă normele de ortografie și ortoepie ale numeralelor simple și compuse.',
      ],
      sursaManual: 'Art 5, Lecția 10, p. 160',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Numeralul ordinal. Numeralul, aspecte normative',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică numeralele ordinale și respectă normele de ortografie și ortoepie ale numeralelor simple și compuse.',
        ],
        resurse: [
          'Manual Art 5, p. 160',
          'Schema „Numeralul ordinal” (/materiale/clasa-5/unitatea-5/lectia-11/schema.svg)',
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
            activitate: 'Le cer elevilor să spună în ce ordine trec personajele prin probe: prima, a doua, a treia.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm numeralul ordinal și regulile de scriere și pronunție ale numeralelor.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm numeralul cardinal din lecția precedentă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției prezint numeralul ordinal, „al doilea”, „a doua”, și insist pe normele de scriere, „al paisprezecelea”, și pe pronunția corectă, cu exemplele de la p. 160.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev scrie corect, în litere, cinci numerale ordinale și corectează trei forme greșite dintr-o listă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului cu numerale ordinale.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-11/schema.svg', titlu: 'Numeralul ordinal' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Descrierea unei ființe imaginare (I), pregătire',
      obiective: [
        'Recunoaște ființe imaginare mitice și componentele unei descrieri dintr-un text-suport.',
      ],
      sursaManual: 'Art 5, Lecția 11, p. 162, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea unei ființe imaginare (I), pregătire',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Recunoaște ființe imaginare mitice și componentele unei descrieri dintr-un text-suport.',
        ],
        resurse: [
          'Manual Art 5, p. 162',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-12/fisa.pdf)',
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
            activitate: 'Le cer elevilor să numească ființe fantastice din basme și filme, zmeu, balaur, spiriduș, și o trăsătură a fiecăreia.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi pregătim descrierea unei ființe imaginare: analizăm modele și adunăm ce vom scrie.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm descrierea unui obiect și a unei persoane, din Unitățile III și IV, și figurile de stil personificarea și comparația.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției analizăm descrieri de ființe mitice dintr-un text-suport, separând înfățișarea, puterile și comportamentul, cu reperele de la p. 162.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev inventează o ființă imaginară și notează în fișă opt detalii despre înfățișare, puteri și comportament.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea fișei de pregătire a descrierii.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-12/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Descrierea unei ființe imaginare (II), redactare',
      obiective: [
        'Redactează o compunere descriptivă despre o ființă imaginară, cu respectarea etapelor scrierii.',
      ],
      sursaManual: 'Art 5, Lecția 11, p. 163, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea unei ființe imaginare (II), redactare',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o compunere descriptivă despre o ființă imaginară, cu respectarea etapelor scrierii.',
        ],
        resurse: [
          'Manual Art 5, p. 163',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-13/fisa.pdf)',
          'Fișa de pregătire realizată la ora anterioară',
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
            activitate: 'Le cer elevilor să recitească fișa de pregătire și să aleagă detaliul cu care vor începe descrierea.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem compunerea descriptivă despre ființa imaginară și o revizuim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm etapele scrierii și folosirea personificării și a comparației într-o descriere.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei lecției arăt cum se ordonează detaliile, de la înfățișare la comportament, și ce urmărim la revizuire, cu exemplele de la p. 163.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Fiecare elev redactează compunerea descriptivă pe baza fișei de pregătire, apoi o schimbă cu colegul pentru o revizuire reciprocă după lista de control.',
          },
        ],
        evaluare: 'Grilă de autoevaluare din fișă; observarea sistematică a redactării și a revizuirii reciproce.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-13/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Prezentarea proiectului de grup Itinerar multicultural',
      obiective: [
        'Prezintă și evaluează, pe grupe, proiectul Itinerar multicultural, conform criteriilor stabilite.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 153 (prezentare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului de grup Itinerar multicultural',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Prezintă și evaluează, pe grupe, proiectul Itinerar multicultural, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 5, p. 153',
          'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-5/lectia-14/fisa.pdf)',
          'Produsele proiectelor pe grupe',
        ],
        desfasurare: [
          {
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: 'Le amintesc grupelor că azi își arată itinerarul pregătit și că ascultăm fiecare prezentare cu atenție.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se prezintă proiectele pe grupe și că fiecare se evaluează după criteriile din fișă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Recapitulăm criteriile de evaluare și elementele paraverbale și nonverbale ale unei prezentări bune.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '8 min',
            activitate: 'Amintesc structura unei prezentări bune și cât timp are fiecare grupă, apoi stabilim ordinea grupelor.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '31 min',
            activitate: 'Grupele prezintă pe rând, colegii pun câte o întrebare, iar eu completez fișa de evaluare pentru fiecare grupă, după criterii.',
          },
        ],
        evaluare: 'Evaluarea proiectului pe grupe după criteriile din fișă; observarea prezentării și a feedbackului între colegi.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-14/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: basmul, elementele paraverbale și nonverbale, actele de limbaj.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 164-165, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: basmul, elementele paraverbale și nonverbale, actele de limbaj.',
        ],
        resurse: [
          'Manual Art 5, pp. 164-165',
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
            activitate: 'Îi rog pe elevi să spună pe rând câte o trăsătură a basmului sau o noțiune de comunicare din unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm trăsăturile basmului, miraculosul, rolurile personajelor, elementele paraverbale și nonverbale și actele de limbaj.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple din Zâna Munților, miraculosul, rolurile din basm și diferența dintre paraverbal și nonverbal.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Rezolvăm ghidat exercițiile de lectură și comunicare de la pp. 164-165.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, lectură și comunicare”, apoi discutăm răspunsurile.',
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
              intrebare: 'Ce arată prezența miraculosului într-un basm?',
              variante: [
                { text: 'Evenimente și ființe care nu sunt posibile în realitate', corect: true, explicatie: 'Miraculosul e o trăsătură definitorie a basmului: elemente fantastice, imposibile în lumea reală.' },
                { text: 'Doar întâmplări petrecute cu adevărat', corect: false, explicatie: 'Basmul nu se limitează la fapte reale, dimpotrivă, miraculosul definește specia.' },
                { text: 'O descriere obiectivă a naturii', corect: false, explicatie: 'Miraculosul ține de fantastic, nu de descrierea obiectivă.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 2, p. 144',
            },
            {
              intrebare: 'Ce sunt elementele paraverbale, într-o prezentare orală?',
              variante: [
                { text: 'Intonația, ritmul și intensitatea vocii', corect: true, explicatie: 'Paraverbal ține de cum sună vocea, nu de cuvinte sau de gesturi.' },
                { text: 'Gesturile și mimica', corect: false, explicatie: 'Acestea sunt elemente nonverbale, nu paraverbale.' },
                { text: 'Cuvintele alese', corect: false, explicatie: 'Alegerea cuvintelor ține de comunicarea verbală.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 155',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: numeralul cardinal și ordinal.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 164-165, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: numeralul cardinal și ordinal.',
        ],
        resurse: [
          'Manual Art 5, pp. 164-165',
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
            activitate: 'Le cer elevilor să scrie repede în litere un număr pe care li-l dictez și verificăm împreună.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm numeralul cardinal și ordinal și scrierea lor corectă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple la tablă, numeralul cardinal și ordinal, formele compuse și cazurile în care „un”, „o” sunt numeral sau articol.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de gramatică și redactare de la pp. 164-165.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '16 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi cei care termină scriu un scurt text de basm folosind corect trei numerale.',
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
              intrebare: 'Ce fel de numeral este „al treilea”?',
              variante: [
                { text: 'numeral ordinal', corect: true, explicatie: 'Arată ordinea, poziția printr-o numărare, nu doar cantitatea.' },
                { text: 'numeral cardinal', corect: false, explicatie: 'Numeralul cardinal ar fi „trei”, nu „al treilea”.' },
                { text: 'articol', corect: false, explicatie: 'Deși seamănă cu un articol demonstrativ, „al treilea” rămâne numeral ordinal.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 10, p. 160',
            },
            {
              intrebare: 'În enunțul Am citit un basm, poate cuvântul un să fie și altceva decât numeral?',
              variante: [
                { text: 'Da, poate fi articol nehotărât, dacă nu insistăm pe ideea de „un singur”', corect: true, explicatie: 'Un și o au valori morfologice diferite, în funcție de context: numeral sau articol nehotărât.' },
                { text: 'Nu, un e mereu numeral', corect: false, explicatie: 'De fapt, un e frecvent articol nehotărât, nu numeral, în comunicarea obișnuită.' },
                { text: 'Nu, un e mereu articol', corect: false, explicatie: 'Poate fi și numeral, când insistă pe ideea de „un singur, nu mai multe”.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 9, p. 158',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea V.',
      ],
      sursaManual: 'Art 5, Evaluare, p. 166',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea V.',
        ],
        resurse: [
          'Testul tipărit, Manual Art 5, p. 166',
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
            activitate: 'Le spun elevilor că proba de azi arată tot ce au învățat în unitate și îi liniștesc în privința timpului de lucru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se dă proba scrisă a Unității V, care verifică lectura basmului, gramatica și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și repartizarea timpului între exerciții și redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 166, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Elevii rezolvă individual proba scrisă; supraveghez discret, gestionez timpul și strâng lucrările la final.',
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
