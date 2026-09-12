# Fișe de exerciții, clasa a VII-a, Unitatea II „Aproape de ceilalți”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 7, pp. 48-85). Textele
# fără autor sunt create pentru fișe; citatele scurte sunt doar din autori în
# domeniul public (Ioan Slavici); Ioana Pârvulescu și Vladimir Colin sunt doar
# parafrazați. Lecțiile 1 și 8 (proiectul) și 25 (evaluarea) nu au fișă.
# Rezolvările: notite-profesor/clasa-7/unitatea-2/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-7-unitatea-2.py

SUB = 'Clasa a VII-a · Unitatea II, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 7, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini, titlu=None):
    f = {'cale': f'clasa-7/unitatea-2/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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
    fisa(2, 'pp. 48-52',
         'Reper: În nuvela „Popa Tanda” de Ioan Slavici, părintele Trandafir, mutat în satul sărac Sărăceni, încearcă '
         'să-i schimbe pe săteni prin predici, sfaturi, batjocuri și ocări, fără succes. Abia când se apucă el însuși de '
         'muncă, satul îl urmează și se transformă.',
         [
             T(1, 'În ce ordine?', 'Numerotează încercările părintelui în ordinea din text (1-7).',
               ['Întâmplarea', 'Nr.'], [440, 70], gol(
                   'Părintele umblă prin sat și dă sfaturi.', 'Sătenii merg la episcopie să-l scoată din sat.',
                   'Ține o predică despre fiul risipitor.', 'Își repară casa și face grădină.',
                   'Își bate joc de săteni.', 'Ară locul din dosul casei cu Marcu și Mitru.',
                   'Îi ocărăște pe oameni.')),
             T(2, 'Cine spune?', 'Scrie personajul care rostește replica.',
               ['Replica', 'Personajul'], [360, 150], gol(
                   '„Dacă nu veniți voi la mine, mă duc eu la voi!”', '„Popa e omul dracului!”',
                   '„Mie-mi place păpușoiul verde!”', '„...nu lăsa pe moș-tătuca cu capul gol”',
                   '„Ține-l, Doamne, la mulți ani...”', '„Bătrânule! na-ți căciula...”')),
         ],
         [
             T(3, 'Cuvinte din text', 'Scrie sensul cuvântului (ajută-te de subsol și de dexonline).',
               ['Cuvântul', 'Sensul'], [180, 330], gol(
                   'muruială', 'curechi', 'păpușoi', 'poporean', 'laiță', 'năstașnic')),
             L(4, 'Scrisoare către episcop', 'Scrie, ca părintele Trandafir, o scrisoare de 5-6 rânduri către episcopul care l-a apărat, după ce satul s-a schimbat.', 3),
         ]),

    fisa(3, 'pp. 53-54',
         'Reper (manual, pp. 53-54): Textul epic are în centru acțiunea; poate avea un episod sau mai multe. '
         'Descrierea fixează cadrul, prezintă personaje și creează atmosfera (o pauză în acțiune); dialogul arată '
         'relațiile, gândurile și atitudinile personajelor.',
         [
             T(1, 'Narațiune, descriere sau dialog?', 'Scrie N (narațiune), D (descriere) sau DI (dialog).',
               ['Secvența', 'N / D / DI'], [420, 90], gol(
                   '„Pe Valea-Seacă este un sat pe care oamenii îl numesc Sărăceni.”',
                   '„— Așteptați! grăi el. Dacă nu veniți voi la mine, mă duc eu la voi!”',
                   '„Și apoi porni popa la colindă.”',
                   '„Drum ca acela... giur împregiur nu este. Neted ca masa...”',
                   '„Popa, Marcu, Mitru, boii și calul împreună munciră o zi...”',
                   '„— Ba bine, zău așa! Mie-mi place păpușoiul verde!”')),
             T(2, 'Indiciile de timp', 'Scrie indiciul de timp din text.',
               ['Întrebarea', 'Indiciul din text'], [300, 210], gol(
                   'Cât a ținut-o părintele cu sfatul?', 'Cât a trecut fără ca satul să se miște?',
                   'În cât timp au fost lipiți pereții casei?', 'Cu cât a îmbătrânit părintele muncind?',
                   'În ce zi apare familia îmbrăcată nou?'), row_h=24),
         ],
         [
             T(3, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Naratorul este personaj în text.', 'Naratorul arată simpatie pentru părintele Trandafir.',
                 'Numele „Sărăceni” și „Valea-Seacă” anticipă sărăcia satului.', 'Nuvela începe cu descrierea satului.',
                 'Descrierea din final arată un sat schimbat.')),
             L(4, 'Două episoade', 'Scrie un text narativ de 8-10 rânduri, cu două episoade (fiecare cu problema și rezolvarea lui), despre o schimbare din cartierul sau satul tău.', 3),
         ]),

    fisa(4, 'pp. 55-56',
         'Reper (manual, p. 55): Trăsăturile personajului sunt prezentate direct (de narator, de alte personaje, de el '
         'însuși) sau reies indirect (din fapte, vorbe, comportament, mediu, nume). Repetiția reia cuvinte sau enunțuri '
         'pentru a evidenția sau a întări o idee.',
         [
             T(1, 'Direct sau indirect?', 'Scrie trăsătura și D (direct) sau I (indirect).',
               ['Secvența', 'Trăsătura', 'D / I'], [270, 150, 90], gol3(
                   '„Este om bun; a învățat multă carte”', '„cam aspru la judecată: prea de-a dreptul”',
                   'umblă toată ziua prin sat, dând sfaturi', 'își lipește casa în câteva zile',
                   'plânge în biserică: „Ajută-mă!...”', 'se joacă seara cu nepoții pe laiță')),
             T(2, 'Numele spun ceva', 'Scrie ce sugerează fiecare nume.',
               ['Numele', 'Ce sugerează'], [170, 340], gol(
                   'Trandafir', 'Popa Tanda', 'Sărăceni', 'Valea-Seacă'), row_h=26),
         ],
         [
             X(3, 'Repetiția', [
                 'Subliniază cuvântul repetat și scrie ce idee subliniază.',
                 'a) „Popa la biserică, popa la mort, popa la nuntă, popa la vecin” → ______________________',
                 'b) „mergi la vale, te întâlnești cu popa; intri-n pădure tot pe popa îl afli” → __________________',
                 'c) Muncă, muncă și iar muncă: asta a fost viața lui. → ____________________________']),
             L(4, 'Ce spune Cozonac', 'Scrie 5-6 rânduri în care Cozonac, clopotarul care i-a fost slugă, povestește cum e părintele Trandafir. Folosește și o repetiție.', 3),
         ]),

    fisa(5, 'pp. 57-58',
         'Reper (manual, p. 57): Conflictul este exterior (între personaje sau între personaj și societate) sau '
         'interior (un zbucium al personajului). Personajele simple nu se schimbă; personajele complexe evoluează și '
         'sunt surprinzătoare.',
         [
             T(1, 'Exterior sau interior?', 'Scrie E (exterior) sau I (interior).',
               ['Situația', 'E / I'], [440, 70], gol(
                   'Părintele se ceartă cu protopopul.', 'Sătenii merg la episcopie să-l scoată din sat.',
                   'Noaptea, la opaiț, nu găsește nicio scăpare.', 'Plânge în biserică, fără să știe ce mai crede.',
                   'Oamenii încep să-l ocărască și ei.', 'Se frământă dacă să-și lucreze singur pământurile.')),
             T(2, 'Simplu sau complex?', 'Scrie S (simplu) sau C (complex) și un argument.',
               ['Personajul', 'S / C', 'Argumentul'], [170, 70, 270], gol3(
                   'părintele Trandafir', 'preoteasa', 'Marcu Florii Cucului', 'sătenii, de la început la final',
                   'episcopul'), row_h=26),
         ],
         [
             T(3, 'Cauză și efect', 'Scrie urmarea fiecărei situații.',
               ['Cauza', 'Efectul'], [260, 250], gol(
                   'Părintele e prea aspru la vorbă.', 'Sfaturile lui nu schimbă nimic.',
                   'Trece la batjocuri.', 'Își face casă, grădină și câmp.'), row_h=26),
             L(4, 'Monolog interior', 'Scrie monologul interior al părintelui în noaptea dinaintea duminicii în care plânge în biserică (5-6 rânduri).', 3),
         ]),

    fisa(6, 'p. 59',
         'Reper: Semnificațiile nuvelei „Popa Tanda” pornesc de la schimbarea sătenilor: vorbele n-au putut ce a '
         'putut exemplul personal. Ioan Slavici credea că scrisul trebuie să-i îndrume pe oameni spre o viață potrivită '
         'cu firea omenească.',
         [
             T(1, 'Valori în fapte', 'Scrie o faptă din text care arată valoarea.',
               ['Valoarea', 'Fapta din text'], [180, 330], gol(
                   'perseverența', 'responsabilitatea față de familie', 'hărnicia', 'răbdarea',
                   'exemplul personal'), row_h=26),
             T(2, 'Proverbe și nuvelă', 'Explică legătura dintre proverb și nuvelă.',
               ['Proverbul', 'Legătura cu nuvela'], [220, 290], gol(
                   'Omul sfințește locul.', 'Vorba dulce mult aduce.', 'Fapta bună nu se uită.',
                   'Cine se scoală de dimineață departe ajunge.'), row_h=28),
         ],
         [
             L(3, 'Fiul risipitor', 'Cine ar putea fi „tatăl” și cine „fiul risipitor” în „Popa Tanda”? Explică în 3-4 propoziții.', 2),
             L(4, 'Un model din jurul meu', 'Scrie 5-6 rânduri despre un om din comunitatea ta care a schimbat ceva prin exemplul personal.', 3),
         ]),

    fisa(7, 'pp. 60-61',
         'Reper: În fragmentul din „Inocenții” de Ioana Pârvulescu, bunica le dă nepoților carnețele și îi face '
         'membri ai SIL, o societate secretă cu scopuri pe viață (sănătate, bună purtare, bună învățătură, îndreptarea '
         'lumii) și patru virtuți: cumpătare, curaj, prudență, dreptate.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Mama-mare le dă copiilor câte un carnețel.', 'Societatea are șase membri.',
                 'Naratoarea, Ana, a intrat în SIL la patru ani.', 'Un scop al societății este îndreptarea lumii.',
                 'Copiii găsesc imediat pe cine să îndrepte.', 'Unchiul îl salvează pe câine.')),
             T(2, 'Virtuțile', 'Explică virtutea și dă exemplul unei fapte de azi.',
               ['Virtutea', 'Ce înseamnă', 'O faptă de azi'], [110, 200, 200], gol3(
                   'cumpătare', 'curaj', 'prudență', 'dreptate'), row_h=26),
         ],
         [
             T(3, 'Mama-mare și părintele Trandafir', 'Compară.',
               ['', 'Mama-mare', 'Părintele Trandafir'], [150, 180, 180], gol3(
                   'pe cine vrea să schimbe', 'cum procedează', 'ce lecție transmite'), row_h=34),
             L(4, 'Societatea clasei', 'Scrie trei scopuri și trei virtuți ale unei societăți secrete a clasei tale, cu câte o explicație.', 3),
         ]),

    fisa(9, 'pp. 63-64',
         'Reper (manual, pp. 63-64): România se învecinează cu Ucraina, Republica Moldova, Bulgaria, Serbia și Ungaria. '
         'Limbile și culturile au interferat. Aisbergul cultural are o cultură de suprafață (vizibilă) și una de '
         'adâncime, descoperită trăind printre oameni sau citind despre ei.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F (ajută-te de tabelul de la p. 63).', AF, [440, 70], gol(
                 'România are cinci țări vecine.', 'În Serbia, româna este limbă minoritară cu statut oficial.',
                 'În Bulgaria, româna are statut oficial.', 'În Republica Moldova, limba de stat este româna.',
                 'Maghiara are statut oficial în România.', 'Vorbitorii din România și Republica Moldova nu se înțeleg.')),
             T(2, 'Aisbergul cultural', 'Scrie S (suprafață) sau A (adâncime).',
               ['Elementul culturii', 'S / A'], [440, 70], gol(
                   'mâncarea', 'valorile', 'drapelul', 'relațiile de familie', 'sărbătorile',
                   'stilul de comunicare', 'manierele', 'vestimentația')),
         ],
         [
             T(3, 'Cum explici?', 'Alege un exemplu și explică-l pentru un prieten din altă țară.',
               ['Ce prezinți', 'Exemplul și explicația'], [180, 330], gol(
                   'un obicei de iarnă', 'un fel de mâncare', 'un cuvânt românesc greu de tradus',
                   'o personalitate'), row_h=28),
             L(4, 'Carte poștală', 'Scrie o carte poștală (5-6 rânduri) către un prieten din Ungaria, Serbia sau Bulgaria, despre ce ar putea vedea în regiunea ta.', 2),
         ]),

    fisa(10, 'p. 64',
         'Reper (manual, p. 64): Culturile țărilor vecine se compară pe aspecte concrete (limbă și alfabet, obiceiuri, '
         'personalități, drapel, gastronomie, locuri) și pe valori. Informația verificată se deosebește de stereotip, '
         'care generalizează despre un întreg popor.',
         [
             T(1, 'Documentarea grupei', 'Țara grupei mele: ______________. Completează cu ce ați aflat.',
               ['Aspectul', 'Ce am aflat (și sursa)'], [180, 330], gol(
                   'limba oficială și alfabetul', 'un obicei', 'o personalitate', 'drapelul', 'un fel de mâncare',
                   'un loc de vizitat'), row_h=24),
             T(2, 'La noi și la ei', 'Compară țara prezentată cu România.',
               ['', 'În România', 'În țara prezentată'], [150, 180, 180], gol3(
                   'o sărbătoare', 'un fel de mâncare', 'un obicei de iarnă', 'alfabetul'), row_h=26),
         ],
         [
             T(3, 'Stereotip sau informație?', 'Scrie S (stereotip) sau I (informație verificabilă).',
               ['Enunțul', 'S / I'], [440, 70], gol(
                   'Toți ungurii mănâncă doar gulaș.', 'În Bulgaria se folosește alfabetul chirilic.',
                   'Toți sârbii sunt muzicanți.', 'În Ucraina, limba de stat este ucraineana.',
                   'Toți vecinii noștri gândesc la fel.')),
             L(4, 'Festivalul intercultural', 'Propune, în 4-5 propoziții, programul unui festival intercultural la școala ta.', 2),
         ]),

    fisa(11, 'pp. 65-66',
         'Reper (manual, p. 66): Faptele pot fi observate, măsurate, dovedite (numerale, a dovedi, document, martor); '
         'opiniile sunt păreri personale (bun, rău, a crede, a considera, întotdeauna). Textul explicativ arată cum sau '
         'de ce se întâmplă ceva: tema, explicația (De ce? Pentru că... / Cum? Astfel...), concluzia.',
         [
             T(1, 'Fapt sau opinie?', 'Scrie F (fapt) sau O (opinie) și cuvântul care te ajută.',
               ['Enunțul', 'F / O', 'Cuvântul-indiciu'], [300, 70, 140], gol3(
                   '„Popa Tanda” a apărut în 1875.', 'Este cea mai frumoasă nuvelă a lui Slavici.',
                   'Cred că părintele a greșit la început.', 'Documentele arată că Slavici s-a născut în 1848.',
                   'Satul din final e un loc minunat.')),
             X(2, 'De ce plouă?', [
                 'Citește explicația (scrisă pentru fișă).',
                 '„De ce plouă? Apa din râuri și din mări se evaporă sub căldura Soarelui. Vaporii urcă, se răcesc și '
                 'formează nori din picături foarte mici. Când picăturile se unesc și devin prea grele, cad pe pământ ca '
                 'ploaie. Așadar, ploaia face parte dintr-un circuit al apei în natură.”']),
         ],
         [
             T(3, 'Părțile explicației', 'Completează după textul de la ex. 2.',
               ['', 'Răspunsul'], [180, 330], gol(
                   'tema', 'modelul explicației', 'concluzia', 'predomină faptele sau opiniile?'), row_h=26),
             L(4, 'Explicația ta', 'Explică în 5-6 propoziții, doar prin fapte, cum se face un lucru pe care îl știi bine (o rețetă, un joc, un nod), cu temă, explicație și concluzie.', 3),
         ]),

    fisa(12, 'p. 66',
         'Reper (manual, p. 66): Distingând faptele de opinii, afli intenția vorbitorului: să informeze sau să '
         'convingă. O explicație orală are temă, explicație și concluzie; opinia se susține cu fapte.',
         [
             T(1, 'Fapt sau opinie?', 'Scrie F sau O (enunțuri dintr-o prezentare despre eșec, scrise pentru fișă).',
               ['Enunțul', 'F / O'], [440, 70], gol(
                   'Am luat locul al doilea la olimpiadă.', 'Școala ar trebui să ne învețe despre eșec.',
                   'Anul următor nu am rezolvat nimic la concurs.', 'Eșecul te face mai puternic.',
                   'M-am pregătit trei ore pe zi.')),
             T(2, 'Informează sau convinge?', 'Scrie scopul și de ce.',
               ['Textul', 'Scopul', 'De ce'], [170, 120, 220], gol3(
                   'un buletin meteo', 'o reclamă la o bicicletă', 'o prezentare despre eșec',
                   'instrucțiunile unui joc'), row_h=26),
         ],
         [
             T(3, 'Planul explicației mele', 'Pregătește explicația orală despre cum te pregătești pentru o performanță.',
               ['Partea', 'Ce spun'], [170, 340], gol(
                   'tema (ce explic)', 'pasul 1', 'pasul 2', 'pasul 3', 'concluzia'), row_h=26),
             L(4, 'Opinia mea', 'Scrie 4-5 propoziții cu opinia ta despre ideea că eșecul ar trebui să fie o materie, susținută de un fapt.', 2),
         ]),

    fisa(13, 'pp. 67-68',
         'Reper (manual, pp. 67-68): Verbele predicative formează singure predicatul verbal; cele nepredicative sunt '
         'auxiliare (a avea, a vrea, a fi, în forme compuse) sau copulative (a fi, a deveni, a ajunge, a ieși, a se '
         'face, a însemna, a rămâne, a părea), care formează cu numele predicativ predicatul nominal.',
         [
             X(1, 'La bibliotecă', [
                 'Citește textul (scris pentru fișă).',
                 '„Luni, Ana a fost la bibliotecă. Acolo sunt multe cărți vechi. Bibliotecara este o doamnă blândă și i-a '
                 'spus că până joi vor fi primit cărți noi. Ana a devenit curioasă. Ar fi vrut să rămână toată ziua, dar '
                 'trebuia să plece.”']),
             T(2, 'Felul verbului', 'Scrie: predicativ, copulativ sau auxiliar.',
               ['Verbul (din text)', 'Felul'], [280, 230], gol(
                   'a fost (la bibliotecă)', 'sunt (multe cărți)', 'este (o doamnă blândă)', 'a (spus)',
                   'vor fi (primit)', 'a devenit', 'Ar fi (vrut)', 'să rămână')),
         ],
         [
             T(3, 'Predicat verbal sau nominal?', 'Scrie PV sau PN.',
               ['Enunțul', 'PV / PN'], [420, 90], gol(
                   'A ajuns la timp.', 'A ajuns medic.', 'Pare obosit.', 'Pare că plouă.', 'Rămâne acasă.',
                   'Rămâne liniștit.', 'Iese profesor.')),
             L(4, 'Atunci și acum', 'Descrie un personaj din „Popa Tanda” la începutul și la sfârșitul nuvelei, folosind ca verbe copulative a fi, a deveni, a ajunge și a rămâne. Subliniază numele predicative.', 2),
         ]),

    fisa(14, 'p. 69',
         'Reper (manual, p. 69): Locuțiunea verbală este un grup unitar de cuvinte, sinonim cu un verb, care conține '
         'întotdeauna un verb. Este determinată de complemente și circumstanțiale, iar când verbul are mod, este '
         'predicat verbal. Apare des în limbajul oral.',
         [
             T(1, 'Locuțiunea și verbul sinonim', 'Scrie un verb sinonim.',
               ['Locuțiunea verbală', 'Verbul sinonim'], [300, 210], gol(
                   'a pune la cale', 'a da ascultare', 'a-și lua rămas-bun', 'a trage cu urechea',
                   'a o lua la sănătoasa', 'a ține minte')),
             T(2, 'Locuțiune sau nu?', 'Scrie DA dacă enunțul conține o locuțiune verbală.',
               ['Enunțul', 'DA / NU'], [420, 90], gol(
                   'Am tras cu urechea la ușă.', 'Am tras căruța în curte.', 'Și-a luat inima în dinți.',
                   'A luat o carte de pe raft.', 'Mi-am dat seama de greșeală.', 'Mi-a dat un măr.')),
         ],
         [
             X(3, 'Analizează', [
                 'Analizează locuțiunile verbale după modelul de la p. 69 (alcătuire, mod, timp, persoană, număr, funcție).',
                 'a) Părintele a luat seama la toate. → _____________________________________________',
                 'b) Sătenii i-au dat ascultare abia la final. → _________________________________________']),
             L(4, 'Povestea cu locuțiuni', 'Scrie 4-5 propoziții despre o zi de școală, cu trei locuțiuni verbale; scrie sinonimul fiecăreia în paranteză.', 2),
         ]),

    fisa(15, 'pp. 70-73',
         'Reper (manual, pp. 70-73): Indicativul (acțiune sigură) are toate timpurile; imperativul (ordin, sfat) are '
         'doar persoana a II-a; conjunctivul (acțiune posibilă, cu „să”) are prezent și perfect; condiționalul-optativ '
         '(acțiune dorită sau condiționată) are prezent (aș veni) și perfect (aș fi venit).',
         [
             X(1, 'Radu, voluntar', [
                 'Citește textul (scris pentru fișă).',
                 '„Ieri, Radu ajutase deja la cantina școlii când a sosit profesorul. «Vino și mâine!», i-a spus acesta. '
                 'Radu ar fi vrut să răspundă imediat, dar trebuia să-și întrebe părinții. Seara, le-a povestit totul. '
                 '«Să mergi, dacă îți place», a zis mama. Mâine va ajunge primul.”']),
             T(2, 'Modul și timpul', 'Scrie modul și timpul (dacă are).',
               ['Verbul', 'Modul', 'Timpul'], [150, 180, 180], gol3(
                   'ajutase', 'a sosit', 'Vino', 'ar fi vrut', 'să răspundă', 'trebuia', 'Să mergi', 'va ajunge')),
         ],
         [
             X(3, 'Transformă', [
                 'a) „citesc” la mai-mult-ca-perfect, persoana I singular: ______________________',
                 'b) „Fii atent!” la forma negativă: ______________________',
                 'c) „a veni” la condițional-optativ perfect, persoana a III-a plural: ______________________',
                 'd) „a învăța” la viitor anterior, persoana I plural: ______________________',
                 'e) forma literară pentru „o venit” și „să vie”: ______________________']),
             L(4, 'Ce aș face ca voluntar', 'Scrie 4-5 propoziții despre ce ai face ca voluntar, cu verbe la toate cele patru moduri. Subliniază-le.', 2),
         ]),

    fisa(16, 'pp. 74-75',
         'Reper (manual, pp. 74-75): Infinitivul (a lucra) poate fi subiect, nume predicativ, complement direct, '
         'complement prepozițional, atribut verbal. Participiul (lucrat, văzut, mers, copt, citit, doborât) intră în '
         'timpuri compuse; singur devine adjectiv (atribut sau nume predicativ); negativ: ne- (nemaiauzit).',
         [
             T(1, 'Funcția infinitivului', 'Scrie infinitivul și funcția lui.',
               ['Enunțul', 'Infinitivul', 'Funcția'], [240, 110, 160], gol3(
                   'A înota e sănătos.', 'Visul meu este de a călători.', 'Pot citi o oră.',
                   'Mă gândesc la a pleca devreme.', 'Teama de a greși o blochează.')),
             T(2, 'Verb sau adjectiv?', 'Scrie participiul și dacă e parte dintr-un verb sau adjectiv.',
               ['Enunțul', 'Participiul', 'Verb / adjectiv'], [240, 110, 160], gol3(
                   'Am citit cartea.', 'Cartea citită e pe masă.', 'Aș fi venit.', 'Ușa rămăsese deschisă.',
                   'Vor fi terminat tema.', 'Am un coleg neînțeles.')),
         ],
         [
             X(3, 'Scrie corect', [
                 'a) Alege forma corectă: Nu mai pot (merge / merg) azi. Aș vrea a (tăcea / tace). Poți (citi / citii)? '
                 'Ar (părea / pare) ciudat.',
                 'b) Scrie adjectivul negativ: aflat → __________  mai văzut → __________  dormit → __________']),
             L(4, 'După petrecere', 'Descrie, în 4-5 propoziții, o cameră după o petrecere, cu cinci adjective provenite din participiu, dintre care unul negativ. Subliniază-le.', 2),
         ]),

    fisa(17, 'pp. 76-77',
         'Reper (manual, pp. 76-77): Gerunziul (-ând, -ind) arată o acțiune în desfășurare; poate fi circumstanțial de '
         'mod sau de timp, atribut verbal, complement direct. Supinul (prepoziție + participiu: de citit) denumește '
         'acțiunea; poate fi subiect, nume predicativ, atribut verbal, complement direct sau prepozițional.',
         [
             T(1, 'Funcția gerunziului', 'Scrie gerunziul și funcția lui.',
               ['Enunțul', 'Gerunziul', 'Funcția'], [260, 110, 140], gol3(
                   'Intră în clasă zâmbind.', 'Plecând de acasă, și-a amintit de cheie.',
                   'Cu mâinile tremurând, a deschis plicul.', 'Aud tunând în depărtare.')),
             T(2, 'Funcția supinului', 'Scrie supinul și funcția lui.',
               ['Enunțul', 'Supinul', 'Funcția'], [260, 110, 140], gol3(
                   'De citit e ușor.', 'Filmul acesta este de văzut.', 'Am cumpărat mere de copt.',
                   'Am terminat de scris.', 'M-am săturat de așteptat.')),
         ],
         [
             T(3, 'Care formă nepersonală?', 'Scrie: infinitiv, participiu, gerunziu sau supin.',
               ['Forma', 'Forma nepersonală'], [300, 210], gol(
                   'a spune', 'spunând', 'spus (în „am spus”)', 'de spus', 'nespunând', 'de nespus')),
             L(4, 'Sarcini de vacanță', 'Scrie cinci „sarcini de vacanță” pentru un frate mai mic, fiecare cu un verb la supin (de exemplu: de citit o carte).', 2),
         ]),

    fisa(18, 'pp. 78-79',
         'Reper (manual, pp. 78-79): Verbul la mod personal e centrul grupului verbal: se leagă de subiect, de nume '
         'predicativ, de complemente și de circumstanțiale. Circumstanțialul de cauză (din ce cauză?) se exprimă prin '
         'substantiv cu de, din, pentru, după, prin adjectiv cu prepoziție sau prin gerunziu.',
         [
             X(1, 'În parc', [
                 'Citește textul (scris pentru fișă).',
                 '„Vineri, elevii clasei a VII-a au plantat copaci în parcul orașului. Din cauza ploii, au început mai '
                 'târziu. Ana, fiind obosită, s-a așezat puțin pe o bancă. Profesorul le-a mulțumit tuturor pentru '
                 'ajutor. De bucurie, copiii au cântat pe drumul spre casă.”']),
             T(2, 'Funcțiile sintactice', 'Scrie funcția sintactică.',
               ['Secvența din text', 'Funcția sintactică'], [260, 250], gol(
                   'elevii', 'au plantat', 'copaci', 'în parcul', 'Din cauza ploii', 'fiind obosită', 'tuturor',
                   'De bucurie')),
         ],
         [
             X(3, 'Virgula', [
                 'Pune virgula acolo unde este obligatorie.',
                 'a) De supărat nu a mai vorbit cu nimeni.        b) Neștiind drumul s-a rătăcit.',
                 'c) Fiind bolnav a lipsit de la școală.            d) A plâns de bucurie.']),
             L(4, 'De ce?', 'Scrie 4-5 propoziții despre o zi reușită, cu trei circumstanțiale de cauză exprimate diferit (substantiv cu prepoziție, adjectiv cu prepoziție, gerunziu). Subliniază-le.', 2),
         ]),

    fisa(19, 'p. 80',
         'Reper (manual, pp. 79-80): Circumstanțialul de cauză este facultativ și arată cauza unei acțiuni. Când e '
         'exprimat prin adjectiv cu prepoziție sau prin gerunziu și stă înaintea verbului, e urmat de virgulă. '
         'Gerunziul poate fi și circumstanțial de timp sau de mod.',
         [
             T(1, 'Prepoziția potrivită', 'Scrie o prepoziție care formează un circumstanțial de cauză.',
               ['Enunțul', 'Prepoziția'], [390, 120], gol(
                   '___ frică, n-a mai intrat în pădure.', '___ neatenție, a greșit calculul.',
                   'L-au premiat ___ curaj.', '___ atâta alergat, a obosit.', 'S-a îmbolnăvit ___ frig.')),
             T(2, 'Cauză, timp sau mod?', 'Scrie ce fel de circumstanțial este gerunziul.',
               ['Enunțul', 'Circumstanțialul'], [370, 140], gol(
                   'Grăbindu-se, a scăpat cana.', 'Mergând spre școală, a întâlnit-o pe Ana.', 'Vorbea gesticulând.',
                   'Neavând bani, n-a cumpărat biletul.', 'Ieșind din curte, a închis poarta.')),
         ],
         [
             T(3, 'Planul articolului', 'Pregătește un articol despre o faptă bună, pentru revista școlii.',
               ['Partea', 'Ce scriu'], [180, 330], gol(
                   'titlul', 'fapta bună (ce, cine)', 'unde și când', 'cum', 'de ce (cauza)'), row_h=26),
             L(4, 'Articolul', 'Scrie articolul după plan (8-10 rânduri), cu cel puțin un circumstanțial de loc, unul de timp, unul de mod și unul de cauză. Subliniază-le.', 3),
         ]),

    fisa(20, 'p. 81',
         'Reper (manual, p. 81): Circumstanțialul de scop (cu ce scop?, în ce scop?) arată finalitatea acțiunii. Se '
         'exprimă prin substantiv cu prepoziție (pentru ajutorarea...), prin infinitiv cu prepoziție (pentru a ajuta) '
         'sau prin supin (la cules). Așezat înaintea verbului, se desparte prin virgulă.',
         [
             T(1, 'Cauză sau scop?', 'Scrie C (cauză) sau S (scop).',
               ['Enunțul', 'C / S'], [440, 70], gol(
                   'A plecat la cules ciuperci.', 'A plecat de frică.', 'Învață pentru a lua bursa.',
                   'A primit bursă pentru rezultate.', 'S-a oprit pentru a ne saluta.', 'S-a oprit din cauza ploii.')),
             T(2, 'Cum e exprimat scopul?', 'Scrie circumstanțialul de scop și cum e exprimat.',
               ['Enunțul', 'Circumstanțialul de scop', 'Exprimat prin'], [230, 150, 130], gol3(
                   'Au strâns bani pentru repararea școlii.', 'Citește pentru a înțelege lumea.',
                   'Merg la pescuit duminică.', 'Pentru a câștiga, s-au antrenat zilnic.'), row_h=26),
         ],
         [
             X(3, 'Mută scopul la început', [
                 'Rescrie enunțul, cu circumstanțialul de scop la început, și pune virgula.',
                 'a) Au muncit toată vara pentru a cumpăra o bicicletă. → _____________________________________',
                 'b) Ne-am întâlnit la bibliotecă pentru pregătirea proiectului. → ______________________________']),
             L(4, 'Dă mai departe', 'Scrie 4-5 propoziții despre trei fapte bune pe care le-ai „da mai departe”, fiecare cu un circumstanțial de scop. Subliniază-le.', 2),
         ]),

    fisa(21, 'pp. 82-83',
         'Reper (manual, p. 82): Caracterizarea personajului prezintă identitatea și statutul lui, trăsăturile fizice și '
         'morale, susținute cu exemple din text, și mijloacele de caracterizare: directe (numite de narator, de alte '
         'personaje, de el însuși) și indirecte (fapte, vorbe, gânduri, nume, relații).',
         [
             X(1, 'Bunicul Vasile', [
                 'Citește textul (scris pentru fișă).',
                 '„Bunicul Vasile avea mâinile aspre și ochii albaștri, mereu râzători. «Omul se cunoaște după cum '
                 'lucrează», spunea el. Vecinii îl numeau «meșterul satului», pentru că repara orice, fără să ceară bani. '
                 'Dimineața, înainte să cânte cocoșii, era deja în atelier.”']),
             T(2, 'Trăsături și mijloace', 'Completează pentru bunicul Vasile.',
               ['Trăsătura', 'Directă sau indirectă', 'Secvența din text'], [130, 150, 230], gol3(
                   'fizică', 'hărnicia', 'generozitatea', 'înțelepciunea'), row_h=28),
         ],
         [
             T(3, 'Ce e greșit?', 'Enunțuri dintr-o caracterizare a părintelui Trandafir. Scrie ce e greșit.',
               ['Enunțul', 'Ce e greșit'], [300, 210], gol(
                   'Părintele e bun, harnic, frumos și deștept.', 'El spune mereu: „Popa e omul dracului!”',
                   'Personajul e bun, pentru că e bun.', 'În concluzie, nuvela are trei capitole.'), row_h=28),
             L(4, 'Introducerea', 'Scrie introducerea caracterizării părintelui Trandafir (4-5 propoziții): locul în text, identitatea, statutul, parcursul.', 2),
         ]),

    fisa(22, 'p. 83',
         'Reper (manual, p. 83): La revizuire verifici dacă ai inclus tot ce e important, dacă ideile sunt legate '
         'logic, dacă ai exemple suficiente, dacă ai eliminat repetițiile, dacă citatele sunt între ghilimele și dacă '
         'fiecare paragraf aduce o idee nouă.',
         [
             X(1, 'Un paragraf de revizuit', [
                 'Citește paragraful (scris pentru fișă).',
                 '„Părintele Trandafir este un om harnic. El e foarte harnic, pentru că muncește mult. El își face casă, '
                 'el își face grădină, el ară. Popa e omul dracului! spun sătenii, dar el nu se lasă. Deci el e harnic.”']),
             T(2, 'Ce revizuiesc?', 'Găsește fiecare problemă în paragraf și spune cum o corectezi.',
               ['Problema', 'Unde apare', 'Cum corectez'], [140, 170, 200], gol3(
                   'repetiții', 'citat fără ghilimele', 'argument circular', 'idee nelegată'), row_h=30),
         ],
         [
             L(3, 'Paragraful revizuit', 'Rescrie paragraful de la ex. 1, corectat și îmbogățit cu un exemplu din text.', 3),
             T(4, 'Verificarea caracterizării mele', 'Scrie DA sau NU.',
               ['Întrebarea', 'DA / NU'], [420, 90], gol(
                   'Am introducere, cuprins și încheiere?', 'Fiecare trăsătură are un exemplu din text?',
                   'Am numit mijloacele de caracterizare?', 'Am pus citatele între ghilimele?',
                   'Mi-am spus părerea despre personaj?')),
         ]),

    fisa(23, 'pp. 84-85',
         'Recapitulare (manual, pp. 48-66): structura textului narativ și episoadele, mijloacele de caracterizare, '
         'repetiția, conflictul, personajele simple și complexe, faptele și opiniile.',
         [
             X(1, 'Brutarul din Pietrosu', [
                 'Citește textul (scris pentru fișă).',
                 '„În satul Pietrosu, brutarul Ilie se trezea la trei noaptea. Frământa aluatul, aprindea cuptorul și, '
                 'până la ivirea zorilor, mirosul de pâine caldă umplea toată ulița.',
                 'Într-o iarnă grea, oamenii n-au mai avut bani de pâine. Ilie a pus în fața brutăriei un coș și o '
                 'tăbliță: «Cine poate, lasă un ban. Cine nu poate, ia o pâine.»',
                 '— Ai să sărăcești, Ilie! îl certa vecinul, negustorul Pavel, un om zgârcit și bănuitor.',
                 '— Poate, zâmbea brutarul. Dar nimeni din sat n-o să flămânzească.',
                 'În primăvară, coșul s-a umplut de bani. Oamenii nu uitaseră. Pâine, pâine și iar pâine: asta a dat Ilie '
                 'satului, iar satul i-a dat înapoi încrederea.”']),
             T(2, 'Recunoaște', 'Completează după text.',
               ['', 'Din text'], [200, 310], gol(
                   'naratorul', 'o trăsătură numită direct (de cine?)', 'o trăsătură dedusă din fapte',
                   'conflictul (exterior sau interior?)', 'repetiția și rolul ei'), row_h=24),
         ],
         [
             T(3, 'Ilie și Pavel', 'Compară cele două personaje.',
               ['', 'Ilie', 'Pavel'], [150, 180, 180], gol3(
                   'ce valoare îl conduce', 'cum se poartă cu oamenii', 'simplu sau complex?'), row_h=30),
             T(4, 'Fapt sau opinie?', 'Scrie F sau O.', ['Enunțul', 'F / O'], [440, 70], gol(
                 'Ilie se trezea la trei noaptea.', '„Ai să sărăcești, Ilie!”', 'În primăvară, coșul s-a umplut de bani.',
                 'Ilie este cel mai bun om din sat.')),
             L(5, 'Un an mai târziu', 'Continuă textul cu un episod nou (5-6 rânduri), în care Pavel se schimbă sau nu.', 2),
         ]),

    fisa(24, 'p. 85',
         'Recapitulare (manual, pp. 67-83): tipurile de verbe, locuțiunea verbală, modurile și timpurile, formele '
         'verbale nepersonale, posibilitățile combinatorii ale verbului, circumstanțialele de cauză și de scop, '
         'caracterizarea personajului.',
         [
             X(1, 'Enunțuri despre brutar', [
                 '(1) Brutarul Ilie se trezea la trei noaptea.   (2) De milă, Ilie a pus un coș în fața brutăriei.',
                 '(3) Pavel era zgârcit.   (4) Pavel a venit la brutărie pentru a-i cere socoteală.',
                 '(5) Ilie și-a dat seama de greutăți.']),
             T(2, 'Analiza', 'Scrie ce este secvența și ce funcție sintactică are.',
               ['Secvența (enunțul)', 'Ce este', 'Funcția sintactică'], [150, 180, 180], gol3(
                   'se trezea (1)', 'la trei noaptea (1)', 'De milă (2)', 'era zgârcit (3)',
                   'pentru a-i cere (4)', 'și-a dat seama (5)')),
             T(3, 'Formele nepersonale', 'Scrie forma nepersonală și funcția ei.',
               ['Enunțul', 'Forma', 'Funcția'], [230, 140, 140], gol3(
                   'A plecat la cules mere.', 'Ilie lucra cântând.', 'A frământa e greu.',
                   'Pâinea coaptă mirosea bine.')),
         ],
         [
             T(4, 'Modul și timpul', 'Scrie modul și timpul (verbe din textul „Brutarul din Pietrosu”).',
               ['Verbul', 'Modul', 'Timpul'], [170, 170, 170], gol3(
                   'se trezea', 'a pus', 'ai să sărăcești', 'uitaseră')),
             L(5, 'Planul caracterizării', 'Scrie planul caracterizării brutarului Ilie: introducerea, două trăsături cu câte o dovadă din text, încheierea.', 3),
         ]),
]
