// Unitatea IV: Cu noroc, fără noroc — clasa a VII-a
// Sursă: manual Art Klett 2024, proiectarea pe unități 2024-2025 (pagini din
// coloana RESURSE). Convenție: ore de curs, „partea 1/2” / „partea 2/2” unde
// proiectarea alocă 2 ore unei singure lecții de conținut.
//
// Notă: proiectarea citează atât pentru textul auxiliar Cerșetorul și regele
// (pp. 140-141), cât și pentru „Elemente de mitologie românească”
// (pp. 140-143) pagini care se suprapun parțial — reprodus exact cum apare
// în sursă, posibil ca cele două activități să înceapă pe pagini adiacente.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: fișe de lucru pentru lecțiile 2, 3, 4, 5, 7, 20, 21
// (scripts/build_clasa7_fise.py). Scheme pentru 11-19 (tipurile de pronume și
// de adjectiv pronominal). Infografic pentru 6 (Enciclopedia) și 8 (Baba-Dochia
// și mărțișorul). Jocuri-quiz pentru 9, 10 (comunicare orală) și 22, 23
// (recapitulare). Lecțiile 1 (prezentare) și 24 (probă scrisă) rămân fără
// material aici, listate în materiale-restante.md.

export const unitatea4 = {
  id: 'unitatea-4',
  titlu: 'Unitatea IV: Cu noroc, fără noroc',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ literar. Două loturi de I.L. Caragiale',
      obiective: [
        'Identifică informații esențiale din nuvela Două loturi de I.L. Caragiale.',
      ],
      sursaManual: 'Art 7, pp. 124-129 (Două loturi de I.L. Caragiale)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Două loturi de I.L. Caragiale',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din nuvela Două loturi de I.L. Caragiale.',
        ],
        resurse: [
          'Manual Art 7, pp. 124-129',
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
            activitate: 'Îi întreb pe elevi dacă se consideră norocoși și ce înseamnă a avea noroc sau ghinion, apoi privim imaginile de la p. 124 și spunem ce superstiții cunoaștem despre ele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că deschidem unitatea „Cu noroc, fără noroc” cu o întâmplare despre două bilete de loterie, scrisă de I.L. Caragiale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Îl prezint pe I.L. Caragiale, pe baza textului de la p. 124: comediile, volumul Momente, publicarea textului întâi sub titlul Două bilete pierdute. Arăt că imaginile din text sunt din filmul Două lozuri (1957).',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc model textul, cu explicarea cuvintelor din note, apoi elevii completează cadranele impresiilor de la p. 129 și le compară cu colegul de bancă. Discutăm pe scurt ce caută soții Popescu, de unde știe Lefter de câștig și cum se termină întâmplarea la bancher.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii scriu formele literare actuale ale cuvintelor de la p. 129, lotărie, cari, voi să văz, porțălan, pântre dește, și alcătuiesc câte un enunț pentru fiecare sens al cuvântului loterie, după definiția din DEX.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-2',
      titlu: 'Spațiul, timpul, acțiunea',
      obiective: [
        'Identifică coordonatele spațiale și temporale ale acțiunii, ordonează cronologic evenimentele și descoperă semnificațiile simbolice ale unor toponime.',
      ],
      sursaManual: 'Art 7, pp. 130-131',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Spațiul, timpul, acțiunea',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică coordonatele spațiale și temporale ale acțiunii, ordonează cronologic evenimentele și descoperă semnificațiile simbolice ale unor toponime.',
        ],
        resurse: [
          'Manual Art 7, pp. 130-131',
          'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-2/fisa.pdf)',
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
            activitate: 'Asociem imaginile de la p. 130, un interior de epocă, un minister, o bancă, o mahala, o celulă, cu locurile din text și cu întâmplările petrecute acolo.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că urmărim unde, când și în ce ordine se petrec întâmplările din Două loturi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim momentele subiectului și ordinea lor firească.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Stabilim orașul și epoca, cu fragmentele care le dovedesc, și obiectivele celor două loterii. Observăm că textul începe cu intriga și reconstituim situația inițială, iar în perechi elevii delimitează celelalte momente și găsesc variantele de final ale naratorului. Fixăm Reperele de la p. 130 despre iluzia realității și modalitățile de narare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi ordonează evenimentele a-j de la p. 131 și le asociază cu momentele subiectului. Discutăm semnificația numelor Mahalaua Farfurigiilor, Strada Emancipării, Strada Pacienții.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Temă de portofoliu: un alt final al întâmplărilor, de minimum 150 de cuvinte.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-4/lectia-2/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-3',
      titlu: 'Naratorul și personajele',
      obiective: [
        'Identifică tipul de narator și analizează trăsăturile, motivațiile și conflictele personajului principal.',
      ],
      sursaManual: 'Art 7, pp. 132-134',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Naratorul și personajele',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică tipul de narator și analizează trăsăturile, motivațiile și conflictele personajului principal.',
        ],
        resurse: [
          'Manual Art 7, pp. 132-134',
          'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-3/fisa.pdf)',
          'Coli pentru grupe',
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
            activitate: 'Citim fraza „Cititorul a înțeles acuma ce caută de trei zile pe brânci soții Popescu.” și îi întreb pe elevi cui i se adresează naratorul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că îl cunoaștem pe narator și îl analizăm pe Lefter Popescu.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim narațiunea la persoana a III-a și mijloacele de caracterizare directă și indirectă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Găsim comentariile naratorului și adresările către cititor și le stabilim rolul, apoi fixăm Reperele de la p. 133. Pălăriile gânditoare: șase grupe îl analizează pe Lefter, fiecare dintr-o perspectivă, iar raportorii prezintă. Completăm enunțurile cu celelalte personaje, le împărțim în secundare și episodice și trecem în revistă conflictele lui Lefter cu fiecare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă fișa lecției, apoi stabilesc trăsătura și mijlocul de caracterizare pentru fragmentele a-d de la p. 133. Discutăm numele Eleutheriu, „liber”, pus alături de Lefter.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Temă de portofoliu: caracterizarea lui Lefter Popescu, de minimum 150 de cuvinte, după schema de la p. 134.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-4/lectia-3/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează o opinie despre semnificația textului Două loturi și despre credința în noroc sau ghinion.',
      ],
      sursaManual: 'Art 7, p. 135',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie despre semnificația textului Două loturi și despre credința în noroc sau ghinion.',
        ],
        resurse: [
          'Manual Art 7, p. 135',
          'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-4/fisa.pdf)',
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
            activitate: 'Privim reprezentările zeiței Fortuna de la p. 135 și ne întrebăm de ce e oarbă și ce înseamnă cornul abundenței, cârma și roata.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim ce spune textul despre noroc și de ce finalul lasă un gust amar.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm conflictele lui Lefter de ora trecută și ne întrebăm cine e adversarul lui cel mai puternic.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Legăm cioburile farfuriilor de noroc, selectăm trimiterile la noroc din text și discutăm adresa de pe Strada Pacienței, la numărul 13. Explicăm ironia din fragmentele a-e de la p. 135, prin aluzie, exagerare, diminuare, contrast, apoi discutăm afișul filmului Două lozuri.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'În grupe de 5-6, elevii discută talismanele, ferirea de ghinion și câștigul la loterie, iar raportorii prezintă. Încheiem cu întrebarea dacă e bine ca oamenii să joace jocuri de noroc și cu fișa lecției.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-4/lectia-4/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-5',
      titlu: 'Textul multimodal (actualizare). Enciclopedia (I)',
      obiective: [
        'Colectează informații din diverse surse și recunoaște trăsăturile textului multimodal, pe baza textului Porțelanul, după Stacey Pierson.',
      ],
      sursaManual: 'Art 7, pp. 136-139, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul multimodal (actualizare). Enciclopedia (I)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Colectează informații din diverse surse și recunoaște trăsăturile textului multimodal, pe baza textului Porțelanul, după Stacey Pierson.',
        ],
        resurse: [
          'Manual Art 7, pp. 136-138',
          'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-5/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi de ce în engleză porțelanul se numește și china și ce substantiv propriu folosim în română pentru un produs. Legăm porțelanul de farfuriile sparte de Lefter.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un articol de enciclopedie și observăm cum lucrează împreună textul și imaginea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim textul multimodal și textul nonliterar din clasa a VI-a.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'În grupe de 4-5, elevii completează coloanele Știu și Vreau să știu despre porțelan, pornind de la captura de pe Wikipedia. Citim articolul din Cele șaptezeci de minuni ale Chinei, iar grupele completează coloana Am învățat. Parcurgem impresiile de lectură și exercițiile 1-5 de la p. 138: aspectele prezentate, receptorul, enunțurile adevărate și false, porțelanul „fără trup”, cuvântul chinezării.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii încadrează textul în categoriile de la ex. 6, literar sau nonliterar, continuu sau discontinuu, multimodal, și explică relația dintre text și imaginile care îl însoțesc, apoi rezolvă fișa lecției.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-4/lectia-5/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-6',
      titlu: 'Textul multimodal (actualizare). Enciclopedia (II)',
      obiective: [
        'Recunoaște trăsăturile textului enciclopedic și redactează un scurt text enciclopedic.',
      ],
      sursaManual: 'Art 7, pp. 136-139, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul multimodal (actualizare). Enciclopedia (II)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște trăsăturile textului enciclopedic și redactează un scurt text enciclopedic.',
        ],
        resurse: [
          'Manual Art 7, pp. 138-139',
          'Infograficul „Textul multimodal. Enciclopedia” (/materiale/clasa-7/unitatea-4/lectia-6/infografic.svg)',
          'Un dicționar explicativ',
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
            activitate: 'Îi întreb pe elevi când au avut nevoie ultima dată de o enciclopedie și ce enciclopedii cunosc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim trăsăturile textului enciclopedic și scriem un scurt articol.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm coloanele Am învățat de ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Comparăm articolul tipărit cu cel de pe Wikipedia: cine e autorul, cum sunt explicați termenii caolin și feldspat, bibliografia, încrederea în informații, rolul hiperlinkurilor. Cu ajutorul infograficului fixăm Reperele de la pp. 138-139 despre enciclopedie și textul enciclopedic. Căutăm porțelan în dicționar și comparăm articolul de dicționar cu cel enciclopedic.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii stabilesc diferența dintre ceramică și porțelan și scriu un scurt text enciclopedic despre un obiect de porțelan, apoi completează autoevaluarea de la p. 139. Prezint miniproiectul de portofoliu: un articol enciclopedic despre un produs artizanal din zona noastră.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea de la p. 139. Minitestul lecției e în varianta digitală a manualului, cu baremul în Anexa 7.d a Ghidului profesorului.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: { fisier: '/materiale/clasa-7/unitatea-4/lectia-6/infografic.svg', titlu: 'Textul multimodal. Enciclopedia' }, schema: null, altele: [] },
    },
    {
      id: 'lectia-7',
      titlu: 'Text auxiliar. Cerșetorul și regele (poveste populară indiană)',
      obiective: [
        'Interpretează povestea populară Cerșetorul și regele și compară cele două texte-suport ale unității.',
      ],
      sursaManual: 'Art 7, „Noi pagini, alte idei”, pp. 140-141 (Cerșetorul și regele, poveste populară indiană)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Cerșetorul și regele (poveste populară indiană)',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Interpretează povestea populară Cerșetorul și regele și compară cele două texte-suport ale unității.',
        ],
        resurse: [
          'Manual Art 7, pp. 140-141',
          'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-7/fisa.pdf)',
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
            activitate: 'Citim întrebările de la p. 140: există o forță care hotărăște destinul? Norocul e mai mult decât un concurs de împrejurări? Câțiva elevi răspund pe scurt.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim o poveste indiană despre norocul care trece pe lângă noi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim cele șase etape de înțelegere a unui text.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Elevii citesc individual povestea din volumul lui Jean-Claude Carrière, apoi o parcurgem frontal pe etape, cu întrebările de la pp. 140-141: titlul și zona culturală, locul și timpul, naratorul, simțurile, sentimentele, bobul de aur, indicii vagi de timp și spațiu, planul simplu de idei, figurile de stil, trăsăturile cerșetorului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Discutăm afirmația „Norocul trece uneori pe lângă noi” și de ce regele e cel care cere, apoi elevii notează o asemănare și o deosebire între povestire și Două loturi. Prezint volumele de la Biblioteci deschise.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției. Temă de portofoliu: e mai important norocul sau voința? (50-100 de cuvinte).',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-4/lectia-7/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-8',
      titlu: 'Elemente de mitologie românească: Baba-Dochia și tradiția mărțișorului',
      obiective: [
        'Descoperă legăturile dintre tradițiile legate de Baba-Dochia și mărțișor și identifică simboluri asociate mărțișorului.',
      ],
      sursaManual: 'Art 7, pp. 140-143 (Calendarul țăranului român. Zile și mituri de Ion Ghinoiu, fragment)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Elemente de mitologie românească: Baba-Dochia și tradiția mărțișorului',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Descoperă legăturile dintre tradițiile legate de Baba-Dochia și mărțișor și identifică simboluri asociate mărțișorului.',
        ],
        resurse: [
          'Manual Art 7, pp. 142-143',
          'Infograficul „Baba-Dochia și tradiția mărțișorului” (/materiale/clasa-7/unitatea-4/lectia-8/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi dacă au primit sau au oferit vreodată un mărțișor și ce înseamnă pentru ei gestul. Formulăm ipoteze despre formarea cuvântului mărțișor și le verificăm în DEX.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim legătura dintre mărțișor și Baba-Dochia.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim mitul și ritualul, din Unitatea III.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citim fragmentul din Calendarul țăranului român de Ion Ghinoiu și răspundem la întrebările a-g: cine primea mărțișorul, când, cât se purta, ce rol avea, ce simbolizează culorile, legătura cu Dochia. Elevii prezintă obiceiurile din zona noastră. Cu ajutorul infograficului fixăm Reperele de la p. 143 despre ființele mitologiei românești.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă aplicațiile de la p. 143: sărbătorile cu dată fixă și mobilă, asemănarea dintre ursitoare și Dochia, credința legată de cojoace, moneda din Republica Moldova, apoi stabilesc ce au în comun mărțișoarele din tabelul popoarelor vecine.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri. Temă de portofoliu: mărțișorul în altă cultură sau o altă variantă a legendei Babei-Dochia.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: { fisier: '/materiale/clasa-7/unitatea-4/lectia-8/infografic.svg', titlu: 'Baba-Dochia și tradiția mărțișorului' }, schema: null, altele: [] },
    },
    {
      id: 'lectia-9',
      titlu: 'Structura textului narativ oral',
      obiective: [
        'Descoperă structura textului narativ oral, relatând oral o întâmplare pe baza unei imagini.',
      ],
      sursaManual: 'Art 7, p. 144',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Structura textului narativ oral',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Descoperă structura textului narativ oral, relatând oral o întâmplare pe baza unei imagini.',
        ],
        resurse: [
          'Manual Art 7, p. 144',
          'Quizul „Structura textului narativ oral” (materialul de joc al lecției)',
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
            activitate: 'Câțiva elevi își prezintă prietenul imaginar din copilărie sau povestesc pe scurt o întâmplare stranie care i-a pus pe gânduri.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim din ce se compune o poveste spusă cu voce tare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim momentele subiectului dintr-un text narativ scris.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '17 min',
            activitate: 'Descriem fotografia de la p. 144, fetița, ursulețul războinic, atmosfera, și stabilim ce e real și ce e imaginar. Câțiva elevi povestesc întâmplarea ca și cum ar fi fetița, cu locul și timpul, participanții, evenimentele, deznodământul și semnificația. Fixăm Reperele: împrejurările, desfășurarea, deznodământul, evaluarea.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '18 min',
            activitate: 'În perechi, elevii propun situații pe tema unității, o întâmplare norocoasă, o coincidență bizară, și își povestesc unul altuia, evaluându-se după criteriile de la p. 144, apoi schimbă rolurile. Toți rezolvă quizul „Structura textului narativ oral”.',
          },
        ],
        evaluare: 'Interevaluare după criteriile de la p. 144; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Structura textului narativ oral',
          pasi: [
            {
              intrebare: 'La ce servește prezentarea împrejurărilor, într-o narațiune orală?',
              variante: [
                { text: 'Oferă ascultătorului informații despre cine, când, unde și la ce se referă întâmplarea', corect: true, explicatie: 'Prezentarea împrejurărilor răspunde la întrebările Cine? Când? Unde? La ce se referă?' },
                { text: 'Încheie povestirea și trage concluzia', corect: false, explicatie: 'Încheierea și semnificația țin de deznodământ și de evaluare, nu de prezentarea împrejurărilor.' },
                { text: 'Este partea în care se enumeră personajele secundare', corect: false, explicatie: 'Nu e o simplă listă de personaje, ci fixarea situației: persoană, loc, timp.' },
              ],
              indiciu: null, sursa: 'Art 7, p. 144',
            },
            {
              intrebare: 'Ce element al textului narativ oral exprimă atitudinea povestitorului și sensul pe care îl dă întâmplării?',
              variante: [
                { text: 'evaluarea', corect: true, explicatie: 'Evaluarea răspunde la întrebarea Ce semnificație are această întâmplare?' },
                { text: 'desfășurarea întâmplărilor', corect: false, explicatie: 'Desfășurarea cuprinde seria de evenimente, răspunde la Ce s-a întâmplat?' },
                { text: 'deznodământul', corect: false, explicatie: 'Deznodământul arată cum s-a terminat, nu ce semnificație are.' },
              ],
              indiciu: 'De ce povestim, de obicei, o întâmplare trăită?', sursa: 'Art 7, p. 144',
            },
            {
              intrebare: 'Ce rol au formulele „Cam așa a fost.”, „Atât.”, „Asta e tot.” la finalul unei povestiri orale?',
              variante: [
                { text: 'Întorc perspectiva în prezent și marchează încheierea relatării', corect: true, explicatie: 'Sunt modalități prin care povestitorul revine în prezent după ce a relatat trecutul.' },
                { text: 'Anunță că urmează o a doua întâmplare', corect: false, explicatie: 'Dimpotrivă, semnalează că povestirea s-a terminat.' },
                { text: 'Sunt greșeli de exprimare care trebuie evitate', corect: false, explicatie: 'Sunt formule firești ale povestirii orale, nu greșeli.' },
              ],
              indiciu: null, sursa: 'Art 7, p. 144',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Strategii de concepere și de comprehensiune a textului oral',
      obiective: [
        'Descoperă strategiile de concepere și de comprehensiune a textului oral (repetarea, reformularea) și identifică sensul conectorilor.',
      ],
      sursaManual: 'Art 7, p. 145',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Strategii de concepere și de comprehensiune a textului oral',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Descoperă strategiile de concepere și de comprehensiune a textului oral (repetarea, reformularea) și identifică sensul conectorilor.',
        ],
        resurse: [
          'Manual Art 7, p. 145',
          'Quizul „Strategii de legătură în textul oral” (materialul de joc al lecției)',
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
            activitate: 'Citim bulele din ilustrația de la p. 145, „Ia uite, toate păsările se bucură de venirea primăverii!” și „Într-adevăr, sosirea ei a binedispus toată natura!”, și observăm cum se leagă a doua replică de prima.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm cum legăm enunțurile când vorbim, prin repetare, reformulare și conectori.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim sinonimele și rolul lor în evitarea repetițiilor.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '17 min',
            activitate: 'Găsim sinonimele din a doua replică și conectorul „într-adevăr”, cu sensul lui. Fixăm Reperele: repetarea integrală sau parțială, reformularea prin sinonime, prin transformarea adjectivului sau a verbului în substantiv, prin schimbarea formei verbului, și conectorii, cu sensurile lor. Elevii reformulează oral enunțurile de la ex. 1 și stabilesc sensul conectorilor de la ex. 2.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '18 min',
            activitate: 'Povestim în lanț o întâmplare cunoscută de toată clasa, fiecare elev continuând cu un conector, apoi o a doua serie reia povestea reformulând. Comparăm cele două variante. Toți rezolvă quizul „Strategii de legătură în textul oral”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Strategii de legătură în textul oral',
          pasi: [
            {
              intrebare: 'Cum se numește repetarea unui conținut într-o formă diferită, prin sinonime sau prin schimbarea părții de vorbire?',
              variante: [
                { text: 'reformulare', corect: true, explicatie: 'Reformularea repetă același conținut altfel: sinonime, adjectiv devenit substantiv, verb devenit substantiv, schimbarea formei verbului.' },
                { text: 'reluare identică', corect: false, explicatie: 'Reluarea identică repetă exact aceleași cuvinte sau structuri, nu într-o formă diferită.' },
                { text: 'concluzie', corect: false, explicatie: 'Concluzia e un tip de conector, nu un procedeu de repetare.' },
              ],
              indiciu: '„Stăteau într-o casă dărăpănată. Locuința lor era dărăpănată.”', sursa: 'Art 7, p. 145',
            },
            {
              intrebare: 'Ce exprimă conectorul „într-adevăr”?',
              variante: [
                { text: 'confirmarea', corect: true, explicatie: '„Într-adevăr” confirmă ceea ce s-a spus înainte.' },
                { text: 'concesia', corect: false, explicatie: 'Concesia se exprimă prin „totuși”, „cu toate acestea”.' },
                { text: 'dezacordul', corect: false, explicatie: 'Dezacordul se exprimă prin „dimpotrivă”, „însă”.' },
              ],
              indiciu: null, sursa: 'Art 7, p. 145',
            },
            {
              intrebare: 'În seria „așadar, deci, așa că”, ce fel de conectori sunt aceștia?',
              variante: [
                { text: 'conectori de concluzie', corect: true, explicatie: '„Așadar”, „deci”, „așa că” introduc concluzia unui raționament.' },
                { text: 'conectori de cauză', corect: false, explicatie: 'Cauza se exprimă prin „pentru că”, „de aceea”, „de aici”.' },
                { text: 'conectori de adaos', corect: false, explicatie: 'Adaosul se exprimă prin „în plus”, „mai mult”, „de altfel”.' },
              ],
              indiciu: null, sursa: 'Art 7, p. 145',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Pronumele personal. Pronumele personal de politețe. Pronumele reflexiv',
      obiective: [
        'Reactualizează pronumele personal, pronumele personal de politețe și pronumele reflexiv și categoriile lor gramaticale.',
      ],
      sursaManual: 'Art 7, pp. 146-147',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele personal. Pronumele personal de politețe. Pronumele reflexiv',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează pronumele personal, pronumele personal de politețe și pronumele reflexiv și categoriile lor gramaticale.',
        ],
        resurse: [
          'Manual Art 7, pp. 146-147',
          'Schema „Pronumele personal, de politețe, reflexiv” (/materiale/clasa-7/unitatea-4/lectia-11/schema.svg)',
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
            activitate: 'Citim invitația la cursul de mărțișoare din porțelan rece de la p. 146 și găsim pronumele, cu substantivele pe care le înlocuiesc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm pronumele personal, de politețe și reflexiv.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim persoana, numărul, genul și cazul pronumelui personal și formele neaccentuate.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei reluăm pronumele personal și cliticele care anticipează sau reiau forma accentuată, „Pe Adrian l-a impresionat”. Trecem la pronumele de politețe, formulele reverențioase scrise cu majuscule, Excelența Sa, și domnia-sa după DOOM3. Explic pronumele reflexiv, cu formele proprii de persoana a III-a și cele împrumutate, pe perechea „Mă întreb”/„Mă întreabă”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii stabilesc dacă pronumele e personal sau reflexiv în „Îți confecționez”/„Îți confecționezi un mărțișor”, analizează pronumele din fragmentul Rodicăi Zane și corectează textul „Mia plăcut cursul și miaș dori...”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-11/schema.svg', titlu: 'Pronumele personal, de politețe, reflexiv' }, altele: [] },
    },
    {
      id: 'lectia-12',
      titlu: 'Pronumele și adjectivul pronominal posesiv',
      obiective: [
        'Descoperă pronumele posesiv și adjectivul pronominal posesiv, formele, cazurile și funcțiile sintactice ale lor.',
      ],
      sursaManual: 'Art 7, pp. 148-149',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele și adjectivul pronominal posesiv',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă pronumele posesiv și adjectivul pronominal posesiv, formele, cazurile și funcțiile sintactice ale lor.',
        ],
        resurse: [
          'Manual Art 7, pp. 148-149',
          'Schema „Pronumele și adjectivul pronominal posesiv” (/materiale/clasa-7/unitatea-4/lectia-12/schema.svg)',
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
            activitate: 'Citim bulele de la p. 148, „Obiectul acesta de porțelan va fi al tău?” și „Nu, a mea va fi farfuria.”, și stabilim ce înlocuiește „a mea”.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm pronumele posesiv și deosebim pronumele de adjectivul posesiv.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim articolul posesiv și genitivul pronumelui personal, al lui, al ei.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Grupăm posesivele după numărul posesorilor și al obiectelor posedate. Cu ajutorul schemei explic alcătuirea pronumelui posesiv, articol posesiv și formă specifică, tabelul formelor și lipsa formelor de persoana a III-a plural. În perechi, elevii stabilesc cazul și funcția posesivelor din cele 11 enunțuri, apoi arătăm că posesivul de pe lângă substantiv, „Prietenul meu”, e adjectiv, cu funcție de atribut adjectival.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii deosebesc „Telefonul său” de „Telefonul lui”, găsesc posesivele din dialog, analizează adjectivele din textul despre porțelanul bunicii, după model, și corectează „Colega mia i-a chemat pe a-i voștrii”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-12/schema.svg', titlu: 'Pronumele și adjectivul pronominal posesiv' }, altele: [] },
    },
    {
      id: 'lectia-13',
      titlu: 'Pronumele și adjectivul pronominal demonstrativ',
      obiective: [
        'Descoperă pronumele demonstrativ și adjectivul pronominal demonstrativ, diferențiind valorile morfologice ale lui cel.',
      ],
      sursaManual: 'Art 7, pp. 150-151',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele și adjectivul pronominal demonstrativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă pronumele demonstrativ și adjectivul pronominal demonstrativ, diferențiind valorile morfologice ale lui cel.',
        ],
        resurse: [
          'Manual Art 7, pp. 150-151',
          'Schema „Pronumele și adjectivul pronominal demonstrativ” (/materiale/clasa-7/unitatea-4/lectia-13/schema.svg)',
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
            activitate: 'Citim dialogul despre modelele de ii de la p. 150, „Astea... Aia cu flori roșii... cealaltă... același”, și grupăm cuvintele după apropiere, depărtare, diferențiere, identitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm pronumele și adjectivul demonstrativ și valorile lui cel.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Comparăm formele din dialog cu cele scrise: asta și aceasta, aia și aceea.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei parcurgem cele patru serii, cu formele scrise și cele vorbite, asta cu valoare neutră și pronumele semiindependent cel, cea, „cea verde”. Pe dialogul despre furcă și fus, „în mâna asta”, „Lâna aia pufoasă”, descoperim adjectivul demonstrativ, forma fără -a înaintea substantivului și cu -a după el.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii identifică demonstrativele din enunțurile a-g, stabilesc valoarea lui cel în „cele întâmplate”, „Ursitoarea cea bună”, „casele cele”, aleg între aceiași și aceeași și analizează demonstrativele din textul despre Muzeul Satului, după model.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-13/schema.svg', titlu: 'Pronumele și adjectivul pronominal demonstrativ' }, altele: [] },
    },
    {
      id: 'lectia-14',
      titlu: 'Pronumele și adjectivul pronominal nehotărât',
      obiective: [
        'Descoperă pronumele nehotărât și adjectivul pronominal nehotărât, formele, cazurile și categoriile lor gramaticale.',
      ],
      sursaManual: 'Art 7, p. 152',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele și adjectivul pronominal nehotărât',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă pronumele nehotărât și adjectivul pronominal nehotărât, formele, cazurile și categoriile lor gramaticale.',
        ],
        resurse: [
          'Manual Art 7, p. 152',
          'Schema „Pronumele și adjectivul pronominal nehotărât” (/materiale/clasa-7/unitatea-4/lectia-14/schema.svg)',
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
            activitate: 'Citim reclama pentru petreceri aniversare de la p. 152 și încercăm să înlocuim cu substantive cuvintele fiecare, unii, alții, mulți, altcineva.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm pronumele care nu spun precis despre cine sau ce e vorba.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim cuvintele simple și compuse și acordul predicatului cu subiectul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Stabilim cât de precise sunt sensurile cuvintelor din reclamă, care sunt simple și care compuse, cazul și funcția lor, apoi că „copil” sau „dorință” le transformă în adjective. Cu ajutorul schemei fixăm Reperele: nehotărâtele simple și compuse, locuțiunile, „cine știe cine”, amândoi și ambii, scrierea vreun, vreo, oricare și acordul la singular cu fiecare.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii identifică și clasifică nehotărâtele din enunțurile a-f, le transformă în adjective, le analizează după model și corectează enunțurile „Fiecare am trecut...”, „vre-o colegă”, „orcare oră”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-14/schema.svg', titlu: 'Pronumele și adjectivul pronominal nehotărât' }, altele: [] },
    },
    {
      id: 'lectia-15',
      titlu: 'Pronumele și adjectivul pronominal interogativ',
      obiective: [
        'Descoperă pronumele interogativ și adjectivul pronominal interogativ prin formularea de răspunsuri la întrebări.',
      ],
      sursaManual: 'Art 7, p. 153',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele și adjectivul pronominal interogativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă pronumele interogativ și adjectivul pronominal interogativ prin formularea de răspunsuri la întrebări.',
        ],
        resurse: [
          'Manual Art 7, p. 153',
          'Schema „Pronumele și adjectivul pronominal interogativ” (/materiale/clasa-7/unitatea-4/lectia-15/schema.svg)',
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
            activitate: 'Citim dialogul despre farsa de la aniversare de la p. 153 și stabilim ce fel de enunțuri sunt cele cu „Pe cine”, „Care”, „Cui”, „La ce”, „A cui”.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm pronumele cu care punem întrebări și aflăm funcția lor din răspuns.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim enunțurile interogative și semnul întrebării.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Înlocuim interogativele cu răspunsurile și le aflăm funcția, apoi observăm că în „Câți invitați au venit?” cuvântul determină un substantiv. Cu ajutorul schemei fixăm Reperele: formele pronumelui interogativ, funcția lui egală cu a cuvântului așteptat ca răspuns, tabelul funcțiilor pe cazuri și adjectivul interogativ, cu funcție de atribut adjectival.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii aleg forma corectă în „Ce-s/Ce-i cu florile astea?”, „Cine plecați/pleacă?”, „A cui/A lu’ cine”, „Care/Pe care ai gustat-o?” și analizează interogativele din cele 12 enunțuri, după modelele date.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-15/schema.svg', titlu: 'Pronumele și adjectivul pronominal interogativ' }, altele: [] },
    },
    {
      id: 'lectia-16',
      titlu: 'Pronumele și adjectivul pronominal relativ',
      obiective: [
        'Descoperă pronumele relativ și adjectivul pronominal relativ, formele și cazurile lor.',
      ],
      sursaManual: 'Art 7, pp. 154-155',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele și adjectivul pronominal relativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă pronumele relativ și adjectivul pronominal relativ, formele și cazurile lor.',
        ],
        resurse: [
          'Manual Art 7, pp. 154-155',
          'Schema „Pronumele și adjectivul pronominal relativ” (/materiale/clasa-7/unitatea-4/lectia-16/schema.svg)',
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
            activitate: 'Citim întâmplarea cu vaza din dinastia Ming găsită în pod, de la p. 154, și aflăm ce substantive înlocuiesc cuvintele care, ce, despre care, al cărui.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm pronumele care leagă propozițiile într-o frază.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim pronumele interogative de ora trecută și observăm că au aceleași forme.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Înlocuim relativele cu substantivele și le aflăm funcția, apoi observăm că introduc propoziții secundare. Cu ajutorul schemei explic pronumele relativ, ceea ce, grupările cel ce, popularul de, tabelul funcțiilor, prepoziția pe obligatorie la care complement direct și acordul din „Expertul a cărui părere”. Trecem la adjectivul relativ, „Știu care prieten mă va ajuta”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii completează frazele cu relativele potrivite, deosebesc pronumele de adjectivele relative din enunțurile de la ex. 2 și analizează relativele din fragmentul Veronicăi D. Niculescu. Ca provocare, caută reclame cu greșeli de folosire a relativului.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-16/schema.svg', titlu: 'Pronumele și adjectivul pronominal relativ' }, altele: [] },
    },
    {
      id: 'lectia-17',
      titlu: 'Pronumele și adjectivul pronominal negativ',
      obiective: [
        'Descoperă pronumele negativ și adjectivul pronominal negativ, formele și cazurile lor.',
      ],
      sursaManual: 'Art 7, p. 156',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Pronumele și adjectivul pronominal negativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă pronumele negativ și adjectivul pronominal negativ, formele și cazurile lor.',
        ],
        resurse: [
          'Manual Art 7, p. 156',
          'Schema „Pronumele și adjectivul pronominal negativ” (/materiale/clasa-7/unitatea-4/lectia-17/schema.svg)',
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
            activitate: 'Citim textul despre bulevardul pustiu de la p. 156, „nu era nimeni... Nimic nu mișca... Niciunul nu despica limpezimea cerului”, și spunem ce arată cuvintele colorate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm pronumele și adjectivul negativ.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim propozițiile afirmative și negative după forma predicatului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Observăm că negativele apar numai în propoziții negative și le aflăm funcția în enunțurile de la ex. 3. Cu ajutorul schemei fixăm Reperele: nimeni, nimic, niciunul, niciuna, acordul la singular cu nimeni și nimic, tabelul funcțiilor și adjectivele niciun, nicio, scrise într-un cuvânt.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii aleg varianta corectă în enunțurile de la ex. 1, „n-a/n-au găsit”, „nici unuia/niciunuia, nici altuia”, și analizează negativele din fragmentul lui Cezar Paul-Bădescu, după modele.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-17/schema.svg', titlu: 'Pronumele și adjectivul pronominal negativ' }, altele: [] },
    },
    {
      id: 'lectia-18',
      titlu: 'Adjectivul pronominal de întărire',
      obiective: [
        'Descoperă adjectivul pronominal de întărire, formele și cazurile lui.',
      ],
      sursaManual: 'Art 7, p. 157',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Adjectivul pronominal de întărire',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Descoperă adjectivul pronominal de întărire, formele și cazurile lui.',
        ],
        resurse: [
          'Manual Art 7, p. 157',
          'Schema „Adjectivul pronominal de întărire” (/materiale/clasa-7/unitatea-4/lectia-18/schema.svg)',
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
            activitate: 'Citim dialogul de la p. 157, „tu însuți ai făcut prăjitura?” și „Poți să încerci tu însăți rețeta, Gabi.”, și stabilim după ce cuvinte aflăm cine e Gabi și cine e Vali.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm adjectivul care întărește persoana despre care vorbim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim acordul atributului adjectival în gen, număr și caz.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Discutăm rolul acestor cuvinte în comunicare, versurile lui Anton Pann cu „însuși” și enunțurile „Directorul însuși”, „Profesorii înșiși”, „ea însăși”. Cu ajutorul schemei fixăm Reperele: pronumele de întărire a dispărut, se folosește doar adjectivul, tabelul formelor pe persoane, numere și genuri, înlocuirea cu semiadverbul chiar.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii completează enunțurile cu formele potrivite, corectează „Ei înseși au pictat”, „Faptele însăși”, replica din O noapte furtunoasă, și analizează adjectivele din fragmentul Ioanei Pârvulescu, după model.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-18/schema.svg', titlu: 'Adjectivul pronominal de întărire' }, altele: [] },
    },
    {
      id: 'lectia-19',
      titlu: 'Posibilități combinatorii ale pronumelui și ale adjectivului pronominal',
      obiective: [
        'Identifică funcțiile sintactice ale pronumelui, precizând dacă e centru sau adjunct.',
      ],
      sursaManual: 'Art 7, pp. 158-159',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Posibilități combinatorii ale pronumelui și ale adjectivului pronominal',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică funcțiile sintactice ale pronumelui, precizând dacă e centru sau adjunct.',
        ],
        resurse: [
          'Manual Art 7, pp. 158-159',
          'Schema „Posibilități combinatorii ale pronumelui” (/materiale/clasa-7/unitatea-4/lectia-19/schema.svg)',
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
            activitate: 'Citim dialogul despre trifoiul cu patru foi de la p. 158 și îi întreb pe elevi dacă ar păstra un astfel de talisman.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că vedem când pronumele are el însuși determinări și când depinde de alt cuvânt.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim posibilitățile combinatorii ale substantivului și ale adjectivului din Unitatea III.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Stabilim pentru pronumele din dialog dacă sunt centru de grup, adjuncți sau într-o relație ternară și le aflăm funcția, apoi găsim adjectivele pronominale. Cu ajutorul schemei parcurgem pronumele centru, cu atributele lui, „ceva frumos”, „niciunul din clasă”, pronumele adjunct în grupul nominal și în cel verbal, subiectul și numele predicativ.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii rezolvă aplicațiile 1-3 de la p. 159, analizează pronumele din povestea pisicii Tama, după model, și corectează acordul din „Oricare dintre obiectele acestea pot fi...”. Completează apoi autoevaluarea de la p. 159.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea de la p. 159. Minitestul lecției e în varianta digitală a manualului, cu baremul în Anexa 7.d a Ghidului profesorului.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-4/lectia-19/schema.svg', titlu: 'Posibilități combinatorii ale pronumelui' }, altele: [] },
    },
    {
      id: 'lectia-20',
      titlu: 'Structuri textuale: narativ, explicativ, descriptiv, dialogat (I)',
      obiective: [
        'Recunoaște secvențele narative, descriptive, dialogate și explicative dintr-un text, prin lectura ghidată a imaginii.',
      ],
      sursaManual: 'Art 7, pp. 160-161, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Structuri textuale: narativ, explicativ, descriptiv, dialogat (I)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Recunoaște secvențele narative, descriptive, dialogate și explicative dintr-un text, prin lectura ghidată a imaginii.',
        ],
        resurse: [
          'Manual Art 7, pp. 160-161',
          'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-20/fisa.pdf)',
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
            activitate: 'Elevii dau câte un exemplu din viața de zi cu zi când au povestit, au descris, au purtat un dialog sau au dat o explicație.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm să recunoaștem cele patru tipuri de secvențe dintr-un text.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim textul narativ, descrierea și dialogul din unitățile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'În grupe de câte patru, elevii răspund la întrebările despre imaginea de la p. 160: ce e în centru, cine sunt persoanele, unde se află, de ce stau copiii dincoace de bara de protecție. Își împart rolurile și alcătuiesc oral un dialog, o narațiune spusă părinților, o explicație a adultului și o descriere din jurnal. Grupa care termină prima prezintă. Fixăm Reperele despre cele patru secvențe și mărcile lor.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă fișa lecției, recunoscând secvențele dintr-un text dat.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-4/lectia-20/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-21',
      titlu: 'Structuri textuale: narativ, explicativ, descriptiv, dialogat (II)',
      obiective: [
        'Redactează o compunere narativă cu inserarea de secvențe descriptive, explicative și dialogate.',
      ],
      sursaManual: 'Art 7, pp. 160-161, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Structuri textuale: narativ, explicativ, descriptiv, dialogat (II)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o compunere narativă cu inserarea de secvențe descriptive, explicative și dialogate.',
        ],
        resurse: [
          'Manual Art 7, p. 161, grila de evaluare',
          'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-21/fisa.pdf)',
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
            activitate: 'Citim fragmentul de la p. 161 despre dinozaurii victime ale „unui ghinion colosal” și îi întreb pe elevi ce poveste ar putea porni de aici.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare grupă scrie o compunere narativă cu o secvență descriptivă, una dialogată și una explicativă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reluăm mărcile celor patru secvențe de ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Parcurgem pașii de la p. 161: subiectul, planul, locul secvențelor, împărțirea sarcinilor, iar grupele își notează planul pe fișa lecției.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '32 min',
            activitate: 'Fiecare elev redactează partea lui, grupa asamblează textul, îl citește, îl rescrie ca părțile să se lege, corectează greșelile și alege un titlu. Grupele se evaluează pe grila de la p. 161 și câteva își citesc compunerea.',
          },
        ],
        evaluare: 'Autoevaluare pe grila de la p. 161; aprecieri pe compunerile grupelor.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-4/lectia-21/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-22',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea IV: naratorul și personajele, textul multimodal, structura textului narativ oral.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 162-163, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea IV: naratorul și personajele, textul multimodal, structura textului narativ oral.',
        ],
        resurse: [
          'Manual Art 7, pp. 162-163',
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
            activitate: 'Anunț că recapitulăm pe fragmentul din Roata norocului, volumul al treilea din Cireșarii de Constantin Chiriță.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm spațiul, timpul și momentele subiectului, naratorul, personajele și mijloacele de caracterizare, textul enciclopedic, structura narațiunii orale, repetarea, reformularea și conectorii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Citim fragmentul și rezolvăm ghidat cerințele 1-10: rezumatul oral, locul, trăsăturile tiparului narativ, asocierea personajelor cu acțiunile, atitudinea lui Tic și a lui Dan, premiile, dovezile că jocul e aranjat, comparația cu Două loturi. Elevii reformulează replica atletului, cerința 11.',
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
          tip: 'quiz', titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce arată semnificația simbolică a unui toponim, într-un text narativ?',
              variante: [
                { text: 'Numele locului poate sugera un sens mai adânc decât simpla localizare geografică', corect: true, explicatie: 'Un toponim ales cu grijă de autor poate purta o semnificație simbolică, dincolo de rolul geografic.' },
                { text: 'Numele locului nu are niciodată vreo semnificație', corect: false, explicatie: 'Textul chiar cere descoperirea semnificațiilor simbolice ale unor toponime.' },
                { text: 'Toponimele apar doar în texte nonliterare', corect: false, explicatie: 'Toponimele apar și în textele narative literare, cu rol simbolic posibil.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 130-131',
            },
            {
              intrebare: 'Ce trăsătură are, în special, un text enciclopedic?',
              variante: [
                { text: 'E obiectiv, organizat pe subteme, cu informații verificabile', corect: true, explicatie: 'Textul enciclopedic urmărește să informeze corect și organizat, nu să exprime opinii personale.' },
                { text: 'E scris exclusiv la persoana I, subiectiv', corect: false, explicatie: 'Subiectivitatea nu e o trăsătură a textului enciclopedic.' },
                { text: 'Nu conține niciodată imagini', corect: false, explicatie: 'Un text enciclopedic e adesea multimodal, cu imagini și grafice.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 136-139',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-23',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea IV: tipurile de pronume și de adjectiv pronominal.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 162-163, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea IV: tipurile de pronume și de adjectiv pronominal.',
        ],
        resurse: [
          'Manual Art 7, p. 163',
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
            activitate: 'Scriu pe tablă „Încercați-vă norocul! Fiecare număr câștigător! Nimeni nu pierde! Toată lumea câștigă!” și cer pronumele și adjectivele pronominale din strigătul omului cu pălărie de paie.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm toate felurile de pronume și de adjective pronominale și secvențele textuale.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm pronumele personal, de politețe, reflexiv, posesiv, demonstrativ, nehotărât, interogativ, relativ, negativ, adjectivul de întărire, apoi pronumele centru și adjunct.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat cerințele 12-15 de la p. 163: părțile de vorbire din strigătul omului cu pălărie de paie, continuarea replicii „Dar dumneavoastră...” cu analiza pronumelui, felul, cazul și funcția pronumelor colorate, analiza adjectivelor pronominale din „Niciun număr nu pierdea” și „aceleași obiecte”.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi discutăm greșelile. Ca temă, scriu textul narativ despre o vizită la bâlci, cu cele trei secvențe, cerința 16.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Ce categorie de pronume folosești când te adresezi respectuos unui adult necunoscut?',
              variante: [
                { text: 'pronumele personal de politețe', corect: true, explicatie: 'Dumneavoastră, dumnealui etc. arată respect față de interlocutor.' },
                { text: 'pronumele reflexiv', corect: false, explicatie: 'Reflexivul arată că acțiunea se răsfrânge asupra subiectului, nu are legătură cu politețea.' },
                { text: 'pronumele negativ', corect: false, explicatie: 'Pronumele negativ (nimeni, nimic) neagă existența cuiva sau a ceva.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 146-147',
            },
            {
              intrebare: 'Ce pronume înlocuiește un substantiv fără să precizeze cine sau ce anume e vorba?',
              variante: [
                { text: 'pronumele nehotărât', corect: true, explicatie: 'Cineva, ceva, oricine sunt pronume nehotărâte — nu precizează identitatea exactă.' },
                { text: 'pronumele demonstrativ', corect: false, explicatie: 'Pronumele demonstrativ arată exact, prin apropiere sau depărtare (acesta, acela).' },
                { text: 'pronumele relativ', corect: false, explicatie: 'Pronumele relativ leagă o propoziție subordonată de restul frazei (care, ce, cine).' },
              ],
              indiciu: null, sursa: 'Art 7, p. 152',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-24',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea IV.',
      ],
      sursaManual: 'Art 7, Evaluare, p. 164',
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
          'Testul, Manual Art 7, p. 164',
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
            activitate: 'Le spun elevilor că proba păstrează structura celor de până acum și îi liniștesc în privința timpului de lucru.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se dă proba scrisă a Unității IV, pe fragmentul Hamurabi de Mircea Sântimbreanu, cu o parte de limbă și lectură și caracterizarea Eugeniței.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc structura probei, 60 de puncte la partea A, 30 la compunere, 10 din oficiu, și cum își împart timpul.',
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
