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
            etapa: 'Teatrul, în cuvinte',
            timp: '5 min',
            activitate: '– Elevii spun cuvinte pe care le asociază cu teatrul și spectacole pe care le-au văzut (în sală, la televizor, la radio).',
          },
          {
            etapa: 'Sarcina proiectului',
            timp: '8 min',
            activitate: '– Citim sarcina de la p. 183: trei grupe de 8-9 elevi pun în scenă piesa „Vrem să vă dăruim câte o fereastră” de Matei Vișniec, pe care o citim ora viitoare.',
          },
          {
            etapa: 'Rolurile din echipă',
            timp: '7 min',
            activitate: '– Ce face regizorul, asistentul (care ține jurnalul proiectului), cei trei actori, scenografii, tehnicienii de lumină și de sunet; fiecare echipă face și un afiș.',
          },
          {
            etapa: 'Formarea grupelor',
            timp: '8 min',
            activitate: '– Împart clasa în trei grupe; fiecare grupă își împarte rolurile și le notează pe fișa lecției.',
          },
          {
            etapa: 'Calendarul',
            timp: '7 min',
            activitate: '– Pașii celor trei săptămâni (roluri și schițe; repetiții și decor; repetiții generale și premieră); fixăm datele premierelor, la lecțiile 10-11.',
          },
          {
            etapa: 'Criteriile de evaluare',
            timp: '7 min',
            activitate: '– Citim grila de la p. 183; explic că fiecare grupă le evaluează pe celelalte două.',
          },
          {
            etapa: 'Primele sarcini',
            timp: '5 min',
            activitate: '– Grupele își stabilesc prima întâlnire; scenografii notează ideile pentru decor, actorii își aleg personajele.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: asistentul regizorului pornește jurnalul proiectului; fiecare elev își notează sarcinile de pe fișa lecției.',
          },
        ],
        evaluare: 'Fișa lecției completată de fiecare grupă (roluri, calendar).',
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-2/fisa-exercitii.pdf)',
          'Bilețele',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-3',
            timp: '5 min',
            activitate: '– Ce le place și ce nu le place la teatru; în perechi, predicții pe baza cuvintelor de la p. 166.',
          },
          {
            etapa: 'Autorul',
            timp: '2 min',
            activitate: '– Caseta despre Matei Vișniec de la p. 166.',
          },
          {
            etapa: 'Lectura model, ex. 4',
            timp: '10 min',
            activitate: '– Citesc eu piesa (pp. 166-170), marcând vocea fiecărui personaj; elevii urmăresc și indicațiile scrise cu italice.',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1-2',
            timp: '3 min',
            activitate: '– Doi-trei elevi completează oral enunțurile; s-au împlinit predicțiile?',
          },
          {
            etapa: 'Scena 1, pe roluri, ex. 3-4',
            timp: '6 min',
            activitate: '– Trei elevi citesc scena 1; grupele de 4-6 răspund la cerințele a-e (tabelul „Ce s-a întâmplat? / De ce s-a întâmplat?”, titlul scenei).',
          },
          {
            etapa: 'Scena 2, ex. 5-6',
            timp: '5 min',
            activitate: '– Alți trei elevi citesc scena 2; grupele notează ce se schimbă, emoțiile și titlul.',
          },
          {
            etapa: 'Scenele 3 și 4, ex. 7-10',
            timp: '6 min',
            activitate: '– Citire pe roluri, cu alți elevi; grupele continuă tabelul: personajul salvator, soluția ieșirii, cărțile din bibliotecă, titlurile.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '8 min',
            activitate: '– Pagina 1: ex. 1 (scenă cu scenă) și ex. 2 (adevărat sau fals), individual, 6 minute; verificarea ex. 2, 2 minute.',
          },
          {
            etapa: 'Cuvântul textului, ex. 11',
            timp: '3 min',
            activitate: '– Fiecare scrie pe un bilețel un cuvânt care sintetizează piesa; lipim bilețelele pe tablă și căutăm ce au în comun.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; opțional, Provocări (paradisul tău, 80-100 de cuvinte).',
          },
        ],
        evaluare: 'Observarea sistematică a grupelor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-2/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-3/fisa-exercitii.pdf)',
          'Schema „Textul dramatic. Structura. Indicațiile scenice” (/materiale/clasa-7/unitatea-5/lectia-3/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Citit sau jucat? Explorare, ex. 1-2',
            timp: '5 min',
            activitate: '– Pentru ce a fost scris textul; cât ar dura spectacolul.',
          },
          {
            etapa: 'Ce se aude pe scenă, ex. 3',
            timp: '7 min',
            activitate: '– În perechi: secvențele rostite și cele nerostite; ce informații dau cele din urmă și de ce le-a notat autorul.',
          },
          {
            etapa: 'Punerea în pagină, ex. 4',
            timp: '2 min',
            activitate: '– Ce e diferit față de textele studiate până acum.',
          },
          {
            etapa: 'Notițe: textul dramatic',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (p. 172): actul și scena, replica, textul dialogat și indicațiile autorului, didascaliile externe și interne.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (fragmentul „Ninsoarea”, scris pentru fișă, și indicațiile autorului), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Acte, scene, criteriul, Aplicații, ex. 1-2',
            timp: '4 min',
            activitate: '– Câte acte și scene are piesa; după ce criteriu sunt delimitate scenele.',
          },
          {
            etapa: 'Începutul piesei, ex. 3',
            timp: '5 min',
            activitate: '– În perechi, indicațiile de la p. 166, grupate în externe și interne.',
          },
          {
            etapa: 'Etichetele, ex. 4',
            timp: '5 min',
            activitate: '– Grupe de 4-5: câte o indicație din piesă pentru fiecare etichetă (deplasare, gesturi, acțiuni, ton, destinatar, scenă și efecte).',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-3/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-3/schema.svg', titlu: 'Textul dramatic. Structura. Indicațiile scenice' }, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-4/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-4/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Repetiția, Explorare, ex. 1',
            timp: '4 min',
            activitate: '– Desenul de la p. 173: cine sunt actorii și ce fac ceilalți oameni de pe scenă.',
          },
          {
            etapa: 'Explorare, ex. 2-4',
            timp: '6 min',
            activitate: '– De ce numele personajului stă în fața replicii; cine pune în aplicare indicațiile a-c; cui se adresează mesajul despre cântecul final și de ce e opțional.',
          },
          {
            etapa: 'Notițe: arta spectacolului',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 173): originea cuvântului teatru și persoanele implicate într-un spectacol.',
          },
          {
            etapa: 'Personajul dramatic, Explorare, ex. 1-3',
            timp: '5 min',
            activitate: '– Informațiile din lista personajelor; cum prinde viață personajul; relația dintre cei trei copii.',
          },
          {
            etapa: 'Notițe: personajul dramatic',
            timp: '3 min',
            activitate: '– Dubla natură a personajului; caracterizarea directă și indirectă (Repere, p. 174).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cine se ocupă?) și ex. 2 (direct sau indirect?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Regizorul, Aplicații, ex. 1',
            timp: '3 min',
            activitate: '– Căror persoane le dă instrucțiuni regizorul, după indicațiile de la începutul scenei 2.',
          },
          {
            etapa: 'Fișa Doiniței, ex. 2',
            timp: '8 min',
            activitate: '– Grupe de trei citesc pe roluri prima parte a scenei 2 și completează fișa personajului, cu o replică relevantă.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 3-4; fișa lecției; fișa de exerciții, pagina 2.\n– Provocări, pe grupele de proiect: schițele de decor și costume.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; fișele Doiniței.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-4/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-5/lectia-4/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-5/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-5/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Vorbitor și ascultător, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Radu și Eliza în fragmentul de la p. 175; rolul spectatorilor; planurile comunicării din schemă.',
          },
          {
            etapa: 'Notițe: dialogul dramatic',
            timp: '5 min',
            activitate: '– În caiete, după Repere (p. 175): dialogul, rolurile lui, didascaliile, comunicarea cu spectatorii, monologul.',
          },
          {
            etapa: 'Axa timpului, Aplicații, ex. 1',
            timp: '5 min',
            activitate: '– În perechi, completăm axa de la „vinerea trecută” la „astăzi”.',
          },
          {
            etapa: 'Spațiul, ex. 2',
            timp: '3 min',
            activitate: '– Cuvintele care conturează spațiul întâmplării.',
          },
          {
            etapa: 'Tipurile de replici, ex. 4',
            timp: '5 min',
            activitate: '– Asociem fragmentele a-d cu tipurile de replici din jurul măștilor.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (cum se leagă replicile) și ex. 2 (cui se adresează), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Adresarea către public, ex. 5-6',
            timp: '4 min',
            activitate: '– Câte o replică din fiecare scenă adresată publicului; va interveni publicul?',
          },
          {
            etapa: 'Dialogul care caracterizează, ex. 7-8',
            timp: '6 min',
            activitate: '– Trăsăturile lui Radu din replicile a-b; intenția primei replici a lui Radu din scena 2 și efectul asupra Doiniței.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 3 (secvența transformată în narațiune); fișa lecției; fișa de exerciții, pagina 2.\n– Opțional: Provocări, ex. 1 (cum ai juca un personaj, 100-150 de cuvinte).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-5/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-5/lectia-5/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-6/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-6/fisa.pdf)',
          'Un cub cu cele șase comenzi',
        ],
        desfasurare: [
          {
            etapa: 'Titlul, Interpretare, ex. 1',
            timp: '6 min',
            activitate: '– Recitim ultimele șase replici; discutăm variantele a-c sau o altă interpretare.',
          },
          {
            etapa: 'Ferestrele, ex. 2',
            timp: '5 min',
            activitate: '– Ce îi face pe copii să-și schimbe părerea despre bibliotecă; care sunt ferestrele ei.',
          },
          {
            etapa: 'Te poți pierde într-o bibliotecă? ex. 3',
            timp: '4 min',
            activitate: '– Ce a vrut să spună Doinița; opiniile elevilor.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (ce pot sugera) și ex. 2 (cărțile mele-ferestre), individual, 7 minute.\n– Verificare și câteva exemple de cărți-ferestre, 4 minute.',
          },
          {
            etapa: 'Ferestre spre..., ex. 4',
            timp: '4 min',
            activitate: '– Secvențele din scena 4 pentru fiecare fereastră: spre sine, spre realitatea apropiată, spre lumea îndepărtată, spre trecut și viitor.',
          },
          {
            etapa: 'Indicațiile din final, ex. 5',
            timp: '4 min',
            activitate: '– De ce le-a notat autorul; alegem una dintre ipoteze sau formulăm alta.',
          },
          {
            etapa: 'Cubul, ex. 6',
            timp: '13 min',
            activitate: '– Șase grupe; reprezentantul fiecăreia aruncă cubul și primește comanda; 8 minute de lucru pe versurile finale.\n– Prezentări, 5 minute.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (biblioteci celebre).',
          },
        ],
        evaluare: 'Aprecieri pe prezentările de la Cubul; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-6/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-5/lectia-6/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-7/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-7/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Dacă ai fi jurnalist, „Pentru început”, ex. 1',
            timp: '4 min',
            activitate: '– Cui le-ar lua elevii un interviu; câteva întrebări, pe tablă.',
          },
          {
            etapa: 'Lectura, ex. 2',
            timp: '8 min',
            activitate: '– Citesc interviul de la pp. 178-179, cu o elevă în rolul Mirunei.',
          },
          {
            etapa: 'Impresii după prima lectură, ex. 1-2',
            timp: '4 min',
            activitate: '– Enunțurile, oral; ce altă întrebare i-ar fi pus elevii scriitorului.',
          },
          {
            etapa: 'Cine întreabă, cine răspunde, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– Reporterul și intervievatul; scopul textului, ales dintre variante.',
          },
          {
            etapa: 'Notițe: interviul',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 180): interviul ca text jurnalistic, formele lui, întrebările deschise și închise, etapele.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (deschise sau închise?) și ex. 2 (ce spune scriitorul), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Scopul primei intervenții a Mirunei; felul întrebărilor ei.',
          },
          {
            etapa: 'Cele nouă cadrane, ex. 3',
            timp: '5 min',
            activitate: '– În perechi, primele trei secvențe: cuvântul-cheie și răspunsurile.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 3 (restul cadranelor); fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-7/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-5/lectia-7/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-8/fisa-exercitii.pdf)',
          'Quizul „Interviul, minitest” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Cadranele, verificarea temei',
            timp: '8 min',
            activitate: '– Perechile prezintă câte o secvență din cele nouă: cuvântul-cheie și răspunsurile.',
          },
          {
            etapa: 'Trăsăturile interviului',
            timp: '5 min',
            activitate: '– Întrebări frontale: ce e interviul, unde apare, ce fel de întrebări se recomandă, care sunt etapele.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (interviul „După premieră”, scris pentru fișă, și recunoașterea elementelor), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Minitestul',
            timp: '10 min',
            activitate: '– Quizul „Interviul, minitest”, individual sau frontal.',
          },
          {
            etapa: 'Greșelile',
            timp: '4 min',
            activitate: '– Discutăm întrebările la care s-a greșit cel mai des.',
          },
          {
            etapa: 'Autoevaluare L1-L6',
            timp: '3 min',
            activitate: '– Cele trei enunțuri de la p. 180, în caiete.',
          },
          {
            etapa: 'Pregătirea interviului, Portofoliu',
            timp: '6 min',
            activitate: '– Grupele aleg persoana publică și încep întrebările, pe fișa de exerciții, ex. 3.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa de exerciții, pagina 2; Portofoliu (întrebările interviului, în grup).',
          },
        ],
        evaluare: 'Rezultatele la minitest; fișa de exerciții, ex. 1-2; autoevaluarea L1-L6.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-8/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-9/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-9/fisa.pdf)',
          'Un dicționar englez-român',
        ],
        desfasurare: [
          {
            etapa: 'Introducerea de la p. 181',
            timp: '3 min',
            activitate: '– Shakespeare și comedia „Visul unei nopți de vară”; o trupă de actori amatori pregătește o piesă pentru nunta ducelui.',
          },
          {
            etapa: 'Lectura pe roluri',
            timp: '8 min',
            activitate: '– Șase elevi citesc fragmentul; ceilalți notează primele impresii (ce le-a plăcut, ce nu, ce nu au înțeles, ce le-a amintit).',
          },
          {
            etapa: 'Locul și scopul, Discutarea textului, ex. 1-2',
            timp: '4 min',
            activitate: '– Unde are loc acțiunea și din ce secvență aflăm; de ce s-au adunat meșterii și unde vor juca.',
          },
          {
            etapa: 'Grupul de lectură, ex. 3',
            timp: '10 min',
            activitate: '– Grupe de șase: fiecare elev face fișa de identitate a unui personaj, o prezintă grupului; grupa stabilește asemănările și deosebirile.',
          },
          {
            etapa: 'Regizorul și actorii, ex. 4-6',
            timp: '5 min',
            activitate: '– Cine își asumă rolul regizorului; rolurile dorite de Jurubiță și argumentele lui; motivul lui Flaut.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (meșterii și rolurile) și ex. 2 (adevărat sau fals), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Numele personajelor, ex. 7-8',
            timp: '6 min',
            activitate: '– Căutăm în dicționarul englez-român numele originale; cum le-a transpus traducătorul; ce trăsături fizice sugerează.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: fișa lecției; fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea grupului de lectură; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-9/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-5/lectia-9/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
            etapa: 'Pregătirea scenei',
            timp: '5 min',
            activitate: '– Prima grupă își așază decorul și recuzita; afișele celor trei grupe se lipesc pe tablă.',
          },
          {
            etapa: 'Instructajul spectatorilor',
            timp: '3 min',
            activitate: '– Grupele care nu joacă urmăresc spectacolul cu grila de la p. 183 și fișa lecției; notează câte o observație pe criteriu.',
          },
          {
            etapa: 'Spectacolul grupei 1',
            timp: '11 min',
            activitate: '– Grupa 1 joacă piesa; cronometrez și notez observații pentru feedback.',
          },
          {
            etapa: 'Schimbarea decorului',
            timp: '3 min',
            activitate: '– Grupa 2 își pregătește scena; spectatorii își completează grila pentru grupa 1.',
          },
          {
            etapa: 'Spectacolul grupei 2',
            timp: '11 min',
            activitate: '– Grupa 2 joacă piesa.',
          },
          {
            etapa: 'Schimbarea decorului',
            timp: '3 min',
            activitate: '– Grupa 3 își pregătește scena; grilele pentru grupa 2.',
          },
          {
            etapa: 'Spectacolul grupei 3',
            timp: '11 min',
            activitate: '– Grupa 3 joacă piesa.',
          },
          {
            etapa: 'Încheiere',
            timp: '3 min',
            activitate: '– Grilele se completează pentru grupa 3; asistenții aduc ora viitoare jurnalele proiectului.',
          },
        ],
        evaluare: 'Grilele de evaluare de la p. 183, completate de grupele-spectatori; observațiile profesorului.',
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
            etapa: 'Criteriile',
            timp: '3 min',
            activitate: '– Recitim grila de la p. 183 și regula feedbackului: întâi ce a mers, apoi o sugestie.',
          },
          {
            etapa: 'Feedback pentru grupa 1',
            timp: '10 min',
            activitate: '– Celelalte două grupe citesc aprecierile pe criterii; grupa 1 răspunde; adaug observațiile mele.',
          },
          {
            etapa: 'Feedback pentru grupa 2',
            timp: '10 min',
            activitate: '– La fel, pentru grupa 2.',
          },
          {
            etapa: 'Feedback pentru grupa 3',
            timp: '10 min',
            activitate: '– La fel, pentru grupa 3.',
          },
          {
            etapa: 'Jurnalele proiectului',
            timp: '7 min',
            activitate: '– Asistenții regizorilor citesc câte o intrare din jurnal; ce a mers bine în echipă, ce a fost greu.',
          },
          {
            etapa: 'Afișele',
            timp: '4 min',
            activitate: '– Turul afișelor: cât de bine anunță spectacolul fiecare.',
          },
          {
            etapa: 'Autoevaluarea',
            timp: '4 min',
            activitate: '– Pe fișa lecției, fiecare elev notează ce a învățat și ce ar face altfel.',
          },
          {
            etapa: 'Încheiere',
            timp: '2 min',
            activitate: '– Anunț aprecierile finale ale proiectului.',
          },
        ],
        evaluare: 'Interevaluare pe grila de la p. 183; jurnalele proiectului; autoevaluarea individuală.',
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-12/fisa-exercitii.pdf)',
          'Quizul „Textul dialogat. Tracul comunicativ” (materialul de joc al lecției)',
          'Bilețele cu roluri',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”, ex. 1-2',
            timp: '5 min',
            activitate: '– Ce rol preferă elevii într-un dialog; în grupe de patru, momente în care emoțiile i-au împiedicat să spună ce voiau.',
          },
          {
            etapa: 'Petrecerea în pijamale, Explorare, ex. 1',
            timp: '12 min',
            activitate: '– Grupe de patru trag la sorți bilețelele (mama, tata, copilul, sora mai mare) și pregătesc dialogul, 5 minute.\n– Două grupe îl joacă; ceilalți completează fișa de observare cu FB, P, S.',
          },
          {
            etapa: 'Calificativele și itemii, ex. 2-3',
            timp: '4 min',
            activitate: '– Cine a avut cea mai bună prestație; răspunsurile la itemii A-C.',
          },
          {
            etapa: 'Notițe: dialogul',
            timp: '3 min',
            activitate: '– În caiete, după Repere (p. 184): dialogul, conversația, replica, dialogul direct și mediat.',
          },
          {
            etapa: 'Semnele emoției',
            timp: '3 min',
            activitate: '– Imaginile a-d de la p. 185: semnele tracului.',
          },
          {
            etapa: 'Notițe: tracul comunicativ',
            timp: '4 min',
            activitate: '– Definiția și cele opt strategii de gestionare (Repere, p. 185).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (reguli de dialog) și ex. 2 (semnul și soluția), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '5 min',
            activitate: '– Quizul „Textul dialogat. Tracul comunicativ”, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 2, discursul de două minute, planificat pe fișa de exerciții, ex. 3; câțiva elevi îl prezintă ora viitoare.\n– Opțional: fișa de exerciții, ex. 4, și Provocări (tracul și talentul).',
          },
        ],
        evaluare: 'Fișele de observare ale dialogurilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-12/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-13/fisa-exercitii.pdf)',
          'Quizul „Strategii de ascultare activă” (materialul de joc al lecției)',
        ],
        desfasurare: [
          {
            etapa: 'Discursurile de două minute',
            timp: '8 min',
            activitate: '– Doi-trei elevi își prezintă discursul de acasă; clasa completează grila tracului de la p. 185.',
          },
          {
            etapa: 'Fotografia, Explorare, ex. 1',
            timp: '3 min',
            activitate: '– Cine ascultă atent și cine nu; indiciile.',
          },
          {
            etapa: 'Mara și Alex, Explorare, ex. 2',
            timp: '6 min',
            activitate: '– Grupe de 3-4 citesc dialogul de la p. 186 și găsesc tehnicile de ascultare activă folosite.',
          },
          {
            etapa: 'Notițe: ascultarea activă',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 186): atenția acordată vorbitorului, neîntreruperea, feedbackul (reformulare, întrebări).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (dialogul „Teatrul de păpuși”, scris pentru fișă, și tehnicile), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'A, B și C, Aplicații, ex. 2-3',
            timp: '8 min',
            activitate: '– Grupe de trei, câte 30 de secunde pentru fiecare rol; discutăm întrebările a-b.',
          },
          {
            etapa: 'Quizul',
            timp: '5 min',
            activitate: '– Quizul „Strategii de ascultare activă”, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 1 și ex. 5 (chestionarul de autoevaluare); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Grila tracului pentru discursuri; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-13/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-14/fisa-exercitii.pdf)',
          'Schema „Numeralul. Posibilitățile combinatorii ale numeralului” (/materiale/clasa-7/unitatea-5/lectia-14/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Jurnalul Alexandrei, „Pentru început”',
            timp: '4 min',
            activitate: '– Citim fragmentul de la p. 188 și găsim numeralele.',
          },
          {
            etapa: 'Numeralul, Explorare, ex. 1-4',
            timp: '6 min',
            activitate: '– Cardinale și ordinale; simple și compuse; genul ordinalelor; numeralul cu articol demonstrativ; valoarea fiecăruia.',
          },
          {
            etapa: 'Notițe: numeralul',
            timp: '6 min',
            activitate: '– Proiectez schema; în caiete, după Repere (p. 188): cardinalul, ordinalul, genul, cele trei valori.',
          },
          {
            etapa: 'Trupa Alegoria, Explorare, ex. 1-3',
            timp: '6 min',
            activitate: '– Numeralele din text, felul și valoarea; tabelul numeralelor adjuncte; numeralele centru.',
          },
          {
            etapa: 'Notițe: posibilitățile combinatorii',
            timp: '5 min',
            activitate: '– Numeralul adjunct (atribut adjectival, atribute, complemente, circumstanțiale) și numeralul centru; subiect și nume predicativ (Repere, p. 189).',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (felul și valoarea) și ex. 2 (funcția sintactică), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Insula misterioasă, Aplicații, ex. 1',
            timp: '3 min',
            activitate: '– Numeralele cardinale din text și valoarea lor.',
          },
          {
            etapa: 'Funcțiile, Aplicații, ex. 3',
            timp: '6 min',
            activitate: '– Primele șase enunțuri, frontal.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 2 și ex. 3 (restul enunțurilor); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-14/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-14/schema.svg', titlu: 'Numeralul. Posibilitățile combinatorii ale numeralului' }, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-15/fisa-exercitii.pdf)',
          'Schema „Adverbul. Posibilitățile combinatorii ale adverbului” (/materiale/clasa-7/unitatea-5/lectia-15/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Anunțul și mesajele, Explorare, ex. 1-3',
            timp: '7 min',
            activitate: '– Adverbele din anunț și din mesaje, felul lor; cele fără funcție sintactică; unul derivat și două compuse.',
          },
          {
            etapa: 'Explorare, ex. 4-6',
            timp: '5 min',
            activitate: '– Ce determină adverbele din afiș și funcția lor; cele două care determină substantive; gradele de comparație.',
          },
          {
            etapa: 'Sinonime, ex. 7',
            timp: '3 min',
            activitate: '– Un adverb pentru fiecare expresie a-e.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (p. 190): felurile, alcătuirea, gradele, locuțiunea adverbială, funcțiile (inclusiv atributul adverbial), semiadverbele, folosirea lui „decât” și „mai”.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (felul și funcția) și ex. 2 (gradele de comparație), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Adverbele din enunțurile a-h, felul, funcția și gradul, frontal.',
          },
          {
            etapa: 'Aplicații, ex. 4-5',
            timp: '4 min',
            activitate: '– Locuțiunile adverbiale și funcția lor; „acasă” ca circumstanțial și ca atribut.',
          },
          {
            etapa: 'Biletul, ex. 6',
            timp: '3 min',
            activitate: '– Corectăm biletul, pe tablă.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 3 și ex. 7 (analiza, după model); fișa de exerciții, pagina 2; opțional, Portofoliu (indicațiile de decor, cu adverbe).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-15/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-15/schema.svg', titlu: 'Adverbul. Posibilitățile combinatorii ale adverbului' }, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-16/fisa-exercitii.pdf)',
          'Schema „Interjecția. Onomatopeele. Interjecția predicativă” (/materiale/clasa-7/unitatea-5/lectia-16/schema.svg)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Replicile din piesă, Explorare, ex. 1-2',
            timp: '4 min',
            activitate: '– Ce exprimă cuvintele colorate din replicile Elizei, lui Radu și Doiniței; care e de adresare.',
          },
          {
            etapa: 'Sunetele animalelor, ex. 3',
            timp: '3 min',
            activitate: '– Elevii imită și scriu sunetele animalelor din imagini.',
          },
          {
            etapa: 'Componente și punctuație, ex. 4',
            timp: '3 min',
            activitate: '– Din câte părți sunt alcătuite cuvintele colorate și ce semne le urmează.',
          },
          {
            etapa: 'Interjecția ca verb, ex. 5-6',
            timp: '4 min',
            activitate: '– Verbele care pot înlocui interjecțiile din enunțurile a-e și funcția lor.',
          },
          {
            etapa: 'Caragiale, ex. 7',
            timp: '3 min',
            activitate: '– Scopul interjecțiilor din replicile a-c din „D-ale carnavalului”.',
          },
          {
            etapa: 'Notițe',
            timp: '8 min',
            activitate: '– Proiectez schema; în caiete, după Repere (p. 192): interjecțiile propriu-zise și onomatopeele, simple, repetate, compuse, locuțiunile interjecționale, interjecțiile de adresare, interjecția predicativă, punctuația.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (felul interjecției) și ex. 2 (interjecția predicativă), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Aplicații, ex. 1-2',
            timp: '5 min',
            activitate: '– Interjecțiile pentru emoțiile fetei din imagini; în perechi, norul de cuvinte.',
          },
          {
            etapa: 'Emoții și zgomote, ex. 6',
            timp: '3 min',
            activitate: '– În perechi, câte o interjecție pentru fiecare situație din listă.',
          },
          {
            etapa: 'Autoevaluare L10-L12',
            timp: '3 min',
            activitate: '– Cele trei enunțuri de la p. 193, în caiete.',
          },
          {
            etapa: 'Temă',
            timp: '3 min',
            activitate: '– Tema: Aplicații, ex. 3-5; fișa de exerciții, pagina 2; opțional, Provocări (impresii de la un spectacol, cu interjecții).',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea L10-L12.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-16/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-16/schema.svg', titlu: 'Interjecția. Onomatopeele. Interjecția predicativă' }, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-17/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-17/fisa.pdf)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: '„Pentru început”',
            timp: '4 min',
            activitate: '– Elevii notează rapid câte două situații în care conving, explică, descriu, informează, scriu o cerere; comparăm.',
          },
          {
            etapa: 'Teatrul Metropolis, Explorare, ex. 1',
            timp: '8 min',
            activitate: '– Grupe de 4-5: asociază textele A-D de la p. 194 cu cele patru tipuri.',
          },
          {
            etapa: 'Trăsăturile, ex. 2',
            timp: '6 min',
            activitate: '– Aceleași grupe notează câte două trăsături pentru fiecare text (fapte și opinii, structură, cuvinte-cheie, punctuație); un reprezentant prezintă.',
          },
          {
            etapa: 'Notițe: tiparele textuale',
            timp: '7 min',
            activitate: '– În caiete, după Repere (p. 194): textul persuasiv, informativ, procedural, descriptiv și mijloacele fiecăruia.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (patru texte despre clubul de teatru, scrise pentru fișă, și tiparul lor), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Redactare în trei, Aplicații, ex. 1',
            timp: '10 min',
            activitate: '– Grupe de trei trag la sorți sarcinile a-c; fiecare scrie 6 minute; apoi își evaluează textele între ei, 4 minute.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: Aplicații, ex. 2 (articolul informativ, pe grupe, cu „întrebările jurnalistului”); fișa lecției; fișa de exerciții, pagina 2.\n– Anunț că ora viitoare redactăm o cerere.',
          },
        ],
        evaluare: 'Interevaluare în grupele de trei; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-17/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-5/lectia-17/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-18/fisa-exercitii.pdf)',
          'Fișa lecției (/materiale/clasa-7/unitatea-5/lectia-18/fisa.pdf)',
          'Coli albe',
        ],
        desfasurare: [
          {
            etapa: 'Formularul, Explorare, ex. 1',
            timp: '7 min',
            activitate: '– Fiecare completează pe o coală formularul de cerere de la p. 195.',
          },
          {
            etapa: 'Părțile cererii, ex. 2',
            timp: '5 min',
            activitate: '– Părțile formularului, așezarea fiecăreia în pagină și punctuația din primul alineat.',
          },
          {
            etapa: 'Notițe: cererea',
            timp: '6 min',
            activitate: '– În caiete, după Repere (p. 195): adresarea, cele două paragrafe ale cuprinsului, data și semnătura, destinatarul; desenăm pe tablă schema paginii.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1 (părțile cererii) și ex. 2 (corect sau greșit?), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Cererea către directorul de teatru, Aplicații, ex. 3',
            timp: '12 min',
            activitate: '– Fiecare redactează pe o coală albă cererea pentru împrumutul costumelor; trec printre bănci.',
          },
          {
            etapa: 'Verificare în perechi',
            timp: '4 min',
            activitate: '– Colegul verifică după schema de pe tablă: părțile, așezarea, formula „Subsemnatul”, motivarea.',
          },
          {
            etapa: 'Autoevaluare, ex. 4',
            timp: '3 min',
            activitate: '– Elevii răspund în scris la cele trei întrebări de autoevaluare. Strâng cererile.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: fișa de exerciții, pagina 2 (cererea către bibliotecara școlii).',
          },
        ],
        evaluare: 'Cererile, strânse pentru apreciere; interevaluare în perechi; fișa de exerciții, ex. 1-2.',
      },
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-18/fisa.pdf', exercitii: '/materiale/clasa-7/unitatea-5/lectia-18/fisa-exercitii.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-19/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'Ciorchinele unității',
            timp: '3 min',
            activitate: '– Pe tablă, „Lumea de pe scenă”; elevii spun câte o noțiune de lectură sau de comunicare din unitate.',
          },
          {
            etapa: 'Lectura pe roluri',
            timp: '6 min',
            activitate: '– Doi elevi citesc fragmentul din „Răzbunarea sufleorului” de Victor Ion Popa (p. 196); un al treilea citește indicațiile scenice.',
          },
          {
            etapa: 'Cerințele 1-4',
            timp: '7 min',
            activitate: '– Din ce parte a piesei e fragmentul; indicațiile autorului pentru fiecare rol din tabel; locul acțiunii și de ce acesta.',
          },
          {
            etapa: 'Cerințele 5-7',
            timp: '6 min',
            activitate: '– Tema discuției; replica despre cușca sufleorului; emoție, suflet, talent: sunt de acord elevii?',
          },
          {
            etapa: 'Fișele de identitate, cerința 8',
            timp: '6 min',
            activitate: '– Grupe de patru: câte o fișă pentru fiecare personaj; două grupe citesc.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-2 (fragmentul „Înainte de premieră”, scris pentru fișă, și noțiunile recapitulate), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '7 min',
            activitate: '– Quizul „Recapitulare, lectură și comunicare”, frontal; discutăm răspunsurile greșite.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: cerința 15 (textul persuasiv, cel puțin 80 de cuvinte); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-19/fisa-exercitii.pdf' },
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
          'Fișa de exerciții (/materiale/clasa-7/unitatea-5/lectia-20/fisa-exercitii.pdf)',
          'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)',
          'Caietele elevilor',
        ],
        desfasurare: [
          {
            etapa: 'O replică pe tablă',
            timp: '3 min',
            activitate: '– Scriu „Ei, bravo!”: ce fel de interjecție e și ce semn o desparte de restul?',
          },
          {
            etapa: 'Numeralul, cerințele 9-10',
            timp: '5 min',
            activitate: '– Felul, valoarea și funcția numeralului din replica sufleorului; transformarea cu un numeral ordinal.',
          },
          {
            etapa: 'Adverbul, cerințele 11-12',
            timp: '5 min',
            activitate: '– Adverbul din replica fetiței; ce este „în față”, cu justificare.',
          },
          {
            etapa: 'Interjecția, cerințele 13-14',
            timp: '5 min',
            activitate: '– Interjecțiile din replica lui nenea Costică și interjecția predicativă.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții',
            timp: '11 min',
            activitate: '– Pagina 1: ex. 1-3 (cinci enunțuri, numerale, adverbe, interjecții), individual, 7 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Quizul',
            timp: '7 min',
            activitate: '– Quizul „Recapitulare, gramatică și redactare”, frontal; la greșeli, revenim la notițe.',
          },
          {
            etapa: 'Cererea, cerința 16',
            timp: '6 min',
            activitate: '– Elevii scriu adresarea și primul paragraf al cererii către Clubul Elevilor; verificăm așezarea în pagină.',
          },
          {
            etapa: 'Pregătirea evaluării',
            timp: '4 min',
            activitate: '– Anunț proba de ora viitoare: un fragment dramatic nou, zece cerințe de limbă și lectură (partea A) și un text persuasiv (partea B).\n– Ce recitesc acasă: notițele despre textul dramatic și indicațiile scenice, numeral, adverb, interjecție și textul persuasiv.',
          },
          {
            etapa: 'Temă',
            timp: '4 min',
            activitate: '– Tema: cerința 16 (cererea completă); fișa de exerciții, pagina 2.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
      },
      materiale: {
        prezentare: null, video: null, test: null, fisa: { exercitii: '/materiale/clasa-7/unitatea-5/lectia-20/fisa-exercitii.pdf' },
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
            etapa: 'Instructajul',
            timp: '5 min',
            activitate: '– Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; manualul e deschis la p. 198 (fragmentul din „Jocul de-a vacanța” de Mihail Sebastian).\n– Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (text persuasiv despre clubul de teatru, cel puțin 80 de cuvinte), 10 puncte din oficiu.\n– Timpul orientativ: 5 minute pentru citirea textului, 20 pentru partea A, 15 pentru textul persuasiv; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.',
          },
          {
            etapa: 'Rezolvarea individuală',
            timp: '40 min',
            activitate: '– Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.\n– Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să verifice cele două mijloace persuasive și structura textului.',
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
