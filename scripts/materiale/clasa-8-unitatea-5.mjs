// Materiale de sprijin originale pentru Unitatea V „Încotro se îndreaptă
// lumea?”, clasa a VIII-a. Quizuri pe obiectivele fiecărei lecții; noțiunile
// vin din manualul Art 8, pp. 164-199, formulările sunt proprii.

const S = (n, titlu) => ({ fisier: `/materiale/clasa-8/unitatea-5/lectia-${n}/schema.svg`, titlu })

export default {
  'lectia-1': {
    joc: {
      tip: 'quiz',
      titlu: 'Fahrenheit 451',
      pasi: [
        {
          intrebare: 'Ce face Guy Montag, ca pompier, în lumea din Fahrenheit 451?',
          variante: [
            { text: 'Arde cărți, fiindcă sunt interzise', corect: true, explicatie: 'Casele nu mai iau foc, așa că pompierii au primit o nouă misiune: să ardă cărțile.' },
            { text: 'Stinge incendii', corect: false, explicatie: 'Asta făceau pompierii pe vremuri; Clarisse abia a auzit de așa ceva.' },
            { text: 'Construiește case neinflamabile', corect: false, explicatie: 'Casele erau deja neinflamabile, de mult.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 164-168',
        },
        {
          intrebare: 'Ce înseamnă titlul Fahrenheit 451?',
          variante: [
            { text: 'Temperatura la care ia foc și arde hârtia din care sunt făcute cărțile', corect: true, explicatie: 'Cifra 451 apare și pe casca și pe mâneca lui Montag.' },
            { text: 'Anul în care se petrece acțiunea', corect: false, explicatie: 'Nu e un an, ci o temperatură.' },
            { text: 'Numărul casei lui Montag', corect: false, explicatie: 'Cifra ține de meseria lui, nu de adresă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 164',
        },
        {
          intrebare: 'Ce întrebare a Clarissei îl tulbură pe Montag?',
          variante: [
            { text: '„Ești fericit?”', corect: true, explicatie: 'La început râde, dar întrebarea nu-i mai iese din minte.' },
            { text: '„Unde locuiești?”', corect: false, explicatie: 'Știe deja: sunt vecini.' },
            { text: '„Câți ani ai?”', corect: false, explicatie: 'Pe aceasta i-o pune el ei.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 167',
        },
        {
          intrebare: 'De ce spune Beatty că trebuie arse cărțile?',
          variante: [
            { text: 'Ca oamenii să rămână liniștiți și „fericiți”, fără gânduri care îi neliniștesc', corect: true, explicatie: 'Beatty numește pompierii „apărători ai liniștii noastre sufletești”.' },
            { text: 'Pentru că ocupă prea mult loc în case', corect: false, explicatie: 'Nu spațiul îl îngrijorează, ci gândurile pe care le trezesc cărțile.' },
            { text: 'Pentru că hârtia e scumpă', corect: false, explicatie: 'Nicăieri nu e vorba de bani.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 167-168',
        },
        {
          intrebare: 'Cum păstrează oamenii-cărți înțelepciunea cărților arse?',
          variante: [
            { text: 'Le învață pe de rost, fiecare devenind o carte', corect: true, explicatie: 'Montag devine Ecleziastul.' },
            { text: 'Le ascund în peșteri', corect: false, explicatie: 'Au renunțat chiar și la microfilmele îngropate.' },
            { text: 'Le copiază pe computere', corect: false, explicatie: 'Păstrează totul „în capetele astea ale noastre”.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 168-169',
        },
      ],
    },
  },

  'lectia-2': {
    joc: {
      tip: 'quiz',
      titlu: 'Romanul, distopia și SF-ul',
      pasi: [
        {
          intrebare: 'Ce este romanul?',
          variante: [
            { text: 'În general, cel mai amplu text epic, cu personaje numeroase și o acțiune complexă, cu mai multe fire narative', corect: true, explicatie: 'Există și romane scurte; e specia cea mai puțin supusă constrângerilor.' },
            { text: 'Un text liric în versuri', corect: false, explicatie: 'Romanul e un text epic, în proză.' },
            { text: 'Un text epic scurt, cu un singur episod', corect: false, explicatie: 'Romanul îmbină, de regulă, mai multe fire narative.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 170',
        },
        {
          intrebare: 'Ce rol poate avea un blanc, un spațiu alb, într-un text epic?',
          variante: [
            { text: 'Delimitează un episod, oferă un reper de lectură și întreține suspansul', corect: true, explicatie: 'Decupajul acțiunii te face să vrei să citești mai departe.' },
            { text: 'E o greșeală de tipar', corect: false, explicatie: 'E pus acolo cu intenție.' },
            { text: 'Marchează sfârșitul cărții', corect: false, explicatie: 'Blancurile apar și în interiorul textului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 170',
        },
        {
          intrebare: 'Ce este distopia?',
          variante: [
            { text: 'Imaginea unei societăți a viitorului, dezumanizată de un control politic, tehnologic sau religios', corect: true, explicatie: 'E opusul utopiei.' },
            { text: 'Imaginea unei societăți ideale', corect: false, explicatie: 'Aceea e utopia, adică „loc care nu există”.' },
            { text: 'O poveste cu zâne și magie', corect: false, explicatie: 'Magia ține de fantasy.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 170',
        },
        {
          intrebare: 'Prin ce se deosebește SF-ul de fantasy?',
          variante: [
            { text: 'SF-ul pornește de la ipoteze științifice și cunoștințe tehnice; în fantasy intervine magia', corect: true, explicatie: 'Iar fantasticul are o dimensiune inexplicabilă a evenimentelor.' },
            { text: 'SF-ul are mereu extratereștri', corect: false, explicatie: 'Invazia extraterestră e doar una dintre temele posibile.' },
            { text: 'Nu se deosebesc', corect: false, explicatie: 'Manualul le desparte clar, după ce anume face posibile întâmplările.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 171',
        },
        {
          intrebare: 'Fragmentul din Rabelais, cu thelemiții care trăiesc după regula „Fă ce-ți place!”, aparține unei utopii sau unei distopii?',
          variante: [
            { text: 'Unei utopii: descrie o societate ideală, a învățăturii și a bucuriei', corect: true, explicatie: 'Thelemiții nu lenevesc, învață limbi, cântă și se bucură că trăiesc.' },
            { text: 'Unei distopii', corect: false, explicatie: 'Nicio formă de control nu îi apasă pe thelemiți.' },
            { text: 'Nici uneia', corect: false, explicatie: 'E o construcție imaginară a unei societăți ideale, deci o utopie.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 171',
        },
        {
          intrebare: 'Ce tip de roman este Fahrenheit 451, după temă?',
          variante: [
            { text: 'De anticipație (SF), cu o viziune distopică', corect: true, explicatie: 'Imaginează un viitor în care cărțile sunt interzise.' },
            { text: 'Istoric', corect: false, explicatie: 'Nu reconstituie un trecut real.' },
            { text: 'Polițist', corect: false, explicatie: 'Deși Montag e urmărit, tema nu e ancheta unei crime.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 164, 170-171',
        },
      ],
    },
    schema: S(2, 'Romanul și lumile posibile'),
  },

  'lectia-8': {
    joc: {
      tip: 'quiz',
      titlu: 'Prometeu',
      pasi: [
        {
          intrebare: 'Care sunt cele două gesturi prin care Prometeu îl înșală pe Zeus?',
          variante: [
            { text: 'Împarte nedrept taurul sacrificat la Mekone și fură focul divin pentru oameni', corect: true, explicatie: 'Amândouă sunt făcute din iubire pentru oameni.' },
            { text: 'Fură fulgerele și cutia Pandorei', corect: false, explicatie: 'Cutia Pandorei e răzbunarea lui Zeus, nu fapta lui Prometeu.' },
            { text: 'Refuză să-l ajute pe Zeus să ia puterea', corect: false, explicatie: 'Dimpotrivă, l-a ajutat să preia puterea în Olimp.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 183',
        },
        {
          intrebare: 'De ce se revoltă Prometeu împotriva lui Zeus?',
          variante: [
            { text: 'Din iubire pentru oameni', corect: true, explicatie: 'E cunoscut ca binefăcătorul oamenilor.' },
            { text: 'Ca să ia locul lui Zeus', corect: false, explicatie: 'Nu urmărește puterea pentru el.' },
            { text: 'Din dorință de bogăție', corect: false, explicatie: 'Nu câștigă nimic; plătește cu chinuri eterne.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 183',
        },
        {
          intrebare: 'Cum este pedepsit Prometeu?',
          variante: [
            { text: 'E înlănțuit de o stâncă din Caucaz, iar un vultur îi mănâncă zilnic ficatul, care crește la loc noaptea', corect: true, explicatie: 'Chinul e fără sfârșit, fiindcă ficatul se reface.' },
            { text: 'E alungat pe Pământ, printre oameni', corect: false, explicatie: 'Pedeapsa e mult mai crudă.' },
            { text: 'E transformat în stea', corect: false, explicatie: 'Nu apare nicio metamorfoză în mit.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 183',
        },
        {
          intrebare: 'Ce fel de erou este Prometeu?',
          variante: [
            { text: 'Un erou civilizator, simbol al progresului și al revoltei împotriva tiraniei', corect: true, explicatie: 'Cu focul, oamenii au putut dezvolta meșteșugurile, științele și artele.' },
            { text: 'Un personaj negativ, care aduce doar rău', corect: false, explicatie: 'Gesturile lui au și urmări negative, dar le aduc oamenilor civilizația.' },
            { text: 'Un zeu al războiului', corect: false, explicatie: 'E titan, iar darurile lui sunt ale păcii: meșteșuguri, leacuri, litere.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 184',
        },
        {
          intrebare: 'Ce înseamnă expresia „cutia Pandorei”, folosită și azi?',
          variante: [
            { text: 'Un lucru din care ies multe necazuri', corect: true, explicatie: 'Zeus le-a trimis oamenilor toate nenorocirile, ascunse în cutia dăruită Pandorei.' },
            { text: 'O cutie cu comori', corect: false, explicatie: 'În cutie erau nenorociri, nu comori.' },
            { text: 'Un dar care aduce noroc', corect: false, explicatie: 'Darul era chiar pedeapsa lui Zeus.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 183',
        },
      ],
    },
  },

  'lectia-11': {
    joc: {
      tip: 'quiz',
      titlu: 'Circumstanțialul de cauză',
      pasi: [
        {
          intrebare: 'La ce întrebări răspunde circumstanțialul de cauză?',
          variante: [
            { text: 'din ce cauză?, din ce pricină?, din ce motiv?', corect: true, explicatie: 'Toate cer motivul acțiunii.' },
            { text: 'cu ce scop?', corect: false, explicatie: 'Aceea e întrebarea circumstanțialului de scop.' },
            { text: 'cu ce condiție?', corect: false, explicatie: 'Aceea e întrebarea construcției condiționale.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 188',
        },
        {
          intrebare: 'Care e circumstanțialul de cauză în „Era roșu de furie”?',
          variante: [
            { text: 'de furie, care determină adjectivul roșu', corect: true, explicatie: 'Circumstanțialul de cauză se poate subordona și unui adjectiv.' },
            { text: 'roșu', corect: false, explicatie: '„Roșu” e regentul, nu cauza.' },
            { text: 'era', corect: false, explicatie: 'E verbul copulativ al predicatului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 188',
        },
        {
          intrebare: 'Când se petrece acțiunea exprimată de circumstanțialul de cauză, față de cea a regentului?',
          variante: [
            { text: 'Obligatoriu înainte', corect: true, explicatie: 'Cauza vine întotdeauna înaintea efectului.' },
            { text: 'După', corect: false, explicatie: 'Ce vine după e scopul, nu cauza.' },
            { text: 'Oricând, nu contează', corect: false, explicatie: 'Manualul spune explicit că e obligatoriu anterioară.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 188',
        },
        {
          intrebare: 'Care variantă e corectă?',
          variante: [
            { text: 'Avionul nu a putut ateriza din cauza vântului.', corect: true, explicatie: '„Din cauza” se folosește pentru un efect nefavorabil.' },
            { text: 'Avionul nu a putut ateriza datorită vântului.', corect: false, explicatie: '„Datorită” se folosește doar pentru un efect pozitiv.' },
            { text: 'Mara a reușit din cauza perseverenței.', corect: false, explicatie: 'Efectul e pozitiv, deci: datorită perseverenței.' },
          ],
          indiciu: 'Efectul e bun sau rău?',
          sursa: 'Manual Art 8, p. 188',
        },
        {
          intrebare: 'Prin ce se exprimă circumstanțialul de cauză din „Lăudându-l prea mult, s-a obrăznicit”?',
          variante: [
            { text: 'Printr-un verb la gerunziu', corect: true, explicatie: 'Lăudându-l e forma de gerunziu a verbului a lăuda.' },
            { text: 'Printr-un substantiv', corect: false, explicatie: 'Nu apare niciun substantiv cu rol de cauză.' },
            { text: 'Printr-un adjectiv', corect: false, explicatie: 'Lăudându-l nu arată o însușire.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 188',
        },
      ],
    },
  },

  'lectia-12': {
    joc: {
      tip: 'quiz',
      titlu: 'Circumstanțiala de cauză',
      pasi: [
        {
          intrebare: 'Ce este circumstanțiala de cauză?',
          variante: [
            { text: 'Propoziția subordonată care îndeplinește în frază rolul circumstanțialului de cauză', corect: true, explicatie: 'E realizarea propozițională a circumstanțialului de cauză.' },
            { text: 'Propoziția principală a frazei', corect: false, explicatie: 'E o subordonată, depinde de o regentă.' },
            { text: 'O parte de propoziție', corect: false, explicatie: 'Partea de propoziție e circumstanțialul, nu circumstanțiala.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 189',
        },
        {
          intrebare: 'Care e elementul de relație din „Am coaja groasă, din cauză că sunt foarte bătrân”?',
          variante: [
            { text: 'locuțiunea conjuncțională din cauză că', corect: true, explicatie: 'Cele trei cuvinte funcționează împreună, ca o singură conjuncție.' },
            { text: 'conjuncția că', corect: false, explicatie: 'Aici „că” face parte din locuțiune, nu stă singur.' },
            { text: 'prepoziția din', corect: false, explicatie: 'Și „din” face parte din locuțiune.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 189',
        },
        {
          intrebare: 'În „Cum a întârziat, nu l-am mai așteptat”, ce este cuvântul cum?',
          variante: [
            { text: 'O conjuncție subordonatoare cu sens cauzal, care poate fi înlocuită cu „fiindcă”', corect: true, explicatie: 'Fiindcă a întârziat, nu l-am mai așteptat: sensul rămâne.' },
            { text: 'Un adverb de mod', corect: false, explicatie: 'Nu arată felul în care a întârziat, ci de ce nu l-am așteptat.' },
            { text: 'Un pronume relativ', corect: false, explicatie: '„Cum” nu înlocuiește aici niciun substantiv.' },
          ],
          indiciu: 'Încearcă să pui „fiindcă” în locul lui.',
          sursa: 'Manual Art 8, p. 189',
        },
        {
          intrebare: 'Unde stă circumstanțiala de cauză introdusă prin „că” sau „căci”?',
          variante: [
            { text: 'Întotdeauna după regentă', corect: true, explicatie: 'Nu mai vin azi, că sunt ocupat.' },
            { text: 'Întotdeauna înaintea regentei', corect: false, explicatie: 'Așa se întâmplă cu cele introduse prin „cum”.' },
            { text: 'Oriunde', corect: false, explicatie: 'Doar cele introduse prin alte elemente au topică liberă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 190',
        },
        {
          intrebare: 'Care e diferența dintre „Știu că mi-a trimis un mesaj” și „Știu, că mi-a trimis un mesaj”?',
          variante: [
            { text: 'În a doua, virgula arată că „că” introduce o circumstanțială de cauză: știu, fiindcă mi-a trimis', corect: true, explicatie: 'Fără virgulă, subordonata spune ce știu, deci e completivă directă.' },
            { text: 'Nu e nicio diferență', corect: false, explicatie: 'Virgula schimbă felul subordonatei.' },
            { text: 'Prima e greșită', corect: false, explicatie: 'Amândouă sunt corecte, dar spun lucruri diferite.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 190',
        },
      ],
    },
  },

  'lectia-13': {
    joc: {
      tip: 'quiz',
      titlu: 'Circumstanțialul de scop',
      pasi: [
        {
          intrebare: 'La ce întrebări răspunde circumstanțialul de scop?',
          variante: [
            { text: 'cu ce scop?, în ce scop?', corect: true, explicatie: 'Arată pentru ce se face acțiunea.' },
            { text: 'din ce cauză?', corect: false, explicatie: 'Aceea e întrebarea circumstanțialului de cauză.' },
            { text: 'în ciuda cărui fapt?', corect: false, explicatie: 'Aceea e întrebarea construcției concesive.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 191',
        },
        {
          intrebare: 'Care e circumstanțialul de scop în „Ogorul a fost pregătit pentru semănat”?',
          variante: [
            { text: 'pentru semănat, verb la supin', corect: true, explicatie: 'Cu ce scop a fost pregătit? Pentru semănat.' },
            { text: 'ogorul', corect: false, explicatie: 'E subiectul.' },
            { text: 'a fost pregătit', corect: false, explicatie: 'E predicatul, regentul circumstanțialului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 191',
        },
        {
          intrebare: 'Prin ce se exprimă circumstanțialul de scop din „Spre a se convinge, a venit el însuși”?',
          variante: [
            { text: 'Printr-un verb la infinitiv, cu prepoziția spre', corect: true, explicatie: 'A se convinge e forma de infinitiv.' },
            { text: 'Printr-un substantiv', corect: false, explicatie: 'Nu apare niciun substantiv cu rol de scop.' },
            { text: 'Printr-un verb la gerunziu', corect: false, explicatie: 'Gerunziul ar fi „convingându-se”.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 191',
        },
        {
          intrebare: 'În care enunț există un circumstanțial de scop?',
          variante: [
            { text: 'Mergem la cumpărături.', corect: true, explicatie: 'Cu ce scop mergem? La cumpărături.' },
            { text: 'Am înghețat de frig.', corect: false, explicatie: '„De frig” arată cauza.' },
            { text: 'Cu toată vremea urâtă, am ieșit în oraș.', corect: false, explicatie: 'E o construcție concesivă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 188, 191, 195',
        },
        {
          intrebare: 'În „Hai la plimbare!”, cui se subordonează circumstanțialul de scop?',
          variante: [
            { text: 'Interjecției predicative hai', corect: true, explicatie: 'Circumstanțialul de scop se poate subordona și unei interjecții predicative.' },
            { text: 'Unui verb nescris', corect: false, explicatie: 'Nu e nevoie de un verb: interjecția e chiar predicatul.' },
            { text: 'Unui substantiv', corect: false, explicatie: '„Plimbare” e chiar circumstanțialul, nu regentul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 191',
        },
      ],
    },
  },

  'lectia-14': {
    joc: {
      tip: 'quiz',
      titlu: 'Circumstanțiala de scop',
      pasi: [
        {
          intrebare: 'Prin ce elemente de relație se introduce circumstanțiala de scop?',
          variante: [
            { text: 'ca să, să, de, pentru ca … să', corect: true, explicatie: 'Și prin pronume relative cu prepoziții: pentru ce avea de realizat.' },
            { text: 'fiindcă, deoarece', corect: false, explicatie: 'Acestea introduc circumstanțiala de cauză.' },
            { text: 'deși, cu toate că', corect: false, explicatie: 'Acestea introduc construcția concesivă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 192',
        },
        {
          intrebare: 'Care e circumstanțiala de scop în „Oamenii au programat roboți Wall-E ca să curețe planeta”?',
          variante: [
            { text: 'ca să curețe planeta', corect: true, explicatie: 'Cu ce scop au programat? Ca să curețe planeta.' },
            { text: 'au programat roboți', corect: false, explicatie: 'Aceasta e regenta.' },
            { text: 'Wall-E', corect: false, explicatie: 'E un nume, parte a regentei.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 192',
        },
        {
          intrebare: 'Care formulare e corectă?',
          variante: [
            { text: 'Au venit la mine ca să mă vadă.', corect: true, explicatie: 'Elementul de relație e „ca să”.' },
            { text: 'Au venit la mine că să mă vadă.', corect: false, explicatie: '„Că” în loc de „ca” e o greșeală frecventă.' },
            { text: 'Au venit la mine pentru ca să mă vadă.', corect: false, explicatie: 'E o formă pleonastică; corect: ca să mă vadă sau pentru a mă vedea.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 193',
        },
        {
          intrebare: 'Când se desparte întotdeauna prin virgulă circumstanțiala de scop?',
          variante: [
            { text: 'Când are un corelativ în regentă: De aceea stă la umbră, ca să nu se bronzeze.', corect: true, explicatie: 'Virgula e obligatorie, oriunde ar sta subordonata.' },
            { text: 'Când e introdusă prin să sau de', corect: false, explicatie: 'Acestea nu se despart prin virgulă de regentă.' },
            { text: 'Niciodată', corect: false, explicatie: 'Cu un corelativ în regentă, virgula e obligatorie.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 193',
        },
        {
          intrebare: 'Ce fel de subordonată introduce „să” în „EVE a venit să caute un semn al naturii renăscute”?',
          variante: [
            { text: 'O circumstanțială de scop: cu ce scop a venit?', corect: true, explicatie: 'Căutarea e scopul venirii.' },
            { text: 'O circumstanțială de cauză', corect: false, explicatie: 'Căutarea vine după venire; cauza ar trebui să fie înainte.' },
            { text: 'O atributivă', corect: false, explicatie: 'Subordonata nu determină un substantiv.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 193',
        },
      ],
    },
  },

  'lectia-15': {
    joc: {
      tip: 'quiz',
      titlu: 'Construcții concesive',
      pasi: [
        {
          intrebare: 'Ce exprimă o construcție concesivă?',
          variante: [
            { text: 'O împrejurare care ar putea împiedica acțiunea, dar nu o împiedică', corect: true, explicatie: 'Deși ploua, a ieșit: ploaia nu l-a oprit.' },
            { text: 'Cauza acțiunii', corect: false, explicatie: 'Cauza produce acțiunea; concesiva e un obstacol depășit.' },
            { text: 'Scopul acțiunii', corect: false, explicatie: 'Scopul arată pentru ce se face acțiunea.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 194',
        },
        {
          intrebare: 'La ce întrebări răspunde construcția concesivă?',
          variante: [
            { text: 'în ciuda cărui fapt?, în pofida cărui fapt?', corect: true, explicatie: 'Întrebarea conține chiar ideea de obstacol.' },
            { text: 'cu ce condiție?', corect: false, explicatie: 'Aceea e întrebarea construcției condiționale.' },
            { text: 'din ce cauză?', corect: false, explicatie: 'Aceea e întrebarea circumstanțialului de cauză.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 194',
        },
        {
          intrebare: 'În care enunț „tot” are sens concesiv?',
          variante: [
            { text: 'Chiar adormit fiind, tot a auzit soneria.', corect: true, explicatie: 'Somnul ar fi putut să-l împiedice, dar n-a reușit.' },
            { text: 'A tot cântat, până a răgușit.', corect: false, explicatie: 'Aici „tot” arată repetarea.' },
            { text: 'Venea tot mai des în vizită la noi.', corect: false, explicatie: 'Aici „tot” arată creșterea treptată.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 194',
        },
        {
          intrebare: 'Cum se desparte construcția concesivă de regent?',
          variante: [
            { text: 'Întotdeauna prin virgulă, fie că stă înainte, fie că stă după', corect: true, explicatie: 'E una dintre puținele reguli fără excepții din unitate.' },
            { text: 'Niciodată prin virgulă', corect: false, explicatie: 'Dimpotrivă, virgula e obligatorie.' },
            { text: 'Doar când stă la începutul frazei', corect: false, explicatie: 'Virgula apare și când stă după regent.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 195',
        },
        {
          intrebare: 'Care enunț conține o construcție concesivă la nivel de propoziție, nu de frază?',
          variante: [
            { text: 'În ciuda părerii tale, e un profesionist.', corect: true, explicatie: '„În ciuda părerii tale” e un grup prepozițional, nu o propoziție.' },
            { text: 'Deși ploua, a ieșit la plimbare.', corect: false, explicatie: '„Deși ploua” are predicat, deci e o propoziție subordonată.' },
            { text: 'Dacă plouă, rămânem acasă.', corect: false, explicatie: 'E o construcție condițională, nu concesivă.' },
          ],
          indiciu: 'Caută construcția fără verb.',
          sursa: 'Manual Art 8, p. 195',
        },
      ],
    },
  },

  'lectia-16': {
    joc: {
      tip: 'quiz',
      titlu: 'Construcții condiționale',
      pasi: [
        {
          intrebare: 'Ce exprimă construcțiile condiționale?',
          variante: [
            { text: 'O ipoteză sau o condiție de care depinde realizarea acțiunii', corect: true, explicatie: 'Dacă are timp, va veni: venirea depinde de timp.' },
            { text: 'Un obstacol care nu împiedică acțiunea', corect: false, explicatie: 'Aceea e construcția concesivă.' },
            { text: 'Scopul acțiunii', corect: false, explicatie: 'Scopul arată pentru ce se face acțiunea.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 196',
        },
        {
          intrebare: 'Care e construcția condițională din „Ascultând cu atenție, vei înțelege”?',
          variante: [
            { text: 'Ascultând cu atenție, cu verbul la gerunziu', corect: true, explicatie: 'Cu ce condiție vei înțelege? Ascultând cu atenție.' },
            { text: 'vei înțelege', corect: false, explicatie: 'E regentul, acțiunea care depinde de condiție.' },
            { text: 'cu atenție', corect: false, explicatie: 'E doar o parte a construcției; condiția e toată ascultarea.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 197',
        },
        {
          intrebare: 'Ce fel de subordonată e „dacă avem încredere în noi” din „Ne-a întrebat dacă avem încredere în noi”?',
          variante: [
            { text: 'Completivă directă: ne-a întrebat ce?', corect: true, explicatie: 'Nu orice „dacă” introduce o condițională.' },
            { text: 'Condițională', corect: false, explicatie: 'Nu e o condiție: întrebarea s-a pus oricum.' },
            { text: 'Concesivă', corect: false, explicatie: 'Nu e niciun obstacol depășit.' },
          ],
          indiciu: 'Pune întrebarea de la verbul „a întrebat”.',
          sursa: 'Manual Art 8, p. 197',
        },
        {
          intrebare: 'În „Ai carte, ai parte!”, cum e marcată subordonarea?',
          variante: [
            { text: 'Prin juxtapunere, fără element de relație: dacă ai carte, ai parte', corect: true, explicatie: 'Condiționala poate fi juxtapusă regentei.' },
            { text: 'Prin conjuncția „și”', corect: false, explicatie: 'În proverb nu apare nicio conjuncție.' },
            { text: 'Nu există subordonare', corect: false, explicatie: 'Prima propoziție e condiția celei de-a doua.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 196-197',
        },
        {
          intrebare: 'Care enunț conține o construcție condițională la nivel de propoziție?',
          variante: [
            { text: 'În caz de furtună, adăpostește-te!', corect: true, explicatie: '„În caz de furtună” e un grup prepozițional, fără predicat.' },
            { text: 'Dacă are timp, va veni.', corect: false, explicatie: '„Dacă are timp” e o propoziție subordonată.' },
            { text: 'Deși are timp, nu vine.', corect: false, explicatie: 'E o construcție concesivă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, p. 197',
        },
      ],
    },
  },

  'lectia-3': { schema: S(3, 'Cum se îmbină structurile textuale') },
  'lectia-4': { schema: S(4, 'Personajele și tipurile de conflict') },
  'lectia-6': { schema: S(6, 'Cum e construit un text de opinie') },
  'lectia-9': { schema: S(9, 'Logos, patos, etos: cum convingi') },
  'lectia-10': { schema: S(9, 'Logos, patos, etos: cum convingi') },
  'lectia-17': { schema: S(17, 'Cuvintele care arată ce cred') },
  'lectia-18': { schema: S(18, 'Cum scriu un text de opinie') },
  'lectia-19': { schema: S(19, 'Lectura unității, tot la un loc') },
  'lectia-20': { schema: S(20, 'Circumstanțialele, tot la un loc') },
  'lectia-21': { schema: S(21, 'Cum convingi, oral și în scris') },
}
