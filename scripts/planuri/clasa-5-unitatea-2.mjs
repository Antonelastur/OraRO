// Planuri de lecție detaliate pentru Unitatea II „De-a ce mă joc", clasa a V-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 5 și ghidul profesorului. Rezolvările
// din ghid nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-5/unitatea-2/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul narativ literar. Vizită... de I.L. Caragiale',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din textul narativ Vizită... de I.L. Caragiale.'],
    resurse: ['Manual Art 5, pp. 42-44', fisa(1), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        '„Pentru început”, p. 42, ex. 1: arunc o minge unui elev, care își prezintă jocul preferat printr-un indiciu sau prin mimă; cine ghicește primește mingea. Notez jocurile pe tablă.',
        'Ex. 2: ce faceți când aveți musafiri? Două minute în grupe de câte patru, apoi câte un reprezentant spune doar ideile noi.') },
      { etapa: 'Despre autor', timp: '3 min', activitate: pasi(
        'Prezentarea de la p. 42: I.L. Caragiale, contemporan cu Eminescu, Creangă și Slavici; piese de teatru, nuvele, schițe; Teatrul Național din București îi poartă numele.',
        'Întreb dacă au mai citit ceva de el.') },
      { etapa: 'Lectura', timp: '15 min', activitate: pasi(
        'Ex. 3: lectură în gând; fiecare notează cuvintele necunoscute și personajul pe care l-ar citi pe roluri.',
        'Lectura pe roluri (musafirul-narator, madam Popescu, Ionel, jupâneasa) sau înregistrarea din manualul digital.',
        'Lămurim cuvintele din subsol: onomastică, roșior, formalitate, de rigoare, mașină (spirtieră), marțial, rotat, a se reculege, neutralitate, chesea, vestibul, policandru, mondir; expresia franceză de la final.') },
      { etapa: 'Impresii după prima lectură', timp: '10 min', activitate: pasi(
        'Ilustrația de la p. 43: se potrivește cu textul? Ce detalii lipsesc?',
        '„Impresii după prima lectură”, ex. 1: fiecare notează în caiet ce l-a amuzat sau l-a nedumerit; câțiva citesc.',
        'Ex. 2, în grupe: la ce experiență sau la ce altă lectură te-a dus textul?',
        'Revenim la jocurile de pe tablă: apar în text? De ce da sau de ce nu?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine spune?), ex. 2 (detaliile vizitei) și ex. 3 (cuvinte de altădată), individual, 9 minute.',
        'Verificare, 4 minute (rezolvările sunt în notițele profesorului).') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: recitirea textului; fișa de exerciții, pagina 2, ex. 4 și 5 (scrisoarea musafirului).') },
    ],
    evaluare: 'Observarea sistematică a lecturii (atenție, lectură fluentă, dorința de a-și spune impresiile); fișa de exerciții, ex. 1-3.',
  },
  'lectia-2': {
    titlu: 'Timp, spațiu și acțiune',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Recunoaște reperele temporale și spațiale ale acțiunii și ordonează cronologic ideile principale ale textului Vizită...'],
    resurse: ['Manual Art 5, pp. 45-46', fisa(2), 'Schema „Timp, spațiu și acțiune. Textul narativ” (/materiale/clasa-5/unitatea-2/lectia-2/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Dacă am proiector: primul minut din ecranizarea din 1952; ce e la fel și ce e diferit față de text?',
        'Altfel: „Cât credeți că a durat vizita? O oră, o zi?”') },
      { etapa: 'Dirijarea învățării: timpul și spațiul', timp: '12 min', activitate: pasi(
        '„Explorare”, p. 45, ex. 1-4, pe grupe (fiecare grupă un exercițiu, apoi raportează; toți notează): indiciul de timp și ce aflăm din el; cât durează vizita și cum ați calculat; ce ne spune epoca (biografia autorului, obiectele); unde se petrece acțiunea (pasajele).',
        'Pe tablă, săgeata acțiunii cu indicii de timp și de spațiu.',
        'În caiete, după Repere: acțiunea; indicii de timp (epocă, an, zi, moment, durată) și de spațiu (țară, oraș, casă).') },
      { etapa: 'Dirijarea învățării: acțiunea', timp: '12 min', activitate: pasi(
        '„Explorare”, p. 45, grupe de 3-4: ordonează cronologic cele zece idei principale și le numerotează; verificăm.',
        'Repere, p. 46: desenez schema textului narativ (situația inițială → succesiunea de întâmplări: complicație, acțiune, rezolvare → situația finală); elevii o copiază.',
        '„Aplicații”, ex. 1: asociem numerele ideilor cu secvențele.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (timp sau spațiu?), ex. 2 (obiecte de altădată) și ex. 3 (schema unei povești noi), individual, 8 minute.',
        'Verificare, 5 minute; la ex. 3 citim povestea Marei în ordinea corectă.') },
      { etapa: 'Reflecție și temă', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 2: cel mai liniștit și cel mai tensionat moment al vizitei; două grupe mimează momentele alese.',
        'Concluzie, notată în caiete: textul narativ are acțiune, în timp și spațiu, realizată de personaje, cu situație inițială, întâmplări și situație finală.',
        'Tema: „Aplicații”, ex. 3 și 4 (complicațiile; figura acțiunii); „Provocări”, ex. 2; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică (localizează informații, ordonează ideile, face legături cauză-efect); fișa de exerciții, ex. 1-3.',
  },
  'lectia-3': {
    titlu: 'Planul dezvoltat de idei',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Alcătuiește planul dezvoltat de idei al unui text narativ, pe baza unui organizator grafic.'],
    resurse: ['Manual Art 5, p. 47', fisa(3), 'Schema „Planul dezvoltat de idei” (/materiale/clasa-5/unitatea-2/lectia-3/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Reactualizarea', timp: '5 min', activitate: pasi(
        'Doi elevi citesc ideile ordonate ora trecută.',
        'Întreb: „Ar înțelege cineva care n-a citit textul cum i s-au pătat pantalonii musafirului?” Ce ar lipsi?') },
      { etapa: 'Explorare', timp: '8 min', activitate: pasi(
        '„Explorare”, p. 47, ex. 1: grupăm ideile în plan simplu, după tabel (cum începe acțiunea, ce se întâmplă, cum se termină).',
        'Ex. 2: formulăm o idee care completează, prin detalii, prima idee principală.') },
      { etapa: 'Dirijarea învățării: ideea secundară', timp: '5 min', activitate: pasi(
        'Repere: ideea secundară (amănunte legate de ideea principală); planul dezvoltat (idei principale + idei secundare, în ordinea din text).',
        'Schema pe tablă, copiată în caiete: idei principale + idei secundare = plan dezvoltat de idei.') },
      { etapa: 'Aplicații: planul dezvoltat al textului', timp: '12 min', activitate: pasi(
        '„Aplicații”, ex. 1: elevii scriu planul dezvoltat al textului Vizită... în organizatorul din manual (situația inițială, succesiunea de întâmplări, situația finală); primul rând e modelul din manual.',
        'Trec printre bănci și ajut la formularea detaliilor.') },
      { etapa: 'Evaluare reciprocă', timp: '5 min', activitate: pasi(
        'Ex. 2: colegul de bancă verifică planul după lista de control din manual (detalii relevante, ordinea din text, exprimare corectă).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (planul dezvoltat al textului „Bicicleta roșie”) și ex. 2 (principală sau secundară?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '3 min', activitate: pasi(
        'Ce pași am făcut ca să ajungem la planul dezvoltat?',
        'Tema: forma finală a planului dezvoltat, după observațiile colegului; fișa de exerciții, pagina 2; „Portofoliu”: schița benzii desenate (ce ar fi în fiecare vinietă).') },
    ],
    evaluare: 'Evaluarea reciprocă după lista de control; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Personajele',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Identifică personajele și trăsăturile lor fizice și morale în textul Vizită...'],
    resurse: ['Manual Art 5, pp. 48-49', fisa(4), 'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Ilustrația de la p. 43: sunt toate personajele? Scriu lista pe tablă; pe parcurs, adăugăm lângă fiecare ce aflăm despre el.') },
      { etapa: 'Explorare', timp: '8 min', activitate: pasi(
        '„Explorare”, p. 48, ex. 1: personajele în ordinea apariției și în ordinea importanței.',
        'Ex. 2: fișa de identitate a lui Ionel (familie, vârstă, trăsături fizice, îmbrăcăminte), în caiet.') },
      { etapa: 'Dirijarea învățării: personajul', timp: '5 min', activitate: pasi(
        'Repere, p. 48, cu schemă pe tablă: personajul (ființă, animal, obiect însuflețit; există doar în text); principal, secundar, episodic; trăsăturile se deduc din fapte, din vorbe și din ce spun alții.') },
      { etapa: 'Aplicații pe grupe', timp: '15 min', activitate: pasi(
        '„Aplicații”, ex. 1, frontal: trăsăturile lui Ionel din pasajele date.',
        'Grupele lucrează în paralel: ex. 2 (diagrama Venn: ofițerul și Ionel) sau ex. 3 (câmpul lexical al armatei); ex. 5-8 (mama lui Ionel); ex. 9-13 (cine povestește și ce atitudini au personajele).',
        'Raportorii prezintă; notez pe tablă, iar elevii în caiete, trăsăturile lui Ionel și ale mamei.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (fapta și trăsătura) și ex. 2 (ce spune mama, ce face mama), individual, 8 minute.',
        'Verificare, 4 minute. Variantă: fișa lecției (tabelul trăsăturilor și citatele).') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Ex. 4: în care dintre cele două tablouri s-ar potrivi mai bine Ionel? De ce?',
        'Tema: „Provocări”, ex. 1-2 (SMS-ul pentru Ionel); ex. 8, în scris (ce ar spune mama când află de dulceață; jocul de rol îl facem la începutul orei viitoare); fișa de exerciții, pagina 2, ex. 3-4.') },
    ],
    evaluare: 'Observarea sistematică (deducții despre personaj, argumente din text); fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează o opinie despre semnificația textului Vizită..., raportată la imaginea copilului în epocă.'],
    resurse: ['Manual Art 5, p. 50', fisa(5), 'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-5/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Jocul de rol', timp: '5 min', activitate: pasi(
        'Două perechi joacă scena de la ex. 8 (tema): madam Popescu află că Ionel i-a pus musafirului dulceață în șoșoni. Ce le spune musafirului și lui Ionel?') },
      { etapa: 'Interpretare: Ionel și educația lui', timp: '10 min', activitate: pasi(
        '„Interpretare”, p. 50, ex. 1-4, frontal: ce spun jucăriile despre Ionel; de ce o atacă pe jupâneasă; sunt „sănătoase” părerile mamei despre educație?; se poartă ca un adult, ca un ofițer?',
        'Cer de fiecare dată dovada din text.') },
      { etapa: 'Minidezbatere', timp: '8 min', activitate: pasi(
        'Ex. 6: fiecare elev alege o cauză a purtării lui Ionel (răsfățul, tatăl absent, lipsa de atenție, necunoașterea regulilor, reguli prea stricte); se formează grupe pe opțiuni; fiecare grupă aduce două argumente din text.') },
      { etapa: 'Tema și titlul', timp: '6 min', activitate: pasi(
        'Ex. 7: tema textului, la tablă și în caiete (educația copiilor, relația dintre părinți și copii, familia...).',
        'Ex. 8: ce arată punctele de suspensie din titlu? (o vizită cu peripeții).',
        'Ex. 9: de ce se mai citește textul și azi?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (alt titlu) și ex. 2 (dacă ai fi fost mama lui Ionel), individual, 8 minute.',
        'Verificare, 5 minute: comparăm titlurile propuse și soluțiile.') },
      { etapa: 'Autoevaluare și temă', timp: '8 min', activitate: pasi(
        'Autoevaluare L1-L5: cele trei afirmații, în caiet.',
        'Tema: „Provocări”, ex. 3 și 4 (educația din familie; răsfățul); ex. 5 (investigația), facultativ; fișa de exerciții, pagina 2, ex. 3-4; minitestul, dacă îl folosesc.') },
    ],
    evaluare: 'Observarea sistematică a argumentării; autoevaluarea L1-L5; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Text auxiliar. Exuvii de Simona Popescu (fragment)',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Compară textul auxiliar Exuvii de Simona Popescu cu textul de bază al unității, folosind jurnalul cu dublă intrare.'],
    resurse: ['Manual Art 5, pp. 51-52', fisa(6), 'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-6/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Întreb: „Poate fi o carte o jucărie?” (dacă am, pornesc materialul video cu Simona Popescu din manualul digital).',
        'Explic titlul: exuvia (vezi subsolul) și numele capitolului, „Regnum puerile”, adică „Regatul copiilor”.') },
      { etapa: 'Lectura cu jurnalul cu dublă intrare', timp: '15 min', activitate: pasi(
        'Explic metoda: pagina împărțită în două; stânga, pasajul care te-a impresionat; dreapta, de ce l-ai ales (ți-a amintit ceva, nu ești de acord, te-a surprins).',
        'Lectură în gând; fiecare notează cel puțin trei pasaje.',
        'Lămurim glosarul: mârșăvie, ferocitate, scatoalcă, viperenie (inventat de autoare), insinuant, harpie.') },
      { etapa: 'Discutarea textului', timp: '12 min', activitate: pasi(
        '„Discutarea textului”, ex. 1: în perechi, comparați jurnalele.',
        'Ex. 4, minidezbatere pe grupe: ce are fragmentul în comun cu Vizită...?',
        'Ex. 6: fetele și băieții sunt „specii diferite”? Un elev e reporter și întreabă câte un reprezentant al fetelor și al băieților.',
        'Ex. 7: e furt să trișezi la joc? Răspuns scurt, în scris.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (ziua copiilor), ex. 2 (cinstit sau necinstit?) și ex. 3 (cuvintele din glosar), individual, 8 minute.',
        'Verificare, 5 minute.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Ce alte texte despre jocuri ați citit? Prezint „Biblioteci deschise”: „Cartea cu jucării” de Tudor Arghezi și „Harriet spionează” de Louise Fitzhugh.',
        'Tema: „Portofoliu” (răspunsul la întrebarea „Este greu să fii copil?”); fișa de exerciții, pagina 2, ex. 4-5.') },
    ],
    evaluare: 'Jurnalul cu dublă intrare; participarea la minidezbatere; fișa de exerciții, ex. 1-3.',
  },
  'lectia-7': {
    titlu: 'Diversitate culturală: jocuri de ieri și de azi',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Compară cuvintele care denumesc jocul în mai multe limbi și recunoaște jocul ca punte între culturi diferite.'],
    resurse: ['Manual Art 5, pp. 53-54', fisa(7), 'Infograficul „Jocuri de ieri și de azi” (/materiale/clasa-5/unitatea-2/lectia-7/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        '„Pentru început”, p. 53, ex. 1: grupăm cuvintele pentru joc din mai multe limbi după asemănare; observăm formele apropiate din limbile romanice (latină: jocus).',
        'Ex. 2: fiecare spune un joc tradițional românesc și unul din altă țară; le notez în două coloane.') },
      { etapa: 'Jocuri de ieri', timp: '10 min', activitate: pasi(
        'Citim lista lui Costin Moisil; fiecare bifează în gând jocurile jucate; din ce categorie ați bifat cele mai multe?',
        '„Aplicații”, ex. 1, pe grupe: trei jocuri specific românești și trei împrumutate; completați lista cu jocuri digitale; care e cel mai popular în clasă?',
        'Ex. 2: afișul expoziției „Piua”: ce sugerează praștia cu cablu electric?') },
      { etapa: 'Ce este jocul', timp: '3 min', activitate: pasi(
        'În caiete, după Repere: jocul (distracție, imaginație, dar și reguli, respect, colaborare; apropie culturile).',
        'Întrebare: poate fi lectura un joc? Cu ce reguli?') },
      { etapa: 'Jocuri de azi', timp: '10 min', activitate: pasi(
        'Lectura în ștafetă a textului despre jocurile digitale (p. 54).',
        'Întrebările a-e, frontal: cea mai importantă informație; ce e atractiv; ce seamănă cu jocul lecturii; identități noi în joc; jocurile digitale și învățarea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (jocul și țara lui), ex. 2 (ieri și azi) și ex. 3 (adevărat sau fals), individual, 8 minute.',
        'Verificare, 5 minute.') },
      { etapa: 'Reflecție și temă', timp: '7 min', activitate: pasi(
        '„Aplicații” (p. 54), ex. 2-3: v-au ajutat jocurile digitale să comunicați cu copii din alte țări? În perechi, fiecare își prezintă jocul digital preferat.',
        'Sinteză: jocul e universal; unele jocuri se joacă fără să vorbești aceeași limbă.',
        'Tema: „Portofoliu” (două reclame: un joc tradițional și jocul digital preferat); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a participării; fișa de exerciții, ex. 1-3.',
  },
  'lectia-8': {
    titlu: 'Proiect individual. Jocuri fără vârstă (anunțare)',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului individual Jocuri fără vârstă.'],
    resurse: ['Manual Art 5, p. 55', 'Fișa proiectului (/materiale/clasa-5/unitatea-2/lectia-8/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Ce jucau bunicii voștri când erau copii?” Trei-patru elevi răspund; notez jocurile pe tablă.') },
      { etapa: 'Prezentarea proiectului', timp: '15 min', activitate: pasi(
        'Sarcina (p. 55): prezintă un joc aflat de la părinți, bunici sau de la cineva din comunitate, românesc sau din altă cultură.',
        'Calendarul, trei săptămâni: I – interviul, alegerea jocului, documentarea; II – posterul, cu desene sau fotografii și sursele; III – prezentarea orală, de cel mult trei minute, exersată acasă.',
        'Împart fișa proiectului; stabilim data prezentărilor.') },
      { etapa: 'Criteriile de evaluare', timp: '8 min', activitate: pasi(
        'Citim autoevaluarea de la p. 55 și criteriile din fișă; pentru fiecare criteriu dau un exemplu de „bine” și unul de „slab” (de exemplu, un poster cu sursele scrise și unul fără).') },
      { etapa: 'Cum iau un interviu', timp: '12 min', activitate: pasi(
        'Formulăm împreună 5-6 întrebări pentru persoana intervievată: Cum se numea jocul? Câți jucători erau? Care erau regulile? Unde se juca? De la cine l-ați învățat? Se mai joacă azi?',
        'Elevii le notează în caiet; două perechi simulează interviul în fața clasei.') },
      { etapa: 'Planul personal', timp: '7 min', activitate: pasi(
        'Fiecare notează în fișă pe cine va întreba, până când și de ce materiale are nevoie pentru poster.') },
      { etapa: 'Încheiere', timp: '3 min', activitate: pasi(
        'Răspund la întrebări; anunț că la sfârșitul fiecărei săptămâni verificăm stadiul proiectului.') },
    ],
    evaluare: 'Fișa de pornire a proiectului; întrebările de interviu din caiet.',
  },
  'lectia-9': {
    titlu: 'Schimburi de replici în dialog',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Construiește, prin joc de rol, un schimb de replici adecvat unei situații de comunicare date (invitație, reproș, compliment).'],
    resurse: ['Manual Art 5, pp. 56-57', fisa(9), 'Quizul „Schimburi de replici în dialog” (materialul de joc al lecției)', 'Bilețele cu situații de comunicare, pregătite de profesor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 56, ex. 1-2, frontal: vă e ușor să vorbiți cu colegii, cu profesorii, cu oameni pe care îi vedeți prima dată? Ce vă face să vă simțiți în largul vostru?') },
      { etapa: 'Explorare: scena din Vizită...', timp: '10 min', activitate: pasi(
        '„Explorare”, ex. 1: fragmentul din ecranizarea din 1952 (min. 4:07-4:30) sau citit pe roluri, după textul din manual.',
        'Ex. 2, în grupe de 3-4: tema discuției; cine întreabă și cine răspunde în primele patru replici; replica cu reproș; cum respinge Ionel reproșul. Grupele raportează.') },
      { etapa: 'Dirijarea învățării: dialogul', timp: '5 min', activitate: pasi(
        'În caiete, după Repere: dialogul; continuitatea replicilor; perechile: întrebare-răspuns, invitație-acceptare sau refuz, compliment-mulțumire, reproș-acceptare sau respingere; atitudinea politicoasă.') },
      { etapa: 'Jocurile de rol', timp: '17 min', activitate: pasi(
        '„Aplicații”, ex. 1: șase perechi primesc bilețele cu situațiile 1-6; 3 minute de pregătire, 2 minute de joc.',
        'Ceilalți completează fișa de observare de la ex. 2 (rol interpretat corect, exprimare clară, politețe).',
        'După fiecare joc: ce formule au folosit? (Vreau să te invit..., Îmi pare rău, dar..., Mulțumesc mult...).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce fel de replică?), ex. 2 (răspunsul potrivit) și ex. 3 (politicos sau nu?), individual, 6 minute.',
        'Verificare, 4 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Reflecție și temă', timp: '3 min', activitate: pasi(
        '„Provocări”, ex. 1: ce a fost mai greu, să joci rolul sau să-i evaluezi pe colegi?',
        'Tema: „Provocări”, ex. 2 (chestionarul de autoevaluare); fișa de exerciții, pagina 2, ex. 4-5.') },
    ],
    evaluare: 'Fișele de observare a jocurilor de rol; aprecierea profesorului pentru fiecare pereche; fișa de exerciții, ex. 1-3.',
  },
  'lectia-10': {
    titlu: 'Reguli de acces la cuvânt',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Aplică regulile de acces la cuvânt într-o comunicare de grup, pe baza unui fragment din Vizită...'],
    resurse: ['Manual Art 5, pp. 58-59', fisa(10), 'Quizul „Reguli de acces la cuvânt” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Chem patru elevi și le dau, în secret, sarcina: discutați ce ați făcut ieri la școală; când cineva începe să vorbească, altul îl întrerupe după 2-3 cuvinte. Două minute.',
        'Clasa: ce ați înțeles? Cei patru: cum v-ați simțit când ați fost întrerupți?') },
      { etapa: 'Explorare', timp: '8 min', activitate: pasi(
        '„Explorare”, p. 58, ex. 1-2: momentul în care Ionel e nepoliticos cu musafirul; cum s-a simțit musafirul („M-am simțit..., pentru că...”).',
        'Ex. 3: tabelul „Ce văd / Ce aud”: citim exemplele și adăugăm altele; elevii le notează.') },
      { etapa: 'Dirijarea învățării: regulile', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: regulile de acces la cuvânt (dai cuvântul după ce termini; anunți prin semn și aștepți; are prioritate cine a semnalat primul); moderatorul.') },
      { etapa: 'Jocul culorilor', timp: '15 min', activitate: pasi(
        '„Aplicații”, ex. 1: lectura pe roluri a textului lui Mircea Sântimbreanu (povestitor, două fete; un profesor și o elevă fără replici).',
        'Ex. 2, investigație în grupe de 3-4 (grupele se formează după culoarea bilețelului ales de pe tablă): fiecare grupă își alege un moderator și un semn pentru „vreau să vorbesc”.',
        'Variantă: tehnica acvariului; câțiva elevi observă o grupă cu grila de la p. 59.',
        'Ex. 3-4: grupele raportează concluziile și se autoevaluează după grilă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (pot să vorbesc acum?), ex. 2 (ce regulă s-a încălcat?) și ex. 3 (moderatorul), individual, 8 minute.',
        'Verificare, 5 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        '„Provocări”, ex. 1, în scris: cum v-ați simțit în grupă? V-ați putut spune părerea? Ați respectat regulile?',
        'Tema: „Provocări”, ex. 2; fișa de exerciții, pagina 2, ex. 5. Fișa observatorului (ex. 4) o folosim la următoarea discuție pe grupe.') },
    ],
    evaluare: 'Grila de autoevaluare a grupelor (p. 59); observarea discuției; fișa de exerciții, ex. 1-3.',
  },
  'lectia-11': {
    titlu: 'Verbul. Predicatul verbal',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează categoriile gramaticale ale verbului, formele verbale nepersonale (infinitivul) și identifică predicatul verbal.'],
    resurse: ['Manual Art 5, pp. 60-61', fisa(11), 'Schema „Verbul. Predicatul verbal” (/materiale/clasa-5/unitatea-2/lectia-11/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Mingea verbelor: arunc o minge; cine o prinde spune un verb și o aruncă altuia; cine spune altceva decât un verb iese din joc. Două minute.') },
      { etapa: 'Pentru început', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 60, ex. 1: încă trei verbe legate de joacă.',
        'Ex. 2: istoria cuvântului verb (din franceză și din latină, verbum = cuvânt); maxima „Verba volant, scripta manent” („Cuvintele zboară, scrisul rămâne”).') },
      { etapa: 'Dirijarea învățării: flexiunea verbului', timp: '12 min', activitate: pasi(
        '„Explorare”, p. 60, ex. 1: grupăm cuvintele amestecate printre jucării pe părți de vorbire.',
        'Ex. 2-3: verbele din propoziții și timpul lor; ex. 4: trecem de la persoana I singular la persoana a III-a plural (ce se schimbă?); ex. 5: forma negativă.',
        'În caiete, după Repere: verbul (acțiune, stare, existență); timpurile de bază; persoanele; numerele; forma afirmativă și negativă (nu se analizează împreună cu verbul).') },
      { etapa: 'Dirijarea învățării: predicatul verbal și infinitivul', timp: '10 min', activitate: pasi(
        '„Explorare”, p. 61, ex. 1-2: predicatele din propozițiile despre Ionel și partea de vorbire prin care se exprimă.',
        'Ex. 3-4: trecem verbele la alte persoane; ce verbe nu își schimbă forma? Le căutăm în dicționar.',
        'În caiete: predicatul verbal; formele verbale nepersonale; infinitivul, cu sau fără a (după a putea, fără a: Pot cânta.).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (fișa verbului), ex. 2 (predicate și infinitive) și ex. 3 (schimbă persoana), individual, 10 minute.',
        'Verificare, 5 minute.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        '„Deschideri”: ce arată mulțimea de verbe dintr-un text narativ? Numărăm verbele din pasajul cu toba (ex. 7): acțiunea pare rapidă.',
        'Tema: „Aplicații”, ex. 1, 2, 5, 6 și 8 (ortogramele na/n-a, nai/n-ai); fișa de exerciții, pagina 2, ex. 4-6.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-3.',
  },
  'lectia-12': {
    titlu: 'Modul indicativ. Prezentul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște formele modului indicativ, timpul prezent, și le folosește corect, ortografic și ortoepic, în comunicare.'],
    resurse: ['Manual Art 5, pp. 62-63', fisa(12), 'Schema „Modul indicativ. Prezentul” (/materiale/clasa-5/unitatea-2/lectia-12/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Fiecare elev spune un verb pentru ceva ce a făcut sigur azi. Anunț: modul arată cum privește vorbitorul acțiunea.') },
      { etapa: 'Dirijarea învățării: modul indicativ', timp: '8 min', activitate: pasi(
        'Jocul „Trotineta” (p. 62), în perechi: verbele din text în cele două coșuri (acțiuni sigure, acțiuni posibile); verificare cu altă pereche.',
        'În caiete, după Repere: modul; modul indicativ (acțiune sigură, reală).') },
      { etapa: 'Dirijarea învățării: prezentul', timp: '13 min', activitate: pasi(
        '„Explorare”, ex. 1-3: dialogul copiilor: verbele, momentul acțiunii, cuvântul „acum”.',
        'Ex. 4: tabelul de conjugare: partea comună cu infinitivul; desinențele (roșu) și sunetele care arată timpul (verde); desinența zero.',
        'Ex. 5-6: toarnă și turnează (sensuri diferite); cheltuiește și cheltuie (ambele corecte, DOOM3 o recomandă pe prima).',
        'Ex. 7: valorile prezentului (trecut, viitor, adevăr general).',
        'În caiete: Repere, pp. 62-63.') },
      { etapa: 'Aplicații frontale', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 1 (literele ascunse de jucării), ex. 2 (seria doar cu indicative; atenție la imperative), ex. 5-6 (formele corecte), la tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (sigur sau posibil?), ex. 2 (valorile prezentului) și ex. 3 (conjugare), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        '„Deschideri”: concursul de două zile, greșeli la indicativ prezent auzite la radio sau la televizor (emisiunea, ora, postul).',
        'Tema: „Aplicații”, ex. 3, 4 și 7; fișa de exerciții, pagina 2, ex. 4-5.') },
    ],
    evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-13': {
    titlu: 'Imperfectul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște formele modului indicativ, timpul imperfect, și le folosește corect în comunicare.'],
    resurse: ['Manual Art 5, pp. 64-65', fisa(13), 'Schema „Imperfectul” (/materiale/clasa-5/unitatea-2/lectia-13/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Trei grupe dau, în lanț, verbe la prezent, la trecut și la viitor. Anunț: trecutul are mai multe timpuri; azi, imperfectul.') },
      { etapa: 'Morișca', timp: '7 min', activitate: pasi(
        '„Explorare”, ex. 1: fiecare lipește bilețelul cu verbul pe paleta potrivită a moriștii desenate pe planșă; în centru scriem timpul de bază al tuturor: trecutul.') },
      { etapa: 'Dirijarea învățării: imperfectul', timp: '12 min', activitate: pasi(
        'Ex. 2-3: verbele de sub cele două desene (alunecam, priveam / a apărut, a agățat, a trântit); care acțiuni sunt înaintea celorlalte?',
        'Repere: imperfectul (acțiune de durată sau repetată; descrie cadrul narațiunii).',
        'Ex. 4: conjugarea; sufixele -a- și -ea-.',
        'Ex. 5: voiam, nu vroiam; explic de unde vine greșeala (verbul a vrea).',
        'În caiete: definiția, exemplele și forma corectă voiam.') },
      { etapa: 'Aplicații', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 1, jocul „Mingile”, în perechi: prima pereche care termină corect câștigă.',
        'Ex. 3 (intrusul) și ex. 6 (corectarea), la tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (durată sau repetare?), ex. 2 (completează cu imperfectul) și ex. 3 (satul de altădată), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Doi elevi spun câte o propoziție despre cum era clasa în prima zi de școală, cu verbe la imperfect.',
        'Tema: „Aplicații”, ex. 2, 4, 5 și 7; „Deschideri” (începutul unei narațiuni, cel mult cinci rânduri); fișa de exerciții, pagina 2, ex. 4-5.') },
    ],
    evaluare: 'Observarea sistematică; jocul „Mingile”; fișa de exerciții, ex. 1-3.',
  },
  'lectia-14': {
    titlu: 'Verbul auxiliar a avea. Participiul. Perfectul compus',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște verbul auxiliar a avea, participiul și formarea perfectului compus.'],
    resurse: ['Manual Art 5, pp. 66-67', fisa(14), 'Schema „Verbul auxiliar a avea. Participiul. Perfectul compus” (/materiale/clasa-5/unitatea-2/lectia-14/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Explorare”, ex. 1: șir de perechi față în față; un minut, fiecare îi prezintă celuilalt un joc învățat de curând; schimbăm perechile și repetăm.') },
      { etapa: 'Dirijarea învățării: a avea și participiul', timp: '10 min', activitate: pasi(
        'Ex. 2-6: un elev scrie pe tablă „Am învățat un joc nou.” și „Am un joc nou.” și subliniază predicatele; infinitivul, modul și timpul lor; formele comune ale lui a avea; ce parte de vorbire este „învățat” în „Jocul învățat este frumos”.',
        'În caiete: verbul auxiliar și verbul predicativ; participiul; participiul folosit singur devine adjectiv.') },
      { etapa: 'Dirijarea învățării: perfectul compus', timp: '8 min', activitate: pasi(
        'Explorare, ex. 1-3: desenele cu ploaia (a început, au fugit, a rămas): acțiunea e încheiată? Ce formă verbală e scrisă cu verde?',
        'În caiete: perfectul compus = am, ai, a, am, ați, au + participiu; e timpul povestirii în vorbirea de azi.') },
      { etapa: 'Aplicații', timp: '9 min', activitate: pasi(
        '„Aplicații”, ex. 1 (gruparea pe timpuri), ex. 3 (valoare verbală sau nu), ex. 4 (a avea auxiliar sau predicativ), frontal.',
        'Ex. 7, în perechi: unul dictează textul de la ex. 6 trecut la perfect compus, apoi corectează împreună.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (a avea), ex. 2 (participiul) și ex. 3 (formează perfectul compus), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        '„Deschideri”, oral: două propoziții care continuă povestea cu pisoiul (ex. 9), la perfect compus.',
        'Tema: „Aplicații”, ex. 5, 6, 8 (ortogramele ia/i-a, iau/i-au, la/l-a, mai/m-ai, ne-am/neam) și 9; fișa de exerciții, pagina 2, ex. 4-5.') },
    ],
    evaluare: 'Observarea sistematică; dictarea în perechi; fișa de exerciții, ex. 1-3.',
  },
  'lectia-15': {
    titlu: 'Perfectul simplu și mai-mult-ca-perfectul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște formele perfectului simplu și ale mai-mult-ca-perfectului și diferența de folosire față de perfectul compus.'],
    resurse: ['Manual Art 5, pp. 68-69', fisa(15), 'Schema „Perfectul simplu și mai-mult-ca-perfectul” (/materiale/clasa-5/unitatea-2/lectia-15/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        'Jocul „Povești amestecate” (p. 68), în cerc: încep cu fraza din manual (Scufița Roșie... îl întâlni în pădure pe Motanul Încălțat); fiecare adaugă o întâmplare; ultimul încheie povestea.') },
      { etapa: 'Dirijarea învățării: perfectul simplu', timp: '10 min', activitate: pasi(
        'Ex. 2: plecă, întâlni: ce fel de acțiune arată?',
        'Ex. 3: tabelul de conjugare: sunetele care arată timpul (-a-, -u-, -se-, -i-, -â-) și desinențele cu -ră- la plural.',
        'Ex. 4 (normă): dorii, făgădui; ex. 5: perfectul simplu din Oltenia și Banat (o acțiune din ultimele 24 de ore).',
        'În caiete, după Repere: perfectul simplu, timpul povestirii literare, la persoana a III-a; ortografia: dormii (eu), dormi (el), pustiii.') },
      { etapa: 'Dirijarea învățării: mai-mult-ca-perfectul', timp: '9 min', activitate: pasi(
        'Ex. 1-2: pregătise: când s-a petrecut față de celelalte acțiuni? E în prim-plan sau în plan secund?',
        'Ex. 3-4: -se- după sunetul care arată perfectul simplu; ex. 5 (normă): trăseseși, rezistaserăți.',
        'În caiete: greșelile frecvente (începuseși, nu începusei; -ră- la plural: plecaserăm).') },
      { etapa: 'Aplicații', timp: '6 min', activitate: pasi(
        '„Aplicații”, ex. 1 (baloanele), ex. 2 și ex. 3 (corectarea replicii Mumei-Pădurii), la tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce timp este?), ex. 2 (scrie corect) și ex. 3 (din poveste, în vorbirea de azi), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 4 și 5; fișa de exerciții, pagina 2, ex. 4-5; „Deschideri” (secvențe din „Nea Mărin miliardar”; concursul de trei zile), facultativ.') },
    ],
    evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-16': {
    titlu: 'Viitorul. Verbele auxiliare a vrea și a fi',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște timpul viitor și verbele auxiliare a vrea și a fi, folosite la formarea lui.'],
    resurse: ['Manual Art 5, pp. 70-71', fisa(16), 'Schema „Viitorul. Verbele auxiliare a vrea și a fi” (/materiale/clasa-5/unitatea-2/lectia-16/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Fiecare elev primește un bilețel cu un verb la infinitiv, îl trece la viitor, spune forma și lipește bilețelul pe o coală de pe tablă.') },
      { etapa: 'Dirijarea învățării: viitorul și a vrea', timp: '9 min', activitate: pasi(
        '„Explorare”, p. 70, ex. 1-5: verbele din anunțul ilustrat; momentul acțiunii; predicatul din replica fetei (vor, de la a vrea); a vrea în „vor participa”: predicativ sau auxiliar?; ce urmează după voi, vei, va...: infinitivul.',
        'Ex. 6: „sta-vom” la Eminescu (forma inversă).',
        'În caiete: viitorul = a vrea + infinitiv; formele inverse din limba veche.') },
      { etapa: 'Dirijarea învățării: limba standard și alte forme', timp: '9 min', activitate: pasi(
        'Ex. 1-2: „Voi merge” și „Am să merg”: când folosim fiecare formă? Comparăm tabelele.',
        'În caiete: limba standard; viitorul standard, cele două forme de limbă vorbită (o să cânt, am să cânt), toate literare; viitorul popular (oi cânta).') },
      { etapa: 'Dirijarea învățării: viitorul anterior', timp: '5 min', activitate: pasi(
        'Ex. 1-2: „vei fi câștigat”: ce exprimă și din ce e alcătuit.',
        'În caiete: a vrea + a fi + participiu; apare rar, împreună cu un viitor (Când vei sosi, voi fi terminat compunerea.).') },
      { etapa: 'Aplicații', timp: '6 min', activitate: pasi(
        '„Aplicații”, ex. 1 (forme de scris și forme orale) și ex. 2 (corectarea formelor), frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce fel de viitor?), ex. 2 (forma corectă) și ex. 3 (în viitor standard), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 3 (ortogramele voi/v-oi, va/v-a, vom/v-om, vor/v-or), 5 și 7; „Deschideri” (verbele la viitor din rubrica meteo); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-17': {
    titlu: 'Modul imperativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște modul imperativ, formele afirmative și negative, cu respectarea normelor de ortografie.'],
    resurse: ['Manual Art 5, pp. 72-73', fisa(17), 'Schema „Modul imperativ” (/materiale/clasa-5/unitatea-2/lectia-17/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Comenzi, cu elevii în picioare: Ridicați mâinile! Coborâți-le! Faceți un pas la dreapta! Aplaudați! Ce arată verbele după care v-ați mișcat?') },
      { etapa: 'Dirijarea învățării: imperativul', timp: '12 min', activitate: pasi(
        '„Explorare”, p. 72, ex. 1-4: verbele de pe eticheta de spălare; ce acțiuni arată; persoana și numărul; formele negative și din ce sunt alcătuite.',
        'Ex. 5: desinențele (roșu) și sunetele care arată modul (verde).',
        'Ex. 6 (normă): Refă, Du, Zi, Fii.',
        'În caiete, după Repere: imperativul (ordin, îndemn, sfat, rugăminte); doar persoana a II-a; fără timp; negativul (Nu cânta! / Nu cântați!); formele speciale (vino, fă, du, zi, adu); fii, dar nu fi.') },
      { etapa: 'Jocul Bingo', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 1: fiecare primește cartonașul (a căra, a culege, a privi, a râde; singular și plural) și caută colegi care să completeze câte o căsuță; primul care termină corect strigă „Bingo!”.') },
      { etapa: 'Aplicații frontale', timp: '6 min', activitate: pasi(
        'Ex. 2, 3 și 5, la tablă; ex. 4: „Scrieți tema!” și „Scrie-ți tema!”: de ce se scriu diferit?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (întoarce porunca), ex. 2 (forma corectă) și ex. 3 (comenzi pentru un robot), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Autoevaluare și temă', timp: '6 min', activitate: pasi(
        'Autoevaluare L10-L16 (verbul): cele trei afirmații, în caiet; le folosesc la recapitulare.',
        'Tema: „Aplicații”, ex. 6-7 (verbele la imperativ din rețetă și analiza a cinci dintre ele); „Deschideri” (regulile jocului preferat, pentru ludoteca clasei); fișa de exerciții, pagina 2, ex. 4-5; minitestul, facultativ.') },
    ],
    evaluare: 'Jocul Bingo; autoevaluarea L10-L16; fișa de exerciții, ex. 1-3.',
  },
  'lectia-18': {
    titlu: 'Textul narativ ficțional (I), pregătire',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Recunoaște trăsăturile textului narativ ficțional, pe baza unui text-stimul.'],
    resurse: ['Manual Art 5, p. 74', fisa(18), 'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-18/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Brainstorming', timp: '7 min', activitate: pasi(
        '„Pentru început”, p. 74, ex. 1: fiecare completează întrebarea „Ce s-ar întâmpla dacă, într-o zi...?”; le notez pe tablă (dau și eu idei: ai rămâne fără telefon pe o insulă, te-ai întâlni cu un extraterestru...).',
        'Ex. 2: votăm cele mai interesante întrebări.') },
      { etapa: 'Lectura textului', timp: '8 min', activitate: pasi(
        'Citesc cu voce tare povestea „Cea mai mare dorință” de Cornelia Funke (adaptare, p. 74).') },
      { etapa: 'Discuție pe grupe', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 2, în grupe de 4-5: personajele și trăsăturile lor; ce declanșează acțiunea; cum se desfășoară; situația finală; e o întâmplare reală sau imaginară?',
        'Pun aceleași întrebări fiecărei grupe și comparăm concluziile.') },
      { etapa: 'Dirijarea învățării: textul narativ ficțional', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 75): textul narativ ficțional (situație inițială de echilibru, complicații, nouă echilibrare); pașii scrierii (plan, prima variantă, revizuire, editare); prezentarea textului (titlul la mijloc, alineat, scris lizibil).',
        'Timpurile potrivite: imperfectul pentru cadru, perfectul compus sau prezentul pentru întâmplări, mai-mult-ca-perfectul pentru ce se petrecuse înainte.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (povestea lui Hannes, în ordine), ex. 2 (timpul potrivit fiecărei secvențe) și ex. 3 (cuvinte care rup echilibrul), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Întreb: „Ce ați aflat despre cum se construiește un text narativ ficțional? Ce nu știți încă?”',
        'Tema: fișa lecției (personaj, loc, ce vrea, obstacol) pentru povestea proprie, pornind de la „Ce s-ar întâmpla dacă ți s-ar îndeplini cea mai mare dorință?”; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea discuției pe grupe; fișa de exerciții, ex. 1-3.',
  },
  'lectia-19': {
    titlu: 'Textul narativ ficțional (II), redactare',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează un text narativ ficțional, cu respectarea etapelor scrierii și a planului unei compuneri.'],
    resurse: ['Manual Art 5, p. 75', fisa(19), 'Fișa lecției (/materiale/clasa-5/unitatea-2/lectia-19/fisa.pdf)', 'Planul realizat la ora anterioară'],
    desfasurare: [
      { etapa: 'Reactualizarea', timp: '4 min', activitate: pasi(
        'Doi-trei elevi citesc ideea de poveste și obstacolul notate acasă în fișa lecției.') },
      { etapa: 'Exersare: fișa de exerciții', timp: '8 min', activitate: pasi(
        'Pagina 1: ex. 1 (revizuiește textul cu „Și apoi”), individual, 5 minute; verificare, 3 minute: ce am schimbat și de ce (repetiția, vroia → voia).') },
      { etapa: 'Planul', timp: '10 min', activitate: pasi(
        '„Aplicații”, ex. 1: fiecare scrie planul după schemă: situația inițială (cadrul, personajele, cel puțin un imperfect); momentul care rupe echilibrul („Deodată...”, „Brusc...”); întâmplările (perfect compus sau prezent); situația finală.') },
      { etapa: 'Feedback pe plan', timp: '5 min', activitate: pasi(
        'Ex. 2: schimb de planuri cu colegul de bancă; fiecare dă o sugestie ca povestea să fie mai captivantă.') },
      { etapa: 'Redactarea', timp: '18 min', activitate: pasi(
        'Ex. 3: fiecare scrie povestirea, pe fișa lecției (ciorna), după planul îmbunătățit.',
        'Trec printre bănci, încurajez și notez observații (poate face planul, poate da feedback, textul e coerent și captivant).') },
      { etapa: 'Autoevaluare și temă', timp: '5 min', activitate: pasi(
        'Fiecare își evaluează textul cu grila de la p. 75 (Da/Nu).',
        'Tema: forma finală, pe pagina a doua a fișei lecției; fișa de exerciții, ex. 2-4. Strâng textele și dau feedback ora viitoare.') },
    ],
    evaluare: 'Grila de autoevaluare (p. 75); observațiile profesorului în timpul redactării; textul final.',
  },
  'lectia-20': {
    titlu: 'Prezentarea proiectului individual Jocuri fără vârstă',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Prezintă și evaluează proiectul individual Jocuri fără vârstă, conform criteriilor stabilite.'],
    resurse: ['Manual Art 5, p. 55', 'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-2/lectia-20/fisa.pdf)', 'Produsele proiectelor elevilor'],
    desfasurare: [
      { etapa: 'Pregătirea prezentărilor', timp: '4 min', activitate: pasi(
        'Tragem la sorți ordinea; cronometrul pe tablă (cel mult 3 minute de prezentare); reamintesc regulile de acces la cuvânt pentru întrebări.') },
      { etapa: 'Prezentările', timp: '38 min', activitate: pasi(
        'Fiecare elev își prezintă posterul (3 minute), apoi răspunde la una-două întrebări ale colegilor (1 minut).',
        'Completez grila din fișa proiectului pentru fiecare.',
        'Într-o oră încap cam nouă-zece prezentări; ceilalți continuă ora viitoare.') },
      { etapa: 'Autoevaluare', timp: '5 min', activitate: pasi(
        'Cei care au prezentat completează autoevaluarea de la p. 55; ceilalți notează ce le-a plăcut la o prezentare și de ce.') },
      { etapa: 'Încheiere', timp: '3 min', activitate: pasi(
        'Spun ce a mers bine în general; anunț cine prezintă data viitoare; afișăm posterele în clasă.') },
    ],
    evaluare: 'Grila de evaluare a proiectului; autoevaluarea elevilor.',
  },
  'lectia-21': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea II: timp, spațiu, acțiune, planul dezvoltat de idei.'],
    resurse: ['Manual Art 5, pp. 76-77', fisa(21), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Predicții pornind de la titlu', timp: '6 min', activitate: pasi(
        'Ex. 1: ce credeți că se întâmplă într-un text intitulat „Joaca cu bastonul”?',
        'Elevii desenează în caiet tabelul predicțiilor: predicția, pe ce mă bazez, textul o confirmă?') },
      { etapa: 'Primul fragment', timp: '8 min', activitate: pasi(
        'Ex. 2: citesc eu primul fragment, apoi elevii îl recitesc în gând.',
        'Ex. 3-6: ideea principală; situația inițială și ce o modifică; personajele; cine va fi personajul principal și pe ce vă bazați.') },
      { etapa: 'Al doilea fragment', timp: '10 min', activitate: pasi(
        'Ex. 7: fiecare notează ce crede că urmează, apoi citim fragmentul.',
        'Înainte de fiecare transformare, întreb: „În ce se va mai preface bastonul?”',
        'Ex. 8-10: ce predicții s-au confirmat; secvența din care reiese curajul lui Claudio; completarea spațiilor.') },
      { etapa: 'Finalul', timp: '8 min', activitate: pasi(
        'Ex. 11: predicția despre final, apoi citim finalul.',
        'Ex. 12-14: ce detalii v-au scăpat; ar fi fost mai bine să răspundă la întrebare?; ce părere aveți despre bătrân?',
        'Ex. 15: două perechi joacă o continuare a dialogului dintre bătrân și Claudio; clasa observă rolul, claritatea, politețea.') },
      { etapa: 'Obținerea performanței: fișa de exerciții, pe un text nou', timp: '13 min', activitate: pasi(
        'Textul „Umbrela bunicii”: pagina 1, ex. 1-3, individual, 9 minute.',
        'Verificare, 4 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: ex. 21 (planul dezvoltat al textului „Joaca cu bastonul”); fișa de exerciții, pagina 2, ex. 4-6.') },
    ],
    evaluare: 'Tabelul predicțiilor; observarea jocului de rol; fișa de exerciții, ex. 1-3.',
  },
  'lectia-22': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea II: verbul, modurile și timpurile învățate.'],
    resurse: ['Manual Art 5, pp. 76-77', fisa(22), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Fiecare elev numește un mod sau un timp învățat în unitate și dă un exemplu.') },
      { etapa: 'Rezolvare ghidată, ex. 16-21', timp: '15 min', activitate: pasi(
        'Ex. 16 (verbele și modul, timpul lor), ex. 17 (din perfect simplu în perfect compus), ex. 18 (viitorul), ex. 19 (timpurile din textul despre pălăria fermecată), ex. 20 (imperativele corecte), la tablă și în caiete.',
        'Ex. 21: doi elevi citesc planul dezvoltat făcut acasă; ceilalți verifică după lista de control de la p. 47.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1-4, individual, 10 minute.',
        'Verificare, 5 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Pregătirea compunerii', timp: '12 min', activitate: pasi(
        'Ex. 22: povestea cu un obiect vrăjit. Fiecare face planul: înainte de a primi obiectul, după ce l-a primit, cum s-a încheiat aventura.',
        'Fișa de exerciții, pagina 2, ex. 6: fiecare scrie începutul (situația inițială, la imperfect, și momentul cu „Deodată”); doi-trei elevi citesc.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: textul de la ex. 22, verificat cu grila de la p. 75; fișa de exerciții, pagina 2, ex. 5. Anunț evaluarea de ora viitoare.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-4; textul de la ex. 22, evaluat cu grila de la p. 75.',
  },
  'lectia-23': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea II.'],
    resurse: ['Testul tipărit, Manual Art 5, p. 78', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testul (p. 78) și foile de lucru; elevii scriu numele.',
        'Citesc cu voce tare fragmentul și cerințele; explic punctajul: partea A, 60 de puncte, partea B, 30 de puncte, 10 puncte din oficiu.',
        'Recomand împărțirea timpului: cam 20 de minute pentru partea A, 15-20 de minute pentru narațiune, 5 minute pentru recitire.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual; răspund doar la întrebări de înțelegere a cerinței.',
        'Anunț timpul la jumătate și cu 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii recitesc și verifică numele; strâng lucrările.',
        'Întreb scurt ce li s-a părut ușor și ce li s-a părut greu; notez pentru ora de analiză a rezultatelor.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
