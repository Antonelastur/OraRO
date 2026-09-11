# Fișe de exerciții, clasa a V-a, Unitatea V „Călătoresc prin basme”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 5). Textele fără autor
# sunt create pentru fișe (inclusiv basmul „Râșnița fermecată” și anecdota cu
# Nastratin, repovestită după folclor); textele sub drepturi de autor (Eusebiu
# Camilar, C.S. Lewis, Vladimir Colin) sunt doar parafrazate.
# Rezolvările: notite-profesor/clasa-5/unitatea-5/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-5.py

SUB = 'Clasa a V-a · Unitatea V, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 5, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-5/unitatea-5/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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


def gol3(*randuri):
    return [[r, '', ''] for r in randuri]


def perechi(*randuri):
    return [[a, '', b, ''] for a, b in randuri]


AF = ['Afirmația', 'A / F']

RASNITA = ('„A fost odată ca niciodată un morar sărac care avea trei fete. Cea mică, Ilinca, era și cea mai harnică. '
           'Într-o toamnă, o bătrână gârbovă a bătut la ușa morii și a cerut un colț de pâine. Surorile mai mari au '
           'alungat-o, dar Ilinca i-a dat pâinea ei și i-a spălat picioarele obosite. Atunci bătrâna s-a prefăcut într-o '
           'zână cu rochie de argint și i-a dăruit fetei o râșniță fermecată: la trei rostiri de „Macină, râșniță!”, '
           'dădea făină albă ca zăpada. Din ziua aceea, în casa morarului n-a mai lipsit pâinea. Iar eu încălecai '
           'pe-o șa și vă spusei povestea așa.”')

FISE = [
    fisa(1, 'pp. 140-143',
         'Reper: Petre Ispirescu (1830-1887), tipograf de meserie, a cules basme populare românești și le-a publicat în '
         '„Legendele sau basmele românilor” (1872). În „Zâna Munților”, o zână îndrăgostită de un fiu de împărat se '
         'preface în turturică, apoi intră găinăreasă la curtea împăratului, ca să fie aproape de el.',
         [
             T(1, 'Cine face?', 'Scrie personajul care face fiecare acțiune.',
               ['Acțiunea', 'Personajul'], [370, 140], gol(
                   'cheamă filozofi vestiți ca să-și învețe fiul',
                   'rănește o turturică în aripă',
                   'o laudă în fiecare zi pe găinăreasă',
                   'o ia în râs pe găinăreasă când cere voie la nuntă',
                   'pune să se toarne smoală pe drum',
                   'bate de trei ori din palme și cheamă o cărucioară'), row_h=20),
             X(2, 'Cuvinte de basm', [
                 'Completează cu: sfadă, galeș, a tânji, smerenie, vâlvă, condur, nălucă (la forma potrivită).',
                 'a) Între cei doi vecini s-a iscat o ______________ pentru un gard.',
                 'b) După plecarea prietenului, băiatul a rămas ______________ toată ziua.',
                 'c) Floarea uitată fără apă a început să ______________.',
                 'd) Bătrânul le vorbea tuturor cu blândețe și ______________.',
                 'e) Vestea că vine circul în sat a făcut mare ______________.',
                 'f) Cenușăreasa și-a pierdut ______________ pe scările palatului.',
                 'g) Fata a trecut prin grădină și a dispărut ca o ______________.']),
         ],
         [
             T(3, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Prințul învăța într-o săptămână cât învățau alții într-un an.',
                 'Prințul a ucis turturica la vânătoare.',
                 'Găinăreasa era lăudată pentru hărnicia și curățenia ei.',
                 'Vătaful s-a bucurat că găinăreasa merge la nuntă.',
                 'Fata necunoscută dispărea la sfârșitul fiecărei nunți.',
                 'Condurul i s-a potrivit unei fete de împărat.',
                 'La final, zâna pleacă înapoi în munți cu cărucioara.'), row_h=20),
             T(4, 'Basmul în cinci părți', 'Dă un titlu fiecărei părți a basmului.',
               ['Partea', 'Titlul tău'], [230, 280], gol(
                   'copilăria și învățătura prințului', 'vânătoarea', 'găinăreasa de la curte',
                   'cele trei nunți', 'condurul și nunta'), row_h=22),
             L(5, 'Formula ta de început', [
                 'Scrie, în stilul basmului, o formulă de început (cu lucruri imposibile) pentru un basm',
                 'despre școala ta.'], 2),
         ]),

    fisa(2, 'pp. 144-145',
         'Reper (manual, pp. 144-145): Basmul înfățișează o lume ireală, cu întâmplări supranaturale și ființe fabuloase. '
         'Echilibrul de la început e tulburat de un eveniment; urmează probele, apoi situația finală, cu răsplata eroului. '
         'Timpul și spațiul sunt vagi, iar formulele de început și de încheiere anunță lumea poveștii.',
         [
             T(1, 'Momentele unui alt basm', 'Aplică momentele basmului la „Cenușăreasa”.',
               ['Momentul', 'Ce se întâmplă în „Cenușăreasa”'], [190, 320], gol(
                   'situația de la început', 'evenimentul care schimbă totul', 'încercările (probele)',
                   'rezolvarea', 'situația finală'), row_h=26),
             T(2, 'Real sau miraculos?', 'Scrie R (real) sau M (miraculos), după întâmplările din „Zâna Munților”.',
               ['Întâmplarea', 'R / M'], [440, 70], gol(
                   'Prințul învață într-o săptămână cât alții într-un an.',
                   'Împăratul cheamă filozofi la curte.',
                   'Zâna se preface în turturică.',
                   'Slujitorii toarnă smoală pe drum.',
                   'O cărucioară vine singură, fără cai.'), row_h=20),
         ],
         [
             X(3, 'Precis sau de basm?', [
                 'Încercuiește indicii de timp și de spațiu vagi, potriviți pentru un basm.',
                 'odată ca niciodată  ·  pe 3 martie 2025  ·  într-o împărăție  ·  în Brașov, pe strada Lungă',
                 'într-una din zile  ·  la ora 17.30  ·  peste nouă mări și nouă țări  ·  în sala 12 a școlii']),
             X(4, 'Formule din basmele lumii', [
                 'Scrie Î (formulă de început) sau S (formulă de sfârșit).',
                 'a) „A fost odată ca niciodată...” ___          b) „Și trăiesc și astăzi, dacă n-au murit.” ___',
                 'c) „De când se potcovea puricele...” ___       d) „Iar eu încălecai p-o șea și vă spusei așa.” ___',
                 'e) „Once upon a time...” (engleză) ___         f) „...and they lived happily ever after.” ___']),
             L(5, 'Alt final', [
                 'Ce s-ar fi întâmplat dacă zâna nu și-ar fi pierdut condurul? Scrie un alt final (5-6 propoziții)',
                 'și încheie cu o formulă de basm.'], 4),
         ]),

    fisa(3, 'pp. 146-147',
         'Reper (manual, p. 146): Personajele basmului sunt oameni cu calități supranaturale sau ființe fabuloase (zâne, '
         'zmei, animale năzdrăvane). Eroul, personaj pozitiv, luptă pentru bine și dreptate și trece prin probe; '
         'personajele negative slujesc răul.',
         [
             T(1, 'Înfățișările zânei', 'Scrie sub ce înfățișare apare zâna și de ce alege această înfățișare.',
               ['Momentul', 'Înfățișarea', 'De ce?'], [120, 150, 240], gol3(
                   'la vânătoare', 'la curte', 'la nunți', 'la final'), row_h=30),
             T(2, 'Trăsătura și dovada', 'Scrie o trăsătură și fapta care o dovedește.',
               ['Personajul', 'Trăsătura', 'Fapta'], [120, 130, 260], gol3(
                   'împăratul', 'împărăteasa', 'vătaful', 'fiul de împărat'), row_h=30),
         ],
         [
             T(3, 'Personaje din alte basme', 'Scrie P (pozitiv) sau N (negativ) și dacă e om sau ființă fabuloasă.',
               ['Personajul', 'P / N', 'Om sau ființă fabuloasă?'], [170, 70, 270], gol3(
                   'Făt-Frumos', 'zmeul', 'Muma-Pădurii', 'Zâna Munților', 'calul năzdrăvan', 'Cenușăreasa'), row_h=20),
             L(4, 'Scrisoare de recomandare', [
                 'Împărăteasa o recomandă pe găinăreasă altei împărătese. Scrie scrisoarea (5-6 propoziții),',
                 'cu trăsăturile găinăresei dovedite prin fapte din basm.'], 4),
         ]),

    fisa(4, 'p. 148',
         'Reper: Interpretezi un basm când te întrebi ce ne învață el. În „Zâna Munților” nu există o luptă cu răul, ci o '
         'poveste de iubire între două ființe din lumi diferite: zâna renunță la puterile ei ca să rămână alături de '
         'fiul de împărat.',
         [
             T(1, 'Ce valoare arată?', 'Scrie valoarea (calitatea) pe care o arată fiecare faptă.',
               ['Fapta', 'Valoarea'], [360, 150], gol(
                   'Zâna muncește la cotețe fără să se plângă.',
                   'Zâna nu-i răspunde vătafului care o ia în râs.',
                   'Prințul învață cu sârg de la toți dascălii.',
                   'Prințul nu vrea să se însoare fără dragoste.',
                   'Zâna renunță la puterile ei.'), row_h=22),
             X(2, 'Proverbe potrivite', [
                 'Încercuiește două proverbe care se potrivesc basmului și explică unul dintre ele.',
                 'a) „Răbdarea e cheia tuturor lucrurilor.”      b) „Nu judeca omul după haină.”',
                 'c) „Cine se scoală de dimineață departe ajunge.”      d) „Graba strică treaba.”',
                 'Explicația: _______________________________________________________________',
                 '___________________________________________________________________________']),
         ],
         [
             T(3, 'De acord sau nu?', 'Scrie DA sau NU și un argument din basm.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [230, 60, 220],
               [['Zâna face un sacrificiu prea mare pentru iubire.', '', ''],
                ['Prințul o iubește doar pentru frumusețea ei.', '', ''],
                ['Hainele nu arată cine ești cu adevărat.', '', '']], row_h=40),
             L(4, 'Zâna, peste ani', [
                 'Zâna, ajunsă împărăteasă, le povestește copiilor ei de ce a renunțat la puterile de zână.',
                 'Scrie ce le spune (5-6 propoziții).'], 4),
         ]),

    fisa(5, 'pp. 149-150',
         'Reper: „O mie și una de nopți” este o veche culegere de povești din lumea orientală, spuse de Șeherezada. În '
         'fragmentul istorisit de Eusebiu Camilar, Aladin, un băiat sărac, e trimis de un vrăjitor care se dă drept '
         'unchiul lui să aducă o lampă dintr-o peșteră; vrăjitorul îi dă și un inel.',
         [
             T(1, 'Obiectele fermecate', 'Completează tabelul.',
               ['Obiectul', 'De unde îl are Aladin', 'Ce poate face'], [170, 160, 180], gol3(
                   'inelul', 'lampa', 'pomii din grădina peșterii'), row_h=32),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Aladin îi dă lampa vrăjitorului înainte să iasă din peșteră.',
                 'Vrăjitorul închide peștera cu o lespede.',
                 'Aladin stă în întuneric o săptămână.',
                 'Duhul inelului îl scoate pe Aladin la lumina soarelui.',
                 'Mama lui Aladin vrea să vândă lampa.',
                 'După această aventură, Aladin își schimbă purtarea.'), row_h=20),
         ],
         [
             T(3, 'Zâna Munților și Aladin', 'Compară cele două basme.',
               ['Aspectul', '„Zâna Munților”', 'Aladin'], [150, 180, 180], gol3(
                   'personajul principal', 'obiectul fermecat', 'ființa supranaturală', 'cum se schimbă eroul'), row_h=30),
             L(4, 'Dorința ta', [
                 'Duhul lămpii ți se arată ție. Scrie dialogul (4-6 replici) în care îi ceri ceva care să-i ajute',
                 'și pe alții, nu doar pe tine.'], 4),
         ]),

    fisa(6, 'pp. 151-152',
         'Reper (manual, pp. 151-152): Întâlnirile dintre popoare (vecinătatea, comerțul, călătoriile) aduc schimburi de '
         'bunuri, de idei și de cuvinte. Diversitatea culturală înseamnă existența mai multor culturi care se influențează; '
         'odată cu obiectele și ideile, călătoresc și cuvintele care le numesc.',
         [
             T(1, 'Cuvinte călătoare', 'Scrie limba din care a venit cuvântul: turcă, franceză, engleză, germană sau italiană.',
               ['Cuvântul', 'Limba', 'Cuvântul', 'Limba'], [150, 105, 150, 105],
               perechi(('cafea', 'fotbal'), ('șofer', 'ștrand'), ('pizza', 'bagaj'), ('ciorbă', 'iaurt')), row_h=22),
             X(2, 'Nastratin și oala', [
                 'Citește anecdota, repovestită după folclor.',
                 '„Nastratin a împrumutat de la vecin o oală. Peste câteva zile i-a dat-o înapoi, împreună cu o oală mică:',
                 '«Oala ta a născut.» Vecinul, bucuros, a luat amândouă oalele. Altă dată, Nastratin a împrumutat',
                 'iar oala, dar n-a mai adus-o. «Oala ta a murit», i-a spus el. «Cum să moară o oală?» s-a mirat vecinul.',
                 '«Dacă ai crezut că poate naște, de ce nu crezi că poate muri?»”']),
             L(3, 'Întrebări despre anecdotă', 'a) De ce primește vecinul oala mică fără să protesteze?  b) Scrie tâlcul anecdotei într-o propoziție.', 3),
         ],
         [
             T(4, 'Aceeași poveste, alte popoare', 'Găsește câte un basm pentru fiecare motiv.',
               ['Motivul', 'Un basm românesc', 'Un basm din altă cultură'], [150, 180, 180], gol3(
                   'pantoful pierdut', 'obiectul fermecat', 'mezinul cel isteț'), row_h=32),
             L(5, 'Bună ziua, în alte limbi', [
                 'Scrie cum se spune „Bună ziua” în trei limbi pe care le știi (sau pe care le vorbesc colegi, vecini).',
                 'Ce ai simți dacă cineva te-ar saluta în limba ta într-o țară străină? (2-3 propoziții)'], 3),
         ]),

    fisa(8, 'pp. 155-156',
         'Reper (manual, p. 156): Elementele paraverbale țin de voce: intensitatea, intonația, ritmul, pauza. Elementele '
         'nonverbale țin de corp: mimica, gesturile, poziția corpului, contactul vizual. Folosite potrivit, ele ajută '
         'publicul să înțeleagă o prezentare orală.',
         [
             T(1, 'Voce sau corp?', 'Scrie P (paraverbal) sau N (nonverbal).',
               ['Elementul', 'P / N', 'Elementul', 'P / N'], [185, 70, 185, 70],
               perechi(('vorbește tare', 'zâmbește'), ('face o pauză', 'ridică din umeri'),
                       ('vorbește repede', 'privește publicul'), ('ridică tonul la final', 'stă cu mâinile în buzunare')),
               row_h=20),
             T(2, 'Ce transmite?', 'Scrie ce atitudine sau ce stare transmite fiecare semn.',
               ['Semnul', 'Ce transmite'], [260, 250], gol(
                   'își încrucișează brațele', 'se uită mereu la ceas', 'dă din cap aprobator',
                   'vorbește încet, cu ochii în pământ', 'se apleacă spre vorbitor'), row_h=22),
             T(3, 'Aceeași propoziție, alt ton', 'Spui „Ai venit la timp.” Ce schimbi pentru fiecare intenție?',
               ['Intenția', 'Vocea (ton, ritm)', 'Gestul, mimica'], [110, 200, 200], gol3(
                   'bucurie', 'ironie', 'mirare', 'reproș'), row_h=24),
         ],
         [
             T(4, 'Planul prezentării tale', 'Pregătește o prezentare de două minute despre basmul tău preferat.',
               ['Partea', 'Ce spun', 'Cum spun (voce, gest)'], [90, 250, 170], gol3(
                   'început', 'cuprins', 'final'), row_h=70),
             X(5, 'Sfaturi pentru un coleg emoționat', [
                 'Încercuiește sfaturile bune.',
                 'a) Citește totul de pe foaie.            b) Privește pe rând mai mulți colegi.',
                 'c) Vorbește repede, ca să termini.        d) Fă o pauză înainte de ideea importantă.',
                 'e) Ține mâinile la spate tot timpul.      f) Zâmbește la început.']),
         ]),

    fisa(9, 'p. 157',
         'Reper (manual, p. 157): A promite este actul de limbaj prin care vorbitorul se angajează să facă ceva. A declara '
         'este actul de limbaj prin care vorbitorul anunță, recunoaște sau își asumă ceva; declarația apare mai ales în '
         'limbajul oficial (administrativ, juridic, politic, publicistic).',
         [
             T(1, 'Ce face vorbitorul?', 'Scrie P (promite), D (declară) sau A (amenință).',
               ['Enunțul', 'P / D / A'], [430, 80], gol(
                   'Îți promit că te ajut mâine la teme.',
                   'Declar deschisă ședința Consiliului Elevilor.',
                   'Dacă mai faci asta, spun la toată lumea!',
                   'Mâine îți aduc cartea, cuvânt de onoare!',
                   'Recunosc: eu am spart geamul.',
                   'Declar câștigătoare echipa albastră.'), row_h=20),
             X(2, 'Promisiuni realiste', [
                 'Scrie R (realistă) sau N (nerealistă).',
                 'a) „Promit să citesc o carte pe lună.” ___        b) „Promit că nu voi mai greși niciodată nimic.” ___',
                 'c) „Îți promit luna de pe cer.” ___               d) „Promit să vin marți la antrenament.” ___',
                 'Transformă promisiunea b) într-una realistă: ____________________________________________']),
         ],
         [
             T(3, 'Cine declară și unde?', 'Scrie cine rostește declarația și în ce situație.',
               ['Declarația', 'Cine', 'În ce situație'], [210, 130, 170], gol3(
                   '„Declar deschise Jocurile Olimpice.”',
                   '„Declar că datele sunt corecte.”',
                   '„Vă declar soț și soție.”'), row_h=30),
             L(4, 'Angajamentul clasei', [
                 'Scrie angajamentul clasei tale pentru un an școlar mai bun: o declarație care începe cu',
                 '„Noi, elevii clasei a V-a, declarăm...” și trei promisiuni realiste.'], 4),
         ]),

    fisa(10, 'pp. 158-159',
         'Reper (manual, pp. 158-159): Numeralul exprimă un număr sau ordinea prin numărare. Numeralul cardinal exprimă '
         'un număr; e simplu (unu... zece) sau compus (unsprezece, o sută cinci). Un/o și doi/două își schimbă forma după '
         'gen. Un și o sunt numerale lângă alte numerale, cu singur, numai, doar sau când arată o unitate de măsură.',
         [
             T(1, 'Numere din povești', 'Scrie numeralele cu litere.',
               ['Cu cifre', 'Cu litere'], [160, 350], gol(
                   '40 de hoți', '12 prințese', '101 dalmațieni', '2 zâne și 2 zmei', '22 de pitici', '1001 nopți'),
               row_h=22),
             T(2, 'Simplu sau compus?', 'Scrie S (simplu) sau C (compus).',
               ['Numeralul', 'S / C', 'Numeralul', 'S / C'], [185, 70, 185, 70],
               perechi(('nouă', 'nouăsprezece'), ('zece', 'unsprezece'), ('treizeci și unu', 'opt'),
                       ('două mii', 'șase')), row_h=20),
         ],
         [
             X(3, 'Numeral sau articol?', [
                 'Scrie N (numeral) sau A (articol nehotărât) pentru cuvântul un sau o din fiecare propoziție.',
                 'a) Am citit o carte despre zâne. ___           b) Am citit o singură carte vara aceasta. ___',
                 'c) Am un frate și două surori. ___            d) Un vrăjitor a bătut la ușă. ___',
                 'e) Așteaptă doar o clipă! ___                  f) Duhul a apărut după un minut. ___']),
             X(4, 'Doi sau două?', [
                 'Scrie numeralul în litere, acordat cu substantivul.',
                 'a) (2) ___________ balauri      b) (2) ___________ prințese      c) (12) ___________ ore',
                 'd) (12) ___________ elevi       e) (32) ___________ de fete      f) (52) ___________ de băieți']),
             L(5, 'Comoara din peșteră', [
                 'Aladin numără comoara din peșteră. Scrie 4 propoziții cu numerale cardinale în litere: cel puțin',
                 'două compuse și unul acordat la feminin.'], 3),
         ]),

    fisa(11, 'pp. 160-161',
         'Reper (manual, pp. 160-161): Numeralul ordinal arată ordinea: al doilea (masculin, neutru), a doua (feminin); '
         'întâi și primul sunt sinonime. Norme: paisprezece, șaisprezece, șaizeci, șaptesprezece, optsprezece; ora două, '
         'clasa a douăsprezecea. În texte, numerele mai mici de zece se scriu în cuvinte.',
         [
             T(1, 'Al câtelea? A câta?', 'Scrie numeralul ordinal la masculin și la feminin.',
               ['Numărul', 'Masculin (al...)', 'Feminin (a...)'], [80, 215, 215], gol3(
                   '2', '3', '9', '14', '40', '100'), row_h=22),
             X(2, 'Forma corectă', [
                 'Încercuiește forma corectă.',
                 'a) (paisprezece / patrusprezece) zile        b) (șaisprezece / șasesprezece) ani',
                 'c) (șaizeci / șasezeci) de minute             d) (optsprezece / optâsprezece) trepte',
                 'e) (cincisprezece / cinsprezece) lei           f) la ora (doisprezece / douăsprezece)',
                 'g) locul (al doilea / al doile)                h) (a cincea / a cincia) zi']),
         ],
         [
             T(3, 'Cardinal sau ordinal?', 'Scrie numeralul din propoziție și felul lui.',
               ['Propoziția', 'Numeralul', 'Felul'], [270, 120, 120], gol3(
                   'Prima probă a fost cea mai grea.', 'Zmeul avea trei capete.', 'A treia zi, eroul a plecat.',
                   'Întâiul fiu era leneș.', 'Au trecut șapte ani.'), row_h=20),
             X(4, 'mii sau mi-i?', [
                 'Completează cu mii sau mi-i.',
                 'a) Cartea aceasta ______ foarte dragă.      b) În bibliotecă sunt două ______ de volume.',
                 'c) ______ dor de bunici.                    d) Pe cer străluceau ______ de stele.']),
             L(5, 'Concursul de povești', 'Scrie 4 propoziții despre clasamentul unui concurs de povești, cu numerale ordinale la masculin și la feminin.', 3),
         ]),

    fisa(12, 'p. 162',
         'Reper (manual, p. 163): Descrierea unei ființe imaginare prezintă trăsăturile ei fizice și morale și pune în '
         'lumină ce are fabulos, surprinzător. Substantivele numesc ființa și părțile ei, adjectivele arată trăsăturile, '
         'iar verbele sunt, de regulă, la indicativ prezent sau imperfect.',
         [
             T(1, 'Ființe din legende', 'Scrie numele ființei. Alege din: sirena, ciclopul, faunul, pasărea Phoenix, balaurul.',
               ['Descrierea', 'Ființa'], [370, 140], gol(
                   'jumătate femeie, jumătate pește', 'pasăre care renaște din propria cenușă',
                   'uriaș cu un singur ochi în frunte', 'om cu picioare de țap și coarne mici',
                   'șarpe uriaș, cu aripi și mai multe capete'), row_h=20),
             X(2, 'Spiridușul din pod', [
                 'Citește descrierea.',
                 '„Spiridușul din pod are urechi ascuțite și ochi verzi, strălucitori. Poartă o căciulă roșie și merge fără',
                 'zgomot. Noaptea, repară jucăriile stricate ale copiilor.”']),
             T(3, 'Cuvintele descrierii', 'Scrie, din text, cuvintele cerute.',
               ['Substantive (părți, obiecte)', 'Adjective (trăsături)', 'Verbe (ce face)'], [170, 170, 170],
               rows=1, row_h=60),
         ],
         [
             T(4, 'Fizic, moral sau putere?', 'Scrie F (trăsătură fizică), M (trăsătură morală) sau P (putere miraculoasă).',
               ['Trăsătura', 'F / M / P', 'Trăsătura', 'F / M / P'], [185, 70, 185, 70],
               perechi(('are solzi aurii', 'e bănuitor cu străinii'), ('poate deveni invizibil', 'are aripi de liliac'),
                       ('îi ajută pe cei rătăciți', 'vorbește cu animalele')), row_h=20),
             T(5, 'Planul ființei tale', 'Notează ce vei scrie despre ființa inventată de tine.',
               ['Elementul', 'Ce notez'], [150, 360], gol(
                   'numele', 'capul și chipul', 'corpul și membrele', 'culori, blană, solzi, pene', 'puterile',
                   'caracterul', 'unde trăiește', 'o comparație'), row_h=26),
         ]),

    fisa(13, 'p. 163',
         'Reper (manual, p. 163): Pentru descriere: alegi ființa, stabilești dacă e înspăimântătoare, blândă sau '
         'înșelătoare, faci schema (înfățișare, trăsături, puteri, relația cu ceilalți, concluzia), scrii, revizuiești, '
         'rescrii îngrijit și dai un titlu.',
         [
             L(1, 'Revizuiește descrierea', [
                 'Rescrie textul fără repetiții, cu verbele la același timp și cu o comparație:',
                 '„Dragonul avea aripi mari. Dragonul avea ochi galbeni. El va zbura peste munți și a scuipat foc.',
                 'Avea și o coadă. Coada era lungă. Dragonul era bun.”'], 4),
             X(2, 'Începutul și încheierea', [
                 'Încercuiește introducerea care trezește curiozitatea.',
                 'a) „Voi descrie un dragon.”',
                 'b) „În nopțile fără lună, deasupra satului se aude un foșnet de aripi uriașe...”',
                 'c) „Dragonul este o ființă imaginară.”',
                 'Scrie o încheiere cu părerea ta despre ființa ta: ____________________________________',
                 '___________________________________________________________________________']),
         ],
         [
             T(3, 'Lista de control', 'Scrie DA sau NU: întâi pentru textul tău, apoi pentru textul colegului.',
               ['Criteriul', 'Eu', 'Colegul'], [370, 70, 70], gol3(
                   'E descrierea unei ființe imaginare.', 'Are trăsături fizice și morale.',
                   'Are puteri supranaturale precizate.', 'Verbele sunt la prezent sau la imperfect.',
                   'Are introducere, cuprins și încheiere.', 'Are cel puțin o comparație.'), row_h=22),
             X(4, 'Trei titluri', [
                 'Propune trei titluri pentru descrierea ta.',
                 'misterios: _____________________________________________',
                 'amuzant: ______________________________________________',
                 'simplu: ________________________________________________']),
         ]),

    fisa(15, 'pp. 164-165',
         'Recapitulare (manual, pp. 140-157): basmul (lumea miraculoasă, momentele, formulele, timpul și spațiul vagi), '
         'personajele, semnificațiile, diversitatea culturală, elementele paraverbale și nonverbale, a promite, a declara.',
         [
             X(1, 'Râșnița fermecată', ['Citește basmul (creat pentru fișă).', RASNITA]),
             T(2, 'Momentele basmului', 'Completează.',
               ['Momentul', 'În „Râșnița fermecată”'], [170, 340], gol(
                   'situația de la început', 'evenimentul', 'proba', 'răsplata, situația finală'), row_h=24),
             L(3, 'Întrebări despre text', [
                 'a) Transcrie formula de început și pe cea de încheiere.   b) Numește două elemente miraculoase.',
                 'c) Transcrie comparația.   d) Ce valoare transmite basmul?'], 3),
         ],
         [
             T(4, 'Cum ai spune?', 'Scrie tonul și gestul potrivite pentru fiecare replică.',
               ['Replica', 'Tonul vocii', 'Gestul, mimica'], [180, 165, 165], gol3(
                   'bătrâna cere pâine', 'surorile o alungă', 'zâna îi dăruiește râșnița'), row_h=30),
             L(5, 'Promisiune și declarație', [
                 'Scrie replica prin care Ilinca îi promite zânei că va împărți făina cu cei săraci, apoi o declarație',
                 'a morarului către tot satul.'], 3),
         ]),

    fisa(16, 'pp. 164-165',
         'Recapitulare (manual, pp. 158-163): numeralul cardinal (simplu, compus; un și o numerale), numeralul ordinal, '
         'normele de scriere și de pronunțare a numeralelor, descrierea unei ființe imaginare.',
         [
             X(1, 'Masa zânei', [
                 'Citește textul.',
                 '„Pe masa zânei erau trei pahare de cristal și douăsprezece farfurii. Prima farfurie avea flori de aur,',
                 'a doua, păsări de argint. Zâna trăise o mie de ani în munți și coborî în sat abia în a suta primăvară.”']),
             T(2, 'Numeralele din text', 'Completează.',
               ['Numeralul', 'Cardinal / ordinal', 'Genul substantivului'], [150, 180, 180], gol3(
                   'trei', 'douăsprezece', 'prima', 'a doua', 'o mie', 'a suta'), row_h=20),
             X(3, 'Scrie corect', [
                 'Scrie în litere.',
                 'a) 14 zile: ______________    b) 16 ani: ______________    c) 60 de lei: ______________',
                 'd) 18 trepte: ______________   e) ora 2: ora ______________  f) clasa a 12-a: clasa a ______________',
                 'g) 21 de fete: ______________ de fete         h) al 7-lea cufăr: ______________ cufăr']),
         ],
         [
             L(4, 'Un, o', 'Scrie o propoziție în care „o” este numeral și una în care „o” este articol nehotărât.', 2),
             L(5, 'Animalul fabulos al zânei', [
                 'Descrie în 6-8 rânduri animalul fabulos care o însoțește pe zână. Folosește cel puțin trei numerale',
                 '(dintre care un cardinal compus și un ordinal) și două comparații.'], 5),
         ]),
]
