# Fișe de exerciții, clasa a VIII-a, Unitatea I „Unde găsim frumusețea?”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 8, pp. 10-49). Textele
# fără autor (versuri, enunțuri, fragmente) sunt create pentru fișe; citatele scurte
# sunt doar din autori în domeniul public (Mihai Eminescu); Lucian Blaga, Nichita
# Stănescu, Dan Coman, Geo Dumitrescu sunt doar parafrazați. Lecția 26 (evaluarea)
# nu are fișă. Rezolvările: notite-profesor/clasa-8/unitatea-1/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-8-unitatea-1.py

SUB = 'Clasa a VIII-a · Unitatea I, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 8, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-8/unitatea-1/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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

STROFE = [
    'Citește strofele (a, b, c: Mihai Eminescu; d: scrisă pentru fișă).',
    'a) „Somnoroase păsărele / Pe la cuiburi se adună, / Se ascund în rămurele — / Noapte bună!”',
    'b) „Fiind băiet păduri cutreieram / Și mă culcam ades lângă isvor, / Iar brațul drept sub cap eu mi-l puneam / '
    'S-aud cum apa sună-ncetișor”',
    'c) „Mai am un singur dor: / În liniștea serii / Să mă lăsați să mor / La marginea mării”',
    'd) Pe drum de toamnă merg încet, / Cu pași de frunză ruginită; / Și inima, abia șoptită, / Îmi bate-n piept ca un poet.',
]

FISE = [
    fisa(1, 'p. 10',
         'Reper (manual, p. 10): În „O, rămâi...” de Mihai Eminescu, pădurea îl cheamă pe copil să rămână la ea; '
         'copilul pleacă râzând, iar adultul de azi nu mai poate înțelege pădurea copilăriei. Poezia pune în relație '
         'omul, natura și trecerea timpului.',
         [
             T(1, 'Cine vorbește și ce spune', 'Completează, după poezie.',
               ['Strofele', 'Cine vorbește', 'Ce spune, pe scurt'], [110, 130, 270], gol3(
                   'strofele 1-5', 'strofa a 6-a', 'strofa a 7-a'), row_h=40),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după poezie.', AF, [440, 70], gol(
                 'Pădurea îi vorbește copilului.', 'Pădurea îl aseamănă pe copil cu un prinț.',
                 'Pădurea vrea să-l alunge pe copil.', 'Copilul iese din pădure plângând.',
                 'Adultul nu mai poate înțelege pădurea.', 'Poezia a apărut în revista „Convorbiri literare”.')),
         ],
         [
             T(3, 'Cuvinte din poezie', 'Scrie sensul cuvântului și un sinonim.',
               ['Cuvântul', 'Sensul', 'Un sinonim'], [110, 240, 160], gol3(
                   'asamăn', 'naltei', 'cârd', 'domol', 'văpaie', 'bolți'), row_h=24),
             L(4, 'Locul copilăriei mele', 'Descrie în 5-6 rânduri un loc din natură care îți amintește de copilărie și '
               'spune ce îi dădea frumusețe.', 2),
         ], titlu='O, rămâi... de Mihai Eminescu'),

    fisa(2, 'p. 11',
         'Reper (manual, p. 11): Textul liric exprimă stări, sentimente, idei, printr-o voce ficțională; subiectivitatea '
         'se marchează prin persoana I, interjecții, exclamații, interogații retorice. Versificația: vers, strofă (distih, '
         'terțină, catren), măsură, rimă (împerecheată, încrucișată, îmbrățișată, monorimă, semirimă, imperfectă).',
         [
             X(1, 'Patru strofe', STROFE),
             T(2, 'Versificația', 'Scrie schema rimei, tipul ei și măsura primului vers.',
               ['Strofa', 'Schema rimei', 'Tipul rimei', 'Măsura (v. 1)'], [70, 140, 170, 130], gol4(
                   'a', 'b', 'c', 'd')),
         ],
         [
             T(3, 'Mărcile subiectivității', 'Găsește în „O, rămâi...” câte un exemplu.',
               ['Marca', 'Exemplul din poezie'], [220, 290], gol(
                   'un pronume de persoana I', 'un verb de persoana I', 'o interjecție', 'un verb la imperativ',
                   'o exclamație', 'o interogație retorică')),
             T(4, 'Termenii versificației', 'Scrie termenul potrivit fiecărei definiții.',
               ['Definiția', 'Termenul'], [390, 120], gol(
                   'rândul alb dintre strofe', 'strofa de trei versuri', 'numărul de silabe dintr-un vers',
                   'rima în care se potrivesc doar vocalele accentuate', 'rima după schema a b c b',
                   'strofa de două versuri')),
         ], titlu='Structura poeziei. Versificația'),

    fisa(3, 'p. 12',
         'Reper (manual, p. 12): Personificarea dă însușiri omenești lucrurilor și naturii; epitetul evidențiază o '
         'însușire; comparația alătură doi termeni prin „ca”, „precum”; metafora e o comparație subînțeleasă; '
         'repetiția reia sunete sau cuvinte; aliterația repetă o consoană la începutul cuvintelor apropiate.',
         [
             T(1, 'Figura de stil', 'Scrie figura de stil și ce sugerează.',
               ['Versul (scris pentru fișă)', 'Figura de stil', 'Ce sugerează'], [220, 120, 170], gol3(
                   'Pădurea își pieptănă frunzele în vânt.', 'Lacul, oglindă rotundă a cerului',
                   'Luna, albă ca un fagure de miere', 'Frunze de aramă cad pe cărare.', 'Plouă, plouă, plouă peste sat.'),
               row_h=26),
             T(2, 'Aliterația', 'Scrie consoana repetată și efectul ei.',
               ['Versul (scris pentru fișă)', 'Consoana', 'Efectul'], [240, 80, 190], gol3(
                   'Vântul vâjâie în vârfuri de brazi.', 'Șuieră șoapte șiroaiele șerpuite.',
                   'Ropot rapid de roți pe drumul rece.', 'Tunetul tună, tăcerea se tulbură.'), row_h=26),
         ],
         [
             T(3, 'Un enunț, patru figuri', 'Rescrie enunțul „Râul curge prin vale.” cu figura de stil cerută.',
               ['Figura de stil', 'Enunțul tău'], [150, 360], gol(
                   'comparație', 'personificare', 'metaforă', 'aliterație'), row_h=28),
             L(4, 'Slogan', 'Inventează un slogan cu aliterație pentru un produs (o prăjitură, o bicicletă, un parfum) și '
               'spune ce efect urmărești.', 1),
         ], titlu='Limbajul figurat. Aliterația'),

    fisa(4, 'p. 13',
         'Reper (manual, p. 13): În „O, rămâi...”, pădurea e un spațiu ocrotitor al copilăriei, în care timpul pare să '
         'se oprească; ieșirea copilului în câmp înseamnă despărțirea de copilărie, iar adultul nu mai poate reveni.',
         [
             T(1, 'Darurile pădurii', 'Scrie ce semnifică fiecare dar al pădurii pentru copil.',
               ['Ce îi oferă pădurea', 'Ce semnifică'], [230, 280], gol(
                   'dragostea („Te iubesc atât de mult!”)', 'ascultarea dorurilor lui', 'asemănarea cu un prinț',
                   'auzul tainic al cârdului de cerbi', 'timpul în care anii par clipe'), row_h=26),
             T(2, 'Copilul și adultul', 'Compară.',
               ['Criteriul', 'Copilul', 'Adultul'], [140, 185, 185], gol3(
                   'unde se află', 'cum vede pădurea', 'ce simte', 'relația cu timpul'), row_h=30),
         ],
         [
             T(3, 'Simboluri', 'Scrie ce poate simboliza fiecare element.',
               ['Elementul', 'Ce poate simboliza'], [170, 340], gol(
                   'pădurea', 'câmpul', 'lacul în care se oglindește luna', 'prințul', 'cerbii')),
             L(4, 'Răspunsul copilului', 'Scrie 5-6 versuri sau rânduri: ce i-ar răspunde copilul pădurii, înainte să iasă '
               'în câmp.', 2),
         ]),

    fisa(5, 'pp. 14-15',
         'Reper (manual, p. 15): Cuvintele-cheie și vocea ficțională ajută la înțelegerea poeziei. În poezia modernă, '
         'versurile pot fi albe (ritm și măsură, fără rimă) sau libere (fără ritm și rimă, măsură variabilă), cu literă '
         'mică la început, fără strofe regulate.',
         [
             T(1, 'Ce fel de vers?', 'Scrie: vers clasic, vers alb sau vers liber.',
               ['Descrierea', 'Tipul'], [390, 120], gol(
                   'are rimă, ritm și măsură regulate', 'păstrează ritmul și măsura, dar nu are rimă',
                   'renunță la ritm și rimă, are măsură variabilă', 'versurile poeziei „O, rămâi...”',
                   'versurile poeziei „Izvorul nopții”')),
             T(2, 'Câmpul lexical al întunericului', 'Scrie DA dacă termenul intră în câmpul lexical al întunericului.',
               ['Termenul', 'DA / NU'], [420, 90], gol(
                   'umbră', 'amurg', 'soare', 'negură', 'lumină', 'noapte', 'bezna', 'zori')),
         ],
         [
             T(3, 'Poezia și portretul', 'Compară poezia cu portretul pictat de Nicolae Tonitza (p. 14).',
               ['Criteriul', 'În poezie', 'În portret'], [120, 195, 195], gol3(
                   'ochii', 'lumina și culoarea', 'atmosfera', 'sentimentul transmis'), row_h=30),
             L(4, 'Versuri libere', 'Scrie 5-6 versuri libere despre privirea unei persoane dragi.', 2),
         ], titlu='Izvorul nopții de Lucian Blaga'),

    fisa(6, 'p. 16',
         'Reper (manual, p. 16): Enumerația înșiră termeni de același fel, pentru a accentua sau a detalia. Hiperbola '
         'exagerează intenționat însușirile sau întâmplările, mărindu-le sau micșorându-le; se combină mereu cu alte '
         'figuri (epitet, comparație, metaforă).',
         [
             T(1, 'Hiperbolă sau nu?', 'Scrie DA sau NU și figura cu care se combină hiperbola.',
               ['Enunțul (scris pentru fișă)', 'DA / NU', 'Figura combinată'], [260, 70, 180], gol3(
                   'Am așteptat o veșnicie la coadă.', 'Ochii ei erau mari cât două lacuri.', 'Casa bunicii are un pridvor mare.',
                   'Un munte de teme mă așteaptă.', 'Plânge de-i curg râuri pe obraji.', 'Afară e frig.')),
             T(2, 'Enumerația', 'Scrie partea de vorbire a termenilor enumerați și efectul.',
               ['Enunțul (scris pentru fișă)', 'Partea de vorbire', 'Efectul'], [260, 110, 140], gol3(
                   'Au venit la târg olari, fierari, țesătoare și lăutari.', 'Era un om harnic, vesel, cinstit și darnic.',
                   'A alergat, a sărit, a strigat, a râs.'), row_h=30),
         ],
         [
             T(3, 'Transformă în hiperbolă', 'Rescrie enunțul cu o hiperbolă.',
               ['Enunțul', 'Varianta cu hiperbolă'], [170, 340], gol(
                   'Sunt obosit.', 'Am mâncat mult.', 'E foarte cald.', 'Te-am așteptat mult.'), row_h=26),
             L(4, 'Portret de basm', 'Descrie în 4-5 rânduri un personaj de basm, cu două hiperbole și o enumerație. '
               'Subliniază-le.', 2),
         ], titlu='Figurile de stil. Hiperbola'),

    fisa(7, 'p. 17',
         'Reper (manual, p. 17): Poezia lui Blaga e concisă și simplă ca formă, dar profundă: ochii iubitei devin '
         'izvorul din care curge noaptea peste lume; iubirea transformă felul în care îndrăgostitul vede universul și '
         'rămâne o taină.',
         [
             T(1, 'De acord sau nu?', 'Scrie DA sau NU și un argument din poezie, cu cuvintele tale.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [200, 60, 250], gol3(
                   'Iubirea schimbă felul în care vezi lumea.', 'Frumusețea se vede de la prima privire.',
                   'Noaptea are aici un sens negativ.', 'Poezia e scurtă, dar spune mult.'), row_h=36),
             T(2, 'Simboluri', 'Scrie sensul obișnuit și sensul din poezie.',
               ['Elementul', 'Sensul obișnuit', 'Sensul în poezie'], [110, 190, 210], gol3(
                   'ochiul', 'izvorul', 'noaptea', 'lumina', 'taina'), row_h=26),
         ],
         [
             T(3, 'Poezia în alt limbaj', 'Plănuiește transpunerea poeziei într-o altă artă.',
               ['', 'Planul meu'], [170, 340], gol(
                   'arta aleasă', 'culori, sunete sau mișcări', 'ce ar exprima lucrarea', 'titlul lucrării'), row_h=28),
             L(4, 'Opinia mea', 'Iubirea poate fi înțeleasă complet sau rămâne un mister? Scrie 5-6 rânduri.', 2),
         ]),

    fisa(8, 'pp. 18-19',
         'Reper (manual, p. 19): În secolul al XX-lea, poezia renunță la regulile clasice de prozodie, folosește limbajul '
         'obișnuit, descompune imaginile până devin misterioase și valorifică punerea în pagină (caligrama).',
         [
             T(1, 'Lumea ca scriere', 'Scrie cu ce element al scrierii e asociat fiecare lucru în poezie și de ce.',
               ['Elementul lumii', 'Asociat cu', 'De ce (asemănarea)'], [140, 150, 220], gol3(
                   'peștele', 'păsările în zbor', 'norii', 'mâna', 'gândurile'), row_h=26),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după poezie.', AF, [440, 70], gol(
                 'Strofele au lungimi diferite.', 'Toate versurile au aceeași măsură.', 'Poezia are rimă regulată.',
                 'Vocea lirică se adresează divinității.', 'În ultima strofă, verbele exprimă o dorință.')),
         ],
         [
             T(3, 'Câmpul lexical al scrierii', 'Scrie DA dacă termenul intră în câmpul lexical al scrierii.',
               ['Termenul', 'DA / NU'], [420, 90], gol(
                   'literă', 'frază', 'piatră', 'alfabet', 'nor', 'imn', 'a citi', 'pește')),
             L(4, 'Obiectul-literă', 'Scrie 4-5 versuri libere în care un obiect din camera ta devine „literă” a unei povești.', 2),
         ], titlu='Lecția de citire de Nichita Stănescu'),

    fisa(9, 'p. 20',
         'Reper (manual, pp. 19-20): Poezia lui Nichita Stănescu arată lumea ca un text de citit: artistul nu copiază '
         'realitatea, ci o recompune într-un univers propriu; creația înfruntă timpul.',
         [
             T(1, 'Simboluri', 'Scrie ce simbolizează de obicei elementul și ce sens are în poezie.',
               ['Elementul', 'De obicei', 'În poezie'], [110, 190, 210], gol3(
                   'peștele', 'pasărea', 'piatra', 'norii', 'alfabetul'), row_h=26),
             T(2, 'Poezia modernă', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Poezia modernă renunță adesea la regulile clasice.', 'Poezia modernă folosește doar cuvinte rare, căutate.',
                 'Caligrama e o poezie scrisă în forma unui desen.', 'Imaginile poeziei moderne pot deveni misterioase.',
                 'Textul liric nu poate fi scris în proză.')),
         ],
         [
             T(3, 'Titlul', 'Răspunde.',
               ['Întrebarea', 'Răspunsul meu'], [210, 300], gol(
                   'Ce înseamnă aici „lecție”?', 'Ce se „citește” în poezie?', 'Cine învață din această lecție?',
                   'Un alt titlu, propus de mine'), row_h=28),
             L(4, 'Locul pe care îl citesc', 'Descrie în 5-6 rânduri un loc pe care îl „citești” ca pe o carte.', 2),
         ]),

    fisa(10, 'p. 21',
         'Reper (manual, p. 21): Compararea textelor se face pe criterii, prezentând în paralel asemănări și deosebiri '
         'de conținut (idei, sentimente, temă, ipostaza vocii, câmpuri lexicale) și de formă (dispunerea versurilor, '
         'ritm, rimă, măsură, figuri de stil, imagini).',
         [
             T(1, 'Trei poezii, față în față', 'Completează tabelul.',
               ['Criteriul', 'O, rămâi...', 'Izvorul nopții', 'Lecția de citire'], [110, 135, 135, 130], gol4(
                   'tipul de frumusețe', 'vocea ficțională', 'versificația', 'figura dominantă'), row_h=36),
             T(2, 'Conținut sau formă?', 'Scrie C (conținut) sau F (formă).',
               ['Criteriul', 'C / F'], [420, 90], gol(
                   'tema', 'rima', 'sentimentele', 'figurile de stil', 'ipostaza vocii ficționale', 'dispunerea în pagină',
                   'câmpurile lexicale', 'măsura')),
         ],
         [
             T(3, 'Asemănare și deosebire', 'Scrie o asemănare și o deosebire pentru fiecare pereche.',
               ['Perechea', 'O asemănare', 'O deosebire'], [150, 180, 180], gol3(
                   'O, rămâi... / Izvorul nopții', 'Izvorul nopții / Lecția de citire', 'O, rămâi... / Lecția de citire'),
               row_h=40),
             L(4, 'Paragraful de comparație', 'După modelul de la p. 21, scrie 5-6 rânduri în care compari două poezii '
               'după un singur criteriu.', 2),
         ], titlu='Compararea textelor'),

    fisa(11, 'pp. 22-23',
         'Reper (manual, p. 22): Frumusețea se poate găsi și în viața de zi cu zi. Poezia lui Dan Coman are două '
         'planuri: frumusețea păstrată într-o fotografie de vacanță și viața obișnuită, cu grijile ei.',
         [
             T(1, 'Cele două planuri', 'Completează, după poezie.',
               ['Criteriul', 'Frumusețea', 'Viața'], [130, 190, 190], gol3(
                   'unde se află', 'ce imagini apar', 'ce sentiment transmite'), row_h=36),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după poezie.', AF, [440, 70], gol(
                 'Frumusețea e păstrată într-o fotografie din calculator.', 'Bărbatul privește fotografia o singură dată.',
                 'Fotografia a fost făcută vara, la mare.', 'Viața de zi cu zi e prezentată printr-o enumerație.',
                 'Pasărea din final este un vultur.', 'Versurile încep cu literă mică.')),
         ],
         [
             T(3, 'Ce pot sugera', 'Scrie o semnificație posibilă.',
               ['Elementul', 'Ce poate sugera'], [170, 340], gol(
                   'musculița de casă', 'fotografia de vară', 'pasărea înaltă', 'orășelul din nord'), row_h=26),
             L(4, 'Poezie din cotidian', 'Scrie 5-6 versuri libere despre un obiect obișnuit care păstrează o clipă frumoasă.', 2),
         ], titlu='O pasăre înaltă de Dan Coman'),

    fisa(12, 'pp. 24-25',
         'Reper (manual, pp. 24-25): Constantin Brâncuși, unul dintre cei mai mari sculptori ai secolului al XX-lea, și '
         'George Enescu, compozitor, dirijor, violonist, pianist și profesor, s-au inspirat din folclorul românesc și au '
         'transformat arta modernă a lumii.',
         [
             T(1, 'Brâncuși sau Enescu?', 'Scrie B (Brâncuși) sau E (Enescu).',
               ['Faptul', 'B / E'], [440, 70], gol(
                   'S-a născut la Hobița, în Gorj.', 'A studiat vioara de la cinci ani.', 'A lucrat o vreme în atelierul lui Rodin.',
                   'A compus două Rapsodii române.', 'A realizat ansamblul de la Târgu Jiu.', 'A compus opera Oedip.',
                   'Atelierul lui e reconstituit la Paris.', 'L-a avut elev pe Yehudi Menuhin.'), row_h=20),
             T(2, 'Operele', 'Scrie autorul și arta.',
               ['Opera', 'Autorul', 'Arta'], [230, 140, 140], gol3(
                   'Măiastra', 'Coloana fără sfârșit', 'Rapsodia română nr. 1', 'Masa tăcerii', 'Poema română', 'Sărutul')),
         ],
         [
             T(3, 'Folclorul transformat', 'Răspunde.',
               ['Întrebarea', 'Răspunsul meu'], [230, 280], gol(
                   'Ce înseamnă „zboruri, nu păsări”?', 'Ce preia Enescu din folclor?',
                   'O legătură cu o poezie din unitate'), row_h=36),
             L(4, 'O altă personalitate', 'Documentează-te și scrie 5-6 rânduri despre un român care s-a afirmat în lume.', 2),
         ]),

    fisa(13, 'pp. 26-27',
         'Reper (manual, pp. 26-27): Ascultarea activă are patru etape: concentrarea atenției, încurajarea vorbitorului '
         '(contact vizual, gesturi, interjecții), reflecția asupra spuselor lui (întrebări, reformulare, rezumat) și '
         'oferirea de feedback respectuos.',
         [
             T(1, 'A auzi sau a asculta?', 'Scrie A (ascultare activă) sau H (doar auzi).',
               ['Comportamentul', 'A / H'], [440, 70], gol(
                   'îți notezi ideile importante', 'te uiți la telefon cât vorbește', 'pui o întrebare de clarificare',
                   'te gândești doar la ce vei spune tu', 'rezumi ce ai înțeles', 'dai din cap și zâmbești')),
             T(2, 'Etapele', 'Scrie ce faci concret în fiecare etapă.',
               ['Etapa', 'Ce fac concret'], [200, 310], gol(
                   'concentrarea atenției', 'încurajarea vorbitorului', 'reflecția asupra spuselor', 'oferirea de feedback'),
               row_h=28),
         ],
         [
             T(3, 'Barierele', 'Scrie cum înlături fiecare barieră.',
               ['Bariera', 'Cum o înlătur'], [200, 310], gol(
                   'zgomotul din clasă', 'telefonul', 'grija pentru un test', 'antipatia față de vorbitor', 'o temă plictisitoare')),
             L(4, 'Feedback respectuos', 'Colegul spune că poezia modernă nu are sens. Scrie un răspuns care îi respectă '
               'opinia, dar o exprimă și pe a ta (4-5 rânduri).', 2),
         ]),

    fisa(14, 'pp. 28-30',
         'Reper (manual, pp. 28-30): Sinonimele au sens asemănător, antonimele sens opus; omonimele au aceeași formă și '
         'sensuri fără legătură (totale, parțiale, lexico-gramaticale); cuvântul polisemantic are sensuri legate între '
         'ele; paronimele au formă asemănătoare și sens diferit.',
         [
             T(1, 'Sinonime și antonime', 'Scrie un sinonim și un antonim.',
               ['Cuvântul', 'Sinonim', 'Antonim'], [170, 170, 170], gol3(
                   'a sosi', 'limpede', 'harnic', 'a începe', 'bucurie', 'aproape')),
             T(2, 'Ce relație?', 'Scrie: omonime, cuvânt polisemantic sau paronime.',
               ['Perechea', 'Relația'], [320, 190], gol(
                   'lac (apă) / lac (vopsea)', 'broască (animal) / broască (la ușă)', 'ochi (organ) / ochi (de geam)',
                   'familiar / familial', 'a revela / a releva', 'cap (al omului) / cap (al drumului)',
                   'car (vehicul) / car (de la „a căra”)')),
         ],
         [
             T(3, 'Sensurile lui „a prinde”', 'Scrie un sinonim pentru fiecare sens.',
               ['Îmbinarea', 'Sinonimul'], [255, 255], gol(
                   'a prinde o minge', 'a prinde trenul', 'a prinde curaj', 'a prinde rădăcini', 'a prinde o idee')),
             T(4, 'Confuzii paronimice', 'Corectează cuvântul folosit greșit.',
               ['Enunțul', 'Cuvântul corect'], [360, 150], gol(
                   'Am completat o fisă de lectură.', 'Pianistul e un virtuos al clapelor.',
                   'O traducere literară înseamnă cuvânt cu cuvânt.', 'Afară s-a inserat devreme.')),
         ], titlu='Categorii semantice'),

    fisa(15, 'pp. 31-33',
         'Reper (manual, pp. 31-33): Derivarea formează cuvinte cu sufixe (lexicale, gramaticale) și prefixe; derivatele '
         'parasintetice au simultan prefix și sufix. Compunerea unește termeni prin alăturare, subordonare sau abreviere; '
         'există și elemente savante de compunere (hidro-, tele-, -fil).',
         [
             T(1, 'Derivatul', 'Scrie prefixul, sufixul și ce arată.',
               ['Cuvântul', 'Prefixul', 'Sufixul', 'Ce arată'], [110, 90, 110, 200], gol4(
                   'florăreasă', 'brădet', 'căluț', 'neatent', 'străbunic', 'a reciti', 'zilnic', 'a înverzi'), row_h=20),
             T(2, 'Compusul', 'Scrie procedeul: alăturare, subordonare sau abreviere.',
               ['Cuvântul compus', 'Procedeul'], [255, 255], gol(
                   'nord-vest', 'floarea-soarelui', 'CFR', 'aragaz', 'până la', 'papă-lapte', 'bun-simț')),
         ],
         [
             T(3, 'Elemente savante', 'Scrie sensul și un cuvânt format cu elementul.',
               ['Elementul', 'Sensul', 'Un cuvânt'], [120, 200, 190], gol3('hidro-', 'tele-', 'micro-', 'foto-', '-fil', '-cid')),
             T(4, 'Valoarea diminutivului', 'Scrie: micșorare, afecțiune, ironie sau depreciere.',
               ['Enunțul (scris pentru fișă)', 'Valoarea'], [360, 150], gol(
                   'Mi-a adus o cănuță de ceai cald.', 'Ce problemuță, doar douăzeci de greșeli!', 'Un pisoi mititel dormea pe prag.',
                   'Și-a găsit și el o slujbuliță.')),
         ], titlu='Derivarea. Compunerea'),

    fisa(16, 'pp. 34-35',
         'Reper (manual, pp. 34-35): Conversiunea trece un cuvânt de la o parte de vorbire la alta, fără să-i schimbe '
         'forma. Familia lexicală cuprinde cuvintele formate în limbă de la același cuvânt de bază (derivare, compunere, '
         'conversiune), fără împrumuturi; câmpul lexical grupează cuvinte legate de aceeași idee.',
         [
             T(1, 'Din ce parte de vorbire?', 'Scrie partea de vorbire nouă și cea din care provine.',
               ['Enunțul (scris pentru fișă)', 'Cuvântul', 'Din ce provine'], [230, 90, 190], [
                   ['Frumosul ne atrage.', 'Frumosul', ''], ['Cântă frumos.', 'frumos', ''],
                   ['Iarna ninge des.', 'Iarna', ''], ['Scrisul lui e citeț.', 'Scrisul', ''],
                   ['E un om bine.', 'bine', ''], ['Datorită ploii, am rămas acasă.', 'Datorită', ''],
                   ['Plânsul copilului ne-a trezit.', 'Plânsul', '']]),
             T(2, 'Familia cuvântului „munte”', 'Scrie DA dacă termenul intră în familia lexicală a lui „munte”.',
               ['Termenul', 'DA / NU'], [420, 90], gol('muntean', 'muntos', 'montan', 'munticel', 'muntenesc', 'alpin')),
         ],
         [
             T(3, 'Familia verbului „a scrie”', 'Scrie cuvinte din familia lexicală, după mijlocul de formare.',
               ['Mijlocul', 'Cuvinte'], [150, 360], gol('derivare', 'compunere', 'conversiune'), row_h=34),
             L(4, 'Parcul toamna', 'Descrie în 4-5 rânduri un parc toamna, cu trei cuvinte obținute prin conversiune. '
               'Subliniază-le.', 2),
         ]),

    fisa(17, 'pp. 36-37',
         'Reper (manual, pp. 36-37): Cuvintele sunt moștenite din latină, formate în limbă sau împrumutate. Împrumuturile '
         'vechi vin din slavă, turcă, greacă, maghiară; cele noi din franceză, engleză, italiană, germană, latină. '
         'Neologismele sunt cuvinte recente, cu un component nou.',
         [
             T(1, 'De unde vine cuvântul?', 'Scrie: moștenit, format în limbă sau împrumutat.',
               ['Cuvântul', 'Originea'], [255, 255], gol(
                   'pâine', 'a crede', 'străbunic', 'computer', 'prieten', 'ciorap', 'despre', 'weekend'), row_h=20),
             T(2, 'Vechi sau nou?', 'Scrie dacă împrumutul e vechi sau nou și limba din care vine.',
               ['Împrumutul', 'Vechi / nou', 'Limba'], [170, 170, 170], gol3(
                   'drag', 'iaurt', 'a agonisi', 'oraș', 'hiperbolă', 'pizza', 'rucsac', 'design'), row_h=20),
         ],
         [
             T(3, 'Forma corectă', 'Alege forma corectă.',
               ['Variantele', 'Forma corectă'], [330, 180], gol(
                   'saxofon / saxafon', 'coafor / coafeur', 'anticameră / antecameră', 'manichiură / manechiură')),
             T(4, 'Neologismul', 'Scrie neologismul potrivit explicației.',
               ['Explicația', 'Neologismul'], [360, 150], gol(
                   'loc unde aterizează avioanele', 'telefon inteligent', 'pasiune pentru timpul liber',
                   'înregistrare video scurtă, cu muzică', 'persoana care conduce o firmă')),
         ]),

    fisa(18, 'pp. 38-39',
         'Reper (manual, pp. 38-39): Registrele limbii sunt solemn (oficial), standard (curent) și familiar (colocvial); '
         'nu se amestecă. Argoul e un limbaj codificat al unui grup restrâns; jargonul e un limbaj de specialitate sau o '
         'exprimare pretențioasă, cu multe cuvinte străine.',
         [
             T(1, 'Ce registru?', 'Scrie: solemn, standard, familiar sau argou.',
               ['Enunțul (scris pentru fișă)', 'Registrul'], [380, 130], gol(
                   'Stimate domnule academician, vă mulțumim pentru prezență.', 'Vă rog să închideți ușa.',
                   'Hai, mă, că n-avem timp!', 'Filmul a fost beton!', 'Doamnă profesoară, pot să intru?',
                   'Domnu’, dă-mi și mie o pâine!')),
             T(2, 'În registrul standard', 'Rescrie enunțul în registrul standard.',
               ['Enunțul', 'Varianta standard'], [220, 290], gol(
                   'Profu’ ne-a dat o temă nașpa.', 'E mișto concertu’.', 'Mă duc acas’, că-s rupt.',
                   'Am luat țeapă la magazin.'), row_h=26),
         ],
         [
             T(3, 'Jargonul', 'Scrie domeniul și sensul termenului.',
               ['Termenul', 'Domeniul', 'Sensul'], [130, 130, 250], gol3(
                   'a da click', 'a salva un fișier', 'diagnostic', 'ofsaid', 'hashtag'), row_h=24),
             L(4, 'Un mesaj, trei registre', 'Invită la spectacolul școlii: un prieten (familiar), un vecin (standard), '
               'primarul orașului (solemn). Câte un enunț.', 2),
         ], titlu='Registrele limbii'),

    fisa(19, 'pp. 40-41',
         'Reper (manual, pp. 40-41): Diftongul are o vocală și o semivocală în aceeași silabă (urcător sau coborâtor); '
         'triftongul, o vocală și două semivocale; hiatul, două vocale în silabe diferite. Împrumuturile neadaptate se '
         'scriu și se pronunță ca în limba de origine; articolul se leagă cu cratimă când scrierea diferă de pronunțare.',
         [
             T(1, 'Diftong, triftong sau hiat?', 'Scrie fenomenul (și felul diftongului).',
               ['Cuvântul', 'Fenomenul'], [200, 310], gol('seară', 'rai', 'poet', 'leoaică', 'aer', 'creion', 'beau'),
               row_h=20),
             T(2, 'Litere și sunete', 'Scrie numărul de litere și de sunete.',
               ['Cuvântul', 'Litere', 'Sunete'], [170, 170, 170], gol3('chiar', 'ceas', 'ghindă', 'lupi', 'geam', 'excursie')),
         ],
         [
             T(3, 'Cum se pronunță?', 'Scrie pronunția.',
               ['Cuvântul', 'Pronunția'], [255, 255], gol('weekend', 'show', 'pizza', 'ketchup', 'bleumarin', 'Bruxelles')),
             T(4, 'Articolul hotărât', 'Scrie forma articulată hotărât.',
               ['Cuvântul', 'Forma articulată'], [255, 255], gol('site', 'mouse', 'feedback', 'hobby', 'weekend', 'laptop')),
         ], titlu='Fonetica'),

    fisa(20, 'pp. 42-43',
         'Reper (manual, pp. 42-43): Un text coerent respectă ordinea logică, temporală și spațială și regulile '
         'continuității, progresiei și noncontradicției. Anafora reia un cuvânt (antecedentul) printr-un anaforic: '
         'pronume, numeral, adverb, substantiv, „da”/„nu”, verbul „a face”.',
         [
             X(1, 'Enunțuri amestecate', [
                 'Citește enunțurile (scrise pentru fișă).',
                 '(a) După ce l-a terminat, i l-a arătat mamei.   (b) Andrei a vrut să facă un desen pentru concursul școlii.',
                 '(c) Aceasta i-a spus că merită să-l trimită.   (d) Mai întâi, a ales tema: o pădure toamna.',
                 '(e) Apoi a lucrat la el două seri la rând.']),
             T(2, 'Ordinea și legăturile', 'Răspunde.',
               ['Întrebarea', 'Răspunsul'], [300, 210], gol(
                   'ordinea corectă a enunțurilor', 'anaforicul lui „desen” în (a)', 'anaforicul lui „mamei” în (c)',
                   'ce regulă încalcă: „Îmi place poezia. Poezia îmi place.”',
                   'ce regulă încalcă: „A plouat toată ziua, deci a fost senin.”'), row_h=26),
         ],
         [
             L(3, 'Fără repetiții', 'Rescrie cu anaforice: Maria a citit o carte. Maria a spus că cartea i-a plăcut. Maria '
               'recomandă cartea colegilor.', 2),
             T(4, 'Antecedent și anaforic', 'Scrie antecedentul, anaforicul și partea de vorbire a anaforicului.',
               ['Enunțurile', 'Antecedentul', 'Anaforicul, partea de vorbire'], [220, 110, 180], gol3(
                   'Am cumpărat trei cărți. Două sunt de poezie.', 'Merg la bibliotecă. Acolo citesc.',
                   '— Vii la cenaclu? — Da.', 'Ioana a scris o poezie. Eleva a citit-o în clasă.'), row_h=28),
         ], titlu='Coerența textului. Anafora'),

    fisa(21, 'pp. 44-45',
         'Reper (manual, pp. 44-45): Etapele scrierii: pregătirea, ciorna, revizuirea, editarea, publicarea. Feedbackul '
         'folosește observații concrete, într-un limbaj clar, însoțite de sugestii, fără a fi excesiv de negativ.',
         [
             T(1, 'Etapele scrierii', 'Numerotează etapele (1-5) și scrie ce faci în fiecare.',
               ['Etapa', 'Nr.', 'Ce fac'], [170, 50, 290], gol3(
                   'revizuirea', 'pregătirea pentru scriere', 'publicarea', 'redactarea ciornei', 'editarea'), row_h=26),
             T(2, 'Feedback util?', 'Scrie U (util) sau N (nefolositor) și de ce.',
               ['Feedbackul (scris pentru fișă)', 'U / N', 'De ce'], [260, 60, 190], gol3(
                   'E slab.', 'Paragraful 2 repetă ideea; adaugă un citat.', 'Mi-a plăcut tot, perfect!',
                   'Ai interpretat bine comparația; lipsește tema.', 'Nu se înțelege nimic din ce scrii.'), row_h=26),
         ],
         [
             T(3, 'Planul comentariului', 'Plănuiește comentariul versurilor lui Ion Pillat de la p. 44.',
               ['Reperul', 'Ce scriu'], [180, 330], gol(
                   'patru elemente ale peisajului', 'prima figură de stil și ce sugerează', 'a doua figură de stil',
                   'emoția sau sentimentul', 'tema'), row_h=30),
             L(4, 'Primul paragraf', 'Scrie începutul comentariului (4-5 rânduri), la persoana a III-a.', 2),
         ], titlu='Etapele scrierii (1/2)'),

    fisa(22, 'pp. 44-45',
         'Reper (manual, p. 45): Autorul ascultă sau citește feedbackul fără să reacționeze negativ, cere lămuriri, '
         'alege ce e util și modifică textul; apoi îl editează și îl prezintă, pregătind lectura cu voce tare.',
         [
             T(1, 'Ce fac cu sugestiile?', 'Notează sugestiile colegului și decizia ta.',
               ['Sugestia primită', 'O accept?', 'Cum modific textul'], [200, 80, 230], gol3(
                   'sugestia 1', 'sugestia 2', 'sugestia 3'), row_h=40),
             T(2, 'Verificarea finală', 'Scrie DA sau NU pentru textul tău.',
               ['Întrebarea', 'DA / NU'], [420, 90], gol(
                   'Am marcat paragrafele?', 'Ideile se leagă logic?', 'Am scris la persoana a III-a?',
                   'Am evitat repetițiile (prin anaforice)?', 'Am verificat ortografia și punctuația?', 'Scrisul e lizibil?')),
         ],
         [
             T(3, 'Pregătesc lectura', 'Plănuiește prezentarea din scaunul autorului.',
               ['', 'Planul meu'], [200, 310], gol(
                   'pasajul cel mai important', 'unde schimb tonul', 'unde fac o pauză', 'cum încep lectura'), row_h=28),
             L(4, 'Autoevaluarea', 'Scrie 4-5 rânduri: ce ai îmbunătățit în text datorită feedbackului.', 2),
         ], titlu='Etapele scrierii (2/2)'),

    fisa(23, 'pp. 46-47',
         'Reper (manual, pp. 46-47): Elementele grafice informează, emoționează, conving, amuză. Privirea observă întâi '
         'ființele, apoi prim-planul, și citește în formă de Z. Slide-urile au titluri, cuvinte-cheie, literă de cel puțin '
         '24 de puncte; imaginea are legendă.',
         [
             T(1, 'Tipul și rolul imaginii', 'Scrie rolul principal al fiecărui tip de imagine într-un text.',
               ['Tipul de imagine', 'Rolul principal'], [220, 290], gol(
                   'fotografie de presă', 'diagramă circulară', 'bandă desenată', 'pictură', 'schemă', 'caligramă')),
             T(2, 'Reguli pentru slide', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Pe slide scriu tot textul pe care îl spun.', 'Litera are cel puțin 24 de puncte.',
                 'Titlurile orientează publicul.', 'Privirea parcurge imaginea în formă de Z.',
                 'Elementele din fundal se observă primele.', 'O imagine are nevoie de legendă.')),
         ],
         [
             T(3, 'Posterul poeziei', 'Plănuiește un poster pentru o poezie din unitate.',
               ['', 'Planul meu'], [170, 340], gol(
                   'poezia și titlul posterului', 'imaginea centrală', 'culorile', 'trei cuvinte-cheie', 'legenda imaginii'),
               row_h=26),
             L(4, 'Legenda', 'Scrie legenda completă a tabloului de la p. 10 și o propoziție care leagă tabloul de poezie.', 1),
         ], titlu='Elementele grafice în prezentarea unui text'),

    fisa(24, 'pp. 48-49',
         'Recapitulare (manual, pp. 10-43): textul liric, vocea ficțională, versificația, figurile de stil (inclusiv '
         'aliterația și hiperbola), categoriile semantice, formarea cuvintelor, împrumuturile, registrele, fonetica.',
         [
             X(1, 'Grădina bunicii', [
                 'Citește poezia (scrisă pentru fișă).',
                 'Dimineața, grădina se trezește încet: / trandafirii își deschid pumnii roșii, / albinele bâzâie, bâzâie, '
                 'bâzâie / ca un clopot mic de aur.',
                 'Eu stau pe prag și ascult — / o, cât de mare e lumea / într-o singură floare!']),
             T(2, 'Recunoaște', 'Completează după poezie.',
               ['', 'Din poezie'], [210, 300], gol(
                   'vocea ficțională', 'tipul versului', 'o personificare', 'o comparație', 'o metaforă', 'o hiperbolă',
                   'o repetiție cu aliterație', 'două mărci ale subiectivității'), row_h=24),
         ],
         [
             T(3, 'Limba', 'Rezolvă cerința pentru fiecare cuvânt din poezie.',
               ['Cuvântul', 'Cerința', 'Răspunsul'], [100, 170, 240], [
                   ['încet', 'un sinonim', ''], ['mare', 'un antonim', ''], ['Dimineața', 'cum s-a format', ''],
                   ['floare', 'doi termeni din familie', ''], ['prag', 'două sensuri', ''], ['bâzâie', 'cum s-a format', '']],
               row_h=26),
             L(4, 'Comentariul', 'Scrie 5-6 rânduri despre semnificația ultimelor trei versuri, la persoana a III-a.', 2),
         ], titlu='Recapitulare (1/2)'),

    fisa(25, 'pp. 48-49',
         'Recapitulare (manual, pp. 26-47): ascultarea activă, coerența și anafora, etapele scrierii, feedbackul, '
         'elementele grafice în prezentarea unui text.',
         [
             T(1, 'Grila de redactare', 'Scrie ce verifici la fiecare criteriu al grilei de la p. 44.',
               ['Criteriul', 'Ce verific'], [190, 320], gol(
                   'conținutul', 'organizarea textului', 'corectitudinea lingvistică', 'aspectul scrierii'), row_h=34),
             T(2, 'Roluri în discuție', 'Scrie ce face fiecare într-o discuție de grup.',
               ['Rolul', 'Ce face'], [150, 360], gol('moderatorul', 'observatorul', 'vorbitorul', 'ascultătorul'), row_h=28),
         ],
         [
             T(3, 'Feedback pe un paragraf', 'Paragraful (scris pentru fișă): „Poezia e foarte frumoasă. În poezie sunt multe '
               'figuri de stil. Poezia îmi place mult. Eu cred că poezia vorbește despre natură.” Scrie o sugestie pentru '
               'fiecare problemă.',
               ['Problema', 'Sugestia mea'], [170, 340], gol(
                   'repetiția', 'lipsa exemplelor', 'persoana I', 'figurile de stil nenumite'), row_h=26),
             L(4, 'Paragraful revizuit', 'Rescrie paragraful, după sugestiile tale (5-6 rânduri).', 2),
         ], titlu='Recapitulare (2/2)'),
]
