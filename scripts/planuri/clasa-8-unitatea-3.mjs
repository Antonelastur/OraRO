// Planuri de lecție detaliate, Unitatea III „Cum descoperim lumea?”, clasa a VIII-a.
// Pași concreți pe rubricile și exercițiile din Manual Art 8, pp. 97-130, cu fișa
// de exerciții a lecției folosită la „Obținerea performanței”. Exercițiile din
// manual nerezolvate în clasă rămân temă. Fără răspunsuri (ghid sau fișă).
// L7 nu are fișă: fragmentul din „Lumea Sofiei” nu e în manual. 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-8/unitatea-3/lectia-${n}/fisa-exercitii.pdf)`
const fl = (n) => `Fișa lecției (/materiale/clasa-8/unitatea-3/lectia-${n}/fisa.pdf)`
const schema = (n, t) => `Schema „${t}” (/materiale/clasa-8/unitatea-3/lectia-${n}/schema.svg)`

export default {
  'lectia-1': {
    titlu: 'Textul literar, dincolo de clasificări. În Țara-Obiectelor-cu-Suflet de Angela Baciu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește textul În Țara-Obiectelor-cu-Suflet de Angela Baciu și compară lumea ficțională cu picturi de Klee și Miró.'],
    resurse: ['Manual Art 8, pp. 98-100', fisa(1), fl(1), 'Reproducerile de Klee și Miró din manual'],
    desfasurare: [
      { etapa: 'Obiecte cu suflet, „Pentru început”, ex. 1-2', timp: '6 min', activitate: pasi(
        'În perechi: ce obiect din camera lor ar avea suflet; trei elevi îl prezintă clasei în câteva cuvinte.',
        'Ex. 2: cine a inventat vreodată o limbă cu prietenii; unul sau doi explică regulile și scopul ei.') },
      { etapa: 'Autoarea', timp: '2 min', activitate: pasi(
        'Caseta despre Angela Baciu (p. 98); textul a fost scris pentru volumul Cum să inventezi o lume (2025).') },
      { etapa: 'Lectura model, ex. 3', timp: '12 min', activitate: pasi(
        'Citesc textul (pp. 98-100); elevii notează pe margine obiectele cu nume compus.',
        'Lămurim notele de subsol, pe măsură ce apar: AI, grevă japoneză, stele Michelin, 2 Mai, Ziua Iei.') },
      { etapa: 'Impresii după prima lectură, ex. 1-2', timp: '6 min', activitate: pasi(
        'Cele patru cadrane (p. 100), în caiete; trei elevi citesc câte un cadran.',
        'Ex. 2: au regăsit în text obiectele alese de ei la început? Ce seamănă, ce diferă.') },
      { etapa: 'Epic și liric, ex. 3', timp: '5 min', activitate: pasi(
        'În perechi: câte o trăsătură a textului epic și una a celui liric, regăsite în text; notăm la tablă două perechi.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce face sau ce simte fiecare obiect) și ex. 2 (adevărat sau fals), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pictura lui Klee, ex. 4', timp: '4 min', activitate: pasi(
        'Insula Dulcamara (p. 99): ce legături văd între pictură și lumea din text.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Impresii, ex. 5 (o întrebare pentru autoare); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Lumea ficțională',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică elementele specifice ficțiunii literare și creează o lume ficțională plecând de la un binom fantastic.'],
    resurse: ['Manual Art 8, pp. 101-102', fisa(2), fl(2), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Vocea din text, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Cui aparține vocea naratorului, cu justificare din text; de ce au Obiectele-cu-Suflet inițială majusculă; activitatea casnică din jurul căreia se țese povestea.') },
      { etapa: 'Curățenia și imaginația, ex. 4-6', timp: '5 min', activitate: pasi(
        'Variantele a-d de la ex. 4, votate și justificate; IA și imaginația, după primul paragraf; ce înseamnă „Ce lume cu susu-n jos!”.') },
      { etapa: 'Inventarul țării, ex. 7-8', timp: '6 min', activitate: pasi(
        'În perechi: inventarul obiectelor, grupate pe categorii; în ce categorie intră Harta-unei-Minți-Curate și de ce.') },
      { etapa: 'Picturile, ex. 13-15', timp: '6 min', activitate: pasi(
        'Metamorfoză de Miró (p. 101): întrebările a-d; Prestidigitator de Klee (p. 102): poate fi comparat scriitorul cu un prestidigitator?',
        'Care pictură se potrivește mai bine cu textul; două păreri argumentate.') },
      { etapa: 'Notițe: lumea ficțională', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 102): ficțiunea, ficțiunea literară, pactul cititorului, limbajul care creează lumea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (real sau inventat) și ex. 2 (inventarul pe categorii), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Binomul fantastic, Provocări', timp: '9 min', activitate: pasi(
        'Explic ideea lui Gianni Rodari din caseta de la p. 102.',
        'În perechi: aleg o pereche de obiecte din imaginile alăturate și schițează povestirea; două perechi o citesc.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-3 și 5-6; Explorare, ex. 16 (minimum 100 de cuvinte); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Combinarea structurilor textuale',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică modul în care textul-suport combină structuri narative, descriptive, dialogate și explicative.'],
    resurse: ['Manual Art 8, pp. 103-104', fisa(3), fl(3), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cinci întrebări, Explorare, ex. 1-5', timp: '6 min', activitate: pasi(
        'Ideea despre IA din primul paragraf, acord sau dezacord; portretul Fetiței cu codițe; cine dialoghează în „Unde mă aflu?”; regulile limbii AFCA; firul narativ, rezumat oral.') },
      { etapa: 'Notițe: structurile textuale', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 103): cele cinci structuri și întrebarea la care răspunde fiecare; unde apar în textele nonliterare.') },
      { etapa: 'Posterele, Aplicații, ex. 1', timp: '14 min', activitate: pasi(
        'Cinci grupe: filozofii, lingviștii, actorii, povestitorii, artiștii, cu sarcinile de la p. 104.',
        'Fiecare grupă lucrează posterul; circul printre grupe și verific trimiterile la text.') },
      { etapa: 'Prezentări, ex. 2', timp: '9 min', activitate: pasi(
        'Câte un reprezentant prezintă posterul, cam un minut și jumătate pe grupă.',
        'Concluzie comună: cum sunt combinate structurile în text.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (structura fiecărui fragment) și ex. 2 (texte nonliterare), individual, 6 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Textul ca o cameră, ex. 3', timp: '3 min', activitate: pasi(
        'Gândește – Discutați în perechi – Comunicați: poate fi comparat textul cu o cameră cu lucruri diferite?') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2; posterele se termină acasă, dacă e nevoie.') },
    ],
    evaluare: 'Observarea lucrului pe grupe și a prezentărilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Interpretează relația dintre Fetița cu codițe și naratoare și formulează opinii despre rolul poveștilor.'],
    resurse: ['Manual Art 8, p. 105', fisa(4), fl(4), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cuvintele englezești, Interpretare, ex. 1', timp: '4 min', activitate: pasi(
        'De ce apar cuvinte în engleză în primul paragraf și ce imagine a lumii actuale creează.') },
      { etapa: 'Regulile țării, ex. 2', timp: '5 min', activitate: pasi(
        'Cum ar descrie țara, pornind de la cele trei reguli citate la ex. 2.') },
      { etapa: 'Textul generat de IA, ex. 4', timp: '6 min', activitate: pasi(
        'Citim textul despre „obiecte cu suflet” de la p. 105; îi ajută să înțeleagă textul Angelei Baciu? Poate IA scrie povești la fel de bune ca un scriitor?') },
      { etapa: 'Interpretări posibile, ex. 5', timp: '10 min', activitate: pasi(
        'Fiecare alege una dintre variantele a-f sau propune alta; numărăm opțiunile.',
        'Câte un elev pentru trei variante diferite își justifică alegerea cu un detaliu din text.') },
      { etapa: 'Cele două planuri, ex. 6', timp: '6 min', activitate: pasi(
        'Variantele a-e despre Fetița cu codițe și naratoare; fiecare răspuns se sprijină pe o trimitere la text.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (regulile țării în lumea mea) și ex. 2 (ce pot sugera elementele textului), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Ușa deschisă și Muntele Copilăriei, ex. 7-8', timp: '5 min', activitate: pasi(
        'Ce se ascunde în spatele poveștilor duse la casele copiilor; ce reprezintă Muntele Copilăriei și de ce e un munte.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 3 (text de minimum 200 de cuvinte); fișa de exerciții, pagina 2; opțional, Portofoliu (lumea fără imaginație și emoții) și filmul de la ex. 9, din varianta digitală.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Textul discontinuu',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Citește o hartă pentru a identifica localități menționate în textul-suport și explorează hărți ale unor lumi inventate.'],
    resurse: ['Manual Art 8, p. 106', fisa(5), fl(5), 'O hartă a României, tipărită sau proiectată'],
    desfasurare: [
      { etapa: 'Harta, Explorare, a-e', timp: '10 min', activitate: pasi(
        'În perechi, pe harta de la p. 106 (și pe harta proiectată): Salonic și Alanya, țara fiecăreia, punctele cardinale, marea la care se deschid, poziția Mării Negre.') },
      { etapa: 'Notițe: continuu, discontinuu, mixt', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 106): cele trei formate, cu exemple; cum se citește un tabel, o diagramă, o hartă.') },
      { etapa: 'Rostul hărților, Aplicații, ex. 3-4', timp: '5 min', activitate: pasi(
        'Harta de la Explorare descrie sau explică? Hărți din romane: harta lui Norton Juster pentru Vama fantomă și hărțile cunoscute de elevi.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (mersul trenurilor) și ex. 2 (cinci întrebări pe tabel), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Harta Țării-Obiectelor-cu-Suflet, Provocări', timp: '10 min', activitate: pasi(
        'Grupe de 3-4: desenează harta țării, cu legendă, 7 minute.',
        'Tur rapid al galeriei, 3 minute.') },
      { etapa: 'Autoevaluare L1-L5', timp: '4 min', activitate: pasi(
        'Cele trei afirmații de la p. 106, în caiete; doi elevi le citesc.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-2 (documentare despre Salonic și Alanya); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; hărțile grupelor.',
  },
  'lectia-6': {
    titlu: 'Text auxiliar. Pescărușul Jonathan Livingston de Richard Bach',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește un fragment din Pescărușul Jonathan Livingston și discută despre curajul de a fi altfel.'],
    resurse: ['Manual Art 8, pp. 107-108', fisa(6), fl(6), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Legătura cu unitatea', timp: '3 min', activitate: pasi(
        'Textul introductiv de la p. 107: viața adevărată de dincolo de aparențe și dedicația cărții.') },
      { etapa: 'Lectura model', timp: '10 min', activitate: pasi(
        'Citesc fragmentul (pp. 107-108); lămurim notele: Breakfast Flock, glisadă, a adăsta.') },
      { etapa: 'Discutarea textului, ex. 1-2', timp: '7 min', activitate: pasi(
        'Prin ce se deosebește Jonathan de stol; sfaturile părinților: îi vor binele? Cum înțeleg ei binele?') },
      { etapa: 'Zborul ca metaforă, ex. 3-5', timp: '8 min', activitate: pasi(
        'Ce ar putea însemna zborul pentru felul de a fi al unor oameni, cu un fragment ales; de ce refuză stolul să vadă; eforturile și desăvârșirea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (Jonathan și stolul, pe criterii) și ex. 2 (adevărat sau fals), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Îndemnul final, ex. 6', timp: '5 min', activitate: pasi(
        'Citim cuvintele lui Jonathan către Fletch (ex. 6); cum le interpretează elevii.') },
      { etapa: 'Biblioteci deschise', timp: '3 min', activitate: pasi(
        'Cele două cărți recomandate la p. 108: Muntele cu uși și Ochii Monei.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 7 (textul „Trăiește și în tine un Pescăruș Jonathan?”, pe grupul clasei) și ex. 9; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Conexiuni de lectură. Lumea Sofiei de Jostein Gaarder',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Discută legătura dintre un fragment din Lumea Sofiei de Jostein Gaarder și tema unității.'],
    resurse: ['Caietul elevului, tema legată de Unitatea III', 'Fragmentul din Lumea Sofiei, pregătit de profesor', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Întrebarea „Cine ești tu?”', timp: '6 min', activitate: pasi(
        'Scriu întrebarea pe tablă; fiecare scrie un răspuns de trei rânduri, fără corectură; câțiva îl citesc.') },
      { etapa: 'Cartea și autorul', timp: '4 min', activitate: pasi(
        'Prezint pe scurt romanul scriitorului norvegian Jostein Gaarder, în care o adolescentă primește scrisori cu întrebări filozofice.') },
      { etapa: 'Lectura fragmentului', timp: '10 min', activitate: pasi(
        'Fragmentul nu e în manual: îl aleg și îl multiplic înainte de oră.',
        'Citesc fragmentul; elevii subliniază întrebările pe care le întâlnesc.') },
      { etapa: 'Discuția', timp: '12 min', activitate: pasi(
        'Ce întrebări pune fragmentul și ce răspunsuri posibile propun elevii.',
        'Care întrebare li se pare cea mai grea și de ce.') },
      { etapa: 'Legături cu unitatea', timp: '8 min', activitate: pasi(
        'Comparăm felul în care descoperă lumea personajul din fragment, naratoarea din Țara-Obiectelor-cu-Suflet și Pescărușul Jonathan.') },
      { etapa: 'Întrebarea mea', timp: '7 min', activitate: pasi(
        'Fiecare formulează o întrebare proprie despre lume, la care nu are încă răspuns, și explică în 2-3 rânduri de ce i se pare importantă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: tema legată de Unitatea III din caietul elevului.') },
    ],
    evaluare: 'Observarea sistematică a discuției; verificarea întrebării formulate.',
  },
  'lectia-8': {
    titlu: 'Proiect de grup. Limbi inventate',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Prezintă și evaluează proiectele de grup despre limbi inventate, pe baza unei grile date.'],
    resurse: ['Manual Art 8, p. 109', 'Fișa proiectului cu grila de evaluare (/materiale/clasa-8/unitatea-3/lectia-8/fisa.pdf)', 'Produsele proiectelor pe grupe'],
    desfasurare: [
      { etapa: 'Punere în temă', timp: '4 min', activitate: pasi(
        'Reamintim categoriile de limbi artificiale de la p. 109: auxiliare, fictive, experimentale, secrete, ludice.') },
      { etapa: 'Instrumentele de evaluare', timp: '4 min', activitate: pasi(
        'Grila cu patru criterii (organizare, conținut, colaborarea în echipă, prezentare) și scara feedbackului (sugerează, analizează, apreciază, clarifică), de la p. 109.',
        'Stabilim ordinea grupelor și timpul: patru minute de prezentare, un minut de întrebări.') },
      { etapa: 'Prezentările grupelor', timp: '30 min', activitate: pasi(
        'Grupele prezintă pe rând limba aleasă, prin prezentarea PowerPoint sau produsul media.',
        'Colegii notează pe grilă sau pe scara feedbackului; eu completez fișa proiectului pentru fiecare grupă.') },
      { etapa: 'Feedback între grupe', timp: '7 min', activitate: pasi(
        'Fiecare grupă primește două formulări din scara feedbackului, de la grupe diferite.') },
      { etapa: 'Concluzii', timp: '3 min', activitate: pasi(
        'Ce limbă i-a surprins cel mai mult; ce au învățat despre lucrul în echipă.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Grupele care n-au prezentat o fac la începutul orei următoare; anunț tema orei: textul argumentativ.') },
    ],
    evaluare: 'Evaluarea proiectului pe grupe după grila din fișă; observarea prezentării și a feedbackului.',
  },
  'lectia-9': {
    titlu: 'Textul argumentativ. Repere (partea 1/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Exersează argumentarea simplă, cu accent pe legătura dintre argument și exemplu.'],
    resurse: ['Manual Art 8, pp. 110-111', fisa(9), fl(9), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Imaginea, „Pentru început”, ex. 1-2', timp: '7 min', activitate: pasi(
        'Grupe de 4-5: ce sugerează imaginea de la p. 110; fiecare dă un răspuns și un argument; comparăm argumentele.',
        'Ex. 2: e important să-ți poți argumenta punctul de vedere?') },
      { etapa: 'Argumentarea simplă, Explorare, ex. 1', timp: '8 min', activitate: pasi(
        'Fiecare alege câte o variantă (imaginația, IA, ordinea în cameră), adaugă argumentul, un exemplu și o concluzie.',
        'Trei elevi citesc o argumentare completă.') },
      { etapa: 'Părțile argumentării, ex. 2', timp: '9 min', activitate: pasi(
        'În perechi: asociază enunțurile 1-6 cu părțile a-f, le ordonează într-un text coerent și marchează formulele și conectorii fiecărei părți.') },
      { etapa: 'Notițe: textul argumentativ', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 111): introducerea cu teza, cuprinsul (argumente, contraargumente, exemple), încheierea; formulele de introducere a tezei și conectorii.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (părțile argumentării) și ex. 2 (ce introduce fiecare conector), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Argument slab, argument puternic', timp: '5 min', activitate: pasi(
        'Formulez pentru aceeași teză un argument fără exemplu și unul cu exemplu; elevii spun care convinge și de ce.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Textul argumentativ. Construirea unei argumentări (partea 2/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Construiește o argumentare urmărind structura specifică textului argumentativ.'],
    resurse: ['Manual Art 8, pp. 110-111', fisa(10), fl(10), 'Argumentele notate la ora anterioară'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '5 min', activitate: pasi(
        'Două concluzii de la fișa de exerciții, pagina 2, citite; ce conector a folosit fiecare.') },
      { etapa: 'Ierarhizarea și argumentele pro și contra', timp: '6 min', activitate: pasi(
        'După Repere (p. 111): conectorii de ierarhizare și cei pentru argumente pro și contra; notăm la tablă câte trei.') },
      { etapa: 'Teza lui Platon, Aplicații, ex. 1 a-c', timp: '12 min', activitate: pasi(
        'În perechi: ce înțeleg din afirmația lui Platon; un argument pro sau contra, un exemplu și o concluzie.') },
      { etapa: 'Prezentări, ex. 1 d', timp: '7 min', activitate: pasi(
        'Trei-patru perechi prezintă; clasa verifică dacă există teză, argument, exemplu și concluzie.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ordonarea argumentării) și ex. 2 (pro și contra), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pregătirea argumentării orale', timp: '5 min', activitate: pasi(
        'Citim cele două teze de la Aplicații, ex. 2 (p. 111); fiecare o alege pe cea pe care o va susține oral ora viitoare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (planul și textul argumentativ); ex. 2 a-c, pentru teza aleasă.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Textul argumentativ. Argumentare orală și autoevaluare',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Construiește o argumentare orală pe tema unității și se autoevaluează pe baza unor criterii date.'],
    resurse: ['Ghidul profesorului, Proiectarea unităților de învățare, Unitatea III', fisa(11), 'Quizul „Textul argumentativ” (materialul de joc al lecției)', 'Grilă de autoevaluare, pregătită de profesor'],
    desfasurare: [
      { etapa: 'Pregătirea, Aplicații, ex. 2 a-c', timp: '8 min', activitate: pasi(
        'Fiecare își completează pe fișă ex. 1 (discursul de un minut): teza, opinia, două argumente cu exemple, concluzia.') },
      { etapa: 'Criteriile', timp: '3 min', activitate: pasi(
        'Citim grila de evaluare de la p. 111; reguli: un minut, voce clară, privirea spre public.') },
      { etapa: 'Argumentările orale, ex. 2 d', timp: '20 min', activitate: pasi(
        'Opt-zece elevi vorbesc câte un minut, urmat de un minut de feedback.',
        'Colegii completează ex. 3 de pe fișă (ascult un coleg) pentru un vorbitor ales.') },
      { etapa: 'Autoevaluarea, ex. 2 e', timp: '5 min', activitate: pasi(
        'Fiecare completează ex. 2 de pe fișă (grila vorbitorului), pentru argumentarea susținută sau pregătită.') },
      { etapa: 'Obținerea performanței: quizul „Textul argumentativ”', timp: '10 min', activitate: pasi(
        'Elevii rezolvă quizul; discutăm întrebările la care au greșit cei mai mulți.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 4 (ce aș schimba în argumentarea mea).') },
    ],
    evaluare: 'Grila de autoevaluare; observarea argumentărilor orale; rezultatele la quiz.',
  },
  'lectia-12': {
    titlu: 'Atributul. Apoziția',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică atributul și apoziția, părțile de vorbire prin care se exprimă și funcțiile lor sintactice.'],
    resurse: ['Manual Art 8, pp. 112-114', fisa(12), schema(12, 'Atributul. Apoziția'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Enunțuri de completat, „Pentru început”, ex. 1-3', timp: '5 min', activitate: pasi(
        'Completăm oral cele trei enunțuri despre prieteni; de ce parte de vorbire depind cuvintele adăugate; atributele din cele două citate.') },
      { etapa: 'Atributul, Explorare, ex. 1-3', timp: '7 min', activitate: pasi(
        'Regenții atributelor din portretul Fetiței cu codițe; grupuri nominale din seriile A și B, pentru imaginea de la p. 112; funcția și partea de vorbire a cuvintelor din seria B.') },
      { etapa: 'Atributul substantival și pronominal, ex. 4-6', timp: '7 min', activitate: pasi(
        'Atributele substantivale și cazul lor (ex. 4); înlocuirea cu pronume și numerale, după model (ex. 5); șase enunțuri de la ex. 6, oral.') },
      { etapa: 'Notițe: felurile atributului', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (p. 113): atributul adjectival, substantival, pronominal, verbal, adverbial, interjecțional, cu câte un exemplu în caiete.') },
      { etapa: 'Apoziția, Explorare, ex. 1-4', timp: '6 min', activitate: pasi(
        'Echivalentele substantivelor, după model; suprimarea și poziția; relația cu baza; cazul și semnele de punctuație. Notăm reperele de la p. 114.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (felul atributului) și ex. 2 (apoziția și baza), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Punctuația apoziției, Aplicații, ex. 3', timp: '4 min', activitate: pasi(
        'Copiem textul despre Ana și Matei și punem semnele de punctuație; verificăm la tablă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Explorare, ex. 7; Aplicații, ex. 1-2; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Atributiva',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică propoziția atributivă, elementele de relație și punctuația specifică acesteia.'],
    resurse: ['Manual Art 8, pp. 115-116', fisa(13), schema(13, 'Atributiva'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Inima-de-pluș, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Regentul subordonatelor din fraza de la ex. 1; contragerea primei subordonate; expansiunea atributului „de fetru” și ce se schimbă.') },
      { etapa: 'Regentul, ex. 4', timp: '3 min', activitate: pasi(
        'Ce parte de vorbire determină subordonatele din cele două fraze.') },
      { etapa: 'Elementele de relație, ex. 5-7', timp: '12 min', activitate: pasi(
        'Grupe de 4-5: frazele de la ex. 5, despărțite în propoziții, după modelul dat; partea de vorbire și funcția elementelor de relație.',
        'Ex. 6-7, oral: adverbele relative și conjuncțiile care introduc atributive.') },
      { etapa: 'Poziția și virgula, ex. 8-9', timp: '4 min', activitate: pasi(
        'Poziția atributivelor de la ex. 5 față de regente; când apare virgula.') },
      { etapa: 'Notițe: atributiva', timp: '5 min', activitate: pasi(
        'Schema lecției și Repere (pp. 115-116): întrebările, regenții, elementele de relație, poziția, atributiva izolată.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (atributiva și elementul de relație, în șase fraze), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Greșeli frecvente, Aplicații, ex. 5', timp: '5 min', activitate: pasi(
        'Corectăm la tablă cele patru fraze și spunem, pentru fiecare, ce regulă a fost încălcată.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-4 și 6; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Complementul direct',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică complementul direct și partea de vorbire prin care este exprimat.'],
    resurse: ['Manual Art 8, p. 117', fisa(14), schema(14, 'Complementul direct'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Atribut sau complement? Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Completăm cele patru enunțuri și stabilim ce parte de vorbire determină cuvintele adăugate; atribute sau complemente și de ce.') },
      { etapa: 'Complementele directe, ex. 3-5', timp: '9 min', activitate: pasi(
        'Complementele directe din enunțurile de la ex. 3 și prin ce sunt exprimate; regenții lor; locuțiunea și interjecția de la ex. 5.') },
      { etapa: 'Notițe: complementul direct', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (p. 117): întrebările, acuzativul și „pe”, regenții, părțile de vorbire, dublarea prin clitic.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (complementul direct și partea de vorbire) și ex. 2 (dublarea prin clitic), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Analiza după model, Aplicații, a', timp: '10 min', activitate: pasi(
        'Fragmentul a: analizăm primul complement direct la tablă, după modelul „știri”, apoi elevii le analizează pe celelalte.') },
      { etapa: 'Proba pasivului', timp: '4 min', activitate: pasi(
        'Trecem două enunțuri la diateza pasivă, ca să arătăm legătura dintre complementul direct și verbele care admit pasivul.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, fragmentul b; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Completiva directă',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Recunoaște completiva directă și elementele de relație prin care este introdusă.'],
    resurse: ['Manual Art 8, pp. 118-119', fisa(15), fl(15), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Reclama, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Citim reclama de la p. 118; complementul direct din primul enunț și regentul lui; propoziția din al doilea enunț, după schemă.') },
      { etapa: 'Întrebări, elemente de relație, punctuație, ex. 4-7', timp: '8 min', activitate: pasi(
        'Întrebările pentru celelalte propoziții colorate și regenții lor; elementele de relație; poziția; formulăm regula de punctuație.') },
      { etapa: 'Notițe: completiva directă', timp: '6 min', activitate: pasi(
        'Fișa lecției și Repere (pp. 118-119): regenții, elementele de relație, poziția, virgula la completiva antepusă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (completiva și elementul de relație) și ex. 2 (din complement în completivă), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Greșeli de construcție, Aplicații, ex. 6', timp: '6 min', activitate: pasi(
        'Corectăm la tablă cele șapte enunțuri și numim greșeala din fiecare.') },
      { etapa: 'Complement sau completivă, ex. 5', timp: '4 min', activitate: pasi(
        'Completăm oral enunțurile, întâi cu un complement direct, apoi cu o completivă, ca în model.') },
      { etapa: 'Identificare rapidă, Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Completivele directe din enunțurile de la ex. 1 și partea de vorbire pe care o determină, oral.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-3, 8 și 9; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Complementul indirect',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică complementul indirect și modul în care este reluat sau anticipat în enunț.'],
    resurse: ['Manual Art 8, p. 120', fisa(16), schema(16, 'Complementul indirect'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Direct sau indirect? Explorare, ex. 1', timp: '5 min', activitate: pasi(
        'Completăm enunțurile a-c cu un complement direct și cu unul indirect; cazul și întrebarea fiecăruia.') },
      { etapa: 'Regenții, ex. 2-4', timp: '9 min', activitate: pasi(
        'Complementele indirecte din enunțurile de la ex. 2 și partea de vorbire a regentului; prin ce sunt exprimate; predicatele din enunțurile cu „bravo” și „na”.') },
      { etapa: 'Anticipare și reluare, ex. 5', timp: '4 min', activitate: pasi(
        'Pe exemplele de la ex. 1-2: unde complementul indirect e anticipat și unde e reluat.') },
      { etapa: 'Notițe: complementul indirect', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (p. 120): întrebarea, dativul, regenții, părțile de vorbire, construcția cu „la” + numeral, dublarea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (complementul indirect și regentul) și ex. 2 (anticipare sau reluare), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Analiza după model, Aplicații, ex. 1', timp: '8 min', activitate: pasi(
        'Textul lui Jean-Claude Carrière: analizăm complementele indirecte după modelul „i”, primul la tablă, restul în caiete.') },
      { etapa: 'Corectarea, ex. 3', timp: '3 min', activitate: pasi(
        'Cele patru enunțuri a-d, corectate oral.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Completiva indirectă',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Recunoaște completiva indirectă și diferențiază subordonatele introduse prin același element de relație.'],
    resurse: ['Manual Art 8, pp. 121-122', fisa(17), fl(17), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Din complement în propoziție, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Enunțurile de sub imagini (p. 121): funcția cuvintelor colorate; regentul, după modelul „Cui împrumut?”; elementele de relație și întrebarea.') },
      { etapa: 'Frazele de la ex. 4-6', timp: '9 min', activitate: pasi(
        'Despărțim frazele în propoziții; regentul și elementul de relație; poziția subordonatelor; formulăm regula de punctuație.') },
      { etapa: 'Notițe: completiva indirectă', timp: '5 min', activitate: pasi(
        'Fișa lecției și Repere (pp. 121-122): regenții, elementele de relație, dublarea prin clitic, poziția și virgula.') },
      { etapa: 'Expansiunea, ex. 7', timp: '4 min', activitate: pasi(
        'Enunțurile a-d, transformate oral după exemplele de la ex. 1.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (elementul de relație și regentul) și ex. 2 (felul subordonatelor introduse prin „cui”), individual, 8 minute.',
        'Verificare, 4 minute: întrebarea se pune de la regent.') },
      { etapa: 'Corectarea, Aplicații, ex. 6', timp: '5 min', activitate: pasi(
        'Enunțurile a-d, corectate la tablă, cu regula încălcată.') },
      { etapa: 'Fraza cu trei subordonate, ex. 8', timp: '6 min', activitate: pasi(
        'Analizăm împreună fraza: felul fiecărei subordonate, regentul și întrebarea.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-5 și 7; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-18': {
    titlu: 'Complementul prepozițional',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică complementul prepozițional și partea de vorbire prin care este exprimat.'],
    resurse: ['Manual Art 8, p. 123', fisa(18), schema(18, 'Complementul prepozițional'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verbe cu prepoziție', timp: '4 min', activitate: pasi(
        'Dau verbele „a se gândi”, „a depinde”, „a se teme”; elevii spun ce prepoziție cere fiecare și construiesc câte un enunț.') },
      { etapa: 'Complementele prepoziționale, Explorare, ex. 1', timp: '10 min', activitate: pasi(
        'Primele douăsprezece enunțuri de la ex. 1: complementul prepozițional și partea de vorbire prin care se exprimă.') },
      { etapa: 'Regenții, ex. 2', timp: '5 min', activitate: pasi(
        'Partea de vorbire a regentului, pe aceleași enunțuri: verb, locuțiune, adjectiv, adverb, interjecție.') },
      { etapa: 'Notițe: complementul prepozițional', timp: '6 min', activitate: pasi(
        'Schema lecției și Repere (p. 123): întrebările, regenții, părțile de vorbire, poziția.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (complementul și regentul) și ex. 2 (direct, indirect sau prepozițional), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Analiza după model, Aplicații, ex. 1', timp: '7 min', activitate: pasi(
        'Citatele din textul Angelei Baciu: analizăm complementele prepoziționale după modelul „de emoție”.') },
      { etapa: 'Vocea misterioasă, ex. 2', timp: '3 min', activitate: pasi(
        'Complementele prepoziționale din fragmentul Anei Alfianu; a cui ar putea fi vocea.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Explorare, ex. 1, enunțurile rămase; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-19': {
    titlu: 'Completiva prepozițională',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Recunoaște completiva prepozițională, poziția și punctuația ei specifică.'],
    resurse: ['Manual Art 8, pp. 124-125', fisa(19), fl(19), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Imaginile, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Enunțurile de sub imagini (p. 124): funcția cuvintelor colorate; regentul, după modelul „Despre ce vorbesc?”; elementele de relație și întrebările.') },
      { etapa: 'Frazele de la ex. 4-6', timp: '9 min', activitate: pasi(
        'Zece fraze de la ex. 4, despărțite în propoziții: regentul și elementul de relație; poziția; regula de punctuație.') },
      { etapa: 'Notițe: completiva prepozițională', timp: '5 min', activitate: pasi(
        'Fișa lecției și Repere (pp. 124-125): regenții, elementele de relație, virgula la completiva antepusă și reluată prin pronume.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (elementul de relație și regentul) și ex. 2 (felul subordonatelor introduse prin „dacă”), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Completarea, Aplicații, ex. 3', timp: '5 min', activitate: pasi(
        'Enunțurile b-f, completate oral după model.') },
      { etapa: 'Autoevaluare L8-L15', timp: '4 min', activitate: pasi(
        'Cele trei afirmații de la p. 125, în caiete; doi elevi le citesc.') },
      { etapa: 'Dialogul cititorilor, Provocări', timp: '6 min', activitate: pasi(
        'În perechi: un dialog între cei doi tineri cititori din picturi, cu cel puțin două completive prepoziționale; o pereche îl citește.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-2 și 4-5; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-20': {
    titlu: 'Tipare textuale de structurare a ideilor. Comparație, analogie (partea 1/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Analizează criteriile ce stau la baza comparației și a analogiei ca tipare de structurare a ideilor.'],
    resurse: ['Manual Art 8, pp. 126-127', fisa(20), fl(20), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Mere cu pere, „Pentru început”, ex. 1', timp: '7 min', activitate: pasi(
        'În perechi: criteriile de comparare a celor două fructe din imagine, apoi un text scurt cu structurile de comparativ și superlativ din casetă; două perechi citesc.') },
      { etapa: 'Asocieri, ex. 2-3', timp: '5 min', activitate: pasi(
        'Cele două exemple de la ex. 2: care ar apărea într-un text științific și care într-unul literar; un echivalent pentru imaginație și unul pentru timp.') },
      { etapa: 'Jonathan și stolul, Explorare, ex. 1', timp: '8 min', activitate: pasi(
        'Criteriile pe care se bazează compararea lui Jonathan cu celelalte păsări, în fragmentul de la p. 126.') },
      { etapa: 'Pe ce se bazează comparația, ex. 2', timp: '6 min', activitate: pasi(
        'Pornim de la modelul „Lectura este ca o călătorie”; enunțurile a-e, inclusiv strofa din Pescărușul lui Ion Pillat.') },
      { etapa: 'Notițe: comparația și analogia', timp: '5 min', activitate: pasi(
        'Fișa lecției și Repere (p. 127): structurile de comparativ și superlativ; analogia ca asemănare parțială care explică abstractul prin concret.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (gradele de comparație) și ex. 2 (cartea și filmul, pe criterii), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Masa tăcerii, Aplicații, ex. 2', timp: '4 min', activitate: pasi(
        'Cum interpretează elevii analogia dintre masa cu douăsprezece scaune și cadranul unui orologiu.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3 și 5; fișa de exerciții, pagina 2; opțional, Provocări (analogia lui Harari cu Ucenicul vrăjitor).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-21': {
    titlu: 'Tipare textuale de structurare a ideilor. Comparație, analogie (partea 2/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează un text prin compararea unor imagini date, cu inserarea unei analogii.'],
    resurse: ['Manual Art 8, p. 127', fisa(21), fl(21), 'Imaginile de comparat din manual'],
    desfasurare: [
      { etapa: 'Analogiile de acasă, Aplicații, ex. 3-4', timp: '7 min', activitate: pasi(
        'Câțiva elevi citesc analogiile pentru copilărie, frumusețe, imaginație și explică la ce s-au gândit.',
        'Vot secret pe bilețele pentru cele mai reușite.') },
      { etapa: 'Criteriile, ex. 1', timp: '6 min', activitate: pasi(
        'În perechi: criteriile după care prezintă asemănările și deosebirile dintre cele două imagini de la p. 127; notăm trei la tablă.') },
      { etapa: 'Planul textului comparativ', timp: '6 min', activitate: pasi(
        'Cu fișa lecției: introducerea cu criteriile, câte un paragraf pe criteriu, analogia, încheierea; conectorii de comparație.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul model) și ex. 2 (structura lui, pe criterii), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Redactarea, ex. 6', timp: '14 min', activitate: pasi(
        'Fiecare redactează textul comparativ despre cele două imagini, după criteriile din perechi, cu o analogie pentru fiecare imagine.') },
      { etapa: 'Evaluarea reciprocă, ex. 7', timp: '5 min', activitate: pasi(
        'Schimbă caietul cu colegul și evaluează textul după cele patru criterii de la p. 127.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: textul revizuit după observațiile colegului; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Grila de evaluare de la p. 127; fișa de exerciții, ex. 1-2; verificarea textului comparativ.',
  },
  'lectia-22': {
    titlu: 'Recapitulare (partea 1/3)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de lectură din unitate, pe baza unui fragment din Micul prinț de Antoine de Saint-Exupéry.'],
    resurse: ['Manual Art 8, pp. 128-129', fisa(22), 'Quizul „Recapitulare, lectură” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Lectura fragmentului', timp: '8 min', activitate: pasi(
        'Citesc fragmentul din Micul Prinț (pp. 128-129); elevii urmăresc replicile vulpii.') },
      { etapa: 'Rezumat și structuri, ex. 1-2', timp: '5 min', activitate: pasi(
        'Doi elevi rezumă oral fragmentul; structura textuală predominantă, cu exemple.') },
      { etapa: 'Înțelegerea textului, ex. 3-5, 7-8', timp: '8 min', activitate: pasi(
        'De ce nu se poate juca vulpea; ce înțelege ea prin „îmblânzire” și structura explicativă care ajută; ce caută micul prinț; ce dobândește vulpea; de ce floarea lui e mai prețioasă.') },
      { etapa: 'Discuția pe grupe, ex. 6', timp: '6 min', activitate: pasi(
        'Grupe de 4-5: pasajul în care micul prinț spune ce caută; poate vulpea să-i ofere acele lucruri? Concluziile, prezentate pe scurt.') },
      { etapa: 'Legătura cu textul Angelei Baciu, ex. 9', timp: '3 min', activitate: pasi(
        'Taina vulpii și felul în care naratoarea din Țara-Obiectelor-cu-Suflet privește obiectele de pe birou.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul „Ceasul bunicului”) și ex. 2 (structurile textuale), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Quizul „Recapitulare, lectură”', timp: '7 min', activitate: pasi(
        'Elevii rezolvă quizul; lămurim întrebările cu cele mai multe greșeli.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 10-11; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-23': {
    titlu: 'Recapitulare (partea 2/3)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de limbă română din unitate: atributul, apoziția și subordonatele complementului.'],
    resurse: ['Manual Art 8, pp. 128-129', fisa(23), 'Quizul „Recapitulare, limbă română” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Fraza de la ex. 20-21', timp: '5 min', activitate: pasi(
        'Scriu fraza la tablă; elevii numesc, contra cronometru, complementele și transcriu atributiva.') },
      { etapa: 'Funcții și părți de vorbire, ex. 12 și 14', timp: '8 min', activitate: pasi(
        'Funcția sintactică și partea de vorbire a cuvintelor de la ex. 12; intrusul și funcția celorlalte, la ex. 14.') },
      { etapa: 'Subordonatele, ex. 15 și 18', timp: '5 min', activitate: pasi(
        'Felul subordonatelor din frazele a-c și din fraza de la ex. 18; întrebarea se pune de la regent.') },
      { etapa: 'Complementele, ex. 16-17', timp: '5 min', activitate: pasi(
        'Complementele indirecte și prin ce sunt exprimate; trei complemente prepoziționale din text, analizate.') },
      { etapa: 'Expansiunea, ex. 19', timp: '3 min', activitate: pasi(
        'Expansiunea atributului „de sticlă”, oral.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-3 (funcțiile sintactice și subordonatele din enunțurile despre robot), individual, 9 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Quizul „Recapitulare, limbă română”', timp: '9 min', activitate: pasi(
        'Elevii rezolvă quizul; cei care termină analizează încă o frază din fragment.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 13 (un enunț cu apoziție); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
  },
  'lectia-24': {
    titlu: 'Recapitulare (partea 3/3)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de comunicare orală și redactare din unitate.'],
    resurse: ['Manual Art 8, pp. 128-129', fisa(24), 'Quizul de recapitulare (materialul de joc al lecției)', 'Textele argumentative și comparative redactate'],
    desfasurare: [
      { etapa: 'Un argument pe loc', timp: '4 min', activitate: pasi(
        'Dau o teză; trei elevi spun câte un argument și un exemplu.') },
      { etapa: 'Reperele de redactare', timp: '6 min', activitate: pasi(
        'Cu textele redactate în unitate: părțile argumentării și conectorii, criteriile comparației, analogia; notăm la tablă o listă de verificare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1-3 (două idei, criteriile, asemănări, deosebiri și o analogie), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Redactarea, ex. 22', timp: '13 min', activitate: pasi(
        'Fiecare redactează textul care compară cele două idei de la ex. 22, cu o analogie pentru „misterul existenței” sau „miezul lucrurilor”.') },
      { etapa: 'Feedback, ex. 23', timp: '5 min', activitate: pasi(
        'Schimbă caietul cu colegul de bancă și dă feedback după cele patru criterii de la p. 129.') },
      { etapa: 'Quizul de recapitulare', timp: '9 min', activitate: pasi(
        'Elevii rezolvă quizul; lămurim greșelile frecvente înainte de evaluare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: textul revizuit; fișa de exerciții, pagina 2; recitirea notițelor pentru evaluare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; feedbackul pe grilă; rezultatele la quiz.',
  },
  'lectia-25': {
    titlu: 'Evaluare',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Susține testul de evaluare sumativă, pe baza unui fragment din Kinderland de Liliana Corobca.'],
    resurse: ['Testul tipărit, Manual Art 8, p. 130', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul (fragmentul din Kinderland de Liliana Corobca, p. 130).',
        'Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură, câte 6 puncte), partea B, 30 de puncte (un text de cel puțin 200 de cuvinte despre cum erau în copilărie și cum sunt acum), 10 puncte din oficiu.',
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
