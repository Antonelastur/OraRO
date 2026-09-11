// Planuri de lecție detaliate pentru Unitatea VI „Din carte spre departe", clasa a V-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 5 și ghidul profesorului. Rezolvările
// din ghid nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-5/unitatea-6/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul narativ nonliterar. Jurnal de călătorie',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Identifică informații esențiale dintr-un jurnal de călătorie, text narativ nonliterar.'],
    resurse: ['Manual Art 5, pp. 168-170', fisa(1), 'Quizul „Jurnalul Monicăi” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        '„Pentru început”, p. 168, ex. 1: ce reprezintă imaginile?',
        'Ex. 2-3: de ce poartă străzile nume de personalități? Localități sau școli cu nume de domnitori (și școala noastră, dacă e cazul).',
        'Ați vizitat orașe în care s-au petrecut evenimente istorice? Ce v-a impresionat?') },
      { etapa: 'Despre text', timp: '2 min', activitate: pasi(
        'Caseta de la p. 168: jurnalul Monicăi, elevă în clasa a V-a, scris la cererea profesoarei în cele trei zile ale excursiei „Din carte spre departe”.') },
      { etapa: 'Lectura model', timp: '14 min', activitate: pasi(
        'Ex. 4: citesc jurnalul (sau pornesc înregistrarea din manualul digital); elevii urmăresc.',
        'Lămurim cuvintele: incunabul (explicat chiar de Monica), cronică, slavonă, litere chirilice, tiparniță, omiliar, diacon, ban, călău, satâr; nota despre Neagoe Basarab.',
        'Notez pe tablă cele trei zile și orașele.') },
      { etapa: 'Impresii după prima lectură', timp: '7 min', activitate: pasi(
        'P. 170, ex. 1-4: ce v-a amintit de situații trăite? V-a plăcut jurnalul? Ce v-a atras atenția? Ce vi s-a părut mai puțin interesant?') },
      { etapa: 'Imaginile din manual', timp: '3 min', activitate: pasi(
        'Ilustrațiile de la pp. 169-170: se potrivesc cu textul? Ce detalii lipsesc din imagini sau din text?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (unde a fost?) și ex. 2 (cuvinte din jurnal), individual, 9 minute.',
        'Verificare, 4 minute; la clasele rapide, quizul „Jurnalul Monicăi”.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: ex. 5 de la „Impresii după prima lectură” (situația amuzantă), în scris; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Trăsături ale textului narativ nonliterar',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Identifică reperele de timp și de spațiu și trăsăturile care fac dintr-un jurnal de călătorie un text nonliterar.'],
    resurse: ['Manual Art 5, p. 171', fisa(2), 'Schema „Trăsături ale textului narativ nonliterar” (/materiale/clasa-5/unitatea-6/lectia-2/schema.svg)', 'Quizul „Textul narativ nonliterar” (materialul de joc al lecției)', 'Hartă a României', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Câțiva elevi citesc situațiile amuzante alese; ajungem la ideea că într-un jurnal notezi și ce te-a amuzat.') },
      { etapa: 'Explorare, ex. 1-3', timp: '10 min', activitate: pasi(
        'Ex. 1: indicii de timp, în caiet, în patru coloane (date, zile ale săptămânii, momente ale zilei, alți indici).',
        'Ex. 2: cât a durat excursia și după ce ne dăm seama.',
        'Ex. 3, în perechi: cuvintele despre spațiu, grupate în localități, instituții, alte locuri.') },
      { etapa: 'Explorare, ex. 4-6', timp: '5 min', activitate: pasi(
        'Ex. 4: găsim localitățile pe harta României. Ex. 5: verificarea instituțiilor pe internet rămâne pentru acasă.',
        'Ex. 6: ați vizitat vreunul dintre locuri? Ce loc ați vrea să vizitați?') },
      { etapa: 'Explorare, ex. 7-9', timp: '6 min', activitate: pasi(
        'Ex. 7: ordonăm ideile în caiet; ex. 8: participanții la întâmplări; ex. 9: fapte și locuri reale sau imaginare? Elevii își motivează răspunsul.') },
      { etapa: 'Notițe: textul narativ nonliterar', timp: '4 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: întâmplări reale, în timp și spațiu reale; participanți (persoane reale), nu personaje; exemple de texte nonliterare (jurnal, reportaj, articol, interviu, scrisoare).') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Fiecare scrie un răspuns scurt: de ce e jurnalul un text narativ nonliterar? Apoi, în perechi, formulează un răspuns comun; două perechi îl citesc.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (literar sau nonliterar?), ex. 2-3 (jurnalul de la Sibiu), individual, 8 minute.',
        'Verificare, 4 minute; la clasele rapide, quizul „Textul narativ nonliterar”.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: o scurtă notă de jurnal despre ce ai aflat azi despre textul nonliterar; ex. 5 (existența instituțiilor, pe internet); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; răspunsurile perechilor; fișa de exerciții, ex. 1-3.',
  },
  'lectia-3': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Discută semnificația textului literar și realizează un scurt exercițiu de scriere creativă, pe o temă de cultură națională.'],
    resurse: ['Manual Art 5, pp. 172-173', fisa(3), 'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-3/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi-trei elevi citesc nota de jurnal.') },
      { etapa: 'Jocul X și 0', timp: '12 min', activitate: pasi(
        '„Interpretare”, p. 172, ex. 1: fiecare desenează în caiet tabelul de nouă căsuțe, cu titlurile (fapte interesante, informații, opinii, tema, vocabular, detalii, întrebări, imagini, sumar).',
        'Ex. 2, în perechi: pe rând, fiecare marchează o căsuță și răspunde oral la cerința ei; câștigă cine are primul trei căsuțe în linie.',
        'La final, câteva perechi spun răspunsurile la „tema” și „sumar”.') },
      { etapa: 'Interpretare, ex. 4-7', timp: '7 min', activitate: pasi(
        'Ex. 4-5: de ce folosește Monica persoana a II-a, într-un text scris pentru sine? Formulele de adresare către jurnal.',
        'Ex. 6: de ce se schimbă formulele (elevii aleg o variantă sau propun alta); ex. 7: de ce vorbește despre sănătatea ei după întâlnirea cu Mihai Viteazul.') },
      { etapa: 'Interpretare, ex. 8-10', timp: '6 min', activitate: pasi(
        'Ex. 8: „Cartea recordurilor”: tabelul cu personalitățile și realizările lor, în caiete.',
        'Ex. 9: reacția Monicăi la Omiliar și promisiunea ei; ex. 10: un loc care v-a amintit de o carte.') },
      { etapa: 'Interpretare, ex. 12-14', timp: '4 min', activitate: pasi(
        'Frontal: trăsăturile autoarei, cum prezintă excursia (elevii aleg a, b sau c), e un text bun sau nu?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce spune despre Monica?) și ex. 2 (jurnal sau ghid turistic?), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Autoevaluare L1-L3', timp: '4 min', activitate: pasi(
        'P. 173: elevii completează în caiet cele trei afirmații; citim câteva.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: ex. 3 (cerințele din joc la care n-au răspuns) și ex. 11 (scurtă istorie a cărții, 8-10 rânduri) sau „Portofoliu” (o pagină de jurnal de cel mult 100 de cuvinte); fișa lecției; fișa de exerciții, pagina 2. Opțional: „Provocări”, Festivalul Roman Apulum.') },
    ],
    evaluare: 'Observarea jocului în perechi; autoevaluarea; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Text auxiliar. Scrisoarea III de Mihai Eminescu (fragment)',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică tema textului și formulează ideile principale dintr-un fragment din Scrisoarea III de Mihai Eminescu.'],
    resurse: ['Manual Art 5, pp. 174-175', fisa(4), 'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Ce domnitori a pomenit Monica în jurnal?',
        'Caseta de la p. 174: Mihai Eminescu (1850-1889), poetul național; Mircea cel Bătrân și sultanul Baiazid; bătălia de la Rovine (1394 sau 1395).') },
      { etapa: 'Lectura model', timp: '8 min', activitate: pasi(
        'Citesc fragmentul cu voce tare; elevii urmăresc.',
        'Lămurim notele de subsol (solul cu năframă, bănat, Aliotman, Baiazid „Fulgerul”, Nicopole, pristol) și cuvintele zale, toiag, moșie, lauri.') },
      { etapa: 'Lectura pe roluri', timp: '6 min', activitate: pasi(
        '„Discutarea textului”, ex. 1: patru elevi citesc pe roluri (povestitorul, solul, Mircea, Baiazid); clasa urmărește tonul fiecăruia.') },
      { etapa: 'Discutarea textului, ex. 2-3', timp: '5 min', activitate: pasi(
        'Ex. 2: ce înseamnă „schimb a ta coroană într-o ramură de spini” (elevii aleg varianta).',
        'Ex. 3: o abatere de la adevărul istoric; o căutăm cu ajutorul casetei și al notelor din subsol.') },
      { etapa: 'Ideile principale', timp: '10 min', activitate: pasi(
        'Ex. 4, în perechi: patru fragmente logice, cuvântul-cheie și ideea principală a fiecăruia, apoi ideile secundare, în caiete.',
        'Două perechi își citesc ideile; completăm pe tablă.') },
      { etapa: 'Personajele', timp: '4 min', activitate: pasi(
        'Ex. 5: o trăsătură a solului, două ale lui Baiazid, trei ale lui Mircea, desprinse din felul în care vorbește fiecare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '9 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine spune?) și ex. 2 (cuvinte vechi), individual, 6 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 6 (ce este pentru tine iubirea de țară: un text scurt, o poezie sau un desen); „Portofoliu” (Darius și cruciadele); fișa lecției (jurnalul cu dublă intrare); fișa de exerciții, pagina 2.',
        '„Biblioteci deschise”: „Istoria lui Răzvan” de Horia Corcheș; „Mircea cel Mare și luptele sale cu turcii” de Neagu Djuvara și Radu Oltean.') },
    ],
    evaluare: 'Observarea lecturii pe roluri; ideile principale ale perechilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Carte românească de învățătură (I), de la prima carte tipărită la cartea digitală',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Identifică tema unui text nonliterar despre istoria cărții tipărite românești.'],
    resurse: ['Manual Art 5, pp. 176-177', fisa(5), 'Infograficul „Carte românească de învățătură (I)” (/materiale/clasa-5/unitatea-6/lectia-5/infografic.svg)', 'Quizul „De la manuscris la tipar” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        '„Pentru început”, p. 176, ex. 1: desenul cu tăblițele de argilă și replica domnului Oltean: v-ar fi plăcut să scrieți pe tăblițe?',
        'Ex. 2, în perechi: două-trei motive pentru manualele digitale și tabletele din școală.') },
      { etapa: 'Lectura textului', timp: '10 min', activitate: pasi(
        'Citesc articolul lui Iulian Comănescu, o postare de blog adresată fiicei lui, Anais; elevii urmăresc.',
        'Lămurim cuvintele: link, tetraevanghel, e-book, Amazon, papirus, pergament, litere mobile.') },
      { etapa: 'Explorare, ex. 1-8', timp: '10 min', activitate: pasi(
        'Frontal: unde a apărut articolul; istoria cuvântului blog (ex. 2) și ce ați scrie pe un blog; despre ce scrie autorul.',
        'Forma textului și cine e Anais; motivul postării (primul paragraf); tema (elevii aleg varianta); ordinea prețurilor (ex. 8).') },
      { etapa: 'Notițe: drumul cărții', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 177) și infograficul lecției: manuscrisele copiate de călugări pe pergament; Gutenberg (1440): presa tipografică, literele mobile, cerneala pe bază de ulei; Biblia tipărită în latină; Coresi, la Brașov; cartea electronică.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (drumul cărții) și ex. 2 (adevărat sau fals?), individual, 9 minute.',
        'Verificare, 4 minute; la clasele rapide, quizul „De la manuscris la tipar”.') },
      { etapa: 'Axa timpului', timp: '4 min', activitate: pasi(
        'Pe tablă: deasupra axei, momentele din articol; dedesubt, cărțile văzute de Monica în excursie (două echipe dictează).') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: „Aplicații”, p. 177, ex. 1-3, în scris; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Carte românească de învățătură (II), documentare online',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Se documentează pe baza unui articol online despre cartea tipărită de-a lungul timpului și formulează o opinie.'],
    resurse: ['Manual Art 5, p. 177', fisa(6), 'Infograficul „Carte românească de învățătură (II)” (/materiale/clasa-5/unitatea-6/lectia-6/infografic.svg)', 'Un articol online despre istoria cărții, pregătit de profesor', 'Quizul „De la tipar la cartea digitală” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Cum verificați dacă o informație găsită pe internet e adevărată? Notez răspunsurile pe tablă.') },
      { etapa: 'Aplicații, ex. 1-4', timp: '10 min', activitate: pasi(
        'Verificăm tema: cum se făceau cărțile înainte de tipar (ex. 1); de ce „tiparul exista deja” (ex. 2).',
        'Ex. 3, în perechi: explicațiile despre funcționarea tiparului și despre rezistența cărții în timp.',
        'Ex. 4: de ce se numește așa articolul?') },
      { etapa: 'Un școlar din trecut', timp: '4 min', activitate: pasi(
        'Ex. 5: doi-trei elevi spun ce i-ar povesti unui școlar din trecut despre tehnologia din școală și ce l-ar întreba.') },
      { etapa: 'Notițe: documentarea online', timp: '3 min', activitate: pasi(
        'În caiete: ce notăm (titlul, autorul, adresa, data consultării) și cum recunoaștem o sursă de încredere (autor, site oficial, surse citate).') },
      { etapa: 'Obținerea performanței: documentarea', timp: '15 min', activitate: pasi(
        'Fișa de exerciții, ex. 1 (sursă de încredere?), individual, 5 minute, cu verificare rapidă.',
        'Citim ghidat articolul online pregătit; elevii completează fișa de documentare (ex. 2) și comparăm informațiile cu infograficul.') },
      { etapa: 'Opinii', timp: '6 min', activitate: pasi(
        'Trei-patru elevi spun oral dacă peste 50 de ani vom mai citi cărți tipărite, cu un argument din articol.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „De la tipar la cartea digitală”, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (cuvintele din lumea digitală și opinia scrisă).') },
    ],
    evaluare: 'Fișa de documentare; opiniile orale; quizul.',
  },
  'lectia-7': {
    titlu: 'Identitate națională',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Înțelege aspecte privind identitatea națională, pe baza unor simboluri precum sigiliul și stema României.'],
    resurse: ['Manual Art 5, pp. 178-179', fisa(7), 'Infograficul „Identitate națională” (/materiale/clasa-5/unitatea-6/lectia-7/infografic.svg)', 'Quizul „Identitate națională. Stema României” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 178, ex. 1: ce copac ați desena, fără să vă gândiți prea mult, și de ce?',
        'Ex. 2: asociem copacii cu țările. Discutăm pe scurt despre simbolurile oficiale și cele neoficiale ale unei țări.') },
      { etapa: 'Stema României', timp: '10 min', activitate: pasi(
        '„Explorare”, ex. 1: citesc textul despre stemă; urmărim elementele pe imaginea stemei și pe infograficul lecției.',
        'a) Unde ați văzut stema? b) Răspundem la întrebări: când a fost elaborată stema, ce evocă coroana de oțel, la ce domnitori trimit sceptrul și sabia.') },
      { etapa: 'Explorare, ex. 2-3', timp: '5 min', activitate: pasi(
        'Ex. 2: asociem simbolurile cu semnificațiile; ex. 3: ce alte însemne oficiale ale României cunoașteți?') },
      { etapa: 'Notițe: identitatea națională', timp: '5 min', activitate: pasi(
        'În caiete, după Repere: identitatea națională (sentimentul de apartenență), națiunea, patriotismul și valorile comune (strămoși, istorie, eroi, limbă, monumente, peisaje, tradiții).') },
      { etapa: 'Aplicații, ex. 1-5', timp: '9 min', activitate: pasi(
        'Ex. 1-2: la ce materii ați întâlnit teme de identitate națională și de ce e bine să le discutăm la școală.',
        'Ex. 3-4, individual: cinci valori alese din listă și două comportamente pentru fiecare.',
        'Ex. 5: doi-trei elevi prezintă o persoană care trăiește după una dintre aceste valori.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (elementele stemei) și ex. 2 (provincia și simbolul ei), individual, 8 minute.',
        'Verificare, 4 minute; la clasele rapide, quizul „Identitate națională. Stema României”.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Explorare”, ex. 4 (stema județului nostru, desenată, cu semnificațiile elementelor); „Aplicații”, ex. 6 (trei întrebări pentru un test despre stemă); „Portofoliu” (blazonul propriu); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-8': {
    titlu: 'Proiect de grup. Imagini ale domnitorului (anunțare)',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup Imagini ale domnitorului.'],
    resurse: ['Manual Art 5, pp. 180-182', 'Fișa proiectului (/materiale/clasa-5/unitatea-6/lectia-8/fisa.pdf)', 'Bilețele pentru tragerea la sorți a domnitorilor', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Ce domnitori am întâlnit în unitate (în jurnalul Monicăi, în „Scrisoarea III”, pe stemă)? Privim portretele de la pp. 180-182.') },
      { etapa: 'Sarcina de lucru', timp: '8 min', activitate: pasi(
        'P. 180: patru grupe, câte un domnitor, pornind de la fragmentul și imaginea din manual:',
        'Ștefan cel Mare („Cântecele lui Ștefan Vodă”, poezie populară culeasă de Vasile Alecsandri; portretul din Tetraevanghelul de la Humor); Mircea cel Bătrân (Dimitrie Bolintineanu, „Mircea cel Mare și solii”; pictura de la Argeș); Mihai Viteazul (Nicolae Bălcescu, „Românii supt Mihai-Voievod Viteazul”; tabloul lui Mișu Popp); Vlad Țepeș (Neagu Djuvara și Radu Oltean, „De la Vlad Țepeș la Dracula Vampirul”; tabloul de la Viena).') },
      { etapa: 'Pașii și calendarul', timp: '7 min', activitate: pasi(
        'O săptămână, pașii de la p. 182: ce v-a reținut atenția în text; tipul produsului (poster sau material realizat cu un editor grafic) și rolurile (coordonator, editorul textului, editorul imaginilor); planul; dezvoltarea (numele, epoca, trăsăturile din text, valorile, imaginea: trăsături fizice, ținută, culori); produsul; prezentarea.',
        'Stabilim data prezentării.') },
      { etapa: 'Criteriile de evaluare', timp: '5 min', activitate: pasi(
        'Citim lista de autoevaluare de la p. 182 și grila din fișa proiectului, cu câte un exemplu pentru fiecare criteriu.') },
      { etapa: 'Formarea grupelor', timp: '22 min', activitate: pasi(
        'Grupele se formează și trag la sorți domnitorul.',
        'Fiecare grupă citește fragmentul cu voce tare, notează în caiet ce i-a reținut atenția (pasul 1), alege produsul, își împarte rolurile și schițează planul.',
        'Trec pe la fiecare grupă și verific planul.') },
      { etapa: 'Încheiere', timp: '3 min', activitate: pasi(
        'Reamintesc data prezentării și ce aduce fiecare rol la ora aceea.') },
    ],
    evaluare: 'Fișa de pornire a proiectului; observarea organizării grupelor.',
  },
  'lectia-9': {
    titlu: 'Acte de limbaj: a explica, a recomanda, a afirma',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică și performează actele de limbaj a explica, a recomanda, a afirma.'],
    resurse: ['Manual Art 5, pp. 183-184', fisa(9), 'Quizul „Acte de limbaj: a explica, a recomanda, a afirma” (materialul de joc al lecției)', 'Bilețele cu situații de comunicare'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        '„Pentru început”, p. 183: perechile citesc pe roluri dialogul dintre Simona și Alice.',
        'a) Reperele pe hartă; b) formulările despre distanță, durată, direcție, o afirmație și o recomandare.') },
      { etapa: 'Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Ex. 1: asociem verbele a explica, a recomanda, a afirma cu definițiile.',
        'Ex. 2: recomandări pentru cele patru situații (fratele întârzie, mașina se apropie, revista, grupul gălăgios).') },
      { etapa: 'Explorare, ex. 3', timp: '7 min', activitate: pasi(
        'În perechi, cu tabelul din manual: A îi explică lui B drumul, folosind toate informațiile unui rând, și încheie cu o recomandare; apoi inversează direcția. Două perechi prezintă.') },
      { etapa: 'Notițe: a explica, a recomanda, a afirma', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: a explica (de ce? cum?; cuvinte pentru cauză și consecință); a recomanda (Îți recomand să..., Te sfătuiesc să...); a afirma.') },
      { etapa: 'Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Citim textul despre drumul spre Muzeul Tiparului din Târgoviște; elevii spun, frontal, dacă afirmațiile a-h sunt adevărate sau false.') },
      { etapa: 'Aplicații, ex. 3-4', timp: '5 min', activitate: pasi(
        'Ex. 3: un elev îi recomandă unui prieten să viziteze Târgoviște, cu două informații din text.',
        'Ex. 4: explicăm itinerarul din schemă cu cuvintele date (cabană, potecă, a traversa, afluent...).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce face vorbitorul?) și ex. 2 (cuvinte care leagă explicația), individual, 8 minute.',
        'Verificare, 4 minute; la clasele rapide, quizul „Acte de limbaj”.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Explorare”, ex. 4 (schema itinerarului de acasă la școală, cu două recomandări de siguranță); „Provocări” (prezentarea unei localități: o afirmație, o explicație, o recomandare), verificată la începutul orei de gramatică; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea dialogurilor în perechi; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Prezentarea proiectului de grup Imagini ale domnitorului',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Prezintă și evaluează, pe grupe, proiectul Imagini ale domnitorului, conform criteriilor stabilite.'],
    resurse: ['Manual Art 5, pp. 180-182', 'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-6/lectia-10/fisa.pdf)', 'Produsele proiectelor pe grupe'],
    desfasurare: [
      { etapa: 'Pregătirea', timp: '3 min', activitate: pasi(
        'Stabilim ordinea (cronologic, după domnitori) și timpul: 7 minute de prezentare și 2 minute de întrebări pentru fiecare grupă.') },
      { etapa: 'Prezentările', timp: '36 min', activitate: pasi(
        'Fiecare grupă prezintă domnitorul: numele, epoca, trăsăturile din text, valorile promovate, ce arată imaginea (trăsături fizice, ținută, culori) și informații de la istorie.',
        'Colegii pun întrebări; eu completez grila din fișa proiectului pentru fiecare grupă și notez un punct tare și o sugestie.') },
      { etapa: 'Reflecții', timp: '6 min', activitate: pasi(
        'Discuție: ce au în comun imaginile celor patru domnitori? Ce valori promovează textele? Cum diferă imaginea din text de cea din pictură?') },
      { etapa: 'Autoevaluarea', timp: '5 min', activitate: pasi(
        'Fiecare elev completează lista de autoevaluare din manual (p. 182) și rubricile din fișă: ce a mers bine, ce ar face altfel.') },
    ],
    evaluare: 'Evaluarea proiectului pe grupe după criteriile din fișă; autoevaluarea elevilor; observarea prezentărilor.',
  },
  'lectia-11': {
    titlu: 'Enunțul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică structurile sintactice de bază și alcătuiește enunțuri simple și complexe.'],
    resurse: ['Manual Art 5, p. 185', fisa(11), 'Schema „Enunțul” (/materiale/clasa-5/unitatea-6/lectia-11/schema.svg)', 'Quizul „Enunțul simplu și complex” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi elevi prezintă localitatea aleasă (tema de la lecția despre actele de limbaj); clasa numește afirmația, explicația și recomandarea.') },
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 185: doi elevi citesc dialogul dintre cartea tipărită și cartea electronică; ex. 2: pot trăi cele două cărți împreună?') },
      { etapa: 'Explorare, ex. 1-3', timp: '8 min', activitate: pasi(
        'Ex. 1: predicatele din dialog, subliniate în caiet.',
        'Ex. 2: câte propoziții independente sunt; ex. 3: câte predicate are „Avem o istorie veche, am supraviețuit multor amenințări și pericole”.') },
      { etapa: 'Notițe: enunțul', timp: '6 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: enunțul, unitate de bază a comunicării, construit în jurul unui predicat; enunțul simplu (o propoziție) și complex (două sau mai multe propoziții), cu câte două exemple.') },
      { etapa: 'Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Frontal: enunțurile simple și complexe a-f; numărăm de fiecare dată predicatele.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (simplu sau complex?) și ex. 2 (din două, unul), individual, 11 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '4 min', activitate: pasi(
        'Quizul „Enunțul simplu și complex”, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (trei enunțuri simple și trei complexe despre o excursie, cu predicatele subliniate).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Tipuri de enunț',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște enunțurile asertive, interogative, imperative și exclamative și folosește corect semnele de punctuație.'],
    resurse: ['Manual Art 5, pp. 185-186', fisa(12), 'Schema „Tipuri de enunț” (/materiale/clasa-5/unitatea-6/lectia-12/schema.svg)', 'Quizul „Tipuri de enunț” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Câțiva elevi citesc un enunț complex scris acasă; clasa numără predicatele.') },
      { etapa: 'Explorare, ex. 4-5', timp: '7 min', activitate: pasi(
        'Ex. 4: grupăm propozițiile din dialogul cărților după ce comunică (informație, întrebare, ordin sau rugăminte, emoție).',
        'Ex. 5: ce semn de punctuație încheie fiecare grupă.') },
      { etapa: 'Notițe: tipuri de enunț', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: enunțurile asertive, interogative, imperative, exclamative, cu semnul de la final (punct, puncte de suspensie, semnul întrebării, semnul exclamării) și câte un exemplu.') },
      { etapa: 'Aplicații, ex. 2', timp: '5 min', activitate: pasi(
        'Doi elevi citesc dialogul dintre frați; clasa spune tipul fiecărui enunț.') },
      { etapa: 'Aplicații, ex. 4-5', timp: '5 min', activitate: pasi(
        'Ex. 4, frontal: tipul fiecărui enunț; ex. 5: enunțuri imperative pentru semnele convenționale din manual.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce tip de enunț?) și ex. 2 (semnul potrivit), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Mesajele fără punctuație', timp: '4 min', activitate: pasi(
        '„Provocări” și ex. 6: de ce lipsesc semnele de punctuație din mesajele de pe telefon? Ce se înțelege greșit? Discutăm pe mesajele Ilincăi și ale Laurei.') },
      { etapa: 'Quiz și autoevaluare', timp: '5 min', activitate: pasi(
        'Quizul „Tipuri de enunț”; apoi elevii completează cele trei afirmații de autoevaluare (L8, p. 186).') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 3 și 7; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Prezentarea textului (I), inserarea unor desene, grafice, fotografii, scheme',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Analizează, prin lectura ghidată a imaginii, rolul desenelor, graficelor și schemelor într-un text.'],
    resurse: ['Manual Art 5, pp. 187-188', fisa(13), 'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-13/fisa.pdf)', 'Coli albe, creioane colorate', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        '„Pentru început”, p. 187, ex. 1: trei obiecte în valiză pentru mare, munte și Lună.',
        'Ex. 2, în perechi: copacul ideilor pentru „călătorie” (sinonime, locuri, obiecte, sentimente).') },
      { etapa: 'Imaginile și descrierile', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 1: grupe de 4-6 privesc imaginile a-e și își notează observațiile; raportorii le prezintă.',
        'Ex. 2: asociem descrierile A-E cu imaginile și subliniem cuvintele-cheie care ne-au ajutat.') },
      { etapa: 'Notițe: textul cu imagini', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 188): într-o compunere se pot integra, ca într-un colaj, desene, fotografii, grafice, scheme; imaginea completează textul, nu îl repetă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce material grafic se potrivește?) și ex. 2 (legenda imaginii), individual, 8 minute.',
        'Verificare, 4 minute; citim câteva legende și vedem dacă adaugă informație.') },
      { etapa: 'Materialul grafic pe grupe', timp: '11 min', activitate: pasi(
        'Ex. 3 (p. 188): fiecare grupă realizează, pe un sfert de coală, materialul pentru locul ei: orarul vizitei la Cazinou sau un peisaj marin, schema Transfăgărășanului, planul Hotelului de Gheață, planul de salvare din Peștera Urșilor, câmpul de maci sau harta Bărăganului.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa lecției (ce material grafic aș adăuga într-un text scris de mine și de ce); fișa de exerciții, pagina 2 (schița paginii de jurnal). Opțional, „Deschideri”: fișa unei țări pe care vrei s-o vizitezi.') },
    ],
    evaluare: 'Observațiile grupelor și materialele grafice; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Prezentarea textului (II), conceperea unui material grafic',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează o compunere cu integrarea unui material grafic propriu, cu respectarea etapelor scrierii.'],
    resurse: ['Manual Art 5, p. 188', fisa(14), 'Fișa lecției (/materiale/clasa-5/unitatea-6/lectia-14/fisa.pdf)', 'Propunerea de material grafic de la ora anterioară'],
    desfasurare: [
      { etapa: 'Colajul jurnalului', timp: '4 min', activitate: pasi(
        '„Aplicații”, p. 188, ex. 1: ce ați lipi în paginile unui jurnal de călătorie? Elevii aleg din listă și își motivează alegerea.') },
      { etapa: 'Planul', timp: '6 min', activitate: pasi(
        'Fiecare alege locul de la ora trecută (sau altul) și completează planul din fișa de exerciții (ex. 1): ce scrie în introducere, cuprins, încheiere și ce imagine pune alături.') },
      { etapa: 'Materialul grafic', timp: '8 min', activitate: pasi(
        'Fișa de exerciții, ex. 2-3: desenul, harta sau schema (sau finalizarea materialului de la ora trecută) și legenda lui.') },
      { etapa: 'Redactarea', timp: '17 min', activitate: pasi(
        '„Aplicații”, ex. 2: fiecare scrie pe fișa lecției (ciorna) un text narativ sau descriptiv despre vizita în locul ales, cu materialul grafic integrat; textul nu repetă ce se vede în imagine.',
        'Trec pe la bănci și ajut la legătura dintre text și imagine.') },
      { etapa: 'Revizuirea în perechi', timp: '10 min', activitate: pasi(
        'Fiecare își verifică lucrarea cu lista de control (fișa de exerciții, ex. 4, coloana „Eu”), apoi o schimbă cu colegul, care completează coloana „Colegul” și scrie un lucru reușit și o sugestie (ex. 5).') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: forma finală pe o coală, cu imaginea lipită și legenda.',
        '„Portofoliu”: cercetarea despre localitatea ta (fotografii, schițe, impresii), început de jurnal de călătorie; „Evaluarea portofoliului”: mapa cu lucrările din unitățile IV-VI, în ordinea preferinței, și un text de 3-4 rânduri despre progresul tău.') },
    ],
    evaluare: 'Lista de control (autoevaluare și evaluare reciprocă); compunerea cu material grafic; portofoliul.',
  },
  'lectia-15': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea VI: jurnalul de călătorie, actele de limbaj, identitatea națională.'],
    resurse: ['Manual Art 5, pp. 189-190', fisa(15), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '3 min', activitate: pasi(
        'Ciorchine pe tablă: fiecare numește o noțiune din unitate (jurnal, participant, blog, stemă, identitate națională, a recomanda...).') },
      { etapa: 'Lectura textului', timp: '6 min', activitate: pasi(
        'P. 189: citesc fragmentul din „O scurtă istorie a românilor povestită celor tineri” de Neagu Djuvara (Rovine și Nicopole).') },
      { etapa: 'Ex. 1-2', timp: '8 min', activitate: pasi(
        'Ex. 1: de ce e bătălia de la Rovine un moment glorios?',
        'Ex. 2, în perechi: diagrama Venn între acest text și fragmentul din „Scrisoarea III” (tipul de text, evenimentele, limbajul, scopul); două perechi prezintă.') },
      { etapa: 'Ex. 3-6', timp: '7 min', activitate: pasi(
        'Frontal: indicii spațiali și temporali din secvența despre Nicopole; conducătorii armatelor; desfășurarea bătăliei pe hartă (oral); de ce e un text narativ nonliterar.') },
      { etapa: 'Joc de rol', timp: '5 min', activitate: pasi(
        'Ex. 10: doi elevi (unul care termină clasa a V-a, unul mai mic) vorbesc despre clasa a V-a, folosind actele de limbaj învățate; colegii identifică tipurile de enunț.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-3 pe pagina de jurnal „O zi la Putna” (scrisă pentru fișă), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”; notez ce trebuie reluat înainte de evaluare.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: ex. 7 (recomandarea cărții lui Djuvara, cu un enunț asertiv, unul exclamativ și unul imperativ) și ex. 8 (dialogul dintre Mircea, Sigismund și Jean de Nevers); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Diagramele Venn; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-16': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea VI: enunțul și tipurile de enunț.'],
    resurse: ['Manual Art 5, pp. 189-190', fisa(16), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Două dialoguri (ex. 8) citite pe roluri; clasa numește tipurile de enunț folosite.') },
      { etapa: 'Ex. 9', timp: '4 min', activitate: pasi(
        'Frontal: enunțurile a-c din text sunt simple sau complexe? Numărăm predicatele.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (enunțuri), ex. 2 (punctuația dialogului) și ex. 3 (transformă), individual, 11 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Redactare: bătălia de la Rovine', timp: '17 min', activitate: pasi(
        'Partea B, p. 190: text narativ nonliterar de 15-20 de rânduri despre bătălia de la Rovine, cu o hartă, un desen sau portretele conducătorilor.',
        'Facem împreună planul (5 minute): introducerea (contextul), cuprinsul (desfășurarea), încheierea (urmările); apoi fiecare începe textul.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: textul despre Rovine, terminat, cu materialul grafic; fișa de exerciții, pagina 2.',
        'Anunț evaluarea: un text nonliterar nou, enunțul simplu și complex, tipurile de enunț și punctuația lor, actele de limbaj, un text nonliterar cu desen.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3; planul compunerii.',
  },
  'lectia-17': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea VI.'],
    resurse: ['Testul tipărit, Manual Art 5, p. 191', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testele (fragment din „Raza verde” de Călin Torsan, din antologia „Care-i faza cu cititul?”) și foile de răspuns.',
        'Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: enunțul simplu, tipul unui enunț, verbe care exprimă acte de limbaj, enunțuri construite, punctuația, trăsăturile textului nonliterar, locurile, acțiunile băiatului, poeții, o explicație); B, 30 de puncte (text nonliterar de 15-20 de rânduri despre ultima carte citită sau cartea preferată, cu un desen integrat); 10 puncte din oficiu.',
        'Recomand: circa 25 de minute pentru A, 15 minute pentru B, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual, pe foaia separată; supraveghez discret.',
        'Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii își recitesc lucrarea (punctuația, paragrafele, desenul cu legendă), apoi strâng foile.',
        'Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
