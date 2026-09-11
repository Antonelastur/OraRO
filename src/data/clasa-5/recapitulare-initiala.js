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
//
// Lecțiile 3 și 4 sunt probele de evaluare inițială. Testele NU se publică:
// site-ul e static, iar elevii au linkul, deci un test pus aici ar fi vizibil
// înainte de administrare. Rămân `test: null`, iar Antoanela le tipărește din
// Clasa a V-a/U1/S1_L2_Test_initial_receptare.docx și S1_L3_..._comunicare.docx.
// Decizie confirmată 2026-09-04, vezi docs/architecture.md, secțiunea 5.

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
          'Prezentarea „Bun venit la Limba Română!” (/materiale/clasa-5/recapitulare-initiala/lectia-1/prezentare.pdf)',
          'Jocurile de intercunoaștere: Vânătoarea de colegi și Pașaportul clasei a V-a (/materiale/clasa-5/recapitulare-initiala/lectia-1/joc.pdf)',
          'Manualul de clasa a V-a, pentru prezentarea Unității I',
          'Bandă adezivă, pentru pașapoarte',
        ],
        desfasurare: [
          {
            etapa: 'Bun venit',
            timp: '4 min',
            activitate: '– Prezentarea, slide-urile 1-2: mă prezint pe scurt (ce predau, cum îmi doresc să fie orele noastre).\n– Fiecare elev spune într-un cuvânt cum se simte în prima oră de română din gimnaziu.',
          },
          {
            etapa: 'Vânătoarea de colegi',
            timp: '13 min',
            activitate: '– Împart grila de bingo (joc.pdf, p. 2) și explic regulile: elevii circulă, pun întrebarea din căsuță, notează numele colegului care răspunde „da”; un nume o singură dată.\n– Primul care completează un rând, o coloană sau o diagonală strigă „Bingo!” și citește numele din grilă.\n– Dacă e nevoie de o variantă mai liniștită: jocul „Cartea de vizită” din prezentare (numele, o carte sau un film preferat, un lucru care te reprezintă).',
          },
          {
            etapa: 'Ce se schimbă în clasa a V-a',
            timp: '6 min',
            activitate: '– Slide-ul „Ce se schimbă”: mai mulți profesori; ora de română are lectură, comunicare orală, limbă română și redactare; accent pe interpretare și argumentare.\n– Arăt manualul: cum arată o unitate și rubricile ei (Pentru început, Explorare, Repere, Aplicații).',
          },
          {
            etapa: 'Reguli și evaluare',
            timp: '8 min',
            activitate: '– Materialele: caiet de clasă, caiet de teme, dicționar. Regulile: ridicăm mâna, ascultăm până la capăt, temele se predau la timp.\n– Sistemul de evaluare: teste scrise, teme și activitate la clasă, portofoliu.\n– Elevii notează regulile pe prima pagină a caietului de clasă.',
          },
          {
            etapa: 'Pașaportul clasei a V-a',
            timp: '12 min',
            activitate: '– Fiecare completează pașaportul (joc.pdf, p. 3): numele, o pasiune, o așteptare de la orele de română, un desen sau simbol personal. Îl completez și eu pe al meu.\n– Câțiva elevi își citesc așteptarea; pașapoartele se lipesc pe peretele clasei, sub titlul „Clasa a V-a”, până la sfârșitul semestrului.',
          },
          {
            etapa: 'Unitatea I',
            timp: '4 min',
            activitate: '– Anunț tema unității: „Despre mine. Selfie”. Întrebarea de deschidere: ce credeți că spune un selfie despre voi?',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: materialele pentru ora următoare (caietele, dicționarul).\n– Anunț ora de recapitulare și cele două teste inițiale, care nu se trec în catalog.',
          },
        ],
        evaluare: 'Observarea sistematică a participării la joc și la discuție; pașaportul cu așteptări, fără notare.',
      },
      materiale: {
        prezentare: { fisier: '/materiale/clasa-5/recapitulare-initiala/lectia-1/prezentare.pdf' },
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
          'Fișa de recapitulare (/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa.pdf)',
          'Fișa de exerciții (/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa-exercitii.pdf)',
          'Tablă, caiete',
        ],
        desfasurare: [
          {
            etapa: 'Joc de cuvinte',
            timp: '5 min',
            activitate: '– Lanțul sinonimelor: spun un cuvânt (frumos, a merge, mare), elevii dau pe rând câte un sinonim; apoi la fel cu antonimele.',
          },
          {
            etapa: 'Vocabular și sunete',
            timp: '10 min',
            activitate: '– Fișa de recapitulare, ex. 1-2 (sinonime și antonime, despărțirea în silabe, diftongii), individual, 6 minute.\n– Verificare, 4 minute; la tablă, despărțim în silabe două cuvinte mai grele.',
          },
          {
            etapa: 'Scrierea corectă',
            timp: '6 min',
            activitate: '– Fișa de recapitulare, ex. 3: corectăm la tablă enunțurile greșite.\n– În caiete: ortogramele din ciclul primar (s-a / sa, i-a / ia, s-au / sau, într-o), cu câte un exemplu.',
          },
          {
            etapa: 'Gramatică',
            timp: '8 min',
            activitate: '– Fișa de recapitulare, ex. 4: substantivele și verbele din propoziție; felul propozițiilor după scopul comunicării.\n– Reamintim, cu exemple la tablă, părțile de vorbire știute (substantiv, verb, adjectiv, pronume, numeral) și subiectul și predicatul.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 2: ex. 4 (părțile de vorbire), ex. 5 (subiect și predicat) și ex. 6 (felul propozițiilor), individual, 9 minute.\n– Verificare, 4 minute; notez cine are nevoie de sprijin la gramatică.',
          },
          {
            etapa: 'Dictare',
            timp: '5 min',
            activitate: '– Fișa de recapitulare, ex. 5: dictez textul despre începutul anului școlar; elevii scriu în caiet; verific câteva caiete pe loc.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de recapitulare, ex. 6 (invitația); fișa de exerciții, pagina 1 și ex. 7 (biletul).',
          },
        ],
        evaluare: 'Observarea sistematică a rezolvării fișelor; verificarea textului scris după dictare, fără notare în catalog.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa.pdf', exercitii: '/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa-exercitii.pdf' },
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
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Așez clasa câte un elev în bancă și distribui testele.\n– Spun că testul nu se trece în catalog: rezultatul mă ajută să văd de unde pornim.\n– Structura: I. Înțelegerea textului (30 de puncte), II. Vocabular (20), III. Exprimare personală, 4-6 rânduri (30), IV. Corectitudine (10); 10 puncte din oficiu; 40 de minute.\n– Sfaturi: citiți textul de două ori, subliniați, căutați răspunsul în text; lăsați câteva minute pentru textul de la subiectul III.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual, în liniște; monitorizez fără să intervin pe conținut.\n– Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii își recitesc răspunsurile, apoi strâng testele.\n– Anunț că rezultatele se discută la ora de analiză.',
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
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Așez clasa câte un elev în bancă și distribui testele; reamintesc că e a doua probă a evaluării inițiale, tot fără notă în catalog.\n– Structura: I. Tipuri de propoziții (20 de puncte), II. Părți de vorbire (30), III. Subiect și predicat (20), IV. Punctuație (20); 10 puncte din oficiu; 40 de minute.\n– Citesc cerințele cu voce tare și răspund doar la întrebări despre ce se cere.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual, în liniște; monitorizez fără să intervin pe conținut.\n– Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii își verifică răspunsurile, apoi strâng testele.\n– Anunț ora de analiză: fiecare își va primi lucrarea și își va stabili obiectivele.',
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
          'Fișa de remediere individuală (/materiale/clasa-5/recapitulare-initiala/lectia-5/fisa.pdf)',
          'Tablă, pentru centralizarea erorilor frecvente',
        ],
        desfasurare: [
          {
            etapa: 'Rezultatele clasei',
            timp: '5 min',
            activitate: '– Prezint, fără nume, cum arată rezultatele clasei la cele două teste și ce a mers bine în general.\n– Ora depinde de corectare: greșelile discutate se aleg după ce văd lucrările.',
          },
          {
            etapa: 'Greșelile frecvente',
            timp: '12 min',
            activitate: '– Scriu pe tablă, fără nume, trei-patru greșeli care au apărut des (de exemplu, la felul propoziției și punctuație, la părțile de vorbire, la subiect și predicat, la scrierea corectă).\n– Elevii spun de ce cred că au apărut și cum se corectează; notăm regula lângă fiecare greșeală.',
          },
          {
            etapa: 'Exersăm regulile',
            timp: '10 min',
            activitate: '– Pentru fiecare regulă, două exemple noi pe care le rezolvă elevii la tablă, cu ajutorul clasei; restul clasei lucrează în caiete.',
          },
          {
            etapa: 'Lucrările înapoi',
            timp: '8 min',
            activitate: '– Împart lucrările corectate; fiecare își citește observațiile și își corectează în caiet o greșeală proprie.\n– Trec pe la bănci pentru o observație scurtă și concretă.',
          },
          {
            etapa: 'Fișa de remediere',
            timp: '12 min',
            activitate: '– Fiecare elev completează fișa: punctajele celor două teste, ce a mers bine, ce e de exersat, unul-două obiective realiste pentru primele săptămâni.\n– Bifez eu măsurile de sprijin; cu elevii care au nevoie, stabilesc un moment de verificare.',
          },
          {
            etapa: 'Încheiere',
            timp: '3 min',
            activitate: '– Fișele se păstrează în portofoliu și le revedem la prima recapitulare, după Unitatea I.',
          },
        ],
        evaluare: 'Observarea sistematică a participării la discuție; fișa individuală de remediere, folosită ca reper pe parcursul semestrului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/recapitulare-initiala/lectia-5/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
  ],
}
