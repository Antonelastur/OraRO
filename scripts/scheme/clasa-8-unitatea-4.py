# Scheme-notițe, clasa a VIII-a, Unitatea a IV-a „Unde găsim adevărul?”.
# Conținutul vine din rubricile Repere ale Manualului Art 8, pp. 136-161;
# exemplele noi sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-8-unitatea-4.py

SUB = 'Clasa a VIII-a · Unitatea a IV-a, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 1 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-1',
        'titlu': 'Proiect de grup. Realizarea unei reclame',
        'sub': SUB.format(n=1, pp='p. 146'),
        'sursa': 'Sursa: Manual Art 8, p. 146, sarcina de lucru, pașii și grila proiectului; principiile reclamei de la p. 143.',
        'sect': [
            ('1. SARCINA', [
                {'t': 'text', 'p': ['În grupe de **5-7 elevi**, concepem o reclamă pentru un produs tras la sorți, dintr-un domeniu:']},
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'divertisment', 'col': 't', 'p': ['joc video, consolă, gadget']},
                    {'titlu': 'cultural', 'col': 'm', 'p': ['librărie, teatru, festival']},
                    {'titlu': 'geografic', 'col': 'a', 'p': ['oraș, regiune, țară']},
                    {'titlu': 'turistic', 'col': 'n', 'p': ['hotel, han, pensiune']},
                ]},
                {'t': 'text', 'p': ['Tipul reclamei: **afiș sau panou publicitar**, **reclamă audio** sau **reclamă video**.']},
            ]),
            ('2. PAȘII', [
                {'t': 'tabel', 'cap': ['Când', 'Ce facem'], 'lat': [0.2, 0.8],
                 'r': [['**săptămâna I**', '1. alegem produsul; 2. ne documentăm și analizăm **punctele forte și slabe**; 3. decidem ce intră în reclamă și ce evităm; 4. împărțim rolurile (actori, regizori, scenografi, graficieni, autori de slogan etc.); 5. stabilim durata (audio, video: **maximum 30 de secunde**) și programele folosite'],
                       ['**săptămâna a II-a**', '1. realizăm reclama împreună; 2. pregătim prezentarea echipei (filmuleț, fotografii din timpul lucrului); 3. prezentăm în **2-3 minute**']]},
                {'t': 'atentie', 'p': ['Suntem originali și respectăm **drepturile de autor**.']},
            ]),
            ('3. CE FACE O RECLAMĂ REUȘITĂ', [
                {'t': 'text', 'p': ['**atenția** · **înțelegerea** · **încrederea** · **marca** · **acțiunea** · **efectul** (vezi lecția despre reclamă)']},
            ]),
            ('4. GRILA DE EVALUARE', [
                {'t': 'tabel', 'cap': ['Criteriul', 'Întrebarea'], 'lat': [0.22, 0.78],
                 'r': [['conținutul', 'se referă la domeniul tras la sorți?'],
                       ['calitatea', 'mi-a captat atenția? am înțeles ușor mesajul-cheie? m-a convins? am reținut marca? știu ce să fac după ce am văzut-o?'],
                       ['originalitatea', 'e originală, fără să încalce drepturile de autor?'],
                       ['prezentarea', 'informațiile despre realizare sunt succinte, clare, atractive, în timpul dat?']]},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-3',
        'titlu': 'Textul epic. Planurile narative. Inserția',
        'sub': SUB.format(n=3, pp='pp. 136-137'),
        'sursa': 'Sursa: Manual Art 8, pp. 136-137, rubrica Repere; textul de bază este „Iapa lui Vodă” de Mihail Sadoveanu.',
        'sect': [
            ('1. PLANURILE NARATIVE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Într-un text epic, întâmplările pot fi organizate pe **mai multe planuri narative**. Fiecare plan urmărește un alt **fir narativ**: o succesiune de întâmplări în ordine logică și temporală.']},
                {'t': 'text', 'p': ['Planurile se leagă prin trei procedee:']},
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'înlănțuirea', 'col': 't', 'p': ['întâmplările se succed una după alta']},
                    {'titlu': 'alternanța', 'col': 'm', 'p': ['firele narative alternează']},
                    {'titlu': 'inserția', 'col': 'a', 'p': ['o poveste e inclusă în alta']},
                ]},
            ]),
            ('2. INSERȚIA (POVESTIREA ÎN RAMĂ)', [
                {'t': 'text', 'p': ['**Inserția** este includerea unei povești în interiorul alteia. Se numește și **povestire în ramă**: **rama** (povestirea-cadru) cuprinde povestea inserată.']},
                {'t': 'tabel', 'cap': ['Opere celebre', 'Autorul'], 'lat': [0.55, 0.45],
                 'r': [['*O mie și una de nopți*', 'basme arabe'],
                       ['*Decameronul*', 'Giovanni Boccaccio (Italia)'],
                       ['*Povestirile din Canterbury*', 'Geoffrey Chaucer (Anglia)'],
                       ['*Hanu Ancuței* (nouă povestitori la un han)', 'Mihail Sadoveanu']]},
                {'t': 'atentie', 'p': ['Planurile trebuie **legate** astfel încât un fir narativ să îl genereze pe celălalt **firesc și necesar**.']},
            ]),
            ('3. CUM LUCREZ CU O POVESTIRE ÎN RAMĂ', [
                {'t': 'text', 'p': ['1. delimitez secvențele **ramei** de cele ale **poveștii inserate**;',
                                    '2. caut secvența care face **trecerea** de la un plan la altul;',
                                    '3. așez pe o **axă a timpului** trei momente: al scrierii, al spunerii poveștilor, al întâmplării povestite;',
                                    '4. în rezumat, marchez clar trecerea de la un plan narativ la altul.']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-4',
        'titlu': 'Naratorii și personajele. Antiteza',
        'sub': SUB.format(n=4, pp='pp. 138-139'),
        'sursa': 'Sursa: Manual Art 8, pp. 138-139, rubrica Repere și fișa de identitate a personajului.',
        'sect': [
            ('1. NARATORII ÎN POVESTIREA ÎN RAMĂ', [
                {'t': 'text', 'p': ['Povestirea în ramă **schimbă rolurile** narator – personaj:']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'naratorul din ramă', 'col': 't', 'p': ['devine **ascultător**', 'nu participă la acțiunea poveștii inserate']},
                    {'titlu': 'un personaj', 'col': 'm', 'p': ['devine **narator**', 'uneori rămâne și **personaj** în propria narațiune']},
                ]},
                {'t': 'text', 'p': ['Ascultătorii sunt esențiali: fac parte dintr-un **ritual al comunicării**, convenția pe care se sprijină povestirea în povestire.']},
            ]),
            ('2. ANTITEZA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Antiteza** este figura de stil care alătură doi termeni (fenomene, idei, obiecte, personaje, situații, planuri narative) ca să sublinieze **opoziția** dintre ei.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'la nivelul enunțului', 'col': 'a', 'p': ['aspecte concrete opuse', '*alb – negru, înalt – scund, sus – jos*']},
                    {'titlu': 'la nivelul operei', 'col': 'n', 'p': ['planuri narative opuse', 'personaje în opoziție', 'acțiuni, ipostaze, opinii contrare']},
                ]},
            ]),
            ('3. FIȘA DE CARACTERIZARE', [
                {'t': 'text', 'p': ['Rubricile fișei: **identitate** · **trăsături fizice** · **trăsături morale** · **modalități directe** de caracterizare (naratorul, alte personaje, personajul despre sine) · **modalități indirecte** (fapte, gesturi, limbaj, atitudini).']},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Statutul personajelor: principal, secundar, episodic, figurant, colectiv. Pentru fiecare trăsătură dau o **citare** din text.']},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-6',
        'titlu': 'Textul multimodal. Reclama',
        'sub': SUB.format(n=6, pp='pp. 142-143'),
        'sursa': 'Sursa: Manual Art 8, pp. 142-143, rubrica Repere și întrebările din Explorare.',
        'sect': [
            ('1. TEXTUL NONLITERAR ȘI TEXTUL MULTIMODAL', [
                {'t': 'text', 'p': ['**Textul nonliterar** se referă la aspecte ale realității; scopul lui: să informeze, să convingă, să amuze etc.',
                                    '**Textul multimodal** combină două sau mai multe **modalități de comunicare**: cuvinte, imagini, sunete, gesturi, lumini, culori.']},
            ]),
            ('2. RECLAMA', [
                {'t': 'text', 'p': ['**Reclama** este un text nonliterar, de obicei multimodal (afiș, panou, prospect, spot audio sau video), în locuri publice, în mass-media sau pe internet, care pune într-o **lumină pozitivă** un produs (mărfuri, spectacole, servicii).']},
                {'t': 'tabel', 'cap': ['Cei patru „actori”', 'Cine sunt'], 'lat': [0.3, 0.7],
                 'r': [['deținătorul produsului', 'firma, compania, instituția'],
                       ['producătorul reclamei', 'agenția de publicitate'],
                       ['distribuitorul', 'mass-media'],
                       ['cumpărătorul', 'consumatorul']]},
            ]),
            ('3. PRINCIPIILE UNEI RECLAME REUȘITE', [
                {'t': 'tabel', 'cap': ['Principiul', 'Ce cere'], 'lat': [0.22, 0.78],
                 'r': [['**atenția**', 'să capteze interesul, să iasă în evidență'],
                       ['**înțelegerea**', 'un mesaj-cheie ușor de înțeles'],
                       ['**încrederea**', 'să câștige încrederea publicului'],
                       ['**marca**', 'legătură clară între marca produsului și mesaj'],
                       ['**acțiunea**', 'să spună ce pas urmează (cumpărare, informare)'],
                       ['**efectul**', 'să convingă mulți oameni să acționeze']]},
                {'t': 'atentie', 'p': ['Reclama e un produs cultural: respectă **drepturile de autor**.']},
            ]),
            ('4. CUM ANALIZEZ O RECLAMĂ', [
                {'t': 'text', 'p': ['ce produs promovează? · ce temă are mesajul? · ce scop are? · cine a creat-o și cine a comandat-o? · cui se adresează (publicul-țintă)? · ce rol au imaginea, culorile, luminile? · unde e așezată marca? · ce joc de cuvinte folosește?']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-9',
        'titlu': 'Comportamente nonverbale și paraverbale cu efect persuasiv',
        'sub': SUB.format(n=9, pp='pp. 147-148'),
        'sursa': 'Sursa: Manual Art 8, pp. 147-148, rubrica Repere și schema elementelor persuasive.',
        'sect': [
            ('1. PERSUASIUNEA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Persuasiunea** este capacitatea unui mesaj de a **convinge**. Pe lângă idei și dovezi, vorbitorul implică **emoțional** publicul prin limbajul nonverbal și paraverbal.']},
                {'t': 'text', 'p': ['Conținutul convinge prin: **logica argumentelor**, **puterea dovezilor**, **consistența ideilor**.']},
            ]),
            ('2. CE TRANSMIT PRIN CORP ȘI PRIN VOCE', [
                {'t': 'coloane', 'c': [
                    {'titlu': 'NONVERBAL (corpul)', 'b': [{'t': 'text', 'p': ['• mișcările capului', '• mimica (expresiile feței)', '• gestica', '• postura (cum stau în picioare sau pe scaun)', '• mișcările ochilor și contactul vizual']}]},
                    {'titlu': 'PARAVERBAL (rostirea)', 'b': [{'t': 'text', 'p': ['• volumul vocii, adaptat sălii și publicului', '• ritmul: lent, calm, precipitat, teatral', '• pauzele care accentuează ideile', '• accentuarea cuvintelor-cheie', '• intonația: timbrul și înălțimea vocii']}]},
                ]},
            ]),
            ('3. CÂND ȚIN UN DISCURS', [
                {'t': 'text', 'p': ['1. îmi schițez **planul** expunerii;',
                                    '2. aleg câteva **gesturi** care susțin ideile importante;',
                                    '3. privesc publicul, variez vocea, fac **pauze** înaintea ideilor-cheie;',
                                    '4. mă autoevaluez: în ce măsură comportamentul nonverbal și paraverbal mi-a subliniat ideile?']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-10',
        'titlu': 'Circumstanțialul de loc',
        'sub': SUB.format(n=10, pp='p. 149'),
        'sursa': 'Sursa: Manual Art 8, p. 149, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțialul de loc** arată **situarea** și **orientarea în spațiu**. Răspunde la întrebările: **unde? de unde? până unde? pe unde? încotro? dincotro?**']},
            ]),
            ('2. DE CE DEPINDE', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['verb, locuțiune verbală', '*Am ajuns* **la han**. *Și-a luat tălpășița* **de aici**.'],
                       ['interjecție predicativă', '*Poftim* **înăuntru**!'],
                       ['adjectiv', '*Cățelul era curat* **pe picioare**.']]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['substantiv în Ac., G. sau D.', '*Urcați pe scara din stânga. Deasupra orașului s-au adunat nori. Nu stă locului.*'],
                       ['adverb (de loc, relativ, nehotărât, interogativ), locuțiune adverbială', '*A plecat departe. Spune-mi până unde să merg. Umblă de colo până colo.*'],
                       ['pronume', '*Se îndreaptă spre tine. În jurul lor s-a creat busculadă.*'],
                       ['adjectiv pronominal posesiv, după o prepoziție de genitiv', '*Ploaia s-a abătut asupra mea.*'],
                       ['numeral cu valoare pronominală', '*L-am găsit în a doua.*'],
                       ['supin', '*A întârziat la pescuit.*']]},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„din gara” – circumstanțial de loc, exprimat prin substantiv comun, genul feminin, numărul singular, cazul acuzativ, articulat cu articolul hotărât „-a”, precedat de prepoziția simplă „din”.*']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-11',
        'titlu': 'Circumstanțiala de loc',
        'sub': SUB.format(n=11, pp='pp. 150-151'),
        'sursa': 'Sursa: Manual Art 8, pp. 150-151, rubricile Repere.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțiala de loc** este circumstanțialul de loc exprimat printr-o **propoziție**. Răspunde la: *unde? de unde? până unde? pe unde? încotro? dincotro?*']},
                {'t': 'text', 'p': ['*Unde mergem? → Mergem 1/* **unde spui tu**. *2/*']},
                {'t': 'text', 'p': ['**Regentul**: verb sau locuțiune verbală (*Du-te 1/ încotro vezi cu ochii. 2/*), adjectiv (*Rămăsese așezată 1/ unde o pusesem. 2/*), interjecție predicativă (*Hai cu noi 1/ până unde este intersecția. 2/*).']},
            ]),
            ('2. ELEMENTELE DE RELAȚIE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Exemplu'], 'lat': [0.4, 0.6],
                 'r': [['adverbe relative: *unde, încotro, dincotro*', '*Am mers 1/ până unde am stabilit. 2/*'],
                       ['adverbe nehotărâte: *oriunde, oriîncotro*', '*Furtuna a distrus totul 1/ pe oriunde a trecut. 2/*'],
                       ['pronume relative cu prepoziție', '*M-am ascuns 1/ sub ce am găsit. 2/*'],
                       ['adjective pronominale relative', '*Mă voi opri 1/ la ce han întâlnesc. 2/*'],
                       ['pronume nehotărâte cu prepoziție', '*Se duce 1/ spre oricine îl ascultă. 2/*'],
                       ['adjective pronominale nehotărâte', '*...1/ în oricare han am poposit. 2/*']]},
            ]),
            ('3. CORELATIVELE, TOPICA, VIRGULA', [
                {'t': 'text', 'p': ['În regentă pot apărea **corelative**: *acolo, de acolo, pe acolo, peste tot*. Ele întăresc legătura și arată felul subordonatei.']},
                {'t': 'tabel', 'cap': ['Poziția', 'Virgula'], 'lat': [0.4, 0.6],
                 'r': [['după regentă', '**fără** virgulă'],
                       ['înaintea regentei', 'cu virgulă, dacă nu se insistă asupra ei'],
                       ['intercalată în regentă', 'izolată prin **virgule**'],
                       ['cu un **corelativ** în regentă', '**cu virgulă**, oriunde ar sta: *De acolo a pornit, de unde s-a născut.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-12',
        'titlu': 'Circumstanțialul de timp',
        'sub': SUB.format(n=12, pp='p. 152'),
        'sursa': 'Sursa: Manual Art 8, p. 152, rubrica Repere.' + CREATE,
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțialul de timp** arată **timpul** sau **frecvența** unei acțiuni. Răspunde la întrebările: **când? de când? până când?**']},
            ]),
            ('2. DE CE DEPINDE', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['verb, locuțiune verbală', '*Am plecat* **către ziuă**. *A băgat de seamă greșeala* **după examen**.'],
                       ['interjecție predicativă', '*Hai* **acum**!'],
                       ['adjectiv', '*Înfrânți* **ieri**, *victorioși* **astăzi**!']]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['substantiv', '*La bătrânețe a devenit retras. Ne-am lămurit înaintea discuției.*'],
                       ['adverb, locuțiune adverbială', '*De alaltăieri îl caut. Vine din când în când pe la noi.*'],
                       ['pronume', '*A ajuns la gară după tine. În urma lor au mai sosit și alții.*'],
                       ['adjectiv pronominal posesiv, după o prepoziție de genitiv', '*Am ajuns înaintea voastră la școală.*'],
                       ['numeral cu valoare pronominală', '*Va lua cuvântul după doi mai mari.*'],
                       ['supin / infinitiv / gerunziu', '*Părul se coafează după spălat. Până a sosi tu, am făcut ordine. Ascultându-te, mi-am amintit ceva.*']]},
                {'t': 'atentie', 'p': ['Aceeași prepoziție poate introduce un circumstanțial de **loc** sau de **timp**: *după deal* (unde?) / *după prânz* (când?). Pun întrebarea potrivită.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-13',
        'titlu': 'Circumstanțiala de timp',
        'sub': SUB.format(n=13, pp='pp. 153-154'),
        'sursa': 'Sursa: Manual Art 8, pp. 153-154, rubricile Repere.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțiala de timp** este circumstanțialul de timp exprimat printr-o **propoziție**. Răspunde la: *când? de când? până când?*']},
                {'t': 'text', 'p': ['**Regentul**: verb sau locuțiune verbală (*Am așteptat 1/ până când s-a făcut ora 14. 2/*), adjectiv (*Ajunsă 1/ când se terminase spectacolul, 2/ a rămas dezamăgită. 1/*), interjecție predicativă (*Hai cu noi 1/ după ce termini de scris. 2/*).']},
            ]),
            ('2. ELEMENTELE DE RELAȚIE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['adverbul relativ *când* (și cu prepoziții)', '*M-a surprins tonul lui 1/ când mi-a vorbit. 2/*'],
                       ['adverbul nehotărât *oricând*', '*Vino 1/ oricând vrei. 2/*'],
                       ['conjuncții: *până*; *cum* (= îndată ce); *cât* (= atâta timp)', '*Am citit 1/ până am obosit. 2/ Cum a auzit, 1/ a plecat. 2/*'],
                       ['locuțiuni: *până ce, până să, după ce, îndată ce, imediat ce, odată ce, în timp ce, cât timp, câtă vreme, ori de câte ori*', '*Vine la noi 1/ ori de câte ori poate. 2/*'],
                       ['pronume relative și nehotărâte cu prepoziții', '*Am sosit 1/ înaintea oricui participase la cros. 2/*'],
                       ['adjective pronominale relative și nehotărâte', '*Stau cu tine 1/ până la oricare oră dorești. 2/*']]},
            ]),
            ('3. CORELATIVELE, TOPICA, VIRGULA', [
                {'t': 'text', 'p': ['Corelative în regentă: *atunci, de atunci, până atunci, abia, și, imediat, îndată*.']},
                {'t': 'tabel', 'cap': ['Poziția', 'Virgula'], 'lat': [0.45, 0.55],
                 'r': [['după regentă', '**fără** virgulă (excepție: alt circumstanțial corelativ în regentă)'],
                       ['intercalată, înaintea predicatului regentei', 'izolată prin **virgule**'],
                       ['cu un **adverb corelativ** în regentă', '**cu virgulă**, oriunde ar sta: *De atunci a devenit trist, de când a fost plecat.*']]},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-14',
        'titlu': 'Circumstanțialul de mod',
        'sub': SUB.format(n=14, pp='p. 155'),
        'sursa': 'Sursa: Manual Art 8, p. 155, rubrica Repere și modelul de analiză.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțialul de mod** arată **felul** în care se desfășoară o acțiune sau se manifestă o însușire. Răspunde la întrebările: **cum? în ce fel? în ce mod?**']},
            ]),
            ('2. DE CE DEPINDE', [
                {'t': 'tabel', 'cap': ['Regentul', 'Exemplu'], 'lat': [0.35, 0.65],
                 'r': [['verb, locuțiune verbală', '*A acționat* **bine**. *Și-a dat seama* **brusc** *de greșeală.*'],
                       ['interjecție predicativă', '*Hai* **repede**!'],
                       ['adjectiv', '*Un răspuns* **bine** *argumentat.*'],
                       ['adverb', '*S-au purtat corect* **în general**.']]},
            ]),
            ('3. PRIN CE SE EXPRIMĂ', [
                {'t': 'tabel', 'cap': ['Partea de vorbire', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['substantiv în acuzativ', '*A scris tema cu atenție.*'],
                       ['pronume', '*Ea gândește ca tine.*'],
                       ['numeral cu valoare pronominală', '*Dansează ca doi dintre balerinii celebri.*'],
                       ['adverb, locuțiune adverbială', '*Citim împreună. Timpul trece pe nesimțite.*'],
                       ['infinitiv / gerunziu', '*A vorbit fără a se gândi. Venea alergând.*'],
                       ['interjecție onomatopeică', '*Pisica merge pâș-pâș.*']]},
            ]),
            ('4. MODEL DE ANALIZĂ', [
                {'t': 'nota', 'p': ['*„brusc” – circumstanțial de mod, exprimat prin adverb de mod.*']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-15',
        'titlu': 'Circumstanțiala de mod',
        'sub': SUB.format(n=15, pp='pp. 156-157'),
        'sursa': 'Sursa: Manual Art 8, pp. 156-157, rubricile Repere.',
        'sect': [
            ('1. CE ESTE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Circumstanțiala de mod** este circumstanțialul de mod exprimat printr-o **propoziție**. Răspunde la: *cum? în ce fel? în ce mod?*']},
                {'t': 'text', 'p': ['**Regentul**: verb sau locuțiune verbală (*Se poartă 1/ cum a fost învățat. 2/*), adjectiv (*Bogat 1/ cum era, 2/ putea visa la o călătorie. 1/*), adverb (*Pășește ușor, 1/ de parcă n-ar atinge pământul. 2/*).']},
            ]),
            ('2. ELEMENTELE DE RELAȚIE', [
                {'t': 'tabel', 'cap': ['Elementul', 'Exemplu'], 'lat': [0.42, 0.58],
                 'r': [['adverbe relative *cum, cât*; nehotărâte *oricum, oricât*', '*A scris 1/ cum a știut. 2/ A lucrat 1/ cât a putut de eficient. 2/*'],
                       ['conjuncția *precum*', '*Se comportă 1/ precum a văzut la alții. 2/*'],
                       ['locuțiuni: *fără să, fără ca ... să, după cum, ca și cum, ca și când, de parcă*', '*Îmi vorbește 1/ ca și cum am fi prieteni. 2/*']]},
            ]),
            ('3. CORELATIVELE, TOPICA, VIRGULA', [
                {'t': 'text', 'p': ['Corelative în regentă: *așa, astfel, întocmai*: *Așa am procedat, cum mi s-a explicat.*']},
                {'t': 'tabel', 'cap': ['Poziția', 'Virgula'], 'lat': [0.4, 0.6],
                 'r': [['după regentă', 'de obicei **fără** virgulă'],
                       ['înaintea regentei', 'de regulă **cu** virgulă; poate lipsi dacă e absolut necesară înțelesului'],
                       ['intercalată', 'izolată prin **virgule**'],
                       ['cu un **corelativ** în regentă', '**cu virgulă**']]},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-16',
        'titlu': 'Tipare textuale: pro-contra',
        'sub': SUB.format(n=16, pp='pp. 158-159'),
        'sursa': 'Sursa: Manual Art 8, pp. 158-159, rubrica Repere, planul textului și grila de evaluare.',
        'sect': [
            ('1. PRO ȘI CONTRA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Orice temă poate fi privită din **perspective opuse**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'argumente pro', 'col': 'v', 'p': ['în **acord** cu teza, o susțin']},
                    {'titlu': 'contraargumente', 'col': 'r', 'p': ['în **dezacord** cu teza, o combat']},
                ]},
                {'t': 'text', 'p': ['• În același text pot apărea ambele; autorul se situează de partea unora.',
                                    '• Și argumentele, și contraargumentele sunt însoțite de **exemple**.',
                                    '• Contraargumentele stau după fiecare argument sau după toată seria de argumente.']},
            ]),
            ('2. CONECTORII DE TRECERE', [
                {'t': 'text', 'p': ['*dar, or, dimpotrivă, totuși, cu toate acestea, în schimb, din contră, de fapt, în realitate, în timp ce, în loc să, spre deosebire, ceea ce contrazice, pe de altă parte*']},
            ]),
            ('3. PLANUL TEXTULUI', [
                {'t': 'tabel', 'cap': ['Partea', 'Ce scriu'], 'lat': [0.2, 0.8],
                 'r': [['**introducerea**', 'opinia mea față de temă'],
                       ['**cuprinsul**', 'două argumente diferite, cu exemple (fapte, dovezi, mărturii, statistici, emoții, valori); pentru fiecare, contraargumentul și exemplul lui'],
                       ['**încheierea**', 'o concluzie scurtă, care îmi reafirmă poziția și **respinge contraargumentele**']]},
                {'t': 'nota', 'titlu': 'Verific:', 'p': ['opinie clară · introducere, cuprins, încheiere · argumente relevante, cu exemple · contraargumente în relație logică cu argumentele · conectori potriviți · încheiere care anulează contraargumentele.']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-18',
        'titlu': 'Recapitulare: textul epic, antiteza, reclama',
        'sub': 'Clasa a VIII-a · Unitatea a IV-a, Lecția 18 · Manual, pp. 136-143 și 160-161 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 2, 3 și 5; recapitularea de la pp. 160-161 („Cele trei adevăruri ale canarului”, din „Cercul mincinoșilor” de Jean-Claude Carrière).',
        'sect': [
            ('1. CUM SE LEAGĂ PLANURILE NARATIVE', [
                {'t': 'tabel', 'cap': ['Procedeul', 'Pe scurt'], 'lat': [0.25, 0.75],
                 'r': [['**înlănțuirea**', 'întâmplările se succed'],
                       ['**alternanța**', 'firele narative alternează'],
                       ['**inserția**', 'o poveste inclusă în alta (povestirea în ramă): naratorul din ramă devine ascultător, un personaj devine narator']]},
            ]),
            ('2. ANTITEZA ȘI CARACTERIZAREA', [
                {'t': 'text', 'p': ['• **Antiteza** alătură termeni opuși: în enunț (*sus – jos*) sau în întreaga operă (planuri, personaje, acțiuni).',
                                    '• **Caracterizarea**: trăsături fizice și morale, reieșite **direct** (narator, alte personaje, autocaracterizare) sau **indirect** (fapte, limbaj, gesturi), fiecare cu o citare.']},
            ]),
            ('3. RECLAMA ȘI PERSUASIUNEA', [
                {'t': 'text', 'p': ['• **Textul multimodal** combină cuvinte, imagini, sunete, culori; **reclama** pune un produs într-o lumină pozitivă.',
                                    '• Principiile: atenția, înțelegerea, încrederea, marca, acțiunea, efectul.',
                                    '• Convingem prin argumente și dovezi, dar și prin **nonverbal** (gesturi, mimică, privire) și **paraverbal** (volum, ritm, pauze, intonație).']},
            ]),
            ('4. LECTURA PREDICTIVĂ', [
                {'t': 'nota', 'p': ['Citesc pe fragmente; înaintea fiecăruia notez **ce anticipez** și **pe ce îmi bazez predicția**; după lectură verific dacă **s-a confirmat**.']},
            ]),
        ],
    },
    # ---------------- Lecția 19 ----------------
    {
        'cale': 'clasa-8/unitatea-4/lectia-19',
        'titlu': 'Recapitulare: circumstanțialele de loc, de timp, de mod',
        'sub': 'Clasa a VIII-a · Unitatea a IV-a, Lecția 19 · Manual, pp. 149-157 și 160-161 · notițe pentru caiet',
        'sursa': 'Sursa: Manual Art 8, rubricile Repere din lecțiile 8-13 (pp. 149-157); cerințele de limbă din recapitularea de la p. 161.',
        'sect': [
            ('1. PARTEA DE PROPOZIȚIE ȘI PROPOZIȚIA', [
                {'t': 'tabel', 'cap': ['', 'De loc', 'De timp', 'De mod'], 'lat': [0.19, 0.27, 0.27, 0.27],
                 'r': [['întrebările', '*unde? de unde? până unde? încotro?*', '*când? de când? până când?*', '*cum? în ce fel? în ce mod?*'],
                       ['circumstanțialul', '*la han, departe, spre tine*', '*după examen, ieri, până a sosi tu*', '*cu atenție, repede, alergând*'],
                       ['propoziția: elemente de relație', '*unde, încotro, dincotro, oriunde*; pronume și adjective relative sau nehotărâte cu prepoziție', '*când, oricând, până, cum, cât*; *după ce, îndată ce, în timp ce, ori de câte ori*', '*cum, cât, oricum, precum*; *fără să, după cum, ca și cum, de parcă*'],
                       ['corelative în regentă', '*acolo, de acolo, pe acolo*', '*atunci, de atunci, abia, imediat, îndată*', '*așa, astfel, întocmai*']]},
            ]),
            ('2. VIRGULA', [
                {'t': 'text', 'p': ['• **După regentă**: de obicei **fără** virgulă.',
                                    '• **Intercalată**: izolată prin virgule.',
                                    '• **Cu un corelativ** în regentă: **mereu cu virgulă**.',
                                    '• **Înaintea regentei**: circumstanțiala de loc și cea de mod se despart, de regulă, prin virgulă.']},
            ]),
            ('3. ACELAȘI CUVÂNT, FUNCȚII DIFERITE', [
                {'t': 'text', 'p': ['Adverbul relativ **unde** sau **cum** poate introduce propoziții diferite. Pun **întrebarea** de la regent la subordonată:']},
                {'t': 'tabel', 'cap': ['Întrebarea', 'Propoziția'], 'lat': [0.3, 0.7],
                 'r': [['*unde? când? cum?* (după verb)', 'circumstanțială de loc, de timp, de mod'],
                       ['*care? ce fel de?* (după substantiv)', 'atributivă'],
                       ['*ce?* (după verb)', 'completivă directă']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['*expansiune*: *la întoarcerea de la Vodă* → *după ce s-a întors de la Vodă*.']},
            ]),
        ],
    },
]
