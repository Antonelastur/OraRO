// Unitatea I: Unde găsim frumusețea? — clasa a VIII-a
// Sursă: manual Art Klett 2025 (Sâmihăian, Dobra, Halaszi, Davidoiu-Roman,
// Corcheș), 8. Ghid.pdf — Planificare calendaristică orientativă 2025-2026 și
// Proiectarea unităților de învățare, Unitatea I (pp. 38-51 din ghid).
//
// Discrepanță de ediție rezolvată explicit cu Antoanela: 8_proiectare pe
// unitati.doc și 8_planificare calendaristica.doc (2022-2023) au o structură
// de unități complet diferită de manualul din folder (ediție 2025, „Unde
// găsim frumusețea?” e Unitatea I aici, nu Unitatea III ca în documentele
// vechi, iar „Ce înseamnă prietenia?”, cu Platanos de Doina Ruști, nu există
// deloc în ediția nouă). S-a ales manualul nou + ghidul ca autoritate — ghidul
// conține propria planificare și proiectare actualizate, folosite aici, nu
// documentele vechi.
//
// Convenție de numerotare: ore de curs din proiectarea ghidului, ca la
// clasele a VI-a și a VII-a, nu numerotarea proprie a manualului (ca la
// clasa a V-a) — vezi nota din CLAUDE.md. Manualul acestei ediții e deja
// aproape la fel de granular (fiecare L-număr propriu ≈ o oră), așa că cele
// două convenții produc aproape aceeași împărțire aici. Rândurile de 2 ore
// din proiectare („Etapele scrierii”, „Recapitulare”) sunt despărțite în câte
// 2 lecții de site, cu titlu „partea 1/2” / „partea 2/2”.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx.

export const unitatea1 = {
  id: 'unitatea-1',
  titlu: 'Unitatea I: Unde găsim frumusețea?',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul liric. O, rămâi... de Mihai Eminescu',
      obiective: [
        'Citește și înțelege textul liric O, rămâi... de Mihai Eminescu, identificând tema frumuseții naturii.',
      ],
      sursaManual: 'Art 8, p. 10',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul liric. O, rămâi... de Mihai Eminescu',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește și înțelege textul liric O, rămâi... de Mihai Eminescu, identificând tema frumuseții naturii.',
        ],
        resurse: [
          'Manual Art 8, p. 10',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-1/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-2',
            timp: '5 min',
            activitate: '– Ce loc din natură le amintește elevilor de copilărie și ce îi dădea frumusețe.\n– Ce stări le produce tabloul „În pădure” de Nicolae Grigorescu.',
          },
          {
            etapa: 'Autorul și poezia',
            timp: '3 min',
            activitate: '– Caseta despre Mihai Eminescu (p. 10); poezia a apărut în „Convorbiri literare”, în 1879.',
          },
          {
            etapa: 'Lectura model, ex. 3',
            timp: '10 min',
            activitate: '– Citesc poezia de două ori; a doua oară, elevii marchează în manual unde se schimbă vocea care vorbește.',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1-4',
            timp: '7 min',
            activitate: '– Starea produsă de lectură; imaginea preferată; alte poezii eminesciene; asemănarea cu tabloul.',
          },
          {
            etapa: 'Lectura pe voci',
            timp: '6 min',
            activitate: '– Un elev citește monologul pădurii, altul ultimele două strofe; clasa spune ce ton se potrivește fiecărei voci.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '12 min',
            activitate: '– Pagina 1: ex. 1 (cine vorbește și ce spune) și ex. 2 (adevărat sau fals), individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Eminescu și pădurea',
            timp: '4 min',
            activitate: '– Elevii amintesc alte poezii eminesciene cu codrul; notăm titlurile pe tablă, pentru ora viitoare.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Impresii după prima lectură, ex. 3, în scris; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-1/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'O, rămâi... de Mihai Eminescu',
          pasi: [
            {
              intrebare: 'Cine îl cheamă pe copil să rămână, în poezie?',
              variante: [
                {
                  text: 'Codrul, pădurea, care i se adresează direct',
                  corect: true,
                  explicatie: 'Chemarea vine dinspre natură, personificată, spre copilul care se pregătește să plece.',
                },
                {
                  text: 'Mama copilului',
                  corect: false,
                  explicatie: 'În text nu apare nicio figură maternă; vocea care cheamă e a naturii.',
                },
                {
                  text: 'Un prieten din sat',
                  corect: false,
                  explicatie: 'Poezia nu are alt personaj uman în afară de cel care pleacă.',
                },
              ],
              indiciu: 'Cine spune „o, rămâi” și de ce ar avea codrul motive să o spună?',
              sursa: 'Manual Art 8, p. 10',
            },
            {
              intrebare: 'Care este tema poeziei?',
              variante: [
                {
                  text: 'Despărțirea de copilărie și de lumea naturii',
                  corect: true,
                  explicatie: 'Copilul care pleacă lasă în urmă o lume la care nu se mai poate întoarce la fel.',
                },
                {
                  text: 'Lupta dintre bine și rău',
                  corect: false,
                  explicatie: 'Poezia nu construiește nicio opoziție morală de acest fel.',
                },
                {
                  text: 'Istoria unui sat românesc',
                  corect: false,
                  explicatie: 'Nu e o poezie istorică; satul nu apare ca subiect.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 10',
            },
            {
              intrebare: 'Ce sugerează faptul că, la final, copilul nu mai poate auzi glasul codrului?',
              variante: [
                {
                  text: 'Că a crescut și a pierdut legătura firească cu natura',
                  corect: true,
                  explicatie: 'Pierderea auzului fermecat e imaginea maturizării, a ieșirii din copilărie.',
                },
                {
                  text: 'Că s-a mutat prea departe ca să audă sunetele',
                  corect: false,
                  explicatie: 'Distanța fizică nu explică schimbarea; e vorba de o schimbare interioară.',
                },
                {
                  text: 'Că pădurea a fost tăiată',
                  corect: false,
                  explicatie: 'Nimic din text nu susține dispariția pădurii.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 10',
            },
            {
              intrebare: 'Ce arată prezența eului liric într-un text?',
              variante: [
                {
                  text: 'Vocea care exprimă gânduri și sentimente în poezie, fără să fie identică cu autorul',
                  corect: true,
                  explicatie: 'Eul liric e o instanță a textului, nu persoana reală care a scris.',
                },
                {
                  text: 'Că autorul povestește exact ce a trăit el',
                  corect: false,
                  explicatie: 'Confundarea eului liric cu autorul e greșeala cea mai des sancționată la examen.',
                },
                {
                  text: 'Că poezia are cel puțin două personaje',
                  corect: false,
                  explicatie: 'Poezia lirică nu are personaje în sensul textului epic.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, p. 10',
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
      titlu: 'Structura poeziei și caracteristicile textului liric. Versificația',
      obiective: [
        'Identifică structura compozițională, vocile ficționale și elementele de versificație ale textului liric.',
      ],
      sursaManual: 'Art 8, p. 11',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Structura poeziei și caracteristicile textului liric. Versificația',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică structura compozițională, vocile ficționale și elementele de versificație ale textului liric.',
        ],
        resurse: [
          'Manual Art 8, p. 11',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-2/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-2/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Vocile, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Vocile ficționale și fragmentele poeziei; cuvintele-cheie; cui îi e adresat monologul pădurii, rolul interjecției și al imperativului.',
          },
          {
            etapa: 'Momentul rememorat, ex. 4-6',
            timp: '6 min',
            activitate: '– Ce moment din copilărie rememorează adultul; cuvintele care arată că reflecțiile vin mai târziu; schimbarea spațiului în final.',
          },
          {
            etapa: 'Textul liric, ex. 7',
            timp: '4 min',
            activitate: '– Sentimentele din fiecare parte și mărcile subiectivității.',
          },
          {
            etapa: 'Versificația, ex. 8-9',
            timp: '4 min',
            activitate: '– Tipul de strofă, măsura ultimelor patru versuri, rima.',
          },
          {
            etapa: 'Notițe: textul liric și versificația',
            timp: '7 min',
            activitate: '– În caiete, după Repere (p. 11): textul liric, vocea ficțională, mărcile subiectivității, versul, strofa, măsura, tipurile de rimă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (patru strofe, versificația), individual, 7 minute.\n– Verificare, 4 minute; numărăm silabele împreună la tablă.',
          },
          {
            etapa: 'Pădurea și apa, Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Însușirea comună a pădurii și formele apei în strofele din „Din străinătate” și „Floare albastră”.',
          },
          {
            etapa: 'Rima și măsura, ex. 3-4',
            timp: '3 min',
            activitate: '– Tipul de rimă din cele trei strofe; măsura, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-2/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-2/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-2/schema.svg',
          titlu: 'Versificația, ce măsurăm într-o poezie',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Limbajul figurat. Aliterația',
      obiective: [
        'Recunoaște figurile de stil din poezie și analizează rolul aliterației.',
      ],
      sursaManual: 'Art 8, p. 12',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Limbajul figurat. Aliterația',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște figurile de stil din poezie și analizează rolul aliterației.',
        ],
        resurse: [
          'Manual Art 8, p. 12',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-3/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-3/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ghilimelele, Explorare, ex. 1',
            timp: '3 min',
            activitate: '– Rolul ghilimelelor și stările din chemarea pădurii personificate.',
          },
          {
            etapa: 'Epitetele, ex. 2',
            timp: '5 min',
            activitate: '– Epitetele despre copil și pădure, tipul lor și ce sugerează.',
          },
          {
            etapa: 'Timpul în comparații, ex. 3',
            timp: '4 min',
            activitate: '– Cele trei cuvinte din câmpul lexical al timpului și semnificația comparațiilor.',
          },
          {
            etapa: 'Metafora, ex. 4',
            timp: '3 min',
            activitate: '– Metafora din versurile despre luna plină și ce sugerează.',
          },
          {
            etapa: 'Repetiția și aliterația, ex. 5-9',
            timp: '8 min',
            activitate: '– Repetițiile din text; consoana repetată în versul despre valuri și poziția ei; exemplele de la ex. 8; consoanele din rimă.',
          },
          {
            etapa: 'Notițe: figurile de stil',
            timp: '7 min',
            activitate: '– În caiete, după Repere (p. 12): personificarea, epitetul, comparația, metafora (explicită și implicită), repetiția, aliterația.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (figura de stil) și ex. 2 (aliterația), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aliterațiile, Aplicații',
            timp: '6 min',
            activitate: '– Versurile a-c (Alecsandri, Eminescu, Nichita Stănescu): consoanele repetate și ce sugerează.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (repetiția într-o poezie eminesciană).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-3/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-3/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-3/schema.svg',
          titlu: 'Figurile de stil din unitate',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează opinii personale despre semnificațiile poeziei O, rămâi....',
      ],
      sursaManual: 'Art 8, p. 13',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează opinii personale despre semnificațiile poeziei O, rămâi....',
        ],
        resurse: [
          'Manual Art 8, p. 13',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Pădurea copilăriei, Interpretare, ex. 1-3',
            timp: '6 min',
            activitate: '– Ce reprezintă pădurea pentru copil; elementele vegetale și animale; planul terestru și cel astral.',
          },
          {
            etapa: 'Creșterea, ex. 4',
            timp: '3 min',
            activitate: '– Cum diferă creșterea pădurii de creșterea copilului.',
          },
          {
            etapa: 'Darurile pădurii, ex. 5, în perechi',
            timp: '5 min',
            activitate: '– Ce crede pădurea că numai ea îi poate dărui copilului și ce semnifică.',
          },
          {
            etapa: 'Portretul copilului, ex. 6-7',
            timp: '4 min',
            activitate: '– Asemănarea cu un prinț; taina dezvăluită în strofa a treia.',
          },
          {
            etapa: 'Ghid de învățare, ex. 8',
            timp: '9 min',
            activitate: '– Grupe de 4-5 urmăresc animația din varianta digitală și răspund la cele trei cerințe; raportorii prezintă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (darurile pădurii) și ex. 2 (copilul și adultul), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Chemarea, Narcis, văpaia, ex. 9-11',
            timp: '5 min',
            activitate: '– Cum e chemarea pădurii; copilul ca Narcis; ce se întâmplă cu timpul când luna se oglindește în apă.',
          },
          {
            etapa: 'Despărțirea, ex. 12-15',
            timp: '4 min',
            activitate: '– De ce pleacă adolescentul; sensul verbului „a șuiera”; câmpul; de ce adultul nu mai poate înțelege pădurea.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției; Portofoliu (dialogul peste ani, minimum 100 de cuvinte); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Aprecieri pe raportările grupelor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-4/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Textul liric. Izvorul nopții de Lucian Blaga. Structura textului poetic',
      obiective: [
        'Citește textul Izvorul nopții de Lucian Blaga și identifică vocea ficțională, structura și cuvintele-cheie ale poeziei.',
      ],
      sursaManual: 'Art 8, pp. 14-15',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul liric. Izvorul nopții de Lucian Blaga. Structura textului poetic',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește textul Izvorul nopții de Lucian Blaga și identifică vocea ficțională, structura și cuvintele-cheie ale poeziei.',
        ],
        resurse: [
          'Manual Art 8, pp. 14-15',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-5/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-2',
            timp: '4 min',
            activitate: '– Ține frumusețea umană doar de aspectul fizic? Ce atrage în portretul lui Nicolae Tonitza.',
          },
          {
            etapa: 'Autorul și lectura, ex. 3',
            timp: '5 min',
            activitate: '– Caseta despre Lucian Blaga (p. 14); citesc poezia de două ori.',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1-3',
            timp: '4 min',
            activitate: '– Ce le-a plăcut, la ce s-au gândit, ce i-a surprins.',
          },
          {
            etapa: 'Muzică, dans, pictură, ex. 4-7',
            timp: '5 min',
            activitate: '– Piesa lui Florin Bogardo (varianta digitală) și schimbările din text; dansul potrivit; legătura cu tabloul; citatele lui Paul Valéry și Alexandru Macedonski.',
          },
          {
            etapa: 'Structura, Explorare, ex. 1-6',
            timp: '8 min',
            activitate: '– Substantivele de adresare și locul lor; adjectivele care însoțesc cuvântul „ochi”; sensul adresării finale; frumusețe fizică sau mister; de ce un substantiv în primul vers.',
          },
          {
            etapa: 'Investigația, ex. 7',
            timp: '8 min',
            activitate: '– Trei grupe (artiștii, gânditorii, detectivii) răspund pe poster la întrebările lor; un reprezentant prezintă; sintetizez.',
          },
          {
            etapa: 'Notițe: structura poeziei moderne',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 15): cuvintele-cheie, vocea ficțională și contextul, versurile albe și libere.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '9 min',
            activitate: '– Pagina 1: ex. 1 (ce fel de vers?) și ex. 2 (câmpul lexical al întunericului), individual, 6 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1-4; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Aprecieri pe posterele grupelor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-5/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Izvorul nopții de Lucian Blaga',
          pasi: [
            {
              intrebare: 'Cu ce compară eul liric ochii iubitei, în poezie?',
              variante: [
                {
                  text: 'Cu izvorul din care se revarsă noaptea peste lume',
                  corect: true,
                  explicatie: 'Metafora centrală face din ochi sursa întunericului, nu doar un obiect frumos.',
                },
                {
                  text: 'Cu două stele care luminează drumul',
                  corect: false,
                  explicatie: 'Imaginea e opusă: ochii aduc întunericul, nu lumina.',
                },
                {
                  text: 'Cu apa liniștită a unui lac',
                  corect: false,
                  explicatie: 'Lacul ar sugera calm, nu revărsarea nopții.',
                },
              ],
              indiciu: 'Citește titlul încă o dată. Ce anume izvorăște?',
              sursa: 'Manual Art 8, pp. 14-15',
            },
            {
              intrebare: 'Ce fel de vers folosește Blaga în această poezie?',
              variante: [
                {
                  text: 'Vers liber, fără rimă și cu măsură variabilă',
                  corect: true,
                  explicatie: 'Poezia modernă se eliberează de constrângerile prozodiei clasice.',
                },
                {
                  text: 'Vers cu rimă împerecheată și măsură fixă',
                  corect: false,
                  explicatie: 'Acela e tiparul clasic, folosit de Eminescu, nu de Blaga aici.',
                },
                {
                  text: 'Vers alb, cu ritm și măsură păstrate',
                  corect: false,
                  explicatie: 'Versul alb păstrează ritmul și măsura, doar rima lipsește; aici variază și măsura.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 14-15',
            },
            {
              intrebare: 'De ce spunem că această poezie construiește un mister, nu îl explică?',
              variante: [
                {
                  text: 'Pentru că imaginea rămâne deschisă mai multor interpretări, fără o explicație finală',
                  corect: true,
                  explicatie: 'Blaga însuși vorbea despre poezie ca sporire a misterului lumii, nu ca lămurire a lui.',
                },
                {
                  text: 'Pentru că poezia are cuvinte greu de înțeles',
                  corect: false,
                  explicatie: 'Cuvintele sunt simple; misterul vine din imagine, nu din vocabular.',
                },
                {
                  text: 'Pentru că nu are titlu explicit',
                  corect: false,
                  explicatie: 'Poezia are titlu, iar el chiar orientează lectura.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 14-15',
            },
            {
              intrebare: 'Ce înseamnă cuvânt-cheie într-un text liric?',
              variante: [
                {
                  text: 'Un cuvânt care se repetă sau care poartă sensul central, orientând interpretarea',
                  corect: true,
                  explicatie: 'Cuvintele-cheie sunt punctele de sprijin ale interpretării.',
                },
                {
                  text: 'Primul cuvânt din fiecare strofă',
                  corect: false,
                  explicatie: 'Poziția în strofă nu decide importanța unui cuvânt.',
                },
                {
                  text: 'Cel mai lung cuvânt din poezie',
                  corect: false,
                  explicatie: 'Lungimea nu are legătură cu greutatea de sens.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 14-15',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Figurile de stil. Hiperbola',
      obiective: [
        'Analizează figurile de stil din poezie, cu accent pe hiperbolă.',
      ],
      sursaManual: 'Art 8, p. 16',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Figurile de stil. Hiperbola',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Analizează figurile de stil din poezie, cu accent pe hiperbolă.',
        ],
        resurse: [
          'Manual Art 8, p. 16',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-6/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-6/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ochii iubitei, Explorare, ex. 1-3',
            timp: '6 min',
            activitate: '– Elementul evidențiat în portret; asocierea figurilor de stil; ce trăsătură a iubitei pune în valoare fiecare.',
          },
          {
            etapa: 'Enumerația, ex. 4',
            timp: '3 min',
            activitate: '– Ce sugerează formele de relief înșirate.',
          },
          {
            etapa: 'Exagerarea, ex. 5-7',
            timp: '6 min',
            activitate: '– Cum li se pare imaginea mării de întuneric; scopul exagerării și figura combinată; exagerări din vorbirea de zi cu zi.',
          },
          {
            etapa: 'Notițe: enumerația și hiperbola',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 16): enumerația, hiperbola (mărire, micșorare, combinarea cu alte figuri), exemple din vorbirea curentă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (hiperbolă sau nu?) și ex. 2 (enumerația), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Superlativul și hiperbola, Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Tipul de superlativ din descrierea ochilor și ce sugerează; semnificația hiperbolei din poezie.',
          },
          {
            etapa: 'Coșbuc și Arghezi, ex. 3',
            timp: '6 min',
            activitate: '– În perechi, hiperbolele și enumerațiile din versurile a-b și figurile care le realizează.',
          },
          {
            etapa: 'Enunțuri cu hiperbolă, ex. 4',
            timp: '4 min',
            activitate: '– Fiecare scrie cele două enunțuri; câțiva citesc.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (cele două picturi).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-6/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-6/schema.svg',
          titlu: 'Hiperbola, exagerarea care spune adevărul',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Discută semnificațiile poeziei Izvorul nopții și realizează o interpretare creativă.',
      ],
      sursaManual: 'Art 8, p. 17',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Discută semnificațiile poeziei Izvorul nopții și realizează o interpretare creativă.',
        ],
        resurse: [
          'Manual Art 8, p. 17',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-7/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-7/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Concizie și profunzime, Interpretare, ex. 1',
            timp: '4 min',
            activitate: '– Se opune simplitatea formei ideilor profunde?',
          },
          {
            etapa: 'Ochiul, ex. 2',
            timp: '4 min',
            activitate: '– Ochiul ca lumină spirituală; revenim la răspunsurile de la p. 16.',
          },
          {
            etapa: 'Metafora „adâncii”, ex. 3',
            timp: '4 min',
            activitate: '– Partea de vorbire a cuvântului și elementul natural din comparația subînțeleasă.',
          },
          {
            etapa: 'Ochii-izvor și noaptea tainică, ex. 4-5',
            timp: '6 min',
            activitate: '– Discutăm variantele a-d de la fiecare exercițiu sau formulăm altele.',
          },
          {
            etapa: 'Iubirea, mister? ex. 6',
            timp: '4 min',
            activitate: '– Argumente cu exemple din poezie.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (de acord sau nu?) și ex. 2 (simboluri), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Semnificația de ansamblu, ex. 7-8',
            timp: '5 min',
            activitate: '– Varianta cea mai potrivită sau o interpretare proprie; alte texte cu care se leagă poezia.',
          },
          {
            etapa: 'Picturile, ex. 9',
            timp: '3 min',
            activitate: '– Care portret e mai aproape de imaginea iubitei și de ce.',
          },
          {
            etapa: 'Interpretarea creativă, Provocări',
            timp: '6 min',
            activitate: '– Elevii se grupează după limbajul artistic ales și își fac planul (fișa de exerciții, ex. 3).',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției; interpretarea creativă, pe grupe; fișa de exerciții, ex. 4.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; planurile grupelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-7/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Textul liric. Lecția de citire de Nichita Stănescu. Limbajul poetic și versificația',
      obiective: [
        'Citește textul Lecția de citire de Nichita Stănescu și identifică trăsăturile textului liric din secolul al XX-lea.',
      ],
      sursaManual: 'Art 8, pp. 18-19',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul liric. Lecția de citire de Nichita Stănescu. Limbajul poetic și versificația',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește textul Lecția de citire de Nichita Stănescu și identifică trăsăturile textului liric din secolul al XX-lea.',
        ],
        resurse: [
          'Manual Art 8, pp. 18-19',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-8/fisa-exercitii.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-3',
            timp: '5 min',
            activitate: '– Artele din imagini și cea preferată; a șaptea artă; se poate învăța arta cuvântului?',
          },
          {
            etapa: 'Autorul și lectura, ex. 4',
            timp: '6 min',
            activitate: '– Caseta despre Nichita Stănescu (p. 18); citesc poezia de două ori.',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1-3',
            timp: '4 min',
            activitate: '– Ce le-a amintit poezia; enunțurile greu de înțeles; o întrebare pentru mine.',
          },
          {
            etapa: 'Vocea și adresarea, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– A cui poate fi vocea ficțională; cui se adresează și de ce se teme.',
          },
          {
            etapa: 'Lumea poeziei, ex. 3-4',
            timp: '4 min',
            activitate: '– Elementele lumii imaginate; cuvintele care apar de trei ori și legătura dintre ele.',
          },
          {
            etapa: 'Versificația, ex. 5-7',
            timp: '6 min',
            activitate: '– Strofele și numele lor; măsura și rima din strofa a doua; versuri albe sau libere; în perechi, mărcile subiectivității.',
          },
          {
            etapa: 'Notițe: poezia modernă',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 19): înnoirile poeziei din secolul al XX-lea, caligrama.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (lumea ca scriere) și ex. 2 (adevărat sau fals), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '2 min',
            activitate: '– Câmpul lexical al literaturii; sensul din text al alfabetului, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 3-6; fișa de exerciții, pagina 2; opțional, Provocări (caligrama).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-8/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Lecția de citire de Nichita Stănescu',
          pasi: [
            {
              intrebare: 'Prin ce se deosebește cel mai clar poezia lui Nichita Stănescu de cea a lui Eminescu?',
              variante: [
                {
                  text: 'Renunță la rimă și la măsura fixă și folosește un limbaj neobișnuit, care rupe așteptările',
                  corect: true,
                  explicatie: 'Lirica secolului al XX-lea își construiește propriile reguli, în loc să le urmeze pe cele clasice.',
                },
                {
                  text: 'Vorbește despre natură, în timp ce Eminescu vorbea despre oraș',
                  corect: false,
                  explicatie: 'Deosebirea nu e tematică, ci de limbaj și de formă.',
                },
                {
                  text: 'Este mai lungă',
                  corect: false,
                  explicatie: 'Lungimea nu deosebește poezia modernă de cea clasică.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 18-19',
            },
            {
              intrebare: 'Ce face poezia modernă cu limbajul obișnuit?',
              variante: [
                {
                  text: 'Îl forțează, îl combină neașteptat, ca să dea cuvintelor sensuri noi',
                  corect: true,
                  explicatie: 'Efectul poetic vine tocmai din abaterea de la felul curent de a vorbi.',
                },
                {
                  text: 'Îl păstrează exact ca în vorbirea de zi cu zi',
                  corect: false,
                  explicatie: 'Dacă ar face doar asta, textul nu s-ar deosebi de o conversație.',
                },
                {
                  text: 'Îl înlocuiește cu termeni științifici',
                  corect: false,
                  explicatie: 'Nu e vorba de terminologie, ci de o folosire neobișnuită a cuvintelor comune.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 18-19',
            },
            {
              intrebare: 'Ce este versul alb?',
              variante: [
                {
                  text: 'Versul care păstrează ritmul și măsura, dar nu are rimă',
                  corect: true,
                  explicatie: 'Versul liber merge mai departe: renunță și la ritm, și la măsură fixă.',
                },
                {
                  text: 'Versul scris fără nicio literă mare',
                  corect: false,
                  explicatie: 'Scrierea cu majusculă sau nu ține de convenția grafică, nu de tipul versului.',
                },
                {
                  text: 'Versul care apare doar în poezia populară',
                  corect: false,
                  explicatie: 'Versul alb e specific poeziei culte moderne.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 18-19',
            },
            {
              intrebare: 'De ce e util să compari trei poezii din epoci diferite, ca în această unitate?',
              variante: [
                {
                  text: 'Ca să vezi cum se schimbă limbajul poetic în timp, păstrând totuși aceeași temă',
                  corect: true,
                  explicatie: 'Comparația arată că frumusețea rămâne temă, dar mijloacele de a o spune se schimbă.',
                },
                {
                  text: 'Ca să decizi care poet a scris mai bine',
                  corect: false,
                  explicatie: 'Comparația literară nu are ca scop ierarhizarea autorilor.',
                },
                {
                  text: 'Ca să numeri câte figuri de stil folosește fiecare',
                  corect: false,
                  explicatie: 'Numărarea nu spune nimic despre sensul textelor.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 18-21',
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
      titlu: 'Semnificațiile textului',
      obiective: [
        'Compară textul cu o operă de artă plastică și cu poezia O, rămâi..., formulând opinii despre semnificațiile lui.',
      ],
      sursaManual: 'Art 8, p. 20',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Compară textul cu o operă de artă plastică și cu poezia O, rămâi..., formulând opinii despre semnificațiile lui.',
        ],
        resurse: [
          'Manual Art 8, p. 20',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-9/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-9/fisa.pdf)',
          'Reproducerea operei de artă din manual',
        ],
        desfasurare: [
          {
            etapa: 'Cele trei imagini, Interpretare, ex. 1',
            timp: '4 min',
            activitate: '– Elemente din poezie în imaginile din realitatea de azi.',
          },
          {
            etapa: 'Metaforele, ex. 2-3',
            timp: '6 min',
            activitate: '– Metaforele peștelui și ale păsărilor; sensul pietrei care poate fi citită.',
          },
          {
            etapa: 'Norii și epitetele, ex. 4-5',
            timp: '5 min',
            activitate: '– Figura de stil a norilor și ce simbolizează; epitetele din strofa a treia.',
          },
          {
            etapa: 'Literatura și viața, ex. 6',
            timp: '4 min',
            activitate: '– Discutăm variantele a-d.',
          },
          {
            etapa: 'Actul creației, ex. 7-9',
            timp: '6 min',
            activitate: '– Repetiția și derivatele din penultima strofă; tabloul lui Magritte; punctul de fugă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (simboluri) și ex. 2 (poezia modernă), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Totul e scriere, ex. 10-11',
            timp: '4 min',
            activitate: '– Copie a realului sau recompunere? Sensul invocării divinității.',
          },
          {
            etapa: 'Interjecția și condiționalul, ex. 12-13',
            timp: '4 min',
            activitate: '– Interjecția comună cu „O, rămâi...”; ce exprimă verbele din ultima strofă.',
          },
          {
            etapa: 'Titlul, ex. 14',
            timp: '3 min',
            activitate: '– Explicăm titlul, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-9/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-9/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Compararea textelor sub aspectul conținutului și al structurii',
      obiective: [
        'Compară cele trei poezii studiate din punctul de vedere al temei, versificației și figurilor de stil.',
      ],
      sursaManual: 'Art 8, p. 21',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Compararea textelor sub aspectul conținutului și al structurii',
        data: null,
        tipOra: 'Recapitulare, lectură',
        durata: 50,
        obiective: [
          'Compară cele trei poezii studiate din punctul de vedere al temei, versificației și figurilor de stil.',
        ],
        resurse: [
          'Manual Art 8, p. 21',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-10/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-10/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Criteriile, Explorare, ex. 1',
            timp: '4 min',
            activitate: '– Ce aspecte putem compara la două sau mai multe texte; le notez pe tablă.',
          },
          {
            etapa: 'Investigația, ex. 2',
            timp: '14 min',
            activitate: '– Trei grupe de 4-5, cu sarcinile din grafic (temă și voce, versificație și punere în pagină, figuri și imagini); lucrează pe poster, după modelul de la p. 21, 10 minute.\n– Verific pe parcurs că fiecare observație e confirmată de cele trei texte.',
          },
          {
            etapa: 'Prezentarea, ex. 3',
            timp: '6 min',
            activitate: '– Câte un elev sau o pereche din fiecare grupă prezintă concluziile.',
          },
          {
            etapa: 'Notițe: compararea textelor',
            timp: '4 min',
            activitate: '– În caiete, după Repere (p. 21): criteriile, aspectele de conținut și de formă, prezentarea în paralel.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (trei poezii, față în față) și ex. 2 (conținut sau formă?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Diagrama Venn, Aplicații',
            timp: '5 min',
            activitate: '– Grupele încep diagrama cu trei cercuri; o termină acasă.',
          },
          {
            etapa: 'Autoevaluare L1-L9',
            timp: '3 min',
            activitate: '– Cele trei enunțuri de la p. 21, în caiete.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: diagrama Venn și justificarea temei frumuseții; fișa lecției; fișa de exerciții, pagina 2; opțional, Portofoliu.',
          },
        ],
        evaluare: 'Aprecieri pe posterele grupelor; fișa de exerciții, ex. 1-2; autoevaluarea L1-L9.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-10/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-10/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-10/schema.svg',
          titlu: 'Trei poezii, un secol de schimbare',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Text auxiliar. O pasăre înaltă de Dan Coman',
      obiective: [
        'Citește textul auxiliar O pasăre înaltă de Dan Coman și identifică frumusețea din viața cotidiană.',
      ],
      sursaManual: 'Art 8, pp. 22-23',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. O pasăre înaltă de Dan Coman',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Citește textul auxiliar O pasăre înaltă de Dan Coman și identifică frumusețea din viața cotidiană.',
        ],
        resurse: [
          'Manual Art 8, pp. 22-23',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-11/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-11/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Introducerea de la p. 22',
            timp: '3 min',
            activitate: '– Frumusețea poate fi găsită și în viața de zi cu zi; cine este Dan Coman.',
          },
          {
            etapa: 'Lectura',
            timp: '4 min',
            activitate: '– Citesc poezia; elevii caută cele două planuri ale existenței în care e descoperită frumusețea.',
          },
          {
            etapa: 'Eseul de cinci minute, ex. 1',
            timp: '7 min',
            activitate: '– Fiecare scrie 5 minute despre ce l-a impresionat; doi-trei citesc.',
          },
          {
            etapa: 'Vocea și frumusețea, ex. 2-4',
            timp: '6 min',
            activitate: '– Pe cine reprezintă vocea; ce e frumusețea pentru bărbat și cui i se opune; locuțiunile care împart poezia.',
          },
          {
            etapa: 'Nivelul sintactic, ex. 5-7',
            timp: '7 min',
            activitate: '– Grupe de 4-5: predicatele din prima parte, subiectul din ultimul enunț, lipsa predicatelor din a doua parte; tipul de vers și lipsa majusculelor.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cele două planuri) și ex. 2 (adevărat sau fals), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Fotografia și musculița, ex. 8-12',
            timp: '5 min',
            activitate: '– Unde e păstrată fotografia; cum influențează viața bărbatului; musculița și diminutivul; variantele a-d; „nimic real”.',
          },
          {
            etapa: 'Pasărea și finalul, ex. 17-19',
            timp: '4 min',
            activitate: '– Ce simbolizează flamingo; ultimele două versuri; sentimentul final.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: ex. 13-16 și ex. 20; fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (o poezie din cotidian).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-11/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-11/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Valori culturale românești în lume',
      obiective: [
        'Discută despre contribuțiile românești la arta modernă mondială, precum Brâncuși și Enescu.',
      ],
      sursaManual: 'Art 8, pp. 24-25',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Valori culturale românești în lume',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Discută despre contribuțiile românești la arta modernă mondială, precum Brâncuși și Enescu.',
        ],
        resurse: [
          'Manual Art 8, pp. 24-25',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-12/fisa-exercitii.pdf)',
          'Infograficul „Valori culturale românești în lume” (/materiale/clasa-8/unitatea-1/lectia-12/infografic.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Topul personalităților, „Pentru început”, ex. 1',
            timp: '5 min',
            activitate: '– În perechi, trei personalități românești care au contribuit la patrimoniul lumii, într-un top.',
          },
          {
            etapa: 'Domeniile, ex. 2',
            timp: '4 min',
            activitate: '– Completăm tabelul cu personalitățile și domeniile lor; elevii mai adaugă nume.',
          },
          {
            etapa: 'Brâncuși și Enescu, Explorare',
            timp: '8 min',
            activitate: '– Citim cele două prezentări (p. 24); fiecare notează ce îi face pe cei doi valori ale umanității.',
          },
          {
            etapa: 'Notițe',
            timp: '4 min',
            activitate: '– Proiectez infograficul; în caiete, după Repere (p. 24): Brâncuși, esența obiectului; Enescu, „cinci într-unu”; inspirația din folclor.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (Brâncuși sau Enescu?) și ex. 2 (operele), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Rapsodia română, Aplicații, ex. 1',
            timp: '5 min',
            activitate: '– Ascultăm fragmentul din varianta digitală: instrumentele, linia melodică, motivele repetate.',
          },
          {
            etapa: 'Măiastra, ex. 2-3',
            timp: '6 min',
            activitate: '– Citim fragmentul lui Dan Grigorescu; comparăm Măiastra (1912) cu Pasărea în văzduh (1940).',
          },
          {
            etapa: 'Legături, ex. 4',
            timp: '3 min',
            activitate: '– O legătură între poeziile unității și arta lui Brâncuși sau a lui Enescu.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 5; fișa de exerciții, pagina 2; opțional, Provocări (Alexandra Nechita).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-12/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Valori culturale românești în lume',
          pasi: [
            {
              intrebare: 'Prin ce a schimbat Constantin Brâncuși sculptura modernă?',
              variante: [
                {
                  text: 'A renunțat la reprezentarea fidelă și a căutat forma esențială, simplificată, a lucrurilor',
                  corect: true,
                  explicatie: 'Brâncuși spunea că nu caută forma reală, ci esența ei.',
                },
                {
                  text: 'A sculptat exclusiv în marmură colorată',
                  corect: false,
                  explicatie: 'Materialul nu e ce l-a făcut important; a lucrat în piatră, lemn, bronz.',
                },
                {
                  text: 'A copiat cât mai exact modelele din natură',
                  corect: false,
                  explicatie: 'Exact opusul: a mers spre abstractizare, nu spre copiere.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 24-25',
            },
            {
              intrebare: 'Ce înseamnă că un creator devine o valoare culturală recunoscută în lume?',
              variante: [
                {
                  text: 'Că opera lui e cunoscută și prețuită dincolo de granițele culturii în care s-a format',
                  corect: true,
                  explicatie: 'Recunoașterea internațională nu anulează apartenența la cultura de origine.',
                },
                {
                  text: 'Că a renunțat la cultura din care provine',
                  corect: false,
                  explicatie: 'Brâncuși și Enescu au dus mai departe, nu au abandonat, rădăcinile lor.',
                },
                {
                  text: 'Că a trăit toată viața în străinătate',
                  corect: false,
                  explicatie: 'Locul unde trăiește un artist nu decide valoarea operei lui.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 24-25',
            },
            {
              intrebare: 'Ce leagă Ansamblul de la Târgu Jiu de tema unității, „Unde găsim frumusețea?”',
              variante: [
                {
                  text: 'Arată că frumusețea poate fi și o formă simplă, purtătoare de sens, nu doar un decor',
                  corect: true,
                  explicatie: 'Coloana, Masa și Poarta transformă o idee, recunoștința și jertfa, în forme esențiale.',
                },
                {
                  text: 'Arată că frumusețea înseamnă bogăție de detalii',
                  corect: false,
                  explicatie: 'Ansamblul e tocmai un exemplu de reducere la esențial.',
                },
                {
                  text: 'Nu are legătură cu tema unității',
                  corect: false,
                  explicatie: 'E chiar exemplul central de frumusețe în arta românească modernă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 24-25',
            },
          ],
        },
        infografic: { fisier: '/materiale/clasa-8/unitatea-1/lectia-12/infografic.svg', titlu: 'Valori culturale românești în lume' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Strategii de ascultare activă',
      obiective: [
        'Exersează strategiile de ascultare activă în situații de comunicare.',
      ],
      sursaManual: 'Art 8, pp. 26-27',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Strategii de ascultare activă',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Exersează strategiile de ascultare activă în situații de comunicare.',
        ],
        resurse: [
          'Manual Art 8, pp. 26-27',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-13/fisa-exercitii.pdf)',
          'Quizul „Strategii de ascultare activă” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-3',
            timp: '5 min',
            activitate: '– Să asculți sau să vorbești? Tipurile de comunicare verbală din imagini și cele trei poezii; unde nu poate apărea ascultarea activă.',
          },
          {
            etapa: 'A auzi și a asculta, Explorare, ex. 1-3',
            timp: '5 min',
            activitate: '– Imaginile de la p. 26: diferența dintre a auzi și a asculta; de ce mama și prietena nu ascultă activ; alte bariere.',
          },
          {
            etapa: 'Barierele din poezii, ex. 4',
            timp: '3 min',
            activitate: '– Barierele de ascultare din „O, rămâi...” și „Lecția de citire”.',
          },
          {
            etapa: 'Semnele și momentul opiniei, ex. 5-6',
            timp: '4 min',
            activitate: '– Semnele nonverbale ale ascultării; când e bine să-ți spui părerea.',
          },
          {
            etapa: 'Strategiile eficiente, ex. 7',
            timp: '4 min',
            activitate: '– În perechi, strategiile bune și cele rele, cu câte un exemplu.',
          },
          {
            etapa: 'Notițe: ascultarea activă',
            timp: '5 min',
            activitate: '– În caiete, după Repere (pp. 26-27): cele patru etape și beneficiile ascultării active.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '9 min',
            activitate: '– Pagina 1: ex. 1 (a auzi sau a asculta?) și ex. 2 (etapele), individual, 6 minute.\n– Verificare, 3 minute.',
          },
          {
            etapa: 'Discuția în grupe, Aplicații',
            timp: '10 min',
            activitate: '– Grupe de 4-5, câte o temă a-d; moderatorul notează ideile, observatorul completează grila de la p. 27; moderatorii prezintă concluziile.',
          },
          {
            etapa: 'Quizul',
            timp: '3 min',
            activitate: '– Quizul „Strategii de ascultare activă”, câteva întrebări, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: Explorare, ex. 8-9, în scris; fișa de exerciții, pagina 2; opțional, Provocări.',
          },
        ],
        evaluare: 'Grilele observatorilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-13/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Strategii de ascultare activă',
          pasi: [
            {
              intrebare: 'Care sunt, în ordine, etapele unei ascultări active?',
              variante: [
                { text: 'concentrarea atenției, încurajarea vorbitorului, reflecția asupra spuselor lui, oferirea de feedback', corect: true, explicatie: 'Ascultătorul înlătură distragerile, arată nonverbal că e atent, verifică ce a înțeles, apoi răspunde la temă.' },
                { text: 'întreruperea vorbitorului, schimbarea temei, concluzia', corect: false, explicatie: 'Întreruperea și schimbarea temei sunt bariere în ascultare, nu etape ale ei.' },
                { text: 'tăcerea totală, notițele, plecarea', corect: false, explicatie: 'Ascultarea activă cere reacții nonverbale și feedback, nu doar tăcere.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 26-27',
            },
            {
              intrebare: 'Cum arată ascultătorul, nonverbal, că este atent la vorbitor?',
              variante: [
                { text: 'păstrează contactul vizual, se apleacă ușor spre vorbitor, dă semnale scurte (aha, hmm) fără să preia locul central', corect: true, explicatie: 'Reacțiile nonverbale confirmă receptarea, iar vorbitorul rămâne în centru.' },
                { text: 'stă cu brațele încrucișate, răsturnat în scaun', corect: false, explicatie: 'E o postură de dezinteres, contrară ascultării active.' },
                { text: 'privește pe fereastră și verifică telefonul', corect: false, explicatie: 'Sunt bariere de ascultare; atenția trebuie să fie deplină.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 26-27',
            },
            {
              intrebare: 'Când e recomandabil să îți exprimi opinia față de ce spune interlocutorul?',
              variante: [
                { text: 'după ce ai pus întrebări, ai rezumat sau ai reformulat ce a spus, ca să te convingi că ai înțeles', corect: true, explicatie: 'Amânarea răspunsului dă partenerului încredere că a comunicat eficient.' },
                { text: 'în timpul intervenției vorbitorului, ca să nu uiți', corect: false, explicatie: 'Ar însemna să întrerupi; reacția se amână.' },
                { text: 'abia la câteva zile după discuție', corect: false, explicatie: 'Feedbackul util vine curând după ce te-ai asigurat că ai înțeles, nu peste zile.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 26-27',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-13/schema.svg',
          titlu: 'Cele patru etape ale ascultării active',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Categorii semantice (actualizare)',
      obiective: [
        'Actualizează cunoștințele despre sinonime, antonime, omonime și cuvinte polisemantice.',
      ],
      sursaManual: 'Art 8, pp. 28-30',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Categorii semantice (actualizare)',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Actualizează cunoștințele despre sinonime, antonime, omonime și cuvinte polisemantice.',
        ],
        resurse: [
          'Manual Art 8, pp. 28-30',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-14/fisa-exercitii.pdf)',
          'Schema „Categorii semantice” (/materiale/clasa-8/unitatea-1/lectia-14/schema.svg)',
          'DEX',
        ],
        desfasurare: [
          {
            etapa: 'Dialogul despre teme, „Pentru început”, ex. 1-6',
            timp: '6 min',
            activitate: '– Sinonime, antonime, omonime, sensurile lui „a comenta”, confuzia paronimică din replică, frontal.',
          },
          {
            etapa: 'Sinonimele și antonimele, Explorare, ex. 1-7',
            timp: '8 min',
            activitate: '– Sinonimele din versuri; „a îngâna”; sinonimul lui „sodiu”; locuțiunea „a râde în nas”; antonimele; prefixele negative; „cu capul în nori”.',
          },
          {
            etapa: 'Omonimele și polisemia, Explorare, ex. 1-4',
            timp: '6 min',
            activitate: '– Perechile din imagini; tipurile de omonime; „veselă” și „dar”; în perechi, sensurile lui „ochi”.',
          },
          {
            etapa: 'Paronimele, Explorare, ex. 1-2',
            timp: '3 min',
            activitate: '– Paronimele din versuri și cele de pe flori.',
          },
          {
            etapa: 'Notițe',
            timp: '7 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 28-30): sinonime, antonime, omonime (totale, parțiale, lexico-gramaticale), omofone, omografe, cuvântul polisemantic, paronimele.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (sinonime și antonime) și ex. 2 (ce relație?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 2 și 6',
            timp: '5 min',
            activitate: '– Omonimele lui „lună” și „pas”; în perechi, expresiile sinonime din seriile A și B.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 3, 4, 7, 8; fișa de exerciții, pagina 2; opțional, Provocări.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-14/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Categorii semantice',
          pasi: [
            {
              intrebare: 'Prin ce se deosebește omonimia de polisemie?',
              variante: [
                {
                  text: 'La omonime, cuvintele au aceeași formă dar sensuri fără legătură între ele; la polisemantice, sensurile pornesc din același cuvânt',
                  corect: true,
                  explicatie: 'Broască, animalul, și broască, la ușă, sunt omonime. Ochi de om și ochi de geam sunt sensuri ale aceluiași cuvânt.',
                },
                {
                  text: 'Omonimele se scriu diferit, polisemanticele la fel',
                  corect: false,
                  explicatie: 'Omonimele se scriu, de regulă, identic; asta e definiția lor.',
                },
                {
                  text: 'Polisemia apare doar la verbe',
                  corect: false,
                  explicatie: 'Polisemia apare la toate părțile de vorbire.',
                },
              ],
              indiciu: 'Întreabă-te dacă cele două sensuri au vreo legătură logică între ele.',
              sursa: 'Manual Art 8, pp. 28-30',
            },
            {
              intrebare: 'Cuvintele „bancă” din „bancă de școală” și „bancă” din „bancă unde depui bani” sunt...',
              variante: [
                {
                  text: 'omonime',
                  corect: true,
                  explicatie: 'Sensurile nu au nicio legătură între ele, deși forma e identică.',
                },
                {
                  text: 'sensuri ale aceluiași cuvânt polisemantic',
                  corect: false,
                  explicatie: 'Nu există o legătură de sens din care să derive unul din celălalt.',
                },
                {
                  text: 'sinonime',
                  corect: false,
                  explicatie: 'Sinonimele au forme diferite și sens apropiat, exact invers.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 28-30',
            },
            {
              intrebare: 'Ce condiție trebuie să îndeplinească două cuvinte ca să fie sinonime?',
              variante: [
                {
                  text: 'Să aibă sens apropiat și să fie aceeași parte de vorbire, ca să se poată înlocui în context',
                  corect: true,
                  explicatie: 'Sinonimia perfectă e rară; de obicei sinonimele se pot schimba doar în anumite contexte.',
                },
                {
                  text: 'Să aibă același număr de silabe',
                  corect: false,
                  explicatie: 'Forma sonoră nu are legătură cu sinonimia.',
                },
                {
                  text: 'Să înceapă cu aceeași literă',
                  corect: false,
                  explicatie: 'Litera inițială nu are nicio relevanță semantică.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 28-30',
            },
            {
              intrebare: 'De ce nu putem înlocui întotdeauna un cuvânt cu sinonimul lui?',
              variante: [
                {
                  text: 'Pentru că sinonimele diferă adesea prin nuanță, registru sau context de folosire',
                  corect: true,
                  explicatie: 'A muri și a deceda sunt sinonime, dar nu se folosesc în aceleași situații.',
                },
                {
                  text: 'Pentru că sinonimele sunt mereu mai lungi',
                  corect: false,
                  explicatie: 'Lungimea nu e criteriu.',
                },
                {
                  text: 'Pentru că sinonimele nu există cu adevărat',
                  corect: false,
                  explicatie: 'Există, doar că rareori sunt perfect interschimbabile.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 28-30',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-14/schema.svg', titlu: 'Categorii semantice' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Derivarea. Compunerea (actualizare)',
      obiective: [
        'Actualizează cunoștințele despre derivare și compunere, cu exerciții aplicate.',
      ],
      sursaManual: 'Art 8, pp. 31-33',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Derivarea. Compunerea (actualizare)',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Actualizează cunoștințele despre derivare și compunere, cu exerciții aplicate.',
        ],
        resurse: [
          'Manual Art 8, pp. 31-33',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-15/fisa-exercitii.pdf)',
          'Schema „Derivarea. Compunerea” (/materiale/clasa-8/unitatea-1/lectia-15/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Versurile lui Topîrceanu, Explorare, ex. 1',
            timp: '5 min',
            activitate: '– În perechi, derivatele cu sufixe și cu prefixe; încercuim afixele.',
          },
          {
            etapa: 'Sufixele, ex. 2-4',
            timp: '7 min',
            activitate: '– Sufixe lexicale și gramaticale; ce arată sufixele din tabel; valoarea diminutivelor.',
          },
          {
            etapa: 'Prefixele, ex. 5-7',
            timp: '4 min',
            activitate: '– Prefixele din listă; formarea lui „străveziu” și a lui „a învălui”.',
          },
          {
            etapa: 'Compunerea, Explorare, ex. 1-4',
            timp: '6 min',
            activitate: '– Compusele din versurile lui Minulescu; tabelul procedeelor, pe grupe; abrevierile; elementele savante.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 31-33): sufixele, prefixele, seria derivativă, derivatele parasintetice, procedeele compunerii, elementele savante.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (derivatul) și ex. 2 (compusul), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Afixele derivatelor și procedeele compunerii, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 3-6; fișa de exerciții, pagina 2; opțional, Provocări (cuvinte-valiză).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-15/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Derivarea și compunerea',
          pasi: [
            {
              intrebare: 'Cum s-a format cuvântul „neînțelegere”?',
              variante: [
                {
                  text: 'Prin derivare parasintetică, cu prefixul ne- și sufixul -re adăugate simultan',
                  corect: true,
                  explicatie: 'Derivarea parasintetică adaugă în același timp prefix și sufix la rădăcină.',
                },
                {
                  text: 'Doar prin derivare cu prefix',
                  corect: false,
                  explicatie: 'Ar rezulta „neînțelege”, care nu e cuvântul din enunț.',
                },
                {
                  text: 'Prin compunere din două cuvinte de sine stătătoare',
                  corect: false,
                  explicatie: 'Ne- și -re nu sunt cuvinte independente, ci afixe.',
                },
              ],
              indiciu: 'Ia cuvântul de la rădăcină și vezi ce s-a adăugat, și în față, și la coadă.',
              sursa: 'Manual Art 8, pp. 31-33',
            },
            {
              intrebare: 'Care dintre acestea e format prin compunere prin contopire?',
              variante: [
                {
                  text: 'binecuvântare',
                  corect: true,
                  explicatie: 'Cele două cuvinte s-au sudat într-unul singur, scris legat.',
                },
                {
                  text: 'floarea-soarelui',
                  corect: false,
                  explicatie: 'E compunere prin alăturare, cu cratimă, nu prin contopire.',
                },
                {
                  text: 'nedreptate',
                  corect: false,
                  explicatie: 'E derivare cu prefix, nu compunere.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 31-33',
            },
            {
              intrebare: 'Ce este rădăcina unui cuvânt?',
              variante: [
                {
                  text: 'Partea care poartă sensul de bază și rămâne comună întregii familii lexicale',
                  corect: true,
                  explicatie: 'În flor-, floare, floricică, înflori, rădăcina e aceeași.',
                },
                {
                  text: 'Prima silabă a cuvântului',
                  corect: false,
                  explicatie: 'Rădăcina nu coincide neapărat cu prima silabă.',
                },
                {
                  text: 'Sufixul cel mai des folosit',
                  corect: false,
                  explicatie: 'Sufixul se adaugă la rădăcină, nu e rădăcina.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 31-33',
            },
            {
              intrebare: 'De ce derivarea și compunerea se numesc mijloace interne de îmbogățire a vocabularului?',
              variante: [
                {
                  text: 'Pentru că formează cuvinte noi folosind material care există deja în limbă',
                  corect: true,
                  explicatie: 'Spre deosebire de împrumut, care aduce cuvinte din alte limbi.',
                },
                {
                  text: 'Pentru că se folosesc doar în scris',
                  corect: false,
                  explicatie: 'Se folosesc în egală măsură în vorbire.',
                },
                {
                  text: 'Pentru că produc doar substantive',
                  corect: false,
                  explicatie: 'Produc cuvinte din toate clasele morfologice.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 31-33',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-15/schema.svg', titlu: 'Derivarea. Compunerea' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Conversiunea. Familia de cuvinte',
      obiective: [
        'Definește conversiunea și identifică familia lexicală a unor cuvinte.',
      ],
      sursaManual: 'Art 8, pp. 34-35',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Conversiunea. Familia de cuvinte',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Definește conversiunea și identifică familia lexicală a unor cuvinte.',
        ],
        resurse: [
          'Manual Art 8, pp. 34-35',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-16/fisa-exercitii.pdf)',
          'Schema „Conversiunea. Familia de cuvinte” (/materiale/clasa-8/unitatea-1/lectia-16/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Frumos”, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– Partea de vorbire a cuvintelor din cele trei enunțuri; comparăm cu derivatele și compusul din pictură.',
          },
          {
            etapa: 'Conversiunea, ex. 3-6',
            timp: '10 min',
            activitate: '– În grupe și în perechi: substantivele, adjectivele, adverbele și prepozițiile obținute prin conversiune; cazul cerut de prepoziții.',
          },
          {
            etapa: 'Notițe: conversiunea',
            timp: '5 min',
            activitate: '– În caiete, după Repere (pp. 34-35): definiția, ce se poate obține prin conversiune, participiu și supin.',
          },
          {
            etapa: 'Familia lui „floare”, Explorare, ex. 1-2',
            timp: '6 min',
            activitate: '– Grupe de 4-5 completează tabelul; de ce „floral”, „florentin”, „floretă” nu intră în familie; familia și câmpul lexical.',
          },
          {
            etapa: 'Notițe: familia și câmpul lexical',
            timp: '3 min',
            activitate: '– Definițiile din Repere (p. 35).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (din ce parte de vorbire?) și ex. 2 (familia cuvântului „munte”), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1',
            timp: '4 min',
            activitate: '– Cuvintele obținute prin conversiune din enunțurile date, frontal.',
          },
          {
            etapa: 'Familia lui „nor”, ex. 3',
            timp: '3 min',
            activitate: '– Construim familia pe tablă.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 2 și 4; Portofoliu (coșul cu fructe); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-16/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Conversiunea și familia de cuvinte',
          pasi: [
            {
              intrebare: 'Ce este conversiunea?',
              variante: [
                {
                  text: 'Trecerea unui cuvânt de la o parte de vorbire la alta, fără să i se schimbe forma',
                  corect: true,
                  explicatie: 'Adjectivul frumos devine substantiv în „frumosul din natură”, fără nicio modificare de formă.',
                },
                {
                  text: 'Adăugarea unui sufix la rădăcină',
                  corect: false,
                  explicatie: 'Aceea e derivarea; la conversiune forma rămâne neschimbată.',
                },
                {
                  text: 'Alăturarea a două cuvinte cu cratimă',
                  corect: false,
                  explicatie: 'Aceea e compunerea prin alăturare.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 34-35',
            },
            {
              intrebare: 'În enunțul „Bătrânul mergea încet”, cuvântul „bătrânul” este...',
              variante: [
                {
                  text: 'substantiv provenit din adjectiv, prin conversiune',
                  corect: true,
                  explicatie: 'Articulat și așezat pe poziția subiectului, adjectivul funcționează ca substantiv.',
                },
                {
                  text: 'adjectiv, ca de obicei',
                  corect: false,
                  explicatie: 'Aici nu determină niciun substantiv; el însuși e subiectul.',
                },
                {
                  text: 'adverb',
                  corect: false,
                  explicatie: 'Adverbul din enunț e „încet”, nu „bătrânul”.',
                },
              ],
              indiciu: 'Întreabă-te ce funcție are cuvântul în propoziție, nu ce era el la origine.',
              sursa: 'Manual Art 8, pp. 34-35',
            },
            {
              intrebare: 'Ce cuprinde familia lexicală a unui cuvânt?',
              variante: [
                {
                  text: 'Toate cuvintele formate de la aceeași rădăcină, prin derivare, compunere sau conversiune',
                  corect: true,
                  explicatie: 'Familia lexicală se construiește pe rădăcină, nu pe sens apropiat.',
                },
                {
                  text: 'Toate cuvintele cu sens asemănător',
                  corect: false,
                  explicatie: 'Acelea sunt sinonimele; familia lexicală cere aceeași rădăcină.',
                },
                {
                  text: 'Toate cuvintele din același domeniu',
                  corect: false,
                  explicatie: 'Acela e câmpul lexical, care nu presupune rădăcină comună.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 34-35',
            },
            {
              intrebare: 'Care e deosebirea dintre familia lexicală și câmpul lexical?',
              variante: [
                {
                  text: 'Familia lexicală se bazează pe rădăcină comună, câmpul lexical pe domeniu de sens comun',
                  corect: true,
                  explicatie: 'Școală și școlar sunt aceeași familie; școală și catalog sunt același câmp.',
                },
                {
                  text: 'Sunt exact același lucru',
                  corect: false,
                  explicatie: 'Criteriile sunt diferite: formă la unul, sens la celălalt.',
                },
                {
                  text: 'Familia lexicală cuprinde doar substantive',
                  corect: false,
                  explicatie: 'Cuprinde toate părțile de vorbire formate de la rădăcină.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 34-35',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-16/schema.svg', titlu: 'Conversiunea. Familia de cuvinte' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Împrumuturile',
      obiective: [
        'Identifică tipurile de cuvinte din vocabularul limbii române, după originea lor.',
      ],
      sursaManual: 'Art 8, pp. 36-37',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Împrumuturile',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Identifică tipurile de cuvinte din vocabularul limbii române, după originea lor.',
        ],
        resurse: [
          'Manual Art 8, pp. 36-37',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-17/fisa-exercitii.pdf)',
          'Schema „Împrumuturile. Neologismele” (/materiale/clasa-8/unitatea-1/lectia-17/schema.svg)',
          'DEX',
        ],
        desfasurare: [
          {
            etapa: 'Cuvinte din alte limbi, Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Fiecare spune un cuvânt preluat dintr-o limbă străină studiată; cele trei liste din versurile lui Dan Coman.',
          },
          {
            etapa: 'Tânărul de ieri și cel de azi, Tipuri de împrumuturi, ex. 1-3',
            timp: '7 min',
            activitate: '– Asociem cuvintele cu cele două desene; originea lor; „drept” și „direct”.',
          },
          {
            etapa: 'Seriile, ex. 4-6',
            timp: '3 min',
            activitate: '– Seria cu împrumuturi noi; formarea celorlalte cuvinte; mijloace externe sau interne.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (pp. 36-37): cuvinte moștenite, formate, împrumutate; împrumuturi vechi și noi, cu limbile lor; neologismele.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (de unde vine cuvântul?) și ex. 2 (vechi sau nou?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Etichetele, Aplicații, ex. 1',
            timp: '4 min',
            activitate: '– În perechi, împrumuturile vechi și noi de pe etichete.',
          },
          {
            etapa: 'Neologisme și „a servi”, ex. 2-3',
            timp: '5 min',
            activitate: '– Neologismele din strofe; enunțurile în care „a servi” e folosit greșit.',
          },
          {
            etapa: 'Forma corectă, ex. 4',
            timp: '4 min',
            activitate: '– Formele corecte ale împrumuturilor, verificate în DEX.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; opțional, Provocări (neologismele din „Lecția de citire”).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-17/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Împrumuturile',
          pasi: [
            {
              intrebare: 'Din ce fond provine partea cea mai veche a vocabularului limbii române?',
              variante: [
                {
                  text: 'Din fondul latin moștenit',
                  corect: true,
                  explicatie: 'Cuvintele moștenite din latină formează nucleul vocabularului de bază.',
                },
                {
                  text: 'Din împrumuturile din engleză',
                  corect: false,
                  explicatie: 'Anglicismele sunt cele mai recente împrumuturi, nu cele mai vechi.',
                },
                {
                  text: 'Din împrumuturile din franceză',
                  corect: false,
                  explicatie: 'Împrumuturile franceze sunt masive, dar din secolul al XIX-lea, mult mai târzii.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 36-37',
            },
            {
              intrebare: 'Ce este un împrumut neadaptat?',
              variante: [
                {
                  text: 'Un cuvânt luat din altă limbă, care își păstrează scrierea din limba de origine',
                  corect: true,
                  explicatie: 'Pronunția se poate apropia de română, dar grafia rămâne cea originală.',
                },
                {
                  text: 'Un cuvânt care nu se folosește niciodată',
                  corect: false,
                  explicatie: 'Multe împrumuturi neadaptate se folosesc curent.',
                },
                {
                  text: 'Un cuvânt inventat în română',
                  corect: false,
                  explicatie: 'Un cuvânt inventat în română nu e împrumut deloc.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 36-37',
            },
            {
              intrebare: 'Când este justificat un anglicism în limba română?',
              variante: [
                {
                  text: 'Când numește o realitate nouă pentru care limba nu are deja un cuvânt potrivit',
                  corect: true,
                  explicatie: 'Anglicismul devine discutabil când dublează inutil un cuvânt românesc existent.',
                },
                {
                  text: 'Întotdeauna, fiindcă sună mai modern',
                  corect: false,
                  explicatie: 'Moda nu e un criteriu lingvistic.',
                },
                {
                  text: 'Niciodată, orice împrumut strică limba',
                  corect: false,
                  explicatie: 'Limba română s-a îmbogățit dintotdeauna prin împrumuturi; problema e doar folosirea inutilă.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 36-37',
            },
            {
              intrebare: 'Pentru anglicismul „a downloada” există în română...',
              variante: [
                {
                  text: 'echivalentul „a descărca”, deja folosit curent',
                  corect: true,
                  explicatie: 'Când echivalentul românesc există și se înțelege, împrumutul devine de prisos.',
                },
                {
                  text: 'niciun echivalent, deci e obligatoriu',
                  corect: false,
                  explicatie: '„A descărca” acoperă exact același sens.',
                },
                {
                  text: 'doar un echivalent din latină',
                  corect: false,
                  explicatie: 'Echivalentul e un cuvânt românesc curent, nu un termen savant.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 36-37',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-17/schema.svg', titlu: 'Împrumuturile. Neologismele' },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Registrele limbii',
      obiective: [
        'Recunoaște registrele limbii, solemn, standard, familiar, și elementele de argou și jargon.',
      ],
      sursaManual: 'Art 8, pp. 38-39',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Registrele limbii',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Recunoaște registrele limbii, solemn, standard, familiar, și elementele de argou și jargon.',
        ],
        resurse: [
          'Manual Art 8, pp. 38-39',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-18/fisa-exercitii.pdf)',
          'Schema „Registrele limbii. Argoul. Jargonul” (/materiale/clasa-8/unitatea-1/lectia-18/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cele trei desene, Explorare, ex. 1-3',
            timp: '6 min',
            activitate: '– Vocabularul, gramatica și pronunția din cele trei situații; diferențele dintre enunțurile a-b; unde apare limbajul cultivat.',
          },
          {
            etapa: 'Notițe: registrele',
            timp: '6 min',
            activitate: '– Proiectez schema; în caiete, după Repere (p. 38): registrul solemn, standard, familiar, cu vocabularul, gramatica și pronunția fiecăruia.',
          },
          {
            etapa: 'Argoul și jargonul, Explorare, ex. 1-4',
            timp: '6 min',
            activitate: '– Sensul cuvintelor din dialogul elevilor și cum s-au format; termenii din informatică; „parol” la Caragiale.',
          },
          {
            etapa: 'Notițe: argoul și jargonul',
            timp: '4 min',
            activitate: '– Definițiile și mijloacele de formare a termenilor argotici (Repere, p. 39).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (ce registru?) și ex. 2 (în registrul standard), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Registrul enunțurilor a-d; clasificarea adjectivelor pe registre.',
          },
          {
            etapa: 'Termenii argotici, ex. 4',
            timp: '4 min',
            activitate: '– Termenii din fragmentul lui Mircea Sântimbreanu și echivalentele lor standard.',
          },
          {
            etapa: 'Jargonul tinerilor, ex. 5',
            timp: '4 min',
            activitate: '– Sensul termenilor de jargon și de argou din text.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 3; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-18/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Registrele limbii',
          pasi: [
            {
              intrebare: 'Ce registru al limbii folosești într-o cerere adresată directorului școlii?',
              variante: [
                {
                  text: 'Registrul solemn sau, cel puțin, cel standard, cu formule de politețe',
                  corect: true,
                  explicatie: 'Situația oficială cere un registru înalt, nu limbajul de zi cu zi.',
                },
                {
                  text: 'Registrul familiar, ca să pari natural',
                  corect: false,
                  explicatie: 'Familiarul e nepotrivit într-o comunicare oficială.',
                },
                {
                  text: 'Argoul, ca să te faci înțeles mai repede',
                  corect: false,
                  explicatie: 'Argoul e limbaj de grup restrâns, complet nepotrivit aici.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 38-39',
            },
            {
              intrebare: 'Ce este argoul?',
              variante: [
                {
                  text: 'Un limbaj propriu unui grup restrâns, folosit ca să marcheze apartenența la grup',
                  corect: true,
                  explicatie: 'Argoul are și rol de a face mesajul greu de înțeles pentru cei din afară.',
                },
                {
                  text: 'Limbajul de specialitate al unei profesii',
                  corect: false,
                  explicatie: 'Acela e jargonul, nu argoul.',
                },
                {
                  text: 'Forma corectă, normată, a limbii',
                  corect: false,
                  explicatie: 'Aceea e limba standard, literară.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 38-39',
            },
            {
              intrebare: 'Ce este jargonul?',
              variante: [
                {
                  text: 'Limbajul specializat al unei profesii sau al unui domeniu',
                  corect: true,
                  explicatie: 'Medicii, informaticienii sau juriștii au fiecare jargonul lor.',
                },
                {
                  text: 'Limbajul tinerilor dintr-un cartier',
                  corect: false,
                  explicatie: 'Acela e mai degrabă argou.',
                },
                {
                  text: 'O greșeală de exprimare',
                  corect: false,
                  explicatie: 'Jargonul nu e o greșeală, doar un limbaj nepotrivit în afara domeniului lui.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 38-39',
            },
            {
              intrebare: 'De ce e important să știi să schimbi registrul în care vorbești?',
              variante: [
                {
                  text: 'Pentru că fiecare situație de comunicare cere alt nivel de limbă, iar potrivirea arată respect față de interlocutor',
                  corect: true,
                  explicatie: 'Adaptarea la context e o competență de comunicare, nu doar o regulă de politețe.',
                },
                {
                  text: 'Pentru că registrul familiar e întotdeauna greșit',
                  corect: false,
                  explicatie: 'Familiarul e perfect potrivit între prieteni; problema e folosirea lui în context oficial.',
                },
                {
                  text: 'Pentru că doar registrul solemn e corect gramatical',
                  corect: false,
                  explicatie: 'Toate registrele pot fi corecte gramatical; diferă potrivirea la situație.',
                },
              ],
              indiciu: null,
              sursa: 'Manual Art 8, pp. 38-39',
            },
          ],
        },
        infografic: null,
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-18/schema.svg', titlu: 'Registrele limbii. Argoul. Jargonul' },
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Fonetica',
      obiective: [
        'Identifică diftongii, triftongii, vocalele în hiat și pronunția cuvintelor de origine străină.',
      ],
      sursaManual: 'Art 8, pp. 40-41',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Fonetica',
        data: null,
        tipOra: 'Predare, fonetică',
        durata: 50,
        obiective: [
          'Identifică diftongii, triftongii, vocalele în hiat și pronunția cuvintelor de origine străină.',
        ],
        resurse: [
          'Manual Art 8, pp. 40-41',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-19/fisa-exercitii.pdf)',
          'Quizul „Fonetica” (materialul de joc al lecției)',
          'DOOM3',
        ],
        desfasurare: [
          {
            etapa: 'Versurile Magdei Isanos, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Diftongii, triftongii și hiaturile; literele și sunetele din trei cuvinte; i „șoptit” din enunțul dat.',
          },
          {
            etapa: 'Notițe: sunetele și literele',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 40): grupurile de litere, i „șoptit”, diftongul, triftongul, hiatul.',
          },
          {
            etapa: 'Cuvintele de origine străină, Explorare, ex. 1-8',
            timp: '8 min',
            activitate: '– Pronunția lui „e-mail”; împrumuturi adaptate și neadaptate; litera u; „bleumarin”; literele duble; literele care nu se citesc; articularea.',
          },
          {
            etapa: 'Notițe: împrumuturile neadaptate',
            timp: '4 min',
            activitate: '– Repere (p. 41): scrierea și pronunțarea după DOOM3, articolul cu sau fără cratimă, numele proprii străine.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (diftong, triftong sau hiat?) și ex. 2 (litere și sunete), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-4',
            timp: '5 min',
            activitate: '– Sunetele literelor colorate; obiectele din ilustrație; intrușii din serii; articularea cu cratimă.',
          },
          {
            etapa: 'Quizul',
            timp: '5 min',
            activitate: '– Quizul „Fonetica”, frontal.',
          },
          {
            etapa: 'Mâncărurile, ex. 8',
            timp: '2 min',
            activitate: '– Pronunțăm împreună cele patru denumiri.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 5-7; Portofoliu (cele două liste); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-19/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz',
          titlu: 'Fonetica',
          pasi: [
            {
              intrebare: 'Ce este un diftong?',
              variante: [
                { text: 'Grupul format din două vocale pronunțate în aceeași silabă', corect: true, explicatie: 'Diftongul e o singură silabă cu două vocale, ca în „ai” din „mai”.' },
                { text: 'Grupul format din trei vocale pronunțate în silabe diferite', corect: false, explicatie: 'Trei vocale în silabe diferite înseamnă hiat, nu diftong sau triftong.' },
                { text: 'O consoană urmată de o vocală', corect: false, explicatie: 'Diftongul se referă strict la vocale, nu la combinații vocală-consoană.' },
              ],
              indiciu: null,
              sursa: 'Art 8, p. 40',
            },
            {
              intrebare: 'Ce este hiatul?',
              variante: [
                { text: 'Două vocale alăturate care aparțin unor silabe diferite', corect: true, explicatie: 'În hiat, vocalele se pronunță separat, în silabe distincte, ca în „a-er”.' },
                { text: 'Trei vocale pronunțate într-o singură silabă', corect: false, explicatie: 'Aceasta e definiția triftongului, nu a hiatului.' },
                { text: 'Absența oricărei vocale dintr-un cuvânt', corect: false, explicatie: 'Hiatul presupune tocmai prezența a două vocale alăturate.' },
              ],
              indiciu: null,
              sursa: 'Art 8, p. 40',
            },
            {
              intrebare: 'Cum se scriu de obicei cuvintele de origine străină neadaptate fonetic la limba română?',
              variante: [
                { text: 'Păstrează scrierea din limba de origine, dar pot avea o pronunție adaptată', corect: true, explicatie: 'Împrumuturile neadaptate păstrează grafia originală, chiar dacă pronunția se apropie de limba română.' },
                { text: 'Se scriu mereu fonetic, exact cum se pronunță', corect: false, explicatie: 'Aceasta e regula împrumuturilor adaptate, nu a celor neadaptate.' },
                { text: 'Nu pot fi folosite corect în limba română', corect: false, explicatie: 'Împrumuturile neadaptate sunt folosite curent, doar că păstrează grafia de origine.' },
              ],
              indiciu: null,
              sursa: 'Art 8, p. 41',
            },
          ],
        },
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-19/schema.svg',
          titlu: 'Diftong, triftong, hiat',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Organizarea coerentă a textului. Anafora',
      obiective: [
        'Explică rolul anaforei și al coerenței în organizarea unui text.',
      ],
      sursaManual: 'Art 8, pp. 42-43',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Organizarea coerentă a textului. Anafora',
        data: null,
        tipOra: 'Predare, limbă română',
        durata: 50,
        obiective: [
          'Explică rolul anaforei și al coerenței în organizarea unui text.',
        ],
        resurse: [
          'Manual Art 8, pp. 42-43',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-20/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-20/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Textul-clădire, Explorare, ex. 1-4',
            timp: '7 min',
            activitate: '– Reconstituim textul despre jurnalul de lectură al Anei; cuvintele care ne-au ajutat; paragrafele; tema.',
          },
          {
            etapa: 'Texte fără logică, ex. 5',
            timp: '5 min',
            activitate: '– De ce exemplele a-e nu sunt logice.',
          },
          {
            etapa: 'Notițe: coerența',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 42): ordinea logică, temporală, spațială; regulile continuității, progresiei și noncontradicției.',
          },
          {
            etapa: 'Anafora, Explorare, ex. 1-2',
            timp: '6 min',
            activitate: '– Cum sunt reluate „Ioana” și „comentariile”; în grupe, anaforicele din exemplele a-g și partea lor de vorbire.',
          },
          {
            etapa: 'Notițe: anafora',
            timp: '3 min',
            activitate: '– Antecedentul, anaforicul, felurile anaforicelor (Repere, p. 43).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (enunțuri amestecate, ordinea și legăturile), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-3',
            timp: '7 min',
            activitate: '– Ordinea enunțurilor din „Apă, praf și soare”; anaforicele din exemplele a-b; eliminăm repetițiile din textul despre Mihai.',
          },
          {
            etapa: 'Autoevaluare L13-L19',
            timp: '2 min',
            activitate: '– Cele trei enunțuri de la p. 43, în caiete.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Portofoliu (text de 100-150 de cuvinte, cu patru anaforice ale lui „text”); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea L13-L19.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-20/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-20/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-20/schema.svg',
          titlu: 'Anafora, cum legăm un text',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Etapele scrierii. Integrarea feedbackului (partea 1/2)',
      obiective: [
        'Redactează o ciornă și primește feedback pe baza unei grile de evaluare.',
      ],
      sursaManual: 'Art 8, pp. 44-45 (partea 1/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Etapele scrierii. Integrarea feedbackului (partea 1/2)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o ciornă și primește feedback pe baza unei grile de evaluare.',
        ],
        resurse: [
          'Manual Art 8, pp. 44-45',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-21/fisa-exercitii.pdf)',
          'Fișa lecției cu grila de evaluare (/materiale/clasa-8/unitatea-1/lectia-21/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Etapele și feedbackul, „Pentru început”',
            timp: '7 min',
            activitate: '– Reamintim cele cinci etape ale scrierii; fiecare completează fișa cu cele patru întrebări despre feedback, pentru mine.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (etapele scrierii) și ex. 2 (feedback util?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Sarcina și grila, Explorare, ex. 1',
            timp: '5 min',
            activitate: '– Citim versurile lui Ion Pillat și reperele sarcinii; parcurgem grila de evaluare.',
          },
          {
            etapa: 'Planul, fișa de exerciții, ex. 3',
            timp: '5 min',
            activitate: '– Fiecare își notează reperele: elementele peisajului, două figuri de stil, emoția, tema.',
          },
          {
            etapa: 'Ciorna',
            timp: '12 min',
            activitate: '– Elevii redactează compunerea (minimum 100 de cuvinte) și o recitesc.',
          },
          {
            etapa: 'Schimbul de caiete și feedbackul',
            timp: '8 min',
            activitate: '– Perechile își schimbă caietele și completează grila, cu sugestii concrete; fiecare notează cel puțin două sugestii primite (Explorare, ex. 2).',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: ciorna terminată, dacă nu e gata; fișa de exerciții, ex. 4.',
          },
        ],
        evaluare: 'Grilele de feedback completate de colegi; fișa de exerciții, ex. 1-2.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-21/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-21/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-21/schema.svg',
          titlu: 'Etapele scrierii și feedbackul util',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Etapele scrierii. Integrarea feedbackului (partea 2/2)',
      obiective: [
        'Integrează feedbackul primit și editează textul pentru prezentare.',
      ],
      sursaManual: 'Art 8, pp. 44-45 (partea 2/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Etapele scrierii. Integrarea feedbackului (partea 2/2)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Integrează feedbackul primit și editează textul pentru prezentare.',
        ],
        resurse: [
          'Manual Art 8, pp. 44-45',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-22/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-22/fisa.pdf)',
          'Ciornele și grilele de feedback de la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Sugestiile, fișa de exerciții, ex. 1',
            timp: '8 min',
            activitate: '– Fiecare trece sugestiile primite pe fișă și decide ce acceptă și cum modifică textul (Repere, p. 45).',
          },
          {
            etapa: 'Întrebări pentru colegi',
            timp: '4 min',
            activitate: '– Elevii cer lămuriri colegului care le-a dat feedback, unde ceva nu e clar.',
          },
          {
            etapa: 'Rescrierea, Aplicații, ex. 1',
            timp: '12 min',
            activitate: '– Elevii rescriu pasajele modificate; trec printre bănci.',
          },
          {
            etapa: 'Editarea, Aplicații, ex. 2',
            timp: '8 min',
            activitate: '– Verificarea finală (fișa de exerciții, ex. 2) și transcrierea pe o foaie curată.',
          },
          {
            etapa: 'Pregătirea lecturii, fișa, ex. 3',
            timp: '4 min',
            activitate: '– Pasajul important, schimbările de ton, pauzele.',
          },
          {
            etapa: 'Din scaunul autorului, Aplicații, ex. 3',
            timp: '10 min',
            activitate: '– Trei-patru elevi își citesc compunerile; colegii spun ce s-a îmbunătățit față de ciornă.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Portofoliu (compunerea și fișa de autoevaluare pe grilă); fișa de exerciții, ex. 4. Strâng lucrările editate.',
          },
        ],
        evaluare: 'Compunerile editate, strânse pentru apreciere; prezentările din scaunul autorului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-22/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-22/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-23',
      titlu: 'Rolul elementelor grafice în prezentarea unui text',
      obiective: [
        'Realizează o prezentare de text cu includerea unor elemente grafice.',
      ],
      sursaManual: 'Art 8, pp. 46-47',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Rolul elementelor grafice în prezentarea unui text',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Realizează o prezentare de text cu includerea unor elemente grafice.',
        ],
        resurse: [
          'Manual Art 8, pp. 46-47',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-23/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-23/fisa.pdf)',
          'Textul editat la ora anterioară',
        ],
        desfasurare: [
          {
            etapa: 'Cărțile ilustrate, Explorare, ex. 1-3',
            timp: '6 min',
            activitate: '– Cărțile „citite” înainte de alfabet; profesia femeii din imagine; ordinea în care observăm elementele.',
          },
          {
            etapa: 'Tipurile de imagini, ex. 4-5',
            timp: '5 min',
            activitate: '– Imaginile a-f și rolul lor; cum atrage atenția textul din banda desenată.',
          },
          {
            etapa: 'Imagini și legende, ex. 6-7',
            timp: '4 min',
            activitate: '– Caligrama lui Apollinaire și imaginile din „Micul Prinț”; diferența față de elementele multimedia.',
          },
          {
            etapa: 'Notițe: elementele grafice',
            timp: '7 min',
            activitate: '– În caiete, după Repere (pp. 46-47): funcțiile imaginilor, lectura în formă de Z, regulile pentru slide-uri, legenda.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (tipul și rolul imaginii) și ex. 2 (reguli pentru slide), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Imaginea pentru versurile lui Pillat, Aplicații, ex. 1-2',
            timp: '6 min',
            activitate: '– Tabloul lui Arcimboldo sau fotografia: care se potrivește și de ce; alte propuneri.',
          },
          {
            etapa: 'Planul posterului, fișa de exerciții, ex. 3',
            timp: '7 min',
            activitate: '– În perechi, elevii aleg poezia de toamnă (Aplicații, ex. 3) și plănuiesc posterul sau prezentarea.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 3 (posterul sau prezentarea digitală); Portofoliu (fișa de autoevaluare); fișa de exerciții, ex. 4.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; planurile posterelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-23/fisa.pdf', exercitii: '/materiale/clasa-8/unitatea-1/lectia-23/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: {
          fisier: '/materiale/clasa-8/unitatea-1/lectia-23/schema.svg',
          titlu: 'Ce face o imagine într-un text',
        },
        altele: [],
      },
    },
    {
      id: 'lectia-24',
      titlu: 'Recapitulare (partea 1/2)',
      obiective: [
        'Recapitulează conținuturile de lectură și limbă română din unitate.',
      ],
      sursaManual: 'Art 8, pp. 48-49 (partea 1/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 1/2)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează conținuturile de lectură și limbă română din unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 48-49',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-24/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și limbă română” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ciorchinele unității',
            timp: '3 min',
            activitate: '– Pe tablă, „Unde găsim frumusețea?”; elevii spun câte o noțiune de lectură sau de limbă din unitate.',
          },
          {
            etapa: 'Lectura',
            timp: '4 min',
            activitate: '– Citesc „Școala frumuseții” de Geo Dumitrescu (p. 48).',
          },
          {
            etapa: 'Cerințele 1-7',
            timp: '7 min',
            activitate: '– Impresia, tipul versurilor, registrul, aliterațiile, vocea ficțională și mărcile ei, persoana a doua.',
          },
          {
            etapa: 'Investigația, cerința 12',
            timp: '12 min',
            activitate: '– Patru grupe trag la sorți câte o strofă și rezolvă sarcinile pe poster, 8 minute; reprezentanții prezintă.',
          },
          {
            etapa: 'Limba, cerințele 16-20',
            timp: '6 min',
            activitate: '– Sinonime și antonime, omonime, sensuri, paronime, formarea cuvintelor, selectiv, frontal.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (poezia „Grădina bunicii”, scrisă pentru fișă, și noțiunile recapitulate), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '4 min',
            activitate: '– Quizul „Recapitulare, lectură și limbă română”, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: cerințele 8-11 și 21-23; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Aprecieri pe posterele grupelor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-24/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, lectură și limbă română',
          pasi: [
            {
              intrebare: 'Ce numim „măsura” unui vers?',
              variante: [
                { text: 'numărul de silabe dintr-un vers', corect: true, explicatie: 'Măsura poate fi constantă sau poate varia; scurtă, medie sau lungă.' },
                { text: 'potrivirea sunetelor de la sfârșit de vers', corect: false, explicatie: 'Aceea este rima.' },
                { text: 'numărul de versuri dintr-o strofă', corect: false, explicatie: 'Numărul de versuri dă tipul strofei (distih, terțină, catren).' },
              ],
              indiciu: null, sursa: 'Art 8, p. 11',
            },
            {
              intrebare: 'Prin ce se deosebesc versurile albe de versurile libere?',
              variante: [
                { text: 'versurile albe păstrează ritmul și măsura, dar nu au rimă; versurile libere renunță la ritm, la rimă și au măsură variabilă', corect: true, explicatie: 'Poezia modernă se eliberează treptat de constrângerile prozodiei.' },
                { text: 'versurile albe sunt scrise cu majusculă, cele libere cu minusculă', corect: false, explicatie: 'Litera de la început nu definește tipul versului.' },
                { text: 'versurile albe apar doar în poezia populară', corect: false, explicatie: 'Amândouă tipurile apar în poezia cultă modernă.' },
              ],
              indiciu: null, sursa: 'Art 8, p. 15',
            },
            {
              intrebare: 'Ce este hiperbola?',
              variante: [
                { text: 'exagerarea intenționată a însușirilor unei ființe sau ale unui obiect, ca să-l impresioneze pe cititor', corect: true, explicatie: 'Trăsăturile pot fi mărite sau micșorate exagerat; se combină mereu cu alte figuri de stil.' },
                { text: 'înșiruirea mai multor termeni de același fel', corect: false, explicatie: 'Aceea este enumerația.' },
                { text: 'atribuirea de însușiri omenești unui lucru', corect: false, explicatie: 'Aceea este personificarea.' },
              ],
              indiciu: null, sursa: 'Art 8, p. 16',
            },
            {
              intrebare: 'Ce rol are anafora într-un text?',
              variante: [
                { text: 'reia un cuvânt (antecedent) printr-un altul (anaforic), eliminând repetițiile supărătoare și asigurând continuitatea logică', corect: true, explicatie: 'Anaforicul poate fi pronume, adverb, numeral, substantiv, „da”/„nu” sau verbul „a face”.' },
                { text: 'marchează sfârșitul unui paragraf', corect: false, explicatie: 'Nu are legătură cu marcarea paragrafelor.' },
                { text: 'schimbă timpul verbal al narării', corect: false, explicatie: 'Schimbarea timpului narării încalcă, de fapt, regula noncontradicției.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 42-43',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-25',
      titlu: 'Recapitulare (partea 2/2)',
      obiective: [
        'Recapitulează conținuturile de redactare și comunicare orală din unitate.',
      ],
      sursaManual: 'Art 8, pp. 48-49 (partea 2/2, oră de curs)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare (partea 2/2)',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează conținuturile de redactare și comunicare orală din unitate.',
        ],
        resurse: [
          'Manual Art 8, pp. 48-49',
          'Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-25/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, redactare și comunicare orală” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Discuția cu observator, cerința 24',
            timp: '10 min',
            activitate: '– Grupe de cinci discută 6 minute dacă frumusețea fizică e importantă; observatorul completează grila de la p. 27 și raportează.',
          },
          {
            etapa: 'Opinii și comparații, cerințele 13-15',
            timp: '6 min',
            activitate: '– Frumusețea în afara sau în interiorul omului; frumusețea în creația artistului; comparația cu textele de bază.',
          },
          {
            etapa: 'Pregătirea compunerii, cerința 25',
            timp: '8 min',
            activitate: '– Fiecare își face planul comparației dintre „Izvorul nopții” și „Școala frumuseții”: portretele, trei figuri de stil din fiecare poezie.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (grila de redactare) și ex. 2 (roluri în discuție), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '5 min',
            activitate: '– Quizul „Recapitulare, redactare și comunicare orală”, frontal.',
          },
          {
            etapa: 'Pregătirea evaluării',
            timp: '5 min',
            activitate: '– Anunț proba de ora viitoare: o poezie nouă, zece cerințe de limbă și lectură (partea A) și o compunere de cel puțin 200 de cuvinte despre semnificația poeziei, cu reperele exersate (partea B).\n– Ce recitesc acasă: notițele despre textul liric, versificație, figurile de stil, categoriile semantice, formarea cuvintelor, registre, fonetică.',
          },
          {
            etapa: 'Temă',
            timp: '5 min',
            activitate: '– Tema: cerința 25 (compunerea, cu feedbackul unui coleg); opțional, cerința 26; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Grilele observatorilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/unitatea-1/lectia-25/fisa-exercitii.pdf' },
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, redactare și comunicare orală',
          pasi: [
            {
              intrebare: 'Ce este feedbackul în redactare?',
              variante: [
                { text: 'procesul prin care observațiile și sugestiile despre o lucrare sunt folosite de autor ca să o îmbunătățească', corect: true, explicatie: 'Cine îl oferă face sugestii concrete, într-un limbaj clar; cine îl primește îl înțelege, îl interpretează și îl folosește.' },
                { text: 'nota pe care o primește lucrarea', corect: false, explicatie: 'Feedbackul e format din observații și sugestii, nu dintr-o notă.' },
                { text: 'transcrierea textului pe curat', corect: false, explicatie: 'Aceea este editarea, o etapă ulterioară.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 44-45',
            },
            {
              intrebare: 'Care sunt, în ordine, etapele unei bune redactări?',
              variante: [
                { text: 'pregătirea pentru scriere, prima variantă pe ciornă, revizuirea, editarea, publicarea', corect: true, explicatie: 'Revizuirea integrează feedbackul; editarea corectează ortografia și punctuația; publicarea e prezentarea.' },
                { text: 'publicarea, ciorna, pregătirea, editarea', corect: false, explicatie: 'Ordinea e greșită: pregătirea vine prima, publicarea ultima.' },
                { text: 'editarea, pregătirea, revizuirea', corect: false, explicatie: 'Editarea e penultima etapă, nu prima.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 44-45',
            },
            {
              intrebare: 'Ce rol au elementele grafice care însoțesc un text?',
              variante: [
                { text: 'sunt mesaje vizuale cu funcții diverse: să emoționeze, să informeze, să convingă, să amuze', corect: true, explicatie: 'Lectura unei imagini are două procese rapide: identificarea și interpretarea.' },
                { text: 'înlocuiesc complet textul scris', corect: false, explicatie: 'Ele însoțesc textul, îl fac mai ușor de înțeles sau mai impresionant.' },
                { text: 'nu au niciun cod propriu', corect: false, explicatie: 'Au un limbaj universal, cu un cod propriu.' },
              ],
              indiciu: null, sursa: 'Art 8, pp. 46-47',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-26',
      titlu: 'Evaluare',
      obiective: [
        'Susține testul de evaluare sumativă pentru unitate.',
      ],
      sursaManual: 'Art 8, p. 50',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluare',
        data: null,
        tipOra: 'Evaluare',
        durata: 50,
        obiective: [
          'Susține testul de evaluare sumativă pentru unitate.',
        ],
        resurse: [
          'Testul tipărit, Manual Art 8, p. 50',
          'Barem de corectare din Ghidul profesorului',
        ],
        desfasurare: [
          {
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul (poezia „Minunea” de Ana Blandiana, p. 50).\n– Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (compunere de cel puțin 200 de cuvinte despre semnificația poeziei, cu cele patru repere), 10 puncte din oficiu.\n– Timpul orientativ: 5 minute pentru citirea textului, 18 pentru partea A, 17 pentru compunere; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.\n– Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să verifice cele patru repere ale compunerii și paragrafele.',
          },
          {
            etapa: 'Strângerea lucrărilor',
            timp: '5 min',
            activitate: '– Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.',
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
