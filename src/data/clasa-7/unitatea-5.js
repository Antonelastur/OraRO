// Unitatea V: Lumea de pe scenă — clasa a VII-a
// Sursă: manual Art Klett 2024, proiectarea pe unități 2024-2025 (pagini din
// coloana RESURSE). Convenție: ore de curs, „partea 1/2” / „partea 2/2” unde
// proiectarea alocă 2 ore unei singure lecții de conținut. Ultima unitate a
// clasei a VII-a construită structural.
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie conține
// o schiță de plan în 6 pași, afișată sub eticheta discretă „Doar profesor”.
//
// Materiale: fișe de lucru pentru lecțiile 1, 4, 5, 6, 7, 9, 10, 11, 17, 18
// (scripts/build_clasa7_fise.py). Scheme pentru 14 (Numeralul), 15 (Adverbul),
// 16 (Interjecția). Jocuri-quiz pentru 8, 12, 13 (comunicare orală) și 19, 20
// (recapitulare). Lecția 3 (structura textului dramatic) așteaptă o schemă;
// lecțiile 2 (prezentare) și 21 (probă scrisă) rămân fără material aici,
// listate în materiale-restante.md.

export const unitatea5 = {
  id: 'unitatea-5',
  titlu: 'Unitatea V: Lumea de pe scenă',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Proiect de grup. De la text la spectacol (anunțare)',
      obiective: [
        'Se familiarizează cu tema, grupele, sarcinile, calendarul și criteriile de evaluare ale proiectului de grup De la text la spectacol.',
      ],
      sursaManual: 'Art 7, Proiect de grup, p. 183 (anunțare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Proiect de grup. De la text la spectacol (anunțare)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Se familiarizează cu tema, grupele, sarcinile, calendarul și criteriile de evaluare ale proiectului de grup De la text la spectacol.',
        ],
        resurse: [
          'Manual Art 7, p. 183',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-1/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi dacă au jucat vreodată într-o serbare sau într-o piesă și ce rol le-ar plăcea într-un spectacol: pe scenă sau în culise.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț unitatea „Lumea de pe scenă” și proiectul care o străbate: fiecare grupă va pune în scenă piesa Vrem să vă dăruim câte o fereastră de Matei Vișniec.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim ce știm despre teatru din clasele anterioare: piesă, actor, scenă, spectatori.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Citim sarcina de la p. 183: trei grupe de 8-9 elevi, cu regizor, asistent al regizorului, trei actori, doi scenografi, unul sau doi tehnicieni de lumină și sunet. Explic jurnalul proiectului, ținut de asistent, afișul spectacolului și pașii pe cele trei săptămâni, de la împărțirea rolurilor la premieră. Citim grila de evaluare, cu cele șase criterii.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii se împart în grupe, își aleg rolurile și le notează pe fișa lecției, împreună cu calendarul. Distribuția actorilor se poate confirma după lectura piesei, ora următoare.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-1/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-2',
      titlu: 'Textul dramatic. Vrem să vă dăruim câte o fereastră de Matei Vișniec',
      obiective: [
        'Identifică informații esențiale din textul dramatic Vrem să vă dăruim câte o fereastră de Matei Vișniec, prin relectură pe scene.',
      ],
      sursaManual: 'Art 7, pp. 166-171 (Vrem să vă dăruim câte o fereastră de Matei Vișniec)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul dramatic. Vrem să vă dăruim câte o fereastră de Matei Vișniec',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică informații esențiale din textul dramatic Vrem să vă dăruim câte o fereastră de Matei Vișniec, prin relectură pe scene.',
        ],
        resurse: [
          'Manual Art 7, pp. 166-171',
          'Bilețele',
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
            activitate: 'Elevii spun cât mai multe cuvinte legate de teatru, apoi, în perechi, fac predicții despre piesă pornind de la cuvintele Doinița, ploaie, bibliotecă, tavan, Radu.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim piesa pe care o vom pune în scenă și o descoperim scenă cu scenă.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Îl prezint pe Matei Vișniec, pe baza textului de la p. 166: dramaturg, poet, romancier, stabilit la Paris în 1987, cu piese jucate în peste 30 de țări și piese pentru copii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Citesc model piesa, apoi elevii completează enunțurile impresiilor și verifică predicțiile. Relectura pe roluri se face scenă cu scenă, de fiecare dată cu alți trei elevi, iar în grupe de 4-6 elevii completează coloanele Ce s-a întâmplat? și De ce s-a întâmplat?, găsesc pasiunea fiecărui personaj, emoțiile trăite, personajul salvator și soluția ieșirii din labirint și dau un titlu fiecărei scene.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev scrie pe un bilețel un cuvânt care sintetizează textul și îl lipește pe tablă; comparăm cuvintele grupelor și găsim ce au în comun titlurile scenelor. Ca provocare, citim mărturisirea lui Borges despre paradisul-bibliotecă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-3',
      titlu: 'Textul dramatic. Structura, rolul indicațiilor scenice, autorul',
      obiective: [
        'Investighează structura textului dramatic și identifică indicațiile scenice.',
      ],
      sursaManual: 'Art 7, p. 172',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul dramatic. Structura, rolul indicațiilor scenice, autorul',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Investighează structura textului dramatic și identifică indicațiile scenice.',
        ],
        resurse: [
          'Manual Art 7, p. 172',
          'Schema „Textul dramatic. Structura. Indicațiile scenice” (/materiale/clasa-7/unitatea-5/lectia-3/schema.svg)',
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
            activitate: 'Îi întreb pe elevi dacă piesa lui Matei Vișniec a fost scrisă pentru a fi citită sau pentru a fi jucată și cât ar dura spectacolul.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim cum e alcătuit un text dramatic și la ce folosesc indicațiile autorului.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim dialogul și linia de dialog din textul narativ și comparăm punerea în pagină a piesei cu textele studiate până acum.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'În perechi, elevii despart în text ce s-ar auzi pe scenă de ce nu s-ar auzi și discută rolul celei de-a doua categorii. Cu ajutorul schemei fixăm Reperele de la p. 172: actul și scena, textul dialogat și replica, indicațiile autorului, didascaliile externe și interne.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii stabilesc câte acte și scene are piesa și după ce criteriu sunt delimitate scenele, grupează în externe și interne indicațiile de la începutul piesei, apoi, în grupe de 4-5, caută indicații pentru etichetele de la p. 172: deplasarea, gesturile, acțiunile, tonul vocii, destinatarul replicii, amenajarea scenei.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-3/schema.svg', titlu: 'Textul dramatic. Structura. Indicațiile scenice' }, altele: [] },
    },
    {
      id: 'lectia-4',
      titlu: 'Arta spectacolului. Personajul dramatic',
      obiective: [
        'Identifică persoanele implicate în realizarea unui spectacol și trăsăturile morale ale personajelor, realizând fișe de identitate.',
      ],
      sursaManual: 'Art 7, pp. 173-174',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Arta spectacolului. Personajul dramatic',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică persoanele implicate în realizarea unui spectacol și trăsăturile morale ale personajelor, realizând fișe de identitate.',
        ],
        resurse: [
          'Manual Art 7, pp. 173-174',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-4/fisa.pdf)',
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
            activitate: 'Privim desenul sălii de teatru în timpul repetițiilor de la p. 173 și căutăm actorii, apoi ghicim ce rol au ceilalți oameni de pe scenă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că aflăm cine lucrează la un spectacol și cum se construiește un personaj dramatic.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim indicațiile scenice de ora trecută și rolurile din grupele proiectului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Stabilim cine ar pune în practică indicațiile a-c de la p. 173 și cui îi e adresată sugestia cântecului final. Fixăm Reperele: originea cuvântului teatru și meseriile spectacolului, de la regizor la tehnicianul de sunet. Pe lista personajelor discutăm relația dintre Radu, Eliza și Doinița, apoi natura dublă a personajului dramatic și modurile în care e construit.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'În grupe de câte trei, elevii citesc pe roluri începutul scenei 2 și completează fișa Doiniței, apoi fișele de identitate ale lui Radu și Eliza, pe fișa lecției. Discutăm dacă piesa are un personaj principal.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișele de identitate ale personajelor.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-4/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-5',
      titlu: 'Rolul dialogului. Dialogul în textul scris și în spectacol',
      obiective: [
        'Identifică particularitățile dialogului dramatic și rolul lui în construcția personajelor.',
      ],
      sursaManual: 'Art 7, pp. 175-176',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Rolul dialogului. Dialogul în textul scris și în spectacol',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Identifică particularitățile dialogului dramatic și rolul lui în construcția personajelor.',
        ],
        resurse: [
          'Manual Art 7, pp. 175-176',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-5/fisa.pdf)',
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
            activitate: 'Citim schimbul de replici dintre Eliza, Radu și Doinița de la p. 175 și stabilim cine vorbește și cine ascultă.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că urmărim ce face dialogul într-o piesă și cum ne ajută să cunoaștem personajele.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim replica și indicațiile scenice.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Discutăm rolul spectatorilor și, pe schema de la p. 175, planurile comunicării. Fixăm Reperele despre dialogul și monologul dramatic. În perechi, elevii completează axa timpului, de vinerea trecută până astăzi, și găsesc cuvintele care conturează spațiul. Asociem fragmentele a-d cu tipurile de replici de pe măștile teatrale.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii găsesc, în fiecare scenă, o replică adresată publicului, desprind trăsăturile lui Radu din replicile date și discută intenția primei replici a lui Radu din scena 2 și efectul ei asupra Doiniței. Rezolvă apoi fișa lecției.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-5/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-6',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează un răspuns personal despre semnificațiile textului dramatic și rolul lecturii.',
      ],
      sursaManual: 'Art 7, p. 177',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Semnificațiile textului',
        data: null,
        tipOra: 'Predare, interpretare',
        durata: 50,
        obiective: [
          'Formulează un răspuns personal despre semnificațiile textului dramatic și rolul lecturii.',
        ],
        resurse: [
          'Manual Art 7, p. 177',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-6/fisa.pdf)',
          'Un cub cu cele șase comenzi',
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
            activitate: 'Citim replica Doiniței „Nimeni nu se pierde într-o bibliotecă” și îi întreb pe elevi dacă ei s-au simțit vreodată pierduți sau regăsiți printre cărți.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că descoperim ce sunt, de fapt, ferestrele bibliotecii.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reluăm titlurile date scenelor și cuvintele-sinteză din prima oră.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Discutăm interpretările titlului de la p. 177, ce îi face pe copii să vadă ferestre acolo unde spuneau că nu sunt și secvențele din scena 4 care arată cărțile ca ferestre spre sine, spre lumea apropiată și cea îndepărtată, spre trecut și viitor. Discutăm și rostul indicațiilor finale ale autorului. Metoda cubului: șase grupe lucrează pe versurile Doiniței, cu comenzile descrie, compară, asociază, analizează, aplică, argumentează.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Grupele își prezintă rezultatele, apoi dezbatem pe scurt rolul lecturii în viața noastră. Elevii rezolvă fișa lecției.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-6/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-7',
      titlu: 'Dialogul în textul nonliterar. Interviul (I)',
      obiective: [
        'Descoperă trăsăturile interviului ca text nonliterar dialogat, pe baza unui interviu cu Matei Vișniec.',
      ],
      sursaManual: 'Art 7, pp. 178-180, partea 1/2 (Interviu cu Matei Vișniec)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Dialogul în textul nonliterar. Interviul (I)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Descoperă trăsăturile interviului ca text nonliterar dialogat, pe baza unui interviu cu Matei Vișniec.',
        ],
        resurse: [
          'Manual Art 7, pp. 178-180',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-7/fisa.pdf)',
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
            activitate: 'Îi întreb pe elevi cui ar lua un interviu dacă ar fi jurnaliști, iar fiecare notează două întrebări pentru acea persoană.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim un interviu luat lui Matei Vișniec de o elevă, Miruna.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim textul nonliterar și ce am aflat despre Matei Vișniec.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'Citesc model interviul, apărut în 2016 la Digi24, apoi elevii completează enunțurile impresiilor. Discutăm cine întreabă și cine răspunde, scopul textului, apoi ideile scriitorului: copilăria la Rădăuți, circul, Habarnam în Orașul Soarelui, copiii ca public exigent, după Peter Brook, sfatul despre ecrane.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Fiecare elev formulează o întrebare pe care i-ar fi pus-o scriitorului, în afara celor puse de Miruna, apoi rezolvă fișa lecției.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-7/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-8',
      titlu: 'Dialogul în textul nonliterar. Interviul (II)',
      obiective: [
        'Verifică, printr-un minitest, înțelegerea trăsăturilor interviului ca text nonliterar.',
      ],
      sursaManual: 'Art 7, pp. 178-180, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Dialogul în textul nonliterar. Interviul (II)',
        data: null,
        tipOra: 'Predare, lectură',
        durata: 50,
        obiective: [
          'Verifică, printr-un minitest, înțelegerea trăsăturilor interviului ca text nonliterar.',
        ],
        resurse: [
          'Manual Art 7, p. 180',
          'Quizul „Interviul, minitest” (materialul de joc al lecției)',
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
            activitate: 'Citim prima intervenție a Mirunei, care nu e o întrebare, și îi întreb pe elevi ce rost are.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fixăm trăsăturile interviului și ne verificăm printr-un minitest.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reluăm pe scurt ideile interviului de ora trecută.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '17 min',
            activitate: 'Fixăm Reperele de la p. 180: interviul ca text nonliterar, jurnalistic, informativ, întrebările deschise și închise, etapele interviului. Stabilim ce fel de întrebări pune Miruna, apoi, în perechi, elevii împart o foaie în nouă cadrane și notează cuvântul-cheie și răspunsurile pentru fiecare secvență.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '18 min',
            activitate: 'Elevii rezolvă quizul „Interviul, minitest” și completează autoevaluarea de la p. 180. Prezint tema de portofoliu: în echipe, întrebări pentru un interviu cu o persoană publică.',
          },
        ],
        evaluare: 'Rezultatele la minitest; autoevaluarea de la p. 180.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Interviul, minitest',
          pasi: [
            {
              intrebare: 'Din ce categorie de texte face parte interviul?',
              variante: [
                { text: 'text nonliterar, jurnalistic, de tip informativ', corect: true, explicatie: 'Interviul informează, sub forma unui dialog între un reporter și o persoană.' },
                { text: 'text literar narativ', corect: false, explicatie: 'Interviul nu construiește o lume ficțională, ci transmite informații reale.' },
                { text: 'text dramatic', corect: false, explicatie: 'Textul dramatic e scris pentru scenă; interviul e un text jurnalistic.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 178-180',
            },
            {
              intrebare: 'Ce este o întrebare deschisă, într-un interviu?',
              variante: [
                { text: 'O întrebare care îi lasă intervievatului loc să își exprime punctul de vedere', corect: true, explicatie: '„Ce te-a impresionat?” cere un răspuns dezvoltat, nu doar da sau nu.' },
                { text: 'O întrebare la care se răspunde doar cu „da” sau „nu”', corect: false, explicatie: 'Aceea e întrebarea închisă.' },
                { text: 'O întrebare pusă în public, cu voce tare', corect: false, explicatie: '„Deschisă” se referă la tipul răspunsului posibil, nu la locul unde se pune.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 178-180',
            },
            {
              intrebare: 'Care este baza reușitei unui interviu?',
              variante: [
                { text: 'calitatea întrebărilor, fiindcă ea determină calitatea răspunsurilor', corect: true, explicatie: 'Un interviu bun pornește de la întrebări bine gândite, pe baza unei documentări.' },
                { text: 'lungimea răspunsurilor', corect: false, explicatie: 'Un răspuns lung nu e neapărat unul bun; contează întrebarea care l-a provocat.' },
                { text: 'numărul de persoane intervievate', corect: false, explicatie: 'Interviul are, de regulă, o singură persoană intervievată.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 178-180',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Text auxiliar. Fragment din Visul unei nopți de vară de William Shakespeare',
      obiective: [
        'Interpretează un fragment din textul dramatic Visul unei nopți de vară de William Shakespeare, prin metoda grupului de lectură.',
      ],
      sursaManual: 'Art 7, „Noi pagini, alte idei”, pp. 181-182 (Visul unei nopți de vară de William Shakespeare, fragment)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Text auxiliar. Fragment din Visul unei nopți de vară de William Shakespeare',
        data: null,
        tipOra: 'Lectură, text auxiliar',
        durata: 50,
        obiective: [
          'Interpretează un fragment din textul dramatic Visul unei nopți de vară de William Shakespeare, prin metoda grupului de lectură.',
        ],
        resurse: [
          'Manual Art 7, pp. 181-182',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-9/fisa.pdf)',
          'Un dicționar englez-român',
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
            activitate: 'Legăm fragmentul de proiectul nostru: și la Shakespeare un grup de meșteri pregătește o piesă, pentru nunta ducelui Atenei.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că citim o scenă de comedie în care se împart rolurile unei piese.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Citim prezentarea de la p. 181 și reamintim actul, scena și indicațiile scenice.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '24 min',
            activitate: 'Elevii citesc individual fragmentul și își notează primele impresii, apoi îl citim pe roluri. În grupe de șase, fiecare elev face fișa de identitate a unui personaj, cu numele, meseria, rolul primit, reacția și o replică, iar grupa stabilește asemănările și deosebirile. Discutăm locul acțiunii, de ce s-au adunat meșterii, cine face pe regizorul, rolurile dorite de Jurubiță și de ce refuză Flaut rolul Thisbeii.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'Elevii caută în dicționar numele originale, Quince, Bottom, Flute, și explică traducerea lor, apoi deduc din nume câte o trăsătură fizică. Rezolvă fișa lecției și prezint volumele de la Biblioteci deschise.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-9/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-10',
      titlu: 'Prezentarea proiectului de grup De la text la spectacol (I)',
      obiective: [
        'Prezintă produsul proiectului de grup De la text la spectacol, în fața clasei.',
      ],
      sursaManual: 'Art 7, Proiect de grup, partea 1/2 (fără pagină exactă asociată în proiectare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea proiectului de grup De la text la spectacol (I)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Prezintă produsul proiectului de grup De la text la spectacol, în fața clasei.',
        ],
        resurse: [
          'Grila de evaluare, Manual Art 7, p. 183',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-10/fisa.pdf)',
          'Decorurile, costumele și afișele grupelor',
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
            activitate: 'Grupele își expun afișele spectacolelor, iar clasa le privește.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că azi au loc premierele celor trei spectacole.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Recitim criteriile grilei de la p. 183: viziunea regizorului, rostirea replicilor, respectarea indicațiilor, decorul și efectele, interpretarea, afișul.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Stabilim ordinea spectacolelor și le dau elevilor fișa de observare, pe care fiecare grupă notează spectacolele celorlalte două.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '33 min',
            activitate: 'Grupele își joacă pe rând spectacolul, iar spectatorii completează fișa după criteriile grilei.',
          },
        ],
        evaluare: 'Fișele de observare completate de grupe. Ora presupune că spectacolele au fost pregătite în cele trei săptămâni anunțate la lecția 1; dacă o grupă nu e gata, prezentarea ei se mută.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-10/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-11',
      titlu: 'Evaluarea proiectului de grup De la text la spectacol (II)',
      obiective: [
        'Evaluează proiectele prezentate, oferind și primind feedback, conform grilei de evaluare.',
      ],
      sursaManual: 'Art 7, Proiect de grup, partea 2/2 (fără pagină exactă asociată în proiectare)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Evaluarea proiectului de grup De la text la spectacol (II)',
        data: null,
        tipOra: 'Proiect',
        durata: 50,
        obiective: [
          'Evaluează proiectele prezentate, oferind și primind feedback, conform grilei de evaluare.',
        ],
        resurse: [
          'Grila de evaluare, Manual Art 7, p. 183',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-11/fisa.pdf)',
          'Fișele de observare și jurnalele proiectului',
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
            activitate: 'Fiecare elev spune într-un cuvânt cum s-a simțit la premieră.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că evaluăm spectacolele și ne oferim feedback.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim regulile unui feedback respectuos: întâi ce a mers bine, apoi ce se poate îmbunătăți, cu exemple.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Grupele centralizează fișele de observare pe grila de la p. 183 și formulează feedbackul pentru celelalte două spectacole. Asistenții regizorilor citesc câte un fragment din jurnalul proiectului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '18 min',
            activitate: 'Fiecare grupă primește și discută feedbackul, apoi fiecare elev completează pe fișa lecției autoevaluarea contribuției sale la proiect.',
          },
        ],
        evaluare: 'Evaluarea produsului și a prezentării pe grila de la p. 183; interevaluare și autoevaluare.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-11/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-12',
      titlu: 'Textul dialogat. Tracul comunicativ',
      obiective: [
        'Discută despre tracul comunicativ și exersează prezentarea orală a unui monolog, printr-un joc de rol.',
      ],
      sursaManual: 'Art 7, pp. 184-185',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Textul dialogat. Tracul comunicativ',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Discută despre tracul comunicativ și exersează prezentarea orală a unui monolog, printr-un joc de rol.',
        ],
        resurse: [
          'Manual Art 7, pp. 184-185',
          'Quizul „Textul dialogat. Tracul comunicativ” (materialul de joc al lecției)',
          'Bilețele cu roluri',
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
            activitate: 'Îi întreb pe elevi ce rol preferă într-un dialog: să vorbească, să asculte sau să observe. În grupe de patru, dau exemple de momente în care emoțiile i-au împiedicat să spună ce voiau.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că exersăm dialogul și învățăm să ne stăpânim emoțiile când vorbim în public.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim emoțiile de la premiera spectacolului.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Joc de rol: în grupe de patru, elevii trag la sorți rolurile de mamă, tată, copil și soră mai mare, iar copilul încearcă să obțină voie la o petrecere în pijamale. Grupele prezintă, iar ceilalți notează pe fișa de la p. 184 fiecare interlocutor, cu FB, P sau S. Fixăm Reperele despre dialog, apoi, pe imaginile de la p. 185, semnele emoției și strategiile de gestionare a tracului.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '18 min',
            activitate: 'Câțiva elevi prezintă un text de două minute pe o temă de la p. 185, aplicând strategiile, iar publicul completează grila. Toți rezolvă quizul „Textul dialogat. Tracul comunicativ”.',
          },
        ],
        evaluare: 'Fișa de observare a dialogului; grila de evaluare a tracului; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Textul dialogat. Tracul comunicativ',
          pasi: [
            {
              intrebare: 'Ce este tracul comunicativ?',
              variante: [
                { text: 'O stare emotivă firească, o neliniște resimțită înainte de a vorbi în public', corect: true, explicatie: 'Tracul e o reacție obișnuită, care poate fi gestionată prin strategii.' },
                { text: 'Un defect de vorbire care nu se poate corecta', corect: false, explicatie: 'Nu e un defect, ci o emoție firească; există strategii de gestionare.' },
                { text: 'O formă de dialog mediat, prin telefon sau aplicații', corect: false, explicatie: 'Aceea e altă noțiune, dialogul mediat, fără legătură cu tracul.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
            {
              intrebare: 'Care dintre acestea este o strategie de gestionare a tracului comunicativ?',
              variante: [
                { text: 'concentrarea asupra respirației și rostirea discursului într-un ritm firesc', corect: true, explicatie: 'Alături de repetiție, mărturisirea emoțiilor și contactul vizual cu persoane cunoscute.' },
                { text: 'vorbitul cât mai repede, ca să se termine mai devreme', corect: false, explicatie: 'Ritmul firesc ajută; graba trădează emoția și îngreunează înțelegerea.' },
                { text: 'evitarea oricărei pregătiri, ca să pară spontan', corect: false, explicatie: 'Pregătirea serioasă a intervenției reduce tracul, nu îl mărește.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
            {
              intrebare: 'La ce trebuie adaptat modul de adresare într-un dialog?',
              variante: [
                { text: 'la locul dialogului, la relațiile dintre vorbitori și la vârsta participanților', corect: true, explicatie: 'Adresarea se potrivește contextului și interlocutorului.' },
                { text: 'doar la ora la care are loc dialogul', corect: false, explicatie: 'Ora nu determină modul de adresare.' },
                { text: 'la numărul de replici schimbate', corect: false, explicatie: 'Numărul de replici nu are legătură cu modul de adresare.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Strategii de ascultare activă',
      obiective: [
        'Identifică tehnicile de ascultare activă (încurajare verbală, întrebări de clarificare, reformularea ideilor, evocarea unor situații similare).',
      ],
      sursaManual: 'Art 7, pp. 186-187',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Strategii de ascultare activă',
        data: null,
        tipOra: 'Comunicare orală',
        durata: 50,
        obiective: [
          'Identifică tehnicile de ascultare activă (încurajare verbală, întrebări de clarificare, reformularea ideilor, evocarea unor situații similare).',
        ],
        resurse: [
          'Manual Art 7, pp. 186-187',
          'Quizul „Strategii de ascultare activă” (materialul de joc al lecției)',
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
            activitate: 'Privim fotografia de la p. 186 și stabilim care copii îl ascultă atent pe vorbitor și după ce ne dăm seama.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm cum arătăm că ascultăm cu adevărat.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Reamintim reformularea de la comunicarea orală din Unitatea IV.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'În grupe de 3-4, elevii citesc dialogul dintre Mara și Alex despre spectacolele Sânziana și Pepelea și Apolodor și găsesc tehnicile de ascultare activă folosite. Fixăm Reperele: atenția acordată vorbitorului, neîntreruperea, feedbackul. Găsim tehnicile din fragmentul Omul cu mârțoaga de Gheorghe Ciprian.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '18 min',
            activitate: 'Exercițiul A-B-C: în grupe de trei, fiecare vorbește 30 de secunde despre preferințele lui, iar colegul repetă ce a reținut; discutăm cât de greu a fost. Elevii își completează chestionarul de autoevaluare de la p. 187 și rezolvă quizul „Strategii de ascultare activă”.',
          },
        ],
        evaluare: 'Autoevaluare pe chestionarul de la p. 187; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Strategii de ascultare activă',
          pasi: [
            {
              intrebare: 'Prin ce trei comportamente se manifestă ascultarea activă?',
              variante: [
                { text: 'atenția acordată vorbitorului, neîntreruperea lui, oferirea unui feedback', corect: true, explicatie: 'Ascultătorul activ arată atenție, lasă vorbitorul să termine și răspunde la ce a auzit.' },
                { text: 'tăcerea totală, evitarea contactului vizual, notițe permanente', corect: false, explicatie: 'Contactul vizual și semnalele de încurajare fac parte din ascultarea activă.' },
                { text: 'întreruperea rapidă cu propriile idei, ca să se vadă că ești atent', corect: false, explicatie: 'Întreruperea e exact opusul ascultării active.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 186-187',
            },
            {
              intrebare: 'Formulele „Dacă am înțeles eu bine...”, „Vrei să spui că...” sunt un exemplu de:',
              variante: [
                { text: 'reformulare, ca formă de feedback', corect: true, explicatie: 'Receptorul reia cu propriile cuvinte ideea interlocutorului, ca să verifice că a înțeles.' },
                { text: 'întrerupere a vorbitorului', corect: false, explicatie: 'Reformularea se face după ce vorbitorul și-a terminat ideea, nu în locul lui.' },
                { text: 'schimbare a temei de discuție', corect: false, explicatie: 'Dimpotrivă, reformularea rămâne fidelă temei interlocutorului.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 186-187',
            },
            {
              intrebare: 'Ce presupune neîntreruperea vorbitorului?',
              variante: [
                { text: 'amânarea propriei intervenții până când vorbitorul își termină ideea', corect: true, explicatie: 'Dorința de a interveni se semnalează politicos, nu prin tăierea vorbei.' },
                { text: 'renunțarea la orice intervenție proprie', corect: false, explicatie: 'Poți interveni, dar la momentul potrivit și semnalând politicos.' },
                { text: 'ridicarea tonului pentru a prelua cuvântul', corect: false, explicatie: 'E o formă de întrerupere, contrară ascultării active.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 186-187',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Numeralul. Posibilități combinatorii ale numeralului',
      obiective: [
        'Reactualizează numeralul cardinal și ordinal, recunoscând valorile morfologice și funcțiile sintactice ale numeralului.',
      ],
      sursaManual: 'Art 7, pp. 188-189',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Numeralul. Posibilități combinatorii ale numeralului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează numeralul cardinal și ordinal, recunoscând valorile morfologice și funcțiile sintactice ale numeralului.',
        ],
        resurse: [
          'Manual Art 7, pp. 188-189',
          'Schema „Numeralul. Posibilitățile combinatorii ale numeralului” (/materiale/clasa-7/unitatea-5/lectia-14/schema.svg)',
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
            activitate: 'Citim fragmentul din jurnalul Alexandrei, care a pus în scenă aceeași piesă, de la p. 188, și găsim numeralele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm numeralul și vedem ce funcții poate avea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Grupăm numeralele din jurnal în cardinale și ordinale, simple și compuse, și găsim numeralul însoțit de articol demonstrativ.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Cu ajutorul schemei reluăm numeralul cardinal și ordinal și cele trei valori morfologice, adjectivală, pronominală, substantivală. Pe textul despre trupa de teatru Alegoria găsim numeralele adjuncte, completăm tabelul de la p. 188 și pe cele cu calitate de centru. Fixăm Reperele de la p. 189 despre numeralul adjunct și centru.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii găsesc numeralele cardinale din textul despre Insula misterioasă, analizează numeralele din replicile din Omul de zăpadă care voia să întâlnească soarele și stabilesc funcția numeralelor din cele 12 enunțuri de la p. 189.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-14/schema.svg', titlu: 'Numeralul. Posibilitățile combinatorii ale numeralului' }, altele: [] },
    },
    {
      id: 'lectia-15',
      titlu: 'Adverbul. Posibilități combinatorii ale adverbului',
      obiective: [
        'Reactualizează tipurile de adverb, identificând calitatea de centru sau adjunct și atributul adverbial.',
      ],
      sursaManual: 'Art 7, pp. 190-191',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Adverbul. Posibilități combinatorii ale adverbului',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Reactualizează tipurile de adverb, identificând calitatea de centru sau adjunct și atributul adverbial.',
        ],
        resurse: [
          'Manual Art 7, pp. 190-191',
          'Schema „Adverbul. Posibilitățile combinatorii ale adverbului” (/materiale/clasa-7/unitatea-5/lectia-15/schema.svg)',
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
            activitate: 'Citim anunțul pentru selecția noii trupe de teatru a școlii și mesajele dintre cei doi colegi, de la p. 190, și găsim adverbele.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că reluăm adverbul și descoperim atributul adverbial.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim adverbele de loc, de timp și de mod și locuțiunea adverbială.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Stabilim felul adverbelor din anunț și din mesaje, pe cele fără funcție sintactică, formarea unora prin derivare și compunere, cuvântul determinat și funcția, adverbele care determină substantive, cu funcție de atribut adverbial, și gradele de comparație. Cu ajutorul schemei fixăm Reperele, cu semiadverbele, numai și doar față de decât, și locul lui mai.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii identifică adverbele din enunțurile a-h, găsesc semiadverbele din fragmentul din D-ale carnavalului, locuțiunile adverbiale din textul de la ex. 4 și corectează biletul „Lipsim decât zece minute. Mai ne aștepți?”.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; aprecieri. Temă de portofoliu: indicații de decor, de 30-50 de cuvinte, cu cât mai multe adverbe.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-15/schema.svg', titlu: 'Adverbul. Posibilitățile combinatorii ale adverbului' }, altele: [] },
    },
    {
      id: 'lectia-16',
      titlu: 'Interjecția. Onomatopeele. Interjecția predicativă',
      obiective: [
        'Identifică interjecțiile de adresare, onomatopeele și interjecțiile predicative și redactează texte care le conțin.',
      ],
      sursaManual: 'Art 7, pp. 192-193',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Interjecția. Onomatopeele. Interjecția predicativă',
        data: null,
        tipOra: 'Predare, gramatică',
        durata: 50,
        obiective: [
          'Identifică interjecțiile de adresare, onomatopeele și interjecțiile predicative și redactează texte care le conțin.',
        ],
        resurse: [
          'Manual Art 7, pp. 192-193',
          'Schema „Interjecția. Onomatopeele. Interjecția predicativă” (/materiale/clasa-7/unitatea-5/lectia-16/schema.svg)',
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
            activitate: 'Citim replicile „O… ce caraghios…”, „Ah, uite că începe să plouă…”, „Hei, unde este ieșirea” și spunem ce exprimă cuvintele colorate, apoi imităm sunetele animalelor din imaginile de la p. 192.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că învățăm interjecția, onomatopeele și interjecțiile care țin loc de verb.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim părțile de vorbire neflexibile și semnul exclamării.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '22 min',
            activitate: 'Pe enunțul cu „hodoronc-tronc”, „pâș-pâș”, „Doamne ferește!” observăm componentele și punctuația, apoi înlocuim cu verbe interjecțiile din „Hai la spectacol!”, „Iepurele țuști! în tufiș” și stabilim funcția. Discutăm scopul lui „Bre”, „măi”, „Pst!” din D-ale carnavalului. Cu ajutorul schemei fixăm Reperele: interjecții propriu-zise și onomatopee, simple, compuse și repetate, locuțiuni, interjecții de adresare și predicative, punctuația.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '13 min',
            activitate: 'Elevii găsesc interjecțiile din fragmentele din O scrisoare pierdută, Florentina și Romeo și Julieta, le separă pe cele predicative, derivă verbe de la bâz, chiț, ham, ronț și completează autoevaluarea de la p. 193.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; autoevaluarea de la p. 193. Minitestul lecției e în varianta digitală a manualului, cu baremul în Anexa 7.e a Ghidului profesorului.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-16/schema.svg', titlu: 'Interjecția. Onomatopeele. Interjecția predicativă' }, altele: [] },
    },
    {
      id: 'lectia-17',
      titlu: 'Tipare textuale de structurare a ideilor. Cererea (I)',
      obiective: [
        'Identifică trăsăturile textelor persuasive, informative, procedurale și descriptive, pregătind redactarea unei cereri.',
      ],
      sursaManual: 'Art 7, pp. 194-195, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Tipare textuale de structurare a ideilor. Cererea (I)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Identifică trăsăturile textelor persuasive, informative, procedurale și descriptive, pregătind redactarea unei cereri.',
        ],
        resurse: [
          'Manual Art 7, pp. 194-195',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-17/fisa.pdf)',
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
            activitate: 'Elevii notează rapid câte două situații în care vor să convingă pe cineva, explică cum se procedează, descriu ceva, prezintă informații sau au nevoie să scrie o cerere, apoi compară răspunsurile.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că deosebim patru tipare de text și ne pregătim să scriem o cerere.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '5 min',
            activitate: 'Reamintim textul descriptiv din Unitatea III și textul explicativ.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '23 min',
            activitate: 'În grupe de 4-5, elevii asociază textele A-D despre Teatrul Metropolis cu cele patru scopuri și notează câte două trăsături ale fiecăruia. Fixăm Reperele: textul persuasiv, informativ, procedural și descriptiv, cu mijloacele lor.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '12 min',
            activitate: 'În grupe de câte trei, fiecare elev trage la sorți o sarcină: să-și convingă părinții să-l înscrie la clubul de teatru, să descrie sala Teatrului Metropolis sau să explice cum se scrie o cerere. Își scriu textele pe fișa lecției și le evaluează între ei.',
          },
        ],
        evaluare: 'Interevaluare în grupe; fișa lecției.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-17/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-18',
      titlu: 'Tipare textuale de structurare a ideilor. Cererea (II)',
      obiective: [
        'Redactează o cerere, respectând tiparul textual specific.',
      ],
      sursaManual: 'Art 7, pp. 194-195, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Tipare textuale de structurare a ideilor. Cererea (II)',
        data: null,
        tipOra: 'Redactare',
        durata: 50,
        obiective: [
          'Redactează o cerere, respectând tiparul textual specific.',
        ],
        resurse: [
          'Manual Art 7, p. 195',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-18/fisa.pdf)',
          'Coli albe',
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
            activitate: 'Îi întreb pe elevi dacă au scris sau au văzut scrisă vreodată o cerere și în ce situație.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că fiecare scrie o cerere adevărată, respectând forma ei.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '4 min',
            activitate: 'Elevii completează pe o coală formularul de la p. 195, cererea pentru adeverința de elev necesară la Clubul de Teatru.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '5 min',
            activitate: 'Numim părțile formularului, cum e așezat fiecare element și punctuația din primul alineat, apoi fixăm Reperele: adresarea, cuprinsul în două paragrafe, data și semnătura, destinatarul.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '32 min',
            activitate: 'Elevii redactează cererea adresată unui director de teatru pentru împrumutul de costume la spectacolul școlii, o verifică cu ajutorul fișei lecției, apoi își autoevaluează activitatea după întrebările de la p. 195.',
          },
        ],
        evaluare: 'Autoevaluare după întrebările de la p. 195; cererile, strânse pentru apreciere.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-18/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-19',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: textul dramatic, interviul, tracul comunicativ, ascultarea activă.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 196-197, partea 1/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, lectură și comunicare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: textul dramatic, interviul, tracul comunicativ, ascultarea activă.',
        ],
        resurse: [
          'Manual Art 7, pp. 196-197',
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
            activitate: 'Anunț că recapitulăm pe un fragment din Răzbunarea sufleorului de Victor Ion Popa.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm actul, scena, replica, didascaliile externe și interne, meseriile spectacolului, personajul dramatic, dialogul și monologul, interviul, tracul și ascultarea activă.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '18 min',
            activitate: 'Citim fragmentul pe roluri și rezolvăm ghidat cerințele 1-7: din ce parte a piesei e extras, indicațiile autorului după rolul lor, locul acțiunii și de ce acolo, tema discuției, „cușca” sufleorului, afirmația despre emoție și talent. În grupe de patru, elevii fac fișele de identitate ale lui nenea Costică și ale Fetiței, cerința 8.',
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
              intrebare: 'Ce rol au indicațiile scenice într-un text dramatic?',
              variante: [
                { text: 'Ghidează punerea în scenă: mișcarea, tonul, decorul', corect: true, explicatie: 'Indicațiile scenice (didascaliile) nu se rostesc pe scenă, ci orientează regia și actorii.' },
                { text: 'Sunt replicile personajelor principale', corect: false, explicatie: 'Replicile sunt altă componentă a textului dramatic, nu indicațiile scenice.' },
                { text: 'Apar doar în textele nonliterare', corect: false, explicatie: 'Indicațiile scenice sunt specifice textului dramatic, nu textelor nonliterare.' },
              ],
              indiciu: null, sursa: 'Art 7, p. 172',
            },
            {
              intrebare: 'Ce este tracul comunicativ?',
              variante: [
                { text: 'Emoția sau neliniștea resimțită înainte de a vorbi în fața unui public', corect: true, explicatie: 'Tracul comunicativ e o reacție firească, despre care se discută pentru a fi gestionată.' },
                { text: 'O tehnică de ascultare activă', corect: false, explicatie: 'Ascultarea activă e altă temă a unității, nu are legătură directă cu tracul.' },
                { text: 'Un tip de indicație scenică', corect: false, explicatie: 'Tracul comunicativ ține de comunicarea orală, nu de textul dramatic scris.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: numeralul, adverbul, interjecția.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 196-197, partea 2/2',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare, gramatică și redactare',
        data: null,
        tipOra: 'Recapitulare',
        durata: 50,
        obiective: [
          'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: numeralul, adverbul, interjecția.',
        ],
        resurse: [
          'Manual Art 7, p. 197',
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
            activitate: 'Scriu pe tablă replica „Mă rog, sunt eu ori nu sunt sufleor în teatrul ăsta de treizeci de ani?” și cer numeralul, cu felul și valoarea lui.',
          },
          {
            etapa: 'Enunțarea subiectului și a obiectivelor',
            timp: '2 min',
            activitate: 'Anunț că recapitulăm numeralul, adverbul, interjecția, textul persuasiv și cererea.',
          },
          {
            etapa: 'Reactualizarea cunoștințelor anterioare',
            timp: '8 min',
            activitate: 'Reluăm valorile numeralului, adverbul și locuțiunea adverbială, atributul adverbial, semiadverbele, felurile interjecției, interjecția predicativă, tiparele textuale și părțile cererii.',
          },
          {
            etapa: 'Dirijarea învățării',
            timp: '16 min',
            activitate: 'Rezolvăm ghidat cerințele 9-14 de la p. 197: analiza numeralului și transformarea lui în ordinal, adverbul din replica Fetiței, grupul „în față”, interjecțiile din replica lui nenea Costică și interjecția predicativă.',
          },
          {
            etapa: 'Obținerea performanței',
            timp: '17 min',
            activitate: 'Elevii rezolvă quizul „Recapitulare, gramatică și redactare”, apoi discutăm greșelile. Ca temă, scriu textul persuasiv despre emoțiile dinaintea unui test și cererea pentru cursul de actorie, cerințele 15-16.',
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
              intrebare: 'Ce fel de numeral este „al douăzeci și șaptelea”?',
              variante: [
                { text: 'numeral ordinal', corect: true, explicatie: 'Arată ordinea prin numărare, nu doar cantitatea.' },
                { text: 'numeral cardinal', corect: false, explicatie: 'Numeralul cardinal ar fi „douăzeci și șapte”, nu „al douăzeci și șaptelea”.' },
                { text: 'adverb', corect: false, explicatie: 'Nu e adverb, e o parte de vorbire distinctă, numeralul.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 188-189',
            },
            {
              intrebare: 'Ce este o onomatopee?',
              variante: [
                { text: 'Un cuvânt care imită un sunet din natură', corect: true, explicatie: 'Bum!, ham!, țiu! sunt onomatopee, imită sunete reale.' },
                { text: 'Un pronume care înlocuiește un substantiv', corect: false, explicatie: 'Onomatopeea nu are legătură cu pronumele.' },
                { text: 'Un tip de circumstanțial', corect: false, explicatie: 'Onomatopeea aparține clasei interjecțiilor, nu părților de propoziție.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 192-193',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea V.',
      ],
      sursaManual: 'Art 7, Evaluare, p. 198',
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
          'Testul, Manual Art 7, p. 198',
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
            activitate: 'Anunț că se dă proba scrisă a Unității V, pe un fragment din Jocul de-a vacanța de Mihail Sebastian, cu o parte de limbă și lectură și un text persuasiv.',
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
