# Fișe de exerciții, clasa a VI-a, Unitatea I „Acasă, în familie, printre cărți”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 6). Textele fără autor
# sunt create pentru fișe; textele sub drepturi de autor (Adina Popescu, Simona
# Popescu, Rodica Zane, Anne Frank, Karen Cushman) sunt doar parafrazate.
# Rezolvările: notite-profesor/clasa-6/unitatea-1/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-6-unitatea-1.py

SUB = 'Clasa a VI-a · Unitatea I, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 6, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-6/unitatea-1/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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

BUNIC = ('„Sâmbătă, 5 octombrie. Dragă jurnalule, azi bunicul a urcat în pod și a coborât cu o cutie prăfuită. '
         'Înăuntru erau cărțile lui de când era copil, legate cu sfoară. Mi-a dat una cu coperte albastre, cu '
         'marginile roase: «Pe asta am citit-o de zece ori», mi-a spus. Seara am citit-o cu lanterna, sub pătură, '
         'și mi s-a părut că aud vocea lui cum povestește. Mâine o să-l întreb ce pagină îi plăcea cel mai mult.”')

MARTIE = ('„Joi, 14 martie. Dragă jurnalule, azi a nins din nou, deși calendarul spune că e primăvară. La școală, '
          'Radu a adus un pui de pisică găsit în curte și toată clasa s-a strâns la fereastră să-l vadă. Doamna '
          'dirigintă ne-a lăsat să-i alegem un nume. Când l-am văzut tremurând, mi-a venit să râd și să plâng în '
          'același timp. L-am numit Martie.”')

FISE = [
    fisa(1, 'pp. 10-12',
         'Reper: În „Un păianjen care se crede Spiderman” de Adina Popescu, un păianjen care locuiește în camera Mariei '
         'povestește cum fata l-a descoperit și cum mama ei l-a căutat printre cărți. Păianjenul, singur până la '
         'venirea familiei, începuse să-i considere pe Maria și pe părinții ei familia lui.',
         [
             T(1, 'Cine face?', 'Scrie personajul care face fiecare acțiune.',
               ['Acțiunea', 'Personajul'], [370, 140], gol(
                   'strigă că în cameră e un păianjen uriaș', 'golește raftul de cărți',
                   'se ascunde între copertă și prima pagină', 'vorbește cu familia pe Skype',
                   'scutură cartea pe fereastră', 'promite că va face curat a doua zi'), row_h=20),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Familia Mariei locuia în casă de trei ani.',
                 'Păianjenul își țesea pânza doar noaptea.',
                 'Cartea preferată a păianjenului e scrisă de Roald Dahl.',
                 'Mama își amintește că bunica îi citea din „Alice în Țara Minunilor”.',
                 'La final, Maria îl aplaudă pe păianjen.',
                 'Întâmplarea are loc într-o după-amiază de toamnă.'), row_h=20),
         ],
         [
             T(3, 'Cuvinte din text', 'Explică pe scurt sensul fiecărui cuvânt sau expresii.',
               ['Cuvântul', 'Sensul'], [150, 360], gol(
                   'de izbeliște', 'migală', 'împăciuitoare', 'răzgâiată', 'a răbufni', 'veritabil'), row_h=22),
             L(4, 'Lista păianjenului', [
                 'Scrie, la persoana I, lista păianjenului: „Ce aș face dacă aș fi cu adevărat Spiderman” (5 propoziții).'], 4),
         ]),

    fisa(2, 'p. 13',
         'Reper (manual, p. 13): Textul narativ prezintă întâmplări în ordine logică și temporală și poate fi împărțit '
         'în secvențe, ca scenele unui film, după timp, spațiu și personaje. Indicii de timp arată acțiunea din prim-plan, '
         'dar pot trimite și la momente petrecute înainte.',
         [
             T(1, 'Firul întâmplărilor', 'Numerotează întâmplările în ordinea din text (1-7).',
               ['Întâmplarea', 'Nr.'], [450, 60], gol(
                   'Mama golește raftul de cărți.', 'Păianjenul se lasă pe fir spre o altă lume.',
                   'Maria strigă că în cameră e un păianjen uriaș.', 'Mama scutură cartea pe fereastră.',
                   'Păianjenul se ascunde în „Alice în Țara Minunilor”.', 'Păianjenul fuge prin paginile cărții.',
                   'Mama deschide cartea preferată a păianjenului.'), row_h=20),
             T(2, 'Prim-plan sau amintire?', 'Scrie P (acțiunea din prim-plan) sau A (amintire, întâmplare petrecută înainte).',
               ['Enunțul', 'P / A'], [440, 70], gol(
                   'Familia Mariei se mutase în casă cu trei luni în urmă.', 'Mama ia cărțile de pe raft.',
                   'Odată, Maria a aruncat o foaie mototolită spre colțul păianjenului.', 'Mama deschide fereastra.',
                   'Pe vremuri, în camera de la etaj nu locuia nimeni.', 'Maria țipă din nou.'), row_h=20),
         ],
         [
             X(3, 'Când se petrece?', [
                 'Încercuiește detaliile care arată timpul întâmplării din prim-plan.',
                 'soare blând de toamnă  ·  somnul de după-amiază  ·  raftul cu cărți  ·  frunze îngălbenite',
                 'pânza țesută noaptea  ·  Maria trecuse în clasa a VI-a  ·  cartea cu Pălărierul Nebun']),
             L(4, 'O scenă nouă', [
                 'Scrie o scenă nouă (5-6 propoziții): unde ajunge păianjenul după ce coboară pe fir. Folosește cel puțin',
                 'doi indici de timp și doi de spațiu și subliniază-i.'], 5),
         ]),

    fisa(3, 'pp. 14-15',
         'Reper (manual, p. 14): Autorul este o persoană reală, care construiește o lume imaginară. Naratorul și '
         'personajele trăiesc doar în ficțiune. Când naratorul folosește persoana I, el este și personaj și povestește '
         'din perspectiva lui, cu gândurile și sentimentele sale.',
         [
             T(1, 'Real sau ficțiune?', 'Scrie R (persoană reală) sau F (ființă din ficțiune).',
               ['Numele', 'R / F', 'Numele', 'R / F'], [185, 70, 185, 70],
               perechi(('Adina Popescu', 'păianjenul-narator'), ('Maria', 'cititorul'),
                       ('mama Mariei', 'Lewis Carroll')), row_h=22),
             X(2, 'De la persoana I la persoana a III-a', [
                 'Rescrie enunțurile ca și cum ar povesti altcineva despre păianjen.',
                 'a) „Am tresărit și m-am ascuns în cartea mea preferată.” → __________________________________',
                 'b) „Mă simțeam foarte singur în camera goală.” → ________________________________________',
                 'c) „Îmi țes pânza doar noaptea.” → ______________________________________________________']),
             T(3, 'Fapt, gând sau sentiment?', 'Scrie F (fapt), G (gând, dorință) sau S (sentiment).',
               ['Enunțul (repovestit)', 'F / G / S'], [430, 80], gol(
                   'Mama deschide fereastra.', 'Aș vrea o soră care să mă aplaude.', 'M-am umplut de mândrie.',
                   'Mama ia cărțile de pe raft.', 'M-a cuprins furia când am auzit că sunt o mizerie.'), row_h=20),
         ],
         [
             L(4, 'Aceeași scenă, alt narator', [
                 'Rescrie în 6-7 propoziții momentul în care mama deschide cartea, povestit de mama, la persoana I.',
                 'Ce vede și ce simte ea?'], 5),
         ]),

    fisa(4, 'p. 16',
         'Reper: Interpretezi textul când te întrebi ce spune el dincolo de întâmplări. Păianjenul singuratic își dorește '
         'o familie, o fată răsfățată e certată de mama ei, iar tatăl e departe: textul vorbește despre ce înseamnă să ai '
         'o familie.',
         [
             T(1, 'Ce înseamnă familia?', 'Scrie ce înseamnă familia pentru fiecare personaj, după text.',
               ['Personajul', 'Ce înseamnă familia pentru el / ea'], [130, 380], gol(
                   'păianjenul', 'Maria', 'mama', 'tatăl'), row_h=30),
             T(2, 'De acord sau nu?', 'Scrie DA sau NU și un argument din text.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [220, 60, 230],
               [['Maria nu prețuiește ce are.', '', ''], ['Mama o ceartă pe Maria fiindcă nu o iubește.', '', ''],
                ['Păianjenul chiar este un erou.', '', '']], row_h=40),
         ],
         [
             L(3, 'Alte titluri', 'Propune două titluri noi pentru text și explică de ce s-ar potrivi.', 2),
             L(4, 'Regulile unei familii fericite', [
                 'Scrie trei reguli ale unei familii fericite, pornind de la text, cu câte o explicație pentru fiecare.'], 4),
         ]),

    fisa(5, 'pp. 17-18',
         'Reper: În „Indescriptibil” de Simona Popescu, naratoarea își amintește de Dicționarul școlarului, cumpărat la '
         '11 ani: o carte fără poze și fără povești, în care cuvintele i se păreau vietăți care prind viață. Jocul ei era '
         'să ghicească înțelesul unui cuvânt.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Dicționarul avea poze și poezii.',
                 'Primul cuvânt din dicționar era „abà”, iar ultimul „zvânta”.',
                 'Dicționarul avea aproape 11 000 de cuvinte.',
                 'Pentru copil, cuvintele sunt ca niște vietăți într-un furnicar.',
                 'Naratoarea nu mai are dicționarul.',
                 'Textul spune că în cuvântul „caisă” se ascunde cuvântul „sâmbure”.'), row_h=20),
             X(2, 'Jocul de-a ghicitul, pe dos', [
                 'Citește definițiile și ghicește cuvântul.',
                 'a) Pasăre de noapte, cu ochi mari, care vede în întuneric. → ______________',
                 'b) Cabină deschisă, suspendată de un balon. → ______________',
                 'c) Stofă groasă de lână, folosită pentru uniforme și pături. → ______________',
                 'd) Nimfa fluturilor. → ______________']),
         ],
         [
             T(3, 'Cuvinte în cuvinte', 'Scrie trei cuvinte care se „ascund” în fiecare cuvânt (lucruri legate de el).',
               ['Cuvântul', 'Cuvintele ascunse'], [130, 380], gol('școală', 'vacanță', 'prieten', 'ploaie'), row_h=26),
             L(4, 'Zece copii, zece imagini', [
                 'Scrie ce imagine îți vine în minte pentru cuvântul „mare” sau „casă” (4-5 propoziții, cu culori,',
                 'sunete, mirosuri).'], 4),
         ]),

    fisa(6, 'p. 19',
         'Reper (manual, p. 19): Textul descriptiv literar prezintă sugestiv un obiect, o ființă sau un loc și ajută cititorul '
         'să și-l imagineze. Descrierea poate folosi toate cele cinci simțuri și poate exprima sentimente și gânduri.',
         [
             X(1, 'Ghiozdanul bunicului', [
                 'Citește descrierea (scrisă pentru fișă).',
                 '„Ghiozdanul bunicului stă în podul casei: e din piele maronie, crăpată la colțuri, cu două catarame de alamă '
                 'care sună ca niște clopoței. Miroase a cerneală și a mere uscate. Când îl deschid, am impresia că dinăuntru '
                 'ies, în șir, toți anii lui de școală.”']),
             T(2, 'Schema descrierii', 'Completează cu elemente din text.',
               ['Elementul', 'Din text'], [170, 340], gol(
                   'obiectul descris', 'proprietăți', 'elemente componente', 'simțuri (ce aud, ce miros)',
                   'sentimente, impresii'), row_h=24),
             T(3, 'Obiectiv sau subiectiv?', 'Scrie O (cum arată obiectul) sau S (cum îl simte cineva).',
               ['Enunțul', 'O / S'], [440, 70], gol(
                   'Dicționarul are aproape 11 000 de cuvinte.', 'Cuvintele se mișcă precum furnicile.',
                   'Coperta e galbenă, cu un desen verde.', 'Cuvântul „ploaie” sună ca picăturile pe geam.',
                   'Cartea are multe pagini.'), row_h=20),
         ],
         [
             T(4, 'O livadă, toamna', 'Descrie o livadă toamna, cu cele cinci simțuri.',
               ['Simțul', 'Descrierea ta'], [140, 370], gol(
                   'Arată ca...', 'Sună ca...', 'Miroase a...', 'Are gust de...', 'Se simte (la atingere) ca...'), row_h=26),
             L(5, 'Obiectul tău preferat', [
                 'Descrie obiectul tău preferat în 5-6 propoziții: întâi cum arată, apoi ce simți tu când îl folosești.'], 4),
         ]),

    fisa(7, 'p. 20',
         'Reper: „Indescriptibil” vorbește despre puterea cuvintelor și a imaginației: dicționarul devine o jucărie din '
         'care faci alte jucării, fiecare cuvânt cheamă altă imagine pentru fiecare om, iar lumea dinăuntrul nostru '
         'poate fi mai mare decât cea din afară.',
         [
             T(1, 'Ce înțeleg eu', 'Explică fiecare idee din text (repovestită), cu cuvintele tale.',
               ['Ideea din text', 'Ce înțeleg eu'], [230, 280], gol(
                   'dicționarul, o jucărie din care faci alte jucării', 'fiecare cuvânt cheamă altă imagine',
                   'cuvintele se ajută unele pe altele', 'lumea dinăuntru e mai mare decât cea din afară'), row_h=34),
             L(2, 'Lumea ta lăuntrică', 'Numește trei lucruri din lumea ta lăuntrică (amintiri, vise, gânduri) pe care nu le poate vedea nimeni.', 3),
         ],
         [
             L(3, 'Indescriptibil', 'Scrie trei lucruri care ți se par indescriptibile și explică de ce e greu să le descrii.', 3),
             L(4, 'Dicționarul meu', [
                 'Alege cinci cuvinte dragi ție și scrie pentru fiecare o definiție personală, ca într-un dicționar',
                 'al tău (exemplu: „VACANȚĂ – timpul în care ceasul merge mai repede”).'], 5),
         ]),

    fisa(8, 'p. 21',
         'Reper (manual, p. 21): Textele continue sunt organizate în propoziții și paragrafe (povestiri, poezii, articole). '
         'Textele discontinue prezintă informația în secvențe fără legătură între ele sau în liste, tabele, calendare, '
         'grafice, scheme, articole de dicționar.',
         [
             T(1, 'Continuu sau discontinuu?', 'Scrie C (continuu) sau D (discontinuu).',
               ['Textul', 'C / D', 'Textul', 'C / D'], [185, 70, 185, 70],
               perechi(('o poezie', 'orarul clasei'), ('o scrisoare', 'harta metroului'),
                       ('un grafic cu temperaturile', 'o știre'), ('cuprinsul unei cărți', 'o povestire')), row_h=22),
             T(2, 'Din continuu în discontinuu', [
                 'Transformă textul într-un tabel: „Luni avem română, matematică și sport. Marți avem istorie,',
                 'engleză și muzică.”'],
               ['Ziua', 'Ora 1', 'Ora 2', 'Ora 3'], [110, 133, 133, 134], rows=2, row_h=28),
             T(3, 'Unde găsești răspunsul?', 'Scrie textul în care cauți răspunsul și dacă e C sau D.',
               ['Întrebarea', 'Textul potrivit', 'C / D'], [250, 190, 70], gol3(
                   'La ce oră pleacă trenul spre Brașov?', 'Ce simte eroul la finalul cărții?',
                   'Ce înseamnă cuvântul „nabab”?', 'Cum a fost excursia colegei mele?'), row_h=24),
         ],
         [
             L(4, 'Din discontinuu în continuu', [
                 'Lista de cumpărături: 2 kg de mere, o pâine, un litru de lapte, 10 ouă.',
                 'Scrie mesajul (text continuu) prin care îi ceri fratelui tău să cumpere aceste lucruri.'], 3),
             L(5, 'Textele zilei tale', 'Scrie ce texte continue și ce texte discontinue ai citit ieri (cel puțin câte trei).', 2),
         ]),

    fisa(9, 'pp. 22-23',
         'Reper: În „Lectura în trei, în doi, de unul singur”, Rodica Zane își amintește cum a învățat să citească: '
         'întâi ascultând-o pe mama, alături de fratele ei, apoi citind pe rând cu fratele, apoi singură. Poveștile, spune '
         'autoarea, ne poartă amintirile ca un mijloc de transport sigur.',
         [
             T(1, 'Cele trei feluri de lectură', 'Completează după text.',
               ['Felul lecturii', 'Cine citește', 'Ce carte'], [130, 200, 180], gol3(
                   'în trei', 'în doi', 'de unul singur'), row_h=32),
             T(2, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Cartea „Foarte gras fără nas” e despre un bob de fasole.',
                 'Mama le-a citit întâi „Legendele Olimpului”.',
                 'Fratele autoarei se numește Mircea.',
                 'Autoarea compară poveștile cu un mijloc de transport.',
                 'Prima carte, spune autoarea, se citește o singură dată.'), row_h=20),
         ],
         [
             T(3, 'Ce aștepți de la o carte?', 'Scrie ce aștepți de la fiecare fel de carte.',
               ['Cartea', 'Ce aștept de la ea'], [170, 340], gol(
                   'un atlas', 'un roman de aventuri', 'o carte de bucate', 'o culegere de poezii'), row_h=26),
             L(4, 'Cititorul de azi', [
                 'Compară cum a învățat autoarea să citească cu felul în care citești tu azi (cărți, tabletă, cărți audio,',
                 'bibliotecă) în 5-6 propoziții.'], 4),
         ]),

    fisa(10, 'pp. 24-25',
         'Reper (manual, p. 25): Legenda este un text narativ despre originea unor ființe sau lucruri, despre fapte de eroi '
         'sau evenimente istorice, cu întâmplări miraculoase. Legendele mitologice (deceurile) explică originea unor '
         'ființe, fenomene, astre; legendele istorice explică, prin fapte imaginare, evenimente și personaje reale.',
         [
             T(1, 'Fapta și urmarea', 'Completează după „Legenda păianjenului și a albinei”.',
               ['Personajul', 'Ce face când află vestea', 'Ce devine și cum trăiește'], [100, 200, 210], gol3(
                   'fata', 'băiatul'), row_h=50),
             T(2, 'Mitologică sau istorică?', 'Scrie M (mitologică) sau I (istorică).',
               ['Legenda', 'M / I'], [440, 70], gol(
                   'Legenda Mării Egee', 'Legenda ghiocelului', 'Legenda lui Dragoș și a zimbrului',
                   'Legenda rândunicii', 'Legenda mamei lui Ștefan cel Mare la Cetatea Neamțului'), row_h=20),
         ],
         [
             X(3, 'Păianjenul în alte culturi', [
                 'Scrie, lângă fiecare nume, litera potrivită.',
                 '1. Arahne ___      2. Peștera Thawr ___      3. Femeia Păianjen (tribul Hopi) ___',
                 'a) a țesut din gândurile zeului Soarelui păsările și peștii',
                 'b) a fost prefăcută în păianjen după o întrecere la țesut cu zeița Atena',
                 'c) pânza țesută la intrare l-a salvat pe profet de urmăritori']),
             L(4, 'Legenda ta', [
                 'Scrie o legendă de 6-8 rânduri care explică de ce furnica e harnică sau de ce bufnița iese noaptea.',
                 'Legenda să transmită o valoare.'], 5),
         ]),

    fisa(11, 'pp. 26-27',
         'Reper (manual, p. 27): Contextul de comunicare cuprinde datele despre participanți (cine sunt, ce statut au, '
         'unde și când comunică), informațiile, opiniile și intențiile lor și locul enunțului în conversație. Vorbitorii '
         'își adaptează limbajul, adresarea, tonul și ritmul la context.',
         [
             X(1, 'La bibliotecă', [
                 'Citește dialogul.',
                 '— Bună ziua, doamnă bibliotecară! Aveți „Alice în Țara Minunilor”?',
                 '— Bună ziua! O avem, dar e împrumutată până vineri.',
                 '— Atunci aș vrea s-o rezerv, vă rog.',
                 '— Sigur. Scrie-ți numele aici și te anunț când se întoarce.']),
             T(2, 'Contextul dialogului', 'Completează.',
               ['Componenta', 'În dialog'], [190, 320], gol(
                   'cine vorbește', 'relația dintre ei', 'locul', 'intenția copilului',
                   'intenția bibliotecarei', 'cum se vede relația în adresare'), row_h=22),
         ],
         [
             T(3, 'Condiții bune sau dificile?', 'Scrie B (bune) sau D (dificile) și cum te adaptezi.',
               ['Situația', 'B / D', 'Cum te adaptezi'], [220, 50, 240], gol3(
                   'vorbești la telefon într-un tren aglomerat', 'discuți cu mama în bucătărie',
                   'prezinți ceva, iar colegii vorbesc între ei', 'îi explici ceva bunicului, care aude greu'), row_h=30),
             L(4, 'O veste, trei destinatari', [
                 'Anunță vestea „Am câștigat concursul de lectură!” într-un mesaj către bunica, unul către un prieten',
                 'și unul către doamna dirigintă (câte 1-2 propoziții).'], 4),
         ]),

    fisa(12, 'p. 27',
         'Reper (manual, p. 27): Într-un joc de rol, participanții își potrivesc adresarea după statutul și relația dintre ei, '
         'se adaptează la condițiile grele de comunicare (cu gesturi, mimică, ton) și folosesc cunoștințe comune despre '
         'tema discuției.',
         [
             T(1, 'Pregătirea jocului de rol', 'Completează pentru rolul tău.',
               ['Întrebarea', 'Răspunsul'], [200, 310], gol(
                   'Cine sunt eu?', 'Cine e interlocutorul meu?', 'Unde suntem?', 'Ce vreau să obțin?',
                   'Două argumente', 'Cum mă adresez (formule)?'), row_h=24),
             X(2, 'Replica potrivită', [
                 'Bunicul, care aude greu, întreabă: „Ce animal ai primit?” Încercuiește replica potrivită și explică.',
                 'a) „Un hamster.” (spus în șoaptă, cu privirea în jos)',
                 'b) „UN HAMSTER, bunicule! UITE, CÂT PALMA MEA!” (spus rar, clar, arătând cu mâinile)',
                 'c) „Lasă, nu contează.”',
                 'Pentru că ____________________________________________________________________']),
         ],
         [
             T(3, 'Grila de observare', 'Evaluează perechea pe care o urmărești: FB, B sau S, cu un exemplu.',
               ['Criteriul', 'Calificativ', 'Exemplu concret'], [230, 70, 210], gol3(
                   'adresare potrivită statutului și relației', 'adaptare la condiții grele (gesturi, ton)',
                   'cunoștințe comune despre temă'), row_h=44),
             L(4, 'Ce a fost greu?', 'Scrie ce ți s-a părut cel mai greu în jocul tău de rol și cum ai rezolvat.', 3),
         ]),

    fisa(13, 'pp. 28-29',
         'Reper (manual, pp. 28-29): Cuvântul are sens (conținut) și formă (sunete); sensul se stabilește în context. '
         'Sinonimele au formă diferită și sens asemănător, antonimele au sens diametral opus; sunt aceeași parte de '
         'vorbire. Sinonimia și antonimia se stabilesc între cuvinte, între un cuvânt și o expresie sau între expresii.',
         [
             T(1, 'Aceeași formă, alt sens', 'Scrie două sensuri diferite pentru fiecare cuvânt.',
               ['Cuvântul', 'Sensul 1', 'Sensul 2'], [110, 200, 200], gol3(
                   'broască', 'balon', 'ban', 'liliac'), row_h=24),
             T(2, 'Sinonime pentru „tare”', 'Înlocuiește adjectivul „tare” cu un sinonim potrivit contextului.',
               ['Enunțul', 'Sinonimul'], [360, 150], gol(
                   'Cafeaua e prea tare pentru copii.', 'Piatra e tare.', 'Vorbește mai tare, te rog!',
                   'Andrei e tare la șah.', 'Afară bate un vânt tare.'), row_h=20),
         ],
         [
             T(3, 'Expresii', 'Scrie un sinonim și un antonim (cuvânt sau expresie) pentru fiecare expresie.',
               ['Expresia', 'Sinonim', 'Antonim'], [190, 160, 160], gol3(
                   'a-și lua picioarele la spinare', 'a fi cu capul în nori', 'a avea mână spartă', 'a pune umărul'), row_h=26),
             X(4, 'Antonime sau doar diferite?', [
                 'Scrie A (antonime, sens opus) sau D (doar diferite, fără sens opus).',
                 'mare – mic ___    fată – băiat ___    cald – rece ___    luni – marți ___    zi – noapte ___    câine – pisică ___']),
             L(5, 'Perechi despre familie', 'Scrie un enunț cu o pereche de sinonime și unul cu o pereche de antonime, despre familie.', 2),
         ]),

    fisa(14, 'pp. 30-31',
         'Reper (manual, p. 30): Sensul propriu de bază e sensul obișnuit, păstrat în orice context; sensul propriu '
         'secundar apare pe baza unei asemănări cu obiectul denumit (piciorul paharului); sensul figurat e neobișnuit, '
         'expresiv (Părinții sunt picioarele de sprijin ale copiilor.). Expresiile au sens în ansamblu.',
         [
             T(1, 'Ce sens are?', 'Scrie B (propriu de bază), S (propriu secundar) sau F (figurat).',
               ['Enunțul', 'B / S / F'], [430, 80], gol(
                   'Are ochi verzi.', 'Ochiul de apă din pădure e limpede.', 'Ochii ferestrelor priveau strada.',
                   'Poartă fular la gât.', 'Gâtul sticlei s-a ciobit.', 'Ideile îi aleargă prin minte.'), row_h=20),
             T(2, 'Un cuvânt, trei sensuri', 'Scrie câte un enunț scurt pentru fiecare sens.',
               ['Cuvântul', 'Sens de bază', 'Sens secundar', 'Sens figurat'], [80, 143, 143, 144],
               [['mână', '', '', ''], ['coadă', '', '', '']], row_h=46),
         ],
         [
             X(3, 'Sens figurat sau expresie?', [
                 'Subliniază cuvântul folosit cu sens figurat și încercuiește expresiile (sensul e al întregii expresii).',
                 'a) Ana e o floare.          b) Ana e în floarea vârstei.',
                 'c) Vorbele lui sunt ghimpi.  d) Mi-a pus bețe-n roate.']),
             L(4, 'Versuri cu sens figurat', [
                 'Scrie patru versuri (sau patru propoziții) despre familie, cu cel puțin trei cuvinte folosite cu sens',
                 'figurat. Subliniază-le.'], 4),
         ]),

    fisa(15, 'pp. 32-33',
         'Reper (manual, pp. 32-33): Omonimele au aceeași formă și sensuri fără legătură: lexicale totale (la toate '
         'formele), lexicale parțiale (nu la toate formele), lexico-gramaticale (părți de vorbire diferite). Cuvântul '
         'polisemantic are mai multe sensuri legate între ele. Omonimele trebuie să se pronunțe la fel.',
         [
             T(1, 'Ce fel de omonime?', 'Scrie T (lexicale totale), P (lexicale parțiale) sau LG (lexico-gramaticale).',
               ['Perechea', 'T / P / LG'], [430, 80], gol(
                   'leu (animal) – leu (monedă)', 'corn (de animal) – corn (cornuleț)', 'poartă (substantiv) – poartă (verb)',
                   'vie (plantație) – vie (adjectiv, „în viață”)', 'cer (bolta cerească) – cer (verbul „a cere”)'), row_h=20),
             T(2, 'Sensurile verbului „a trage”', 'Scrie un sinonim pentru fiecare sens.',
               ['Enunțul', 'Sinonimul'], [360, 150], gol(
                   'Trage sertarul și ia foarfeca.', 'Trage aer în piept înainte de probă.',
                   'Arcașul trage la țintă.', 'Am tras la un hotel mic, lângă gară.'), row_h=20),
         ],
         [
             X(3, 'Omofone sau omografe?', [
                 'Scrie OF (se pronunță la fel, se scriu diferit) sau OG (se scriu la fel, se pronunță diferit).',
                 'ea – ia ___     cópii – copíi ___     s-a – sa ___     ácele – acéle ___     nai – n-ai ___']),
             L(4, 'Joc de cuvinte', 'Scrie două versuri amuzante cu o pereche de omonime (de exemplu, „poartă”, „leu”, „vie”).', 3),
         ]),

    fisa(16, 'pp. 34-35',
         'Reper (manual, pp. 34-35): Diftongul = vocală + semivocală în aceeași silabă (ascendent: floa-re; descendent: '
         'mâi-ne). Triftongul = vocală + două semivocale în aceeași silabă (cre-ioa-ne). Hiatul = două vocale alăturate, '
         'în silabe diferite (ca-i-să). Ce, ci, ge, gi, che, chi, ghe, ghi înaintea unei vocale nu formează de obicei diftong.',
         [
             T(1, 'Diftong, triftong sau hiat?', 'Desparte în silabe și scrie D, T sau H.',
               ['Cuvântul', 'Silabele', 'D / T / H'], [150, 270, 90], gol3(
                   'beau', 'fiică', 'aeroport', 'piatră', 'ploaie', 'rouă', 'iau'), row_h=20),
             X(2, 'Urcător sau coborâtor?', [
                 'Subliniază diftongul și scrie A (ascendent) sau D (descendent).',
                 'soare ___    mâine ___    iepure ___    bou ___    cai ___    piață ___']),
         ],
         [
             X(3, 'Capcane', [
                 'a) Au diftong cuvintele „ceas”, „gheață”, „geam”? Scrie DA sau NU și explică: _____________________',
                 '______________________________________________________________________________',
                 'b) Ce sunete auzi la începutul lui „el” și „este”? Dar în „eu”? ___________________________']),
             X(4, 'Cuvinte legate prin cratimă', [
                 'Scrie D (diftong) sau T (triftong) pentru grupul format în aceeași silabă.',
                 'mi-a ___      ne-au ___      te-ai ___      s-au ___']),
             L(5, 'Vânătoarea de sunete', 'Scrie o propoziție cu trei cuvinte cu diftong, una cu un triftong și una cu un hiat. Subliniază-le.', 3),
         ]),

    fisa(17, 'pp. 36-37',
         'Reper (manual, pp. 36-37): O consoană între vocale trece la silaba următoare (le-gă-na); două consoane se '
         'despart (pân-ză), cu excepția grupurilor cu l sau r (ca-blu, co-dru); din trei consoane, prima rămâne (pen-tru); '
         'două vocale alăturate se despart (a-vi-on). Liniuța de despărțire se scrie o singură dată, la capăt de rând.',
         [
             T(1, 'Regula aplicată', [
                 'Desparte în silabe și scrie numărul regulii: 1 = o consoană între vocale; 2 = două consoane;',
                 '3 = excepția cu l/r; 4 = trei consoane; 5 = două vocale alăturate.'],
               ['Cuvântul', 'Silabele', 'Regula'], [150, 270, 90], gol3(
                   'rotund', 'carte', 'suflet', 'negru', 'castron', 'contract', 'ideal', 'cameră'), row_h=20),
             X(2, 'Despărțirea corectă', [
                 'Încercuiește despărțirea corectă.',
                 'a) cas-tel / ca-stel      b) ma-iou / mai-ou      c) ab-sent / a-bsent      d) ae-ro-port / a-e-ro-port']),
         ],
         [
             X(3, 'Liniuța sau cratima?', [
                 'Semnul „/” arată capătul de rând. Încercuiește cratimele și subliniază liniuțele de despărțire.',
                 '„Mi-a spus că vine mâi- / ne la bibliotecă să-și ia car- / tea de povești.”']),
             L(4, 'Biletul îngust', [
                 'Scrie un bilet de trei rânduri scurte (ca pe o hârtie îngustă) și desparte corect cel puțin trei cuvinte',
                 'la capăt de rând.'], 3),
         ]),

    fisa(18, 'pp. 38-39',
         'Reper (manual, p. 39): Trăsăturile stilului: proprietatea termenilor (cuvântul potrivit, folosit corect), puritatea '
         '(fără cuvinte neliterare, regionale, prea vechi sau prea noi), originalitatea (creativitate, forță de evocare, '
         'personalizare) și adecvarea situațională (stil potrivit temei, cititorului, scopului).',
         [
             T(1, 'Ce trăsătură lipsește?', 'Scrie trăsătura stilului care nu e respectată.',
               ['Enunțul', 'Trăsătura încălcată'], [330, 180], gol(
                   'Eram curioasă, deci am vizionat cartea.', 'Mă-sa i-o zis să vină încoace, bre.',
                   'A fost o zi frumoasă, frumoasă ca o zi frumoasă.', 'Salut, domnule director! Ce faci, mă?'), row_h=22),
             X(2, 'Pagina de jurnal a Ioanei', ['Citește însemnarea (scrisă pentru fișă).', MARTIE]),
             T(3, 'Elementele jurnalului', 'Completează cu elemente din text.',
               ['Elementul', 'Din text'], [150, 360], gol(
                   'data', 'adresarea', 'persoana', 'întâmplările, în ordine', 'sentimentele'), row_h=22),
         ],
         [
             L(4, 'Fără clișee', [
                 'Rescrie fiecare enunț într-un mod original.',
                 'a) Era frumoasă ca o floare.   b) Timpul a zburat.   c) Inima mi-a sărit din piept.'], 4),
         ]),

    fisa(19, 'p. 39',
         'Reper (manual, pp. 38-39): O pagină de jurnal are dată, adesea o adresare, e scrisă la persoana I și prezintă '
         'întâmplări în ordine, cu gândurile și emoțiile celui care scrie. Stilul trebuie să fie corect, curat, original și '
         'potrivit jurnalului.',
         [
             T(1, 'Planul paginii', 'Pregătește pagina de jurnal despre evenimentul ales.',
               ['Partea', 'Ce scriu'], [170, 340], gol(
                   'data', 'adresarea', 'ce s-a întâmplat (trei momente)', 'ce am simțit', 'încheierea'), row_h=28),
             L(2, 'Revizuiește', [
                 'Rescrie însemnarea, cu dată și adresare, fără repetiții și fără clișee:',
                 '„azi a fost o zi super. Am mers la bunica și apoi am mâncat și apoi ne-am jucat și apoi am plecat',
                 'acasă. A fost frumos ca în povești. Mâine iară merg.”'], 5),
         ],
         [
             T(3, 'Grila colegului', 'Colegul îți evaluează pagina: DA sau NU și un exemplu.',
               ['Criteriul', 'DA / NU', 'Exemplu'], [240, 60, 210], gol3(
                   'narațiune la persoana I, despre o experiență', 'cuvinte potrivite, fără exprimări neliterare',
                   'idei și detalii surprinzătoare, emoții', 'formă de jurnal (dată, adresare)'), row_h=40),
             L(4, 'Un gând de la final', 'Scrie ce ai schimba la pagina ta după observațiile colegului.', 2),
         ]),

    fisa(20, 'pp. 40-41',
         'Recapitulare (manual, pp. 10-27): textul narativ, narațiunea la persoana I (autor, narator, personaj), timpul și '
         'spațiul, descrierea, textele continue și discontinue, legenda, contextul de comunicare.',
         [
             X(1, 'Cartea bunicului', ['Citește însemnarea (scrisă pentru fișă).', BUNIC]),
             T(2, 'Narator, personaje, timp, spațiu', 'Completează.',
               ['Elementul', 'Din text'], [160, 350], gol(
                   'naratorul (și persoana)', 'personajele', 'indici de timp', 'indici de spațiu'), row_h=24),
             L(3, 'Întrebări despre text', [
                 'a) De ce e o pagină de jurnal? (două argumente)  b) Transcrie o secvență descriptivă.',
                 'c) Ce înseamnă cartea pentru copil?'], 3),
         ],
         [
             T(4, 'Contextul replicii', 'Replica bunicului: „Pe asta am citit-o de zece ori.”',
               ['Componenta', 'Ce observi'], [170, 340], gol(
                   'cine vorbește și cui', 'relația dintre ei', 'locul', 'intenția bunicului'), row_h=24),
             L(5, 'Dialogul de mâine', 'Scrie dialogul de a doua zi cu bunicul (4-6 replici), cu adresarea potrivită.', 4),
         ]),

    fisa(21, 'pp. 40-41',
         'Recapitulare (manual, pp. 28-39): sinonimele și antonimele, sensurile cuvintelor, omonimele și cuvintele '
         'polisemantice, diftongul, triftongul, hiatul, despărțirea în silabe, trăsăturile stilului.',
         [
             T(1, 'Sinonime și antonime', 'Cuvintele sunt din însemnarea „Cartea bunicului”.',
               ['Cuvântul', 'Sinonim', 'Antonim'], [150, 180, 180], gol3(
                   'prăfuită', 'roase (margini)', 'a urca', 'seara'), row_h=22),
             T(2, 'Omonime sau cuvânt polisemantic?', 'Scrie O (omonime) sau P (sensuri ale aceluiași cuvânt).',
               ['Perechea', 'O / P'], [440, 70], gol(
                   'coardă (de vioară) – coardă (de sărit)', 'sare (în mâncare) – sare (peste gard)',
                   'masă (mobilă) – masă (în fizică)', 'cap (al omului) – cap (al unei familii)'), row_h=20),
             T(3, 'Silabe și sunete', 'Desparte în silabe și scrie D (diftong), T (triftong), H (hiat) sau „–”.',
               ['Cuvântul', 'Silabele', 'D / T / H / –'], [150, 270, 90], gol3(
                   'cutie', 'înăuntru', 'seara', 'vocea', 'mâine', 'aud'), row_h=20),
         ],
         [
             L(4, 'O carte veche din casa voastră', [
                 'Scrie o pagină de jurnal (8-10 rânduri) despre o carte veche din casa voastră. Respectă trăsăturile',
                 'stilului și folosește un cuvânt cu sens figurat.'], 5),
         ]),
]
