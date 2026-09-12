// Planuri de lecție detaliate, Unitatea IV „Cu noroc, fără noroc”, clasa a VII-a.
// Pași concreți pe rubricile și exercițiile din Manual Art 7, pp. 124-164, cu
// fișa de exerciții a lecției folosită la „Obținerea performanței”. Exercițiile
// din manual nerezolvate în clasă rămân temă. Fără răspunsuri (ghid sau fișă).
// 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-7/unitatea-4/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul narativ literar. Două loturi de I.L. Caragiale',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din nuvela Două loturi de I.L. Caragiale.'],
    resurse: ['Manual Art 7, pp. 124-129', fisa(1), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Noroc și ghinion, „Pentru început”, ex. 1-2', timp: '5 min', activitate: pasi(
        'Întreb: ești o persoană norocoasă? ce înseamnă a avea noroc, dar ghinion?',
        'Imaginile de la p. 124: ce superstiții cunosc elevii despre obiectele și ființele din ele.') },
      { etapa: 'Autorul și textul', timp: '3 min', activitate: pasi(
        'Caseta despre I.L. Caragiale de la p. 124; notăm că textul a apărut întâi sub titlul „Două bilete pierdute”.') },
      { etapa: 'Lectura model, ex. 3', timp: '15 min', activitate: pasi(
        'Citesc eu textul (pp. 124-129), cu pauze scurte la cuvintele din note (consoartă, lot, canțilerie, sardonic, impiegat, viceversa).',
        'Elevii urmăresc în manual și notează pe margine unde s-ar opri ca să ghicească urmarea.') },
      { etapa: 'Impresii după prima lectură, ex. 1', timp: '5 min', activitate: pasi(
        'Cadranele de la p. 129, în caiete, apoi schimb de impresii cu colegul de bancă; trei elevi citesc un cadran.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (informațiile esențiale) și ex. 2 (adevărat sau fals), individual, 8 minute.',
        'Verificare frontală, 4 minute; la răspunsurile greșite, căutăm pasajul în text.') },
      { etapa: 'Forme vechi, Impresii, ex. 2, oral', timp: '4 min', activitate: pasi(
        'Primele cinci cuvinte din listă, cu forma literară de azi; de ce le păstrează autorul.') },
      { etapa: 'Loteria în DEX, ex. 3', timp: '3 min', activitate: pasi(
        'Citim definiția; câte un enunț oral pentru sensul propriu și pentru cel figurat.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Impresii după prima lectură, ex. 2 (restul cuvintelor) și ex. 3, în scris; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Spațiul, timpul, acțiunea',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică coordonatele spațiale și temporale ale acțiunii, ordonează cronologic evenimentele și descoperă semnificațiile simbolice ale unor toponime.'],
    resurse: ['Manual Art 7, pp. 130-131', fisa(2), 'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-2/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Imaginile și spațiile, Explorare, ex. 1', timp: '5 min', activitate: pasi(
        'Asociem imaginile A-F de la p. 130 cu locurile din text; elevii spun ce se întâmplă în fiecare.') },
      { etapa: 'Orașul și epoca, ex. 2-3', timp: '5 min', activitate: pasi(
        'Recitim cu voce tare fragmentele din care aflăm locul și timpul; scopul celor două loterii și alte amănunte de epocă.') },
      { etapa: 'Ordinea momentelor, ex. 4-6', timp: '7 min', activitate: pasi(
        'Ce moment al subiectului deschide textul și unde ar fi, în mod normal; de ce l-a ales naratorul la început; reconstituim oral situația inițială.') },
      { etapa: 'În perechi, ex. 7-8', timp: '5 min', activitate: pasi(
        'Delimitarea celorlalte momente ale subiectului și verificarea cronologiei; variantele de final oferite de narator.') },
      { etapa: 'Notițe: spațiul, timpul, modalitățile de narare', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 130): indicii de timp și spațiu, iluzia realității, ordinea schimbată a momentelor, dialogul cu cititorul, finalurile multiple.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (locuri și întâmplări) și ex. 2 (indicii de timp), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Cât durează aventura, Aplicații, ex. 2', timp: '5 min', activitate: pasi(
        'Completăm pe tablă organizatorul grafic de la p. 131, cu reperele temporale din text.') },
      { etapa: 'Ar fi posibil azi? Explorare, ex. 9', timp: '3 min', activitate: pasi(
        'Discuție scurtă: întâmplarea e obișnuită sau nu?') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 1 (numele de locuri) și ex. 3 (ordonarea evenimentelor); fișa lecției; fișa de exerciții, pagina 2.',
        'Opțional: Portofoliu, un alt sfârșit al întâmplărilor (minimum 150 de cuvinte).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Naratorul și personajele',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică tipul de narator și analizează trăsăturile, motivațiile și conflictele personajului principal.'],
    resurse: ['Manual Art 7, pp. 132-134', fisa(3), 'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-3/fisa.pdf)', 'Coli pentru grupe'],
    desfasurare: [
      { etapa: 'Naratorul, Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Persoana relatării; fragmentele în care naratorul comentează; cum stabilește contactul cu cititorul; rolul adresărilor, ales dintre variantele de la p. 132.') },
      { etapa: 'Personajul principal, ex. 5', timp: '2 min', activitate: pasi(
        'Cine este și ce argumente avem.') },
      { etapa: 'Pălăriile gânditoare, ex. 6', timp: '12 min', activitate: pasi(
        'Șase grupe, câte o pălărie; 7 minute de lucru pe coli.',
        'Raportorii prezintă, 5 minute; notez pe tablă ideile principale ale fiecărei pălării.') },
      { etapa: 'Celelalte personaje, ex. 7-8', timp: '4 min', activitate: pasi(
        'Completăm oral enunțurile a-b; care personaje sunt secundare și care episodice.') },
      { etapa: 'Notițe: naratorul și personajul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 133): autor, narator, destinatar fictiv; construcția personajului principal (date, mediu, relații, comportament, reacții, limbaj).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (vocea naratorului) și ex. 2 (personajele), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Mijloacele de caracterizare, ex. 12', timp: '5 min', activitate: pasi(
        'Fragmentele a-d: trăsătura și mijlocul de caracterizare, frontal.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: Explorare, ex. 9-11; Aplicații, ex. 1 (schema personajului), individual; fișa lecției; fișa de exerciții, pagina 2.',
        'Portofoliu: caracterizarea lui Lefter Popescu (minimum 150 de cuvinte), după schema de la Aplicații; citesc cerințele împreună cu elevii.') },
    ],
    evaluare: 'Aprecieri pe prezentările grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează o opinie despre semnificația textului Două loturi și despre credința în noroc sau ghinion.'],
    resurse: ['Manual Art 7, p. 135', fisa(4), 'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cioburile și norocul, Interpretare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Legătura dintre farfuriile sparte și noroc; adversarul cel mai puternic al lui Lefter; fragmentele cu trimiteri la noroc.') },
      { etapa: 'Adresa și Fortuna, ex. 4-5', timp: '6 min', activitate: pasi(
        'De ce Strada Pacienței, la numărul 13; Fortuna oarbă și obiectele din imaginile a-d.') },
      { etapa: 'Ironia, ex. 6', timp: '7 min', activitate: pasi(
        'Fragmentele a-e: de ce sunt amuzante; notăm pe tablă procedeele (aluzie, exagerare, diminuare, contrast).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (procedeele ironiei, pe alte fragmente) și ex. 2 (ce poate sugera), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Gustul amar, ex. 7', timp: '4 min', activitate: pasi(
        'De ce lasă finalul un gust amar, sub aparența comică.') },
      { etapa: 'Afișul filmului, ex. 8', timp: '3 min', activitate: pasi(
        'Afișul „Două lozuri”: personajele desenate și genul de film anunțat.') },
      { etapa: 'Talismane și ghinion, ex. 9', timp: '8 min', activitate: pasi(
        'Grupe de 5-6, câte o întrebare (a, b, c), 5 minute; raportorii, 3 minute.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: pregătirea dezbaterii de la ex. 10, pe baza fișei de exerciții, ex. 3 (argumente pentru și împotrivă); fișa de exerciții, ex. 4; fișa lecției.') },
    ],
    evaluare: 'Aprecieri pe raportările grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Textul multimodal (actualizare). Enciclopedia (I)',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Colectează informații din diverse surse și recunoaște trăsăturile textului multimodal, pe baza textului Porțelanul, după Stacey Pierson.'],
    resurse: ['Manual Art 7, pp. 136-138', fisa(5), 'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-5/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'China și porțelanul, „Pentru început”, ex. 1', timp: '3 min', activitate: pasi(
        'De ce în engleză porțelanul se numește „china”; alte nume proprii devenite nume de produse.') },
      { etapa: 'Știu / Vreau să știu, ex. 2', timp: '5 min', activitate: pasi(
        'Grupe de 4-5: primele două coloane ale tabelului, în caiete.') },
      { etapa: 'Wikipedia, ex. 3', timp: '3 min', activitate: pasi(
        'Sunt complete informațiile din articolul online? Unde am mai căuta?') },
      { etapa: 'Lectura articolului, ex. 4', timp: '8 min', activitate: pasi(
        'Citim articolul de la pp. 136-137, cu notele de subsol; grupele completează a treia coloană.') },
      { etapa: 'Aspectele și receptorul, Explorare, ex. 1-2', timp: '4 min', activitate: pasi(
        'Principalele aspecte și cum le-am găsit (subtitlurile); cui i se adresează textul.') },
      { etapa: 'Explorare, ex. 4-7', timp: '6 min', activitate: pasi(
        'Porțelanul „fără trup”; cuvântul „chinezării”; categoria textului; relația dintre text și imagini.') },
      { etapa: 'Notițe: enciclopedia și textul multimodal', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 138): enciclopedie generală și tematică, textul enciclopedic multimodal, modurile de expresie în enciclopediile online.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (adevărat sau fals) și ex. 2 (organizarea articolului), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Impresii după prima lectură, ex. 1-2', timp: '3 min', activitate: pasi(
        'A fost dificil textul? De ce? Cum căutăm informații despre un subiect nou?') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Explorare, ex. 3 și ex. 8-11; fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Textul multimodal (actualizare). Enciclopedia (II)',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Recunoaște trăsăturile textului enciclopedic și redactează un scurt text enciclopedic.'],
    resurse: ['Manual Art 7, pp. 138-139', fisa(6), 'Infograficul „Textul multimodal. Enciclopedia” (/materiale/clasa-7/unitatea-4/lectia-6/infografic.svg)', 'Un dicționar explicativ'],
    desfasurare: [
      { etapa: 'Enciclopedia tipărită și cea online, Explorare, ex. 8-11', timp: '8 min', activitate: pasi(
        'Verificăm tema: autorul, termenii de specialitate, sursele, încrederea; rolul hiperlinkurilor; de ce articolul de pe Wikipedia nu e semnat; ce enciclopedii cunosc elevii.') },
      { etapa: 'Notițe: sursele și citarea', timp: '6 min', activitate: pasi(
        'Proiectez infograficul; în caiete, după Repere (p. 139): trimiterile la surse, Wikipedia și verificarea informațiilor, regulile citării în notele de subsol.') },
      { etapa: 'Dicționar și enciclopedie, Aplicații, ex. 1-2', timp: '7 min', activitate: pasi(
        'Tipul enciclopediei din care e extras textul; căutăm „porțelan” în dicționar și comparăm cu articolul (spațiu, informație, organizare, moduri de expresie).') },
      { etapa: 'Ceramică și porțelan; succesul enciclopediilor, ex. 3-4', timp: '4 min', activitate: pasi(
        'Diferența dintre ceramică și porțelan; motivul succesului enciclopediilor, ales și argumentat.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (dicționar sau enciclopedie?) și ex. 2 (citarea sursei), individual, 8 minute.',
        'Verificare, 4 minute; scriu pe tablă nota de subsol corectă.') },
      { etapa: 'Articolul meu, fișa, ex. 4', timp: '7 min', activitate: pasi(
        'Elevii aleg obiectul artizanal, scriu titlul, cele două subtitluri și primele rânduri.') },
      { etapa: 'Autoevaluare L1-L5', timp: '3 min', activitate: pasi(
        'Cele trei enunțuri de la p. 139, în caiete.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 5-6; fișa de exerciții, ex. 3 și finalizarea ex. 4.',
        'Anunț miniproiectul de la Portofoliu (articol enciclopedic în grup) și, opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea L1-L5.',
  },
  'lectia-7': {
    titlu: 'Text auxiliar. Cerșetorul și regele (poveste populară indiană)',
    data: null,
    tipOra: 'Lectură, text auxiliar',
    durata: 50,
    obiective: ['Interpretează povestea populară Cerșetorul și regele și compară cele două texte-suport ale unității.'],
    resurse: ['Manual Art 7, pp. 140-141', fisa(7), 'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-7/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Introducerea de la p. 140', timp: '3 min', activitate: pasi(
        'Citim întrebările despre noroc și hazard; elevii răspund pe scurt.') },
      { etapa: 'Lectura', timp: '5 min', activitate: pasi(
        'Un elev citește povestea; clarificăm cuvintele necunoscute.') },
      { etapa: 'Discutarea textului, ex. 1-4', timp: '6 min', activitate: pasi(
        'Titlul, tipul textului, zona culturală; locul și timpul; personajele; naratorul, ales dintre variantele a-c.') },
      { etapa: 'Discutarea textului, ex. 5-8', timp: '6 min', activitate: pasi(
        'Simțurile implicate; sentimentele stârnite; ar fi primit mai mult aur?; semnificația indicilor vagi de timp și spațiu.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ordinea întâmplărilor) și ex. 2 (cele două texte, față în față), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Figuri de stil și trăsături, ex. 11-12', timp: '6 min', activitate: pasi(
        'Două figuri de stil și rolul lor; trăsăturile cerșetorului, cu pasajele și mijlocul de caracterizare.') },
      { etapa: 'Interpretare, ex. 13-15', timp: '8 min', activitate: pasi(
        'Părerea elevilor despre afirmația naratorului de la începutul textului; ghinionist sau norocos; de ce regele e cel care cere.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: ex. 9-10 și ex. 16 (asemănare și deosebire față de „Două loturi”, aproximativ 150 de cuvinte); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-8': {
    titlu: 'Elemente de mitologie românească: Baba-Dochia și tradiția mărțișorului',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Descoperă legăturile dintre tradițiile legate de Baba-Dochia și mărțișor și identifică simboluri asociate mărțișorului.'],
    resurse: ['Manual Art 7, pp. 142-143', fisa(8), 'Infograficul „Baba-Dochia și tradiția mărțișorului” (/materiale/clasa-7/unitatea-4/lectia-8/infografic.svg)'],
    desfasurare: [
      { etapa: 'Mărțișorul, „Pentru început”, ex. 1-2', timp: '5 min', activitate: pasi(
        'Cum s-a format cuvântul (verificăm în DEX); cine a primit sau a dăruit mărțișoare și ce semnifică gestul.') },
      { etapa: 'Lectura fragmentului', timp: '5 min', activitate: pasi(
        'Citim fragmentul adaptat după Ion Ghinoiu (p. 142), cu notele de subsol.') },
      { etapa: 'Explorare, ex. 1 a-g', timp: '8 min', activitate: pasi(
        'Răspunsuri în caiete, apoi frontal: cine primea mărțișorul, când, cât se purta, ce rol avea, culorile, legătura cu Dochia, unde e atestat obiceiul.') },
      { etapa: 'Obiceiuri locale, ex. 2', timp: '3 min', activitate: pasi(
        'Elevii povestesc obiceiurile de mărțișor din zona lor.') },
      { etapa: 'Notițe: mitologia românească', timp: '5 min', activitate: pasi(
        'Proiectez infograficul; în caiete, după Repere (p. 143): categoriile de făpturi, rolul protector al mărțișorului, Baba-Dochia ca timp vechi care se reînnoiește.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (adevărat sau fals) și ex. 2 (făpturi din mitologia românească), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '6 min', activitate: pasi(
        'Simbolurile mărțișorului-bijuterie; sărbătorile din text, cu dată fixă sau mobilă; asemănarea dintre ursitoare și Baba-Dochia.') },
      { etapa: 'Aplicații, ex. 4-6', timp: '4 min', activitate: pasi(
        'Cojoacele Dochiei; moneda din Republica Moldova; ce au în comun mărțișoarele din tabel.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Portofoliu, ex. 1 sau 2, la alegere; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Structura textului narativ oral',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Descoperă structura textului narativ oral, relatând oral o întâmplare pe baza unei imagini.'],
    resurse: ['Manual Art 7, p. 144', fisa(9), 'Quizul „Structura textului narativ oral” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: '„Pentru început”, ex. 1-2', timp: '5 min', activitate: pasi(
        'Doi elevi își prezintă prietenul imaginar din copilărie; alți doi povestesc succint o întâmplare stranie și ce au învățat din ea.') },
      { etapa: 'Fotografia, Explorare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Descriem imaginea de la p. 144: fetița, locul, amenințarea, ursulețul războinic, atmosfera; ce e real și ce e imaginar.') },
      { etapa: 'Povestea fetei, ex. 3', timp: '6 min', activitate: pasi(
        'Doi-trei elevi povestesc părinților, ca fata din fotografie, urmând punctele a-e.') },
      { etapa: 'Notițe: structura narațiunii orale', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 144): împrejurările, desfășurarea, deznodământul, evaluarea; formulele de revenire în prezent.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (părțile narațiunii orale), individual, apoi verificare; ex. 2: fiecare își pregătește povestea norocoasă.') },
      { etapa: 'Aplicații, în perechi', timp: '10 min', activitate: pasi(
        'Perechile propun 2-3 situații pe tema unității; vorbitorul povestește, ascultătorul completează grila de pe fișă (ex. 3); schimbă rolurile.',
        'Două perechi spun ce au apreciat la povestea colegului.') },
      { etapa: 'Quizul', timp: '5 min', activitate: pasi(
        'Quizul „Structura textului narativ oral”, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 4; pregătirea orală a unei întâmplări pentru ora viitoare.') },
    ],
    evaluare: 'Interevaluare pe grila de ascultare; fișa de exerciții, ex. 1; rezultatele la quiz.',
  },
  'lectia-10': {
    titlu: 'Strategii de concepere și de comprehensiune a textului oral',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Descoperă strategiile de concepere și de comprehensiune a textului oral (repetarea, reformularea) și identifică sensul conectorilor.'],
    resurse: ['Manual Art 7, p. 145', fisa(10), 'Quizul „Strategii de legătură în textul oral” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Ilustrația, Explorare, ex. 1-4', timp: '6 min', activitate: pasi(
        'Citim bulele de dialog; asemănarea dintre cele două replici, rolul sinonimelor, grupul de cuvinte care le leagă și ce exprimă.') },
      { etapa: 'Notițe: repetare, reformulare, conectori', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (p. 145): repetarea cuvintelor și a structurilor; cele patru procedee de reformulare; conectorii și ce exprimă, cu câte un exemplu.') },
      { etapa: 'Reformulare orală, Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Fiecare enunț, reformulat de doi elevi, prin procedee diferite.') },
      { etapa: 'Conectorii, ex. 2', timp: '3 min', activitate: pasi(
        'Ce exprimă conectorii din cele trei perechi de enunțuri.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (reformulează) și ex. 2 (ce exprimă conectorul), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Povestea în lanț, ex. 3', timp: '10 min', activitate: pasi(
        'Aleg o întâmplare cunoscută de toată clasa; fiecare elev continuă cu un conector și numește următorul povestitor.',
        'A doua serie reia povestea în alți termeni; clasa spune o asemănare și o diferență.') },
      { etapa: 'Quizul', timp: '5 min', activitate: pasi(
        'Quizul „Strategii de legătură în textul oral”, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-11': {
    titlu: 'Pronumele personal. Pronumele personal de politețe. Pronumele reflexiv',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează pronumele personal, pronumele personal de politețe și pronumele reflexiv și categoriile lor gramaticale.'],
    resurse: ['Manual Art 7, pp. 146-147', fisa(11), 'Schema „Pronumele personal, de politețe și reflexiv” (/materiale/clasa-7/unitatea-4/lectia-11/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cursul de mărțișoare, „Pentru început”', timp: '5 min', activitate: pasi(
        'Citim textul de la p. 146; elevii găsesc pronumele personale, de politețe și reflexive și substantivele pe care le înlocuiesc.') },
      { etapa: 'Pronumele personal, Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Persoana, numărul, cazul, funcția pronumelor găsite; substantivul înlocuit; formele neaccentuate; cliticul care anticipează sau reia.') },
      { etapa: 'Pronumele de politețe, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Pronumele de politețe din text; dumnealui, dumneaei; cuvintele care arată respectul.') },
      { etapa: 'Pronumele reflexiv, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Formele proprii și cele împrumutate; persoana, numărul, cazul; „îți confecționez” și „îți confecționezi”.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 146-147): categoriile pronumelui personal, cliticele și dublarea, pronumele de politețe și locuțiunile reverențioase, pronumele reflexiv (tabelul formelor, „Mă întreb” și „Mă întreabă”).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (pronumele personale) și ex. 2 (personal sau reflexiv?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Greșeli de scriere, Aplicații, ex. 3', timp: '3 min', activitate: pasi(
        'Corectăm frontal textul, explicând cratima.') },
      { etapa: 'Artizanul, Aplicații, ex. 4, oral', timp: '3 min', activitate: pasi(
        'Pronumele personale, de politețe și reflexive din dialog.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1 (analiza pronumelor din fragment) și ex. 2 (dialogul cu locuțiuni de politețe); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Pronumele și adjectivul pronominal posesiv',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă pronumele posesiv și adjectivul pronominal posesiv, formele, cazurile și funcțiile sintactice ale lor.'],
    resurse: ['Manual Art 7, pp. 148-149', fisa(12), 'Schema „Pronumele și adjectivul pronominal posesiv” (/materiale/clasa-7/unitatea-4/lectia-12/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Bulele de dialog, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Ce exprimă cuvintele colorate; ce substantiv înlocuiesc și la cine se referă; posesor și obiect posedat pentru cele patru exemple.') },
      { etapa: 'Funcțiile pronumelui posesiv, în perechi', timp: '7 min', activitate: pasi(
        'Cazul și funcția pronumelor posesive din cele unsprezece enunțuri; verificăm primele șase frontal.') },
      { etapa: 'Notițe: pronumele posesiv', timp: '7 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 148-149): alcătuirea (articol posesiv și forma specifică), tabelul formelor, lipsa formelor de persoana a III-a plural, funcțiile.') },
      { etapa: 'Adjectivul posesiv, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Cuvântul portocaliu din imagine; prietenul meu, prietena mea, prietenii mei; funcția lor.') },
      { etapa: 'Notițe: adjectivul posesiv', timp: '2 min', activitate: pasi(
        'Definiția și funcția de atribut adjectival.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (posesorul și obiectul) și ex. 2 (pronume sau adjectiv?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        '„Telefonul său” și „telefonul lui”; pronumele și adjectivele posesive din dialog.') },
      { etapa: 'Corectarea, Aplicații, ex. 5', timp: '3 min', activitate: pasi(
        'Transcriem enunțul corect, pe tablă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-4 (analiza, după modele); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Pronumele și adjectivul pronominal demonstrativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă pronumele demonstrativ și adjectivul pronominal demonstrativ, diferențiind valorile morfologice ale lui cel.'],
    resurse: ['Manual Art 7, pp. 150-151', fisa(13), 'Schema „Pronumele și adjectivul pronominal demonstrativ” (/materiale/clasa-7/unitatea-4/lectia-13/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Dialogul despre ii, Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Substantivul pe care îl înlocuiește cuvântul verde; gruparea cuvintelor colorate după apropiere, depărtare, diferențiere, identitate; ce înlocuiește „cea”; formele vorbite și cele scrise.') },
      { etapa: 'Notițe: pronumele demonstrativ', timp: '9 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (p. 150): cele patru feluri, tabelele formelor (scrise și vorbite), „asta” cu valoare neutră, cel, cea, cei, cele semiindependente, funcțiile.') },
      { etapa: 'Adjectivul demonstrativ, Explorare, ex. 1-4', timp: '5 min', activitate: pasi(
        'Bulele de dialog de la p. 151: ce determină cuvintele colorate, locul lor, formele vorbite, genul, numărul, cazul.') },
      { etapa: 'Notițe: adjectivul demonstrativ', timp: '3 min', activitate: pasi(
        'Acordul, forma fără -a înaintea substantivului și cu -a după el, funcția; cel popular („Pe cel deal...”).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (felul pronumelui demonstrativ) și ex. 2 (pronume sau adjectiv?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1, oral', timp: '4 min', activitate: pasi(
        'Pronumele și adjectivele demonstrative din enunțurile a-g și felul lor.') },
      { etapa: 'Valorile lui cel, Aplicații, ex. 3', timp: '5 min', activitate: pasi(
        'Ce parte de vorbire sunt cuvintele din cele patru enunțuri; comparăm cu articolul demonstrativ de la adjectiv.') },
      { etapa: 'Forma corectă, Aplicații, ex. 4', timp: '3 min', activitate: pasi(
        'Aceiași sau aceeași, aceea sau aceia, frontal, cu explicație.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 și ex. 5 (analiza, după modele); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Pronumele și adjectivul pronominal nehotărât',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă pronumele nehotărât și adjectivul pronominal nehotărât, formele, cazurile și categoriile lor gramaticale.'],
    resurse: ['Manual Art 7, p. 152', fisa(14), 'Schema „Pronumele și adjectivul pronominal nehotărât” (/materiale/clasa-7/unitatea-4/lectia-14/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Reclama, Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Înlocuim cuvintele verzi cu substantive; cât de precise sunt; simple sau compuse; cu ce înlocuim grupul albastru.') },
      { etapa: 'Explorare, ex. 5-7', timp: '7 min', activitate: pasi(
        'Cazul și funcția cuvintelor verzi; ce determină cuvintele roșii și ce se schimbă dacă le înlocuim; greșelile din cele patru enunțuri.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (p. 152): pronume simple și compuse, locuțiunile, amândoi și ambii, funcțiile, adjectivul nehotărât, scrierea (vreun, oricare), acordul cu „fiecare”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (simplu sau compus?) și ex. 2 (pronume sau adjectiv?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Pronumele nehotărâte din enunțurile a-f, clasificate; pronumele și adjectivele din textul cu invitația.') },
      { etapa: 'Aplicații, ex. 3', timp: '4 min', activitate: pasi(
        'Transformăm oral enunțurile de la ex. 1, cu adjective nehotărâte; cum am procedat.') },
      { etapa: 'Corectarea, Aplicații, ex. 6', timp: '4 min', activitate: pasi(
        'Cele șase enunțuri, corectate frontal, cu regula din Repere.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 4 (analiza, după model); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Pronumele și adjectivul pronominal interogativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă pronumele interogativ și adjectivul pronominal interogativ prin formularea de răspunsuri la întrebări.'],
    resurse: ['Manual Art 7, p. 153', fisa(15), 'Schema „Pronumele și adjectivul pronominal interogativ” (/materiale/clasa-7/unitatea-4/lectia-15/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Dialogul despre aniversare, Explorare, ex. 1-2', timp: '7 min', activitate: pasi(
        'Doi elevi citesc dialogul; felul enunțurilor după scop; înlocuim cuvintele colorate cu răspunsurile și le aflăm funcția.') },
      { etapa: 'Câți invitați, ex. 3-4', timp: '4 min', activitate: pasi(
        'Ce determină „câți”; valoarea și funcția lui „mulți” din răspuns.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (p. 153): pronumele interogative, regula funcției (aceeași cu a răspunsului), tabelul funcțiilor pe cazuri, adjectivul interogativ.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (întrebare și răspuns) și ex. 2 (pronume sau adjectiv?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Forma corectă, Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Cele patru perechi, frontal, cu explicație.') },
      { etapa: 'Analiza, Aplicații, ex. 2', timp: '8 min', activitate: pasi(
        'Primele șase enunțuri, analizate după modelele de la p. 153, pe tablă și în caiete.') },
      { etapa: 'Întrebări în lanț', timp: '5 min', activitate: pasi(
        'Fiecare elev pune o întrebare cu alt pronume sau adjectiv interogativ; colegul răspunde și spune funcția.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 (restul enunțurilor); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Pronumele și adjectivul pronominal relativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă pronumele relativ și adjectivul pronominal relativ, formele și cazurile lor.'],
    resurse: ['Manual Art 7, pp. 154-155', fisa(16), 'Schema „Pronumele și adjectivul pronominal relativ” (/materiale/clasa-7/unitatea-4/lectia-16/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Vaza din pod, Explorare, ex. 1-2', timp: '7 min', activitate: pasi(
        'Citim textul de la p. 154; substantivele pe care le înlocuiesc cuvintele colorate; înlocuim și aflăm funcția.') },
      { etapa: 'Explorare, ex. 3-6', timp: '7 min', activitate: pasi(
        'Ce propoziții introduc; cuvântul compus; acordul articolului genitival în „a căror”; despărțim în propoziții frazele a-b.') },
      { etapa: 'Notițe: pronumele relativ', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 154-155): pronumele relative, ceea ce, cel ce, „de” popular, tabelul funcțiilor, „pe care” complement direct, acordul la genitiv.') },
      { etapa: 'Adjectivul relativ, Explorare, ex. 1-2', timp: '4 min', activitate: pasi(
        '„Știu care prieten mă va ajuta”: de ce depinde „care” și cum îl înlocuim; definiția din Repere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (pronumele relativ) și ex. 2 (pronume sau adjectiv?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Completarea, Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Cele cinci fraze, completate oral.') },
      { etapa: 'Aplicații, ex. 2-3', timp: '6 min', activitate: pasi(
        'Primele șase fraze: pronume sau adjectiv și funcția pronumelor.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-3 (restul frazelor), ex. 4-5 (analiza, după modele); fișa de exerciții, pagina 2.',
        'Opțional: Provocări, greșeli din reclame.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Pronumele și adjectivul pronominal negativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă pronumele negativ și adjectivul pronominal negativ, formele și cazurile lor.'],
    resurse: ['Manual Art 7, p. 156', fisa(17), 'Schema „Pronumele și adjectivul pronominal negativ” (/materiale/clasa-7/unitatea-4/lectia-17/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Bulevardul pustiu, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Citim textul de la p. 156: ce arată cuvintele portocalii și în ce fel de propoziții apar.') },
      { etapa: 'Funcțiile, ex. 3', timp: '4 min', activitate: pasi(
        'Funcția cuvintelor din cele cinci exemple, frontal.') },
      { etapa: 'Cuvintele verzi, ex. 4-5', timp: '4 min', activitate: pasi(
        'De ce depind și ce parte de vorbire sunt; ce funcție au.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (p. 156): pronumele negative, enunțurile negative, acordul la singular cu nimeni și nimic, tabelul funcțiilor, adjectivele niciun, nicio.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (pronume sau adjectiv?) și ex. 2 (cazul și funcția), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Varianta corectă, Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Cele patru enunțuri, frontal, cu regula.') },
      { etapa: 'Analiza, Aplicații, ex. 2', timp: '9 min', activitate: pasi(
        'Prima jumătate a textului, analizată după modelele de la p. 156, pe tablă și în caiete.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 (restul textului); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-18': {
    titlu: 'Adjectivul pronominal de întărire',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă adjectivul pronominal de întărire, formele și cazurile lui.'],
    resurse: ['Manual Art 7, p. 157', fisa(18), 'Schema „Adjectivul pronominal de întărire” (/materiale/clasa-7/unitatea-4/lectia-18/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Gabi și Vali, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Doi elevi citesc dialogul de la p. 157; cuvintele care arată cine e Gabi și cine e Vali; rolul lor în comunicare.') },
      { etapa: 'Versurile lui Anton Pann, ex. 3', timp: '3 min', activitate: pasi(
        'Prin ce parte de vorbire înlocuim cuvântul colorat.') },
      { etapa: 'Ce determină, ex. 4', timp: '4 min', activitate: pasi(
        'De ce depind cuvintele colorate din cele trei enunțuri și ce funcție au.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (p. 157): dispariția pronumelui de întărire, acordul adjectivului, tabelul formelor, funcția, înlocuirea cu „chiar”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (forma potrivită) și ex. 2 (acordul), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Completarea, Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Cele cinci enunțuri, completate oral.') },
      { etapa: 'Corectarea, Aplicații, ex. 2', timp: '6 min', activitate: pasi(
        'Enunțurile greșite corectate frontal; discutăm pleonasmul din replica lui Caragiale.') },
      { etapa: 'Formele, oral', timp: '4 min', activitate: pasi(
        'Spun un pronume și genul (de exemplu: noi, fete); elevii dau pe rând forma adjectivului de întărire.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3 (analiza, după model); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-19': {
    titlu: 'Posibilități combinatorii ale pronumelui și ale adjectivului pronominal',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică funcțiile sintactice ale pronumelui, precizând dacă e centru sau adjunct.'],
    resurse: ['Manual Art 7, pp. 158-159', fisa(19), 'Schema „Posibilitățile combinatorii ale pronumelui” (/materiale/clasa-7/unitatea-4/lectia-19/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Trifoiul cu patru foi, Explorare, ex. 1', timp: '8 min', activitate: pasi(
        'Citim dialogul de la p. 158; pronumele din text: centru de grup, adjunct (în ce grup) sau într-o relație ternară.') },
      { etapa: 'Funcțiile, ex. 2-3', timp: '6 min', activitate: pasi(
        'Funcția pronumelor din text; adjectivele pronominale, felul și funcția lor.') },
      { etapa: 'Notițe', timp: '9 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 158-159): pronumele centru și atributele lui; pronumele adjunct în grupul nominal și în grupul verbal (tabelul); subiectul și numele predicativ; adjectivul pronominal, atribut adjectival.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (pronumele centru) și ex. 2 (pronumele adjunct), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Pronumele centru, adjunct sau ambele din cele șase enunțuri și funcțiile lor.') },
      { etapa: 'Acordul, Aplicații, ex. 6', timp: '3 min', activitate: pasi(
        'Corectăm cele două enunțuri, frontal.') },
      { etapa: 'Autoevaluare L10-L18', timp: '3 min', activitate: pasi(
        'Cele trei enunțuri de la p. 159, în caiete.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-5 (ex. 5, analiza textului despre Maneki Neko, după modele); fișa de exerciții, pagina 2.',
        'Opțional: Provocări, în perechi, acasă sau ora viitoare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea L10-L18.',
  },
  'lectia-20': {
    titlu: 'Structuri textuale: narativ, explicativ, descriptiv, dialogat (I)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Recunoaște secvențele narative, descriptive, dialogate și explicative dintr-un text, prin lectura ghidată a imaginii.'],
    resurse: ['Manual Art 7, pp. 160-161', fisa(20), 'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-20/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Pentru început”', timp: '4 min', activitate: pasi(
        'Elevii dau câte o situație din viața de zi cu zi în care au povestit, au descris, au dialogat, au explicat.') },
      { etapa: 'Imaginea, Explorare, ex. 1', timp: '6 min', activitate: pasi(
        'Grupe de patru: răspund la întrebările despre imaginea de la p. 160.') },
      { etapa: 'Patru texte orale, ex. 2', timp: '10 min', activitate: pasi(
        'Fiecare grupă își împarte rolurile și alcătuiește oral dialogul, narațiunea, explicația și descrierea (punctele a-d).',
        'Prima grupă gata prezintă; clasa numește tipul fiecărui text.') },
      { etapa: 'Notițe: secvențele textuale', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (pp. 160-161): secvența narativă, descriptivă, dialogată, explicativă, fiecare cu rolul și mărcile ei.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (textul „Furtuna”, scris pentru fișă, și secvențele lui), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Articolul despre dinozauri, Aplicații, ex. 1', timp: '8 min', activitate: pasi(
        'Citim fragmentul; grupele discută subiectul narațiunii (ce, unde, când, cine povestește) și își notează planul.',
        'Anunț că ora viitoare redactăm compunerea în grup.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2; fișa lecției; documentarea pentru secvența explicativă a grupei.') },
    ],
    evaluare: 'Aprecieri pe prezentarea grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-21': {
    titlu: 'Structuri textuale: narativ, explicativ, descriptiv, dialogat (II)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează o compunere narativă cu inserarea de secvențe descriptive, explicative și dialogate.'],
    resurse: ['Manual Art 7, p. 161, grila de evaluare', fisa(21), 'Fișa lecției (/materiale/clasa-7/unitatea-4/lectia-21/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Planul, fișa de exerciții, ex. 1', timp: '8 min', activitate: pasi(
        'Grupele de ora trecută completează planul compunerii și stabilesc locul celor trei secvențe.') },
      { etapa: 'Trecerile, fișa, ex. 2', timp: '5 min', activitate: pasi(
        'Fiecare grupă scrie propozițiile de trecere spre descriere, dialog și explicație; două grupe le citesc.') },
      { etapa: 'Împărțirea sarcinilor', timp: '2 min', activitate: pasi(
        'Fiecare elev din grupă preia o secvență.') },
      { etapa: 'Redactarea secvențelor', timp: '15 min', activitate: pasi(
        'Elevii redactează partea lor pe fișa lecției; trec pe la grupe pentru legătura dintre părți.') },
      { etapa: 'Asamblarea și rescrierea', timp: '8 min', activitate: pasi(
        'Grupa citește textul întreg, verifică logica și rescrie ce nu se leagă; corectează ortografia și acordurile.') },
      { etapa: 'Titlul, fișa, ex. 4', timp: '2 min', activitate: pasi(
        'Trei propuneri de titlu, apoi grupa îl alege pe cel mai incitant.') },
      { etapa: 'Evaluarea pe grilă, Aplicații, ex. 2', timp: '5 min', activitate: pasi(
        'Grupa își evaluează textul pe grila de la p. 161 și pe fișa de exerciții, ex. 3.') },
      { etapa: 'Două lecturi', timp: '3 min', activitate: pasi(
        'Două grupe își citesc compunerea; clasa spune ce secvență i-a plăcut mai mult.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: transcrierea curată a compunerii grupei, pentru afișare.') },
    ],
    evaluare: 'Autoevaluarea grupelor pe grila de la p. 161; compunerile, strânse pentru apreciere.',
  },
  'lectia-22': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea IV: naratorul și personajele, textul multimodal, structura textului narativ oral.'],
    resurse: ['Manual Art 7, pp. 162-163', fisa(22), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ciorchinele unității', timp: '3 min', activitate: pasi(
        'Pe tablă, „Cu noroc, fără noroc”; elevii spun câte o noțiune de lectură sau de comunicare din unitate.') },
      { etapa: 'Lectura', timp: '6 min', activitate: pasi(
        'Doi elevi citesc fragmentul din „Cireșarii” de Constantin Chiriță (pp. 162-163).') },
      { etapa: 'Cerințele 1-4', timp: '7 min', activitate: pasi(
        'Rezumatul oral; locul întâmplărilor; două trăsături ale tiparului narativ; asocierea personajelor cu acțiunile.') },
      { etapa: 'Cerințele 5-8', timp: '7 min', activitate: pasi(
        'Atitudinea lui Tic și a lui Dan față de roată; sentimentele lui Tic; premiile; indiciile că jocul e aranjat.') },
      { etapa: 'Comparația, cerința 10, oral', timp: '3 min', activitate: pasi(
        'O asemănare și o deosebire față de „Două loturi”.') },
      { etapa: 'Reformularea, cerința 11', timp: '3 min', activitate: pasi(
        'Doi elevi reformulează replica atletului, prin procedee diferite.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (textul „Tombola”, scris pentru fișă, și noțiunile recapitulate), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '7 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”, frontal; discutăm răspunsurile greșite.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: cerința 9 (50-100 de cuvinte despre jocurile de noroc); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-23': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea IV: tipurile de pronume și de adjectiv pronominal.'],
    resurse: ['Manual Art 7, p. 163', fisa(23), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'O replică din fragment', timp: '3 min', activitate: pasi(
        'Scriu pe tablă „Nimeni nu pierde!”: ce fel de pronume e și ce funcție are?') },
      { etapa: 'Părțile de vorbire, cerința 12', timp: '3 min', activitate: pasi(
        'Cuvintele din replica omului cu pălărie de paie, frontal.') },
      { etapa: 'Replica lui Tic, cerința 13', timp: '4 min', activitate: pasi(
        'Doi-trei elevi continuă replica; analizăm pronumele de politețe.') },
      { etapa: 'Pronume și adjective, cerințele 14-15', timp: '8 min', activitate: pasi(
        'Felul, cazul și funcția pronumelor colorate; analiza adjectivelor pronominale din cele două fragmente.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-3 (patru enunțuri, pronumele și adjectivele pronominale), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '7 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”, frontal; la greșeli, revenim la notițe.') },
      { etapa: 'Planul compunerii, cerința 16', timp: '6 min', activitate: pasi(
        'Elevii își aleg întâmplarea de la bâlci sau din parc și notează unde pun secvența descriptivă, cea dialogată și cea explicativă.') },
      { etapa: 'Pregătirea evaluării', timp: '4 min', activitate: pasi(
        'Anunț proba de ora viitoare: un fragment narativ nou, zece cerințe de limbă și lectură (partea A) și caracterizarea unui personaj (partea B).',
        'Ce recitesc acasă: notițele despre narator, personaj și mijloacele de caracterizare, tipurile de pronume și funcțiile lor.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: cerința 16 (textul narativ de minimum 150 de cuvinte); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
  },
  'lectia-24': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea IV.'],
    resurse: ['Testul, Manual Art 7, p. 164', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; manualul e deschis la p. 164 (fragmentul din „Hamurabi” de Mircea Sântimbreanu).',
        'Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (caracterizarea Eugeniței, minimum 150 de cuvinte), 10 puncte din oficiu.',
        'Timpul orientativ: 5 minute pentru citirea textului, 18 pentru partea A, 17 pentru compunere; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.',
        'Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să verifice limita de cuvinte și cele două mijloace de caracterizare din compunere.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
