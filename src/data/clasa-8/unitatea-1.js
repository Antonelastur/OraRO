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
            activitate: 'Îi întreb pe elevi ce loc din natură i-a impresionat cel mai mult și ce anume îl făcea frumos.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că deschidem unitatea despre frumusețe cu poezia O, rămâi... de Mihai Eminescu și că îi identificăm tema.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce știu din clasa a VII-a despre textul liric: eul liric, strofa, versul, deosebirea față de textul epic.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc expresiv poezia, clarific arhaismele și regionalismele, apoi urmărim împreună chemarea pădurii și tema frumuseții naturii, cu exemplele de la p. 10.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează tema poeziei și două versuri care o susțin, apoi câțiva citesc alegerea și o argumentează.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea temei și a versurilor alese.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-2/fisa.pdf)',
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
            activitate: 'Le cer elevilor să bată din palme ritmul unui vers din poezie și îi întreb de ce sună a cântec.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi analizăm cum e construită poezia: strofele, vocile care vorbesc și elementele de versificație.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm noțiunile de strofă, vers, rimă și măsură, învățate în clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției stabilim structura compozițională, identificăm vocile ficționale și analizăm rima, măsura și ritmul, cu exemplele de la p. 11.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează o fișă de versificație pentru o strofă la alegere: măsură, rimă, ritm, și o verificăm împreună.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea fișei de versificație.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-2/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-3/fisa.pdf)',
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
            activitate: 'Le rostesc rar un vers cu sunete repetate și îi întreb pe elevi ce aud, dincolo de înțelesul cuvintelor.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi recunoaștem figurile de stil din poezie și învățăm ce este aliterația și ce efect are.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Recapitulăm epitetul, metafora, comparația și personificarea, figuri cunoscute din clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției definim aliterația, o căutăm în text și discutăm ce sugerează sonoritatea ei, alături de celelalte figuri de stil, cu exemplele de la p. 12.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev identifică două figuri de stil în poezie, una dintre ele aliterație, și explică în scris efectul fiecăreia.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea comentariului la figurile de stil.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-3/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-4/fisa.pdf)',
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
            activitate: 'Recitesc finalul poeziei și îi întreb pe elevi de ce copilul nu mai poate rămâne în lumea pădurii.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm ce ne transmite poezia dincolo de peisaj și ne formulăm o părere proprie.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm tema, structura și figurile de stil identificate în lecțiile anterioare, ca bază pentru interpretare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției ghidez discuția despre pierderea inocenței și despărțirea de copilărie, cerând argumente din text, cu exemplele de la p. 13.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev scrie o opinie de câteva rânduri despre mesajul poeziei, sprijinită pe un vers anume.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea opiniei scrise și a argumentului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-4/fisa.pdf' },
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
            activitate: 'Îi întreb pe elevi cu ce ar compara ochii cuiva drag și notez pe tablă cele mai neașteptate răspunsuri.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim Izvorul nopții de Lucian Blaga și îi identificăm vocea, structura și cuvintele-cheie.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm ce am stabilit la Eminescu despre vocea ficțională și structura compozițională.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citesc poezia, clarific imaginile mai greu de pătruns, apoi identificăm împreună vocea ficțională, structura și cuvintele-cheie, și observăm versul liber, cu exemplele de la pp. 14-15.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează trei cuvinte-cheie ale poeziei și explică pe scurt de ce le-a ales.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea cuvintelor-cheie alese.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-6/fisa.pdf)',
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
            activitate: 'Le dau exemple de exagerări din vorbirea de zi cu zi, „ți-am spus de un milion de ori", și îi întreb dacă e o minciună sau altceva.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm hiperbola și o căutăm printre celelalte figuri de stil din poezia lui Blaga.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm aliterația și celelalte figuri de stil discutate la Eminescu.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției definim hiperbola ca exagerare intenționată, o identificăm în text și arătăm cum se combină cu metafora, cu exemplele de la p. 16.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev construiește două hiperbole proprii pe tema frumuseții și explică ce anume exagerează fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea hiperbolelor construite.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-6/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-7/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce culoare ar da poeziei lui Blaga, dacă ar picta-o, și de ce.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm semnificațiile poeziei și facem o interpretare proprie, în cuvinte sau în imagini.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm cuvintele-cheie și hiperbola identificate în lecțiile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției ghidez discuția despre lumină, mister și frumusețe, cu exemplele de la p. 17, apoi propun sarcinile de interpretare creativă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev alege o formă de interpretare, text scurt, desen sau titlu nou pentru poezie, și o motivează într-o frază.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea interpretării creative.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-7/fisa.pdf' },
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
            activitate: 'Le citesc primele versuri fără să spun autorul și îi întreb pe elevi dacă seamănă cu poeziile citite până acum.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim Lecția de citire de Nichita Stănescu și vedem prin ce se deosebește poezia modernă de cea a lui Eminescu.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm elementele de versificație clasică de la Eminescu și versul liber observat la Blaga.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citim poezia, discutăm limbajul neobișnuit și absența rimei și a măsurii fixe, și stabilim trăsăturile liricii secolului al XX-lea, cu exemplele de la pp. 18-19.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează un tabel cu trei deosebiri între poezia lui Eminescu și cea a lui Stănescu.',
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-9/fisa.pdf)',
          'Reproducerea operei de artă din manual',
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
            activitate: 'Le arăt reproducerea operei de artă din manual și îi întreb ce simt privind-o, înainte de orice explicație.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi punem față în față poezia lui Stănescu, o operă de artă plastică și poezia lui Eminescu.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm temele și mesajele celor trei poezii citite până acum în unitate.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției comparăm textul cu opera plastică și cu O, rămâi..., urmărind cum apare frumusețea în fiecare, cu exemplele de la p. 20.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev scrie o opinie despre semnificația poeziei, raportată la una dintre celelalte două opere.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea opiniei comparative.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-9/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-10/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi care dintre cele trei poezii le-a plăcut cel mai mult și de ce, fără să caute răspunsul corect.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi comparăm sistematic cele trei poezii, ca să vedem cum s-a schimbat poezia românească într-un secol.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, pentru fiecare poezie, tema, elementele de versificație și figurile de stil dominante.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '21 min',
            activitate: 'Cu ajutorul fișei lecției completăm împreună un tabel comparativ pe trei coloane, urmărind conținutul și structura, cu reperele de la p. 21.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev formulează în scris o concluzie despre felul în care se schimbă limbajul poetic de la Eminescu la Stănescu.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea tabelului și a concluziei.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-10/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-11/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce lucru obișnuit, văzut azi pe drumul spre școală, li s-a părut frumos.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un poet contemporan, Dan Coman, și căutăm frumusețea în lucruri de fiecare zi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile poeziei moderne observate la Stănescu.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citim textul, discutăm limbajul simplu și imaginile din cotidian și comparăm cu frumusețea solemnă din poeziile anterioare, cu ajutorul fișei lecției și al exemplelor de la pp. 22-23.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev scrie trei versuri proprii despre un lucru obișnuit, folosind limbajul direct al poeziei citite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea versurilor scrise.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-11/fisa.pdf' },
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
          'Infograficul „Valori culturale românești în lume” (/materiale/clasa-8/unitatea-1/lectia-12/infografic.svg)',
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
            activitate: 'Le arăt o imagine cu o sculptură de Brâncuși și îi întreb pe elevi ce cred că reprezintă, înainte să le spun titlul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vorbim despre artiști români recunoscuți în toată lumea și despre ce anume au schimbat ei în arta modernă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm ideea de frumusețe discutată la poeziile din unitate și o mutăm dinspre literatură spre sculptură și muzică.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul infograficului parcurgem contribuțiile lui Brâncuși, Enescu și ale altor creatori români, cu exemplele de la pp. 24-25.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev alege un creator român și notează trei lucruri prin care a schimbat arta timpului său.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea fișei despre creatorul ales.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Quizul „Strategii de ascultare activă” (materialul de joc al lecției)',
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
            activitate: 'Rog doi elevi să povestească ceva în același timp, celorlalți, apoi întreb ce au reținut din fiecare.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi exersăm ascultarea activă, adică felul de a asculta care îi arată vorbitorului că l-am înțeles.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm rolurile de vorbitor și ascultător și comunicarea nonverbală și paraverbală, din clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Parcurgem etapele ascultării active, concentrarea atenției, încurajarea vorbitorului, reflecția, feedbackul, și barierele care o împiedică, cu exemplele de la pp. 26-27, apoi elevii exersează în perechi.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Câțiva ascultători reformulează în fața clasei ce au auzit, apoi elevii rezolvă quizul „Strategii de ascultare activă" și discutăm răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a exercițiilor în perechi; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Categoriile semantice” (/materiale/clasa-8/unitatea-1/lectia-14/schema.svg)',
          'DEX',
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
            activitate: 'Scriu pe tablă cuvântul „broască" și îi întreb pe elevi câte lucruri diferite poate numi.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm și adâncim categoriile semantice: sinonime, antonime, omonime și cuvinte polisemantice.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm, cu exemple, sinonimele și antonimele învățate în clasele mai mici.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției separăm omonimia de polisemie, discutăm capcanele lor și lucrăm cu articolul de dicționar, cu exemplele de la pp. 28-30.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev rezolvă un set de exerciții în care distinge omonimele de cuvintele polisemantice și găsește sinonime potrivite contextului.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiilor de categorii semantice.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-14/schema.svg', titlu: 'Categoriile semantice' },
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
          'Schema „Derivarea. Compunerea” (/materiale/clasa-8/unitatea-1/lectia-15/schema.svg)',
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
            activitate: 'Le cer elevilor să formeze cât mai multe cuvinte pornind de la „frumos" și le scriu pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm cele două mijloace interne de îmbogățire a vocabularului, derivarea și compunerea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm rădăcina, prefixul și sufixul, noțiuni din clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției reluăm derivarea cu prefixe și sufixe, inclusiv cea parasintetică, și tipurile de compunere, cu exemplele de la pp. 31-33.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev analizează structura a șase cuvinte date, precizând mijlocul prin care s-au format.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea analizei cuvintelor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Conversiunea. Familia de cuvinte” (/materiale/clasa-8/unitatea-1/lectia-16/schema.svg)',
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
            activitate: 'Scriu „Frumosul din natură" și „un peisaj frumos" și îi întreb pe elevi ce s-a schimbat la cuvântul „frumos".',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm conversiunea, schimbarea valorii gramaticale, și construim familii de cuvinte.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm derivarea și compunerea din lecția precedentă și părțile de vorbire de bază.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției definim conversiunea, arătăm cum un adjectiv devine substantiv sau adverb, și construim împreună o familie lexicală, cu exemplele de la pp. 34-35.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev construiește familia lexicală a unui cuvânt dat și formulează două enunțuri cu același cuvânt în valori gramaticale diferite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea familiei lexicale și a enunțurilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
          'Schema „Împrumuturile” (/materiale/clasa-8/unitatea-1/lectia-17/schema.svg)',
          'DEX',
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
            activitate: 'Le cer elevilor cinci cuvinte folosite zilnic care li se par venite din engleză și le scriu pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vedem de unde vin cuvintele limbii române și cum se comportă împrumuturile.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm mijloacele interne de îmbogățire a vocabularului, ca să le opunem celor externe.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției discutăm fondul latin moștenit și împrumuturile, adaptate și neadaptate, și problema anglicismelor, cu exemplele de la pp. 36-37.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev clasifică opt cuvinte după origine și propune, unde există, echivalentul românesc pentru trei anglicisme.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea clasificării după origine.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-17/schema.svg', titlu: 'Împrumuturile' },
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
          'Schema „Registrele limbii” (/materiale/clasa-8/unitatea-1/lectia-18/schema.svg)',
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
            activitate: 'Îi întreb pe elevi cum îi cer o favoare unui prieten și cum i-ar cere aceeași favoare directorului școlii.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm registrele limbii și când e potrivit fiecare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm împrumuturile și anglicismele din lecția precedentă, multe dintre ele intrate prin registrul familiar.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției delimităm registrul solemn, standard și familiar și definim argoul și jargonul, cu exemplele de la pp. 38-39.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev rescrie un scurt mesaj din registrul familiar în cel standard și explică ce a schimbat.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea rescrierii în registru standard.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
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
        schema: { fisier: '/materiale/clasa-8/unitatea-1/lectia-18/schema.svg', titlu: 'Registrele limbii' },
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
          'Quizul „Fonetica” (materialul de joc al lecției)',
          'DOOM3',
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
            activitate: 'Le cer elevilor să pronunțe rar „ploaie" și „poet" și să observe ce se întâmplă cu vocalele alăturate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm și adâncim diftongul, triftongul și hiatul, plus pronunția cuvintelor străine.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm vocalele, consoanele și semivocalele și regula silabei, din clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu exemplele de la pp. 40-41 definim diftongul, triftongul și hiatul, exersăm despărțirea în silabe și discutăm pronunția împrumuturilor neadaptate, cu sprijinul DOOM3.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii rezolvă quizul „Fonetica", apoi corectăm împreună și exersăm pe cuvintele care au ridicat probleme.',
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-20/fisa.pdf)',
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
            activitate: 'Le citesc un scurt text în care se repetă supărător același substantiv și îi întreb pe elevi ce ar schimba.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm ce ține un text legat: coerența și anafora.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm pronumele și rolul lui de înlocuitor, învățat în clasele anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției definim anaforicul și antecedentul, arătăm ce părți de vorbire pot fi anaforice și discutăm regulile coerenței, cu exemplele de la pp. 42-43.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev rescrie un text dat, eliminând repetițiile prin anaforice potrivite, apoi verificăm împreună.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea textului rescris.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-20/fisa.pdf' },
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
          'Fișa lecției cu grila de evaluare (/materiale/clasa-8/unitatea-1/lectia-21/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi cum se simt când cineva le corectează o lucrare și ce fel de observație i-a ajutat cu adevărat.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem o ciornă și învățăm să dăm și să primim feedback folositor, pe baza unei grile.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm etapele scrierii cunoscute din clasele anterioare: pregătirea, ciorna, revizuirea, editarea, publicarea.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '20 min',
            activitate: 'Cu ajutorul fișei prezint grila de evaluare și regulile unui feedback util, concret și respectuos, cu exemplele de la pp. 44-45, apoi elevii redactează ciorna.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '14 min',
            activitate: 'Elevii schimbă ciornele în perechi și completează grila de feedback pentru textul colegului, cu două aprecieri și două sugestii.',
          },
        ],
        evaluare: 'Observarea sistematică a redactării; verificarea grilelor de feedback completate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-21/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-22/fisa.pdf)',
          'Ciornele și grilele de feedback de la ora anterioară',
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
            activitate: 'Le cer elevilor să recitească feedbackul primit și să spună care sugestie li se pare cea mai utilă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi rescriem textul integrând feedbackul, apoi îl edităm pentru prezentare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm diferența dintre revizuire, care schimbă conținutul, și editare, care corectează forma.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei arăt cum se transformă o sugestie în modificare concretă și ce se verifică la editare, ortografie, punctuație, acord, cu exemplele de la pp. 44-45.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Fiecare elev rescrie textul integrând feedbackul, îl editează și notează pe fișă ce anume a schimbat față de ciornă.',
          },
        ],
        evaluare: 'Grila de evaluare din fișă; verificarea textului final și a listei de modificări.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-22/fisa.pdf' },
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
          'Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-23/fisa.pdf)',
          'Textul editat la ora anterioară',
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
            activitate: 'Le arăt aceeași informație scrisă simplu și pusă într-o infografică și îi întreb care se reține mai ușor.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm ce rol au imaginile, schemele și elementele grafice care însoțesc un text.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm etapa de publicare din procesul scrierii, discutată la lecțiile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul fișei lecției discutăm funcțiile mesajului vizual, să emoționeze, să informeze, să convingă, să amuze, și cele două procese ale lecturii unei imagini, cu exemplele de la pp. 46-47.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev alege sau desenează un element grafic pentru textul redactat și explică în două rânduri ce adaugă el textului.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea elementului grafic și a motivării.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-8/unitatea-1/lectia-23/fisa.pdf' },
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
          'Quizul „Recapitulare, lectură și limbă română” (materialul de joc al lecției)',
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
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură sau de limbă învățată în unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm versificația, figurile de stil, categoriile semantice, formarea cuvintelor și fonetica.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple din cele trei poezii, măsura, rima, versul alb și liber, aliterația și hiperbola, apoi noțiunile de vocabular.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Rezolvăm ghidat exercițiile de lectură și limbă română de la pp. 48-49.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '15 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, lectură și limbă română", apoi discutăm răspunsurile greșite.',
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
          'Quizul „Recapitulare, redactare și comunicare orală” (materialul de joc al lecției)',
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
            activitate: 'Le cer elevilor să numească un lucru pe care l-au schimbat la textul propriu după feedbackul colegului.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm etapele scrierii, integrarea feedbackului, elementele grafice și ascultarea activă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm etapele redactării, regulile feedbackului util și strategiile de ascultare activă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de redactare și comunicare orală de la pp. 48-49.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, redactare și comunicare orală", apoi cei care termină pregătesc o scurtă prezentare orală a textului propriu.',
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
            activitate: 'Anunț că se dă proba scrisă a Unității I, care verifică lectura textului liric, limba română și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și repartizarea timpului între exerciții și redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 50, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
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
