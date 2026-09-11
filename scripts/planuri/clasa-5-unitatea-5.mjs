// Planuri de lecție detaliate pentru Unitatea V „Călătoresc prin basme", clasa a V-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 5 și ghidul profesorului. Rezolvările
// din ghid nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-5/unitatea-5/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul narativ literar. Zâna Munților, basm cules de Petre Ispirescu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din basmul Zâna Munților, cules de Petre Ispirescu.'],
    resurse: ['Manual Art 5, pp. 140-143', fisa(1), 'Quizul „Zâna Munților” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '8 min', activitate: pasi(
        '„Pentru început”, p. 140, ex. 1: la ce basme vă duc cu gândul imaginile? Elevii numesc basmele și personajele recunoscute.',
        'Ex. 2: pornind de la titlu, fiecare notează în caiet trei lucruri care cred că se vor întâmpla în basm.') },
      { etapa: 'Despre autor', timp: '2 min', activitate: pasi(
        'Caseta de la p. 140: Petre Ispirescu (1830-1887), tipograf, culegător de basme; „Legendele sau basmele românilor” (1872). La final, notăm de la cine a auzit basmul (o calfă de bărbier).') },
      { etapa: 'Lectura model', timp: '14 min', activitate: pasi(
        'Ex. 3: citesc basmul cu voce tare (sau pornesc înregistrarea din manualul digital); elevii urmăresc.',
        'Lămurim cuvintele din subsol (sfadă, filozof, procopsit, galeș, a tânji, smerenie, vătaf, preumblare, boi, cosiță, nălucă, vâlvă, lipici, condur, întețit, calfă) și expresiile „câte în lună și în soare”, „în doi peri”.') },
      { etapa: 'Impresii după prima lectură', timp: '7 min', activitate: pasi(
        'P. 143, ex. 1: s-au confirmat predicțiile? Câțiva elevi își citesc cele trei presupuneri.',
        'Ex. 2: la ce imagini sau sunete v-a dus textul? Ex. 3: ce personaj v-a plăcut și cu cine seamănă?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine face?) și ex. 2 (cuvinte de basm), individual, 10 minute.',
        'Verificare, 4 minute; la clasele rapide, quizul „Zâna Munților” în locul verificării frontale.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: răspunsul la ex. 3 de la „Impresii după prima lectură”, în scris; titlurile a trei basme românești cunoscute; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Acțiunea. Timpul și spațiul',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Înțelege noțiunea de miraculos în basme și identifică reperele de timp și de spațiu din textul-suport.'],
    resurse: ['Manual Art 5, pp. 144-145', fisa(2), 'Schema „Basmul. Acțiunea, timpul și spațiul” (/materiale/clasa-5/unitatea-5/lectia-2/schema.svg)', 'Quizul „Acțiunea, timpul și spațiul în basm” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi elevi citesc răspunsul la ex. 3; strângem pe tablă titlurile de basme românești.') },
      { etapa: 'Explorare: acțiunea', timp: '9 min', activitate: pasi(
        '„Explorare”, p. 144, ex. 1-2: lumea basmului, apropiată sau depărtată de realitate? Două întâmplări uimitoare și adjectivele potrivite din listă.',
        'Ex. 3: un obiect cu însușiri magice.',
        'Ex. 4: ordonăm cronologic ideile principale; elevii le copiază numerotate în caiet.') },
      { etapa: 'Notițe: basmul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: basmul (lume ireală, întâmplări supranaturale, ființe fabuloase; convenția dintre povestitor și cititor); situația inițială, evenimentul care tulbură echilibrul, probele, situația finală, cu răsplata eroului.') },
      { etapa: 'Aplicații: harta mentală', timp: '7 min', activitate: pasi(
        '„Aplicații”, ex. 1: în harta mentală din manual, elevii caută 2-3 minute aspectele miraculoase.',
        'Ex. 2, pe grupe: harta mentală a basmului, cu titlul în centru și cele cinci brațe; două grupe o prezintă.') },
      { etapa: 'Timpul și spațiul', timp: '5 min', activitate: pasi(
        '„Explorare”, p. 145, ex. 1-3: putem stabili locul, timpul și durata? Sunt posibile întâmplările din formula de început? Ce înseamnă „odată ca niciodată”?',
        'În caiete, după Repere: cadrul basmului e vag, imprecis; formula de început anunță asta.') },
      { etapa: 'Aplicații: formulele și locurile', timp: '5 min', activitate: pasi(
        'Ex. 1: ce face ușor de reținut formula inițială și pe cea finală.',
        'Ex. 2: tabelul spațiilor (curtea, cotețele, pădurea, munții, palatele nunților, satul) și semnificațiile lor; elevii adaugă una.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (momentele basmului „Cenușăreasa”) și ex. 2 (real sau miraculos?), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Aplicații” (Acțiunea), ex. 3 (cauzele) și ex. 4 (întâmplarea care te-a emoționat, 5-8 rânduri); „Aplicații” (Timpul și spațiul), ex. 3; „Provocări” (un obiect care s-ar transforma într-o poveste); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Hărțile mentale ale grupelor; observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Personajele',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Identifică personajele și rolul lor în basm și le compară cu alte personaje din basme cunoscute (Făt-Frumos, Cenușăreasa).'],
    resurse: ['Manual Art 5, pp. 146-147', fisa(3), 'Schema „Personajele basmului” (/materiale/clasa-5/unitatea-5/lectia-3/schema.svg)', 'Quizul „Personajele basmului” (materialul de joc al lecției)', 'Coli albe, pentru diagramele Venn', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi elevi citesc textul despre întâmplarea care i-a emoționat.') },
      { etapa: 'Explorare, ex. 1-5', timp: '8 min', activitate: pasi(
        'Ex. 1-2: personajele basmului; piramida personajelor, în caiete (principale, secundare, episodice).',
        'Ex. 3: câte două acțiuni ale personajelor principale și ale celor secundare.',
        'Ex. 4-5: fragmentul cu trăsătura miraculoasă a prințului; de ce e zâna o ființă cu puteri supranaturale.') },
      { etapa: 'Notițe: personajele basmului', timp: '3 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: oameni cu calități supranaturale și ființe fabuloase; eroul pozitiv, cu o misiune și probe; personajele negative.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '8 min', activitate: pasi(
        'Ex. 1: „a învăța câte în lună și în soare”; de ce contează educația unui fiu de împărat.',
        'Ex. 2: de ce nu vrea prințul să se însoare (elevii aleg și argumentează).',
        'Ex. 3, în perechi: ce trăsătură ilustrează fiecare pasaj despre prinț și despre zână; verificăm oral.') },
      { etapa: 'Aplicații, ex. 4-8', timp: '5 min', activitate: pasi(
        'Frontal: înfățișările zânei (ex. 4); situațiile-probă (ex. 5); „Feciorul de împărat nu mai era al său” (ex. 6); cele două expresii (ex. 7); de ce ezită fata (ex. 8).') },
      { etapa: 'Diagramele Venn', timp: '9 min', activitate: pasi(
        'Ex. 9: echipa A (Făt-Frumos și fiul împăratului), echipa B (Cenușăreasa și Zâna Munților), în grupe de 4-6; diagrama pe o coală.',
        'O grupă din fiecare echipă prezintă; ex. 10, oral: cine e personajul principal?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (înfățișările zânei) și ex. 2 (trăsătura și dovada), individual, 8 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Provocări”, ex. 4 (orarul fiului de împărat) și ex. 5 (o zână inventată: puterea, desenul, un text scurt); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Diagramele Venn ale grupelor; observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează o opinie despre semnificația basmului Zâna Munților și despre atitudinile personajelor.'],
    resurse: ['Manual Art 5, p. 148', fisa(4), 'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-4/fisa.pdf)', 'Coli mari și carioci, pentru postere', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi elevi prezintă orarul prințului; doi-trei arată zâna inventată.') },
      { etapa: 'Interpretare, ex. 1-3 și 5', timp: '9 min', activitate: pasi(
        '„Interpretare”, p. 148, frontal: cum se încheie de obicei basmele și e finalul acesta obișnuit? (ex. 1); ideea centrală a poveștii (ex. 2); alt basm cu tema iubirii dintre lumi diferite (ex. 3).',
        'Ex. 5: ce putem învăța din purtarea zânei cât timp e găinăreasă? Primesc orice răspuns argumentat.') },
      { etapa: 'Posterul poveștii de dragoste', timp: '12 min', activitate: pasi(
        'Ex. 4: grupe de 4-6; fiecare grupă urmărește stările personajelor în cele patru secvențe (turturica, găinăreasa, cele trei nunți, nunta), alege un titlu pentru fiecare și desenează un simbol al iubirii.',
        'Posterele se afișează; turul galeriei, 3 minute.') },
      { etapa: 'Lectura imaginii', timp: '5 min', activitate: pasi(
        '„Provocări”, ex. 2: tabloul lui Louis Katzenstein (Frații Grimm la povestitoarea Dorothea Viehmann): cine sunt personajele, ce fac, încotro privesc toți.',
        'Ex. 3: prin ce se aseamănă Petre Ispirescu cu Frații Grimm?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce valoare arată?) și ex. 2 (proverbe potrivite), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Autoevaluare L1-L4', timp: '4 min', activitate: pasi(
        'P. 148: elevii completează în caiet cele trei afirmații; citim câteva și notez ce trebuie reluat.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Provocări”, ex. 1 (mesajul zânei către surorile ei sau al prințului către fata de la nuntă, 6-8 rânduri); fișa lecției (ideea centrală, legătura cu experiența ta); fișa de exerciții, pagina 2. Minitestul L1-L4 din manualul digital, opțional.') },
    ],
    evaluare: 'Posterele grupelor; autoevaluarea; fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Text auxiliar. Aladin și lampa fermecată, din O mie și una de nopți',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Formulează un răspuns personal despre valorile culturale ale basmelor de pretutindeni, pe baza episodului lui Aladin din O mie și una de nopți.'],
    resurse: ['Manual Art 5, pp. 149-150', fisa(5), 'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-5/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Ce basme ale altor popoare ați citit? Notez pe tablă titlurile și țările.',
        'Citim caseta de la p. 149: folclorul; „O mie și una de nopți”, Șeherezada și sultanul Șahriar; începutul poveștii lui Aladin.') },
      { etapa: 'Lectura textului', timp: '10 min', activitate: pasi(
        'Citesc fragmentul istorisit de Eusebiu Camilar (sau pornesc înregistrarea); elevii urmăresc.',
        'Lămurim cuvintele din subsol (Mahomed, cutremur, belciug, zăbavă, petică, sofa, „a bate colburile”).') },
      { etapa: 'Muntele narațiunii', timp: '7 min', activitate: pasi(
        '„Discutarea textului”, ex. 1, în perechi: „muntele narațiunii” desenat în caiet, cu întâmplările la locul lor; verificăm pe tablă.') },
      { etapa: 'Discutarea textului, ex. 2-10', timp: '9 min', activitate: pasi(
        'Frontal: de ce nu poate vrăjitorul lua singur lampa; de ce refuză Aladin să i-o dea; personajul negativ; cât stă Aladin în peșteră; greșeala vrăjitorului.',
        'Ex. 7-10: citatele care arată schimbarea lui Aladin; s-ar putea sfârși aici povestea?; aspectele miraculoase; ce a învățat Aladin.') },
      { etapa: 'Cercuri de reflecție', timp: '6 min', activitate: pasi(
        'Grupe de 5-6: ce valori culturale se desprind din basmele lumii? Stabilim semnul „și noi” (mâna la piept) pentru valorile găsite și de alt cerc.',
        'Câte un reprezentant spune valorile; le notez pe tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (obiectele fermecate) și ex. 2 (adevărat sau fals?), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Portofoliu”, posterul cu valorile culturale găsite în cercurile de reflecție; fișa lecției (jurnalul cu dublă intrare); fișa de exerciții, pagina 2.',
        '„Biblioteci deschise”: „Basme și povești românești”, „O poveste grimminală” de Adam Gidwitz.') },
    ],
    evaluare: 'Observarea discuției și a cercurilor de reflecție; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Diversitate culturală și lingvistică',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Identifică similitudini între culturi diferite și etimologia unor cuvinte, pe baza unor basme din culturi variate.'],
    resurse: ['Manual Art 5, pp. 151-152', fisa(6), 'Infograficul „Diversitate culturală și lingvistică” (/materiale/clasa-5/unitatea-5/lectia-6/infografic.svg)', 'Quizul „Cuvinte și povești care călătoresc” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Joc: Ghicește cine sunt!', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 151: elevii ghicesc cele șase cuvinte după descriere și după numele lor în alte limbi (a-f).') },
      { etapa: 'Nastratin Hogea', timp: '10 min', activitate: pasi(
        '„Explorare”, ex. 1: citesc anecdota „Făgăduiala ținută” (Jean-Claude Carrière); întrebările a-d, frontal.',
        'Ex. 2: și-a ținut tatăl promisiunea? Elevii aleg un răspuns și îl argumentează; ex. 3: tâlcul, într-o propoziție.',
        'Ex. 4: versurile lui Anton Pann („a rămâne de basm”, „a fi cam p-o ureche”) și miniatura otomană.') },
      { etapa: 'Notițe: diversitatea culturală', timp: '4 min', activitate: pasi(
        'În caiete, după Repere și infograficul lecției: schimburile dintre popoare (bunuri, idei, valori); diversitatea culturală; Nastratin, personaj comun mai multor culturi din Balcani; diversitatea lingvistică: odată cu lucrurile călătoresc și cuvintele.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Ex. 1: „cuvinte călătoare” (marfă, franzelă, papagal, crai); fiecare spune ce călătorie l-a surprins.',
        'Ex. 2, în perechi: cele opt mâncăruri de proveniență orientală din careu.') },
      { etapa: 'Aplicații, ex. 3-4', timp: '7 min', activitate: pasi(
        'Ex. 3: ce culturi există în comunitatea noastră?',
        'Ex. 4: fragmentul din Ioan Slavici („Lumea prin care am trecut”): etniile menționate, sfaturile mamei, de ce e important să fim binevoitori cu ceilalți.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (cuvinte călătoare), ex. 2 și 3 (Nastratin și oala), individual, 10 minute.',
        'Verificare, 4 minute; dacă rămâne timp, quizul „Cuvinte și povești care călătoresc”.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Provocări”, calendarul diversității (fiecare aduce o sărbătoare pe foaia A3 afișată în clasă) și o pagină despre o sărbătoare; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3.',
  },
  'lectia-7': {
    titlu: 'Proiect de grup. Itinerar multicultural (anunțare)',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Itinerar multicultural.'],
    resurse: ['Manual Art 5, pp. 153-154', 'Fișa proiectului (/materiale/clasa-5/unitatea-5/lectia-7/fisa.pdf)', 'Bilețele pentru tragerea la sorți a fragmentelor', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Ce minorități etnice din România cunoașteți? Există în comunitatea noastră? Notez răspunsurile pe tablă.') },
      { etapa: 'Titlul proiectului', timp: '3 min', activitate: pasi(
        'Explicăm cuvintele: itinerar (drumul unei călătorii, cu locurile parcurse) și multicultural (cu mai multe culturi). Proiectul e o călătorie prin basmele unor comunități din România.') },
      { etapa: 'Sarcina de lucru', timp: '10 min', activitate: pasi(
        'P. 153: cinci grupe, fiecare cu un basm al unei minorități din România, din volumul „Basmele omului” de Vladimir Colin: maghiar („Buruiana neagră”), săsesc („Hans și cele patru castele”), ucrainean („Povestea cântecului”), rom („Fierarul năzdrăvan”), tătăresc („Povestea fericirii”).',
        'Dacă în zona noastră trăiește și altă etnie, o a șasea grupă prezintă un basm al ei.') },
      { etapa: 'Calendarul', timp: '7 min', activitate: pasi(
        'P. 154, trei săptămâni: I – citirea fragmentului (și a basmului întreg, de la bibliotecă) și fișa de lectură după modelul din manual; II – documentarea despre comunitate (regiune, număr aproximativ, personalități, sărbători, religie, obiceiuri, port, mâncăruri, formule de salut), împărțirea rolurilor, recuzita, prezentarea; III – reflecții despre ce au în comun basmele.',
        'Stabilim și notăm data prezentărilor.') },
      { etapa: 'Criteriile de evaluare', timp: '5 min', activitate: pasi(
        'Citim grila de autoevaluare din manual (documentarea, munca în echipă, prezentarea orală) și criteriile din fișa proiectului, cu câte un exemplu.') },
      { etapa: 'Formarea grupelor', timp: '17 min', activitate: pasi(
        'Grupele se formează și trag la sorți fragmentul.',
        'Fiecare grupă citește fragmentul, completează primele rubrici ale fișei de lectură (titlul, comunitatea, cadrul) și își împarte rolurile (cine citește basmul întreg, cine se documentează, cine pregătește recuzita, cine prezintă).',
        'Trec pe la fiecare grupă și verific notițele.') },
      { etapa: 'Încheiere', timp: '3 min', activitate: pasi(
        'Reamintesc data prezentărilor și verificarea de la sfârșitul primei săptămâni.') },
    ],
    evaluare: 'Fișa de pornire a proiectului; observarea organizării grupelor.',
  },
  'lectia-8': {
    titlu: 'Elemente paraverbale și nonverbale în prezentarea orală',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică elementele paraverbale și nonverbale dintr-o comunicare orală și le exersează într-o prezentare.'],
    resurse: ['Manual Art 5, pp. 155-156', fisa(8), 'Quizul „Elemente paraverbale și nonverbale” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        '„Pentru început”, p. 155, ex. 1: câțiva elevi mimează o stare din listă, clasa ghicește.',
        'Ex. 2: câte o propoziție pentru fiecare emoticon, fără cuvântul care numește emoția. Discutăm pe scurt cum emoticoanele pot înlocui cuvintele în mesaje.') },
      { etapa: 'Telefonul fără fir', timp: '6 min', activitate: pasi(
        '„Explorare”, ex. 1: șase elevi în șir; primul spune la ureche o propoziție despre un basm; fiecare notează ce a auzit; citim cele șase variante. Ce s-a pierdut pe drum?') },
      { etapa: 'Lectura pe roluri', timp: '6 min', activitate: pasi(
        'Ex. 2: trei elevi (povestitorul, împărăteasa deghizată, Albă-ca-Zăpada) citesc fragmentul cu intonația potrivită; spun ce a mers bine și ce se poate îmbunătăți.') },
      { etapa: 'Aceeași întâmplare, alte stări', timp: '4 min', activitate: pasi(
        'Ex. 3: patru elevi povestesc întâmplarea din fragment ca și cum ar fi veseli, triști, îngândurați, revoltați; clasa observă vocea și gesturile.') },
      { etapa: 'Semne și atitudini', timp: '3 min', activitate: pasi(
        'Ex. 4: ce atitudine transmite fiecare semn (zâmbetul, poziția aplecată, tăcerea lungă, bătutul din picior).') },
      { etapa: 'Notițe: paraverbal și nonverbal', timp: '4 min', activitate: pasi(
        'În caiete, după Repere, tabelul cu două coloane: elementele paraverbale (intensitatea vocii, intonația, ritmul, pauza) și nonverbale (mimica, gesturile, poziția corpului, contactul vizual).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (voce sau corp?), ex. 2 (ce transmite?) și ex. 3 (aceeași propoziție, alt ton), individual, 8 minute.',
        'Verificare, 3 minute; câțiva elevi rostesc „Ai venit la timp.” cu cele patru intenții.') },
      { etapa: 'Aplicații: o prezentare model', timp: '7 min', activitate: pasi(
        'Reamintesc structura unei prezentări (început, cuprins, final); un voluntar alege o temă de la p. 156 și prezintă 2-3 minute.',
        'Clasa observă vocea și gesturile; voluntarul se autoevaluează cu steluțele din manual.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: planul prezentării de cinci minute („Aplicații”, p. 156), pe fișa de exerciții, pagina 2 (ex. 4-5); prezentările se țin la începutul orelor următoare, câte două.') },
    ],
    evaluare: 'Observarea sistematică a lecturii și a prezentării; autoevaluarea cu steluțe; fișa de exerciții, ex. 1-3.',
  },
  'lectia-9': {
    titlu: 'Acte de limbaj: a promite, a declara',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică și performează actele de limbaj a promite și a declara.'],
    resurse: ['Manual Art 5, p. 157', fisa(9), 'Quizul „Acte de limbaj: a promite, a declara” (materialul de joc al lecției)', 'Bilețele cu situații de comunicare'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        '„Explorare”, p. 157, ex. 1: o promisiune pe care nu v-ați ținut-o și ce a urmat (două-trei povești, fără nume).',
        'Ex. 2: fiecare completează în caiet „Declar că de astăzi voi...”; câțiva citesc.') },
      { etapa: 'Replica zânei', timp: '7 min', activitate: pasi(
        'Ex. 3: recitim replica Zânei Munților de la finalul basmului; alegem sensurile potrivite ale lui „a declara” din DEX (a).',
        'b) Elevii copiază replica și colorează diferit declarația de intenție și declarația de dragoste.',
        'c) Doi-trei elevi imaginează răspunsul prințului, care îi promite zânei ce își dorește.') },
      { etapa: 'Promisiune sau amenințare?', timp: '3 min', activitate: pasi(
        'Ex. 4: un elev citește fragmentul din „Tinerețe fără bătrânețe și viață fără de moarte”; ce rostește împăratul?') },
      { etapa: 'Notițe: a promite, a declara', timp: '3 min', activitate: pasi(
        'În caiete, după Repere: a promite (vorbitorul se angajează să acționeze); a declara (anunță, recunoaște, își asumă; mai ales în limbaj oficial).') },
      { etapa: 'Aplicații, ex. 1-3', timp: '8 min', activitate: pasi(
        'Ex. 1: verbele din listă potrivite fiecărui desen.',
        'Ex. 2: câte un context pentru fiecare comunicare („Vă declar căsătoriți!”, „Declar ședința deschisă.”...); perechile extrag bilețele cu situații și rostesc declarația potrivită.',
        'Ex. 3: „a promite luna de pe cer”, „a promite marea cu sarea”: sensul și câte o propoziție.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce face vorbitorul?) și ex. 2 (promisiuni realiste), individual, 8 minute.',
        'Verificare, 3 minute; la clasele rapide, quizul „Acte de limbaj: a promite, a declara”.') },
      { etapa: 'Provocări: discursul candidatului', timp: '9 min', activitate: pasi(
        'Fiecare are 3 minute să-și noteze discursul pentru Consiliul Elevilor (prezentarea, declararea candidaturii, promisiuni realiste, mulțumirea).',
        'Doi-trei elevi îl rostesc; clasa notează declarația și promisiunile și spune dacă sunt realiste.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: discursul de candidat, scris complet; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a discursurilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Numeralul. Numeralul cardinal',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică numeralele cardinale și transcrie corect în litere numerele dintr-un text.'],
    resurse: ['Manual Art 5, pp. 158-159', fisa(10), 'Schema „Numeralul. Numeralul cardinal” (/materiale/clasa-5/unitatea-5/lectia-10/schema.svg)', 'Quizul „Numeralul cardinal” (materialul de joc al lecției)', 'Bilețele pentru jocul de la „Explorare”', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 158: completăm frontal titlurile și expresiile din basme cu numerele lipsă (Balaurul cel cu ... capete, Ali-Baba și cei ... de hoți...). Anunț o parte de vorbire nouă.') },
      { etapa: 'Explorare: numeralul', timp: '6 min', activitate: pasi(
        'Ex. 1: fiecare scrie pe un bilețel ziua nașterii și pe altul numărul din catalog; grupele împart bilețelele în cele două „coșuri” (număr / ordine).',
        'Ex. 2: completăm oral textul despre Aladin cu cuvintele potrivite.') },
      { etapa: 'Notițe: definiția', timp: '2 min', activitate: pasi(
        'În caiete: numeralul exprimă un număr sau ordinea obiectelor prin numărare.') },
      { etapa: 'Explorare: numeralul cardinal', timp: '7 min', activitate: pasi(
        'Ex. 1: numeralele din fragmentul cu sultanul și ce arată ele; ex. 2: din ce cuvinte e format „patruzeci”.',
        'Ex. 3: imaginile cu fructe: ce se schimbă la un / o, doi / două? Ex. 4: numeralele alcătuite din mai multe cuvinte.') },
      { etapa: 'Notițe: numeralul cardinal', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: cardinal simplu (unu... zece) și compus; un/o, doi/două după gen; când un și o sunt numerale (lângă alt numeral, cu singur, numai, doar, ca unitate de măsură), cu exemplele din manual.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Ex. 1: câte un elev la tablă transcrie cu litere 14, 226, 841, 1267, 18 100.',
        'Ex. 2: dictez propozițiile despre Aladin; elevii subliniază cu o linie numeralele simple, cu două pe cele compuse.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (numere din povești) și ex. 2 (simplu sau compus?), individual, 9 minute.',
        'Verificare, 4 minute; insist pe acordul lui doi și al compuselor lui cu substantivul.') },
      { etapa: 'Numeral, articol sau pronume?', timp: '4 min', activitate: pasi(
        'Ex. 5, frontal: ce sunt un și o în textul despre cartea de povești (numeral, articol nehotărât sau pronume personal).') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 3 (poțiunea vrăjitoarei), ex. 4 (rețeta ta de vrăjitoare) și ex. 6; fișa de exerciții, pagina 2. Quizul „Numeralul cardinal” deschide ora următoare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; dictarea; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Numeralul ordinal. Numeralul, aspecte normative',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică numeralele ordinale și respectă normele de ortografie și ortoepie ale numeralelor simple și compuse.'],
    resurse: ['Manual Art 5, pp. 160-161', fisa(11), 'Schema „Numeralul ordinal. Numeralul, aspecte normative” (/materiale/clasa-5/unitatea-5/lectia-11/schema.svg)', 'Quizul „Numeralul ordinal și scrierea corectă” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi elevi citesc rețeta de vrăjitoare; clasa numește numeralele cardinale și felul lor.') },
      { etapa: 'Explorare: numeralul ordinal', timp: '6 min', activitate: pasi(
        'Ex. 1: ilustrația din „O mie și una de nopți”: al câtelea rob e îmbrăcat în verde, de la stânga și de la dreapta? Pe al câtelea rând e Aladin?',
        'Ex. 2: numeralul ordinal de la 40, lângă un substantiv feminin și unul masculin; ex. 3: sinonime pentru „prima”, „primele”.') },
      { etapa: 'Notițe: numeralul ordinal', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: numeralul ordinal arată ordinea; al doilea (masculin, neutru) și a doua (feminin), cu părțile lor (al/a, numeralul cardinal, articolul hotărât, particula); întâi și primul, sinonime.') },
      { etapa: 'Explorare: aspecte normative', timp: '6 min', activitate: pasi(
        'Ex. 1: citim cu voce tare „Marșul botonilor” de Alfred Jarry (traducere de Romulus Vulpescu).',
        'Ex. 2: formele care nu respectă norma și forma lor literară, la tablă; ex. 3: propoziții cu mii și mi-i.') },
      { etapa: 'Notițe: norme', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: unu; ora două, clasa a douăsprezecea; clasa întâi / întâia; paisprezece, șaisprezece, șaizeci; șaptesprezece, optsprezece; în texte, cifre, cu excepția numerelor sub zece.') },
      { etapa: 'Aplicații, ex. 1-4', timp: '7 min', activitate: pasi(
        'Ex. 1: câte coarne are duhul și numeralele ordinale formate de la acest număr.',
        'Ex. 2: numeralele din textul cu peștii și felul lor; ex. 3: câteva ordinale la tablă (5, 22, 71).',
        'Ex. 4, frontal: forma corectă în propozițiile a-g.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (al câtelea? a câta?) și ex. 2 (forma corectă), individual, 8 minute.',
        'Verificare, 4 minute; la clasele rapide, quizul „Numeralul ordinal și scrierea corectă”.') },
      { etapa: 'Autoevaluare L9-L10', timp: '3 min', activitate: pasi(
        'P. 161: elevii completează în caiet cele trei afirmații.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 3 (toate numerele) și ex. 5 (textul despre șah, cu litere); „Provocări”, ex. 1 (trei expresii cu numerale); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; autoevaluarea; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Descrierea unei ființe imaginare (I), pregătire',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Recunoaște ființe imaginare mitice și componentele unei descrieri dintr-un text-suport.'],
    resurse: ['Manual Art 5, p. 162', fisa(12), 'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-12/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 162: vă amintiți Minotaurul? Asociem cele cinci creaturi din imagini cu descrierile a-e.') },
      { etapa: 'Lectura textului', timp: '5 min', activitate: pasi(
        '„Explorare”, ex. 1: citesc fragmentul din „Șifonierul, leul și vrăjitoarea” de C.S. Lewis: întâlnirea lui Lucy cu o ființă ciudată.') },
      { etapa: 'Explorare, ex. 2-6', timp: '10 min', activitate: pasi(
        'Ex. 2-3: cine e ființa descrisă și în ce categorie o punem; două detalii care v-au surprins.',
        'Ex. 4: modul și timpul verbelor: ce timp are descrierea și ce timp are acțiunea?',
        'Ex. 5-6: schema de la p. 162: ce părți de vorbire numesc ființa și părțile ei, ce părți de vorbire arată trăsăturile; ce aspecte sunt detaliate.') },
      { etapa: 'Notițe: descrierea unei ființe imaginare', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: trăsăturile fizice și morale, accentul pe ce e fabulos, surprinzător; substantive, adjective, verbe la indicativ prezent sau imperfect; aceleași etape ca la descrierea unui obiect; introducere, cuprins, încheiere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (ființe din legende), ex. 2-3 (spiridușul din pod: substantive, adjective, verbe), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '9 min', activitate: pasi(
        'Fiecare inventează o ființă sau alege una din lecturi, îi dă un nume și hotărăște dacă e înspăimântătoare, blândă sau înșelătoare.',
        'Începe schema: organizatorul grafic din fișa lecției (înfățișare, puteri, loc) și tabelul „Planul ființei tale” (fișa de exerciții, ex. 5). Trec pe la bănci.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: schema ființei, terminată, cu o propoziție de concluzie; fișa de exerciții, pagina 2 (ex. 4). Schema se aduce ora viitoare, la redactare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; schema ființei imaginare.',
  },
  'lectia-13': {
    titlu: 'Descrierea unei ființe imaginare (II), redactare',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează o compunere descriptivă despre o ființă imaginară, cu respectarea etapelor scrierii.'],
    resurse: ['Manual Art 5, p. 163', fisa(13), 'Fișa lecției (/materiale/clasa-5/unitatea-5/lectia-13/fisa.pdf)', 'Fișa de pregătire realizată la ora anterioară'],
    desfasurare: [
      { etapa: 'Verificarea schemei', timp: '3 min', activitate: pasi(
        'Doi-trei elevi își prezintă, într-o propoziție, ființa imaginată și puterea ei.') },
      { etapa: 'Revizuirea, pe un model', timp: '7 min', activitate: pasi(
        'Fișa de exerciții, ex. 1: citim textul despre dragon și stabilim frontal ce trebuie corectat (repetițiile, timpurile amestecate, lipsa comparațiilor); elevii îl rescriu.') },
      { etapa: 'Începutul', timp: '4 min', activitate: pasi(
        'Fișa de exerciții, ex. 2: ce introducere trezește curiozitatea și de ce; fiecare își scrie propria introducere.') },
      { etapa: 'Redactarea', timp: '18 min', activitate: pasi(
        '„Aplicații”, ex. 4: fiecare descrie ființa pe fișa lecției (ciorna), după schemă: introducere, înfățișare, trăsături și puteri, relația cu ceilalți, încheiere.',
        'Trec pe la bănci și ajut la ordinea detaliilor și la comparații.') },
      { etapa: 'Revizuirea', timp: '9 min', activitate: pasi(
        'Ex. 5 și ex. 7: fiecare își recitește textul (idei clare, alineate, ce nu e relevant) și bifează lista de control din fișa de exerciții (ex. 3, coloana „Eu”).',
        'Schimbă textul cu colegul, care completează coloana „Colegul” și face o sugestie.') },
      { etapa: 'Titlul', timp: '4 min', activitate: pasi(
        'Ex. 6: fișa de exerciții, ex. 4 (trei titluri: misterios, amuzant, simplu); fiecare îl alege pe cel potrivit.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Doi elevi citesc începutul descrierii.',
        'Tema: varianta finală, pe o coală, cu titlu și, dacă vreți, un desen al ființei (ex. 6).') },
    ],
    evaluare: 'Lista de control (autoevaluare și evaluare reciprocă); observarea redactării; descrierea finală.',
  },
  'lectia-14': {
    titlu: 'Prezentarea proiectului de grup Itinerar multicultural',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Prezintă și evaluează, pe grupe, proiectul Itinerar multicultural, conform criteriilor stabilite.'],
    resurse: ['Manual Art 5, pp. 153-154', 'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-5/lectia-14/fisa.pdf)', 'Produsele proiectelor pe grupe'],
    desfasurare: [
      { etapa: 'Pregătirea', timp: '3 min', activitate: pasi(
        'Stabilim ordinea grupelor și timpul: 5-6 minute de prezentare și un minut de întrebări pentru fiecare. Grupele își pregătesc recuzita.') },
      { etapa: 'Prezentările', timp: '35 min', activitate: pasi(
        'Fiecare grupă prezintă basmul (titlul, comunitatea, personajele, specificul etnic, elementele comune cu alte basme) și ce a aflat despre comunitate (regiunea, sărbători, obiceiuri, port, mâncăruri, formule de salut).',
        'Colegii pun câte o întrebare; eu completez grila din fișa proiectului pentru fiecare grupă și notez un punct tare și o sugestie.') },
      { etapa: 'Reflecții', timp: '7 min', activitate: pasi(
        'Discuție, după p. 154: ce elemente comune ați descoperit în basme (teme, personaje, valori, formule)? Care basm v-a plăcut mai mult? Ce ați aflat nou despre comunitățile minoritare?') },
      { etapa: 'Autoevaluarea', timp: '5 min', activitate: pasi(
        'Fiecare elev completează autoevaluarea din manual (documentarea, munca în echipă, prezentarea orală) și rubricile din fișă: ce a mers bine, ce ar face altfel.') },
    ],
    evaluare: 'Evaluarea proiectului pe grupe după criteriile din fișă; autoevaluarea elevilor; observarea prezentărilor.',
  },
  'lectia-15': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: basmul, elementele paraverbale și nonverbale, actele de limbaj.'],
    resurse: ['Manual Art 5, pp. 164-165', fisa(15), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '3 min', activitate: pasi(
        'Ciorchine pe tablă: fiecare numește o noțiune din unitate (basm, miraculos, formulă de început, probă, paraverbal, a promite...).') },
      { etapa: 'Lectura textului', timp: '5 min', activitate: pasi(
        'Partea I, p. 164: citesc adaptarea după „Prințesa și mazărea” de Hans Christian Andersen.') },
      { etapa: 'Ex. 1-3', timp: '7 min', activitate: pasi(
        'Ex. 1: ordonăm cronologic ideile principale; ex. 2: indicii spațiali și temporali din listă; ex. 3: răspunsurile corecte A-E, frontal.') },
      { etapa: 'Ex. 4-10', timp: '9 min', activitate: pasi(
        'Frontal: trăsăturile unei prințese adevărate; proba; o altă probă și un titlu nou; alte basme cu prințese; elementul neobișnuit; formula finală și sensul ei.') },
      { etapa: 'Definiția pentru dicționar', timp: '6 min', activitate: pasi(
        'Ex. 11: grupe de 3-4 scriu definiția textului narativ literar pentru un dicționar al copiilor; subliniem cuvintele-cheie și alcătuim împreună definiția cea mai cuprinzătoare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-3 pe basmul „Râșnița fermecată” (creat pentru fișă), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”; notez ce trebuie reluat înainte de evaluare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 8 (prezentarea prințesei din poveste); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Definițiile grupelor; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-16': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: numeralul cardinal și ordinal.'],
    resurse: ['Manual Art 5, pp. 164-165', fisa(16), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi elevi citesc prezentarea prințesei.') },
      { etapa: 'Ex. 12-15', timp: '8 min', activitate: pasi(
        'Ex. 12: ce parte de vorbire sunt cuvintele subliniate în text; ex. 13: numeralele cardinale simple și compuse, grupate la tablă.',
        'Ex. 14: forma corectă (a-f); ex. 15: propoziții cu un ordinal la masculin și un cardinal simplu la feminin.') },
      { etapa: 'Ex. 16', timp: '3 min', activitate: pasi(
        'Oral: animalul fabulos care a însoțit-o pe prințesă, trei aspecte cu numerale.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (numeralele din „Masa zânei”) și ex. 3 (scrie corect), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Redactare: ființa invizibilă', timp: '13 min', activitate: pasi(
        'Partea a II-a: citim fragmentul din „Animale fantastice și unde le poți găsi” de J.K. Rowling.',
        'Fiecare face o schemă scurtă pentru a doua ființă din geamantan (înfățișare, puteri, purtare) și începe descrierea de 6-10 rânduri.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: descrierea ființei invizibile, terminată; fișa de exerciții, pagina 2.',
        'Anunț evaluarea: un fragment de basm, numeralul cardinal și ordinal, scrierea corectă a numeralelor, miraculosul, indicii de timp și spațiu, descrierea unei ființe fabuloase.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-17': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea V.'],
    resurse: ['Testul tipărit, Manual Art 5, p. 166', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testele (fragment adaptat după „Lupul cel năzdrăvan și Făt-Frumos” de Petre Ispirescu) și foile de răspuns.',
        'Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: numerale, scrierea lor cu litere, ordinale, un și o, înțelegerea textului, indici de timp și spațiu, miraculosul, o replică-promisiune); B, 30 de puncte (descrierea ființei fabuloase care fură merele de aur, 10-15 rânduri); 10 puncte din oficiu.',
        'Recomand: circa 25 de minute pentru A, 15 minute pentru B, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual, pe foaia separată; supraveghez discret.',
        'Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii își recitesc lucrarea (scrierea numeralelor, ortografia, paragrafele), apoi strâng foile.',
        'Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
