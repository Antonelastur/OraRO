// Materiale de sprijin originale pentru Unitatea VI „Din carte spre departe”,
// clasa a V-a. Quizuri pe obiectivele fiecărei lecții; noțiunile vin din
// manualul Art 5, pp. 168-190, formulările sunt proprii.

const S = (n, titlu) => ({ fisier: `/materiale/clasa-5/unitatea-6/lectia-${n}/schema.svg`, titlu })

export default {
  'lectia-1': {
    joc: {
      tip: 'quiz',
      titlu: 'Jurnalul Monicăi',
      pasi: [
        {
          intrebare: 'Cine scrie jurnalul de călătorie?',
          variante: [
            { text: 'Monica, elevă în clasa a V-a, la cererea profesoarei, în cele trei zile ale excursiei', corect: true, explicatie: 'Excursia tematică se numea chiar „Din carte spre departe”.' },
            { text: 'Un ghid turistic', corect: false, explicatie: 'Ghidul apare în jurnal, dar nu el îl scrie.' },
            { text: 'Profesoara Monicăi', corect: false, explicatie: 'Profesoara a cerut jurnalul; l-a scris eleva.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 168',
        },
        {
          intrebare: 'Pe cine crede Monica, la început, că a întâlnit pe stradă, în Alba Iulia?',
          variante: [
            { text: 'Pe Mihai Viteazul', corect: true, explicatie: 'Era de fapt un participant la festivalul de reconstituire istorică.' },
            { text: 'Pe Ștefan cel Mare', corect: false, explicatie: 'Pe Ștefan și-l amintește din altă excursie, la Putna.' },
            { text: 'Pe Superman', corect: false, explicatie: 'Mantia albă o face să se gândească la supereroi, dar nu el e.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 168-169',
        },
        {
          intrebare: 'Ce sunt incunabulele?',
          variante: [
            { text: 'Cărți tipărite în primii ani ai tiparului, înainte de 1500', corect: true, explicatie: 'De aceea sunt atât de valoroase.' },
            { text: 'Manuscrise scrise pe tăblițe de lut', corect: false, explicatie: 'Tăblițele le vede la Târgoviște; incunabulele sunt tipărite.' },
            { text: 'Cărți electronice', corect: false, explicatie: 'Sunt printre cele mai vechi cărți tipărite, nu printre cele mai noi.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 169',
        },
        {
          intrebare: 'Ce află Monica la Muzeul „Prima Școală Românească” din Brașov?',
          variante: [
            { text: 'Că în 1495 s-a zidit acolo clădirea primei școli în care s-a învățat în limba română', corect: true, explicatie: 'Școala era în curtea bisericii „Sfântul Nicolae”.' },
            { text: 'Că acolo a învățat Ion Creangă', corect: false, explicatie: 'Nică a învățat la Humulești; Monica doar își amintește de el.' },
            { text: 'Că Brașovul a fost capitala Țării Românești', corect: false, explicatie: 'Vechea capitală amintită în jurnal e Târgoviște.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 169',
        },
        {
          intrebare: 'Ce „record istoric” îi atribuie Monica diaconului Coresi?',
          variante: [
            { text: 'A tipărit 39 de cărți în secolul al XVI-lea', corect: true, explicatie: 'Nimeni altcineva nu mai tipărise atâtea în acel secol.' },
            { text: 'A inventat tiparul', corect: false, explicatie: 'Tiparul cu litere mobile l-a inventat Gutenberg.' },
            { text: 'A domnit 47 de ani', corect: false, explicatie: 'Acela e recordul lui Ștefan cel Mare, nu al lui Coresi.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 170',
        },
      ],
    },
  },

  'lectia-2': {
    joc: {
      tip: 'quiz',
      titlu: 'Textul narativ nonliterar',
      pasi: [
        {
          intrebare: 'Prin ce seamănă textul narativ nonliterar cu cel literar?',
          variante: [
            { text: 'Amândouă prezintă o succesiune de întâmplări, în ordine logică și temporală', corect: true, explicatie: 'De aceea sunt amândouă narative.' },
            { text: 'Amândouă prezintă întâmplări inventate', corect: false, explicatie: 'În textul nonliterar întâmplările sunt reale.' },
            { text: 'Amândouă sunt scrise în versuri', corect: false, explicatie: 'Niciunul nu cere versuri.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 171',
        },
        {
          intrebare: 'Prin ce se deosebește textul narativ nonliterar de cel literar?',
          variante: [
            { text: 'Întâmplările s-au petrecut în realitate, într-un anumit timp și spațiu', corect: true, explicatie: 'Poți verifica pe hartă localitățile din jurnalul Monicăi.' },
            { text: 'Nu are acțiune', corect: false, explicatie: 'Are acțiune, altfel n-ar fi narativ.' },
            { text: 'Are întotdeauna dialog', corect: false, explicatie: 'Dialogul nu e o condiție.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 171',
        },
        {
          intrebare: 'Cum se numesc persoanele care iau parte la acțiune într-un text nonliterar?',
          variante: [
            { text: 'Participanți', corect: true, explicatie: 'Sunt persoane reale și nu se confundă cu personajele literare.' },
            { text: 'Personaje', corect: false, explicatie: 'Personajele țin de textul literar.' },
            { text: 'Eroi', corect: false, explicatie: 'Nu e termenul folosit pentru textul nonliterar.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 171',
        },
        {
          intrebare: 'Care dintre acestea este un text nonliterar?',
          variante: [
            { text: 'Un reportaj', corect: true, explicatie: 'Reportajul relatează fapte reale.' },
            { text: 'Un basm', corect: false, explicatie: 'Basmul prezintă întâmplări imaginare.' },
            { text: 'O legendă', corect: false, explicatie: 'Legenda amestecă realul cu miraculosul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 171',
        },
        {
          intrebare: 'Care e un indice de timp din jurnalul Monicăi?',
          variante: [
            { text: 'Sâmbătă, 7 mai', corect: true, explicatie: 'O zi a săptămânii și o dată.' },
            { text: 'Alba Iulia', corect: false, explicatie: 'E un indice de spațiu, o localitate.' },
            { text: 'Batthyaneum', corect: false, explicatie: 'E o instituție, deci tot un reper de spațiu.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 171',
        },
        {
          intrebare: 'Cât durează excursia Monicăi?',
          variante: [
            { text: 'Trei zile, de vineri, 6 mai, până duminică, 8 mai', corect: true, explicatie: 'Datele de la începutul fiecărei însemnări arată durata.' },
            { text: 'O săptămână', corect: false, explicatie: 'Jurnalul are doar trei însemnări, pe trei zile.' },
            { text: 'O singură zi', corect: false, explicatie: 'Monica trece prin trei orașe, în zile diferite.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 168-171',
        },
      ],
    },
  },

  'lectia-5': {
    joc: {
      tip: 'quiz',
      titlu: 'De la manuscris la tipar',
      pasi: [
        {
          intrebare: 'Cine scria cărțile în Evul Mediu, înainte de tipar?',
          variante: [
            { text: 'Călugării copiști, de mână, pe pergament', corect: true, explicatie: 'Copierea unui manuscris dura mult timp.' },
            { text: 'Tipografii', corect: false, explicatie: 'Tipografiile moderne au apărut abia după Gutenberg.' },
            { text: 'Profesorii, pentru elevi', corect: false, explicatie: 'Copiștii lucrau mai ales pentru nobili, mănăstiri și universități.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 177',
        },
        {
          intrebare: 'Ce a adus nou Gutenberg?',
          variante: [
            { text: 'Presa tipografică, cu litere mobile dintr-un aliaj de plumb și cerneală pe bază de ulei', corect: true, explicatie: 'Chinezii tipăreau cu mult înaintea lui; noutatea au fost literele separate.' },
            { text: 'Hârtia', corect: false, explicatie: 'Cărțile trecuseră pe hârtie încă din secolul al XI-lea.' },
            { text: 'Scrisul', corect: false, explicatie: 'Oamenii scriau de mii de ani, chiar pe tăblițe de lut.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 176-177',
        },
        {
          intrebare: 'Care a fost marele avantaj al literelor mobile?',
          variante: [
            { text: 'Puteau fi scoase și refolosite la pagina sau la cartea următoare', corect: true, explicatie: 'O placă sculptată în lemn tipărea mereu aceeași pagină.' },
            { text: 'Erau mai frumoase', corect: false, explicatie: 'Avantajul era practic, nu estetic.' },
            { text: 'Nu mai era nevoie de cerneală', corect: false, explicatie: 'Literele se dădeau cu tuș înainte de tipărire.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 176',
        },
        {
          intrebare: 'Care a fost prima carte tipărită cu invenția lui Gutenberg?',
          variante: [
            { text: 'Biblia, în limba latină', corect: true, explicatie: 'A tipărit-o în 150-180 de exemplare.' },
            { text: 'Tetraevanghelul lui Coresi', corect: false, explicatie: 'Coresi a tipărit la Brașov, abia pe la 1560.' },
            { text: 'Un dicționar', corect: false, explicatie: 'Prima carte a fost una religioasă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, pp. 176-177',
        },
        {
          intrebare: 'Ce a tipărit diaconul Coresi, pe la 1560, la Brașov?',
          variante: [
            { text: 'Tetraevanghelul, în limba română', corect: true, explicatie: 'Cartea cuprinde cele patru Evanghelii.' },
            { text: 'Biblia lui Gutenberg', corect: false, explicatie: 'Aceea fusese tipărită în Germania, cu un secol înainte.' },
            { text: 'Primul ziar românesc', corect: false, explicatie: 'Coresi a tipărit cărți religioase.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 176',
        },
      ],
    },
  },

  'lectia-6': {
    joc: {
      tip: 'quiz',
      titlu: 'De la tipar la cartea digitală',
      pasi: [
        {
          intrebare: 'Prin ce forme au trecut cărțile, după articolul lui Iulian Comănescu?',
          variante: [
            { text: 'Suluri de papirus, pergamente, hârtie, tipar, apoi ecranul calculatorului', corect: true, explicatie: 'De fiecare dată cineva a plâns după forma veche.' },
            { text: 'Direct de la tăblițe de lut la tabletă', corect: false, explicatie: 'Între ele au fost multe alte forme.' },
            { text: 'Au rămas mereu la fel', corect: false, explicatie: 'Forma s-a schimbat de multe ori, esența nu.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 177',
        },
        {
          intrebare: 'Ce este un blog?',
          variante: [
            { text: 'Un jurnal online, cu articole periodice, comentarii, imagini, materiale video', corect: true, explicatie: 'Cuvântul vine din englezescul web log, „jurnal pe internet”.' },
            { text: 'O carte tipărită', corect: false, explicatie: 'Blogul există doar pe internet.' },
            { text: 'Un joc video', corect: false, explicatie: 'Blogul e un spațiu de scris, nu de joacă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 177',
        },
        {
          intrebare: 'Ce avantaje aduc suporturile electronice, după manual?',
          variante: [
            { text: 'Spațiul de stocare s-a micșorat enorm, iar textele, imaginile și hărțile pot fi consultate pe internet', corect: true, explicatie: 'O bibliotecă întreagă încape pe o tabletă.' },
            { text: 'Cărțile electronice nu mai au cuprins și capitole', corect: false, explicatie: 'Arată, în mare, ca cele tipărite: coperte, cuprins, capitole.' },
            { text: 'Nu mai e nevoie să citești', corect: false, explicatie: 'Se schimbă suportul, nu și cititul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 177',
        },
        {
          intrebare: 'Ce crede autorul articolului despre viitorul cărților?',
          variante: [
            { text: 'Nu vor muri: au mai trecut prin multe schimbări de formă și au supraviețuit', corect: true, explicatie: 'Vor muri doar după ultimul cititor, spune el.' },
            { text: 'Vor dispărea din cauza e-book-urilor', corect: false, explicatie: 'Dimpotrivă, arată că se vând și cele de hârtie.' },
            { text: 'Vor rămâne doar pe hârtie', corect: false, explicatie: 'Le vede și pe tabletă, și pe telefon.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 177',
        },
        {
          intrebare: 'Care e ordinea corectă, de la cel mai ieftin la cel mai scump?',
          variante: [
            { text: 'un telefon inteligent, Biblia lui Gutenberg, o Biblie copiată de mână', corect: true, explicatie: 'Biblia lui Gutenberg costa mai mult decât un iPhone, dar infinit mai puțin decât una copiată de mână.' },
            { text: 'Biblia lui Gutenberg, un telefon inteligent, o Biblie copiată de mână', corect: false, explicatie: 'Biblia tipărită era mai scumpă decât un telefon de azi.' },
            { text: 'o Biblie copiată de mână, Biblia lui Gutenberg, un telefon inteligent', corect: false, explicatie: 'E ordinea inversă: manuscrisul era cel mai scump.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 176',
        },
      ],
    },
  },

  'lectia-7': {
    joc: {
      tip: 'quiz',
      titlu: 'Identitate națională. Stema României',
      pasi: [
        {
          intrebare: 'Ce este identitatea națională?',
          variante: [
            { text: 'Sentimentul de apartenență a unei persoane la o națiune', corect: true, explicatie: 'Se manifestă prin patriotism.' },
            { text: 'Actul de identitate', corect: false, explicatie: 'Buletinul e un document, nu un sentiment.' },
            { text: 'Limba străină preferată', corect: false, explicatie: 'Nu are legătură cu limbile străine.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 179',
        },
        {
          intrebare: 'Ce simbolizează vulturul de aur cu cruce de pe stemă?',
          variante: [
            { text: 'Dinastia Basarabilor; e și simbol al latinității, al curajului și al libertății', corect: true, explicatie: 'E elementul central al stemei.' },
            { text: 'Marea Neagră', corect: false, explicatie: 'Marea e reprezentată de cei doi delfini.' },
            { text: 'Cetățile Transilvaniei', corect: false, explicatie: 'Pe acestea le arată cele șapte turnuri.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 178',
        },
        {
          intrebare: 'Pe cine amintesc sceptrul și sabia din ghearele vulturului?',
          variante: [
            { text: 'Sceptrul, pe Mihai Viteazul; sabia, pe Ștefan cel Mare', corect: true, explicatie: 'Sunt însemnele suveranității.' },
            { text: 'Sceptrul, pe Ștefan cel Mare; sabia, pe Mihai Viteazul', corect: false, explicatie: 'E invers.' },
            { text: 'Pe Mircea cel Bătrân și pe Vlad Țepeș', corect: false, explicatie: 'Stema nu îi amintește prin aceste însemne.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 178',
        },
        {
          intrebare: 'Ce reprezintă cei doi delfini de pe stemă?',
          variante: [
            { text: 'Teritoriile Mării Negre, adică Dobrogea', corect: true, explicatie: 'Stau față în față, cu capul în jos.' },
            { text: 'Moldova', corect: false, explicatie: 'Moldova are bourul cu stea între coarne.' },
            { text: 'Banatul și Oltenia', corect: false, explicatie: 'Acestea au podul lui Traian și leul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 178',
        },
        {
          intrebare: 'Din ce a fost turnată coroana de oțel, adăugată stemei în 2016?',
          variante: [
            { text: 'Din țeava unui tun otoman capturat în Războiul de Independență din 1877-1878', corect: true, explicatie: 'E coroana regală a României.' },
            { text: 'Din aurul dacilor', corect: false, explicatie: 'E de oțel, nu de aur.' },
            { text: 'Din fierul unei cetăți medievale', corect: false, explicatie: 'Metalul vine de la un tun, nu de la o cetate.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 178',
        },
      ],
    },
  },

  'lectia-11': {
    joc: {
      tip: 'quiz',
      titlu: 'Enunțul simplu și complex',
      pasi: [
        {
          intrebare: 'Ce este enunțul?',
          variante: [
            { text: 'O unitate de bază a comunicării, construită de obicei în jurul unui predicat', corect: true, explicatie: 'Predicatul e centrul enunțului.' },
            { text: 'Orice cuvânt, luat separat', corect: false, explicatie: 'Un cuvânt singur nu comunică, de obicei, o idee întreagă.' },
            { text: 'Un text întreg, cu titlu', corect: false, explicatie: 'Textul are mai multe enunțuri.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 185',
        },
        {
          intrebare: 'Când este un enunț simplu?',
          variante: [
            { text: 'Când e alcătuit dintr-o singură propoziție', corect: true, explicatie: 'Deci are un singur predicat.' },
            { text: 'Când are cuvinte puține', corect: false, explicatie: 'Contează numărul de propoziții, nu de cuvinte.' },
            { text: 'Când nu are semne de punctuație', corect: false, explicatie: 'Orice enunț are un semn la final.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 185',
        },
        {
          intrebare: 'Ce fel de enunț este „Au stat puțin, au ascultat, au plecat.”?',
          variante: [
            { text: 'Complex: are trei predicate, deci trei propoziții', corect: true, explicatie: 'Au stat, au ascultat, au plecat.' },
            { text: 'Simplu, fiindcă e scurt', corect: false, explicatie: 'Lungimea nu contează; numeri predicatele.' },
            { text: 'Nu e un enunț', corect: false, explicatie: 'E un enunț asertiv, încheiat cu punct.' },
          ],
          indiciu: 'Numără predicatele.',
          sursa: 'Manual Art 5, p. 185',
        },
        {
          intrebare: 'Ce fel de enunț este „Pe crestele munților, printre nori, străluceau primele raze de soare.”?',
          variante: [
            { text: 'Simplu: are un singur predicat, străluceau', corect: true, explicatie: 'Deși e lung, are o singură propoziție.' },
            { text: 'Complex, fiindcă e lung', corect: false, explicatie: 'Un enunț lung poate fi simplu.' },
            { text: 'Complex, fiindcă are virgule', corect: false, explicatie: 'Virgulele despart aici părți de propoziție, nu propoziții.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 185',
        },
        {
          intrebare: 'Câte predicate are „Avem o istorie veche, am supraviețuit multor amenințări și pericole.”?',
          variante: [
            { text: 'Două: avem și am supraviețuit', corect: true, explicatie: 'Deci enunțul e complex.' },
            { text: 'Unul', corect: false, explicatie: 'Mai caută un verb care arată o acțiune.' },
            { text: 'Trei', corect: false, explicatie: '„Amenințări” și „pericole” sunt substantive, nu predicate.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 185',
        },
      ],
    },
  },

  'lectia-12': {
    joc: {
      tip: 'quiz',
      titlu: 'Tipuri de enunț',
      pasi: [
        {
          intrebare: 'Ce transmite un enunț asertiv?',
          variante: [
            { text: 'O informație despre o stare de lucruri: Afară plouă.', corect: true, explicatie: 'Se încheie cu punct.' },
            { text: 'O întrebare', corect: false, explicatie: 'Întrebarea e enunț interogativ.' },
            { text: 'Un ordin', corect: false, explicatie: 'Ordinul e enunț imperativ.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 185',
        },
        {
          intrebare: 'Ce fel de enunț este „Ce mult m-a emoționat gestul tău!”?',
          variante: [
            { text: 'Exclamativ: comunică o emoție', corect: true, explicatie: 'Vorbitorul nu cere nimic, doar arată ce simte.' },
            { text: 'Imperativ', corect: false, explicatie: 'Nu cere nimănui să facă ceva.' },
            { text: 'Interogativ', corect: false, explicatie: 'Deși începe cu „ce”, nu e o întrebare.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 186',
        },
        {
          intrebare: 'Ce fel de enunț este „Continuați jocul fără mine!”?',
          variante: [
            { text: 'Imperativ: transmite un ordin sau o rugăminte', corect: true, explicatie: 'Verbul e la imperativ: continuați.' },
            { text: 'Exclamativ', corect: false, explicatie: 'Are semnul exclamării, dar cere o acțiune, nu arată o emoție.' },
            { text: 'Asertiv', corect: false, explicatie: 'Nu dă o informație, ci o cerere.' },
          ],
          indiciu: 'Cere cuiva să facă ceva sau arată o emoție?',
          sursa: 'Manual Art 5, p. 186',
        },
        {
          intrebare: 'Ce semn marchează întreruperea intenționată a unui enunț asertiv?',
          variante: [
            { text: 'Punctele de suspensie', corect: true, explicatie: 'Încă nu știu, m-ai întrerupt…' },
            { text: 'Semnul întrebării', corect: false, explicatie: 'Acela încheie enunțul interogativ.' },
            { text: 'Virgula', corect: false, explicatie: 'Virgula nu încheie un enunț.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 185',
        },
        {
          intrebare: 'Care e varianta interogativă a enunțului „Ți-a plăcut filmul.”?',
          variante: [
            { text: 'Ți-a plăcut filmul?', corect: true, explicatie: 'Semnul întrebării schimbă tipul enunțului.' },
            { text: 'Ți-a plăcut filmul!', corect: false, explicatie: 'Aceasta ar fi varianta exclamativă.' },
            { text: 'Ți-a plăcut filmul…', corect: false, explicatie: 'Punctele de suspensie arată o întrerupere.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 5, p. 186',
        },
      ],
    },
  },

  'lectia-9': { schema: S(9, 'A explica, a recomanda, a afirma') },
  'lectia-13': { schema: S(13, 'Textul și imaginea, împreună') },
  'lectia-14': { schema: S(13, 'Textul și imaginea, împreună') },
  'lectia-15': { schema: S(15, 'Textul nonliterar și comunicarea, tot la un loc') },
  'lectia-16': { schema: S(16, 'Enunțul, tot la un loc') },
}
