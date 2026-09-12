// Planuri de lecție detaliate, Unitatea IV „Unde găsim adevărul?”, clasa a VIII-a.
// Pași concreți pe rubricile și exercițiile din Manual Art 8, pp. 131-162, cu fișa
// de exerciții a lecției folosită la „Obținerea performanței”. Exercițiile din
// manual nerezolvate în clasă rămân temă. Fără răspunsuri (ghid sau fișă).
// 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-8/unitatea-4/lectia-${n}/fisa-exercitii.pdf)`
const fl = (n) => `Fișa lecției (/materiale/clasa-8/unitatea-4/lectia-${n}/fisa.pdf)`
const schema = (n, t) => `Schema „${t}” (/materiale/clasa-8/unitatea-4/lectia-${n}/schema.svg)`

export default {
  'lectia-1': {
    titlu: 'Proiect de grup. Anunțarea proiectului Realizarea unei reclame',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Află sarcinile și termenele proiectului de grup Realizarea unei reclame.'],
    resurse: ['Manual Art 8, p. 146', 'Fișa proiectului (/materiale/clasa-8/unitatea-4/lectia-1/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Reclama care m-a convins', timp: '5 min', activitate: pasi(
        'Câțiva elevi spun o reclamă care i-a convins să cumpere ceva și una care îi enervează; de ce.') },
      { etapa: 'Sarcina de lucru, p. 146', timp: '6 min', activitate: pasi(
        'Citim sarcina: grupe de 5-7 elevi, cele patru domenii (divertisment, cultural, geografic, turistic) și cele trei tipuri de reclamă (afiș sau panou, audio, video).') },
      { etapa: 'Grupele și tragerea la sorți', timp: '8 min', activitate: pasi(
        'Formăm grupele; fiecare trage la sorți domeniul și alege tipul de reclamă.') },
      { etapa: 'Pașii proiectului', timp: '8 min', activitate: pasi(
        'Săptămâna I: produsul, analiza punctelor forte și slabe, ce intră în reclamă, rolurile, durata de maximum 30 de secunde, drepturile de autor.',
        'Săptămâna a II-a: realizarea reclamei și prezentarea activității, în 2-3 minute.') },
      { etapa: 'Grila de evaluare', timp: '5 min', activitate: pasi(
        'Criteriile de la p. 146: conținutul, calitatea, originalitatea, prezentarea activității.') },
      { etapa: 'Primii pași în grupă', timp: '15 min', activitate: pasi(
        'Grupele aleg produsul, fac o primă listă de puncte forte și slabe și împart rolurile.',
        'Notează în fișa proiectului cine ce face; trec pe la fiecare grupă.') },
      { etapa: 'Termene', timp: '3 min', activitate: pasi(
        'Anunț data prezentării și ce aduce fiecare grupă la ora următoare de proiect.') },
    ],
    evaluare: 'Observarea sistematică a organizării grupelor; verificarea fișei de pornire a proiectului.',
  },
  'lectia-2': {
    titlu: 'Textul epic. Iapa lui Vodă de Mihail Sadoveanu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește textul Iapa lui Vodă de Mihail Sadoveanu și formulează primele impresii de lectură.'],
    resurse: ['Manual Art 8, pp. 132-135', fisa(2), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Salata de cuvinte, „Pentru început”, ex. 1', timp: '8 min', activitate: pasi(
        'Grupe de 4-5: un text narativ de 50-60 de cuvinte cu cinci termeni din listă; două grupe îl citesc din scaunul autorului.') },
      { etapa: 'Predicția, ex. 2', timp: '3 min', activitate: pasi(
        'Fiecare scrie pe un bilețel, într-un enunț, despre ce ar putea fi povestirea; bilețelele se lipesc în cadranul din stânga al tablei.') },
      { etapa: 'Autorul', timp: '2 min', activitate: pasi(
        'Caseta despre Mihail Sadoveanu (p. 132): Hanu Ancuței (1928), nouă povestitori la un han; Iapa lui Vodă e prima povestire.') },
      { etapa: 'Lectura model, ex. 3', timp: '15 min', activitate: pasi(
        'Citesc textul (pp. 132-135); lămurim notele de subsol pe măsură ce apar.') },
      { etapa: 'Impresii după prima lectură, ex. 1-2', timp: '6 min', activitate: pasi(
        'Grupele mută în cadranul din dreapta bilețelele care se potrivesc cu textul.',
        'Cadranele de la p. 135, în caiete; trei elevi citesc câte unul.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine e cine) și ex. 2 (ordinea întâmplărilor), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2; recitirea textului.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Textul epic. Structuri textuale',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică timpul, spațiul, secvențele și planurile narative ale textului-suport.'],
    resurse: ['Manual Art 8, pp. 136-137', fisa(3), fl(3), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cele două planuri, Explorare, ex. 1 a-b', timp: '8 min', activitate: pasi(
        'Grupe de 5-6: delimitează secvențele ramei de cele ale poveștii lui Ioniță și asociază cuvintele-cheie din listă.') },
      { etapa: 'Ideile principale, ex. 1 c-e și 2', timp: '10 min', activitate: pasi(
        'Tabelul pe flip-chart: cuvintele-cheie și ideile principale, în ordine; afișăm colile și le comparăm.',
        'Un elev rezumă oral textul, pe baza ideilor alese.') },
      { etapa: 'Trecerea dintre planuri, ex. 3-5', timp: '5 min', activitate: pasi(
        'Secvența care face trecerea; rolul lui „În vremea aceea...”; două fragmente în care planurile se suprapun.') },
      { etapa: 'Notițe: planurile narative și inserția', timp: '5 min', activitate: pasi(
        'Fișa lecției și Repere (p. 137): planul narativ, înlănțuirea, alternanța, inserția (povestirea în ramă), cu exemplele din literatura universală.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (rama sau povestea) și ex. 2 (axa timpului), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Timpul și spațiul, ex. 6-8 și 11-13', timp: '7 min', activitate: pasi(
        'Anotimpul și reperele temporale; când se petrece povestea lui Ioniță; regiunea hanului și cele două „țări”; orașul, masivul și trecătoarea; durata acțiunii.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Explorare, ex. 9-10; Aplicații, ex. 3 și 6; fișa de exerciții, pagina 2; opțional, Portofoliu (rezumatul) sau Provocări.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Naratorii și personajele. Antiteza',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică trăsăturile personajelor și rolul antitezei în textul-suport.'],
    resurse: ['Manual Art 8, pp. 138-139', fisa(4), fl(4), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Naratorii, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Cine narează în ramă și la ce persoană; cine preia rolul în povestea iepei; rolul fiecăruia în celălalt plan.') },
      { etapa: 'Personajele, ex. 4-6', timp: '6 min', activitate: pasi(
        'Diagrama Venn cu personajele celor două planuri; îndeletnicirile; moș Leonte și alți „știutori de taine” din lecturi.') },
      { etapa: 'Antiteza, ex. 7-8', timp: '4 min', activitate: pasi(
        'Vremurile întâlnirii de la han, prin opoziție cu războiul; verbele opuse din secvența despre petrecerea de la han.') },
      { etapa: 'Notițe: naratorul, ascultătorul, antiteza', timp: '5 min', activitate: pasi(
        'Fișa lecției și Repere (p. 138): schimbarea rolului narator-personaj; antiteza la nivel de enunț și la nivelul operei.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (doi naratori) și ex. 2 (antiteze), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Fișele de identitate, Aplicații, ex. 22', timp: '14 min', activitate: pasi(
        'Perechi numerotate 1-3: comisul Ioniță, cele două Ancuțe, Mihalache Sturza; fișa după modelul de la p. 139.',
        'Perechile cu același personaj se grupează și își completează fișele; câte un reprezentant le prezintă.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-2, 8-10 și 16-20; fișa de exerciții, pagina 2; Portofoliu: caracterizarea comisului Ioniță.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; fișele de identitate.',
  },
  'lectia-5': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează opinii despre semnificațiile textului și despre atitudinile personajelor.'],
    resurse: ['Manual Art 8, pp. 140-141', fisa(5), fl(5), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Titlul, Interpretare, ex. 1-2', timp: '5 min', activitate: pasi(
        'De ce nedumerește titlul și ce rol are asocierea; câteva titluri noi, justificate.') },
      { etapa: 'Hanul și istoria, ex. 3-5', timp: '6 min', activitate: pasi(
        'Hanul ca o cetate; legătura cu istoria Moldovei; ce a însemnat domnia lui Mihail Sturza.') },
      { etapa: 'Ce simbolizează hanul, ex. 8', timp: '6 min', activitate: pasi(
        'Fiecare alege una sau mai multe variante a-e și le susține cu un exemplu din text.') },
      { etapa: 'Atmosfera și ritualul poveștii, ex. 10-12 și 14-17', timp: '9 min', activitate: pasi(
        'Aspectele atmosferei din paragrafele 2-4; rolul celor două Ancuțe; ce face moș Leonte; amânările lui Ioniță și ale naratorului și scopul lor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (simboluri) și ex. 2 (opinii despre text, cu argumente), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Ce fel de adevăr?, ex. 29', timp: '6 min', activitate: pasi(
        'Cele trei variante: numărăm opțiunile, apoi câte un elev pentru fiecare își susține alegerea.') },
      { etapa: 'Picturile, ex. 13', timp: '3 min', activitate: pasi(
        'Ospățul boierilor sau La han: care ilustrează mai bine atmosfera și de ce.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: ex. 18 și 26-28; fișa de exerciții, pagina 2; opțional, Provocări (riscul de a spune adevărul) sau Portofoliu.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Textul nonliterar. Textul multimodal. Reclama',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Analizează o reclamă, identificând destinatarul, scopul și strategiile de construcție a mesajului.'],
    resurse: ['Manual Art 8, pp. 142-143', fisa(6), fl(6), 'Câteva reclame tipărite sau proiectate'],
    desfasurare: [
      { etapa: 'Animal și produs, „Pentru început”, ex. 1', timp: '8 min', activitate: pasi(
        'Grupe de 4-6: trag la sorți un produs și un animal și imaginează reclama care le asociază; două grupe își prezintă ideea.') },
      { etapa: 'Reclama din manual, ex. 2 și Impresii', timp: '5 min', activitate: pasi(
        'Observăm reclama de la p. 142; asemănări cu ideile grupelor; cadranele cu primele impresii.') },
      { etapa: 'Analiza, Explorare, ex. 1-8', timp: '10 min', activitate: pasi(
        'Produsul și tema; scopul (a-d); autorii și comanditarul; publicul-țintă; poziția calului și ghemul de lână; cele două sensuri ale verbului „a toarce”.') },
      { etapa: 'Culori, lumini, marcă, ex. 9-11', timp: '4 min', activitate: pasi(
        'Dispunerea cromatică, jocul de lumini și umbre, poziția denumirii produsului.') },
      { etapa: 'Notițe: textul multimodal și reclama', timp: '5 min', activitate: pasi(
        'Fișa lecției și Repere (pp. 142-143): textul nonliterar și cel multimodal; cei patru „actori” ai reclamei; cele șase principii; drepturile de autor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (afișul descris) și ex. 2 (analiza reclamei), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Autoevaluare L1-L5', timp: '3 min', activitate: pasi(
        'Cele trei afirmații de la p. 143, în caiete.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-3 și 6-8; fișa de exerciții, pagina 2; opțional, Portofoliu (reclame cu animale).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Text auxiliar. Hainele cele noi ale împăratului de Hans Christian Andersen',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește un fragment din Hainele cele noi ale împăratului și discută despre relațiile dintre personaje.'],
    resurse: ['Manual Art 8, pp. 144-145', fisa(7), fl(7), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Legătura cu Iapa lui Vodă', timp: '3 min', activitate: pasi(
        'Textul introductiv de la p. 144: adevărul spus cu curaj și adevărul evitat.') },
      { etapa: 'Lectura', timp: '10 min', activitate: pasi(
        'Citesc basmul, cu rezumatele dintre paranteze drepte; lămurim notele: pehlivan, para, șoltic, baldachin.') },
      { etapa: 'Împăratul și escrocii, Discutarea textului, ex. 1 și 3-7', timp: '9 min', activitate: pasi(
        'De ce nu are nume împăratul; ce neglijează; nevoile și slăbiciunile folosite de escroci; scopul împăratului; judecata pe care n-o aplică asupra lui.') },
      { etapa: 'Slujitorii și poporul, ex. 8-10', timp: '6 min', activitate: pasi(
        'Ce arată laudele slujitorilor; le fac bine împăratului?; cum ar proceda elevii în locul lor; bucuria mulțimii.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (personajele și motivele lor) și ex. 2 (adevărat sau fals), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Copilul, ex. 11-12', timp: '5 min', activitate: pasi(
        'De ce doar copilul spune adevărul; atitudinea împăratului după strigătul lui.') },
      { etapa: 'Linia valorică, Provocări', timp: '4 min', activitate: pasi(
        'Elevii se așază de o parte și de alta a unei linii imaginare: contează ținuta în impresia despre un om? Câte un argument din fiecare tabără.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: ex. 2; fișa de exerciții, pagina 2; opțional, o carte din Biblioteci deschise.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-8': {
    titlu: 'Prezentarea proiectului de grup Realizarea unei reclame',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Prezintă și evaluează proiectele de grup, pe baza unei grile de evaluare.'],
    resurse: ['Manual Art 8, p. 146', 'Fișa proiectului cu grila de evaluare (/materiale/clasa-8/unitatea-4/lectia-8/fisa.pdf)', 'Reclamele realizate de grupe'],
    desfasurare: [
      { etapa: 'Pregătirea', timp: '3 min', activitate: pasi(
        'Grupele își verifică materialele; stabilim ordinea.') },
      { etapa: 'Grila', timp: '3 min', activitate: pasi(
        'Reamintim criteriile de la p. 146: conținutul, calitatea, originalitatea, prezentarea activității.') },
      { etapa: 'Prezentările grupelor', timp: '32 min', activitate: pasi(
        'Fiecare grupă: reclama (maximum 30 de secunde), prezentarea activității (2-3 minute) și un minut de întrebări.',
        'Colegii completează grila; eu completez fișa proiectului pentru fiecare grupă.') },
      { etapa: 'Ce principiu am recunoscut', timp: '7 min', activitate: pasi(
        'Pentru fiecare reclamă, colegii numesc un principiu respectat: atenția, înțelegerea, încrederea, marca, acțiunea, efectul.') },
      { etapa: 'Concluzii', timp: '3 min', activitate: pasi(
        'Ce reclamă a convins cel mai mult și de ce.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Anunț lecția următoare: comportamentele care fac un discurs convingător.') },
    ],
    evaluare: 'Evaluarea proiectului pe grupe după grila din fișă; observarea prezentării și a feedbackului.',
  },
  'lectia-9': {
    titlu: 'Comportamente nonverbale și paraverbale cu efect persuasiv',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică și utilizează strategii de convingere prin comportamente nonverbale și paraverbale.'],
    resurse: ['Manual Art 8, pp. 147-148', fisa(9), 'Quizul „Comportamente nonverbale și paraverbale cu efect persuasiv” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Discursul Gretei Thunberg, „Pentru început”, ex. 1', timp: '8 min', activitate: pasi(
        'Citim discursul de la p. 147; fiecare asociază trei gesturi din imaginile a-l cu secvențe din discurs.') },
      { etapa: 'Discursurile elevilor, ex. 1-2', timp: '10 min', activitate: pasi(
        'Fiecare pregătește, în patru minute, un discurs scurt pornind de la ideile Gretei, cu cel puțin trei gesturi.',
        'Doi-trei elevi îl susțin în fața clasei.') },
      { etapa: 'Ce a convins, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Elementele cu putere de convingere din discurs (a-f); în perechi: cel mai convingător discurs, după gesturi, apoi după voce.') },
      { etapa: 'Notițe: persuasiunea', timp: '5 min', activitate: pasi(
        'Repere (p. 148): persuasiunea; comportamentele nonverbale; comportamentele paraverbale; schema de la p. 148.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (nonverbal sau paraverbal) și ex. 2 (același mesaj, efecte diferite), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Quizul „Comportamente nonverbale și paraverbale cu efect persuasiv”', timp: '8 min', activitate: pasi(
        'Elevii rezolvă quizul; lămurim întrebările cu cele mai multe greșeli.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații (planul unei expuneri de 3-5 minute pe una dintre temele a-c), cu fișa de exerciții, pagina 2; după prezentare, autoevaluarea cu buline.') },
    ],
    evaluare: 'Observarea sistematică a intervențiilor orale; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-10': {
    titlu: 'Circumstanțialul de loc',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică și analizează circumstanțialul de loc, cu punctuația specifică.'],
    resurse: ['Manual Art 8, p. 149', fisa(10), schema(10, 'Circumstanțialul de loc'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Joc de rol la han, „Pentru început”', timp: '7 min', activitate: pasi(
        'În perechi: unul e personaj de la han, celălalt îl întreabă de unde vine, când a sosit, cum a călătorit, de ce și cu ce scop; apoi schimbă rolurile.',
        'Cel care întreabă notează circumstanțialele din răspunsuri.') },
      { etapa: 'Circumstanțialele de loc, Explorare, ex. 1', timp: '7 min', activitate: pasi(
        'Enunțurile a-g: circumstanțialul, partea de vorbire a regentului și partea de vorbire prin care se exprimă.') },
      { etapa: 'Posesivul și dativul, ex. 2-3', timp: '5 min', activitate: pasi(
        'Posesivul din „înaintea noastră”: parte de vorbire, caz, funcție; cazul și funcția substantivului de la ex. 3.') },
      { etapa: 'Notițe: circumstanțialul de loc', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (p. 149): întrebările, regenții, părțile de vorbire prin care se exprimă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (circumstanțialul și partea de vorbire) și ex. 2 (întrebările), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Analiza după model, Aplicații', timp: '10 min', activitate: pasi(
        'Textul despre Alex și Mara: primul circumstanțial la tablă, după modelul „din gara”; elevii continuă cu primul paragraf.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, paragrafele rămase; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Circumstanțiala de loc',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Definește propoziția circumstanțială de loc și identifică elementele de relație și topica ei.'],
    resurse: ['Manual Art 8, pp. 150-151', fisa(11), schema(11, 'Circumstanțiala de loc'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Dialogul despre excursie, Explorare, a-d', timp: '8 min', activitate: pasi(
        'În perechi: circumstanțialul din prima replică; subordonata din a doua replică, după schemă; întrebările pentru celelalte trei; elementele de relație.') },
      { etapa: 'Corelativele, topica, punctuația, ex. 1-4', timp: '7 min', activitate: pasi(
        'Unde sunt adverbele corelative și ce rol au; poziția subordonatelor; formulăm regula de punctuație.') },
      { etapa: 'Notițe: circumstanțiala de loc', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (pp. 150-151): întrebările, regenții, elementele de relație, corelativele, virgula.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (subordonata și elementul de relație) și ex. 2 (felul subordonatelor introduse prin „unde”), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Identificare, Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Enunțurile a-h, oral: subordonata, regentul și elementul de relație.') },
      { etapa: 'Completare, ex. 5', timp: '4 min', activitate: pasi(
        'Enunțurile a-d, completate oral după model, întâi cu un circumstanțial, apoi cu o subordonată.') },
      { etapa: 'Fraza de la ex. 7', timp: '4 min', activitate: pasi(
        'O despărțim în propoziții la tablă și precizăm felul fiecăreia.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-4 și 6; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Circumstanțialul de timp',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică și analizează circumstanțialul de timp, cu punctuația specifică.'],
    resurse: ['Manual Art 8, p. 152', fisa(12), schema(12, 'Circumstanțialul de timp'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Însemnarea, Explorare, ex. 1', timp: '10 min', activitate: pasi(
        'Citim însemnarea de la p. 152; transcriem circumstanțialele de timp, regentul și partea de vorbire prin care se exprimă.') },
      { etapa: 'Substantiv sau adverb?, ex. 2', timp: '5 min', activitate: pasi(
        'Diagrama T pentru enunțurile a-d.') },
      { etapa: 'Timp sau loc?, ex. 3', timp: '4 min', activitate: pasi(
        'Aceeași construcție în cele două enunțuri: ce fel de circumstanțial e în fiecare.') },
      { etapa: 'Notițe: circumstanțialul de timp', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (p. 152): întrebările, regenții, părțile de vorbire prin care se exprimă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (circumstanțialul și partea de vorbire) și ex. 2 (ortograme), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Identificare, Aplicații, ex. 1', timp: '10 min', activitate: pasi(
        'Cele unsprezece enunțuri, oral: circumstanțialul de timp și prin ce se exprimă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Circumstanțiala de timp',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Definește propoziția circumstanțială de timp și identifică elementele de relație și topica ei.'],
    resurse: ['Manual Art 8, pp. 153-154', fisa(13), schema(13, 'Circumstanțiala de timp'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'De la circumstanțial la propoziție, Explorare, ex. 1-5', timp: '8 min', activitate: pasi(
        'Cele două enunțuri din schemă; circumstanțialul și regentul lui; subordonata din frază și regentul ei; când se petrece acțiunea subordonatei față de regentă.') },
      { etapa: 'Expansiune și elemente de relație, ex. 6-8', timp: '7 min', activitate: pasi(
        'Expansiunea circumstanțialelor a-d; elementele de relație ale propozițiilor obținute; cuvântul „cum” din fraza de la ex. 8.') },
      { etapa: 'Corelativele, topica, punctuația, ex. 1-4', timp: '6 min', activitate: pasi(
        'Adverbele corelative din frazele a-f și rolul lor; poziția subordonatelor; regula de punctuație.') },
      { etapa: 'Notițe: circumstanțiala de timp', timp: '5 min', activitate: pasi(
        'Schema lecției și Repere (pp. 153-154): regenții, elementele de relație, corelativele, virgula.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (subordonata și elementul de relație) și ex. 2 (raportul temporal), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Identificare, Aplicații, ex. 1', timp: '6 min', activitate: pasi(
        'Enunțurile a-f, oral: subordonata, regentul și elementul de relație.') },
      { etapa: 'Fragmentul din Cealaltă Ancuță, ex. 2', timp: '3 min', activitate: pasi(
        'Despărțim prima frază a fragmentului în propoziții, la tablă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2, restul fragmentului; fișa de exerciții, pagina 2; opțional, Provocări (călătoria în timp).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Circumstanțialul de mod',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică și analizează circumstanțialul de mod, cu punctuația specifică.'],
    resurse: ['Manual Art 8, p. 155', fisa(14), schema(14, 'Circumstanțialul de mod'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Dialogul despre adevăr, Explorare, a-b', timp: '8 min', activitate: pasi(
        'În perechi: circumstanțialele de mod din dialog, regenții lor și părțile de vorbire prin care se exprimă.') },
      { etapa: 'Notițe: circumstanțialul de mod', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (p. 155): întrebările, regenții, părțile de vorbire prin care se exprimă.') },
      { etapa: 'Identificare, Aplicații, ex. 1-2', timp: '10 min', activitate: pasi(
        'Textul despre povestitor: circumstanțialele de mod și părțile de vorbire prin care se exprimă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (circumstanțialul și partea de vorbire) și ex. 2 (regentul), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Analiza după model, ex. 3', timp: '9 min', activitate: pasi(
        'Fragmentul din Cartea Pricoliciului: primul circumstanțial la tablă, după modelul „brusc”, apoi elevii continuă.') },
      { etapa: 'Cum? sau Când?', timp: '2 min', activitate: pasi(
        'Doi elevi formulează câte un enunț cu un adverb de mod și unul cu un adverb de timp; clasa pune întrebarea potrivită.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3, restul fragmentului; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Circumstanțiala de mod',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Definește propoziția circumstanțială de mod și identifică elementele de relație și topica ei.'],
    resurse: ['Manual Art 8, pp. 156-157', fisa(15), schema(15, 'Circumstanțiala de mod'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Povestitorul, Explorare, a-f', timp: '10 min', activitate: pasi(
        'Textul de la p. 156: felul subordonatelor colorate și regenții lor; expansiunea circumstanțialului din a cincea frază; elementele de relație și funcția lor.') },
      { etapa: 'Corelativele, ex. 1-3', timp: '5 min', activitate: pasi(
        'Unde sunt adverbele corelative, ce rol au; poziția subordonatelor din enunțurile de la ex. 3.') },
      { etapa: 'Notițe: circumstanțiala de mod', timp: '5 min', activitate: pasi(
        'Schema lecției și Repere (pp. 156-157): regenții, elementele de relație, corelativele, virgula.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (subordonata și elementul de relație) și ex. 2 (felul subordonatelor introduse prin „cum”), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Identificare, Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Enunțurile a-h, oral: subordonata, regentul și elementul de relație.') },
      { etapa: 'Expansiune, ex. 4', timp: '4 min', activitate: pasi(
        'Cele patru enunțuri, după model, în caiete.') },
      { etapa: 'Autoevaluare L8-L13', timp: '4 min', activitate: pasi(
        'Cele trei afirmații de la p. 157, în caiete; doi elevi le citesc.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3 și 5-6; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Tipare textuale de structurare a ideilor. Pro-contra (partea 1/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Identifică idei contrare și analizează mijloacele prin care sunt ierarhizate argumentele și contraargumentele.'],
    resurse: ['Manual Art 8, pp. 158-159', fisa(16), fl(16), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Opinii opuse, „Pentru început”, ex. 1-3', timp: '7 min', activitate: pasi(
        'Cele două opinii opuse din fragmentul despre ascultătorii lui Ioniță; argumentele folosite pentru a cere și pentru a refuza un produs.') },
      { etapa: 'Textul despre pisică, Explorare, ex. 1', timp: '8 min', activitate: pasi(
        'În perechi: două perechi de argumente opuse, reformulate pe două coloane.') },
      { etapa: 'Conectori, exemple, ierarhizare, ex. 2-4', timp: '6 min', activitate: pasi(
        'Cuvintele care anunță contraargumentul; exemplele fiecărui argument; formulele de ierarhizare.') },
      { etapa: 'Notițe: tiparul pro-contra', timp: '5 min', activitate: pasi(
        'Fișa lecției și Repere (p. 158): argumentele pro, contraargumentele, exemplele, conectorii de trecere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul despre uniformă) și ex. 2 (argumente și contraargumente), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pro sau contra, Aplicații, ex. 3', timp: '5 min', activitate: pasi(
        'Argumentele din schemă, clasificate pro și contra tezei.') },
      { etapa: 'Reclamele preferate, ex. 1-2', timp: '4 min', activitate: pasi(
        'Fiecare notează trei reclame preferate; domeniile lor și cui se adresează.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2; Aplicații, ex. 4 a (ideile pro despre reclamele pentru copii), pentru ora următoare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Tipare textuale de structurare a ideilor. Pro-contra (partea 2/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează un text de opinie cu argumente pro și contra, respectând etapele scrierii.'],
    resurse: ['Manual Art 8, pp. 158-159', fisa(17), fl(17), 'Tabelul pro-contra de la ora anterioară'],
    desfasurare: [
      { etapa: 'Ideile pro și contra, Aplicații, ex. 4', timp: '8 min', activitate: pasi(
        'În perechi: completează ideile pro despre reclamele pentru copii, exemplele, apoi contraargumentele cu exemplele lor.') },
      { etapa: 'Planul, ex. 5 a', timp: '5 min', activitate: pasi(
        'Planul textului: opinia în introducere, două argumente cu contraargumentele lor în cuprins, concluzia care respinge contraargumentele.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '7 min', activitate: pasi(
        'Pagina 1: ex. 1 (ordonarea unui text pro-contra), individual, 5 minute; verificare, 2 minute. Ex. 2 rămâne temă.') },
      { etapa: 'Redactarea, ex. 5 a-d', timp: '17 min', activitate: pasi(
        'Fiecare redactează textul de 50-100 de cuvinte, apoi îl recitește: ortografia, conectorii, ce se poate tăia; scrie forma finală.') },
      { etapa: 'Din scaunul autorului, ex. 6', timp: '10 min', activitate: pasi(
        'Patru-cinci elevi își citesc textele; colegii le evaluează după grila de la p. 159.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 2-4.') },
    ],
    evaluare: 'Grila de evaluare de la p. 159; fișa de exerciții, ex. 1; verificarea textului de opinie.',
  },
  'lectia-18': {
    titlu: 'Recapitulare (partea 1/2)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de lectură și comunicare orală din unitate.'],
    resurse: ['Manual Art 8, pp. 160-161', fisa(18), 'Quizul „Recapitulare, lectură și limbă română” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Lectura predictivă, ex. 1-9', timp: '18 min', activitate: pasi(
        'Citesc pe fragmente Cele trei adevăruri ale canarului; după fiecare, elevii completează tabelul cu trei coloane: ce anticipează, pe ce se bazează, dacă s-a confirmat.',
        'Comparăm predicțiile cu adevărurile rostite de canar.') },
      { etapa: 'Rezumat și procedeu, ex. 10-12', timp: '5 min', activitate: pasi(
        'Rezumatul oral; procedeul de prezentare a întâmplărilor (a-c); persoana la care relatează naratorul.') },
      { etapa: 'Personajele, ex. 14-15, 17-18 și 20', timp: '7 min', activitate: pasi(
        'De ce acceptă omul târgul; figura de stil care îi dă canarului însușiri umane; de ce „minte” canarul; al treilea adevăr spus indirect; reacția omului.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul „La cabană”) și ex. 2 (rama și povestea), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul „Recapitulare, lectură și limbă română”', timp: '6 min', activitate: pasi(
        'Elevii rezolvă quizul; lămurim greșelile frecvente.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: ex. 16, 19 și 21; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-19': {
    titlu: 'Recapitulare (partea 2/2)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de limbă română și redactare din unitate.'],
    resurse: ['Manual Art 8, pp. 160-161', fisa(19), 'Quizul „Recapitulare, circumstanțiale” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Părțile de propoziție, ex. 22-23', timp: '7 min', activitate: pasi(
        'Cuvintele scrise cu italice din text și propoziția scrisă îngroșat: funcția, partea de vorbire, regentul.') },
      { etapa: 'Frazele, ex. 24-25', timp: '6 min', activitate: pasi(
        'Fraza de la ex. 24, despărțită în propoziții; expansiunea cuvântului de la ex. 25.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1-3 (circumstanțialele și subordonatele din enunțurile despre bunic), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Subiectul de redactare, ex. 26', timp: '12 min', activitate: pasi(
        'Fiecare alege subiectul a sau b și scrie planul și primul paragraf; citim criteriile de evaluare de la p. 161.') },
      { etapa: 'Quizul „Recapitulare, circumstanțiale”', timp: '8 min', activitate: pasi(
        'Elevii rezolvă quizul; lămurim greșelile frecvente înainte de evaluare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: textul de la ex. 26, terminat; fișa de exerciții, pagina 2; recitirea notițelor pentru evaluare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
  },
  'lectia-20': {
    titlu: 'Evaluare',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Susține testul de evaluare sumativă pentru unitate.'],
    resurse: ['Testul tipărit, Manual Art 8, p. 162', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul (fragmentul din Capul de zimbru de Vasile Voiculescu, p. 162).',
        'Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură, câte 6 puncte), partea B, 30 de puncte (răspunsul la un e-mail, 150-300 de cuvinte, cu opinia lor despre valoarea sentimentală a obiectelor scumpe), 10 puncte din oficiu.',
        'Timpul orientativ: 5 minute pentru citirea textului, 20 pentru partea A, 15 pentru partea B; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual; supraveghez și răspund doar la întrebări despre formularea cerințelor.',
        'La 25 de minute anunț trecerea la partea B; cu 5 minute înainte de final le cer să-și recitească lucrarea.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
