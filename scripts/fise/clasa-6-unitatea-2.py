# Fișe de exerciții, clasa a VI-a, Unitatea II „Printre colegi și prieteni”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 6). Textele fără autor
# sunt create pentru fișe; textele sub drepturi de autor (Mircea Cărtărescu,
# René Goscinny, John Boyne, Truman Capote) sunt doar parafrazate.
# Lecțiile 1 și 9 (proiectul) și 24 (evaluarea) nu au fișă.
# Rezolvările: notite-profesor/clasa-6/unitatea-2/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-6-unitatea-2.py

SUB = 'Clasa a VI-a · Unitatea II, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 6, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-6/unitatea-2/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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


def gol4(*randuri):
    return [[r, '', '', ''] for r in randuri]


def numerotat(k, coloane):
    return [[str(i)] + [''] * (coloane - 1) for i in range(1, k + 1)]


AF = ['Afirmația', 'A / F']

TABARA = ('„Azi, Mara locuiește în alt oraș, dar ne scriem în fiecare duminică. Ne-am cunoscut când aveam zece ani, '
          'în prima mea tabără, la munte. În prima seară am plâns sub pătură, fiindcă îmi era dor de casă. A doua zi, '
          'Mara, o fată din camera vecină, m-a luat la drumeție cu grupul ei. Pe potecă am găsit un pui de vulpe '
          'rătăcit și l-am dus la cabana pădurarului. Când îmi recitesc jurnalul din tabără, mi se pare că încă '
          'miroase a brad.”')

MINGEA = [
    '(1) În curtea blocului, băieții jucau fotbal în fiecare după-amiază, iar doamna Ionescu își uda florile '
    'la balconul de la parter.',
    '(2) Într-o zi, mingea lui Tudor a zburat drept în ghiveciul cu mușcate și l-a spart.',
    '(3) Copiii au fugit care încotro. Tudor s-a ascuns după garaje, dar nu-și putea lua ochii de la mușcatele '
    'culcate pe asfalt. Seara n-a putut să mănânce.',
    '(4) A doua zi, a sunat la ușa doamnei Ionescu, cu banii din pușculiță în mână, și i-a spus adevărul, tremurând.',
    '(5) Vecina a zâmbit, a refuzat banii și l-a rugat doar s-o ajute să replanteze florile.',
    '(6) De atunci, mușcatele de la parter sunt cele mai frumoase din cartier, iar Tudor le udă în fiecare vară.',
]

IRINA = ('„Luni, clasa a VI-a B a primit o colegă nouă, Irina, venită din Italia. Vorbea românește cu un accent '
         'ciudat, așa că în pauză câțiva băieți au început s-o imite, râzând în cor. Andrei, colegul ei de bancă, '
         'i-a spus încet: «Nu-i asculta, până vineri o să uite.» Irina și-a strâns buzele și a tăcut. La ora de '
         'geografie, profesorul a întrebat cine știe unde e Vezuviul. Irina a desenat pe tablă harta Italiei, cu '
         'vulcanul și golful, fără să se uite în caiet. Clasa a amuțit. În recreație, băieții au venit s-o întrebe '
         'dacă a urcat vreodată pe vulcan, iar Andrei i-a făcut cu ochiul. Portarul școlii, care trecea pe hol, '
         'a zâmbit.”')

FLUIERUL = ('„Bunicul lui Matei cioplea fluiere din lemn de soc. Într-o vară, Matei și-a dorit să învețe și el, dar '
            'lemnul i se crăpa de fiecare dată și degetele i se umpleau de zgârieturi. După o săptămână, supărat, a '
            'aruncat cuțitașul în iarbă. Bunicul l-a găsit, i l-a pus înapoi în palmă și i-a arătat cum să taie '
            'încet, după fibra lemnului. Seara, din fluierul strâmb al lui Matei a ieșit primul sunet, subțire ca un '
            'fir de apă. Toată curtea s-a oprit să asculte.”')

STEFAN = ('„Dragă Luca, am o veste mare: am câștigat concursul de șah! Mâine voi merge la etapa județeană. '
          'Vii cu mine? Adu și tabla ta magnetică, pentru că a mea este la bunici. Până la prânz voi fi terminat '
          'partidele, apoi vom mânca pizza. Te aștept! Ștefan”')

BICICLETA = ('„În vara aceea, Sorin primise o bicicletă roșie de ziua lui și nu o împrumuta nimănui. Într-o '
             'dimineață, Cezar, băiatul nou din bloc, l-a rugat s-o încerce și el măcar o tură. Sorin a refuzat și a '
             'plecat singur spre lac. Pe drum, lanțul bicicletei a sărit, iar el a căzut în șanț și și-a julit '
             'genunchiul. Nu știa cum să pună lanțul la loc și aproape că plângea de ciudă. Atunci a apărut Cezar, '
             'care îl urmase pe bicicleta lui veche. Fără să spună nimic, a pus lanțul la loc în două minute. Au '
             'mers împreună până la lac și s-au întors abia seara, pe rând pe bicicleta roșie.”')

SCRISORI = [
    '„În fiecare dimineață, doamna Elena, poștărița satului, trecea pe lângă casa lui Radu cu geanta ei mare '
    'de piele. Radu o aștepta la poartă, deși nimeni nu-i scria niciodată. Ar fi vrut să primească și el '
    'măcar o carte poștală.',
    'Într-o zi de noiembrie, băiatul și-a făcut curaj și a întrebat-o dacă are ceva și pentru el. Doamna Elena '
    'a zâmbit trist și a clătinat din cap. A doua zi, Radu i-a scris el însuși o scrisoare poștăriței. Mama '
    'l-a ajutat cu adresa, iar el a lăsat plicul în cutia poștei.',
    'Seara, doamna Elena a bătut la poarta lor, cu plicul în mână și cu ochii umezi. De atunci, cei doi își '
    'scriu în fiecare lună, deși locuiesc pe aceeași uliță.”',
]

FISE = [
    fisa(2, 'pp. 44-46',
         'Reper: În „Oracolul” de Mircea Cărtărescu, naratorul își amintește de clasa a patra, când i-a ieșit un IDR '
         'neobișnuit de mare și colegii au început să-l poreclească. Petruța, o fată săracă și veselă, i-a făcut '
         'oracolul, iar la ora de desen pata i-a dispărut sub palma ei.',
         [
             T(1, 'Cine face?', 'Scrie personajul care face fiecare acțiune.',
               ['Acțiunea (repovestită)', 'Personajul'], [360, 150], gol(
                   'îi măsoară pata cu o riglă de plastic',
                   'nu mai vrea să stea în bancă cu naratorul',
                   'îi smulge Petruței caietul',
                   'face oracolul colegilor',
                   'se mută în altă bancă, apoi o lasă să stea lângă el',
                   'vorbește în șoaptă cu asistenta'), row_h=24),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Naratorul era în clasa a patra.',
                 'IDR-ul se făcea în picior.',
                 'Lui Puică îi ieșise o pată mai mare decât a naratorului.',
                 'Petruța avea grijă acasă de doi frați mai mici.',
                 'Oracolul i-a spus naratorului că nu-l iubește nimeni.',
                 'La ora de desen, afară ningea.',
                 'Azi, Petruța lucrează la o librărie.'), row_h=24),
         ],
         [
             T(3, 'Cuvinte din text', 'Explică pe scurt sensul fiecărui cuvânt.',
               ['Cuvântul', 'Sensul'], [130, 380], gol(
                   'preventoriu', 'sfios', 'a scanda', 'năuc', 'decolorat', 'pupitru')),
             L(4, 'Scrisoare pentru Petruța', [
                 'Imaginează-ți că naratorul îi scrie Petruței, după treizeci de ani, o scrisoare de 6-7 rânduri.',
                 'Ce i-ar spune despre ziua cu ora de desen?'], 3),
         ]),

    fisa(3, 'pp. 47-48',
         'Reper (manual, p. 47): Timpul desfășurării întâmplărilor este cel în care se petrece acțiunea. Timpul '
         'povestirii este momentul în care naratorul relatează, marcat prin verbe la prezent. Unele episoade pot fi '
         'sărite sau comprimate. Acțiunea se poate petrece într-unul sau în mai multe locuri.',
         [
             X(1, 'Prietena din tabără', ['Citește textul (scris pentru fișă).', TABARA]),
             T(2, 'Al întâmplării sau al povestirii?', 'Scrie Î (timpul desfășurării întâmplărilor) sau P (timpul povestirii).',
               ['Indicele de timp', 'Î / P'], [440, 70], gol(
                   'azi', 'când aveam zece ani', 'în prima seară', 'a doua zi', 'în fiecare duminică',
                   'când îmi recitesc jurnalul')),
             T(3, 'Unde se petrece?', 'Scrie locul fiecărei întâmplări.',
               ['Întâmplarea', 'Locul'], [250, 260], gol(
                   'plânsul din prima seară', 'drumeția cu grupul Marei', 'puiul de vulpe ajunge la adăpost',
                   'Mara, în prezent')),
         ],
         [
             T(4, 'Ordinea reală', 'Numerotează întâmplările în ordinea în care s-au petrecut (1-5).',
               ['Întâmplarea', 'Nr.'], [440, 70], gol(
                   'Mara o ia la drumeție.', 'Naratoarea pleacă în prima ei tabără.',
                   'Găsesc un pui de vulpe rătăcit.', 'Naratoarea plânge sub pătură.',
                   'Cele două își scriu în fiecare duminică.')),
             L(5, 'Aceeași întâmplare, povestită azi', [
                 'Scrie 5-6 propoziții despre o întâmplare din clasa I, povestită de tine azi. Folosește doi indici',
                 'pentru timpul întâmplării și unul pentru timpul povestirii. Subliniază-i.'], 3),
         ]),

    fisa(4, 'pp. 49-51',
         'Reper (manual, pp. 49-51): Momentele subiectului sunt expozițiunea (starea de echilibru), intriga (ce '
         'declanșează acțiunea), desfășurarea acțiunii, punctul culminant (tensiunea maximă) și deznodământul '
         '(încheierea). Uneori, finalul prezintă întâmplări ulterioare, într-un epilog.',
         [
             X(1, 'Mingea din curte', ['Citește textul (scris pentru fișă).'] + MINGEA),
             T(2, 'Momentele subiectului', 'Scrie numărul secvenței potrivite pentru fiecare moment.',
               ['Momentul', 'Secvența'], [440, 70], gol(
                   'expozițiunea', 'intriga', 'desfășurarea acțiunii', 'punctul culminant', 'deznodământul',
                   'epilogul')),
         ],
         [
             T(3, 'Timpul verbelor', 'Scrie modul și timpul verbelor care predomină în secvență.',
               ['Secvența', 'Modul și timpul'], [150, 360], gol('secvența 1', 'secvența 2', 'secvența 6')),
             T(4, 'Ce simte Tudor?', 'Scrie un fragment din text care arată fiecare trăire.',
               ['Trăirea', 'Fragmentul'], [110, 400], gol('teamă', 'vinovăție', 'curaj'), row_h=30),
             L(5, 'Alt deznodământ', 'Scrie alt deznodământ (3-4 propoziții) pentru povestea lui Tudor și un epilog de o propoziție.', 3),
         ]),

    fisa(5, 'pp. 52-53',
         'Reper (manual, p. 52): După rolul în acțiune, personajul poate fi principal, secundar sau episodic. Un grup '
         'care se comportă unitar este un personaj colectiv. Trăsăturile pot fi numite în text sau deduse din fapte, '
         'vorbe, gesturi, îmbrăcăminte.',
         [
             X(1, 'Colega nouă', ['Citește textul (scris pentru fișă).', IRINA]),
             T(2, 'Rolul personajului', 'Scrie P (principal), S (secundar), E (episodic) sau C (personaj colectiv).',
               ['Personajul', 'Rolul'], [440, 70], gol(
                   'Irina', 'Andrei', 'băieții care o imită', 'profesorul de geografie', 'portarul școlii')),
             T(3, 'Trăsături deduse', 'Scrie o trăsătură și din ce o deduci (fapte, vorbe, gesturi).',
               ['Personajul', 'Trăsătura', 'Din ce reiese'], [110, 150, 250], gol3('Irina', 'Andrei', 'băieții'),
               row_h=30),
         ],
         [
             L(4, 'Un personaj colectiv din viața ta', 'Descrie în 4-5 propoziții un moment în care clasa ta s-a purtat ca un singur personaj.', 2),
             L(5, 'În locul lui Andrei', 'Ce i-ai fi spus tu Irinei în prima pauză? Scrie 2-3 replici.', 2),
         ]),

    fisa(6, 'pp. 54-55',
         'Reper: Interpretezi „Oracolul” când te întrebi ce spune el dincolo de întâmplări: despre excludere și '
         'porecle, despre prietenia dintre doi copii puși deoparte, despre lucrurile greu de explicat.',
         [
             T(1, 'De acord sau nu?', 'Scrie DA sau NU și un argument din text.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [240, 60, 210], gol3(
                   'La început, băiatul era diferit de colegi.',
                   'Pata îl pune deoparte, ca pe Petruța.',
                   'Petruța stă lângă el din întâmplare.',
                   'Porecla rămâne, deși boala nu există.'), row_h=40),
             T(2, 'Ce poate însemna?', 'Explică ce poate însemna fiecare element al povestirii.',
               ['Elementul', 'Ce poate însemna'], [150, 360], gol(
                   'pata roșie', 'palma Petruței', 'porecla', 'fulgii care se opresc', 'raionul de ceasuri'),
               row_h=30),
         ],
         [
             L(3, 'Mesaj pentru clasa lui Tebecistu’', 'Scrie un mesaj de 5-6 rânduri către colegii băiatului, despre porecle și despre ce simte cel poreclit.', 3),
             L(4, 'Oracolul clasei noastre', 'Scrie cinci întrebări pentru un caiet-oracol despre prietenie.', 2),
         ]),

    fisa(7, 'pp. 56-57',
         'Reper: În fragmentul din „Micul Nicolas” de René Goscinny, cu ilustrații de Jean-Jacques Sempé, clasa lui '
         'Nicolas primește un coleg nou, George, venit din altă țară. Fără să vrea, copiii îl învață în recreație '
         'cuvinte nepotrivite, iar Achim îi pârăște.',
         [
             T(1, 'Cine spune sau face?', 'Scrie personajul.',
               ['Replica sau fapta (repovestită)', 'Personajul'], [360, 150], gol(
                   'crede că noul coleg e norocos, cu dinții lui',
                   'vrea să traducă ce spune George',
                   'îi spune lui Achim că e „sisi la cap”',
                   'crede că în țara lui George se joacă tenis',
                   'se tăvălește pe jos, urlând',
                   'repetă, mândru, tot ce aude'), row_h=24),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'George are pistrui și ochi albaștri.',
                 'Părinții lui George l-au adus la școală ca să învețe franceza.',
                 'Lothar a fost în recreație cu ceilalți.',
                 'Doamna l-a pedepsit pe cel care a strigat „Pârâcios nesuferit!”.',
                 'La final, George îi spune doamnei o expresie învățată în recreație.'), row_h=24),
         ],
         [
             T(3, 'Două texte, o comparație', 'Completează.',
               ['', '„Oracolul”', '„Micul Nicolas”'], [130, 190, 190], gol3(
                   'cine povestește', 'cine e diferit', 'cum se poartă grupul', 'tonul textului'), row_h=34),
             L(4, 'Cuvinte pentru George', 'Scrie cinci cuvinte sau expresii frumoase pe care le-ai învăța un coleg nou, venit din altă țară, și explică de ce le-ai ales.', 3),
         ]),

    fisa(8, 'pp. 58-59',
         'Reper (manual, p. 59): O comunitate etnică împărtășește o limbă, tradiții, obiceiuri și credințe. Între '
         'comunități există influențe culturale, iar jocul copiilor e un limbaj comun: multe jocuri se regăsesc în '
         'toate comunitățile de pe teritoriul României.',
         [
             T(1, 'Trei jocuri, trei comunități', 'Completează după descrierile din manual.',
               ['Jocul', 'Comunitatea', 'Cum se joacă (pe scurt)'], [130, 110, 270], gol3(
                   'Țuiul', 'Bújj, bújj, zöld ág', 'O podo baruno'), row_h=36),
             T(2, 'Poarta și podul', 'Compară cele două jocuri cu arcadă.',
               ['', 'Bújj, bújj, zöld ág', 'O podo baruno'], [130, 190, 190], gol3(
                   'cine formează arcul', 'cine trece pe sub el', 'cine e prins', 'ce spun versurile'), row_h=34),
         ],
         [
             L(3, 'Regulile unui joc cunoscut', 'Scrie numele unui joc pe care îl știi, patru reguli ale lui și un joc din altă comunitate cu care seamănă.', 3),
             L(4, 'Fără cuvinte', 'Cum i-ai explica, fără cuvinte, unui copil din altă țară jocul „de-a v-ați ascunselea”? Scrie 4-5 propoziții.', 2),
         ]),

    fisa(10, 'pp. 62-63',
         'Reper (manual, p. 62): Rezumatul oral pornește de la ideile principale, respectă ordinea întâmplărilor, '
         'folosește prezentul sau perfectul compus, nu are comentarii, descrieri, dialog sau citate și leagă ideile '
         'prin cuvinte ca: mai întâi, apoi, după aceea, în cele din urmă.',
         [
             T(1, 'Ce nu merge în rezumat?', 'Scrie „corect” sau regula încălcată.',
               ['Fragment de rezumat (din „Oracolul”)', 'Observația'], [320, 190], gol(
                   'Băiatului îi iese un IDR mare și colegii râd de el.',
                   'Petruța, o fată super simpatică, îi face oracolul.',
                   'Afară ningea de rupea, iar fulgii păreau roz.',
                   'Iosub strigă: „Fă-i și lui!”',
                   'A doua zi, băiatul va fi dus la spital.'), row_h=26),
             X(2, 'Cuvinte de legătură', [
                 'Completează rezumatul cu: apoi, în cele din urmă, mai întâi, după aceea.',
                 '________ copiii fac testul IDR. ________ asistenta observă pata cea mare. ________ colegii',
                 'îl poreclesc pe băiat. ________ pata dispare, iar băiatul nu mai e trimis la preventoriu.']),
         ],
         [
             T(3, 'Ziua de ieri, în idei', 'Scrie câte o idee principală (o propoziție) pentru fiecare parte a zilei.',
               ['Partea zilei', 'Ideea principală'], [110, 400], gol('dimineața', 'la școală', 'după-amiaza', 'seara')),
             L(4, 'Rezumatul unei zile', 'Leagă ideile de la exercițiul 3 într-un rezumat de 4-5 propoziții, cu cuvinte de legătură, fără comentarii.', 3),
         ]),

    fisa(11, 'p. 63',
         'Reper (manual, pp. 62-63): Rezumatul reformulează ideile principale cu propriile cuvinte, e mai scurt '
         'decât textul și nu reține detaliile nesemnificative. Pentru o poveste, te ajută întrebările: Cine? Ce '
         'vrea (scopul)? Dar ce obstacol apare? Atunci ce face? Așa că, cum se rezolvă?',
         [
             X(1, 'Fluierul', ['Citește textul (scris pentru fișă).', FLUIERUL]),
             T(2, 'Schema poveștii', 'Completează schema pentru textul „Fluierul”.',
               ['', 'Răspunsul'], [90, 420], gol('Cine', 'Scop', 'Dar', 'Atunci', 'Așa că'), row_h=26),
         ],
         [
             T(3, 'O poveste cunoscută', 'Completează aceeași schemă pentru „Capra cu trei iezi” de Ion Creangă.',
               ['', 'Răspunsul'], [90, 420], gol('Cine', 'Scop', 'Dar', 'Atunci', 'Așa că'), row_h=26),
             L(4, 'Rezumatul oral, pregătit', [
                 'Scrie rezumatul textului „Fluierul” în 4-5 propoziții, la prezent sau la perfect compus, fără dialog',
                 'și fără citate. Spune-l apoi colegului tău.'], 3),
         ]),

    fisa(12, 'pp. 64-65',
         'Reper (manual, p. 64): Verbele predicative pot alcătui singure predicat; cele nepredicative, nu. Auxiliarele '
         'ajută la formarea unor timpuri: a avea (perfectul compus), a vrea (viitorul), a fi (viitorul anterior). '
         'Modul indicativ arată o acțiune sigură; imperativul, un ordin, un sfat, o rugăminte.',
         [
             X(1, 'Scrisoarea lui Ștefan', ['Citește textul (scris pentru fișă).', STEFAN]),
             T(2, 'Predicativ sau auxiliar?', 'Scrie P (predicativ) sau A (auxiliar) și ce timp formează auxiliarul.',
               ['Verbul', 'P / A', 'Ce timp formează'], [250, 60, 200], gol3(
                   '„am” din „am o veste”', '„am” din „am câștigat”', '„voi” din „voi merge”',
                   '„este” din „este la bunici”', '„fi” din „voi fi terminat”')),
             T(3, 'Modul și timpul', 'Scrie modul și timpul (dacă are).',
               ['Verbul', 'Modul', 'Timpul'], [170, 170, 170], gol3('vii', 'adu', 'aștept', 'am câștigat', 'vom mânca')),
         ],
         [
             X(4, 'Normă și abatere', [
                 'Încercuiește forma corectă.',
                 'a) Partida (continuă / continuie) după pauză.    b) Antrenorul (agreează / agrează) planul.',
                 'c) Ea (încheie / închee) jocul.    d) Tu (vii / vi) la concurs?']),
             L(5, 'Răspunsul lui Luca', 'Răspunde-i lui Ștefan în 4-5 propoziții. Folosește un auxiliar „a avea”, un auxiliar „a vrea” și un imperativ; subliniază-le.', 3),
         ]),

    fisa(13, 'pp. 65-67',
         'Reper (manual, pp. 66-67): Trecutul indicativului are patru timpuri: imperfectul, perfectul compus, perfectul '
         'simplu și mai-mult-ca-perfectul. Viitorul are trei forme: viitorul standard, viitorul anterior, viitorul în '
         'trecut. Imperativul negativ, la singular, se face cu „nu” + infinitiv (Nu asculta!).',
         [
             T(1, 'Care trecut?', 'Scrie timpul fiecărui verb.',
               ['Verbul', 'Timpul'], [200, 310], gol(
                   'citeam', 'a desenat', 'scrise', 'plecasem', 'săreau', 'am cântat', 'văzură', 'cusese')),
             T(2, 'Corectează', 'Scrie forma corectă.',
               ['Forma greșită', 'Forma corectă'], [250, 260], gol(
                   'tu plecasei', 'voi citiseți', 'noi ajunsesem', 'mai am citit o dată')),
         ],
         [
             T(3, 'Felurile viitorului', 'Scrie felul viitorului și dacă e o formă de limbă scrisă sau vorbită.',
               ['Verbul', 'Felul viitorului'], [200, 310], gol(
                   'voi citi', 'o să citesc', 'am să citesc', 'voi fi citit', 'aveam să citesc')),
             X(4, 'Imperativul', [
                 'Trece verbele la forma negativă.',
                 'a) Cântă! → __________    b) Fă! → __________    c) Plecați! → __________    d) Zi! → __________']),
             L(5, 'Ziua de ieri, la trecut', 'Scrie 4-5 propoziții despre ziua de ieri, cu cel puțin trei timpuri trecute diferite; notează timpul deasupra fiecărui verb.', 3),
         ]),

    fisa(14, 'pp. 68-69',
         'Reper (manual, pp. 68-69): Conjunctivul arată o acțiune posibilă, realizabilă; marca lui este „să”. Are două '
         'timpuri: prezentul (să cânt) și perfectul (să fi cântat, la fel la toate persoanele). Cuvintele cam, mai, '
         'tot stau între „să” și verb la prezent și între „să” și „fi” la perfect.',
         [
             T(1, 'Prezent sau perfect?', 'Scrie timpul verbului la conjunctiv.',
               ['Verbul', 'Timpul'], [300, 210], gol(
                   'să învăț', 'să fi citit', 'să mergem', 'să fi plecat', 'să doarmă')),
             T(2, 'Conjugă la conjunctiv prezent', 'Completează tabelul.',
               ['Persoana', 'a scrie', 'a lucra', 'a vedea'], [110, 133, 133, 134], gol4(
                   'eu', 'tu', 'el / ea', 'noi', 'voi', 'ei / ele')),
         ],
         [
             X(3, 'Normă și abatere', [
                 'Corectează enunțurile.',
                 'a) Te rog să mai nu faci zgomot. → ______________________________________',
                 'b) Vrea tot să vorbească. → ______________________________________',
                 'c) Să fi mai citit o dată textul! → ______________________________________']),
             T(4, 'Analiză', 'Completează.',
               ['Verbul', 'Timpul', 'Persoana și numărul', 'Forma'], [120, 120, 150, 120], gol4(
                   'să plecăm', 'să citești', 'să nu vină (ei)', 'să fi auzit (eu)')),
             L(5, 'Sfaturi pentru un coleg nou', 'Scrie cinci sfaturi care încep cu „Să…” și un regret cu un verb la conjunctiv perfect.', 2),
         ]),

    fisa(15, 'pp. 70-71',
         'Reper (manual, pp. 70-71): Condițional-optativul arată acțiuni dorite sau care depind de o condiție. '
         'Prezentul: a avea auxiliar + infinitiv (aș cânta); perfectul: a avea + fi + participiu (aș fi cântat). '
         'Cam, mai, tot stau după auxiliar (ar mai sări, aș mai fi cântat).',
         [
             T(1, 'Timp și formă', 'Scrie timpul și forma (afirmativă sau negativă).',
               ['Verbul', 'Timpul', 'Forma'], [170, 170, 170], gol3(
                   'aș citi', 'ar fi plecat', 'am merge', 'ați fi câștigat', 'n-ar vrea')),
             T(2, 'Conjugă verbul „a învăța”', 'Completează.',
               ['Persoana', 'Prezent', 'Perfect'], [110, 200, 200], gol3(
                   'eu', 'tu', 'el / ea', 'noi', 'voi', 'ei / ele')),
         ],
         [
             X(3, 'Ortograme', [
                 'Încercuiește forma potrivită.',
                 'a) Copiii (s-ar / sar) juca în zăpadă, dar vara (s-ar / sar) coarda.',
                 'b) (N-aș / Naș) pleca fără tine.    c) Părinții (v-ar / var) lăsa să mergeți.',
                 'd) În deltă am văzut (c-ai / cai) sălbatici.']),
             X(4, 'Normă și abatere', [
                 'Corectează ordinea cuvintelor.',
                 'a) Bunica mai ar face o plăcintă. → ______________________________________',
                 'b) Noi tot am merge la munte. → ______________________________________',
                 'c) Ei cam ar fi obosit. → ______________________________________']),
             L(5, 'Dacă aș fi…', 'Scrie 4-5 propoziții care încep cu „Dacă aș fi director pentru o zi…”, cu verbe la condițional-optativ prezent și perfect.', 3),
         ]),

    fisa(16, 'pp. 72-73',
         'Reper (manual, pp. 72-73): Predicatul nominal = verbul copulativ „a fi” + nume predicativ (substantiv sau '
         'adjectiv). Numele predicativ poate fi simplu sau multiplu și se acordă cu subiectul. „A fi” poate fi '
         'copulativ, predicativ (Vlad este în laborator.) sau auxiliar (Aș fi mâncat.).',
         [
             T(1, 'Ce fel de „a fi”?', 'Scrie C (copulativ), P (predicativ) sau A (auxiliar).',
               ['Enunțul', 'C / P / A'], [440, 70], gol(
                   'Mihai este în bibliotecă.', 'Mihai este bibliotecar.', 'Mihai ar fi citit mai mult.',
                   'Cartea este groasă.', 'Concursul va fi joi.', 'Până diseară voi fi terminat tema.')),
             T(2, 'Numele predicativ', 'Completează.',
               ['Enunțul', 'Numele predicativ', 'Simplu / multiplu', 'Exprimat prin'], [190, 120, 100, 100], gol4(
                   'Sora mea este medic.', 'Toamna e ploioasă și rece.', 'Andrei va fi căpitanul.',
                   'Fetele au fost vesele și glumețe.'), row_h=26),
         ],
         [
             X(3, 'Acordul', [
                 'Scrie forma potrivită a adjectivului din paranteză.',
                 'a) Colegele mele sunt (harnic) __________.    b) Drumul a fost (lung) __________.',
                 'c) Florile vor fi (ofilit) __________.    d) Băieții sunt (curajos) __________.']),
             L(4, 'Ghicitori cu predicat nominal', 'Scrie două ghicitori despre obiecte din clasă; fiecare indiciu să aibă un predicat nominal (Este… E…).', 3),
         ]),

    fisa(17, 'pp. 74-75',
         'Reper (manual, pp. 74-75): Subiectul arată cine face acțiunea sau cui i se atribuie o însușire. Poate fi '
         'simplu sau multiplu, exprimat sau neexprimat: subînțeles (numit înainte, persoana a III-a) sau inclus (în '
         'desinența verbului, persoanele I și a II-a). Verbele despre vreme nu au subiect.',
         [
             T(1, 'Felul subiectului', 'Scrie subiectul și felul lui (sau „fără subiect”).',
               ['Enunțul', 'Subiectul', 'Felul'], [200, 140, 170], gol3(
                   'Ana și Dan pictează.', 'Citim o poveste.', 'Plouă de dimineață.', 'Pisica doarme.',
                   'Vii la film?')),
             X(2, 'Subînțeles sau inclus?', [
                 'Scrie felul subiectului neexprimat din propozițiile numerotate.',
                 'a) Mara a intrat în clasă ¹/ și a salutat. ²/ → ______________________',
                 'b) Mergem în parc ¹/ și ne jucăm. ²/ → ______________________',
                 'c) Profesorii au sosit ¹/ și au început ședința. ²/ → ______________________']),
         ],
         [
             T(3, 'Corect sau greșit?', 'Scrie C sau G și, dacă e greșit, forma corectă.',
               ['Enunțul', 'C / G', 'Forma corectă'], [240, 50, 220], gol3(
                   'Eu merg azi la bunici.', 'Tu ai spart geamul, tu îl plătești.',
                   'Noi și voi vor merge în excursie.', 'Mama și tata a plecat.'), row_h=26),
             L(4, 'Un cuvânt, două roluri', 'Construiește șase propoziții în care cuvintele „sare”, „joc”, „roade” să fie, pe rând, subiect și predicat.', 3),
         ]),

    fisa(18, 'pp. 76-77',
         'Reper (manual, p. 76): Complementul este partea secundară de propoziție care determină un verb și răspunde '
         'la întrebări ca: pe cine? ce? cui? la cine? la ce? despre ce? după cine? Se exprimă prin substantiv sau '
         'pronume, cu sau fără prepoziție.',
         [
             T(1, 'Găsește complementul', 'Scrie complementul și întrebarea la care răspunde.',
               ['Enunțul', 'Complementul', 'Întrebarea'], [200, 160, 150], gol3(
                   'Ana citește o carte.', 'Îl aștept pe Mihai.', 'Mă gândesc la vacanță.',
                   'Vorbim despre film.', 'I-am dat colegei un creion.')),
             X(2, 'Completează cu un complement', [
                 'a) Maria îi scrie __________________.    b) Copiii ascultă __________________.',
                 'c) Bunicul se uită la __________________.    d) Am primit un mesaj de la __________________.']),
         ],
         [
             X(3, 'Complement sau altceva?', [
                 'Subliniază complementele. Atenție: nu orice cuvânt care determină verbul e complement.',
                 '„Ioana a pregătit ghiozdanul. A pus în el caietele și penarul. I-a lăsat mamei un bilet și a plecat '
                 'la școală. Pe drum, a întâlnit-o pe Maria.”']),
             L(4, 'Ce?, cui?, pe cine?', 'Scrie trei propoziții despre un coleg, fiecare cu un complement care răspunde la altă întrebare (ce?, cui?, pe cine?). Scrie întrebarea deasupra.', 3),
         ]),

    fisa(19, 'pp. 76-77',
         'Reper (manual, pp. 76-77): Circumstanțialul arată împrejurările acțiunii și răspunde la întrebări ca: unde? '
         'pe unde? când? de când? cum? Prepoziția leagă un atribut, un complement sau un circumstanțial de cuvântul '
         'determinat; poate fi simplă (cu, în, la) sau compusă (de la, despre, pe lângă).',
         [
             T(1, 'Complement sau circumstanțial?', 'Pune întrebarea și scrie C (complement) sau Ci (circumstanțial).',
               ['Enunțul', 'Grupul de cuvinte', 'Întrebarea', 'C / Ci'], [180, 130, 120, 80], [
                   ['Ne plimbăm prin parc.', 'prin parc', '', ''],
                   ['Vorbim despre excursie.', 'despre excursie', '', ''],
                   ['Plecăm la munte.', 'la munte', '', ''],
                   ['Lucrează cu atenție.', 'cu atenție', '', ''],
                   ['Mă gândesc la tine.', 'la tine', '', ''],
                   ['În vacanță citesc.', 'în vacanță', '', '']]),
             T(2, 'Prepozițiile', 'Scrie S (simplă) sau C (compusă) și un exemplu.',
               ['Prepoziția', 'S / C', 'Exemplu'], [120, 60, 330], gol3('la', 'despre', 'pe lângă', 'cu', 'de la', 'sub')),
         ],
         [
             X(3, 'Prepoziția potrivită', [
                 'a) Am discutat ______ colegii mei.    b) Cartea stă ______ raft.',
                 'c) Totul depinde ______ tine.    d) Aștept un răspuns ______ tine.']),
             T(4, 'Același cuvânt, alte funcții', 'Scrie funcția cuvântului „școală”.',
               ['Enunțul', 'Funcția'], [300, 210], gol(
                   'Școala noastră are o grădină.', 'Ne întâlnim la școală.', 'Vorbim despre școală.',
                   'Aceasta este școala mea.', 'Curtea școlii e mare.')),
             L(5, 'Unde, când, cum?', 'Scrie o întâmplare de 4-5 propoziții cu cel puțin trei circumstanțiale (unde?, când?, cum?). Subliniază-le.', 2),
         ]),

    fisa(20, 'pp. 78-79',
         'Reper (manual, pp. 78-79): Rezumatul scris prezintă pe scurt, fără detalii nesemnificative, o înșiruire de '
         'întâmplări. Înainte de a scrie, stabilești conținutul textului (cadrul, personajele, conflictul, acțiunea, '
         'rezolvarea), împarți textul în secvențe și formulezi ideile principale.',
         [
             X(1, 'Bicicleta roșie', ['Citește textul (scris pentru fișă).', BICICLETA]),
             T(2, 'Conținutul textului', 'Completează.',
               ['', 'Din text'], [150, 360], gol(
                   'cadrul (timp, spațiu)', 'personajele', 'conflictul', 'rezolvarea'), row_h=28),
         ],
         [
             T(3, 'Secvențe și idei', 'Împarte textul în patru secvențe: scrie primul și ultimul cuvânt al fiecăreia și ideea principală.',
               ['Nr.', 'Secvența (de la… până la…)', 'Ideea principală'], [40, 190, 280], numerotat(4, 3), row_h=34),
             L(4, 'Ce eliminăm?', 'Scrie două detalii din text care nu ar trebui să apară în rezumat și explică de ce.', 2),
         ]),

    fisa(21, 'p. 79',
         'Reper (manual, p. 79): În rezumatul scris selectezi ce e important, respecți ordinea întâmplărilor, folosești '
         'indicativul prezent sau perfectul compus, la persoana a III-a, reformulezi fără comentarii și citate și '
         'legi ideile. Gerunziul concentrează informația (Văzând pata, băiatul se rușinează.).',
         [
             T(1, 'Corectează rezumatul', 'Rescrie corect fiecare fragment din rezumatul „Oracolului”.',
               ['Fragmentul greșit', 'Varianta corectă'], [250, 260], gol(
                   'Eu văd că pata îmi crește.', 'Petruța îi spune: „Ai noroc!”', 'Copiii râdeau și îl strigau.',
                   'Autorul spune că băiatul merge la spital.'), row_h=30),
             X(2, 'Cu gerunziu', [
                 'Unește propozițiile folosind un gerunziu.',
                 'a) Petruța vede pata. Petruța își pune palma pe ea. → __________________________________',
                 'b) Băiatul se rușinează. Băiatul își ascunde brațul. → __________________________________',
                 'c) Copiii râd. Copiii îl poreclesc. → __________________________________']),
         ],
         [
             T(3, 'Planul rezumatului meu', 'Scrie ideile principale în ordine, fiecare cu un cuvânt de legătură.',
               ['Nr.', 'Cuvântul de legătură', 'Ideea (persoana a III-a, prezent)'], [40, 150, 320], numerotat(5, 3),
               row_h=26),
             L(4, 'Rezumatul, în cel mult cinci rânduri', 'Rezumă în cel mult cinci rânduri „Capra cu trei iezi” de Ion Creangă sau altă poveste cunoscută, respectând regulile.', 2),
         ]),

    fisa(22, 'pp. 80-81',
         'Recapitulare (manual, pp. 44-63): timpul și spațiul, momentele subiectului, personajele (principale, '
         'secundare, episodice, colective), naratorul, rezumatul oral.',
         [
             X(1, 'Cutia de scrisori', ['Citește textul (scris pentru fișă).'] + SCRISORI),
             T(2, 'Timp, spațiu, narator', 'Completează.',
               ['', 'Din text'], [160, 350], gol(
                   'doi indici de timp', 'doi indici de spațiu', 'persoana verbelor', 'naratorul'), row_h=26),
         ],
         [
             T(3, 'Personajele', 'Scrie rolul (P, S, E) și o trăsătură, cu fapta din care reiese.',
               ['Personajul', 'Rolul', 'Trăsătura și fapta'], [110, 60, 340], gol3('Radu', 'doamna Elena', 'mama'),
               row_h=30),
             T(4, 'Momentele subiectului', 'Scrie ideea principală a fiecărui moment.',
               ['Momentul', 'Ideea principală'], [150, 360], gol(
                   'expozițiunea', 'intriga', 'desfășurarea acțiunii', 'punctul culminant', 'deznodământul'),
               row_h=26),
             L(5, 'Scrisoarea lui Radu', 'Ce i-a scris Radu poștăriței? Scrie scrisoarea (5-6 rânduri).', 2),
         ]),

    fisa(23, 'pp. 80-81',
         'Recapitulare (manual, pp. 64-79): felul verbelor, modurile și timpurile, predicatul verbal și nominal, '
         'subiectul, complementul, circumstanțialul, prepoziția, rezumatul scris.',
         [
             X(1, 'Cutia de scrisori', ['Recitește textul (scris pentru fișă).'] + SCRISORI),
             T(2, 'Verbele din text', 'Scrie modul și timpul.',
               ['Verbul', 'Modul', 'Timpul'], [170, 170, 170], gol3(
                   'trecea', 'ar fi vrut', 'să primească', 'a întrebat', 'își scriu')),
             T(3, 'Predicat verbal sau nominal?', 'Scrie PV sau PN și, pentru PN, numele predicativ.',
               ['Enunțul', 'PV / PN', 'Numele predicativ'], [260, 70, 180], gol3(
                   'Doamna Elena este poștăriță.', 'Radu aștepta la poartă.', 'Scrisoarea a fost o surpriză.',
                   'Poștărița era în sat.', 'Băiatul va fi fericit.')),
         ],
         [
             T(4, 'Părțile de propoziție', 'Scrie funcția și întrebarea (pentru părțile secundare).',
               ['Cuvântul (din enunț)', 'Funcția', 'Întrebarea'], [250, 150, 110], gol3(
                   'Radu (Radu a lăsat plicul în cutie.)', 'plicul (același enunț)', 'în cutie (același enunț)',
                   'poștăriței (Radu i-a scris poștăriței.)', 'subiectul lui „a clătinat din cap”')),
             L(5, 'Rezumatul scris', 'Redactează rezumatul textului „Cutia de scrisori” în 6-8 rânduri, respectând regulile rezumatului.', 3),
         ]),
]
