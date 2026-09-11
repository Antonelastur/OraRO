# Fișe de exerciții, clasa a V-a, Unitatea II „De-a ce mă joc”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 5). Textele fără autor
# sunt create pentru fișe. Rezolvările: notite-profesor/clasa-5/unitatea-2/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-2.py

SUB = 'Clasa a V-a · Unitatea II, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 5, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-5/unitatea-2/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
            'sursa': NOTA.format(pp=pp), 'reper': reper, 'pagini': list(pagini)}


def T(n, title, prompt, cols, widths, data=None, rows=None, row_h=22):
    return {'t': 'table', 'n': n, 'title': title, 'prompt': prompt, 'cols': cols,
            'widths': widths, 'rows': rows or len(data), 'row_h': row_h, 'data': data}


def L(n, title, prompt, weight=1):
    return {'t': 'lines', 'n': n, 'title': title, 'prompt': prompt, 'weight': weight}


def X(n, title, prompt):
    return {'t': 'text', 'n': n, 'title': title, 'prompt': prompt}


def gol(*randuri):
    return [[r, ''] for r in randuri]


def perechi(*randuri):
    """Tabel cu două perechi de coloane (cuvânt, răspuns, cuvânt, răspuns)."""
    return [[a, '', b, ''] for a, b in randuri]


AF = ['Afirmația', 'A / F']

FISE = [
    fisa(1, 'pp. 42-44',
         'Reper: În schița „Vizită...” de I.L. Caragiale, un musafir povestește ce s-a întâmplat când a mers de '
         'Sf. Ion la doamna Popescu, de ziua fiului ei, Ionel, un băiețel de vreo opt ani îmbrăcat ca maior de roșiori.',
         [
             T(1, 'Cine spune?', 'Scrie cine rostește fiecare replică: Ionel, madam Popescu, musafirul sau jupâneasa.',
               ['Replica din text', 'Personajul'], [370, 140], gol(
                   '„Uite, coniță, Ionel nu s-astâmpără!”',
                   '„Maior!”',
                   '„Tutunul este o otravă...”',
                   '„Viu acu!”',
                   '„Cafeaua nu pătează!”',
                   '„Ține-l, coniță, că mă dă jos cu tava!”'), row_h=20),
             X(2, 'Detaliile vizitei', [
                 'Încercuiește varianta corectă.',
                 'a) Vizita are loc de: Crăciun  /  Sf. Ion  /  Paști.',
                 'b) Ionel e îmbrăcat ca: marinar  /  maior de roșiori  /  pompier.',
                 'c) Musafirul îi aduce lui Ionel: o tobă  /  o minge  /  o sabie.',
                 'd) Cafeaua se face la: aragaz  /  spirtieră  /  cuptor.',
                 'e) Când pleacă, musafirul își pune: galoșii  /  șoșonii  /  cizmele.']),
             T(3, 'Cuvinte de altădată', [
                 'Scrie litera sensului potrivit.',
                 'A = ziua numelui     B = hol de la intrare     C = candelabru',
                 'D = haină de uniformă     E = vas pentru dulceață     F = aparat pentru cafea'],
               ['Cuvântul', 'Litera', 'Cuvântul', 'Litera'], [185, 70, 185, 70],
               perechi(('onomastică', 'policandru'), ('vestibul', 'chesea'), ('mondir', 'mașină (în text)')), row_h=20),
         ],
         [
             T(4, 'Amuzant, îngrijorător sau ciudat?', [
                 'Cum ți s-a părut fiecare moment? Scrie A (amuzant), Î (îngrijorător) sau C (ciudat)',
                 'și explică pe scurt.'],
               ['Momentul', 'A / Î / C', 'De ce?'], [220, 70, 220],
               [['Ionel bate toba călare pe cal', '', ''], ['Ionel o lovește pe mama cu sabia', '', ''],
                ['Ionel fumează o țigaretă', '', ''], ['Ionel leșină', '', ''],
                ['Musafirul găsește dulceață în șoșoni', '', '']], row_h=26),
             L(5, 'Scrisoarea musafirului', [
                 'A doua zi, musafirul îi scrie unui prieten despre vizită. Scrie scrisoarea',
                 'în 4-5 propoziții, la persoana I, ca și cum ai fi musafirul.'], 3),
         ]),

    fisa(2, 'pp. 45-46',
         'Reper (manual, pp. 45-46): Acțiunea unui text narativ constă în întâmplările petrecute într-un anumit timp '
         'și spațiu. Indicii de timp și de spațiu pot fi numiți în text sau deduși. Textul narativ are o situație '
         'inițială, o succesiune de întâmplări (complicație – acțiune – rezolvare) și o situație finală.',
         [
             T(1, 'Timp sau spațiu?', 'Scrie T dacă expresia arată timpul și S dacă arată spațiul.',
               ['Expresia', 'T / S', 'Expresia', 'T / S'], [185, 70, 185, 70],
               perechi(('de Sf. Ion', 'în salonul doamnei'), ('după un moment', 'în vestibul'),
                       ('într-o dimineață de iarnă', 'pe o alee din parc'), ('la sfârșitul secolului', 'la etajul cinci')),
               row_h=20),
             X(2, 'Obiecte de altădată', [
                 'Încercuiește obiectele care se potrivesc cu vremea în care se petrece „Vizită...”.',
                 'spirtieră   ·   tabletă   ·   șoșoni   ·   telefon mobil   ·   jupâneasă   ·   trotinetă electrică',
                 '·   policandru   ·   lift   ·   tabacheră']),
             T(3, 'Schema unei povești', [
                 'Scrie secvența potrivită: SI (situația inițială), C (complicația), A (acțiunea),',
                 'R (rezolvarea) sau SF (situația finală).'],
               ['Propoziția', 'Secvența'], [420, 90], gol(
                   'A răscolit toată casa și l-a sunat pe bunicul.',
                   'Mara a ajuns la timp la gară, cu biletul în mână.',
                   'Mara își pregătea liniștită ghiozdanul pentru excursie.',
                   'Bunicul i-a spus că folosise biletul ca semn de carte.',
                   'Deodată, a observat că îi lipsește biletul de tren.'), row_h=20),
         ],
         [
             T(4, 'Unde se întâmplă?', 'Scrie locul: salonul, odaia de alături, vestibulul sau casa musafirului.',
               ['Întâmplarea', 'Locul'], [370, 140], gol(
                   'Jupâneasa strigă că Ionel vrea să-i răstoarne mașina.',
                   'Ionel bate toba călare pe calul de jucărie.',
                   'Ionel toarnă dulceață în șoșonii musafirului.',
                   'Musafirul descoperă dulceața.'), row_h=20),
             L(5, 'Altă vreme, alt loc', [
                 'Rescrie începutul vizitei în 3-4 propoziții, mutând-o în zilele noastre, într-un',
                 'apartament de bloc. Subliniază indicii de timp și de spațiu pe care i-ai folosit.'], 3),
         ]),

    fisa(3, 'p. 47',
         'Reper (manual, p. 47): Ideile secundare prezintă amănunte legate de ideea principală, completând-o. '
         'Planul dezvoltat de idei cuprinde ideile principale și ideile secundare corespunzătoare, în ordinea în '
         'care apar în text.',
         [
             T(1, 'Bicicleta roșie', [
                 'Citește textul, apoi scrie planul dezvoltat: ideea principală și un detaliu pentru fiecare fragment.',
                 '[1] De ziua lui, Tudor a primit de la bunici o bicicletă roșie. Avea sonerie argintie și un coș în față.',
                 '[2] Chiar în prima zi, a ieșit cu ea în parc. Pe o alee în pantă, frâna nu l-a ascultat',
                 'și Tudor a căzut în iarbă.',
                 '[3] Un vecin l-a ajutat să se ridice și i-a arătat cum se reglează frâna. De atunci, Tudor',
                 'verifică bicicleta înainte de fiecare plimbare.'],
               ['Fr.', 'Ideea principală', 'Un detaliu (idee secundară)'], [40, 235, 235],
               [['1', '', ''], ['2', '', ''], ['3', '', '']], row_h=34),
             T(2, 'Principală sau secundară?', 'Pentru textul de mai sus, scrie P (idee principală) sau S (idee secundară).',
               ['Enunțul', 'P / S'], [440, 70], gol(
                   'Bicicleta avea sonerie argintie.',
                   'Tudor cade de pe bicicletă în parc.',
                   'Aleea era în pantă.',
                   'Un vecin îl ajută pe Tudor.',
                   'Bicicleta avea un coș în față.'), row_h=20),
         ],
         [
             T(3, 'Detaliul potrivit', [
                 'Ideile principale din „Vizită...”: A. Ionel se joacă de-a războiul cu sabia.',
                 'B. Ionel fumează.   C. Musafirul pleacă acasă. Scrie litera ideii completate de fiecare detaliu.'],
               ['Detaliul (ideea secundară)', 'Litera'], [420, 90], gol(
                   'Mama o apără pe jupâneasă și primește o lovitură sub ochi.',
                   'Musafirul îi întinde țigareta, iar mama îl privește încântată.',
                   'Își pune șoșonii și paltonul.',
                   'Ionel se plimbă foarte grav, ca un militar.',
                   'Jupâneasa intră cu tava cu dulceață și cafele.',
                   'Nu știe încă de ce ieșise Ionel în vestibul.'), row_h=20),
             L(4, 'Planul unei zile', [
                 'Scrie planul dezvoltat al unei zile de sâmbătă din viața ta: trei idei principale,',
                 'fiecare cu câte un detaliu.'], 3),
         ]),

    fisa(4, 'pp. 48-49',
         'Reper (manual, p. 48): Personajul este o ființă, un animal sau un obiect însuflețit care participă la '
         'acțiunea unui text narativ literar; există doar în text. După rol, poate fi principal, secundar sau episodic. '
         'Trăsăturile lui pot fi numite sau deduse din fapte, din vorbe sau din ce spun alții despre el.',
         [
             T(1, 'Fapta și trăsătura', [
                 'Scrie trăsătura pe care o dezvăluie fiecare faptă a lui Ionel:',
                 'mândru, dornic să pară important, nervos, răzbunător, neascultător.'],
               ['Fapta sau vorba lui Ionel', 'Trăsătura'], [360, 150], gol(
                   'Strigă „Maior!”, când e numit doar roșior.',
                   'Aruncă toba și trâmbița ca să comande ca un maior.',
                   'Trântește mingea „cu mult necaz” de parchet.',
                   'Îi toarnă musafirului dulceață în șoșoni.',
                   'Nu se oprește, deși mama îl strigă de mai multe ori.'), row_h=20),
             T(2, 'Ce spune mama, ce face mama', 'Completează ce se întâmplă de fapt.',
               ['Ce spune madam Popescu', 'Ce face de fapt'], [255, 255], gol(
                   'Că trebuie să-i facă educația lui Ionel.',
                   '„Ionel! astâmpără-te, mamă!”',
                   'Îl ceartă când o lovește cu sabia.'), row_h=30),
         ],
         [
             T(3, 'Personaj sau persoană reală?', 'Scrie PJ (personaj) sau PR (persoană reală).',
               ['Numele', 'PJ / PR', 'Numele', 'PJ / PR'], [185, 70, 185, 70],
               perechi(('Ionel Popescu', 'I.L. Caragiale'), ('Bogdan („Prietenul meu”)', 'Riley („Întors pe dos”)'),
                       ('Nathan Hope (selfie)', 'madam Popescu')), row_h=20),
             L(4, 'Portretul lui Ionel', [
                 'Scrie un portret al lui Ionel în 4-5 propoziții: două trăsături fizice sau de îmbrăcăminte',
                 'și două trăsături morale, fiecare cu o dovadă din text.'], 3),
         ]),

    fisa(5, 'p. 50',
         'Reper: Semnificațiile unui text sunt înțelesurile lui dincolo de întâmplări: ce vrea să ne arate autorul. '
         'Le descoperi din fapte, din titlu și din felul în care vorbesc personajele. În „Vizită...”, contează mai ales '
         'ce spune mama despre educație și ce se vede de fapt.',
         [
             T(1, 'Alt titlu', [
                 'Pentru fiecare titlu posibil, spune ce ar pune în centru și dacă l-ai alege în locul',
                 'titlului „Vizită...”.'],
               ['Titlul propus', 'Ce pune în centru?', 'L-ai alege? De ce?'], [140, 185, 185],
               [['Micul maior', '', ''], ['Educația lui Ionel', '', ''], ['Dulceața din șoșoni', '', '']], row_h=34),
             T(2, 'Dacă ai fi fost mama lui Ionel', 'Ce ai fi făcut tu în fiecare situație?',
               ['Situația', 'Ce ai fi făcut'], [220, 290], gol(
                   'Ionel vrea să răstoarne spirtiera.',
                   'Ionel bate toba lângă musafir.',
                   'Ionel cere o țigaretă.'), row_h=30),
         ],
         [
             T(3, 'Este adevărat și azi?', 'Scrie DA sau NU și un argument scurt.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [220, 60, 230],
               [['Copiii răsfățați sunt mai fericiți.', '', ''],
                ['Un copil învață mai mult din ce vede.', '', ''],
                ['Politețea se învață mai întâi acasă.', '', '']], row_h=34),
             L(4, 'Un sfat pentru madam Popescu', [
                 'Scrie, în numele musafirului, un bilet politicos către madam Popescu, cu un sfat',
                 'despre educația lui Ionel (4-5 propoziții).'], 3),
         ]),

    fisa(6, 'pp. 51-52',
         'Reper: În fragmentul din romanul „Exuvii” de Simona Popescu, o povestitoare adultă își amintește „regatul '
         'copiilor” de la sfârșitul secolului al XX-lea: jocurile din fața blocului, certurile și împăcările, '
         'regulile nescrise ale copiilor.',
         [
             T(1, 'Ziua copiilor', 'Scrie momentul zilei potrivit, după text: dimineața, după-amiaza sau seara.',
               ['Ce se întâmplă (după text)', 'Momentul'], [380, 130], gol(
                   'Jocuri, alergătură, hârjoneală și gălăgie.',
                   'Împăcări și povești spuse în fața blocului.',
                   'Vorbe dure, îmbrânceli și capcane.'), row_h=20),
             T(2, 'Cinstit sau necinstit?', 'Scrie C (cinstit) sau N (necinstit) pentru fiecare situație de joc.',
               ['Situația', 'C / N'], [440, 70], gol(
                   'La v-ați ascunselea, cel care caută trage cu ochiul.',
                   'Echipa care pierde îi felicită pe câștigători.',
                   'La „Regina”, prietenii Reginei primesc „pași de uriaș”.',
                   'Toți jucătorii stabilesc regulile înainte să înceapă.',
                   'Cineva îi șoptește celui care caută unde s-au ascuns ceilalți.'), row_h=20),
             X(3, 'Cuvinte din glosar', [
                 'Completează cu: mârșăvie, ferocitate, scatoalcă, insinuante.',
                 'a) Să râzi de cel mai mic din grup e o adevărată ______________.',
                 'b) Câinele a lătrat cu ______________ la poștaș.',
                 'c) Fratele meu mi-a dat, în joacă, o ______________ peste ceafă.',
                 'd) Nu-mi plac vorbele ______________ ale Anei, pline de aluzii.',
                 'e) Care cuvânt din glosar a fost inventat de autoare? ______________']),
         ],
         [
             T(4, 'Două texte, două lumi', 'Compară „Vizită...” cu fragmentul din „Exuvii”.',
               ['', '„Vizită...”', '„Exuvii”'], [150, 180, 180],
               [['Cine povestește?', '', ''], ['Unde se joacă copiii?', '', ''],
                ['Cu cine se joacă?', '', ''], ['Ce jocuri apar?', '', '']], row_h=28),
             L(5, 'Legile nescrise ale clasei', [
                 'Și clasa voastră are „legi nescrise” la joacă. Scrie trei dintre ele și spune',
                 'dacă ți se par cinstite.'], 3),
         ]),

    fisa(7, 'pp. 53-54',
         'Reper (manual, p. 53): Jocul este o activitate fizică sau mentală care nu urmărește un scop practic, ci '
         'distracția. Înseamnă libertate, imaginație și creativitate, dar și reguli, respect și colaborare. Jocul '
         'poate apropia oameni din culturi diferite.',
         [
             T(1, 'Jocul și țara lui', [
                 'Scrie țara din care provine fiecare joc: România, China, Ungaria, Danemarca,',
                 'SUA, Germania.'],
               ['Jocul', 'Țara', 'Jocul', 'Țara'], [150, 105, 150, 105],
               perechi(('oina', 'cubul Rubik'), ('go', 'Lego'), ('Monopoly', 'Nu te supăra, frate')), row_h=20),
             T(2, 'Ieri și azi', 'Alege un joc tradițional și un joc digital și compară-le.',
               ['', 'Joc tradițional: ______', 'Joc digital: ______'], [150, 180, 180],
               [['Unde se joacă?', '', ''], ['Cu cine?', '', ''], ['De ce ai nevoie?', '', ''],
                ['Ce exersezi?', '', '']], row_h=26),
             T(3, 'Adevărat sau fals?', 'Pe baza textului despre jocurile digitale (p. 54), scrie A sau F.', AF, [440, 70], gol(
                 'Jocurile pe computer se adresează doar copiilor.',
                 'Johan Huizinga a pornit de la ideea că jocul e la originea culturii.',
                 'Jocurile „serioase” transmit cunoștințe și formează abilități.',
                 '„Senzația de eficiență” înseamnă că jocul durează puțin.'), row_h=20),
         ],
         [
             L(4, 'Un joc fără cuvinte', [
                 'Vrei să joci un joc cu un copil care nu vorbește limba română. Cum i-ai explica',
                 'regulile doar prin gesturi și desene? Scrie 4-5 propoziții.'], 2),
             L(5, 'Un joc nou pentru clasă', [
                 'Inventează un joc care amestecă ceva tradițional cu ceva digital (ca praștia cu cablu',
                 'de pe afișul „Piua”). Scrie-i numele și trei reguli.'], 2),
         ]),

    fisa(9, 'pp. 56-57',
         'Reper (manual, p. 56): Dialogul este un schimb de replici între două sau mai multe persoane, care devin, pe rând, '
         'vorbitori și ascultători. Replicile trebuie să se lege: la întrebare se răspunde; invitația se acceptă sau se '
         'refuză; complimentul primește mulțumiri; reproșul se acceptă sau se respinge. Politețea contează.',
         [
             T(1, 'Ce fel de replică?', 'Scrie I (întrebare), INV (invitație), CO (compliment) sau R (reproș).',
               ['Replica', 'Tipul'], [420, 90], gol(
                   'Vii sâmbătă la mine să vedem un film?',
                   'Ai desenat minunat afișul clasei!',
                   'Nu-mi place că ai luat mingea fără să întrebi.',
                   'Cât durează pauza mare?',
                   'Bravo, ai marcat un gol superb!'), row_h=20),
             T(2, 'Răspunsul potrivit', 'Scrie răspunsul cerut, politicos.',
               ['Replica', 'Răspunsul cerut', 'Răspunsul tău'], [170, 120, 220],
               [['Vii la ziua mea, duminică?', 'refuzi politicos', ''],
                ['Ce frumos cânți la chitară!', 'mulțumești', ''],
                ['Mi-ai stricat creionul!', 'accepți reproșul', ''],
                ['Mi-ai stricat creionul!', 'respingi reproșul', '']], row_h=30),
             X(3, 'Politicos sau nu?', [
                 'Încercuiește replica politicoasă din fiecare pereche.',
                 'a) „Dă-mi caietul!”   /   „Îmi împrumuți, te rog, caietul?”',
                 'b) „Nu vin, n-am chef.”   /   „Mulțumesc pentru invitație, dar sâmbătă am antrenament.”',
                 'c) „Gata, termină odată!”   /   „Te rog să mă lași să termin ce spuneam.”']),
         ],
         [
             X(4, 'Replica fără legătură', [
                 'Citește dialogul. Care replică nu se leagă de cea dinainte? Rescrie-o potrivit.',
                 '— Ana, ce joc ai adus azi?',
                 '— Am adus „Piticot”.',
                 '— Super! Câți jucători pot participa?',
                 '— Afară plouă de dimineață.',
                 '— Hai să citim regulile împreună!',
                 'Replica rescrisă: _______________________________________________________________']),
             L(5, 'Dialog cu reguli', [
                 'Scrie un dialog de 6 replici: un elev își invită colegul la prezentarea proiectului;',
                 'colegul refuză politicos și îi face un compliment. Folosește linia de dialog.'], 3),
         ]),

    fisa(10, 'pp. 58-59',
         'Reper (manual, p. 58): Regulile de acces la cuvânt: fiecare vorbitor dă cuvântul altuia după ce a terminat; '
         'intenția de a interveni se anunță printr-un semn (mâna ridicată) și se așteaptă; are prioritate cine a '
         'semnalat primul; în discuțiile cu clasa, profesorul e moderator, iar în grupe, un elev.',
         [
             T(1, 'Pot să vorbesc acum?', 'Scrie DA dacă poți interveni și NU dacă trebuie să mai aștepți.',
               ['Situația', 'DA / NU'], [430, 80], gol(
                   'Profesoara întreabă: „Cine vrea să adauge ceva?”',
                   'Colegul e la jumătatea propoziției.',
                   'Moderatorul grupei îmi spune numele.',
                   'Doi colegi au ridicat mâna înaintea mea.',
                   'Colegul încheie: „Asta e părerea mea.”'), row_h=20),
             T(2, 'Ce regulă s-a încălcat?', [
                 'A = vorbești doar când ți se dă cuvântul   B = anunți prin semn că vrei să intervii',
                 'C = are prioritate cine a semnalat primul   D = nu întrerupi pe cel care vorbește'],
               ['Situația', 'Litera'], [430, 80], gol(
                   'Ioana vorbește peste colega ei, care încă nu terminase.',
                   'Andrei ia cuvântul înaintea Mariei, deși ea ridicase mâna prima.',
                   'Luca începe să vorbească fără să facă niciun semn.',
                   'Într-o grupă vorbesc toți deodată și nimeni nu dă cuvântul.'), row_h=20),
             X(3, 'Moderatorul', [
                 'Încercuiește ce face un moderator bun.',
                 'dă cuvântul pe rând   ·   vorbește cel mai mult   ·   îi ascultă doar pe prieteni',
                 '·   are grijă să nu fie întrerupt nimeni   ·   îi încurajează pe cei tăcuți']),
         ],
         [
             T(4, 'Fișa observatorului', [
                 'Folosește fișa la o discuție pe grupe: pune câte o liniuță de fiecare dată când observi',
                 'situația, apoi scrie o observație.'],
               ['Ce observ', 'Liniuțe', 'Observații'], [200, 110, 200],
               [['Cineva a întrerupt pe altcineva', '', ''], ['Cineva a ridicat mâna', '', ''],
                ['Moderatorul a dat cuvântul', '', ''], ['A fost o tăcere lungă', '', '']], row_h=30),
             L(5, 'Reguli pentru ora online', [
                 'Scrie, pentru grupul clasei, trei reguli de acces la cuvânt pentru o oră online',
                 '(de exemplu: microfonul, mâna ridicată din aplicație, mesajele scrise).'], 3),
         ]),

    fisa(11, 'pp. 60-61',
         'Reper (manual, pp. 60-61): Verbul arată acțiunea, starea sau existența și își schimbă forma după timp '
         '(trecut, prezent, viitor), persoană (I, a II-a, a III-a) și număr (singular, plural); are formă afirmativă și '
         'negativă. Predicatul exprimat printr-un verb este predicat verbal. Infinitivul este forma din dicționar '
         '(a alerga); după a putea se folosește fără a (Pot cânta.).',
         [
             T(1, 'Fișa verbului', 'Completează timpul, persoana și numărul fiecărui verb.',
               ['Verbul', 'Timpul', 'Persoana', 'Numărul'], [150, 120, 120, 120],
               [['aruncăm', '', '', ''], ['ai citit', '', '', ''], ['vor juca', '', '', ''],
                ['câștigi', '', '', ''], ['veți desena', '', '', ''], ['a sărit', '', '', '']], row_h=20),
             X(2, 'Predicate și infinitive', [
                 'Subliniază predicatul verbal și încercuiește verbul la infinitiv, unde există.',
                 'a) Ana poate desena orice animal.          b) Frații mei doresc a învăța șah.',
                 'c) Mingea a sărit peste gard.                d) Nu știu a înota.']),
             L(3, 'Schimbă persoana', [
                 'Trece verbele la persoana I plural, păstrând timpul.',
                 'a) El aruncă zarul.     b) Ea a câștigat partida.     c) Copilul va construi un turn.',
                 'd) Fata nu citește.'], 2),
         ],
         [
             X(4, 'na / n-a, nai / n-ai', [
                 'Completează cu forma potrivită.',
                 'a) Ionel ______ vrut să se astâmpere.        b) ______, ține mingea!',
                 'c) Bunicul cântă la ______.                      d) ______ uitat tema acasă?']),
             T(5, 'Infinitivul', 'Scrie infinitivul fiecărui verb.',
               ['Verbul', 'Infinitivul', 'Verbul', 'Infinitivul'], [150, 105, 150, 105],
               perechi(('aruncăm', 'vor ține'), ('ai citit', 'bea'), ('sare', 'scriu')), row_h=20),
             L(6, 'Acțiune în viteză', [
                 'Scrie 3-4 propoziții despre o cursă sau un joc, cu cât mai multe verbe.',
                 'Subliniază verbele.'], 2),
         ]),

    fisa(12, 'pp. 62-63',
         'Reper (manual, pp. 62-63): Modul arată cum consideră vorbitorul acțiunea: sigură, reală (Stă.) sau posibilă '
         '(Stai!). Modul indicativ arată o acțiune sigură. Prezentul arată acțiunea din momentul vorbirii, dar poate avea '
         'și valoare de trecut, de viitor sau de adevăr general. Desinențele arată persoana și numărul.',
         [
             T(1, 'Sigur sau posibil?', 'Scrie S (acțiune sigură, indicativ) sau P (acțiune posibilă: ordin, îndemn).',
               ['Propoziția', 'S / P'], [440, 70], gol(
                   'Ionel sare pe calul de jucărie.',
                   'Stai liniștit!',
                   'Mâine plec la bunici.',
                   'Ieși în curte!',
                   'Pisica toarce lângă sobă.'), row_h=20),
             T(2, 'Ce valoare are prezentul?', 'Scrie M (momentul vorbirii), T (trecut), V (viitor) sau G (adevăr general).',
               ['Propoziția', 'Litera'], [440, 70], gol(
                   'Acum citesc o carte despre dinozauri.',
                   'Săptămâna viitoare plecăm în tabără.',
                   'Pământul se învârte în jurul Soarelui.',
                   'În 1859, Cuza unește Moldova și Țara Românească.'), row_h=20),
             T(3, 'Conjugă la prezent', 'Completează formele de indicativ prezent.',
               ['Persoana', 'a lucra', 'a citi', 'a vedea'], [110, 133, 133, 134],
               [['eu', '', '', ''], ['tu', '', '', ''], ['el, ea', '', '', ''], ['noi', '', '', ''],
                ['voi', '', '', ''], ['ei, ele', '', '', '']], row_h=20),
         ],
         [
             X(4, 'Forma corectă', [
                 'Încercuiește forma corectă.',
                 'a) Ea (creează / crează) un joc nou.          b) Noi (vrem / vroim) să câștigăm.',
                 'c) Tu (vi / vii) la joacă?                          d) El (ia / iea) zarul.',
                 'e) Tu (scri / scrii) foarte frumos.']),
             L(5, 'Comentator la meci', [
                 'Scrie 4-5 propoziții ca un comentator care transmite în direct un meci, cu verbe',
                 'la indicativ prezent. Subliniază verbele.'], 3),
         ]),

    fisa(13, 'pp. 64-65',
         'Reper (manual, p. 64): Imperfectul arată o acțiune trecută care se desfășoară în același timp cu alta, '
         'de durată (Alergam și nu te-am văzut.) sau repetată (De câte ori ieșeam, întâlneam un prieten.). În narațiune '
         'descrie de obicei cadrul. Sufixele lui sunt -a- și -ea-. Corect: voiam, nu vroiam.',
         [
             T(1, 'Durată sau repetare?', 'Scrie D (acțiune de durată) sau R (acțiune repetată).',
               ['Propoziția', 'D / R'], [440, 70], gol(
                   'Când eram mic, mergeam în fiecare vară la bunici.',
                   'Ploua de trei ore fără oprire.',
                   'De câte ori suna clopoțelul, ieșeam în curte.',
                   'Soarele strălucea deasupra lacului.'), row_h=20),
             X(2, 'Completează cu imperfectul', [
                 'Scrie verbul dintre paranteze la imperfect.',
                 'a) Pe când eu (a citi) ______________, fratele meu (a desena) ______________.',
                 'b) Bunicii (a locui) ______________ la țară.',
                 'c) Tu (a voi) ______________ o bicicletă nouă.',
                 'd) Noi (a merge) ______________ la școală pe jos.']),
             L(3, 'Satul de altădată', [
                 'Rescrie textul, trecând verbele la imperfect:',
                 '„Dimineața, satul se trezește încet. Cocoșii cântă, iar bunica aprinde focul.',
                 'Eu stau la fereastră și privesc ceața.”'], 2),
         ],
         [
             T(4, 'Cadrul și întâmplările', [
                 'Citește: „Era o seară liniștită. Luna lumina curtea, iar câinele dormea. Deodată, poarta',
                 'a scârțâit. Câinele a sărit în picioare și a lătrat.” Așază verbele în coloana potrivită.'],
               ['Cadrul (imperfect)', 'Întâmplările (perfect compus)'], [255, 255], rows=3, row_h=22),
             L(5, 'Pe vremea bunicilor', [
                 'Scrie 4 propoziții despre cum se jucau copiii pe vremea bunicilor tăi,',
                 'cu verbe la imperfect. Subliniază-le.'], 3),
         ]),

    fisa(14, 'pp. 66-67',
         'Reper (manual, pp. 66-67): Verbul a avea poate fi predicativ (Am un joc.) sau auxiliar (Am învățat un joc.). '
         'Participiul (învățat, ales) ajută la formarea unor timpuri; folosit singur, devine adjectiv (jocul învățat). '
         'Perfectul compus arată o acțiune trecută și terminată: am, ai, a, am, ați, au + participiu.',
         [
             T(1, 'A avea: predicativ sau auxiliar?', 'Scrie P (predicativ) sau A (auxiliar).',
               ['Propoziția', 'P / A', 'Propoziția', 'P / A'], [185, 70, 185, 70],
               perechi(('Am o minge nouă.', 'Am cumpărat o minge.'), ('Ei au doi câini.', 'Ei au plimbat câinii.'),
                       ('Ai timp de joacă?', 'Ai terminat tema?')), row_h=20),
             T(2, 'Participiu: verb sau adjectiv?', 'Scrie V (parte din perfectul compus) sau ADJ (adjectiv).',
               ['Propoziția', 'V / ADJ'], [430, 80], gol(
                   'Am găsit un pix pe scară.',
                   'Pixul găsit este albastru.',
                   'Jocul pierdut ne-a supărat.',
                   'Echipa noastră a pierdut meciul.'), row_h=20),
             T(3, 'Formează perfectul compus', 'Scrie forma de perfect compus.',
               ['Verbul', 'Persoana', 'Perfectul compus'], [150, 120, 240],
               [['a alerga', 'eu', ''], ['a face', 'tu', ''], ['a scrie', 'ea', ''],
                ['a merge', 'noi', ''], ['a vedea', 'voi', ''], ['a râde', 'ei', '']], row_h=20),
         ],
         [
             X(4, 'i-a / ia, iau / i-au, l-a / la, m-ai, ne-am', [
                 'Completează cu forma potrivită.',
                 'a) Mama ______ cumpărat Anei o carte.        b) Eu ______ zarul și îl arunc.',
                 'c) Bunicul ______ așteptat ______ poartă.     d) ______ întrebat ceva?',
                 'e) Noi ______ jucat toată ziua.']),
             L(5, 'Ce s-a întâmplat ieri', [
                 'Povestește în 4-5 propoziții ce s-a întâmplat ieri în pauza mare, cu verbe la perfect compus.',
                 'Subliniază auxiliarul cu o linie și participiul cu două linii.'], 3),
         ]),

    fisa(15, 'pp. 68-69',
         'Reper (manual, pp. 68-69): Perfectul simplu arată o acțiune trecută și terminată; în limba literară e timpul '
         'povestirii (plecă, întâlni). Mai-mult-ca-perfectul arată o acțiune terminată înaintea altei acțiuni trecute '
         '(pregătise). Corect: dormii (eu), dormi (el); începuseși (tu); plecaserăm (noi).',
         [
             T(1, 'Ce timp este?', 'Scrie PS (perfect simplu), MMCP (mai-mult-ca-perfect), PC (perfect compus) sau IMP (imperfect).',
               ['Verbul', 'Timpul', 'Verbul', 'Timpul'], [185, 70, 185, 70],
               perechi(('el plecă', 'el plecase'), ('el a plecat', 'el pleca'), ('noi văzurăm', 'noi văzuserăm')),
               row_h=20),
             X(2, 'Scrie corect', [
                 'Încercuiește forma corectă.',
                 'a) Tu (terminasei / terminaseși) jocul.          b) Noi (plecasem / plecaserăm) înainte de ploaie.',
                 'c) Eu (dormi / dormii) adânc.                        d) El (citii / citi) scrisoarea.',
                 'e) Voi (ajunseseți / ajunseserăți) primii.']),
             L(3, 'Din poveste, în vorbirea de azi', [
                 'Trece verbele de la perfectul simplu la perfectul compus.',
                 'a) Fata împăratului deschise fereastra.     b) Zmeul sosi în zori.',
                 'c) Voinicul luă sabia și porni la drum.'], 2),
         ],
         [
             T(4, 'Ce s-a întâmplat mai întâi?', 'Scrie acțiunea care s-a petrecut prima.',
               ['Propoziția', 'Mai întâi...'], [300, 210], gol(
                   'Când am ajuns la stadion, meciul începuse.',
                   'Mama plecase deja când a sunat telefonul.',
                   'Colegii terminaseră jocul când a intrat profesorul.'), row_h=28),
             L(5, 'Poveste la perfect simplu', [
                 'Continuă povestea în 4 propoziții, cu verbe la perfectul simplu și cel puțin unul',
                 'la mai-mult-ca-perfect: „A fost odată un motan care...”'], 3),
         ]),

    fisa(16, 'pp. 70-71',
         'Reper (manual, pp. 70-71): Viitorul arată o acțiune de după momentul vorbirii. Viitorul standard: a vrea + '
         'infinitiv (voi cânta); viitorul de limbă vorbită: o să cânt, am să cânt; viitorul popular: oi cânta. Viitorul '
         'anterior (voi fi cântat) arată o acțiune viitoare terminată înaintea altei acțiuni viitoare.',
         [
             T(1, 'Ce fel de viitor?', 'Scrie S (standard), V (de limbă vorbită) sau P (popular).',
               ['Forma', 'S / V / P', 'Forma', 'S / V / P'], [185, 70, 185, 70],
               perechi(('vom merge', 'o să mergem'), ('am să merg', 'oi merge'), ('veți citi', 'are să vină')), row_h=20),
             X(2, 'Forma corectă', [
                 'Încercuiește forma corectă.',
                 'a) Echipa (va rămâne / va rămânea) pe primul loc.     b) Ploaia (va cade / va cădea) toată noaptea.',
                 'c) Tu (vei vede / vei vedea) rezultatul.                  d) Noi (vom pute / vom putea) juca.']),
             T(3, 'În viitor standard', 'Scrie aceeași formă în viitorul standard.',
               ['Forma', 'Viitorul standard', 'Forma', 'Viitorul standard'], [150, 105, 150, 105],
               perechi(('o să citesc', 'o să plecăm'), ('am să joc', 'are să vină')), row_h=20),
         ],
         [
             X(4, 'va / v-a, vor', [
                 'Completează cu va, v-a sau vor.',
                 'a) Mâine, copiii ______ juca fotbal.        b) Cine ______ spus asta?',
                 'c) El ______ câștiga concursul.              d) Doamna ______ chemat la catedră.']),
             L(5, 'Planuri de vacanță', [
                 'Scrie 4 propoziții despre vacanța ta: una cu viitorul standard, una cu „o să”,',
                 'una cu „am să” și una cu viitorul anterior (de exemplu: Când veți veni, voi fi terminat...).'], 3),
         ]),

    fisa(17, 'pp. 72-73',
         'Reper (manual, p. 72): Modul imperativ exprimă un ordin, un îndemn, un sfat sau o rugăminte. Are doar '
         'persoana a II-a, singular și plural, și nu are timp. Negativul: la singular nu + infinitiv (Nu cânta!), la plural '
         'nu + imperativ (Nu cântați!). Forme speciale: vino, fă, du, zi, adu; fii, dar nu fi.',
         [
             T(1, 'Întoarce porunca', 'Trece verbele de la forma afirmativă la forma negativă.',
               ['Afirmativ', 'Negativ', 'Afirmativ', 'Negativ'], [110, 145, 110, 145],
               perechi(('Cântă!', 'Priviți!'), ('Aleargă!', 'Fă zgomot!'), ('Vino!', 'Fii atent!')), row_h=20),
             X(2, 'Forma corectă', [
                 'Încercuiește forma corectă.',
                 'a) (Adu / Adă) mingea!          b) Nu (vino / veni) târziu!          c) Nu (spui / spune) nimănui!',
                 'd) (Taci / Tăci) din gură!       e) (Stai / Stăi) pe loc!']),
             L(3, 'Comenzi pentru un robot', [
                 'Scrie 5 comenzi, la imperativ singular, pentru un robot care îți pregătește',
                 'un sandviș. Una trebuie să fie la forma negativă.'], 2),
         ],
         [
             T(4, 'Imperativ sau indicativ?', 'Scrie IMP (imperativ) sau IND (indicativ).',
               ['Propoziția', 'Modul', 'Propoziția', 'Modul'], [185, 70, 185, 70],
               perechi(('Tu cânți frumos.', 'Cântă mai tare!'), ('Voi alergați repede.', 'Alergați la poartă!'),
                       ('Ea citește.', 'Citește cu voce tare!')), row_h=20),
             T(5, 'Ce exprimă imperativul?', 'Scrie O (ordin), Î (îndemn), S (sfat) sau R (rugăminte).',
               ['Propoziția', 'Litera'], [440, 70], gol(
                   'Ieșiți imediat din apă!',
                   'Te rog, dă-mi sarea!',
                   'Îmbracă-te gros, că e frig!',
                   'Hai, încearcă încă o dată!'), row_h=20),
         ]),

    fisa(18, 'p. 74',
         'Reper (manual, p. 75): Textul narativ ficțional prezintă o întâmplare imaginată de autor: o situație '
         'inițială de echilibru, o succesiune de întâmplări (complicații) și o nouă situație de echilibru. Se scrie '
         'în etape: plan, prima variantă, revizuire, editare.',
         [
             T(1, 'Povestea lui Hannes, în ordine', 'Numerotează momentele poveștii de la p. 74, de la 1 la 5.',
               ['Momentul (povestit pe scurt)', 'Nr.'], [440, 70], gol(
                   'Zboară toată noaptea pe spatele dragonului, printre stele.',
                   'Hannes are o dorință pe care nimeni nu i-o poate îndeplini.',
                   'Dragonul nu se mai întoarce, deși Hannes îl așteaptă multe nopți.',
                   'Un dragon bate la fereastră cu biletul lui Hannes.',
                   'La răsărit, dragonul îl aduce înapoi în camera lui.'), row_h=20),
             T(2, 'Timpul potrivit fiecărei secvențe', 'Scrie secvența (SI, Î, SF) și timpul verbului subliniat în gând.',
               ['Propoziția', 'Secvența', 'Timpul verbului'], [290, 80, 140],
               [['Era o după-amiază liniștită și Radu citea.', '', ''],
                ['Deodată, cartea a început să vorbească.', '', ''],
                ['De atunci, Radu citește în fiecare seară.', '', '']], row_h=22),
             L(3, 'Cuvinte care rup echilibrul', [
                 'Continuă fiecare început cu o propoziție care schimbă totul.',
                 'a) Deodată, ...     b) Dar într-o dimineață, ...     c) Brusc, ...'], 2),
         ],
         [
             L(4, 'Alt final pentru Hannes', 'Scrie, în 3-4 propoziții, un alt final pentru povestea lui Hannes.', 2),
             T(5, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Textul narativ ficțional prezintă o întâmplare imaginată de autor.',
                 'În situația inițială, echilibrul este deja rupt.',
                 'Titlul se scrie în partea de sus a paginii, la mijloc.',
                 'Fiecare paragraf începe cu alineat.',
                 'Varianta finală poate avea multe ștersături.'), row_h=20),
         ]),

    fisa(19, 'p. 75',
         'Reper (manual, p. 75): La revizuire verifici logica acțiunii și detaliile; la editare rescrii varianta finală, '
         'cu titlul la mijloc, cu alineat la fiecare paragraf, lizibil și fără ștersături. Folosește imperfectul pentru '
         'cadru, perfectul compus sau prezentul pentru întâmplări.',
         [
             L(1, 'Revizuiește textul', [
                 'Textul are repetiții și o formă greșită. Rescrie-l corect:',
                 '„Era o zi de vară. Eu și fratele meu ne jucam în curte. Și apoi a venit un cățel.',
                 'Și apoi cățelul a început să vorbească. El vroia să ne arate o comoară.',
                 'Și apoi am mers după el.”'], 3),
             T(2, 'Titlul potrivit', 'Propune un titlu sugestiv pentru fiecare poveste.',
               ['Pe scurt, povestea...', 'Titlul tău'], [330, 180], gol(
                   '...un pix fermecat scrie singur temele, cu greșeli amuzante.',
                   '...o fetiță se micșorează și zboară pe spatele unei albine.',
                   '...un robot fuge noaptea din magazin ca să vadă zăpada.'), row_h=26),
         ],
         [
             X(3, 'Legăturile dintre secvențe', [
                 'Completează cu: Deodată, Apoi, În cele din urmă, De atunci.',
                 '„Luca se plictisea în camera lui. ______________, dulapul s-a deschis singur.',
                 '______________ din el a ieșit un pirat mititel. Au căutat comori toată după-amiaza.',
                 '______________, piratul s-a întors în dulap. ______________, Luca nu se mai plictisește.”']),
             L(4, 'Două finaluri', [
                 'Pentru povestea din exercițiul 1, scrie două finaluri scurte:',
                 'unul fericit și unul surprinzător.'], 3),
         ]),

    fisa(21, 'pp. 76-77',
         'Recapitulare (manual, pp. 42-59): timpul, spațiul și acțiunea; situația inițială și ce o modifică; personajele '
         'principale, secundare și episodice; planul dezvoltat de idei; predicțiile; schimburile de replici în dialog.',
         [
             X(1, 'Umbrela bunicii', [
                 'Înainte să citești, acoperă textul. Ce crezi că se întâmplă într-o poveste cu acest titlu? ____________',
                 '„Sâmbătă, Ilinca a găsit în podul bunicii o umbrelă veche, cu mânerul în formă de rață.',
                 'Afară era soare, dar ea a deschis-o, doar așa, de joacă. Deodată, umbrela a tras-o în sus',
                 'și a purtat-o peste acoperișuri, până în parcul orașului. Acolo, un băiețel plângea: zmeul lui',
                 'se agățase într-un castan. Ilinca a plutit până la creangă și i-a adus zmeul înapoi. Când',
                 'a coborât, umbrela s-a închis singură și n-a mai zburat niciodată. Bunica a zâmbit când a',
                 'auzit povestea: «Pe mine m-a dus la primul meu prieten, când eram de vârsta ta.»”',
                 'Predicția ta s-a confirmat? ______   Ce detaliu te-a surprins? ______________________________']),
             T(2, 'Echilibru și schimbare', 'Completează pe scurt.',
               ['', 'În text'], [170, 340],
               [['Situația inițială', ''], ['Ce o modifică', ''], ['Situația finală', '']], row_h=26),
             T(3, 'Personajele', 'Scrie rolul fiecărui personaj (principal, secundar, episodic) și o trăsătură.',
               ['Personajul', 'Rolul', 'O trăsătură'], [150, 150, 210],
               [['Ilinca', '', ''], ['bunica', '', ''], ['băiețelul', '', '']], row_h=22),
         ],
         [
             T(4, 'Planul dezvoltat', 'Scrie trei idei principale ale textului, fiecare cu un detaliu.',
               ['Ideea principală', 'Detaliul'], [255, 255], rows=3, row_h=34),
             T(5, 'Ce fel de replică?', 'Scrie I (întrebare), CO (compliment), R (reproș) sau INV (invitație).',
               ['Replica', 'Tipul'], [440, 70], gol(
                   'Bunico, îmi mai împrumuți umbrela?',
                   'Ești cea mai curajoasă nepoată!',
                   'Nu trebuia să zbori peste acoperișuri!',
                   'Vii mâine cu mine în parc?'), row_h=20),
             L(6, 'Continuă dialogul', 'Scrie 4 replici între Ilinca și bunica, după ce bunica spune ce a pățit ea în copilărie.', 2),
         ]),

    fisa(22, 'pp. 76-77',
         'Recapitulare (manual, pp. 60-75): verbul și predicatul verbal; infinitivul; modul indicativ (prezent, imperfect, '
         'perfect compus, perfect simplu, mai-mult-ca-perfect, viitor); modul imperativ; textul narativ ficțional.',
         [
             T(1, 'Modul și timpul', 'Scrie modul și timpul fiecărui verb (imperativul nu are timp).',
               ['Verbul', 'Modul', 'Timpul'], [170, 150, 190],
               [['a găsit', '', ''], ['era', '', ''], ['se agățase', '', ''], ['vei zbura', '', ''],
                ['zbură', '', ''], ['Deschide!', '', '']], row_h=20),
             L(2, 'Din perfect simplu, în perfect compus', [
                 'Rescrie propozițiile cu verbele la perfectul compus.',
                 'a) Umbrela se ridică și zbură peste case.     b) Băiatul mulțumi și plecă.'], 1),
             X(3, 'Forma corectă', [
                 'Încercuiește forma corectă.',
                 'a) (Voiam / Vroiam) să vin.        b) (Fii / Fi) atent!        c) Nu (du / duce) umbrela!',
                 'd) Ea (crează / creează) un joc.   e) Tu (plecasei / plecaseși).   f) Ploaia (va cade / va cădea).']),
             T(4, 'Predicatul verbal și infinitivul', 'Completează tabelul.',
               ['Propoziția', 'Predicatul verbal', 'Infinitivul'], [230, 140, 140],
               [['Ilinca poate zbura.', '', ''], ['Bunica dorește a povesti.', '', '']], row_h=22),
         ],
         [
             T(5, 'Persoana și numărul', 'Scrie persoana și numărul fiecărui verb.',
               ['Verbul', 'Persoana', 'Numărul'], [170, 170, 170],
               [['voi zburați', '', ''], ['el plângea', '', ''], ['noi vom găsi', '', ''], ['tu ai ajutat', '', '']],
               row_h=20),
             L(6, 'Începutul poveștii tale', [
                 'Scrie începutul unei povești cu un obiect fermecat (4-5 propoziții): situația inițială,',
                 'cu verbe la imperfect, și momentul care schimbă totul, introdus prin „Deodată”.'], 3),
         ]),
]
