// Unitatea IV: Vreau să salvez lumea — clasa a V-a
// Sursă: manual Art Klett (cuprins pp. 6, 8-9, numerotare proprie L1-L15),
// proiectarea pe unități 2022-2023, planificarea calendaristică. Aceeași
// convenție ca la Unitățile I-III: o lecție de site per lecție de manual, cu
// excepția redactării, a recapitulării (2 ore fiecare) și a lecției 11
// (Pronumele. Pronumele personal), care are 2 ore explicit în proiectare.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx. Planurile ERR mai
// vechi din notite-profesor/ rămân neatinse, sunt altă formă.
//
// Materiale: schema pentru lecțiile 14 (Adjectivul) și 15 (Gradele de
// comparație). Joc pentru 10 (Atitudini comunicative, acte de limbaj), 18 și
// 19 (recapitulare). Restul rămân null, listate în materiale-restante.md.

export const unitatea4 = {
  id: 'unitatea-4',
  titlu: 'Unitatea IV: Vreau să salvez lumea',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ literar. Tezeu și Minotaurul de Florin Bican',
      obiective: [
        'Identifică informații esențiale din textul narativ Tezeu și Minotaurul de Florin Bican.',
      ],
      sursaManual: 'Art 5, Lecția 1, p. 108 (Tezeu și Minotaurul de Florin Bican)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Tezeu și Minotaurul de Florin Bican',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul narativ Tezeu și Minotaurul de Florin Bican.',
        ],
        resurse: [
          'Manual Art 5, pp. 108-109',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-1/fisa-exercitii.pdf)',
          'Quizul „Tezeu și Minotaurul” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '8 min',
            activitate: '– „Pentru început”, p. 108, ex. 1: grupe de câte patru; fiecare grupă își alege un erou din istorie, iar un reprezentant îl prezintă în două-trei propoziții.\n– Ex. 2: doi-trei elevi numesc eroi imaginari din cărți sau filme.\n– Ex. 3: zeii din imagini; ce însemne îi fac ușor de recunoscut (legătura cu ora de istorie, Olimpul).',
          },
          {
            etapa: 'Despre autor',
            timp: '2 min',
            activitate: '– Caseta de la p. 108: Florin Bican (n. 1956), scriitor și traducător; textul este o repovestire a legendei, scrisă special pentru elevii care învață după acest manual.',
          },
          {
            etapa: 'Lectura model',
            timp: '12 min',
            activitate: '– Ex. 4: citesc textul cu voce tare; elevii urmăresc în manual.\n– Lămurim cuvintele: a hălădui (subsol), tribut, ocară, lighioană, falnic, a îndupleca, cală.\n– Notez pe tablă, pe măsură ce apar, numele personajelor și locurile: Creta, Atena, labirintul, Naxos.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '8 min',
            activitate: '– P. 109, ex. 1-2: ce ți-a plăcut cel mai mult? Te regăsești în vreun personaj? Câțiva elevi răspund și își motivează alegerea.\n– Ex. 3: fiecare notează în caiet o întrebare pe care i-ar pune-o lui Tezeu; citim trei-patru întrebări.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (cine e cine?) și ex. 2 (cine ar fi putut spune?), individual, 10 minute.\n– Verificare frontală, 5 minute; la clasele rapide, quizul „Tezeu și Minotaurul” în locul verificării.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: recitește textul și notează în caiet, în ordine, cinci întâmplări importante; fișa de exerciții, pagina 2 (ex. 3-5).',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-1/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Tezeu și Minotaurul',
          pasi: [
            {
              intrebare: 'Ce era Minotaurul?',
              variante: [
                {
                  text: 'O ființă cu trup de om și cap de taur, închisă în labirint',
                  corect: true,
                  explicatie: 'Amestecul de om și animal îl face o ființă a legendei, nu a realității.',
                },
                {
                  text: 'Un taur uriaș, dar obișnuit',
                  corect: false,
                  explicatie: 'Dacă ar fi fost doar un taur, nu ar fi fost o ființă legendară.',
                },
                {
                  text: 'Un rege crud din Creta',
                  corect: false,
                  explicatie: 'Regele Cretei era Minos; Minotaurul era ținut de el.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 108',
            },
            {
              intrebare: 'Cum reușește Tezeu să iasă din labirint?',
              variante: [
                {
                  text: 'Cu ajutorul unui ghem de ață primit de la Ariadna, pe care îl desfășoară la intrare',
                  corect: true,
                  explicatie: 'De aici vine expresia „firul Ariadnei”, folosită și azi.',
                },
                {
                  text: 'Memorând tot drumul, pas cu pas',
                  corect: false,
                  explicatie: 'Labirintul era construit tocmai ca să nu poată fi memorat.',
                },
                {
                  text: 'Sărind peste zidurile labirintului',
                  corect: false,
                  explicatie: 'Nu apare nicio evadare peste ziduri în legendă.',
                },
              ],
              indiciu: 'Cine îl ajută pe Tezeu și cu ce obiect?',
              sursa: 'Manual Art 5, p. 108',
            },
            {
              intrebare: 'Ce este o legendă?',
              variante: [
                {
                  text: 'O povestire care explică, prin fapte extraordinare, originea unui lucru, a unui loc sau a unui obicei',
                  corect: true,
                  explicatie: 'Legenda pornește adesea de la ceva real, dar adaugă miraculos.',
                },
                {
                  text: 'O relatare exactă a unui eveniment istoric',
                  corect: false,
                  explicatie: 'Aceea ar fi o cronică sau un text istoric.',
                },
                {
                  text: 'O poezie cu rimă',
                  corect: false,
                  explicatie: 'Legenda e text narativ, nu liric.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 108',
            },
            {
              intrebare: 'De ce pleacă Tezeu spre Creta?',
              variante: [
                {
                  text: 'Ca să pună capăt tributului de tineri trimiși ca hrană Minotaurului',
                  corect: true,
                  explicatie: 'Fapta lui pornește dintr-o nedreptate pe care vrea să o oprească.',
                },
                {
                  text: 'Ca să găsească o comoară',
                  corect: false,
                  explicatie: 'Nu comoara îl mână, ci salvarea celorlalți.',
                },
                {
                  text: 'Ca să se ascundă de tatăl lui',
                  corect: false,
                  explicatie: 'Pleacă cu voia și cu grija tatălui său.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 108',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Timp, spațiu și acțiune',
      obiective: [
        'Recunoaște reperele temporale și spațiale ale acțiunii și înțelege particularitățile de construcție a textului narativ.',
      ],
      sursaManual: 'Art 5, Lecția 2, pp. 110-111',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Timp, spațiu și acțiune',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște reperele temporale și spațiale ale acțiunii și înțelege particularitățile de construcție a textului narativ.',
        ],
        resurse: [
          'Manual Art 5, pp. 110-111',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-2/fisa-exercitii.pdf)',
          'Schema „Timp, spațiu și acțiune. Legenda” (/materiale/clasa-5/unitatea-4/lectia-2/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi-trei elevi citesc cele cinci întâmplări notate; ceilalți verifică ordinea.',
          },
          {
            etapa: 'Originea lui Tezeu',
            timp: '5 min',
            activitate: '– „Explorare”, p. 110, ex. 1: citim caseta despre nașterea lui Tezeu și proba inelului aruncat în mare.\n– Întrebarea din manual: de ce e sigur Tezeu că va învinge, iar Egeu se îndoiește? Ce știe Tezeu despre sine și Egeu nu știe?',
          },
          {
            etapa: 'Lectura pe roluri',
            timp: '8 min',
            activitate: '– Ex. 2: grupe de câte cinci (naratorul, Minos, Dedal, Egeu, Tezeu); citim pe roluri fragmentul până la plecarea lui Tezeu.\n– Colegii care au același rol în celelalte grupe urmăresc lectura după criteriile din manual (cursiv, cu gesturi și mimică; intervine la timp; își sprijină colegii).',
          },
          {
            etapa: 'Joc: Investigatorul',
            timp: '8 min',
            activitate: '– Ex. 3: grupe de câte șapte; investigatorul pune întrebările din listă (personajul principal, personajele secundare, unde, când, ce declanșează acțiunea, de ce pleacă eroul) și notează răspunsurile.\n– Doi investigatori prezintă ce au aflat; completăm pe tablă reperele de timp și de spațiu.',
          },
          {
            etapa: 'Explorare, ex. 4-10',
            timp: '7 min',
            activitate: '– Frontal: ex. 4-5 (soluția lui Minos și a lui Dedal; ce face regele după construirea labirintului); ex. 6 (adevărat sau fals, a-e).\n– Ex. 7-9: Minotaurul, ființă reală sau supranaturală? De ce există mai multe variante ale luptei? Zeul din legendă și purtarea lui.\n– Ex. 10: de unde provine numele Mării Egee.',
          },
          {
            etapa: 'Notițe: legenda',
            timp: '3 min',
            activitate: '– În caiete, după Repere și schema lecției: legenda (explicații imaginare pentru originea unor lucruri, locuri, fenomene; transmisă oral, apoi scris); legenda antică (zeii intervin supranatural, timp îndepărtat).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (harta locurilor), ex. 2 (real sau supranatural?) și ex. 3 (cuvinte care arată timpul), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, p. 111, ex. 1 (expresia „firul Ariadnei”), 2 (ordonarea întâmplărilor), 3, 4 (povestirea orală a întâmplărilor prin care trece Ariadna) și 6 (eseul de cinci minute, pe o foaie); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lecturii pe roluri și a jocului; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-2/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Timp, spațiu și acțiune în legendă',
          pasi: [
            {
              intrebare: 'În ce fel de timp se petrece o legendă ca aceasta?',
              variante: [
                {
                  text: 'Într-un trecut îndepărtat și nedeterminat, al zeilor și al eroilor',
                  corect: true,
                  explicatie: 'Nu ni se dau ani exacți; timpul e al miturilor.',
                },
                {
                  text: 'În anul curent',
                  corect: false,
                  explicatie: 'Legenda nu se petrece în prezentul cititorului.',
                },
                {
                  text: 'Într-un viitor apropiat',
                  corect: false,
                  explicatie: 'Legendele privesc spre trecut, nu spre viitor.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 110-111',
            },
            {
              intrebare: 'Care sunt principalele spații ale acțiunii?',
              variante: [
                {
                  text: 'Atena, marea, Creta și, mai ales, labirintul',
                  corect: true,
                  explicatie: 'Labirintul e spațiul central, cel care dă încercarea eroului.',
                },
                {
                  text: 'Un singur sat',
                  corect: false,
                  explicatie: 'Acțiunea traversează mai multe locuri.',
                },
                {
                  text: 'O școală',
                  corect: false,
                  explicatie: 'Nu apare niciun spațiu de acest fel.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 110-111',
            },
            {
              intrebare: 'Ce rol are labirintul în construcția povestirii?',
              variante: [
                {
                  text: 'E încercarea care dovedește ce fel de om e eroul, nu doar un decor',
                  corect: true,
                  explicatie: 'Fără labirint, fapta lui Tezeu nu ar demonstra nimic.',
                },
                {
                  text: 'E doar un loc frumos, descris în trecere',
                  corect: false,
                  explicatie: 'Nu e descris pentru frumusețe, ci ca obstacol.',
                },
                {
                  text: 'Nu are niciun rol',
                  corect: false,
                  explicatie: 'E chiar centrul acțiunii.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 110-111',
            },
            {
              intrebare: 'Ce înseamnă să ordonezi cronologic momentele acțiunii?',
              variante: [
                {
                  text: 'Să le așezi în ordinea în care s-au petrecut, de la primul la ultimul',
                  corect: true,
                  explicatie: 'Ordinea cronologică e baza oricărui rezumat.',
                },
                {
                  text: 'Să le așezi de la cel mai important la cel mai puțin important',
                  corect: false,
                  explicatie: 'Aceea ar fi o ordine a importanței, nu cronologică.',
                },
                {
                  text: 'Să le așezi alfabetic',
                  corect: false,
                  explicatie: 'Alfabetic nu are sens pentru întâmplări.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 110-111',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-2/schema.svg', titlu: 'Timp, spațiu și acțiune. Legenda' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Personajele',
      obiective: [
        'Identifică trăsăturile fizice și morale ale personajelor și modelele comportamentale din legendele grecești.',
      ],
      sursaManual: 'Art 5, Lecția 3, pp. 112-113',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Personajele',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Identifică trăsăturile fizice și morale ale personajelor și modelele comportamentale din legendele grecești.',
        ],
        resurse: [
          'Manual Art 5, pp. 112-113',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-3/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-3/fisa.pdf)',
          'Coli mari și carioci, pentru harta personajelor',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi-trei elevi citesc eseul de cinci minute (era necesar popasul pe Naxos?); ascultăm argumente pro și contra.',
          },
          {
            etapa: 'Harta personajelor',
            timp: '8 min',
            activitate: '– „Explorare”, p. 112, ex. 1: grupe de 4-5; pe o coală scriu în centru Tezeu și Minos, apoi celelalte personaje, legate prin săgeți (rudenie, ajutor, dușmănie).\n– Două grupe își prezintă harta; celelalte completează ce lipsește.',
          },
          {
            etapa: 'Eroul grec',
            timp: '4 min',
            activitate: '– Ex. 2: e nașterea din zeu singurul motiv pentru care Tezeu e erou?\n– Ex. 3: istoria cuvântului erou; ce sens are azi și ce sens avea la greci.',
          },
          {
            etapa: 'Trăsăturile lui Tezeu și ale lui Minos',
            timp: '6 min',
            activitate: '– Ex. 4, în perechi: pentru trăsăturile din listă (curajos, puternic, falnic, inteligent, încrezător, infidel, hotărât, frumos, uituc), fragmentul din text care o dovedește; notează în tabelul din fișa lecției.\n– Ex. 5-6, frontal: două situații în care Minos nu e curajos; de ce nu lasă Minotaurul să moară de foame (elevii aleg o variantă și o motivează).',
          },
          {
            etapa: 'Notițe: personajele legendei',
            timp: '4 min',
            activitate: '– În caiete, după Repere: zeii (Olimp, părinții eroilor), eroii sau semizeii (recunoscuți după o faptă excepțională, destin adesea nefericit), oamenii obișnuiți; eroul grec, simbol al luptei împotriva dezordinii.',
          },
          {
            etapa: 'Joc: Cubul',
            timp: '8 min',
            activitate: '– „Aplicații”, p. 113, ex. 4: grupe de 3-4; fiecare grupă aruncă cubul și rezolvă sarcina despre Minotaur (descrieți, comparați, asociați, analizați, aplicați, argumentați).\n– Câte un reprezentant spune răspunsul grupei, într-un minut.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (zeu, erou sau om?), ex. 2 (ghicește personajul) și ex. 3 (erou fără pată?), individual, 8 minute.\n– Verificare, 4 minute; la ex. 3 citim câteva greșeli ale lui Tezeu, cu fapta.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Aplicații”, p. 112, ex. 1 (blazonul lui Tezeu) și ex. 2 (textul de o pagină despre Tezeu: fișa de identitate, înfățișarea, patru trăsături morale); „Provocări”, p. 113, ex. 1-2 (monștrii învinși de Tezeu); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Hărțile personajelor și produsele grupelor la jocul Cubul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-3/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-4/lectia-3/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează o opinie despre semnificația textului Tezeu și Minotaurul și despre valorile recunoscute social și cultural.',
      ],
      sursaManual: 'Art 5, Lecția 4, p. 114',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie despre semnificația textului Tezeu și Minotaurul și despre valorile recunoscute social și cultural.',
        ],
        resurse: [
          'Manual Art 5, p. 114',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi elevi prezintă blazonul lui Tezeu; un elev citește începutul textului despre Tezeu.',
          },
          {
            etapa: 'Interpretare, ex. 1-5',
            timp: '8 min',
            activitate: '– „Interpretare”, p. 114, frontal: tema textului (ex. 1); pentru cine luptă Tezeu (ex. 2); ce obțin atenienii (ex. 3).\n– Ex. 4: tu cum ai putea fi generos cu cei din jur? Două-trei exemple.\n– Ex. 5: găsim în text momentul în care lui Tezeu îi e teamă și ce face.',
          },
          {
            etapa: 'Ce l-a ajutat pe Tezeu',
            timp: '8 min',
            activitate: '– Ex. 6: patru grupe, câte una pentru inteligență, antrenament, susținerea primită, îndrăzneala opiniei; fiecare caută în text dovezi, 4 minute.\n– Raportorii prezintă, câte un minut.',
          },
          {
            etapa: 'Labirintul și personajele',
            timp: '7 min',
            activitate: '– Ex. 7: elevii completează în caiete cele trei afirmații despre labirint (dificultatea luptei, mijloc de apărare, victoria rațiunii); citim câteva variante.\n– Ex. 8-9: de ce îi dă Ariadna ghemul; două momente în care Tezeu le face rău apropiaților.\n– Ex. 10: asociem personajele cu semnificațiile, pe tablă; notițele se trec în fișa lecției.',
          },
          {
            etapa: 'Discuție: finalul și monștrii de azi',
            timp: '4 min',
            activitate: '– Ex. 11-13: e finalul fericit sau nefericit? Ce înseamnă lumea ca „un labirint fără ziduri”? Care sunt azi „monștrii” cu care luptăm?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (simboluri), ex. 2 (firul Ariadnei, azi) și ex. 3 (final fericit pentru cine?), individual, 8 minute.\n– Verificare, 4 minute; la ex. 1 și 3 primesc orice răspuns bine argumentat.',
          },
          {
            etapa: 'Cvintetul și tema',
            timp: '7 min',
            activitate: '– „Portofoliu”: citim modelul de cvintet pentru „monstru” și regulile pentru fiecare vers; fiecare începe în caiet cvintetul „Eroul” (primele două versuri).\n– Tema: cvintetul „Eroul”, terminat; „Provocări” (labirintul din noi), un răspuns scris de 5-6 rânduri; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a argumentelor; produsele grupelor; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-4/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Comparația',
      obiective: [
        'Identifică informații dintr-un text explicativ, prin lectura ghidată a imaginii.',
      ],
      sursaManual: 'Art 5, Lecția 5, p. 115',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Comparația',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații dintr-un text explicativ, prin lectura ghidată a imaginii.',
        ],
        resurse: [
          'Manual Art 5, p. 115',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-5/fisa-exercitii.pdf)',
          'Schema „Comparația” (/materiale/clasa-5/unitatea-4/lectia-5/schema.svg)',
          'Quizul „Comparația” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '3 min',
            activitate: '– Doi-trei elevi citesc cvintetul „Eroul”; verificăm regulile versurilor.',
          },
          {
            etapa: 'Joc: animalele eroilor',
            timp: '5 min',
            activitate: '– „Explorare”, p. 115, ex. 1, în perechi: cu ce animal se aseamănă Tezeu (curajos, puternic) și Ariadna (devotată, înțeleaptă)? Perechile își spun alegerile și le motivează.',
          },
          {
            etapa: 'Explorare, ex. 2-5',
            timp: '8 min',
            activitate: '– Ex. 2: comparații din vorbirea de zi cu zi pentru culori (albastru ca..., galben ca...).\n– Ex. 3, pe grupe: trei însușiri ale cozii Minotaurului, pornind de la comparația cu biciul din text.\n– Ex. 4: la ce parte de vorbire se raportează comparațiile (verb, adjectiv, substantiv).\n– Ex. 5: cuvintele care leagă cei doi termeni.',
          },
          {
            etapa: 'Notițe: comparația',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: definiția; comparatul și comparantul; elementele comune (exemplul labirint – păienjeniș); elementele de legătură: ca, precum, cât, asemenea cu, aidoma cu, întocmai ca, la fel ca.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– „Aplicații”, ex. 1, frontal: elementul potrivit pentru o comparație figură de stil.\n– Ex. 2: comparațiile din versurile lui Ion Pillat; pentru fiecare, comparatul și comparantul.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (părțile comparației), ex. 2 (figură de stil sau nu?) și ex. 3 (ghicitori cu comparații), individual, 10 minute.\n– Verificare, 5 minute; insist pe diferența dintre „ca un tunet” și „ca arhitect”.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Comparația”, frontal; notez întrebările cu cele mai multe răspunsuri greșite.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 3 (text de 5-7 rânduri cu o comparație); „Provocări” (câte o comparație din rețete, ghicitori, cântece, filme); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-5/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Comparația',
          pasi: [
            {
              intrebare: 'Ce este comparația, ca figură de stil?',
              variante: [
                {
                  text: 'Alăturarea a doi termeni printr-un cuvânt de legătură, ca să scoată în evidență o însușire',
                  corect: true,
                  explicatie: 'Curajos ca un leu: leul aduce cu el ideea de curaj.',
                },
                {
                  text: 'Darea de însușiri omenești unui lucru',
                  corect: false,
                  explicatie: 'Aceea e personificarea.',
                },
                {
                  text: 'Repetarea unui cuvânt la începutul mai multor propoziții',
                  corect: false,
                  explicatie: 'Aceea e o repetiție cu rol stilistic, nu o comparație.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 115',
            },
            {
              intrebare: 'Care sunt cei doi termeni ai comparației „ochii ei erau albaștri ca cerul”?',
              variante: [
                {
                  text: 'ochii, termenul comparat, și cerul, termenul cu care se compară',
                  corect: true,
                  explicatie: 'Cuvântul de legătură e „ca”.',
                },
                {
                  text: 'albaștri și cerul',
                  corect: false,
                  explicatie: '„Albaștri” e însușirea comună, nu un termen al comparației.',
                },
                {
                  text: 'ochii și albaștri',
                  corect: false,
                  explicatie: 'Al doilea termen e cel introdus prin „ca”.',
                },
              ],
              indiciu: 'Ce se compară și cu ce anume se compară?',
              sursa: 'Manual Art 5, p. 115',
            },
            {
              intrebare: 'Prin ce cuvinte se poate face o comparație?',
              variante: [
                {
                  text: 'ca, precum, asemenea, cât, la fel ca',
                  corect: true,
                  explicatie: 'Toate marchează alăturarea celor doi termeni.',
                },
                {
                  text: 'și, dar, sau',
                  corect: false,
                  explicatie: 'Acelea leagă propoziții, nu compară.',
                },
                {
                  text: 'pentru că, deoarece',
                  corect: false,
                  explicatie: 'Acelea arată cauza.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 115',
            },
            {
              intrebare: 'La ce folosește comparația într-un text?',
              variante: [
                {
                  text: 'Îl ajută pe cititor să vadă mai clar, punând alături ceva cunoscut',
                  corect: true,
                  explicatie: 'Ne explicăm necunoscutul prin cunoscut.',
                },
                {
                  text: 'Face textul mai lung',
                  corect: false,
                  explicatie: 'Lungimea nu e un scop.',
                },
                {
                  text: 'Ascunde despre ce e vorba',
                  corect: false,
                  explicatie: 'Dimpotrivă, lămurește.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 115',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-5/schema.svg', titlu: 'Comparația' },
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Textul multimodal. Banda desenată: Hoțul fulgerului de Rick Riordan',
      obiective: [
        'Identifică componentele textului multimodal și comparațiile dintr-o bandă desenată.',
      ],
      sursaManual: 'Art 5, Lecția 6, pp. 116-118 (Hoțul fulgerului de Rick Riordan)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul multimodal. Banda desenată: Hoțul fulgerului de Rick Riordan',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică componentele textului multimodal și comparațiile dintr-o bandă desenată.',
        ],
        resurse: [
          'Manual Art 5, pp. 116-118',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-6/fisa-exercitii.pdf)',
          'Infograficul „Textul multimodal. Banda desenată” (/materiale/clasa-5/unitatea-4/lectia-6/infografic.svg)',
          'Quizul „Textul multimodal. Banda desenată” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 116: folosiți emoticoane în mesaje? De ce? O prezentare în care ați pus și imagini: pe ce suport?',
          },
          {
            etapa: 'Explorare, ex. 1-4',
            timp: '7 min',
            activitate: '– Ex. 1: cum povestesc, în afară de cuvinte, filmul, baletul, jocurile pe calculator?\n– Ex. 2: cele cinci coduri dintr-un film; ex. 3: ce facem ca să receptăm sau să construim o narațiune; ex. 4: suportul unui text care îmbină mai multe modalități.',
          },
          {
            etapa: 'Lectura benzii desenate',
            timp: '8 min',
            activitate: '– Ex. 5: prezint pe scurt seria lui Rick Riordan (zei și semizei în lumea de azi; Percy, întruchiparea lui Perseu); elevii citesc banda desenată în gând.\n– Ex. 6-7: ce v-a plăcut, ce n-ați înțeles, de ce v-a amintit? Câte modalități de comunicare folosește banda?',
          },
          {
            etapa: 'Cum se citește o bandă desenată',
            timp: '6 min',
            activitate: '– Ex. 8-12, frontal: direcțiile de citire și mărimea desenelor; unde sunt replicile și gândurile; rolul semnelor de punctuație și al literelor repetate; cum e sugerată mișcarea lui Percy; cum e desenată lupta din prima vinietă a ultimei benzi.',
          },
          {
            etapa: 'Notițe: textul multimodal',
            timp: '6 min',
            activitate: '– În caiete, după Repere și infograficul lecției: textul multimodal; codurile (lingvistic, vizual, auditiv, gestual, spațial); suportul (hârtie, digital, live); simplu și complex.\n– Elementele benzii desenate: planșa, banda, vinieta, bulele (vorbire, gând, strigăt), recitativul, ideogramele, onomatopeele, liniile de mișcare, punctuația.',
          },
          {
            etapa: 'Aplicații, ex. 2-3',
            timp: '5 min',
            activitate: '– În perechi: numărul benzilor, al vinietelor și al recitativelor (ex. 2); ideogramele, onomatopeele, semnele de punctuație și rolul lor (ex. 3). Verificăm frontal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cuvintele benzii desenate), ex. 2 (ce fel de bulă?) și ex. 3 (simplu sau complex?), individual, 8 minute.\n– Verificare, 3 minute; dacă rămâne timp, quizul „Textul multimodal. Banda desenată”.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 1 și 4-8; fișa de exerciții, pagina 2 (banda cu trei viniete: Tezeu intră în labirint). Opțional, „Provocări”: cele două volume ale lui Riordan.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; banda desenată de la tema.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-6/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Textul multimodal. Banda desenată',
          pasi: [
            {
              intrebare: 'Ce înseamnă că banda desenată e un text multimodal?',
              variante: [
                {
                  text: 'Transmite sensul prin mai multe mijloace deodată: imagine, text, așezare în pagină',
                  corect: true,
                  explicatie: 'Niciunul singur nu spune toată povestea.',
                },
                {
                  text: 'Că are mai multe volume',
                  corect: false,
                  explicatie: 'Numărul de volume nu are legătură.',
                },
                {
                  text: 'Că poate fi citită în mai multe limbi',
                  corect: false,
                  explicatie: 'Traducerea nu ține de multimodalitate.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 116-118',
            },
            {
              intrebare: 'Ce este o bulă de dialog?',
              variante: [
                {
                  text: 'Spațiul desenat în care e scris ce spune sau ce gândește un personaj',
                  corect: true,
                  explicatie: 'Forma bulei arată dacă personajul vorbește, țipă sau gândește.',
                },
                {
                  text: 'Un cadru gol, fără desen',
                  corect: false,
                  explicatie: 'Cadrul e altceva: chenarul unei imagini.',
                },
                {
                  text: 'Titlul benzii desenate',
                  corect: false,
                  explicatie: 'Titlul stă în afara cadrelor.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 116-118',
            },
            {
              intrebare: 'Ce arată o bulă cu marginea zimțată, în loc de una rotunjită?',
              variante: [
                {
                  text: 'Că personajul strigă sau vorbește foarte tare',
                  corect: true,
                  explicatie: 'Forma bulei transmite intonația, pe care textul singur nu o poate arăta.',
                },
                {
                  text: 'Că personajul șoptește',
                  corect: false,
                  explicatie: 'Șoapta se marchează, de obicei, cu linie punctată.',
                },
                {
                  text: 'Că personajul tace',
                  corect: false,
                  explicatie: 'Dacă tace, nu are bulă de dialog.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 116-118',
            },
            {
              intrebare: 'Cum citești corect o pagină de bandă desenată?',
              variante: [
                {
                  text: 'Cadru cu cadru, de la stânga la dreapta și de sus în jos, citind și imaginea, și textul',
                  corect: true,
                  explicatie: 'Dacă sari peste imagini, pierzi jumătate din poveste.',
                },
                {
                  text: 'Doar bulele de dialog, restul e decor',
                  corect: false,
                  explicatie: 'Imaginile poartă acțiunea, nu doar decorul.',
                },
                {
                  text: 'Doar imaginile, textul nu contează',
                  corect: false,
                  explicatie: 'Ambele sunt necesare.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 116-118',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-4/lectia-6/infografic.svg', titlu: 'Textul multimodal. Banda desenată' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Textul explicativ (aplicativ)',
      obiective: [
        'Identifică informații dintr-un text explicativ injonctiv, prin lectură ghidată.',
      ],
      sursaManual: 'Art 5, Lecția 7, p. 119',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul explicativ (aplicativ)',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică informații dintr-un text explicativ injonctiv, prin lectură ghidată.',
        ],
        resurse: [
          'Manual Art 5, p. 119',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-7/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-7/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Trei-patru elevi arată banda desenată de pe fișa de exerciții; clasa numește elementele folosite (recitativ, bule, onomatopee).',
          },
          {
            etapa: 'Lectura textului',
            timp: '6 min',
            activitate: '– „Aplicații”, p. 119, ex. 1: citim indicațiile pentru realizarea unei benzi desenate: lista materialelor și cei opt pași, cu schițele lor.',
          },
          {
            etapa: 'Aplicații, ex. 2-6',
            timp: '12 min',
            activitate: '– Ex. 2 (A și B): ce se întâmplă în text și care e scopul lui.\n– Ex. 3-4: titlul și subtitlurile, mărimea literelor și culorile; numărul paragrafelor și cum sunt evidențiate.\n– Ex. 5: modul la care sunt cele mai multe verbe; transformăm două verbe la negativ (alege – nu alege).\n– Ex. 6: rolul schițelor.',
          },
          {
            etapa: 'Notițe: textul explicativ aplicativ',
            timp: '5 min',
            activitate: '– În caiete, cu sprijinul fișei lecției: scopul (instrucțiuni: cum se face ceva); structura (titlu, materiale, pași ordonați, numerotați sau pe paragrafe); verbe la imperativ; schițe, marcatori, culori.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (labirintul de hârtie, pașii ordonați), ex. 2 (la imperativ) și ex. 3 (instrucțiune sau poveste?), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Autoevaluare L1-L7',
            timp: '5 min',
            activitate: '– P. 119: elevii completează în caiet cele trei afirmații (cel mai important, cel mai plăcut, cel mai dificil); citim câteva și notez ce trebuie reluat.',
          },
          {
            etapa: 'Portofoliu și temă',
            timp: '5 min',
            activitate: '– „Portofoliu”: fiecare realizează, după instrucțiunile citite, o bandă desenată după Tezeu și Minotaurul (pe hârtie sau online); stabilim data expoziției și a turului galeriei.\n– Tema: minitestul L1-L7 de la p. 119; fișa de exerciții, pagina 2 (sfaturile Ariadnei).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-4/lectia-7/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-4/lectia-7/schema.svg',
          titlu: 'Cum e construit un text care te învață să faci ceva',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Text auxiliar. Eu sunt Malala de Malala Yousafzai și Patricia McCormick',
      obiective: [
        'Interpretează textul auxiliar Eu sunt Malala, stabilind legături interdisciplinare cu istoria, geografia și religia.',
      ],
      sursaManual: 'Art 5, Lecția 8, „Noi pagini, alte idei”, pp. 120-121 (Eu sunt Malala de Malala Yousafzai și Patricia McCormick)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Eu sunt Malala de Malala Yousafzai și Patricia McCormick',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Interpretează textul auxiliar Eu sunt Malala, stabilind legături interdisciplinare cu istoria, geografia și religia.',
        ],
        resurse: [
          'Manual Art 5, pp. 120-121',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-8/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-8/fisa.pdf)',
          'Hartă a lumii sau atlas',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– Întrebarea de la p. 120: ai vrea să salvezi lumea, să fii erou? Poți schimba în bine ceva din lumea ta?\n– Citim caseta despre Malala; găsim pe hartă Pakistanul, orașul Karachi și Marea Britanie, unde s-a refugiat familia.\n– Legătura cu religia și istoria: explicăm, după subsol, cine sunt talibanii și ce le interziceau femeilor; ce este Premiul Nobel pentru Pace.',
          },
          {
            etapa: 'Lectura textului',
            timp: '8 min',
            activitate: '– Citesc fragmentul cu voce tare; elevii urmăresc.\n– Lămurim cuvintele din subsol (taliban, Karachi, New York Times, jani, aba, paștun) și expresia „în vizorul talibanilor”.',
          },
          {
            etapa: 'Predarea reciprocă',
            timp: '12 min',
            activitate: '– Ex. 5: împart textul în șase fragmente; șase elevi joacă, pe rând, rolul profesorului: indică cine citește fragmentul, cine îl povestește, răspund la întrebările colegilor și scriu pe tablă ideea principală.\n– Elevii copiază în caiete cele șase idei principale.',
          },
          {
            etapa: 'Discutarea textului',
            timp: '7 min',
            activitate: '– Ex. 1-4, frontal: persoanele din text; unde și când se petrec întâmplările; pentru ce luptă Malala și la ce pericole se expune.\n– Ex. 6-8: sentimentele Malalei; de la cine a moștenit curajul și de ce se teme totuși tatăl; până unde merge devotamentul ei.',
          },
          {
            etapa: 'Malala și Tezeu',
            timp: '5 min',
            activitate: '– Ex. 9: fiecare alege două dintre trăsăturile din manual (curaj, generozitate, pacifism, hotărâre, solidaritate) și le justifică în jurnalul cu dublă intrare din fișa lecției.\n– Ex. 10: oral, în ce măsură poate fi comparată Malala cu Tezeu.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '9 min',
            activitate: '– Pagina 1: ex. 1 (axa vieții Malalei) și ex. 2 (adevărat sau fals?), individual, 6 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 9 (toate cele cinci trăsături, cu justificare) și ex. 10 în scris; fișa de exerciții, pagina 2 (inclusiv scrisoarea către Malala).\n– „Biblioteci deschise”: recomand „Odiseea” de Homer și „Legendele Olimpului” de Alexandru Mitru.',
          },
        ],
        evaluare: 'Observarea predării reciproce; jurnalul cu dublă intrare; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-8/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-4/lectia-8/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Modele comportamentale eroice de-a lungul timpului',
      obiective: [
        'Recunoaște valori și aspirații umane în modelul eroului grec și identifică similitudini între culturi diferite.',
      ],
      sursaManual: 'Art 5, Lecția 9, pp. 122-123',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modele comportamentale eroice de-a lungul timpului',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Recunoaște valori și aspirații umane în modelul eroului grec și identifică similitudini între culturi diferite.',
        ],
        resurse: [
          'Manual Art 5, pp. 122-123',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-9/fisa-exercitii.pdf)',
          'Infograficul „Modele comportamentale eroice” (/materiale/clasa-5/unitatea-4/lectia-9/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 122, ex. 1-2: ce valori întruchipează Tezeu? Avem nevoie azi de eroi? Cum ar fi lumea cu mai mulți eroi?',
          },
          {
            etapa: 'Știu – Vreau să știu – Am învățat',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1: fiecare desenează în caiet tabelul cu trei rubrici și completează primele două (ce știe despre eroi, și de la istorie; ce ar vrea să afle).\n– Elevii citesc în gând informațiile de la pp. 122-123 (Ghilgameș, eroii greci, Eneas, sfântul, regele și cavalerul medieval, eroul național, eroul universal, supereroii).\n– Grupe de 4-5: aleg ce păstrează pentru fișa grupei; un reprezentant o citește.',
          },
          {
            etapa: 'Explorare, ex. 2-5',
            timp: '8 min',
            activitate: '– Ex. 2: rolul culorilor și al marcatorilor din text.\n– Ex. 3, în perechi: axa cronologică din manual, copiată în caiete, cu eroii fiecărei epoci.\n– Ex. 4-5, frontal: trei trăsături ale eroilor greci care s-au transmis mai departe; se va schimba modelul de erou în viitor?',
          },
          {
            etapa: 'Notițe: modelul eroic',
            timp: '4 min',
            activitate: '– În caiete, după Repere și infograficul lecției: eroul, ființă excepțională în care se proiectează valori permanente; transformarea modelului (eroul grec, de origine divină, unic, idealizat; eroul contemporan, adesea un om obișnuit; rolul presei și al televiziunii).',
          },
          {
            etapa: 'Aplicații, ex. 1 și 3',
            timp: '5 min',
            activitate: '– Ex. 1: câte un erou contemporan pentru drepturile omului, spațiul cosmic, știință, artă, sport.\n– Ex. 3: grupele de la început completează a treia rubrică, „Am învățat”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (eroul și epoca lui), ex. 2 (supereroul și strămoșul lui) și ex. 3 (ce au în comun?), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Bilet de ieșire și temă',
            timp: '5 min',
            activitate: '– Bilet de ieșire: un erou despre care am aflat azi și o valoare pe care o întruchipează.\n– Tema: „Aplicații”, ex. 2 (tabelul cu eroul antic, național și universal, în caiet); „Portofoliu”: prezentarea ta ca erou, pentru cartea eroilor clasei; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Fișele grupelor; biletele de ieșire; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-9/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Modele comportamentale eroice',
          pasi: [
            {
              intrebare: 'Ce au în comun eroii din culturi foarte diferite?',
              variante: [
                {
                  text: 'Înfruntă o primejdie pentru alții, nu pentru ei, și plătesc un preț',
                  corect: true,
                  explicatie: 'Fapta care nu costă nimic nu face un erou.',
                },
                {
                  text: 'Au aceleași nume în toate culturile',
                  corect: false,
                  explicatie: 'Numele diferă complet.',
                },
                {
                  text: 'Sunt toți din Grecia antică',
                  corect: false,
                  explicatie: 'Fiecare cultură își are eroii ei.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 122-123',
            },
            {
              intrebare: 'Ce valoare arată Tezeu prin fapta lui?',
              variante: [
                {
                  text: 'Curajul pus în slujba altora, nu curajul de dragul gloriei',
                  corect: true,
                  explicatie: 'Pleacă să oprească o nedreptate, nu să se facă faimos.',
                },
                {
                  text: 'Dorința de îmbogățire',
                  corect: false,
                  explicatie: 'Nu urmărește niciun câștig material.',
                },
                {
                  text: 'Nevoia de a fi lăsat în pace',
                  corect: false,
                  explicatie: 'Se expune primejdiei din proprie voință.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 122-123',
            },
            {
              intrebare: 'Poate exista un erou în viața de zi cu zi?',
              variante: [
                {
                  text: 'Da, oricine face un lucru bun cu un cost pentru el însuși, fără să fie obligat',
                  corect: true,
                  explicatie: 'Eroismul nu cere monștri; cere alegere și preț.',
                },
                {
                  text: 'Nu, eroii există doar în legende',
                  corect: false,
                  explicatie: 'Chiar unitatea aduce exemple din prezent, ca Malala.',
                },
                {
                  text: 'Da, dar numai dacă devine celebru',
                  corect: false,
                  explicatie: 'Faima nu e o condiție a eroismului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 122-123',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-4/lectia-9/infografic.svg', titlu: 'Modele comportamentale eroice' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Atitudini comunicative. Acte de limbaj: a întreba, a solicita, a felicita',
      obiective: [
        'Identifică și performează actele de limbaj a întreba, a solicita, a felicita, într-o situație de comunicare dată.',
      ],
      sursaManual: 'Art 5, Lecția 10, pp. 124-125',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Atitudini comunicative. Acte de limbaj: a întreba, a solicita, a felicita',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică și performează actele de limbaj a întreba, a solicita, a felicita, într-o situație de comunicare dată.',
        ],
        resurse: [
          'Manual Art 5, pp. 124-125',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-10/fisa-exercitii.pdf)',
          'Quizul „Acte de limbaj: a întreba, a solicita, a felicita” (materialul de joc al lecției)',
          'Bilețele cu situații de comunicare',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: '– „Pentru început”, p. 124: după ce vă dați seama că un prieten vă ascultă sau nu cu atenție? Notez indiciile pe tablă.',
          },
          {
            etapa: 'Atitudini comunicative',
            timp: '7 min',
            activitate: '– „Explorare”, ex. 1, în perechi: cele patru aspecte (informația, starea vorbitorului, așteptarea, relația) pentru propoziția „Să dispară cățelul ăsta din casa mea!”, după modelul din manual.\n– Ex. 2: doi elevi rostesc cele două propoziții cu gesturile și tonul potrivite; clasa observă diferențele.',
          },
          {
            etapa: 'Notițe: atenția și empatia',
            timp: '4 min',
            activitate: '– În caiete, după Repere: atitudinile comunicative (ce transmite vorbitorul, dincolo de cuvinte, despre sine și despre relație); atenția; empatia.',
          },
          {
            etapa: 'Discursul Adorei Svitak',
            timp: '8 min',
            activitate: '– „Explorare”, p. 125, ex. 1: prezint pe scurt vorbitoarea și conferințele TED; citesc fragmentele din discurs.\n– Ex. 2: sunteți de acord că lumea are nevoie de idei îndrăznețe și de optimism? Două-trei păreri.\n– Ex. 3: ce acte de limbaj găsim în text (întrebarea de la început, solicitarea, mulțumirea de la final).',
          },
          {
            etapa: 'Notițe: actele de limbaj',
            timp: '4 min',
            activitate: '– În caiete, după Repere: actul de limbaj; a întreba, a solicita, a felicita, fiecare cu o formulare familiară și una politicoasă.',
          },
          {
            etapa: 'Aplicații: situații de comunicare',
            timp: '8 min',
            activitate: '– „Aplicații”, ex. 1-3: fiecare pereche extrage un bilet cu o situație și formulează întrebarea, solicitarea sau felicitarea potrivită, cu mijloace verbale, nonverbale și paraverbale.\n– Patru-cinci perechi joacă situația; clasa spune dacă formularea se potrivește relației dintre vorbitori.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (ce face vorbitorul?) și ex. 2 (de la prieten la director), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Quiz și temă',
            timp: '6 min',
            activitate: '– Quizul „Acte de limbaj”, frontal.\n– Tema: părerea despre discursul Adorei (ex. 2), 5-6 rânduri în caiet; fișa de exerciții, pagina 2. Jocul de rol „Eu sunt eroul...” („Aplicații”, p. 124) se pregătește acasă, dacă o reluăm la o oră de comunicare.',
          },
        ],
        evaluare: 'Observarea sistematică a jocurilor de rol; quizul; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-10/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Acte de limbaj: a întreba, a solicita, a felicita',
          pasi: [
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Te felicit pentru curajul tău!”?',
              variante: [
                { text: 'o felicitare', corect: true, explicatie: 'Enunțul exprimă direct aprecierea pentru o faptă sau o calitate.' },
                { text: 'o solicitare', corect: false, explicatie: 'O solicitare ar cere ceva, nu ar aprecia o calitate.' },
                { text: 'o întrebare', corect: false, explicatie: 'Enunțul nu are formă de întrebare, e o afirmație.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 10, p. 124',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Poți să-mi dai o mână de ajutor?”?',
              variante: [
                { text: 'o solicitare', corect: true, explicatie: 'Ceri ajutorul cuiva, deci realizezi o solicitare.' },
                { text: 'o felicitare', corect: false, explicatie: 'Nu exprimi apreciere pentru nimic, ci ceri ceva.' },
                { text: 'o poruncă', corect: false, explicatie: 'Forma de întrebare politicoasă e o solicitare, nu o poruncă directă.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 10, p. 124',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-4/lectia-10/schema.svg',
          titlu: 'A întreba, a solicita, a felicita',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Pronumele. Pronumele personal (I)',
      obiective: [
        'Reactualizează cunoștințele despre pronume și înlocuiește substantive cu pronume personale potrivite.',
      ],
      sursaManual: 'Art 5, Lecția 11, p. 126, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele. Pronumele personal (I)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează cunoștințele despre pronume și înlocuiește substantive cu pronume personale potrivite.',
        ],
        resurse: [
          'Manual Art 5, p. 126',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-11/fisa-exercitii.pdf)',
          'Schema „Pronumele. Pronumele personal” (/materiale/clasa-5/unitatea-4/lectia-11/schema.svg)',
          'Quizul „Pronumele personal” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 126, în perechi: înlocuiți numele eroilor contemporani (Maica Tereza, Neil Armstrong, Nadia Comăneci, Bob Dylan) cu pronume; perechile citesc propozițiile.',
          },
          {
            etapa: 'Explorare, ex. 1-5',
            timp: '12 min',
            activitate: '– Ex. 1: pronumele care înlocuiesc substantivele scrise italic (pompierii, ziaristele).\n– Ex. 2-3: pronumele personale din conversația din manual, cu persoana și numărul lor.\n– Ex. 4: înlocuim substantivele cu pronume și precizăm genul (el, ea, ei, ele).\n– Ex. 5: cuvintele colorate (el – îl, mine – mă...): ce parte de vorbire sunt și prin ce se deosebesc.',
          },
          {
            etapa: 'Notițe: pronumele personal',
            timp: '8 min',
            activitate: '– În caiete, după Repere și schema lecției: pronumele (înlocuiește un substantiv); pronumele personal: persoana I, a II-a, a III-a (vorbitorul, ascultătorul, cel despre care se vorbește), numărul, genul numai la persoana a III-a.\n– Formele accentuate și neaccentuate, cu exemple (mine – mă, mie – îmi, mi); pronunțarea lui eu, el, ei, ele cu ĭe și a lui ea cu ĭa.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '4 min',
            activitate: '– „Aplicații”, p. 127, ex. 1, frontal: pronumele personale din textul despre Marie Curie.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (pronumele potrivit), ex. 2 (fișa pronumelui) și ex. 3 (accentuat sau neaccentuat?), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Pronumele personal”, frontal; notez ce greșesc mai mulți elevi, pentru ora următoare.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 2 (persoana și numărul pronumelor, a-f); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-11/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Pronumele personal',
          pasi: [
            {
              intrebare: 'La ce folosește pronumele personal?',
              variante: [
                {
                  text: 'Înlocuiește un substantiv, ca să nu îl repetăm de fiecare dată',
                  corect: true,
                  explicatie: 'Tezeu a plecat. El a ajuns în Creta.',
                },
                {
                  text: 'Denumește o ființă sau un lucru',
                  corect: false,
                  explicatie: 'Aceea e treaba substantivului.',
                },
                {
                  text: 'Arată acțiunea',
                  corect: false,
                  explicatie: 'Aceea e treaba verbului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 126',
            },
            {
              intrebare: 'Care sunt formele pronumelui personal la persoana a III-a singular?',
              variante: [
                {
                  text: 'el, ea',
                  corect: true,
                  explicatie: 'Persoana a III-a are formă separată pentru masculin și feminin.',
                },
                {
                  text: 'eu, tu',
                  corect: false,
                  explicatie: 'Acelea sunt persoana I și a II-a singular.',
                },
                {
                  text: 'noi, voi',
                  corect: false,
                  explicatie: 'Acelea sunt persoana I și a II-a plural.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 126',
            },
            {
              intrebare: 'În „Ariadna i-a dat un ghem”, ce înlocuiește pronumele „i-”?',
              variante: [
                {
                  text: 'Pe Tezeu, cel căruia i se dă ghemul',
                  corect: true,
                  explicatie: 'Pronumele preia rolul substantivului deja cunoscut din context.',
                },
                {
                  text: 'Ghemul',
                  corect: false,
                  explicatie: 'Ghemul e obiectul dat, exprimat direct.',
                },
                {
                  text: 'Pe Ariadna',
                  corect: false,
                  explicatie: 'Ariadna e cea care dă, adică subiectul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 126',
            },
            {
              intrebare: 'De ce e greșit un text în care se repetă mereu același nume?',
              variante: [
                {
                  text: 'Devine greoi la citit; pronumele face textul mai curgător',
                  corect: true,
                  explicatie: 'Repetiția supărătoare e o greșeală de exprimare, nu de gramatică.',
                },
                {
                  text: 'Nu e greșit deloc',
                  corect: false,
                  explicatie: 'E o greșeală de stil, sancționată la redactare.',
                },
                {
                  text: 'Pentru că numele proprii nu se scriu de mai multe ori',
                  corect: false,
                  explicatie: 'Se pot scrie de mai multe ori, doar nu în fiecare propoziție.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 126',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-11/schema.svg', titlu: 'Pronumele. Pronumele personal' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Pronumele. Pronumele personal (II)',
      obiective: [
        'Identifică pronumele personale și compară mesajele de tip SMS cu norma limbii române standard.',
      ],
      sursaManual: 'Art 5, Lecția 11, p. 127, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele. Pronumele personal (II)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică pronumele personale și compară mesajele de tip SMS cu norma limbii române standard.',
        ],
        resurse: [
          'Manual Art 5, p. 127',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-12/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-12/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '5 min',
            activitate: '– Ex. 2 (persoana și numărul), frontal; lămuresc greșelile frecvente de la quiz.',
          },
          {
            etapa: 'Aplicații, ex. 3-4',
            timp: '8 min',
            activitate: '– Ex. 3: completăm oral propozițiile a-f cu pronume personale potrivite.\n– Ex. 4, joc: ce parte de vorbire este cuvântul colorat; câștigă cine termină primul corect. Discutăm omonimele: mine (pronume) – mine (substantiv), -i (pronume) – -i (verb).',
          },
          {
            etapa: 'Pastila de ortografie',
            timp: '8 min',
            activitate: '– Ex. 5: câte o propoziție cu nu-l, n-o, nu-i, ce-l, scrisă de elevi la tablă.\n– Ex. 6: forma corectă (mi-au / miau, l-a / la, i-a / ia, ne-a / nea), cu explicația: pronume + verb, cu cratimă.\n– În caiete: tabelul ortogramelor, cu câte un exemplu.',
          },
          {
            etapa: 'Analiza după model',
            timp: '6 min',
            activitate: '– Ex. 7: copiem modelul („ei” – pronume personal, persoana a III-a, numărul plural, genul masculin, forma accentuată) și analizăm frontal două pronume din propoziția a.',
          },
          {
            etapa: 'Deschideri: SMS-ul',
            timp: '5 min',
            activitate: '– Citim SMS-ul din manual și îl corectăm la tablă; de ce apar asemenea greșeli în mesaje?\n– Fișa lecției: elevii rescriu în limba standard mesajele de tip SMS și subliniază pronumele personale (termină acasă, dacă e nevoie).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (analiza pronumelor) și ex. 2 (ortograme), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Aplicații”, ex. 7 (toate pronumele, după model); fișa lecției, terminată; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-12/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-4/lectia-12/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-4/lectia-12/schema.svg',
          titlu: 'Din SMS în limba română corectă',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Pronumele personal de politețe',
      obiective: [
        'Recunoaște pronumele personale de politețe și formulele reverențioase și le folosește în situații de comunicare adecvate.',
      ],
      sursaManual: 'Art 5, Lecția 12, pp. 128-129',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele personal de politețe',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște pronumele personale de politețe și formulele reverențioase și le folosește în situații de comunicare adecvate.',
        ],
        resurse: [
          'Manual Art 5, pp. 128-129',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-13/fisa-exercitii.pdf)',
          'Schema „Pronumele personal de politețe” (/materiale/clasa-5/unitatea-4/lectia-13/schema.svg)',
          'Quizul „Pronumele de politețe” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Cum vă adresați unui coleg, bunicului, doamnei directoare? Notez pe tablă formulele spuse de elevi și observăm diferențele.',
          },
          {
            etapa: 'Explorare, ex. 1-4',
            timp: '9 min',
            activitate: '– Ex. 1-2: ce arată cuvintele colorate din discuție, persoana și numărul lor, care au forme diferite după gen.\n– Ex. 3: ce exprimă grupurile de cuvinte din știrea de ziar și din adresa de pe plic.\n– Ex. 4, normă și abatere: corectăm scrierea formulelor reverențioase.',
          },
          {
            etapa: 'Notițe: pronumele de politețe',
            timp: '8 min',
            activitate: '– În caiete, după Repere și schema lecției: tabelul formelor (persoana a II-a: dumneata, dumitale, dumneavoastră; persoana a III-a: dumnealui, dumneaei, dumnealor; dânsul, dânsa...), cu prescurtările.\n– Formulele reverențioase (Majestatea Voastră, Excelența Sa), cu majusculă la fiecare cuvânt; variantele familiare (mata, matale); dumneavoastră cere verbul la plural.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '7 min',
            activitate: '– Ex. 1-2: în știrea despre Adrian Marte, pronumele de politețe, formulele reverențioase și pronumele personale.\n– Ex. 3: asociem persoanele cu formulele reverențioase (prinț, patriarh, înalt funcționar, preot, voievod, papă).',
          },
          {
            etapa: 'Joc de rol: interviul',
            timp: '5 min',
            activitate: '– Ex. 7: un elev e jurnalist, altul ambasador; interviu de trei-patru întrebări. Clasa notează pronumele de politețe folosite și verifică acordul verbului.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (pronumele potrivit), ex. 2 (pe scurt) și ex. 3 (formula de adresare directă), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz și temă',
            timp: '5 min',
            activitate: '– Quizul „Pronumele de politețe”, frontal.\n– Tema: „Aplicații”, ex. 4 (adevărat sau fals), 5 (analiza după model) și 6 (prescurtările); „Portofoliu”: invitația către primar; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea jocului de rol; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-13/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Pronumele de politețe',
          pasi: [
            {
              intrebare: 'Când folosești pronumele de politețe?',
              variante: [
                {
                  text: 'Când te adresezi unei persoane necunoscute, mai în vârstă, sau într-o situație oficială',
                  corect: true,
                  explicatie: 'Politețea se potrivește contextului, nu se folosește peste tot.',
                },
                {
                  text: 'Întotdeauna, cu oricine',
                  corect: false,
                  explicatie: 'Cu prietenii ar suna ciudat și distant.',
                },
                {
                  text: 'Niciodată, e demodat',
                  corect: false,
                  explicatie: 'E o normă vie a limbii române, cerută în multe situații.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 128-129',
            },
            {
              intrebare: 'Care e forma de politețe pentru persoana a II-a singular?',
              variante: [
                {
                  text: 'dumneata sau dumneavoastră',
                  corect: true,
                  explicatie: '„Dumneavoastră” e mai respectuos decât „dumneata”.',
                },
                {
                  text: 'tu',
                  corect: false,
                  explicatie: '„Tu” e forma familiară, nu de politețe.',
                },
                {
                  text: 'el',
                  corect: false,
                  explicatie: 'E persoana a III-a, nu a II-a.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 128-129',
            },
            {
              intrebare: 'Cu ce formă a verbului se acordă „dumneavoastră”?',
              variante: [
                {
                  text: 'Cu persoana a II-a plural: dumneavoastră sunteți, dumneavoastră ați spus',
                  corect: true,
                  explicatie: 'Chiar dacă te adresezi unei singure persoane, verbul stă la plural.',
                },
                {
                  text: 'Cu persoana a II-a singular: dumneavoastră ești',
                  corect: false,
                  explicatie: 'E greșeala cea mai frecventă la această formă.',
                },
                {
                  text: 'Cu persoana a III-a: dumneavoastră este',
                  corect: false,
                  explicatie: 'Persoana a III-a s-ar folosi pentru „dumnealui” sau „dumneaei”.',
                },
              ],
              indiciu: 'Gândește-te: dumneavoastră sunteți sau dumneavoastră ești?',
              sursa: 'Manual Art 5, pp. 128-129',
            },
            {
              intrebare: 'Care variantă e corectă într-o cerere către director?',
              variante: [
                {
                  text: 'Vă rog să îmi aprobați cererea.',
                  corect: true,
                  explicatie: 'Formula de politețe potrivită unei situații oficiale.',
                },
                {
                  text: 'Te rog să îmi aprobi cererea.',
                  corect: false,
                  explicatie: 'Adresarea familiară nu se potrivește într-un context oficial.',
                },
                {
                  text: 'Dumneavoastră aprobi cererea mea.',
                  corect: false,
                  explicatie: 'Acordul e greșit; corect ar fi „aprobați”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 128-129',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-13/schema.svg', titlu: 'Pronumele personal de politețe' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Adjectivul. Articolul demonstrativ',
      obiective: [
        'Reactualizează categoriile gramaticale ale adjectivului, acordul cu substantivul și rolul articolului demonstrativ.',
      ],
      sursaManual: 'Art 5, Lecția 13, pp. 130-131',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Adjectivul. Articolul demonstrativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează categoriile gramaticale ale adjectivului, acordul cu substantivul și rolul articolului demonstrativ.',
        ],
        resurse: [
          'Manual Art 5, pp. 130-131',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-14/fisa-exercitii.pdf)',
          'Schema „Adjectivul. Articolul demonstrativ” (/materiale/clasa-5/unitatea-4/lectia-14/schema.svg)',
          'Quizul „Adjectivul și articolul demonstrativ” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Joc: Supergirl este o fată...',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 130: grupe de câte patru; în două minute, cât mai multe adjective pentru „Supergirl este o fată...”. Grupa câștigătoare își citește lista.',
          },
          {
            etapa: 'Explorare, ex. 1-9',
            timp: '12 min',
            activitate: '– Ex. 1-3: adjectivele din textul despre Spiderman, substantivele determinate, genul și numărul lor: ce observăm?\n– Ex. 4: desinențele (curajos, curajoasă, curajoși, curajoase); ex. 5: adjectivul gri nu își schimbă forma.\n– Ex. 6: din ce provine adjectivul desenat; ex. 7: ce se întâmplă cu uriaș pus înaintea substantivului; ex. 8: ce parte de propoziție sunt adjectivele.\n– Ex. 9, normă și abatere: zglobiii copii / copiii zglobii.',
          },
          {
            etapa: 'Notițe: adjectivul',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: definiția; adjective propriu-zise și provenite din verb la participiu; desinența; variabile și invariabile; acordul în gen și număr; locul adjectivului (înaintea substantivului preia articolul hotărât); funcția de atribut.',
          },
          {
            etapa: 'Articolul demonstrativ',
            timp: '5 min',
            activitate: '– „Explorare”, p. 131: pelerina cea roșie, băiatul cel mic: între ce părți de vorbire stau cuvintele colorate și ce rol au.\n– În caiete, după Repere: tabelul formelor (cel, celui, cei, celor; cea, celei, cele, celor) și acordul cu substantivul.',
          },
          {
            etapa: 'Aplicații, ex. 1, 2 și 5',
            timp: '6 min',
            activitate: '– Ex. 1: dictez propoziția despre penar; elevii subliniază cu o linie adjectivele propriu-zise, cu două pe cele provenite din verb.\n– Ex. 2: seria cu adjective numai variabile; ex. 5: articolele demonstrative din versurile lui Eminescu.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (acordul adjectivului), ex. 2 (variabil sau invariabil?) și ex. 3 (adjectivul trece în față), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz și temă',
            timp: '5 min',
            activitate: '– Quizul „Adjectivul și articolul demonstrativ”, frontal.\n– Tema: „Aplicații”, ex. 3, 4, 6 și 7 (analiza după model); „Deschideri”: 8-10 adjective acordate greșit în presă sau online, cu sursa; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-14/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Adjectivul și articolul demonstrativ',
          pasi: [
            {
              intrebare: 'Cu ce se acordă adjectivul?',
              variante: [
                {
                  text: 'Cu substantivul pe care îl determină, în gen și număr',
                  corect: true,
                  explicatie: 'Erou curajos, eroi curajoși, eroină curajoasă.',
                },
                {
                  text: 'Cu verbul din propoziție',
                  corect: false,
                  explicatie: 'Verbul se acordă cu subiectul, nu cu adjectivul.',
                },
                {
                  text: 'Cu nimic, are formă fixă',
                  corect: false,
                  explicatie: 'Majoritatea adjectivelor își schimbă forma.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 130-131',
            },
            {
              intrebare: 'Care variantă e corect acordată?',
              variante: [
                {
                  text: 'niște fete curajoase',
                  corect: true,
                  explicatie: 'Feminin plural cere adjectiv la feminin plural.',
                },
                {
                  text: 'niște fete curajoși',
                  corect: false,
                  explicatie: '„Curajoși” e masculin plural.',
                },
                {
                  text: 'niște fete curajoasă',
                  corect: false,
                  explicatie: '„Curajoasă” e feminin singular.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 130-131',
            },
            {
              intrebare: 'Ce face articolul demonstrativ „cel”, „cea”?',
              variante: [
                {
                  text: 'Leagă adjectivul de substantiv și îl scoate în evidență: eroul cel curajos',
                  corect: true,
                  explicatie: 'Se mai numește și articol adjectival, tocmai pentru că însoțește adjectivul.',
                },
                {
                  text: 'Arată că substantivul e la plural',
                  corect: false,
                  explicatie: 'Numărul e altă categorie.',
                },
                {
                  text: 'Înlocuiește substantivul',
                  corect: false,
                  explicatie: 'Aceea e treaba pronumelui.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 130-131',
            },
            {
              intrebare: 'În „fata cea frumoasă”, care e adjectivul?',
              variante: [
                {
                  text: 'frumoasă',
                  corect: true,
                  explicatie: '„Cea” e articolul demonstrativ, nu adjectivul.',
                },
                {
                  text: 'cea',
                  corect: false,
                  explicatie: '„Cea” doar leagă; adjectivul e cel care exprimă însușirea.',
                },
                {
                  text: 'fata',
                  corect: false,
                  explicatie: '„Fata” e substantivul determinat.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 130-131',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-14/schema.svg', titlu: 'Adjectivul. Articolul demonstrativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Gradele de comparație ale adjectivului',
      obiective: [
        'Recunoaște gradele de comparație ale adjectivului și adjectivele care nu au grade de comparație.',
      ],
      sursaManual: 'Art 5, Lecția 14, pp. 132-133',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Gradele de comparație ale adjectivului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște gradele de comparație ale adjectivului și adjectivele care nu au grade de comparație.',
        ],
        resurse: [
          'Manual Art 5, pp. 132-133',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-15/fisa-exercitii.pdf)',
          'Schema „Gradele de comparație ale adjectivului” (/materiale/clasa-5/unitatea-4/lectia-15/schema.svg)',
          'Quizul „Gradele de comparație ale adjectivului” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Explorare, ex. 1-6',
            timp: '10 min',
            activitate: '– Ex. 1-3: dialogul copiilor despre costumele de supereroi: ce compară, formele de egalitate și de inegalitate, gradul superior și inferior.\n– Ex. 4-5: cuierul cu pelerine (cea mai lungă; aproape la fel de lungă).\n– Ex. 6, normă și abatere: de ce sunt greșite „foarte superbă” și „cea mai perfectă”?',
          },
          {
            etapa: 'Notițe: gradele de comparație',
            timp: '10 min',
            activitate: '– În caiete, după Repere și schema lecției, un tabel cu adjectivul curajos: pozitivul; comparativul de superioritate, de egalitate, de inferioritate; superlativul relativ (de superioritate și de inferioritate) și absolut (de superioritate și de inferioritate), cu cuvintele ajutătoare.\n– Adjective fără grade: cele care erau comparative sau superlative în latină (superior, optim, superb), cele cu însușire care nu se poate modifica (unic, complet, principal), cele al căror sens nu permite comparația (acvatic, bucureștean).',
          },
          {
            etapa: 'Deschideri: de la superlativ la comparație',
            timp: '4 min',
            activitate: '– Transformăm oral, după model, „ochi foarte albaștri” și „un băiat foarte curajos” în comparații.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (toate gradele) și ex. 2 (recunoaște gradul), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Gradele de comparație ale adjectivului”, frontal.',
          },
          {
            etapa: 'Autoevaluare L11-L14',
            timp: '4 min',
            activitate: '– P. 133: elevii completează în caiet cele trei afirmații (cel mai important, cel mai plăcut, cel mai dificil); citim câteva.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: minitestul de la p. 133, ex. 1-5; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; autoevaluarea; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-15/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Gradele de comparație ale adjectivului',
          pasi: [
            {
              intrebare: 'Ce grad de comparație are adjectivul din „Tezeu era curajos”?',
              variante: [
                {
                  text: 'Pozitiv: însușirea, fără nicio comparație',
                  corect: true,
                  explicatie: 'E forma de bază a adjectivului.',
                },
                {
                  text: 'Comparativ',
                  corect: false,
                  explicatie: 'Comparativul ar suna „mai curajos” sau „la fel de curajos”.',
                },
                {
                  text: 'Superlativ',
                  corect: false,
                  explicatie: 'Superlativul ar suna „foarte curajos” sau „cel mai curajos”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 132-133',
            },
            {
              intrebare: 'Ce grad exprimă „cel mai curajos dintre toți”?',
              variante: [
                {
                  text: 'Superlativ relativ: îl compară cu întregul grup',
                  corect: true,
                  explicatie: 'Relativ, fiindcă se raportează la ceilalți.',
                },
                {
                  text: 'Superlativ absolut',
                  corect: false,
                  explicatie: 'Absolutul ar fi „foarte curajos”, fără comparație cu alții.',
                },
                {
                  text: 'Comparativ de superioritate',
                  corect: false,
                  explicatie: 'Acela ar fi „mai curajos decât”.',
                },
              ],
              indiciu: 'Îl compari cu o singură persoană sau cu tot grupul?',
              sursa: 'Manual Art 5, pp. 132-133',
            },
            {
              intrebare: 'Care sunt cele trei feluri de comparativ?',
              variante: [
                {
                  text: 'De superioritate: mai. De egalitate: la fel de. De inferioritate: mai puțin.',
                  corect: true,
                  explicatie: 'Toate trei compară doi termeni între ei.',
                },
                {
                  text: 'Pozitiv, relativ, absolut',
                  corect: false,
                  explicatie: 'Pozitivul e alt grad; relativ și absolut sunt feluri de superlativ.',
                },
                {
                  text: 'Masculin, feminin, neutru',
                  corect: false,
                  explicatie: 'Acelea sunt genuri, nu grade.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 132-133',
            },
            {
              intrebare: 'Care adjectiv NU are grade de comparație?',
              variante: [
                {
                  text: 'principal',
                  corect: true,
                  explicatie: 'Ceva e principal sau nu; nu poate fi „mai principal”.',
                },
                {
                  text: 'frumos',
                  corect: false,
                  explicatie: 'Are toate gradele: mai frumos, cel mai frumos.',
                },
                {
                  text: 'curajos',
                  corect: false,
                  explicatie: 'Are toate gradele.',
                },
              ],
              indiciu: 'Încearcă să spui „mai...”. Dacă sună imposibil, adjectivul nu are grade.',
              sursa: 'Manual Art 5, pp. 132-133',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-15/schema.svg', titlu: 'Gradele de comparație ale adjectivului' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Descrierea unei persoane. Autoportretul (I), pregătire',
      obiective: [
        'Analizează autoportrete vizuale și texte de tip autoportret, identificând trăsăturile fizice și morale ale unei persoane.',
      ],
      sursaManual: 'Art 5, Lecția 15, p. 134, partea 1/2 (Descrierea unei persoane. Autoportretul, pregătire)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Descrierea unei persoane. Autoportretul (I), pregătire',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Analizează autoportrete vizuale și texte de tip autoportret, identificând trăsăturile fizice și morale ale unei persoane.',
        ],
        resurse: [
          'Manual Art 5, p. 134',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-16/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-16/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 134, ex. 1: prin ce putem transmite informații despre noi (fotografie, profil, desen, text)?\n– Ex. 2: sensul cuvântului autoportret (auto- „de sine” + portret).',
          },
          {
            etapa: 'Autoportretele pictate',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1: cele două picturi; elevii le prezintă după reperele din manual: portretul fizic (culori, forme, dimensiuni), semnele unei pasiuni, starea exprimată de chip, culoarea dominantă, trăsăturile care reies.\n– Ex. 2: care autoportret vă place mai mult? Trei-patru opinii motivate.',
          },
          {
            etapa: 'Autoportretele scrise',
            timp: '10 min',
            activitate: '– Ex. 3: citim autoportretul Laurei (în versuri) și pe al lui Luca (în proză).\n– Ex. 4, în caiete: persoana la care sunt scrise, stilul, tipul informațiilor, trăsăturile celor doi copii.\n– Ex. 5: pe care dintre ei l-ai alege prieten și de ce?',
          },
          {
            etapa: 'Notițe: portretul și autoportretul',
            timp: '4 min',
            activitate: '– În caiete, după Repere: portretul (elemente fizice și morale, trăsături care particularizează); autoportretul (portretul pe care și-l face cineva singur, la persoana I).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (fizic sau moral?), ex. 2 (portret sau autoportret?) și ex. 3 (autoportretul în obiecte), individual, 10 minute.\n– Verificare, 5 minute; la ex. 3, trei elevi își prezintă obiectele.',
          },
          {
            etapa: 'Bilet de ieșire și temă',
            timp: '7 min',
            activitate: '– Bilet de ieșire: o trăsătură după care ar vrea să-i recunoască, din autoportret, colegii.\n– Tema: pe fișa lecției, lista cu tot ce te definește și restrângerea ei la cinci aspecte („Aplicații”, p. 135, ex. 1-2); fișa de exerciții, pagina 2. Explic cum se face lista: aspect fizic, pasiuni, obiceiuri, calități, defecte, un lucru pe care colegii nu-l știu.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; biletele de ieșire; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-16/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-4/lectia-16/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-4/lectia-16/schema.svg',
          titlu: 'Cum îmi fac autoportretul',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Redactarea autoportretului (II)',
      obiective: [
        'Redactează propriul autoportret, cu respectarea etapelor scrierii.',
      ],
      sursaManual: 'Art 5, Lecția 15, p. 135, partea 2/2 (Redactarea autoportretului)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Redactarea autoportretului (II)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează propriul autoportret, cu respectarea etapelor scrierii.',
        ],
        resurse: [
          'Manual Art 5, p. 135',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-17/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-17/fisa.pdf)',
          'Lista de trăsături realizată la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea listei',
            timp: '4 min',
            activitate: '– Trei-patru elevi citesc cele cinci aspecte alese (ex. 2); verificăm să apară și trăsături fizice, și morale.',
          },
          {
            etapa: 'Planul',
            timp: '5 min',
            activitate: '– Ex. 3: fiecare completează planul din fișa de exerciții (ex. 1): ordinea celor cinci aspecte și un detaliu concret pentru fiecare.',
          },
          {
            etapa: 'Revizuirea, pe un model',
            timp: '6 min',
            activitate: '– Fișa de exerciții, ex. 2: citim paragraful Marei și stabilim frontal ce trebuie corectat (repetițiile, greșeala de scriere); elevii îl rescriu.',
          },
          {
            etapa: 'Ciorna',
            timp: '17 min',
            activitate: '– Ex. 4: fiecare scrie în caiet prima variantă a autoportretului, după plan, cu un paragraf pentru fiecare aspect; se lucrează pe fișa lecției (cerința, ciorna).\n– Trec pe la bănci și ajut la introducere și la arătarea trăsăturilor prin fapte.',
          },
          {
            etapa: 'Revizuirea în perechi',
            timp: '10 min',
            activitate: '– Ex. 5 și ex. 8: fiecare își verifică textul cu lista de control din fișa de exerciții (ex. 3, coloana „Eu”), apoi schimbă caietul cu colegul, care completează coloana „Colegul” și îi face o sugestie.',
          },
          {
            etapa: 'Încheierea',
            timp: '4 min',
            activitate: '– Fișa de exerciții, ex. 4: fiecare scrie două încheieri posibile și o alege pe cea mai potrivită; doi elevi le citesc.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Portofoliu”, varianta finală pe o coală albă, cu paragrafe, scris lizibil, cu fotografie sau desen (ex. 6).\n– Afișăm autoportretele în clasă; turul galeriei (ex. 7) se face când le aduc toți elevii.',
          },
        ],
        evaluare: 'Lista de control (autoevaluare și evaluare reciprocă); observarea redactării; autoportretul final, în portofoliu.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-17/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-4/lectia-17/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea IV: personajele, semnificațiile textului, actele de limbaj.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 136-137, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea IV: personajele, semnificațiile textului, actele de limbaj.',
        ],
        resurse: [
          'Manual Art 5, pp. 136-137',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-18/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: '– Ciorchine pe tablă: fiecare elev numește o noțiune de lectură sau de comunicare din unitate (legendă, erou, comparație, bandă desenată, act de limbaj...).',
          },
          {
            etapa: 'Lectura textului',
            timp: '6 min',
            activitate: '– Ex. 1, p. 136: citesc fragmentul din „Legendele Olimpului” de Alexandru Mitru, lupta lui Heracle cu leul din Nemeea.',
          },
          {
            etapa: 'Ex. 2-4',
            timp: '7 min',
            activitate: '– Ex. 2, frontal: personajele, evenimentul, locul, de ce nu putea fi ucis leul.\n– Ex. 3-4: ordinea imaginilor din banda desenată și câte o propoziție pentru fiecare vinietă.',
          },
          {
            etapa: 'Cadranele',
            timp: '8 min',
            activitate: '– Ex. 5: grupe de câte patru; pe o coală, cele patru cadrane (descrierea leului, armele lui Heracle, calitățile lui, ce i-a impresionat).\n– Două grupe își prezintă planșa.',
          },
          {
            etapa: 'Ex. 6-11',
            timp: '6 min',
            activitate: '– Frontal: de ce se sperie leul tocmai când Heracle rămâne fără arme; ce puteri au amândoi; de ce nu se știe cât a durat lupta; în ce transformă Heracle pielea leului; o comparație din text; un supererou care seamănă cu Heracle.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-3 pe legenda „Perseu și Meduza” (text nou, repovestit pentru fișă), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, lectură și comunicare”; notez noțiunile care trebuie reluate înainte de evaluare.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 18 (dialogul cu Heracle, felicitarea cu pronume de politețe), scris în caiet; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Planșele grupelor; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-18/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce act de limbaj realizezi când ceri cuiva ajutorul, politicos?',
              variante: [
                { text: 'o solicitare', corect: true, explicatie: 'Cererea de ajutor, formulată politicos, e o solicitare.' },
                { text: 'o felicitare', corect: false, explicatie: 'Felicitarea exprimă apreciere, nu o cerere.' },
                { text: 'o interzicere', corect: false, explicatie: 'Interzicerea ar opri pe cineva de la o acțiune, nu ar cere ajutor.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 10, p. 124',
            },
            {
              intrebare: 'Ce arată un text multimodal, precum banda desenată?',
              variante: [
                { text: 'Informația combinată prin imagine și text, împreună', corect: true, explicatie: 'Banda desenată combină imaginile cu textul (replici, descrieri) pentru a construi sensul.' },
                { text: 'Doar text, fără nicio imagine', corect: false, explicatie: 'Un text multimodal folosește mai multe moduri de exprimare, nu doar text.' },
                { text: 'Doar imagini, fără niciun cuvânt', corect: false, explicatie: 'Banda desenată combină ambele, nu exclude textul.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 6, p. 116',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-4/lectia-18/schema.svg',
          titlu: 'Ce am învățat despre eroi și despre texte',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea IV: pronumele personal, adjectivul, gradele de comparație.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 136-137, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea IV: pronumele personal, adjectivul, gradele de comparație.',
        ],
        resurse: [
          'Manual Art 5, pp. 136-137',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-19/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Două-trei felicitări pentru Heracle (ex. 18); clasa verifică pronumele de politețe și acordul verbului.',
          },
          {
            etapa: 'Ex. 12-13',
            timp: '7 min',
            activitate: '– Ex. 12: persoana, numărul, genul și forma pronumelor personale din cele două fragmente, la tablă.\n– Ex. 13: adjectivele care descriu ochii leului și felul lor.',
          },
          {
            etapa: 'Ex. 14-17',
            timp: '6 min',
            activitate: '– Ex. 14: ce fel de adjectiv este „aprinse”; ex. 15: adjectivul fără grad de comparație de la începutul textului.\n– Ex. 16: „puternic” la toate gradele, la tablă; ex. 17: articolele demonstrative potrivite.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (pronumele), ex. 2 (adjectivele) și ex. 3 (adjectivul „iute”), individual, 11 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Pregătirea compunerii',
            timp: '10 min',
            activitate: '– Ex. 19: completăm în caiete schema despre Heracle (numele dat de romani, nașterea, însușirile fizice și morale, lupta cu leul, platoșa și coiful).\n– Citim cerințele de redactare (conținut, introducere-cuprins-încheiere, paragrafe, corectitudine, aspect); fiecare scrie introducerea.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 19, compunerea de 10-12 rânduri despre Heracle; fișa de exerciții, pagina 2.\n– Anunț evaluarea: lectura unui text nou, pronumele personal și de politețe, adjectivul și gradele de comparație, comparația, descrierea unei persoane.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3; schema compunerii.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-4/lectia-19/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Adjectivul se acordă cu substantivul determinat în...',
              variante: [
                { text: 'gen și număr', corect: true, explicatie: 'Adjectivul își schimbă forma după genul și numărul substantivului pe care îl însoțește.' },
                { text: 'persoană și timp', corect: false, explicatie: 'Persoana și timpul sunt categorii ale verbului, nu ale adjectivului.' },
                { text: 'caz, mereu la fel ca substantivul', corect: false, explicatie: 'La clasa a V-a, adjectivul se recapitulează prin acordul de gen și număr, nu prin caz.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 13, p. 130',
            },
            {
              intrebare: 'Ce grad de comparație exprimă „cel mai curajos”?',
              variante: [
                { text: 'superlativ relativ', corect: true, explicatie: 'Superlativul relativ compară un element cu întreg grupul din care face parte.' },
                { text: 'comparativ de egalitate', corect: false, explicatie: 'Comparativul de egalitate ar suna „la fel de curajos”.' },
                { text: 'pozitiv', corect: false, explicatie: 'Pozitivul e forma simplă, fără comparație: „curajos”.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 14, p. 132',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-4/lectia-19/schema.svg',
          titlu: 'Pronumele și adjectivul, tot la un loc',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea IV.',
      ],
      sursaManual: 'Art 5, Evaluare, p. 138',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea IV.',
        ],
        resurse: [
          'Testul tipărit, Manual Art 5, p. 138',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testele (fragmentul din „Metamorfozele” lui Ovidiu, în repovestirea lui Grigore Tănăsescu) și foile de răspuns.\n– Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: pronume, formula reverențioasă, adjective, grade de comparație, personajul, comparația, descrierea, semnificația); B, 30 de puncte (descrierea unui prieten, 10-15 rânduri); 10 puncte din oficiu.\n– Recomand: circa 25 de minute pentru A, 15 minute pentru B, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual, pe foaia separată; supraveghez discret.\n– Anunț timpul rămas la 20 de minute și la 5 minute înainte de final; le reamintesc să treacă la subiectul B dacă au rămas blocați la un item.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii își recitesc lucrarea (ortografie, punctuație, paragrafe), apoi strâng foile.\n– Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.',
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
