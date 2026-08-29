// Unitatea II: De-a ce mă joc — clasa a V-a
// Sursă: Limba și literatura română, manual Art Klett (Sâmihăian, Dobra, Halaszi,
// Davidoiu-Roman), Ghidul profesorului, proiectarea pe unități de învățare
// 2022-2023, planificarea calendaristică. Numerotarea urmează manualul însuși
// (cuprins, pp. 6, 8-9): L1 până la L17, exact convenția stabilită la
// Unitatea I. Singurele excepții, unde manualul tratează o lecție ca bloc de
// 2 ore fără să-l despartă în două scenarii separate, dar conținutul celor
// două ore diferă real (redactarea, recapitularea), sunt despărțite mai jos
// în câte 2 lecții de site, organizare proprie, nu segmentare dată de sursă,
// la fel cum s-a procedat la Unitatea I.
//
// Paginile au fost verificate direct în cuprinsul din Art 5.pdf (pp. 6, 8-9).
//
// rezolvareGhid rămâne null aici intenționat, document intern, nu se publică.
// planLectie conține o schiță de plan în 6 pași (momentele lecției), afișată
// pe site sub eticheta discretă „Doar profesor” din PlanProfesor.tsx.
// Planurile ERR mai vechi din notite-profesor/ rămân neatinse, sunt altă formă.
//
// Materiale: schema pentru lecțiile 11 (Verbul, predicatul verbal) și 16
// (Modul imperativ). Joc pentru 10 (Reguli de acces la cuvânt), 21 și 22
// (recapitulare). Restul rămân null, listate în materiale-restante.md.

export const unitatea2 = {
  id: 'unitatea-2',
  titlu: 'Unitatea II: De-a ce mă joc',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Textul narativ literar. Vizită... de I.L. Caragiale',
      obiective: [
        'Identifică informații esențiale din textul narativ Vizită... de I.L. Caragiale.',
      ],
      sursaManual: 'Art 5, Lecția 1, p. 42 (Vizită... de I.L. Caragiale); Ghidul profesorului',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ literar. Vizită... de I.L. Caragiale',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul narativ Vizită... de I.L. Caragiale.',
        ],
        resurse: [
          'Manual Art 5, p. 42',
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
            activitate: 'Îi întreb pe elevi cum se poartă când sunt musafiri în casă și ce fac musafirii care aduc copii cu ei.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim schița Vizită... de I.L. Caragiale și că la final elevii vor putea desprinde informațiile esențiale din text.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintesc ce este un text narativ și cum recunoaștem informațiile importante, pornind de la textele din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc textul cu voce tare împreună cu elevii, clarific cuvintele și expresiile de epocă și discutăm firul întâmplărilor, cu exemplele de la p. 42.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează în caiet cine, unde, când și ce se întâmplă în text și citește răspunsurile.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea informațiilor esențiale notate în caiet.',
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
      id: 'lectia-2',
      titlu: 'Timp, spațiu și acțiune',
      obiective: [
        'Recunoaște reperele temporale și spațiale ale acțiunii și ordonează cronologic ideile principale ale textului Vizită...',
      ],
      sursaManual: 'Art 5, Lecția 2, p. 45',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Timp, spațiu și acțiune',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Recunoaște reperele temporale și spațiale ale acțiunii și ordonează cronologic ideile principale ale textului Vizită...',
        ],
        resurse: [
          'Manual Art 5, p. 45',
          'Schema „Timp, spațiu și acțiune” (/materiale/clasa-5/unitatea-2/lectia-2/schema.svg)',
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
            activitate: 'Îi întreb pe elevi în cât timp cred că se petrece toată vizita din text, într-o oră, într-o zi, într-un an.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi identificăm când și unde se petrece acțiunea și punem ideile textului în ordine cronologică.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Recapitulăm informațiile esențiale desprinse ora trecută și planul simplu de idei învățat în Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul schemei lecției identificăm reperele de timp și de spațiu ale acțiunii și ordonăm împreună ideile principale, cu exemplele de la p. 45.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează în caiet o axă a timpului cu momentele vizitei, în ordine.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea axei timpului completate.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-2/schema.svg', titlu: 'Timp, spațiu și acțiune' },
        altele: [],
      },
    },
    {
      id: 'lectia-3',
      titlu: 'Planul dezvoltat de idei',
      obiective: [
        'Alcătuiește planul dezvoltat de idei al unui text narativ, pe baza unui organizator grafic.',
      ],
      sursaManual: 'Art 5, Lecția 3, p. 47',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Planul dezvoltat de idei',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Alcătuiește planul dezvoltat de idei al unui text narativ, pe baza unui organizator grafic.',
        ],
        resurse: [
          'Manual Art 5, p. 47',
          'Schema „Planul dezvoltat de idei” (/materiale/clasa-5/unitatea-2/lectia-3/schema.svg)',
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
            activitate: 'Le arăt elevilor planul simplu de idei al textului și îi întreb ce informații lipsesc pentru cineva care nu a citit textul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că trecem de la planul simplu la planul dezvoltat de idei, care adaugă și ideile secundare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm planul simplu de idei și ordonarea cronologică a ideilor, lucrate în lecțiile anterioare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul schemei și a organizatorului grafic construim împreună planul dezvoltat de idei al textului Vizită..., adăugând la fiecare idee principală ideile secundare, cu exemplele de la p. 47.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '8 min',
            activitate: 'Fiecare elev completează în organizatorul grafic ideile secundare pentru două idei principale date.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea planului dezvoltat completat.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-3/schema.svg', titlu: 'Planul dezvoltat de idei' },
        altele: [],
      },
    },
    {
      id: 'lectia-4',
      titlu: 'Personajele',
      obiective: [
        'Identifică personajele și trăsăturile lor fizice și morale în textul Vizită...',
      ],
      sursaManual: 'Art 5, Lecția 4, pp. 48-49',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Personajele',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Identifică personajele și trăsăturile lor fizice și morale în textul Vizită...',
        ],
        resurse: [
          'Manual Art 5, pp. 48-49',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-4/fisa.pdf)',
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
            activitate: 'Le cer elevilor să numească personajele din text așa cum și le amintesc și scriu lista pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi descriem personajele după trăsăturile lor fizice și morale, cu dovezi din text.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reamintesc, de la textul „Prietenul meu”, cum deosebim o trăsătură fizică de una morală.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției identificăm trăsăturile lui Ionel și ale mamei, căutăm în text faptele și vorbele care le dovedesc, cu exemplele de la pp. 48-49.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev completează o fișă de caracterizare cu două trăsături ale unui personaj la alegere și dovada din text pentru fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea fișei de caracterizare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-4/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-5',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează o opinie despre semnificația textului Vizită..., raportată la imaginea copilului în epocă.',
      ],
      sursaManual: 'Art 5, Lecția 5, p. 50',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează o opinie despre semnificația textului Vizită..., raportată la imaginea copilului în epocă.',
        ],
        resurse: [
          'Manual Art 5, p. 50',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-5/fisa.pdf)',
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
            activitate: 'Recitesc cu elevii finalul textului și îi întreb dacă li se pare o întâmplare amuzantă, tristă sau altceva.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi discutăm ce vrea să spună textul despre cum era privit și crescut un copil în vremea lui Caragiale și ne formulăm o părere.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm trăsăturile personajelor stabilite ora trecută, mai ales purtarea lui Ionel și atitudinea mamei.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '25 min',
            activitate: 'Cu ajutorul fișei lecției ghidez discuția despre semnificația textului și imaginea copilului în epocă, cerând argumente din text, cu exemplele de la p. 50.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '9 min',
            activitate: 'Fiecare elev scrie o opinie de trei sau patru rânduri despre mesajul textului, sprijinită pe un detaliu din text.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea opiniei scrise și a argumentului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-5/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-6',
      titlu: 'Text auxiliar. Exuvii de Simona Popescu (fragment)',
      obiective: [
        'Compară textul auxiliar Exuvii de Simona Popescu cu textul de bază al unității, folosind jurnalul cu dublă intrare.',
      ],
      sursaManual: 'Art 5, Lecția 6, „Noi pagini, alte idei”, pp. 51-52 (Exuvii de Simona Popescu)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Exuvii de Simona Popescu (fragment)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Compară textul auxiliar Exuvii de Simona Popescu cu textul de bază al unității, folosind jurnalul cu dublă intrare.',
        ],
        resurse: [
          'Manual Art 5, pp. 51-52',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-6/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce jocuri de copii își amintesc și dacă își mai amintesc cum se simțeau atunci.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un fragment din Exuvii de Simona Popescu și îl comparăm cu Vizită..., folosind jurnalul cu dublă intrare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm tema și semnificațiile textului Vizită..., ca termen de comparație.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citesc fragmentul din Exuvii, clarific cuvintele necunoscute și completăm împreună jurnalul cu dublă intrare, citat din text pe o coloană, comentariul elevilor pe cealaltă, cu exemplele de la pp. 51-52.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev completează în jurnalul cu dublă intrare un rând propriu: un citat din Exuvii și un scurt comentariu care îl leagă de Vizită...',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea jurnalului cu dublă intrare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-6/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-7',
      titlu: 'Diversitate culturală: jocuri de ieri și de azi',
      obiective: [
        'Compară cuvintele care denumesc jocul în mai multe limbi și recunoaște jocul ca punte între culturi diferite.',
      ],
      sursaManual: 'Art 5, Lecția 7, pp. 53-54',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Diversitate culturală: jocuri de ieri și de azi',
        data: null,
        tipOra: 'Interculturalitate',
        durata: 50,
        obiective: [
          'Compară cuvintele care denumesc jocul în mai multe limbi și recunoaște jocul ca punte între culturi diferite.',
        ],
        resurse: [
          'Manual Art 5, pp. 53-54',
          'Infograficul „Jocuri de ieri și de azi” (/materiale/clasa-5/unitatea-2/lectia-7/infografic.svg)',
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
            activitate: 'Îi întreb pe elevi ce jocuri jucau bunicii lor și dacă știu cum se numesc aceleași jocuri în alte limbi.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi comparăm cuvintele pentru joc în mai multe limbi și vedem cum jocul leagă culturi diferite.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm noțiunea de câmp lexical din Unitatea I, fiindcă lucrăm cu cuvinte dintr-un câmp comun, jocul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Cu ajutorul infograficului comparăm denumirile jocului în mai multe limbi, discutăm jocurile de ieri și de azi și jocul ca punte între culturi, cu exemplele de la pp. 53-54.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '11 min',
            activitate: 'Fiecare elev alege un joc și notează cum se numește în două limbi și o asemănare între felul cum se joacă în culturi diferite.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea notării comparative.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: { fisier: '/materiale/clasa-5/unitatea-2/lectia-7/infografic.svg', titlu: 'Jocuri de ieri și de azi' },
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-8',
      titlu: 'Proiect individual. Jocuri fără vârstă (anunțare)',
      obiective: [
        'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului individual Jocuri fără vârstă.',
      ],
      sursaManual: 'Art 5, Proiect individual, p. 55',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect individual. Jocuri fără vârstă (anunțare)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului individual Jocuri fără vârstă.',
        ],
        resurse: [
          'Manual Art 5, p. 55',
          'Fișa proiectului (/materiale/clasa-5/unitatea-2/lectia-8/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce joc ar alege să prezinte colegilor și de ce anume acela.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț tema proiectului individual Jocuri fără vârstă și faptul că azi înțelegem ce avem de făcut, până când și cum se notează.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reluăm etapele scrierii unui text din Unitatea I, fiindcă proiectul are și o parte scrisă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Prezint pas cu pas fișa proiectului: tema, produsele cerute, calendarul și criteriile de evaluare, cu exemplele de la p. 55, și răspund la întrebări.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev completează în fișă alegerea temei, sursele la care se gândește și primii doi pași pe care îi va face acasă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea fișei de pornire a proiectului.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-8/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Schimburi de replici în dialog',
      obiective: [
        'Construiește, prin joc de rol, un schimb de replici adecvat unei situații de comunicare date (invitație, reproș, compliment).',
      ],
      sursaManual: 'Art 5, Lecția 8, pp. 56-57',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Schimburi de replici în dialog',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Construiește, prin joc de rol, un schimb de replici adecvat unei situații de comunicare date (invitație, reproș, compliment).',
        ],
        resurse: [
          'Manual Art 5, pp. 56-57',
          'Quizul „Schimburi de replici în dialog” (materialul de joc al lecției)',
          'Bilețele cu situații de comunicare, pregătite de profesor',
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
            activitate: 'Le cer elevilor un exemplu de invitație pe care au primit-o sau au făcut-o recent și ce au răspuns.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi exersăm, prin joc de rol, schimburi de replici potrivite pentru invitație, reproș și compliment.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm rolurile de vorbitor și ascultător și comunicarea nonverbală, din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Analizăm modelele de dialog de la pp. 56-57, apoi elevii extrag bilețele cu situații și construiesc, în perechi, schimbul de replici potrivit, cu formule politicoase.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Câteva perechi joacă dialogul în fața clasei, apoi elevii rezolvă quizul „Schimburi de replici în dialog” și discutăm răspunsurile.',
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
          titlu: 'Schimburi de replici în dialog',
          pasi: [
            {
              intrebare: 'Ce urmează, de obicei, după o invitație, într-un schimb de replici politicos?',
              variante: [
                { text: 'Acceptarea sau refuzul invitației', corect: true, explicatie: 'O invitație cere un răspuns: accept sau refuz, motivat politicos.' },
                { text: 'Un reproș adresat celui care invită', corect: false, explicatie: 'Reproșul nu e răspunsul firesc la o invitație.' },
                { text: 'O poruncă', corect: false, explicatie: 'Porunca nu are legătură cu a răspunde unei invitații.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 56',
            },
            {
              intrebare: 'Ce răspuns e potrivit pentru un compliment, într-un dialog politicos?',
              variante: [
                { text: 'Mulțumirea', corect: true, explicatie: 'La un compliment, răspunsul firesc și politicos e mulțumirea.' },
                { text: 'Reproșul', corect: false, explicatie: 'Reproșul nu e un răspuns potrivit la un compliment.' },
                { text: 'Tăcerea totală', corect: false, explicatie: 'Un răspuns, chiar scurt, e mai potrivit decât tăcerea într-un dialog politicos.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 8, p. 56',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-10',
      titlu: 'Reguli de acces la cuvânt',
      obiective: [
        'Aplică regulile de acces la cuvânt într-o comunicare de grup, pe baza unui fragment din Vizită...',
      ],
      sursaManual: 'Art 5, Lecția 9, pp. 58-59',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Reguli de acces la cuvânt',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Aplică regulile de acces la cuvânt într-o comunicare de grup, pe baza unui fragment din Vizită...',
        ],
        resurse: [
          'Manual Art 5, pp. 58-59',
          'Quizul „Reguli de acces la cuvânt” (materialul de joc al lecției)',
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
            activitate: 'Îi întreb pe elevi ce se întâmplă când, într-o discuție, toată lumea vorbește deodată.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm și aplicăm regulile prin care, într-un grup, fiecare are rândul lui la cuvânt.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm schimburile de replici politicoase exersate ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Stabilim împreună regulile de acces la cuvânt, apoi le aplicăm într-o discuție de grup pornind de la un fragment din Vizită..., cu reperele de la pp. 58-59.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Grupele poartă o scurtă discuție respectând regulile, un elev observă și notează respectarea lor, apoi elevii rezolvă quizul „Reguli de acces la cuvânt”.',
          },
        ],
        evaluare: 'Observarea sistematică a discuției de grup; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: {
          tip: 'quiz',
          titlu: 'Reguli de acces la cuvânt',
          pasi: [
            {
              intrebare: 'Ce înseamnă regulile de acces la cuvânt, într-o discuție de grup?',
              variante: [
                { text: 'Fiecare vorbește la rândul lui, fără să întrerupă pe ceilalți', corect: true, explicatie: 'Regulile de acces la cuvânt organizează cine și când vorbește, ca discuția să rămână ordonată.' },
                { text: 'Doar cel mai în vârstă are voie să vorbească', corect: false, explicatie: 'Vârsta nu are legătură cu regulile de acces la cuvânt.' },
                { text: 'Vorbește cine strigă mai tare', corect: false, explicatie: 'Dimpotrivă, regulile există tocmai ca să nu domine cine vorbește mai tare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 9, p. 58',
            },
            {
              intrebare: 'De ce e importantă respectarea regulilor de acces la cuvânt într-o comunicare de grup?',
              variante: [
                { text: 'Ca toți participanții să fie ascultați și discuția să rămână ordonată', corect: true, explicatie: 'Fără reguli, discuția de grup riscă să devină haotică, iar unii participanți să nu fie ascultați.' },
                { text: 'Ca discuția să dureze cât mai mult', corect: false, explicatie: 'Durata discuției nu e scopul regulilor de acces la cuvânt.' },
                { text: 'Ca un singur vorbitor să domine tot timpul', corect: false, explicatie: 'Exact opusul: regulile împart cuvântul echitabil între participanți.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 9, p. 58',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-11',
      titlu: 'Verbul. Predicatul verbal',
      obiective: [
        'Reactualizează categoriile gramaticale ale verbului, formele verbale nepersonale (infinitivul) și identifică predicatul verbal.',
      ],
      sursaManual: 'Art 5, Lecția 10, p. 60',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul. Predicatul verbal',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează categoriile gramaticale ale verbului, formele verbale nepersonale (infinitivul) și identifică predicatul verbal.',
        ],
        resurse: [
          'Manual Art 5, p. 60',
          'Schema „Verbul. Predicatul verbal” (/materiale/clasa-5/unitatea-2/lectia-11/schema.svg)',
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
            activitate: 'Le cer elevilor cât mai multe verbe legate de joacă și le scriu pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm ce știm despre verb, adăugăm infinitivul și învățăm să recunoaștem predicatul verbal.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm, cu exemple, ce este verbul, persoana și numărul, noțiuni din ciclul primar și din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției reactualizez categoriile verbului, prezint infinitivul ca formă nepersonală și arăt cum identificăm predicatul verbal, cu exemplele de la p. 60.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev subliniază predicatele verbale din cinci propoziții date și trece două verbe la infinitiv.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de identificare a predicatului verbal.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-11/schema.svg', titlu: 'Verbul. Predicatul verbal' },
        altele: [],
      },
    },
    {
      id: 'lectia-12',
      titlu: 'Modul indicativ. Prezentul',
      obiective: [
        'Recunoaște formele modului indicativ, timpul prezent, și le folosește corect, ortografic și ortoepic, în comunicare.',
      ],
      sursaManual: 'Art 5, Lecția 11, p. 62',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modul indicativ. Prezentul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște formele modului indicativ, timpul prezent, și le folosește corect, ortografic și ortoepic, în comunicare.',
        ],
        resurse: [
          'Manual Art 5, p. 62',
          'Schema „Modul indicativ. Prezentul” (/materiale/clasa-5/unitatea-2/lectia-12/schema.svg)',
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
            activitate: 'Le cer elevilor să conjuge oral, în lanț, un verb la prezent, pe persoane și numere.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi studiem modul indicativ, timpul prezent, și scrierea corectă a formelor lui.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm categoriile verbului și predicatul verbal din lecția precedentă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic ce arată modul indicativ și formele prezentului, insist pe scrierea corectă a verbelor cu forme greu de reținut, cu exemplele de la p. 62.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev completează un text lacunar cu verbe la prezentul indicativ, corect ortografic, apoi verificăm împreună.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea textului lacunar completat.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-12/schema.svg', titlu: 'Modul indicativ. Prezentul' },
        altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Imperfectul',
      obiective: [
        'Recunoaște formele modului indicativ, timpul imperfect, și le folosește corect în comunicare.',
      ],
      sursaManual: 'Art 5, Lecția 12, p. 64',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Imperfectul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște formele modului indicativ, timpul imperfect, și le folosește corect în comunicare.',
        ],
        resurse: [
          'Manual Art 5, p. 64',
          'Schema „Imperfectul” (/materiale/clasa-5/unitatea-2/lectia-13/schema.svg)',
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
            activitate: 'Le cer elevilor să povestească pe scurt ce făceau când erau mici, iar eu subliniez verbele folosite.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm imperfectul, timpul care arată o acțiune trecută care ținea sau se repeta.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm prezentul indicativ învățat ora trecută, ca punct de plecare pentru comparație.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic formarea imperfectului și ce fel de acțiune trecută exprimă, cu exemplele de la p. 64, și rezolvăm împreună primele exerciții.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev rescrie la imperfect trei propoziții date la prezent și explică ce s-a schimbat în sens.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de trecere la imperfect.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-13/schema.svg', titlu: 'Imperfectul' },
        altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Verbul auxiliar a avea. Participiul. Perfectul compus',
      obiective: [
        'Recunoaște verbul auxiliar a avea, participiul și formarea perfectului compus.',
      ],
      sursaManual: 'Art 5, Lecția 13, p. 66',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Verbul auxiliar a avea. Participiul. Perfectul compus',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște verbul auxiliar a avea, participiul și formarea perfectului compus.',
        ],
        resurse: [
          'Manual Art 5, p. 66',
          'Schema „Verbul auxiliar a avea. Participiul. Perfectul compus” (/materiale/clasa-5/unitatea-2/lectia-14/schema.svg)',
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
            activitate: 'Le cer elevilor exemple de acțiuni pe care le-au terminat deja în ziua respectivă și scriu verbele pe tablă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi vedem cum se formează perfectul compus, cu verbul auxiliar a avea și participiul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm imperfectul și prezentul, cele două timpuri deja studiate în unitate.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic rolul auxiliarului a avea, ce este participiul și cum se alcătuiește perfectul compus, cu exemplele de la p. 66.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev formează perfectul compus pentru cinci verbe date și subliniază auxiliarul și participiul în fiecare formă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de formare a perfectului compus.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-14/schema.svg', titlu: 'Verbul auxiliar a avea. Participiul. Perfectul compus' },
        altele: [],
      },
    },
    {
      id: 'lectia-15',
      titlu: 'Perfectul simplu și mai-mult-ca-perfectul',
      obiective: [
        'Recunoaște formele perfectului simplu și ale mai-mult-ca-perfectului și diferența de folosire față de perfectul compus.',
      ],
      sursaManual: 'Art 5, Lecția 14, p. 68',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Perfectul simplu și mai-mult-ca-perfectul',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște formele perfectului simplu și ale mai-mult-ca-perfectului și diferența de folosire față de perfectul compus.',
        ],
        resurse: [
          'Manual Art 5, p. 68',
          'Schema „Perfectul simplu și mai-mult-ca-perfectul” (/materiale/clasa-5/unitatea-2/lectia-15/schema.svg)',
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
            activitate: 'Le citesc două fraze de poveste cu verbe la perfectul simplu și îi întreb dacă așa vorbesc și în viața de zi cu zi.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm perfectul simplu și mai-mult-ca-perfectul și când se folosește fiecare.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm perfectul compus învățat ora trecută, ca termen de comparație.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic formele perfectului simplu și ale mai-mult-ca-perfectului și diferența de folosire față de perfectul compus, mai ales în textul literar, cu exemplele de la p. 68.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev identifică într-un fragment narativ verbele la perfect simplu și la mai-mult-ca-perfect și explică ce acțiune arată fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea exercițiului de identificare a timpurilor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-15/schema.svg', titlu: 'Perfectul simplu și mai-mult-ca-perfectul' },
        altele: [],
      },
    },
    {
      id: 'lectia-16',
      titlu: 'Viitorul. Verbele auxiliare a vrea și a fi',
      obiective: [
        'Recunoaște timpul viitor și verbele auxiliare a vrea și a fi, folosite la formarea lui.',
      ],
      sursaManual: 'Art 5, Lecția 15, p. 70',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Viitorul. Verbele auxiliare a vrea și a fi',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște timpul viitor și verbele auxiliare a vrea și a fi, folosite la formarea lui.',
        ],
        resurse: [
          'Manual Art 5, p. 70',
          'Schema „Viitorul. Verbele auxiliare a vrea și a fi” (/materiale/clasa-5/unitatea-2/lectia-16/schema.svg)',
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
            activitate: 'Îi întreb pe elevi ce vor face în vacanță și notez pe tablă formele de viitor pe care le folosesc.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi studiem timpul viitor și formele lui, cu auxiliarele a vrea și a fi.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Recapitulăm timpurile trecute studiate în unitate și prezentul, ca să așezăm viitorul pe axa timpului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției prezint formele viitorului, literar și popular, și rolul auxiliarelor a vrea și a fi, cu exemplele de la p. 70.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev scrie patru propoziții despre planurile lui, cu verbe la viitor, și subliniază auxiliarul din fiecare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea propozițiilor la viitor.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-16/schema.svg', titlu: 'Viitorul. Verbele auxiliare a vrea și a fi' },
        altele: [],
      },
    },
    {
      id: 'lectia-17',
      titlu: 'Modul imperativ',
      obiective: [
        'Recunoaște modul imperativ, formele afirmative și negative, cu respectarea normelor de ortografie.',
      ],
      sursaManual: 'Art 5, Lecția 16, p. 72',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Modul imperativ',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Recunoaște modul imperativ, formele afirmative și negative, cu respectarea normelor de ortografie.',
        ],
        resurse: [
          'Manual Art 5, p. 72',
          'Schema „Modul imperativ” (/materiale/clasa-5/unitatea-2/lectia-16/schema.svg)',
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
            activitate: 'Le citesc câteva instrucțiuni de joc, „amestecă, aruncă zarul, nu trișa”, și îi întreb ce au în comun verbele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi învățăm modul imperativ, cu formele lui afirmative și negative și scrierea lor corectă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '7 min',
            activitate: 'Reluăm ce arată modul indicativ, ca să deosebim o acțiune reală de o poruncă sau un îndemn.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei lecției explic ce exprimă imperativul, formele afirmative și negative și regulile de ortografie, mai ales negativul la persoana a doua singular, cu exemplele de la p. 72.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev scrie regulile unui joc în cinci propoziții la imperativ, două dintre ele la forma negativă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea regulilor de joc scrise la imperativ.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: { fisier: '/materiale/clasa-5/unitatea-2/lectia-16/schema.svg', titlu: 'Modul imperativ' },
        altele: [],
      },
    },
    {
      id: 'lectia-18',
      titlu: 'Textul narativ ficțional (I), pregătire',
      obiective: [
        'Recunoaște trăsăturile textului narativ ficțional, pe baza unui text-stimul.',
      ],
      sursaManual: 'Art 5, Lecția 17, p. 74, partea 1/2 (Textul narativ ficțional, pregătire)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ ficțional (I), pregătire',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Recunoaște trăsăturile textului narativ ficțional, pe baza unui text-stimul.',
        ],
        resurse: [
          'Manual Art 5, p. 74',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-18/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi ce poveste inventată le-a plăcut cel mai mult și ce o făcea captivantă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi pregătim redactarea unui text narativ ficțional și îi recunoaștem trăsăturile pe un text-stimul.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '6 min',
            activitate: 'Reluăm reperele textului narativ, timp, spațiu, acțiune, personaje, plan de idei, lucrate la începutul unității.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Cu ajutorul fișei lecției analizăm textul-stimul, identificăm narator, personaje, fir narativ și momente ale acțiunii și stabilim planul viitoarei compuneri, cu reperele de la p. 74.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '10 min',
            activitate: 'Fiecare elev notează în fișă ideea de poveste, personajele și planul dezvoltat pentru textul pe care îl va scrie ora următoare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; verificarea planului de pregătire a compunerii.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-18/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-19',
      titlu: 'Textul narativ ficțional (II), redactare',
      obiective: [
        'Redactează un text narativ ficțional, cu respectarea etapelor scrierii și a planului unei compuneri.',
      ],
      sursaManual: 'Art 5, Lecția 17, p. 75, partea 2/2 (Textul narativ ficțional, redactare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul narativ ficțional (II), redactare',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează un text narativ ficțional, cu respectarea etapelor scrierii și a planului unei compuneri.',
        ],
        resurse: [
          'Manual Art 5, p. 75',
          'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-19/fisa.pdf)',
          'Planul realizat la ora anterioară',
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
            activitate: 'Le cer elevilor să recitească planul notat ora trecută și să spună în ce moment al povestirii se blochează.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi scriem textul narativ ficțional pe baza planului și îl revizuim.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm etapele scrierii și structura introducere-cuprins-încheiere din Unitatea I.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '19 min',
            activitate: 'Cu ajutorul fișei lecției reamintesc cum se leagă momentele acțiunii și ce urmărim la revizuire, cu exemplele de la p. 75.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Fiecare elev redactează textul narativ ficțional pe baza planului, apoi îl schimbă cu colegul pentru o revizuire reciprocă după lista de control din fișă.',
          },
        ],
        evaluare: 'Grilă de autoevaluare din fișă; observarea sistematică a redactării și a revizuirii reciproce.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-19/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Prezentarea proiectului individual Jocuri fără vârstă',
      obiective: [
        'Prezintă și evaluează proiectul individual Jocuri fără vârstă, conform criteriilor stabilite.',
      ],
      sursaManual: 'Art 5, Proiect individual, p. 55 (prezentare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului individual Jocuri fără vârstă',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Prezintă și evaluează proiectul individual Jocuri fără vârstă, conform criteriilor stabilite.',
        ],
        resurse: [
          'Manual Art 5, p. 55',
          'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-2/lectia-20/fisa.pdf)',
          'Produsele proiectelor elevilor',
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
            activitate: 'Le amintesc elevilor că azi își arată unii altora munca de câteva săptămâni și că ascultăm fiecare prezentare cu atenție.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că se prezintă proiectele Jocuri fără vârstă și că fiecare prezentare se evaluează după criteriile din fișă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Recapitulăm criteriile de evaluare și regulile de acces la cuvânt, pentru discuția de după fiecare prezentare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '8 min',
            activitate: 'Prezint eu însămi, pe scurt, un model de prezentare bună, cu ce trebuie spus și cât timp are fiecare elev.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '31 min',
            activitate: 'Elevii își prezintă pe rând proiectele, colegii pun câte o întrebare, iar eu completez fișa de evaluare pentru fiecare, după criterii.',
          },
        ],
        evaluare: 'Evaluarea proiectului după criteriile din fișă; observarea sistematică a prezentării și a feedbackului între colegi.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { fisier: '/materiale/clasa-5/unitatea-2/lectia-20/fisa.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, acțiune, planul dezvoltat de idei.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 76-77, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, acțiune, planul dezvoltat de idei.',
        ],
        resurse: [
          'Manual Art 5, pp. 76-77',
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
            activitate: 'Îi rog pe elevi să spună pe rând câte o noțiune de lectură învățată în unitate.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm reperele de timp, spațiu și acțiune, planul dezvoltat de idei și regulile de comunicare din unitate.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple din Vizită..., cum identificăm timpul, spațiul și momentele acțiunii și cum trecem de la planul simplu la cel dezvoltat.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Rezolvăm ghidat exercițiile de lectură și comunicare de la pp. 76-77.',
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
              intrebare: 'Ce arată reperele temporale și spațiale ale acțiunii, într-un text narativ?',
              variante: [
                { text: 'Când și unde se petrec întâmplările', corect: true, explicatie: 'Reperele temporale și spațiale situează acțiunea în timp și în spațiu.' },
                { text: 'Cine sunt personajele', corect: false, explicatie: 'Personajele se identifică separat, nu prin reperele de timp și spațiu.' },
                { text: 'Care e tema textului', corect: false, explicatie: 'Tema e altă componentă a textului, nu ține de timp și spațiu.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 2, p. 45',
            },
            {
              intrebare: 'Ce este planul dezvoltat de idei?',
              variante: [
                { text: 'O listă mai detaliată a ideilor principale și secundare ale textului', corect: true, explicatie: 'Spre deosebire de planul simplu, planul dezvoltat adaugă și ideile secundare.' },
                { text: 'Un rezumat scurt, de o singură propoziție', corect: false, explicatie: 'Planul dezvoltat e mai amplu decât un rezumat de o propoziție.' },
                { text: 'Titlul textului', corect: false, explicatie: 'Titlul nu are legătură cu planul de idei.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 3, p. 47',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-22',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile și timpurile învățate.',
      ],
      sursaManual: 'Art 5, Recapitulare, pp. 76-77, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile și timpurile învățate.',
        ],
        resurse: [
          'Manual Art 5, pp. 76-77',
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
            activitate: 'Le cer elevilor să numească pe rând un timp al verbului învățat în unitate și un exemplu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm verbul, modul indicativ cu timpurile lui și modul imperativ.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm, cu exemple la tablă, prezentul, imperfectul, perfectul compus, perfectul simplu, mai-mult-ca-perfectul, viitorul și imperativul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat exercițiile de gramatică și redactare de la pp. 76-77.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '16 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi cei care termină exersează trecerea unui scurt text dintr-un timp în altul.',
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
              intrebare: 'Care e diferența dintre perfectul compus și perfectul simplu?',
              variante: [
                { text: 'Perfectul compus se folosește în limba vorbită, perfectul simplu doar în literatură', corect: true, explicatie: 'Perfectul simplu a dispărut din limba vorbită, fiind folosit azi doar în naratiunea literară.' },
                { text: 'Sunt exact același timp, doar denumiri diferite', corect: false, explicatie: 'Sunt timpuri diferite, cu forme și folosiri diferite.' },
                { text: 'Perfectul simplu arată o acțiune viitoare', corect: false, explicatie: 'Ambele timpuri arată acțiuni trecute, nu viitoare.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 14, p. 68',
            },
            {
              intrebare: 'Modul imperativ exprimă...',
              variante: [
                { text: 'o poruncă, un îndemn sau o rugăminte', corect: true, explicatie: 'Imperativul se adresează direct interlocutorului, cerându-i ceva.' },
                { text: 'o acțiune sigură, din trecut', corect: false, explicatie: 'Acțiunile sigure din trecut aparțin modului indicativ.' },
                { text: 'o acțiune posibilă, condiționată', corect: false, explicatie: 'Aceasta e mai degrabă zona modului condițional-optativ, învățat mai târziu.' },
              ],
              indiciu: null,
              sursa: 'Art 5, Lecția 16, p. 72',
            },
          ],
        },
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-23',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.',
      ],
      sursaManual: 'Art 5, Evaluare, p. 78',
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
          'Testul tipărit, Manual Art 5, p. 78',
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
            activitate: 'Anunț că se dă proba scrisă a Unității II, care verifică lectura, gramatica și redactarea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '3 min',
            activitate: 'Reamintesc pe scurt structura probei și repartizarea timpului între exerciții și redactare.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Distribui testele de la p. 78, citesc cerințele cu voce tare, explic punctajul și răspund la întrebările de clarificare.',
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
