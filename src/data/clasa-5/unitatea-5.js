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
// Materiale: quiz la 1, 2, 3, 6, 8, 9, 10, 11, 15, 16; schemă sau infografic
// la 2, 3, 6, 8, 9, 10, 11, 12, 15, 16; fișă la 4, 5, 7, 12, 13, 14. Lecțiile
// 1, 4, 5 și 13 primesc materialul de predare din prezentări. Evaluarea (17)
// rămâne la profesor, nepublicată.

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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-1/fisa-exercitii.pdf)',
          'Quizul „Zâna Munților” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '8 min',
            activitate: '– „Pentru început”, p. 140, ex. 1: la ce basme vă duc cu gândul imaginile? Elevii numesc basmele și personajele recunoscute.\n– Ex. 2: pornind de la titlu, fiecare notează în caiet trei lucruri care cred că se vor întâmpla în basm.',
          },
          {
            etapa: 'Despre autor',
            timp: '2 min',
            activitate: '– Caseta de la p. 140: Petre Ispirescu (1830-1887), tipograf, culegător de basme; „Legendele sau basmele românilor” (1872). La final, notăm de la cine a auzit basmul (o calfă de bărbier).',
          },
          {
            etapa: 'Lectura model',
            timp: '14 min',
            activitate: '– Ex. 3: citesc basmul cu voce tare (sau pornesc înregistrarea din manualul digital); elevii urmăresc.\n– Lămurim cuvintele din subsol (sfadă, filozof, procopsit, galeș, a tânji, smerenie, vătaf, preumblare, boi, cosiță, nălucă, vâlvă, lipici, condur, întețit, calfă) și expresiile „câte în lună și în soare”, „în doi peri”.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '7 min',
            activitate: '– P. 143, ex. 1: s-au confirmat predicțiile? Câțiva elevi își citesc cele trei presupuneri.\n– Ex. 2: la ce imagini sau sunete v-a dus textul? Ex. 3: ce personaj v-a plăcut și cu cine seamănă?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (cine face?) și ex. 2 (cuvinte de basm), individual, 10 minute.\n– Verificare, 4 minute; la clasele rapide, quizul „Zâna Munților” în locul verificării frontale.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: răspunsul la ex. 3 de la „Impresii după prima lectură”, în scris; titlurile a trei basme românești cunoscute; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-1/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Zâna Munților',
          pasi: [
            {
              intrebare: 'Cine a cules basmul Zâna Munților?',
              variante: [
                {
                  text: 'Petre Ispirescu, care a adunat basmele în volumul Legendele sau basmele românilor',
                  corect: true,
                  explicatie: 'Nu l-a inventat: l-a auzit în copilărie de la o calfă de bărbier și l-a scris.',
                },
                {
                  text: 'Ion Creangă',
                  corect: false,
                  explicatie: 'Creangă e autorul altor povești; Zâna Munților e cules de Ispirescu.',
                },
                {
                  text: 'Frații Grimm',
                  corect: false,
                  explicatie: 'Ei au cules basme germane, nu românești.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 140, 143',
            },
            {
              intrebare: 'Sub ce înfățișare îi iese zâna în cale fiului de împărat, la vânătoare?',
              variante: [
                {
                  text: 'O turturică, pe care el o rănește ușor în aripă',
                  corect: true,
                  explicatie: 'Deși era vânător bun, nu reușește să o omoare: un prim semn că nu e o pasăre obișnuită.',
                },
                {
                  text: 'O căprioară albă',
                  corect: false,
                  explicatie: 'Nu apare nicio căprioară în basm.',
                },
                {
                  text: 'O găinăreasă',
                  corect: false,
                  explicatie: 'Găinăreasă se face mai târziu, la curtea împăratului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 141',
            },
            {
              intrebare: 'De ce se angajează zâna găinăreasă la curte?',
              variante: [
                {
                  text: 'Ca să-l poată vedea mai des pe fiul împăratului',
                  corect: true,
                  explicatie: 'Ea însăși mărturisește la final că totul a făcut pentru dragostea lui.',
                },
                {
                  text: 'Pentru că rămăsese săracă',
                  corect: false,
                  explicatie: 'Doar pare săracă; e o zână cu puteri miraculoase.',
                },
                {
                  text: 'Ca să fure găinile împărătești',
                  corect: false,
                  explicatie: 'Dimpotrivă, le îngrijește atât de bine, încât ajunge de poveste.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 141, 143',
            },
            {
              intrebare: 'Cum află fiul de împărat cine este fata de la nunți?',
              variante: [
                {
                  text: 'Pune să se aștearnă smoală pe drum, ea își pierde condurul, iar condurul i se potrivește doar găinăresei',
                  corect: true,
                  explicatie: 'Condurul e proba care o dă de gol.',
                },
                {
                  text: 'O urmărește până acasă, după a doua nuntă',
                  corect: false,
                  explicatie: 'De fiecare dată ea dispare din horă, înainte să se termine nunta.',
                },
                {
                  text: 'Îi spune chiar ea, la prima nuntă',
                  corect: false,
                  explicatie: 'La întrebările lui răspunde „în doi peri”, fără să se dea de gol.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 142-143',
            },
            {
              intrebare: 'La ce renunță zâna ca să rămână lângă fiul împăratului?',
              variante: [
                {
                  text: 'La puterea ei măiastră, fiindcă, luând de bărbat un om de pe pământ, toată puterea ei piere',
                  corect: true,
                  explicatie: 'De aceea trimite înapoi cărucioara fermecată și rămâne printre oameni.',
                },
                {
                  text: 'La zestrea ei',
                  corect: false,
                  explicatie: 'Zestrea și-o ia din cărucioară; renunță la altceva.',
                },
                {
                  text: 'La nimic, rămâne zână',
                  corect: false,
                  explicatie: 'Chiar ea spune: „mă lepăd de puterea mea cea măiastră”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 143',
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-2/fisa-exercitii.pdf)',
          'Schema „Basmul. Acțiunea, timpul și spațiul” (/materiale/clasa-5/unitatea-5/lectia-2/schema.svg)',
          'Quizul „Acțiunea, timpul și spațiul în basm” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '3 min',
            activitate: '– Doi elevi citesc răspunsul la ex. 3; strângem pe tablă titlurile de basme românești.',
          },
          {
            etapa: 'Explorare: acțiunea',
            timp: '9 min',
            activitate: '– „Explorare”, p. 144, ex. 1-2: lumea basmului, apropiată sau depărtată de realitate? Două întâmplări uimitoare și adjectivele potrivite din listă.\n– Ex. 3: un obiect cu însușiri magice.\n– Ex. 4: ordonăm cronologic ideile principale; elevii le copiază numerotate în caiet.',
          },
          {
            etapa: 'Notițe: basmul',
            timp: '4 min',
            activitate: '– În caiete, după Repere și schema lecției: basmul (lume ireală, întâmplări supranaturale, ființe fabuloase; convenția dintre povestitor și cititor); situația inițială, evenimentul care tulbură echilibrul, probele, situația finală, cu răsplata eroului.',
          },
          {
            etapa: 'Aplicații: harta mentală',
            timp: '7 min',
            activitate: '– „Aplicații”, ex. 1: în harta mentală din manual, elevii caută 2-3 minute aspectele miraculoase.\n– Ex. 2, pe grupe: harta mentală a basmului, cu titlul în centru și cele cinci brațe; două grupe o prezintă.',
          },
          {
            etapa: 'Timpul și spațiul',
            timp: '5 min',
            activitate: '– „Explorare”, p. 145, ex. 1-3: putem stabili locul, timpul și durata? Sunt posibile întâmplările din formula de început? Ce înseamnă „odată ca niciodată”?\n– În caiete, după Repere: cadrul basmului e vag, imprecis; formula de început anunță asta.',
          },
          {
            etapa: 'Aplicații: formulele și locurile',
            timp: '5 min',
            activitate: '– Ex. 1: ce face ușor de reținut formula inițială și pe cea finală.\n– Ex. 2: tabelul spațiilor (curtea, cotețele, pădurea, munții, palatele nunților, satul) și semnificațiile lor; elevii adaugă una.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (momentele basmului „Cenușăreasa”) și ex. 2 (real sau miraculos?), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Aplicații” (Acțiunea), ex. 3 (cauzele) și ex. 4 (întâmplarea care te-a emoționat, 5-8 rânduri); „Aplicații” (Timpul și spațiul), ex. 3; „Provocări” (un obiect care s-ar transforma într-o poveste); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Hărțile mentale ale grupelor; observarea sistematică; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-2/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Acțiunea, timpul și spațiul în basm',
          pasi: [
            {
              intrebare: 'Ce fel de lume înfățișează basmul?',
              variante: [
                {
                  text: 'O lume ireală, cu întâmplări supranaturale și ființe fabuloase',
                  corect: true,
                  explicatie: 'Între povestitor și cititor există o înțelegere: în basm se poate petrece orice.',
                },
                {
                  text: 'Lumea de azi, exact cum e',
                  corect: false,
                  explicatie: 'Atunci n-ar exista zâne și cărucioare fără cai.',
                },
                {
                  text: 'O lume a viitorului, explicată științific',
                  corect: false,
                  explicatie: 'Basmul nu privește spre viitor și nu explică științific.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 144',
            },
            {
              intrebare: 'Care e prima întâmplare din Zâna Munților, în ordine cronologică?',
              variante: [
                {
                  text: 'Un împărat vestit dobândește, la bătrânețe, un moștenitor.',
                  corect: true,
                  explicatie: 'Totul pornește de la nașterea fiului de împărat.',
                },
                {
                  text: 'Zâna se preface în turturică și îi iese în cale prințului.',
                  corect: false,
                  explicatie: 'Asta se întâmplă după ce prințul a crescut și a învățat carte.',
                },
                {
                  text: 'O femeie săracă se bagă slujnică la curte.',
                  corect: false,
                  explicatie: 'Găinăreasa apare abia după întâlnirea din pădure.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 144',
            },
            {
              intrebare: 'Cum se desfășoară, de obicei, acțiunea unui basm?',
              variante: [
                {
                  text: 'Echilibrul de la început e tulburat, eroul trece probe, iar la final echilibrul se reface și eroul e răsplătit',
                  corect: true,
                  explicatie: 'Basmul transmite încrederea că binele se poate restabili.',
                },
                {
                  text: 'Totul rămâne neschimbat de la început până la sfârșit',
                  corect: false,
                  explicatie: 'Fără o tulburare a echilibrului, n-ar exista poveste.',
                },
                {
                  text: 'Se încheie cu pedepsirea eroului',
                  corect: false,
                  explicatie: 'Dimpotrivă, eroul e răsplătit.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 144',
            },
            {
              intrebare: 'Ce arată formula „A fost odată ca niciodată”?',
              variante: [
                {
                  text: 'Că întâmplările nu pot fi așezate precis în timp și în spațiu',
                  corect: true,
                  explicatie: 'Cadrul basmului e vag, iar formula de început anunță asta.',
                },
                {
                  text: 'Anul exact în care s-au petrecut faptele',
                  corect: false,
                  explicatie: 'Tocmai că nu ni se dă niciun an.',
                },
                {
                  text: 'Că povestea s-a petrecut cu adevărat',
                  corect: false,
                  explicatie: 'Formula spune chiar opusul: „odată ca niciodată”.',
                },
              ],
              indiciu: 'Poate fi ceva odată și, în același timp, niciodată?',
              sursa: 'Manual Art 5, p. 145',
            },
            {
              intrebare: 'Ce semnificație poate avea pădurea în Zâna Munților?',
              variante: [
                {
                  text: 'Loc al întâlnirii care schimbă viața, la granița dintre lumea oamenilor și lumea ființelor supranaturale',
                  corect: true,
                  explicatie: 'Acolo o întâlnește prințul pe turturică, adică pe zână.',
                },
                {
                  text: 'Doar un loc bun de vânătoare, fără altă însemnătate',
                  corect: false,
                  explicatie: 'Spațiile din basm au adesea și o valoare simbolică.',
                },
                {
                  text: 'Tărâmul zânei, spațiul ei ocrotitor',
                  corect: false,
                  explicatie: 'Tărâmul zânei sunt munții, nu pădurea.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 145',
            },
            {
              intrebare: 'Care întâmplare ține de miraculos?',
              variante: [
                {
                  text: 'Zâna bate de trei ori din palme și vine o cărucioară fără să fie trasă de cai',
                  corect: true,
                  explicatie: 'Nimic din lumea reală nu se mișcă astfel.',
                },
                {
                  text: 'Împăratul își trimite fiul să învețe carte',
                  corect: false,
                  explicatie: 'E un lucru obișnuit, posibil și în realitate.',
                },
                {
                  text: 'Fiul de împărat se îmbolnăvește de dor',
                  corect: false,
                  explicatie: 'E o stare omenească, nu o întâmplare supranaturală.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 143',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-2/schema.svg', titlu: 'Basmul. Acțiunea, timpul și spațiul' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-3/fisa-exercitii.pdf)',
          'Schema „Personajele basmului” (/materiale/clasa-5/unitatea-5/lectia-3/schema.svg)',
          'Quizul „Personajele basmului” (materialul de joc al lecției)',
          'Coli albe, pentru diagramele Venn',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '3 min',
            activitate: '– Doi elevi citesc textul despre întâmplarea care i-a emoționat.',
          },
          {
            etapa: 'Explorare, ex. 1-5',
            timp: '8 min',
            activitate: '– Ex. 1-2: personajele basmului; piramida personajelor, în caiete (principale, secundare, episodice).\n– Ex. 3: câte două acțiuni ale personajelor principale și ale celor secundare.\n– Ex. 4-5: fragmentul cu trăsătura miraculoasă a prințului; de ce e zâna o ființă cu puteri supranaturale.',
          },
          {
            etapa: 'Notițe: personajele basmului',
            timp: '3 min',
            activitate: '– În caiete, după Repere și schema lecției: oameni cu calități supranaturale și ființe fabuloase; eroul pozitiv, cu o misiune și probe; personajele negative.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '8 min',
            activitate: '– Ex. 1: „a învăța câte în lună și în soare”; de ce contează educația unui fiu de împărat.\n– Ex. 2: de ce nu vrea prințul să se însoare (elevii aleg și argumentează).\n– Ex. 3, în perechi: ce trăsătură ilustrează fiecare pasaj despre prinț și despre zână; verificăm oral.',
          },
          {
            etapa: 'Aplicații, ex. 4-8',
            timp: '5 min',
            activitate: '– Frontal: înfățișările zânei (ex. 4); situațiile-probă (ex. 5); „Feciorul de împărat nu mai era al său” (ex. 6); cele două expresii (ex. 7); de ce ezită fata (ex. 8).',
          },
          {
            etapa: 'Diagramele Venn',
            timp: '9 min',
            activitate: '– Ex. 9: echipa A (Făt-Frumos și fiul împăratului), echipa B (Cenușăreasa și Zâna Munților), în grupe de 4-6; diagrama pe o coală.\n– O grupă din fiecare echipă prezintă; ex. 10, oral: cine e personajul principal?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (înfățișările zânei) și ex. 2 (trăsătura și dovada), individual, 8 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Provocări”, ex. 4 (orarul fiului de împărat) și ex. 5 (o zână inventată: puterea, desenul, un text scurt); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Diagramele Venn ale grupelor; observarea sistematică; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-3/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Personajele basmului',
          pasi: [
            {
              intrebare: 'Ce fel de personaje pot apărea într-un basm?',
              variante: [
                {
                  text: 'Oameni cu puteri supranaturale și ființe fabuloase: zâne, zmei, animale năzdrăvane',
                  corect: true,
                  explicatie: 'Amestecul acesta face lumea basmului.',
                },
                {
                  text: 'Doar oameni obișnuiți',
                  corect: false,
                  explicatie: 'Atunci n-ar mai fi basm.',
                },
                {
                  text: 'Doar animale care vorbesc',
                  corect: false,
                  explicatie: 'Animalele năzdrăvane sunt doar o parte dintre personaje.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 146',
            },
            {
              intrebare: 'Ce îl face pe un personaj erou de basm?',
              variante: [
                {
                  text: 'Stă în slujba binelui, are un scop și trece niște probe ca să-l atingă',
                  corect: true,
                  explicatie: 'Probele arată dacă eroul își merită răsplata.',
                },
                {
                  text: 'E cel mai bogat personaj',
                  corect: false,
                  explicatie: 'Bogăția nu face un erou.',
                },
                {
                  text: 'Apare primul în text',
                  corect: false,
                  explicatie: 'Ordinea apariției nu contează.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 146',
            },
            {
              intrebare: 'Sub ce înfățișări apare Zâna Munților în basm?',
              variante: [
                {
                  text: 'Turturică, găinăreasă și fată necunoscută la nunți',
                  corect: true,
                  explicatie: 'Fiecare înfățișare o apropie de prinț, fără să se dea de gol.',
                },
                {
                  text: 'Porumbel, bucătăreasă și morăriță',
                  corect: false,
                  explicatie: 'Nicio astfel de înfățișare nu apare în text.',
                },
                {
                  text: 'Doar zână, de la început până la sfârșit',
                  corect: false,
                  explicatie: 'Își dezvăluie adevărata față abia la final.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 147',
            },
            {
              intrebare: 'Ce trăsătură a fiului de împărat arată fragmentul „Ajunsese să nu mai aibă dascălii ce să-i dea să învețe”?',
              variante: [
                {
                  text: 'E foarte silitor și învață repede',
                  corect: true,
                  explicatie: 'Ce învățau alții într-un an, el învăța într-o săptămână.',
                },
                {
                  text: 'E leneș și neascultător',
                  corect: false,
                  explicatie: 'Textul spune exact contrariul.',
                },
                {
                  text: 'E mofturos',
                  corect: false,
                  explicatie: 'Fragmentul vorbește despre învățătură, nu despre mofturi.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 146',
            },
            {
              intrebare: 'Ce trăsături arată zâna cât timp e găinăreasă?',
              variante: [
                {
                  text: 'Hărnicie, bună-cuviință și răbdare: înghite vorba ironică a vătafului fără să răspundă',
                  corect: true,
                  explicatie: 'Toată curtea o lăuda pentru vrednicia și curățenia ei.',
                },
                {
                  text: 'Mândrie și nerăbdare',
                  corect: false,
                  explicatie: 'Deși e zână, se poartă smerit, ca o slujnică.',
                },
                {
                  text: 'Viclenie și răutate',
                  corect: false,
                  explicatie: 'Nu face rău nimănui; ascunderea ei are un motiv.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 146',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-3/schema.svg', titlu: 'Personajele basmului' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-4/fisa.pdf)',
          'Coli mari și carioci, pentru postere',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi elevi prezintă orarul prințului; doi-trei arată zâna inventată.',
          },
          {
            etapa: 'Interpretare, ex. 1-3 și 5',
            timp: '9 min',
            activitate: '– „Interpretare”, p. 148, frontal: cum se încheie de obicei basmele și e finalul acesta obișnuit? (ex. 1); ideea centrală a poveștii (ex. 2); alt basm cu tema iubirii dintre lumi diferite (ex. 3).\n– Ex. 5: ce putem învăța din purtarea zânei cât timp e găinăreasă? Primesc orice răspuns argumentat.',
          },
          {
            etapa: 'Posterul poveștii de dragoste',
            timp: '12 min',
            activitate: '– Ex. 4: grupe de 4-6; fiecare grupă urmărește stările personajelor în cele patru secvențe (turturica, găinăreasa, cele trei nunți, nunta), alege un titlu pentru fiecare și desenează un simbol al iubirii.\n– Posterele se afișează; turul galeriei, 3 minute.',
          },
          {
            etapa: 'Lectura imaginii',
            timp: '5 min',
            activitate: '– „Provocări”, ex. 2: tabloul lui Louis Katzenstein (Frații Grimm la povestitoarea Dorothea Viehmann): cine sunt personajele, ce fac, încotro privesc toți.\n– Ex. 3: prin ce se aseamănă Petre Ispirescu cu Frații Grimm?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce valoare arată?) și ex. 2 (proverbe potrivite), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Autoevaluare L1-L4',
            timp: '4 min',
            activitate: '– P. 148: elevii completează în caiet cele trei afirmații; citim câteva și notez ce trebuie reluat.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Provocări”, ex. 1 (mesajul zânei către surorile ei sau al prințului către fata de la nuntă, 6-8 rânduri); fișa lecției (ideea centrală, legătura cu experiența ta); fișa de exerciții, pagina 2. Minitestul L1-L4 din manualul digital, opțional.',
          },
        ],
        evaluare: 'Posterele grupelor; autoevaluarea; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-5/lectia-4/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-5/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Ce basme ale altor popoare ați citit? Notez pe tablă titlurile și țările.\n– Citim caseta de la p. 149: folclorul; „O mie și una de nopți”, Șeherezada și sultanul Șahriar; începutul poveștii lui Aladin.',
          },
          {
            etapa: 'Lectura textului',
            timp: '10 min',
            activitate: '– Citesc fragmentul istorisit de Eusebiu Camilar (sau pornesc înregistrarea); elevii urmăresc.\n– Lămurim cuvintele din subsol (Mahomed, cutremur, belciug, zăbavă, petică, sofa, „a bate colburile”).',
          },
          {
            etapa: 'Muntele narațiunii',
            timp: '7 min',
            activitate: '– „Discutarea textului”, ex. 1, în perechi: „muntele narațiunii” desenat în caiet, cu întâmplările la locul lor; verificăm pe tablă.',
          },
          {
            etapa: 'Discutarea textului, ex. 2-10',
            timp: '9 min',
            activitate: '– Frontal: de ce nu poate vrăjitorul lua singur lampa; de ce refuză Aladin să i-o dea; personajul negativ; cât stă Aladin în peșteră; greșeala vrăjitorului.\n– Ex. 7-10: citatele care arată schimbarea lui Aladin; s-ar putea sfârși aici povestea?; aspectele miraculoase; ce a învățat Aladin.',
          },
          {
            etapa: 'Cercuri de reflecție',
            timp: '6 min',
            activitate: '– Grupe de 5-6: ce valori culturale se desprind din basmele lumii? Stabilim semnul „și noi” (mâna la piept) pentru valorile găsite și de alt cerc.\n– Câte un reprezentant spune valorile; le notez pe tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (obiectele fermecate) și ex. 2 (adevărat sau fals?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Portofoliu”, posterul cu valorile culturale găsite în cercurile de reflecție; fișa lecției (jurnalul cu dublă intrare); fișa de exerciții, pagina 2.\n– „Biblioteci deschise”: „Basme și povești românești”, „O poveste grimminală” de Adam Gidwitz.',
          },
        ],
        evaluare: 'Observarea discuției și a cercurilor de reflecție; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-5/lectia-5/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-6/fisa-exercitii.pdf)',
          'Infograficul „Diversitate culturală și lingvistică” (/materiale/clasa-5/unitatea-5/lectia-6/infografic.svg)',
          'Quizul „Cuvinte și povești care călătoresc” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Joc: Ghicește cine sunt!',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 151: elevii ghicesc cele șase cuvinte după descriere și după numele lor în alte limbi (a-f).',
          },
          {
            etapa: 'Nastratin Hogea',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1: citesc anecdota „Făgăduiala ținută” (Jean-Claude Carrière); întrebările a-d, frontal.\n– Ex. 2: și-a ținut tatăl promisiunea? Elevii aleg un răspuns și îl argumentează; ex. 3: tâlcul, într-o propoziție.\n– Ex. 4: versurile lui Anton Pann („a rămâne de basm”, „a fi cam p-o ureche”) și miniatura otomană.',
          },
          {
            etapa: 'Notițe: diversitatea culturală',
            timp: '4 min',
            activitate: '– În caiete, după Repere și infograficul lecției: schimburile dintre popoare (bunuri, idei, valori); diversitatea culturală; Nastratin, personaj comun mai multor culturi din Balcani; diversitatea lingvistică: odată cu lucrurile călătoresc și cuvintele.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Ex. 1: „cuvinte călătoare” (marfă, franzelă, papagal, crai); fiecare spune ce călătorie l-a surprins.\n– Ex. 2, în perechi: cele opt mâncăruri de proveniență orientală din careu.',
          },
          {
            etapa: 'Aplicații, ex. 3-4',
            timp: '7 min',
            activitate: '– Ex. 3: ce culturi există în comunitatea noastră?\n– Ex. 4: fragmentul din Ioan Slavici („Lumea prin care am trecut”): etniile menționate, sfaturile mamei, de ce e important să fim binevoitori cu ceilalți.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (cuvinte călătoare), ex. 2 și 3 (Nastratin și oala), individual, 10 minute.\n– Verificare, 4 minute; dacă rămâne timp, quizul „Cuvinte și povești care călătoresc”.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Provocări”, calendarul diversității (fiecare aduce o sărbătoare pe foaia A3 afișată în clasă) și o pagină despre o sărbătoare; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-6/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Cuvinte și povești care călătoresc',
          pasi: [
            {
              intrebare: 'Ce este diversitatea culturală?',
              variante: [
                {
                  text: 'Existența mai multor culturi într-o societate, culturi care se influențează reciproc',
                  corect: true,
                  explicatie: 'Vecinătatea, comerțul și migrația aduc schimburi de bunuri, dar și de idei.',
                },
                {
                  text: 'Faptul că toți oamenii au aceleași obiceiuri',
                  corect: false,
                  explicatie: 'Asta ar fi uniformitate, opusul diversității.',
                },
                {
                  text: 'Studiul unei singure limbi străine',
                  corect: false,
                  explicatie: 'Diversitatea înseamnă mai multe culturi, nu o singură limbă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 151',
            },
            {
              intrebare: 'De ce e Nastratin Hogea un exemplu de schimb cultural?',
              variante: [
                {
                  text: 'E un personaj comun mai multor culturi din Balcani: turcă, greacă, bulgară, română și altele',
                  corect: true,
                  explicatie: 'La noi l-a făcut cunoscut Anton Pann.',
                },
                {
                  text: 'Pentru că a călătorit în toată lumea',
                  corect: false,
                  explicatie: 'Nu el a călătorit, ci poveștile despre el.',
                },
                {
                  text: 'Pentru că e un personaj exclusiv românesc',
                  corect: false,
                  explicatie: 'Tocmai că nu aparține unui singur popor.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 151-152',
            },
            {
              intrebare: 'Ce însemna cuvântul maghiar din care vine „marfă”?',
              variante: [
                {
                  text: 'vită, vite',
                  corect: true,
                  explicatie: 'Cine venea la târg cu vite bune avea „marfă bună”; apoi sensul s-a lărgit.',
                },
                {
                  text: 'bani',
                  corect: false,
                  explicatie: 'Sensul de la început era legat de animale.',
                },
                {
                  text: 'pâine',
                  corect: false,
                  explicatie: 'Pâinea apare la alt cuvânt călător, franzelă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 152',
            },
            {
              intrebare: 'De la ce nume provine cuvântul „crai”?',
              variante: [
                {
                  text: 'De la numele împăratului Carol cel Mare, Karl în germană',
                  corect: true,
                  explicatie: 'Slavii l-au împrumutat din germană și a ajuns să însemne „rege”.',
                },
                {
                  text: 'De la numele unui munte',
                  corect: false,
                  explicatie: 'Nu are legătură cu geografia.',
                },
                {
                  text: 'De la numele unui personaj din Zâna Munților',
                  corect: false,
                  explicatie: 'Cuvântul e mult mai vechi decât basmul cules de Ispirescu.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 152',
            },
            {
              intrebare: 'De ce ajung cuvintele să treacă dintr-o limbă în alta?',
              variante: [
                {
                  text: 'Odată cu obiectele și ideile care trec de la un popor la altul, trec și cuvintele care le denumesc',
                  corect: true,
                  explicatie: 'Cartof vine din germanul Kartoffel, odată cu planta.',
                },
                {
                  text: 'Pentru că limbile nu au cuvinte proprii',
                  corect: false,
                  explicatie: 'Fiecare limbă are cuvintele ei; împrumuturile se adaugă.',
                },
                {
                  text: 'Doar din greșeli de traducere',
                  corect: false,
                  explicatie: 'Împrumutul e un fenomen firesc, nu o greșeală.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 151-152',
            },
          ],
        },
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
          'Manual Art 5, pp. 153-154',
          'Fișa proiectului (/materiale/clasa-5/unitatea-5/lectia-7/fisa.pdf)',
          'Bilețele pentru tragerea la sorți a fragmentelor',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Ce minorități etnice din România cunoașteți? Există în comunitatea noastră? Notez răspunsurile pe tablă.',
          },
          {
            etapa: 'Titlul proiectului',
            timp: '3 min',
            activitate: '– Explicăm cuvintele: itinerar (drumul unei călătorii, cu locurile parcurse) și multicultural (cu mai multe culturi). Proiectul e o călătorie prin basmele unor comunități din România.',
          },
          {
            etapa: 'Sarcina de lucru',
            timp: '10 min',
            activitate: '– P. 153: cinci grupe, fiecare cu un basm al unei minorități din România, din volumul „Basmele omului” de Vladimir Colin: maghiar („Buruiana neagră”), săsesc („Hans și cele patru castele”), ucrainean („Povestea cântecului”), rom („Fierarul năzdrăvan”), tătăresc („Povestea fericirii”).\n– Dacă în zona noastră trăiește și altă etnie, o a șasea grupă prezintă un basm al ei.',
          },
          {
            etapa: 'Calendarul',
            timp: '7 min',
            activitate: '– P. 154, trei săptămâni: I – citirea fragmentului (și a basmului întreg, de la bibliotecă) și fișa de lectură după modelul din manual; II – documentarea despre comunitate (regiune, număr aproximativ, personalități, sărbători, religie, obiceiuri, port, mâncăruri, formule de salut), împărțirea rolurilor, recuzita, prezentarea; III – reflecții despre ce au în comun basmele.\n– Stabilim și notăm data prezentărilor.',
          },
          {
            etapa: 'Criteriile de evaluare',
            timp: '5 min',
            activitate: '– Citim grila de autoevaluare din manual (documentarea, munca în echipă, prezentarea orală) și criteriile din fișa proiectului, cu câte un exemplu.',
          },
          {
            etapa: 'Formarea grupelor',
            timp: '17 min',
            activitate: '– Grupele se formează și trag la sorți fragmentul.\n– Fiecare grupă citește fragmentul, completează primele rubrici ale fișei de lectură (titlul, comunitatea, cadrul) și își împarte rolurile (cine citește basmul întreg, cine se documentează, cine pregătește recuzita, cine prezintă).\n– Trec pe la fiecare grupă și verific notițele.',
          },
          {
            etapa: 'Încheiere',
            timp: '3 min',
            activitate: '– Reamintesc data prezentărilor și verificarea de la sfârșitul primei săptămâni.',
          },
        ],
        evaluare: 'Fișa de pornire a proiectului; observarea organizării grupelor.',
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-8/fisa-exercitii.pdf)',
          'Quizul „Elemente paraverbale și nonverbale” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 155, ex. 1: câțiva elevi mimează o stare din listă, clasa ghicește.\n– Ex. 2: câte o propoziție pentru fiecare emoticon, fără cuvântul care numește emoția. Discutăm pe scurt cum emoticoanele pot înlocui cuvintele în mesaje.',
          },
          {
            etapa: 'Telefonul fără fir',
            timp: '6 min',
            activitate: '– „Explorare”, ex. 1: șase elevi în șir; primul spune la ureche o propoziție despre un basm; fiecare notează ce a auzit; citim cele șase variante. Ce s-a pierdut pe drum?',
          },
          {
            etapa: 'Lectura pe roluri',
            timp: '6 min',
            activitate: '– Ex. 2: trei elevi (povestitorul, împărăteasa deghizată, Albă-ca-Zăpada) citesc fragmentul cu intonația potrivită; spun ce a mers bine și ce se poate îmbunătăți.',
          },
          {
            etapa: 'Aceeași întâmplare, alte stări',
            timp: '4 min',
            activitate: '– Ex. 3: patru elevi povestesc întâmplarea din fragment ca și cum ar fi veseli, triști, îngândurați, revoltați; clasa observă vocea și gesturile.',
          },
          {
            etapa: 'Semne și atitudini',
            timp: '3 min',
            activitate: '– Ex. 4: ce atitudine transmite fiecare semn (zâmbetul, poziția aplecată, tăcerea lungă, bătutul din picior).',
          },
          {
            etapa: 'Notițe: paraverbal și nonverbal',
            timp: '4 min',
            activitate: '– În caiete, după Repere, tabelul cu două coloane: elementele paraverbale (intensitatea vocii, intonația, ritmul, pauza) și nonverbale (mimica, gesturile, poziția corpului, contactul vizual).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (voce sau corp?), ex. 2 (ce transmite?) și ex. 3 (aceeași propoziție, alt ton), individual, 8 minute.\n– Verificare, 3 minute; câțiva elevi rostesc „Ai venit la timp.” cu cele patru intenții.',
          },
          {
            etapa: 'Aplicații: o prezentare model',
            timp: '7 min',
            activitate: '– Reamintesc structura unei prezentări (început, cuprins, final); un voluntar alege o temă de la p. 156 și prezintă 2-3 minute.\n– Clasa observă vocea și gesturile; voluntarul se autoevaluează cu steluțele din manual.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: planul prezentării de cinci minute („Aplicații”, p. 156), pe fișa de exerciții, pagina 2 (ex. 4-5); prezentările se țin la începutul orelor următoare, câte două.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a prezentării; autoevaluarea cu steluțe; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-8/fisa-exercitii.pdf' },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-5/lectia-8/schema.svg',
          titlu: 'Vocea și corpul, când prezinți',
        },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-9/fisa-exercitii.pdf)',
          'Quizul „Acte de limbaj: a promite, a declara” (materialul de joc al lecției)',
          'Bilețele cu situații de comunicare',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Explorare”, p. 157, ex. 1: o promisiune pe care nu v-ați ținut-o și ce a urmat (două-trei povești, fără nume).\n– Ex. 2: fiecare completează în caiet „Declar că de astăzi voi...”; câțiva citesc.',
          },
          {
            etapa: 'Replica zânei',
            timp: '7 min',
            activitate: '– Ex. 3: recitim replica Zânei Munților de la finalul basmului; alegem sensurile potrivite ale lui „a declara” din DEX (a).\n– b) Elevii copiază replica și colorează diferit declarația de intenție și declarația de dragoste.\n– c) Doi-trei elevi imaginează răspunsul prințului, care îi promite zânei ce își dorește.',
          },
          {
            etapa: 'Promisiune sau amenințare?',
            timp: '3 min',
            activitate: '– Ex. 4: un elev citește fragmentul din „Tinerețe fără bătrânețe și viață fără de moarte”; ce rostește împăratul?',
          },
          {
            etapa: 'Notițe: a promite, a declara',
            timp: '3 min',
            activitate: '– În caiete, după Repere: a promite (vorbitorul se angajează să acționeze); a declara (anunță, recunoaște, își asumă; mai ales în limbaj oficial).',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '8 min',
            activitate: '– Ex. 1: verbele din listă potrivite fiecărui desen.\n– Ex. 2: câte un context pentru fiecare comunicare („Vă declar căsătoriți!”, „Declar ședința deschisă.”...); perechile extrag bilețele cu situații și rostesc declarația potrivită.\n– Ex. 3: „a promite luna de pe cer”, „a promite marea cu sarea”: sensul și câte o propoziție.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (ce face vorbitorul?) și ex. 2 (promisiuni realiste), individual, 8 minute.\n– Verificare, 3 minute; la clasele rapide, quizul „Acte de limbaj: a promite, a declara”.',
          },
          {
            etapa: 'Provocări: discursul candidatului',
            timp: '9 min',
            activitate: '– Fiecare are 3 minute să-și noteze discursul pentru Consiliul Elevilor (prezentarea, declararea candidaturii, promisiuni realiste, mulțumirea).\n– Doi-trei elevi îl rostesc; clasa notează declarația și promisiunile și spune dacă sunt realiste.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: discursul de candidat, scris complet; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a discursurilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-9/fisa-exercitii.pdf' },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-5/lectia-9/schema.svg',
          titlu: 'A promite, a declara',
        },
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
          'Manual Art 5, pp. 158-159',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-10/fisa-exercitii.pdf)',
          'Schema „Numeralul. Numeralul cardinal” (/materiale/clasa-5/unitatea-5/lectia-10/schema.svg)',
          'Quizul „Numeralul cardinal” (materialul de joc al lecției)',
          'Bilețele pentru jocul de la „Explorare”',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– „Pentru început”, p. 158: completăm frontal titlurile și expresiile din basme cu numerele lipsă (Balaurul cel cu ... capete, Ali-Baba și cei ... de hoți...). Anunț o parte de vorbire nouă.',
          },
          {
            etapa: 'Explorare: numeralul',
            timp: '6 min',
            activitate: '– Ex. 1: fiecare scrie pe un bilețel ziua nașterii și pe altul numărul din catalog; grupele împart bilețelele în cele două „coșuri” (număr / ordine).\n– Ex. 2: completăm oral textul despre Aladin cu cuvintele potrivite.',
          },
          {
            etapa: 'Notițe: definiția',
            timp: '2 min',
            activitate: '– În caiete: numeralul exprimă un număr sau ordinea obiectelor prin numărare.',
          },
          {
            etapa: 'Explorare: numeralul cardinal',
            timp: '7 min',
            activitate: '– Ex. 1: numeralele din fragmentul cu sultanul și ce arată ele; ex. 2: din ce cuvinte e format „patruzeci”.\n– Ex. 3: imaginile cu fructe: ce se schimbă la un / o, doi / două? Ex. 4: numeralele alcătuite din mai multe cuvinte.',
          },
          {
            etapa: 'Notițe: numeralul cardinal',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: cardinal simplu (unu... zece) și compus; un/o, doi/două după gen; când un și o sunt numerale (lângă alt numeral, cu singur, numai, doar, ca unitate de măsură), cu exemplele din manual.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Ex. 1: câte un elev la tablă transcrie cu litere 14, 226, 841, 1267, 18 100.\n– Ex. 2: dictez propozițiile despre Aladin; elevii subliniază cu o linie numeralele simple, cu două pe cele compuse.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (numere din povești) și ex. 2 (simplu sau compus?), individual, 9 minute.\n– Verificare, 4 minute; insist pe acordul lui doi și al compuselor lui cu substantivul.',
          },
          {
            etapa: 'Numeral, articol sau pronume?',
            timp: '4 min',
            activitate: '– Ex. 5, frontal: ce sunt un și o în textul despre cartea de povești (numeral, articol nehotărât sau pronume personal).',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 3 (poțiunea vrăjitoarei), ex. 4 (rețeta ta de vrăjitoare) și ex. 6; fișa de exerciții, pagina 2. Quizul „Numeralul cardinal” deschide ora următoare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; dictarea; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-10/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Numeralul cardinal',
          pasi: [
            {
              intrebare: 'Ce exprimă numeralul?',
              variante: [
                {
                  text: 'Un număr sau ordinea obiectelor prin numărare',
                  corect: true,
                  explicatie: 'De aici cele două feluri: cardinal și ordinal.',
                },
                {
                  text: 'O însușire a unui obiect',
                  corect: false,
                  explicatie: 'Aceea e treaba adjectivului.',
                },
                {
                  text: 'O acțiune',
                  corect: false,
                  explicatie: 'Aceea e treaba verbului.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 158',
            },
            {
              intrebare: 'Ce arată numeralul din „patruzeci de vase mari de aur”?',
              variante: [
                {
                  text: 'Un număr exact de obiecte: e numeral cardinal',
                  corect: true,
                  explicatie: 'Răspunde la întrebarea „câte?”.',
                },
                {
                  text: 'Ordinea vaselor',
                  corect: false,
                  explicatie: 'Ordinea ar suna „al patruzecilea vas”.',
                },
                {
                  text: 'Mărimea vaselor',
                  corect: false,
                  explicatie: 'Mărimea o arată adjectivul „mari”.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 158',
            },
            {
              intrebare: 'Care dintre numeralele următoare este compus?',
              variante: [
                {
                  text: 'unsprezece',
                  corect: true,
                  explicatie: 'Deși se scrie într-un cuvânt, e format din unu, spre și zece.',
                },
                {
                  text: 'nouă',
                  corect: false,
                  explicatie: 'E numeral simplu; simplele merg de la unu la zece.',
                },
                {
                  text: 'zece',
                  corect: false,
                  explicatie: 'Zece încheie seria numeralelor simple.',
                },
              ],
              indiciu: 'Uită-te din ce bucăți e făcut cuvântul.',
              sursa: 'Manual Art 5, p. 159',
            },
            {
              intrebare: 'Care numerale cardinale își schimbă forma după gen?',
              variante: [
                {
                  text: 'unu/un și doi: un băiat, o fată; doi băieți, două fete',
                  corect: true,
                  explicatie: 'Compusele cu doi se acordă și ele: douăzeci și două de fete.',
                },
                {
                  text: 'trei și patru',
                  corect: false,
                  explicatie: 'Spui trei băieți, dar și trei fete: forma nu se schimbă.',
                },
                {
                  text: 'toate numeralele',
                  corect: false,
                  explicatie: 'Cele mai multe au o singură formă: cinci băieți, cinci fete.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 159',
            },
            {
              intrebare: 'În care propoziție „un” sau „o” este numeral, nu articol?',
              variante: [
                {
                  text: 'Mi-ar trebui doar un covor magic.',
                  corect: true,
                  explicatie: 'Cuvântul „doar” insistă pe ideea de unul singur.',
                },
                {
                  text: 'Am cumpărat o carte de povești.',
                  corect: false,
                  explicatie: 'Aici „o” e articol nehotărât: nu insistăm pe număr.',
                },
                {
                  text: 'Aladin era un băiat sărac.',
                  corect: false,
                  explicatie: 'Tot articol nehotărât; nu vrem să spunem „unul singur”.',
                },
              ],
              indiciu: 'Caută un cuvânt care arată „unul singur”: doar, numai, singur.',
              sursa: 'Manual Art 5, p. 159',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-10/schema.svg', titlu: 'Numeralul. Numeralul cardinal' },
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
          'Manual Art 5, pp. 160-161',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-11/fisa-exercitii.pdf)',
          'Schema „Numeralul ordinal. Numeralul, aspecte normative” (/materiale/clasa-5/unitatea-5/lectia-11/schema.svg)',
          'Quizul „Numeralul ordinal și scrierea corectă” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi elevi citesc rețeta de vrăjitoare; clasa numește numeralele cardinale și felul lor.',
          },
          {
            etapa: 'Explorare: numeralul ordinal',
            timp: '6 min',
            activitate: '– Ex. 1: ilustrația din „O mie și una de nopți”: al câtelea rob e îmbrăcat în verde, de la stânga și de la dreapta? Pe al câtelea rând e Aladin?\n– Ex. 2: numeralul ordinal de la 40, lângă un substantiv feminin și unul masculin; ex. 3: sinonime pentru „prima”, „primele”.',
          },
          {
            etapa: 'Notițe: numeralul ordinal',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: numeralul ordinal arată ordinea; al doilea (masculin, neutru) și a doua (feminin), cu părțile lor (al/a, numeralul cardinal, articolul hotărât, particula); întâi și primul, sinonime.',
          },
          {
            etapa: 'Explorare: aspecte normative',
            timp: '6 min',
            activitate: '– Ex. 1: citim cu voce tare „Marșul botonilor” de Alfred Jarry (traducere de Romulus Vulpescu).\n– Ex. 2: formele care nu respectă norma și forma lor literară, la tablă; ex. 3: propoziții cu mii și mi-i.',
          },
          {
            etapa: 'Notițe: norme',
            timp: '4 min',
            activitate: '– În caiete, după Repere: unu; ora două, clasa a douăsprezecea; clasa întâi / întâia; paisprezece, șaisprezece, șaizeci; șaptesprezece, optsprezece; în texte, cifre, cu excepția numerelor sub zece.',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '7 min',
            activitate: '– Ex. 1: câte coarne are duhul și numeralele ordinale formate de la acest număr.\n– Ex. 2: numeralele din textul cu peștii și felul lor; ex. 3: câteva ordinale la tablă (5, 22, 71).\n– Ex. 4, frontal: forma corectă în propozițiile a-g.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (al câtelea? a câta?) și ex. 2 (forma corectă), individual, 8 minute.\n– Verificare, 4 minute; la clasele rapide, quizul „Numeralul ordinal și scrierea corectă”.',
          },
          {
            etapa: 'Autoevaluare L9-L10',
            timp: '3 min',
            activitate: '– P. 161: elevii completează în caiet cele trei afirmații.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 3 (toate numerele) și ex. 5 (textul despre șah, cu litere); „Provocări”, ex. 1 (trei expresii cu numerale); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-11/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Numeralul ordinal și scrierea corectă',
          pasi: [
            {
              intrebare: 'Ce arată numeralul ordinal?',
              variante: [
                {
                  text: 'Ordinea obiectelor prin numărare: al treilea pește',
                  corect: true,
                  explicatie: 'Răspunde la întrebarea „al câtelea?”.',
                },
                {
                  text: 'Câte obiecte sunt',
                  corect: false,
                  explicatie: 'Aceea e treaba numeralului cardinal: trei pești.',
                },
                {
                  text: 'Culoarea obiectelor',
                  corect: false,
                  explicatie: 'Culoarea o arată adjectivul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 160',
            },
            {
              intrebare: 'Care variantă e corectă?',
              variante: [
                {
                  text: 'a doua noapte',
                  corect: true,
                  explicatie: 'La feminin, ordinalul are forma a doua.',
                },
                {
                  text: 'al doilea noapte',
                  corect: false,
                  explicatie: 'Forma al doilea e pentru masculin și neutru.',
                },
                {
                  text: 'a doilea noapte',
                  corect: false,
                  explicatie: 'Amestecă forma de feminin cu cea de masculin.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 160',
            },
            {
              intrebare: 'Care numeral e sinonim cu „primul”?',
              variante: [
                {
                  text: 'întâiul',
                  corect: true,
                  explicatie: 'Întâia noapte și prima noapte înseamnă același lucru.',
                },
                {
                  text: 'unu',
                  corect: false,
                  explicatie: 'Unu e cardinal: arată numărul, nu ordinea.',
                },
                {
                  text: 'al unulea',
                  corect: false,
                  explicatie: 'Singur, nu se folosește; seria începe cu întâiul sau primul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 160',
            },
            {
              intrebare: 'Care formă e scrisă corect?',
              variante: [
                {
                  text: 'șaisprezece',
                  corect: true,
                  explicatie: 'La 16, forma corectă e șaisprezece, la fel ca șaizeci.',
                },
                {
                  text: 'șasesprezece',
                  corect: false,
                  explicatie: 'Pare logică, dar nu e forma literară.',
                },
                {
                  text: 'șaișpe',
                  corect: false,
                  explicatie: 'E forma din vorbirea grăbită, nu din scris.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 161',
            },
            {
              intrebare: 'Care propoziție e corectă?',
              variante: [
                {
                  text: 'La ora douăsprezece, Cenușăreasa trebuia să plece de la bal.',
                  corect: true,
                  explicatie: 'Doi și compusele lui se acordă cu substantivul feminin: ora douăsprezece.',
                },
                {
                  text: 'La ora doisprezece, Cenușăreasa trebuia să plece de la bal.',
                  corect: false,
                  explicatie: '„Ora” e feminin, deci numeralul trebuie acordat.',
                },
                {
                  text: 'La ora doișpe, Cenușăreasa trebuia să plece de la bal.',
                  corect: false,
                  explicatie: 'Formă din vorbirea familiară, nu din scris.',
                },
              ],
              indiciu: 'Ora e masculin sau feminin?',
              sursa: 'Manual Art 5, p. 161',
            },
            {
              intrebare: 'Cum se scriu numeralele într-un text?',
              variante: [
                {
                  text: 'Cu cifre, cu excepția celor sub zece, care se scriu în cuvinte',
                  corect: true,
                  explicatie: 'Scrii „șapte pitici”, dar „64 de căsuțe”.',
                },
                {
                  text: 'Întotdeauna cu cifre',
                  corect: false,
                  explicatie: 'Numeralele mici se scriu în cuvinte.',
                },
                {
                  text: 'Întotdeauna în cuvinte',
                  corect: false,
                  explicatie: 'Numerele mari se scriu cu cifre, ca textul să rămână ușor de citit.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 161',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-5/lectia-11/schema.svg', titlu: 'Numeralul ordinal. Numeralul, aspecte normative' },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-12/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-12/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 162: vă amintiți Minotaurul? Asociem cele cinci creaturi din imagini cu descrierile a-e.',
          },
          {
            etapa: 'Lectura textului',
            timp: '5 min',
            activitate: '– „Explorare”, ex. 1: citesc fragmentul din „Șifonierul, leul și vrăjitoarea” de C.S. Lewis: întâlnirea lui Lucy cu o ființă ciudată.',
          },
          {
            etapa: 'Explorare, ex. 2-6',
            timp: '10 min',
            activitate: '– Ex. 2-3: cine e ființa descrisă și în ce categorie o punem; două detalii care v-au surprins.\n– Ex. 4: modul și timpul verbelor: ce timp are descrierea și ce timp are acțiunea?\n– Ex. 5-6: schema de la p. 162: ce părți de vorbire numesc ființa și părțile ei, ce părți de vorbire arată trăsăturile; ce aspecte sunt detaliate.',
          },
          {
            etapa: 'Notițe: descrierea unei ființe imaginare',
            timp: '4 min',
            activitate: '– În caiete, după Repere: trăsăturile fizice și morale, accentul pe ce e fabulos, surprinzător; substantive, adjective, verbe la indicativ prezent sau imperfect; aceleași etape ca la descrierea unui obiect; introducere, cuprins, încheiere.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1 (ființe din legende), ex. 2-3 (spiridușul din pod: substantive, adjective, verbe), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '9 min',
            activitate: '– Fiecare inventează o ființă sau alege una din lecturi, îi dă un nume și hotărăște dacă e înspăimântătoare, blândă sau înșelătoare.\n– Începe schema: organizatorul grafic din fișa lecției (înfățișare, puteri, loc) și tabelul „Planul ființei tale” (fișa de exerciții, ex. 5). Trec pe la bănci.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: schema ființei, terminată, cu o propoziție de concluzie; fișa de exerciții, pagina 2 (ex. 4). Schema se aduce ora viitoare, la redactare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; schema ființei imaginare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-12/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-5/lectia-12/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-5/lectia-12/schema.svg',
          titlu: 'Cum descriu o ființă imaginară',
        },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-13/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-13/fisa.pdf)',
          'Fișa de pregătire realizată la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea schemei',
            timp: '3 min',
            activitate: '– Doi-trei elevi își prezintă, într-o propoziție, ființa imaginată și puterea ei.',
          },
          {
            etapa: 'Revizuirea, pe un model',
            timp: '7 min',
            activitate: '– Fișa de exerciții, ex. 1: citim textul despre dragon și stabilim frontal ce trebuie corectat (repetițiile, timpurile amestecate, lipsa comparațiilor); elevii îl rescriu.',
          },
          {
            etapa: 'Începutul',
            timp: '4 min',
            activitate: '– Fișa de exerciții, ex. 2: ce introducere trezește curiozitatea și de ce; fiecare își scrie propria introducere.',
          },
          {
            etapa: 'Redactarea',
            timp: '18 min',
            activitate: '– „Aplicații”, ex. 4: fiecare descrie ființa pe fișa lecției (ciorna), după schemă: introducere, înfățișare, trăsături și puteri, relația cu ceilalți, încheiere.\n– Trec pe la bănci și ajut la ordinea detaliilor și la comparații.',
          },
          {
            etapa: 'Revizuirea',
            timp: '9 min',
            activitate: '– Ex. 5 și ex. 7: fiecare își recitește textul (idei clare, alineate, ce nu e relevant) și bifează lista de control din fișa de exerciții (ex. 3, coloana „Eu”).\n– Schimbă textul cu colegul, care completează coloana „Colegul” și face o sugestie.',
          },
          {
            etapa: 'Titlul',
            timp: '4 min',
            activitate: '– Ex. 6: fișa de exerciții, ex. 4 (trei titluri: misterios, amuzant, simplu); fiecare îl alege pe cel potrivit.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Doi elevi citesc începutul descrierii.\n– Tema: varianta finală, pe o coală, cu titlu și, dacă vreți, un desen al ființei (ex. 6).',
          },
        ],
        evaluare: 'Lista de control (autoevaluare și evaluare reciprocă); observarea redactării; descrierea finală.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-5/lectia-13/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-5/lectia-13/fisa-exercitii.pdf' },
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
          'Manual Art 5, pp. 153-154',
          'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-5/lectia-14/fisa.pdf)',
          'Produsele proiectelor pe grupe',
        ],
        desfasurare: [
          {
            etapa: 'Pregătirea',
            timp: '3 min',
            activitate: '– Stabilim ordinea grupelor și timpul: 5-6 minute de prezentare și un minut de întrebări pentru fiecare. Grupele își pregătesc recuzita.',
          },
          {
            etapa: 'Prezentările',
            timp: '35 min',
            activitate: '– Fiecare grupă prezintă basmul (titlul, comunitatea, personajele, specificul etnic, elementele comune cu alte basme) și ce a aflat despre comunitate (regiunea, sărbători, obiceiuri, port, mâncăruri, formule de salut).\n– Colegii pun câte o întrebare; eu completez grila din fișa proiectului pentru fiecare grupă și notez un punct tare și o sugestie.',
          },
          {
            etapa: 'Reflecții',
            timp: '7 min',
            activitate: '– Discuție, după p. 154: ce elemente comune ați descoperit în basme (teme, personaje, valori, formule)? Care basm v-a plăcut mai mult? Ce ați aflat nou despre comunitățile minoritare?',
          },
          {
            etapa: 'Autoevaluarea',
            timp: '5 min',
            activitate: '– Fiecare elev completează autoevaluarea din manual (documentarea, munca în echipă, prezentarea orală) și rubricile din fișă: ce a mers bine, ce ar face altfel.',
          },
        ],
        evaluare: 'Evaluarea proiectului pe grupe după criteriile din fișă; autoevaluarea elevilor; observarea prezentărilor.',
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-15/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: '– Ciorchine pe tablă: fiecare numește o noțiune din unitate (basm, miraculos, formulă de început, probă, paraverbal, a promite...).',
          },
          {
            etapa: 'Lectura textului',
            timp: '5 min',
            activitate: '– Partea I, p. 164: citesc adaptarea după „Prințesa și mazărea” de Hans Christian Andersen.',
          },
          {
            etapa: 'Ex. 1-3',
            timp: '7 min',
            activitate: '– Ex. 1: ordonăm cronologic ideile principale; ex. 2: indicii spațiali și temporali din listă; ex. 3: răspunsurile corecte A-E, frontal.',
          },
          {
            etapa: 'Ex. 4-10',
            timp: '9 min',
            activitate: '– Frontal: trăsăturile unei prințese adevărate; proba; o altă probă și un titlu nou; alte basme cu prințese; elementul neobișnuit; formula finală și sensul ei.',
          },
          {
            etapa: 'Definiția pentru dicționar',
            timp: '6 min',
            activitate: '– Ex. 11: grupe de 3-4 scriu definiția textului narativ literar pentru un dicționar al copiilor; subliniem cuvintele-cheie și alcătuim împreună definiția cea mai cuprinzătoare.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-3 pe basmul „Râșnița fermecată” (creat pentru fișă), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, lectură și comunicare”; notez ce trebuie reluat înainte de evaluare.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 8 (prezentarea prințesei din poveste); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Definițiile grupelor; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-15/fisa-exercitii.pdf' },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-5/lectia-15/schema.svg',
          titlu: 'Basmul și comunicarea, tot la un loc',
        },
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
          'Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-16/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi elevi citesc prezentarea prințesei.',
          },
          {
            etapa: 'Ex. 12-15',
            timp: '8 min',
            activitate: '– Ex. 12: ce parte de vorbire sunt cuvintele subliniate în text; ex. 13: numeralele cardinale simple și compuse, grupate la tablă.\n– Ex. 14: forma corectă (a-f); ex. 15: propoziții cu un ordinal la masculin și un cardinal simplu la feminin.',
          },
          {
            etapa: 'Ex. 16',
            timp: '3 min',
            activitate: '– Oral: animalul fabulos care a însoțit-o pe prințesă, trei aspecte cu numerale.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '14 min',
            activitate: '– Pagina 1: ex. 1-2 (numeralele din „Masa zânei”) și ex. 3 (scrie corect), individual, 10 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Redactare: ființa invizibilă',
            timp: '13 min',
            activitate: '– Partea a II-a: citim fragmentul din „Animale fantastice și unde le poți găsi” de J.K. Rowling.\n– Fiecare face o schemă scurtă pentru a doua ființă din geamantan (înfățișare, puteri, purtare) și începe descrierea de 6-10 rânduri.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: descrierea ființei invizibile, terminată; fișa de exerciții, pagina 2.\n– Anunț evaluarea: un fragment de basm, numeralul cardinal și ordinal, scrierea corectă a numeralelor, miraculosul, indicii de timp și spațiu, descrierea unei ființe fabuloase.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-5/lectia-16/fisa-exercitii.pdf' },
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
        schema: {
          fisier: '/materiale/clasa-5/unitatea-5/lectia-16/schema.svg',
          titlu: 'Numeralul, tot la un loc',
        },
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
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testele (fragment adaptat după „Lupul cel năzdrăvan și Făt-Frumos” de Petre Ispirescu) și foile de răspuns.\n– Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: numerale, scrierea lor cu litere, ordinale, un și o, înțelegerea textului, indici de timp și spațiu, miraculosul, o replică-promisiune); B, 30 de puncte (descrierea ființei fabuloase care fură merele de aur, 10-15 rânduri); 10 puncte din oficiu.\n– Recomand: circa 25 de minute pentru A, 15 minute pentru B, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual, pe foaia separată; supraveghez discret.\n– Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii își recitesc lucrarea (scrierea numeralelor, ortografia, paragrafele), apoi strâng foile.\n– Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.',
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
