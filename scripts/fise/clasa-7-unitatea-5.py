# Fișe de exerciții, clasa a VII-a, Unitatea V „Lumea de pe scenă”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 7, pp. 166-197). Textele
# fără autor (fragmente dramatice, interviuri, dialoguri, enunțuri) sunt create
# pentru fișe; Matei Vișniec și fragmentul din Shakespeare (traducerea din manual)
# sunt doar parafrazați. Fără fișă: lecțiile de proiect (1, 10, 11) și evaluarea (21).
# Rezolvările: notite-profesor/clasa-7/unitatea-5/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-7-unitatea-5.py

SUB = 'Clasa a VII-a · Unitatea V, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 7, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-7/unitatea-5/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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
    fisa(2, 'pp. 166-171',
         'Reper (manual, pp. 166-171): În piesa lui Matei Vișniec, trei copii le povestesc spectatorilor cum s-au '
         'rătăcit într-o bibliotecă fără ferestre și cum au găsit ieșirea deschizând cărțile. Textul e împărțit în '
         'patru scene.',
         [
             T(1, 'Scenă cu scenă', 'Scrie pe scurt ce se întâmplă și ce simt personajele.',
               ['Scena', 'Ce se întâmplă', 'Ce simt personajele'], [60, 260, 190], gol3(
                   'scena 1', 'scena 2', 'scena 3', 'scena 4'), row_h=40),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F, după text.', AF, [440, 70], gol(
                 'Cei trei copii se întorceau de la școală când a început ploaia.', 'Eliza avea o umbrelă.',
                 'În bibliotecă erau multe computere și fotolii.', 'Doinița scrie poezii.',
                 'Un bibliotecar i-a condus spre ieșire.', 'Ideea de a deschide cărțile îi aparține Doiniței.')),
         ],
         [
             T(3, 'Cei trei copii', 'Completează, după text.',
               ['Personajul', 'Vârsta', 'Ce îi place', 'O reacție din text'], [90, 60, 150, 210], gol4(
                   'Radu', 'Eliza', 'Doinița'), row_h=40),
             L(4, 'Fereastra mea', 'Ce carte a fost pentru tine o fereastră? Spre ce s-a deschis? Scrie 5-6 rânduri.', 2),
         ], titlu='Vrem să vă dăruim câte o fereastră'),

    fisa(3, 'p. 172',
         'Reper (manual, p. 172): Textul dramatic e scris pentru scenă; se împarte în acte și scene și are două '
         'componente: replicile personajelor și indicațiile autorului (didascaliile). Indicațiile externe: titlul, lista '
         'personajelor, decorul; cele interne: scenele, intrările, ieșirile, gesturile, tonul, tăcerile.',
         [
             X(1, 'Ninsoarea', [
                 'Citește fragmentul (scris pentru fișă).',
                 'Personaje: BUNICA, 70 de ani; LUCA, 12 ani. Decor: o bucătărie, seara. Pe masă, o carte deschisă.',
                 'SCENA 1',
                 'LUCA (intră în fugă, cu ghiozdanul pe umăr) – Bunico, ai văzut ce ninge?',
                 'BUNICA (fără să ridice ochii din carte) – Am văzut. Închide ușa, că vine frigul.',
                 'LUCA (se apropie, în șoaptă) – Ce citești?',
                 'BUNICA (zâmbește) – O poveste despre un băiat care nu închidea niciodată ușa.',
                 'Luca iese și trântește ușa. Pauză. Bunica râde.']),
             T(2, 'Indicațiile autorului', 'Scrie E (externă) sau I (internă) și ce indică.',
               ['Indicația', 'E / I', 'Ce indică'], [230, 60, 220], gol3(
                   'Personaje: BUNICA, 70 de ani; LUCA...', 'Decor: o bucătărie, seara.', 'SCENA 1',
                   '(intră în fugă, cu ghiozdanul pe umăr)', '(fără să ridice ochii din carte)', '(în șoaptă)',
                   'Pauză.')),
         ],
         [
             T(3, 'Termenii', 'Scrie termenul potrivit fiecărei definiții.',
               ['Definiția', 'Termenul'], [390, 120], gol(
                   'diviziune a piesei, încheiată cu lăsarea cortinei', 'subdiviziune a actului',
                   'fiecare intervenție a unui personaj', 'autorul unui text dramatic',
                   'indicațiile autorului, nerostite de actori', 'textul dramatic, numit altfel')),
             L(4, 'Continuă scena', 'Scrie scena 2: Luca se întoarce. Patru replici, cu trei indicații scenice diferite '
               '(gest, ton, deplasare).', 3),
         ], titlu='Structura textului dramatic'),

    fisa(4, 'pp. 173-174',
         'Reper (manual, pp. 173-174): La un spectacol lucrează regizorul, actorii, scenograful, coregraful, costumierul, '
         'machiorul, recuzitorul, tehnicienii de lumini și de sunet. Personajul dramatic are dublă natură (ființă '
         'ficțională și actor) și e construit direct sau indirect.',
         [
             T(1, 'Cine se ocupă?', 'Scrie cine face fiecare lucru, la spectacolul după piesa lui Vișniec.',
               ['Sarcina', 'Cine se ocupă'], [380, 130], gol(
                   'alege actorii și îi îndrumă la repetiții', 'desenează decorul și costumele', 'coase costumele după schițe',
                   'îi fardează pe actori', 'aduce pe scenă umbrela Elizei', 'aprinde beculețele din spatele ferestrelor',
                   'pornește muzica în momentul visului', 'pregătește mișcările unui dans'), row_h=20),
             T(2, 'Direct sau indirect?', 'Scrie D (caracterizare directă) sau I (indirectă) și de unde vine.',
               ['Informația despre personaj', 'D / I', 'Sursa'], [290, 60, 160], gol3(
                   'Lista personajelor: Doinița are 13 ani.', 'Radu spune că Doinița e deșteapta clasei.',
                   'Doinița recunoaște pe plafon un inorog.', 'Eliza încearcă să-i împace pe ceilalți doi.',
                   'Radu își cere scuze de mai multe ori.')),
         ],
         [
             T(3, 'Afișul spectacolului', 'Plănuiește afișul spectacolului clasei.',
               ['Elementul', 'Ce scriu sau desenez'], [170, 340], gol(
                   'titlul și autorul', 'regizorul și actorii', 'data, ora și locul', 'imaginea centrală', 'culorile'),
               row_h=28),
             L(4, 'Indicații pentru actor', 'Scrie trei indicații pentru actorul care îl joacă pe Radu în scena 3 '
               '(tonul, un gest, deplasarea).', 2),
         ], titlu='Arta spectacolului. Personajul dramatic'),

    fisa(5, 'pp. 175-176',
         'Reper (manual, p. 175): Dialogul, schimbul de replici, e modul principal de comunicare în textul dramatic; '
         'conturează întâmplările, timpul, spațiul și caracterizează personajele. În spectacol, comunicarea are două '
         'planuri: între personaje și cu spectatorii. Monologul e o replică amplă a unui singur personaj.',
         [
             T(1, 'Cum se leagă replicile?', 'Scrie: întrebare-răspuns, completare (adaugă un detaliu), continuare '
               '(duce povestea mai departe) sau confirmare (întărește spusele).',
               ['Schimbul de replici (scris pentru fișă)', 'Legătura'], [360, 150], gol(
                   '— Mergem la teatru? — Da, la ora șase.', '— Am luat biletele... — ...și programul spectacolului.',
                   '— Am intrat în sală. — Și s-au stins luminile.', '— A fost un spectacol reușit. — Așa e, foarte reușit.'),
               row_h=26),
             T(2, 'Cui se adresează?', 'Scrie P (alt personaj) sau S (spectatorii).',
               ['Situația din piesă', 'P / S'], [440, 70], gol(
                   'Radu le spune că Doinița e deșteapta clasei.', 'Doinița îi cere lui Radu să nu fie nepoliticos.',
                   'Eliza își cere scuze pentru stângăcia lor.', 'Eliza îl roagă pe Radu să nu se grăbească.',
                   'Radu întreabă dacă a spus ceva urât.')),
         ],
         [
             T(3, 'Intenția și efectul', 'Scrie ce vrea vorbitorul și ce efect are replica asupra celuilalt.',
               ['Replica (scrisă pentru fișă)', 'Intenția', 'Efectul'], [220, 145, 145], gol3(
                   '— Iar ai uitat replica?', '— Te rog, mai încearcă o dată!', '— Bravo, ai fost cel mai bun!'),
               row_h=36),
             L(4, 'Din narațiune în dialog', 'Transformă în text dramatic, cu numele personajelor și două didascalii: '
               'Ana și Mihai au găsit în pod o cutie veche. Ana a vrut s-o deschidă imediat, dar Mihai s-a speriat de un '
               'zgomot. Au râs amândoi când au văzut că era o pisică.', 3),
         ], titlu='Rolul dialogului'),

    fisa(6, 'p. 177',
         'Reper (manual, p. 177): Piesa e o pledoarie pentru lectură: biblioteca pare un labirint fără ferestre, dar '
         'cărțile deschise devin ferestre spre sine, spre lumea apropiată și cea îndepărtată, spre trecut și viitor.',
         [
             T(1, 'Ce pot sugera', 'Scrie o semnificație posibilă.',
               ['Elementul din piesă', 'Ce poate sugera'], [190, 320], gol(
                   'biblioteca-labirint', 'lipsa ferestrelor', 'cărțile deschise', 'lipsa semnalului la telefon',
                   'plafoanele pictate', 'cărțile împărțite spectatorilor'), row_h=26),
             T(2, 'Cărțile mele-ferestre', 'Scrie o carte citită de tine care deschide fiecare fereastră și de ce.',
               ['Fereastra spre...', 'Cartea', 'De ce'], [120, 160, 230], gol3(
                   'trecut', 'viitor', 'alte țări', 'mine însumi', 'prieteni'), row_h=26),
         ],
         [
             T(3, 'De acord sau nu?', 'Scrie DA sau NU și un argument.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [200, 60, 250], gol3(
                   'Într-o bibliotecă nu te rătăcești.', 'Cititul te face mai curajos.',
                   'Ecranele ne țin departe de lume.'), row_h=40),
             L(4, 'Dedicația', 'Scrie dedicația (4-5 rânduri) pe care ai pune-o pe o carte dăruită unui prieten.', 2),
         ]),

    fisa(7, 'pp. 178-180',
         'Reper (manual, p. 180): Interviul e un text nonliterar, jurnalistic, informativ, construit ca dialog între '
         'reporter și o persoană. Întrebările deschise permit răspunsuri ample, cele închise doar „da” sau „nu”. Etapele: '
         'tema și persoana, pregătirea întrebărilor, realizarea, transcrierea.',
         [
             T(1, 'Deschise sau închise?', 'Scrie D (deschisă) sau Î (închisă).',
               ['Întrebarea (scrisă pentru fișă)', 'D / Î'], [440, 70], gol(
                   'Îți place teatrul?', 'Ce te-a determinat să devii actor?', 'Ai jucat vreodată în străinătate?',
                   'Cum te pregătești pentru un rol nou?', 'Care a fost cel mai greu rol și de ce?',
                   'Ai emoții înainte de spectacol?')),
             T(2, 'Ce spune scriitorul', 'Scrie A sau F, după interviul de la pp. 178-179.', AF, [440, 70], gol(
                 'Scriitorul a copilărit la Rădăuți.', 'În copilărie citea Jules Verne și Alexandre Dumas.',
                 'Crede că toți copiii ar trebui să iubească aceeași carte.', 'Circul venea în oraș de mai multe ori pe lună.',
                 'Îi consideră pe copii un public care nu se preface.', 'Le recomandă copiilor mai mult timp la ecrane.')),
         ],
         [
             T(3, 'Etapele interviului', 'Numerotează etapele (1-4) și scrie ce faci concret.',
               ['Etapa', 'Nr.', 'Ce fac'], [190, 50, 270], gol3(
                   'realizarea interviului', 'alegerea temei și a persoanei', 'transcrierea',
                   'pregătirea întrebărilor'), row_h=28),
             T(4, 'Din închisă, deschisă', 'Transformă întrebarea închisă într-una deschisă.',
               ['Întrebarea închisă', 'Întrebarea deschisă'], [200, 310], gol(
                   'Îți plac cărțile?', 'Ai fost la teatru anul acesta?', 'Ți-e frică de scenă?', 'Scrii poezii?'), row_h=26),
         ], titlu='Interviul (I)'),

    fisa(8, 'p. 180',
         'Reper (manual, p. 180): Baza interviului e întrebarea; calitatea întrebărilor dă calitatea răspunsurilor. Se '
         'recomandă întrebările deschise. Interviul poate fi scris, înregistrat sau transmis la radio, la televizor, online.',
         [
             X(1, 'După premieră', [
                 'Citește interviul (scris pentru fișă).',
                 'Reporter: Ana, ai jucat rolul Doiniței în spectacolul școlii. Cum ai primit rolul? — Ana: Prin preselecție. '
                 'Am citit o scenă și doamna profesoară m-a ales.',
                 'Reporter: Ai avut emoții la premieră? — Ana: Da, foarte mari. Mi-au tremurat mâinile până la prima replică, '
                 'apoi am uitat de public.',
                 'Reporter: Ce ai învățat din această experiență? — Ana: Că teatrul înseamnă muncă în echipă. Fără '
                 'scenografi și tehnicieni, noi, actorii, n-am fi reușit.']),
             T(2, 'Recunoaște', 'Completează după interviu.',
               ['', 'Din interviu'], [190, 320], gol(
                   'cine pune întrebările', 'persoana intervievată', 'tema', 'o întrebare deschisă', 'o întrebare închisă',
                   'scopul textului')),
         ],
         [
             T(3, 'Pregătesc un interviu', 'Plănuiește un interviu cu un coleg din trupa de teatru sau din echipa școlii.',
               ['', 'Planul meu'], [150, 360], gol(
                   'persoana', 'tema', 'unde mă documentez', 'întrebarea 1', 'întrebarea 2', 'întrebarea 3'), row_h=24),
             L(4, 'Transcrierea', 'Transcrie două întrebări și răspunsurile colegului, cu numele celor doi înaintea replicilor.', 2),
         ], titlu='Interviul (II)'),

    fisa(9, 'pp. 181-182',
         'Reper (manual, pp. 181-182): În fragmentul din comedia lui Shakespeare, niște meșteșugari din Atena își '
         'împart rolurile într-o piesă pe care vor s-o joace la nunta ducelui; e „teatru în teatru”.',
         [
             T(1, 'Meșterii și rolurile', 'Completează, după fragment.',
               ['Personajul', 'Meseria', 'Rolul primit', 'Reacția'], [100, 110, 130, 170], gol4(
                   'Jurubiță', 'Flaut', 'Subțirelu', 'Botișor', 'Blându'), row_h=26),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Meșterii se adună în casa lui Gutuie.', 'Piesa va fi jucată la nunta ducelui.',
                 'Jurubiță vrea să joace un singur rol.', 'Flaut nu vrea un rol de femeie, fiindcă îi crește barba.',
                 'Blându cere rolul scris, fiindcă nu are memorie bună.', 'Gutuie îi lasă pe toți să-și aleagă rolul.')),
         ],
         [
             T(3, 'Doi actori, două trupe', 'Compară trupa lui Gutuie cu cei trei copii din piesa lui Vișniec.',
               ['Criteriul', 'Trupa lui Gutuie', 'Radu, Eliza, Doinița'], [120, 195, 195], gol3(
                   'cine sunt', 'ce vor să facă', 'ce e comic', 'cui se adresează'), row_h=34),
             L(4, 'Rolul meu', 'Dacă ai fi în trupa lui Gutuie, ce rol ai cere? Scrie o replică de 3-4 rânduri prin care îl '
               'convingi pe Gutuie.', 2),
         ], titlu='Visul unei nopți de vară (fragment)'),

    fisa(12, 'pp. 184-185',
         'Reper (manual, pp. 184-185): Dialogul e comunicarea între două sau mai multe persoane, prin replici legate '
         'logic; poate fi direct sau mediat. Tracul e emoția firească a vorbitului în public; se gestionează prin '
         'pregătire, repetare, respirație, contact vizual cu persoane cunoscute, ritm firesc.',
         [
             T(1, 'Reguli de dialog', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Adresarea se adaptează relației cu interlocutorul.', 'Într-un dialog bun vorbești cât mai mult.',
                 'Nu îl întrerupi pe cel care vorbește.', 'Dialogul are cel puțin două replici legate logic.',
                 'Un dialog la telefon este un dialog direct.', 'Conversația e cea mai frecventă formă de dialog oral.')),
             T(2, 'Semnul și soluția', 'Scrie o strategie potrivită pentru fiecare semn al tracului.',
               ['Semnul tracului', 'Strategia'], [200, 310], gol(
                   'îi tremură vocea', 'nu știe unde să se uite', 'vorbește foarte repede', 'își frământă mâinile',
                   'uită începutul', 'respiră sacadat')),
         ],
         [
             T(3, 'Discursul meu de două minute', 'Alege o temă de la p. 185 și plănuiește discursul.',
               ['', 'Planul meu'], [150, 360], gol(
                   'tema', 'începutul', 'ideea 1', 'ideea 2', 'ideea 3', 'încheierea', 'strategia mea contra tracului'),
               row_h=24),
             L(4, 'Tracul și talentul', 'Crezi că tracul vine odată cu talentul? Scrie 4-5 rânduri, cu un exemplu.', 2),
         ]),

    fisa(13, 'pp. 186-187',
         'Reper (manual, p. 186): Ascultarea activă înseamnă atenție față de vorbitor (contact vizual, semnale ca „da”, '
         '„înțeleg”), neîntreruperea lui și feedback: reformulare („Vrei să spui că...”), întrebări de clarificare, '
         'evocarea unor situații asemănătoare.',
         [
             X(1, 'Teatrul de păpuși', [
                 'Citește dialogul (scris pentru fișă).',
                 '(1) — Ieri am fost la un spectacol de păpuși cu fratele meu.   (2) — Aha... și?',
                 '(3) — Păpușile erau mari cât un om, iar actorii se vedeau în spatele lor.',
                 '(4) — Vrei să spui că actorii nu erau ascunși?   (5) — Exact. Purtau haine negre, ca niște umbre.',
                 '(6) — Și eu am văzut așa ceva, la un festival.   (7) — Cum reușeau să miște păpușile atât de mari?']),
             T(2, 'Tehnicile', 'Scrie tehnica: susținere verbală, reformulare, întrebare de clarificare, situație similară.',
               ['Replica', 'Tehnica de ascultare activă'], [110, 400], gol('(2)', '(4)', '(6)', '(7)')),
         ],
         [
             T(3, 'Ascultător activ?', 'Scrie DA sau NU.',
               ['Comportamentul', 'DA / NU'], [420, 90], gol(
                   'se uită în telefon cât vorbește colegul', 'dă din cap și spune „înțeleg”',
                   'îl întrerupe ca să-și spună propria poveste', 'așteaptă să termine, apoi întreabă',
                   'se gândește la răspuns în timp ce celălalt vorbește', 'rezumă ce a auzit')),
             L(4, 'Trei reacții', 'Colegul spune: „Nu mai vreau în trupa de teatru, am prea multe teme.” Scrie o încurajare, '
               'o reformulare și o întrebare de clarificare.', 2),
         ]),

    fisa(14, 'pp. 188-189',
         'Reper (manual, pp. 188-189): Numeralul cardinal exprimă un număr, cel ordinal ordinea. Valorile: adjectivală '
         '(trei copii), pronominală (Doi au întârziat), substantivală (tramvaiul 36, Doi plus trei). Funcțiile: atribut '
         'adjectival, subiect, nume predicativ, complemente, circumstanțiale, atribute.',
         [
             T(1, 'Felul și valoarea', 'Scrie felul (cardinal, ordinal) și valoarea (adjectivală, pronominală, substantivală).',
               ['Enunțul', 'Numeralul', 'Felul', 'Valoarea'], [220, 80, 90, 120], [
                   ['Trei actori au întârziat.', 'Trei', '', ''], ['Al doilea a sosit repede.', 'Al doilea', '', ''],
                   ['Locuiesc în blocul 12.', '12', '', ''], ['Doi plus doi fac patru.', 'Doi', '', ''],
                   ['Prima scenă e cea mai lungă.', 'Prima', '', ''], ['Am vorbit cu doi dintre ei.', 'doi', '', '']]),
             T(2, 'Funcția sintactică', 'Scrie funcția numeralului.',
               ['Enunțul', 'Numeralul', 'Funcția'], [230, 90, 190], [
                   ['Trei vor primi diplome.', 'Trei', ''], ['Radu este primul.', 'primul', ''],
                   ['Am citit două dintre cărți.', 'două', ''], ['M-am adresat primului.', 'primului', ''],
                   ['Mă gândesc la al treilea.', 'al treilea', ''], ['Cartea primului e pe masă.', 'primului', ''],
                   ['Ora 10 e potrivită.', '10', ''], ['Douăzeci de elevi au venit.', 'Douăzeci', '']], row_h=20),
         ],
         [
             T(3, 'Scrie în litere', 'Scrie numeralele cu litere.',
               ['Cu cifre', 'Cu litere'], [150, 360], gol(
                   '21 de fete', '12 băieți', '22 de cărți', 'al 2-lea act', 'a 3-a scenă', '1238 de elevi')),
             L(4, 'Jurnalul trupei', 'Scrie 5-6 rânduri din jurnalul unei trupe de teatru, cu două numerale cardinale și două '
               'ordinale. Subliniază-le.', 2),
         ], titlu='Numeralul'),

    fisa(15, 'pp. 190-191',
         'Reper (manual, pp. 190-191): Adverbul arată circumstanțele acțiunii: de loc, de timp, de mod; poate fi simplu '
         'sau compus, are grade de comparație (unele nu), locuțiuni adverbiale. Funcții: circumstanțial de mod, timp, '
         'loc, atribut adverbial. Semiadverbele (chiar, doar, numai, mai) nu au funcție.',
         [
             T(1, 'Felul și funcția', 'Scrie felul adverbului și funcția lui sintactică.',
               ['Enunțul', 'Adverbul', 'Felul', 'Funcția'], [210, 80, 90, 130], [
                   ['Actorii repetă zilnic.', 'zilnic', '', ''], ['Decorul e pus sus.', 'sus', '', ''],
                   ['A cântat frumos.', 'frumos', '', ''], ['Emoțiile de atunci au trecut.', 'de atunci', '', ''],
                   ['Casa de alături e teatrul.', 'de alături', '', ''], ['Numai tu ai știut replica.', 'Numai', '', '']]),
             T(2, 'Gradele de comparație', 'Scrie gradul de comparație al adverbului.',
               ['Enunțul', 'Gradul'], [260, 250], gol(
                   'Azi a jucat mai bine.', 'Ea a cântat cel mai frumos.', 'A vorbit foarte repede.',
                   'Explică la fel de clar ca tine.', 'A lucrat mai puțin atent.', 'Mergea tare încet.')),
         ],
         [
             T(3, 'Locuțiuni adverbiale', 'Scrie un adverb sinonim.',
               ['Locuțiunea', 'Adverbul sinonim'], [255, 255], gol(
                   'pe de rost', 'din când în când', 'de-a binelea', 'cât ai clipi', 'pe înserat')),
             T(4, 'Scrie corect', 'Corectează folosirea semiadverbelor.',
               ['Enunțul greșit', 'Varianta corectă'], [255, 255], gol(
                   'Vine decât el.', 'Mai am văzut spectacolul.', 'Mai îmi dai o carte?', 'Mai l-am văzut o dată.')),
         ], titlu='Adverbul'),

    fisa(16, 'pp. 192-193',
         'Reper (manual, pp. 192-193): Interjecția exprimă stări, reacții, îndemnuri (propriu-zisă) sau imită sunete '
         '(onomatopee); poate fi simplă sau compusă. Interjecțiile de adresare cheamă sau atrag atenția. Interjecția '
         'predicativă are funcție de predicat verbal. Interjecția se desparte prin virgulă sau semnul exclamării.',
         [
             T(1, 'Felul interjecției', 'Scrie felul după sens și după alcătuire.',
               ['Interjecția', 'Propriu-zisă / onomatopee', 'Simplă / compusă'], [150, 190, 170], gol3(
                   'vai', 'tic-tac', 'cioc-cioc', 'hapciu', 'of', 'ia uite', 'zdup', 'hodoronc-tronc'), row_h=20),
             T(2, 'Interjecția predicativă', 'Scrie DA dacă interjecția e predicativă.',
               ['Enunțul', 'Interjecția', 'DA / NU'], [270, 140, 100], [
                   ['Hai la repetiție!', 'Hai', ''], ['Of, ce greu e rolul!', 'Of', ''],
                   ['Mingea, bâldâbâc! în apă.', 'bâldâbâc', ''], ['Uite decorul nou!', 'Uite', ''],
                   ['Au, m-am lovit!', 'Au', ''], ['Pisica zvâc! pe dulap.', 'zvâc', '']]),
         ],
         [
             T(3, 'Punctuația', 'Rescrie enunțul cu punctuația corectă.',
               ['Enunțul', 'Varianta corectă'], [255, 255], gol(
                   'Măi Andrei unde ai fost?', 'Vai ce frumos!', 'Ei bine să începem.', 'Hei tu de acolo!')),
             T(4, 'Verbe din interjecții', 'Scrie verbul format de la interjecție.',
               ['Interjecția', 'Verbul'], [255, 255], gol('miau', 'fâș', 'cirip', 'tic-tac', 'cioc', 'sfâr')),
         ], titlu='Interjecția'),

    fisa(17, 'pp. 194-195',
         'Reper (manual, p. 194): După scop, textul poate fi persuasiv (convinge: argumente emoționale, întrebări '
         'retorice, exclamații, majuscule), informativ (date, numerale, prezentul), procedural (pași, imperativ, '
         '„trebuie”) sau descriptiv (substantive și adjective).',
         [
             X(1, 'Patru texte despre clubul de teatru', [
                 'Citește textele (scrise pentru fișă).',
                 '(A) Vrei să scapi de emoții? Vrei prieteni noi? Vino la CLUBUL DE TEATRU! Aici vei descoperi cine ești '
                 'cu adevărat!',
                 '(B) Clubul de teatru al școlii a fost înființat în 2015. Are 24 de membri și a pus în scenă șase spectacole.',
                 '(C) Pentru înscriere, completați formularul de la secretariat. Aduceți o fotografie. Nu uitați semnătura '
                 'unui părinte!',
                 '(D) Sala de repetiții are pereți vișinii, o scenă mică de lemn lustruit și două rânduri de scaune '
                 'pliante, albastre.']),
             T(2, 'Tiparul textului', 'Scrie tipul fiecărui text și două mărci ale lui.',
               ['Textul', 'Tipul', 'Două mărci'], [70, 130, 310], gol3('(A)', '(B)', '(C)', '(D)'), row_h=30),
         ],
         [
             T(3, 'Situația și tiparul', 'Scrie tipul de text potrivit fiecărei situații.',
               ['Situația', 'Tipul de text'], [380, 130], gol(
                   'îi explici bunicii cum se trimite un mesaj', 'îți convingi colegii să vină la spectacol',
                   'prezinți în revistă istoria școlii', 'îți descrii camera într-o scrisoare')),
             L(4, 'Textul meu persuasiv', 'Scrie 5-6 rânduri prin care convingi un coleg să citească o carte, cu două '
               'mijloace persuasive.', 2),
         ], titlu='Tipare textuale. Cererea (I)'),

    fisa(18, 'p. 195',
         'Reper (manual, p. 195): Cererea are: adresarea (centrat, cu spațiu liber deasupra), cuprinsul în două '
         'paragrafe (Subsemnatul..., datele, solicitarea; apoi motivarea), data (stânga) și semnătura (dreapta), '
         'destinatarul (jos, în stânga).',
         [
             T(1, 'Părțile cererii', 'Scrie unde se așază fiecare parte și ce conține.',
               ['Partea', 'Unde se așază', 'Ce conține'], [130, 150, 230], gol3(
                   'adresarea', 'primul paragraf', 'al doilea paragraf', 'data', 'semnătura', 'destinatarul'), row_h=26),
             T(2, 'Corect sau greșit?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Adresarea se scrie centrat, cu spațiu liber deasupra.', 'Motivul cererii apare în primul paragraf.',
                 'Data se scrie sub text, în stânga.', 'Semnătura se pune în dreapta.',
                 'Destinatarul se trece jos, în stânga.', 'Cererea poate începe cu „Salut, domnule director”.')),
         ],
         [
             L(3, 'Cererea mea', 'Redactează o cerere către doamna bibliotecară a școlii, prin care soliciți împrumutul a '
               'trei cărți pentru vacanță.', 4),
         ], titlu='Cererea (II)'),

    fisa(19, 'pp. 196-197',
         'Recapitulare (manual, pp. 166-187): textul dramatic, indicațiile scenice, personajul dramatic, dialogul, '
         'arta spectacolului, interviul, tracul comunicativ, ascultarea activă.',
         [
             X(1, 'Înainte de premieră', [
                 'Citește fragmentul (scris pentru fișă).',
                 'Personaje: MARA, 13 ani; DOMNUL IONESCU, regizorul trupei școlii. Decor: culisele unei săli de festivități. '
                 'Se aude, de departe, rumoarea publicului.',
                 'MARA (plimbându-se nervoasă de colo-colo) – Nu pot, domnule Ionescu. Am uitat tot.',
                 'DOMNUL IONESCU (calm, îi pune o mână pe umăr) – Respiră adânc. Spune-mi prima replică.',
                 'MARA (în șoaptă) – „Vrem să vă dăruim...”',
                 'DOMNUL IONESCU (zâmbind) – Vezi? N-ai uitat nimic. Uită-te la mama ta din primul rând și vorbește pentru ea.',
                 'Se aude gongul. Mara respiră adânc și iese pe scenă.']),
             T(2, 'Recunoaște', 'Completează după fragment.',
               ['', 'Din fragment'], [210, 300], gol(
                   'o indicație externă', 'o indicație de ton', 'o indicație de gest', 'o indicație de deplasare',
                   'starea Marei', 'două strategii contra tracului', 'un sunet din spectacol')),
         ],
         [
             T(3, 'Interviu după premieră', 'Scrie trei întrebări deschise pentru Mara și răspunsurile pe care și le-ar da.',
               ['Întrebarea', 'Răspunsul Marei'], [240, 270], rows=3, data=[['', ''], ['', ''], ['', '']], row_h=40),
             L(4, 'Fișa personajului', 'Scrie 4-5 rânduri despre Mara: cine e, ce simte, cum se schimbă, o replică relevantă.', 2),
         ]),

    fisa(20, 'p. 197',
         'Recapitulare (manual, pp. 188-195): numeralul (fel, valoare, funcție), adverbul (fel, grade, funcții, '
         'semiadverbe), interjecția (fel, predicativă, punctuație), tiparele textuale, cererea.',
         [
             X(1, 'Cinci enunțuri', [
                 '(1) Ei, fetițo, e a treia oară când repetăm scena!   (2) Azi doi dintre actori au venit mai devreme.',
                 '(3) Pâș-pâș, sufleorul a intrat în cușca de dedesubt.   (4) Emoțiile de acum vor trece curând.',
                 '(5) Hai la scenă, că începe spectacolul!']),
             T(2, 'Numerale și adverbe', 'Scrie partea de vorbire, felul și funcția sintactică.',
               ['Cuvântul (enunțul)', 'Partea de vorbire, felul', 'Funcția'], [150, 210, 150], gol3(
                   'a treia (1)', 'doi (2)', 'Azi (2)', 'mai devreme (2)', 'de dedesubt (3)', 'de acum (4)', 'curând (4)'),
               row_h=20),
             T(3, 'Interjecțiile', 'Scrie felul interjecției și dacă e predicativă.',
               ['Interjecția', 'Felul', 'Predicativă?'], [150, 250, 110], gol3('Ei (1)', 'Pâș-pâș (3)', 'Hai (5)')),
         ],
         [
             T(4, 'Scrie corect', 'Corectează greșelile.',
               ['Greșit', 'Corect'], [255, 255], gol(
                   'Mai am citit piesa.', 'Vine decât mâine.', 'douăzecișiunu de elevi', 'a doua-a oară', 'Măi Radu unde ești?'),
               row_h=20),
             L(5, 'Cererea', 'Scrie o cerere către directorul Casei de Cultură, prin care soliciți sala pentru o repetiție.', 3),
         ]),
]
