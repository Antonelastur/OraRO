# Fișe de exerciții, clasa a V-a, Unitatea VI „Din carte spre departe”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 5). Textele fără autor
# sunt create pentru fișe (jurnalul de la Sibiu, pagina de jurnal de la Putna);
# textele sub drepturi de autor (jurnalul Monicăi, articolul lui Iulian
# Comănescu, Neagu Djuvara) sunt doar parafrazate. Eminescu e citat scurt.
# Rezolvările: notite-profesor/clasa-5/unitatea-6/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-6.py

SUB = 'Clasa a V-a · Unitatea VI, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 5, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-5/unitatea-6/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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

PUTNA = ('„Marți, 3 octombrie. Am plecat din Suceava la ora opt și, după o oră și jumătate, am ajuns la Mănăstirea Putna. '
         'Ghidul ne-a spus că mănăstirea a fost ctitorită de Ștefan cel Mare, care a domnit 47 de ani, și că domnitorul '
         'este înmormântat aici. În muzeul mănăstirii am văzut manuscrise împodobite cu litere colorate, scrise de mână de '
         'călugări. Vă recomand să nu grăbiți vizita, fiindcă fiecare pagină are ceva de spus. Seara, în autocar, doamna '
         'dirigintă ne-a întrebat ce ne-a plăcut cel mai mult. Eu am răspuns fără să stau pe gânduri: literele pictate!”')

FISE = [
    fisa(1, 'pp. 168-170',
         'Reper: „Jurnal de călătorie” este jurnalul Monicăi, elevă în clasa a V-a, scris în cele trei zile ale unei '
         'excursii tematice, „Din carte spre departe”: Alba Iulia (vineri), Brașov (sâmbătă), Târgoviște (duminică). '
         'Monica notează ce vede, ce află și ce simte, adresându-se jurnalului.',
         [
             T(1, 'Unde a fost?', 'Scrie orașul în care Monica vede fiecare lucru.',
               ['Ce vede Monica', 'Orașul'], [370, 140], gol(
                   'un bărbat îmbrăcat ca Mihai Viteazul', 'Biblioteca Batthyaneum', 'celula lui Horia',
                   'Muzeul „Prima Școală Românească”', 'tiparnița la care a lucrat Coresi', 'Turnul Chindiei',
                   'Muzeul Tiparului și al Cărții Vechi Românești'), row_h=20),
             T(2, 'Cuvinte din jurnal', 'Explică pe scurt fiecare cuvânt.',
               ['Cuvântul', 'Ce înseamnă'], [130, 380], gol(
                   'incunabul', 'tiparniță', 'cronică', 'slavonă', 'manuscris', 'e-book'), row_h=22),
         ],
         [
             T(3, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Monica l-a întâlnit pe adevăratul Mihai Viteazul.',
                 'Biblioteca Batthyaneum a fost înființată în 1798.',
                 'Prima școală românească din Șcheii Brașovului a fost zidită în 1495.',
                 'Diaconul Coresi a tipărit 39 de cărți.',
                 'Excursia a durat o săptămână.',
                 'Monica își cumpără o carte tipărită despre Alba Iulia.'), row_h=20),
             L(4, 'Jurnalul unui coleg', [
                 'Ești unul dintre colegii Monicăi. Scrie pagina ta de jurnal din sâmbătă, 7 mai, de la Brașov',
                 '(6-8 rânduri): data, adresarea către jurnal, persoana I, un lucru nou aflat.'], 4),
         ]),

    fisa(2, 'p. 171',
         'Reper (manual, p. 171): Textul narativ nonliterar prezintă întâmplări petrecute în realitate, într-un timp și un '
         'spațiu reale. Cei care iau parte la acțiune sunt persoane reale, numite participanți (nu personaje). Exemple: '
         'jurnalul, reportajul, articolul, interviul, scrisoarea.',
         [
             T(1, 'Literar sau nonliterar?', 'Scrie L (text literar) sau N (text nonliterar).',
               ['Textul', 'L / N'], [440, 70], gol(
                   'jurnalul Monicăi', '„Zâna Munților”', 'un reportaj despre festivalul de la Alba Iulia',
                   '„Tezeu și Minotaurul”', 'o scrisoare către bunica', 'o știre despre o inundație'), row_h=20),
             X(2, 'Jurnalul de la Sibiu', [
                 'Citește pagina de jurnal (scrisă pentru fișă).',
                 '„Luni, 12 iunie. Dimineață am plecat cu clasa la Sibiu. Pe la prânz am urcat în Turnul Sfatului, de unde am',
                 'văzut tot orașul. După-amiază am vizitat Muzeul Brukenthal, iar ghidul ne-a arătat tablouri vechi',
                 'de peste două sute de ani. Seara, obosiți, ne-am întors la pensiunea din Cisnădie.”']),
             T(3, 'Indicii textului', 'Completează cu informații din jurnalul de la Sibiu.',
               ['Categoria', 'Din text'], [170, 340], gol(
                   'data', 'momentele zilei', 'localitățile', 'locurile vizitate', 'participanții'), row_h=22),
         ],
         [
             T(4, 'Personaj sau participant?', 'Scrie P (personaj, dintr-un text literar) sau Pa (participant real).',
               ['Numele', 'P / Pa', 'Numele', 'P / Pa'], [185, 70, 185, 70],
               perechi(('Ariadna', 'ghidul de la Muzeul Brukenthal'), ('Monica', 'fiul de împărat'),
                       ('domnul Oltean', 'Aladin')), row_h=22),
             L(5, 'Reportajul tău', [
                 'Scrie un scurt reportaj (5-6 propoziții) despre o activitate reală din școala ta: ce s-a întâmplat,',
                 'cine a participat, când și unde.'], 4),
         ]),

    fisa(3, 'pp. 172-173',
         'Reper: Jurnalul este un text personal, scris la persoana I, cu date. Monica se adresează jurnalului ca unui '
         'prieten, glumește, își notează uimirea și ce a învățat; din felul în care scrie se văd și trăsăturile ei.',
         [
             T(1, 'Ce spune despre Monica?', 'Scrie trăsătura pe care o arată fiecare faptă.',
               ['Fapta Monicăi (repovestită)', 'Trăsătura'], [360, 150], gol(
                   'caută pe internet sensul cuvântului „incunabul”',
                   'își cumpără o carte despre istoria orașului',
                   'glumește despre starea ei de sănătate',
                   'promite să nu se mai plângă de teme',
                   'își amintește de o carte citită'), row_h=22),
             T(2, 'Jurnal sau ghid turistic?', 'Scrie J (jurnal personal) sau G (ghid turistic).',
               ['Enunțul', 'J / G'], [440, 70], gol(
                   'Biblioteca a fost înființată în 1798.',
                   'Dragă jurnalule, azi a fost o zi de neuitat!',
                   'Muzeul este deschis de marți până duminică.',
                   'Am rămas cu gura căscată când l-am văzut!',
                   'Intrarea se face prin Poarta a treia a cetății.'), row_h=20),
         ],
         [
             T(3, 'Axa cărții românești', 'Scrie ce a aflat Monica despre fiecare moment.',
               ['Momentul', 'Ce s-a întâmplat'], [130, 380], gol(
                   '1491', '1495', 'secolul al XVI-lea', '1603', '1798', 'secolul al XIX-lea'), row_h=22),
             L(4, 'Scrisoare către Monica', [
                 'Scrie-i Monicăi 5-6 propoziții: ce ți-a plăcut la jurnalul ei și ce loc din orașul tău i-ai recomanda',
                 'să viziteze.'], 4),
         ]),

    fisa(4, 'pp. 174-175',
         'Reper: În „Scrisoarea III”, Mihai Eminescu (1850-1889) înfățișează întâlnirea dintre sultanul Baiazid și Mircea cel '
         'Bătrân, domnul Țării Românești, înaintea bătăliei de la Rovine. Baiazid îi cere lui Mircea să i se închine; '
         'Mircea refuză cu demnitate.',
         [
             T(1, 'Cine spune?', 'Scrie cine rostește fiecare replică: solul, Baiazid sau Mircea.',
               ['Replica', 'Personajul'], [370, 140], gol(
                   '„Ce vrei tu?”', '„Noi? Bună pace!”', '„Tu ești Mircea?”', '„Da-mpărate!”',
                   '„Am venit să mi te-nchini”', '„Bine-ai venit!”'), row_h=20),
             T(2, 'Cuvinte vechi', 'Alege sensul: supărare, basma, altar, armură din inele de metal, bâtă de sprijin, țară.',
               ['Cuvântul', 'Sensul'], [150, 360], gol(
                   'năframă', 'bănat', 'pristol', 'zale', 'toiag', 'moșie'), row_h=20),
         ],
         [
             T(3, 'Față în față', 'Compară cele două personaje.',
               ['Aspectul', 'Baiazid', 'Mircea'], [150, 180, 180], gol3(
                   'cum vorbește', 'cu ce se laudă / ce apără', 'cum îl vede pe celălalt', 'pe cine se sprijină'),
               row_h=34),
             L(5, 'Imaginile poeziei', [
                 'a) Ce se compară, în text, cu „păduri de lănci și săbii”?  b) Ce înseamnă că iubirea de moșie',
                 'e „un zid”?  c) De ce îl numește Baiazid pe Mircea „moșneag”? Ce îi răspunde Mircea?'], 4),
         ]),

    fisa(5, 'p. 176',
         'Reper (manual, p. 177): În Evul Mediu, cărțile erau copiate de mână de călugări, pe pergament. Pe la 1440, '
         'Johannes Gutenberg a inventat presa tipografică și literele mobile; prima carte tipărită astfel a fost Biblia, în '
         'latină. La noi, diaconul Coresi a tipărit la Brașov cărți în limba română. Azi citim și pe suport electronic.',
         [
             T(1, 'Drumul cărții', 'Numerotează suporturile scrisului în ordinea în care au apărut (1-6).',
               ['Suportul', 'Nr.'], [450, 60], gol(
                   'cartea tipărită cu litere mobile', 'sulul de papirus', 'cartea electronică',
                   'tăblița de lut', 'hârtia scrisă de mână', 'pergamentul din piele de vițel'), row_h=20),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după articolul de pe blog.', AF, [440, 70], gol(
                 'Gutenberg a fost primul om din lume care a tipărit.',
                 'Gutenberg compunea paginile din litere separate, refolosibile.',
                 'Biblia lui Gutenberg avea peste o mie două sute de pagini.',
                 'Pe la 1560, Coresi a tipărit la Brașov o carte în limba română.',
                 'Cărțile electronice au făcut să nu se mai vândă cărți tipărite.',
                 'O Biblie copiată de mână costa mai puțin decât una tipărită.'), row_h=20),
         ],
         [
             T(3, 'Tipărită sau electronică?', 'Scrie câte două avantaje pentru fiecare.',
               ['Cartea tipărită', 'Cartea electronică'], [255, 255], rows=2, row_h=40),
             L(4, 'Bilet pentru un copist', [
                 'Scrie-i unui călugăr copist din Evul Mediu un bilet (4-5 propoziții) în care îi explici ce este',
                 'o tabletă și cum citesc copiii azi.'], 4),
         ]),

    fisa(6, 'p. 177',
         'Reper: Când te documentezi online, notezi titlul, autorul, adresa (sursa) și data consultării, alegi informațiile '
         'utile și verifici dacă sursa e de încredere (are autor, e un site oficial, citează alte surse). Blogul este un '
         'jurnal online, cu articole periodice.',
         [
             T(1, 'Sursă de încredere?', 'Scrie DA sau NU și explică.',
               ['Sursa', 'DA / NU', 'De ce?'], [240, 60, 210], gol3(
                   'site-ul oficial al muzeului', 'o postare anonimă: „Gutenberg era român”',
                   'un dicționar online (dexonline)', 'un articol cu autor, dată și surse',
                   'un comentariu fără nume sub o știre'), row_h=24),
             T(2, 'Fișa de documentare', 'Completează fișa pentru articolul citit în clasă.',
               ['Rubrica', 'Ce notez'], [170, 340], gol(
                   'titlul', 'autorul', 'unde a apărut', 'data consultării', 'tema',
                   'trei informații noi', 'o întrebare care mi-a rămas'), row_h=24),
         ],
         [
             L(3, 'Cuvinte din lumea digitală', 'Scrie câte o propoziție cu: link, blog, postare, a descărca.', 3),
             L(4, 'Opinia ta', [
                 'Crezi că peste 50 de ani vom mai citi cărți tipărite? Scrie o opinie (5-6 propoziții) cu două',
                 'argumente, dintre care unul luat din articol.'], 4),
         ]),

    fisa(7, 'pp. 178-179',
         'Reper (manual, pp. 178-179): Identitatea națională este sentimentul de apartenență la o națiune: istorie comună, '
         'eroi, limbă, monumente, peisaje, tradiții. Stema României evocă istoria țării: vulturul de aur cu cruce, pe scut '
         'albastru, și, pe pieptul lui, simbolurile provinciilor istorice.',
         [
             T(1, 'Elementele stemei', 'Scrie ce simbolizează fiecare element, după textul din manual.',
               ['Elementul', 'Ce simbolizează'], [200, 310], gol(
                   'vulturul de aur cu cruce', 'scutul albastru', 'sceptrul', 'sabia', 'coroana de oțel'), row_h=24),
             T(2, 'Provincia și simbolul ei', 'Scrie provincia istorică.',
               ['Simbolul de pe stemă', 'Provincia'], [330, 180], gol(
                   'un bour cu o stea între coarne', 'șapte turnuri', 'un pod cu două arce și un leu',
                   'un vultur cu o cruce în cioc, soare și lună', 'doi delfini'), row_h=20),
         ],
         [
             X(3, 'Oficial sau neoficial?', [
                 'Scrie O (simbol oficial al României) sau N (simbol neoficial, dar îndrăgit).',
                 'drapelul ___     stema ___     imnul ___     stejarul ___     ia ___     sigiliul ___',
                 'Ziua Națională (1 Decembrie) ___     sarmalele ___']),
             L(4, 'Blazonul clasei', [
                 'Descrie blazonul clasei tale: patru simboluri (un obiect, un animal, o culoare, o deviză)',
                 'și ce înseamnă fiecare (4-5 propoziții). Poți desena blazonul pe verso.'], 4),
         ]),

    fisa(9, 'pp. 183-184',
         'Reper (manual, p. 184): A explica înseamnă a lămuri cauza (de ce?) sau felul în care se face ceva (cum?), cu '
         'cuvinte ca pentru că, deoarece, deci, de aceea. A recomanda înseamnă a sfătui, a propune (Îți recomand să...). '
         'A afirma înseamnă a susține că ceva e adevărat.',
         [
             T(1, 'Ce face vorbitorul?', 'Scrie E (explică), R (recomandă) sau A (afirmă).',
               ['Enunțul', 'E / R / A'], [430, 80], gol(
                   'Îți recomand să iei umbrela.',
                   'Pământul se învârte în jurul Soarelui.',
                   'Am întârziat pentru că autobuzul s-a stricat.',
                   'Te sfătuiesc să vizitezi Muzeul Satului.',
                   'Ca să pornești tableta, ții apăsat butonul trei secunde.',
                   'Recunosc că n-am citit cartea.'), row_h=20),
             X(2, 'Cuvinte care leagă explicația', [
                 'Completează cu: pentru că, deci, de aceea, deoarece.',
                 'a) N-am venit la antrenament ______________ eram răcit.',
                 'b) Plouă, ______________ luăm umbrela.',
                 'c) Biblioteca era închisă; ______________ am citit în parc.',
                 'd) Cărțile vechi sunt valoroase ______________ au fost făcute de mână.']),
         ],
         [
             L(3, 'Drumul prin școală', [
                 'Explică unui coleg nou cum ajunge de la intrarea școlii la bibliotecă (sau la sala de sport):',
                 'trei repere, direcțiile, cât durează și o recomandare.'], 3),
             L(4, 'Recomandarea ta de carte', [
                 'Recomandă-le colegilor o carte: o afirmație despre ea, o explicație (cu „pentru că”) și o',
                 'recomandare (4-5 propoziții).'], 3),
         ]),

    fisa(11, 'p. 185',
         'Reper (manual, p. 185): Enunțul este unitatea de bază a comunicării, construită de obicei în jurul unui predicat. '
         'Enunțul simplu are o singură propoziție; enunțul complex are două sau mai multe propoziții (două sau mai multe '
         'predicate).',
         [
             T(1, 'Simplu sau complex?', 'Scrie câte predicate are enunțul și S (simplu) sau C (complex).',
               ['Enunțul', 'Predicate', 'S / C'], [370, 70, 70], gol3(
                   'Monica scrie în jurnal în fiecare seară.',
                   'Am intrat în muzeu și ghidul ne-a întâmpinat.',
                   'Tiparnița veche stătea într-un colț al sălii.',
                   'Plouă, dar noi vizităm cetatea.',
                   'Am ajuns, am mâncat, am adormit imediat.',
                   'Pe drum, prin fereastra autocarului, priveam munții.'), row_h=20),
             X(2, 'Din două, unul', [
                 'Unește enunțurile simple într-un enunț complex.',
                 'a) Ghidul a vorbit. Noi am ascultat. → ________________________________________________',
                 'b) Am cumpărat o carte. Am citit-o în tren. → __________________________________________',
                 'Desparte enunțul complex în enunțuri simple.',
                 'c) Am vizitat biblioteca și am văzut incunabule. → _____________________________________']),
         ],
         [
             L(3, 'Excursia în enunțuri', 'Scrie trei enunțuri simple și trei enunțuri complexe despre o excursie. Subliniază predicatele.', 5),
         ]),

    fisa(12, 'p. 186',
         'Reper (manual, p. 185): După scopul comunicării, enunțurile sunt asertive (informează; punct), interogative '
         '(cer o informație; semnul întrebării), imperative (ordin, rugăminte; semnul exclamării) și exclamative '
         '(emoții; semnul exclamării).',
         [
             T(1, 'Ce tip de enunț?', 'Scrie tipul fiecărui enunț.',
               ['Enunțul', 'Tipul'], [330, 180], gol(
                   'Muzeul se deschide la ora zece.', 'Ai văzut tiparnița lui Coresi?', 'Nu atinge exponatele!',
                   'Ce frumoasă e cetatea!', 'Cine a scris jurnalul?', 'Vorbiți mai încet, vă rog!'), row_h=20),
             X(2, 'Semnul potrivit', [
                 'Pune semnul de punctuație de la sfârșitul enunțului.',
                 'a) Cât costă biletul la muzeu __        b) Închide ușa, te rog __',
                 'c) Ce priveliște minunată __            d) Excursia începe mâine dimineață __',
                 'e) Oare vom ajunge la timp __           f) Ascultați-l pe ghid __']),
         ],
         [
             T(3, 'O idee, patru enunțuri', 'Transformă fiecare enunț asertiv în celelalte tipuri.',
               ['Tipul', '„Autobuzul a sosit.”', '„Cartea e interesantă.”'], [110, 200, 200], gol3(
                   'interogativ', 'exclamativ', 'imperativ'), row_h=30),
             L(4, 'Mesajul fără punctuație', [
                 'Rescrie mesajul, cu majusculele și semnele de punctuație potrivite:',
                 '„unde ești te așteptăm de o oră vino repede ce frig e aici”'], 2),
         ]),

    fisa(13, 'p. 187',
         'Reper (manual, p. 188): Într-o compunere narativă sau descriptivă se pot integra, ca într-un colaj, desene, '
         'fotografii, grafice, scheme. Cititorul vede astfel locurile, oamenii, atmosfera. Imaginea nu repetă textul, '
         'ci îl completează, iar legenda spune ce nu se vede.',
         [
             T(1, 'Ce material grafic se potrivește?', 'Alege: hartă, fotografie, schemă, grafic, desen sau orar.',
               ['Textul', 'Materialul grafic'], [370, 140], gol(
                   'drumul de la cabană la lac', 'câți elevi din clasă preferă fiecare sport',
                   'cum arăta bunica în tinerețe', 'programul unei zile de excursie',
                   'o ființă imaginară', 'etapele tipăririi unei cărți'), row_h=20),
             X(2, 'Legenda imaginii', [
                 'Model: nu „Acesta este un turn.”, ci „Turnul Chindiei, construit de Vlad Țepeș, se vede din tot orașul.”',
                 'Scrie o legendă care adaugă informație pentru:',
                 'a) o fotografie cu Biblioteca Batthyaneum: ____________________________________________',
                 'b) o hartă cu traseul Alba Iulia – Brașov – Târgoviște: _________________________________',
                 'c) un desen cu tiparnița lui Coresi: ___________________________________________________']),
         ],
         [
             T(3, 'Schița paginii tale', [
                 'Schițează o pagină de jurnal de călătorie: unde pui titlul, textul, imaginea și legenda.',
                 'Scrie în chenar ce ar cuprinde fiecare parte.'],
               ['Schița paginii'], [510], rows=1, row_h=430),
         ]),

    fisa(14, 'p. 188',
         'Reper (manual, p. 188): Pentru o compunere cu material grafic: alegi locul (real sau imaginar), faci planul, '
         'concepi desenul, harta sau schema, scrii textul fără să repeți imaginea, pui legenda, revizuiești și așezi îngrijit '
         'textul și imaginea în pagină.',
         [
             T(1, 'Planul compunerii', 'Notează ce scrii în fiecare parte și ce imagine pui alături.',
               ['Partea', 'Ce scriu', 'Ce imagine pun'], [100, 260, 150], gol3(
                   'introducere', 'cuprins', 'încheiere'), row_h=56),
             T(2, 'Materialul tău grafic', 'Desenează harta, schema sau desenul care va însoți textul.',
               ['Desenul, harta sau schema ta'], [510], rows=1, row_h=250),
             L(3, 'Legenda', 'Scrie legenda materialului tău grafic (o propoziție care adaugă informație).', 1),
         ],
         [
             T(4, 'Lista de control', 'Scrie DA sau NU: întâi pentru lucrarea ta, apoi pentru lucrarea colegului.',
               ['Criteriul', 'Eu', 'Colegul'], [370, 70, 70], gol3(
                   'Textul are un titlu potrivit.', 'Imaginea se leagă de ce scriu.',
                   'Imaginea are legendă.', 'Textul nu repetă ce se vede în imagine.',
                   'Are introducere, cuprins și încheiere.', 'Pagina e așezată îngrijit.',
                   'Am verificat ortografia și punctuația.'), row_h=24),
             L(5, 'Sugestia colegului', 'Colegul îți scrie un lucru reușit și o sugestie pentru lucrarea ta.', 3),
         ]),

    fisa(15, 'pp. 189-190',
         'Recapitulare (manual, pp. 168-184): textul narativ nonliterar (jurnalul, participanții, timpul și spațiul reale), '
         'semnificațiile textului, cartea românească, identitatea națională, actele de limbaj a explica, a recomanda, a afirma.',
         [
             X(1, 'O zi la Putna', ['Citește pagina de jurnal (scrisă pentru fișă).', PUTNA]),
             T(2, 'Indicii textului', 'Completează.',
               ['Categoria', 'Din text'], [170, 340], gol(
                   'data', 'durata drumului', 'locurile', 'participanții'), row_h=24),
             L(3, 'Întrebări despre text', [
                 'a) De ce este un text narativ nonliterar? (două argumente)  b) Ce informații istorice aflăm?',
                 'c) Ce legătură are textul cu istoria cărții românești?'], 3),
         ],
         [
             X(4, 'Acte de limbaj', [
                 'Scrie ce face vorbitorul: explică, recomandă sau afirmă.',
                 'a) „Mănăstirea a fost ctitorită de Ștefan cel Mare.” → ______________',
                 'b) „Vă recomand să nu grăbiți vizita.” → ______________',
                 'c) „Literele sunt colorate pentru că așa se împodobeau manuscrisele.” → ______________']),
             L(5, 'Recomandă un loc', [
                 'Recomandă unui prieten să viziteze un loc istoric din România: o afirmație, o explicație',
                 'și o recomandare (4-5 propoziții).'], 4),
         ]),

    fisa(16, 'pp. 189-190',
         'Recapitulare (manual, pp. 185-188): enunțul simplu și complex, tipurile de enunț (asertiv, interogativ, '
         'imperativ, exclamativ) și punctuația lor, prezentarea textului cu desene, fotografii, hărți, scheme.',
         [
             T(1, 'Enunțuri', 'Scrie tipul enunțului și dacă e simplu sau complex.',
               ['Enunțul', 'Tipul', 'Simplu / complex'], [290, 110, 110], gol3(
                   'Ai fost vreodată la Putna?', 'Ce frumoase sunt literele pictate!',
                   'Ghidul a vorbit, iar noi am notat.', 'Nu fotografiați manuscrisele!',
                   'Am plecat dimineața și am ajuns la prânz.'), row_h=20),
             X(2, 'Punctuația dialogului', [
                 'Pune semnele de punctuație la sfârșitul enunțurilor.',
                 '— Ai terminat jurnalul __       — Aproape __ Mai am de lipit o fotografie __',
                 '— Ce idee bună __ Arată-mi-l și mie __']),
             X(3, 'Transformă', [
                 '„Biblioteca are cărți vechi.”',
                 'interogativ: _____________________________________________________________',
                 'exclamativ: ______________________________________________________________',
                 'imperativ (cu verbul „a vizita”): _____________________________________________']),
         ],
         [
             L(4, 'Pagina de jurnal cu imagine', [
                 'Scrie o pagină de jurnal (8-10 rânduri) despre o vizită (muzeu, bibliotecă, oraș). Folosește toate cele',
                 'patru tipuri de enunț. La sfârșit, notează ce imagine ai lipi alături și legenda ei.'], 5),
         ]),
]
