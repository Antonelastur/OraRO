# Fișe de exerciții, clasa a VIII-a, Unitatea II „Cum sunt ceilalți?”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 8, pp. 52-95). Textele
# fără autor (enunțuri, replici, fragmente) sunt create pentru fișe; citatele scurte
# sunt doar din autori în domeniul public (Victor Ion Popa, Ioan Slavici); cronica lui
# Ștefan Popa și fragmentul din Lessing (traducerea din manual) sunt doar parafrazate.
# Lecția 23 (evaluarea) nu are fișă. Rezolvările: notite-profesor/clasa-8/unitatea-2/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-8-unitatea-2.py

SUB = 'Clasa a VIII-a · Unitatea II, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 8, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-8/unitatea-2/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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

FISE = [
    fisa(1, 'pp. 52-57',
         'Reper (manual, pp. 52-57): În comedia lui Victor Ion Popa, doi vecini și prieteni, românul Take și evreul '
         'Ianke, se opun căsătoriei copiilor lor, Ionel și Ana; turcul Cadâr, al treilea vecin, îi ajută pe tineri și '
         'îi împacă pe toți.',
         [
             T(1, 'Informațiile esențiale', 'Răspunde scurt, după text.',
               ['Întrebarea', 'Răspunsul'], [260, 250], gol(
                   'Ce mărfuri vând Take și Ianke?', 'Ce vinde Cadâr?', 'Unde studiază Ana și Ionel?',
                   'Ce le anunță tinerii părinților?', 'Ce șiretlic folosește Cadâr?', 'Unde au stat tinerii „fugiți”?',
                   'Ce nume propune Cadâr pentru prăvălie?')),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după text.', AF, [440, 70], gol(
                 'Casele lui Take și Ianke sunt zugrăvite la fel.', 'La începutul piesei, Cadâr sforăie.',
                 'Ianke aruncă un calup de săpun în Cadâr.', 'Ana nu își văzuse tatăl de doi ani.',
                 'Take și Ianke acceptă imediat căsătoria.', 'La final, Take și Ianke vor deveni bunici.')),
         ],
         [
             T(3, 'Cuvinte de altădată', 'Scrie sensul și un cuvânt de azi.',
               ['Cuvântul', 'Sensul', 'Cuvântul de azi'], [110, 250, 150], gol3(
                   'prăvălie', 'coloniale', 'vipie', 'flașnetă', 'calup', 'vădan'), row_h=24),
             L(4, 'Personajul meu preferat', 'Scrie 5-6 rânduri: care personaj ți-a plăcut cel mai mult și de ce.', 2),
         ], titlu='Take, Ianke și Cadâr de Victor Ion Popa'),

    fisa(2, 'pp. 58-59',
         'Reper (manual, pp. 58-59): Textul dramatic se împarte în acte (cifre romane) și scene (cifre arabe) și are '
         'indicații scenice (externe și interne) și replici. În didascalii și în replici se combină structuri textuale. '
         'Comedia stârnește râsul prin înfățișare, comportament, limbaj, situații.',
         [
             T(1, 'Indicațiile scenice', 'Scrie E (externă) sau I (internă) și ce indică.',
               ['Indicația din piesă', 'E / I', 'Ce indică'], [230, 60, 220], gol3(
                   'PERSOANELE: CADÂR, IANKE, TAKE...', '„E vreme de vară.”', 'SCENA 7', '(somnoros și lehămețit de căldură)',
                   '(Ia o bucată de săpun...)', '(se aude caterinca)', '(Pleacă.)')),
             T(2, 'Structura textuală', 'Scrie: narativă, descriptivă, dialogată sau explicativă.',
               ['Fragmentul din piesă', 'Structura'], [370, 140], gol(
                   'decorul actului I (casele și culorile lor)', 'cearta lui Take cu Ianke despre căldură',
                   'Cadâr își povestește iubirea din tinerețe', 'Ianke explică de ce vorbește atât (ca peștele)',
                   'rezumatele dintre paranteze drepte')),
         ],
         [
             T(3, 'Ce stârnește râsul?', 'Scrie un exemplu din piesă pentru fiecare procedeu.',
               ['Procedeul comic', 'Exemplul din piesă'], [170, 340], gol(
                   'limbajul', 'comportamentul', 'situația', 'înfățișarea'), row_h=28),
             L(4, 'Scena mea', 'Scrie o scenă scurtă (4 replici) între doi vecini care se ceartă din nimic, cu trei didascalii.', 3),
         ]),

    fisa(3, 'pp. 60-62',
         'Reper (manual, pp. 60-61): Timpul teatral e durata reprezentației și momentul ficțiunii; spațiul e scena și '
         'lumea imaginată. Acțiunea duce de la situația inițială la cea finală, prin conflict. Personajul e caracterizat '
         'direct (autor, alte personaje, autocaracterizare) și indirect (fapte, gesturi, limbaj).',
         [
             T(1, 'Cele trei acte', 'Completează, după indicațiile scenice și după text.',
               ['Actul', 'Locul', 'Momentul', 'Ce se întâmplă'], [60, 150, 100, 200], gol4('I', 'II', 'III'), row_h=44),
             T(2, 'Relațiile', 'Scrie relația: prietenie, iubire, rudenie, complicitate, antipatie.',
               ['Perechea', 'Relația'], [300, 210], gol(
                   'Take și Ianke', 'Ana și Ionel', 'Ianke și Ana', 'Cadâr și tinerii', 'Take și Ionel')),
         ],
         [
             T(3, 'Mijloacele de caracterizare', 'Scrie trăsătura și mijlocul de caracterizare.',
               ['Fragmentul', 'Trăsătura', 'Mijlocul'], [220, 140, 150], gol3(
                   'negustorii dormitează în căldură', 'Take e „deștept pe dinăuntru”',
                   '„Cadâr puțin vorbeștem”', 'Ianke aruncă un săpun în Cadâr'), row_h=28),
             L(4, 'Fișa lui Cadâr', 'Scrie 5-6 rânduri despre Cadâr: cine e, ce face, o trăsătură, o replică relevantă.', 2),
         ]),

    fisa(4, 'pp. 63-64',
         'Reper (manual, pp. 63-64): Comedia e o pledoarie pentru prietenie, iubire și toleranță; Take și Ianke seamănă '
         'ca-n oglindă, Cadâr e omul soluțiilor, iar trenul, copacul și numele noii prăvălii au sensuri simbolice.',
         [
             T(1, 'Simboluri', 'Scrie o semnificație posibilă.',
               ['Elementul', 'Ce poate simboliza'], [190, 320], gol(
                   'trenul', 'copacul bătrân din actul III', 'lavița de sub copac', 'prăvălia „La Ierusalim”',
                   'gardul care dispare în actul III'), row_h=26),
             T(2, 'În oglindă', 'Compară, după indicațiile scenice.',
               ['Aspectul', 'La Take', 'La Ianke'], [150, 180, 180], gol3(
                   'zidurile casei', 'tabla de pe acoperiș', 'firma', 'marfa', 'copilul')),
         ],
         [
             T(3, 'De acord sau nu?', 'Scrie DA sau NU și un argument din piesă.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [200, 60, 250], gol3(
                   'Prejudecățile pot despărți doi prieteni.', 'Cadâr îi ajută pe tineri din interes.',
                   'Iubirea e mai tare decât gura lumii.'), row_h=40),
             L(4, 'Împreună, nu alături', 'Scrie 6-8 rânduri: ce înseamnă să trăiești împreună cu ceilalți, nu doar alături '
               'de ei? Dă un exemplu din piesă.', 3),
         ]),

    fisa(5, 'pp. 65-67',
         'Reper (manual, p. 67): Cronica de spectacol e un text nonliterar de opinie, scris după premieră; comentează '
         'textul, regia, scenografia, jocul actorilor, muzica, atmosfera și se încheie, de obicei, cu o apreciere.',
         [
             T(1, 'Fapt sau opinie?', 'Scrie F (fapt) sau O (opinie), după cronica lui Ștefan Popa.',
               ['Afirmația (după cronică)', 'F / O'], [440, 70], gol(
                   'Spectacolul s-a jucat la Teatrul de Stat din Pitești.', 'Regia a făcut din acte trei planuri în adâncime.',
                   'Interpretul lui Ianke a creat o foarte bună mască.', 'Trei actori titulari au fost înlocuiți.',
                   'Ritmul a arătat un conflict static.', 'Decorul a fost realizat de Lucu Andreescu.')),
             T(2, 'Structura cronicii', 'Scrie ce conține fiecare parte a cronicii.',
               ['Partea', 'Ce conține'], [150, 360], gol(
                   'introducerea', 'rezumatul', 'regia și decorul', 'jocul actorilor', 'încheierea'), row_h=26),
         ],
         [
             T(3, 'Planul unei cronici', 'Plănuiește cronica unui spectacol sau a unui film văzut.',
               ['Rubrica', 'Ce scriu'], [170, 340], gol(
                   'titlul cronicii', 'spectacolul, regizorul', 'un punct tare', 'un punct slab', 'aprecierea (1-5) și de ce'),
               row_h=26),
             L(4, 'Un paragraf de cronică', 'Scrie paragraful despre jocul actorilor (5-6 rânduri).', 2),
         ], titlu='Cronica de spectacol'),

    fisa(6, 'pp. 68-69',
         'Reper (manual, p. 68): În „Nathan Înțeleptul” de Lessing, Nathan îi răspunde sultanului Saladin cu parabola '
         'celor trei inele: un tată își iubește la fel cei trei fii și le dă trei inele identice, încât cel adevărat nu '
         'mai poate fi deosebit.',
         [
             T(1, 'Parabola, pas cu pas', 'Numerotează întâmplările (1-6), în ordinea din parabolă.',
               ['Întâmplarea', 'Nr.'], [440, 70], gol(
                   'Tatăl comandă în taină două inele identice.', 'Un om din răsărit primește un inel minunat.',
                   'Fiecare fiu primește un inel; tatăl moare.', 'Inelul trece mereu la fiul cel mai iubit.',
                   'Frații se ceartă: care inel e cel adevărat?', 'Inelul ajunge la un tată cu trei fii iubiți la fel.')),
             T(2, 'Ce simbolizează', 'Scrie o semnificație posibilă.',
               ['Elementul', 'Ce poate simboliza'], [190, 320], gol(
                   'inelul', 'cei trei fii', 'inelele identice', 'Ierusalimul', 'tatăl'), row_h=26),
         ],
         [
             T(3, 'Două piese, un mesaj', 'Compară.',
               ['Criteriul', 'Take, Ianke și Cadâr', 'Nathan Înțeleptul'], [120, 195, 195], gol3(
                   'tema', 'locul', 'cine aduce împăcarea', 'mesajul'), row_h=34),
             L(4, 'Postarea mea', 'Scrie o postare de blog (5-6 rânduri): care inel crezi că e adevărat și de ce?', 2),
         ], titlu='Nathan Înțeleptul (fragment)'),

    fisa(7, 'pp. 70-71',
         'Reper (manual, p. 71): Comunitățile multiculturale conviețuiesc fără schimburi culturale („alături”); cele '
         'interculturale interacționează și își respectă valorile („împreună”). Relațiile culturale constructive păstrează '
         'identitatea și preiau elemente de la ceilalți.',
         [
             T(1, 'Multicultural sau intercultural?', 'Scrie M (multicultural) sau I (intercultural).',
               ['Situația (creată pentru fișă)', 'M / I'], [440, 70], gol(
                   'Vecinii de etnii diferite trăiesc în pace, dar nu se vizitează.',
                   'Copiii de etnii diferite se joacă și sărbătoresc împreună.',
                   'Un compozitor culege colinde de la alt popor și le folosește.',
                   'Fiecare comunitate are școala ei, fără nimic în comun.',
                   'La festival, comunitățile își prezintă și își învață tradițiile.')),
             T(2, 'Slavici și Bartók', 'Scrie A sau F, după textele de la p. 70.', AF, [440, 70], gol(
                 'În Șiria copilăriei lui Slavici trăiau oameni de multe etnii.', 'Mama îl îndemna să mănânce din blidul străinilor.',
                 'Béla Bartók s-a născut la Sânnicolau Mare.', 'Bartók a cules colinde românești.',
                 'Suita lui are la bază melodii populare de vioară.', 'Bartók și Enescu nu s-au cunoscut.')),
         ],
         [
             T(3, 'Comunitatea mea', 'Completează, din experiența ta.',
               ['', 'Exemplul meu'], [230, 280], gol(
                   'o tradiție a altei comunități pe care o cunosc', 'un cuvânt împrumutat de la alt popor',
                   'o mâncare adoptată de la alții', 'o sărbătoare la care participăm toți'), row_h=26),
             L(4, 'De la „alături” la „împreună”', 'Scrie 5-6 rânduri despre un gest care ar apropia două comunități.', 2),
         ], titlu='Relații culturale constructive'),

    fisa(8, 'pp. 72-73',
         'Reper (manual, pp. 72-73): Flexibilitatea, asertivitatea și disponibilitatea pentru negociere favorizează '
         'comunicarea. Asertivitatea înseamnă să-ți spui clar și ferm dorințele, fără agresivitate. Atitudini opuse: '
         'pasivitatea, agresivitatea, pasivitatea agresivă, manipularea.',
         [
             T(1, 'Ce atitudine?', 'Scrie: asertivă, pasivă, agresivă, pasiv-agresivă sau manipulare.',
               ['Replica (scrisă pentru fișă)', 'Atitudinea'], [360, 150], gol(
                   '„Nu-ți pot împrumuta căștile acum; le folosesc.”', '„Dă-mi căștile sau le iau singur!”',
                   '„Bine, ia-le...” (deși are nevoie de ele)', '„Dacă ții la mine, mi le dai!”',
                   '„Nu mă supăr... dar nici nu te mai ajut.”'), row_h=24),
             T(2, 'Rescrie asertiv', 'Scrie o replică asertivă pentru fiecare situație.',
               ['Situația', 'Replica asertivă'], [190, 320], gol(
                   'Colegul îți ia pixul fără să ceară.', 'Prietenul întârzie mereu.', 'Fratele îți intră în cameră fără să bată.'),
               row_h=36),
         ],
         [
             T(3, 'Negocierea', 'Trei prieteni vor sâmbătă activități diferite. Găsește o soluție acceptată de toți.',
               ['', 'Propunerea'], [170, 340], gol(
                   'Ana vrea la film.', 'Dan vrea cu bicicleta.', 'Ioana vrea jocuri de societate.', 'soluția comună'), row_h=26),
             L(4, 'Asertiv în viața mea', 'Scrie 4-5 rânduri despre o situație în care ai comunicat asertiv.', 2),
         ]),

    fisa(9, 'pp. 74-75',
         'Reper (manual, pp. 74-75): În construcția activă, subiectul face acțiunea; în cea pasivă, o suportă. Pasivul '
         'se formează cu auxiliarul „a fi” + participiul acordat cu subiectul; autorul acțiunii e complementul de agent '
         '(„de”, „de către”). La transformare, complementul direct devine subiect, iar subiectul devine complement de agent.',
         [
             T(1, 'Activ sau pasiv?', 'Scrie A sau P și complementul de agent, dacă există.',
               ['Enunțul (scris pentru fișă)', 'A / P', 'Complementul de agent'], [240, 60, 210], gol3(
                   'Regizorul alege actorii.', 'Actorii sunt aleși de regizor.', 'Scena a fost luminată de tehnician.',
                   'Publicul a aplaudat îndelung.', 'Biletele vor fi vândute de către casieră.', 'Afișele au fost lipite ieri.')),
             T(2, 'Transformă', 'Trece enunțul la cealaltă construcție.',
               ['Enunțul', 'Transformarea'], [230, 280], gol(
                   'Ana a scris scenariul.', 'Copiii vor picta decorul.', 'Bunica coase costumele.', 'Poezia a fost recitată de Mihai.'),
               row_h=26),
         ],
         [
             T(3, 'Construcție pasivă?', 'Scrie DA dacă enunțul conține o construcție pasivă.',
               ['Enunțul', 'DA / NU'], [420, 90], gol(
                   'Ușa este deschisă de portar.', 'Cerul este înnorat.', 'Tema a fost corectată de profesoară.',
                   'Florile sunt ofilite.')),
             T(4, 'Complementul de agent', 'Completează cu un complement de agent exprimat prin partea de vorbire cerută.',
               ['Enunțul', 'Partea de vorbire', 'Completarea'], [220, 120, 170], [
                   ['Tabloul a fost pictat ...', 'substantiv', ''], ['Piesa va fi jucată ...', 'pronume', ''],
                   ['Mesajul a fost trimis ...', 'numeral', '']], row_h=26),
         ], titlu='Construcțiile active și pasive'),

    fisa(10, 'pp. 76-77',
         'Reper (manual, pp. 76-77): Predicatul verbal arată ce face subiectul (verb predicativ, inclusiv pasiv, '
         'locuțiune verbală, interjecție predicativă). Predicatul nominal arată o însușire: verb copulativ (a fi, a '
         'deveni, a ajunge, a ieși, a se face, a rămâne, a însemna, a părea) + nume predicativ.',
         [
             T(1, 'Verbal sau nominal?', 'Scrie predicatul și felul lui (PV sau PN).',
               ['Enunțul (scris pentru fișă)', 'Predicatul', 'PV / PN'], [240, 170, 100], gol3(
                   'Ana cântă la pian.', 'Ana este talentată.', 'Cadâr a devenit asociat.', 'Și-a luat inima în dinți.',
                   'Uite trenul!', 'Scena a fost repetată de actori.', 'Florile sunt ofilite.'), row_h=20),
             T(2, 'Numele predicativ', 'Scrie numele predicativ și partea de vorbire prin care se exprimă.',
               ['Enunțul', 'Numele predicativ', 'Partea de vorbire'], [210, 120, 180], gol3(
                   'Rochia ei este de mătase.', 'Adevărul este altul.', 'Ei sunt trei.', 'Visul lui este de a juca.',
                   'Caietul lui este altfel.', 'Amintirile păreau triste.')),
         ],
         [
             T(3, 'Același verb, două funcții', 'Scrie câte un enunț cu predicat verbal și unul cu predicat nominal.',
               ['Verbul', 'Cu predicat verbal', 'Cu predicat nominal'], [90, 210, 210], gol3('a fi', 'a rămâne', 'a ajunge'),
               row_h=36),
             L(4, 'Un personaj', 'Descrie în 4-5 rânduri un personaj din comedie, cu două predicate verbale și două nominale. '
               'Subliniază-le.', 2),
         ], titlu='Predicatul'),

    fisa(11, 'pp. 78-79',
         'Reper (manual, pp. 78-79): În construcțiile cu pronume reflexive, pronumele poate fi fără funcție (face parte '
         'din verb: se gândește) sau cu funcție: complement direct, indirect, posesiv, atribut în dativ. Proba: înlocuirea '
         'cu un pronume personal sau reluarea prin forma accentuată. Construcția pasiv-reflexivă admite complement de agent.',
         [
             T(1, 'Are funcție sau nu?', 'Scrie funcția pronumelui reflexiv sau „fără funcție”.',
               ['Enunțul (scris pentru fișă)', 'Pronumele', 'Funcția'], [230, 80, 200], gol3(
                   'Ana se gândește la tine.', 'Copilul se spală.', 'Își cumpără un bilet.', 'Și-a pregătit costumul.',
                   'Mihai se teme de întuneric.', 'Se uită pe fereastră.', 'Ei se salută.'), row_h=20),
             T(2, 'Pasiv-reflexivă?', 'Scrie DA dacă e o construcție pasiv-reflexivă.',
               ['Enunțul', 'DA / NU'], [420, 90], gol(
                   'Biletele se vând la casă.', 'Fetele se întâlnesc la teatru.', 'Scenele se repetă de actori.',
                   'Bunicul se odihnește.')),
         ],
         [
             T(3, 'Proba înlocuirii', 'Înlocuiește reflexivul cu un pronume personal și reia-l prin forma accentuată; '
               'dacă nu se poate, scrie „imposibil”.',
               ['Enunțul', 'Cu pronume personal', 'Cu forma accentuată'], [150, 180, 180], gol3(
                   'Ana se laudă.', 'Își pregătește un ceai.', 'Se gândește la mare.'), row_h=30),
             L(4, 'Întâmplarea mea', 'Scrie 5-6 rânduri despre o întâmplare, cu patru construcții reflexive. Subliniază-le '
               'și notează dacă pronumele are funcție.', 2),
         ], titlu='Construcțiile cu pronume reflexive'),

    fisa(12, 'pp. 80-81',
         'Reper (manual, pp. 80-81): Verbele impersonale nu au ca autor o persoană. Unele construcții sunt mereu '
         'impersonale (tună, îmi pasă, mă cheamă, mi-e dor, îmi place), altele devin impersonale prin „se” (se aleargă, '
         'se știe) sau prin auxiliarul „a fi” (este știut). Unele au subiect, altele nu.',
         [
             T(1, 'Cu subiect sau fără?', 'Scrie dacă are subiect și care e acesta.',
               ['Enunțul (scris pentru fișă)', 'Are subiect?', 'Subiectul'], [240, 100, 170], gol3(
                   'Plouă de dimineață.', 'Îmi place teatrul.', 'Mi-e dor de bunici.', 'Mă doare capul.',
                   'Îi pasă de prieteni.', 'Este bine a citi.', 'Se înserează.'), row_h=20),
             T(2, 'În construcție impersonală', 'Transformă enunțul, ca în modelul: El ascultă muzică. → Se ascultă muzică.',
               ['Construcția personală', 'Construcția impersonală'], [255, 255], gol(
                   'Elevii cântă un colind.', 'Ei află vestea.', 'Oamenii vorbesc mult.', 'Toți știu rezultatul.')),
         ],
         [
             T(3, 'Mereu sau în context?', 'Scrie M (mereu impersonală) sau C (impersonală în context).',
               ['Construcția', 'M / C'], [420, 90], gol('tună', 'burnițează', 'îmi pasă', 'se citește', 'se aude', 'mă cheamă')),
             L(4, 'Regulile clasei', 'Scrie cinci reguli ale clasei, cu construcții impersonale (de exemplu: „Nu se aleargă pe hol.”).', 2),
         ], titlu='Construcțiile impersonale'),

    fisa(13, 'pp. 82-83',
         'Reper (manual, pp. 82-83): Subiectul arată cine face acțiunea sau cui i se atribuie o însușire. Poate fi '
         'exprimat (simplu sau multiplu) sau neexprimat (inclus, subînțeles) și se exprimă prin substantiv, pronume, '
         'numeral, verb la infinitiv, gerunziu, supin. Nu se desparte prin virgulă de predicat.',
         [
             T(1, 'Subiectul', 'Scrie subiectul și felul lui.',
               ['Enunțul (scris pentru fișă)', 'Subiectul', 'Felul'], [260, 110, 140], gol3(
                   'Take și Ianke dorm la umbră.', 'Am citit piesa.', 'Cadâr sforăie. Apoi se trezește. (al doilea)',
                   'Mi-e dor de mare.', 'Tu vei juca rolul Anei.', 'Plouă.')),
             T(2, 'Partea de vorbire', 'Scrie subiectul și partea de vorbire prin care se exprimă.',
               ['Enunțul', 'Subiectul', 'Partea de vorbire'], [230, 110, 170], gol3(
                   'Nimeni n-a venit.', 'Al doilea a câștigat.', 'A minți nu e frumos.', 'Ai noștri au sosit.',
                   'Dumnealui e regizorul.', 'Aducerile-aminte ne încălzesc.', 'De citit e ușor.'), row_h=20),
         ],
         [
             T(3, 'Completează subiectul', 'Completează cu un subiect exprimat prin partea de vorbire cerută.',
               ['Enunțul', 'Partea de vorbire', 'Subiectul tău'], [200, 170, 140], [
                   ['... au aplaudat.', 'numeral cardinal', ''], ['... vine cu noi?', 'pronume interogativ', ''],
                   ['... e o plăcere.', 'verb la infinitiv', ''], ['... au fost de acord.', 'pronume nehotărât', '']]),
             T(4, 'Fără virgulă', 'Corectează punctuația.',
               ['Enunțul greșit', 'Varianta corectă'], [255, 255], gol(
                   'Actorii, au intrat pe scenă.', 'Regizorul, e mulțumit.', 'Spectatorii din sală, au râs.')),
         ], titlu='Subiectul'),

    fisa(14, 'pp. 84-85',
         'Reper (manual, pp. 84-85): Construcția incidentă e o comunicare suplimentară, fără legătură sintactică cu '
         'enunțul: cuvânt, grup de cuvinte, propoziție, frază (adresări, verbe de declarație, adverbe de probabilitate, '
         'stări, automatisme verbale). Se desparte prin virgule, linii de pauză sau paranteze.',
         [
             T(1, 'Găsește incidenta', 'Scrie construcția incidentă și din ce e alcătuită.',
               ['Enunțul (scris pentru fișă)', 'Construcția incidentă', 'Alcătuirea'], [230, 150, 130], gol3(
                   'Vai, am întârziat!', 'Colegul meu, băiat de treabă, m-a ajutat.', 'Bunicul, Dumnezeu să-l ierte, era actor.',
                   '— Vin și eu, a spus Ana.', 'Va ploua, probabil, diseară.', 'Piesa – nu știu dacă ți-am spus – s-a amânat.'),
               row_h=26),
             T(2, 'Ce exprimă?', 'Scrie ce exprimă construcția incidentă.',
               ['Enunțul (scris pentru fișă)', 'Ce exprimă'], [320, 190], gol(
                   'Dragă Ana, vino!', 'Va veni, fără îndoială.', 'Au fost, pe undeva, treizeci de spectatori.',
                   'Aoleu, ce frig!', 'Are, ca să zic așa, talent.', '— Vino! a strigat mama.')),
         ],
         [
             T(3, 'Punctuația', 'Rescrie enunțul cu punctuația potrivită.',
               ['Enunțul', 'Varianta corectă'], [230, 280], gol(
                   'Ana nu uita biletele!', 'Maria sper că nu te superi a luat rolul.', 'Va veni desigur și Dan.',
                   'Zău ai jucat minunat!'), row_h=26),
             L(4, 'Topul meu', 'Notează cinci construcții incidente pe care le auzi des și spune ce exprimă fiecare.', 2),
         ], titlu='Construcțiile incidente'),

    fisa(15, 'pp. 86-87',
         'Reper (manual, pp. 86-87): Fraza are atâtea propoziții câte predicate (și subînțelese). Coordonarea leagă '
         'propoziții de același fel prin juxtapunere (virgulă) sau joncțiune: conjuncții copulative (și, nici), '
         'disjunctive (sau, ori, fie), adversative (dar, iar, însă, ci), concluzive (deci) și locuțiuni conjuncționale.',
         [
             T(1, 'Propoziții și coordonare', 'Scrie numărul de propoziții și mijlocul coordonării.',
               ['Fraza (scrisă pentru fișă)', 'Nr.', 'Mijlocul (conjuncția, felul)'], [250, 50, 210], gol3(
                   'Ana cântă, Ionel ascultă.', 'Take doarme și Ianke citește ziarul.', 'Mergem la teatru sau rămânem acasă?',
                   'Am învățat replicile, dar am uitat una.', 'A plouat mult, deci meciul s-a amânat.',
                   'Regizorul era celebru, iar scenografa, debutantă.')),
             T(2, 'Felul conjuncției', 'Scrie felul conjuncției sau al locuțiunii conjuncționale.',
               ['Conjuncția', 'Felul'], [255, 255], gol(
                   'și', 'nici', 'ori', 'însă', 'ci', 'deci', 'precum și', 'numai că', 'așa că'), row_h=20),
         ],
         [
             T(3, 'Virgula', 'Pune virgula unde e nevoie.',
               ['Enunțul', 'Varianta corectă'], [255, 255], gol(
                   'Am citit piesa dar n-am văzut spectacolul.', 'Fie vii cu noi fie rămâi.', 'Nu cântă nici nu dansează.',
                   'A învățat mult deci va reuși.'), row_h=26),
             L(4, 'Frazele mele', 'Scrie trei fraze despre o repetiție, cu coordonare copulativă, adversativă și disjunctivă.', 2),
         ], titlu='Fraza. Coordonarea'),

    fisa(16, 'pp. 88-89',
         'Reper (manual, pp. 88-89): Propoziția principală are sens de sine stătător; cea secundară depinde de un '
         'element regent. Subordonatele sunt introduse prin conjuncții și locuțiuni conjuncționale subordonatoare, prin '
         'pronume și adjective relative sau nehotărâte, prin adverbe relative sau nehotărâte.',
         [
             T(1, 'Propoziția secundară', 'Scrie propoziția secundară și elementul de relație (partea de vorbire).',
               ['Fraza (scrisă pentru fișă)', 'Propoziția secundară', 'Elementul de relație'], [190, 160, 160], gol3(
                   'Ianke spune că fata e frumoasă.', 'Am văzut băiatul care a jucat rolul.', 'Nu știu unde e sala.',
                   'Vom merge dacă nu plouă.', 'Dăruiește oricui cere.', 'Am venit pentru că m-ai chemat.'), row_h=26),
             T(2, 'Conjuncție sau locuțiune?', 'Scrie C (conjuncție) sau L (locuțiune conjuncțională).',
               ['Cuvântul', 'C / L'], [420, 90], gol(
                   'că', 'deși', 'fiindcă', 'pentru că', 'cu toate că', 'până când', 'să', 'dacă', 'în timp ce'), row_h=20),
         ],
         [
             T(3, 'Cu subordonată', 'Transformă cele două propoziții într-o frază cu o subordonată.',
               ['Propozițiile', 'Fraza cu subordonată'], [210, 300], gol(
                   'Trenul întârzie; e ceață.', 'Am învățat; am luat notă bună.', 'Plouă; ieșim totuși.',
                   'Mi-a dat o carte; o citesc acum.'), row_h=26),
             L(4, 'Analiza', 'Analizează fraza (scrisă pentru fișă): „Ianke nu știe ce să mai spună când Ana îi zâmbește.” '
               'Desparte-o în propoziții, scrie felul lor și elementele de relație.', 2),
         ], titlu='Fraza. Subordonarea'),

    fisa(17, 'pp. 90-91',
         'Reper (manual, pp. 90-91): Elipsa omite secvențe recuperabile din context: elipsa verbală (predicatul), cea '
         'nominală (substantivul), propozițiile fragmentare (în coordonare, în răspunsuri, prin „da”, „nu”). În scris, '
         'elipsa verbală se marchează prin virgulă sau linie de pauză; în vorbire, prin pauză.',
         [
             T(1, 'Ce s-a omis?', 'Scrie ce s-a omis și tipul elipsei.',
               ['Enunțul (scris pentru fișă)', 'Ce s-a omis', 'Tipul'], [240, 130, 140], gol3(
                   'Eu merg la teatru, iar tu, la film.', 'Mie îmi plac comediile, lui, dramele.',
                   'Am cumpărat o carte de poezie, Ana, de povești.', '— Când e premiera? — Vineri.',
                   '— Vii la repetiție? — Da.'), row_h=26),
             T(2, 'Câte propoziții?', 'Scrie numărul de propoziții.',
               ['Enunțul', 'Nr.'], [440, 70], gol(
                   'Ana a fost prima, Dan, al doilea.', 'Sala e mare, scena – nouă, luminile – moderne.',
                   'Eu am citit piesa și tu, nu.', 'Mergem la film sau la teatru?')),
         ],
         [
             T(3, 'Marchează elipsa', 'Rescrie cu virgula sau linia de pauză potrivită.',
               ['Enunțul', 'Varianta corectă'], [255, 255], gol(
                   'Eu am ales rolul lui Take iar Ionuț pe al lui Ianke.', 'Azi repetăm actul I mâine actul II.',
                   'Regizorul e mulțumit actorii obosiți.', 'Ea citește comedii el drame.'), row_h=28),
             L(4, 'Dialogul meu', 'Scrie un dialog de 4-5 replici, cu trei tipuri diferite de elipsă.', 2),
         ], titlu='Enunțuri eliptice. Punctuația'),

    fisa(18, 'pp. 92-93',
         'Reper (manual, pp. 92-93): Cronica de film se scrie după vizionare și comentează regia, scenariul, jocul '
         'actorilor, muzica, efectele; nu dezvăluie finalul. Înainte de redactare îți notezi răspunsurile la întrebările '
         'Ce?, Când și unde?, Cine?, Cum?',
         [
             T(1, 'Cele cinci paragrafe', 'Scrie ce conține fiecare paragraf al cronicii (p. 93).',
               ['Paragraful', 'Ce conține'], [120, 390], gol(
                   'paragraful 1', 'paragraful 2', 'paragraful 3', 'paragraful 4', 'paragraful 5'), row_h=26),
             T(2, 'Voie sau nu?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Cronica dezvăluie finalul filmului.', 'Autorul își poate spune părerea.',
                 'Pot prelua păreri ale altora fără ghilimele.', 'Precizez sursa citatelor.',
                 'Titlul cronicii conține titlul filmului.', 'Cronica se scrie înainte de vizionare.')),
         ],
         [
             T(3, 'Notițele mele', 'Notează, pentru scurtmetrajul vizionat.',
               ['Întrebarea', 'Răspunsul meu'], [150, 360], gol(
                   'Ce? (titlul, genul)', 'Cine? (regizorul, personajele)', 'Când și unde? (studio, an, loc)',
                   'Cum? (impresia mea)', 'mesajul filmului'), row_h=28),
             L(4, 'Primul paragraf', 'Scrie paragraful cu informațiile generale despre film (4-5 rânduri).', 2),
         ], titlu='Cronica de film (1/2)'),

    fisa(19, 'pp. 92-93',
         'Reper (manual, p. 93): Cronica se poate redacta de mână (lizibil) sau la calculator (reguli de tehnoredactare). '
         'Etica redactării cere originalitate: părerile altora se citează între ghilimele, cu sursa.',
         [
             T(1, 'Corect sau plagiat?', 'Scrie C (corect) sau P (plagiat).',
               ['Situația', 'C / P'], [440, 70], gol(
                   'Copiez un paragraf de pe internet și îl semnez eu.', 'Citez o frază între ghilimele, cu sursa.',
                   'Rezum cu vorbele mele ideea unui critic, numindu-l.', 'Traduc o cronică străină și o prezint ca a mea.',
                   'Folosesc structura de paragrafe din manual.')),
             T(2, 'Verific cronica', 'Scrie DA sau NU pentru cronica ta.',
               ['Întrebarea', 'DA / NU'], [420, 90], gol(
                   'Titlul conține titlul filmului?', 'Am evitat să dezvălui finalul?', 'Mi-am argumentat părerea?',
                   'Am precizat mesajul filmului?', 'Am citat corect, cu sursa?', 'Am verificat ortografia?',
                   'Textul e bine așezat în pagină?'), row_h=20),
         ],
         [
             T(3, 'Revizuiesc', 'Notează trei modificări făcute în cronica ta.',
               ['Modificarea', 'Înainte', 'După'], [150, 180, 180], gol3(
                   'o frază reformulată', 'o repetiție eliminată', 'un semn de punctuație'), row_h=34),
             L(4, 'Titluri incitante', 'Propune trei titluri pentru cronica ta și subliniază-l pe cel ales.', 1),
         ], titlu='Cronica de film (2/2)'),

    fisa(20, 'pp. 94-95',
         'Recapitulare (manual, pp. 52-73): textul dramatic, indicațiile scenice, timpul, spațiul, acțiunea, conflictul, '
         'personajul și caracterizarea, cronica de spectacol, relațiile interculturale, atitudinile comunicative.',
         [
             X(1, 'Seara, în curte', [
                 'Citește fragmentul (scris pentru fișă).',
                 'Personaje: MIHAI, 14 ani; BUNICUL. Decor: o curte de țară, seara. Un felinar aprins pe prispă.',
                 'MIHAI (trântind ghiozdanul): Nu mai merg la școala aceea! Toți râd de accentul meu.',
                 'BUNICUL (calm, fără să ridice ochii din ziar): Toți? Și Radu, prietenul tău?',
                 'MIHAI (după o pauză): Radu... nu. Radu m-a apărat.',
                 'BUNICUL (zâmbind, împăturește ziarul): Atunci nu toți. Mâine îl chemi la noi, la plăcinte.',
                 'Mihai se așază lângă bunic. Se aude, departe, un tren.']),
             T(2, 'Recunoaște', 'Completează după fragment.',
               ['', 'Din fragment'], [210, 300], gol(
                   'o indicație externă', 'o indicație de gest', 'o indicație de ton', 'un sunet', 'conflictul',
                   'o trăsătură a bunicului și mijlocul', 'atitudinea comunicativă a bunicului'), row_h=24),
         ],
         [
             T(3, 'Față în față cu comedia', 'Compară fragmentul cu „Take, Ianke și Cadâr”.',
               ['Criteriul', 'Fragmentul', 'Comedia'], [130, 190, 190], gol3(
                   'tema', 'cine aduce împăcarea', 'trenul'), row_h=36),
             L(4, 'A doua zi', 'Scrie 5-6 rânduri: ce ar putea face Mihai a doua zi la școală? Include o replică asertivă.', 2),
         ], titlu='Recapitulare (1/3)'),

    fisa(21, 'pp. 94-95',
         'Recapitulare (manual, pp. 74-91): construcțiile active și pasive, predicatul, construcțiile reflexive și '
         'impersonale, subiectul, construcțiile incidente, fraza (coordonarea, subordonarea), elipsa.',
         [
             X(1, 'Cinci enunțuri', [
                 '(1) Piesa a fost jucată de elevii clasei a VIII-a.   (2) Se aude, departe, un tren.',
                 '(3) Mi-e dor de vacanță, dar, din păcate, școala abia a început.',
                 '(4) Ana își pregătește costumul, iar Ionel, decorul.   (5) Știu că toți vor veni la premieră.']),
             T(2, 'Recunoaște', 'Rezolvă cerințele.',
               ['Cerința', 'Răspunsul'], [260, 250], gol(
                   'construcția pasivă și complementul de agent (1)', 'subiectul din (2) și partea de vorbire',
                   'construcția impersonală din (3)', 'construcția incidentă din (3)', 'pronumele reflexiv din (4) și funcția',
                   'elipsa din (4)', 'propozițiile din (5) și elementul de relație'), row_h=24),
         ],
         [
             T(3, 'Transformă', 'Rezolvă cerințele.',
               ['Cerința', 'Răspunsul'], [220, 290], gol(
                   'Trece (1) la construcția activă.', 'Scrie (3) fără construcția incidentă.',
                   'Trece prima parte din (4) în pasiv-reflexiv.'), row_h=30),
             L(4, 'Fraza mea', 'Scrie o frază cu o coordonată adversativă și o subordonată introdusă printr-un pronume relativ.', 1),
         ], titlu='Recapitulare (2/3)'),

    fisa(22, 'pp. 94-95',
         'Recapitulare (manual, pp. 72-73 și 92-93): atitudinile comunicative (flexibilitate, asertivitate, '
         'disponibilitate pentru negociere), cronica de film, redactarea și etica redactării.',
         [
             T(1, 'Ce atitudine?', 'Scrie atitudinea comunicativă.',
               ['Replica (scrisă pentru fișă)', 'Atitudinea'], [360, 150], gol(
                   '„Nu sunt de acord, dar îți înțeleg motivul.”', '„Taci, că nu știi nimic!”', '„Cum vrei tu...” (oftează)',
                   '„Dacă nu vii, înseamnă că nu mai ții la mine.”', '„Hai să găsim o variantă bună pentru amândoi.”'),
               row_h=24),
             T(2, 'Planul cronicii', 'Plănuiește cronica filmului ales pentru cerința 20.',
               ['', 'Planul meu'], [170, 340], gol(
                   'filmul și genul', 'regizorul', 'acțiunea (fără final)', 'părerea mea', 'mesajul', 'titlul cronicii'),
               row_h=24),
         ],
         [
             T(3, 'Grila cronicii', 'După ce scrii cronica, scrie DA sau NU.',
               ['Criteriul', 'DA / NU'], [420, 90], gol(
                   'Are titlu, cu titlul filmului.', 'Primul paragraf dă informațiile generale.', 'Rezumatul nu dezvăluie finalul.',
                   'Îmi exprim părerea, cu argumente.', 'Precizez mesajul filmului.', 'Respect ortografia și punctuația.')),
             L(4, 'Începutul cronicii', 'Scrie primul paragraf al cronicii (4-5 rânduri).', 2),
         ], titlu='Recapitulare (3/3)'),
]
