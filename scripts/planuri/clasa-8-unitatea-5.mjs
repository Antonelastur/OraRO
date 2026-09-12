// Planuri de lecție detaliate, Unitatea V „Încotro se îndreaptă lumea?”, clasa a VIII-a.
// Pași concreți pe rubricile Manual Art 8, pp. 164-202, cu fișa de exerciții a
// lecției folosită la etapa de fixare. Exercițiile din manual nerezolvate în clasă
// rămân temă. Fără răspunsuri (ghid sau fișă). 50 min / lecție. Fără fișă: L22
// (evaluarea) și L23 (analiza portofoliului).

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-8/unitatea-5/lectia-${n}/fisa-exercitii.pdf)`
const schema = (n, t) => `Schema „${t}” (/materiale/clasa-8/unitatea-5/lectia-${n}/schema.svg)`

export default {
  'lectia-1': {
    titlu: 'Textul epic. Fahrenheit 451 de Ray Bradbury',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește un fragment din Fahrenheit 451 de Ray Bradbury și formulează primele impresii de lectură.'],
    resurse: ['Manual Art 8, pp. 164-169', fisa(1), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'O lume fără cărți', timp: '6 min', activitate: pasi(
        'Îi întreb pe elevi ce s-ar schimba în viața lor dacă, de mâine, cărțile ar fi interzise; notăm trei idei pe tablă.') },
      { etapa: 'Autorul și romanul', timp: '4 min', activitate: pasi(
        'Caseta despre Ray Bradbury și Fahrenheit 451 (pp. 164-165): titlul indică temperatura la care arde hârtia; contextul distopic al romanului.') },
      { etapa: 'Lectura model', timp: '18 min', activitate: pasi(
        'Citesc fragmentul (pp. 164-169); lămurim termenii noi (pompierul care aprinde, nu stinge, focul; salamandra; Phoenix) pe măsură ce apar.',
        'Ne oprim la scena-cheie: Montag descoperă că vecina lui ascunde cărți și e trădată.') },
      { etapa: 'Rubrica „Pentru început” și Explorare', timp: '8 min', activitate: pasi(
        'Rezolvăm ghidat 2-3 întrebări din Explorare: ce simte Montag văzând cărțile arse; ce rol au „Câinii mecanici” în lumea romanului.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (impresii pe cadrane) și ex. 2 (întrebări pe un fragment creat pentru fișă, ca exercițiu suplimentar de înțelegere), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: restul întrebărilor din Explorare; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Textul epic de mare întindere',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică trăsăturile distopiei și rolul decupajului în părți și capitole al unui text epic de mare întindere.'],
    resurse: ['Manual Art 8, pp. 170-171', fisa(2), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Lumi ale viitorului', timp: '5 min', activitate: pasi(
        'Îi întreb pe elevi ce filme sau cărți știu despre un viitor în care lucrurile merg prost și ce au ele în comun.') },
      { etapa: 'Romanul și speciile lui', timp: '8 min', activitate: pasi(
        'Explic decupajul unui text epic amplu în părți, capitole, blancuri și rolul blancurilor: reper de lectură, delimitează un episod, întreține suspansul.',
        'Definesc romanul: personaje numeroase, acțiune complexă, mai multe fire narative; temele frecvente (social, istoric, aventuri, SF).') },
      { etapa: 'Utopie și distopie', timp: '8 min', activitate: pasi(
        'Comparăm utopia (societate ideală, imaginară) cu distopia (societate a viitorului dezumanizată de un control politic, tehnologic sau religios), cu exemple din Fahrenheit 451.') },
      { etapa: 'SF, fantastic, fantasy', timp: '7 min', activitate: pasi(
        'Deosebim SF-ul (ipoteze științifice), fantasticul (dimensiunea inexplicabilă) și fantasy-ul (magia), cu câte un exemplu propus de elevi.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (utopie sau distopie) și ex. 2 (SF, fantastic sau fantasy), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '10 min', activitate: pasi(
        'Rezolvăm ghidat un exercițiu din manual despre temele SF-ului actual (inteligența artificială, ecologia).',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Structuri textuale',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică modul în care se îmbină structurile textuale în fragmentul studiat.'],
    resurse: ['Manual Art 8, pp. 172-173', fisa(3), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Trei pasaje', timp: '5 min', activitate: pasi(
        'Le arăt elevilor trei pasaje scurte din fragmentul studiat și îi întreb ce face fiecare: povestește, descrie sau dă replici.') },
      { etapa: 'Cele cinci structuri', timp: '8 min', activitate: pasi(
        'Recapitulăm structura dialogată (adresare la persoana a II-a, replici), narativă (acțiune cu personaje), descriptivă (trăsături, cadru), explicativă (cauze, funcționare), argumentativă (susține un punct de vedere).') },
      { etapa: 'Cum se îmbină structurile', timp: '10 min', activitate: pasi(
        'Prezint cele trei moduri: succesiune (A→B), alternanță (A→B→A→B), inserție (A[B]A), cu exemplul din manual: descriptivă–(narativă)–descriptivă, structura narativă inserată în cea descriptivă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (structurile textuale ale unui text creat pentru fișă) și ex. 2 (cum se îmbină), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicație pe manual', timp: '11 min', activitate: pasi(
        'Rezolvăm ghidat un pasaj din manual (pp. 172-173) și identificăm structurile și modul lor de îmbinare, împreună.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2; restul exercițiilor din manual.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Personajele. Conflictul',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică tipurile de personaje și sursele conflictuale din roman.'],
    resurse: ['Manual Art 8, pp. 174-175', fisa(4), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cu cine se luptă Montag?', timp: '5 min', activitate: pasi(
        'Îi întreb pe elevi cu cine se luptă de fapt Montag: cu o persoană, cu o instituție sau cu el însuși.') },
      { etapa: 'Clasificarea personajelor', timp: '8 min', activitate: pasi(
        'Prezint criteriile: importanța (principal/secundar), rolul în conflict (protagonist/antagonist), numărul (individual/colectiv), evoluția.',
        'Amintesc perechile antitetice de personaje, legate de antiteza din Unitatea IV.') },
      { etapa: 'Conflictul exterior și interior', timp: '9 min', activitate: pasi(
        'Inventariem sursele conflictului: cu altă persoană, cu societatea, cu natura, cu tehnologia, cu sine însuși, cu soarta, cu exemple din Fahrenheit 451.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (tipuri de personaje) și ex. 2 (tipul de conflict), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Blazonul personajului', timp: '9 min', activitate: pasi(
        'Fiecare elev completează, pe fișă, blazonul lui Montag: eveniment important, calitate, defect, personaj asemănător, o vietate potrivită.') },
      { etapa: 'Temă', timp: '7 min', activitate: pasi(
        'Rezolvăm ghidat un exercițiu din manual (pp. 174-175) despre conflictul dintre Montag și societate.',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; blazonul personajului.',
  },
  'lectia-5': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Discută semnificația simbolurilor din roman și a titlurilor celor trei părți ale acestuia.'],
    resurse: ['Manual Art 8, pp. 176-177', fisa(5), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Titlurile celor trei părți', timp: '5 min', activitate: pasi(
        'Le spun titlurile celor trei părți ale romanului (după manual) și îi întreb ce anticipează fiecare.') },
      { etapa: 'Simbolurile duble', timp: '12 min', activitate: pasi(
        'Discutăm dubla valoare a focului: distrugere (arde cărțile) și renaștere (căldura, pasărea Phoenix care renaște din propria cenușă).',
        'Discutăm cartea ca simbol al memoriei și al gândirii libere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (simboluri duble) și ex. 2 (titluri de părți), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Interpretare pe manual', timp: '13 min', activitate: pasi(
        'Rezolvăm ghidat 3-4 întrebări de interpretare din manual despre semnificația titlurilor părților romanului și despre simbolurile identificate.') },
      { etapa: 'Temă', timp: '8 min', activitate: pasi(
        'Comparăm simbolurile din Fahrenheit 451 cu antiteza din Iapa lui Vodă, din Unitatea IV.',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Textul nonliterar. Textul de opinie. Când vei fi adult, e posibil să nu ai un loc de muncă de Yuval Noah Harari',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Recunoaște trăsăturile textului de opinie și strategiile de argumentare folosite de autor.'],
    resurse: ['Manual Art 8, pp. 178-180', fisa(6), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Meseria mea, peste 20 de ani', timp: '5 min', activitate: pasi(
        'Îi întreb pe elevi ce meserie își doresc și dacă cred că va mai exista peste douăzeci de ani.') },
      { etapa: 'Textul de opinie', timp: '5 min', activitate: pasi(
        'Definesc textul de opinie: un text nonliterar în care autorul își expune opiniile ca să convingă cititorii; deosebim argumentele raționale de cele emoționale.') },
      { etapa: 'Lectura fragmentului', timp: '10 min', activitate: pasi(
        'Citim fragmentul din textul lui Yuval Noah Harari (pp. 178-180); notăm teza autorului despre viitorul muncii.') },
      { etapa: 'Strategiile de argumentare', timp: '8 min', activitate: pasi(
        'Prezint strategiile: obiecția (respinge o idee opusă), concesia (o acceptă parțial), analogia, examenul critic, confruntarea (pro versus contra), cu câte un exemplu identificat în text.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul despre meseriile de mâine, creat pentru fișă) și ex. 2 (strategiile din text), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '10 min', activitate: pasi(
        'Rezolvăm ghidat conectorii de ierarhizare, adaos, opoziție din text (pp. 178-180).',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Text auxiliar. Prima lecție de geometrie de Ov. S. Crohmălniceanu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește fragmentul Prima lecție de geometrie și formulează puncte de vedere argumentate despre el.'],
    resurse: ['Manual Art 8, pp. 181-182', fisa(7), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'O lecție care rămâne', timp: '6 min', activitate: pasi(
        'Îi întreb pe elevi ce lecție de școală le-a rămas în minte mult după ce s-a terminat ora, și de ce.') },
      { etapa: 'Lectura fragmentului', timp: '12 min', activitate: pasi(
        'Citesc fragmentul Prima lecție de geometrie (pp. 181-182); discutăm relația dintre profesor și elevi.') },
      { etapa: 'Ce face o lecție memorabilă', timp: '10 min', activitate: pasi(
        'Rezolvăm ghidat 2-3 întrebări din manual despre metoda profesorului și despre felul în care se schimbă înțelegerea elevului.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul „Lecția cu umbre”, creat pentru fișă) și ex. 2 (lecția memorabilă a fiecăruia), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '10 min', activitate: pasi(
        'Discutăm legătura dintre tema unității (încotro se îndreaptă lumea) și rolul cunoașterii, cu exemple de la elevi.',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-8': {
    titlu: 'Modele comportamentale în textele literaturii universale',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Discută semnificația mitului lui Prometeu, pe baza fragmentului din Prometeu înlănțuit de Eschil.'],
    resurse: ['Manual Art 8, pp. 184-185', fisa(8), 'Infograficul „Modele comportamentale în literatura universală” (/materiale/clasa-8/unitatea-5/lectia-8/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Merită să înfrunți o autoritate?', timp: '6 min', activitate: pasi(
        'Îi întreb pe elevi dacă merită să înfrunți o autoritate ca să faci un bine altora și ce preț ar fi dispuși să plătească.') },
      { etapa: 'Mitul lui Prometeu', timp: '12 min', activitate: pasi(
        'Povestesc mitul: Prometeu fură focul de la zei și îl dă oamenilor, sfidând autoritatea lui Zeus, și e pedepsit pentru asta, înlănțuit pe o stâncă.',
        'Discutăm dubla valoare a focului: cunoaștere, putere, dar și risc.') },
      { etapa: 'Fragmentul din Eschil', timp: '12 min', activitate: pasi(
        'Citim fragmentul din Prometeu înlănțuit (pp. 184-185) și comentăm atitudinea lui Prometeu față de suferință.',
        'Rezolvăm ghidat 1-2 întrebări din manual despre curajul de a înfrunta o autoritate.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (mitul lui Prometeu) și ex. 2 (modelul eroului, comparat cu alte personaje din unitate), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Infograficul', timp: '4 min', activitate: pasi(
        'Privim infograficul „Modele comportamentale în literatura universală” și situăm Prometeu printre eroii care sfidează o autoritate pentru binele altora.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Argumentare și persuasiune (partea 1/2)',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică erorile logice în argumentare și forța persuasivă a diferitelor tipuri de argumente.'],
    resurse: ['Manual Art 8, pp. 186-187', fisa(9), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Un argument evident greșit', timp: '5 min', activitate: pasi(
        'Le dau un argument greșit, „toți fac așa, deci e corect”, și îi întreb pe elevi ce nu funcționează în el.') },
      { etapa: 'Logos, patos, etos', timp: '10 min', activitate: pasi(
        'Definesc cele trei apeluri: logos (corectitudinea logică), patos (implicarea emoțională), etos (credibilitatea vorbitorului), cu exemple.') },
      { etapa: 'Forța unui argument', timp: '8 min', activitate: pasi(
        'Explic cei doi factori: premisele juste și legătura corectă cu concluzia; analizăm raționamentul greșit din manual, „Gulliver merge la școala din Laputa, deci Gulliver este elev al acestei școli”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (logos, patos sau etos) și ex. 2 (raționamente corecte sau greșite), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Erori logice, în perechi', timp: '11 min', activitate: pasi(
        'În perechi: fiecare inventează un raționament greșit și îl dă colegului să identifice eroarea.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Argumentare și persuasiune (partea 2/2)',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Concepe o argumentare orală pe tema Școala viitorului, alegând strategii potrivite de persuasiune.'],
    resurse: ['Manual Art 8, pp. 186-187', fisa(10), 'Grilă de evaluare a argumentării orale'],
    desfasurare: [
      { etapa: 'Școala mea ideală', timp: '4 min', activitate: pasi(
        'Le cer elevilor să spună, într-o frază, cum ar arăta școala lor ideală peste douăzeci de ani.') },
      { etapa: 'Tipurile de argumente', timp: '7 min', activitate: pasi(
        'Recapitulăm logos, patos, etos, aplicate temei „Școala viitorului”: dovezi, emoții, valori.') },
      { etapa: 'Pașii unei discuții argumentate', timp: '6 min', activitate: pasi(
        'Prezint pașii: notăm ideile, alegem 2-3 aspecte prin vot, căutăm strategii de persuasiune în grupe, prezentăm și evaluăm.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (tipuri de argumente) și ex. 2 (planul discuției), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Discuția argumentată', timp: '17 min', activitate: pasi(
        'Grupe mici discută 2-3 aspecte ale „Școlii viitorului” și pregătesc un argument, cu strategia aleasă.',
        'Câțiva reprezentanți prezintă; colegii evaluează după grila de la p. 187 (idee clară, logică, exemple, valori, emoții, stil).') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Grila de evaluare a argumentării orale; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Circumstanțialul de cauză',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică circumstanțialul de cauză și diferența semantică dintre din cauza și datorită.'],
    resurse: ['Manual Art 8, p. 188', fisa(11), schema(11, 'Circumstanțialul de cauză'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Din cauza sau datorită?', timp: '5 min', activitate: pasi(
        'Scriu „a întârziat din cauza ploii” și „a reușit datorită efortului” și îi întreb pe elevi de ce nu putem inversa prepozițiile.') },
      { etapa: 'Ce este circumstanțialul de cauză', timp: '8 min', activitate: pasi(
        'Definesc: arată cauza sau motivul, obligatoriu anterioară acțiunii; întrebările „din ce cauză? din ce motiv?”; regenții: verb, locuțiune, adjectiv.') },
      { etapa: 'Prin ce se exprimă', timp: '9 min', activitate: pasi(
        'Cu ajutorul schemei lecției, inventariem părțile de vorbire: substantiv/pronume/numeral cu de, din, pentru, din cauza; adjectiv; adverb; gerunziu, infinitiv.') },
      { etapa: 'Din cauza, din pricina, datorită', timp: '5 min', activitate: pasi(
        '„Din cauza”/„din pricina” — efect nefavorabil; „datorită” — efect pozitiv; corectăm oral trei enunțuri greșite.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (circumstanțialul și partea de vorbire) și ex. 2 (din cauza sau datorită), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '11 min', activitate: pasi(
        'Rezolvăm ghidat exercițiile din manual (p. 188), cu model de analiză.',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Circumstanțiala de cauză',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică propoziția circumstanțială de cauză, termenii regenți și elementele de relație ale acesteia.'],
    resurse: ['Manual Art 8, pp. 189-190', fisa(12), schema(12, 'Circumstanțiala de cauză'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'De la circumstanțial la propoziție', timp: '6 min', activitate: pasi(
        'Le dau „A plecat din cauza frigului” și le cer să înlocuiască partea subliniată cu o propoziție întreagă.') },
      { etapa: 'Regentul și elementele de relație', timp: '10 min', activitate: pasi(
        'Cu ajutorul schemei lecției: regentul poate fi verb, locuțiune, adjectiv, adverb, interjecție predicativă; elementele de relație: fiindcă, deoarece, întrucât, că, cum, când, unde cu sens cauzal; locuțiuni: pentru că, din cauză că, de vreme ce, odată ce.') },
      { etapa: 'Corelative, topică, virgulă', timp: '8 min', activitate: pasi(
        'Corelative în regentă: de aceea, atunci; regula topicii (cu „cum”, mereu înainte; cu „că, căci”, mereu după); regula virgulei.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (subordonata și elementul de relație) și ex. 2 (corelativul și virgula), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Analiza pe manual', timp: '10 min', activitate: pasi(
        'Rezolvăm ghidat exercițiile din manual (pp. 189-190), cu analiza subordonatelor cauzale.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Circumstanțialul de scop',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică circumstanțialul de scop și părțile de vorbire prin care este exprimat.'],
    resurse: ['Manual Art 8, p. 191', fisa(13), schema(13, 'Circumstanțialul de scop'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Din ce cauză sau cu ce scop?', timp: '5 min', activitate: pasi(
        'Le dau „A venit pentru carte” și îi întreb pe elevi ce răspunde partea a doua: din ce cauză sau cu ce scop?') },
      { etapa: 'Ce este circumstanțialul de scop', timp: '8 min', activitate: pasi(
        'Definesc: arată scopul, întrebările „cu ce scop? în ce scop?”; deosebirea de cauză: cauza e înainte de acțiune, scopul e urmărit de ea.') },
      { etapa: 'Regentul și părțile de vorbire', timp: '9 min', activitate: pasi(
        'Cu schema lecției: regenții (verb, interjecție predicativă, adjectiv, adverb); exprimarea prin substantiv/pronume/numeral cu pentru, spre, în vederea; infinitiv, supin.') },
      { etapa: 'Cauză sau scop?', timp: '5 min', activitate: pasi(
        'Exersăm oral pe perechi de enunțuri asemănătoare: „a plecat de frică” / „a plecat pentru cumpărături”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (circumstanțialul și partea de vorbire) și ex. 2 (cauză sau scop), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '11 min', activitate: pasi(
        'Rezolvăm ghidat exercițiile din manual (p. 191), cu model de analiză.',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Circumstanțiala de scop',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică propoziția circumstanțială de scop și o diferențiază de alte subordonate introduse prin să.'],
    resurse: ['Manual Art 8, pp. 192-193', fisa(14), schema(14, 'Circumstanțiala de scop'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Două fraze cu „să”', timp: '5 min', activitate: pasi(
        'Le dau două fraze care încep amândouă cu „să” și îi întreb pe elevi cum deosebim ce fel de subordonată e fiecare.') },
      { etapa: 'Regentul și elementele de relație', timp: '9 min', activitate: pasi(
        'Cu schema lecției: regenții (verb, locuțiune, adjectiv, interjecție predicativă); elementele de relație: ca să, ca ... să, să, de; locuțiunea pentru ca ... să.') },
      { etapa: 'Deosebirea de completivă', timp: '7 min', activitate: pasi(
        'Arăt că întrebarea se pune de la regent: „Vreau să câștig” (completivă directă) vs. „A venit să câștige” (circumstanțială de scop).') },
      { etapa: 'Corelative, topică, virgulă', timp: '6 min', activitate: pasi(
        'Corelative: de aceea, anume, înadins; reguli de topică și virgulă, după introducerea prin să/de sau prin ca să.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (subordonata și elementul de relație) și ex. 2 (completivă sau circumstanțială), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '11 min', activitate: pasi(
        'Rezolvăm ghidat exercițiile din manual (pp. 192-193).',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Construcții concesive',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică construcțiile concesive la nivel de propoziție și de frază.'],
    resurse: ['Manual Art 8, pp. 194-195', fisa(15), schema(15, 'Construcții concesive'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Deși ploua...', timp: '5 min', activitate: pasi(
        'Le dau „Deși ploua, am plecat” și îi întreb pe elevi ce ne-am fi așteptat să se întâmple și ce s-a întâmplat de fapt.') },
      { etapa: 'Ce sunt construcțiile concesive', timp: '9 min', activitate: pasi(
        'Definesc: arată o împrejurare care ar putea împiedica acțiunea, dar n-o împiedică; întrebarea „în ciuda cărui fapt?”.') },
      { etapa: 'La nivel de propoziție și de frază', timp: '10 min', activitate: pasi(
        'Cu schema lecției: circumstanțialul concesiv (cu tot, în ciuda, în pofida, chiar și) și circumstanțiala concesivă (deși, cu toate că, chiar dacă, măcar că, oricât, oricine).') },
      { etapa: 'Virgula', timp: '4 min', activitate: pasi(
        'Regulă simplă: construcțiile concesive se despart întotdeauna prin virgulă, indiferent de poziție.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (construcția concesivă și felul ei) și ex. 2 (completare), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '10 min', activitate: pasi(
        'Rezolvăm ghidat exercițiile din manual (pp. 194-195).',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Construcții condiționale',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică construcțiile condiționale la nivel de propoziție și de frază.'],
    resurse: ['Manual Art 8, pp. 196-197', fisa(16), schema(16, 'Construcții condiționale'), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Dacă ar dispărea cărțile...', timp: '5 min', activitate: pasi(
        'Le dau „Dacă ar dispărea cărțile...” și le cer să completeze, fiecare cum crede.') },
      { etapa: 'Ce sunt construcțiile condiționale', timp: '9 min', activitate: pasi(
        'Definesc: arată o ipoteză sau o condiție de care depinde acțiunea; întrebarea „cu ce condiție?”.') },
      { etapa: 'La nivel de propoziție și de frază', timp: '10 min', activitate: pasi(
        'Cu schema lecției: circumstanțialul condițional (cu condiția, în caz de, gerunziu) și circumstanțiala condițională (dacă, de, să, în caz că, când cu sens condițional).') },
      { etapa: 'Concesivă sau condițională?', timp: '4 min', activitate: pasi(
        'Exersăm oral distincția: „Dacă vii, te aștept” (condițională) vs. „Deși vii, plec oricum” (concesivă).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (construcția condițională și felul ei) și ex. 2 (concesivă sau condițională), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '10 min', activitate: pasi(
        'Rezolvăm ghidat exercițiile din manual (pp. 196-197).',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Modalități de exprimare a preferințelor și a opiniilor (partea 1/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Recunoaște mijloacele verbale prin care se exprimă preferințele, certitudinea și probabilitatea.'],
    resurse: ['Manual Art 8, pp. 198-199', fisa(17), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cât de mult te cred?', timp: '5 min', activitate: pasi(
        'Spun aceeași idee cu „știu sigur că”, „poate că” și „probabil” și îi întreb pe elevi cât de mult mă cred de fiecare dată.') },
      { etapa: 'Atitudinea subiectivă', timp: '6 min', activitate: pasi(
        'Explic: exprim atitudinea subiectivă față de o temă prin verbe de opinie, adverbe, adjective, locuțiuni.') },
      { etapa: 'Valorile și mijloacele', timp: '12 min', activitate: pasi(
        'Prezint tabelul: certitudine (știu că, firește), incertitudine (bănuiesc că), probabilitate (s-ar putea să, probabil), necesitate (trebuie să), apreciere pozitivă/negativă (merită să / din păcate).') },
      { etapa: 'Atitudine sigură sau prudentă', timp: '4 min', activitate: pasi(
        'Deosebim atitudinea sigură (certitudine, necesitate) de cea prudentă (incertitudine, probabilitate).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce exprimă fiecare enunț) și ex. 2 (grade diferite de certitudine), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '11 min', activitate: pasi(
        'Rezolvăm ghidat exercițiile din manual (pp. 198-199).',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-18': {
    titlu: 'Modalități de exprimare a preferințelor și a opiniilor (partea 2/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează un text de opinie cu titlul Încotro se îndreaptă lumea?, respectând etapele scrierii.'],
    resurse: ['Manual Art 8, pp. 198-199', fisa(18), 'Notițele de la ora anterioară'],
    desfasurare: [
      { etapa: 'Într-o frază', timp: '4 min', activitate: pasi(
        'Le cer elevilor să spună, într-o singură frază, ce cred despre direcția în care merge lumea.') },
      { etapa: 'Etapele redactării', timp: '6 min', activitate: pasi(
        'Recapitulăm cei șapte pași: adun idei, aleg punctul de vedere, mă documentez, fac planul, recitesc, verific conectorii și mijloacele de exprimare a opiniei, scriu forma finală.') },
      { etapa: 'Planul textului', timp: '8 min', activitate: pasi(
        'Prezint planul: introducerea (captează atenția, formulează opinia), cuprinsul (două argumente diferite, cu exemple), încheierea (concluzia care reafirmă poziția).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul model, creat pentru fișă) și ex. 2 (planul pe baza lui), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Redactarea', timp: '18 min', activitate: pasi(
        'Fiecare elev redactează textul de opinie cu titlul „Încotro se îndreaptă lumea?”, apoi îl schimbă cu colegul pentru revizuire, după grila de la p. 199.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: forma finală a textului, curățată după revizuire; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Grila de evaluare de la p. 199; fișa de exerciții, ex. 1-2; verificarea textului de opinie.',
  },
  'lectia-19': {
    titlu: 'Recapitulare (partea 1/3)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de lectură din unitate.'],
    resurse: ['Manual Art 8, pp. 200-201', fisa(19), 'Quizul „Recapitulare, lectură” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Noțiuni pe rând', timp: '4 min', activitate: pasi(
        'Îi rog pe elevi să spună pe rând câte o noțiune de lectură învățată în unitate.') },
      { etapa: 'Recapitulare: romanul și distopia', timp: '8 min', activitate: pasi(
        'Reluăm: romanul (personaje numeroase, acțiune complexă), utopia și distopia, SF versus fantastic și fantasy.') },
      { etapa: 'Recapitulare: structuri, personaje, conflict', timp: '9 min', activitate: pasi(
        'Reluăm cele cinci structuri textuale și cele trei moduri de îmbinare; tipurile de personaje și sursele conflictului exterior și interior.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (textul „Orașul tăcut”) și ex. 2 (utopie, distopie, structuri), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul „Recapitulare, lectură”', timp: '11 min', activitate: pasi(
        'Elevii rezolvă quizul; lămurim întrebările la care au greșit cei mai mulți.') },
      { etapa: 'Temă', timp: '6 min', activitate: pasi(
        'Rezolvăm ghidat un exercițiu din manual (pp. 200-201).',
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-20': {
    titlu: 'Recapitulare (partea 2/3)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează circumstanțialele și construcțiile concesive și condiționale învățate în unitate.'],
    resurse: ['Manual Art 8, pp. 200-201', fisa(20), 'Quizul „Recapitulare, circumstanțiale și construcții” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ce raport logic e?', timp: '4 min', activitate: pasi(
        'Scriu o frază la tablă și le cer elevilor să spună repede ce raport logic exprimă: cauză, scop, concesie sau condiție.') },
      { etapa: 'Cele patru circumstanțiale', timp: '10 min', activitate: pasi(
        'Recapitulăm, cu tabelul: întrebarea, partea de propoziție și elementele de relație pentru cauză, scop, concesie, condiție.') },
      { etapa: 'Virgula și sensul', timp: '7 min', activitate: pasi(
        'Reluăm regulile de virgulă pentru fiecare și atenționările: „din cauza”/„datorită”; cauza înaintea acțiunii, scopul urmărit de ea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (felul și elementul de relație, în patru fraze), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul „Recapitulare, circumstanțiale și construcții”', timp: '13 min', activitate: pasi(
        'Elevii rezolvă quizul; cei care termină analizează o frază complexă cu mai multe subordonate.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-21': {
    titlu: 'Recapitulare (partea 3/3)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de comunicare orală și redactare din unitate.'],
    resurse: ['Manual Art 8, pp. 200-201', fisa(21), 'Quizul „Recapitulare, comunicare orală și redactare” (materialul de joc al lecției)', 'Textele de opinie redactate'],
    desfasurare: [
      { etapa: 'Certitudine și probabilitate', timp: '4 min', activitate: pasi(
        'Le cer elevilor un enunț care exprimă certitudine și unul care exprimă probabilitate, pe aceeași temă.') },
      { etapa: 'Recapitulare: strategiile textului de opinie', timp: '10 min', activitate: pasi(
        'Reluăm obiecția, concesia, analogia, examenul critic, confruntarea, cu exemple din textul lui Harari.') },
      { etapa: 'Recapitulare: logos, patos, etos', timp: '9 min', activitate: pasi(
        'Reluăm cele trei apeluri și mijloacele de exprimare a opiniei: certitudine, probabilitate, necesitate, apreciere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-3 (strategia potrivită, logos/patos/etos), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul de recapitulare', timp: '10 min', activitate: pasi(
        'Elevii rezolvă quizul; lămurim greșelile frecvente înainte de evaluare.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (planul unui text de opinie); recitirea notițelor pentru evaluare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
  },
  'lectia-22': {
    titlu: 'Evaluare',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Susține testul de evaluare sumativă pentru unitate.'],
    resurse: ['Testul tipărit, Manual Art 8, p. 202', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul de la p. 202.',
        'Anunț structura probei (cerințe de limbă și lectură, redactare) și punctajul; explic repartizarea orientativă a timpului.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual; supraveghez și răspund doar la întrebări despre formularea cerințelor.',
        'La jumătatea timpului anunț trecerea la partea de redactare; cu 5 minute înainte de final le cer să-și recitească lucrarea.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
  'lectia-23': {
    titlu: 'Analiză și evaluarea portofoliului',
    data: null,
    tipOra: 'Analiză și evaluarea portofoliului',
    durata: 50,
    obiective: ['Discută rezultatele testului și evaluează portofoliul realizat pe parcursul anului.'],
    resurse: ['Lucrările corectate de la proba anterioară', 'Portofoliile elevilor', 'Grila de evaluare a portofoliului'],
    desfasurare: [
      { etapa: 'Ce a mers cel mai bine', timp: '5 min', activitate: pasi(
        'Prezint, centralizat și fără nume, ce a mers cel mai bine la ultima probă și îi întreb pe elevi la ce cred că au progresat cel mai mult anul acesta.') },
      { etapa: 'Anunțarea temei orei', timp: '3 min', activitate: pasi(
        'Anunț că azi discutăm rezultatele probei și evaluăm portofoliul de an, ultima oră a clasei a VIII-a.') },
      { etapa: 'Recapitularea anului', timp: '9 min', activitate: pasi(
        'Reluăm criteriile portofoliului și parcursul celor cinci unități, de la frumusețe la direcția în care merge lumea.') },
      { etapa: 'Discutarea greșelilor și înmânarea lucrărilor', timp: '20 min', activitate: pasi(
        'Discut pe rând greșelile tipice din probă și arăt cum se corectează.',
        'Înmânez lucrările și trec pe la fiecare elev cu o observație scurtă și concretă.') },
      { etapa: 'Prezentarea portofoliului', timp: '13 min', activitate: pasi(
        'Fiecare elev își prezintă portofoliul, alege piesa de care e cel mai mândru și explică de ce.',
        'Completez grila de evaluare a portofoliului.') },
    ],
    evaluare: 'Evaluarea portofoliului după grilă; discutarea rezultatelor probei, fără notare suplimentară.',
  },
}
