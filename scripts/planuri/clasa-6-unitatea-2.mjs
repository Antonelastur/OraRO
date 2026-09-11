// Planuri de lecție detaliate pentru Unitatea II „Printre colegi și prieteni”,
// clasa a VI-a. Fără moment organizatoric (se subînțelege); fiecare etapă are pașii
// concreți ai orei: rubrica și exercițiul din manual, întrebările, ce se notează în
// caiete, fișa de exerciții, tema. Surse: Manual Art 6, pp. 44-82, și ghidul
// profesorului. Rezolvările din ghid și ale fișelor nu intră aici (datele ajung
// în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-6/unitatea-2/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Proiectul de grup „Prietenia în filme” (anunțare)',
    data: null,
    tipOra: 'Proiect, anunțare',
    durata: 50,
    obiective: ['Se familiarizează cu tema, sarcinile, calendarul și criteriile de evaluare ale proiectului de grup Prietenia în filme.'],
    resurse: ['Manual Art 6, pp. 60-61', 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-1/fisa.pdf)'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Cele trei cadre din scurtmetrajul „Cântecul” (Mindenki), p. 60: despre ce credeți că e filmul? Notez câteva ipoteze pe tablă, le verificăm după vizionare.') },
      { etapa: 'Scurtmetrajul', timp: '4 min', activitate: pasi(
        'Caseta de la p. 60: scurtmetraj și lungmetraj, durata, festivalurile; filmul a primit Premiul Oscar în 2016.') },
      { etapa: 'Arborele lui Sapiro', timp: '14 min', activitate: pasi(
        'Desenez arborele pe tablă și îl completăm pe un exemplu cunoscut (conflictul din „Oracolul”), parte cu parte: rădăcinile – cauzele; solul – mediul; tulpina – cei implicați; scorbura – problema; ramurile – ce simt; frunzele – ce fac; fructele – soluțiile.',
        'Elevii copiază schema în caiete, cu întrebarea fiecărei părți.') },
      { etapa: 'Formarea grupelor și sarcinile', timp: '8 min', activitate: pasi(
        'Formez grupe de 5-7 elevi; o grupă primește și prezentarea generală a filmului (fișa cu titlul, regizorii, genul, durata, premiile, p. 61).',
        'Calendarul: săptămâna I – vizionarea și împărțirea sarcinilor; săptămâna II – pregătirea prezentării de 3-5 minute (poster, PowerPoint sau altă formă).') },
      { etapa: 'Fișa grupei', timp: '14 min', activitate: pasi(
        'Fiecare grupă completează fișa lecției: membrii, partea din arbore a fiecăruia, termenele, forma prezentării, cine prezintă ce.',
        'Trec pe la grupe și verific dacă fiecare elev are cel puțin o sarcină.') },
      { etapa: 'Criteriile de evaluare', timp: '5 min', activitate: pasi(
        'Citim fișa de observare de la p. 61 (prezentare cursivă, cu gesturi și mimică; colaborare; sprijin pentru colegi) și scara de clasificare; le spun că așa vor fi evaluați.',
        'Tema: vizionarea filmului în grupă, în prima săptămână.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de organizare a grupei, fără notare.',
  },
  'lectia-2': {
    titlu: 'Textul narativ literar în proză. Oracolul de Mircea Cărtărescu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din textul narativ Oracolul de Mircea Cărtărescu.'],
    resurse: ['Manual Art 6, pp. 44-46', fisa(2), 'Coli pentru planșele de impresii', 'Bilețele pentru întrebările adresate autorului'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        'Dezgheț: jocuri în care se ating palmele (Bâza, Piatră-foarfece-hârtie...).',
        '„Pentru început”, p. 44, ex. 1-2: fotografiile cu mâini – ce au în comun, prin ce diferă, ce simt oamenii; notez pe tablă, pe trei coloane.',
        'Ex. 4: ce credeți că înseamnă „oracol”? Notez ipotezele, fără corecturi; le verificăm după lectură.') },
      { etapa: 'Despre autor', timp: '3 min', activitate: pasi(
        'Caseta de la p. 44: Mircea Cărtărescu (n. 1956), poet și prozator, cel mai tradus scriitor român contemporan; „Enciclopedia zmeilor”, pentru copii; „Oracolul” e adaptat după textul „Petruța”.') },
      { etapa: 'Lectura model', timp: '13 min', activitate: pasi(
        'Citesc textul cu voce tare, cu manualele închise; elevii notează cuvintele necunoscute.',
        'Lămurim cuvintele din subsol (IDR, tebecist, ofticos, preventoriu) și pe cele notate de elevi; revenim la ipotezele despre „oracol”.') },
      { etapa: 'Impresii după prima lectură', timp: '12 min', activitate: pasi(
        'P. 46, ex. 1: grupe de patru completează pe o coală cele patru cadrane (mi-a plăcut, nu mi-a plăcut, n-am înțeles, mi-a amintit de); reprezentanții prezintă, planșele rămân afișate pe durata lecțiilor despre text.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine face?) și ex. 2 (adevărat sau fals?), individual, 8 minute.',
        'Verificare, 4 minute; la fiecare „fals”, elevul arată locul din text.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: p. 46, ex. 2 (întrebarea pentru autor, pe bilețel; la începutul orei următoare, voluntarii răspund în locul lui); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Planșele de impresii; observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Timpul și spațiul',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Diferențiază timpul desfășurării întâmplărilor de timpul povestirii lor, pe baza textului Oracolul.'],
    resurse: ['Manual Art 6, pp. 47-48', fisa(3), 'Schema „Timpul și spațiul într-o narațiune” (/materiale/clasa-6/unitatea-2/lectia-3/schema.svg)', 'Coli pentru postere, abțibilduri'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Trei voluntari trag bilețele cu întrebări pentru autor și răspund în locul lui; aleg și o întrebare despre „când” și „unde”, ca punte spre lecție.') },
      { etapa: 'Explorare, ex. 1-5, ca un concurs', timp: '10 min', activitate: pasi(
        'P. 47: elevii rezolvă individual; primii cinci care termină prezintă: vârsta naratorului, anotimpul și câmpul lui lexical, câți ani au trecut, primii indici spațiali și locul principal, indicele spațial legat de momentul povestirii.',
        'Toți notează răspunsurile în caiete.') },
      { etapa: 'Notițe: timpul și spațiul', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: timpul desfășurării întâmplărilor și timpul povestirii (marcat prin prezent), episoadele sărite sau comprimate, unul sau mai multe locuri; desenăm axa timpului.') },
      { etapa: 'Secvențele și ideile principale', timp: '12 min', activitate: pasi(
        'Ex. 6, în perechi: asociază cuvintele-cheie cu secvențele textului și le ordonează; le reamintesc că secvențele nu coincid mereu cu paragrafele.',
        'Ex. 7: formulează ideile principale; le verificăm frontal și le scriu pe tablă, iar elevii le notează.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: textul „Prietena din tabără” (scris pentru fișă), ex. 2 (al întâmplării sau al povestirii?) și ex. 3 (unde se petrece?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 3: anunțarea posterelor', timp: '4 min', activitate: pasi(
        'Formez grupe de 4-5 pentru planul dezvoltat de idei (poster) și le arăt grila de la p. 48; posterele se prezintă la începutul orei următoare, prin turul galeriei.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-2 (reperele temporale și secvențele lor); posterul grupei; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; ideile principale din caiete; fișa de exerciții, ex. 2-3.',
  },
  'lectia-4': {
    titlu: 'Etapele acțiunii (momentele subiectului literar)',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică situația inițială, succesiunea de întâmplări și situația finală într-un text narativ.'],
    resurse: ['Manual Art 6, pp. 49-51', fisa(4), 'Schema „Etapele acțiunii (momentele subiectului)” (/materiale/clasa-6/unitatea-2/lectia-4/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Turul galeriei', timp: '6 min', activitate: pasi(
        'Posterele cu planul dezvoltat de idei se afișează; elevii le evaluează pe grila de la p. 48 și lipesc câte un abțibild pe cel mai bun.') },
      { etapa: 'Explorare, ex. 1-3 (p. 49 sus)', timp: '7 min', activitate: pasi(
        'Ex. 1, frontal: scriu pe tablă numerele 1-10, elevii aleg citatele în ordine.',
        'Ex. 2, în grupe de patru: grupează secvențele în situația inițială, succesiunea de întâmplări, situația finală (2-3 minute); ce parte a fost mai greu de delimitat?',
        'Ex. 3: modul și timpul din primul paragraf.') },
      { etapa: 'Momentele, pe rând', timp: '14 min', activitate: pasi(
        'Expozițiunea (Repere, p. 49); intriga: p. 49 jos, ex. 1-3 (schimbarea timpului verbal, evenimentul care declanșează acțiunea, indicele temporal) și Repere, p. 50.',
        'Desfășurarea acțiunii: p. 50 sus (organizatorul cu indici temporali); punctul culminant: p. 50 mijloc, ex. 1-3, în perechi; deznodământul și epilogul: p. 50 jos și Repere, p. 51.',
        'După fiecare moment, elevii notează definiția în caiet, după schema lecției.') },
      { etapa: 'Schema momentelor', timp: '6 min', activitate: pasi(
        'Aplicații, ex. 4: elevii completează în caiet schema care leagă secvențele de momente; verificăm pe tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: textul „Mingea din curte” (scris pentru fișă) și ex. 2 (momentele subiectului), individual, 7 minute.',
        'Verificare, 5 minute; discutăm unde se termină desfășurarea și unde începe punctul culminant.') },
      { etapa: 'Discuție în perechi', timp: '2 min', activitate: pasi(
        'Aplicații, ex. 5: ce moment a fost cel mai greu de delimitat, în „Oracolul” și în textul din fișă?') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-3 (textul despre momentul preferat, întrebările pentru fiecare moment, schimb de caiete ora viitoare); fișa de exerciții, pagina 2. Opțional, „Provocări”: filmul poveștii, termen o săptămână.') },
    ],
    evaluare: 'Schema momentelor din caiet; fișa de exerciții, ex. 1-2; interevaluarea posterelor.',
  },
  'lectia-5': {
    titlu: 'Personajele',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică trăsăturile personajelor din textul Oracolul, pe baza acțiunilor și a relațiilor dintre ele.'],
    resurse: ['Manual Art 6, pp. 52-53', fisa(5), 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-5/fisa.pdf)', 'Bilețele cu numele personajelor', 'DEX sau dexonline.ro'],
    desfasurare: [
      { etapa: 'Vitrina', timp: '8 min', activitate: pasi(
        'Explorare, ex. 1: elevii extrag bilețele (asistenta, băiatul, Iosub, Petruța, Puică, Tovarășa) și se așază în „vitrină”, pe trei rânduri; fiecare spune, la persoana I, în ce momente apare, cu cine intră în contact și ce face.') },
      { etapa: 'Acvariul emoțiilor și istoria cuvintelor', timp: '6 min', activitate: pasi(
        'Ex. 2, individual: substantivele potrivite cu impresia lăsată de personaje; câțiva își citesc alegerile, cu motivare.',
        'Ex. 3: sensul cuvântului „tovarășă” atunci și azi, cu DEX-ul; caseta „Istoria cuvintelor”.') },
      { etapa: 'Notițe: tipurile de personaje', timp: '6 min', activitate: pasi(
        'În caiete, după Repere: principal, secundar, episodic; personajul colectiv; trăsături numite sau deduse (din fapte, vorbe, îmbrăcăminte).',
        'Ex. 4-5, în perechi: secvențele în care grupul de elevi se comportă ca un singur personaj; un episod în care naratorul e în grup și unul în care e exclus.') },
      { etapa: 'Aplicații, ex. 1-8', timp: '10 min', activitate: pasi(
        'Frontal: participant sau martor; trăsăturile grupului din pasaje; Puică (o trăsătură numită, una dedusă); expresia „a tremura din toate încheieturile”.',
        'În perechi: trăsăturile fizice și morale ale Petruței (ex. 5-6); uniforma ei (ex. 7); de ce o numește naratorul „săraca” (ex. 8).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: textul „Colega nouă” (scris pentru fișă), ex. 2 (rolul personajului) și ex. 3 (trăsături deduse), individual, 9 minute.',
        'Verificare, 4 minute; discutăm cum recunoaștem personajul colectiv.') },
      { etapa: 'Temă', timp: '7 min', activitate: pasi(
        'Discutăm „Provocări”, ex. 1: trăiește băiatul o situație de bullying? Cum ați proceda voi? (câteva păreri, fără judecăți de persoane).',
        'Tema: Aplicații, ex. 9-11; „Provocări”, ex. 2, în scris; fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea jocului de rol; fișa lecției; fișa de exerciții, ex. 2-3.',
  },
  'lectia-6': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează o opinie argumentată despre semnificația textului Oracolul de Mircea Cărtărescu.'],
    resurse: ['Manual Art 6, pp. 54-55', fisa(6), 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-6/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi-trei elevi citesc ce ar fi făcut în locul colegilor băiatului; discutăm pe scurt despre bullying.') },
      { etapa: 'Interpretare, ex. 1-5', timp: '10 min', activitate: pasi(
        'Frontal: e diferit băiatul la început? Cum se poartă colegii după pată? Prin ce se distinge Petruța (fizic, îmbrăcăminte, familie)?',
        'Ex. 4, în perechi: seamănă băiatul cu Petruța în felul în care îi privesc ceilalți? Ex. 5: de ce se gândește la Petruța, nu la Lili?') },
      { etapa: 'Titlul: trei oracole', timp: '10 min', activitate: pasi(
        'Ex. 6-7: imaginile de la p. 54 (templul din Delphi, Bocca della Verità, caietul-oracol); trei elevi citesc fragmentele; ce le leagă?',
        'Ex. 8-9: la ce apelau oamenii în Antichitate, ce practică a rămas azi, de ce aveau copiii caiete-oracol.') },
      { etapa: 'Interpretare, ex. 10-12', timp: '7 min', activitate: pasi(
        'De ce se așază Petruța lângă băiat? Poate ghici viitorul? Cum explicați dispariția petei? Primesc orice răspuns argumentat din text.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (de acord sau nu?) și ex. 2 (ce poate însemna?), individual, 8 minute.',
        'Citim câteva interpretări, 4 minute; cer argumentul din text pentru fiecare.') },
      { etapa: 'Provocări și autoevaluare', timp: '4 min', activitate: pasi(
        '„Provocări”, ex. 4: un substantiv pentru relația dintre băiat și Petruța, spus de fiecare pe rând.',
        'Autoevaluare L1-L5, p. 55: elevii completează cele trei afirmații.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Provocări”, ex. 1 (cinci întrebări ale Petruței) și ex. 5 (Sibilele); fișa lecției; fișa de exerciții, pagina 2. Opțional, „Portofoliu”: posterul despre Oracolele Sibiline.') },
    ],
    evaluare: 'Observarea discuției; fișa lecției; fișa de exerciții, ex. 1-2; autoevaluarea L1-L5.',
  },
  'lectia-7': {
    titlu: 'Text auxiliar. Micul Nicolas de René Goscinny, ilustrații de Jean-Jacques Sempé',
    data: null,
    tipOra: 'Lectură, text auxiliar',
    durata: 50,
    obiective: ['Compară textul auxiliar Micul Nicolas cu textul de bază al unității și formulează sugestii de lectură.'],
    resurse: ['Manual Art 6, pp. 56-57', fisa(7), 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-7/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'O întâmplare amuzantă cu un coleg nou (sau când ați fost voi cei noi). Privim desenul de la p. 56: ce credeți că se va întâmpla?') },
      { etapa: 'Lectura', timp: '10 min', activitate: pasi(
        'Citesc fragmentul cu voce tare; elevii urmăresc.',
        'Ex. 1: fiecare notează două comentarii despre comportamentul copiilor și le confruntă cu colegul de bancă.') },
      { etapa: 'Discutarea textului, ex. 2-6', timp: '10 min', activitate: pasi(
        'Ex. 2: întrebări după organizator (cine?, cum?, când?, ce?), schimb de caiete.',
        'Ex. 3: ideile principale, formulate individual, verificate frontal.',
        'Ex. 4-6: prin ce se deosebește George, personajul cel mai simpatic și cel mai antipatic, de ce îl crede Aristide norocos.') },
      { etapa: 'Discutarea textului, ex. 7-10', timp: '8 min', activitate: pasi(
        'Ce au în comun cele două texte (variantele de la ex. 7, orice răspuns justificat); câte un cuvânt pentru Nicolas, Aristide, Achim, George; afirmația lui Achim; comportamentul cel mai condamnabil.',
        'Le reamintesc formulele de opinie (după părerea mea...) și de motivare (deoarece...).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine spune sau face?) și ex. 2 (adevărat sau fals?), individual, 8 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Biblioteci deschise', timp: '3 min', activitate: pasi(
        'Prezint „Val și Cetatea Sufletelor” de Ana Alfianu și „Magee, zis Maniacul” de Jerry Spinelli; elevii spun pe care ar citi-o și de ce.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Portofoliu”, poreclele amuzante pentru personajele desenate de Sempé (pe grupe, până ora viitoare); impresia despre text, 10-15 rânduri; fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea discuției; fișa lecției; fișa de exerciții, ex. 1-2.',
  },
  'lectia-8': {
    titlu: 'Valori ale culturii populare în spațiul românesc. Etnii și jocuri de copii',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Recunoaște similitudini între jocurile de copii din diverse comunități etnice din spațiul românesc.'],
    resurse: ['Manual Art 6, pp. 58-59', fisa(8), 'Infograficul „Etnii și jocuri de copii” (/materiale/clasa-6/unitatea-2/lectia-8/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Pentru început', timp: '6 min', activitate: pasi(
        'Ex. 1, frontal: aveți prieteni din altă comunitate etnică? Ce comunități sunt în clasa, în localitatea voastră?',
        'Ex. 2, în perechi: minoritățile din România și culorile lor pe harta de la p. 58 (maghiari, sârbi, tătari, ucraineni).') },
      { etapa: 'Slavici și colegii maghiari', timp: '6 min', activitate: pasi(
        'Explorare, ex. 1: elevii citesc fragmentul din „Lumea prin care am trecut” și notează ce îi leagă pe Slavici și pe Sima de colegii de bancă.') },
      { etapa: 'Jocurile din fotografii și din descrieri', timp: '10 min', activitate: pasi(
        'Ex. 2: fotografiile de la Muzeul Etnografic al Transilvaniei – ce joc vă e cunoscut?',
        'Ex. 3: citesc descrierile (Țuiul, Bújj, bújj, zöld ág, O podo baruno); elevii le asociază cu fotografiile și cu jocuri pe care le-au jucat.') },
      { etapa: 'Notițe: comunitatea etnică și jocul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere și infograficul lecției: comunitatea etnică, influențele culturale, jocul ca limbaj universal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (trei jocuri, trei comunități) și ex. 2 (poarta și podul), individual, 8 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Provocări: un joc fără cuvinte', timp: '10 min', activitate: pasi(
        'Grupe de 4-6 (după locul din bănci) inventează un joc care se poate juca fără cuvinte, cu 4-6 reguli și desene, pe o coală.',
        'Câte un elev prezintă jocul; alegem prin vot cel mai reușit.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-3 (jocuri fără cuvinte, titlurile tablourilor, joaca cu un copil necunoscut); „Portofoliu”, planșa despre un joc în culturi diferite; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Jocurile inventate, prezentate și votate; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Prezentarea proiectului „Prietenia în filme”',
    data: null,
    tipOra: 'Proiect, prezentare și evaluare',
    durata: 50,
    obiective: ['Prezintă și evaluează, pe grupe, proiectul Prietenia în filme, conform criteriilor stabilite.'],
    resurse: ['Manual Art 6, p. 61, criteriile de evaluare', 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-9/fisa.pdf)', 'Produsele grupelor, postere sau prezentări'],
    desfasurare: [
      { etapa: 'Pregătirea', timp: '5 min', activitate: pasi(
        'Tragem la sorți ordinea grupelor; grupele își pregătesc posterele sau prezentările.',
        'Distribui fișele de observare: fiecare grupă care ascultă urmărește câte un coleg din grupa care prezintă (criteriile de la p. 61).') },
      { etapa: 'Prezentările', timp: '35 min', activitate: pasi(
        'Fiecare grupă are 3-5 minute: arborele lui Sapiro pe filmul „Cântecul”, cu toți membrii la cuvânt; grupa care a avut prezentarea generală a filmului începe.',
        'După fiecare prezentare: o întrebare din public și completarea fișelor de observare (1 minut).') },
      { etapa: 'Evaluarea', timp: '7 min', activitate: pasi(
        'Toți completează scara de clasificare („Ai participat cu plăcere?”); un elev centralizează răspunsurile pe lista de control.',
        'Spun ce a reușit fiecare grupă și ce se poate îmbunătăți.') },
      { etapa: 'Reflecție', timp: '3 min', activitate: pasi(
        'Ce ați aflat din film despre prietenie și despre colegi? Două-trei răspunsuri.') },
    ],
    evaluare: 'Evaluare sumativă a proiectului, pe criteriile de la p. 61; interevaluare și autoevaluare prin scara de clasificare.',
  },
  'lectia-10': {
    titlu: 'Rezumatul oral (I), formularea ideilor',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Formulează oral ideile principale ale unei succesiuni de întâmplări, respectând regulile rezumatului.'],
    resurse: ['Manual Art 6, pp. 62-63', fisa(10), 'Quizul „Rezumatul oral, regulile” (materialul de joc al lecției)', 'Scurtmetrajul Un mic ajutor de la un prieten, dacă e disponibil la clasă'],
    desfasurare: [
      { etapa: 'Pentru început: ziua de ieri, mimată', timp: '8 min', activitate: pasi(
        'Un minut de gândit la momentele importante ale zilei de ieri; voluntarii le mimează în 1-2 minute, clasa ghicește.') },
      { etapa: 'Imaginile, în perechi', timp: '12 min', activitate: pasi(
        'Explorare, ex. 1: la p. 62, unul formulează ideea imaginii, celălalt pune o întrebare de clarificare, apoi schimbă rolurile.',
        'Cel puțin șase elevi prezintă ideile în ordine, legate între ele; urmărim scurtmetrajul, dacă e disponibil.') },
      { etapa: 'Ex. 2-3', timp: '4 min', activitate: pasi(
        'Ce a fost mai ușor: mimul sau ideile spuse oral? Ce cuvinte ați folosit ca să legați ideile? Fac lista pe tablă.') },
      { etapa: 'Notițe: rezumatul oral', timp: '5 min', activitate: pasi(
        'În caiete, după Repere: ce este rezumatul și cele cinci reguli (ideile principale, ordinea, prezentul sau perfectul compus, fără comentarii, dialog, citate, cuvintele de legătură).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce nu merge în rezumat?) și ex. 2 (cuvinte de legătură), individual, 8 minute.',
        'Verificare, 4 minute; pentru fiecare fragment, spunem regula.') },
      { etapa: 'Quiz', timp: '6 min', activitate: pasi(
        'Quizul „Rezumatul oral, regulile”, frontal; discutăm răspunsurile greșite.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1 (fișa „Ce este rezumatul?”, în caiet); fișa de exerciții, pagina 2 (rezumatul zilei, pregătit pentru a fi spus).') },
    ],
    evaluare: 'Observarea sistematică; quizul; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Rezumatul oral (II), rezumarea unui text și a unui film',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Rezumă oral, aplicat, un text și un scurtmetraj, folosind regulile învățate.'],
    resurse: ['Manual Art 6, p. 63', fisa(11), 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-11/fisa.pdf)', 'Scurtmetrajul Lou (Pixar, 2017), dacă e disponibil la clasă'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '5 min', activitate: pasi(
        'Doi elevi spun rezumatul zilei lor; clasa verifică regulile cu lista din caiet.') },
      { etapa: 'Rezumatul fragmentului din „Oracolul”', timp: '13 min', activitate: pasi(
        'Aplicații, ex. 2, în perechi: recitesc fragmentul cu oracolul de la p. 63 și îl rezumă oral pe rând; ascultătorul evaluează pe grila Da/Nu.',
        'Doi elevi rezumă în fața clasei; le dau feedback pe fiecare criteriu.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: textul „Fluierul” (scris pentru fișă) și ex. 2 (schema Cine, Scop, Dar, Atunci, Așa că), individual, 8 minute.',
        'Verificare, 4 minute; arăt cum schema devine un rezumat în cinci propoziții.') },
      { etapa: 'Provocări: scurtmetrajul „Lou”', timp: '17 min', activitate: pasi(
        'Urmărim scurtmetrajul (circa 7 minute), cu fișa lecției în față.',
        'Un minut de gândire după schemă; câțiva elevi prezintă rezumatul oral; clasa verifică regulile.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2 (schema pentru „Capra cu trei iezi” și rezumatul „Fluierului”, pregătit pentru a fi spus).') },
    ],
    evaluare: 'Interevaluare pe grila de la p. 63; observarea rezumatelor orale; fișa de exerciții, ex. 2.',
  },
  'lectia-12': {
    titlu: 'Verbul (actualizare), tipuri și categorii gramaticale',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Diferențiază verbele predicative de verbele auxiliare, recapitulare din clasa a V-a.'],
    resurse: ['Manual Art 6, pp. 64-65', fisa(12), 'Schema „Verbul. Felul verbelor. Indicativul” (/materiale/clasa-6/unitatea-2/lectia-12/schema.svg)', 'Cretă colorată'],
    desfasurare: [
      { etapa: 'Graffiti', timp: '6 min', activitate: pasi(
        '„Pentru început”, p. 64, ex. 1: toți elevii scriu în același timp pe tablă cuvinte care arată ce face Petruța; păstrez pe tablă doar verbele.',
        'Ex. 2: ce parte de vorbire sunt? Scriu definiția verbului.') },
      { etapa: 'Rețeta pentru note mari', timp: '10 min', activitate: pasi(
        'Explorare, ex. 1-4: un elev citește rețeta; găsim verbele și funcția lor, auxiliarele și timpurile pe care le formează, apoi locurile unde aceleași verbe sunt predicative.') },
      { etapa: 'Notițe: felul verbelor', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: verbe predicative și nepredicative; auxiliarele a avea, a vrea, a fi, cu exemple; funcția sintactică.') },
      { etapa: 'Modurile și prezentul', timp: '8 min', activitate: pasi(
        'Explorare (p. 64 jos), ex. 1-3: modurile verbelor din rețetă, timpul celor la indicativ, desinențele și sunetele de prezent (aflăm, ascultați, aud...).',
        'Notăm Reperele despre mod, indicativ și prezent.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: scrisoarea lui Ștefan (scrisă pentru fișă), ex. 2 (predicativ sau auxiliar?) și ex. 3 (modul și timpul), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Normă și abatere', timp: '4 min', activitate: pasi(
        'Explorare, p. 65, ex. 4: formele pe care „vrăjitoarea” le face să dispară; le explicăm cu DOOM-ul la îndemână.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-3 (p. 67); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 2-3.',
  },
  'lectia-13': {
    titlu: 'Verbul (actualizare), flexiunea verbală',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște formele modului indicativ, timpul trecut (imperfect, perfect compus, perfect simplu, mai-mult-ca-perfect).'],
    resurse: ['Manual Art 6, pp. 65-67', fisa(13), 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-13/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Aplicații, ex. 2-3: citim formele corecte și enunțurile construite cu cealaltă formă.') },
      { etapa: 'Cele patru trecuturi', timp: '12 min', activitate: pasi(
        'Explorare, p. 65, ex. 5-7: grupăm verbele în cutiile timpurilor, alcătuirea perfectului compus, desinențele și sunetele de timp.',
        'Notăm tabelul de la p. 66 (imperfect, perfect compus, perfect simplu, mai-mult-ca-perfect), cu greșelile frecvente la persoana a II-a singular și la plural.') },
      { etapa: 'Normă și abatere', timp: '4 min', activitate: pasi(
        'Ex. 8: enunțurile corecte și greșelile din celelalte, explicate.') },
      { etapa: 'Viitorul și imperativul', timp: '10 min', activitate: pasi(
        'Ex. 9-12: viitorul de limbă scrisă și de limbă vorbită, viitorul popular, viitorul anterior, viitorul în trecut; notăm Reperele.',
        'Ex. 13-14: imperativul din rețetă și imperativul negativ; infinitivul și participiul.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (care trecut?) și ex. 2 (corectează), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Trifoiul norocos', timp: '5 min', activitate: pasi(
        'Aplicații, ex. 4, în grupe de patru: verbele pe frunzele timpurilor; câștigă grupa care termină prima corect.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 5-10; „Provocări” (reporterul de la emisiunea de cultivare a limbii); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea jocului; fișa lecției; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Modul conjunctiv',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște modul conjunctiv și îl folosește pentru a exprima acțiuni posibile, realizabile.'],
    resurse: ['Manual Art 6, pp. 68-69', fisa(14), 'Schema „Modul conjunctiv” (/materiale/clasa-6/unitatea-2/lectia-14/schema.svg)', 'Bilețele și un panou'],
    desfasurare: [
      { etapa: 'Toamna, cu prietenii', timp: '5 min', activitate: pasi(
        'Explorare, p. 68, ex. 1: fiecare continuă pe un bilețel „Într-o zi ploioasă de toamnă, împreună cu prietenii mei pot să...” și îl prinde pe panou; citim câteva.') },
      { etapa: 'Ce arată conjunctivul', timp: '8 min', activitate: pasi(
        'Ex. 2-4: textul despre fotbal – acțiuni sigure sau posibile, elementul comun al verbelor colorate, funcția lor.',
        'Ex. 5: formele fără „să” din limba vorbită.',
        'Notăm Reperele: acțiune posibilă, marca „să”, predicat verbal.') },
      { etapa: 'Timpurile conjunctivului', timp: '12 min', activitate: pasi(
        'Explorare, ex. 1-3: când se desfășoară acțiunea; conjugarea la prezent (culorile desinențelor și ale sunetelor de conjunctiv, persoana a III-a); perfectul, la fel la toate persoanele.',
        'Ex. 4-5: forma negativă; locul lui cam, mai, tot.',
        'În caiete, după schema lecției: prezentul și perfectul, alcătuirea lor, forma negativă, topica.') },
      { etapa: 'Umbreluța', timp: '6 min', activitate: pasi(
        'Aplicații, ex. 1, în perechi: grupează enunțurile după timpul conjunctivului; verificăm frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (prezent sau perfect?) și ex. 2 (conjugarea verbelor „a scrie”, „a lucra”, „a vedea”), individual, 10 minute.',
        'Verificare, 4 minute; atenție la persoana a III-a.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-3 (topica și analiza verbelor din fragmentul de Cleopatra Lorințiu, după model); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea lucrului în perechi; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Modul condițional-optativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște modul condițional-optativ și îl folosește pentru a exprima acțiuni condiționate.'],
    resurse: ['Manual Art 6, pp. 70-71', fisa(15), 'Schema „Modul condițional-optativ” (/materiale/clasa-6/unitatea-2/lectia-15/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Frunza și norul', timp: '7 min', activitate: pasi(
        'Explorare, p. 70, ex. 1-2, în perechi: completează „Aș vrea / N-aș vrea să fiu o frunză / un nor, pentru că...”, dau un titlu textului; un elev îl prezintă.',
        'Ex. 3-4: ce arată „aș vrea”? Ce arată verbele din enunțul cu jocul Dixit?') },
      { etapa: 'Timpurile', timp: '12 min', activitate: pasi(
        'Explorare, ex. 1-3: când se desfășoară acțiunea; tabelele A și B – auxiliarele a avea și a fi, infinitivul și participiul.',
        'Ex. 4-5: forma negativă și funcția sintactică.',
        'În caiete, după Repere și schema lecției: definiția, prezentul și perfectul, forma negativă.') },
      { etapa: 'Limbă vorbită și normă', timp: '6 min', activitate: pasi(
        'Ex. 6: formele inverse din vorbirea afectivă; ex. 7: corectăm topica lui mai, cam, tot; notăm regula.') },
      { etapa: 'Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'În perechi: clasificăm verbele după timp; verificăm frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (timp și formă) și ex. 2 (conjugarea verbului „a învăța”), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Cărticica ortogramelor (anunțare)', timp: '4 min', activitate: pasi(
        '„Provocări”: formez grupele de patru; fiecare elev alege două perechi de ortograme (c-ai/cai, n-aș/naș, s-ar/sar, v-ar/var...) pentru pagina lui; termen: o săptămână.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-3 (modurile din fragmentul „Oracolului”, analiza verbelor din textul Laurei Grünberg); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2; cărticica ortogramelor, la portofoliu.',
  },
  'lectia-16': {
    titlu: 'Posibilități combinatorii ale verbului. Predicatul nominal',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște verbul copulativ a fi și identifică numele predicativ, în structura predicatului nominal.'],
    resurse: ['Manual Art 6, pp. 72-73', fisa(16), 'Schema „Verbul copulativ a fi. Predicatul nominal” (/materiale/clasa-6/unitatea-2/lectia-16/schema.svg)', 'Un săculeț cu un obiect ascuns'],
    desfasurare: [
      { etapa: 'Obiectul misterios', timp: '6 min', activitate: pasi(
        'Explorare, p. 72, ex. 1: un elev pipăie obiectul din săculeț și răspunde la „Este ușor? Este rece?”; clasa are trei încercări. Scriu pe tablă două răspunsuri ale lui („Este moale.”).') },
      { etapa: 'Verbul copulativ', timp: '7 min', activitate: pasi(
        'Ex. 2-4: „Dan este elev.”, „El este inteligent.” – putem scoate cuvântul de după „a fi”? E predicativ sau nu?',
        'Notăm Reperele: verbul copulativ.') },
      { etapa: 'Predicatul nominal', timp: '10 min', activitate: pasi(
        'Explorare, ex. 1-4: predicatele din enunțuri, modul și timpul lui „a fi”, părțile de vorbire cerute, cu câte cuvinte se grupează.',
        'În caiete, după schema lecției: predicat nominal = verb copulativ + nume predicativ; numele predicativ simplu și multiplu, prin substantiv sau adjectiv.') },
      { etapa: 'Acordul și cele trei valori ale lui „a fi”', timp: '6 min', activitate: pasi(
        'Explorare, p. 73, ex. 1-2: cui se subordonează numele predicativ; felul lui „a fi”.',
        'Notăm: relația ternară, acordul cu subiectul, „a fi” copulativ, predicativ, auxiliar.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Predicatele nominale din enunțuri și grila cu inițialele numelor predicative; cine descoperă primul cuvântul?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce fel de „a fi”?) și ex. 2 (numele predicativ), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Provocări și temă', timp: '4 min', activitate: pasi(
        'Doi-trei elevi spun o definiție amuzantă a prieteniei, cu predicat nominal.',
        'Tema: Aplicații, ex. 3-5; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; definițiile cu predicat nominal; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Subiectul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Diferențiază subiectul exprimat de subiectul neexprimat și recunoaște subiectul simplu și multiplu.'],
    resurse: ['Manual Art 6, pp. 74-75', fisa(17), 'Schema „Subiectul” (/materiale/clasa-6/unitatea-2/lectia-17/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Joc: Cine aleargă? Cine este blând?', timp: '6 min', activitate: pasi(
        'Explorare, p. 74, ex. 1: șase grupe, patru minute, cât mai multe propoziții pentru fișa a sau b; numărăm propozițiile corecte.') },
      { etapa: 'Subiectul exprimat', timp: '8 min', activitate: pasi(
        'Ex. 2-5: ce sunt „aleargă” și „este blând”; ce sunt „copilul” și „pisoiul”; subiectul simplu și multiplu; prin ce părți de vorbire se exprimă.',
        'Le atrag atenția: întrebarea se pune predicatului. Notăm definiția și felurile, după schema lecției.') },
      { etapa: 'Subiectul neexprimat', timp: '8 min', activitate: pasi(
        'Explorare, ex. 1-5: propozițiile fără subiect exprimat, de ce lipsește, autorul acțiunii din „alergăm”, desinența care îl arată, propozițiile despre vreme.',
        'Ex. 6: greșeala din „Noi învățăm astăzi subiectul.”; notăm subiectul subînțeles, inclus, propozițiile fără subiect și când e firesc pronumele.') },
      { etapa: 'Acordul predicatului cu subiectul', timp: '5 min', activitate: pasi(
        'P. 75, ex. 1-2: acordul în persoană și număr; prioritatea persoanelor la subiectul multiplu; notăm Reperele.') },
      { etapa: 'Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Frontal: subiectele simple și multiple din textul despre Mihai și prin ce se exprimă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (felul subiectului) și ex. 2 (subînțeles sau inclus?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '7 min', activitate: pasi(
        'Aplicații, ex. 2, frontal, pe primul enunț, ca model.',
        'Tema: Aplicații, ex. 2-3; „Portofoliu” (car, minte, poartă, ca subiect și ca predicat); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea jocului; fișa de exerciții, ex. 1-2.',
  },
  'lectia-18': {
    titlu: 'Complementul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică complementul ca parte de propoziție care determină verbul și arată obiectul acțiunii.'],
    resurse: ['Manual Art 6, pp. 76-77', fisa(18), 'Schema „Complementul. Posibilitățile combinatorii ale verbului” (/materiale/clasa-6/unitatea-2/lectia-18/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Enunțuri spontane: pe cine ați întâlnit azi în drum spre școală? Cui ați vrea să faceți un cadou? Ce ați citit ieri? Scriu trei răspunsuri pe tablă.') },
      { etapa: 'Desenul de la p. 76', timp: '10 min', activitate: pasi(
        'Explorare, ex. 1: citim enunțurile și întrebările de sub desen; care arată împrejurări? Elevii notează întrebările în caiet.',
        'Ex. 2-3: întrebări pentru părțile nemarcate; prin ce se exprimă părțile secundare.') },
      { etapa: 'Notițe: complementul', timp: '6 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: complementul determină verbul; întrebările (pe cine? ce? cui? la cine? la ce? despre ce? după cine?); exprimat prin substantiv sau pronume, cu sau fără prepoziție.',
        'Revenim la enunțurile de pe tablă și subliniem complementele.') },
      { etapa: 'Posibilitățile combinatorii', timp: '7 min', activitate: pasi(
        'P. 77, Explorare, ex. 1-2: felul predicatelor și al subiectelor, apoi complementele din textul despre clopoțel; notăm verbul ca centru (Repere, p. 77).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (găsește complementul) și ex. 2 (completează cu un complement), individual, 8 minute.',
        'Verificare, 4 minute; la fiecare complement, cer întrebarea.') },
      { etapa: 'Aplicații, ex. 1 (începutul)', timp: '6 min', activitate: pasi(
        'Primele două enunțuri din textul despre expoziția de desene, frontal: complementele și întrebările lor.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 1, terminat (doar complementele); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2.',
  },
  'lectia-19': {
    titlu: 'Circumstanțialul. Prepoziția',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică circumstanțialul ca parte de propoziție care arată împrejurările acțiunii și recunoaște rolul prepoziției.'],
    resurse: ['Manual Art 6, pp. 76-77', fisa(19), 'Schema „Circumstanțialul. Prepoziția” (/materiale/clasa-6/unitatea-2/lectia-19/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Complementele din textul despre expoziție, citite cu întrebările lor; ce părți au rămas nesubliniate?') },
      { etapa: 'Circumstanțialul', timp: '9 min', activitate: pasi(
        'Revenim la desenul de la p. 76: „În pauză, stăm în clasă.”, „Alex aleargă cu viteză pe lângă bănci.” – când?, unde?, cum?, pe unde?',
        'În caiete, după schema lecției: circumstanțialul arată împrejurările; întrebările lui; cum îl deosebim de complement (după întrebare).') },
      { etapa: 'Prepoziția', timp: '8 min', activitate: pasi(
        'Explorare, p. 76, ex. 1-2: prepozițiile de sub desen, simple sau compuse; înaintea cărei părți de propoziție stă „din”.',
        'Notăm Reperele: prepoziția simplă și compusă, cu sens sau fără sens, analizată împreună cu cuvântul următor.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '9 min', activitate: pasi(
        'Ex. 1: circumstanțialele din textul despre expoziție; ex. 2: funcția cuvântului „vacanță”; ex. 3: prepozițiile potrivite din tabloul băiatului, oral.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (complement sau circumstanțial?) și ex. 2 (prepozițiile), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Autoevaluare L9-L14', timp: '4 min', activitate: pasi(
        'P. 77: elevii completează cele trei afirmații; notez ce trebuie reluat înainte de recapitulare.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Provocări”, p. 77 (prepozițiile folosite greșit la televizor); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-2; autoevaluarea L9-L14.',
  },
  'lectia-20': {
    titlu: 'Rezumatul scris (I), identificarea secvențelor',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Identifică secvențele unui text narativ și formulează ideile principale, în vederea redactării unui rezumat.'],
    resurse: ['Manual Art 6, pp. 78-79', fisa(20), 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-20/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Pentru început', timp: '7 min', activitate: pasi(
        'P. 78: fiecare scrie un text de 5-6 rânduri cu păduchi, șampon, chel, gard, prieten, în această ordine, și îl citește colegului de bancă.') },
      { etapa: 'Fragmentul din „Băiatul cu pijamale în dungi”', timp: '10 min', activitate: pasi(
        'Prezint pe scurt romanul lui John Boyne (Bruno, fiul directorului unui lagăr nazist, și prietenul lui, Shmuel); citesc fragmentul.',
        'Explorare, ex. 1: o asemănare și o deosebire între textele lor și fragment.') },
      { etapa: 'Întrebări și conținut', timp: '9 min', activitate: pasi(
        'Ex. 2, în perechi: câte trei întrebări cu răspuns în text, puse colegului.',
        'Ex. 3: fișa conținutului (cadru, personaje, conflict, acțiune, rezolvare), completată în caiet după consultarea cu colegul.') },
      { etapa: 'Rezumatul oral și cel scris', timp: '4 min', activitate: pasi(
        'Ex. 4: recitim regulile de la p. 62; care se aplică și în scris? Notăm definiția rezumatului scris (Repere, p. 79).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: textul „Bicicleta roșie” (scris pentru fișă) și ex. 2 (conținutul textului), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Secvențele fragmentului', timp: '5 min', activitate: pasi(
        'Aplicații, ex. 2 (p. 79), în perechi: încep împărțirea fragmentului din manual în secvențe, cu cuvintele-cheie.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2, terminat (ideile principale ale fragmentului); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea lucrului în perechi; fișa lecției; fișa de exerciții, ex. 2.',
  },
  'lectia-21': {
    titlu: 'Rezumatul scris (II), redactarea rezumatului',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează un rezumat scris pornind de la ideile principale identificate.'],
    resurse: ['Manual Art 6, p. 79, grila de evaluare', fisa(21), 'Fișa lecției (/materiale/clasa-6/unitatea-2/lectia-21/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cele două rezumate', timp: '5 min', activitate: pasi(
        'Aplicații, ex. 1: care secvență de rezumat e corectă? Două abateri din cealaltă.') },
      { etapa: 'Ce eliminăm', timp: '5 min', activitate: pasi(
        'Ex. 3-4: care răspunsuri la întrebările de ora trecută nu intră în rezumat; cuvintele din listă care nu au ce căuta într-un rezumat și de ce.') },
      { etapa: 'Regulile și gerunziul', timp: '6 min', activitate: pasi(
        'Notăm cele cinci reguli din Repere, p. 79, și rolul gerunziului.',
        'Fișa de exerciții, ex. 2 (cu gerunziu), frontal.') },
      { etapa: 'Corectarea unui rezumat', timp: '5 min', activitate: pasi(
        'Fișa de exerciții, ex. 1 (corectează rezumatul), individual, apoi verificare.') },
      { etapa: 'Redactarea', timp: '20 min', activitate: pasi(
        'Ex. 5: fiecare redactează rezumatul fragmentului din „Băiatul cu pijamale în dungi”, pornind de la ideile principale din temă; planul pe fișa lecției.',
        'Trec pe la bănci; ajut la persoana a III-a și la cuvintele de legătură.') },
      { etapa: 'Interevaluarea', timp: '6 min', activitate: pasi(
        'Elevii își citesc rezumatele colegului de bancă și se evaluează pe grila de la p. 79.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: forma finală a rezumatului; fișa de exerciții, pagina 2. Opțional, „Portofoliu”: romanul, rezumatul lui și diagrama Venn roman–film.') },
    ],
    evaluare: 'Interevaluare pe grila de la p. 79; fișa de exerciții, ex. 1-2.',
  },
  'lectia-22': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, etapele acțiunii, rezumat oral.'],
    resurse: ['Manual Art 6, pp. 80-81', fisa(22), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '3 min', activitate: pasi(
        'Fiecare elev numește o noțiune de lectură sau de comunicare din unitate; le scriu pe tablă, într-un ciorchine.') },
      { etapa: 'Lectura textului', timp: '9 min', activitate: pasi(
        'P. 80: citesc proza scurtă „Ăsta este pentru Jamie” de Truman Capote; elevii urmăresc.') },
      { etapa: 'Ex. 1-8', timp: '8 min', activitate: pasi(
        'Frontal: momentul zilei și alt reper temporal; momentul povestirii; locul întâlnirilor; unde se joacă Jamie; cuvântul-cheie al primului paragraf; personajele pe categorii; persoana și naratorul.') },
      { etapa: 'Ex. 9-11', timp: '8 min', activitate: pasi(
        'Secvențele pe momentele subiectului și planul simplu de idei, în perechi; rezumatul oral spus colegului.') },
      { etapa: 'Ex. 12-14', timp: '4 min', activitate: pasi(
        'Trăsătura lui Teddy din replică; de ce ar fi vrut Jamie să-i dea câinele lui Teddy; relația dintre doi copii care nu se întâlnesc niciodată.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: textul „Cutia de scrisori” (scris pentru fișă) și ex. 2 (timp, spațiu, narator), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”; notez ce trebuie reluat.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; quizul; fișa de exerciții, ex. 2.',
  },
  'lectia-23': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile conjunctiv și condițional-optativ, predicatul nominal, subiectul, complementul, circumstanțialul.'],
    resurse: ['Manual Art 6, pp. 80-81', fisa(23), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '3 min', activitate: pasi(
        'Scriu pe tablă ultima propoziție a scrisorii din textul lui Capote; cine găsește primul modul și timpul fiecărui verb?') },
      { etapa: 'Ex. 15-18', timp: '8 min', activitate: pasi(
        'Pe textul de la p. 80: auxiliarele din „A venit pe alee...”; rolul cuvântului colorat; analiza verbelor; un enunț cu „a plăcea” la condițional-optativ prezent.') },
      { etapa: 'Ex. 19-23', timp: '9 min', activitate: pasi(
        'Felul predicatului din „parcul era proaspăt și verde”; un conjunctiv prezent din ultimul paragraf; predicatul și subiectul din „Era indian, detectiv...”; funcțiile din „Femeia a ridicat privirea.”; părțile secundare din „A tras câinele spre el.”') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: textul „Cutia de scrisori”, ex. 2 (verbele din text) și ex. 3 (predicat verbal sau nominal?), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pregătirea rezumatului', timp: '8 min', activitate: pasi(
        'Ex. 24: reamintim regulile rezumatului scris; fiecare își face planul pentru rezumatul textului lui Capote, pornind de la ideile de la ex. 10.') },
      { etapa: 'Quiz', timp: '6 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”; discutăm greșelile.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: ex. 24, rezumatul scris; fișa de exerciții, pagina 2. Anunț evaluarea: verbul și modurile, predicatul, subiectul, complementul, circumstanțialul, momentele subiectului, rezumatul.') },
    ],
    evaluare: 'Observarea sistematică; quizul; fișa de exerciții, ex. 2-3.',
  },
  'lectia-24': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.'],
    resurse: ['Testul, Manual Art 6, p. 82', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testele (fragment după Mircea Sântimbreanu, „Mărinimie”) și foile de răspuns.',
        'Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: modul și timpul, condițional-optativ, felul predicatului și al subiectului, funcții sintactice, naratorul, repere de timp și spațiu, idei principale pentru intrigă și punctul culminant, înțelegerea poantei, semnificația unei afirmații); B, 30 de puncte (rezumatul textului); 10 puncte din oficiu.',
        'Recomand circa 25 de minute pentru A, 15 minute pentru rezumat, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual, pe foaia separată; supraveghez discret.',
        'Anunț timpul rămas la 20 de minute și la 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii își recitesc lucrarea (persoana a III-a și timpurile din rezumat, ortografia, punctuația), apoi strâng foile.',
        'Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
