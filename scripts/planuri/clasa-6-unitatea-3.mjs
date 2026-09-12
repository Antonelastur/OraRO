// Planuri de lecție detaliate pentru Unitatea III „Dincolo de ferestre”,
// clasa a VI-a. Fără moment organizatoric (se subînțelege); fiecare etapă are pașii
// concreți ai orei: rubrica și exercițiul din manual, întrebările, ce se notează în
// caiete, fișa de exerciții, tema. Surse: Manual Art 6, pp. 84-120, și ghidul
// profesorului. Rezolvările din ghid și ale fișelor nu intră aici (datele ajung
// în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-6/unitatea-3/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul descriptiv literar în versuri. Iarna de Vasile Alecsandri (I), prima lectură',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică trăsăturile textului descriptiv literar în versuri, pe baza poeziei Iarna de Vasile Alecsandri.'],
    resurse: ['Manual Art 6, pp. 84-85', fisa(1), 'Coli pentru câmpurile lexicale', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Sunetele iernii', timp: '3 min', activitate: pasi(
        '„Pentru început”, p. 84, ex. 1: trei grupe (rândurile de bănci) imită pe rând vântul, pașii pe zăpadă, lemnele pe foc, apoi toate odată. Cum sună iarna?') },
      { etapa: 'Câmpurile lexicale', timp: '6 min', activitate: pasi(
        'Ex. 2: patru grupe notează pe coli cuvinte pentru vegetație și faună, fenomene meteorologice, activitățile oamenilor, simbolurile iernii; colile se lipesc alăturat, ca un tabel.') },
      { etapa: 'Despre autor', timp: '3 min', activitate: pasi(
        'Caseta de la p. 84: Vasile Alecsandri, „bardul de la Mircești”, poet al generației de la 1848; piesele cu Chirița; volumul „Pasteluri” (1867-1869), cu natura în toate anotimpurile.') },
      { etapa: 'Lectura model', timp: '9 min', activitate: pasi(
        'Citesc poezia expresiv, cu manualele închise.',
        'Lămurim cuvintele din subsol (zbor, dalb, zale, a se prevedea, albiu) și formele vechi (perdute, pintre, împregiur).') },
      { etapa: 'Impresii după prima lectură', timp: '5 min', activitate: pasi(
        'P. 84, ex. 1-2: ce imagine ați reținut? De ce alte texte despre iarnă v-a amintit poezia?') },
      { etapa: 'Explorare, ex. 1, 2, 4', timp: '6 min', activitate: pasi(
        'Câte strofe are poezia? În câte fragmente o împărțim după felul în care se arată iarna? Ce fel de text este și de ce?') },
      { etapa: 'Notițe: textul descriptiv în versuri', timp: '3 min', activitate: pasi(
        'În caiete, după Repere, p. 85: organizarea după formă (sonorități, ritmuri) și după conținut (imagini vizuale, sonore, olfactive, tactile).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce vezi, ce auzi, ce simți) și ex. 2 (două ierni), individual, 8 minute.',
        'Verificare, 4 minute; fiecare răspuns cu versul citit cu voce tare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Explorare, ex. 3 (harta subiectivă: desenul peisajului din primele trei strofe, cu elementul cel mai important); începutul memorării poeziei; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; colile cu câmpurile lexicale; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Iarna de Vasile Alecsandri (II), prozodie și recitare',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Recunoaște strofa și versul ca elemente de prozodie și recită expresiv un fragment din poezia Iarna.'],
    resurse: ['Manual Art 6, pp. 84-85', fisa(2), 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-2/fisa.pdf)', 'Grila de recitare de la p. 85'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '5 min', activitate: pasi(
        'Două-trei hărți subiective se prezintă: ce element a ales fiecare și de ce; observăm cât de diferit am „văzut” același text.') },
      { etapa: 'Strofa și versul', timp: '5 min', activitate: pasi(
        'Recitim Reperele de la p. 85; numim strofa, versul, catrenul, pe poezie.') },
      { etapa: 'Pregătirea recitării', timp: '6 min', activitate: pasi(
        'Citesc expresiv strofa a doua; discutăm grila de la p. 85 (intonația, ritmul rostirii, gestica și mimica) și unde apar teama și bucuria în poezie.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (strofa și versul) și ex. 2 (marcarea pauzelor și a accentelor în strofa a doua), individual, 7 minute.',
        'Verificare, 3 minute; doi elevi citesc strofa după marcaje.') },
      { etapa: 'Fișa lecției', timp: '6 min', activitate: pasi(
        'Elevii rezolvă fișa lecției, individual.') },
      { etapa: 'Concursul de recitări', timp: '15 min', activitate: pasi(
        'Aplicații, ex. 1: voluntarii recită câte o strofă (sau toată poezia, cine o știe); colegii acordă fețe zâmbitoare pe grila de la p. 85.',
        'Perechile folosesc și grila colegului din fișa de exerciții, ex. 3.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: memorarea întregii poezii; Aplicații, ex. 2 (fragmentele care arată abundența ninsorii); fișa de exerciții, ex. 4-5.') },
    ],
    evaluare: 'Interevaluarea recitărilor pe grilă; fișa lecției; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Descrierea în versuri. Textul descriptiv literar',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică indicii spațiali și temporali ai descrierii și particularitățile textului descriptiv literar în versuri.'],
    resurse: ['Manual Art 6, pp. 86-87', fisa(3), 'Schema „Descrierea în versuri. Tabloul. Pastelul” (/materiale/clasa-6/unitatea-3/lectia-3/schema.svg)', 'O hartă fizică a României și doi fulgi de hârtie', 'Coli pentru planșe'],
    desfasurare: [
      { etapa: 'Fulgii pe hartă', timp: '4 min', activitate: pasi(
        'Explorare, p. 86, ex. 1: doi elevi lipesc fulgul mare unde vine mai întâi iarna și pe cel mic unde vine cel mai târziu; clasa explică de ce.') },
      { etapa: 'Explorare, ex. 2-6', timp: '10 min', activitate: pasi(
        'Formele de relief și imaginea (panoramică sau detaliată); unde se află cel care descrie (variantele a-d, cu motivare).',
        'Ex. 4, în perechi: traiectoria privirii între planul terestru și cel ceresc; ex. 5-6: indicii de timp și rolul repetițiilor.') },
      { etapa: 'Planșa elementelor', timp: '8 min', activitate: pasi(
        'Ex. 7: grupe de 3-4 fac planșa elementelor componente și a proprietăților din strofa a treia, după modelul de la p. 86; o grupă prezintă.') },
      { etapa: 'Notițe: textul descriptiv literar, tabloul, pastelul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (pp. 86-87) și schema lecției: elemente componente și proprietăți, relația cu spațiul și timpul, tabloul, pastelul.') },
      { etapa: 'Ex. 8-10', timp: '4 min', activitate: pasi(
        'Frontal: culoarea dominantă din strofa a treia; contururile spațiului în cele două secvențe; de ce artă se apropie descrierea.') },
      { etapa: 'Cele două tablouri', timp: '6 min', activitate: pasi(
        'Explorare, p. 87, ex. 2-3: diagrama Venn a celor două tablouri, pe tablă, cu propunerile elevilor; sentimentele fiecărui tablou, cu fragmente din text.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: poezia „Dimineață de ianuarie” (scrisă pentru fișă) și ex. 2 (schema descrierii), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, p. 87 (ex. 1-4 despre ultima strofă și ex. 1-4 de la „Aplicații” de jos); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Planșele grupelor; observarea sistematică; fișa de exerciții, ex. 2.',
  },
  'lectia-4': {
    titlu: 'Epitetul. Versificația (I), limbaj figurat',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică epitetul, comparația și personificarea într-un text descriptiv literar și explică rolul lor.'],
    resurse: ['Manual Art 6, pp. 88-89', fisa(4), 'Schema „Epitetul. Versificația” (/materiale/clasa-6/unitatea-3/lectia-4/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Fulgul, în patru sensuri', timp: '4 min', activitate: pasi(
        'Explorare, p. 88, ex. 1, în perechi: sensul cuvântului „fulg” în enunțurile de sub ilustrații; verificăm frontal.') },
      { etapa: 'Sensuri figurate și personificări', timp: '6 min', activitate: pasi(
        'Ex. 2-3: ce înseamnă „cerne”, „plutesc”, „fiori (de gheață)”, „umeri” în prima strofă; personificările din primele două strofe și ce sugerează.') },
      { etapa: 'Tabelul comparațiilor', timp: '7 min', activitate: pasi(
        'Ex. 4: grupe de 3-4 completează tabelul (comparația, ce sugerează, ce atmosferă), pornind de la modelul cu plopii; un reprezentant prezintă.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '3 min', activitate: pasi(
        'Personificările din ultima strofă; expresia „oceanul de ninsoare”.') },
      { etapa: 'Epitetul, descoperit', timp: '7 min', activitate: pasi(
        'Explorare, pp. 88-89, ex. 1-5: adjectivele cu însușiri deosebite, „voios” pe lângă verb, „dalbi” și „argintie”, „de gheață”, „mândra țară”.') },
      { etapa: 'Notițe: figurile de stil și epitetul', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: rolul figurilor de stil; epitetul (prin adjectiv, prin substantiv, pe lângă verb); cromatic, personificator; simplu, dublu, triplu, în cumul.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce figură de stil?) și ex. 2 (felul epitetului), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 2', timp: '3 min', activitate: pasi(
        'Frontal: rolul epitetelor în versurile despre „întinderea pustie” și „satele perdute”.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, p. 89, ex. 1 și 3 (epitetele primei strofe, enunțuri cu epitete personificatoare); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Tabelul comparațiilor; observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Epitetul. Versificația (II), rimă, măsură, ritm',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică, intuitiv, rima, măsura și ritmul unui text poetic.'],
    resurse: ['Manual Art 6, pp. 89-90', fisa(5), 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-5/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Apolodor', timp: '3 min', activitate: pasi(
        'Explorare, p. 89, ex. 5: versurile din „Cartea cu Apolodor” de Gellu Naum; ce au în comun sfârșiturile de vers?') },
      { etapa: 'Măsura', timp: '8 min', activitate: pasi(
        'Ex. 1: numărăm silabele versurilor primei strofe din „Iarna”, la tablă.',
        'Ex. 2, în perechi: măsura fragmentelor de George Coșbuc și Șt. O. Iosif.') },
      { etapa: 'Rima', timp: '5 min', activitate: pasi(
        'Ex. 3-4: versurile care se termină în aceleași sunete în strofele a II-a și a III-a și în fragmentele de la ex. 2.') },
      { etapa: 'Notițe: versificația', timp: '6 min', activitate: pasi(
        'În caiete, după Repere, p. 90: versul, măsura, strofa, catrenul, rima împerecheată, încrucișată, îmbrățișată, monorima, ritmul, versurile albe; câte un exemplu pentru fiecare tip de rimă, cu litere (aabb...).') },
      { etapa: 'Ritmul', timp: '4 min', activitate: pasi(
        'Ex. 6: marcăm silabele accentuate în versul lui Alecsandri și în cel al lui Octavian Goga; bătem ritmul în bancă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: cele trei catrene (scrise pentru fișă) și ex. 2 (măsura și rima), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-4', timp: '8 min', activitate: pasi(
        'În perechi, pe strofa lui Ion Pillat de la p. 90: epitetele, rima, măsura, felul strofei; verificăm frontal.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Provocări”, ex. 1 (poezia „Adunare neobișnuită”, trei strofe); fișa lecției; fișa de exerciții, pagina 2. Opțional, „Portofoliu”: poezii cu strofe de 6-12 versuri.') },
    ],
    evaluare: 'Observarea sistematică; fișa lecției; fișa de exerciții, ex. 2.',
  },
  'lectia-6': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează o opinie argumentată despre semnificația poeziei Iarna de Vasile Alecsandri.'],
    resurse: ['Manual Art 6, p. 91', fisa(6), 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-6/fisa.pdf)', 'Coli pentru planșe'],
    desfasurare: [
      { etapa: 'Interpretare, ex. 1-2', timp: '3 min', activitate: pasi(
        'Tema poeziei; rolul timpului prezent în descriere.') },
      { etapa: 'Interpretare, ex. 3-6', timp: '9 min', activitate: pasi(
        'Cum se schimbă peisajul după ninsoare; e real sau imaginar; versurile în care visarea domolește dezlănțuirea naturii; privirea spre văzduh la început și la sfârșit.') },
      { etapa: 'Investigația (ex. 7)', timp: '13 min', activitate: pasi(
        'Etapa 1, în perechi (5 minute): imaginea țării în zale, rolul personificării, epitetul „mândra (țară)”, sentimentul provocat.',
        'Etapa 2, două perechi unite (8 minute): schița celor două planuri, cu mărimea, mișcarea, claritatea, direcția fulgilor și a fumurilor, sunetele, trăirile privitorului; o grupă prezintă.') },
      { etapa: 'Interpretare, ex. 8-11', timp: '6 min', activitate: pasi(
        'Caracteristicile ultimei strofe; direcția mișcării în al doilea tablou; ce au în comun fulgii și sania; sania trasă de cai în 1868 și cum se simțeau cei din ea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (trăirile privitorului) și ex. 2 (de acord sau nu?), individual, 7 minute.',
        'Verificare, 4 minute; cer argumentul din text.') },
      { etapa: 'Provocări: despre citirea poeziei', timp: '4 min', activitate: pasi(
        'Citesc fragmentul din „Exuvii” de Simona Popescu; elevii își spun părerea: cum ne place să citim o poezie?') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2. Opțional, „Portofoliu”: câte un pastel pentru fiecare anotimp, ilustrat.') },
    ],
    evaluare: 'Planșele investigației; fișa lecției; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Textul nonliterar. Buletinul meteorologic. Știrea',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Recunoaște trăsăturile unui buletin meteorologic și ale unei știri, ca texte nonliterare multimodale.'],
    resurse: ['Manual Art 6, pp. 92-94', fisa(7), 'Infograficul „Buletinul meteorologic și știrea” (/materiale/clasa-6/unitatea-3/lectia-7/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Pentru început', timp: '4 min', activitate: pasi(
        'P. 92, ex. 1-2: continuări pe tablă pentru „Previziunile meteorologice sunt consultate frecvent de...”; meseriile care au nevoie de buletinul meteo.') },
      { etapa: 'Buletinul meteorologic', timp: '9 min', activitate: pasi(
        'Un elev citește prognoza ANM; Explorare, ex. 1-5: literar sau nonliterar, de ce e multimodal simplu, timpul verbal, vinietele, cum afli vremea de Crăciun la Arad.') },
      { etapa: 'Notițe: textul nonliterar și buletinul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 93) și infograficul lecției: textul nonliterar, buletinul meteorologic, monomodal, multimodal simplu, multimodal complex, citirea hărții.') },
      { etapa: 'Aplicații, ex. 3', timp: '3 min', activitate: pasi(
        'Oral, pe harta pentru 25 decembrie: vremea în orașele date, unde e cel mai frig și cel mai cald.') },
      { etapa: 'Știrea', timp: '9 min', activitate: pasi(
        'Citim știrea despre zăpada toxică; Explorare, pp. 93-94, ex. 1-6: ce, unde, când, pentru ce; titlul fără predicat; supratitlul; mărimea literelor; timpurile verbale; primul și ultimul alineat.') },
      { etapa: 'Notițe: știrea', timp: '4 min', activitate: pasi(
        'În caiete: cele cinci întrebări, titlul verbal și nominal, supratitlul, piramida inversată (început, cuprins, încheiere).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: prognoza pentru weekend (scrisă pentru fișă), ex. 2 (informații din buletin) și ex. 3 (monomodal sau multimodal?), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Autoevaluare L1-L5', timp: '3 min', activitate: pasi(
        'P. 94: elevii completează cele trei afirmații.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, p. 93, ex. 1 (sensul cuvintelor, cu dicționarul) și p. 94, ex. 1-2 (titluri nominale; o știre despre un eveniment din școală); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; autoevaluarea L1-L5; fișa de exerciții, ex. 2-3; știrea redactată ca temă.',
  },
  'lectia-8': {
    titlu: 'Text auxiliar. Greutatea omătului de Ana Blandiana',
    data: null,
    tipOra: 'Lectură, text auxiliar',
    durata: 50,
    obiective: ['Interpretează, prin exerciții de postlectură, semnificațiile textului auxiliar Greutatea omătului de Ana Blandiana.'],
    resurse: ['Manual Art 6, p. 95', fisa(8), 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-8/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției și contextul', timp: '5 min', activitate: pasi(
        'Ați văzut copaci rupți de zăpadă? Ce ați simțit?',
        'Textul de prezentare de la p. 95: de la Alecsandri, care pictează natura, la poeții care își proiectează trăirile asupra ei.') },
      { etapa: 'Lectura', timp: '4 min', activitate: pasi(
        'Citesc poezia; un elev o recitește.') },
      { etapa: 'Discutarea textului, ex. 1-5', timp: '9 min', activitate: pasi(
        'Anotimpul; lipsa indicilor de spațiu; ce exprimă întrebarea; epitetele personificatoare ale arborilor; cu ce sunt asemănați norii și ce sunt, de fapt.') },
      { etapa: 'Discutarea textului, ex. 6-10', timp: '13 min', activitate: pasi(
        'Epitetele norilor (admirație, ironie, amuzament sau bucurie, cu justificare); „aparatul de cântărire a norilor”; legătura dintre cele două planuri; descriere sau stare interioară; poate fericirea să aibă urmări negative?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (comparația cu „Iarna”) și ex. 2 (adevărat sau fals?), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Biblioteci deschise', timp: '3 min', activitate: pasi(
        'Prezint „Balade vesele și triste” de G. Topîrceanu și „Pe Argeș în sus” de Ion Pillat.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2; o poezie din volumele recomandate, citită și copiată în caiet.') },
    ],
    evaluare: 'Observarea discuției; fișa lecției; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Bradul în cultura populară românească (I), tradiție și simboluri',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Identifică semnificația bradului de Crăciun și a simbolurilor asociate lui în riturile de trecere românești.'],
    resurse: ['Manual Art 6, pp. 96-97', fisa(9), 'Infograficul „Bradul: tradiție și simboluri” (/materiale/clasa-6/unitatea-3/lectia-9/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Pentru început', timp: '6 min', activitate: pasi(
        'P. 96, ex. 1-2: unde ați văzut cel mai frumos brad de Crăciun; cine se adună în jurul bradului la voi; originea obiceiului (sașii din Transilvania, curtea regelui Carol I).') },
      { etapa: 'Arborele veșnic verde', timp: '3 min', activitate: pasi(
        'Explorare, ex. 1: ce poate simboliza un copac care rămâne verde și iarna?') },
      { etapa: 'Riturile de trecere', timp: '11 min', activitate: pasi(
        'Ex. 2: trei grupe citesc câte un text (naștere, nuntă, moarte) și povestesc clasei ce se face cu bradul.',
        'Ex. 3: ce simbolizează bradul în fiecare ceremonial, alegând din variante, cu justificare.') },
      { etapa: 'Notițe: bradul în credința populară', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (pp. 96-97) și infograficul lecției: cele trei lumi legate de brad, bradul ocrotitor, crenguțele puse la casele noi și la căruțe, motivul stilizat pe covoare, ștergare, ii.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (bradul în riturile de trecere) și ex. 2 (adevărat sau fals?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Alte obiceiuri cu brad', timp: '7 min', activitate: pasi(
        'Aplicații, ex. 1: ce alte datini cu crengi de brad cunoașteți (din localitatea voastră, de la bunici)? Le notez pe tablă.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 1 (întrebați un vârstnic despre un obicei cu brad și notați); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Bradul în cultura populară românească (II), artă și design contemporan',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Recunoaște elemente tradiționale (bradul) reluate în arta modernă și în designul vestimentar contemporan.'],
    resurse: ['Manual Art 6, p. 97', fisa(10), 'Infograficul „Bradul în arta contemporană” (/materiale/clasa-6/unitatea-3/lectia-10/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Tabloul lui Matisse', timp: '7 min', activitate: pasi(
        'Aplicații, ex. 2: „La Blouse roumaine” (1940); ce vedeți? Ce elemente grafice amintesc de brad?') },
      { etapa: 'Regina Maria și Yves Saint-Laurent', timp: '7 min', activitate: pasi(
        'Citim casetele de la p. 97; discutăm cum a ajuns ia din sat în fotografiile unei regine și pe podiumurile de modă.') },
      { etapa: 'Notițe: tradiția în arta de azi', timp: '5 min', activitate: pasi(
        'În caiete, după infograficul lecției: motivul bradului stilizat, ia în pictură, în portul de ceremonie, în designul contemporan.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (ia în lume) și ex. 2 (argumentele mele), individual, 7 minute.',
        'Citim câteva argumente, 3 minute.') },
      { etapa: 'Aplicații, ex. 3, în perechi', timp: '8 min', activitate: pasi(
        'Poate fi ia o haină pe care o purtați? Perechile își aleg poziția și prezintă câte două argumente.') },
      { etapa: 'Motivul bradului', timp: '8 min', activitate: pasi(
        'Fișa de exerciții, ex. 3: fiecare desenează un motiv de brad stilizat, din linii drepte; câteva desene se arată clasei.') },
      { etapa: 'Provocări', timp: '2 min', activitate: pasi(
        'Anunț prezentarea de modă cu ii și cămăși tradiționale aduse de acasă, la o oră viitoare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Provocări”, ex. 2 (instrucțiunile unei persoane care coase motive tradiționale); fișa de exerciții, ex. 4.') },
    ],
    evaluare: 'Observarea argumentării; desenele motivului; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Proiect individual. Obiceiuri specifice sărbătorilor de iarnă',
    data: null,
    tipOra: 'Proiect, anunțare',
    durata: 50,
    obiective: ['Se familiarizează cu tema, modalitățile de documentare și criteriile de evaluare ale proiectului individual despre obiceiurile de iarnă.'],
    resurse: ['Manual Art 6, pp. 98-99', 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-11/fisa.pdf)'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Elevii numesc obiceiuri de iarnă cunoscute (de Moș Nicolae, de Crăciun, de Anul Nou, de Bobotează sau din alte tradiții religioase); le scriu pe tablă.') },
      { etapa: 'Tema și calendarul', timp: '5 min', activitate: pasi(
        'Proiectul individual, p. 98: un obicei din lunile decembrie-februarie; patru săptămâni (pregătirea, realizarea, prezentarea și evaluarea).') },
      { etapa: 'Modelul plugușorului', timp: '12 min', activitate: pasi(
        'Parcurgem fișele de la pp. 98-99: Știu, Vreau să știu, Am aflat (plugul, bradul de pe plug, buhaiul, talanga, biciul, originea în saturnalii, ceata, valorile).') },
      { etapa: 'Documentarea și produsul final', timp: '6 min', activitate: pasi(
        'Cine vă poate ajuta, de unde vă informați, unde puteți vedea obiceiul; ce produs alegeți (planșă, PowerPoint, video, expoziție cu recuzită, culegere de text).') },
      { etapa: 'Planul de lucru', timp: '5 min', activitate: pasi(
        'Cum se face planul pe două săptămâni: activitățile, datele, deplasările, persoanele care ajută.') },
      { etapa: 'Fișa lecției', timp: '12 min', activitate: pasi(
        'Fiecare elev își alege obiceiul și completează rubricile Știu și Vreau să știu; trec pe la bănci ca să nu se repete prea des același obicei.') },
      { etapa: 'Criteriile de evaluare', timp: '3 min', activitate: pasi(
        'Citim criteriile de la p. 99: dosarul proiectului și prezentarea originală, clară, relevantă.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: primele surse de documentare și planul de lucru, până săptămâna viitoare.') },
    ],
    evaluare: 'Observarea sistematică; fișa lecției. Proiectul se evaluează la prezentare, în portofoliu.',
  },
  'lectia-12': {
    titlu: 'Strategii de ascultare activă',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Aplică strategii de ascultare activă (atenție, întrebări de clarificare) într-un exercițiu de comunicare pe perechi.'],
    resurse: ['Manual Art 6, pp. 100-101', fisa(12), 'Quizul „Strategii de ascultare activă” (materialul de joc al lecției)', 'Foi și creioane pentru desen, stickere'],
    desfasurare: [
      { etapa: 'Pentru început', timp: '4 min', activitate: pasi(
        'P. 100: explicăm expresiile a fi numai urechi, a-i ajunge cuiva la ureche, a-i trece pe la ureche, a-i intra pe-o ureche și a-i ieși pe alta.') },
      { etapa: 'Spate în spate', timp: '12 min', activitate: pasi(
        'Explorare, ex. 1: perechi spate în spate; unul descrie imaginea de la p. 100, celălalt desenează doar după indicații și pune întrebări (8 minute).') },
      { etapa: 'Turul galeriei', timp: '6 min', activitate: pasi(
        'Ex. 2-3: afișăm desenele, fiecare lipește un sticker pe cel mai asemănător; cine a avut rolul cel mai important în perechea câștigătoare?') },
      { etapa: 'Notițe: ascultarea activă', timp: '5 min', activitate: pasi(
        'În caiete, după Repere, p. 100: atenția și încurajarea, semnalele nonverbale, întrebările de clarificare, reformularea, reflectarea sentimentelor, cu formulele de la fiecare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce face ascultătorul?) și ex. 2 (asculți sau nu?), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Aplicații, ex. 1', timp: '8 min', activitate: pasi(
        'Două-trei perechi (vorbitor și ascultător) dialoghează în fața clasei pe o temă de la p. 101; colegii le evaluează pe grilă.') },
      { etapa: 'Quiz', timp: '3 min', activitate: pasi(
        'Quizul „Strategii de ascultare activă”, frontal.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: „Portofoliu”, ex. 1 (urechea, ochiul, gura, cu câte o tehnică); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Turul galeriei; interevaluare pe grila de la p. 101; quizul; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Atitudini comunicative',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Reflectează, prin autoevaluare, asupra propriilor atitudini comunicative: interes, curiozitate, implicare, cooperare.'],
    resurse: ['Manual Art 6, pp. 100-101', fisa(13), 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-13/fisa.pdf)', 'Coli mari, carioci albastre și roșii'],
    desfasurare: [
      { etapa: 'Termometrul', timp: '7 min', activitate: pasi(
        'Explorare, p. 100, ex. 1-2: fiecare desenează termometrul cu cifrele 1-5 și plasează enunțurile a-h; ce ați aflat despre voi?') },
      { etapa: 'Notițe: atitudinile comunicative', timp: '6 min', activitate: pasi(
        'În caiete, după Repere, p. 101: interes, atenție, implicare, cooperare.',
        'Aplicații, ex. 2: câte un exemplu din realitate pentru fiecare atitudine din figura ascultării active.') },
      { etapa: 'Criteriul de grupare', timp: '3 min', activitate: pasi(
        'Ex. 3: propunem criterii originale (luna nașterii, culoarea preferată...), votăm unul și formăm grupele.') },
      { etapa: 'Silueta', timp: '11 min', activitate: pasi(
        'Ex. 4: grupe de 4-6 desenează o siluetă; înăuntru, cu albastru, ce face un bun membru al echipei; în afară, cu roșu, ce nu trebuie să facă.') },
      { etapa: 'Prezentările', timp: '5 min', activitate: pasi(
        'Raportorii prezintă siluetele; notăm pe tablă ideile care se repetă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce atitudine?) și ex. 2 (ce spui sau ce faci când...), individual, 7 minute.',
        'Citim câteva reacții, 3 minute.') },
      { etapa: 'Autoevaluare', timp: '4 min', activitate: pasi(
        'Fișa lecției: fiecare își evaluează activitatea din grup (a ascultat, a comentat, a contribuit).') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Portofoliu”, ex. 2 (un joc sau o activitate care formează spiritul de echipă, 50-100 de cuvinte); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Siluetele grupelor; autoevaluare pe fișa lecției; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Substantivul (actualizare). Colective și defective',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează felul, genul și numărul substantivului și recunoaște substantivele colective și defective.'],
    resurse: ['Manual Art 6, pp. 102-104', fisa(14), 'Schema „Substantivul. Colectivele și defectivele” (/materiale/clasa-6/unitatea-3/lectia-14/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Joc: substantivele iernii', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 102: grupe de 4-5, două minute, cât mai multe substantive din imaginea de iarnă; numărăm.') },
      { etapa: 'Actualizare, ex. 1-4', timp: '9 min', activitate: pasi(
        'Textul despre Predeal: felul, genul, numărul, articolul, prepoziția.',
        'Pluralul și desinențele; substantivele cu aceeași formă la plural; cele cu două plurale cu sens diferit (bandă, colț).') },
      { etapa: 'Notițe: substantivul', timp: '3 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: felul, genul, numărul, articolul hotărât și nehotărât.') },
      { etapa: 'Substantivele colective', timp: '6 min', activitate: pasi(
        'Explorare, p. 103, ex. 1-3: „familia”, „echipă”; acordul cu verbul la „juriul”, „grupul”, „un grup de copii”, „o mulțime de elevi”; notăm Reperele.') },
      { etapa: 'Substantivele defective', timp: '6 min', activitate: pasi(
        'Ex. 1-3: ce se poate număra; tabelul defectivelor; „ulei” și „uleiuri”; notăm numărabile, nonnumărabile, defective de plural și de singular, numele de materii.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (analiză) și ex. 2 (pluralul), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1 și 4', timp: '7 min', activitate: pasi(
        'Frontal: intrusul din fiecare serie; substantivele colective din textul despre puștimea din cartier.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2, 3, 5-7; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Cazul nominativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică substantivele în cazul nominativ și funcțiile lor sintactice, de subiect sau de nume predicativ.'],
    resurse: ['Manual Art 6, p. 105', fisa(15), 'Schema „Cazul nominativ” (/materiale/clasa-6/unitatea-3/lectia-15/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Sania, în patru enunțuri', timp: '6 min', activitate: pasi(
        'Explorare, p. 105, ex. 1-2, în perechi: funcția lui „sanie” în cele patru enunțuri; grupăm formele asemănătoare.') },
      { etapa: 'Ce este cazul', timp: '3 min', activitate: pasi(
        'Pornind de la formele lui „sanie”, notăm definiția cazului.') },
      { etapa: 'Subiectul și numele predicativ', timp: '6 min', activitate: pasi(
        'Explorare, ex. 1-2: subiectele din textul despre fete; prin ce se exprimă numele predicative din textul despre vecina patinatoare.') },
      { etapa: 'Notițe: nominativul', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: subiectul și numele predicativ în nominativ; articulat hotărât, nehotărât, nearticulat; exemplul „Tata este avocat.”.') },
      { etapa: 'Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Frontal: substantivele din enunțurile despre vânt și zăpadă, subiecte sau nume predicative.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (subiect sau nume predicativ, cu articolul) și ex. 2 (construiește), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Analiza după model', timp: '9 min', activitate: pasi(
        'Aplicații, ex. 3: primele două substantive din textul „Iarna s-a înăsprit...” analizate la tablă, după model; restul, individual.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 și ex. 3, terminat; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; analiza la tablă; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Cazul acuzativ. Complementul direct și prepozițional',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Diferențiază complementul direct de complementul prepozițional, ambele în cazul acuzativ.'],
    resurse: ['Manual Art 6, pp. 106-108', fisa(16), 'Schema „Cazul acuzativ. Complementul direct și complementul prepozițional” (/materiale/clasa-6/unitatea-3/lectia-16/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Daniel și sania', timp: '6 min', activitate: pasi(
        'Explorare, p. 106, ex. 1, pe grupe: funcția substantivelor din text; care nu mai sunt subiecte sau nume predicative?') },
      { etapa: 'Complementul direct', timp: '7 min', activitate: pasi(
        'Explorare, ex. 1-2: întrebările pe cine? ce?; complementele din textul cu cățelul.',
        'Notăm Reperele: complementul direct, în acuzativ, cu sau fără „pe”.') },
      { etapa: 'Complementul prepozițional', timp: '8 min', activitate: pasi(
        'P. 107, ex. 1-2: întrebările cu prepoziție; complementele dublate de pronume („L-am invitat pe Dinu.”) și cele care nu pot fi dublate („se bazează pe prezența lui”).',
        'Notăm Reperele, cu testul dublării.') },
      { etapa: 'Ortografia', timp: '4 min', activitate: pasi(
        'Ex. 1-2: „copiii”, „poeziile” în nominativ și acuzativ; ce face parte din cuvânt, desinența, articolul.') },
      { etapa: 'Notițe: schema acuzativului', timp: '4 min', activitate: pasi(
        'În caiete, după schema lecției: acuzativul, complementul direct și prepozițional, câte un exemplu.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (direct sau prepozițional?) și ex. 2 (dublat sau nu?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1', timp: '7 min', activitate: pasi(
        'Frontal, enunțurile a-h: substantivele în acuzativ și funcția lor.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-5; „Provocări”; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Cazul acuzativ. Circumstanțialele. Atributul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică circumstanțialul de loc și de timp și atributul substantival în acuzativ, diferențiindu-le după ce parte de vorbire determină.'],
    resurse: ['Manual Art 6, pp. 109-111', fisa(17), 'Schema „Cazul acuzativ. Circumstanțialele. Atributul” (/materiale/clasa-6/unitatea-3/lectia-17/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ce putem elimina?', timp: '5 min', activitate: pasi(
        'Explorare, p. 109, ex. 1-2, în perechi: părțile de propoziție subordonate verbelor din textul „A nins la București...”; ce parte se poate scoate fără ca mesajul să se piardă?') },
      { etapa: 'Compliniri obligatorii și facultative', timp: '3 min', activitate: pasi(
        'Notăm Reperele: complementele sunt obligatorii, circumstanțialele sunt facultative.') },
      { etapa: 'Circumstanțialul de loc', timp: '5 min', activitate: pasi(
        'Explorare, ex. 1-2: textul despre Radu (unde?, până unde?, încotro?); notăm Reperele, cu situațiile în care e obligatoriu („locuiește în București”).') },
      { etapa: 'Circumstanțialul de timp', timp: '4 min', activitate: pasi(
        'Ex. 1-2: vacanța la bunici (când?, până când?); notăm Reperele.') },
      { etapa: 'Circumstanțialul de mod', timp: '4 min', activitate: pasi(
        'P. 110, ex. 1-2: „cu blândețe”, „fără nicio grijă”, „în liniște”; notăm Reperele.') },
      { etapa: 'Punctuația', timp: '5 min', activitate: pasi(
        'Ex. 1-2: circumstanțialele din textul despre orașul înzăpezit și virgula; notăm cele trei situații din Repere.') },
      { etapa: 'Atributul substantival prepozițional', timp: '4 min', activitate: pasi(
        'P. 111, ex. 1-2: „cutia de creioane”, „arțarul de lângă bloc”; ce determină atributul?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (loc, timp sau mod?) și ex. 2 (atribut sau circumstanțial?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 3', timp: '5 min', activitate: pasi(
        'Frontal: funcția cuvântului „iarnă” în cele șase enunțuri.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-2; „Provocări” (știrea despre un concurs de schi, cu toate circumstanțialele); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2; știrea de la Provocări.',
  },
  'lectia-18': {
    titlu: 'Cazul dativ. Complementul indirect',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică complementul indirect, exprimat prin substantiv în cazul dativ.'],
    resurse: ['Manual Art 6, p. 112', fisa(18), 'Schema „Cazul dativ. Complementul indirect” (/materiale/clasa-6/unitatea-3/lectia-18/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cui dădea zăpada?', timp: '6 min', activitate: pasi(
        'Explorare, p. 112, ex. 1-2: întrebarea cui? în textul despre copacul înzăpezit; celelalte complemente de același fel.') },
      { etapa: 'Numele proprii', timp: '5 min', activitate: pasi(
        'Ex. 3: Mariei, lui Carmen, Olgăi, lui Petru; ce observăm la numele de persoane?') },
      { etapa: 'Notițe: dativul', timp: '6 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: complementul indirect (beneficiarul), întrebarea cui?, dativul; scrierea numelor proprii (lui, -ei, -ăi).') },
      { etapa: 'Explorare (p. 112 jos)', timp: '2 min', activitate: pasi(
        'Complementele din „I-am cumpărat pâine bunicii.” și „Sebastian îi spune mamei adevărul.”') },
      { etapa: 'Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Frontal: substantivele în dativ din cele șase propoziții.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (cui?) și ex. 2 (dativul numelor proprii), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 2', timp: '11 min', activitate: pasi(
        'Analiza complementelor indirecte din textul despre vrăbiuțe: primul la tablă, după model, celelalte individual, apoi verificăm.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Provocări” (narațiunea cu Călin, Delia, Catrinel și Lili, complemente indirecte); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; analiza după model; fișa de exerciții, ex. 1-2.',
  },
  'lectia-19': {
    titlu: 'Cazul genitiv. Articolul genitival. Posibilități combinatorii ale substantivului',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică atributul substantival genitival și explică rolul articolului genitival.'],
    resurse: ['Manual Art 6, pp. 113-114', fisa(19), 'Schema „Cazul genitiv. Articolul genitival” (/materiale/clasa-6/unitatea-3/lectia-19/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Fratele Roxanei', timp: '6 min', activitate: pasi(
        'Explorare, p. 113, ex. 1: întrebările al cui? ale cui?; celelalte atribute din text.') },
      { etapa: 'Aceeași formă, alt caz', timp: '3 min', activitate: pasi(
        'Ex. 2: „unei flori” în „Îi pun apă unei flori.” și în „Petalele unei flori s-au uscat.”') },
      { etapa: 'Notițe: genitivul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: atributul substantival genitival, întrebarea al, a, ai, ale cui?, forma comună cu dativul.') },
      { etapa: 'Articolul genitival', timp: '9 min', activitate: pasi(
        'Explorare, ex. 1-4: cuvintele din fața genitivelor; al cui gen și număr îl preia articolul; reluarea în enumerare; „al lui Dan”.',
        'Notăm tabelul formelor (al, a, ai, ale) și regulile.') },
      { etapa: 'Posibilitățile combinatorii', timp: '6 min', activitate: pasi(
        'P. 114, Explorare: funcțiile substantivelor din textul despre pisica bunicii; centru sau adjunct; notăm Reperele.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (genitiv sau dativ?) și ex. 2 (articolul genitival), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '7 min', activitate: pasi(
        'Frontal: genitivele din enunțuri, cazul substantivelor marcate, articolele genitivale potrivite.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 4 (analiza după model); „Provocări” (enunțurile auzite la radio și televiziune); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-20': {
    titlu: 'Cazul vocativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică substantivele în cazul vocativ și punctuația specifică acestora.'],
    resurse: ['Manual Art 6, p. 115', fisa(20), 'Schema „Cazul vocativ” (/materiale/clasa-6/unitatea-3/lectia-20/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Masa în familie', timp: '5 min', activitate: pasi(
        'Explorare, p. 115, ex. 1: replicile din jurul fotografiei; ce arată cuvintele colorate?') },
      { etapa: 'Forme și punctuație', timp: '6 min', activitate: pasi(
        'Ex. 2-3: vocativele cu formă de nominativ și cele cu desinențe proprii; semnele care le despart.') },
      { etapa: 'Notițe: vocativul', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: chemarea, lipsa funcției sintactice, desinențele -e, -ule, -o, -lor, virgula și semnul exclamării, grupul cu determinanți.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '7 min', activitate: pasi(
        'Frontal: vocativele din propoziții; corectarea punctuației în enunțurile a-c, la tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (forme de vocativ) și ex. 2 (punctuația), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Cele cinci cazuri', timp: '7 min', activitate: pasi(
        'Tabel pe tablă, completat de elevi: cazul, întrebările, funcțiile, câte un exemplu de iarnă; îl copiem în caiet.') },
      { etapa: 'Autoevaluare L9-L15', timp: '4 min', activitate: pasi(
        'P. 115: elevii completează cele trei afirmații.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Portofoliu” (schema posibilităților combinatorii ale substantivului); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; tabelul cazurilor; autoevaluarea L9-L15; fișa de exerciții, ex. 1-2.',
  },
  'lectia-21': {
    titlu: 'Descrierea unui peisaj (I), pregătirea redactării',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Analizează un text-stimul descriptiv (peisaj hibernal), identificând planurile descrierii și limbajul figurat.'],
    resurse: ['Manual Art 6, pp. 116-117', fisa(21), 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-21/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Pentru început', timp: '5 min', activitate: pasi(
        'P. 116, ex. 1: ghicitoarea fenomenului hibernal cu șase litere; ex. 2: patru elemente ale peisajului de la fereastra clasei.') },
      { etapa: 'Tabloul lui Bruegel', timp: '9 min', activitate: pasi(
        'Explorare, ex. 1: „Peisaj de iarnă cu patinatori și capcană pentru păsări”: dreapta și stânga, prim-plan, plan secund, fundal, impresia de ansamblu, ce sugerează patinatorii și capcana.') },
      { etapa: 'Fragmentul lui T.O. Bobe', timp: '9 min', activitate: pasi(
        'Ex. 2-4: citesc fragmentul din „Darul lui Moș Crăciun”; cuvintele care arată privirea de sus; direcția privirii; sentimentele personajului.') },
      { etapa: 'Notițe: descrierea unui peisaj', timp: '5 min', activitate: pasi(
        'În caiete, după Repere, p. 116: imaginea de ansamblu, mișcarea privirii, planurile, substantivele și adjectivele, figurile de stil, emoțiile, prezentul sau imperfectul.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: textul „De la fereastră” (scris pentru fișă) și ex. 2 (planurile descrierii), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Fișa lecției', timp: '7 min', activitate: pasi(
        'Elevii rezolvă fișa lecției, pregătind materialul pentru descrierea de ora următoare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 3-4 (figurile de stil din text și notițele pentru fereastra ta).') },
    ],
    evaluare: 'Observarea sistematică; fișa lecției; fișa de exerciții, ex. 2.',
  },
  'lectia-22': {
    titlu: 'Descrierea unui peisaj (II), redactarea',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează o compunere descriptivă cu obiect un peisaj, respectând etapele scrierii.'],
    resurse: ['Manual Art 6, p. 117, etapele scrierii și grila de autoevaluare', fisa(22), 'Fișa lecției (/materiale/clasa-6/unitatea-3/lectia-22/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Prima ninsoare', timp: '3 min', activitate: pasi(
        'Unde erați la prima ninsoare din această iarnă? Ce ați văzut, ce ați simțit? Două-trei amintiri.') },
      { etapa: 'Etapele scrierii', timp: '3 min', activitate: pasi(
        'Schema de la p. 117: pregătirea, ciorna, revizuirea, editarea, publicarea.') },
      { etapa: 'Pregătirea', timp: '9 min', activitate: pasi(
        'Aplicații, ex. 1-7, pe fișa de exerciții, ex. 1 (planul) și pe fișa lecției: pentru cine și de ce scriu, patru elemente din listă, epitetele, comparația, personificarea, locul, ce văd, aud, simt, direcția privirii, planul.') },
      { etapa: 'Imperfectul, persoana I', timp: '3 min', activitate: pasi(
        'Ex. 9: fișa de exerciții, ex. 2, frontal.') },
      { etapa: 'Ciorna', timp: '17 min', activitate: pasi(
        'Ex. 8 și 10: fiecare scrie ciorna și își caută un titlu surprinzător; trec pe la bănci și ajut la începutul descrierii.') },
      { etapa: 'Revizuirea', timp: '6 min', activitate: pasi(
        'Ex. 11-13: lista de verificare (fișa de exerciții, ex. 3); completează sau șterg, corectează exprimarea și punctuația.') },
      { etapa: 'Scaunul autorului', timp: '6 min', activitate: pasi(
        'Ex. 16: doi-trei elevi își citesc descrierea; clasa spune ce imagine a reținut.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 14-15 (transcrierea și autoevaluarea pe grilă); „Provocări” (comentariul pentru lucrarea preferată); „Evaluarea portofoliului” (ordonarea lucrărilor din unitățile I-III și textul de 4-5 rânduri).') },
    ],
    evaluare: 'Autoevaluare pe grila de la p. 117; fișa lecției; lista de verificare.',
  },
  'lectia-23': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea III: descrierea în versuri, figuri de stil, ascultare activă.'],
    resurse: ['Manual Art 6, pp. 118-119', fisa(23), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ciorchinele unității', timp: '3 min', activitate: pasi(
        'Fiecare elev numește o noțiune de lectură sau de comunicare din unitate; le scriu pe tablă, într-un ciorchine.') },
      { etapa: 'Lectura textului', timp: '4 min', activitate: pasi(
        'P. 118: citesc fragmentul din „Început de an” de Nicolae Labiș.') },
      { etapa: 'Ex. 1-3', timp: '4 min', activitate: pasi(
        'Anotimpul și momentul zilei; solii noului an; ce au brazii pe crengi.') },
      { etapa: 'Ex. 4-9', timp: '9 min', activitate: pasi(
        'Elementele tabloului și semnificația lor; verbele și circumstanțialele de mișcare; imaginile statice; percepțiile auditive; epitetele; altă figură de stil.') },
      { etapa: 'Ex. 10-13', timp: '6 min', activitate: pasi(
        'Măsura și rima primei strofe; peisaj sau stare interioară; legătura cu obiceiurile populare; titlul și începutul unei știri.') },
      { etapa: 'Joc de rol (ex. 14)', timp: '6 min', activitate: pasi(
        'Două perechi discută despre noaptea de Anul Nou; un juriu evaluează ascultarea activă pe grila de la p. 119.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: poezia „Seară de Ajun” (scrisă pentru fișă) și ex. 2 (tabloul), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”; notez ce trebuie reluat.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; juriul jocului de rol; quizul; fișa de exerciții, ex. 2.',
  },
  'lectia-24': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea III: substantivul și cele cinci cazuri.'],
    resurse: ['Manual Art 6, pp. 118-119', fisa(24), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '3 min', activitate: pasi(
        'Ex. 20: cine găsește primul substantivul în vocativ din ultima strofă a poeziei lui Labiș și explică punctuația?') },
      { etapa: 'Ex. 15-16', timp: '6 min', activitate: pasi(
        'Nominativele din prima strofă și rolul lor; substantivele de pe etichete, cu funcția lor.') },
      { etapa: 'Ex. 17-18', timp: '4 min', activitate: pasi(
        'Colectivele și defectivele din textul despre colindători.') },
      { etapa: 'Ex. 19 și 21', timp: '8 min', activitate: pasi(
        'Cazul și funcția substantivelor de lângă steluțe; analiza substantivelor din propozițiile de la ex. 21.') },
      { etapa: 'Ex. 22-23', timp: '5 min', activitate: pasi(
        'Articolele genitivale în locul fulgilor; varianta corectă de la ex. 23, cu justificare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (cazul și funcția în cele trei enunțuri), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pregătirea compunerii (ex. 24)', timp: '5 min', activitate: pasi(
        'Citim cerințele compunerii despre centrul localității în sărbătorile de iarnă; fiecare își notează cele patru elemente și emoțiile.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”; discutăm greșelile.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: ex. 24, compunerea; fișa de exerciții, pagina 2. Anunț evaluarea: substantivul și cazurile, textul descriptiv în versuri, figurile de stil, versificația, compunerea descriptivă; se strâng și portofoliile unităților I-III.') },
    ],
    evaluare: 'Observarea sistematică; quizul; fișa de exerciții, ex. 1-2.',
  },
  'lectia-25': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea III.'],
    resurse: ['Testul, Manual Art 6, p. 120', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testele (fragment din poezia „Ianuarie” de Otilia Cazimir) și foile de răspuns; strâng portofoliile unităților I-III.',
        'Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: substantivul colectiv, analiza substantivelor, vocativul și virgula, substantivele nonnumărabile, funcții sintactice, locul iernii, tabloul din penultima strofă, epitetele, măsura și rima, emoțiile); B, 30 de puncte (compunere descriptivă de 15-20 de rânduri: tabloul din poezie, primăvara); 10 puncte din oficiu.',
        'Recomand circa 25 de minute pentru A, 15 minute pentru compunere, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual, pe foaia separată; supraveghez discret.',
        'Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii își recitesc lucrarea (patru elemente ale peisajului, verbele la prezent, persoana I, ortografia, punctuația), apoi strâng foile.',
        'Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului; portofoliile unităților I-III se evaluează separat.',
  },
}
