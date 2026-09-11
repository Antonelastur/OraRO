// Unitatea VI: Din carte spre departe — clasa a V-a
// Sursă: manual Art Klett (cuprins pp. 6, 8-9, numerotare proprie L1-L9),
// proiectarea pe unități 2022-2023, planificarea calendaristică. Aceeași
// convenție ca la Unitățile I-V: o lecție de site per lecție de manual, cu
// excepția: lecției 5 (Carte românească de învățătură, 2 activități diferite
// pe aceeași pagină de manual), lecției 8 (Enunțul / Tipuri de enunț, tratate
// separat și în proiectare), lecției 9 (Prezentarea textului, 2 ore) și a
// recapitulării — toate despărțite în câte 2 lecții de site.
//
// Ultima unitate din clasa a V-a construită structural. Materiale-restante.md
// conține acum lista completă, cumulativă, pentru toate cele 6 unități.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx. Planurile ERR mai
// vechi din notite-profesor/ rămân neatinse, sunt altă formă.
//
// Materiale: schema pentru lecția 12 (Tipuri de enunț). Joc pentru 9 (Acte de
// limbaj: a explica, a recomanda, a afirma), 15 și 16 (recapitulare). Restul
// rămân null, listate în materiale-restante.md.

export const unitatea6 = {
  id: 'unitatea-6',
  titlu: 'Unitatea VI: Din carte spre departe',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ nonliterar. Jurnal de călătorie',
      obiective: [
        'Identifică informații esențiale dintr-un jurnal de călătorie, text narativ nonliterar.',
      ],
      sursaManual: 'Art 5, Lecția 1, pp. 168-170 (Jurnal de călătorie)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ nonliterar. Jurnal de călătorie',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică informații esențiale dintr-un jurnal de călătorie, text narativ nonliterar.',
        ],
        resurse: [
          'Manual Art 5, pp. 168-170',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-1/fisa-exercitii.pdf)',
          'Quizul „Jurnalul Monicăi” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 168, ex. 1: ce reprezintă imaginile?\n– Ex. 2-3: de ce poartă străzile nume de personalități? Localități sau școli cu nume de domnitori (și școala noastră, dacă e cazul).\n– Ați vizitat orașe în care s-au petrecut evenimente istorice? Ce v-a impresionat?',
          },
          {
            etapa: 'Despre text',
            timp: '2 min',
            activitate: '– Caseta de la p. 168: jurnalul Monicăi, elevă în clasa a V-a, scris la cererea profesoarei în cele trei zile ale excursiei „Din carte spre departe”.',
          },
          {
            etapa: 'Lectura model',
            timp: '14 min',
            activitate: '– Ex. 4: citesc jurnalul (sau pornesc înregistrarea din manualul digital); elevii urmăresc.\n– Lămurim cuvintele: incunabul (explicat chiar de Monica), cronică, slavonă, litere chirilice, tiparniță, omiliar, diacon, ban, călău, satâr; nota despre Neagoe Basarab.\n– Notez pe tablă cele trei zile și orașele.',
          },
          {
            etapa: 'Impresii după prima lectură',
            timp: '7 min',
            activitate: '– P. 170, ex. 1-4: ce v-a amintit de situații trăite? V-a plăcut jurnalul? Ce v-a atras atenția? Ce vi s-a părut mai puțin interesant?',
          },
          {
            etapa: 'Imaginile din manual',
            timp: '3 min',
            activitate: '– Ilustrațiile de la pp. 169-170: se potrivesc cu textul? Ce detalii lipsesc din imagini sau din text?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (unde a fost?) și ex. 2 (cuvinte din jurnal), individual, 9 minute.\n– Verificare, 4 minute; la clasele rapide, quizul „Jurnalul Monicăi”.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: ex. 5 de la „Impresii după prima lectură” (situația amuzantă), în scris; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-1/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Jurnalul Monicăi',
          pasi: [
            {
              intrebare: 'Cine scrie jurnalul de călătorie?',
              variante: [
                {
                  text: 'Monica, elevă în clasa a V-a, la cererea profesoarei, în cele trei zile ale excursiei',
                  corect: true,
                  explicatie: 'Excursia tematică se numea chiar „Din carte spre departe”.',
                },
                {
                  text: 'Un ghid turistic',
                  corect: false,
                  explicatie: 'Ghidul apare în jurnal, dar nu el îl scrie.',
                },
                {
                  text: 'Profesoara Monicăi',
                  corect: false,
                  explicatie: 'Profesoara a cerut jurnalul; l-a scris eleva.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 168',
            },
            {
              intrebare: 'Pe cine crede Monica, la început, că a întâlnit pe stradă, în Alba Iulia?',
              variante: [
                {
                  text: 'Pe Mihai Viteazul',
                  corect: true,
                  explicatie: 'Era de fapt un participant la festivalul de reconstituire istorică.',
                },
                {
                  text: 'Pe Ștefan cel Mare',
                  corect: false,
                  explicatie: 'Pe Ștefan și-l amintește din altă excursie, la Putna.',
                },
                {
                  text: 'Pe Superman',
                  corect: false,
                  explicatie: 'Mantia albă o face să se gândească la supereroi, dar nu el e.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 168-169',
            },
            {
              intrebare: 'Ce sunt incunabulele?',
              variante: [
                {
                  text: 'Cărți tipărite în primii ani ai tiparului, înainte de 1500',
                  corect: true,
                  explicatie: 'De aceea sunt atât de valoroase.',
                },
                {
                  text: 'Manuscrise scrise pe tăblițe de lut',
                  corect: false,
                  explicatie: 'Tăblițele le vede la Târgoviște; incunabulele sunt tipărite.',
                },
                {
                  text: 'Cărți electronice',
                  corect: false,
                  explicatie: 'Sunt printre cele mai vechi cărți tipărite, nu printre cele mai noi.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 169',
            },
            {
              intrebare: 'Ce află Monica la Muzeul „Prima Școală Românească” din Brașov?',
              variante: [
                {
                  text: 'Că în 1495 s-a zidit acolo clădirea primei școli în care s-a învățat în limba română',
                  corect: true,
                  explicatie: 'Școala era în curtea bisericii „Sfântul Nicolae”.',
                },
                {
                  text: 'Că acolo a învățat Ion Creangă',
                  corect: false,
                  explicatie: 'Nică a învățat la Humulești; Monica doar își amintește de el.',
                },
                {
                  text: 'Că Brașovul a fost capitala Țării Românești',
                  corect: false,
                  explicatie: 'Vechea capitală amintită în jurnal e Târgoviște.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 169',
            },
            {
              intrebare: 'Ce „record istoric” îi atribuie Monica diaconului Coresi?',
              variante: [
                {
                  text: 'A tipărit 39 de cărți în secolul al XVI-lea',
                  corect: true,
                  explicatie: 'Nimeni altcineva nu mai tipărise atâtea în acel secol.',
                },
                {
                  text: 'A inventat tiparul',
                  corect: false,
                  explicatie: 'Tiparul cu litere mobile l-a inventat Gutenberg.',
                },
                {
                  text: 'A domnit 47 de ani',
                  corect: false,
                  explicatie: 'Acela e recordul lui Ștefan cel Mare, nu al lui Coresi.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 170',
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
      titlu: 'Trăsături ale textului narativ nonliterar',
      obiective: [
        'Identifică reperele de timp și de spațiu și trăsăturile care fac dintr-un jurnal de călătorie un text nonliterar.',
      ],
      sursaManual: 'Art 5, Lecția 2, p. 171',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Trăsături ale textului narativ nonliterar',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică reperele de timp și de spațiu și trăsăturile care fac dintr-un jurnal de călătorie un text nonliterar.',
        ],
        resurse: [
          'Manual Art 5, p. 171',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-2/fisa-exercitii.pdf)',
          'Schema „Trăsături ale textului narativ nonliterar” (/materiale/clasa-5/unitatea-6/lectia-2/schema.svg)',
          'Quizul „Textul narativ nonliterar” (materialul de joc al lecției)',
          'Hartă a României',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Câțiva elevi citesc situațiile amuzante alese; ajungem la ideea că într-un jurnal notezi și ce te-a amuzat.',
          },
          {
            etapa: 'Explorare, ex. 1-3',
            timp: '10 min',
            activitate: '– Ex. 1: indicii de timp, în caiet, în patru coloane (date, zile ale săptămânii, momente ale zilei, alți indici).\n– Ex. 2: cât a durat excursia și după ce ne dăm seama.\n– Ex. 3, în perechi: cuvintele despre spațiu, grupate în localități, instituții, alte locuri.',
          },
          {
            etapa: 'Explorare, ex. 4-6',
            timp: '5 min',
            activitate: '– Ex. 4: găsim localitățile pe harta României. Ex. 5: verificarea instituțiilor pe internet rămâne pentru acasă.\n– Ex. 6: ați vizitat vreunul dintre locuri? Ce loc ați vrea să vizitați?',
          },
          {
            etapa: 'Explorare, ex. 7-9',
            timp: '6 min',
            activitate: '– Ex. 7: ordonăm ideile în caiet; ex. 8: participanții la întâmplări; ex. 9: fapte și locuri reale sau imaginare? Elevii își motivează răspunsul.',
          },
          {
            etapa: 'Notițe: textul narativ nonliterar',
            timp: '4 min',
            activitate: '– În caiete, după Repere și schema lecției: întâmplări reale, în timp și spațiu reale; participanți (persoane reale), nu personaje; exemple de texte nonliterare (jurnal, reportaj, articol, interviu, scrisoare).',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Fiecare scrie un răspuns scurt: de ce e jurnalul un text narativ nonliterar? Apoi, în perechi, formulează un răspuns comun; două perechi îl citesc.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (literar sau nonliterar?), ex. 2-3 (jurnalul de la Sibiu), individual, 8 minute.\n– Verificare, 4 minute; la clasele rapide, quizul „Textul narativ nonliterar”.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: o scurtă notă de jurnal despre ce ai aflat azi despre textul nonliterar; ex. 5 (existența instituțiilor, pe internet); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; răspunsurile perechilor; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-2/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Textul narativ nonliterar',
          pasi: [
            {
              intrebare: 'Prin ce seamănă textul narativ nonliterar cu cel literar?',
              variante: [
                {
                  text: 'Amândouă prezintă o succesiune de întâmplări, în ordine logică și temporală',
                  corect: true,
                  explicatie: 'De aceea sunt amândouă narative.',
                },
                {
                  text: 'Amândouă prezintă întâmplări inventate',
                  corect: false,
                  explicatie: 'În textul nonliterar întâmplările sunt reale.',
                },
                {
                  text: 'Amândouă sunt scrise în versuri',
                  corect: false,
                  explicatie: 'Niciunul nu cere versuri.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 171',
            },
            {
              intrebare: 'Prin ce se deosebește textul narativ nonliterar de cel literar?',
              variante: [
                {
                  text: 'Întâmplările s-au petrecut în realitate, într-un anumit timp și spațiu',
                  corect: true,
                  explicatie: 'Poți verifica pe hartă localitățile din jurnalul Monicăi.',
                },
                {
                  text: 'Nu are acțiune',
                  corect: false,
                  explicatie: 'Are acțiune, altfel n-ar fi narativ.',
                },
                {
                  text: 'Are întotdeauna dialog',
                  corect: false,
                  explicatie: 'Dialogul nu e o condiție.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 171',
            },
            {
              intrebare: 'Cum se numesc persoanele care iau parte la acțiune într-un text nonliterar?',
              variante: [
                {
                  text: 'Participanți',
                  corect: true,
                  explicatie: 'Sunt persoane reale și nu se confundă cu personajele literare.',
                },
                {
                  text: 'Personaje',
                  corect: false,
                  explicatie: 'Personajele țin de textul literar.',
                },
                {
                  text: 'Eroi',
                  corect: false,
                  explicatie: 'Nu e termenul folosit pentru textul nonliterar.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 171',
            },
            {
              intrebare: 'Care dintre acestea este un text nonliterar?',
              variante: [
                {
                  text: 'Un reportaj',
                  corect: true,
                  explicatie: 'Reportajul relatează fapte reale.',
                },
                {
                  text: 'Un basm',
                  corect: false,
                  explicatie: 'Basmul prezintă întâmplări imaginare.',
                },
                {
                  text: 'O legendă',
                  corect: false,
                  explicatie: 'Legenda amestecă realul cu miraculosul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 171',
            },
            {
              intrebare: 'Care e un indice de timp din jurnalul Monicăi?',
              variante: [
                {
                  text: 'Sâmbătă, 7 mai',
                  corect: true,
                  explicatie: 'O zi a săptămânii și o dată.',
                },
                {
                  text: 'Alba Iulia',
                  corect: false,
                  explicatie: 'E un indice de spațiu, o localitate.',
                },
                {
                  text: 'Batthyaneum',
                  corect: false,
                  explicatie: 'E o instituție, deci tot un reper de spațiu.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 171',
            },
            {
              intrebare: 'Cât durează excursia Monicăi?',
              variante: [
                {
                  text: 'Trei zile, de vineri, 6 mai, până duminică, 8 mai',
                  corect: true,
                  explicatie: 'Datele de la începutul fiecărei însemnări arată durata.',
                },
                {
                  text: 'O săptămână',
                  corect: false,
                  explicatie: 'Jurnalul are doar trei însemnări, pe trei zile.',
                },
                {
                  text: 'O singură zi',
                  corect: false,
                  explicatie: 'Monica trece prin trei orașe, în zile diferite.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 168-171',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-6/lectia-2/schema.svg', titlu: 'Trăsături ale textului narativ nonliterar' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Discută semnificația textului literar și realizează un scurt exercițiu de scriere creativă, pe o temă de cultură națională.',
      ],
      sursaManual: 'Art 5, Lecția 3, pp. 172-173',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Discută semnificația textului literar și realizează un scurt exercițiu de scriere creativă, pe o temă de cultură națională.',
        ],
        resurse: [
          'Manual Art 5, pp. 172-173',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-3/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-3/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '3 min',
            activitate: '– Doi-trei elevi citesc nota de jurnal.',
          },
          {
            etapa: 'Jocul X și 0',
            timp: '12 min',
            activitate: '– „Interpretare”, p. 172, ex. 1: fiecare desenează în caiet tabelul de nouă căsuțe, cu titlurile (fapte interesante, informații, opinii, tema, vocabular, detalii, întrebări, imagini, sumar).\n– Ex. 2, în perechi: pe rând, fiecare marchează o căsuță și răspunde oral la cerința ei; câștigă cine are primul trei căsuțe în linie.\n– La final, câteva perechi spun răspunsurile la „tema” și „sumar”.',
          },
          {
            etapa: 'Interpretare, ex. 4-7',
            timp: '7 min',
            activitate: '– Ex. 4-5: de ce folosește Monica persoana a II-a, într-un text scris pentru sine? Formulele de adresare către jurnal.\n– Ex. 6: de ce se schimbă formulele (elevii aleg o variantă sau propun alta); ex. 7: de ce vorbește despre sănătatea ei după întâlnirea cu Mihai Viteazul.',
          },
          {
            etapa: 'Interpretare, ex. 8-10',
            timp: '6 min',
            activitate: '– Ex. 8: „Cartea recordurilor”: tabelul cu personalitățile și realizările lor, în caiete.\n– Ex. 9: reacția Monicăi la Omiliar și promisiunea ei; ex. 10: un loc care v-a amintit de o carte.',
          },
          {
            etapa: 'Interpretare, ex. 12-14',
            timp: '4 min',
            activitate: '– Frontal: trăsăturile autoarei, cum prezintă excursia (elevii aleg a, b sau c), e un text bun sau nu?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (ce spune despre Monica?) și ex. 2 (jurnal sau ghid turistic?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Autoevaluare L1-L3',
            timp: '4 min',
            activitate: '– P. 173: elevii completează în caiet cele trei afirmații; citim câteva.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: ex. 3 (cerințele din joc la care n-au răspuns) și ex. 11 (scurtă istorie a cărții, 8-10 rânduri) sau „Portofoliu” (o pagină de jurnal de cel mult 100 de cuvinte); fișa lecției; fișa de exerciții, pagina 2. Opțional: „Provocări”, Festivalul Roman Apulum.',
          },
        ],
        evaluare: 'Observarea jocului în perechi; autoevaluarea; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-3/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-6/lectia-3/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Text auxiliar. Scrisoarea III de Mihai Eminescu (fragment)',
      obiective: [
        'Identifică tema textului și formulează ideile principale dintr-un fragment din Scrisoarea III de Mihai Eminescu.',
      ],
      sursaManual: 'Art 5, Lecția 4, „Noi pagini, alte idei”, pp. 174-175 (Scrisoarea III de Mihai Eminescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Scrisoarea III de Mihai Eminescu (fragment)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică tema textului și formulează ideile principale dintr-un fragment din Scrisoarea III de Mihai Eminescu.',
        ],
        resurse: [
          'Manual Art 5, pp. 174-175',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Ce domnitori a pomenit Monica în jurnal?\n– Caseta de la p. 174: Mihai Eminescu (1850-1889), poetul național; Mircea cel Bătrân și sultanul Baiazid; bătălia de la Rovine (1394 sau 1395).',
          },
          {
            etapa: 'Lectura model',
            timp: '8 min',
            activitate: '– Citesc fragmentul cu voce tare; elevii urmăresc.\n– Lămurim notele de subsol (solul cu năframă, bănat, Aliotman, Baiazid „Fulgerul”, Nicopole, pristol) și cuvintele zale, toiag, moșie, lauri.',
          },
          {
            etapa: 'Lectura pe roluri',
            timp: '6 min',
            activitate: '– „Discutarea textului”, ex. 1: patru elevi citesc pe roluri (povestitorul, solul, Mircea, Baiazid); clasa urmărește tonul fiecăruia.',
          },
          {
            etapa: 'Discutarea textului, ex. 2-3',
            timp: '5 min',
            activitate: '– Ex. 2: ce înseamnă „schimb a ta coroană într-o ramură de spini” (elevii aleg varianta).\n– Ex. 3: o abatere de la adevărul istoric; o căutăm cu ajutorul casetei și al notelor din subsol.',
          },
          {
            etapa: 'Ideile principale',
            timp: '10 min',
            activitate: '– Ex. 4, în perechi: patru fragmente logice, cuvântul-cheie și ideea principală a fiecăruia, apoi ideile secundare, în caiete.\n– Două perechi își citesc ideile; completăm pe tablă.',
          },
          {
            etapa: 'Personajele',
            timp: '4 min',
            activitate: '– Ex. 5: o trăsătură a solului, două ale lui Baiazid, trei ale lui Mircea, desprinse din felul în care vorbește fiecare.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '9 min',
            activitate: '– Pagina 1: ex. 1 (cine spune?) și ex. 2 (cuvinte vechi), individual, 6 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 6 (ce este pentru tine iubirea de țară: un text scurt, o poezie sau un desen); „Portofoliu” (Darius și cruciadele); fișa lecției (jurnalul cu dublă intrare); fișa de exerciții, pagina 2.\n– „Biblioteci deschise”: „Istoria lui Răzvan” de Horia Corcheș; „Mircea cel Mare și luptele sale cu turcii” de Neagu Djuvara și Radu Oltean.',
          },
        ],
        evaluare: 'Observarea lecturii pe roluri; ideile principale ale perechilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-6/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Carte românească de învățătură (I), de la prima carte tipărită la cartea digitală',
      obiective: [
        'Identifică tema unui text nonliterar despre istoria cărții tipărite românești.',
      ],
      sursaManual: 'Art 5, Lecția 5, p. 176, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Carte românească de învățătură (I), de la prima carte tipărită la cartea digitală',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Identifică tema unui text nonliterar despre istoria cărții tipărite românești.',
        ],
        resurse: [
          'Manual Art 5, pp. 176-177',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-5/fisa-exercitii.pdf)',
          'Infograficul „Carte românească de învățătură (I)” (/materiale/clasa-5/unitatea-6/lectia-5/infografic.svg)',
          'Quizul „De la manuscris la tipar” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '6 min',
            activitate: '– „Pentru început”, p. 176, ex. 1: desenul cu tăblițele de argilă și replica domnului Oltean: v-ar fi plăcut să scrieți pe tăblițe?\n– Ex. 2, în perechi: două-trei motive pentru manualele digitale și tabletele din școală.',
          },
          {
            etapa: 'Lectura textului',
            timp: '10 min',
            activitate: '– Citesc articolul lui Iulian Comănescu, o postare de blog adresată fiicei lui, Anais; elevii urmăresc.\n– Lămurim cuvintele: link, tetraevanghel, e-book, Amazon, papirus, pergament, litere mobile.',
          },
          {
            etapa: 'Explorare, ex. 1-8',
            timp: '10 min',
            activitate: '– Frontal: unde a apărut articolul; istoria cuvântului blog (ex. 2) și ce ați scrie pe un blog; despre ce scrie autorul.\n– Forma textului și cine e Anais; motivul postării (primul paragraf); tema (elevii aleg varianta); ordinea prețurilor (ex. 8).',
          },
          {
            etapa: 'Notițe: drumul cărții',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 177) și infograficul lecției: manuscrisele copiate de călugări pe pergament; Gutenberg (1440): presa tipografică, literele mobile, cerneala pe bază de ulei; Biblia tipărită în latină; Coresi, la Brașov; cartea electronică.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (drumul cărții) și ex. 2 (adevărat sau fals?), individual, 9 minute.\n– Verificare, 4 minute; la clasele rapide, quizul „De la manuscris la tipar”.',
          },
          {
            etapa: 'Axa timpului',
            timp: '4 min',
            activitate: '– Pe tablă: deasupra axei, momentele din articol; dedesubt, cărțile văzute de Monica în excursie (două echipe dictează).',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: „Aplicații”, p. 177, ex. 1-3, în scris; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-5/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'De la manuscris la tipar',
          pasi: [
            {
              intrebare: 'Cine scria cărțile în Evul Mediu, înainte de tipar?',
              variante: [
                {
                  text: 'Călugării copiști, de mână, pe pergament',
                  corect: true,
                  explicatie: 'Copierea unui manuscris dura mult timp.',
                },
                {
                  text: 'Tipografii',
                  corect: false,
                  explicatie: 'Tipografiile moderne au apărut abia după Gutenberg.',
                },
                {
                  text: 'Profesorii, pentru elevi',
                  corect: false,
                  explicatie: 'Copiștii lucrau mai ales pentru nobili, mănăstiri și universități.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 177',
            },
            {
              intrebare: 'Ce a adus nou Gutenberg?',
              variante: [
                {
                  text: 'Presa tipografică, cu litere mobile dintr-un aliaj de plumb și cerneală pe bază de ulei',
                  corect: true,
                  explicatie: 'Chinezii tipăreau cu mult înaintea lui; noutatea au fost literele separate.',
                },
                {
                  text: 'Hârtia',
                  corect: false,
                  explicatie: 'Cărțile trecuseră pe hârtie încă din secolul al XI-lea.',
                },
                {
                  text: 'Scrisul',
                  corect: false,
                  explicatie: 'Oamenii scriau de mii de ani, chiar pe tăblițe de lut.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 176-177',
            },
            {
              intrebare: 'Care a fost marele avantaj al literelor mobile?',
              variante: [
                {
                  text: 'Puteau fi scoase și refolosite la pagina sau la cartea următoare',
                  corect: true,
                  explicatie: 'O placă sculptată în lemn tipărea mereu aceeași pagină.',
                },
                {
                  text: 'Erau mai frumoase',
                  corect: false,
                  explicatie: 'Avantajul era practic, nu estetic.',
                },
                {
                  text: 'Nu mai era nevoie de cerneală',
                  corect: false,
                  explicatie: 'Literele se dădeau cu tuș înainte de tipărire.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 176',
            },
            {
              intrebare: 'Care a fost prima carte tipărită cu invenția lui Gutenberg?',
              variante: [
                {
                  text: 'Biblia, în limba latină',
                  corect: true,
                  explicatie: 'A tipărit-o în 150-180 de exemplare.',
                },
                {
                  text: 'Tetraevanghelul lui Coresi',
                  corect: false,
                  explicatie: 'Coresi a tipărit la Brașov, abia pe la 1560.',
                },
                {
                  text: 'Un dicționar',
                  corect: false,
                  explicatie: 'Prima carte a fost una religioasă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, pp. 176-177',
            },
            {
              intrebare: 'Ce a tipărit diaconul Coresi, pe la 1560, la Brașov?',
              variante: [
                {
                  text: 'Tetraevanghelul, în limba română',
                  corect: true,
                  explicatie: 'Cartea cuprinde cele patru Evanghelii.',
                },
                {
                  text: 'Biblia lui Gutenberg',
                  corect: false,
                  explicatie: 'Aceea fusese tipărită în Germania, cu un secol înainte.',
                },
                {
                  text: 'Primul ziar românesc',
                  corect: false,
                  explicatie: 'Coresi a tipărit cărți religioase.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 176',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-6/lectia-5/infografic.svg', titlu: 'Carte românească de învățătură (I)' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Carte românească de învățătură (II), documentare online',
      obiective: [
        'Se documentează pe baza unui articol online despre cartea tipărită de-a lungul timpului și formulează o opinie.',
      ],
      sursaManual: 'Art 5, Lecția 5, p. 177, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Carte românească de învățătură (II), documentare online',
        data: null,
        tipOra: 'Predare, lectură nonliterară',
        durata: 50,
        obiective: [
          'Se documentează pe baza unui articol online despre cartea tipărită de-a lungul timpului și formulează o opinie.',
        ],
        resurse: [
          'Manual Art 5, p. 177',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-6/fisa-exercitii.pdf)',
          'Infograficul „Carte românească de învățătură (II)” (/materiale/clasa-5/unitatea-6/lectia-6/infografic.svg)',
          'Un articol online despre istoria cărții, pregătit de profesor',
          'Quizul „De la tipar la cartea digitală” (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '4 min',
            activitate: '– Cum verificați dacă o informație găsită pe internet e adevărată? Notez răspunsurile pe tablă.',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '10 min',
            activitate: '– Verificăm tema: cum se făceau cărțile înainte de tipar (ex. 1); de ce „tiparul exista deja” (ex. 2).\n– Ex. 3, în perechi: explicațiile despre funcționarea tiparului și despre rezistența cărții în timp.\n– Ex. 4: de ce se numește așa articolul?',
          },
          {
            etapa: 'Un școlar din trecut',
            timp: '4 min',
            activitate: '– Ex. 5: doi-trei elevi spun ce i-ar povesti unui școlar din trecut despre tehnologia din școală și ce l-ar întreba.',
          },
          {
            etapa: 'Notițe: documentarea online',
            timp: '3 min',
            activitate: '– În caiete: ce notăm (titlul, autorul, adresa, data consultării) și cum recunoaștem o sursă de încredere (autor, site oficial, surse citate).',
          },
          {
            etapa: 'Obținerea performanței: documentarea',
            timp: '15 min',
            activitate: '– Fișa de exerciții, ex. 1 (sursă de încredere?), individual, 5 minute, cu verificare rapidă.\n– Citim ghidat articolul online pregătit; elevii completează fișa de documentare (ex. 2) și comparăm informațiile cu infograficul.',
          },
          {
            etapa: 'Opinii',
            timp: '6 min',
            activitate: '– Trei-patru elevi spun oral dacă peste 50 de ani vom mai citi cărți tipărite, cu un argument din articol.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „De la tipar la cartea digitală”, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2 (cuvintele din lumea digitală și opinia scrisă).',
          },
        ],
        evaluare: 'Fișa de documentare; opiniile orale; quizul.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-6/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'De la tipar la cartea digitală',
          pasi: [
            {
              intrebare: 'Prin ce forme au trecut cărțile, după articolul lui Iulian Comănescu?',
              variante: [
                {
                  text: 'Suluri de papirus, pergamente, hârtie, tipar, apoi ecranul calculatorului',
                  corect: true,
                  explicatie: 'De fiecare dată cineva a plâns după forma veche.',
                },
                {
                  text: 'Direct de la tăblițe de lut la tabletă',
                  corect: false,
                  explicatie: 'Între ele au fost multe alte forme.',
                },
                {
                  text: 'Au rămas mereu la fel',
                  corect: false,
                  explicatie: 'Forma s-a schimbat de multe ori, esența nu.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 177',
            },
            {
              intrebare: 'Ce este un blog?',
              variante: [
                {
                  text: 'Un jurnal online, cu articole periodice, comentarii, imagini, materiale video',
                  corect: true,
                  explicatie: 'Cuvântul vine din englezescul web log, „jurnal pe internet”.',
                },
                {
                  text: 'O carte tipărită',
                  corect: false,
                  explicatie: 'Blogul există doar pe internet.',
                },
                {
                  text: 'Un joc video',
                  corect: false,
                  explicatie: 'Blogul e un spațiu de scris, nu de joacă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 177',
            },
            {
              intrebare: 'Ce avantaje aduc suporturile electronice, după manual?',
              variante: [
                {
                  text: 'Spațiul de stocare s-a micșorat enorm, iar textele, imaginile și hărțile pot fi consultate pe internet',
                  corect: true,
                  explicatie: 'O bibliotecă întreagă încape pe o tabletă.',
                },
                {
                  text: 'Cărțile electronice nu mai au cuprins și capitole',
                  corect: false,
                  explicatie: 'Arată, în mare, ca cele tipărite: coperte, cuprins, capitole.',
                },
                {
                  text: 'Nu mai e nevoie să citești',
                  corect: false,
                  explicatie: 'Se schimbă suportul, nu și cititul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 177',
            },
            {
              intrebare: 'Ce crede autorul articolului despre viitorul cărților?',
              variante: [
                {
                  text: 'Nu vor muri: au mai trecut prin multe schimbări de formă și au supraviețuit',
                  corect: true,
                  explicatie: 'Vor muri doar după ultimul cititor, spune el.',
                },
                {
                  text: 'Vor dispărea din cauza e-book-urilor',
                  corect: false,
                  explicatie: 'Dimpotrivă, arată că se vând și cele de hârtie.',
                },
                {
                  text: 'Vor rămâne doar pe hârtie',
                  corect: false,
                  explicatie: 'Le vede și pe tabletă, și pe telefon.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 177',
            },
            {
              intrebare: 'Care e ordinea corectă, de la cel mai ieftin la cel mai scump?',
              variante: [
                {
                  text: 'un telefon inteligent, Biblia lui Gutenberg, o Biblie copiată de mână',
                  corect: true,
                  explicatie: 'Biblia lui Gutenberg costa mai mult decât un iPhone, dar infinit mai puțin decât una copiată de mână.',
                },
                {
                  text: 'Biblia lui Gutenberg, un telefon inteligent, o Biblie copiată de mână',
                  corect: false,
                  explicatie: 'Biblia tipărită era mai scumpă decât un telefon de azi.',
                },
                {
                  text: 'o Biblie copiată de mână, Biblia lui Gutenberg, un telefon inteligent',
                  corect: false,
                  explicatie: 'E ordinea inversă: manuscrisul era cel mai scump.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 176',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-6/lectia-6/infografic.svg', titlu: 'Carte românească de învățătură (II)' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Identitate națională',
      obiective: [
        'Înțelege aspecte privind identitatea națională, pe baza unor simboluri precum sigiliul și stema României.',
      ],
      sursaManual: 'Art 5, Lecția 6, pp. 178-179',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Identitate națională',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Înțelege aspecte privind identitatea națională, pe baza unor simboluri precum sigiliul și stema României.',
        ],
        resurse: [
          'Manual Art 5, pp. 178-179',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-7/fisa-exercitii.pdf)',
          'Infograficul „Identitate națională” (/materiale/clasa-5/unitatea-6/lectia-7/infografic.svg)',
          'Quizul „Identitate națională. Stema României” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 178, ex. 1: ce copac ați desena, fără să vă gândiți prea mult, și de ce?\n– Ex. 2: asociem copacii cu țările. Discutăm pe scurt despre simbolurile oficiale și cele neoficiale ale unei țări.',
          },
          {
            etapa: 'Stema României',
            timp: '10 min',
            activitate: '– „Explorare”, ex. 1: citesc textul despre stemă; urmărim elementele pe imaginea stemei și pe infograficul lecției.\n– a) Unde ați văzut stema? b) Răspundem la întrebări: când a fost elaborată stema, ce evocă coroana de oțel, la ce domnitori trimit sceptrul și sabia.',
          },
          {
            etapa: 'Explorare, ex. 2-3',
            timp: '5 min',
            activitate: '– Ex. 2: asociem simbolurile cu semnificațiile; ex. 3: ce alte însemne oficiale ale României cunoașteți?',
          },
          {
            etapa: 'Notițe: identitatea națională',
            timp: '5 min',
            activitate: '– În caiete, după Repere: identitatea națională (sentimentul de apartenență), națiunea, patriotismul și valorile comune (strămoși, istorie, eroi, limbă, monumente, peisaje, tradiții).',
          },
          {
            etapa: 'Aplicații, ex. 1-5',
            timp: '9 min',
            activitate: '– Ex. 1-2: la ce materii ați întâlnit teme de identitate națională și de ce e bine să le discutăm la școală.\n– Ex. 3-4, individual: cinci valori alese din listă și două comportamente pentru fiecare.\n– Ex. 5: doi-trei elevi prezintă o persoană care trăiește după una dintre aceste valori.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (elementele stemei) și ex. 2 (provincia și simbolul ei), individual, 8 minute.\n– Verificare, 4 minute; la clasele rapide, quizul „Identitate națională. Stema României”.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Explorare”, ex. 4 (stema județului nostru, desenată, cu semnificațiile elementelor); „Aplicații”, ex. 6 (trei întrebări pentru un test despre stemă); „Portofoliu” (blazonul propriu); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-7/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Identitate națională. Stema României',
          pasi: [
            {
              intrebare: 'Ce este identitatea națională?',
              variante: [
                {
                  text: 'Sentimentul de apartenență a unei persoane la o națiune',
                  corect: true,
                  explicatie: 'Se manifestă prin patriotism.',
                },
                {
                  text: 'Actul de identitate',
                  corect: false,
                  explicatie: 'Buletinul e un document, nu un sentiment.',
                },
                {
                  text: 'Limba străină preferată',
                  corect: false,
                  explicatie: 'Nu are legătură cu limbile străine.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 179',
            },
            {
              intrebare: 'Ce simbolizează vulturul de aur cu cruce de pe stemă?',
              variante: [
                {
                  text: 'Dinastia Basarabilor; e și simbol al latinității, al curajului și al libertății',
                  corect: true,
                  explicatie: 'E elementul central al stemei.',
                },
                {
                  text: 'Marea Neagră',
                  corect: false,
                  explicatie: 'Marea e reprezentată de cei doi delfini.',
                },
                {
                  text: 'Cetățile Transilvaniei',
                  corect: false,
                  explicatie: 'Pe acestea le arată cele șapte turnuri.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 178',
            },
            {
              intrebare: 'Pe cine amintesc sceptrul și sabia din ghearele vulturului?',
              variante: [
                {
                  text: 'Sceptrul, pe Mihai Viteazul; sabia, pe Ștefan cel Mare',
                  corect: true,
                  explicatie: 'Sunt însemnele suveranității.',
                },
                {
                  text: 'Sceptrul, pe Ștefan cel Mare; sabia, pe Mihai Viteazul',
                  corect: false,
                  explicatie: 'E invers.',
                },
                {
                  text: 'Pe Mircea cel Bătrân și pe Vlad Țepeș',
                  corect: false,
                  explicatie: 'Stema nu îi amintește prin aceste însemne.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 178',
            },
            {
              intrebare: 'Ce reprezintă cei doi delfini de pe stemă?',
              variante: [
                {
                  text: 'Teritoriile Mării Negre, adică Dobrogea',
                  corect: true,
                  explicatie: 'Stau față în față, cu capul în jos.',
                },
                {
                  text: 'Moldova',
                  corect: false,
                  explicatie: 'Moldova are bourul cu stea între coarne.',
                },
                {
                  text: 'Banatul și Oltenia',
                  corect: false,
                  explicatie: 'Acestea au podul lui Traian și leul.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 178',
            },
            {
              intrebare: 'Din ce a fost turnată coroana de oțel, adăugată stemei în 2016?',
              variante: [
                {
                  text: 'Din țeava unui tun otoman capturat în Războiul de Independență din 1877-1878',
                  corect: true,
                  explicatie: 'E coroana regală a României.',
                },
                {
                  text: 'Din aurul dacilor',
                  corect: false,
                  explicatie: 'E de oțel, nu de aur.',
                },
                {
                  text: 'Din fierul unei cetăți medievale',
                  corect: false,
                  explicatie: 'Metalul vine de la un tun, nu de la o cetate.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 178',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-5/unitatea-6/lectia-7/infografic.svg', titlu: 'Identitate națională' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Proiect de grup. Imagini ale domnitorului (anunțare)',
      obiective: [
        'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Imagini ale domnitorului.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 180 (anunțare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect de grup. Imagini ale domnitorului (anunțare)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Imagini ale domnitorului.',
        ],
        resurse: [
          'Manual Art 5, pp. 180-182',
          'Fișa proiectului (/materiale/clasa-5/unitatea-6/lectia-8/fisa.pdf)',
          'Bilețele pentru tragerea la sorți a domnitorilor',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– Ce domnitori am întâlnit în unitate (în jurnalul Monicăi, în „Scrisoarea III”, pe stemă)? Privim portretele de la pp. 180-182.',
          },
          {
            etapa: 'Sarcina de lucru',
            timp: '8 min',
            activitate: '– P. 180: patru grupe, câte un domnitor, pornind de la fragmentul și imaginea din manual:\n– Ștefan cel Mare („Cântecele lui Ștefan Vodă”, poezie populară culeasă de Vasile Alecsandri; portretul din Tetraevanghelul de la Humor); Mircea cel Bătrân (Dimitrie Bolintineanu, „Mircea cel Mare și solii”; pictura de la Argeș); Mihai Viteazul (Nicolae Bălcescu, „Românii supt Mihai-Voievod Viteazul”; tabloul lui Mișu Popp); Vlad Țepeș (Neagu Djuvara și Radu Oltean, „De la Vlad Țepeș la Dracula Vampirul”; tabloul de la Viena).',
          },
          {
            etapa: 'Pașii și calendarul',
            timp: '7 min',
            activitate: '– O săptămână, pașii de la p. 182: ce v-a reținut atenția în text; tipul produsului (poster sau material realizat cu un editor grafic) și rolurile (coordonator, editorul textului, editorul imaginilor); planul; dezvoltarea (numele, epoca, trăsăturile din text, valorile, imaginea: trăsături fizice, ținută, culori); produsul; prezentarea.\n– Stabilim data prezentării.',
          },
          {
            etapa: 'Criteriile de evaluare',
            timp: '5 min',
            activitate: '– Citim lista de autoevaluare de la p. 182 și grila din fișa proiectului, cu câte un exemplu pentru fiecare criteriu.',
          },
          {
            etapa: 'Formarea grupelor',
            timp: '22 min',
            activitate: '– Grupele se formează și trag la sorți domnitorul.\n– Fiecare grupă citește fragmentul cu voce tare, notează în caiet ce i-a reținut atenția (pasul 1), alege produsul, își împarte rolurile și schițează planul.\n– Trec pe la fiecare grupă și verific planul.',
          },
          {
            etapa: 'Încheiere',
            timp: '3 min',
            activitate: '– Reamintesc data prezentării și ce aduce fiecare rol la ora aceea.',
          },
        ],
        evaluare: 'Fișa de pornire a proiectului; observarea organizării grupelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-8/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Acte de limbaj: a explica, a recomanda, a afirma',
      obiective: [
        'Identifică și performează actele de limbaj a explica, a recomanda, a afirma.',
      ],
      sursaManual: 'Art 5, Lecția 7, pp. 183-184',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Acte de limbaj: a explica, a recomanda, a afirma',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică și performează actele de limbaj a explica, a recomanda, a afirma.',
        ],
        resurse: [
          'Manual Art 5, pp. 183-184',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-9/fisa-exercitii.pdf)',
          'Quizul „Acte de limbaj: a explica, a recomanda, a afirma” (materialul de joc al lecției)',
          'Bilețele cu situații de comunicare',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 183: perechile citesc pe roluri dialogul dintre Simona și Alice.\n– a) Reperele pe hartă; b) formulările despre distanță, durată, direcție, o afirmație și o recomandare.',
          },
          {
            etapa: 'Explorare, ex. 1-2',
            timp: '6 min',
            activitate: '– Ex. 1: asociem verbele a explica, a recomanda, a afirma cu definițiile.\n– Ex. 2: recomandări pentru cele patru situații (fratele întârzie, mașina se apropie, revista, grupul gălăgios).',
          },
          {
            etapa: 'Explorare, ex. 3',
            timp: '7 min',
            activitate: '– În perechi, cu tabelul din manual: A îi explică lui B drumul, folosind toate informațiile unui rând, și încheie cu o recomandare; apoi inversează direcția. Două perechi prezintă.',
          },
          {
            etapa: 'Notițe: a explica, a recomanda, a afirma',
            timp: '4 min',
            activitate: '– În caiete, după Repere: a explica (de ce? cum?; cuvinte pentru cauză și consecință); a recomanda (Îți recomand să..., Te sfătuiesc să...); a afirma.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '5 min',
            activitate: '– Citim textul despre drumul spre Muzeul Tiparului din Târgoviște; elevii spun, frontal, dacă afirmațiile a-h sunt adevărate sau false.',
          },
          {
            etapa: 'Aplicații, ex. 3-4',
            timp: '5 min',
            activitate: '– Ex. 3: un elev îi recomandă unui prieten să viziteze Târgoviște, cu două informații din text.\n– Ex. 4: explicăm itinerarul din schemă cu cuvintele date (cabană, potecă, a traversa, afluent...).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce face vorbitorul?) și ex. 2 (cuvinte care leagă explicația), individual, 8 minute.\n– Verificare, 4 minute; la clasele rapide, quizul „Acte de limbaj”.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: „Explorare”, ex. 4 (schema itinerarului de acasă la școală, cu două recomandări de siguranță); „Provocări” (prezentarea unei localități: o afirmație, o explicație, o recomandare), verificată la începutul orei de gramatică; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea dialogurilor în perechi; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-9/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Acte de limbaj: a explica, a recomanda, a afirma',
          pasi: [
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Îți recomand să citești și alte poezii de Eminescu”?',
              variante: [
                { text: 'o recomandare', corect: true, explicatie: 'Verbul „recomand” marchează explicit acest act de limbaj.' },
                { text: 'o explicație', corect: false, explicatie: 'O explicație ar clarifica de ce sau cum se întâmplă ceva, nu ar sugera o acțiune.' },
                { text: 'o afirmație', corect: false, explicatie: 'O afirmație simplă ar constata un fapt, nu ar sugera o acțiune viitoare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 183',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când spui „Cartea a fost tipărită pentru prima dată în secolul al XVI-lea”?',
              variante: [
                { text: 'o afirmație', corect: true, explicatie: 'Enunțul constată un fapt, fără să ceară sau să recomande ceva.' },
                { text: 'o recomandare', corect: false, explicatie: 'Nu sugerezi nicio acțiune, doar constați un fapt istoric.' },
                { text: 'o promisiune', corect: false, explicatie: 'Nu te angajezi la nimic, doar afirmi o informație.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 183',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-6/lectia-9/schema.svg',
          titlu: 'A explica, a recomanda, a afirma',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Prezentarea proiectului de grup Imagini ale domnitorului',
      obiective: [
        'Prezintă și evaluează, pe grupe, proiectul Imagini ale domnitorului, conform criteriilor stabilite.',
      ],
      sursaManual: 'Art 5, Proiect de grup, p. 180 (prezentare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului de grup Imagini ale domnitorului',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Prezintă și evaluează, pe grupe, proiectul Imagini ale domnitorului, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 5, pp. 180-182',
          'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-6/lectia-10/fisa.pdf)',
          'Produsele proiectelor pe grupe',
        ],
        desfasurare: [
          {
            etapa: 'Pregătirea',
            timp: '3 min',
            activitate: '– Stabilim ordinea (cronologic, după domnitori) și timpul: 7 minute de prezentare și 2 minute de întrebări pentru fiecare grupă.',
          },
          {
            etapa: 'Prezentările',
            timp: '36 min',
            activitate: '– Fiecare grupă prezintă domnitorul: numele, epoca, trăsăturile din text, valorile promovate, ce arată imaginea (trăsături fizice, ținută, culori) și informații de la istorie.\n– Colegii pun întrebări; eu completez grila din fișa proiectului pentru fiecare grupă și notez un punct tare și o sugestie.',
          },
          {
            etapa: 'Reflecții',
            timp: '6 min',
            activitate: '– Discuție: ce au în comun imaginile celor patru domnitori? Ce valori promovează textele? Cum diferă imaginea din text de cea din pictură?',
          },
          {
            etapa: 'Autoevaluarea',
            timp: '5 min',
            activitate: '– Fiecare elev completează lista de autoevaluare din manual (p. 182) și rubricile din fișă: ce a mers bine, ce ar face altfel.',
          },
        ],
        evaluare: 'Evaluarea proiectului pe grupe după criteriile din fișă; autoevaluarea elevilor; observarea prezentărilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-10/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Enunțul',
      obiective: [
        'Identifică structurile sintactice de bază și alcătuiește enunțuri simple și complexe.',
      ],
      sursaManual: 'Art 5, Lecția 8, p. 185, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Enunțul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică structurile sintactice de bază și alcătuiește enunțuri simple și complexe.',
        ],
        resurse: [
          'Manual Art 5, p. 185',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-11/fisa-exercitii.pdf)',
          'Schema „Enunțul” (/materiale/clasa-5/unitatea-6/lectia-11/schema.svg)',
          'Quizul „Enunțul simplu și complex” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Doi elevi prezintă localitatea aleasă (tema de la lecția despre actele de limbaj); clasa numește afirmația, explicația și recomandarea.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: '– „Pentru început”, p. 185: doi elevi citesc dialogul dintre cartea tipărită și cartea electronică; ex. 2: pot trăi cele două cărți împreună?',
          },
          {
            etapa: 'Explorare, ex. 1-3',
            timp: '8 min',
            activitate: '– Ex. 1: predicatele din dialog, subliniate în caiet.\n– Ex. 2: câte propoziții independente sunt; ex. 3: câte predicate are „Avem o istorie veche, am supraviețuit multor amenințări și pericole”.',
          },
          {
            etapa: 'Notițe: enunțul',
            timp: '6 min',
            activitate: '– În caiete, după Repere și schema lecției: enunțul, unitate de bază a comunicării, construit în jurul unui predicat; enunțul simplu (o propoziție) și complex (două sau mai multe propoziții), cu câte două exemple.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '5 min',
            activitate: '– Frontal: enunțurile simple și complexe a-f; numărăm de fiecare dată predicatele.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (simplu sau complex?) și ex. 2 (din două, unul), individual, 11 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '4 min',
            activitate: '– Quizul „Enunțul simplu și complex”, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2 (trei enunțuri simple și trei complexe despre o excursie, cu predicatele subliniate).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-11/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Enunțul simplu și complex',
          pasi: [
            {
              intrebare: 'Ce este enunțul?',
              variante: [
                {
                  text: 'O unitate de bază a comunicării, construită de obicei în jurul unui predicat',
                  corect: true,
                  explicatie: 'Predicatul e centrul enunțului.',
                },
                {
                  text: 'Orice cuvânt, luat separat',
                  corect: false,
                  explicatie: 'Un cuvânt singur nu comunică, de obicei, o idee întreagă.',
                },
                {
                  text: 'Un text întreg, cu titlu',
                  corect: false,
                  explicatie: 'Textul are mai multe enunțuri.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 185',
            },
            {
              intrebare: 'Când este un enunț simplu?',
              variante: [
                {
                  text: 'Când e alcătuit dintr-o singură propoziție',
                  corect: true,
                  explicatie: 'Deci are un singur predicat.',
                },
                {
                  text: 'Când are cuvinte puține',
                  corect: false,
                  explicatie: 'Contează numărul de propoziții, nu de cuvinte.',
                },
                {
                  text: 'Când nu are semne de punctuație',
                  corect: false,
                  explicatie: 'Orice enunț are un semn la final.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 185',
            },
            {
              intrebare: 'Ce fel de enunț este „Au stat puțin, au ascultat, au plecat.”?',
              variante: [
                {
                  text: 'Complex: are trei predicate, deci trei propoziții',
                  corect: true,
                  explicatie: 'Au stat, au ascultat, au plecat.',
                },
                {
                  text: 'Simplu, fiindcă e scurt',
                  corect: false,
                  explicatie: 'Lungimea nu contează; numeri predicatele.',
                },
                {
                  text: 'Nu e un enunț',
                  corect: false,
                  explicatie: 'E un enunț asertiv, încheiat cu punct.',
                },
              ],
              indiciu: 'Numără predicatele.',
              sursa: 'Manual Art 5, p. 185',
            },
            {
              intrebare: 'Ce fel de enunț este „Pe crestele munților, printre nori, străluceau primele raze de soare.”?',
              variante: [
                {
                  text: 'Simplu: are un singur predicat, străluceau',
                  corect: true,
                  explicatie: 'Deși e lung, are o singură propoziție.',
                },
                {
                  text: 'Complex, fiindcă e lung',
                  corect: false,
                  explicatie: 'Un enunț lung poate fi simplu.',
                },
                {
                  text: 'Complex, fiindcă are virgule',
                  corect: false,
                  explicatie: 'Virgulele despart aici părți de propoziție, nu propoziții.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 185',
            },
            {
              intrebare: 'Câte predicate are „Avem o istorie veche, am supraviețuit multor amenințări și pericole.”?',
              variante: [
                {
                  text: 'Două: avem și am supraviețuit',
                  corect: true,
                  explicatie: 'Deci enunțul e complex.',
                },
                {
                  text: 'Unul',
                  corect: false,
                  explicatie: 'Mai caută un verb care arată o acțiune.',
                },
                {
                  text: 'Trei',
                  corect: false,
                  explicatie: '„Amenințări” și „pericole” sunt substantive, nu predicate.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 185',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-6/lectia-11/schema.svg', titlu: 'Enunțul' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Tipuri de enunț',
      obiective: [
        'Recunoaște enunțurile asertive, interogative, imperative și exclamative și folosește corect semnele de punctuație.',
      ],
      sursaManual: 'Art 5, Lecția 8, p. 186, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Tipuri de enunț',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște enunțurile asertive, interogative, imperative și exclamative și folosește corect semnele de punctuație.',
        ],
        resurse: [
          'Manual Art 5, pp. 185-186',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-12/fisa-exercitii.pdf)',
          'Schema „Tipuri de enunț” (/materiale/clasa-5/unitatea-6/lectia-12/schema.svg)',
          'Quizul „Tipuri de enunț” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '3 min',
            activitate: '– Câțiva elevi citesc un enunț complex scris acasă; clasa numără predicatele.',
          },
          {
            etapa: 'Explorare, ex. 4-5',
            timp: '7 min',
            activitate: '– Ex. 4: grupăm propozițiile din dialogul cărților după ce comunică (informație, întrebare, ordin sau rugăminte, emoție).\n– Ex. 5: ce semn de punctuație încheie fiecare grupă.',
          },
          {
            etapa: 'Notițe: tipuri de enunț',
            timp: '5 min',
            activitate: '– În caiete, după Repere și schema lecției: enunțurile asertive, interogative, imperative, exclamative, cu semnul de la final (punct, puncte de suspensie, semnul întrebării, semnul exclamării) și câte un exemplu.',
          },
          {
            etapa: 'Aplicații, ex. 2',
            timp: '5 min',
            activitate: '– Doi elevi citesc dialogul dintre frați; clasa spune tipul fiecărui enunț.',
          },
          {
            etapa: 'Aplicații, ex. 4-5',
            timp: '5 min',
            activitate: '– Ex. 4, frontal: tipul fiecărui enunț; ex. 5: enunțuri imperative pentru semnele convenționale din manual.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '13 min',
            activitate: '– Pagina 1: ex. 1 (ce tip de enunț?) și ex. 2 (semnul potrivit), individual, 9 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Mesajele fără punctuație',
            timp: '4 min',
            activitate: '– „Provocări” și ex. 6: de ce lipsesc semnele de punctuație din mesajele de pe telefon? Ce se înțelege greșit? Discutăm pe mesajele Ilincăi și ale Laurei.',
          },
          {
            etapa: 'Quiz și autoevaluare',
            timp: '5 min',
            activitate: '– Quizul „Tipuri de enunț”; apoi elevii completează cele trei afirmații de autoevaluare (L8, p. 186).',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: „Aplicații”, ex. 3 și 7; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-12/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Tipuri de enunț',
          pasi: [
            {
              intrebare: 'Ce transmite un enunț asertiv?',
              variante: [
                {
                  text: 'O informație despre o stare de lucruri: Afară plouă.',
                  corect: true,
                  explicatie: 'Se încheie cu punct.',
                },
                {
                  text: 'O întrebare',
                  corect: false,
                  explicatie: 'Întrebarea e enunț interogativ.',
                },
                {
                  text: 'Un ordin',
                  corect: false,
                  explicatie: 'Ordinul e enunț imperativ.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 185',
            },
            {
              intrebare: 'Ce fel de enunț este „Ce mult m-a emoționat gestul tău!”?',
              variante: [
                {
                  text: 'Exclamativ: comunică o emoție',
                  corect: true,
                  explicatie: 'Vorbitorul nu cere nimic, doar arată ce simte.',
                },
                {
                  text: 'Imperativ',
                  corect: false,
                  explicatie: 'Nu cere nimănui să facă ceva.',
                },
                {
                  text: 'Interogativ',
                  corect: false,
                  explicatie: 'Deși începe cu „ce”, nu e o întrebare.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 186',
            },
            {
              intrebare: 'Ce fel de enunț este „Continuați jocul fără mine!”?',
              variante: [
                {
                  text: 'Imperativ: transmite un ordin sau o rugăminte',
                  corect: true,
                  explicatie: 'Verbul e la imperativ: continuați.',
                },
                {
                  text: 'Exclamativ',
                  corect: false,
                  explicatie: 'Are semnul exclamării, dar cere o acțiune, nu arată o emoție.',
                },
                {
                  text: 'Asertiv',
                  corect: false,
                  explicatie: 'Nu dă o informație, ci o cerere.',
                },
              ],
              indiciu: 'Cere cuiva să facă ceva sau arată o emoție?',
              sursa: 'Manual Art 5, p. 186',
            },
            {
              intrebare: 'Ce semn marchează întreruperea intenționată a unui enunț asertiv?',
              variante: [
                {
                  text: 'Punctele de suspensie',
                  corect: true,
                  explicatie: 'Încă nu știu, m-ai întrerupt…',
                },
                {
                  text: 'Semnul întrebării',
                  corect: false,
                  explicatie: 'Acela încheie enunțul interogativ.',
                },
                {
                  text: 'Virgula',
                  corect: false,
                  explicatie: 'Virgula nu încheie un enunț.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 185',
            },
            {
              intrebare: 'Care e varianta interogativă a enunțului „Ți-a plăcut filmul.”?',
              variante: [
                {
                  text: 'Ți-a plăcut filmul?',
                  corect: true,
                  explicatie: 'Semnul întrebării schimbă tipul enunțului.',
                },
                {
                  text: 'Ți-a plăcut filmul!',
                  corect: false,
                  explicatie: 'Aceasta ar fi varianta exclamativă.',
                },
                {
                  text: 'Ți-a plăcut filmul…',
                  corect: false,
                  explicatie: 'Punctele de suspensie arată o întrerupere.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 5, p. 186',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-6/lectia-12/schema.svg', titlu: 'Tipuri de enunț' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Prezentarea textului (I), inserarea unor desene, grafice, fotografii, scheme',
      obiective: [
        'Analizează, prin lectura ghidată a imaginii, rolul desenelor, graficelor și schemelor într-un text.',
      ],
      sursaManual: 'Art 5, Lecția 9, p. 187, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea textului (I), inserarea unor desene, grafice, fotografii, scheme',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Analizează, prin lectura ghidată a imaginii, rolul desenelor, graficelor și schemelor într-un text.',
        ],
        resurse: [
          'Manual Art 5, pp. 187-188',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-13/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-13/fisa.pdf)',
          'Coli albe, creioane colorate',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '7 min',
            activitate: '– „Pentru început”, p. 187, ex. 1: trei obiecte în valiză pentru mare, munte și Lună.\n– Ex. 2, în perechi: copacul ideilor pentru „călătorie” (sinonime, locuri, obiecte, sentimente).',
          },
          {
            etapa: 'Imaginile și descrierile',
            timp: '12 min',
            activitate: '– „Explorare”, ex. 1: grupe de 4-6 privesc imaginile a-e și își notează observațiile; raportorii le prezintă.\n– Ex. 2: asociem descrierile A-E cu imaginile și subliniem cuvintele-cheie care ne-au ajutat.',
          },
          {
            etapa: 'Notițe: textul cu imagini',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 188): într-o compunere se pot integra, ca într-un colaj, desene, fotografii, grafice, scheme; imaginea completează textul, nu îl repetă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (ce material grafic se potrivește?) și ex. 2 (legenda imaginii), individual, 8 minute.\n– Verificare, 4 minute; citim câteva legende și vedem dacă adaugă informație.',
          },
          {
            etapa: 'Materialul grafic pe grupe',
            timp: '11 min',
            activitate: '– Ex. 3 (p. 188): fiecare grupă realizează, pe un sfert de coală, materialul pentru locul ei: orarul vizitei la Cazinou sau un peisaj marin, schema Transfăgărășanului, planul Hotelului de Gheață, planul de salvare din Peștera Urșilor, câmpul de maci sau harta Bărăganului.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa lecției (ce material grafic aș adăuga într-un text scris de mine și de ce); fișa de exerciții, pagina 2 (schița paginii de jurnal). Opțional, „Deschideri”: fișa unei țări pe care vrei s-o vizitezi.',
          },
        ],
        evaluare: 'Observațiile grupelor și materialele grafice; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-13/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-6/lectia-13/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-6/lectia-13/schema.svg',
          titlu: 'Textul și imaginea, împreună',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Prezentarea textului (II), conceperea unui material grafic',
      obiective: [
        'Redactează o compunere cu integrarea unui material grafic propriu, cu respectarea etapelor scrierii.',
      ],
      sursaManual: 'Art 5, Lecția 9, p. 188, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea textului (II), conceperea unui material grafic',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o compunere cu integrarea unui material grafic propriu, cu respectarea etapelor scrierii.',
        ],
        resurse: [
          'Manual Art 5, p. 188',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-14/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-14/fisa.pdf)',
          'Propunerea de material grafic de la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Colajul jurnalului',
            timp: '4 min',
            activitate: '– „Aplicații”, p. 188, ex. 1: ce ați lipi în paginile unui jurnal de călătorie? Elevii aleg din listă și își motivează alegerea.',
          },
          {
            etapa: 'Planul',
            timp: '6 min',
            activitate: '– Fiecare alege locul de la ora trecută (sau altul) și completează planul din fișa de exerciții (ex. 1): ce scrie în introducere, cuprins, încheiere și ce imagine pune alături.',
          },
          {
            etapa: 'Materialul grafic',
            timp: '8 min',
            activitate: '– Fișa de exerciții, ex. 2-3: desenul, harta sau schema (sau finalizarea materialului de la ora trecută) și legenda lui.',
          },
          {
            etapa: 'Redactarea',
            timp: '17 min',
            activitate: '– „Aplicații”, ex. 2: fiecare scrie pe fișa lecției (ciorna) un text narativ sau descriptiv despre vizita în locul ales, cu materialul grafic integrat; textul nu repetă ce se vede în imagine.\n– Trec pe la bănci și ajut la legătura dintre text și imagine.',
          },
          {
            etapa: 'Revizuirea în perechi',
            timp: '10 min',
            activitate: '– Fiecare își verifică lucrarea cu lista de control (fișa de exerciții, ex. 4, coloana „Eu”), apoi o schimbă cu colegul, care completează coloana „Colegul” și scrie un lucru reușit și o sugestie (ex. 5).',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: forma finală pe o coală, cu imaginea lipită și legenda.\n– „Portofoliu”: cercetarea despre localitatea ta (fotografii, schițe, impresii), început de jurnal de călătorie; „Evaluarea portofoliului”: mapa cu lucrările din unitățile IV-VI, în ordinea preferinței, și un text de 3-4 rânduri despre progresul tău.',
          },
        ],
        evaluare: 'Lista de control (autoevaluare și evaluare reciprocă); compunerea cu material grafic; portofoliul.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-6/lectia-14/fisa.pdf', exercitii: '/materiale/clasa-5/unitatea-6/lectia-14/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-6/lectia-13/schema.svg',
          titlu: 'Textul și imaginea, împreună',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea VI: jurnalul de călătorie, actele de limbaj, identitatea națională.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 189-190, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea VI: jurnalul de călătorie, actele de limbaj, identitatea națională.',
        ],
        resurse: [
          'Manual Art 5, pp. 189-190',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-15/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: '– Ciorchine pe tablă: fiecare numește o noțiune din unitate (jurnal, participant, blog, stemă, identitate națională, a recomanda...).',
          },
          {
            etapa: 'Lectura textului',
            timp: '6 min',
            activitate: '– P. 189: citesc fragmentul din „O scurtă istorie a românilor povestită celor tineri” de Neagu Djuvara (Rovine și Nicopole).',
          },
          {
            etapa: 'Ex. 1-2',
            timp: '8 min',
            activitate: '– Ex. 1: de ce e bătălia de la Rovine un moment glorios?\n– Ex. 2, în perechi: diagrama Venn între acest text și fragmentul din „Scrisoarea III” (tipul de text, evenimentele, limbajul, scopul); două perechi prezintă.',
          },
          {
            etapa: 'Ex. 3-6',
            timp: '7 min',
            activitate: '– Frontal: indicii spațiali și temporali din secvența despre Nicopole; conducătorii armatelor; desfășurarea bătăliei pe hartă (oral); de ce e un text narativ nonliterar.',
          },
          {
            etapa: 'Joc de rol',
            timp: '5 min',
            activitate: '– Ex. 10: doi elevi (unul care termină clasa a V-a, unul mai mic) vorbesc despre clasa a V-a, folosind actele de limbaj învățate; colegii identifică tipurile de enunț.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1-3 pe pagina de jurnal „O zi la Putna” (scrisă pentru fișă), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, lectură și comunicare”; notez ce trebuie reluat înainte de evaluare.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: ex. 7 (recomandarea cărții lui Djuvara, cu un enunț asertiv, unul exclamativ și unul imperativ) și ex. 8 (dialogul dintre Mircea, Sigismund și Jean de Nevers); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Diagramele Venn; quizul; fișa de exerciții, ex. 1-3.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-15/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce deosebește un jurnal de călătorie de un text narativ literar?',
              variante: [
                { text: 'Jurnalul de călătorie relatează fapte reale, trăite de autor, nu o ficțiune', corect: true, explicatie: 'Caracterul nonliterar al jurnalului vine tocmai din legătura cu fapte reale, nu inventate.' },
                { text: 'Jurnalul de călătorie nu are niciun autor', corect: false, explicatie: 'Jurnalul are un autor, la fel ca orice text, doar că relatează experiențe reale.' },
                { text: 'Nu există nicio deosebire', corect: false, explicatie: 'Deosebirea esențială e caracterul real, nonliterar, al jurnalului.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 2, p. 171',
            },
            {
              intrebare: 'Ce act de limbaj realizezi când explici cuiva cum funcționează ceva?',
              variante: [
                { text: 'o explicație', corect: true, explicatie: 'Explicația clarifică o cauză sau un mecanism, un motiv sau un fel de a face ceva.' },
                { text: 'o recomandare', corect: false, explicatie: 'Recomandarea ar sugera o acțiune, nu ar clarifica un mecanism.' },
                { text: 'o promisiune', corect: false, explicatie: 'Promisiunea presupune un angajament pentru viitor, nu o clarificare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 7, p. 183',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-6/lectia-15/schema.svg',
          titlu: 'Textul nonliterar și comunicarea, tot la un loc',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea VI: enunțul și tipurile de enunț.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 189-190, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea VI: enunțul și tipurile de enunț.',
        ],
        resurse: [
          'Manual Art 5, pp. 189-190',
          'Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-16/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Verificarea temei',
            timp: '4 min',
            activitate: '– Două dialoguri (ex. 8) citite pe roluri; clasa numește tipurile de enunț folosite.',
          },
          {
            etapa: 'Ex. 9',
            timp: '4 min',
            activitate: '– Frontal: enunțurile a-c din text sunt simple sau complexe? Numărăm predicatele.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '15 min',
            activitate: '– Pagina 1: ex. 1 (enunțuri), ex. 2 (punctuația dialogului) și ex. 3 (transformă), individual, 11 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Redactare: bătălia de la Rovine',
            timp: '17 min',
            activitate: '– Partea B, p. 190: text narativ nonliterar de 15-20 de rânduri despre bătălia de la Rovine, cu o hartă, un desen sau portretele conducătorilor.\n– Facem împreună planul (5 minute): introducerea (contextul), cuprinsul (desfășurarea), încheierea (urmările); apoi fiecare începe textul.',
          },
          {
            etapa: 'Quiz',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: textul despre Rovine, terminat, cu materialul grafic; fișa de exerciții, pagina 2.\n– Anunț evaluarea: un text nonliterar nou, enunțul simplu și complex, tipurile de enunț și punctuația lor, actele de limbaj, un text nonliterar cu desen.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3; planul compunerii.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-5/unitatea-6/lectia-16/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Ce semn de punctuație marchează, de obicei, un enunț interogativ?',
              variante: [
                { text: 'semnul întrebării', corect: true, explicatie: 'Enunțul interogativ pune o întrebare, marcată prin semnul întrebării.' },
                { text: 'punctul', corect: false, explicatie: 'Punctul marchează, de obicei, un enunț asertiv.' },
                { text: 'semnul exclamării', corect: false, explicatie: 'Semnul exclamării marchează emoția puternică a unui enunț exclamativ.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 186',
            },
            {
              intrebare: 'Ce tip de enunț este Urcă în tren, te rog!?',
              variante: [
                { text: 'imperativ', corect: true, explicatie: 'Enunțul dă un îndemn, o rugăminte adresată direct interlocutorului.' },
                { text: 'asertiv', corect: false, explicatie: 'Asertivul ar constata un fapt, nu ar da un îndemn.' },
                { text: 'interogativ', corect: false, explicatie: 'Enunțul nu pune nicio întrebare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 186',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-5/unitatea-6/lectia-16/schema.svg',
          titlu: 'Enunțul, tot la un loc',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea VI.',
      ],
      sursaManual: 'Art 5, Evaluare, p. 191',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea VI.',
        ],
        resurse: [
          'Testul tipărit, Manual Art 5, p. 191',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Distribui testele (fragment din „Raza verde” de Călin Torsan, din antologia „Care-i faza cu cititul?”) și foile de răspuns.\n– Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: enunțul simplu, tipul unui enunț, verbe care exprimă acte de limbaj, enunțuri construite, punctuația, trăsăturile textului nonliterar, locurile, acțiunile băiatului, poeții, o explicație); B, 30 de puncte (text nonliterar de 15-20 de rânduri despre ultima carte citită sau cartea preferată, cu un desen integrat); 10 puncte din oficiu.\n– Recomand: circa 25 de minute pentru A, 15 minute pentru B, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii lucrează individual, pe foaia separată; supraveghez discret.\n– Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Elevii își recitesc lucrarea (punctuația, paragrafele, desenul cu legendă), apoi strâng foile.\n– Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.',
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
