# Fișe de exerciții, clasa a VIII-a, Unitatea V „Încotro se îndreaptă lumea?”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 8, pp. 164-201). Textele
# fără autor (enunțuri, dialogurile, argumentările, fragmentele distopice) sunt
# create pentru fișe; Fahrenheit 451 (Ray Bradbury), textul lui Yuval Noah Harari
# și mitul lui Prometeu sunt doar parafrazate/evocate, nu citate din traducere.
# Fără fișă: L22 și L23 (evaluarea și analiza portofoliului).
# Rezolvările: notite-profesor/clasa-8/unitatea-5/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-8-unitatea-5.py

SUB = 'Clasa a VIII-a · Unitatea V, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 8, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-8/unitatea-5/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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
    fisa(1, 'pp. 164-169',
         'Reper (manual, pp. 164-169): Fahrenheit 451 de Ray Bradbury descrie o lume viitoare în care pompierii nu '
         'sting focul, ci ard cărțile, iar Montag, un pompier, începe să pună la îndoială regulile în care a crescut.',
         [
             X(1, 'O lume fără cărți (creată pentru fișă)', [
                 'Citește fragmentul.',
                 'Vecinul de la etajul trei a fost dus într-o dimineață, fără zgomot, pentru că avea în debara trei cărți '
                 'vechi, cu coperte de pânză. Nimeni n-a întrebat ce scria în ele. Copiii din bloc știau doar că literele '
                 'sunt periculoase, ca un foc care nu se stinge, și că e mai sigur să privești ecranele de pe pereți, care '
                 'nu tac niciodată.',
                 'Ana avea totuși, ascunsă sub podea, o carte fără copertă, găsită într-o zi de ploaie. N-o citea des; îi '
                 'ajungea s-o știe acolo, ca pe un secret cald.']),
             T(2, 'Impresii', 'Completează cele patru cadrane.',
               ['Cadranul', 'Ce scriu'], [140, 320], gol(
                   'M-a surprins...', 'M-a neliniștit...', 'Mi-a amintit de...', 'Aș vrea să știu...'), row_h=32),
         ],
         [
             T(3, 'Lumea din fragment', 'Răspunde pe scurt, pe baza fragmentului de la ex. 1.',
               ['Întrebarea', 'Răspunsul meu'], [210, 300], gol(
                   'De ce e dus vecinul?', 'Ce cred copiii despre litere?', 'Ce privesc oamenii în loc de cărți?',
                   'Ce face Ana cu cartea găsită?', 'Ce simbolizează, crezi, ecranele?'), row_h=26),
             L(4, 'Detaliul tulburător', 'Scrie 4-5 rânduri: care detaliu din fragment ți s-a părut cel mai tulburător și de ce.', 1),
         ], titlu='Fahrenheit 451'),

    fisa(2, 'pp. 170-171',
         'Reper (manual, pp. 170-171): Romanul poate fi împărțit în părți, capitole, blancuri. Distopia e o societate '
         'viitoare dezumanizată de un control politic, tehnologic sau religios, opusă utopiei. Literatura SF pornește '
         'de la ipoteze științifice; se deosebește de fantastic (inexplicabilul) și de fantasy (magia).',
         [
             T(1, 'Utopie sau distopie?', 'Scrie U (utopie) sau D (distopie).',
               ['Descrierea (scrisă pentru fișă)', 'U / D'], [420, 90], gol(
                   'Un oraș unde toți hotărăsc împreună, prin vot deschis, ce se construiește.',
                   'Un oraș unde o singură cameră hotărăște ce gândește fiecare locuitor.',
                   'O insulă unde toată lumea are hrană, timp liber și acces la educație.',
                   'O insulă unde cărțile se ard, ca să nu apară idei „periculoase”.')),
             T(2, 'SF, fantastic sau fantasy?', 'Scrie ce tip de literatură e fiecare, cu un argument.',
               ['Scena (pe scurt)', 'Tipul', 'Argumentul'], [230, 90, 140], gol3(
                   'un robot care învață să recunoască fețe', 'o vrăjitoare care preface un băiat în corb',
                   'o oglindă ce duce într-o lume paralelă'), row_h=28),
         ],
         [
             T(3, 'Blancurile', 'Scrie ce rol ar avea un blanc (spațiu alb) în fiecare situație.',
               ['Situația', 'Rolul blancului'], [220, 290], gol(
                   'după o scenă de mare tensiune', 'la trecerea de la un personaj la altul',
                   'la trecerea de la trecut la prezent'), row_h=28),
             L(4, 'Trei trăsături', 'Scrie trei trăsături ale distopiei regăsite în fragmentul de la Lecția 1 (fișa acelei lecții), cu câte o dovadă din text.', 2),
         ], titlu='Textul epic de mare întindere'),

    fisa(3, 'pp. 172-173',
         'Reper (manual, pp. 172-173): Structurile textuale (narativă, descriptivă, dialogată, explicativă, '
         'argumentativă) se pot îmbina prin succesiune (A→B), alternanță (A→B→A→B) sau inserție (A[B]A).',
         [
             X(1, 'Ziua alarmei (creat pentru fișă)', [
                 'Citește textul.',
                 'Alarma a sunat la ora nouă. Montag a lăsat furtunul jos și a privit cerul, gri ca hârtia arsă.',
                 '— Iar o casă cu cărți, a zis colegul lui, cu vocea plată.',
                 'Casele astea sunt construite din lemn vechi, ignifugat superficial, ca să ardă repede și „curat”, fără '
                 'fum negru care să sperie vecinii. De aceea, incendiile durează mereu exact șapte minute.',
                 'Montag a intrat primul. Pe masă, o carte deschisă aștepta, ca și cum cineva ar fi plecat doar un minut.']),
             T(2, 'Structurile textuale', 'Scrie structura textuală a fiecărei secvențe.',
               ['Secvența', 'Structura'], [340, 170], gol(
                   '„Alarma a sunat la ora nouă...”', '„— Iar o casă cu cărți...”', '„Casele astea sunt construite...”',
                   '„Montag a intrat primul...”')),
         ],
         [
             T(3, 'Cum se îmbină', 'Scrie succesiune, alternanță sau inserție, cu explicația.',
               ['Secvențele îmbinate', 'Modul', 'De ce'], [230, 110, 130], gol3(
                   'narativă, dialogată, explicativă, narativă', 'narativă, dialogată, narativă, dialogată',
                   'narativă, descriptivă, narativă'), row_h=30),
             L(4, 'Un pasaj cu inserție', 'Scrie 4-5 rânduri în care o secvență descriptivă e inserată într-una narativă. Marchează unde începe și unde se termină descrierea.', 2),
         ], titlu='Structuri textuale'),

    fisa(4, 'pp. 174-175',
         'Reper (manual, pp. 174-175): Personajele se clasifică după importanță (principal/secundar), rol în conflict '
         '(protagonist/antagonist), număr (individual/colectiv), evoluție. Conflictul poate fi exterior (cu altă '
         'persoană, cu societatea, cu natura, cu tehnologia, cu soarta) sau interior (cu sine).',
         [
             T(1, 'Tipuri de personaje', 'Scrie tipul personajului, după criteriul cerut.',
               ['Personajul (pe scurt)', 'Criteriul', 'Tipul'], [220, 130, 100], [
                   ['Montag, pompierul care se îndoiește', 'importanța', ''],
                   ['căpitanul care apără regulile', 'rolul în conflict', ''],
                   ['mulțimea care privește ecranele', 'numărul', ''],
                   ['Ana, cu o carte ascunsă', 'evoluția', '']], row_h=26),
             T(2, 'Conflictul', 'Scrie tipul de conflict (exterior — cu cine/ce, sau interior) pentru fiecare situație.',
               ['Situația', 'Tipul de conflict'], [340, 170], gol(
                   'Montag ascunde o carte, contrar regulii orașului.',
                   'Regulile în care a crescut nu mai au sens pentru Montag.',
                   'Un incendiu scapă de sub control în cartier.',
                   'Un robot de supraveghere îl urmărește pe Montag.'), row_h=28),
         ],
         [
             T(3, 'Blazonul personajului', 'Completează blazonul lui Montag, pe baza fragmentului citit.',
               ['Elementul', 'Completarea mea'], [190, 320], gol(
                   'un eveniment important', 'calitatea principală', 'defectul principal',
                   'un personaj asemănător, din altă carte', 'o vietate care i se potrivește'), row_h=26),
             L(4, 'Un personaj în conflict', 'Inventează un personaj aflat în conflict cu tehnologia. Scrie 4-5 rânduri: cine e și cum se manifestă conflictul.', 2),
         ], titlu='Personajele. Conflictul'),

    fisa(5, 'pp. 176-177',
         'Reper (manual, pp. 176-177): Simbolurile din roman (focul, cartea) pot avea sensuri duble: distrugere și '
         'renaștere. Titlurile părților unui roman anticipă adesea etapele parcursului personajului.',
         [
             T(1, 'Simboluri duble', 'Scrie ambele sensuri posibile ale fiecărui simbol.',
               ['Simbolul', 'Sensul negativ', 'Sensul pozitiv'], [110, 195, 205], gol3(
                   'focul', 'cartea arsă', 'pasărea Phoenix', 'ecranul mereu aprins'), row_h=28),
             T(2, 'Titluri de părți', 'Propune un titlu pentru fiecare etapă a unei povești despre Montag.',
               ['Etapa', 'Titlul meu'], [280, 190], gol(
                   'Montag arde cărți fără să se întrebe nimic', 'Montag începe să se îndoiască',
                   'Montag alege o cale nouă'), row_h=28),
         ],
         [
             T(3, 'Un simbol al meu', 'Alege un obiect din viața de zi cu zi și explică ce ar putea simboliza într-o distopie.',
               ['Obiectul', 'Ce ar putea simboliza'], [150, 360], gol(
                   'un ceas fără ace', 'o fereastră fără geam', 'un caiet gol')),
             L(4, 'Renaștere din cenușă', 'Scrie 5-6 rânduri despre o situație (reală sau imaginată) în care ceva distrus a devenit, până la urmă, un nou început.', 1),
         ], titlu='Semnificațiile textului'),

    fisa(6, 'pp. 178-180',
         'Reper (manual, pp. 178-180): Textul de opinie susține o idee cu argumente raționale sau emoționale, prin '
         'strategii: obiecția (respinge o idee opusă), concesia (o acceptă parțial), analogia, examenul critic, '
         'confruntarea (pro versus contra).',
         [
             X(1, 'Meseriile de mâine (creat pentru fișă)', [
                 'Citește textul.',
                 'Mulți cred că roboții ne vor lua locurile de muncă. E adevărat că unele meserii repetitive vor dispărea. '
                 'Totuși, cred că ne vom adapta, așa cum am făcut-o și în trecut.',
                 'La fel ca strungarii care au devenit operatori de mașini automate, mulți dintre noi vom învăța meserii '
                 'noi, pe măsură ce apar. E limpede că schimbarea sperie, dar istoria arată că omenirea găsește mereu ceva '
                 'nou de făcut.',
                 'Așadar, cred că viitorul muncii nu e sumbru, ci doar diferit.']),
             T(2, 'Strategiile din text', 'Scrie unde apare fiecare strategie și cu ce cuvinte.',
               ['Strategia', 'Unde apare', 'Cuvintele'], [130, 190, 190], gol3(
                   'concesia', 'analogia', 'confirmarea/certitudinea'), row_h=30),
         ],
         [
             T(3, 'Conectorii', 'Scrie rolul fiecărui conector din text.',
               ['Conectorul', 'Rolul'], [150, 360], gol(
                   '„Totuși”', '„La fel ca”', '„E limpede că”', '„Așadar”')),
             T(4, 'Argumente raționale sau emoționale?', 'Scrie R sau E.',
               ['Argumentul', 'R / E'], [420, 90], gol(
                   'Statisticile arată că multe meserii se automatizează.',
                   'Mi-e teamă că nu voi mai găsi de lucru.',
                   'Strungarii de acum 50 de ani au învățat meserii noi.',
                   'Simt că schimbarea poate fi și o șansă.')),
             L(5, 'Opinia mea, cu o strategie', 'Scrie un scurt paragraf (4-5 rânduri) despre un subiect ales de tine, folosind strategia obiecției (formulezi o idee opusă, apoi o respingi).', 2),
         ], titlu='Textul de opinie'),

    fisa(7, 'pp. 181-182',
         'Reper (manual, pp. 181-182): O lecție memorabilă schimbă felul în care privești un lucru cunoscut; relația '
         'dintre profesor și elevi, întrebările neașteptate și exemplele din viața reală o pot transforma.',
         [
             X(1, 'Lecția cu umbre (creată pentru fișă)', [
                 'Citește textul.',
                 'În loc să deseneze triunghiuri pe tablă, doamna profesoară ne-a scos în curte, la prânz, când umbrele '
                 'erau cele mai scurte.',
                 '— Măsurați umbra băncii și umbra voastră, a spus ea. Apoi măsurați înălțimea băncii.',
                 'Am făcut calculul și, spre mirarea mea, am aflat cât sunt de înalt fără riglă, doar din proporția '
                 'umbrelor. Din ziua aceea, geometria n-a mai fost pentru mine un desen pe tablă, ci un fel de a vedea '
                 'lumea.']),
             T(2, 'Ce a schimbat lecția', 'Răspunde pe scurt.',
               ['Întrebarea', 'Răspunsul meu'], [220, 290], gol(
                   'Ce metodă neobișnuită a folosit profesoara?', 'Ce a descoperit elevul?',
                   'De ce a rămas lecția în amintirea lui?')),
         ],
         [
             T(3, 'Lecția mea memorabilă', 'Completează despre o lecție (reală sau imaginată) care ți-a rămas în minte.',
               ['Întrebarea', 'Răspunsul meu'], [220, 290], gol(
                   'Ce materie era?', 'Ce s-a întâmplat neobișnuit?', 'Ce ai înțeles altfel după aceea?')),
             L(4, 'Punctul meu de vedere', 'Scrie 5-6 rânduri: ce anume face o lecție memorabilă? Susține punctul de vedere cu un exemplu.', 1),
         ], titlu='Prima lecție de geometrie'),

    fisa(8, 'pp. 184-185',
         'Reper (manual, pp. 184-185): Mitul lui Prometeu: titanul fură focul de la zei și îl dă oamenilor, sfidând '
         'autoritatea lui Zeus, și e pedepsit pentru asta. Modelul eroului care înfruntă o putere nedreaptă pentru '
         'binele altora apare în multe culturi.',
         [
             T(1, 'Mitul lui Prometeu', 'Răspunde pe scurt, pe baza a ce știi despre mit.',
               ['Întrebarea', 'Răspunsul meu'], [230, 280], gol(
                   'Ce fură Prometeu și pentru cine?', 'De ce e focul un simbol al cunoașterii?',
                   'Cum e pedepsit Prometeu?', 'De ce sfidează el autoritatea lui Zeus?'), row_h=26),
             T(2, 'Modelul eroului', 'Scrie ce riscă și ce câștigă (pentru alții) fiecare personaj.',
               ['Personajul', 'Ce riscă', 'Ce câștigă alții'], [140, 180, 170], gol3(
                   'Prometeu (mit)', 'Montag (Fahrenheit 451)', 'comisul Ioniță'), row_h=28),
         ],
         [
             T(3, 'Asemănări', 'Scrie două asemănări între Prometeu și un personaj din unitate.',
               ['Elementul comparat', 'Prometeu', 'Celălalt personaj'], [140, 185, 165], [
                   ['ce înfruntă', '', ''], ['ce prețuiește mai mult', '', '']], row_h=30),
             L(4, 'Un Prometeu de azi', 'Scrie 5-6 rânduri despre o persoană (reală sau imaginată) care a riscat ceva pentru binele altora, ca un Prometeu modern.', 1),
         ], titlu='Modele comportamentale. Prometeu'),

    fisa(9, 'pp. 186-187',
         'Reper (manual, p. 186): O argumentare convingătoare se sprijină pe logos (corectitudinea logică), patos '
         '(implicarea emoțională) și etos (credibilitatea vorbitorului). Un argument e puternic dacă premisele sunt '
         'adevărate și legătura cu concluzia e corectă.',
         [
             T(1, 'Logos, patos sau etos?', 'Scrie ce apel folosește fiecare argument.',
               ['Argumentul', 'Logos / Patos / Etos'], [400, 110], gol(
                   'Studiile arată că cititul zilnic îmbunătățește vocabularul.',
                   'Gândește-te cât de tristă ar fi o lume fără povești!',
                   'Sunt profesoară de 20 de ani și am văzut cum cititul schimbă copiii.',
                   'Trei din patru eleve din clasa noastră citesc cel puțin o carte pe lună.')),
             T(2, 'Raționamente corecte sau greșite', 'Scrie C (corect) sau G (greșit) și, dacă e greșit, ce lipsește.',
               ['Raționamentul', 'C / G', 'Ce lipsește (dacă e G)'], [260, 60, 170], gol3(
                   'Toți colegii mei au telefon, deci și eu ar trebui.',
                   'Un studiu leagă lectura de vocabularul bogat.',
                   'A plouat ieri, deci va ploua și mâine.'), row_h=28),
         ],
         [
             T(3, 'Premisă și concluzie', 'Scrie dacă premisa e adevărată și dacă legătura cu concluzia e corectă.',
               ['Argumentul', 'Premisa adevărată?', 'Legătura corectă?'], [280, 120, 120], gol3(
                   'A citit o carte despre spațiu, deci vrea să fie astronaut.',
                   'A luat nota 10 la trei teste, deci învață mult.',
                   'E ziua lui, deci sigur va ploua.'), row_h=28),
             L(4, 'Găsește eroarea', 'Scrie un raționament greșit (inventat de tine) și explică, dedesubt, unde greșește.', 2),
         ], titlu='Argumentare și persuasiune (1/2)'),

    fisa(10, 'pp. 186-187',
         'Reper (manual, p. 187): O discuție argumentată alege 2-3 aspecte concrete, caută cele mai bune strategii de '
         'persuasiune (fapte, exemple, valori, emoții) și e evaluată după claritate, logică, exemple, valori morale, '
         'stil.',
         [
             T(1, 'Tipuri de argumente', 'Scrie pe ce se sprijină fiecare argument: dovezi, emoții sau valori.',
               ['Argumentul', 'Se sprijină pe'], [400, 110], gol(
                   'Datele arată că elevii care fac sport se concentrează mai bine.',
                   'Mi-amintesc cât de bine m-am simțit la ultimul meci câștigat.',
                   'E corect ca toți colegii să aibă șansa să joace, nu doar cei mai buni.',
                   'Trei antrenori confirmă că echipa s-a îmbunătățit anul acesta.')),
             T(2, 'Planul discuției', 'Tema: „Școala viitorului”. Completează planul unei discuții argumentate.',
               ['Pasul', 'Ce fac'], [180, 330], gol(
                   '1. notez ideile', '2. aleg 2-3 aspecte', '3. caut strategii', '4. prezint și evaluez'), row_h=28),
         ],
         [
             T(3, 'Grila de evaluare', 'Verifică propriul argument de la ex. 2 după grilă. Scrie DA sau NU.',
               ['Criteriul', 'DA / NU'], [420, 90], gol(
                   'Ideea e clară.', 'Argumentele sunt logice.', 'Am exemple relevante.', 'Am și valori morale.',
                   'Am și emoții/experiențe.', 'Stilul e atractiv.')),
             L(4, 'Discuția mea', 'Scrie 5-6 rânduri, argumentând o poziție despre „Școala viitorului”, cu cel puțin o dovadă și o valoare morală.', 2),
         ], titlu='Argumentare și persuasiune (2/2)'),

    fisa(11, 'p. 188',
         'Reper (manual, p. 188): Circumstanțialul de cauză arată cauza, obligatoriu anterioară acțiunii (din ce '
         'cauză? din ce motiv?). „Din cauza”/„din pricina” arată un efect nefavorabil; „datorită”, unul pozitiv.',
         [
             T(1, 'Circumstanțialul de cauză', 'Scrie circumstanțialul de cauză și partea de vorbire prin care se exprimă.',
               ['Enunțul (scris pentru fișă)', 'Circumstanțialul', 'Partea de vorbire'], [220, 140, 150], gol3(
                   'A întârziat din cauza traficului.', 'Tremura de frig.', 'A reușit datorită muncii.',
                   'Plânge de bucurie.', 'Nu a venit din pricina ei.', 'Lăudându-l prea mult, s-a obrăznicit.',
                   'E amendat pentru a nu fi plătit taxa.'), row_h=20),
             T(2, 'Din cauza sau datorită?', 'Alege forma corectă.',
               ['Enunțul', 'Forma corectă'], [380, 130], gol(
                   'A câștigat concursul (din cauza / datorită) talentului.', 'S-a îmbolnăvit (din cauza / datorită) frigului.',
                   'A luat nota 10 (din cauza / datorită) efortului.', 'Am întârziat (din cauza / datorită) ploii.')),
         ],
         [
             T(3, 'Analiza după model', 'Analizează circumstanțialul de cauză, după modelul dat.',
               ['Enunțul', 'Analiza'], [200, 310], gol(
                   'A plâns de fericire.', 'Nu a mâncat de nervi.', 'A întârziat din cauza aglomerației.'), row_h=28),
             L(4, 'Un motiv pentru fiecare', 'Scrie patru enunțuri cu circumstanțiale de cauză exprimate prin patru părți de vorbire diferite.', 2),
         ], titlu='Circumstanțialul de cauză'),

    fisa(12, 'pp. 189-190',
         'Reper (manual, pp. 189-190): Circumstanțiala de cauză e introdusă prin conjuncții (fiindcă, deoarece, '
         'întrucât, că, cum, când, unde cu sens cauzal) și locuțiuni (pentru că, din cauză că, de vreme ce, odată ce). '
         'Corelative în regentă: de aceea, atunci.',
         [
             T(1, 'Circumstanțiala de cauză', 'Scrie subordonata și elementul de relație.',
               ['Fraza (scrisă pentru fișă)', 'Subordonata', 'Elementul'], [200, 180, 130], gol3(
                   'Nu a venit, fiindcă era bolnav.', 'Cum n-a venit la timp, m-am îngrijorat.',
                   'Vine des la noi, pentru că se simte bine.', 'Nu-i tace gura, de câte are de povestit.',
                   'S-a bucurat, deoarece a luat premiul.', 'Odată ce a plecat, casa a tăcut.'), row_h=24),
             T(2, 'Corelativul și virgula', 'Rescrie cu punctuația corectă și subliniază corelativul, dacă există.',
               ['Fraza', 'Varianta corectă'], [255, 255], gol(
                   'De aceea a plecat, fiindcă avea mult de mers.', 'Cum ploua tare am rămas acasă.',
                   'Nu doarme bine căci se gândește la examen.'), row_h=28),
         ],
         [
             T(3, 'Expansiune', 'Transformă circumstanțialul de cauză într-o circumstanțială de cauză.',
               ['Propoziția', 'Fraza cu circumstanțială de cauză'], [200, 310], gol(
                   'A plecat de frică.', 'S-a bucurat din cauza veștii bune.', 'A întârziat din cauza ploii.'), row_h=28),
             L(4, 'Frazele mele', 'Scrie trei fraze cu circumstanțiale de cauză, cu elementele de relație: fiindcă, întrucât, din moment ce.', 2),
         ], titlu='Circumstanțiala de cauză'),

    fisa(13, 'p. 191',
         'Reper (manual, p. 191): Circumstanțialul de scop arată scopul urmărit de acțiune (cu ce scop? în ce scop?). '
         'Spre deosebire de cauză, care e înainte de acțiune, scopul îi urmează.',
         [
             T(1, 'Circumstanțialul de scop', 'Scrie circumstanțialul de scop și partea de vorbire prin care se exprimă.',
               ['Enunțul (scris pentru fișă)', 'Circumstanțialul', 'Partea de vorbire'], [220, 140, 150], gol3(
                   'A venit pentru cărți.', 'Hai la plimbare!', 'S-a pregătit spre a reuși.', 'A muncit pentru bani.',
                   'A plecat devreme, spre a nu întârzia.', 'Terenul e pregătit pentru semănat.'), row_h=20),
             T(2, 'Cauză sau scop?', 'Scrie C (cauză) sau S (scop).',
               ['Enunțul', 'C / S'], [420, 90], gol(
                   'A plecat de frică.', 'A plecat pentru cumpărături.', 'A tăcut de rușine.', 'A tăcut ca să nu supere.',
                   'A alergat din cauza câinelui.', 'A alergat spre casă.')),
         ],
         [
             T(3, 'Completează', 'Completează cu un circumstanțial de scop exprimat prin partea de vorbire cerută.',
               ['Enunțul', 'Partea de vorbire', 'Circumstanțialul'], [200, 160, 150], [
                   ['A venit ... .', 'substantiv cu prepoziție', ''], ['S-a antrenat ... .', 'infinitiv', ''],
                   ['A economisit ... .', 'locuțiune adverbială', '']]),
             L(4, 'Scopurile mele', 'Scrie 4-5 rânduri despre un scop pe care îl urmărești, cu trei circumstanțiale de scop. Subliniază-le.', 2),
         ], titlu='Circumstanțialul de scop'),

    fisa(14, 'pp. 192-193',
         'Reper (manual, pp. 192-193): Circumstanțiala de scop e introdusă prin să, ca să, de, pentru ca ... să. '
         'Cu să, de, stă după regentă, fără virgulă; cu ca să, poate sta și înainte.',
         [
             T(1, 'Circumstanțiala de scop', 'Scrie subordonata și elementul de relație.',
               ['Fraza (scrisă pentru fișă)', 'Subordonata', 'Elementul de relație'], [200, 180, 130], gol3(
                   'A venit să ne ajute.', 'S-a dus la munte ca să se relaxeze.', 'Muncise mult pentru ce avea de realizat.',
                   'Hai de vezi!', 'A plecat devreme, ca să prindă trenul.'), row_h=24),
             T(2, 'Completivă sau circumstanțială?', 'Scrie CD (completivă directă) sau CS (circumstanțială de scop).',
               ['Fraza', 'CD / CS'], [420, 90], gol(
                   'Vreau să câștig.', 'A venit să câștige.', 'Sper să reușesc.', 'S-a antrenat să reușească.')),
         ],
         [
             T(3, 'Punctuația', 'Rescrie cu punctuația corectă.',
               ['Fraza', 'Varianta corectă'], [255, 255], gol(
                   'De aceea stă la umbră ca să nu se bronzeze.', 'Ca să reușești trebuie să exersezi.',
                   'A plecat, să nu întârzie.'), row_h=28),
             L(4, 'Frazele mele', 'Scrie trei fraze cu circumstanțiale de scop, introduse prin să, ca să și pentru ca ... să.', 2),
         ], titlu='Circumstanțiala de scop'),

    fisa(15, 'pp. 194-195',
         'Reper (manual, pp. 194-195): Construcțiile concesive arată o împrejurare care ar putea împiedica acțiunea, '
         'dar n-o împiedică (în ciuda cărui fapt?). Se despart întotdeauna prin virgulă. Elemente: deși, cu toate că, '
         'chiar dacă, măcar că, oricât, oricine.',
         [
             T(1, 'Construcția concesivă', 'Scrie construcția concesivă și felul ei (circumstanțial sau circumstanțială).',
               ['Enunțul (scris pentru fișă)', 'Construcția', 'Felul'], [220, 140, 150], gol3(
                   'A ieșit, deși ploua.', 'În ciuda oboselii, a terminat treaba.', 'Chiar și obosit, a mai alergat.',
                   'Oricâte greutăți ar avea, nu renunță.', 'Cu toate acestea, a zâmbit.'), row_h=22),
             T(2, 'Completează', 'Completează cu o construcție concesivă potrivită.',
               ['Enunțul', 'Construcția mea'], [280, 230], gol(
                   '..., a ajuns la timp.', 'A terminat cartea, ... .', '..., echipa a câștigat.')),
         ],
         [
             T(3, 'Virgula', 'Rescrie cu punctuația corectă.',
               ['Enunțul', 'Varianta corectă'], [255, 255], gol(
                   'Deși era târziu a mai citit un capitol.', 'A câștigat cu toate că nu s-a antrenat mult.',
                   'Oricât ar fi de greu nu renunț.'), row_h=28),
             L(4, 'Un obstacol depășit', 'Scrie 4-5 rânduri despre o situație (reală sau imaginată) în care ai reușit ceva „în ciuda” unui obstacol. Folosește trei construcții concesive.', 2),
         ], titlu='Construcții concesive'),

    fisa(16, 'pp. 196-197',
         'Reper (manual, pp. 196-197): Construcțiile condiționale arată o ipoteză de care depinde acțiunea (cu ce '
         'condiție?). Elemente: dacă, de, să, în caz că; regentul poate fi verb, adjectiv sau interjecție predicativă.',
         [
             T(1, 'Construcția condițională', 'Scrie construcția condițională și felul ei.',
               ['Enunțul (scris pentru fișă)', 'Construcția', 'Felul'], [220, 140, 150], gol3(
                   'Dacă plouă, rămânem acasă.', 'În caz de întârziere, sunați-mă.', 'Ascultând cu atenție, vei înțelege.',
                   'Antrenează-te, altfel nu poți câștiga!', 'În locul lor, aș fi vorbit.'), row_h=22),
             T(2, 'Concesivă sau condițională?', 'Scrie CC (concesivă) sau CD (condițională).',
               ['Enunțul', 'CC / CD'], [420, 90], gol(
                   'Dacă vii, te aștept.', 'Deși vii, plec oricum.', 'Chiar dacă plouă, ieșim.', 'Dacă plouă, nu ieșim.')),
         ],
         [
             T(3, 'Completează', 'Continuă enunțurile cu o construcție condițională.',
               ['Enunțul', 'Continuarea mea'], [280, 230], gol(
                   'Vom câștiga concursul, ... .', '..., aș schimba multe.', 'Te ajut, ... .')),
             L(4, 'Trei ipoteze', 'Scrie trei fraze condiționale pe tema unității (viitorul lumii), cu elementele: dacă, de, în caz că.', 2),
         ], titlu='Construcții condiționale'),

    fisa(17, 'pp. 198-199',
         'Reper (manual, pp. 198-199): Atitudinea subiectivă se exprimă prin verbe, adverbe, locuțiuni: certitudine '
         '(știu că, firește), incertitudine (bănuiesc că), probabilitate (s-ar putea să, probabil), necesitate '
         '(trebuie să), apreciere (merită să / din păcate).',
         [
             T(1, 'Ce exprimă?', 'Scrie valoarea exprimată: certitudine, incertitudine, probabilitate, necesitate sau apreciere.',
               ['Enunțul', 'Valoarea'], [420, 90], gol(
                   'Știu sigur că va veni.', 'Bănuiesc că a uitat.', 'S-ar putea să întârzie.',
                   'Trebuie să terminăm azi.', 'Din păcate, nu am reușit.', 'Merită să încerci.')),
             T(2, 'Grade diferite de certitudine', 'Rescrie enunțul cu gradul de certitudine cerut.',
               ['Enunțul de bază', 'Gradul cerut', 'Rescrierea mea'], [200, 130, 160], [
                   ['Va ploua.', 'certitudine', ''], ['Va ploua.', 'probabilitate', ''],
                   ['Va ploua.', 'incertitudine', '']]),
         ],
         [
             T(3, 'Sigur sau prudent?', 'Scrie S (atitudine sigură) sau P (atitudine prudentă).',
               ['Enunțul', 'S / P'], [420, 90], gol(
                   'E limpede că avem nevoie de schimbare.', 'S-ar părea că lucrurile se schimbă.',
                   'Bineînțeles că vom reuși.', 'Mă îndoiesc că va fi ușor.')),
             L(4, 'Opinia mea, cu nuanțe', 'Scrie 4-5 rânduri despre viitor, folosind cel puțin două mijloace de certitudine și două de probabilitate. Subliniază-le.', 2),
         ], titlu='Exprimarea preferințelor și a opiniilor'),

    fisa(18, 'pp. 198-199',
         'Reper (manual, p. 199): Textul de opinie are introducere (opinia), cuprins (două argumente diferite, cu '
         'exemple) și încheiere (concluzia care reafirmă poziția). Se verifică mijloacele de exprimare a opiniei și '
         'conectorii.',
         [
             X(1, 'Un text de opinie (creat pentru fișă)', [
                 'Citește textul.',
                 'Cred că, în viitor, oamenii și mașinile vor lucra tot mai mult împreună, nu unii împotriva celorlalți.',
                 'În primul rând, mașinile fac bine ceea ce e repetitiv, iar oamenii rămân buni la ce ține de creativitate '
                 'și empatie. De exemplu, un program poate verifica ortografia unui text, dar nu poate simți ce vrea să '
                 'spună autorul.',
                 'În al doilea rând, istoria arată că fiecare tehnologie nouă a creat, până la urmă, meserii noi. S-ar '
                 'putea ca și de data asta să fie la fel.',
                 'Așadar, cred că viitorul nu e o luptă, ci o colaborare.']),
             T(2, 'Planul textului', 'Completează planul pe baza textului de la ex. 1.',
               ['Partea', 'Ce conține'], [150, 360], gol(
                   'introducerea', 'argumentul 1 și exemplul', 'argumentul 2', 'încheierea'), row_h=30),
         ],
         [
             T(3, 'Mijloacele de exprimare a opiniei', 'Scrie din text un exemplu pentru fiecare.',
               ['Mijlocul', 'Exemplul din text'], [180, 330], gol(
                   'certitudine', 'probabilitate', 'un conector de ierarhizare', 'un conector de concluzie')),
             L(4, 'Textul meu de opinie', 'Scrie un text de opinie (6-8 rânduri) cu titlul „Încotro se îndreaptă lumea?”, cu introducere, un argument cu exemplu și o încheiere.', 3),
         ], titlu='Textul de opinie pentru revista școlii'),

    fisa(19, 'pp. 200-201',
         'Reper (manual, pp. 170-175, 200-201): Recapitulăm lectura din Unitatea V: romanul și speciile lui, distopia, '
         'structurile textuale și îmbinarea lor, personajele și conflictul.',
         [
             X(1, 'Orașul tăcut (creat pentru fișă)', [
                 'Citește textul.',
                 'În Orașul Tăcut, fiecare copil primea la naștere un cip care îi spunea ce meserie va avea. Nimeni nu '
                 'punea întrebări, pentru că întrebările nu mai erau învățate la școală.',
                 '— De ce nu putem alege? a întrebat-o Mira pe bunica ei, într-o seară.',
                 'Bunica a tăcut mult, apoi a scos dintr-un sertar o carte veche, interzisă. „Pentru că, demult, oamenii '
                 'au ales să nu mai aleagă”, a spus ea încet. „Le era mai ușor așa.”',
                 'Mira a strâns cartea la piept, ca pe un secret cald, și, pentru prima dată, s-a întrebat ce ar vrea ea '
                 'însăși să devină.']),
             T(2, 'Utopie, distopie, structuri', 'Completează pe baza textului.',
               ['Întrebarea', 'Răspunsul meu'], [250, 260], gol(
                   'E o lume utopică sau distopică? De ce?', 'Ce structură are al doilea paragraf?',
                   'Ce structură are „— De ce nu putem alege?”'), row_h=30),
         ],
         [
             T(3, 'Personajele și conflictul', 'Completează pe baza textului.',
               ['Personajul', 'Tipul', 'Conflictul'], [140, 140, 170], gol3('Mira', 'bunica'), row_h=30),
             T(4, 'Adevărat sau fals', 'Scrie A sau F.', AF, [420, 90], gol(
                 'Fiecare copil își alege singur meseria.', 'Bunica păstrează o carte interzisă.',
                 'Mira nu se întreabă nimic până la final.', 'Cartea e un simbol al alegerii libere.')),
         ], titlu='Recapitulare, lectură'),

    fisa(20, 'pp. 188-197, 200-201',
         'Reper (manual, pp. 188-197): Recapitulăm circumstanțialele de cauză și de scop și construcțiile concesive '
         'și condiționale, cu elementele de relație și punctuația fiecăreia.',
         [
             X(1, 'Patru fraze', [
                 'Citește frazele (scrise pentru fișă).',
                 '(1) A întârziat, fiindcă a pierdut autobuzul.   (2) A alergat ca să prindă trenul.',
                 '(3) Deși era obosit, a mai citit un capitol.   (4) Dacă exersezi zilnic, vei reuși.']),
             T(2, 'Felul și elementul de relație', 'Scrie felul subordonatei și elementul de relație.',
               ['Fraza', 'Felul', 'Elementul de relație'], [50, 230, 160], gol3('(1)', '(2)', '(3)', '(4)'), row_h=26),
         ],
         [
             T(3, 'Cauză, scop, concesie sau condiție?', 'Scrie felul construcției subliniate.',
               ['Enunțul', 'Felul'], [420, 90], gol(
                   'A plecat de frică.', 'A plecat pentru liniște.', 'A plecat, deși era frică.', 'Dacă îi e frică, pleacă.',
                   'Datorită curajului, a rămas.', 'Din cauza fricii, a plecat.')),
             T(4, 'Virgula', 'Scrie DA sau NU: se pune virgulă?',
               ['Construcția', 'Virgulă?'], [350, 160], gol(
                   'o construcție concesivă, oriunde ar sta', 'o circumstanțială de scop introdusă prin „să”, după regentă',
                   'o circumstanțială de cauză cu corelativ „de aceea” în regentă')),
         ], titlu='Recapitulare, limbă română'),

    fisa(21, 'pp. 178-180, 186-187, 198-199',
         'Reper (manual, pp. 178-180, 186-187, 198-199): Recapitulăm strategiile textului de opinie (obiecția, '
         'concesia, analogia), logos-patos-etos și mijloacele de exprimare a opiniei.',
         [
             X(1, 'Trei enunțuri', [
                 'Citește enunțurile (scrise pentru fișă).',
                 '(a) Unii spun că citim mai puțin ca acum 20 de ani. E adevărat, dar citim altfel, pe alte ecrane.',
                 '(b) S-ar putea crede că sportul consumă timp de învățat. Nu e deloc așa.',
                 '(c) La fel ca un antrenament fizic, exercițiul de scriere zilnică întărește mintea.']),
             T(2, 'Strategia potrivită', 'Scrie ce strategie (obiecție, concesie sau analogie) folosește fiecare enunț.',
               ['Enunțul', 'Strategia'], [420, 90], gol('(a)', '(b)', '(c)')),
             T(3, 'Logos, patos sau etos?', 'Scrie tipul de apel.',
               ['Argumentul', 'Logos / Patos / Etos'], [400, 110], gol(
                   'Un studiu pe 1000 de elevi arată o legătură clară.', 'Gândește-te cum te-ai simți tu în locul lor!',
                   'Ca profesor cu 15 ani de experiență, pot spune că funcționează.')),
         ],
         [
             T(4, 'Mijloace de exprimare a opiniei', 'Scrie un enunț propriu pentru fiecare valoare cerută.',
               ['Valoarea', 'Enunțul meu'], [150, 360], gol(
                   'certitudine', 'probabilitate', 'necesitate', 'apreciere pozitivă'), row_h=28),
             L(5, 'Planul unui text de opinie', 'Alege o teză despre viitorul lumii și scrie planul: opinia, două argumente cu exemple, concluzia.', 3),
         ], titlu='Recapitulare, argumentarea și opinia'),
]
