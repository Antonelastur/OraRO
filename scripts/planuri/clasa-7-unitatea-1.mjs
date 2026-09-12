// Planuri de lecție detaliate pentru Unitatea I „Călătorie în necunoscut”, clasa a VII-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 7, pp. 10-46, și ghidul
// profesorului. Numerotarea lecțiilor din OraRO diferă de cea din manual de la
// L8 încolo (comunicarea orală are două ore). Rezolvările din ghid și ale fișelor
// nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-7/unitatea-1/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul narativ literar în proză. Cum e lumea de Veronica D. Niculescu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din textul narativ Cum e lumea de Veronica D. Niculescu, reflectând asupra temei captivității și libertății.'],
    resurse: ['Manual Art 7, pp. 10-13', fisa(1), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Imagini și cuvinte, „Pentru început”, ex. 1-2', timp: '6 min', activitate: pasi(
        'În perechi: fiecare imagine de la p. 10 asociată cu două dintre cuvintele aspirație, captivitate, libertate, neputință, cu justificare.',
        'Ex. 2: câte două sentimente pentru fiecare imagine; notez pe tablă cuvintele care se repetă.') },
      { etapa: 'Despre autoare', timp: '3 min', activitate: pasi(
        'Caseta de la p. 10: Veronica D. Niculescu, scriitoare și traducătoare, autoarea romanului „O vară cu Isidor”; „Cum e lumea” e un text inedit, scris pentru manual.') },
      { etapa: 'Lectura model', timp: '14 min', activitate: pasi(
        'Citesc textul (pp. 10-13), cu pauze la schimbarea firelor narative (steluțele).',
        'Lămurim pe loc cuvintele mai rare: infim, a adulmeca, nălucă, cătare, a escalada, a bâigui.') },
      { etapa: 'Impresii după prima lectură, ex. 1-2', timp: '6 min', activitate: pasi(
        'Tabelul din caiet: două situații care i-au impresionat și emoțiile trăite.',
        'Ex. 2: sunt și emoții contradictorii? Trei elevi citesc.') },
      { etapa: 'Alte reacții, ex. 3', timp: '5 min', activitate: pasi(
        'În perechi: cum ar mai fi putut reacționa fata? Voi ce ați fi făcut? Două perechi prezintă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ordinea întâmplărilor) și ex. 2 (cine face?), individual, 8 minute.',
        'Verificare, 4 minute; la ordinea disputată, căutăm pasajul.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Impresii după prima lectură”, ex. 4 (răspunsurile la cele două întrebări ale autoarei, pentru portofoliu); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2. Temă de portofoliu: răspunsurile la cele două întrebări ale autoarei.',
  },
  'lectia-2': {
    titlu: 'Textul narativ literar. Legarea secvențelor narative',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică modul de organizare a secvențelor narative și legarea lor prin înlănțuire sau prin alternanță.'],
    resurse: ['Manual Art 7, pp. 14-15', fisa(2), 'Fișa lecției (/materiale/clasa-7/unitatea-1/lectia-2/fisa.pdf)', 'Bilețele pentru cuvintele-cheie'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi elevi citesc răspunsul la întrebarea autoarei despre asemănările dintre Bianca și Mara.') },
      { etapa: 'Fragmentele, Explorare, ex. 1', timp: '12 min', activitate: pasi(
        'Grupe de 5-6: textul împărțit în zece fragmente, cuvântul-cheie al fiecăruia pe bilețele, lipite pe tablă în organizatorul de la p. 14.',
        'Comparăm cuvintele-cheie ale grupelor, alegem varianta cea mai potrivită și formulăm ideile principale; elevii le notează în caiete.') },
      { etapa: 'Timpul și spațiul, ex. 2-5', timp: '7 min', activitate: pasi(
        'Ex. 2-3: anotimpul și partea zilei (variantele a-c), cu pasajele care îi ajută.',
        'Ex. 4-5: cele patru orașe și orașul întâmplării; etichetele cu locurile, ordonate pentru Bianca, și locurile Marei. Unde se întâlnesc?') },
      { etapa: 'Legarea secvențelor, ex. 1-2, și notițe', timp: '7 min', activitate: pasi(
        'Cuvintele care fac trecerea de la o secvență la alta; secvența în care apare un fir narativ nou și formula de trecere.',
        'În caiete, după Repere (p. 15): textul narativ literar, înlănțuirea și alternanța, cu formulele fiecăreia.') },
      { etapa: 'Timpul verbal, Aplicații, ex. 3-5', timp: '4 min', activitate: pasi(
        'Timpul verbal dominant și efectul lui; o secvență cu alt timp; rolul lui „Acum” repetat în secvența a șasea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (textul „Două drumuri”, scris pentru fișă, și firele lui narative), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Raportul firelor, Aplicații, ex. 6', timp: '2 min', activitate: pasi(
        'Care dintre imaginile a-c arată cel mai bine raportul dintre firele narative? Două justificări.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 (rezumatul, cu ideile principale din caiet); fișa de exerciții, pagina 2; fișa lecției.',
        'Portofoliu: pagina de jurnal a Marei.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2. Temă de portofoliu: pagina de jurnal a Marei.',
  },
  'lectia-3': {
    titlu: 'Naratorul, personajele, autorul. Enumerația',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Diferențiază naratorul de autor, identifică statutul și trăsăturile personajelor și rolul enumerației.'],
    resurse: ['Manual Art 7, pp. 16-17', fisa(3), 'Fișa lecției (/materiale/clasa-7/unitatea-1/lectia-3/fisa.pdf)', 'Coli mari pentru harta personajelor'],
    desfasurare: [
      { etapa: 'Cine povestește? Explorare, ex. 1-5', timp: '6 min', activitate: pasi(
        'Voce anonimă, martor sau participant? Cine e autoarea și ce titlu al ei i-ar atrage? Persoana relatării.',
        'Personajele textului, notate în caiet; paragraful din ultima secvență în care mai multe personaje se poartă ca unul singur.') },
      { etapa: 'Notițe: naratorul, personajele, autorul', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 16): naratorul (voce anonimă sau personaj, persoana I sau a III-a), personajele (principale, secundare, episodice, figuranți, colective), autorul, persoană reală.') },
      { etapa: 'Aplicații, ex. 1-4', timp: '5 min', activitate: pasi(
        'Imaginea de la p. 16 și raportul narator-personaje; de ce știe naratorul ce se petrece simultan în ambele fire.',
        'Ce ar lipsi dacă s-ar povesti doar din perspectiva Biancăi sau a Marei; pasajul în care naratorul reflectează asupra vieții.') },
      { etapa: 'Enumerația, Explorare, ex. 1-2, și notițe', timp: '4 min', activitate: pasi(
        'Pasajul cu animalele hrănite de îngrijitoare și semnul care desparte substantivele.',
        'În caiete, după Repere (p. 16): enumerația, termenii de același fel, virgula, rolurile.') },
      { etapa: 'Trăsăturile, Aplicații, ex. 5, 7, 11, 14', timp: '6 min', activitate: pasi(
        'Trăsăturile fizice ale puiului; prin ce se deosebește personajul principal; trăsăturile Biancăi, ale îngrijitoarei și ale Marei din fragmentele a-c; trăsătura comună a Marei și a Biancăi.') },
      { etapa: 'Harta personajelor, ex. 15', timp: '10 min', activitate: pasi(
        'Grupe de 4-5, pe coli mari: personajul principal în centru, cu trăsătura morală cea mai importantă, celelalte în jur, cu săgeți, statut și câte o trăsătură.',
        'Două grupe prezintă; celelalte completează.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (autor, narator sau personaj?) și ex. 2 (statutul personajelor), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 6, 8-10, 12-13, 16-18; fișa de exerciții, pagina 2; fișa lecției.',
        'Portofoliu: scena de la Pașapoarte rescrisă din perspectiva Biancăi, cu tabelul T/R.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; harta personajelor; fișa de exerciții, ex. 1-2. Temă de portofoliu: rescrierea scenei de la Pașapoarte din perspectiva Biancăi.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează un răspuns personal despre semnificațiile textului Cum e lumea și atitudinile personajelor.'],
    resurse: ['Manual Art 7, pp. 18-19', fisa(4), 'Fișa lecției (/materiale/clasa-7/unitatea-1/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Titlul, Interpretare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Cu ce intonație rostim titlul, care nu are semn de punctuație? Trei elevi îl rostesc diferit.',
        'Un alt titlu, cu justificare; notez propunerile pe tablă.') },
      { etapa: 'Copilăria și grijile, ex. 3-9', timp: '8 min', activitate: pasi(
        'Activitățile de copil ale puiului; de ce ce e în afara cuștii e „lumea de dincolo”; numele Bruna.',
        'Grijile despre care vorbește îngrijitoarea și grijile reale ale puiului; visul cel mai arzător și secvența în care apare.') },
      { etapa: 'Visul și fuga, ex. 10, 13-14', timp: '7 min', activitate: pasi(
        'Ar fi avut Bianca același vis și în altă parte? Pornim de la pasajul despre „departe”.',
        'Ce semnifică fuga: explorare, independență, libertate? De ce e greu de ales și ce legături sunt între ele?') },
      { etapa: 'Mara și „gratiile” ei, ex. 16-18', timp: '5 min', activitate: pasi(
        'Gratiile simbolice ale Marei; de ce ne atrag locurile noi; ce înseamnă că oamenii locuiesc „de bunăvoie în cuști”.') },
      { etapa: 'Mulțimea, ex. 19-20', timp: '4 min', activitate: pasi(
        'Atitudinile oamenilor înainte și după intervenția Marei, cu exemple; de ce se gândește Mara la mama ei.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce semnifică?) și ex. 2 (Bianca și Mara), individual, 7 minute.',
        'Verificare, 4 minute; ascultăm interpretări diferite și le cerem argumentul din text.') },
      { etapa: 'Fluturele, ex. 22-23', timp: '4 min', activitate: pasi(
        'Situațiile în care apare fluturele și ce semnifică; de ce asociază Bianca petalele cu fluturele.') },
      { etapa: 'Fișa lecției', timp: '3 min', activitate: pasi(
        'Ex. 2: ideea centrală a textului, într-o propoziție; două-trei formulări citite.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Interpretare, ex. 24 (răspunsul de 3-4 rânduri la „Cum e lumea?”) și ex. 21 (pictura); „Provocări”, ex. 1; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea participării la discuție; fișa de exerciții, ex. 1-2; fișa lecției, ex. 2.',
  },
  'lectia-5': {
    titlu: 'Textul nonliterar, textul discontinuu. Anunțul',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Recunoaște trăsăturile textului nonliterar discontinuu și redactează un anunț.'],
    resurse: ['Manual Art 7, pp. 20-21', fisa(5), 'Infograficul „Textul nonliterar, textul discontinuu. Anunțul” (/materiale/clasa-7/unitatea-1/lectia-5/infografic.svg)', 'Coli pentru postere'],
    desfasurare: [
      { etapa: 'Pregătirea vizitei, „Pentru început”, ex. 1', timp: '5 min', activitate: pasi(
        'Cele trei situații de la p. 20: unde căutăm informații despre Ziua porților deschise, ce scriem în anunțul de la avizier, de unde aflăm cum ajungem de la gară la zoo.') },
      { etapa: 'Lectura textului și impresii', timp: '5 min', activitate: pasi(
        'Elevii citesc programul de la p. 20 și completează în caiet două dintre enunțurile de la „Impresii după prima lectură”.') },
      { etapa: 'Explorare, ex. 1-5', timp: '7 min', activitate: pasi(
        'Scopul textului (a-d); tema și ce i-a ajutat să o stabilească; două informații importante.',
        'Particularitatea secțiunii „Cu autobuzul”; cine transmite informațiile și cui.') },
      { etapa: 'Notițe: textul nonliterar și anunțul', timp: '6 min', activitate: pasi(
        'Proiectez infograficul; în caiete, după Repere (p. 21): textul nonliterar, continuu și discontinuu, exemple de texte discontinue, anunțul, titlul lui și cele patru întrebări: Ce? Cum? Unde? Când?') },
      { etapa: 'Posterele, Aplicații, ex. 1', timp: '8 min', activitate: pasi(
        'Grupe de 4-5: posterul cu răspunsurile la cele patru întrebări despre anunțul de la p. 20; două grupe prezintă.') },
      { etapa: 'Aplicații, ex. 2-3', timp: '3 min', activitate: pasi(
        'Ce trăsături ale textului discontinuu are anunțul? Ce elemente vizuale ar ajuta secțiunea „Cu mașina”?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (anunțul scris pentru fișă și întrebările lui), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Autoevaluare L1-L5', timp: '2 min', activitate: pasi(
        'Elevii completează în caiete cele trei enunțuri de la p. 21.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 4 (anunțul pentru un eveniment din școală, cu organizatorul grafic); fișa de exerciții, pagina 2.',
        '„Provocări”, opțional: programul pentru săptămâna „Școala altfel”.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2; autoevaluarea achizițiilor din lecțiile 1-5.',
  },
  'lectia-6': {
    titlu: 'Text auxiliar. Amintiri din copilărie de Ion Creangă (fragment)',
    data: null,
    tipOra: 'Lectură, text auxiliar',
    durata: 50,
    obiective: ['Interpretează un fragment din Amintiri din copilărie de Ion Creangă și identifică trăsăturile personajelor.'],
    resurse: ['Manual Art 7, pp. 22-23', fisa(6), 'Fișa lecției (/materiale/clasa-7/unitatea-1/lectia-6/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Plecări', timp: '4 min', activitate: pasi(
        'Întreb: ați plecat vreodată de acasă pentru multă vreme? Ce ați simțit în prima seară?') },
      { etapa: 'Introducerea, p. 22', timp: '2 min', activitate: pasi(
        'Citim textul introductiv: „Amintirile din copilărie”, scrise între 1881 și 1888; Nică pleacă din Humulești spre școala de la Socola, în 1855.') },
      { etapa: 'Lectura', timp: '10 min', activitate: pasi(
        'Citesc fragmentul; elevii urmăresc.',
        'Lămurim cuvintele din subsol: poștă, șagă, harabagiu, nemernic, mas, a se coși, pe sponci, șleah, draniță, harbuz, a șfichiui.') },
      { etapa: 'Discutarea textului, ex. 1-5', timp: '9 min', activitate: pasi(
        'Naratorul și celelalte personaje.',
        'Ex. 3-4: comparațiile din primul enunț și opoziția cu fuga Biancăi.',
        'Ex. 5: gluma despre distanța de la Neamț la Iași și efectul ei.') },
      { etapa: 'Emoții și oameni, ex. 6-7, 9-10', timp: '6 min', activitate: pasi(
        'Imaginea apelor care duc „patimi și ahturi omenești”; emoția din replica despre munții pierduți din vedere.',
        'Neajunsurile vieții la câmpie, după moș Luca; trăsătura țăranilor din ultimul paragraf.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (adevărat sau fals?) și ex. 2 (Nică și Bianca), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Documentul lui Kiseleff, ex. 8', timp: '3 min', activitate: pasi(
        'Citim poruncile din timpul epidemiei de holeră; ce legătură are fumul din casă cu popasul de la Blăgești?') },
      { etapa: 'Biblioteci deschise', timp: '2 min', activitate: pasi(
        'Prezint „Viața lui Pi” de Yann Martel și „Tropice tâmpe” de Florin Bican.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției (jurnalul cu dublă intrare, legăturile cu textul de bază); fișa de exerciții, pagina 2.',
        'Portofoliu: impresiile după o călătorie într-un loc necunoscut.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2. Temă de portofoliu: impresiile după o călătorie într-un loc necunoscut.',
  },
  'lectia-7': {
    titlu: 'Contacte culturale',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Identifică particularitățile culturale ale unor comunități etnice și diferențiază obiceiurile de tradiții.'],
    resurse: ['Manual Art 7, pp. 24-25', fisa(7), 'Infograficul „Contacte culturale” (/materiale/clasa-7/unitatea-1/lectia-7/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Capitalele culturii, „Pentru început”', timp: '7 min', activitate: pasi(
        'În perechi, pe harta de la p. 24: a) cinci orașe, țara și continentul; b) orașele din România care au fost capitale europene ale culturii și anii; c) o opinie comună despre rolul unei capitale culturale.') },
      { etapa: 'Turnul Slăninilor, Explorare, ex. 1', timp: '6 min', activitate: pasi(
        'a) O tradiție românească legată de imagine; b) citim fragmentul despre cămara satului săsesc: ce valori ale omului și ale comunității arată?') },
      { etapa: 'Îndeletniciri, ex. 2-3', timp: '5 min', activitate: pasi(
        'Imaginile b-d, din Viscri, Saschiz și Mediaș: ce îndeletniciri arată și dacă sunt specifice unei comunități.',
        'Se pot transforma îndeletnicirile în tradiții? Două argumente pro și contra.') },
      { etapa: 'Notițe: cultura, obiceiul, tradiția', timp: '6 min', activitate: pasi(
        'Proiectez infograficul; în caiete, după Repere (p. 25): cultura, obiceiul (religios sau laic), contactele culturale, tradiția și deosebirea dintre obicei și tradiție.') },
      { etapa: 'Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Tradiții cunoscute, clasificate pe tablă în două coloane: religioase și laice.') },
      { etapa: 'Chirvaiul și lăzărița, ex. 2', timp: '5 min', activitate: pasi(
        'În perechi: citim casetele despre cele două obiceiuri din Timiș și discutăm asemănările, deosebirile și alte obiceiuri cunoscute.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (obicei sau tradiție?) și ex. 2 (două comunități din Timiș), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Obicei sau tradiție? „Provocări”, ex. 1', timp: '3 min', activitate: pasi(
        'Îndeletnicirile din imaginile b-d sunt obiceiuri sau tradiții? Două-trei răspunsuri argumentate.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.',
        'Miniproiect opțional (grupe de 4-6): dosarul de candidatură pentru titlul de capitală culturală europeană al orașului principal din județ.') },
    ],
    evaluare: 'Observarea lucrului în perechi; fișa de exerciții, ex. 1-2. Miniproiect opțional: dosarul de candidatură pentru titlul de capitală culturală europeană.',
  },
  'lectia-8': {
    titlu: 'Principii de interacțiune în comunicare (I)',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Descoperă principiile bunei funcționări a unui dialog.'],
    resurse: ['Manual Art 7, pp. 26-27', fisa(8), 'Quizul „Principii de interacțiune în comunicare” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Ana și Adi, „Pentru început”', timp: '3 min', activitate: pasi(
        'Doi elevi citesc bulele de dialog de la p. 26; ce vrea să spună Ana prin replica ei?') },
      { etapa: 'Continuarea dialogului, ex. 2', timp: '8 min', activitate: pasi(
        'În perechi: dialogul continuat în cel mult zece replici, până aleg filmul în locul grădinii zoologice, cu cele două expresii cerute.',
        'Două perechi își citesc dialogul.') },
      { etapa: 'Replicile a-d, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Ar merge replicile a-d în dialogul vostru? Ce fel de informație conține fiecare (falsă, ilogică, insuficientă, fără importanță)?') },
      { etapa: 'Notițe: principiul cooperării', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 26): principiul cooperării și cele patru reguli (informație suficientă, adevărată, relevantă, intervenție clară).') },
      { etapa: 'Explorare, ex. 3-5', timp: '5 min', activitate: pasi(
        'Atitudinea fetei din replica de început (a-d); o replică a lui Adi cu o informație falsă; o replică a Anei care să însemne un refuz.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce regulă se încalcă?) și ex. 2 (replica bună), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '8 min', activitate: pasi(
        'Quizul „Principii de interacțiune în comunicare”, frontal; la fiecare greșeală, numim regula.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Explorare, ex. 6-7 (cum schimbă replica voastră politețea, fermitatea, tactul); fișa de exerciții, pagina 2; recitirea Reperelor despre politețe (pp. 26-27).') },
    ],
    evaluare: 'Observarea lucrului în perechi; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-9': {
    titlu: 'Principii de interacțiune în comunicare (II)',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică principiile politeții și tipurile de politețe manifestate în dialog, printr-un joc de rol.'],
    resurse: ['Manual Art 7, p. 27, jocul de rol și grila de evaluare', fisa(9)],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Două perechi spun cum a schimbat replica lor de refuz politețea, fermitatea sau tactul dialogului.') },
      { etapa: 'Colacul de salvare, „Provocări”', timp: '4 min', activitate: pasi(
        'Banda desenată de la p. 27: e politețea întotdeauna cea mai potrivită atitudine? Două păreri pro și contra.') },
      { etapa: 'Notițe: principiul politeții', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (pp. 26-27): politețea pozitivă (complimente, solidaritate, prenumele, persoana a II-a singular) și politețea negativă (distanță, scuze, regret, formule de respect), cu câte un exemplu.') },
      { etapa: 'Solidaritatea de grup, Aplicații, ex. 1-3', timp: '6 min', activitate: pasi(
        'Ex. 1: replicile de la Explorare, adaptate situației.',
        'Ex. 2-3: rolul cuvintelor evidențiate în enunțurile a-c; în perechi, alte cuvinte de solidaritate.') },
      { etapa: 'Pozitivă sau negativă? Ex. 4-6', timp: '7 min', activitate: pasi(
        'Replicile a-e, clasificate cu justificare; persoana a II-a singular și pronumele de politețe.',
        'Verbele din „salată” folosite oral în replici pentru ambele feluri de politețe.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (pozitivă sau negativă?) și ex. 2 (aceeași cerere, două feluri), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Jocul de rol, ex. 7', timp: '11 min', activitate: pasi(
        'În perechi, copil și părinte: copilul vrea cel mai nou telefon, părintele îl convinge să accepte o variantă mai ieftină; 4 minute de pregătire.',
        'Trei perechi prezintă; clasa evaluează pe grila de la p. 27, criteriu cu criteriu.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2; autoevaluarea propriului rol pe grila de la p. 27, în caiet.') },
    ],
    evaluare: 'Evaluare pe grila jocului de rol; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Fraza. Norme de punctuație',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Diferențiază propozițiile de fraze, identifică tipurile de coordonare și propozițiile principale de cele secundare.'],
    resurse: ['Manual Art 7, pp. 28-29', fisa(10), 'Schema „Fraza. Coordonarea. Punctul și virgula” (/materiale/clasa-7/unitatea-1/lectia-10/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Afișul filmului, „Pentru început”, ex. 1-5', timp: '5 min', activitate: pasi(
        'Replicile fetei și ale băiatului de la p. 28: câte predicate, câte enunțuri, un enunț simplu și unul complex, rolul virgulei.') },
      { etapa: 'Replica fetei, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Câte propoziții are enunțul complex și pot exista independent? Ce semn le leagă? Transformarea în două enunțuri simple.') },
      { etapa: 'Replica băiatului, ex. 4-6', timp: '5 min', activitate: pasi(
        'Barele oblice între propoziții, după model; prin ce sunt legate; ce semn ar putea înlocui punctul-și-virgula.') },
      { etapa: 'Notițe: fraza și coordonarea', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (pp. 28-29) și schema lecției: fraza, coordonarea prin joncțiune (conectori) și prin juxtapunere (virgulă, punct-și-virgulă), pașii analizei frazei, schema cu propozițiile pe același nivel.',
        'Propozițiile principale și secundare; rolul punctului-și-virgulei.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '7 min', activitate: pasi(
        'Ex. 1: frazele a-b împărțite în propoziții, cu principalele și secundarele.',
        'Ex. 2: frazele a-c din „Cum e lumea”, transcrise și analizate la tablă; felul coordonării.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (bare oblice) și ex. 2 (analiza celor patru enunțuri), individual, 8 minute.',
        'Verificare, 4 minute; enunțul d îl discutăm separat.') },
      { etapa: 'Fraze pe pânza bărcii, Aplicații, ex. 4', timp: '5 min', activitate: pasi(
        'Oral: fraze cu un verb din coloana stângă și unul din dreapta, legate prin conectorii de pe pânza bărcii; câte o frază pentru fiecare conector.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 d-f, 3 și 5; fișa de exerciții, pagina 2.',
        'Portofoliu: mesajul lui Pi dintr-o sticlă (40-50 de cuvinte, cu juxtapunere, joncțiune și punct-și-virgulă).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2. Temă de portofoliu: mesajul lui Pi dintr-o sticlă.',
  },
  'lectia-11': {
    titlu: 'Conjuncția',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică și analizează conjuncțiile coordonatoare, intra- și interpropoziționale.'],
    resurse: ['Manual Art 7, pp. 30-31', fisa(11), 'Schema „Conjuncția” (/materiale/clasa-7/unitatea-1/lectia-11/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Urșii din fotografii, Explorare, ex. 1', timp: '6 min', activitate: pasi(
        'Enunțurile de sub fotografiile de la p. 30: a) ce părți de propoziție sunt Mama și puiul; b-c) ce fel de propoziții leagă cuvintele colorate; d) punctuația enunțurilor c și d.') },
      { etapa: 'Raporturile, ex. 2-3', timp: '5 min', activitate: pasi(
        'Etichetele asociere, excludere, opoziție, concluzie, potrivite enunțurilor a-f; sinonime pentru conjuncțiile din a, b, d.') },
      { etapa: 'Notițe: conjuncția', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (p. 30) și schema lecției: conjuncția, simplă sau compusă; conjuncțiile coordonatoare copulative, disjunctive, adversative, concluzive, cu raportul exprimat.',
        'Punctuația: disjunctivele în perechi, virgula înaintea adversativelor, „însă” și „deci” în interiorul propoziției; conjuncțiile care nu sunt coordonatoare (că, să, dacă, deși).') },
      { etapa: 'Aplicații, ex. 1-3', timp: '7 min', activitate: pasi(
        'Ex. 1: felul conjuncțiilor după formă, în fragmentele a-b.',
        'Ex. 2-3: ce leagă conjuncțiile colorate din fragmentele a-g și, unde leagă propoziții, dacă sunt principale sau secundare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (felul conjuncției) și ex. 2 (ce leagă?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Mesajele, „Provocări”', timp: '5 min', activitate: pasi(
        'Schimbul de mesaje de la p. 31: elevii corectează punctuația în caiete și explică fiecare greșeală.') },
      { etapa: 'Analiza după model, Aplicații, ex. 5', timp: '5 min', activitate: pasi(
        'Conjuncțiile colorate din textele a-b, analizate frontal după modelul de la p. 31.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 4 și ex. 5 c-d; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Derivarea',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Identifică derivatele cu prefixe, cu sufixe, derivatele parasintetice și diminutivale.'],
    resurse: ['Manual Art 7, pp. 32-33', fisa(12), 'Schema „Derivarea” (/materiale/clasa-7/unitatea-1/lectia-12/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Bunicul și nepotul, Explorare, ex. 1', timp: '7 min', activitate: pasi(
        'Doi elevi citesc dialogul de la p. 32.',
        'a-e: partea comună din copil și copilaș; ce s-a adăugat și unde; ce exprimă copilaș și nepoțel; cum s-a format strănepot; ce se schimbă în partea comună a lui nepot și nepoțel.') },
      { etapa: 'Explorare, ex. 2-3', timp: '3 min', activitate: pasi(
        'Cuvântul scris greșit din propoziția despre poveste; formarea cuvintelor „a închipui” și „școlărel”.') },
      { etapa: 'Notițe: derivarea', timp: '9 min', activitate: pasi(
        'În caiete, după Repere (p. 32) și schema lecției: cuvântul de bază și rădăcina (nepot/nepoț, măr/mer, verde/verz); sufixele gramaticale și lexicale; diminutivele și valorile lor; prefixele, scrierea lui ex- și a lui î după prefix; derivatele parasintetice; seriile derivative.') },
      { etapa: 'Rădăcină și sufix, Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Tabelul de la p. 33, completat la tablă de câte un elev pentru fiecare cuvânt.') },
      { etapa: 'Prefixele, Aplicații, ex. 5', timp: '3 min', activitate: pasi(
        'Prefixele încercuite și partea de vorbire a cuvântului de bază, frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (prefix, rădăcină, sufix) și ex. 2 (diminutivul și valoarea lui), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Joc cu diminutive, Aplicații, ex. 6', timp: '5 min', activitate: pasi(
        'În perechi, 3 minute: cât mai multe diminutive de la cuvintele de pe panou, cu sufixele date; câștigă perechea cu cele mai multe forme corecte.') },
      { etapa: 'Replicile de corectat, „Provocări”', timp: '4 min', activitate: pasi(
        'Greșelile din schimbul de replici de la p. 33, corectate în caiete, cu regula de scriere pentru fiecare.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-4 și 7; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; jocul cu diminutive; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Compunerea. Familia lexicală',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Identifică cuvintele formate prin compunere și alcătuiește familii lexicale.'],
    resurse: ['Manual Art 7, pp. 34-35', fisa(13), 'Schema „Compunerea. Familia lexicală” (/materiale/clasa-7/unitatea-1/lectia-13/schema.svg)', 'DOOM3'],
    desfasurare: [
      { etapa: 'La zoo, Explorare, ex. 1', timp: '3 min', activitate: pasi(
        'Dialogul de la p. 34: din ce s-au format cuvintele colorate?') },
      { etapa: 'Panoul, ex. 2-5', timp: '7 min', activitate: pasi(
        'Termenii cuvintelor scrise cu roșu și sensurile lor separate; ce părți de vorbire sunt; alăturare sau subordonare.',
        'Ex. 5: denumirea completă a instituției care semnează panoul.') },
      { etapa: 'Ex. 6-8', timp: '4 min', activitate: pasi(
        'Termenii din „microorganism” și ce au diferit; două derivate de la „broască”; intrusul din seria cu „copil”.') },
      { etapa: 'Notițe: compunerea și familia lexicală', timp: '9 min', activitate: pasi(
        'În caiete, după Repere (pp. 34-35) și schema lecției: compunerea prin alăturare, subordonare și abreviere; compusele din fiecare parte de vorbire; elementele savante și sensul lor; felurile abrevierii și scrierea fără puncte; familia lexicală.') },
      { etapa: 'Aplicații, ex. 2-3', timp: '5 min', activitate: pasi(
        'Partea de vorbire a compuselor din listă și procedeul de compunere al cuvintelor de la ex. 3, frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (procedeul de compunere) și ex. 2 (elementele savante), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Scrierea compuselor, Aplicații, ex. 7', timp: '4 min', activitate: pasi(
        'Varianta corectă din fiecare enunț, verificată în DOOM3 pe telefon sau pe calculatorul clasei.') },
      { etapa: 'Jocul abrevierilor, „Provocări”', timp: '4 min', activitate: pasi(
        'În perechi, două minute: cât mai multe abrevieri cunoscute, apoi schimb de caiete și ghicirea instituțiilor.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1, 4-6 și 8; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-14': {
    titlu: 'Pleonasmul',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Identifică și corectează pleonasmele.'],
    resurse: ['Manual Art 7, p. 36', fisa(14), 'Quizul „Pleonasmul” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Greșelile din texte, Explorare, ex. 1-2', timp: '7 min', activitate: pasi(
        'Doi elevi citesc textele a-b de la p. 36; clasa găsește greșelile de exprimare.',
        'Le corectăm și explicăm, pentru fiecare, cum am procedat.') },
      { etapa: 'Intrusul, ex. 3-4', timp: '6 min', activitate: pasi(
        'Intrusul din seriile a-d; enunțul cu greșeala de exprimare dintre variantele a-c.') },
      { etapa: 'Notițe: pleonasmul', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (p. 36): pleonasmul, cauza lui (necunoașterea sensului originar), pleonasmele lexicale, gramaticale și lexico-gramaticale, pleonasmele acceptate.') },
      { etapa: 'Aplicații, ex. 1', timp: '6 min', activitate: pasi(
        'Enunțurile corectate în caiete; câte un elev citește varianta corectă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (găsește pleonasmul) și ex. 2 (ce fel de pleonasm?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '7 min', activitate: pasi(
        'Quizul „Pleonasmul”, frontal; la fiecare greșeală, explicăm sensul cuvântului care se repetă.') },
      { etapa: 'Aplicații, ex. 2, oral', timp: '3 min', activitate: pasi(
        'Seria care conține un intrus și de ce.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3; fișa de exerciții, pagina 2; trei pleonasme auzite în jur, notate și corectate.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-15': {
    titlu: 'Categoriile semantice (actualizare). Confuziile paronimice',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Reactualizează sinonimele, antonimele, omonimele și cuvintele polisemantice și identifică confuziile paronimice.'],
    resurse: ['Manual Art 7, p. 37', fisa(15), 'Schema „Categoriile semantice. Confuziile paronimice” (/materiale/clasa-7/unitatea-1/lectia-15/schema.svg)', 'DEX sau dexonline.ro'],
    desfasurare: [
      { etapa: 'Sinonime și antonime, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Sinonimele cuvintelor scrise italic din fragmentul de la p. 37; antonimele pentru „a deschide” și „uscată”.') },
      { etapa: 'Sensuri, ex. 3-5', timp: '7 min', activitate: pasi(
        'Sensurile lui „fluture” în enunțurile a-c; raportul dintre „mare” din text și „mare” din enunț; două enunțuri cu sensuri diferite ale lui „ochi”.') },
      { etapa: 'Temporar sau temporal? Ex. 6-7', timp: '4 min', activitate: pasi(
        'Confuzia din dialog și de unde vine; enunțuri cu cele două cuvinte.') },
      { etapa: 'Notițe: categoriile semantice și paronimele', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (p. 37) și schema lecției: sinonimele, antonimele, sensul propriu (de bază și secundar) și figurat, omonimele (omofone, omografe), cuvântul polisemantic, paronimele și confuzia paronimică, cu exemplele din manual.') },
      { etapa: 'Aplicații, ex. 4', timp: '3 min', activitate: pasi(
        'Paronimul potrivit în enunțurile a-d, frontal, cu sensul fiecărui cuvânt.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce relație?) și ex. 2 (paronimul potrivit), individual, 7 minute.',
        'Verificare, 4 minute; sensurile nesigure le căutăm pe dexonline.') },
      { etapa: 'Jocul paronimelor, Aplicații, ex. 6', timp: '7 min', activitate: pasi(
        'În perechi: text scris împreună, fiecare continuând ideea colegului, cu câte un cuvânt din perechile date; două perechi citesc.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-3 și 5; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Îmbinări libere de cuvinte și locuțiuni. Termeni științifici. Limbaj popular. Variație regională a limbii',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Diferențiază îmbinările libere de locuțiuni și identifică termeni științifici, limbaj popular și variații regionale ale limbii.'],
    resurse: ['Manual Art 7, p. 38', fisa(16), 'Schema „Locuțiuni, termeni științifici, limbaj popular, variație regională” (/materiale/clasa-7/unitatea-1/lectia-16/schema.svg)', 'DEX sau dexonline.ro'],
    desfasurare: [
      { etapa: 'Replicile copiilor, Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Doi elevi citesc schimbul de replici de la p. 38.',
        'În ce replică „a pune” are un sens distinct? Un singur cuvânt pentru fiecare grup colorat și partea lui de vorbire.') },
      { etapa: 'Domenii și regiuni, ex. 5-6', timp: '3 min', activitate: pasi(
        'În ce domeniu se folosesc „acid” și „sulfuric”? Ce înseamnă „a coși” în fragmentul lui Creangă?') },
      { etapa: 'Verzi și uscate, ex. 7', timp: '3 min', activitate: pasi(
        'Diferența dintre grupul „verzi și uscate” din cele două enunțuri.') },
      { etapa: 'Notițe: locuțiuni, termeni, variație regională', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (p. 38) și schema lecției: locuțiunea (sens unitar, valoarea cuvântului cu care e sinonimă) și îmbinarea liberă; termenii științifici pe domenii; limbajul popular; variația regională (pronunții, forme, construcții, cuvinte ale unei zone).') },
      { etapa: 'Aplicații, ex. 1 și 3', timp: '5 min', activitate: pasi(
        'Sinonime pentru locuțiunile din textele a-c; termenii științifici din fragmentul de Mircea Eliade și domeniul lor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (locuțiune sau îmbinare liberă?) și ex. 2 (termeni științifici), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Cuvinte din regiuni, Aplicații, ex. 5', timp: '7 min', activitate: pasi(
        'Grupe de 4-6: sensul cuvintelor regionale din listă, presupus întâi, apoi verificat pe dexonline; fiecare grupă prezintă două cuvinte.') },
      { etapa: 'Aplicații, ex. 4', timp: '2 min', activitate: pasi(
        'Cuvântul care ilustrează variația regională în textul a de la ex. 1.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 (enunțuri cu locuțiunile date); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Utilizarea corectă a accentului',
    data: null,
    tipOra: 'Predare, fonetică',
    durata: 50,
    obiective: ['Identifică locul corect al accentului în cuvinte.'],
    resurse: ['Manual Art 7, p. 39', fisa(17), 'Quizul „Utilizarea corectă a accentului” (materialul de joc al lecției)', 'DOOM3 sau doom.lingv.ro'],
    desfasurare: [
      { etapa: 'Cine are dreptate? Explorare, ex. 1', timp: '4 min', activitate: pasi(
        'Doi elevi citesc dialogul de la p. 39; verificăm împreună în DOOM3 pronunțarea cuvântului discutat.') },
      { etapa: 'Silabele accentuate, ex. 2-3', timp: '3 min', activitate: pasi(
        'Ce silabă se pronunță mai intens în cuvintele date? Ce se schimbă la „copii” când mutăm accentul?') },
      { etapa: 'Notițe: accentul', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 39): accentul, notarea lui în DOOM3, accentul liber (pe ultima, penultima, antepenultima silabă și mai departe), omografele, accentul secundar, consultarea DOOM3.') },
      { etapa: 'Joc cu accente, Aplicații, ex. 1', timp: '6 min', activitate: pasi(
        'În perechi, două minute: pe ce silabă cade accentul în cuvintele din listă; confruntare cu DOOM3 și topul câștigătorilor.') },
      { etapa: 'Poezia lui Marin Sorescu, ex. 2', timp: '4 min', activitate: pasi(
        'Elevii subliniază vocalele accentuate din versurile de la p. 39, apoi doi elevi le citesc cu voce tare; ce cuvinte au creat dificultăți?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (silaba accentuată) și ex. 2 (accentul schimbă sensul), individual, 7 minute; cuvintele se verifică în DOOM3.',
        'Verificare, 4 minute.') },
      { etapa: 'Tombola de cuvinte, ex. 5', timp: '6 min', activitate: pasi(
        'Fiecare elev extrage un cuvânt din pălărie, îl pronunță, apoi verificăm în DOOM3; cine l-a accentuat corect trece în dreapta.') },
      { etapa: 'Quizul', timp: '4 min', activitate: pasi(
        'Quizul „Utilizarea corectă a accentului”, frontal.') },
      { etapa: 'Autoevaluare L9-L16', timp: '2 min', activitate: pasi(
        'Elevii completează în caiete cele trei enunțuri de la p. 39.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-4 (propozițiile cu omografe și dialogul); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz; autoevaluarea achizițiilor din lecțiile 9-16.',
  },
  'lectia-18': {
    titlu: 'Etapele scrierii. Organizarea unui text în funcție de situația de comunicare',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează o recenzie sau o prezentare de film ori de blog, cu respectarea etapelor scrierii.'],
    resurse: ['Manual Art 7, pp. 40-41', fisa(18), 'Fișa lecției (/materiale/clasa-7/unitatea-1/lectia-18/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'De unde aflăm, „Pentru început”, ex. 1-2', timp: '4 min', activitate: pasi(
        'Cum aflați despre cărți, filme sau locuri? Ce ați propune colegilor pentru o călătorie imaginară: film, carte sau blog?') },
      { etapa: 'Cele trei texte, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Capturile de ecran de la p. 40: scopul textelor, pe ce cade accentul la final, ce însoțește textul și de ce.') },
      { etapa: 'Etapele scrierii, ex. 5', timp: '3 min', activitate: pasi(
        'Cele cinci etape din clasa a V-a, reamintite frontal.') },
      { etapa: 'Notițe: etapele scrierii și recenzia', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (pp. 40-41): revizuirea, editarea, publicarea, cu ce faci la fiecare; recenzia și prezentarea de film sau de blog; ce conțin introducerea, cuprinsul (fără deznodământ) și încheierea (recomandarea); prezentarea video.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (etapa potrivită) și ex. 2 (unde pun secvența?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pregătirea, Aplicații, ex. 1-2', timp: '8 min', activitate: pasi(
        'Pe fișa lecției: fiecare își alege cartea, filmul sau blogul despre călătorii, scopul, publicul, răspunde la cele șase întrebări esențiale și face planul.') },
      { etapa: 'Ciorna, Aplicații, ex. 3', timp: '8 min', activitate: pasi(
        'Elevii încep ciorna, concentrându-se pe dezvoltarea ideilor din plan; trec printre bănci și ajut la introducere.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-5 (ciorna terminată, revizuită și editată); Explorare, ex. 4 (un videoclip de prezentare, cu sonorul închis); fișa de exerciții, pagina 2.',
        'Ora viitoare, recenziile se evaluează în perechi, pe grila de la p. 41.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; planul și ciorna de pe fișa lecției.',
  },
  'lectia-19': {
    titlu: 'Stil: naturalețe, armonie, varietate, concizie, originalitate',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Identifică trăsăturile stilistice ale unui text și redactează un text propriu, cu calitățile stilului învățate.'],
    resurse: ['Manual Art 7, pp. 42-43', fisa(19), 'Fișa lecției (/materiale/clasa-7/unitatea-1/lectia-19/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Recenziile, în perechi (Aplicații, ex. 6, p. 41)', timp: '5 min', activitate: pasi(
        'Schimb de recenzii cu colegul de bancă; evaluare pe grila de la p. 41, cu DA sau NU la fiecare criteriu.') },
      { etapa: 'Fragmentul cu „Acum”, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'În perechi: proprietatea termenilor, puritatea și originalitatea în fragmentul de la p. 42.',
        'Stilul simplu, concis, armonios, variat în „Cum e lumea”, cu citate; ce criteriu contează cel mai mult pentru plăcerea lecturii?') },
      { etapa: 'Trei texte, ex. 4 a-f', timp: '9 min', activitate: pasi(
        'Citesc cele trei fragmente (Marin Preda, Lucian Blaga, Alexandru Macedonski); pentru fiecare întrebare a-f, elevii aleg textul și justifică.') },
      { etapa: 'Notițe: stilul', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (p. 43): stilul; calitățile generale (claritate, corectitudine, precizie, proprietate, puritate) și particulare (naturalețe, concizie, armonie, varietate, originalitate), cu câte o explicație.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce calitate lipsește?) și ex. 2 (rescrie), individual, 7 minute.',
        'Verificare, 4 minute; citim două rescrieri pentru fiecare enunț.') },
      { etapa: 'Note pentru stil, Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Note de la 1 la 5 pentru fiecare calitate a celor trei texte, în tabelul din caiet; concluzia despre trăsătura dominantă a fiecăruia.') },
      { etapa: 'Fișa lecției', timp: '4 min', activitate: pasi(
        'Ex. 2-3: enunțurile rescrise pentru concizie și pentru varietate.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 2-5 (textul de circa 200 de cuvinte despre călătorie, rescrierea în stil propriu, reducerea la jumătate, autoevaluarea pe grila de la p. 43); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Interevaluarea recenziilor pe grila de la p. 41; fișa de exerciții, ex. 1-2; autoevaluare pe grila de la p. 43.',
  },
  'lectia-20': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea I: legarea secvențelor narative, narator/autor, textul discontinuu.'],
    resurse: ['Manual Art 7, pp. 44-45', fisa(20), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Cartonașe cu rolurile de la cerința 1'],
    desfasurare: [
      { etapa: 'Ciorchinele unității', timp: '3 min', activitate: pasi(
        'Pe tablă, „Călătorie în necunoscut”; elevii spun pe rând câte o noțiune de lectură sau de comunicare învățată în unitate.') },
      { etapa: 'Lectura fragmentului', timp: '6 min', activitate: pasi(
        'Citim introducerea de la p. 44, apoi citesc fragmentul din „Fram, ursul polar” de Cezar Petrescu.') },
      { etapa: 'Cartonașele, cerința 1', timp: '8 min', activitate: pasi(
        'Elevii trag la sorți cartonașele (autorul, naratorul, Petruș, fetița, bunicul, Mihai Stoican) și răspund în două minute la întrebările de pe ele.',
        'Câte un elev prezintă răspunsurile fiecărei categorii.') },
      { etapa: 'Cerințele 2-5', timp: '5 min', activitate: pasi(
        'Tipul de text; firele narative și procedeul; la ce se referă depărtarea; figura de stil din descrierea circului.') },
      { etapa: 'Personajele, cerințele 6, 9-12', timp: '7 min', activitate: pasi(
        'Trăsăturile fizice ale lui Petruș și mijloacele de caracterizare; ce spune bunicul despre băiat; cum își convinge fetița bunicul; reacțiile bunicului; cum îl vede tatăl.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (textul „Două ferestre”, scris pentru fișă, și noțiunile de lectură), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '6 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”, frontal; discutăm răspunsurile greșite.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: cerințele 7-8 și 13-18 (cerința 18: planul simplu de idei); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-21': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea I: fraza, conjuncția, derivarea, compunerea, pleonasmul, paronimele.'],
    resurse: ['Manual Art 7, pp. 44-45', fisa(21), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'DOOM3'],
    desfasurare: [
      { etapa: 'O frază scurtă, cerința 25', timp: '4 min', activitate: pasi(
        'Scriu pe tablă enunțul de la cerința 25; felul propozițiilor, raportul dintre ele și partea de vorbire a cuvântului marcat.') },
      { etapa: 'Vocabularul, cerințele 19-21', timp: '7 min', activitate: pasi(
        'Sensul locuțiunilor de la cerința 19; formarea a șase cuvinte alese din lista de la cerința 20; intrusul din seria cu „urs”.') },
      { etapa: 'Paronime, regionalisme, accent, cerințele 22-24', timp: '7 min', activitate: pasi(
        'Enunțuri cu atlas și atlaz; un cuvânt regional din text; accentele cuvintelor de la cerința 24, verificate în DOOM3.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-3 (trei fraze, analiza lor, formarea cuvintelor), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '7 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”, frontal; la greșeli, revenim la notițe.') },
      { etapa: 'Recenzia, cerința 26: planul', timp: '6 min', activitate: pasi(
        'Fiecare elev alege o carte sau un film cu personaje animale și face în caiet planul recenziei (introducere, cuprins fără final, încheiere cu recomandare).') },
      { etapa: 'Pregătirea evaluării', timp: '4 min', activitate: pasi(
        'Anunț proba de ora viitoare: un fragment nou, zece cerințe de limbă și lectură (partea A) și o recenzie (partea B).',
        'Ce recitesc acasă: notițele despre narator, firele narative, fraza, formarea cuvintelor, locuțiuni și recenzie.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: cerința 26 (recenzia de 50-100 de cuvinte); fișa de exerciții, pagina 2; recapitularea pentru evaluare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
  },
  'lectia-22': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea I.'],
    resurse: ['Testul, Manual Art 7, p. 46', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; manualul e deschis la p. 46 (fragmentul din „Pumn de fier” de Mircea Pricăjan).',
        'Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (recenzia de 100-150 de cuvinte despre „Cum e lumea”), 10 puncte din oficiu.',
        'Timpul orientativ: 5 minute pentru citirea textului, 20 pentru partea A, 15 pentru recenzie; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.',
        'Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să numere cuvintele recenziei și să verifice ortografia.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
