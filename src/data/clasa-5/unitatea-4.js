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
          'Manual Art 5, p. 108',
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
            activitate: 'Îi întreb pe elevi ce eroi din mituri și legende cunosc și ce faptă i-a făcut celebri.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim legenda Tezeu și Minotaurul de Florin Bican și desprindem informațiile esențiale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintesc, de la textele narative din unitățile anterioare, ce înseamnă informație esențială și fir al acțiunii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc textul cu voce tare împreună cu elevii, clarific numele și termenii din mitologie și urmărim firul întâmplărilor, cu exemplele de la p. 108.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează în caiet cine, unde, când și ce se întâmplă în legendă și citește răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea informațiilor esențiale notate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Timp, spațiu și acțiune” (/materiale/clasa-5/unitatea-4/lectia-2/schema.svg)',
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
            activitate: 'Îi întreb pe elevi în ce lume și în ce timp se petrece legenda, unul apropiat de noi sau unul îndepărtat.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi identificăm reperele de timp și de spațiu ale acțiunii și vedem cum e construit textul narativ.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm reperele temporale și spațiale și momentele acțiunii, lucrate în Unitatea II.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției identificăm timpul, spațiul și momentele acțiunii și discutăm particularitățile de construcție a legendei, cu exemplele de la pp. 110-111.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează în caiet o axă a timpului cu momentele acțiunii, în ordine.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea axei timpului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-2/schema.svg', titlu: 'Timp, spațiu și acțiune' },
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
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-3/fisa.pdf)',
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
            activitate: 'Le cer elevilor să spună într-un cuvânt cum e Tezeu și cum e Minotaurul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi descriem personajele după trăsăturile lor fizice și morale și vedem ce model de purtare propune legenda.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm, de la Vizită... din Unitatea II, cum deosebim o trăsătură fizică de una morală și cum o dovedim cu fapte din text.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției identificăm trăsăturile personajelor, căutăm faptele și vorbele care le dovedesc și discutăm modelul eroic, cu exemplele de la pp. 112-113.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează o fișă de caracterizare cu trei trăsături ale unui personaj și dovada din text pentru fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea fișei de caracterizare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-3/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-4/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce valori arată Tezeu prin fapta lui și dacă sunt valori apreciate și azi.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm ce ne transmite legenda dincolo de întâmplări și ne formulăm o părere despre valorile ei.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile personajelor și modelul eroic stabilite ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției ghidez discuția despre semnificația textului și despre valorile recunoscute social și cultural, cerând argumente din text, cu exemplele de la p. 114.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev scrie o opinie de trei sau patru rânduri despre mesajul legendei, sprijinită pe un detaliu din text.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea opiniei scrise și a argumentului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-4/fisa.pdf' },
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
          'Schema „Comparația” (/materiale/clasa-5/unitatea-4/lectia-5/schema.svg)',
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
            activitate: 'Le dau exemple ca „curajos ca un leu” și îi întreb pe elevi ce fac aceste alăturări de cuvinte.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm figura de stil comparația și exersăm citirea informației dintr-un text însoțit de imagine.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm personificarea din Unitatea III, ca figură de stil deja cunoscută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției definim comparația și termenii ei, o căutăm în text și în imagine și desprindem informațiile prin lectură ghidată, cu exemplele de la p. 115.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev identifică două comparații din text, marchează termenii fiecăreia și formulează două comparații proprii.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului despre comparație.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Infograficul „Textul multimodal. Banda desenată” (/materiale/clasa-5/unitatea-4/lectia-6/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi ce benzi desenate sau romane grafice au citit și ce le place la felul cum e spusă povestea.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vedem cum se combină imaginea și textul într-o bandă desenată și căutăm comparațiile din ea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm comparația învățată ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul infograficului identificăm componentele textului multimodal, cadru, bulă de dialog, onomatopee, unghi, și citim fragmentul din Hoțul fulgerului, marcând comparațiile, cu exemplele de la pp. 116-118.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev descrie în scris ce spune imaginea și ce spune textul într-un cadru la alegere și notează o comparație din bandă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea descrierii cadrului și a comparației.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-7/fisa.pdf)',
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
            activitate: 'Le arăt o instrucțiune de montaj sau o rețetă și îi întreb pe elevi la ce folosește un asemenea text.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi citim un text explicativ care spune cum se face ceva și învățăm să desprindem informația din el.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile textului nonliterar și modul imperativ, din Unitățile I și II.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției citim ghidat textul explicativ injonctiv, observăm pașii, verbele la imperativ și ordinea informației, cu exemplele de la p. 119.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev reordonează corect pașii amestecați ai unui text explicativ și subliniază verbele care dau instrucțiunea.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de reordonare a pașilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-7/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-8/fisa.pdf)',
          'Hartă a lumii sau atlas',
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
            activitate: 'Le spun pe scurt cine este Malala Yousafzai și îi întreb pe elevi de ce cred că dreptul la educație a fost pentru ea un act de curaj.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un fragment din Eu sunt Malala și îl interpretăm făcând legături cu istoria, geografia și religia.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm modelul eroic din legenda greacă, ca termen de comparație cu un erou din zilele noastre.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citim fragmentul, localizăm pe hartă regiunea, discutăm contextul istoric și cultural și interpretăm mesajul textului, cu ajutorul fișei lecției și al exemplelor de la pp. 120-121.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev scrie trei legături între text și istorie, geografie sau religie și o frază despre ce l-a impresionat.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea legăturilor interdisciplinare notate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-8/fisa.pdf' },
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
          'Infograficul „Modele comportamentale eroice” (/materiale/clasa-5/unitatea-4/lectia-9/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi cine e un erou pentru ei și ce trăsături i-ar da unui erou dintr-o poveste nouă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi comparăm modele de erou din culturi și epoci diferite și căutăm ce au în comun.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm modelul eroic din legenda greacă și figura Malalei, discutate în lecțiile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul infograficului comparăm eroi din mituri, folclor și istorie recentă, urmărind valorile și aspirațiile comune, cu exemplele de la pp. 122-123.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev completează un tabel cu doi eroi din culturi diferite și trei valori pe care le împărtășesc.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea tabelului comparativ.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Quizul „Acte de limbaj: a întreba, a solicita, a felicita” (materialul de joc al lecției)',
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
            activitate: 'Le spun trei enunțuri, o întrebare, o rugăminte și o felicitare, și îi întreb pe elevi ce fac de fapt cu fiecare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem și exersăm actele de limbaj a întreba, a solicita și a felicita.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm schimburile de replici politicoase și rolurile în comunicare, din Unitățile I și II.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu exemplele de la pp. 124-125 arăt formule potrivite pentru fiecare act de limbaj, apoi elevii extrag bilețele cu situații și formulează, în perechi, enunțul potrivit.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Câteva perechi joacă situația în fața clasei, apoi elevii rezolvă quizul „Acte de limbaj” și discutăm răspunsurile.',
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
          'Schema „Pronumele personal (I)” (/materiale/clasa-5/unitatea-4/lectia-11/schema.svg)',
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
            activitate: 'Le citesc un text în care se repetă mereu același nume și îi întreb pe elevi cum ar suna mai bine.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm ce știm despre pronume și învățăm să înlocuim corect substantivele cu pronume personale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm ce este pronumele și persoanele lui, noțiuni din ciclul primar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției reactualizez pronumele personal, formele lui după persoană și număr, și arăt cum înlocuiește un substantiv, cu exemplele de la p. 126.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev rescrie un text scurt înlocuind substantivele repetate cu pronume personale potrivite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea textului rescris cu pronume.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-5/unitatea-4/lectia-11/schema.svg', titlu: 'Pronumele personal (I)' },
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
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-12/fisa.pdf)',
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
            activitate: 'Le scriu pe tablă un mesaj scurt scris în stil SMS și îi întreb pe elevi ce ar corecta pentru un text de școală.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi identificăm pronumele personale în context și comparăm scrierea din mesaje rapide cu norma standard.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm formele pronumelui personal învățate ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul fișei lecției identificăm pronumele personale într-un text și comparăm formele prescurtate din SMS cu cele corecte, cu exemplele de la p. 127.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev transcrie în limba standard un mesaj scris în stil SMS și subliniază pronumele personale.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea transcrierii în limba standard.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-12/fisa.pdf' },
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
          'Schema „Pronumele personal de politețe” (/materiale/clasa-5/unitatea-4/lectia-13/schema.svg)',
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
            activitate: 'Îi întreb pe elevi cum i se adresează unui profesor și cum unui coleg și de ce diferă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm pronumele personale de politețe și formulele reverențioase și când se folosesc.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm pronumele personal și actele de limbaj politicoase, din lecțiile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției prezint formele dumneata, dumneavoastră, dumnealui și formulele reverențioase și discutăm situațiile în care le folosim, cu exemplele de la pp. 128-129.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev redactează două scurte mesaje, unul către un coleg și unul către un adult, folosind corect adresarea.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea celor două mesaje.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Adjectivul. Articolul demonstrativ” (/materiale/clasa-5/unitatea-4/lectia-14/schema.svg)',
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
            activitate: 'Le cer elevilor să descrie eroul preferat prin trei însușiri și scriu adjectivele pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm adjectivul, acordul lui cu substantivul, și învățăm rolul articolului demonstrativ, „cel”, „cea”.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm ce este adjectivul și cum se acordă cu substantivul, noțiuni din ciclul primar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției reactualizez genul, numărul și acordul adjectivului și arăt cum articolul demonstrativ leagă adjectivul de substantiv, cu exemplele de la pp. 130-131.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev acordă corect adjectivele dintr-un text lacunar și construiește două structuri cu articol demonstrativ.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de acord.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Gradele de comparație ale adjectivului” (/materiale/clasa-5/unitatea-4/lectia-15/schema.svg)',
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
            activitate: 'Compar oral doi elevi la înălțime, „mai înalt”, „cel mai înalt”, și îi întreb pe elevi ce am făcut cu adjectivul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm gradele de comparație ale adjectivului și care adjective nu au grade.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm adjectivul și acordul lui, din lecția precedentă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției prezint pozitivul, comparativul, cu cele trei feluri, și superlativul, relativ și absolut, și dau exemple de adjective fără grade, „veșnic”, „principal”, cu exemplele de la pp. 132-133.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev trece cinci adjective prin toate gradele de comparație și marchează două adjective care nu au grade.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului cu gradele de comparație.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-16/fisa.pdf)',
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
            activitate: 'Le arăt un autoportret pictat și îi întreb pe elevi ce trăsături ale artistului cred că se văd în el.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi pregătim redactarea propriului autoportret: analizăm modele și adunăm trăsăturile pe care le vom scrie.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm caracterizarea personajului și adjectivele cu grade de comparație, din unitate.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției analizăm autoportrete vizuale și texte de tip autoportret, separând trăsăturile fizice de cele morale, cu reperele de la p. 134.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev completează în fișă o listă cu trei trăsături fizice și trei morale proprii și un exemplu de faptă pentru fiecare trăsătură morală.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea listei de trăsături pentru autoportret.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-16/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-17/fisa.pdf)',
          'Lista de trăsături realizată la ora anterioară',
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
            activitate: 'Le cer elevilor să recitească lista de trăsături și să aleagă cu ce trăsătură vor începe autoportretul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem autoportretul pe baza listei și îl revizuim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm etapele scrierii și structura introducere-cuprins-încheiere.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei lecției arăt cum se leagă trăsăturile fizice și morale într-un text unitar și ce urmărim la revizuire, cu exemplele de la p. 135.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Fiecare elev redactează autoportretul pe baza listei, apoi îl schimbă cu colegul pentru o revizuire reciprocă după lista de control din fișă.',
          },
        ],
        evaluare: 'Grilă de autoevaluare din fișă; observarea sistematică a redactării și a revizuirii reciproce.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-4/lectia-17/fisa.pdf' },
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
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură sau de comunicare din unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm caracterizarea personajelor, semnificațiile textului, comparația, textul multimodal și actele de limbaj.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple din Tezeu și Minotaurul, cum caracterizăm un personaj, cum formulăm o semnificație și ce sunt actele de limbaj.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Rezolvăm ghidat exercițiile de lectură și comunicare de la pp. 136-137.',
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
            activitate: 'Le cer elevilor să numească pe rând o noțiune de gramatică din unitate și un exemplu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm pronumele personal, pronumele de politețe, adjectivul și gradele de comparație.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple la tablă, formele pronumelui personal și de politețe, acordul adjectivului și gradele de comparație.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de gramatică și redactare de la pp. 136-137.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '16 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi cei care termină exersează adresarea politicoasă și gradele de comparație într-un scurt text.',
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
            activitate: 'Anunț că se dă proba scrisă a Unității IV, care verifică lectura, gramatica și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și repartizarea timpului între exerciții și redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 138, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
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
