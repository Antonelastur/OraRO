// Unitatea II: Aproape de ceilalți — clasa a VII-a
// Sursă: manual Art Klett 2024, proiectarea pe unități 2024-2025 (paginile
// vin direct din coloana RESURSE a proiectării, verificate acolo, nu doar
// din cuprins). Convenție: ore de curs, cu „partea 1/2” / „partea 2/2” unde
// proiectarea alocă 2 ore unei singure lecții de conținut.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: schema pentru lecțiile 13 (Verbul, tipuri), 18 (Circumstanțialul
// de cauză), 20 (Circumstanțialul de scop). Joc pentru 23 și 24
// (recapitulare). Restul rămân null, listate în materiale-restante.md.

export const unitatea2 = {
  id: 'unitatea-2',
  titlu: 'Unitatea II: Aproape de ceilalți',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Proiect de grup. Valorile mele, valorile comunității (anunțare)',
      obiective: [
        'Se familiarizează cu tema, grupele, calendarul și criteriile de evaluare ale proiectului de grup Valorile mele, valorile comunității.',
      ],
      sursaManual: 'Art 7, Proiect de grup (fără pagină asociată în proiectare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect de grup. Valorile mele, valorile comunității (anunțare)',
        data: null,
        tipOra: 'Proiect, anunțare',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, grupele, calendarul și criteriile de evaluare ale proiectului de grup Valorile mele, valorile comunității.',
        ],
        resurse: [
          'Manual Art 7, p. 62',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-1/fisa.pdf)',
          'Bilețele cu comunitățile din regiune, dacă e nevoie de tragere la sorți',
        ],
        desfasurare: [
          {
            etapa: 'Ce înseamnă o comunitate?',
            timp: '5 min',
            activitate: '– Întreb: ce înseamnă pentru voi o comunitate? Ce valori are comunitatea în care trăiți?\n– Notez pe tablă valorile numite; revenim la ele la prezentarea proiectului.',
          },
          {
            etapa: 'Sarcina de lucru, p. 62',
            timp: '8 min',
            activitate: '– Grupe de 4-5 elevi, fiecare pentru o comunitate etnică sau religioasă din regiune.\n– Două produse: posterul cu diamantul valorilor comunității și o prezentare digitală cu activități de voluntariat care i-ar îmbunătăți viața.',
          },
          {
            etapa: 'Tipuri de voluntari',
            timp: '7 min',
            activitate: '– Parcurgem exemplele de la p. 62: voluntarul profesor, multimedia, grafician, medic, verde, translator, jurnalist.\n– Fiecare elev spune ce fel de voluntar ar fi și de ce.',
          },
          {
            etapa: 'Calendarul pe trei săptămâni',
            timp: '5 min',
            activitate: '– Săptămâna I: rolurile și documentarea; săptămâna II: prezentarea în grupă a descoperirilor, selectarea ideilor, pregătirea materialelor; săptămâna III: prezentarea (Lecția 8). Elevii notează datele în caiete.',
          },
          {
            etapa: 'Formarea grupelor',
            timp: '3 min',
            activitate: '– Formez grupele; dacă e nevoie, tragem la sorți comunitățile de pe bilețele.',
          },
          {
            etapa: 'Fișa lecției: tema și rolurile',
            timp: '12 min',
            activitate: '– Grupele completează fișa de proiect: valoarea aleasă și de ce contează, exemple concrete, o mărturie dintr-un interviu, cum se transmite valoarea, rolul fiecărui membru.\n– Trec pe la fiecare grupă și verific că toți au o sarcină.',
          },
          {
            etapa: 'Grila de evaluare',
            timp: '5 min',
            activitate: '– Citim criteriile de la p. 62 (posterul fără stereotipuri, propuneri de voluntariat aplicabile, prezentare antrenantă) și grila din fișă.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: fiecare membru aduce două informații despre comunitatea grupei, cu sursa notată, și o întrebare pentru interviul din care va veni mărturia.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de organizare a grupei, fără notare.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-1/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-2',
      titlu: 'Textul narativ literar. Popa Tanda de Ioan Slavici',
      obiective: [
        'Identifică informații esențiale din nuvela Popa Tanda de Ioan Slavici, reflectând asupra propriilor valori și modele.',
      ],
      sursaManual: 'Art 7, pp. 48-52 (Popa Tanda de Ioan Slavici)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Popa Tanda de Ioan Slavici',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din nuvela Popa Tanda de Ioan Slavici, reflectând asupra propriilor valori și modele.',
        ],
        resurse: [
          'Manual Art 7, pp. 48-52',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-2/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Diamantul valorilor, „Pentru început”, ex. 1',
            timp: '7 min',
            activitate: '– Fiecare elev alege șase valori din lista de la p. 48 și le notează în caiet, într-un diamant al valorilor.\n– Trei elevi își citesc diamantul; notez pe tablă valorile alese cel mai des.',
          },
          {
            etapa: 'Modele, ex. 2',
            timp: '4 min',
            activitate: '– Grupe de 4-5: cine vă e model și ce apreciați la acea persoană? Un raportor pe grupă.',
          },
          {
            etapa: 'Despre autor',
            timp: '3 min',
            activitate: '– Caseta de la p. 48: Ioan Slavici, prozator al satului transilvănean, atent la valorile morale; „Popa Tanda”, scrisă în 1873, citită la „Junimea”, publicată în „Convorbiri literare” și apoi în „Novele din popor”.',
          },
          {
            etapa: 'Lectura model',
            timp: '15 min',
            activitate: '– Citesc fragmentele de la pp. 48-52, cu rezumatele dintre paranteze drepte.\n– Lămurim cuvintele din subsol pe măsură ce apar: dascăl, muruială, poporean, curechi, tândălitură, a ocărî, țarină, leasă, rugă, laiță.',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1',
            timp: '5 min',
            activitate: '– Cele patru cadrane în caiet (mi-a plăcut, nu mi-a plăcut, o trăsătură a personajului, mi-a amintit de); trei elevi citesc câte un cadran.',
          },
          {
            etapa: 'Valorile din text, ex. 2-3',
            timp: '4 min',
            activitate: '– În perechi: ce valori din diamantul vostru ați regăsit în text și la ce personaj? O valoare nouă descoperită în text.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (ordinea încercărilor) și ex. 2 (cine spune?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; portofoliu: diamantul valorilor proprii, cu o explicație pentru valoarea din vârf.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2. Temă de portofoliu: diamantul valorilor proprii.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-2/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-3',
      titlu: 'Structura textului narativ',
      obiective: [
        'Investighează locul, timpul acțiunii și firul narativ, comparând descrierile satului de la începutul și de la finalul nuvelei.',
      ],
      sursaManual: 'Art 7, pp. 53-54',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Structura textului narativ',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Investighează locul, timpul acțiunii și firul narativ, comparând descrierile satului de la începutul și de la finalul nuvelei.',
        ],
        resurse: [
          'Manual Art 7, pp. 53-54',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-3/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-3/fisa.pdf)',
          'Coli pentru grupele de investigație',
        ],
        desfasurare: [
          {
            etapa: 'Investigația, Explorare, ex. 1',
            timp: '12 min',
            activitate: '– Grupe de câte trei, cu sarcinile de la p. 53: lingviștii (cuvintele de loc și de timp), geografii (harta satului la început și la final), istoricii (axa timpului și durata), povestitorii (ideile principale și titluri pentru capitole), artiștii (pictura potrivită pentru scena straturilor).',
          },
          {
            etapa: 'Raportarea, ex. 2',
            timp: '7 min',
            activitate: '– Câte un raportor pentru fiecare tip de sarcină; grupele cu aceeași sarcină compară și nuanțează concluziile.',
          },
          {
            etapa: 'Notițe: textul epic și structura lui',
            timp: '7 min',
            activitate: '– În caiete, după Repere (pp. 53-54): textul epic, speciile epice în versuri și în proză, structura cu un episod și cu mai multe episoade (schemele), rolul descrierii și al dialogului.',
          },
          {
            etapa: 'Aplicații, ex. 2-3',
            timp: '4 min',
            activitate: '– Ce structură se potrivește nuvelei? De ce începe textul cu personajul, nu cu descrierea locului?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (narațiune, descriere sau dialog?) și ex. 2 (indiciile de timp), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Descrierile simetrice, Aplicații, ex. 5',
            timp: '3 min',
            activitate: '– Ce efect are așezarea unei descrieri a satului la început și a alteia la sfârșit?',
          },
          {
            etapa: 'Fișa lecției, ex. 1',
            timp: '3 min',
            activitate: '– Momentele narațiunii în „Popa Tanda”, completate frontal pe fișa lecției.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1, 4, 6-7; fișa lecției, ex. 2; fișa de exerciții, pagina 2.\n– „Provocări”, opțional: textul narativ cu două episoade sau „trenul” textului epic.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; rezultatele investigației; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-3/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-3/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-4',
      titlu: 'Mijloace de construcție a personajului. Repetiția',
      obiective: [
        'Identifică trăsăturile fizice și morale ale personajului principal și mijloacele de construcție a acestuia, inclusiv repetiția.',
      ],
      sursaManual: 'Art 7, pp. 55-56',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Mijloace de construcție a personajului. Repetiția',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică trăsăturile fizice și morale ale personajului principal și mijloacele de construcție a acestuia, inclusiv repetiția.',
        ],
        resurse: [
          'Manual Art 7, pp. 55-56',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Fișa de identitate, Explorare, ex. 1',
            timp: '3 min',
            activitate: '– În caiete: numele, domiciliul, profesia, starea civilă a personajului principal.',
          },
          {
            etapa: 'Cine vorbește? Ex. 2-3',
            timp: '5 min',
            activitate: '– Cine vorbește despre părintele Trandafir în cele trei pasaje de la p. 55?\n– Ce trăsătură reiese din comparația cu capra din grădina cu curechi și ce figură de stil o evidențiază?',
          },
          {
            etapa: 'Axa timpului, ex. 4-5',
            timp: '8 min',
            activitate: '– Axa în caiet: acțiunile a-e ordonate deasupra, trăsătura din fiecare dedesubt; la final, trăsătura care reiese din toate la un loc.',
          },
          {
            etapa: 'Imaginile și replica sătenilor, ex. 6-7',
            timp: '4 min',
            activitate: '– Imaginile a-b asociate cu acțiunile, după indicii; replica „Popa e omul dracului!”: ce atitudine arată, după ce fapte apare, de câte ori.',
          },
          {
            etapa: 'Notițe: mijloacele de caracterizare. Repetiția',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 55): caracterizarea directă (narator, alte personaje, personajul însuși) și indirectă (fapte, vorbe, vestimentație, mediu, nume); repetiția și rolul ei.',
          },
          {
            etapa: 'Aplicații, ex. 1, 3-4',
            timp: '5 min',
            activitate: '– Semnificația numelui și a poreclei; rolul repetiției replicii sătenilor; de ce replica din final e diferită.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (direct sau indirect?) și ex. 2 (numele spun ceva), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Posterul trăsăturilor, Aplicații, ex. 6',
            timp: '6 min',
            activitate: '– Grupe de 4-5: în stânga trăsăturile numite în text, în dreapta cele deduse; concluzia despre trăsăturile dominante, citită de un raportor.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 2, 5, 7-8; fișa lecției; fișa de exerciții, pagina 2.\n– „Provocări”, opțional: blazonul personajului.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-4/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-5',
      titlu: 'Conflictul. Complexitatea personajului',
      obiective: [
        'Identifică conflictul și urmările lui asupra acțiunii, diferențiind personajele plate de cele rotunde.',
      ],
      sursaManual: 'Art 7, pp. 57-58',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Conflictul. Complexitatea personajului',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică conflictul și urmările lui asupra acțiunii, diferențiind personajele plate de cele rotunde.',
        ],
        resurse: [
          'Manual Art 7, pp. 57-58',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-5/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Autoportretul lui Van Gogh, Aplicații, ex. 7',
            timp: '3 min',
            activitate: '– Tabloul de la p. 57 sugerează un om simplu sau unul complex? Două argumente.',
          },
          {
            etapa: 'Conflictele, Explorare, ex. 1',
            timp: '7 min',
            activitate: '– a) De la ce pleacă conflictul cu protopopul? b) Din ce se naște conflictul cu sătenii și ce motivații are fiecare parte? Citate din text, notate în caiete.',
          },
          {
            etapa: 'Frământările, ex. 2',
            timp: '4 min',
            activitate: '– Recitim pasajul nopții de la opaiț și scena din biserică: între ce se zbate părintele?',
          },
          {
            etapa: 'Trăsături pozitive și negative, ex. 3',
            timp: '5 min',
            activitate: '– Graficul din caiet cu trăsăturile pozitive și negative; care predomină?',
          },
          {
            etapa: 'Notițe: conflictul și complexitatea personajului',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 57): conflictul exterior și interior; personajele simple (bidimensionale) și complexe (tridimensionale).',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '5 min',
            activitate: '– Sătenii ca personaj; dezechilibrul unul contra satului; momentul schimbării de strategie; de ce unii săteni încep să-l ajute.',
          },
          {
            etapa: '„Lentilele”, Aplicații, ex. 8',
            timp: '8 min',
            activitate: '– Grupe de 4-5, fiecare cu o „lentilă” (astrolog, psiholog, angajator); concluzia și argumentele din text, prezentate de un raportor.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (exterior sau interior?) și ex. 2 (simplu sau complex?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 5-6; fișa lecției; fișa de exerciții, pagina 2.\n– „Provocări”, opțional: pagina de jurnal sau monologul „în papucii” personajului.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-5/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-6',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează un răspuns personal despre semnificațiile textului Popa Tanda, folosind strategia celor trei conexiuni.',
      ],
      sursaManual: 'Art 7, p. 59',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează un răspuns personal despre semnificațiile textului Popa Tanda, folosind strategia celor trei conexiuni.',
        ],
        resurse: [
          'Manual Art 7, p. 59',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-6/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-6/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cele două replici, Interpretare, ex. 1',
            timp: '4 min',
            activitate: '– Comparăm replica repetată a sătenilor cu cea din final: ce drum a parcurs părintele între ele?',
          },
          {
            etapa: 'Mottoul, ex. 2',
            timp: '5 min',
            activitate: '– Fiecare elev alege un motto dintre variantele a-e și își justifică alegerea; numărăm voturile pe tablă.',
          },
          {
            etapa: 'Morala, ex. 3',
            timp: '4 min',
            activitate: '– Pornind de la mărturisirea lui Slavici despre rostul scrisului, fiecare formulează morala în caiet; două-trei formulări citite.',
          },
          {
            etapa: 'Scena finală și parabola, ex. 4-6',
            timp: '8 min',
            activitate: '– Semnificația celor trei generații din final; varianta potrivită pentru parabola fiului risipitor.\n– Pictura lui Bernardino Licinio: atitudinea tatălui și a fiului; cu ce personaje din nuvelă i-am asocia?',
          },
          {
            etapa: 'Diamantul valorilor părintelui, ex. 7-8',
            timp: '6 min',
            activitate: '– Diamantul valorilor părintelui Trandafir, în caiet; ce valori are în comun cu diamantul propriu.',
          },
          {
            etapa: 'Dezbaterea, ex. 9',
            timp: '7 min',
            activitate: '– Grupe de 4-5: argumente pro și contra ideii că valorile părintelui seamănă cu ale unui supererou; un raportor pe grupă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (valori în fapte) și ex. 2 (proverbe și nuvelă), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Autoevaluare L1-L5',
            timp: '2 min',
            activitate: '– Elevii completează în caiete cele trei enunțuri de la p. 59.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa lecției (cele trei conexiuni); fișa de exerciții, pagina 2.\n– Portofoliu, la alegere: textul despre o personalitate-model de azi sau simbolul și culoarea nuvelei.',
          },
        ],
        evaluare: 'Observarea participării la dezbatere; fișa de exerciții, ex. 1-2; autoevaluarea achizițiilor din lecțiile 1-5.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-6/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-7',
      titlu: 'Text auxiliar. Fragment din romanul Inocenții de Ioana Pârvulescu',
      obiective: [
        'Interpretează un fragment din romanul Inocenții de Ioana Pârvulescu, prin metoda grupului de lectură.',
      ],
      sursaManual: 'Art 7, „Noi pagini, alte idei”, pp. 60-61 (Inocenții de Ioana Pârvulescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Fragment din romanul Inocenții de Ioana Pârvulescu',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Interpretează un fragment din romanul Inocenții de Ioana Pârvulescu, prin metoda grupului de lectură.',
        ],
        resurse: [
          'Manual Art 7, pp. 60-61',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-7/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-7/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'O societate secretă',
            timp: '4 min',
            activitate: '– Întreb: dacă ați înființa cu frații sau prietenii o societate secretă, ce scop ar avea?',
          },
          {
            etapa: 'Introducerea, p. 60',
            timp: '2 min',
            activitate: '– Citim textul introductiv: un om care schimbă un sat, copii care vor să îndrepte lumea, dar nu știu de unde să înceapă.',
          },
          {
            etapa: 'Lectura',
            timp: '9 min',
            activitate: '– Elevii citesc fragmentele (pp. 60-61) și notează în caiet primele impresii: ce le-a plăcut, ce nelămuriri au, cu cine se identifică.',
          },
          {
            etapa: 'Grupul de lectură, Discutarea textului, ex. 1-4',
            timp: '9 min',
            activitate: '– Grupe de 4, cu roluri (moderator, cel care caută citatele, cel care notează, raportorul).\n– Ce ar putea însemna SIL (a-d); cine narează și ce trăsături are; cine transmite valorile; ce scop și-ar asuma fiecare.',
          },
          {
            etapa: 'Virtuțile și sfatul final, ex. 5-8',
            timp: '8 min',
            activitate: '– Pot virtuțile să ducă la scopurile SIL? Care contează cel mai mult pentru „îndreptarea lumii”?\n– Argumentul bunicii despre vecina cea rea și sfatul final: ce ar trebui să facă nepoții? Raportorii prezintă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (adevărat sau fals?) și ex. 2 (virtuțile), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Biblioteci deschise',
            timp: '2 min',
            activitate: '– Prezint „Să creștem mici” de Laura Grünberg și „Bunica mi-a zis să-ți spun că-i pare rău” de Fredrik Backman.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: Discutarea textului, ex. 9 (textul de 10-15 rânduri); fișa lecției; fișa de exerciții, pagina 2.\n– Portofoliu: diamantul virtuților membrilor SIL, comparat cu diamantul propriu.',
          },
        ],
        evaluare: 'Observarea grupurilor de lectură; fișa de exerciții, ex. 1-2. Temă de portofoliu: diamantul virtuților membrilor SIL.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-7/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-8',
      titlu: 'Prezentarea proiectului de grup Valorile mele, valorile comunității',
      obiective: [
        'Prezintă și evaluează proiectul de grup Valorile mele, valorile comunității.',
      ],
      sursaManual: 'Art 7, Proiect de grup, p. 62 (prezentare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului de grup Valorile mele, valorile comunității',
        data: null,
        tipOra: 'Proiect, prezentare și evaluare',
        durata: 50,
        obiective: [
          'Prezintă și evaluează proiectul de grup Valorile mele, valorile comunității.',
        ],
        resurse: [
          'Manual Art 7, p. 62, grila de evaluare',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-8/fisa.pdf)',
          'Posterele și prezentările grupelor',
        ],
        desfasurare: [
          {
            etapa: 'Pregătirea',
            timp: '5 min',
            activitate: '– Tragem la sorți ordinea grupelor; posterele se afișează, prezentările se deschid.\n– Reamintesc grila de la p. 62 și timpul: cel mult 6 minute pe grupă, cu un minut pentru întrebări.',
          },
          {
            etapa: 'Prezentările grupelor',
            timp: '35 min',
            activitate: '– Fiecare grupă își prezintă posterul-diamant și propunerile de voluntariat.\n– După fiecare grupă: o întrebare din partea colegilor și o observație de la mine; notez punctajul pe criterii.',
          },
          {
            etapa: 'Evaluarea',
            timp: '6 min',
            activitate: '– Fiecare grupă completează fișa lecției (grila, ce a mers bine, ce ar schimba, nota pe care și-o dă); compar cu punctajul meu.',
          },
          {
            etapa: 'Reflecție',
            timp: '4 min',
            activitate: '– Ce valori au în comun comunitățile prezentate? Prin ce se deosebesc? Revenim la valorile de pe tablă din prima oră a proiectului.',
          },
        ],
        evaluare: 'Evaluare reciprocă pe grila de la p. 62; autoevaluarea grupei pe fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-8/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-9',
      titlu: 'Despre limba și cultura țărilor vecine (I)',
      obiective: [
        'Identifică împrumuturi lexicale din limbile țărilor vecine și discută cauzele acestor împrumuturi.',
      ],
      sursaManual: 'Art 7, pp. 63-64, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Despre limba și cultura țărilor vecine (I)',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Identifică împrumuturi lexicale din limbile țărilor vecine și discută cauzele acestor împrumuturi.',
        ],
        resurse: [
          'Manual Art 7, pp. 63-64',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-9/fisa-exercitii.pdf)',
          'Infograficul „Despre limba și cultura țărilor vecine (I)” (/materiale/clasa-7/unitatea-2/lectia-9/infografic.svg)',
          'DEX sau dexonline.ro',
        ],
        desfasurare: [
          {
            etapa: 'Cuvinte venite de la vecini, „Pentru început”, ex. 1-2',
            timp: '6 min',
            activitate: '– Obiectele de la p. 63: le înțeleg toți vorbitorii de română? Citim articolele din DEX și aflăm originea fiecărui cuvânt.',
          },
          {
            etapa: 'De ce împrumutăm cuvinte? Explorare, ex. 1',
            timp: '3 min',
            activitate: '– Două-trei explicații: vecinătatea, comerțul, conviețuirea.',
          },
          {
            etapa: 'Timbrul din Republica Moldova, ex. 2',
            timp: '4 min',
            activitate: '– În perechi: ce aflăm despre scrierea limbii române în Republica Moldova și ce grafie se folosea înainte?',
          },
          {
            etapa: 'Tabelul limbilor, ex. 4',
            timp: '7 min',
            activitate: '– a) În ce țări vecine româna e limbă oficială sau are statut oficial? b) Ce limbi ale minorităților din țările vecine au statut oficial în România?',
          },
          {
            etapa: 'Notițe: limbile și culturile vecinilor',
            timp: '6 min',
            activitate: '– Proiectez infograficul; în caiete, după Repere (p. 64): cele cinci țări vecine, interferențele, minoritățile, limba română în Republica Moldova, aisbergul cultural (suprafață și adâncime).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (adevărat sau fals?) și ex. 2 (aisbergul cultural), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Trei lucruri românești, ex. 3',
            timp: '4 min',
            activitate: '– Fiecare notează trei elemente reprezentative pentru cultura română; câțiva citesc, restul completează.',
          },
          {
            etapa: 'Grupele pentru postere, Aplicații, ex. 1',
            timp: '5 min',
            activitate: '– Cinci grupe; tragem la sorți țările vecine; fiecare grupă își împarte documentarea pe aspectele de la p. 64 (limba și alfabetul, obiceiuri, personalități, drapel, gastronomie, locuri).',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: documentarea pentru poster, cu sursele notate; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea lucrului în perechi; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-9/fisa-exercitii.pdf' }, joc: null, infografic: { fisier: '/materiale/clasa-7/unitatea-2/lectia-9/infografic.svg', titlu: 'Despre limba și cultura țărilor vecine (I)' }, schema: null, altele: [] },
    },
    {
      id: 'lectia-10',
      titlu: 'Despre limba și cultura țărilor vecine (II)',
      obiective: [
        'Realizează un poster și o diagramă Venn despre asemănările și deosebirile dintre cultura română și cea a unei țări vecine.',
      ],
      sursaManual: 'Art 7, pp. 63-64, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Despre limba și cultura țărilor vecine (II)',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Realizează un poster și o diagramă Venn despre asemănările și deosebirile dintre cultura română și cea a unei țări vecine.',
        ],
        resurse: [
          'Manual Art 7, p. 64',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-10/fisa-exercitii.pdf)',
          'Infograficul „Aisbergul cultural” (/materiale/clasa-7/unitatea-2/lectia-10/infografic.svg)',
          'Posterele grupelor',
        ],
        desfasurare: [
          {
            etapa: 'Aisbergul cultural',
            timp: '4 min',
            activitate: '– Proiectez infograficul: ce vedem deasupra apei și ce stă dedesubt? Un exemplu pentru fiecare nivel.',
          },
          {
            etapa: 'Pregătirea prezentării',
            timp: '5 min',
            activitate: '– Grupele pun cap la cap informațiile pe fișa de exerciții, ex. 1 (documentarea grupei), și aleg raportorul.',
          },
          {
            etapa: 'Prezentarea posterelor, Aplicații, ex. 2',
            timp: '20 min',
            activitate: '– Cinci grupe, câte 4 minute: Ucraina, Republica Moldova, Bulgaria, Serbia, Ungaria; după fiecare, o întrebare din partea colegilor.',
          },
          {
            etapa: 'Grupele mixte, ex. 3',
            timp: '8 min',
            activitate: '– Grupe noi, cu câte un reprezentant din fiecare grupă inițială: diagrama Venn cu asemănările și deosebirile dintre culturile vecinilor și cultura română.',
          },
          {
            etapa: 'Concluziile, ex. 4',
            timp: '4 min',
            activitate: '– Comparăm concluziile grupelor: ce avem în comun cu cei mai mulți vecini? Ce ne deosebește?',
          },
          {
            etapa: 'Fișa de exerciții, ex. 2',
            timp: '5 min',
            activitate: '– Individual: „La noi și la ei”, pentru țara prezentată de grupa proprie.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; portofoliu: reflecția despre atitudinea față de alte culturi, cu cele patru întrebări de la p. 64.\n– „Provocări”, opțional: un festival intercultural în școală.',
          },
        ],
        evaluare: 'Aprecieri pe postere și pe diagramele Venn; fișa de exerciții. Temă de portofoliu: reflecția despre atitudinea față de alte culturi.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-10/fisa-exercitii.pdf' }, joc: null, infografic: { fisier: '/materiale/clasa-7/unitatea-2/lectia-10/infografic.svg', titlu: 'Aisbergul cultural' }, schema: null, altele: [] },
    },
    {
      id: 'lectia-11',
      titlu: 'Fapte și opinii. Textul explicativ (I)',
      obiective: [
        'Discriminează faptele de opinii și analizează structura unui text explicativ oral.',
      ],
      sursaManual: 'Art 7, pp. 65-66, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Fapte și opinii. Textul explicativ (I)',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Discriminează faptele de opinii și analizează structura unui text explicativ oral.',
        ],
        resurse: [
          'Manual Art 7, pp. 65-66',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-11/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-11/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Fapta și părerea, „Pentru început”, ex. 1',
            timp: '4 min',
            activitate: '– Fiecare elev spune două enunțuri despre părintele Trandafir: o faptă a lui și părerea proprie despre ea.',
          },
          {
            etapa: 'Cele opt enunțuri, ex. 2',
            timp: '6 min',
            activitate: '– Enunțurile I-VIII de la p. 65: fapt, certitudine sau opinie, apreciere? Fiecare răspuns cu argument.',
          },
          {
            etapa: 'Răspunsuri sigure sau probabile, ex. 3',
            timp: '5 min',
            activitate: '– Grupe de 4-5: la ce întrebări vă așteptați la răspunsuri măsurabile și la care la răspunsuri posibile?',
          },
          {
            etapa: 'Două explicații, Explorare, ex. 1-2',
            timp: '8 min',
            activitate: '– Citim explicația filozofului Anthony C. Grayling și pe a astronomului Martin Rees; marcăm secvențele cu informații exacte și pe cele cu opinii; ce predomină în fiecare?',
          },
          {
            etapa: 'Notițe: fapte și opinii. Textul explicativ',
            timp: '7 min',
            activitate: '– În caiete, după Repere (p. 66): faptele și cuvintele-cheie ale lor, opiniile și cuvintele-cheie ale lor, intenția vorbitorului; textul explicativ și structura lui (tema, explicația pe modelul De ce? Pentru că... sau Cum? Astfel..., concluzia).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (fapt sau opinie?) și ex. 2 (explicația „De ce plouă?”), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Fișa lecției, ex. 1',
            timp: '5 min',
            activitate: '– Enunțurile despre fapta bună a lui Cameron, clasificate în fapte și opinii, cu cuvântul-indiciu.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; fișa lecției, ce a rămas.\n– Pregătiți pentru ora viitoare o explicație orală, doar prin fapte, despre cum vă pregătiți pentru o performanță.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; fișa lecției, ex. 1.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-11/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-11/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-12',
      titlu: 'Fapte și opinii. Textul explicativ (II)',
      obiective: [
        'Prezintă oral o explicație, respectând structura textului explicativ, urmată de autoevaluare.',
      ],
      sursaManual: 'Art 7, pp. 65-66, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Fapte și opinii. Textul explicativ (II)',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Prezintă oral o explicație, respectând structura textului explicativ, urmată de autoevaluare.',
        ],
        resurse: [
          'Manual Art 7, p. 66',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-12/fisa-exercitii.pdf)',
          'Quizul „Fapte și opinii. Textul explicativ” (materialul de joc al lecției)',
          'Prezentarea lui Adrian Covaci, dacă e disponibilă la clasă',
        ],
        desfasurare: [
          {
            etapa: 'Ștafeta faptelor și a opiniilor, Aplicații, ex. 1',
            timp: '7 min',
            activitate: '– Pe imaginea de la p. 66: în prima rundă, fiecare spune rapid un fapt; în a doua, o opinie; cine greșește iese din joc.',
          },
          {
            etapa: 'Prezentarea lui Adrian Covaci, ex. 2',
            timp: '9 min',
            activitate: '– Urmărim începutul prezentării (dacă e disponibilă) sau citim fragmentele de la p. 66.\n– Ce model explicativ folosește? Predomină faptele sau opiniile? Vrea să informeze sau să convingă?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (fapt sau opinie?) și ex. 2 (informează sau convinge?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Planul explicației, fișa, ex. 3',
            timp: '5 min',
            activitate: '– Fiecare își completează planul explicației orale (tema, trei pași, concluzia), pornind de la pregătirea de acasă.',
          },
          {
            etapa: 'Explicațiile orale, Aplicații, ex. 3',
            timp: '9 min',
            activitate: '– Trei-patru elevi explică, doar prin fapte, cum se pregătesc pentru o performanță școlară sau sportivă; clasa semnalează orice opinie strecurată.',
          },
          {
            etapa: 'Opinii despre prezentare, ex. 4',
            timp: '3 min',
            activitate: '– Doi-trei elevi își spun opinia despre prezentarea lui Adrian Covaci și o susțin cu un fapt.',
          },
          {
            etapa: 'Autoevaluare, ex. 5',
            timp: '2 min',
            activitate: '– Elevii se autoevaluează în caiete pe grila de la p. 66.',
          },
          {
            etapa: 'Quizul',
            timp: '3 min',
            activitate: '– Quizul „Fapte și opinii. Textul explicativ”, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: fișa de exerciții, pagina 2, ex. 4 (opinia mea, susținută de un fapt).',
          },
        ],
        evaluare: 'Autoevaluare pe grila de la p. 66; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-12/fisa-exercitii.pdf' }, joc: {
          tip: 'quiz',
          titlu: "Fapte și opinii. Textul explicativ",
          pasi: [
            {
              intrebare: "Care enunț este un fapt, nu o opinie?",
              variante: [
                { text: "„Proiectul a strâns peste zece mii de urmăritori în prima lună.”", corect: true, explicatie: "Se poate verifica și măsura — deci e un fapt." },
                { text: "„Proiectul este cel mai frumos gest al anului.”", corect: false, explicatie: "„Cel mai frumos” e o judecată personală — opinie." },
                { text: "„Cred că toți ar trebui să facă la fel.”", corect: false, explicatie: "„Cred că” introduce o părere — opinie." },
              ],
              indiciu: null,
              sursa: "Art 7, pp. 65-66",
            },
            {
              intrebare: "Ce cuvinte trădează de obicei o opinie?",
              variante: [
                { text: "a crede, a considera, bun, rău, întotdeauna", corect: true, explicatie: "Sunt mărci ale punctului de vedere personal." },
                { text: "numeral, document, raport, martor, a dovedi", corect: false, explicatie: "Acestea se leagă de fapte verificabile." },
                { text: "substantiv, verb, adjectiv, adverb", corect: false, explicatie: "Sunt clase de cuvinte, nu indicii pentru fapt sau opinie." },
              ],
              indiciu: null,
              sursa: "Art 7, p. 65",
            },
            {
              intrebare: "Ce scop are un text explicativ?",
              variante: [
                { text: "Să arate cum sau de ce se întâmplă ceva, ca cineva să înțeleagă", corect: true, explicatie: "Explicativul lămurește un proces sau o cauză." },
                { text: "Să convingă cititorul să fie de acord cu autorul", corect: false, explicatie: "Acela e scopul textului argumentativ." },
                { text: "Să povestească o întâmplare cu personaje", corect: false, explicatie: "Acela e textul narativ." },
              ],
              indiciu: null,
              sursa: "Art 7, pp. 65-66",
            },
            {
              intrebare: "Cum începi o explicație orală clară?",
              variante: [
                { text: "Anunți pe scurt despre ce vei explica, apoi mergi pe pași sau pe cauze", corect: true, explicatie: "Structura clară îl ajută pe ascultător să urmărească." },
                { text: "Intri direct în detalii, fără să spui despre ce e vorba", corect: false, explicatie: "Ascultătorul se pierde fără o introducere." },
                { text: "Îți dai mai întâi părerea despre subiect", corect: false, explicatie: "Explicativul pornește de la fapte, nu de la opinie." },
              ],
              indiciu: null,
              sursa: "Art 7, p. 66",
            },
            {
              intrebare: "La autoevaluare, după ce prezinți oral o explicație, ce verifici?",
              variante: [
                { text: "Dacă am respectat structura, dacă am folosit fapte și dacă m-am făcut înțeles", corect: true, explicatie: "Autoevaluarea urmărește claritatea și structura, nu doar emoția." },
                { text: "Doar dacă am vorbit tare", corect: false, explicatie: "Volumul contează, dar nu e singurul criteriu." },
                { text: "Dacă publicul a fost de acord cu mine", corect: false, explicatie: "Acordul e criteriu pentru argumentare, nu pentru explicație." },
              ],
              indiciu: null,
              sursa: "Art 7, p. 66",
            },
          ],
        }, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-13',
      titlu: 'Verbul. Tipuri de verbe. Locuțiunea verbală (I)',
      obiective: [
        'Reactualizează verbele predicative și nepredicative, verbele auxiliare și verbul copulativ a fi.',
      ],
      sursaManual: 'Art 7, pp. 67-69, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul. Tipuri de verbe. Locuțiunea verbală (I)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează verbele predicative și nepredicative, verbele auxiliare și verbul copulativ a fi.',
        ],
        resurse: [
          'Manual Art 7, pp. 67-68',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-13/fisa-exercitii.pdf)',
          'Schema „Verbul. Tipuri de verbe. Locuțiunea verbală” (/materiale/clasa-7/unitatea-2/lectia-13/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Copacii din parc, „Pentru început”, ex. 1-4',
            timp: '6 min',
            activitate: '– În perechi: verbele colorate din replicile copiilor, grupate în predicative și nepredicative; auxiliarele și formele pe care le alcătuiesc; verbul copulativ și numele predicative; două enunțuri despre imagine.',
          },
          {
            etapa: 'Articolul despre preotul Albu, Explorare, ex. 1-4',
            timp: '9 min',
            activitate: '– Verbele predicative și copulative din articol; tabelul cu auxiliarele și copulativele; modul și timpul verbelor predicative; predicatele nominale, grupate după ce arată despre subiect.',
          },
          {
            etapa: 'Valorile lui „a fi”, ex. 5',
            timp: '3 min',
            activitate: '– În exemplele a-d: copulativ, predicativ sau auxiliar?',
          },
          {
            etapa: 'Notițe: tipurile de verbe',
            timp: '6 min',
            activitate: '– În caiete, după Repere (pp. 67-68) și schema lecției: verbele predicative și nepredicative; auxiliarele a avea, a vrea, a fi și formele lor; verbul copulativ și predicatul nominal; valorile lui „a fi”.',
          },
          {
            etapa: 'Alte verbe copulative, Explorare, ex. 1-6',
            timp: '6 min',
            activitate: '– De ce nu e posibil „Mihai a devenit.”; valoarea lui a ieși, a ajunge, a se face (a-c) și enunțuri în care sunt predicative; „a însemna”, „a rămâne”, „a părea”, completate oral.',
          },
          {
            etapa: 'Notițe: verbele copulative',
            timp: '3 min',
            activitate: '– În caiete, lista verbelor copulative de la p. 68, cu condiția în care fiecare e copulativ.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „La bibliotecă”, scris pentru fișă, și felul verbelor), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1 a-c',
            timp: '3 min',
            activitate: '– Predicatele verbale și nominale din perechile de enunțuri a-c, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1 d-f, 2 și 3 (analiza predicatelor nominale, după model); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-13/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-13/schema.svg', titlu: 'Verbul. Tipuri de verbe. Locuțiunea verbală' }, altele: [] },
    },
    {
      id: 'lectia-14',
      titlu: 'Verbul. Tipuri de verbe. Locuțiunea verbală (II)',
      obiective: [
        'Identifică locuțiunile verbale, propune sinonime pentru ele și le analizează.',
      ],
      sursaManual: 'Art 7, pp. 67-69, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul. Tipuri de verbe. Locuțiunea verbală (II)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică locuțiunile verbale, propune sinonime pentru ele și le analizează.',
        ],
        resurse: [
          'Manual Art 7, p. 69',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-14/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-14/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'A sta de vorbă, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– Un sinonim pentru grupul colorat din enunțul lui Slavici; ce parte de propoziție e „(cu) popa”?',
          },
          {
            etapa: 'Notițe: locuțiunea verbală',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 69): locuțiunea verbală, alcătuirea ei (conține întotdeauna un verb), determinările (complemente, circumstanțiale, nu atribute), funcția de predicat verbal.',
          },
          {
            etapa: 'Combinații, Aplicații, ex. 1',
            timp: '5 min',
            activitate: '– Locuțiunile formate din cuvintele date și câte un enunț cu fiecare, oral.',
          },
          {
            etapa: 'Verbe sinonime, ex. 2',
            timp: '5 min',
            activitate: '– Verbele sinonime pentru locuțiunile din listă, scrise pe tablă de câte un elev.',
          },
          {
            etapa: 'Locuțiune sau nu? Ex. 3',
            timp: '4 min',
            activitate: '– În perechi: enunțurile a-d, cu argument.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (locuțiunea și verbul sinonim) și ex. 2 (locuțiune sau nu?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Fișa lecției, ex. 2',
            timp: '4 min',
            activitate: '– Discutăm oral: de ce e sau nu e locuțiune verbală grupul de pe fișa lecției.',
          },
          {
            etapa: 'Analiza după model, Aplicații, ex. 4',
            timp: '8 min',
            activitate: '– Locuțiunile din cele două fragmente de Slavici, analizate la tablă după modelul de la p. 69.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa lecției, ex. 1; fișa de exerciții, pagina 2.\n– Portofoliu: scrisoarea către un prieten despre planurile de studii și carieră, cu verbele copulative subliniate.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2. Temă de portofoliu: scrisoarea despre planurile de viitor, cu verbe copulative.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-14/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-14/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-15',
      titlu: 'Modurile și timpurile verbului',
      obiective: [
        'Reactualizează modurile și timpurile verbului, cu accent pe indicativ, imperativ, conjunctiv și condițional-optativ.',
      ],
      sursaManual: 'Art 7, pp. 70-73',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modurile și timpurile verbului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează modurile și timpurile verbului, cu accent pe indicativ, imperativ, conjunctiv și condițional-optativ.',
        ],
        resurse: [
          'Manual Art 7, pp. 70-73',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-15/fisa-exercitii.pdf)',
          'Schema „Modurile și timpurile verbului” (/materiale/clasa-7/unitatea-2/lectia-15/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Voluntariatul, Modurile, Explorare, ex. 1-5',
            timp: '7 min',
            activitate: '– Grupe de 4-6, pe textul de la p. 70: verbele predicative și copulative pe două coloane, sinonimul locuțiunii, verbele grupate după mod, modul fără timpuri, timpurile indicativului care lipsesc.',
          },
          {
            etapa: 'Notițe: cele patru moduri',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 70) și schema lecției: indicativul, imperativul, conjunctivul, condiționalul-optativ, cu ce arată fiecare și un exemplu.',
          },
          {
            etapa: 'Indicativul, Explorare, ex. 1-7',
            timp: '7 min',
            activitate: '– Povestea „Cele două sandale”: verbele așezate pe indicatorul înainte, acum, după; timpurile lor; sufixele și desinențele din călătorea, aruncă, asistase, răspunse; forma de viitor din text; prezentul din proverbe.',
          },
          {
            etapa: 'Notițe: timpurile indicativului',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 71): prezentul; imperfectul, perfectul compus, perfectul simplu, mai-mult-ca-perfectul; viitorul standard, anterior și în trecut, cu câte un exemplu.',
          },
          {
            etapa: 'Imperativul, conjunctivul, condiționalul',
            timp: '6 min',
            activitate: '– Sfaturile pentru voluntari (imperativul, forma negativă, „Fii”/„Nu fi”); mesajul lui Luca (conjunctivul prezent și perfect); fragmentul din Simona Popescu (condiționalul prezent și perfect).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „Radu, voluntar”, scris pentru fișă, și modul și timpul verbelor), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 3-4, oral',
            timp: '3 min',
            activitate: '– Un verb la forma negativă din textul „Care este tâlcul poveștilor?”; imperativul lui „a vedea”.',
          },
          {
            etapa: 'Formele regionale, Aplicații, ex. 7',
            timp: '4 min',
            activitate: '– Grupe de 4-5: formele regionale din enunțurile a-d și regiunile unde se folosesc.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1-2 și 5-6; fișa de exerciții, pagina 2.\n– „Provocări”, opțional: narațiunea pe proverbul „Prietenul la nevoie se cunoaște”.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-15/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-15/schema.svg', titlu: 'Modurile și timpurile verbului' }, altele: [] },
    },
    {
      id: 'lectia-16',
      titlu: 'Forme verbale nepersonale: infinitivul și participiul',
      obiective: [
        'Identifică infinitivul (forma scurtă și lungă) și participiul, ca forme verbale nepersonale.',
      ],
      sursaManual: 'Art 7, pp. 74-75',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Forme verbale nepersonale: infinitivul și participiul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică infinitivul (forma scurtă și lungă) și participiul, ca forme verbale nepersonale.',
        ],
        resurse: [
          'Manual Art 7, pp. 74-75',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-16/fisa-exercitii.pdf)',
          'Schema „Infinitivul și participiul” (/materiale/clasa-7/unitatea-2/lectia-16/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Robin Hood, Participiul, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Replicile celor patru copii de la p. 74: ce moduri și timpuri se formează cu participiu? Ce devin participiile colorate?',
          },
          {
            etapa: 'Infinitivul, Explorare, ex. 1-5',
            timp: '8 min',
            activitate: '– Infinitivele din exemple, cu și fără „a”; forma lungă din „Fire-ar ei de aiuriți!”; funcțiile lor (în perechi, ex. 4); înlocuirea formelor nepersonale cu verbe la mod personal.',
          },
          {
            etapa: 'Notițe: infinitivul',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 74) și schema lecției: infinitivul, marca „a”, sufixele pe conjugări, funcțiile sintactice cu exemple.',
          },
          {
            etapa: 'Adjectivele din participiu, Explorare, ex. 3-4',
            timp: '3 min',
            activitate: '– Forma negativă a adjectivelor din listă; formarea și scrierea lui „nemaiîncercat”, „nemaipomenit”.',
          },
          {
            etapa: 'Notițe: participiul',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 75): participiul în timpurile compuse, sufixele pe conjugări, adjectivul provenit din participiu și funcțiile lui, forma negativă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (funcția infinitivului) și ex. 2 (verb sau adjectiv?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Conjugări și forme corecte, Aplicații, ex. 1 și 4',
            timp: '5 min',
            activitate: '– Verbele din listă, grupate pe conjugări; forma corectă în enunțurile a-b.',
          },
          {
            etapa: 'Analiza, Aplicații, ex. 3',
            timp: '5 min',
            activitate: '– În perechi: infinitivele din exemplele a-e, analizate după model; verificăm frontal două exemple.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 2 și 5-9; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-16/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-16/schema.svg', titlu: 'Infinitivul și participiul' }, altele: [] },
    },
    {
      id: 'lectia-17',
      titlu: 'Forme verbale nepersonale: gerunziul și supinul',
      obiective: [
        'Identifică structura și funcțiile sintactice ale gerunziului și supinului.',
      ],
      sursaManual: 'Art 7, pp. 76-77',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Forme verbale nepersonale: gerunziul și supinul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică structura și funcțiile sintactice ale gerunziului și supinului.',
        ],
        resurse: [
          'Manual Art 7, pp. 76-77',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-17/fisa-exercitii.pdf)',
          'Schema „Gerunziul și supinul” (/materiale/clasa-7/unitatea-2/lectia-17/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Poemul-diamant, Gerunziul, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– Ce fel de acțiune exprimă formele din rândurile 3 și 5 ale poemului despre Popa Tanda? Sufixele gerunziului și conjugarea cu sufix diferit.',
          },
          {
            etapa: 'Gerunziul, ex. 3-5',
            timp: '6 min',
            activitate: '– Gerunziul verbelor din listă; forma negativă a gerunziilor din poem; în perechi, funcțiile formelor subliniate.',
          },
          {
            etapa: 'Notițe: gerunziul',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 76) și schema lecției: sufixele -ând, -ind, forma negativă, cliticele, gerunziul acordat, funcțiile (circumstanțial de mod și de timp, atribut verbal, complement direct).',
          },
          {
            etapa: 'Lista lui Mihai, Supinul, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Grupe de 4-5: supinele din mesaj, comparate cu infinitivul, participiul și gerunziul (ce exprimă, structura); funcțiile primelor trei.',
          },
          {
            etapa: 'Notițe: supinul',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 77): prepoziție + participiu, forma negativă, funcțiile (subiect, nume predicativ, atribut verbal, complement direct, complement prepozițional).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (funcția gerunziului) și ex. 2 (funcția supinului), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Gerunziile din Slavici, Aplicații, ex. 1 a-c',
            timp: '5 min',
            activitate: '– Analiza după model, la tablă.',
          },
          {
            etapa: 'Supinele din „Inocenții”, ex. 2 a-b',
            timp: '4 min',
            activitate: '– Analiza după model, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 1 d-e, 2 c-d și 3; fișa de exerciții, pagina 2.\n– „Provocări”, opțional: poemul-diamant „Voluntarii”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-17/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-17/schema.svg', titlu: 'Gerunziul și supinul' }, altele: [] },
    },
    {
      id: 'lectia-18',
      titlu: 'Posibilități combinatorii ale verbului. Circumstanțialul de cauză (I)',
      obiective: [
        'Descoperă circumstanțialul de cauză și rolul lui în enunț.',
      ],
      sursaManual: 'Art 7, pp. 78-80, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Posibilități combinatorii ale verbului. Circumstanțialul de cauză (I)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă circumstanțialul de cauză și rolul lui în enunț.',
        ],
        resurse: [
          'Manual Art 7, pp. 78-79',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-18/fisa-exercitii.pdf)',
          'Schema „Posibilitățile combinatorii ale verbului. Circumstanțialul de cauză” (/materiale/clasa-7/unitatea-2/lectia-18/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ziua zâmbetului, Explorare, ex. 1-2',
            timp: '10 min',
            activitate: '– Verbele cu mod din textul despre fața zâmbitoare (p. 78).\n– Grupe de 4-5, sarcinile a-f: predicate verbale și nominale, numele predicative, subiectele neexprimate, complementele, circumstanțialele de loc, timp, mod, infinitivele; confruntăm soluțiile.',
          },
          {
            etapa: 'Notițe: posibilitățile combinatorii ale verbului',
            timp: '5 min',
            activitate: '– În caiete, după Repere (pp. 78-79): verbul la mod personal ca centru al grupului verbal; numele predicativ, subiectul, complementele, circumstanțialele; funcțiile formelor nepersonale.',
          },
          {
            etapa: 'Planșa din „Zâmbește”, ex. 1-3',
            timp: '5 min',
            activitate: '– În perechi: unde se petrece scena, cine vorbește; complinirea scrisă cu roșu e obligatorie sau facultativă? La ce întrebare răspunde?',
          },
          {
            etapa: 'Întrebarea de cauză, ex. 4',
            timp: '4 min',
            activitate: '– Pentru fiecare enunț: întrebarea „din ce cauză?” și cuvintele care răspund, subliniate în caiete.',
          },
          {
            etapa: 'Notițe: circumstanțialul de cauză',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 79) și schema lecției: definiția, întrebările, exprimarea (substantiv cu de, din, pentru, după; adjectiv cu prepoziție; gerunziu), locul și virgula.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „În parc”, scris pentru fișă, și funcțiile sintactice), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'De ce zâmbește fata? Ex. 5',
            timp: '5 min',
            activitate: '– Enunțuri orale despre imagine, cu cauza exprimată prin de, din, pentru, după + substantiv.',
          },
          {
            etapa: 'Virgula, fișa, ex. 3, oral',
            timp: '2 min',
            activitate: '– Unde e obligatorie virgula în enunțurile a-d? Elevii argumentează cu regula din notițe.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2, ex. 4; recitirea notițelor pentru exercițiile de la p. 80.',
          },
        ],
        evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-18/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-18/schema.svg', titlu: 'Posibilitățile combinatorii ale verbului. Circumstanțialul de cauză' }, altele: [] },
    },
    {
      id: 'lectia-19',
      titlu: 'Posibilități combinatorii ale verbului. Circumstanțialul de cauză (II)',
      obiective: [
        'Redactează un scurt text care conține circumstanțiale de cauză.',
      ],
      sursaManual: 'Art 7, pp. 78-80, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Posibilități combinatorii ale verbului. Circumstanțialul de cauză (II)',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Redactează un scurt text care conține circumstanțiale de cauză.',
        ],
        resurse: [
          'Manual Art 7, p. 80',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-19/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-19/fisa.pdf)',
          'Creioane colorate',
        ],
        desfasurare: [
          {
            etapa: '„O faptă bună pe zi”, Aplicații, ex. 1-5',
            timp: '10 min',
            activitate: '– Citim articolul de la p. 80: predicatele verbale; un subiect exprimat și unul neexprimat; complementele colorate; circumstanțialele colorate; cele două circumstanțiale de cauză.',
          },
          {
            etapa: 'Prepozițiile, ex. 6',
            timp: '4 min',
            activitate: '– Prepozițiile potrivite în enunțurile a-e, frontal.',
          },
          {
            etapa: 'Acțiuni și cauze, ex. 7',
            timp: '4 min',
            activitate: '– Asocierile a-e, notate în caiete.',
          },
          {
            etapa: 'Gerunziile, ex. 8',
            timp: '4 min',
            activitate: '– Ce fel de circumstanțiale sunt gerunziile din enunțurile a-e?',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1 (prepoziția potrivită) și ex. 2 (cauză, timp sau mod?), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Fișa lecției, ex. 1',
            timp: '4 min',
            activitate: '– Circumstanțialele de cauză subliniate, cu întrebarea potrivită.',
          },
          {
            etapa: 'Planul articolului, fișa, ex. 3',
            timp: '5 min',
            activitate: '– Fiecare elev alege o faptă bună și completează planul (titlu, ce, cine, unde, când, cum, de ce).',
          },
          {
            etapa: 'Începutul articolului, „Provocări”',
            timp: '6 min',
            activitate: '– Elevii încep articolul pentru revista școlii; doi citesc primele rânduri.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: articolul terminat (fișa, ex. 4), cu circumstanțialele subliniate în culorile de la p. 80 (galben, albastru, verde, roșu); fișa lecției, ce a rămas.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; articolele, pentru apreciere.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-19/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-19/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-20',
      titlu: 'Circumstanțialul de scop',
      obiective: [
        'Descoperă circumstanțialul de scop și îl diferențiază de alte circumstanțiale.',
      ],
      sursaManual: 'Art 7, p. 81',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Circumstanțialul de scop',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă circumstanțialul de scop și îl diferențiază de alte circumstanțiale.',
        ],
        resurse: [
          'Manual Art 7, p. 81',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-20/fisa-exercitii.pdf)',
          'Schema „Circumstanțialul de scop” (/materiale/clasa-7/unitatea-2/lectia-20/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Dă mai departe”, Explorare, ex. 1',
            timp: '4 min',
            activitate: '– Citim prezentarea filmului de la p. 81 și notăm verbele de care depind părțile colorate.',
          },
          {
            etapa: 'Întrebările, ex. 2 a-d',
            timp: '7 min',
            activitate: '– În perechi: la ce întrebări răspund părțile colorate, după model; ce arată (cauză, scop, mod); unde stau față de verb; completarea enunțului „Dă mai departe pentru...”.',
          },
          {
            etapa: 'Notițe: circumstanțialul de scop',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 81) și schema lecției: definiția, întrebările, exprimarea (substantiv cu prepoziție, infinitiv cu prepoziție, supin), locul și virgula.',
          },
          {
            etapa: 'Prezentarea autoarei, Aplicații, ex. 1-2',
            timp: '9 min',
            activitate: '– Circumstanțialele de scop din prezentarea lui Catherine Ryan Hyde, analizate după model la tablă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cauză sau scop?) și ex. 2 (cum e exprimat scopul?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Felul circumstanțialelor, Aplicații, ex. 3',
            timp: '4 min',
            activitate: '– Perechile de enunțuri a-b: ce fel de circumstanțial e fiecare parte comună?',
          },
          {
            etapa: 'Scopul la început, fișa, ex. 3, oral',
            timp: '4 min',
            activitate: '– Elevii mută circumstanțialul de scop la începutul enunțurilor a-b și spun unde pun virgula.',
          },
          {
            etapa: 'Autoevaluare L9-L14',
            timp: '2 min',
            activitate: '– Elevii completează în caiete cele trei enunțuri de la p. 81.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2, ex. 4.\n– „Provocări”, opțional: articolul despre fapta bună a unei vedete, cu trei circumstanțiale de scop.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea achizițiilor din lecțiile 9-14.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-20/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-20/schema.svg', titlu: 'Circumstanțialul de scop' }, altele: [] },
    },
    {
      id: 'lectia-21',
      titlu: 'Caracterizarea personajului (I), pregătire',
      obiective: [
        'Enumeră trăsăturile personajului principal din Popa Tanda și le corelează cu mijloacele de construcție a personajului, schițând planul caracterizării.',
      ],
      sursaManual: 'Art 7, pp. 82-83, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Caracterizarea personajului (I), pregătire',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Enumeră trăsăturile personajului principal din Popa Tanda și le corelează cu mijloacele de construcție a personajului, schițând planul caracterizării.',
        ],
        resurse: [
          'Manual Art 7, pp. 82-83',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-21/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-21/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ce vrem să aflăm, „Pentru început”, ex. 1-3',
            timp: '5 min',
            activitate: '– Ce ați vrea să aflați despre personajul unei cărți recomandate? Ne ajută analiza personajelor să-i înțelegem pe oameni? Ce ilustrează imaginea de la p. 82?',
          },
          {
            etapa: 'Trăsături și mijloace, Explorare, ex. 1-2',
            timp: '8 min',
            activitate: '– Trăsăturile morale ale părintelui Trandafir din fragmentele a-d și mijlocul de caracterizare pentru fiecare (direct sau indirect).',
          },
          {
            etapa: 'Notițe: caracterizarea personajului',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 82): ce este caracterizarea, la ce se referă (identitate și statut, trăsături fizice și morale, personaje asemănătoare, valori), fiecare trăsătură cu exemplu din text.',
          },
          {
            etapa: 'Planul pe paragrafe, Aplicații, ex. 1 a-b',
            timp: '5 min',
            activitate: '– Parcurgem sugestiile de la p. 83 pentru introducere, trăsăturile fizice, trăsăturile morale, comparații și încheiere.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '10 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „Bunicul Vasile”, scris pentru fișă, și trăsăturile cu mijloacele lor), individual, 7 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Planul meu, fișa lecției',
            timp: '10 min',
            activitate: '– Pe fișa lecției, fiecare elev face tabelul trăsăturilor cu mijloacele lor și schițează planul caracterizării părintelui Trandafir.',
          },
          {
            etapa: 'Schimbul de planuri, Aplicații, ex. 1 c',
            timp: '4 min',
            activitate: '– Schimb de planuri cu colegul de bancă; fiecare notează o sugestie de îmbunătățire.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: planul îmbunătățit după sugestii; fișa de exerciții, pagina 2; recitirea exercițiilor de la pp. 55-58.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; planurile de pe fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-21/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-21/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-22',
      titlu: 'Caracterizarea personajului (II), redactare',
      obiective: [
        'Redactează caracterizarea personajului principal, cu respectarea etapelor scrierii.',
      ],
      sursaManual: 'Art 7, pp. 82-83, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Caracterizarea personajului (II), redactare',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează caracterizarea personajului principal, cu respectarea etapelor scrierii.',
        ],
        resurse: [
          'Manual Art 7, p. 83, întrebările de revizie și grila',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-22/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-22/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Planurile îmbunătățite',
            timp: '3 min',
            activitate: '– Doi elevi își citesc planul, cu modificările făcute după sugestiile colegilor.',
          },
          {
            etapa: 'Un paragraf de revizuit, fișa, ex. 1-2',
            timp: '8 min',
            activitate: '– Citim paragraful scris pentru fișă și găsim împreună problemele (repetiții, citat fără ghilimele, argument circular, idee nelegată), cu soluția fiecăreia.',
          },
          {
            etapa: 'Ciorna, Aplicații, ex. 1 d',
            timp: '16 min',
            activitate: '– Fiecare scrie ciorna caracterizării pe fișa lecției, după plan, atent la legătura dintre idei; trec printre bănci.',
          },
          {
            etapa: 'Revizia, ex. 1 e',
            timp: '8 min',
            activitate: '– Elevii își recitesc ciorna cu întrebările de revizie de la p. 83 și bifează verificarea de pe fișa de exerciții, ex. 4.',
          },
          {
            etapa: 'Varianta finală, ex. 1 f',
            timp: '10 min',
            activitate: '– Transcrierea curată a caracterizării, cu corecturile făcute.',
          },
          {
            etapa: 'Autoevaluare, ex. 2',
            timp: '3 min',
            activitate: '– Fiecare se autoevaluează pe grila de la p. 83; strâng caracterizările pentru apreciere.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: cine n-a terminat varianta finală o termină acasă; fișa de exerciții, ex. 3 (paragraful revizuit).',
          },
        ],
        evaluare: 'Autoevaluare pe grila de la p. 83; caracterizarea, strânsă pentru apreciere.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-22/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-2/lectia-22/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-23',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: structura textului narativ, mijloacele de construcție a personajului, textul explicativ.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 84-85, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: structura textului narativ, mijloacele de construcție a personajului, textul explicativ.',
        ],
        resurse: [
          'Manual Art 7, pp. 84-85',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-23/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ciorchinele unității',
            timp: '3 min',
            activitate: '– Pe tablă, „Aproape de ceilalți”; elevii spun pe rând câte o noțiune de lectură sau de comunicare învățată în unitate.',
          },
          {
            etapa: 'Lectura',
            timp: '7 min',
            activitate: '– Citesc fragmentele din „Povestea ceasului cu inimă” de Vladimir Colin (pp. 84-85).',
          },
          {
            etapa: 'Episoade, timp, spațiu, personaje, cerințele 1-3',
            timp: '7 min',
            activitate: '– Cele trei episoade legate prin înlănțuire, cu problema și un titlu pentru fiecare; indicii de timp și spațiu și ce sugerează imprecizia lor; personajele grupate după fapte.',
          },
          {
            etapa: 'Caracterizare, cerințele 4-7',
            timp: '7 min',
            activitate: '– Diagrama Venn cu cei doi ceasornicari, în perechi; trăsăturile împăratului; trăsăturile piticului, cu mijloacele de caracterizare; ce reprezintă piticul (a-c).',
          },
          {
            etapa: 'Piticul azi și repetiția, cerințele 8-9',
            timp: '4 min',
            activitate: '– Cine ar putea avea azi rolul piticului? Rolul repetiției din replica piticului.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (textul „Brutarul din Pietrosu”, scris pentru fișă, și noțiunile de lectură), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '7 min',
            activitate: '– Quizul „Recapitulare, lectură și comunicare”, frontal; discutăm răspunsurile greșite.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; planul caracterizării piticului din ceas (cerința 15).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-23/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce diferență există între un personaj plat și unul rotund?',
              variante: [
                { text: 'Personajul rotund are trăsături complexe, uneori contradictorii; cel plat rămâne simplu, previzibil', corect: true, explicatie: 'Complexitatea personajului ține tocmai de această distincție.' },
                { text: 'Personajul plat apare mai des în text decât cel rotund', corect: false, explicatie: 'Frecvența apariției nu definește tipul de personaj.' },
                { text: 'Nu există nicio diferență reală', corect: false, explicatie: 'Distincția plat/rotund e una consacrată în teoria personajului.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 57-58',
            },
            {
              intrebare: 'Ce presupune un text explicativ oral bine construit?',
              variante: [
                { text: 'O structură clară, cu fapte și opinii inserate coerent', corect: true, explicatie: 'Discriminarea fapte/opinii și structura clară fac diferența unui text explicativ reușit.' },
                { text: 'Cât mai multe opinii personale, fără fapte', corect: false, explicatie: 'Un text explicativ bun combină faptele cu opiniile, nu se bazează doar pe opinii.' },
                { text: 'Repetarea acelorași informații de mai multe ori', corect: false, explicatie: 'Repetiția nu e o trăsătură a unui text explicativ bine construit.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 65-66',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-24',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, formele verbale nepersonale, circumstanțialul de cauză și de scop.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 84-85, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, formele verbale nepersonale, circumstanțialul de cauză și de scop.',
        ],
        resurse: [
          'Manual Art 7, p. 85',
          'Fișa de exerciții (/materiale/clasa-7/unitatea-2/lectia-24/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Un enunț din poveste',
            timp: '3 min',
            activitate: '– Scriu pe tablă enunțul cu piticul care își aruncă, de bucurie, căciulița; ce fel de circumstanțial e „de bucurie”?',
          },
          {
            etapa: 'Verbul, cerințele 10-12',
            timp: '7 min',
            activitate: '– Un predicat verbal și unul nominal din primul paragraf, analizate; două forme nepersonale și funcția lor; sinonime pentru cele două locuțiuni verbale.',
          },
          {
            etapa: 'Complemente și circumstanțiale, cerințele 13-14',
            timp: '8 min',
            activitate: '– Complementele și circumstanțialele colorate din fragment, cu cuvintele de care depind; felul celor cinci circumstanțiale evidențiate cu galben și prin ce sunt exprimate.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-3 (enunțurile despre brutar, analiza, formele nepersonale), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '7 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”, frontal; la greșeli, revenim la notițe.',
          },
          {
            etapa: 'Caracterizarea piticului, cerința 15',
            timp: '6 min',
            activitate: '– Doi elevi își citesc planul făcut acasă; completăm împreună ce lipsește (identitate, trăsături cu dovezi, comparație, semnificație, opinie).',
          },
          {
            etapa: 'Pregătirea evaluării',
            timp: '4 min',
            activitate: '– Anunț proba de ora viitoare: un fragment nou, zece cerințe de limbă și lectură (partea A) și o caracterizare de cel puțin 200 de cuvinte (partea B).\n– Ce recitesc acasă: notițele despre verb, formele nepersonale, circumstanțiale, mijloacele de caracterizare și planul caracterizării.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: cerința 15 (caracterizarea piticului, 15-20 de rânduri); fișa de exerciții, pagina 2; recapitularea pentru evaluare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-2/lectia-24/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Când verbul a fi are nevoie obligatoriu de un alt cuvânt (substantiv sau adjectiv) ca să aibă sens complet, este...',
              variante: [
                { text: 'verb copulativ', corect: true, explicatie: 'Verbul copulativ a fi se combină cu numele predicativ pentru sens complet.' },
                { text: 'verb predicativ', corect: false, explicatie: 'Verbul predicativ are sens complet și singur, fără alt cuvânt obligatoriu.' },
                { text: 'locuțiune verbală', corect: false, explicatie: 'O locuțiune verbală e un grup fix de cuvinte, nu verbul a fi singur.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 67-69',
            },
            {
              intrebare: 'Ce întrebare descoperă circumstanțialul de cauză?',
              variante: [
                { text: 'din ce cauză? de ce?', corect: true, explicatie: 'Circumstanțialul de cauză arată motivul acțiunii.' },
                { text: 'cu ce scop?', corect: false, explicatie: 'Aceasta e întrebarea circumstanțialului de scop.' },
                { text: 'cui?', corect: false, explicatie: 'Cui? e întrebarea complementului indirect, nu a circumstanțialului de cauză.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 78-80',
            },
            {
              intrebare: 'Ce întrebare descoperă circumstanțialul de scop?',
              variante: [
                { text: 'cu ce scop? pentru ce?', corect: true, explicatie: 'Circumstanțialul de scop arată finalitatea acțiunii.' },
                { text: 'din ce cauză?', corect: false, explicatie: 'Aceasta e întrebarea circumstanțialului de cauză.' },
                { text: 'unde?', corect: false, explicatie: 'Unde? e întrebarea circumstanțialului de loc.' },
              ],
              indiciu: null, sursa: 'Art 7, p. 81',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-25',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.',
      ],
      sursaManual: 'Art 7, Evaluare, p. 86',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare, probă scrisă',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.',
        ],
        resurse: [
          'Testul, Manual Art 7, p. 86',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; manualul e deschis la p. 86 (fragmentul din „La Medeleni” de Ionel Teodoreanu, cu secvențele evidențiate).\n– Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (caracterizarea Monicăi, cel puțin 200 de cuvinte), 10 puncte din oficiu.\n– Timpul orientativ: 5 minute pentru citirea textului, 18 pentru partea A, 17 pentru caracterizare; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.\n– Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să verifice dacă fiecare trăsătură a Monicăi are o dovadă din text.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.',
          },
        ],
        evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [] },
    },
  ],
}
