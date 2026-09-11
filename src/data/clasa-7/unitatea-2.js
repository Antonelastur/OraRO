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
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '5 min',
            activitate: 'Îi întreb pe elevi ce înseamnă pentru ei o comunitate și ce valori cred că are comunitatea în care trăiesc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț proiectul de grup al unității, Valorile mele, valorile comunității, cu prezentare peste trei săptămâni.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Ne amintim de proiectele de grup din clasa a VI-a: ce a mers bine și ce vrem să facem mai bine acum.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Explic sarcina de la p. 62: grupe de 4-5 elevi, fiecare pentru o comunitate, etnică sau religioasă, din regiune, cu două produse, un poster-diamant al valorilor și o prezentare digitală cu activități de voluntariat. Parcurgem exemplele de voluntari de la p. 62, de la profesor la jurnalist, calendarul pe trei săptămâni și rolurile din grupă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Formăm grupele și fiecare completează fișa lecției cu comunitatea aleasă și rolurile membrilor. Citim grila de evaluare de la p. 62: conținutul posterului, ideile de voluntariat, prezentarea.',
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
            activitate: 'Fiecare elev alege șase valori din lista de la p. 48, altruism, curaj, onestitate, perseverență, responsabilitate, și le notează în diamantul valorilor, apoi câțiva le citesc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim o nuvelă despre un preot care încearcă să schimbe un sat întreg.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Îl prezint pe Ioan Slavici, pe baza textului de la p. 48: nuvela citită la „Junimea”, publicată în Convorbiri literare și apoi în Novele din popor.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citesc model fragmentele de la pp. 48-52, cu cuvintele din subsol, dascăl, muruială, poporean, curechi, tândălitură, leasă, laiță. Urmărim drumul părintelui Trandafir: mutarea la Sărăceni, predica, sfaturile, batjocura și porecla, ocările, plângerea la episcopie, deznădejdea, apoi munca la propria casă și satul schimbat din final.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Elevii completează cele patru cadrane ale impresiilor de la p. 52, apoi discută în perechi ce valori din diamantul lor au regăsit în text și la ce personaj.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor. Temă de portofoliu: diamantul valorilor proprii.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-3/fisa.pdf)',
          'Coli pentru grupele de investigație',
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
            activitate: 'Îi rog pe elevi să spună, în câte un cuvânt, cum arată Sărăcenii la începutul nuvelei și cum arată la sfârșit.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că investigăm locul, timpul și structura nuvelei.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim momentele subiectului și diferența dintre schiță și o narațiune mai amplă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Investigația de la p. 53, pe grupe: lingviștii caută cuvintele de loc și de timp, geografii fac harta satului la început și la final, istoricii așază momentele pe o axă a timpului, povestitorii formulează ideile principale ale capitolelor, artiștii aleg pictura potrivită pentru scena straturilor. Raportăm, apoi fixăm Reperele: textul epic, episoadele, rolul descrierii și al dialogului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi compară într-o diagramă Venn cele două descrieri ale satului și discută efectul așezării lor la început și la final.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri pe rezultatele investigației; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-3/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-4/fisa.pdf)',
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
            activitate: 'Elevii completează fișa de identitate a părintelui Trandafir de la p. 55: nume, domiciliu, profesie, stare civilă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că aflăm cum își construiește autorul personajul și ce rol are repetiția.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim, din clasa a VI-a, trăsăturile numite și cele deduse.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Stabilim cine vorbește despre părintele Trandafir în cele trei pasaje de la p. 55 și explicăm comparația cu capra din grădina cu curechi. Așezăm pe o axă a timpului încercările lui de a-i schimba pe săteni și notăm trăsătura din fiecare. Fixăm Reperele despre caracterizarea directă și indirectă și despre repetiție, urmărind replica „Popa e omul dracului!” până la „omul lui Dumnezeu” din final.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi, în perechi, completează tabelul trăsătură, cine o prezintă, exemplu din text.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-4/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-5/fisa.pdf)',
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
            activitate: 'Privim autoportretul lui Van Gogh de la p. 57 și îi întreb dacă sugerează un om simplu sau unul complex.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că studiem conflictele nuvelei și complexitatea personajului principal.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim personajul colectiv, sătenii din Sărăceni.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Discutăm conflictul cu protopopul și conflictul cu sătenii, cu motivațiile fiecărei părți și citate, apoi frământările interioare ale părintelui. Fixăm Reperele: conflict exterior și interior, personaje simple și complexe, și notăm trăsăturile pozitive și negative ale personajului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Pe grupe, elevii privesc personajul prin „lentilele” de la p. 58, ale astrologului, ale psihologului, ale unui angajator, și își argumentează concluziile cu citate. Apoi rezolvă fișa lecției.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-5/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-6/fisa.pdf)',
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
            activitate: 'Comparăm cele două replici ale sătenilor, „Popa e omul dracului!” și „Ține-l, Doamne, la mulți ani, că este omul lui Dumnezeu!”, și locul lor în text.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că discutăm ce vrea să ne învețe nuvela, legând-o de noi, de alte texte și de lumea de azi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Explic strategia celor trei conexiuni: textul și eu, textul și alte texte, textul și lumea.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Alegem un motto pentru nuvelă dintre variantele de la p. 59 și formulăm morala, pornind de la mărturisirea lui Slavici despre rostul scrisului. Discutăm scena finală cu trei generații și parabola fiului risipitor, cu pictura lui Bernardino Licinio. Pe grupe, dezbatem dacă valorile părintelui Trandafir seamănă cu ale unui supererou.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii construiesc diamantul valorilor părintelui Trandafir și îl compară cu al lor, rezolvă fișa lecției și completează autoevaluarea pentru lecțiile 1-5.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; autoevaluarea achizițiilor din lecțiile 1-5.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-6/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-7/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce scop ar avea o societate secretă pe care ar înființa-o ei cu frații sau prietenii.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim despre niște copii care vor să îndrepte lumea și că lucrăm în grupuri de lectură.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Citim textul de prezentare de la p. 60 și legăm fragmentul de părintele Trandafir, care a schimbat un sat întreg.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Grupurile citesc fragmentul și discută, fiecare membru având un rol în discuție. Lămurim ce poate însemna SIL, cine povestește, ce fel de om e mama-mare, scopurile societății și virtuțile ei, cumpătare, curaj, prudență, dreptate. Discutăm întâmplarea cu Miticuțu și vecina și sfatul final: „Cu voi trebuie să începeți!”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi prezint cele două cărți de la Biblioteci deschise, de Laura Grünberg și Fredrik Backman.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Temă de portofoliu: diamantul virtuților membrilor SIL.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-7/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '3 min',
            activitate: 'Tragem la sorți ordinea în care prezintă grupele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare grupă prezintă cele două materiale și că la final comparăm valorile comunităților.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Recitim grila de la p. 62: idei clare despre valori, fără stereotipuri, propuneri de voluntariat aplicabile, prezentare antrenantă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '3 min',
            activitate: 'Distribui fișele de evaluare pentru grupele care ascultă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '35 min',
            activitate: 'Grupele își prezintă posterul-diamant și propunerile de voluntariat, iar colegii completează grila. La final discutăm ce valori au în comun comunitățile prezentate și prin ce se deosebesc.',
          },
        ],
        evaluare: 'Evaluare reciprocă pe grila de la p. 62.',
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
          'Infograficul „Despre limba și cultura țărilor vecine (I)” (/materiale/clasa-7/unitatea-2/lectia-9/infografic.svg)',
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
            activitate: 'Privim obiectele de la p. 63, borcan, pahar, pernă, polonic, și citim în DEX de unde vin cuvintele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim ce avem în comun, ca limbă și cultură, cu țările vecine.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim contactele culturale din Unitatea I și comunitățile etnice din clasa a VI-a.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Discutăm de ce avem cuvinte din limbile vecinilor, apoi timbrul din Republica Moldova care sărbătorește revenirea la alfabetul latin. Analizăm tabelul limbilor de stat și al limbilor minoritare cu statut oficial și, cu infograficul, fixăm Reperele: cele cinci țări vecine, limba română în Republica Moldova, diferențele mici dintre variante.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev notează trei lucruri reprezentative pentru cultura română pe care i le-ar arăta unui prieten din altă țară. Tragem la sorți țările vecine pentru posterele de ora următoare, iar grupele își împart documentarea.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: { fisier: '/materiale/clasa-7/unitatea-2/lectia-9/infografic.svg', titlu: 'Despre limba și cultura țărilor vecine (I)' }, schema: null, altele: [] },
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
          'Infograficul „Aisbergul cultural” (/materiale/clasa-7/unitatea-2/lectia-10/infografic.svg)',
          'Posterele grupelor',
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
            activitate: 'Cu infograficul, privim aisbergul cultural: ce se vede deasupra apei, mâncare, sărbători, drapel, și ce stă dedesubt, valori, maniere, relații de familie.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare grupă prezintă o țară vecină și că apoi comparăm aceste culturi cu a noastră.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim țările vecine și limbile lor oficiale, din ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '7 min',
            activitate: 'Explic cum lucrăm: întâi prezentările, apoi grupe noi, cu câte un reprezentant din fiecare grupă inițială, care fac diagrama Venn.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '29 min',
            activitate: 'Grupele își prezintă posterele: limba și alfabetul, obiceiuri, personalități, drapel, gastronomie, locuri de vizitat. Apoi, în grupele noi, elevii fac diagrama Venn cu asemănările și deosebirile față de cultura română și comparăm concluziile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri pe postere. Temă de portofoliu: reflecția despre atitudinea față de alte culturi, de la p. 64.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: { fisier: '/materiale/clasa-7/unitatea-2/lectia-10/infografic.svg', titlu: 'Aisbergul cultural' }, schema: null, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-11/fisa.pdf)',
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
            activitate: 'Fiecare elev spune două enunțuri despre părintele Trandafir: unul cu o faptă a lui, altul cu părerea lui despre fapta respectivă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să deosebim faptele de opinii și să recunoaștem un text explicativ.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim textul explicativ din clasa a VI-a, cauzal și procedural.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Clasificăm cele opt enunțuri de la p. 65 în fapte și opinii, apoi citim cele două explicații, a filozofului Anthony C. Grayling despre bine și a astronomului Martin Rees despre planete, și stabilim ce predomină în fiecare. Fixăm Reperele: cuvintele care însoțesc faptele și opiniile și structura textului explicativ, tema, explicația, concluzia.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi, pe grupe, discută la ce întrebări de la p. 65 se așteaptă la răspunsuri sigure și la care la răspunsuri probabile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-11/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Quizul „Fapte și opinii. Textul explicativ” (materialul de joc al lecției)',
          'Prezentarea lui Adrian Covaci, dacă e disponibilă la clasă',
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
            activitate: 'Ștafeta faptelor și a opiniilor pe imaginea de la p. 66: în prima rundă, fiecare spune un fapt, în a doua, o opinie; cine greșește iese din joc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că exersăm explicațiile orale și că ne evaluăm singuri.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim structura textului explicativ: tema, explicația, concluzia.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '12 min',
            activitate: 'Citim fragmentele din prezentarea lui Adrian Covaci despre eșec, de la p. 66, stabilim modelul explicativ, dacă predomină faptele sau opiniile și dacă vrea să informeze sau să convingă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '22 min',
            activitate: 'Câțiva elevi explică oral, doar prin fapte, cum se pregătesc pentru o performanță școlară sau sportivă, iar alții își formulează opinia despre prezentarea lui Covaci. Toți se autoevaluează pe grila de la p. 66 și rezolvă quizul „Fapte și opinii. Textul explicativ”.',
          },
        ],
        evaluare: 'Autoevaluare pe grila de la p. 66; rezultatele la quiz.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: {
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
          'Schema „Verbul. Tipuri de verbe. Locuțiunea verbală” (/materiale/clasa-7/unitatea-2/lectia-13/schema.svg)',
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
            activitate: 'În perechi, elevii grupează în predicative și nepredicative verbele din replicile copiilor care au îngrijit copacii din parc, de la p. 67.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm felurile verbului și descoperim alte verbe copulative în afară de a fi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintim auxiliarele a avea, a vrea, a fi și formele pe care le alcătuiesc, apoi predicatul nominal.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Pe articolul despre preotul Teodor Albu găsim verbele predicative, copulative și auxiliare și predicatele nominale, apoi stabilim valorile lui a fi în exemplele de la p. 67. Cu ajutorul schemei descoperim celelalte verbe copulative, a deveni, a ajunge, a ieși, a se face, a însemna, a rămâne, a părea, și când sunt copulative.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii deosebesc predicatele verbale de cele nominale în perechile de enunțuri de la p. 68, „Am ajuns acasă.” și „A ajuns persoană importantă.”, apoi analizează predicatele nominale din Popa Tanda, după model.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-13/schema.svg', titlu: 'Verbul. Tipuri de verbe. Locuțiunea verbală' }, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-14/fisa.pdf)',
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
            activitate: 'Citim „Oamenii ascultau bucuros; le plăcea să stea de vorbă cu popa.” și le cer un sinonim pentru „a sta de vorbă”.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm locuțiunea verbală.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim verbele copulative și predicatul nominal de ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Pe Reperele de la p. 69 explic locuțiunea verbală, grup unitar care conține un verb, determinată de complemente și circumstanțiale, cu funcția de predicat verbal. Combinăm cuvintele de la p. 69 în locuțiuni, a sta de vorbă, a face de râs, a băga de seamă, a pune la inimă, și căutăm verbe sinonime pentru a da zor, a lua la rost, a spăla putina.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi găsesc și analizează locuțiunile din fragmentele lui Slavici de la p. 69, după model.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Temă de portofoliu: scrisoarea despre planurile de viitor, cu verbe copulative.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-14/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Schema „Modurile și timpurile verbului” (/materiale/clasa-7/unitatea-2/lectia-15/schema.svg)',
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
            activitate: 'Pe grupe, elevii citesc textul despre voluntariat de la p. 70 și grupează verbele după mod.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm cele patru moduri și timpurile lor.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim ce arată fiecare mod: acțiune sigură, ordin, acțiune posibilă, acțiune condiționată.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei reluăm indicativul pe povestea Cele două sandale, așezând verbele înainte, acum și după, apoi timpurile trecute și viitoare și prezentul din proverbe. Trecem la imperativ, pe sfaturile pentru voluntari, „Nu ezita!”, „Fii curajos!”, la conjunctiv, pe mesajul lui Luca, și la condițional-optativ, pe fragmentul de Simona Popescu.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii stabilesc modul și timpul verbelor din textul „Care este tâlcul poveștilor?”, apoi, pe grupe, identifică formele regionale de la p. 73, „o fost”, „văzui”, „să vie”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-15/schema.svg', titlu: 'Modurile și timpurile verbului' }, altele: [] },
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
          'Schema „Infinitivul și participiul” (/materiale/clasa-7/unitatea-2/lectia-16/schema.svg)',
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
            activitate: 'Citim replicile despre Robin Hood de la p. 74 și îi întreb ce moduri și timpuri se formează cu participiu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că studiem primele două forme verbale nepersonale, infinitivul și participiul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim forma de dicționar a verbului și cele cinci conjugări.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic infinitivul, cu și fără a, forma lungă din „Fire-ar ei de aiuriți!” și funcțiile lui: subiect, nume predicativ, complement direct, complement prepozițional, atribut verbal. Trecem la participiu, cu sufixele pe conjugări, rolul în timpurile compuse, adjectivul provenit din participiu și forma negativă, nemaipomenit.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii aleg forma corectă, a ști sau a știi, a plăcea sau a place, apoi analizează verbele la infinitiv de la p. 75, după model.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-16/schema.svg', titlu: 'Infinitivul și participiul' }, altele: [] },
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
          'Schema „Gerunziul și supinul” (/materiale/clasa-7/unitatea-2/lectia-17/schema.svg)',
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
            activitate: 'Citim poemul-diamant despre Popa Tanda de la p. 76 și îi întreb ce fel de acțiune exprimă cuvintele din rândurile 3 și 5.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că studiem gerunziul și supinul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim infinitivul și participiul de ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei explic gerunziul, cu sufixele -ând și -ind, forma negativă, cliticele, gerunziul acordat și funcțiile lui, apoi supinul, prepoziție plus participiu, pe lista de sarcini a lui Andrei, „de scos câinele”, „de udat florile”, cu funcțiile lui. Comparăm cele patru forme nepersonale.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii analizează gerunziile din fragmentele din Popa Tanda și supinele din Inocenții, după model. Ca temă, scriu poemul-diamant „Voluntarii”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-17/schema.svg', titlu: 'Gerunziul și supinul' }, altele: [] },
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
          'Schema „Posibilitățile combinatorii ale verbului. Circumstanțialul de cauză” (/materiale/clasa-7/unitatea-2/lectia-18/schema.svg)',
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
            activitate: 'Privim planșa din Zâmbește de Raina Telgemeier, de la p. 79, cu replica „Fiica mea tocmai a leșinat din neglijența voastră!”, și îi întreb din ce cauză a leșinat fata.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm legăturile verbului cu celelalte părți de propoziție și învățăm circumstanțialul de cauză.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Pe grupe, pe textul despre fața zâmbitoare de la p. 78, elevii găsesc predicatele, subiectele, complementele și circumstanțialele.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Pe Repere reluăm verbul ca centru al grupului verbal și părțile de propoziție care se leagă de el. Cu ajutorul schemei explic circumstanțialul de cauză, cu întrebarea din ce cauză?, exprimat prin substantiv cu de, din, pentru, după, prin adjectiv cu prepoziție, „De zgârcit”, sau prin gerunziu, și virgula când stă înaintea verbului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii pun întrebarea de cauză și subliniază circumstanțialele din enunțurile de la p. 79, apoi scriu enunțuri despre motivul pentru care zâmbește fata din imagine.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-18/schema.svg', titlu: 'Posibilitățile combinatorii ale verbului. Circumstanțialul de cauză' }, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-19/fisa.pdf)',
          'Creioane colorate',
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
            activitate: 'Citim articolul „O faptă bună pe zi” de la p. 80 și căutăm cele două circumstanțiale de cauză.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că exersăm circumstanțialele și scriem un text cu ele.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim întrebările și felurile de exprimare ale circumstanțialului de cauză.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '13 min',
            activitate: 'Pe articol găsim predicatele verbale, un subiect exprimat și unul neexprimat, complementele și circumstanțialele marcate. Completăm prepozițiile de la exercițiul 6, asociem acțiunile cu cauzele lor și stabilim ce circumstanțiale sunt gerunziile de la exercițiul 8.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '22 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi scriu un articol scurt pentru revista școlii despre o faptă bună, cu circumstanțialele subliniate în culori diferite, de loc, de timp, de mod, de cauză.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției; aprecieri pe articole.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-19/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Schema „Circumstanțialul de scop” (/materiale/clasa-7/unitatea-2/lectia-20/schema.svg)',
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
            activitate: 'Citim prezentarea filmului Dă mai departe de la p. 81 și îi întreb cu ce scop îi dă profesorul tema lui Trevor.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm circumstanțialul de scop.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim circumstanțialul de cauză, ca să-l putem deosebi de cel de scop.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'În perechi, elevii pun întrebări pentru părțile de propoziție marcate și stabilesc dacă arată cauza, scopul sau modul. Cu ajutorul schemei explic circumstanțialul de scop, cu întrebările în ce scop?, cu ce scop?, exprimat prin substantiv cu prepoziție, infinitiv cu prepoziție sau supin, și virgula când stă înaintea verbului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii găsesc și analizează circumstanțialele de scop din prezentarea lui Catherine Ryan Hyde, deosebesc „S-a supărat pentru o vorbă.” de „L-a sunat pentru a-i spune o vorbă.”, apoi completează autoevaluarea pentru lecțiile 9-14.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea achizițiilor din lecțiile 9-14.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-2/lectia-20/schema.svg', titlu: 'Circumstanțialul de scop' }, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-21/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce ar vrea să afle despre personajul unei cărți recomandate de un prieten: vârsta, statutul, preocupările, trăsăturile.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că ne pregătim să scriem caracterizarea părintelui Trandafir.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim mijloacele de caracterizare directe și indirecte din Lecția 3.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Stabilim trăsăturile din cele patru fragmente de la p. 82 și mijlocul prin care apare fiecare. Fixăm Reperele despre caracterizarea personajului și parcurgem planul pe paragrafe de la p. 83: introducerea, trăsăturile fizice, trăsăturile morale cu exemple, comparația cu alte personaje, concluzia.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Pe fișa lecției, fiecare elev face planul caracterizării, apoi îl schimbă cu colegul de bancă și primește sugestii.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-21/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa lecției (/materiale/clasa-7/unitatea-2/lectia-22/fisa.pdf)',
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
            activitate: 'Doi elevi își citesc planul îmbunătățit după sugestiile de ora trecută.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare redactează azi caracterizarea părintelui Trandafir.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Citim întrebările de revizie de la p. 83: tot ce e important, legătura dintre idei, exemple suficiente, citate între ghilimele.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Stabilim cum împărțim timpul între ciornă, revizie și varianta finală, cu sprijinul fișei lecției.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '32 min',
            activitate: 'Elevii scriu ciorna, o revizuiesc cu întrebările de la p. 83, transcriu varianta finală și se autoevaluează pe grila de la p. 83.',
          },
        ],
        evaluare: 'Autoevaluare pe grila de la p. 83; caracterizarea, strânsă pentru apreciere.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-2/lectia-22/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură sau de comunicare învățată în unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm lectura pe Povestea ceasului cu inimă de Vladimir Colin.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm structura textului epic, episoadele, mijloacele de caracterizare, repetiția, conflictul, personajele simple și complexe, faptele și opiniile.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Citim fragmentele de la pp. 84-85 și rezolvăm ghidat cerințele de lectură: cele trei episoade, cu câte un titlu, indicii de timp și spațiu, personajele bune și rele, diagrama Venn cu cei doi ceasornicari, trăsăturile piticului, ce reprezintă el, repetiția „Meștere, meștere”.',
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
        prezentare: null, video: null, test: null, fisa: null,
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
            activitate: 'Scriu pe tablă „Ura-a-a! strigă piticul și, de bucurie, își azvârli căciulița cât colo.” și îi întreb ce fel de circumstanțial e „de bucurie”.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm verbul, formele nepersonale, circumstanțialele și caracterizarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm verbele predicative, copulative și auxiliare, locuțiunile, modurile și timpurile, infinitivul, participiul, gerunziul, supinul, circumstanțialele de cauză și de scop.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat cerințele de limbă de la p. 85: un predicat verbal și unul nominal, două forme nepersonale și funcția lor, sinonime pentru locuțiuni, complementele și circumstanțialele marcate, felul celor cinci circumstanțiale evidențiate.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi discutăm greșelile. Ca temă, scriu caracterizarea piticului din ceas, cerința 15.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
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
            etapa: 'Moment organizatoric',
            timp: '3 min',
            activitate: 'Salut elevii, verific prezența și pregătirea caietelor, a manualului și a instrumentelor de scris.',
          },
          {
            etapa: 'Captarea atenției',
            timp: '2 min',
            activitate: 'Le spun elevilor că proba păstrează structura celei din Unitatea I și îi liniștesc în privința timpului de lucru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se dă proba scrisă a Unității II, pe un fragment din La Medeleni de Ionel Teodoreanu, cu o parte de limbă și lectură și o caracterizare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc structura probei, 60 de puncte la partea A, 30 la caracterizare, 10 din oficiu, și cum își împart timpul.',
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
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [] },
    },
  ],
}
