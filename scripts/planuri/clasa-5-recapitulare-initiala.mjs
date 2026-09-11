// Planuri de lecție detaliate pentru Recapitularea inițială, clasa a V-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei. Surse: planurile de lecție ale Antoanelei pentru săptămâna I, fișele și
// testele inițiale proprii, Ghidul profesorului (III.1). Testele și rezolvările
// nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-5/recapitulare-initiala/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Jocuri și activități de intercunoaștere',
    data: null,
    tipOra: 'Organizare, intercunoaștere',
    durata: 50,
    obiective: [
      'Elevii se familiarizează cu profesorul și cu specificul orei de română la gimnaziu.',
      'Elevii își exprimă pasiunile și așteptările de la disciplină, iar profesorul comunică regulile de organizare a orei și criteriile de evaluare.',
    ],
    resurse: [
      'Prezentarea „Bun venit la Limba Română!” (/materiale/clasa-5/recapitulare-initiala/lectia-1/prezentare.pdf)',
      'Jocurile de intercunoaștere: Vânătoarea de colegi și Pașaportul clasei a V-a (/materiale/clasa-5/recapitulare-initiala/lectia-1/joc.pdf)',
      'Manualul de clasa a V-a, pentru prezentarea Unității I',
      'Bandă adezivă, pentru pașapoarte',
    ],
    desfasurare: [
      { etapa: 'Bun venit', timp: '4 min', activitate: pasi(
        'Prezentarea, slide-urile 1-2: mă prezint pe scurt (ce predau, cum îmi doresc să fie orele noastre).',
        'Fiecare elev spune într-un cuvânt cum se simte în prima oră de română din gimnaziu.') },
      { etapa: 'Vânătoarea de colegi', timp: '13 min', activitate: pasi(
        'Împart grila de bingo (joc.pdf, p. 2) și explic regulile: elevii circulă, pun întrebarea din căsuță, notează numele colegului care răspunde „da”; un nume o singură dată.',
        'Primul care completează un rând, o coloană sau o diagonală strigă „Bingo!” și citește numele din grilă.',
        'Dacă e nevoie de o variantă mai liniștită: jocul „Cartea de vizită” din prezentare (numele, o carte sau un film preferat, un lucru care te reprezintă).') },
      { etapa: 'Ce se schimbă în clasa a V-a', timp: '6 min', activitate: pasi(
        'Slide-ul „Ce se schimbă”: mai mulți profesori; ora de română are lectură, comunicare orală, limbă română și redactare; accent pe interpretare și argumentare.',
        'Arăt manualul: cum arată o unitate și rubricile ei (Pentru început, Explorare, Repere, Aplicații).') },
      { etapa: 'Reguli și evaluare', timp: '8 min', activitate: pasi(
        'Materialele: caiet de clasă, caiet de teme, dicționar. Regulile: ridicăm mâna, ascultăm până la capăt, temele se predau la timp.',
        'Sistemul de evaluare: teste scrise, teme și activitate la clasă, portofoliu.',
        'Elevii notează regulile pe prima pagină a caietului de clasă.') },
      { etapa: 'Pașaportul clasei a V-a', timp: '12 min', activitate: pasi(
        'Fiecare completează pașaportul (joc.pdf, p. 3): numele, o pasiune, o așteptare de la orele de română, un desen sau simbol personal. Îl completez și eu pe al meu.',
        'Câțiva elevi își citesc așteptarea; pașapoartele se lipesc pe peretele clasei, sub titlul „Clasa a V-a”, până la sfârșitul semestrului.') },
      { etapa: 'Unitatea I', timp: '4 min', activitate: pasi(
        'Anunț tema unității: „Despre mine. Selfie”. Întrebarea de deschidere: ce credeți că spune un selfie despre voi?') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: materialele pentru ora următoare (caietele, dicționarul).',
        'Anunț ora de recapitulare și cele două teste inițiale, care nu se trec în catalog.') },
    ],
    evaluare: 'Observarea sistematică a participării la joc și la discuție; pașaportul cu așteptări, fără notare.',
  },
  'lectia-2': {
    titlu: 'Recapitulare inițială, exerciții',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: [
      'Recapitulează, prin exerciții variate, cunoștințe de vocabular, fonetică și ortografie din ciclul primar: sinonime, antonime, grupuri de sunete, despărțirea în silabe, scrierea corectă.',
      'Recunoaște părțile de vorbire și tipurile de propoziție învățate în ciclul primar și redactează, după dictare, un text funcțional simplu.',
    ],
    resurse: [
      'Fișa de recapitulare (/materiale/clasa-5/recapitulare-initiala/lectia-2/fisa.pdf)',
      fisa(2),
      'Tablă, caiete',
    ],
    desfasurare: [
      { etapa: 'Joc de cuvinte', timp: '5 min', activitate: pasi(
        'Lanțul sinonimelor: spun un cuvânt (frumos, a merge, mare), elevii dau pe rând câte un sinonim; apoi la fel cu antonimele.') },
      { etapa: 'Vocabular și sunete', timp: '10 min', activitate: pasi(
        'Fișa de recapitulare, ex. 1-2 (sinonime și antonime, despărțirea în silabe, diftongii), individual, 6 minute.',
        'Verificare, 4 minute; la tablă, despărțim în silabe două cuvinte mai grele.') },
      { etapa: 'Scrierea corectă', timp: '6 min', activitate: pasi(
        'Fișa de recapitulare, ex. 3: corectăm la tablă enunțurile greșite.',
        'În caiete: ortogramele din ciclul primar (s-a / sa, i-a / ia, s-au / sau, într-o), cu câte un exemplu.') },
      { etapa: 'Gramatică', timp: '8 min', activitate: pasi(
        'Fișa de recapitulare, ex. 4: substantivele și verbele din propoziție; felul propozițiilor după scopul comunicării.',
        'Reamintim, cu exemple la tablă, părțile de vorbire știute (substantiv, verb, adjectiv, pronume, numeral) și subiectul și predicatul.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 2: ex. 4 (părțile de vorbire), ex. 5 (subiect și predicat) și ex. 6 (felul propozițiilor), individual, 9 minute.',
        'Verificare, 4 minute; notez cine are nevoie de sprijin la gramatică.') },
      { etapa: 'Dictare', timp: '5 min', activitate: pasi(
        'Fișa de recapitulare, ex. 5: dictez textul despre începutul anului școlar; elevii scriu în caiet; verific câteva caiete pe loc.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de recapitulare, ex. 6 (invitația); fișa de exerciții, pagina 1 și ex. 7 (biletul).') },
    ],
    evaluare: 'Observarea sistematică a rezolvării fișelor; verificarea textului scris după dictare, fără notare în catalog.',
  },
  'lectia-3': {
    titlu: 'Evaluare inițială, receptarea mesajului scris',
    data: null,
    tipOra: 'Evaluare inițială',
    durata: 50,
    obiective: [
      'Se identifică nivelul de înțelegere a unui text citit, la începutul clasei a V-a.',
      'Se verifică vocabularul activ și competențele de bază formate în ciclul primar.',
    ],
    resurse: [
      'Test inițial de receptare a mesajului scris, tipărit, câte un exemplar pentru fiecare elev',
      'Text-suport la prima vedere, potrivit vârstei',
    ],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Așez clasa câte un elev în bancă și distribui testele.',
        'Spun că testul nu se trece în catalog: rezultatul mă ajută să văd de unde pornim.',
        'Structura: I. Înțelegerea textului (30 de puncte), II. Vocabular (20), III. Exprimare personală, 4-6 rânduri (30), IV. Corectitudine (10); 10 puncte din oficiu; 40 de minute.',
        'Sfaturi: citiți textul de două ori, subliniați, căutați răspunsul în text; lăsați câteva minute pentru textul de la subiectul III.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual, în liniște; monitorizez fără să intervin pe conținut.',
        'Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii își recitesc răspunsurile, apoi strâng testele.',
        'Anunț că rezultatele se discută la ora de analiză.') },
    ],
    evaluare: 'Evaluare inițială scrisă, cu punctaj orientativ, fără notă în catalog; rezultatele se discută la lecția de analiză și remediere.',
  },
  'lectia-4': {
    titlu: 'Evaluare inițială, elemente de construcție a comunicării',
    data: null,
    tipOra: 'Evaluare inițială',
    durata: 50,
    obiective: [
      'Se verifică nivelul de cunoaștere a elementelor de bază de construcție a comunicării, formate în ciclul primar: părți de vorbire, propoziția, punctuația.',
    ],
    resurse: [
      'Test inițial de construcție a comunicării, tipărit, câte un exemplar pentru fiecare elev',
    ],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Așez clasa câte un elev în bancă și distribui testele; reamintesc că e a doua probă a evaluării inițiale, tot fără notă în catalog.',
        'Structura: I. Tipuri de propoziții (20 de puncte), II. Părți de vorbire (30), III. Subiect și predicat (20), IV. Punctuație (20); 10 puncte din oficiu; 40 de minute.',
        'Citesc cerințele cu voce tare și răspund doar la întrebări despre ce se cere.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual, în liniște; monitorizez fără să intervin pe conținut.',
        'Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii își verifică răspunsurile, apoi strâng testele.',
        'Anunț ora de analiză: fiecare își va primi lucrarea și își va stabili obiectivele.') },
    ],
    evaluare: 'Evaluare inițială scrisă, cu punctaj orientativ, fără notă în catalog; erorile frecvente se centralizează pentru lecția de remediere.',
  },
  'lectia-5': {
    titlu: 'Analiza testului inițial și remediere',
    data: null,
    tipOra: 'Analiză și remediere',
    durata: 50,
    obiective: [
      'Elevii înțeleg rezultatele obținute la testele inițiale și tipurile de erori frecvente la nivelul clasei.',
      'Se stabilesc, pentru fiecare elev, obiective individuale realiste pentru începutul anului.',
    ],
    resurse: [
      'Lucrările corectate de la cele două teste inițiale',
      'Fișa de remediere individuală (/materiale/clasa-5/recapitulare-initiala/lectia-5/fisa.pdf)',
      'Tablă, pentru centralizarea erorilor frecvente',
    ],
    desfasurare: [
      { etapa: 'Rezultatele clasei', timp: '5 min', activitate: pasi(
        'Prezint, fără nume, cum arată rezultatele clasei la cele două teste și ce a mers bine în general.',
        'Ora depinde de corectare: greșelile discutate se aleg după ce văd lucrările.') },
      { etapa: 'Greșelile frecvente', timp: '12 min', activitate: pasi(
        'Scriu pe tablă, fără nume, trei-patru greșeli care au apărut des (de exemplu, la felul propoziției și punctuație, la părțile de vorbire, la subiect și predicat, la scrierea corectă).',
        'Elevii spun de ce cred că au apărut și cum se corectează; notăm regula lângă fiecare greșeală.') },
      { etapa: 'Exersăm regulile', timp: '10 min', activitate: pasi(
        'Pentru fiecare regulă, două exemple noi pe care le rezolvă elevii la tablă, cu ajutorul clasei; restul clasei lucrează în caiete.') },
      { etapa: 'Lucrările înapoi', timp: '8 min', activitate: pasi(
        'Împart lucrările corectate; fiecare își citește observațiile și își corectează în caiet o greșeală proprie.',
        'Trec pe la bănci pentru o observație scurtă și concretă.') },
      { etapa: 'Fișa de remediere', timp: '12 min', activitate: pasi(
        'Fiecare elev completează fișa: punctajele celor două teste, ce a mers bine, ce e de exersat, unul-două obiective realiste pentru primele săptămâni.',
        'Bifez eu măsurile de sprijin; cu elevii care au nevoie, stabilesc un moment de verificare.') },
      { etapa: 'Încheiere', timp: '3 min', activitate: pasi(
        'Fișele se păstrează în portofoliu și le revedem la prima recapitulare, după Unitatea I.') },
    ],
    evaluare: 'Observarea sistematică a participării la discuție; fișa individuală de remediere, folosită ca reper pe parcursul semestrului.',
  },
}
