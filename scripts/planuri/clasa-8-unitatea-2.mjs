// Planuri de lecție detaliate, Unitatea II „Cum sunt ceilalți?”, clasa a VIII-a.
// Pași concreți pe rubricile și exercițiile din Manual Art 8, pp. 52-96, cu fișa
// de exerciții a lecției folosită la „Obținerea performanței”. Exercițiile din
// manual nerezolvate în clasă rămân temă. Fără răspunsuri (ghid sau fișă).
// 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-8/unitatea-2/lectia-${n}/fisa-exercitii.pdf)`
const fl = (n) => `Fișa lecției (/materiale/clasa-8/unitatea-2/lectia-${n}/fisa.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul dramatic. Take, Ianke și Cadâr de Victor Ion Popa',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește un fragment din comedia Take, Ianke și Cadâr de Victor Ion Popa și formulează impresii de lectură.'],
    resurse: ['Manual Art 8, pp. 52-57', fisa(1), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Steaua mea, „Pentru început”, ex. 1-3', timp: '6 min', activitate: pasi(
        'Fiecare desenează steaua cu cinci colțuri și notează câte o informație despre sine; câțiva o prezintă și căutăm asemănări și diferențe.',
        'Cele două imagini de la p. 52: ce reprezintă și care le place mai mult.') },
      { etapa: 'Autorul', timp: '3 min', activitate: pasi(
        'Caseta despre Victor Ion Popa (p. 52); premiera piesei, în 1932.') },
      { etapa: 'Lectura model, ex. 4', timp: '14 min', activitate: pasi(
        'Citesc fragmentele din cele trei acte, cu rezumatele dintre paranteze drepte; elevii urmăresc și indicațiile scenice.') },
      { etapa: 'Impresii după prima lectură', timp: '5 min', activitate: pasi(
        'Cadranele de la p. 57, în caiete; trei elevi citesc un cadran.') },
      { etapa: 'Scena 1, pe roluri', timp: '5 min', activitate: pasi(
        'Trei elevi citesc scena 1 din actul I, respectând indicațiile scenice.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (informațiile esențiale) și ex. 2 (adevărat sau fals), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Cuvinte de altădată', timp: '3 min', activitate: pasi(
        'Notele de subsol: prăvălie, coloniale, vipie, flașnetă; de ce le păstrează autorul.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2; recitirea fragmentului din actul al II-lea.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Textul dramatic. Structuri textuale',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică aspectele caracteristice textului dramatic, indicațiile scenice și structurile textuale din fragment.'],
    resurse: ['Manual Art 8, pp. 58-59', fisa(2), fl(2), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Câmpul lexical al teatrului, Explorare, ex. 1', timp: '4 min', activitate: pasi(
        'Grupăm termenii în cei legați de textul literar și cei legați de spectacol.') },
      { etapa: 'Acte și scene, ex. 2-4', timp: '5 min', activitate: pasi(
        'Câte acte are piesa; cum se delimitează scenele; particularitățile grafice ale indicațiilor și ale numerotării.') },
      { etapa: 'Indicațiile, ex. 5-7', timp: '6 min', activitate: pasi(
        'Indicațiile externe și interne; un verb pentru „comedie”; informațiile și ordinea din lista personajelor.') },
      { etapa: 'Cititorul specializat și cel obișnuit, ex. 8', timp: '6 min', activitate: pasi(
        'Grupe de șase: trei citesc decorul actului I ca regizori sau scenografi, trei ca cititori obișnuiți; aleg varianta potrivită și o prezintă.') },
      { etapa: 'Notițe: textul dramatic și structurile textuale', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (pp. 58-59): actul și scena, indicațiile scenice externe și interne, dialogul și monologul, comedia și mijloacele comicului.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (indicațiile scenice) și ex. 2 (structura textuală), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Scena 1, jucată, ex. 9', timp: '6 min', activitate: pasi(
        'Grupele cu număr par citesc scena 1 pe roluri, cele cu număr impar o joacă, respectând indicațiile.') },
      { etapa: 'Structuri și comunicare, ex. 10-11', timp: '3 min', activitate: pasi(
        'Structura din decorul actului I; comunicarea monologată și dialogată din scenele 8 și 17.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-3 și 6-7; fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (nota de jurnal).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Timpul, spațiul, acțiunea, personajele',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Completează schema evenimențială a piesei și identifică trăsăturile morale ale personajelor.'],
    resurse: ['Manual Art 8, pp. 60-61', fisa(3), fl(3), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Durata și momentul, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Cât ar dura reprezentația; când se petrec întâmplările și pe ce perioadă.') },
      { etapa: 'Spațiul, ex. 4-5', timp: '4 min', activitate: pasi(
        'Unde e plasată acțiunea; ce observăm în indicațiile de decor ale celor trei acte.') },
      { etapa: 'Schema evenimentelor, ex. 6-7', timp: '6 min', activitate: pasi(
        'Completăm schema de la p. 60 între cele două situații; ce a generat neînțelegerile.') },
      { etapa: 'Personajele, Explorare, ex. 1-4', timp: '5 min', activitate: pasi(
        'Numărul personajelor; afișul spectacolului și personajele care lipsesc; relațiile dintre ele.') },
      { etapa: 'Notițe', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (pp. 60-61): timpul și spațiul teatral, acțiunea, conflictul, personajul dramatic și mijloacele de caracterizare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (cele trei acte) și ex. 2 (relațiile), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Fișele de identitate, Aplicații, ex. 3', timp: '8 min', activitate: pasi(
        'Cinci grupe trag la sorți câte un personaj și completează fișa (nume, stare civilă, profesie, naționalitate, religie, replică); prezintă pe scurt.') },
      { etapa: 'Limbajul lui Cadâr, ex. 5', timp: '2 min', activitate: pasi(
        'Particularitățile fonetice și gramaticale și de ce vorbește astfel.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 6, 7 și 9; fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (personajul preferat).') },
    ],
    evaluare: 'Aprecieri pe fișele de identitate; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează opinii despre semnificațiile textului și despre atitudinile personajelor.'],
    resurse: ['Manual Art 8, pp. 63-64', fisa(4), fl(4), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Titlul și lista, Interpretare, ex. 1', timp: '3 min', activitate: pasi(
        'De ce ordinea din titlu diferă de cea din lista personajelor.') },
      { etapa: 'Așteptarea, ex. 2', timp: '4 min', activitate: pasi(
        'Take și Ianke în prima și în ultima scenă: ce așteaptă, ce îi tensionează, contrastul cu Cadâr.') },
      { etapa: 'Oglinda, ex. 3', timp: '5 min', activitate: pasi(
        'Asemănările dintre Take și Ianke: casele, mărfurile, copiii, replicile, destinul Anei și al lui Ionel.') },
      { etapa: 'Cadâr, ex. 4-5', timp: '6 min', activitate: pasi(
        'Ce îl deosebește de prietenii lui; semnificația numelui „La Ierusalim”.') },
      { etapa: 'De ce se opun, ex. 6-7', timp: '4 min', activitate: pasi(
        'Alt motiv decât religia; de ce Cadâr îi ocrotește pe tineri (variantele a-d).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (simboluri) și ex. 2 (în oglindă), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Trenul și finalul, ex. 9-10', timp: '5 min', activitate: pasi(
        'Cum se schimbă privirea lui Ianke asupra trenului; scena finală.') },
      { etapa: 'Dezbaterea, ex. 14', timp: '9 min', activitate: pasi(
        'Grupe de șase dezbat 5 minute ideea că e important să trăiești împreună cu ceilalți, nu doar alături; raportorii prezintă concluziile.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 11-13 și 15; fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Aprecieri pe raportările grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Textul nonliterar. Cronica de spectacol. Omenescul personajelor de Ștefan Popa',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Recunoaște scopul și destinatarul unei cronici de spectacol și investighează structura textului.'],
    resurse: ['Manual Art 8, pp. 65-67', fisa(5), fl(5), 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Pentru început”, ex. 1-2', timp: '4 min', activitate: pasi(
        'Au citit elevii articole despre spectacole, filme, albume? Despre ce ar fi un text numit „Omenescul personajelor”?') },
      { etapa: 'Autorul și lectura, ex. 3', timp: '9 min', activitate: pasi(
        'Caseta despre Ștefan Aug. Doinaș (Ștefan Popa); citesc cronica, cu notele de subsol.') },
      { etapa: 'Impresii după prima lectură', timp: '3 min', activitate: pasi(
        'Cadranele de la p. 66, oral.') },
      { etapa: 'Destinatarul și scopul, Explorare, ex. 1-2', timp: '3 min', activitate: pasi(
        'Cui se adresează textul și cu ce scop a fost scris.') },
      { etapa: 'Investigația, ex. 3-4', timp: '10 min', activitate: pasi(
        'Grupe de șase, cu rolurile lingvistul, arheologul, redactorul, detectivul, analistul, evaluatorul; completează fișa grupei și o compară cu celelalte.') },
      { etapa: 'Notițe: cronica de spectacol', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 67): textul nonliterar, cronica de spectacol, aspectele comentate, subiectivitatea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (fapt sau opinie?) și ex. 2 (structura cronicii), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '3 min', activitate: pasi(
        'Elementul din introducere; ce nu dezvăluie rezumatul; rolul parantezelor.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 4-6; fișa lecției; fișa de exerciții, pagina 2; opțional, Portofoliu.') },
    ],
    evaluare: 'Fișele grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Text auxiliar. Nathan Înțeleptul de Gotthold Ephraim Lessing',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește parabola celor trei inele din Nathan Înțeleptul și formulează un punct de vedere argumentat.'],
    resurse: ['Manual Art 8, pp. 68-69', fisa(6), fl(6), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Legătura cu comedia', timp: '4 min', activitate: pasi(
        'Citim introducerea de la p. 68: piesa lui Lessing, Ierusalimul, întrebarea lui Saladin.') },
      { etapa: 'Lectura pe roluri', timp: '6 min', activitate: pasi(
        'Doi elevi citesc replicile lui Nathan și Saladin; un al treilea, indicațiile.') },
      { etapa: 'Locul, Discutarea textului, ex. 1-2', timp: '3 min', activitate: pasi(
        'De ce Ierusalimul; punctul cardinal din parabolă.') },
      { etapa: 'Rezumatul oral, ex. 3', timp: '4 min', activitate: pasi(
        'Doi elevi rezumă parabola.') },
      { etapa: 'Inelul, ex. 4-7', timp: '7 min', activitate: pasi(
        'Efectul inelului; trăsătura primului proprietar; cui îi e destinat inelul; de ce tatăl cu trei fii nu respectă tradiția.') },
      { etapa: 'Saladin, ex. 8', timp: '2 min', activitate: pasi(
        'Ce trăsătură dezvăluie replica și indicația.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (parabola, pas cu pas) și ex. 2 (ce simbolizează), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Interpretările, ex. 9, oral', timp: '6 min', activitate: pasi(
        'Discutăm cele două interpretări ale elevilor de clasa a VIII-a; fiecare alege una.') },
      { etapa: 'Biblioteci deschise', timp: '3 min', activitate: pasi(
        'Prezint „Romeo și Julieta” și „Țara lui Gufi”, recomandate la p. 69.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: ex. 9 (postarea pe blog); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Relații culturale constructive. Noi și ceilalți',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Discută despre comunitățile interculturale și multiculturale și despre relațiile culturale constructive.'],
    resurse: ['Manual Art 8, pp. 70-71', fisa(7), 'Infograficul „Relații culturale constructive. Noi și ceilalți” (/materiale/clasa-8/unitatea-2/lectia-7/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Împreună sau alături, „Pentru început”', timp: '4 min', activitate: pasi(
        'Imaginea de la p. 70: îi corespunde „împreună” sau „alături”? Dezbatere scurtă.') },
      { etapa: 'Slavici și Bartók, Explorare', timp: '12 min', activitate: pasi(
        'Grupe de șase citesc fragmentul din memoriile lui Slavici și textul despre Béla Bartók și rezolvă cerințele a-f (harta vecinilor, comunitatea din Șiria, revelația lui Slavici, Bartók și muzica românească).') },
      { etapa: 'Prezentarea grupelor', timp: '5 min', activitate: pasi(
        'Fiecare grupă prezintă câte o cerință.') },
      { etapa: 'Notițe', timp: '5 min', activitate: pasi(
        'Proiectez infograficul; în caiete, după Repere (p. 71): comunități multiculturale și interculturale, schimbul între culturi, relațiile culturale constructive, stereotipurile.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (multicultural sau intercultural?) și ex. 2 (Slavici și Bartók), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-4', timp: '6 min', activitate: pasi(
        '„Împreună” și „alături” asociate comunităților; tipul comunității din Șiria; afirmația lui Slavici; viziunea copilului și a mamei.') },
      { etapa: 'Aplicații, ex. 5 și 7', timp: '4 min', activitate: pasi(
        'Bartók și relațiile culturale constructive; în ce fel de comunitate trăiesc elevii.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 6; fișa de exerciții, pagina 2; opțional, Provocări (una dintre afirmațiile lui Doinaș).') },
    ],
    evaluare: 'Aprecieri pe prezentările grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-8': {
    titlu: 'Atitudini comunicative',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Simulează situații de comunicare asertivă printr-un joc de rol.'],
    resurse: ['Manual Art 8, pp. 72-73', fisa(8), 'Quizul „Atitudini comunicative” (materialul de joc al lecției)', 'Bilețele cu situații de comunicare'],
    desfasurare: [
      { etapa: 'Prietenul care întârzie, „Pentru început”', timp: '4 min', activitate: pasi(
        'Elevii aleg reacția a-d și o argumentează.') },
      { etapa: 'Take și Ionel, Explorare', timp: '8 min', activitate: pasi(
        'Grupe de trei citesc pe roluri fragmentul din scena 5 și răspund la cerințele a-f; grupele prezintă.') },
      { etapa: 'Notițe', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (pp. 72-73): flexibilitatea, asertivitatea, disponibilitatea pentru negociere; pasivitatea, agresivitatea, pasivitatea agresivă, manipularea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce atitudine?) și ex. 2 (rescrie asertiv), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Căștile, Aplicații, ex. 1', timp: '6 min', activitate: pasi(
        'Doi reprezentanți joacă situația câte un minut, apoi schimbă rolurile; clasa răspunde la cele trei întrebări.') },
      { etapa: 'Comunicare asertivă, ex. 2', timp: '4 min', activitate: pasi(
        'Cum ar comunica asertiv elevii în situațiile a-c.') },
      { etapa: 'Joc de rol, ex. 3', timp: '6 min', activitate: pasi(
        'Perechi și grupe trag bilețelele cu situațiile a-b și le joacă; colegii evaluează pe grila de la p. 73.') },
      { etapa: 'Quizul', timp: '2 min', activitate: pasi(
        'Câteva întrebări din quizul „Atitudini comunicative”.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Provocări, ex. 1-2; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Evaluarea jocurilor de rol pe grilă; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Construcțiile active. Construcțiile pasive cu verbul a fi',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Transformă construcțiile active în construcții pasive cu verbul a fi și invers.'],
    resurse: ['Manual Art 8, pp. 74-75', fisa(9), 'Schema „Construcții active. Construcții pasive cu verbul a fi” (/materiale/clasa-8/unitatea-2/lectia-9/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Activ și pasiv, „Pentru început”, ex. 1-2', timp: '4 min', activitate: pasi(
        'Care adjectiv se potrivește asertivității; încălțămintea din imagini, asociată cu un comportament activ sau pasiv.') },
      { etapa: 'Scenograful și decorurile, Explorare, ex. 1-3', timp: '7 min', activitate: pasi(
        'Subiectele celor două propoziții; în perechi, variantele A-E; diferența de formă a verbului „a proiecta”.') },
      { etapa: 'Notițe: construcția activă și cea pasivă', timp: '7 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (p. 74): construcția activă, construcția pasivă, forma verbală pasivă, acordul participiului, complementul de agent.') },
      { etapa: 'Transformări, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Ce verbe pot apărea în construcții pasive; în grupe de patru, „Ionel așteaptă trenul” și varianta pasivă, cu cerințele a-e.') },
      { etapa: 'Notițe: transformarea', timp: '3 min', activitate: pasi(
        'Regulile trecerii de la activ la pasiv și invers (Repere, p. 75).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (activ sau pasiv?) și ex. 2 (transformă), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Transformăm oral construcțiile active în pasive și invers.') },
      { etapa: 'Construcții pasive, ex. 3', timp: '3 min', activitate: pasi(
        'Enunțurile a-g care conțin construcții pasive, cu justificare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 4-5; Portofoliu (trei reguli pentru actori, cu construcții pasive); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Predicatul (actualizare)',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Actualizează cunoștințele despre predicatul verbal și predicatul nominal.'],
    resurse: ['Manual Art 8, pp. 76-77', fisa(10), 'Schema „Predicatul (actualizare)” (/materiale/clasa-8/unitatea-2/lectia-10/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Predicatele din comedie, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Predicatele verbale din fragmentele a-b și partea de vorbire prin care se exprimă.') },
      { etapa: 'Verbul „a fi”, ex. 3', timp: '4 min', activitate: pasi(
        'În care enunț despre cozonac „a fi” e predicat verbal și de ce.') },
      { etapa: 'Predicatele nominale, ex. 4', timp: '6 min', activitate: pasi(
        'În perechi, predicatele nominale din textul despre Cristian și partea de vorbire a numelui predicativ.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 76-77): predicatul verbal, predicatul nominal, verbele copulative, numele predicativ simplu și multiplu, tabelul părților de vorbire, confuzia dintre pasiv și predicatul nominal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (verbal sau nominal?) și ex. 2 (numele predicativ), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '7 min', activitate: pasi(
        'Felul predicatelor din textul lui Ion Zamfirescu; în perechi, tabelul pasive / predicate nominale.') },
      { etapa: 'Aplicații, ex. 3, oral', timp: '4 min', activitate: pasi(
        'Enunțuri cu „a fi”, „a ajunge”, „a rămâne”, „a însemna”, predicative și copulative.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 4; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Construcțiile cu pronume reflexive',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică pronumele reflexive și funcțiile sintactice ale construcțiilor cu pronume reflexive.'],
    resurse: ['Manual Art 8, pp. 78-79', fisa(11), 'Schema „Construcțiile cu pronume reflexive” (/materiale/clasa-8/unitatea-2/lectia-11/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Echipa de teatru, Explorare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Pronumele reflexive din text, cazul lor și partea de vorbire pe care o însoțesc.') },
      { etapa: 'Reflexivul și substantivul, ex. 3-4', timp: '4 min', activitate: pasi(
        '„Actorii își repetă rolurile”; „viața-mi”.') },
      { etapa: 'Locuțiunile, ex. 5', timp: '2 min', activitate: pasi(
        'Din ce locuțiuni fac parte reflexivele din enunțurile a-b.') },
      { etapa: 'Proba înlocuirii, ex. 6', timp: '6 min', activitate: pasi(
        'În perechi, reluăm reflexivul prin forma accentuată și îl înlocuim cu un pronume personal; ce funcție are.') },
      { etapa: 'Reciprocitatea și posesia, ex. 7-8', timp: '4 min', activitate: pasi(
        'Asocierea enunțurilor cu grupurile pronominale; „Ana își calcă rochia”.') },
      { etapa: 'Fără funcție și pasiv-reflexiv, ex. 9-10', timp: '4 min', activitate: pasi(
        'Enunțurile în care proba nu merge; funcția substantivului din „Rolurile se distribuie de către regizor”.') },
      { etapa: 'Notițe', timp: '7 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 78-79): reflexivul fără funcție și cu funcție (complement direct, indirect, posesiv, atribut în dativ), probele, construcția pasiv-reflexivă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (are funcție sau nu?) și ex. 2 (pasiv-reflexivă?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'În perechi, construcțiile reflexive din enunțuri și din fragmentul cronicii, cu sau fără funcție.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-3; Portofoliu, ex. 1; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Construcțiile impersonale',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică verbele impersonale și transformă construcțiile personale în construcții impersonale.'],
    resurse: ['Manual Art 8, pp. 80-81', fisa(12), 'Schema „Construcțiile impersonale” (/materiale/clasa-8/unitatea-2/lectia-12/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Semnele meteo, Explorare, ex. 1-2', timp: '4 min', activitate: pasi(
        'Verbele asociate semnelor meteorologice; pot avea subiect?') },
      { etapa: 'Referirea la persoană, ex. 3-4', timp: '4 min', activitate: pasi(
        'Există subiect în cele patru enunțuri? Cuvintele care se referă la persoană și funcția lor.') },
      { etapa: 'Stările, ex. 5', timp: '5 min', activitate: pasi(
        'În perechi, propozițiile cu „a fi” (noapte, frig, foame, dor): subiectul, locul lui, predicatul, funcția pronumelor.') },
      { etapa: 'Subiecte și transformări, ex. 6-10', timp: '7 min', activitate: pasi(
        'Subiectul nonuman; predicatele și subiectele din lista de la ex. 7; complementul de agent; transformarea după model.') },
      { etapa: 'Notițe', timp: '7 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 80-81): construcții mereu impersonale (fără subiect, cu subiect) și construcții care devin impersonale prin „se” sau „a fi”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (cu subiect sau fără?) și ex. 2 (în construcție impersonală), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Transformările după model; primele opt enunțuri din lista de la ex. 2.') },
      { etapa: 'Furtuna, ex. 3', timp: '3 min', activitate: pasi(
        'Construcțiile impersonale din indicațiile scenice ale lui Shakespeare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 (restul enunțurilor); fișa de exerciții, pagina 2; opțional, Provocări (rețeta).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Subiectul (actualizare)',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Actualizează cunoștințele despre subiect, identificând subiectele și părțile de vorbire prin care se exprimă.'],
    resurse: ['Manual Art 8, pp. 82-83', fisa(13), 'Schema „Subiectul (actualizare)” (/materiale/clasa-8/unitatea-2/lectia-13/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Fragmentele din comedie, Explorare, ex. 1', timp: '7 min', activitate: pasi(
        'În perechi: subiectele exprimate, simple sau multiple; subiectele neexprimate și felul lor; ultimul predicat poate avea subiect?') },
      { etapa: 'Partea de vorbire și locul, ex. 2-3', timp: '7 min', activitate: pasi(
        'Partea de vorbire prin care se exprimă subiectul în cele paisprezece enunțuri; poziția față de predicat.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 82-83): subiectul exprimat (simplu, multiplu) și neexprimat (subînțeles, inclus), tabelul părților de vorbire, locul și virgula.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (subiectul) și ex. 2 (partea de vorbire), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '6 min', activitate: pasi(
        'Felul subiectelor; subiectele așezate după predicat; subiectele din enunțurile a-h.') },
      { etapa: 'Completarea, ex. 5', timp: '4 min', activitate: pasi(
        'Subiectele cerute, frontal.') },
      { etapa: 'Enunțurile mele, ex. 4, oral', timp: '3 min', activitate: pasi(
        'Câte un enunț cu subiectul exprimat prin fiecare parte de vorbire cerută.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 6; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Construcțiile incidente',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică construcțiile incidente și explică punctuația și rolul lor în enunț.'],
    resurse: ['Manual Art 8, pp. 84-85', fisa(14), 'Schema „Construcțiile incidente” (/materiale/clasa-8/unitatea-2/lectia-14/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Conversația prietenelor, Explorare, ex. 1', timp: '7 min', activitate: pasi(
        'În perechi: sunt structurile colorate legate sintactic de comunicare? Din ce sunt alcătuite și cum sunt despărțite?') },
      { etapa: 'Ce folosim noi, ex. 2', timp: '3 min', activitate: pasi(
        'Ce construcții incidente folosesc elevii.') },
      { etapa: 'În comedie, ex. 3-5', timp: '5 min', activitate: pasi(
        'Construcțiile incidente din replicile a-c, de ce le folosește autorul, propoziția „mi-a spus”.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 84-85): definiția, alcătuirea, categoriile (adresări, verbe de declarație, probabilitate, stări, automatisme), intonația, punctuația.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (găsește incidenta) și ex. 2 (ce exprimă?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '7 min', activitate: pasi(
        'Construcțiile incidente din enunțurile a-g, alcătuirea și punctuația lor.') },
      { etapa: 'Cehov, ex. 3', timp: '5 min', activitate: pasi(
        'Construcțiile incidente din fragmentele din „Pescărușul” și din articol; de ce apar.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Provocări, ex. 1-2 (topul construcțiilor incidente, automatismele verbale); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Fraza. Coordonarea',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Analizează fraza prin relația de coordonare dintre propoziții.'],
    resurse: ['Manual Art 8, pp. 86-87', fisa(15), 'Schema „Fraza. Coordonarea” (/materiale/clasa-8/unitatea-2/lectia-15/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Fraza, Explorare, ex. 1-3', timp: '7 min', activitate: pasi(
        'Subliniem predicatele și despărțim fraza în propoziții; frazele cu predicate subînțelese.') },
      { etapa: 'Coordonarea, Explorare, ex. 1-4', timp: '8 min', activitate: pasi(
        'Mijloacele coordonării în textul despre planul de lectură; părțile de vorbire care o realizează; virgula în frazele a-d; locuțiunile.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 86-87): fraza, predicatul subînțeles, juxtapunerea, joncțiunea, tabelul conjuncțiilor coordonatoare și al virgulei, locuțiunile conjuncționale.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (propoziții și coordonare) și ex. 2 (felul conjuncției), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '8 min', activitate: pasi(
        'Despărțim frazele a-f în propoziții; modalitățile de coordonare și felul conjuncțiilor.') },
      { etapa: 'Frazele din liste, ex. 3', timp: '4 min', activitate: pasi(
        'Asociem propozițiile din listele A și B, cu virgulele necesare.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Portofoliu (enunțurile a-b, alegerea argumentată); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Fraza. Subordonarea',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Analizează fraza prin relația de subordonare, identificând conjuncțiile și locuțiunile conjuncționale folosite.'],
    resurse: ['Manual Art 8, pp. 88-89', fisa(16), fl(16), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Principale și secundare, Explorare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Propozițiile cu sens de sine stătător și cele care depind de un cuvânt; coordonarea din frazele a-c.') },
      { etapa: 'Subordonarea prin conjuncții, Explorare, ex. 1-3', timp: '7 min', activitate: pasi(
        'Transcriem frazele, subliniem predicatele, încercuim elementele de relație, despărțim în propoziții; înlocuim locuțiunile cu conjuncții.') },
      { etapa: 'Notițe: subordonarea', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (p. 88): propoziția principală și cea secundară, elementul regent și propoziția regentă, conjuncțiile și locuțiunile conjuncționale subordonatoare.') },
      { etapa: 'Alte elemente de relație, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Pronumele și adjectivele relative și nehotărâte; adverbele relative din replicile comediei; funcția lor în subordonată.') },
      { etapa: 'Notițe: elementele de relație', timp: '3 min', activitate: pasi(
        'Repere (p. 89): pronume, adjective și adverbe relative și nehotărâte, cu funcție în propoziția pe care o introduc.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (propoziția secundară) și ex. 2 (conjuncție sau locuțiune?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Analiza replicii lui Ion (G.M. Zamfirescu); completăm frazele cu conjuncții.') },
      { etapa: 'Locuțiunile, ex. 3', timp: '3 min', activitate: pasi(
        'Asociem propozițiile din seriile A și B și numim locuțiunile conjuncționale.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 4-5; fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Enunțuri eliptice. Norme de punctuație',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică tipurile de elipsă din diverse situații de comunicare, orală și scrisă.'],
    resurse: ['Manual Art 8, pp. 90-91', fisa(17), fl(17), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ce citim, Explorare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Secvențele omise din dialog, după exemplul dat; verbe sau substantive.') },
      { etapa: 'Propozițiile fragmentare, ex. 3-4', timp: '5 min', activitate: pasi(
        'Propozițiile cu secvențe omise din al doilea dialog și gruparea lor pe categoriile a-c.') },
      { etapa: 'Câte propoziții? ex. 5', timp: '3 min', activitate: pasi(
        'Numărul de propoziții din cele două fraze, cu argument.') },
      { etapa: 'Notițe: elipsa', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 90): elipsa verbală, elipsa nominală, propozițiile fragmentare (în coordonare, în răspunsuri, prin adverbe).') },
      { etapa: 'Punctuația, Explorare, ex. 1-2', timp: '4 min', activitate: pasi(
        'Virgula și linia de pauză în enunțurile a-b; cum marcăm elipsa în vorbire (Repere, p. 91).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce s-a omis?) și ex. 2 (câte propoziții?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '7 min', activitate: pasi(
        'Replicile copiilor din imagine; tipul de elipsă; enunțurile eliptice din replicile comediei.') },
      { etapa: 'Fraza lui Decebal, ex. 4', timp: '3 min', activitate: pasi(
        'Împărțim fraza din replica lui Tudor Mușatescu în propoziții.') },
      { etapa: 'Autoevaluare L9-L17', timp: '3 min', activitate: pasi(
        'Cele trei enunțuri de la p. 91, în caiete.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 5 (analiza după model); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea L9-L17.',
  },
  'lectia-18': {
    titlu: 'Cronica de film. Redactarea de mână și computerizată. Etica redactării (partea 1/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Vizionează un scurtmetraj și pregătește redactarea unei cronici de film.'],
    resurse: ['Manual Art 8, pp. 92-93', fisa(18), fl(18), 'Un scurtmetraj potrivit vârstei, ales de profesor'],
    desfasurare: [
      { etapa: '„Pentru început”, ex. 1-2', timp: '4 min', activitate: pasi(
        'Ce vrem să aflăm despre un film înainte să-l vedem; patru informații dintr-o cronică.') },
      { etapa: 'Cronica „Micului Prinț”, Explorare, ex. 1-5', timp: '10 min', activitate: pasi(
        'Citim cronica de la p. 92; paragrafele și informațiile lor; ce nu dezvăluie și de ce; semnificația filmului; ce ne stârnește interesul.') },
      { etapa: 'Notițe: cronica de film', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (pp. 92-93): cronica de film, ce nu dezvăluie, întrebările Ce?, Când și unde?, Cine?, Cum?, etica redactării.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '9 min', activitate: pasi(
        'Pagina 1: ex. 1 (cele cinci paragrafe) și ex. 2 (voie sau nu?), individual, 6 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Vizionarea, Aplicații, ex. 1', timp: '10 min', activitate: pasi(
        'Vizionăm scurtmetrajul propus de manual (Snack Attack) sau altul ales de mine; elevii notează răspunsurile la întrebări.') },
      { etapa: 'Genericul și notițele, ex. 2', timp: '6 min', activitate: pasi(
        'Revedem genericul și completăm fișa de exerciții, ex. 3.') },
      { etapa: 'Primul paragraf, ex. 3', timp: '4 min', activitate: pasi(
        'Elevii scriu paragraful cu informațiile generale, pe fișa lecției.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: paragrafele 2 și 3 ale cronicii, pe ciornă.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; notițele de vizionare.',
  },
  'lectia-19': {
    titlu: 'Cronica de film. Redactarea de mână și computerizată. Etica redactării (partea 2/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează, revizuiește și prezintă cronica de film, respectând originalitatea și etica redactării.'],
    resurse: ['Manual Art 8, pp. 92-93', fisa(19), fl(19), 'Fișa de pregătire de la ora anterioară'],
    desfasurare: [
      { etapa: 'Etica redactării, fișa de exerciții, ex. 1', timp: '6 min', activitate: pasi(
        'Corect sau plagiat, individual, apoi verificare; cum citez și cum notez sursa.') },
      { etapa: 'Redactarea, Aplicații, ex. 3-4', timp: '15 min', activitate: pasi(
        'Elevii scriu paragrafele 4 și 5 și revizuiesc paragrafele de acasă, recitind după fiecare; trec printre bănci.') },
      { etapa: 'Titlul, ex. 6', timp: '3 min', activitate: pasi(
        'Un titlu care să conțină titlul filmului.') },
      { etapa: 'Verificarea, ex. 5 și 8', timp: '7 min', activitate: pasi(
        'Fișa de exerciții, ex. 2, și grila de la p. 93: ghilimelele, sursa, finalul nedezvăluit, ortografia.') },
      { etapa: 'Varianta pentru publicare, ex. 7', timp: '10 min', activitate: pasi(
        'Rescrierea cronicii de mână, lizibil, sau la calculator, cu regulile de tehnoredactare.') },
      { etapa: 'Două lecturi', timp: '6 min', activitate: pasi(
        'Doi elevi își citesc cronicile; colegii spun dacă i-ar convinge să vadă filmul.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: cronica finalizată, pentru afișare sau blogul clasei; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Cronicile de film, strânse pentru apreciere; autoevaluarea pe grila de la p. 93.',
  },
  'lectia-20': {
    titlu: 'Recapitulare (partea 1/2)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de lectură din unitate.'],
    resurse: ['Manual Art 8, pp. 94-95', fisa(20), 'Quizul „Recapitulare, lectură” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ciorchinele unității', timp: '3 min', activitate: pasi(
        'Pe tablă, „Cum sunt ceilalți?”; elevii spun câte o noțiune de lectură sau de comunicare din unitate.') },
      { etapa: 'Lectura pe roluri', timp: '6 min', activitate: pasi(
        'Doi elevi citesc fragmentul din „Citadela sfărâmată” de Horia Lovinescu (p. 94), un al treilea citește indicațiile scenice.') },
      { etapa: 'Indicațiile scenice, cerințele 1-2', timp: '6 min', activitate: pasi(
        'În perechi, rolul indicației inițiale, prim-planul, secvența dominantă, informația despre Irina; exemple pentru gesturi, ton, ritm, atitudine.') },
      { etapa: 'Fișa comparativă, cerința 3', timp: '8 min', activitate: pasi(
        'Grupe de șase compară personajele Irina și Petru (statut, preferințe, idealuri).') },
      { etapa: 'Cerințele 4, 6, 7, 9, 10', timp: '7 min', activitate: pasi(
        'Evenimentul din spatele numelui „domnul Petru Dragomirescu”; romanul care inspiră jocul; de ce Petru oprește jocul; unde caută libertatea; replica Irinei.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (fragmentul „Seara, în curte”, scris pentru fișă, și noțiunile recapitulate), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, lectură”, frontal.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: cerința 11 (cel puțin 80 de cuvinte); cerințele 5 și 8; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Fișele comparative ale grupelor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-21': {
    titlu: 'Recapitulare (partea 2/2)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de limbă română din unitate.'],
    resurse: ['Manual Art 8, pp. 94-95', fisa(21), 'Quizul „Recapitulare, limbă română” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'O replică pe tablă', timp: '3 min', activitate: pasi(
        'Scriu „E așteptat.” din replica lui Petru: ce fel de construcție e?') },
      { etapa: 'Pasivul, cerințele 13-14', timp: '5 min', activitate: pasi(
        'Transformăm „Am văzut un tablou de Grigorescu.” în pasiv; complementul de agent pentru „E așteptat”.') },
      { etapa: 'Reflexive și impersonale, cerințele 15-16', timp: '5 min', activitate: pasi(
        'Construcțiile reflexive și funcția pronumelui; verbul impersonal și funcția cuvântului colorat.') },
      { etapa: 'Predicate și subiecte, cerința 17', timp: '6 min', activitate: pasi(
        'Analizăm predicatele și subiectele din replica lui Petru, la tablă.') },
      { etapa: 'Incidente și fraze, cerințele 18-19', timp: '7 min', activitate: pasi(
        'Două construcții incidente; despărțim frazele a-c în propoziții, cu felul și relațiile lor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (cinci enunțuri și cerințele lor), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Transformări, fișa, ex. 3', timp: '4 min', activitate: pasi(
        'Rezolvăm frontal cele trei transformări.') },
      { etapa: 'Quizul', timp: '6 min', activitate: pasi(
        'Quizul „Recapitulare, limbă română”, frontal; la greșeli, revenim la notițe.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 4; cerința 19, frazele rămase.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
  },
  'lectia-22': {
    titlu: 'Recapitulare (partea 3/3, comunicare orală și redactare)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de comunicare orală și redactare din unitate.'],
    resurse: ['Manual Art 8, pp. 94-95', fisa(22), 'Quizul „Recapitulare, comunicare orală și redactare” (materialul de joc al lecției)', 'Cronicile de film redactate'],
    desfasurare: [
      { etapa: 'Atitudinea comunicativă, cerința 12', timp: '4 min', activitate: pasi(
        'Ce atitudini au Petru și Irina în cele două replici.') },
      { etapa: 'Jocul de rol', timp: '8 min', activitate: pasi(
        'Perechi rejoacă dialogul dintre Irina și Petru, înlocuind replicile agresive cu replici asertive; două perechi prezintă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce atitudine?) și ex. 2 (planul cronicii), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Cronicile de acasă, cerința 20', timp: '9 min', activitate: pasi(
        'Trei elevi își citesc cronicile; colegii le apreciază pe grila de pe fișă (ex. 3).') },
      { etapa: 'Quizul', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, comunicare orală și redactare”, frontal.') },
      { etapa: 'Pregătirea evaluării', timp: '5 min', activitate: pasi(
        'Anunț proba de ora viitoare: un fragment dramatic nou, zece cerințe de limbă și lectură (partea A) și cronica unui film, de cel puțin 200 de cuvinte (partea B).',
        'Ce recitesc acasă: notițele despre textul dramatic, construcțiile verbale, subiect, predicat, frază, cronica de film.') },
      { etapa: 'Autoevaluarea cronicii', timp: '4 min', activitate: pasi(
        'Fiecare își verifică propria cronică pe grila de la p. 93.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: cronica revizuită; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Interevaluare pe grila cronicii; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-23': {
    titlu: 'Evaluare',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Susține testul de evaluare sumativă pentru unitate.'],
    resurse: ['Testul tipărit, Manual Art 8, p. 96', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul (fragmentul din „Idolul și Ion Anapoda” de G.M. Zamfirescu, p. 96).',
        'Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (cronica filmului preferat sau a ultimului film văzut, cel puțin 200 de cuvinte), 10 puncte din oficiu.',
        'Timpul orientativ: 5 minute pentru citirea textului, 20 pentru partea A, 15 pentru cronică; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.',
        'Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să verifice titlul cronicii și să nu dezvăluie finalul filmului.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
