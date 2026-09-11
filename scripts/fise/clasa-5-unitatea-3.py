# Fișe de exerciții, clasa a V-a, Unitatea III „Pe strada mea”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 5). Textele fără autor
# sunt create pentru fișe; textele sub drepturi de autor sunt doar parafrazate.
# Rezolvările: notite-profesor/clasa-5/unitatea-3/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-3.py

SUB = 'Clasa a V-a · Unitatea III, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 5, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-5/unitatea-3/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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

FISE = [
    fisa(2, 'pp. 80-81',
         'Reper: În poezia „O stradă cu sentimente”, Ana Blandiana descrie o stradă ca toate celelalte, dar ale cărei '
         'case au, fiecare, un caracter și un sentiment: unele se bucură, altele bârfesc, se ceartă sau visează.',
         [
             T(1, 'Fiecare casă, cu felul ei', 'Scrie, pe scurt, ce face sau ce simte fiecare casă din poezie.',
               ['Casa (după poezie)', 'Ce face, ce simte'], [260, 250], gol(
                   'casa cu pereți portocalii',
                   'gardul de zid cu cioburi deasupra',
                   'vila cu iederă și obloane închise',
                   'căsuța albă, cu mușcate',
                   'casa din colț, cu etaj și balcon',
                   'cele două clădiri înalte și subțiri',
                   'casa cu alee de zgură'), row_h=20),
             X(2, 'Detaliile străzii', [
                 'Încercuiește varianta corectă.',
                 'a) Pe gardul de zid sunt: flori  /  cioburi de sticlă  /  sârmă.',
                 'b) În căsuța albă locuiește o bătrânică împreună cu: un câine / o pisică și o furnică.',
                 'c) Din blocul de beton, un bărbat strigă să fie: liniște  /  lumină  /  cald.',
                 'd) Pe aleea de zgură se află: o fântână  /  un pitic de ghips și un cocoș de fier.']),
             X(3, 'Cuvinte din subsol', [
                 'Completează cu: țuguiat, dibaci, impertinent, horbotă, perfidă, infimă.',
                 'a) Acoperișul casei e ______________, ca o căciulă de vrăjitor.',
                 'b) Meșterul ______________ a reparat ceasul într-o clipă.',
                 'c) Nu fi ______________ cu bunicii!',
                 'd) Pe masă era un șervet cu ______________ albă.',
                 'e) Vulpea ______________ se prefăcea prietenoasă.',
                 'f) Lângă un elefant, o furnică pare o ființă ______________.']),
         ],
         [
             T(4, 'Strada ta, cu sentimente', 'Alege trei clădiri de pe strada ta și imaginează-ți ce sentiment ar avea.',
               ['Clădirea', 'Cum arată', 'Ce sentiment ar avea? De ce?'], [140, 170, 200], rows=3, row_h=40),
             L(5, 'Casa care îți seamănă', 'Dacă ai fi una dintre casele din poezie, care ai fi? Explică în 3-4 propoziții.', 3),
         ]),

    fisa(3, 'pp. 82-83',
         'Reper (manual, pp. 82-83): Textul descriptiv prezintă un obiect, o ființă, un cadru din natură sau un fenomen, '
         'cu părțile și trăsăturile lui. Textul descriptiv literar transmite impresii subiective, într-un limbaj creativ. '
         'Personificarea este figura de stil prin care se atribuie însușiri omenești unor ființe necuvântătoare, obiecte '
         'sau fenomene ale naturii.',
         [
             T(1, 'Personificare sau nu?', 'Scrie DA sau NU. Dacă e personificare, notează ce are omenesc.',
               ['Propoziția', 'DA / NU', 'Ce are omenesc?'], [260, 60, 190],
               [['Vântul fluieră printre crengi.', '', ''], ['Vântul bate dinspre nord.', '', ''],
                ['Casa veche oftează când se lasă seara.', '', ''], ['Casa veche are acoperiș de țiglă.', '', ''],
                ['Luna privește curioasă pe fereastră.', '', ''], ['Ploaia a udat grădina.', '', '']], row_h=20),
             T(2, 'Felinarul de pe strada mea', 'Scrie câte o trăsătură pentru fiecare parte a felinarului.',
               ['Partea', 'Trăsătura'], [150, 360], gol('stâlpul', 'capul de sticlă', 'lumina', 'umbra lui'), row_h=24),
         ],
         [
             X(3, 'Obiectiv sau subiectiv?', [
                 'Încercuiește, din fiecare pereche, propoziția care aparține unei descrieri literare.',
                 'a) „Blocul are zece etaje și două lifturi.”  /  „Blocul uriaș își strânge locatarii în brațe de beton.”',
                 'b) „Parcul se trezește și își scutură roua de pe bănci.”  /  „Parcul are trei alei și un loc de joacă.”',
                 'c) „Podul are o lungime de 50 de metri.”  /  „Podul își întinde spinarea peste râu, obosit.”']),
             L(4, 'Personifică!', [
                 'Rescrie propozițiile, dând obiectelor însușiri omenești.',
                 'a) Ușa s-a deschis.     b) Semaforul s-a făcut roșu.     c) Frunzele cad din copac.'], 3),
         ]),

    fisa(4, 'p. 84',
         'Reper: Interpretezi o poezie când te întrebi ce spun imaginile ei dincolo de cuvinte. În „O stradă cu '
         'sentimente”, casele „simt” ca oamenii; poezia ne face să privim altfel locurile pe lângă care trecem zilnic.',
         [
             T(1, 'Oamenii din spatele caselor', 'Ce ne spune fiecare casă despre oamenii care locuiesc în ea sau lângă ea?',
               ['Casa (după poezie)', 'Ce aflăm despre oameni'], [230, 280], gol(
                   'casa cu pereți portocalii, care râde',
                   'gardul cu cioburi, care urăște copiii',
                   'vila cu obloane închise, care visează',
                   'blocul în care se mută mereu cineva'), row_h=30),
             T(2, 'De acord sau nu?', 'Scrie DA sau NU și un argument.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [250, 60, 200],
               [['Casele simt, fiindcă oamenii le dau viață.', '', ''],
                ['Poeta vrea să spună că toate străzile sunt la fel.', '', ''],
                ['Finalul: e greu să spui tot despre o stradă.', '', '']], row_h=34),
             X(3, 'Alt titlu', [
                 'Care titlu ar păstra cel mai bine sensul poeziei? Încercuiește-l și explică de ce.',
                 'Strada de pe hartă   ·   Casele care simt   ·   Blocul de beton',
                 'Pentru că ___________________________________________________________________________']),
         ],
         [
             L(4, 'Scrisoarea unei case', [
                 'Una dintre casele din poezie îi scrie poetei: îi mulțumește sau se plânge de felul în care',
                 'a fost descrisă. Scrie scrisoarea în 5-6 propoziții, cu vocea casei.'], 3),
         ]),

    fisa(5, 'pp. 85-86',
         'Reper: În fragmentul din „O pisică” de Tudor Arghezi (volumul „Cartea cu jucării”, 1931), o pisică neagră intră '
         'într-o zi, pe neașteptate, într-o casă și rămâne acolo. Familia o primește cu daruri, iar autorul o descrie cu '
         'multă imaginație, ca pe o ființă nobilă și misterioasă.',
         [
             T(1, 'Cum e primită pisica?', 'Scrie cum reacționează fiecare personaj la venirea pisicii.',
               ['Personajul', 'Reacția (în cuvintele tale)'], [150, 360], gol(
                   'povestitorul', 'Baruțu', 'Mițura', 'bunica'), row_h=26),
             T(2, 'Literar sau nonliterar?', 'Scrie L (descriere literară) sau N (descriere nonliterară).',
               ['Propoziția', 'L / N'], [440, 70], gol(
                   'Ochii pisicii sunt două lămpi aurii în întuneric.',
                   'Pisica are gheare pe care le poate retrage.',
                   'Labele ei sunt pensule moi, cu care pictează liniștea.',
                   'Pisica mea are trei ani și cântărește patru kilograme.'), row_h=20),
             X(3, 'Comparațiile tale', [
                 'Completează cu comparații inventate de tine.',
                 'a) Pisica toarce ca ______________________.     b) Sare pe dulap ca ______________________.',
                 'c) Doarme pe pernă ca ______________________.  d) Ochii îi strălucesc ca ______________________.']),
         ],
         [
             T(4, 'Arghezi și Blandiana', 'Compară cele două texte citite.',
               ['', '„O stradă cu sentimente”', '„O pisică”'], [150, 180, 180],
               [['Ce se descrie?', '', ''], ['O personificare', '', ''],
                ['Ce sentiment transmite?', '', '']], row_h=34),
             L(5, 'Un musafir neașteptat', [
                 'Descrie în 4-5 propoziții un animal care intră într-o zi, neașteptat, în casa ta.',
                 'Folosește o comparație și o personificare.'], 3),
         ]),

    dict(titlu='Fișă de exerciții — Textul descriptiv nonliterar. Persana', **fisa(6, 'pp. 87-89',
         'Reper (manual, p. 88): Textul descriptiv nonliterar prezintă în detaliu un obiect, o ființă, un peisaj sau un '
         'fenomen, cu informații concrete și reale. Tonul este neutru, iar limbajul este precis, cu mulți termeni din '
         'domeniul temei. Textul literar, în schimb, transmite impresii subiective.',
         [
             T(1, 'Aspectul și detaliile', 'Scrie aspectul descris: corpul, blana, capul, urechile, ochii sau temperamentul.',
               ['Detaliile (după articol)', 'Aspectul'], [380, 130], gol(
                   'mici, triunghiulare, așezate mai jos decât la alte rase',
                   'deasă, în două straturi, se încâlcește ușor',
                   'rotund, cu craniul lat',
                   'mari, rotunzi, în ton cu blana',
                   'calmă, afectuoasă, cam leneșă',
                   'compact, puternic, cu spatele scurt'), row_h=20),
             T(2, 'Neutru, subiectiv sau sfat?', 'Scrie N (neutru), S (subiectiv) sau SF (sfat pentru cititor).',
               ['Enunțul', 'N / S / SF'], [430, 80], gol(
                   'Urechile sunt mici și triunghiulare.',
                   'Persana este un ghem pufos, încântător.',
                   'Dacă vrei o persană, îngrijește-i zilnic blana.',
                   'Ochii sunt mari și rotunzi.'), row_h=20),
             X(3, 'SINELG, pe un text nou', [
                 'Pune pe margine semnele: o bifă (știam), – (altfel decât știam), + (nou), ? (neclar).',
                 '„Bufnița este o pasăre care vânează mai ales noaptea. Își poate roti capul foarte mult, pentru că',
                 'ochii nu i se mișcă în orbite. Penele speciale de pe aripi îi permit să zboare aproape fără zgomot.”']),
         ],
         [
             T(4, 'Două descrieri ale pisicii', 'Compară articolul despre persană cu fragmentul lui Arghezi.',
               ['', 'Articolul „Persana...”', '„O pisică” (Arghezi)'], [130, 190, 190],
               [['Scopul', '', ''], ['Tonul', '', ''], ['Limbajul', '', ''], ['Un exemplu', '', '']], row_h=30),
             L(5, 'Anunț de adopție', [
                 'Scrie un anunț de adopție pentru un animal de la adăpost: talie, blană, culoare,',
                 'temperament, îngrijire. Folosește un limbaj precis și un ton neutru (4-5 propoziții).'], 3),
         ])),

    fisa(7, 'pp. 90-92',
         'Reper (manual, p. 90): Tradițiile și obiceiurile fac parte din cultura unui popor și se transmit din generație '
         'în generație. Sărbătorile de iarnă se petrec diferit de la o comunitate la alta, dar au și aspecte comune, '
         'care apropie oameni din culturi diferite; colindatul este una dintre aceste tradiții.',
         [
             X(1, 'Intrusul', [
                 'Taie cuvântul care nu ține de sărbătorile de iarnă.',
                 'a) colindul, bradul, cozonacul, iepurașul          b) Steaua, Capra, Plugușorul, ouăle roșii',
                 'c) Ajunul Crăciunului, Anul Nou, 1 iunie, Boboteaza']),
             T(2, 'Obiceiul și sărbătoarea', 'Scrie sărbătoarea de care ține fiecare obicei: Crăciunul sau Anul Nou.',
               ['Obiceiul', 'Sărbătoarea', 'Obiceiul', 'Sărbătoarea'], [150, 105, 150, 105],
               perechi(('Plugușorul', 'Steaua'), ('Sorcova', 'colindatul'), ('împodobirea bradului', 'urarea „La mulți ani!”')),
               row_h=20),
             T(3, 'Sărbători de iarnă în alte țări', [
                 'Potrivește: A = Italia   B = Olanda   C = Suedia   D = Germania'],
               ['Obiceiul', 'Litera'], [440, 70], gol(
                   'Sinterklaas vine cu daruri pe 5-6 decembrie.',
                   'Vrăjitoarea Befana aduce daruri de Bobotează.',
                   'Pe 13 decembrie, o fată cu o coroană de lumânări sărbătorește Sfânta Lucia.',
                   'De aici vine colindul „O, brad frumos” („O Tannenbaum”).'), row_h=20),
         ],
         [
             T(4, 'La noi și în altă parte', 'Compară sărbătorile de iarnă de acasă cu cele dintr-o țară de la ex. 3.',
               ['', 'La noi', 'În: __________'], [150, 180, 180],
               [['Cine aduce darurile?', '', ''], ['Când?', '', ''], ['Ce se cântă?', '', ''], ['Ce se mănâncă?', '', '']],
               row_h=28),
             L(5, 'Pregătirile din familia mea', 'Povestește în 4-5 propoziții cum se pregătește familia ta de sărbătorile de iarnă.', 3),
         ]),

    fisa(9, 'pp. 92-93',
         'Reper (manual, p. 92): Ascultarea activă înseamnă să auzi clar mesajul, să nu-l întrerupi pe vorbitor, să pui '
         'întrebări de clarificare, să reformulezi ce ai înțeles, să păstrezi contactul vizual, să-l încurajezi pe '
         'vorbitor și să rămâi concentrat.',
         [
             T(1, 'Ascultător activ sau nu?', 'Scrie A (ascultare activă) sau N (nu e ascultare activă).',
               ['Comportamentul', 'A / N'], [440, 70], gol(
                   'Dă din cap și spune „aha”, ca să arate că urmărește.',
                   'Se uită pe telefon în timp ce colegul povestește.',
                   'Întreabă: „Adică vrei să spui că...?”',
                   'Îl întrerupe ca să-și povestească propria pățanie.',
                   'Privește vorbitorul în ochi.',
                   'La final, spune pe scurt ce a înțeles.'), row_h=20),
             X(2, 'A auzi sau a asculta?', [
                 'Completează cu forma potrivită a verbului a auzi sau a asculta.',
                 'a) Am ______________ un zgomot în curte.        b) Te rog să mă ______________ până la capăt.',
                 'c) N-am ______________ ce a spus, era gălăgie.   d) Elevii au ______________ povestea cu atenție.']),
             L(3, 'Ghicitoarea ta', [
                 'Scrie o ghicitoare de două rânduri despre un obiect de pe strada ta. Colegul are voie',
                 'să-ți pună cel mult trei întrebări ca s-o ghicească.']),
         ],
         [
             T(4, 'Reformulează', 'Scrie ce ai înțeles, începând cu „Deci vrei să spui că...”.',
               ['Ce spune colegul', 'Reformularea ta'], [255, 255], gol(
                   'Nu vin la antrenament, o ajut pe bunica, e bolnavă.',
                   'La mate nu înțeleg fracțiile și mi-e rușine să întreb.',
                   'Hai să ne jucăm în parc, în curte e prea aglomerat.'), row_h=40),
             T(5, 'Întrebarea de clarificare', 'Mesajele sunt neclare. Scrie întrebarea pe care ai pune-o.',
               ['Mesajul', 'Întrebarea ta'], [220, 290], gol(
                   '„Ne vedem acolo, la ora aia.”', '„Adu-mi cartea aia.”', '„A fost super ieri!”'), row_h=30),
         ]),

    fisa(10, 'pp. 94-95',
         'Reper (manual, pp. 94-95): Substantivul denumește ființe, lucruri, fenomene ale naturii, însușiri, acțiuni, stări '
         'sufletești. Poate fi comun sau propriu (scris cu literă mare). Are trei genuri (masculin: un-doi; feminin: '
         'o-două; neutru: un-două) și două numere; desinențele arată genul și numărul.',
         [
             T(1, 'Ce denumește?', 'Scrie: ființă, lucru, fenomen al naturii, însușire, acțiune sau stare sufletească.',
               ['Substantivul', 'Ce denumește', 'Substantivul', 'Ce denumește'], [120, 135, 120, 135],
               perechi(('bucurie', 'ninsoare'), ('curaj', 'alergare'), ('felinar', 'vecin')), row_h=20),
             T(2, 'Genul și pluralul', 'Scrie genul și forma de plural.',
               ['Substantivul', 'Genul', 'Pluralul'], [170, 150, 190],
               [['trotuar', '', ''], ['stradă', '', ''], ['copac', '', ''], ['balcon', '', ''], ['vecină', '', ''],
                ['nor', '', '']], row_h=20),
             L(3, 'Literă mare sau mică?', [
                 'Rescrie corect textul, cu literă mare la substantivele proprii:',
                 '„pe strada florilor din brașov locuiește prietenul meu andrei, care are un câine pe nume azor.”'], 2),
         ],
         [
             X(4, 'Pluralul corect', [
                 'Încercuiește forma corectă de plural.',
                 'a) ghiozdane / ghiozdanuri     b) papuci / papucuri     c) biscuiți / biscuite',
                 'd) tramvaie / tramvaiuri     e) radiouri / radii']),
             L(5, 'Anunțul asociației de proprietari', [
                 'Scrie un anunț de 4 propoziții pentru locatarii blocului tău. Folosește cel puțin trei',
                 'substantive proprii și trei substantive la plural. Subliniază-le.'], 3),
         ]),

    fisa(11, 'pp. 96-97',
         'Reper (manual, pp. 96-97): Articolul arată cât de cunoscut e obiectul. Articolul hotărât se lipește la sfârșitul '
         'substantivului (semaforul, strada, copiii); articolul nehotărât stă înaintea lui (un, o, niște, unui, unei, unor). '
         'Substantivul fără articol este nearticulat (semafor).',
         [
             T(1, 'Ce articol are?', 'Scrie H (articol hotărât), N (articol nehotărât) sau – (nearticulat).',
               ['Cuvântul', 'H / N / –', 'Cuvântul', 'H / N / –'], [185, 70, 185, 70],
               perechi(('felinarul', 'o bancă'), ('trotuar', 'niște copii'), ('străzile', 'vecinului'), ('unei case', 'parc')),
               row_h=20),
             T(2, 'Articulează', 'Scrie forma articulată hotărât și forma articulată nehotărât, la singular.',
               ['Substantivul', 'Articulat hotărât', 'Articulat nehotărât'], [150, 180, 180],
               [['semafor', '', ''], ['stradă', '', ''], ['copil', '', ''], ['mașină', '', ''], ['tei', '', '']], row_h=20),
             X(3, 'Câți de i?', [
                 'Încercuiește forma corectă.',
                 'a) (Copii / Copiii) din curte se joacă.           b) Am văzut niște (copii / copiii) pe derdeluș.',
                 'c) Toți (membri / membrii) echipei au venit.   d) Suntem (membri / membrii) ai clubului.',
                 'e) (Fii / Fiii) vecinului sunt gemeni.']),
         ],
         [
             X(4, 'Articolele din propoziții', [
                 'Subliniază cu o linie articolele hotărâte și cu două linii articolele nehotărâte.',
                 'a) Un câine latră la poarta vecinului.',
                 'b) Niște copii au construit omul de zăpadă.',
                 'c) Strada unor prieteni are o bibliotecă.']),
             L(5, 'Anunțul cu greșeli', [
                 'Anunțul are două greșeli de scriere a substantivelor articulate. Rescrie-l corect:',
                 '„Toți copii din bloc sunt invitați la serbare. Membrii noi ai clubului aduc prăjituri.',
                 'Fii vecinilor vor cânta la chitară.”'], 2),
         ]),

    fisa(12, 'p. 98',
         'Reper (manual, p. 98): Atributul este partea secundară de propoziție care determină un substantiv. Răspunde la '
         'întrebările al (a, ai, ale) cui?, care?, ce fel de?. Se exprimă prin adjectiv (strada largă) sau prin substantiv '
         '(strada bunicii, strada din centru). Substantivul determinat este centrul grupului, iar atributul, adjunctul.',
         [
             T(1, 'Pune întrebarea', 'Scrie întrebarea și atributul din fiecare grup de cuvinte.',
               ['Grupul', 'Întrebarea', 'Atributul'], [190, 160, 160],
               [['casa bunicii', '', ''], ['strada largă', '', ''], ['gardul de lemn', '', ''], ['banca din parc', '', ''],
                ['fereastra vecinilor', '', '']], row_h=20),
             X(2, 'Centru și adjunct', [
                 'Subliniază substantivul-centru și încercuiește adjunctul (atributul).',
                 'o pisică neagră     ·     lampa din hol     ·     mingea copiilor     ·     un bloc înalt']),
             T(3, 'Adjectiv sau substantiv?', 'Scrie prin ce se exprimă fiecare atribut: ADJ sau S (substantiv).',
               ['Grupul', 'ADJ / S', 'Grupul', 'ADJ / S'], [185, 70, 185, 70],
               perechi(('vânt rece', 'ușă de sticlă'), ('curtea bunicii', 'cameră luminoasă'), ('casa din colț', 'drum lung')),
               row_h=20),
         ],
         [
             L(4, 'Adaugă atribute', [
                 'Adaugă câte trei atribute fiecărei propoziții.',
                 'a) Casa are un acoperiș.     b) Câinele doarme sub un copac.'], 2),
             X(5, 'Câte atribute?', [
                 'Scrie câte atribute are fiecare propoziție și care sunt.',
                 'a) Fereastra mică a casei de lângă parc are perdele albe.  Atribute: ______________________',
                 'b) Vântul rece de iarnă bate peste oraș.  Atribute: ______________________']),
         ]),

    fisa(13, 'p. 99',
         'Reper (manual, p. 99): Prepoziția leagă un atribut de substantivul pe care îl determină și se analizează împreună '
         'cu cuvântul pe care îl precedă. Prepozițiile sunt simple (cu, de, în, la, lângă, pe, pentru) sau compuse (de la, '
         'de lângă, de pe, de sub, pe la; despre, dinspre, înspre).',
         [
             T(1, 'Simplă sau compusă?', 'Scrie S (simplă) sau C (compusă).',
               ['Prepoziția', 'S / C', 'Prepoziția', 'S / C'], [185, 70, 185, 70],
               perechi(('lângă', 'de lângă'), ('pe', 'dinspre'), ('cu', 'pe sub'), ('până', 'de la')), row_h=20),
             X(2, 'Prepoziția care lipsește', [
                 'Completează cu o prepoziție compusă potrivită.',
                 'a) Mingea ______________ mașină e a mea.      b) Casa ______________ râu are o moară.',
                 'c) Vântul ______________ munte e rece.          d) Scrisoarea ______________ bunici m-a bucurat.']),
             T(3, 'Atributul cu prepoziție', 'Scrie atributul care începe cu o prepoziție și substantivul pe care îl determină.',
               ['Propoziția', 'Atributul', 'Substantivul determinat'], [230, 140, 140],
               [['Florile din grădină au înflorit.', '', ''], ['Am primit o carte cu povești.', '', ''],
                ['Bărbatul de lângă stâlp așteaptă.', '', '']], row_h=22),
         ],
         [
             X(4, 'Prepoziția potrivită', [
                 'Încercuiește prepoziția folosită corect.',
                 'a) Stau (la / în) coadă la pâine.          b) Mă uit (la / pe) televizor.',
                 'c) Vara plecăm (la / în) mare.             d) Am o întrebare (la / pentru) dumneavoastră.']),
             L(5, 'Drumul spre școală', [
                 'Descrie în 4 propoziții drumul tău spre școală. Folosește cel puțin două prepoziții simple',
                 'și două prepoziții compuse. Subliniază-le.'], 3),
         ]),

    fisa(14, 'pp. 100-101',
         'Reper (manual, pp. 100-101): Subiectul arată cine face acțiunea exprimată de predicat și răspunde la întrebarea '
         'cine?. Poate fi simplu (un termen) sau multiplu (doi sau mai mulți termeni, legați prin virgulă sau prin și). '
         'Predicatul se acordă cu subiectul în persoană și număr; cu subiectul multiplu, acordul se face la plural.',
         [
             T(1, 'Simplu sau multiplu?', 'Scrie subiectul și felul lui: S (simplu) sau M (multiplu).',
               ['Propoziția', 'Subiectul', 'S / M'], [270, 170, 70],
               [['Vântul a doborât gardul.', '', ''], ['Maria și sora ei au făcut un om de zăpadă.', '', ''],
                ['Pe derdeluș au venit copiii, părinții și bunicii.', '', ''], ['Zăpada acoperă strada.', '', '']],
               row_h=20),
             X(2, 'Acordul corect', [
                 'Încercuiește forma corectă a predicatului.',
                 'a) Mama și tata (a plecat / au plecat) la piață.     b) Grupul de elevi (a vizitat / au vizitat) muzeul.',
                 'c) Ninsoarea și gerul (a oprit / au oprit) traficul.  d) Fiecare copil (a primit / au primit) un dar.']),
             T(3, 'Subiect sau atribut?', 'Scrie ce parte de propoziție este substantivul „strada” în fiecare propoziție.',
               ['Propoziția', 'Partea de propoziție'], [360, 150], gol(
                   'Strada doarme sub zăpadă.',
                   'Luminile străzii s-au aprins.',
                   'Copiii străzii noastre sunt prieteni.',
                   'Strada noastră a fost asfaltată.'), row_h=20),
         ],
         [
             L(4, 'Detectivul de dezacorduri', [
                 'Corectează acordul greșit.',
                 'a) Cei mai mulți copii din clasă a venit.     b) Mie îmi place florile.',
                 'c) Au fost câteva probleme, dar s-a rezolvat.'], 2),
             L(5, 'Iarna, cu subiect multiplu', 'Scrie trei propoziții despre iarnă, fiecare cu un subiect multiplu. Verifică acordul.', 2),
         ]),

    fisa(15, 'p. 102',
         'Reper (manual, p. 102): Textul descriptiv prezintă în detaliu un obiect, un loc sau o ființă și are introducere '
         '(tema descrierii), cuprins (aspectele obiectului, în detaliu) și încheiere (o concluzie, o părere personală). '
         'Înainte de a scrie, stabilești tema, elementele componente, publicul și scopul și alegi doar ce e interesant.',
         [
             T(1, 'Lampa de pe birou', 'Scrie câte o trăsătură pentru fiecare element al lămpii.',
               ['Elementul', 'Trăsătura'], [150, 360], gol('piciorul', 'abajurul', 'becul', 'întrerupătorul'), row_h=24),
             T(2, 'Introducere, cuprins sau încheiere?', 'Scrie I, C sau Î pentru fiecare fragment din descrierea unei căni.',
               ['Fragmentul', 'I / C / Î'], [430, 80], gol(
                   'Pe raftul din bucătărie stă cana din care bunicul își bea ceaiul.',
                   'Toarta e ciobită, iar pe margine are un șir de flori albastre.',
                   'Pentru mine, cana aceasta miroase a copilărie.',
                   'Înăuntru, smalțul alb s-a crăpat în mii de linii subțiri.'), row_h=20),
             T(3, 'Pentru cine scriu?', 'Scrie R (revistă pentru copii, ton amuzant) sau M (magazin online, ton informativ).',
               ['Enunțul', 'R / M'], [440, 70], gol(
                   'Cana are 300 ml și se poate spăla în mașina de vase.',
                   'Cana bunicului e un bătrân morocănos care nu suportă ceaiul rece.',
                   'Este din porțelan și are toarta ergonomică.',
                   'Florile de pe cană se ceartă care să stea mai aproape de buza ei.'), row_h=20),
         ],
         [
             L(4, 'Alege ce contează', [
                 'Scrie șase elemente ale obiectului pe care îl vei descrie. Încercuiește trei care l-ar interesa',
                 'pe un copil de vârsta ta și explică alegerea.'], 3),
         ]),

    fisa(16, 'p. 103',
         'Reper (manual, p. 103): Pentru o descriere bună: faci planul (din ce e compus obiectul, cum arată, la ce folosește, '
         'de ce e important pentru tine), alegi aspectele potrivite scopului, găsești un titlu, scrii ciorna, revizuiești '
         '(claritate, paragrafe, corectitudine) și scrii varianta finală, îngrijit.',
         [
             L(1, 'Revizuiește descrierea', [
                 'Textul repetă cuvântul „frumos”. Rescrie-l cu alte adjective, o comparație și o personificare:',
                 '„Ghiozdanul meu este frumos. Are o culoare frumoasă, albastră. Fermoarele sunt frumoase',
                 'și strălucesc. Este un ghiozdan frumos.”'], 3),
             T(2, 'Trei adjective', 'Scrie câte un adjectiv pentru formă, culoare și material.',
               ['Obiectul', 'Forma', 'Culoarea', 'Materialul'], [120, 130, 130, 130],
               [['o minge', '', '', ''], ['un fular', '', '', ''], ['o cheie', '', '', '']], row_h=22),
         ],
         [
             T(3, 'Două stele și o dorință', [
                 'Citește descrierea colegului. Scrie două lucruri reușite (stele) și o sugestie (dorință).',
                 'Numele colegului: ______________________'],
               ['', 'Ce ai scris'], [110, 400], gol('Steaua 1', 'Steaua 2', 'Dorința'), row_h=40),
             L(4, 'Încheierea', 'Scrie o încheiere de 2-3 propoziții pentru descrierea ta, cu o părere personală despre obiect.', 2),
         ]),

    fisa(17, 'pp. 104-105',
         'Recapitulare (manual, pp. 80-93): textul descriptiv literar și nonliterar, personificarea, elementele '
         'componente și trăsăturile obiectului descris, ascultarea activă.',
         [
             X(1, 'Farul, în două texte', [
                 'Citește cele două descrieri.',
                 'A. „La marginea orașului, farul cel bătrân veghează marea. Își rotește ochiul de lumină ca un',
                 'paznic care nu doarme niciodată. Treptele lui de fier, roase de sare, gem sub pașii vizitatorilor,',
                 'iar vântul îi cântă printre ferestre cântece de corăbieri.”',
                 'B. „Farul are 32 de metri înălțime și este construit din cărămidă. Lumina lui se vede de la',
                 'aproximativ 20 de kilometri. În interior, o scară în spirală cu 150 de trepte duce la camera lămpii.”']),
             T(2, 'Literar sau nonliterar?', 'Completează tabelul.',
               ['', 'Textul A', 'Textul B'], [130, 190, 190],
               [['Felul descrierii', '', ''], ['Tonul', '', ''], ['Limbajul', '', ''], ['Un exemplu', '', '']], row_h=26),
             T(3, 'Personificările din textul A', 'Scrie două personificări și ce însușire omenească primește farul.',
               ['Personificarea', 'Ce are omenesc?'], [255, 255], rows=2, row_h=26),
         ],
         [
             T(4, 'Aspecte și trăsături (textul B)', 'Scrie trăsătura fiecărui aspect.',
               ['Aspectul', 'Trăsătura'], [170, 340], gol('înălțimea', 'materialul', 'lumina', 'interiorul'), row_h=22),
             L(5, 'Întrebări pentru ghidul farului', 'Scrie două întrebări de clarificare pe care i le-ai pune ghidului care îți prezintă farul.', 1),
             L(6, 'Farul, pentru un pliant turistic', [
                 'Descrie farul în 4-5 propoziții pentru un pliant turistic: informații exacte, dar și',
                 'o frază care să-i convingă pe turiști să-l viziteze.'], 3),
         ]),

    fisa(18, 'pp. 104-105',
         'Recapitulare (manual, pp. 94-103): substantivul (fel, gen, număr), articolul hotărât și nehotărât, atributul, '
         'prepoziția simplă și compusă, subiectul simplu și multiplu, acordul predicatului cu subiectul, descrierea.',
         [
             T(1, 'Fișa substantivului', 'Completează analiza fiecărui substantiv.',
               ['Substantivul', 'Felul', 'Genul', 'Numărul', 'Articolul'], [120, 90, 90, 90, 120],
               [['farul', '', '', '', ''], ['marea', '', '', '', ''], ['vizitatorilor', '', '', '', ''],
                ['o scară', '', '', '', ''], ['Constanța', '', '', '', '']], row_h=20),
             X(2, 'Atribute și prepoziții', [
                 'Subliniază atributele și încercuiește prepozițiile care le introduc.',
                 'a) Treptele de fier ale farului vechi au rugină.',
                 'b) Ușa din spate a casei albe scârțâie.']),
             X(3, 'Acordul', [
                 'Încercuiește forma corectă.',
                 'a) Farul și portul (se vede / se văd) de departe.     b) Luminile farului (clipește / clipesc).',
                 'c) Grupul de turiști (a urcat / au urcat) scara.']),
             T(4, 'Articulează', 'Scrie forma articulată hotărât la singular și forma articulată nehotărât la plural.',
               ['Substantivul', 'Hotărât, singular', 'Nehotărât, plural'], [150, 180, 180],
               [['far', '', ''], ['val', '', ''], ['corabie', '', ''], ['pescăruș', '', '']], row_h=20),
         ],
         [
             X(5, 'Scrierea corectă', [
                 'Încercuiește forma corectă.',
                 'a) Toți (copii / copiii) au urcat în far.       b) Suntem (membri / membrii) ai clubului de fotografie.',
                 'c) (Fii / Fiii) paznicului sunt gemeni.']),
             L(6, 'Obiectul, pentru un copil de 6 ani', [
                 'Descrie un obiect din casa ta pentru un copil de 6 ani (5-6 propoziții). Folosește o personificare,',
                 'trei atribute diferite și o propoziție cu subiect multiplu.'], 3),
         ]),
]
