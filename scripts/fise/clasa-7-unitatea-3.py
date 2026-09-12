# Fișe de exerciții, clasa a VII-a, Unitatea III „Harta sentimentelor”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 7, pp. 88-121). Textele
# fără autor (catrene, comparații, fragmente) sunt create pentru fișe; citatele
# scurte sunt doar din autori în domeniul public (Mihai Eminescu, George Coșbuc);
# Marin Sorescu, Mircea Cărtărescu, Ana Blandiana, Otilia Cazimir sunt doar
# parafrazați. Lecția 25 (evaluarea) nu are fișă.
# Rezolvările: notite-profesor/clasa-7/unitatea-3/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-7-unitatea-3.py

SUB = 'Clasa a VII-a · Unitatea III, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 7, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-7/unitatea-3/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
         'sursa': NOTA.format(pp=pp), 'reper': reper, 'pagini': list(pagini)}
    if titlu:  # titlul lecției e prea lung pentru antet
        f['titlu'] = 'Fișă de exerciții — ' + titlu
    return f


def T(n, title, prompt, cols, widths, data=None, rows=None, row_h=22):
    return {'t': 'table', 'n': n, 'title': title, 'prompt': prompt, 'cols': cols,
            'widths': widths, 'rows': rows or len(data), 'row_h': row_h, 'data': data}


def L(n, title, prompt, weight=1):
    return {'t': 'lines', 'n': n, 'title': title, 'prompt': prompt, 'weight': weight}


def X(n, title, prompt):
    return {'t': 'text', 'n': n, 'title': title, 'prompt': prompt}


def gol(*randuri):
    return [[r, ''] for r in randuri]


def gol3(*randuri):
    return [[r, '', ''] for r in randuri]


def gol4(*randuri):
    return [[r, '', '', ''] for r in randuri]


AF = ['Afirmația', 'A / F']

CATRENE = [
    'Citește catrenele (scrise pentru fișă).',
    'a) Vine toamna pe cărare, / Frunza cade lin din pom, / Și pe dealul fără soare / Doarme-n ceață câte-un om.',
    'b) Zboară fluturi pe câmpie, / Soarele e-o jucărie, / Râul cântă printre flori, / Ziua moare-n trei culori.',
    'c) Pe lac se-aprinde-o stea târzie, / Și apa tace lângă mal, / Un nufăr doarme, alb, pe val, / Iar noaptea-i '
    'toată-a mea, pustie.',
    'd) Ninge, ninge peste lume, / Fulgii cad fără de nume, / Casele se-nvelesc în spume, / Doar un corb mai scrie glume.',
]

FISE = [
    fisa(1, 'pp. 88-89',
         'Reper (manual, p. 89): Versul este un rând dintr-o poezie; măsura, numărul de silabe dintr-un vers; strofa, o '
         'grupare de versuri (catrenul are patru). Rima poate fi împerecheată (aabb), încrucișată (abab), îmbrățișată '
         '(abba) sau monorimă (aaaa). Ritmul este succesiunea regulată a silabelor accentuate și neaccentuate.',
         [
             X(1, 'Patru catrene', CATRENE),
             T(2, 'Rima', 'Scrie schema rimei și tipul ei pentru fiecare catren de la ex. 1.',
               ['Catrenul', 'Schema (a, b...)', 'Tipul rimei'], [110, 180, 220], gol3('a', 'b', 'c', 'd'), row_h=26),
         ],
         [
             T(3, 'Termenii versificației', 'Scrie termenul potrivit fiecărei definiții.',
               ['Definiția', 'Termenul'], [380, 130], gol(
                   'un rând dintr-o poezie', 'numărul de silabe dintr-un vers', 'o grupare de versuri, urmată de un rând alb',
                   'o strofă de patru versuri', 'potrivirea sunetelor de la finalul versurilor',
                   'succesiunea regulată a silabelor accentuate și neaccentuate')),
             X(4, 'Silabele', [
                 'Desparte în silabe, subliniază silabele accentuate și scrie măsura.',
                 'a) „Nuferi galbeni îl încarcă” → _______________________________________ (___ silabe)',
                 'b) „Lângă lacul cel albastru” → _______________________________________ (___ silabe)']),
             L(5, 'Catrenul tău', 'Scrie un catren despre un lac sau un râu, cu rimă încrucișată. Notează schema rimei.', 2),
         ]),

    fisa(2, 'pp. 90-91',
         'Reper (manual, pp. 90-91): Emoția e o reacție intensă și scurtă; sentimentul e o atitudine afectivă complexă, '
         'de durată, conștientizată. Textul liric exprimă stări, emoții, sentimente, prin vocea lirică, un eu imaginar '
         'care nu se confundă cu autorul. Subiectivitatea se vede în persoana I, în exclamații și interogații retorice.',
         [
             T(1, 'Emoție sau sentiment?', 'Scrie E (emoție) sau S (sentiment).',
               ['Cuvântul', 'E / S'], [440, 70], gol(
                   'surpriza', 'dragostea', 'frica', 'prietenia', 'furia', 'dorul', 'uimirea', 'recunoștința')),
             T(2, 'Mărcile subiectivității', 'Scrie prin ce se vede subiectivitatea în fiecare vers din „Lacul”.',
               ['Versul', 'Marca subiectivității'], [260, 250], gol(
                   '„Și eu trec de-a lung de maluri”', '„Să sărim în luntrea mică”', '„Dar nu vine...”',
                   '„În zadar suspin și sufăr”', '„Unduioasa apă sune!”'), row_h=24),
         ],
         [
             T(3, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Vocea lirică din „Lacul” este Mihai Eminescu în persoană.', 'Vocea lirică există doar în text.',
                 'Îndrăgostitul este o ipostază a vocii lirice.', 'Un text liric poate fi scris și la persoana a III-a.',
                 '„Lacul” este un text epic.')),
             L(4, 'Jurnalul îndrăgostitului', 'Scrie, la persoana I, 4-5 rânduri de jurnal ale tânărului din „Lacul”, după ce fata nu a venit. Folosește o exclamație și o întrebare retorică.', 3),
         ]),

    fisa(3, 'p. 92',
         'Reper (manual, p. 92): Epitetul evidențiază o însușire (prin adjectiv, adverb sau substantiv); personificarea '
         'dă însușiri omenești lucrurilor și naturii; comparația arată o asemănare (ca, precum, cât); enumerația înșiră '
         'termeni de același fel. Inversiunea schimbă ordinea firească a cuvintelor.',
         [
             T(1, 'Recunoaște figura de stil', 'Scrie figura de stil din fiecare secvență.',
               ['Secvența', 'Figura de stil'], [330, 180], gol(
                   '„Nuferi galbeni”', '„lacul... tresărind”', '„Sub lumina blândei lune”',
                   '„răsare luna, ca o vatră de jăratic”', '„Povești și doine, ghicitori, eresuri”',
                   '„Parc-ascult și parc-aștept”')),
             T(2, 'Epitetul', 'Scrie prin ce parte de vorbire e exprimat epitetul.',
               ['Epitetul (în context)', 'Partea de vorbire'], [300, 210], gol(
                   'galbeni (nuferi galbeni)', 'lin (să-mi cadă lin pe piept)', 'de argint (pădurea de argint)',
                   'unduioasa (unduioasa apă)', 'blândei (blândei lune)')),
         ],
         [
             X(3, 'Ordinea firească', [
                 'Rescrie în ordinea obișnuită a cuvintelor și spune ce se pierde.',
                 'a) „Lacul codrilor albastru / Nuferi galbeni îl încarcă” → _______________________________',
                 '   Ce se pierde: ___________________________________________________________',
                 'b) „Unduioasa apă sune!” → _______________________  Ce se pierde: ____________________']),
             L(4, 'Seara în parc', 'Descrie în 4-5 rânduri un parc sau o grădină seara, cu un epitet, o personificare, o comparație și o enumerație. Subliniază-le.', 3),
         ]),

    fisa(4, 'p. 93',
         'Reper: În „Lacul” de Mihai Eminescu, întâlnirea îndrăgostiților e doar visată. Natura (codrul, lacul, luna) '
         'formează cercuri protectoare în jurul lor; lacul, nufărul, barca și luna pot fi citite ca simboluri.',
         [
             T(1, 'Simbolurile', 'Scrie ce poate simboliza fiecare element în poezie.',
               ['Simbolul', 'Ce poate semnifica'], [170, 340], gol(
                   'lacul', 'nufărul', 'barca', 'luna', 'codrul'), row_h=26),
             T(2, 'Real sau imaginat?', 'Scrie R (se petrece cu adevărat) sau I (e doar imaginat).',
               ['Versul', 'R / I'], [440, 70], gol(
                   '„Și eu trec de-a lung de maluri”', '„Ea din trestii să răsară”', '„Să sărim în luntrea mică”',
                   '„Dar nu vine...”', '„Să plutim cuprinși de farmec”', '„În zadar suspin și sufăr”')),
         ],
         [
             T(3, 'Prima și ultima strofă', 'Compară.',
               ['', 'Strofa I', 'Strofa a V-a'], [150, 180, 180], gol3(
                   'cum e lacul', 'ce face omul', 'ce stare sugerează'), row_h=32),
             L(4, 'Scrisoarea ei', 'Scrie, ca fata așteptată, o scrisoare de 5-6 rânduri către tânăr: de ce nu a venit la lac?', 3),
         ]),

    fisa(5, 'pp. 94-96',
         'Reper (manual, p. 96): Poezia modernă renunță la regulile tradiționale: strofe inegale, versuri albe (fără '
         'rimă, cu ritm și măsură) și libere (fără rimă și ritm, cu măsură variabilă), limbaj colocvial, ironie, teme '
         'din viața de zi cu zi. În „Am legat...” de Marin Sorescu, omul se joacă de-a v-ați ascunselea cu lumea.',
         [
             T(1, 'Tradițională sau modernă?', 'Scrie T (poezie tradițională) sau M (poezie modernă).',
               ['Trăsătura', 'T / M'], [440, 70], gol(
                   'rimă și măsură constante', 'versuri albe sau libere', 'strofe cu număr diferit de versuri',
                   'limbaj colocvial', 'teme din viața de zi cu zi, ca un joc', 'ritm regulat')),
             T(2, 'Jocul, pe strofe', 'Povestește, cu cuvintele tale, ce se întâmplă în fiecare strofă.',
               ['Strofa', 'Ce se întâmplă (cu cuvintele tale)'], [140, 370], gol(
                   'I (copacii)', 'a II-a (păsările)', 'a III-a (tristețea)', 'a IV-a (soarele)', 'a V-a (lucrurile)'),
               row_h=26),
         ],
         [
             T(3, 'Îmbinare liberă sau locuțiune?', 'Scrie Î (îmbinare liberă) sau L (locuțiune).',
               ['Enunțul', 'Î / L'], [440, 70], gol(
                   'Am legat câinele de gard.', 'La joacă, m-au legat la ochi cu o eșarfă.',
                   'Vânzătorul m-a legat la ochi cu promisiuni.', 'Au legat repede prietenie.', 'Leagă-ți șireturile!')),
             L(4, 'Jocul meu', 'Scrie un poem modern de 5-8 versuri libere despre un joc al copilăriei tale, cu un element imposibil în realitate.', 3),
         ]),

    fisa(6, 'pp. 97-98',
         'Reper (manual, p. 97): Metafora este o „comparație prescurtată”: termenul comparat dispare, iar cel cu care '
         'se compară îi ia locul. Poate fi substantiv sau verb, clară (explicită, când termenul comparat apare) sau mai '
         'puțin clară (implicită). O ghicitoare întreagă poate fi o metaforă.',
         [
             T(1, 'Din comparație, metaforă', 'Transformă comparația (scrisă pentru fișă) în metaforă.',
               ['Comparația', 'Metafora'], [270, 240], gol(
                   'Luna, ca un felinar, luminează drumul.', 'Ochii ei, ca două stele, străluceau.',
                   'Vântul, ca un lup, urla la geam.', 'Zăpada, ca un covor, acoperea satul.',
                   'Râul, ca o panglică de argint, șerpuiește.'), row_h=26),
             T(2, 'Din metaforă, comparație', 'Reconstituie comparația din care s-a născut metafora.',
               ['Metafora', 'Comparația'], [250, 260], gol(
                   'Covorul de frunze foșnea sub pași.', 'Felinarul lunii s-a aprins.',
                   'Panglica râului se pierde în zare.', 'Lacrimile cerului curg pe geam.'), row_h=26),
         ],
         [
             T(3, 'Clară sau mai puțin clară?', 'Scrie C (clară, explicită) sau M (mai puțin clară, implicită).',
               ['Enunțul (scris pentru fișă)', 'C / M'], [440, 70], gol(
                   'Soarele, un bulgăre de miere, urca pe cer.', 'Bulgărele de miere urca pe cer.',
                   'Cerul, o mare albastră, se întindea peste noi.', 'Marea albastră de deasupra ne privea.')),
             L(4, 'Ghicitoarea ta', 'Scrie o ghicitoare de 4 versuri care să fie în întregime o metaforă (fără să numești obiectul). Scrie dedesubt răspunsul.', 2),
         ]),

    fisa(7, 'p. 99',
         'Reper: În „Am legat...”, omul încearcă să se ascundă de natură (copaci, păsări), de propriile trăiri (tristețea '
         'sub un zâmbet) și de timp (soarele), dar e găsit de fiecare dată. Finalul îl îndeamnă să nu se mai ascundă.',
         [
             T(1, 'Căutătorii', 'Scrie ce poate simboliza fiecare căutător.',
               ['Căutătorul', 'Ce poate simboliza'], [170, 340], gol(
                   'copacii', 'păsările', 'zâmbetul care leagă tristețea', 'iubirea', 'soarele'), row_h=26),
             T(2, 'Regulile schimbate', 'Scrie cum se schimbă în poezie fiecare regulă a jocului.',
               ['Regula obișnuită', 'Ce se schimbă în poezie'], [240, 270], gol(
                   'căutătorul se alege prin numărătoare', 'căutătorul închide singur ochii',
                   'cei care se ascund sunt copii', 'cel găsit pierde'), row_h=26),
         ],
         [
             L(3, 'Îndemnul final', 'Explică, în 3-4 propoziții, ce îndemn primește omul la finalul poeziei și de ce crezi că îl primește.', 2),
             L(4, 'Nu te mai ascunde', 'Scrie o scrisoare de 5-6 rânduri către cineva care se ascunde după un zâmbet, îndemnându-l să fie sincer.', 3),
         ]),

    fisa(8, 'pp. 100-101',
         'Reper: În poezia „Iarna” de Mircea Cărtărescu, doi oameni stau noaptea în bucătărie, la lumina albastră a '
         'aragazului, și vorbesc până spre dimineață; o scenă obișnuită capătă farmec, iar la final cei doi se simt una.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Scena se petrece într-o bucătărie.', 'Anotimpul este vara.', 'Lumina vine de la flăcările aragazului.',
                 'Cei doi se ceartă toată noaptea.', 'Geamurile sunt înghețate.',
                 'La blocul de vizavi toate luminile sunt aprinse.')),
             T(2, '„Lacul” și „Iarna”', 'Compară cele două poezii: întâlnirea e reală sau visată? limbajul, ales sau colocvial? finalul, împlinire sau neîmplinire?',
               ['', 'Lacul', 'Iarna'], [150, 180, 180], gol3(
                   'spațiul', 'momentul', 'întâlnirea', 'limbajul', 'finalul'), row_h=26),
         ],
         [
             T(3, 'Simțurile', 'Scrie, cu cuvintele tale, un detaliu din poezie pentru fiecare simț.',
               ['Simțul', 'Detaliul'], [150, 360], gol('văzul', 'pipăitul (căldura)', 'auzul'), row_h=28),
             L(4, 'O seară obișnuită', 'Scrie 5-6 versuri libere despre o seară obișnuită din casa ta, care să capete farmec.', 3),
         ]),

    fisa(9, 'pp. 102-103',
         'Reper (manual, pp. 102-103): Dorul, greu de tradus în alte limbi, amestecă bucuria, tristețea și suferința; e '
         'cuvântul-cheie al doinei. Mitul Zburătorului, Dragobetele (24 februarie) și Ziua îndrăgostiților (14 februarie) '
         'sunt legate de iubire. În ultimele decenii au apărut zile dedicate emoțiilor și sentimentelor.',
         [
             T(1, 'Zilele sentimentelor', 'Scrie data fiecărei zile (după manual, p. 102).',
               ['Ziua', 'Data'], [330, 180], gol(
                   'Ziua internațională a fericirii', 'Ziua internațională a respectului',
                   'Ziua internațională a amabilității', 'Ziua internațională a toleranței', 'Ziua dorului',
                   'Dragobetele')),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Dorul se traduce ușor în orice limbă.', 'Cuvântul „dor” vine din latinescul dolus, „durere”.',
                 'Dorul amestecă bucuria, tristețea și suferința.', 'Doina cântă des dorul.',
                 'Zburătorul este o ființă binevoitoare.')),
         ],
         [
             T(3, 'Dragobetele și Ziua îndrăgostiților', 'Compară.',
               ['', 'Dragobetele', 'Ziua îndrăgostiților'], [150, 180, 180], gol3(
                   'data', 'originea', 'ce fac tinerii'), row_h=32),
             L(4, 'Dorul meu', 'Scrie 5-6 versuri în stilul doinei populare despre dorul de cineva sau de ceva (poți începe cu „Frunză verde...”).', 3),
         ]),

    fisa(10, 'p. 103',
         'Reper (manual, p. 103): Doina este poezia lirică a folclorului, care exprimă sentimente (dor, dragoste, revoltă). '
         'Mitul este o povestire fabuloasă despre începuturi, zei și eroi. Ritualul este un ceremonial după reguli, în '
         'momente importante ale vieții sau ale anului (nuntă, semănat, Anul Nou).',
         [
             T(1, 'Doină, mit sau ritual?', 'Scrie D (doină), M (mit) sau R (ritual).',
               ['Exemplul', 'D / M / R'], [440, 70], gol(
                   'un cântec de dor din Maramureș', 'povestea Zburătorului', 'plugușorul, în ajunul Anului Nou',
                   'orația de nuntă', 'povestea lui Eros și Psyche', 'cântecul de jale al unui cioban')),
             T(2, 'Cu cuvintele tale', 'Explică fiecare termen.',
               ['Termenul', 'Ce este'], [150, 360], gol('doina', 'mitul', 'ritualul'), row_h=32),
         ],
         [
             T(3, 'Mitul lui Eros și Psyche', 'Completează după mitul citit acasă.',
               ['Momentul', 'Ce se întâmplă'], [170, 340], gol(
                   'situația inițială', 'interdicția', 'încălcarea ei', 'încercările', 'finalul'), row_h=26),
             L(4, 'Un obicei al comunității mele', 'Descrie în 4-5 propoziții un obicei sau un ritual din familia sau din comunitatea ta: ce, când, cum, ce semnifică.', 2),
         ]),

    fisa(11, 'pp. 104-105',
         'Reper (manual, pp. 104-105): Dialogul poate fi formal (reguli, formule protocolare) sau informal. Respectul se '
         'arată prin formule de adresare, pronume de politețe, persoana a II-a plural, condițional; toleranța, prin '
         'acceptarea altor păreri, fără jigniri și întreruperi. Emoțiile se transmit și prin intonație, pauză, silabisire.',
         [
             T(1, 'Respect și toleranță', 'Scrie R (respect, toleranță) sau NR (lipsa lor) și mijlocul lingvistic.',
               ['Replica', 'R / NR', 'Mijlocul'], [270, 70, 170], gol3(
                   '„Doamnă dirigintă, ați putea să ne ajutați?”', '„Dă-mi aia, repede!”',
                   '„Vă mulțumesc pentru răbdare, domnule director.”', '„Ce știi tu? Taci!”',
                   '„Înțeleg ce spui, dar eu văd altfel.”'), row_h=24),
             T(2, 'Formal sau informal?', 'Scrie F (formal) sau I (informal).',
               ['Situația', 'F / I'], [440, 70], gol(
                   'ceri o adeverință la secretariat', 'îi scrii celui mai bun prieten', 'vorbești cu medicul',
                   'te cerți cu fratele', 'iei un interviu pentru revista școlii')),
         ],
         [
             T(3, 'Aceeași replică, altă emoție', 'Scrie ce emoție transmite fiecare variantă.',
               ['Replica', 'Emoția'], [240, 270], gol('„Ai venit.”', '„Ai venit?”', '„Ai venit!”', '„A-ai... ve-nit...”'),
               row_h=24),
             L(4, 'Regulile dezbaterii', 'Scrie cinci reguli pentru o dezbatere în clasă în care toți să se simtă respectați (folosește conjunctivul sau imperativul).', 2),
         ]),

    fisa(12, 'pp. 106-107',
         'Reper (manual, pp. 106-107): Descrierea prezintă caracteristicile unui obiect, ale unei ființe sau ale unui '
         'peisaj: se numește ce descrii, apoi elementele componente și proprietățile lor, și se precizează impresia '
         'generală. Emoțiile se citesc pe chip: gura, ochii, sprâncenele, fruntea, ținuta capului.',
         [
             T(1, 'Chipul emoțiilor', 'Scrie cum arată gura, ochii și sprâncenele pentru fiecare emoție.',
               ['Emoția', 'Gura', 'Ochii și sprâncenele'], [110, 190, 210], gol3(
                   'bucuria', 'tristețea', 'frica', 'surpriza', 'furia'), row_h=26),
             T(2, 'Elemente și proprietăți', 'Alege un personaj de basm și scrie câte două proprietăți pentru fiecare element.',
               ['Elementul', 'Două proprietăți'], [170, 340], gol('ochii', 'părul', 'fruntea', 'gura', 'mâinile'), row_h=24),
         ],
         [
             T(3, 'Obiectiv sau subiectiv?', 'Scrie O (descriere obiectivă) sau S (descriere subiectivă).',
               ['Enunțul (scris pentru fișă)', 'O / S'], [440, 70], gol(
                   'Fata are ochi căprui și părul prins în coadă.', 'Ochii ei sunt două castane calde care râd.',
                   'Băiatul are 1,50 m și poartă ochelari.', 'Mi se pare că zâmbetul lui luminează toată clasa.',
                   'Pe frunte are o cicatrice mică.')),
             L(4, 'Ghicește colegul', 'Scrie 4-5 propoziții de descriere obiectivă a chipului unui coleg, fără să-i spui numele.', 2),
         ]),

    fisa(13, 'p. 107',
         'Reper (manual, p. 107): Descrierea obiectivă dă informații conforme cu realitatea, la persoana a III-a, cu '
         'limbaj neutru, fără figuri de stil. Descrierea subiectivă exprimă impresii și emoții, mai ales la persoana I, cu '
         'figuri de stil (epitete, comparații, metafore).',
         [
             T(1, 'Figuri de stil în portret', 'Scrie figura de stil.',
               ['Secvența', 'Figura de stil'], [330, 180], gol(
                   '„Păru-i galben” (M. Eminescu)', '„Pe umeri pletele-i curg râu” (G. Coșbuc)',
                   '„Mlădie ca un spic de grâu” (G. Coșbuc)', '„Obrajii – două mere coapte” (text creat)',
                   '„ochi ca două mure negre” (text creat)')),
             T(2, 'Din obiectiv, subiectiv', 'Rescrie fiecare enunț ca descriere subiectivă, cu o figură de stil.',
               ['Descrierea obiectivă', 'Varianta subiectivă'], [210, 300], gol(
                   'Are ochi verzi.', 'Părul ei e lung și negru.', 'Mâinile lui sunt mari.', 'Zâmbește des.'),
               row_h=28),
         ],
         [
             T(3, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Descrierea obiectivă folosește persoana a III-a.', 'Descrierea obiectivă are multe figuri de stil.',
                 'Descrierea subiectivă poate fi la persoana I.', 'În descrierea subiectivă apar impresii și emoții.',
                 'Limbajul descrierii obiective este neutru.')),
             L(4, 'Mâinile cuiva drag', 'Descrie subiectiv, în 5-6 rânduri, mâinile unei persoane dragi, cu o comparație, o metaforă și două epitete.', 3),
         ]),

    fisa(14, 'pp. 108-109',
         'Reper (manual, pp. 108-109): Substantivele sunt comune sau proprii, simple sau compuse; unele au doar '
         'singular sau doar plural, altele sunt masive (materii) sau colective. Sufixele moționale formează feminine sau '
         'masculine. Cazurile: N, Ac, D, G, V. Locuțiunea substantivală este un grup unitar sinonim cu un substantiv.',
         [
             T(1, 'Felul substantivului', 'Completează.',
               ['Substantivul', 'Comun / propriu', 'Simplu / compus', 'O particularitate'], [120, 120, 120, 150], gol4(
                   'Ana-Maria', 'floarea-soarelui', 'tineret', 'ochelari', 'miere', 'ONU')),
             T(2, 'Feminin și masculin', 'Scrie perechea de gen opus, formată cu sufix.',
               ['Substantivul', 'Perechea'], [250, 260], gol(
                   'leu', 'elev', 'croitor', 'gâscă', 'curcă', 'profesor', 'vulpe')),
         ],
         [
             X(3, 'Scrisoarea Mariei', [
                 'Citește textul (scris pentru fișă).',
                 '„Maria i-a scris bunicii o scrisoare despre dorul de casă: «Bunico, mi-e dor de tine!» Scrisoarea fetei a '
                 'ajuns repede.”']),
             T(4, 'Cazul și funcția', 'Scrie cazul și funcția sintactică.',
               ['Substantivul', 'Cazul', 'Funcția'], [150, 170, 190], gol3(
                   'Maria', 'bunicii', 'o scrisoare', 'despre dorul', 'de casă', 'Bunico', 'fetei')),
             L(5, 'Locuțiuni substantivale', 'Scrie câte un enunț cu: părere de rău, luare-aminte, aducere-aminte.', 2),
         ]),

    fisa(15, 'pp. 110-111',
         'Reper (manual, pp. 110-111): Prepozițiile sunt simple (cu, în, la) sau compuse (de la, de pe lângă, despre). '
         'Majoritatea cer acuzativul; asupra, contra, deasupra, în fața, de-a lungul cer genitivul; datorită, mulțumită, '
         'grație cer dativul. În enumerare, articolul genitival se repetă înaintea fiecărui termen.',
         [
             T(1, 'Felul și cazul', 'Scrie dacă prepoziția e simplă sau compusă și ce caz cere.',
               ['Prepoziția (în context)', 'Simplă / compusă', 'Cazul cerut'], [180, 160, 170], gol3(
                   'în (în clasă)', 'de la (de la școală)', 'asupra (asupra lui)', 'datorită (datorită ajutorului)',
                   'deasupra (deasupra casei)', 'de pe lângă (de pe lângă râu)')),
             T(2, 'Locuțiunea prepozițională', 'Scrie locuțiunea și cazul cerut.',
               ['Enunțul', 'Locuțiunea', 'Cazul'], [240, 150, 120], gol3(
                   'Am stat în fața școlii.', 'În loc de supărare, a zâmbit.', 'Ne-am plimbat de-a lungul râului.',
                   'Față de colegi e politicos.', 'În urma ploii, a apărut curcubeul.')),
         ],
         [
             T(3, 'Corectează', 'Scrie varianta corectă.',
               ['Greșit', 'Corect'], [260, 250], gol(
                   'Datorită ploii, meciul a fost amânat.', 'Mulțumită profesorului și a părinților, a câștigat.',
                   'Vorbesc ca și căpitan al echipei.', 'Deasupra casei, grădinii și drumului zboară o barză.'), row_h=28),
             L(4, 'Colegul nou', 'Scrie 4-5 propoziții despre un coleg nou, cu trei prepoziții care cer cazuri diferite (acuzativ, genitiv, dativ). Subliniază-le.', 2),
         ]),

    fisa(16, 'pp. 112-113',
         'Reper (manual, pp. 112-113): Ca adjunct al verbului, substantivul poate fi subiect, nume predicativ, '
         'complement (direct, indirect, prepozițional) sau circumstanțial. Ca centru, are atribute: genitival, '
         'prepozițional, în nominativ (orașul Brașov), în dativ.',
         [
             X(1, 'Concursul', [
                 'Citește textul (scris pentru fișă).',
                 '„Andrei, colegul Irinei, a câștigat concursul de desen. Premiul băiatului este o carte despre pictori. '
                 'Irina i-a trimis prietenului ei un mesaj: «Ești un artist!» Profesorul de desen a vorbit cu mândrie '
                 'despre succesul lui.”']),
             T(2, 'Funcția substantivului', 'Scrie funcția sintactică.',
               ['Substantivul (din text)', 'Funcția'], [260, 250], gol(
                   'Andrei', 'Irinei', 'concursul', 'de desen', 'băiatului', 'o carte', 'despre pictori', 'prietenului',
                   'un artist', 'cu mândrie')),
         ],
         [
             T(3, 'Atributul substantival', 'Scrie felul atributului (și cazul).',
               ['Grupul', 'Felul atributului'], [250, 260], gol(
                   'orașul Iași', 'drumul spre casă', 'lupta împotriva poluării', 'reușita datorită muncii',
                   'caietul elevului')),
             L(4, 'Analiza', 'Analizează, după modelul de la p. 113, substantivele din enunțul: „Ana îi dăruiește fratelui ei o carte de povești.”', 3),
         ]),

    fisa(17, 'pp. 114-115',
         'Reper (manual, pp. 114-115): Adjectivele sunt propriu-zise sau provin din participiu, gerunziu, adverb; '
         'variabile (4, 3 sau 2 forme) sau invariabile. Se acordă cu substantivul; antepus, preia articolul. '
         'Superlativul absolut are și mijloace expresive (grozav de, sănătos tun, repetiție, prefixe, sufixul -isim).',
         [
             T(1, 'Felul adjectivului', 'Scrie felul adjectivului și numărul de forme (sau „invariabil”).',
               ['Adjectivul (în context)', 'Felul', 'Nr. de forme'], [190, 180, 140], gol3(
                   'vesel (copil vesel)', 'obosit (elev obosit)', 'tremurândă (voce tremurândă)',
                   'bine (oameni bine)', 'limpede (apă limpede)', 'maro (pantofi maro)')),
             T(2, 'Superlativul expresiv', 'Scrie mijlocul prin care se exprimă superlativul absolut.',
               ['Enunțul (scris pentru fișă)', 'Mijlocul'], [300, 210], gol(
                   'E grozav de cald azi.', 'Muntele e înalt, înalt.', 'A fost o zi ultraaglomerată.',
                   'Ce frumos apus!', 'Bunicul e sănătos tun.', 'E o carte rarisimă.')),
         ],
         [
             X(3, 'Acordul', [
                 'Transcrie textul, acordând adjectivele din paranteze.',
                 '„În (vechi) grădină, (bătrân) nuci își scutură frunzele (galben). Păsările (călător) au plecat spre țări '
                 '(îndepărtat), iar satul (liniștit) așteaptă ninsoarea (alb).”',
                 '______________________________________________________________________________',
                 '______________________________________________________________________________']),
             L(4, 'Locuțiuni adjectivale', 'Scrie câte un enunț cu: de treabă, cu nasul pe sus, de nimic, de seamă.', 2),
         ]),

    fisa(18, 'pp. 116-117',
         'Reper (manual, pp. 116-117): Ca adjunct, adjectivul e atribut adjectival (pe lângă substantiv, pronume, numeral) '
         'sau nume predicativ. Ca centru, e determinat de complemente (prepozițional, indirect) și de circumstanțiale '
         '(loc, timp, mod, cauză, scop). Poate avea dublu rol: adjunct și centru.',
         [
             T(1, 'Atribut sau nume predicativ?', 'Scrie AA (atribut adjectival) sau NP (nume predicativ).',
               ['Enunțul', 'Adjectivul', 'AA / NP'], [260, 130, 120], [
                   ['Ana are o voce caldă.', 'caldă', ''],
                   ['Vocea Anei este caldă.', 'caldă', ''],
                   ['Băiatul timid a roșit.', 'timid', ''],
                   ['Băiatul pare timid.', 'timid', ''],
                   ['Doi mai curajoși au intrat.', 'curajoși', ''],
                   ['Tu, cel mai atent, spune!', 'atent', '']]),
             T(2, 'Adjectivul centru', 'Scrie determinarea adjectivului și funcția ei.',
               ['Grupul', 'Determinarea', 'Funcția'], [170, 150, 190], gol3(
                   'bucuros de veste', 'recunoscător părinților', 'vesel la școală', 'supărat de ieri',
                   'palid de frică', 'atent pentru a învăța', 'frumos sufletește')),
         ],
         [
             T(3, 'Dublu rol', 'Scrie ce determină adjectivul și ce îl determină pe el.',
               ['Enunțul', 'Adjunct pentru... / centru pentru...'], [240, 270], gol(
                   'Fata îmbujorată de emoție a răspuns.', 'Un copil plin de energie aleargă.'), row_h=34),
             L(4, 'Analiza', 'Analizează, după modelul de la p. 117, adjectivele din enunțul: „Mama, obosită de drum, era totuși veselă.”', 3),
         ]),

    fisa(19, 'p. 118',
         'Reper (manual, p. 118): Pentru descrierea unei persoane: schema elementelor și a proprietăților, detalii '
         'semnificative despre chip, statură, îmbrăcăminte, trăsături morale sugerate de înfățișare și impresia pe care '
         'ți-o lasă. Se pornește de la impresia generală spre detalii.',
         [
             T(1, 'Portretul, pe elemente', 'Privește portretul de la p. 118 (sau alt portret pictat) și completează.',
               ['Elementul', 'Ce observ', 'Cuvinte expresive'], [140, 180, 190], gol3(
                   'impresia generală', 'ochii', 'chipul', 'coafura', 'mâinile', 'îmbrăcămintea', 'fundalul')),
             T(2, 'Sinonime pentru descriere', 'Scrie trei sinonime potrivite pentru o descriere.',
               ['Verbul obișnuit', 'Trei sinonime'], [160, 350], gol(
                   'are (o rochie)', 'se uită', 'zâmbește', 'stă'), row_h=24),
         ],
         [
             T(3, 'Planul descrierii', 'Completează planul.',
               ['Partea', 'Ce scriu'], [200, 310], gol(
                   'introducerea (cine, impresia generală)', 'chipul', 'statura și ținuta', 'îmbrăcămintea și detaliile',
                   'trăsăturile morale sugerate', 'încheierea (impresia mea)'), row_h=26),
             L(4, 'Primele rânduri', 'Scrie începutul descrierii (3-4 propoziții), cu impresia generală.', 2),
         ]),

    fisa(20, 'p. 118',
         'Reper (manual, p. 118): Descrierea bună prezintă chipul, statura, îmbrăcămintea și personalitatea, are o '
         'exprimare clară și expresivă, respectă structura (elemente și proprietăți) și normele de ortografie și '
         'punctuație.',
         [
             X(1, 'O descriere de revizuit', [
                 'Citește descrierea (scrisă pentru fișă).',
                 '„Tânăra din tablou este frumoasă. Are ochi frumoși și păr frumos. Ea are o rochie albă. Ea are mâinile puse '
                 'una peste alta. În spate e un peisaj. Tânăra este frumoasă și îmi place.”']),
             T(2, 'Ce îmbunătățesc?', 'Găsește fiecare problemă și spune cum o corectezi.',
               ['Problema', 'Unde apare', 'Cum corectez'], [150, 160, 200], gol3(
                   'repetiția lui „frumos”', 'repetiția lui „are”', 'lipsa figurilor de stil', 'impresia generală vagă'),
               row_h=30),
         ],
         [
             L(3, 'Descrierea îmbunătățită', 'Rescrie descrierea de la ex. 1, cu sinonime, două epitete, o comparație și o impresie generală precisă.', 3),
             T(4, 'Verificarea descrierii mele', 'Scrie DA sau NU.',
               ['Întrebarea', 'DA / NU'], [420, 90], gol(
                   'Am pornit de la impresia generală spre detalii?', 'Am descris chipul, statura, îmbrăcămintea?',
                   'Am sugerat trăsături morale?', 'Am folosit epitete, comparații, metafore?',
                   'Am respectat ortografia și punctuația?')),
         ]),

    fisa(21, 'p. 119',
         'Reper (manual, p. 119): La comentarea unui pasaj citești atent tot textul (liric sau epic), identifici ideile, '
         'arăți semnificația legând-o de figurile de stil și dai exemple cu citate între ghilimele. Limbajul e clar, '
         'concis, sobru: fără exclamații, fără aprecieri superlative, fără expresii tocite.',
         [
             T(1, 'Liric sau epic?', 'Scrie L (liric) sau E (epic).',
               ['Textul', 'L / E'], [440, 70], gol(
                   'o poezie în care cineva își mărturisește dorul', 'o schiță despre o călătorie cu trenul',
                   'o fabulă în versuri cu personaje animale', 'o doină de jale', 'o nuvelă despre un preot')),
             T(2, 'Comentariul, pas cu pas', 'Strofa: „Lacul codrilor albastru / Nuferi galbeni îl încarcă; / Tresărind în cercuri albe / El cutremură o barcă.” (M. Eminescu)',
               ['Pasul', 'Ce observ'], [190, 320], gol(
                   'ideea generală', 'imaginile vizuale (culorile)', 'figurile de stil și ce sugerează',
                   'mișcarea din strofă', 'legătura cu restul poeziei'), row_h=26),
         ],
         [
             T(3, 'Limbaj potrivit?', 'Scrie DA dacă enunțul e potrivit într-un comentariu.',
               ['Enunțul', 'DA / NU'], [420, 90], gol(
                   'Poezia este super tare!', 'Epitetul cromatic „albastru” sugerează liniștea locului.',
                   'Minunata, fermecătoarea, extraordinara strofă...', 'Personificarea arată că natura pare vie.',
                   'Cred că e cea mai bună poezie din lume!!!')),
             L(4, 'Comentariul meu', 'Scrie un comentariu de 5-8 rânduri al strofei de la ex. 2, cu citate între ghilimele.', 3),
         ]),

    fisa(22, 'p. 119',
         'Reper (manual, p. 119): În descrierea unei emoții personale precizezi momentul în care s-a produs, treci de la '
         'impresia generală la detalii (obiecte, sunete, mirosuri, ce ai simțit) și folosești persoana I singular și '
         'timpul trecut.',
         [
             T(1, 'Emoția și detaliile ei', 'Alege o emoție puternică din copilărie și notează.',
               ['Detaliul', 'Ce îmi amintesc'], [180, 330], gol(
                   'emoția și momentul (când, unde)', 'cine era de față', 'un obiect', 'un sunet', 'un miros',
                   'ce am simțit în corp')),
             T(2, 'General sau particular?', 'Scrie G (impresie generală) sau P (detaliu particular).',
               ['Enunțul (scris pentru fișă)', 'G / P'], [440, 70], gol(
                   'Era cea mai fericită zi a verii.', 'Mirosul de gutui umplea bucătăria.',
                   'Atunci am înțeles ce înseamnă dorul.', 'Bunicul mi-a pus în palmă o cheie ruginită.',
                   'Inima îmi bătea să-mi spargă pieptul.')),
         ],
         [
             T(3, 'Persoana I, timpul trecut', 'Rescrie la persoana I, timpul trecut.',
               ['Enunțul', 'Varianta ta'], [250, 260], gol(
                   'Copilul se bucură de prima ninsoare.', 'Fetița se teme de întuneric.',
                   'Băiatul așteaptă nerăbdător vacanța.'), row_h=28),
             L(4, 'Ciorna', 'Scrie începutul compunerii (6-8 rânduri) despre emoția aleasă la ex. 1.', 3),
         ]),

    fisa(23, 'pp. 120-121',
         'Recapitulare (manual, pp. 88-107): versificația, textul liric și vocea lirică, emoțiile și sentimentele, '
         'figurile de stil (epitet, personificare, comparație, enumerație, metaforă), poezia modernă, descrierea '
         'obiectivă și subiectivă.',
         [
             X(1, 'Casa bunicilor', [
                 'Citește poezia (scrisă pentru fișă).',
                 'Mă-ntorc la casa cu pridvor, / Iar poarta-mi scârțâie ușor; / Pe prag, un fir de iarbă crește, / '
                 'Tăcerea-n curte mă primește.',
                 'Ferestrele sunt ochi închiși, / Pereții, vechi și-ntunecați, / Și totuși par, din nou, aprinși / De râsul '
                 'bunilor plecați.',
                 'O, cât de mică-mi pare-acum / Odaia caldă de-altădată! / Miroase încă a tutun / Și-a pâine rumen-coaptă, '
                 'lată.']),
             T(2, 'Recunoaște', 'Completează după poezie.',
               ['', 'Din poezie'], [210, 300], gol(
                   'rima strofei I (schema, tipul)', 'rima strofei a II-a (schema, tipul)', 'o marcă a subiectivității',
                   'o personificare', 'o metaforă', 'emoția dominantă'), row_h=24),
         ],
         [
             T(3, 'Atunci și acum', 'Compară.',
               ['', 'În copilărie', 'Acum'], [150, 180, 180], gol3('casa', 'odaia', 'sentimentul'), row_h=30),
             L(4, 'Portretul bunicilor', 'Scrie o descriere subiectivă de 5-6 rânduri a bunicilor care au trăit în casa din poezie.', 3),
         ]),

    fisa(24, 'p. 121',
         'Recapitulare (manual, pp. 108-119): substantivul (feluri, cazuri, funcții, locuțiuni), prepoziția (feluri, '
         'regim cazual, locuțiuni), adjectivul (feluri, forme, grade, funcții, locuțiuni), descrierea.',
         [
             X(1, 'Patru enunțuri', [
                 '(1) Casa bunicilor mei are un pridvor larg.   (2) Deasupra porții, vântul scutură frunzele galbene.',
                 '(3) Datorită bunicii, odaia era mereu caldă.   (4) Bunicul era un om de treabă.']),
             T(2, 'Substantivul', 'Scrie cazul și funcția sintactică.',
               ['Substantivul (enunțul)', 'Cazul', 'Funcția'], [170, 150, 190], gol3(
                   'bunicilor (1)', 'un pridvor (1)', 'porții (2)', 'vântul (2)', 'bunicii (3)', 'un om (4)')),
             T(3, 'Adjectivul', 'Scrie felul și numărul de forme, apoi funcția.',
               ['Adjectivul (enunțul)', 'Felul, nr. de forme', 'Funcția'], [160, 200, 150], gol3(
                   'larg (1)', 'galbene (2)', 'caldă (3)', 'de treabă (4)')),
         ],
         [
             T(4, 'Prepoziția', 'Scrie cazul cerut.',
               ['Prepoziția', 'Cazul'], [300, 210], gol('deasupra (2)', 'datorită (3)', 'lângă (lângă poartă)')),
             L(5, 'Casa bunicilor mei', 'Descrie în 6-8 rânduri casa unor bunici (reali sau imaginați), cu două epitete, o comparație și o metaforă. Subliniază-le.', 3),
         ]),
]
