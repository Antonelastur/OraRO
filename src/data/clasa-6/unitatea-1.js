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
// rezolvareGhid și planLectie rămân null aici intenționat, document intern,
// nu se publică.
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
      id: 'lectia-2',
      titlu: 'Narațiunea. Acțiunea. Timpul și spațiul',
      obiective: [
        'Identifică acțiunea, indiciile de timp și de spațiu dintr-un text narativ, pe baza textului Un păianjen care se crede Spiderman.',
      ],
      sursaManual: 'Manual, Lecția 2, p. 13',
      rezolvareGhid: null,
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      id: 'lectia-6',
      titlu: 'Descrierea în proză',
      obiective: [
        'Recunoaște elementele descrierii într-un text în proză: obiectul descris, proprietățile și elementele componente.',
      ],
      sursaManual: 'Manual, Lecția 6, p. 19',
      rezolvareGhid: null,
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      id: 'lectia-13',
      titlu: 'Cuvântul. Sinonimele și antonimele',
      obiective: [
        'Reactualizează și aprofundează identificarea și folosirea adecvată a sinonimelor și a antonimelor.',
      ],
      sursaManual: 'Manual, Lecția 12, pp. 28-29',
      rezolvareGhid: null,
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
      planLectie: null,
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
