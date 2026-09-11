// Planuri de lecție detaliate pentru Recapitularea inițială, clasa a VI-a. Cele 6 ore
// reiau materia de limbă din clasa a V-a, Unitatea I (Manual Art 5, pp. 24-35), cu
// schemele și quizurile de acolo. Prima oră include prezentarea manualului de clasa a
// VI-a. Fără moment organizatoric (se subînțelege); recapitularea nu se notează în
// catalog. Rezolvările fișelor nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-6/recapitulare-initiala/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Propoziția. Tipuri de propoziții',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: [
      'Reactualizează definiția propoziției și clasificarea propozițiilor după alcătuire și după aspectul predicatului, învățate în clasa a V-a.',
      'Se familiarizează cu manualul nou de clasa a VI-a.',
    ],
    resurse: [
      'Manualul Art 6, pentru prezentarea cuprinsului și a rubricilor',
      fisa(1),
      'Manual Art 5, pp. 24-25, ca reper pentru recapitulare',
      'Schema „Propoziția. Tipuri de propoziții” (/materiale/clasa-5/unitatea-1/lectia-9/schema.svg)',
      'Quizul „Subiectul și predicatul” (materialul de joc al lecției)',
    ],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        'Fiecare elev spune o propoziție despre vacanța lui; scriu pe tablă două dintre ele, una scurtă și una bogată în detalii.') },
      { etapa: 'Manualul de clasa a VI-a', timp: '8 min', activitate: pasi(
        'Răsfoim manualul: cuprinsul, cu cele cinci unități, și rubricile unei lecții (Pentru început, Explorare, Repere, Aplicații, Provocări, Portofoliu).',
        'Anunț cele șase ore de recapitulare, fără notă în catalog.') },
      { etapa: 'Notițe recapitulative', timp: '8 min', activitate: pasi(
        'Cu schema din clasa a V-a, în caiete: propoziția (un singur predicat), subiectul și predicatul, propoziția simplă și dezvoltată, afirmativă și negativă.',
        'Ortografia și punctuația propoziției: majuscula, semnele de la final, virgula după o strigare și într-o enumerare, două puncte înaintea enumerării, linia de dialog.') },
      { etapa: 'Exerciții la tablă', timp: '6 min', activitate: pasi(
        'Pe propozițiile de la început: predicatul, subiectul, felul propoziției; transformăm propoziția simplă în dezvoltată și pe cea afirmativă în negativă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (fișa propoziției), ex. 2 (câte propoziții?) și ex. 3 (transformă), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Subiectul și predicatul”, frontal; notez ce greșesc mai mulți elevi.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (dialogul și cele cinci propoziții despre vacanță).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții și quizul, fără notare.',
  },
  'lectia-2': {
    titlu: 'Cuvântul și dicționarul',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează rolul dicționarului, structura unui articol de dicționar și ordonarea alfabetică a cuvintelor, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 26-27, ca reper pentru recapitulare',
      fisa(2),
      'Quizul „Cuvântul și dicționarul” (materialul de joc al lecției)',
      'Un dicționar tipărit sau dexonline.ro',
      'Cartonașe cu cuvinte pentru jocul alfabetic',
    ],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi-trei elevi citesc propozițiile despre vacanță; clasa spune felul fiecăreia.') },
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Arăt un dicționar tipărit și dexonline: care e ultimul cuvânt pe care l-ați căutat și de ce?') },
      { etapa: 'Notițe recapitulative', timp: '7 min', activitate: pasi(
        'În caiete: cuvântul (sens și formă), contextul care stabilește sensul, vocabularul.',
        'Dicționarul și felurile lui (explicativ, ortografic, de sinonime, de antonime, enciclopedic, bilingv); ordinea alfabetică după prima literă diferită; articolul de dicționar (cuvântul-titlu, informațiile gramaticale, sensurile numerotate, expresiile, originea).') },
      { etapa: 'Lucru cu dicționarul', timp: '10 min', activitate: pasi(
        'Fiecare pereche caută în dicționar sau pe dexonline un cuvânt dat (de exemplu: zăbavă, lipici, a scoate) și marchează părțile articolului.',
        'Două perechi prezintă ce au găsit.') },
      { etapa: 'Jocul alfabetic', timp: '4 min', activitate: pasi(
        'Șase elevi primesc cartonașe cu cuvinte care încep la fel și se așază în ordinea din dicționar; clasa verifică.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (același verb, alte sensuri) și ex. 2 (ordinea din dicționar), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Cuvântul și dicționarul”, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (ce dicționar folosești și articolul pentru „ghiozdan”).') },
    ],
    evaluare: 'Observarea lucrului în perechi; fișa de exerciții și quizul, fără notare.',
  },
  'lectia-3': {
    titlu: 'Sinonimele. Antonimele',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează identificarea și folosirea adecvată a sinonimelor și a antonimelor, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 28-29, ca reper pentru recapitulare',
      fisa(3),
      'Quizul „Sinonime și antonime” (materialul de joc al lecției)',
      'Caietele elevilor',
    ],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi elevi citesc articolul de dicționar pentru „ghiozdan”.') },
      { etapa: 'Lanțul sinonimelor', timp: '5 min', activitate: pasi(
        'Spun un cuvânt; fiecare elev, pe rând, dă un sinonim; apoi la fel cu antonimele. Cine repetă un cuvânt spus deja pierde rândul.') },
      { etapa: 'Notițe recapitulative', timp: '6 min', activitate: pasi(
        'În caiete: sinonimele și antonimele, aceeași parte de vorbire; alegerea sinonimului după context; sinonime pentru fiecare sens al unui cuvânt și pentru expresii; antonime formate cu ne-, des-/dez-, in-/im- (necunoscut, a dezlega, imposibil).') },
      { etapa: 'Exerciții la tablă', timp: '7 min', activitate: pasi(
        'Verbul „a face” în contexte diferite: a face o prăjitură, o casă, o poezie, o greșeală; elevii găsesc sinonimul potrivit fiecăruia.',
        'Perechi de antonime pentru cuvinte date de elevi.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (sinonimul potrivit), ex. 2 (intrusul e un antonim) și ex. 3 (antonime), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Sinonime și antonime”, frontal.') },
      { etapa: 'Duelul sinonimelor', timp: '7 min', activitate: pasi(
        'Două echipe, câte două minute pentru fiecare cuvânt: cât mai multe sinonime pentru „a spune”, „frumos”, „frică”; verificăm să fie aceeași parte de vorbire.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (expresiile și textul fără repetiții).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții și quizul, fără notare.',
  },
  'lectia-4': {
    titlu: 'Câmpul lexical',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează definiția câmpului lexical și gruparea termenilor după trăsături de sens comune, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 30-31, ca reper pentru recapitulare',
      fisa(4),
      'Schema „Câmpul lexical” (/materiale/clasa-5/unitatea-1/lectia-12/schema.svg)',
      'Caietele elevilor',
    ],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi elevi citesc textul rescris fără repetiții; clasa verifică sinonimele alese.') },
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        'Elevii spun cuvinte legate de școală; le grupez pe tablă fără să spun criteriul; ei ghicesc după ce le-am grupat.') },
      { etapa: 'Notițe recapitulative', timp: '6 min', activitate: pasi(
        'Cu schema din clasa a V-a, în caiete: câmpul lexical (aceeași idee, aceeași parte de vorbire), sinonimele și expresiile din câmp, cuvintele cu mai multe sensuri, în câmpuri diferite.') },
      { etapa: 'Joc pe grupe', timp: '8 min', activitate: pasi(
        'Cinci grupe, câte două minute pentru fiecare câmp lexical: vacanța, prietenia, orașul. Câștigă grupa cu cele mai multe cuvinte corecte; verificăm partea de vorbire.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (trei câmpuri lexicale), ex. 2 (intrusul) și ex. 3 (câmpul lexical al cuvântului „casă”), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Câmpul lexical al familiei', timp: '9 min', activitate: pasi(
        'Construim împreună, pe tablă, câmpul lexical al familiei: rudenia naturală, rudenia prin căsătorie, sinonime (mătușă – tanti), cuvinte formate (bunicuță), expresii (frate vitreg).',
        'Elevii copiază tabelul în caiete.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (un cuvânt, două câmpuri și textul despre o zi în familie).') },
    ],
    evaluare: 'Produsele grupelor; fișa de exerciții, fără notare.',
  },
  'lectia-5': {
    titlu: 'Tipurile de sunete',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează diferențierea vocalelor, consoanelor și semivocalelor și corespondența sunet-literă, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 32-33, ca reper pentru recapitulare',
      fisa(5),
      'Schema „Tipurile de sunete” (/materiale/clasa-5/unitatea-1/lectia-13/schema.svg)',
      'Cartonașe cu literele alfabetului',
      'Caietele elevilor',
    ],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi elevi citesc textul despre o zi în familie; clasa numără cuvintele din câmpul lexical.') },
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        'Fiecare își pronunță rar prenumele: câte sunete aude, câte litere scrie? Notez pe tablă două nume în care numerele diferă.') },
      { etapa: 'Notițe recapitulative', timp: '7 min', activitate: pasi(
        'Cu schema din clasa a V-a, în caiete: vocalele (șapte), consoanele, semivocalele (ĕ, ĭ, ŏ, ŭ), i „șoptit”.',
        'Alfabetul (31 de litere) și corespondența sunet-literă: x notează două sunete, [î] se scrie cu î sau â, [k] cu c, k sau q; grupurile ce, ci, ge, gi, che, chi, ghe, ghi.') },
      { etapa: 'Exerciții la tablă', timp: '6 min', activitate: pasi(
        'Notăm V, C sau S sub literele unor cuvinte date (broască, caiet, soare); numărăm literele și sunetele în „taxi” și „examen”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (litere și sunete), ex. 2 (semivocalele) și ex. 3 (literele rare), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Puntea spre Unitatea I', timp: '5 min', activitate: pasi(
        'Anunț că în Unitatea I învățăm diftongul, triftongul și hiatul, care pornesc de la semivocale: observăm, fără definiții, ce se întâmplă în „iarnă” și în „soare”.') },
      { etapa: 'Jocul alfabetului', timp: '6 min', activitate: pasi(
        'Elevii extrag câte un cartonaș cu o literă și se așază în ordinea alfabetului; cei cu vocale fac un pas în față.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, fără notare.',
  },
  'lectia-6': {
    titlu: 'Silaba. Accentul',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Reactualizează despărțirea în silabe și identificarea accentului corect, conform DOOM3, învățate în clasa a V-a.'],
    resurse: [
      'Manual Art 5, pp. 34-35, ca reper pentru recapitulare',
      fisa(6),
      'Quizul „Silaba și accentul” (materialul de joc al lecției)',
      'DOOM3 sau dexonline.ro',
    ],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Verificăm oral cuvintele cu semivocale scrise acasă.') },
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Elevii bat din palme silabele numelor lor și ale unor cuvinte lungi (bibliotecă, electricitate).') },
      { etapa: 'Notițe recapitulative', timp: '6 min', activitate: pasi(
        'În caiete: silaba (o singură vocală, un singur efort expirator); liniuța de despărțire la capăt de rând, pusă o singură dată; accentul (loc nefix, poate schimba sensul: ácele – acéle); DOOM3 marchează vocala accentuată prin subliniere.') },
      { etapa: 'Despărțiri la tablă', timp: '7 min', activitate: pasi(
        'Despărțim împreună cuvinte cu o consoană, cu două consoane și cu grupuri de consoane între vocale (a-mic, ar-bust, as-tru); verificăm pe dexonline.') },
      { etapa: 'Accentul corect', timp: '8 min', activitate: pasi(
        'Fiecare pereche caută în DOOM3 sau pe dexonline accentul pentru două cuvinte des greșite (caracter, trafic, profesor, avarie, antic, aripă); le citim corect cu voce tare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (desparte în silabe), ex. 2 (accentul corect) și ex. 3 (accentul schimbă sensul), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Silaba și accentul”, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (rimele și catrenul); anunț începutul Unității I.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții și quizul, fără notare.',
  },
}
