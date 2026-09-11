# Fișe de exerciții, clasa a V-a, Unitatea IV „Vreau să salvez lumea”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 5). Textele fără autor
# sunt create pentru fișe; textele sub drepturi de autor (Florin Bican, Rick
# Riordan, Malala Yousafzai) sunt doar parafrazate.
# Rezolvările: notite-profesor/clasa-5/unitatea-4/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-4.py

SUB = 'Clasa a V-a · Unitatea IV, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 5, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-5/unitatea-4/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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
    return [[a, '', b, ''] for a, b in randuri]


AF = ['Afirmația', 'A / F']

PERSEU = ('„Regele Polidecte voia să scape de tânărul Perseu, fiul lui Zeus. De aceea, i-a cerut să-i aducă '
          'drept dar capul Meduzei, o gorgonă cu șerpi în loc de păr, care îi prefăcea în stană de piatră pe toți '
          'cei ce o priveau. Zeița Atena i-a dăruit eroului un scut lucios ca o oglindă, iar Hermes, o sabie și '
          'sandale cu aripi. Perseu a zburat până la peștera gorgonelor. Nu s-a uitat nicio clipă spre Meduza, '
          'ci doar la chipul ei oglindit în scut. Așa a reușit să-i taie capul. Întors acasă, l-a prefăcut în '
          'stană de piatră pe regele cel rău și și-a salvat mama.”')

FISE = [
    fisa(1, 'pp. 108-109',
         'Reper: În „Tezeu și Minotaurul”, repovestirea lui Florin Bican, regele Minos închide Minotaurul într-un '
         'labirint construit de Dedal și cere Atenei, în fiecare an, un tribut de tineri. Tezeu, fiul regelui Egeu, '
         'pleacă în Creta să învingă monstrul, ajutat de Ariadna, fiica lui Minos.',
         [
             T(1, 'Cine e cine?', 'Scrie, pe scurt, cine este fiecare personaj în legendă.',
               ['Personajul', 'Cine este'], [150, 360], gol(
                   'Minos', 'Pasifae', 'Dedal', 'Egeu', 'Tezeu', 'Ariadna', 'Dionysos'), row_h=20),
             T(2, 'Cine ar fi putut spune?', 'Replicile de mai jos sunt repovestite. Scrie numele personajului.',
               ['Replica', 'Personajul'], [390, 120], gol(
                   '„Fac o clădire din care monstrul nu va mai ieși niciodată.”',
                   '„Dacă scapi cu viață, pune pânza albă pe corabie!”',
                   '„Nu stau cu mâinile în sân cât monstrul ne mănâncă tinerii.”',
                   '„Desfă ghemul în urma ta și vei găsi drumul înapoi.”',
                   '„Cum scap de lighioana asta care îmi strică regatul?”'), row_h=20),
         ],
         [
             X(3, 'Cuvinte din legendă', [
                 'Completează cu: tribut, falnic, a hălădui, lighioană, a îndupleca (la forma potrivită).',
                 'a) Caii sălbatici ______________ liberi prin câmpie.',
                 'b) Orașul învins trebuia să plătească un ______________ în fiecare an.',
                 'c) Stejarul ______________ se vedea de departe.',
                 'd) Nimeni n-a reușit să-l ______________ să rămână acasă.',
                 'e) O ______________ ciudată ieșea noaptea din pădure.']),
             T(4, 'Obiectele poveștii', 'Scrie la ce folosește fiecare obiect în legendă.',
               ['Obiectul', 'La ce folosește în poveste'], [150, 360], gol(
                   'labirintul', 'ghemul de sfoară', 'pânza albă', 'pânza neagră'), row_h=24),
             L(5, 'Ariadna, pe insula Naxos', [
                 'Ariadna se trezește singură pe insulă. Scrie, la persoana I, ce gândește și ce simte ea',
                 'în acel moment (4-5 propoziții).'], 3),
         ]),

    fisa(2, 'pp. 110-111',
         'Reper (manual, p. 111): Legendele oferă explicații imaginare pentru originea unor lucruri, locuri, fenomene '
         'ale naturii. Legendele antice sunt narațiuni în care zeii intervin supranatural în viața oamenilor, într-un '
         'timp îndepărtat. Transmise mai întâi pe cale orală, ele puteau fi modificate de povestitori.',
         [
             T(1, 'Harta locurilor', 'Scrie ce se întâmplă în fiecare loc.',
               ['Locul', 'Ce se întâmplă acolo'], [150, 360], gol(
                   'Creta', 'labirintul', 'Atena', 'insula Naxos', 'marea'), row_h=24),
             T(2, 'Real sau supranatural?', 'Scrie R (real, posibil în lumea noastră) sau S (supranatural).',
               ['Întâmplarea sau ființa', 'R / S'], [440, 70], gol(
                   'Zeii o fac pe regină să iubească un taur fermecat.',
                   'Un meșter iscusit construiește o clădire cu multe galerii.',
                   'Un monstru are trup de om și cap de taur.',
                   'Tezeu găurește corăbiile ca să nu fie urmărit.',
                   'Un zeu o ia de soție pe o prințesă abandonată.'), row_h=20),
             X(3, 'Cuvinte care arată timpul', [
                 'Completează cu: În fiecare an, Într-o zi, Între timp, De atunci.',
                 'a) ______________, Atena trimitea în Creta șapte băieți și șapte fete.',
                 'b) ______________, Tezeu i-a spus tatălui său că pleacă.',
                 'c) Ariadna dormea pe insulă. ______________, corabia se îndepărta.',
                 'd) ______________, marea poartă numele regelui Egeu.']),
         ],
         [
             T(4, 'De ce?', 'Scrie cauza fiecărei întâmplări.',
               ['Întâmplarea', 'Cauza'], [230, 280], gol(
                   'Egeu plătește tribut lui Minos.',
                   'Minotaurul nu iese din labirint.',
                   'Tezeu uită să schimbe pânza.',
                   'Egeu se aruncă în mare.'), row_h=28),
             L(5, 'Legenda ta', [
                 'Inventează o legendă de 5-6 propoziții care explică numele unui loc din zona ta sau un lucru',
                 'din natură (de ce are ariciul țepi, de ce e marea sărată...). Adaugă un personaj supranatural.'], 4),
         ]),

    fisa(3, 'pp. 112-113',
         'Reper (manual, p. 112): În legendele grecești, personajele sunt zei, eroi (semizei) și oameni obișnuiți. '
         'Eroul, născut dintr-un zeu și un muritor, este recunoscut abia după o faptă excepțională, pe care un om '
         'obișnuit nu ar putea-o îndeplini, cum ar fi uciderea unui monstru.',
         [
             T(1, 'Zeu, erou sau om?', 'Scrie Z (zeu), E (erou, semizeu) sau O (om obișnuit).',
               ['Personajul', 'Z / E / O', 'Personajul', 'Z / E / O'], [185, 70, 185, 70],
               perechi(('Poseidon', 'Tezeu'), ('Egeu', 'Dionysos'), ('Minos', 'Dedal'), ('Heracle', 'Zeus')), row_h=20),
             X(2, 'Ghicește personajul', [
                 'Scrie numele personajului care vorbește.',
                 'a) Sunt fiica unui rege și dăruiesc un ghem de sfoară. → ______________',
                 'b) Am construit o clădire din care nu se poate ieși. → ______________',
                 'c) Aștept pe țărm o corabie cu pânze albe. → ______________',
                 'd) Am cap de taur și trăiesc în întuneric. → ______________',
                 'e) Am devenit soțul unei prințese lăsate pe o insulă. → ______________']),
             T(3, 'Erou fără pată?', 'Scrie calitățile și greșelile lui Tezeu, cu câte o faptă pentru fiecare.',
               ['Calitatea și fapta', 'Greșeala și fapta'], [255, 255], rows=3, row_h=36),
         ],
         [
             L(4, 'Un monstru de azi pentru Tezeu', [
                 'Inventează un monstru al lumii de azi (de exemplu, Monstrul Gălăgiei sau Balaurul Gunoaielor)',
                 'pe care Tezeu ar trebui să-l învingă. Cum arată, ce rău face, cum îl învinge eroul? (5-6 propoziții)'], 4),
             X(5, 'Dedal, un personaj secundar', [
                 'Încercuiește trei trăsături ale lui Dedal și scrie, pentru una dintre ele, dovada din text.',
                 'iscusit   ·   laș   ·   priceput   ·   crud   ·   inteligent   ·   leneș   ·   ingenios',
                 'Dovada: ______________________________________________________________________']),
         ]),

    fisa(4, 'p. 114',
         'Reper: Interpretezi o legendă când te întrebi ce spun întâmplările și personajele dincolo de poveste. '
         'Tezeu luptă pentru ceilalți, iar victoria lui asupra Minotaurului poate fi citită ca victoria curajului '
         'și a minții asupra răului.',
         [
             T(1, 'Simboluri', 'Scrie ce poate simboliza fiecare element.',
               ['Elementul', 'Ce poate simboliza'], [170, 340], gol(
                   'firul Ariadnei', 'pânza neagră', 'tinerii trimiși în Creta', 'insula Naxos'), row_h=28),
             X(2, 'Firul Ariadnei, azi', [
                 'Încercuiește literele situațiilor în care se potrivește expresia „firul Ariadnei”.',
                 'a) Planul dat de profesor ne-a ajutat să ne descurcăm într-o problemă grea.',
                 'b) Bunica a cumpărat un ghem de lână roșie.',
                 'c) Săgețile de pe pereți ne-au scos din peștera cu multe galerii.',
                 'd) Sora mea tricotează un fular.',
                 'Scrie o propoziție cu expresia: _______________________________________________']),
             T(3, 'Final fericit pentru cine?', 'Scrie F (fericit) sau N (nefericit) și explică.',
               ['Personajul', 'F / N', 'De ce?'], [120, 60, 330], [
                   ['Tezeu', '', ''], ['Ariadna', '', ''], ['Egeu', '', ''], ['atenienii', '', ''], ['Minos', '', '']],
               row_h=22),
         ],
         [
             X(4, 'Valorile legendei', [
                 'Numerotează de la 1 la 5 valorile, după cât de importante sunt pentru tine:',
                 '___ curajul    ___ iubirea    ___ inteligența    ___ respectarea promisiunii    ___ ajutorul dat altora',
                 'Explică de ce ai pus-o pe primul loc: ___________________________________________']),
             L(5, 'Sfatul regelui Tezeu', [
                 'Ajuns rege al Atenei, Tezeu le vorbește tinerilor atenieni despre ce a învățat din aventura lui.',
                 'Scrie mesajul lui (5-6 propoziții).'], 4),
         ]),

    fisa(5, 'p. 115',
         'Reper (manual, p. 115): Comparația este figura de stil care exprimă un raport de asemănare între două '
         'ființe, obiecte sau acțiuni. Comparatul este termenul descris, comparantul este termenul cu care se '
         'compară. Între ei apare un element de legătură: ca, precum, cât, asemenea, întocmai ca, la fel ca.',
         [
             T(1, 'Părțile comparației', 'Completează tabelul.',
               ['Propoziția', 'Comparatul', 'Legătura', 'Comparantul'], [240, 95, 80, 95],
               [['Labirintul era încâlcit ca un ghem.', '', '', ''],
                ['Ochii fiarei ardeau precum jarul.', '', '', ''],
                ['Tezeu alerga iute cât vântul.', '', '', ''],
                ['Pânza flutura întocmai ca un steag.', '', '', '']], row_h=22),
             T(2, 'Figură de stil sau nu?', 'Scrie DA dacă este comparație figură de stil, NU dacă nu este.',
               ['Propoziția', 'DA / NU'], [440, 70], gol(
                   'Ariadna era frumoasă ca o zână.',
                   'Dedal lucra ca arhitect la curtea regelui.',
                   'Minotaurul mugea ca tunetul.',
                   'Tezeu a ajuns în Creta ca prizonier.',
                   'Egeu stătea pe țărm neclintit ca o stâncă.'), row_h=20),
             X(3, 'Ghicitori cu comparații', [
                 'Ghicește și subliniază comparațiile.',
                 'a) Rotundă ca o farfurie, noaptea luminează cerul. → ______________',
                 'b) Verde ca iarba, sare ca o minge prin baltă. → ______________',
                 'c) Subțire ca un fir de păr, lung cât un drum, te scoate din labirint. → ______________']),
         ],
         [
             T(4, 'Comparații pentru simțuri', 'Scrie câte o comparație despre legendă, pentru fiecare simț.',
               ['Simțul', 'Comparația ta'], [110, 400], gol(
                   'văzul', 'auzul', 'pipăitul', 'mirosul'), row_h=26),
             L(5, 'Portretul Minotaurului', [
                 'Descrie Minotaurul în 4-5 propoziții, cu cel puțin trei comparații, fiecare cu alt element',
                 'de legătură. Subliniază comparanții.'], 3),
         ]),

    fisa(6, 'pp. 116-118',
         'Reper (manual, p. 118): Textul multimodal combină mai multe modalități de comunicare (cuvinte, imagini, '
         'culori, sunete, gesturi, mișcare). Banda desenată narează prin imagini și cuvinte: planșa, banda, '
         'vinietele, bulele, recitativele, ideogramele, onomatopeele, liniile de mișcare.',
         [
             T(1, 'Cuvintele benzii desenate', 'Scrie termenul potrivit fiecărei descrieri.',
               ['Descrierea', 'Termenul'], [390, 120], gol(
                   'o pagină întreagă cu benzi desenate',
                   'șirul orizontal de imagini',
                   'o imagine închisă într-un cadru',
                   'panoul cu vorbele naratorului',
                   'un cuvânt care imită un zgomot',
                   'un mic desen simbolic (inimioară, stea)'), row_h=20),
             X(2, 'Ce fel de bulă?', [
                 'Scrie: bulă rotundă (vorbire), norișor (gând) sau bulă cu zimți (strigăt).',
                 'a) Tezeu își spune: „Nu trebuie să-mi fie frică.” → ______________________',
                 'b) Ariadna îi spune lui Tezeu: „Ia acest ghem.” → ______________________',
                 'c) Egeu strigă de pe stâncă: „Pânza e neagră!” → ______________________',
                 'd) Minos se întreabă: „Cine a scufundat corăbiile?” → ______________________']),
             T(3, 'Simplu sau complex?', 'Scrie modalitățile de comunicare și S (simplu, două) sau C (complex, trei sau mai multe).',
               ['Textul', 'Modalitățile de comunicare', 'S / C'], [150, 290, 70], [
                   ['afișul unui film', '', ''], ['un spectacol de balet', '', ''],
                   ['un desen animat', '', ''], ['o bandă desenată', '', '']], row_h=22),
         ],
         [
             X(4, 'Zgomotele legendei', [
                 'Scrie o onomatopee pentru fiecare zgomot.',
                 'a) ușa grea a labirintului se închide: ________     b) valurile lovesc corabia: ________',
                 'c) pașii Minotaurului: ________                       d) sabia lovește coarnele: ________']),
             T(5, 'Tezeu intră în labirint', [
                 'Desenează o bandă cu trei viniete. Folosește cel puțin: un recitativ, o bulă de vorbire,',
                 'o bulă de gând, o onomatopee și linii de mișcare.'],
               ['Vinieta 1', 'Vinieta 2', 'Vinieta 3'], [170, 170, 170], rows=1, row_h=420),
         ]),

    fisa(7, 'p. 119',
         'Reper: Textul explicativ (aplicativ) arată cum se face ceva: are titlu, lista materialelor, pași așezați în '
         'ordine (numerotați sau pe paragrafe), verbe la modul imperativ și, adesea, schițe. Scopul lui este să '
         'ofere instrucțiuni.',
         [
             T(1, 'Labirintul de hârtie', 'Pașii s-au amestecat. Scrie numărul fiecărui pas (1-6).',
               ['Pasul', 'Nr.'], [450, 60], gol(
                   'Trasează cu creionul drumul corect de la intrare la ieșire.',
                   'Trece cu carioca peste linii și șterge urmele de creion.',
                   'Desenează cu rigla un pătrat mare pe coală.',
                   'Dă-i labirintul unui coleg și cronometrează-l.',
                   'Marchează intrarea pe o latură și ieșirea pe latura opusă.',
                   'Adaugă, în jurul drumului bun, drumuri care se înfundă.'), row_h=20),
             X(2, 'La imperativ', [
                 'Transformă indicațiile, ca într-un text explicativ.',
                 'a) Tu alegi un subiect. → ______________________',
                 'b) Tu desenezi personajele. → ______________________',
                 'c) Voi capsați colile. → ______________________',
                 'd) Tu nu uiți titlul. → ______________________']),
             T(3, 'Instrucțiune sau poveste?', 'Scrie I (instrucțiune) sau P (poveste).',
               ['Enunțul', 'I / P'], [440, 70], gol(
                   'Taie hârtia pe linia punctată.',
                   'Tezeu a tăiat sfoara și a pornit spre ieșire.',
                   'Amestecă ouăle cu zahărul timp de trei minute.',
                   'Nu deschide aparatul cât timp e în priză.'), row_h=20),
         ],
         [
             L(4, 'Sfaturile Ariadnei', [
                 'Scrie un text explicativ: „Cum ieși dintr-un labirint”. Trebuie să aibă titlu, lista',
                 'materialelor, 4-5 pași numerotați și verbe la imperativ.'], 5),
         ]),

    fisa(8, 'pp. 120-121',
         'Reper: Malala Yousafzai (n. 1997, Pakistan) a luptat de copil pentru dreptul fetelor la educație. În 2012 '
         'a fost împușcată în autobuzul școlar, a supraviețuit, iar în 2014 a primit Premiul Nobel pentru Pace. '
         'În fragmentul din „Eu sunt Malala”, ea află că este amenințată cu moartea și hotărăște ce va face.',
         [
             T(1, 'Axa vieții Malalei', 'Scrie ce s-a întâmplat în fiecare moment.',
               ['Momentul', 'Ce s-a întâmplat'], [150, 360], gol(
                   '1997', '2009', 'începutul lui 2012', 'mai târziu, în 2012', '2014', '2015'), row_h=22),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Malala află de amenințare de la un polițist.',
                 'Tatăl ei vorbise mereu cu ea ca de la egal la egal.',
                 'Malala hotărăște să renunțe la campanie.',
                 'Tatăl ei este mai speriat decât ea.',
                 'Ea vrea să li se opună talibanilor prin pace și dialog.'), row_h=20),
         ],
         [
             T(3, 'Tatăl și fiica', 'Compară reacțiile celor doi (cu cuvintele tale).',
               ['Situația', 'Malala', 'Tatăl ei'], [150, 180, 180],
               [['când află vestea', '', ''], ['ce propune', '', ''], ['de ce se teme', '', '']], row_h=34),
             L(4, 'Cu cuvintele tale', 'Explică: a) a fi în vizorul cuiva; b) a intra în hibernare (despre o campanie).', 2),
             L(5, 'Scrisoare către Malala', [
                 'Scrie-i Malalei 5-6 propoziții: ce te-a impresionat la ea, ce înseamnă școala pentru tine,',
                 'ce ai vrea tu să schimbi în lumea ta.'], 3),
         ]),

    fisa(9, 'pp. 122-123',
         'Reper (manual, pp. 122-123): Eroul întruchipează valori permanente: curaj, sacrificiu, bunătate, dreptate. '
         'Modelul s-a schimbat: eroul antic (Ghilgameș, Heracle, Tezeu), sfântul, regele și cavalerul din Evul Mediu, '
         'eroul național (sec. al XIX-lea), eroul universal al secolului XX (savant, sportiv, astronaut).',
         [
             T(1, 'Eroul și epoca lui', 'Scrie tipul de erou: antic, medieval, național sau universal.',
               ['Eroul', 'Tipul de erou'], [300, 210], gol(
                   'Ghilgameș', 'Ahile', 'Sfântul Gheorghe, înfruntând balaurul', 'Mihai Viteazul',
                   'Neil Armstrong, primul om pe Lună', 'Nadia Comăneci'), row_h=20),
             X(2, 'Supereroul și strămoșul lui', [
                 'Scrie, lângă fiecare supererou, litera personajului antic care l-a inspirat.',
                 '1. Superman ___     2. Batman ___     3. Spiderman ___     4. Percy Jackson ___',
                 'a) Arahne, țesătoarea    b) Perseu    c) Heracle    d) harpiile cu aripi']),
             T(3, 'Ce au în comun?', 'Scrie DA sau NU.',
               ['Trăsătura', 'Tezeu', 'Malala', 'Eroul tău: ________'], [150, 100, 100, 160],
               [['curajul', '', '', ''], ['forța fizică', '', '', ''], ['originea divină', '', '', ''],
                ['lupta pentru ceilalți', '', '', ''], ['inteligența', '', '', '']], row_h=20),
         ],
         [
             L(4, 'Eroul de lângă noi', [
                 'Scrie despre un erou obișnuit din comunitatea ta (medic, pompier, profesor, vecin, bunic):',
                 'ce face, ce valori are, de ce îl consideri erou (5-6 propoziții).'], 3),
             X(5, 'Eroul viitorului', [
                 'Încercuiește trei calități pe care le va avea eroul peste o sută de ani.',
                 'forța  ·  empatia  ·  curajul  ·  cunoașterea tehnologiei  ·  grija pentru planetă  ·  modestia',
                 'Explică una dintre ele: _______________________________________________________']),
         ]),

    fisa(10, 'pp. 124-125',
         'Reper (manual, pp. 124-125): Actul de limbaj este o comunicare făcută cu o intenție: a întreba (cer un '
         'răspuns), a solicita (cer o informație sau o acțiune), a felicita (laud sau urez). Formularea diferă după '
         'relația cu interlocutorul: simplă între prieteni, politicoasă cu necunoscuții și cu cei mai în vârstă.',
         [
             T(1, 'Ce face vorbitorul?', 'Scrie Î (întreabă), S (solicită) sau F (felicită).',
               ['Enunțul', 'Î / S / F'], [430, 80], gol(
                   'Ce părere ai despre filmul cu Percy Jackson?',
                   'Vă rog frumos să-mi împrumutați dicționarul.',
                   'Bravo, ai câștigat concursul de șah!',
                   'Știți cumva la ce oră pleacă autobuzul?',
                   'Închide, te rog, fereastra.',
                   'Îmi face plăcere să vă urez succes la examen.'), row_h=20),
             T(2, 'De la prieten la director', 'Reformulează politicos pentru directorul școlii.',
               ['Către un prieten', 'Către directorul școlii'], [190, 320],
               [['Dă-mi, te rog, caietul.', ''], ['Ce zici de excursie?', ''], ['Bravo, ești tare!', '']], row_h=32),
         ],
         [
             T(3, 'Ce transmite propoziția?', 'Propoziția: „Hai să facem curat în parc sâmbătă!”',
               ['Aspectul', 'Ce comunică'], [170, 340], gol(
                   'informația', 'starea vorbitorului', 'ce așteaptă de la ascultător', 'relația dintre ei'), row_h=24),
             L(4, 'Răspunsul empatic', [
                 'Colegul tău spune: „Am luat 4 la mate și mi-e frică să le spun alor mei.”',
                 'Scrie un răspuns care arată empatie (2-3 propoziții).'], 2),
             L(5, 'Felicitare pentru un pompier', 'Scrie 3-4 propoziții pentru un pompier care a salvat o familie, cu formule politicoase.', 2),
         ]),

    fisa(11, 'p. 126',
         'Reper (manual, pp. 126-127): Pronumele ține locul unui substantiv. Pronumele personal are persoana I '
         '(vorbitorul), a II-a (ascultătorul), a III-a (cel despre care se vorbește), numărul singular sau plural, gen '
         'numai la persoana a III-a și forme accentuate (eu, mine, mie) sau neaccentuate (mă, m-, îmi, mi).',
         [
             T(1, 'Pronumele potrivit', 'Scrie pronumele personal care poate înlocui grupul de cuvinte.',
               ['Grupul de cuvinte', 'Pronumele', 'Grupul de cuvinte', 'Pronumele'], [185, 70, 185, 70],
               perechi(('Heracle', 'Malala'), ('Tezeu și Ariadna', 'eu și colegii mei'),
                       ('Ariadna și sora ei', 'tu și fratele tău')), row_h=22),
             T(2, 'Fișa pronumelui', 'Completează. La genul care nu se poate stabili, pune o linie.',
               ['Pronumele', 'Persoana', 'Numărul', 'Genul'], [120, 130, 130, 130],
               [['eu', '', '', ''], ['voi', '', '', ''], ['ea', '', '', ''], ['ei', '', '', ''],
                ['tu', '', '', ''], ['ele', '', '', '']], row_h=20),
             X(3, 'Accentuat sau neaccentuat?', [
                 'Subliniază cu o linie formele accentuate și cu două linii formele neaccentuate.',
                 'a) Pe mine mă cheamă Ana.          b) Ție îți place mitologia?',
                 'c) Pe ei i-a salvat Tezeu.          d) Nouă ne-a povestit bunicul legenda.']),
         ],
         [
             L(4, 'Fără repetiții', [
                 'Rescrie textul, înlocuind unde e nevoie numele lui Dedal cu pronume personale:',
                 '„Dedal era un meșter iscusit. Dedal a construit labirintul. Regele l-a închis pe Dedal într-un turn.',
                 'Dedal și-a făcut aripi din pene și ceară. Dedal a zburat împreună cu fiul său, Icar.”'], 3),
             X(5, 'Scriere și pronunțare', [
                 'Încercuiește forma corectă.',
                 'a) (Eu / Ieu) citesc legende.       b) (Ea / Ia) (ea / ia) caietul de pe bancă.',
                 'c) (Ele / Iele) au plecat la muzeu.   d) (El / Iel) e fratele meu.']),
         ]),

    fisa(12, 'p. 127',
         'Reper (manual, p. 127): Formele neaccentuate ale pronumelui personal se leagă adesea de alt cuvânt prin '
         'cratimă: i-a, l-a, mi-au, ne-a, nu-l, n-o, nu-i. Nu le confunda cu ia (verb), la (prepoziție) sau nea '
         '(substantiv). Analiza pronumelui personal: persoana, numărul, genul (la persoana a III-a), forma.',
         [
             T(1, 'Analiza pronumelor', 'Completează. La genul care nu se poate stabili, pune o linie.',
               ['Pronumele', 'Pers.', 'Nr.', 'Genul', 'Forma'], [190, 60, 70, 80, 110],
               [['ea – Pe ea o caut.', '', '', '', ''], ['o – Pe ea o caut.', '', '', '', ''],
                ['mie – Mie mi-a scris.', '', '', '', ''], ['mi – Mie mi-a scris.', '', '', '', ''],
                ['îl – Îl aștept pe Dan.', '', '', '', ''], ['voi – Voi ați câștigat.', '', '', '', '']], row_h=20),
             X(2, 'Ortograme', [
                 'Încercuiește forma corectă.',
                 'a) Tezeu (i-a / ia) promis tatălui său că schimbă pânza.',
                 'b) Ariadna (ia / i-a) ghemul și (i-l / il) dă eroului.',
                 'c) (Nu-l / Nul) lăsa singur!             d) (N-o / No) uita pe Ariadna!',
                 'e) Minos (l-a / la) chemat pe Dedal (l-a / la) palat.',
                 'f) Ce (mi-au / miau) spus colegii (nu-i / nui) adevărat.']),
         ],
         [
             T(3, 'Același sunet, altă parte de vorbire', 'Scrie ce parte de vorbire este cuvântul dintre ghilimele.',
               ['Propoziția', 'Partea de vorbire'], [330, 180], gol(
                   'Am rămas fără „mine” de creion.',
                   'Pe „mine” m-a ales căpitanul echipei.',
                   '„I”-am spus adevărul.',
                   'Cartea-„i” pe masă.'), row_h=22),
             X(4, 'Vânătoarea de pronume', [
                 'Scrie toate pronumele personale din text (sunt șapte).',
                 '„Când l-am întrebat pe bunicul despre eroi, el mi-a spus: «Eu cred că tu și colegii tăi îi puteți',
                 'găsi și azi, printre voi.»”',
                 '___________________________________________________________________________']),
             L(5, 'Propoziții cu ortograme', 'Scrie câte o propoziție despre Tezeu cu: i-a, ia, l-a, la.', 3),
         ]),

    fisa(13, 'pp. 128-129',
         'Reper (manual, pp. 128-129): Pronumele personal de politețe arată respectul: dumneata, dumitale (pers. a '
         'II-a sg.); dumneavoastră (pers. a II-a sg. și pl.); dumnealui, dumneaei, dumnealor (pers. a III-a). '
         'Dumneavoastră cere verbul la plural. Formulele reverențioase (Majestatea Sa) au majusculă la fiecare cuvânt.',
         [
             T(1, 'Pronumele potrivit', 'Scrie pronumele de politețe potrivit situației.',
               ['Situația', 'Pronumele'], [370, 140], gol(
                   'îi vorbești unui vecin mai în vârstă, pe care îl cunoști bine',
                   'îi vorbești doamnei directoare',
                   'vorbești despre domnul primar',
                   'vorbești despre doamna bibliotecară',
                   'vorbești despre părinții unui coleg'), row_h=20),
             X(2, 'Pe scurt', [
                 'Scrie forma prescurtată.',
                 'dumneavoastră → ________   dumnealui → ________   dumneaei → ________',
                 'dumneata → ________        dumnealor → ________']),
             T(3, 'Formula de adresare directă', 'Scrie formula reverențioasă folosită când te adresezi direct persoanei.',
               ['Persoana', 'Formula (Voastră)'], [220, 290], gol(
                   'regele', 'ambasadorul', 'papa', 'patriarhul'), row_h=20),
         ],
         [
             X(4, 'Acordul cu pronumele de politețe', [
                 'Încercuiește forma corectă a verbului.',
                 'a) Doamnă profesoară, dumneavoastră (ați citit / a citit) „Legendele Olimpului”?',
                 'b) Dumnealui (este / sunteți) noul ambasador.',
                 'c) Dumneata (vii / veniți) mâine la bibliotecă?',
                 'd) Dumneaei ne-(a / ați) povestit despre Malala.',
                 'e) Corectează: „Excelența sa, ambasadorul Italiei, a vizitat școala.” → ______________________']),
             L(5, 'Interviu cu un erou', [
                 'Scrie trei întrebări pentru un pompier decorat pentru curaj. Folosește pronume de politețe',
                 'și subliniază-le.'], 3),
         ]),

    fisa(14, 'pp. 130-131',
         'Reper (manual, pp. 130-131): Adjectivul exprimă o însușire și se acordă în gen și număr cu substantivul '
         'determinat; în propoziție este atribut. Poate fi propriu-zis (curajos) sau provenit din verb (desenat), '
         'variabil sau invariabil. Articolul demonstrativ (cel, cea, cei, cele) leagă adjectivul de substantiv.',
         [
             T(1, 'Acordul adjectivului', 'Scrie adjectivul din paranteză acordat cu substantivul.',
               ['Grupul', 'Forma acordată', 'Grupul', 'Forma acordată'], [150, 105, 150, 105],
               perechi(('eroine (curajos)', 'mantii (verde)'), ('pelerine (roșu)', 'benzi (desenat)'),
                       ('scuturi (argintiu)', 'legende (vechi)')), row_h=22),
             T(2, 'Variabil sau invariabil?', 'Scrie V (variabil) sau I (invariabil).',
               ['Adjectivul', 'V / I', 'Adjectivul', 'V / I'], [185, 70, 185, 70],
               perechi(('roz', 'curajos'), ('mare', 'gri'), ('cumsecade', 'verde'), ('bleumarin', 'vechi')), row_h=20),
             X(3, 'Adjectivul trece în față', [
                 'Mută adjectivul înaintea substantivului.',
                 'copilul isteț → ______________        fetele harnice → ______________',
                 'eroul viteaz → ______________         copiii zglobii → ______________',
                 'zeița înțeleaptă → ______________     norii argintii → ______________']),
         ],
         [
             X(4, 'Articolul demonstrativ', [
                 'Completează cu: cel, cea, cei, cele, celui, celei.',
                 'a) Ștefan ______ Mare              b) pelerina ______ nouă',
                 'c) supereroii ______ curajoși        d) cărțile ______ vechi',
                 'e) I-am dat cartea fetei ______ harnice.   f) Povestea eroului ______ viteaz m-a impresionat.']),
             L(5, 'Costumul supereroului tău', [
                 'Descrie în 4 propoziții costumul unui supererou inventat de tine. Folosește două adjective',
                 'propriu-zise, un adjectiv provenit din verb și un articol demonstrativ. Subliniază-le.'], 3),
         ]),

    fisa(15, 'pp. 132-133',
         'Reper (manual, pp. 132-133): Gradele de comparație: pozitivul (curajos); comparativul de superioritate (mai), '
         'de egalitate (la fel de, tot atât de), de inferioritate (mai puțin); superlativul relativ (cel mai, cel mai '
         'puțin) și absolut (foarte, tare, foarte puțin). Unele adjective nu au grade: unic, principal, superb.',
         [
             T(1, 'Toate gradele', 'Scrie formele celor două adjective.',
               ['Gradul de comparație', 'înțelept', 'rapidă'], [230, 140, 140], [
                   [g, '', ''] for g in ['pozitiv', 'comparativ de superioritate', 'comparativ de egalitate',
                                         'comparativ de inferioritate', 'superlativ relativ de superioritate',
                                         'superlativ relativ de inferioritate', 'superlativ absolut de superioritate',
                                         'superlativ absolut de inferioritate']], row_h=20),
             T(2, 'Recunoaște gradul', 'Scrie gradul de comparație al adjectivului.',
               ['Propoziția', 'Gradul'], [290, 220], gol(
                   'Heracle era cel mai puternic dintre eroi.',
                   'Leul era tot atât de fioros ca un balaur.',
                   'Minos era mai puțin viteaz decât Tezeu.',
                   'Egeu era tare îngrijorat.',
                   'Labirintul era întunecos.'), row_h=20),
         ],
         [
             X(3, 'Fără grade!', [
                 'Încercuiește adjectivele care nu au grade de comparație.',
                 'unic  ·  frumos  ·  principal  ·  veșnic  ·  înalt  ·  superior  ·  acvatic  ·  isteț  ·  complet  ·  maxim',
                 'Corectează: a) Muzeul are o colecție foarte unică. → ______________________________',
                 'b) Acesta e cel mai principal motiv. → ______________________________']),
             L(4, 'Clasamentul eroilor', [
                 'Compară trei eroi (de exemplu, Heracle, Tezeu, Malala) în 4 propoziții. Folosește un comparativ',
                 'de superioritate, un comparativ de egalitate, un superlativ relativ și un superlativ absolut.'], 4),
         ]),

    fisa(16, 'p. 134',
         'Reper (manual, p. 135): Portretul prezintă trăsăturile fizice și morale care particularizează o persoană. '
         'Autoportretul este portretul pe care un pictor, un scriitor sau un om obișnuit și-l face lui însuși; '
         'în scris, e la persoana I.',
         [
             T(1, 'Fizic sau moral?', 'Scrie F (trăsătură fizică) sau M (trăsătură morală).',
               ['Trăsătura', 'F / M', 'Trăsătura', 'F / M'], [185, 70, 185, 70],
               perechi(('am ochii căprui', 'sunt răbdătoare'), ('port ochelari', 'mă enervez repede'),
                       ('am pistrui', 'țin secretele'), ('sunt cel mai înalt', 'îmi place să ajut')), row_h=20),
             T(2, 'Portret sau autoportret?', 'Scrie P (portretul altcuiva) sau A (autoportret).',
               ['Enunțul', 'P / A'], [440, 70], gol(
                   'Mă numesc Irina și am unsprezece ani.',
                   'Bunicul meu are mâinile aspre și zâmbetul blând.',
                   'Sunt pasionat de șah și nu pierd niciun turneu.',
                   'Colega mea de bancă râde mereu de glumele mele.'), row_h=20),
             T(3, 'Autoportretul în obiecte', 'Alege trei obiecte care te reprezintă.',
               ['Obiectul', 'Ce spune despre tine'], [150, 360], rows=3, row_h=30),
         ],
         [
             L(4, 'Arată, nu spune', [
                 'Model: „Sunt curios.” → „Desfac orice jucărie ca să văd ce are înăuntru.”',
                 'Arată printr-o faptă: a) Sunt glumeț.   b) Sunt ordonată.   c) Sunt încăpățânat.'], 3),
             X(5, 'Un început care te prinde', [
                 'Încercuiește introducerea care captează cel mai bine atenția.',
                 'a) „Eu sunt Andrei și am 11 ani.”',
                 'b) „Dacă auzi râsete pe hol, probabil că acolo sunt eu.”',
                 'c) „Acesta este autoportretul meu.”',
                 'Scrie prima propoziție a autoportretului tău: ___________________________________']),
         ]),

    fisa(17, 'p. 135',
         'Reper (manual, p. 135): Pentru autoportret: faci lista cu ce te definește, o restrângi la cinci aspecte, '
         'faci planul, scrii ciorna, revizuiești (ideile, claritatea, corectitudinea) și scrii varianta finală, cu '
         'paragrafe, lizibil.',
         [
             T(1, 'Planul autoportretului', 'Scrie cele cinci aspecte, în ordinea în care le vei prezenta.',
               ['Nr.', 'Aspectul ales', 'Un detaliu concret'], [40, 180, 290], [
                   [str(i), '', ''] for i in range(1, 6)], row_h=26),
             L(2, 'Revizuiește', [
                 'Rescrie paragraful fără repetiții și fără greșeli:',
                 '„Eu sunt Mara. Eu am 11 ani. Eu am părul șaten și ochii verzi. Îmi place să citesc. Îmi place',
                 'să desenez. Îmi place să dansez. Numi place să mă cert cu fratele meu, dar uneori o fac.”'], 3),
         ],
         [
             T(3, 'Lista de control', 'Scrie DA sau NU: întâi pentru textul tău, apoi pentru textul colegului.',
               ['Criteriul', 'Eu', 'Colegul'], [370, 70, 70], [[c, '', ''] for c in [
                   'Introducerea captează atenția.', 'Fiecare aspect are paragraful lui.',
                   'Apar trăsături fizice și morale.', 'Trăsăturile morale sunt arătate prin fapte.',
                   'Textul e scris corect și îngrijit.']], row_h=22),
             L(4, 'Două încheieri', 'Scrie două încheieri pentru autoportretul tău: una cu o glumă, una cu o dorință de viitor.', 3),
         ]),

    fisa(18, 'pp. 136-137',
         'Recapitulare (manual, pp. 108-125): legenda, timpul, spațiul și acțiunea, personajele (zei, eroi, oameni), '
         'semnificațiile textului, comparația, banda desenată, modelele eroice, actele de limbaj.',
         [
             X(1, 'Perseu și Meduza', ['Citește legenda (repovestită pentru fișă).', PERSEU]),
             T(2, 'Personajele', 'Scrie: zeu, erou, om sau monstru.',
               ['Personajul', 'Felul', 'Personajul', 'Felul'], [150, 105, 150, 105],
               perechi(('Perseu', 'Atena'), ('Meduza', 'Hermes'), ('Polidecte', 'Zeus')), row_h=20),
             L(3, 'Întrebări despre text', [
                 'a) Ce faptă excepțională face Perseu?   b) De ce nu privește spre Meduza?',
                 'c) Transcrie comparația și subliniază comparatul.   d) Numește un element supranatural.'], 3),
         ],
         [
             T(4, 'Legenda în bandă desenată', 'Plănuiește trei viniete.',
               ['Vinieta', 'Ce desenezi', 'Replica sau onomatopeea'], [70, 250, 190], [
                   ['1', '', ''], ['2', '', ''], ['3', '', '']], row_h=32),
             X(5, 'Ce simbolizează scutul?', [
                 'Încercuiește și explică: a) forța   b) mintea, care învinge răul fără să-l privească în față   c) bogăția',
                 'Pentru că ___________________________________________________________________']),
             L(6, 'Felicitări, Perseu!', 'Felicită-l pe Perseu în două feluri: ca prieten al lui, apoi ca sol trimis de un rege (formal).', 2),
         ]),

    fisa(19, 'pp. 136-137',
         'Recapitulare (manual, pp. 126-135): pronumele personal și pronumele de politețe, adjectivul (acordul, '
         'felul, locul), articolul demonstrativ, gradele de comparație, autoportretul.',
         [
             T(1, 'Pronumele', 'Completează. La genul care nu se poate stabili, pune o linie.',
               ['Pronumele', 'Personal / politețe', 'Pers.', 'Nr.', 'Genul'], [215, 120, 55, 55, 65],
               [['el – El a zburat.', '', '', '', ''], ['o – Pe ea o privea în scut.', '', '', '', ''],
                ['nouă – Nouă ne place legenda.', '', '', '', ''], ['dumneaei – Dumneaei e ghidul.', '', '', '', ''],
                ['dumneavoastră – Dumneavoastră știți?', '', '', '', '']], row_h=20),
             T(2, 'Adjectivele', [
                 '„Ochii Meduzei erau reci, iar scutul lustruit strălucea. Cea mai curajoasă faptă a lui Perseu',
                 'a fost salvarea mamei.” Completează tabelul.'],
               ['Adjectivul', 'Felul', 'Gradul', 'Substantivul determinat'], [100, 150, 130, 130],
               [['reci', '', '', ''], ['lustruit', '', '', ''], ['curajoasă', '', '', '']], row_h=22),
             X(3, 'Adjectivul „iute”', [
                 'a) comparativ de egalitate: ______________   b) superlativ absolut de inferioritate: ______________',
                 'c) superlativ relativ de superioritate: ______________   d) comparativ de inferioritate: ______________']),
         ],
         [
             X(4, 'Corectează', [
                 'a) Perseu era un erou foarte unic. → _______________________________________',
                 'b) Sandalele cu aripi erau cele mai perfecte. → _______________________________',
                 'c) Doamnă, dumneavoastră a venit la muzeu? → _______________________________',
                 'd) Zeița ia dat eroului un scut. → _______________________________']),
             L(5, 'Portretul lui Perseu', [
                 'Scrie 6-8 rânduri despre Perseu. Folosește: două adjective la grade de comparație diferite,',
                 'o comparație, un pronume personal și un articol demonstrativ.'], 5),
         ]),
]
