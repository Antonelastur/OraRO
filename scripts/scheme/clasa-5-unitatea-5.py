# Scheme-notițe, clasa a V-a, Unitatea V „Călătoresc prin basme”. Conținutul
# vine din rubricile Repere ale Manualului Art 5, pp. 144-165; exemplele noi
# sunt anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-5.py

SUB = 'Clasa a V-a · Unitatea V, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 1 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-1',
        'titlu': 'Textul narativ literar. Zâna Munților, basm cules de Petre Ispirescu',
        'sub': SUB.format(n=1, pp='pp. 140-143'),
        'sursa': 'Sursa: Manual Art 5, pp. 140-143 (caseta autorului, textul, notele de subsol, „Impresii după prima lectură”, p. 143). Lecția nu are rubrica Repere. Întrebările din fișă sunt create pentru aceste notițe, răspunsurile vin din text.',
        'sect': [
            ('1. AUTORUL ȘI CULEGEREA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'AUTORUL', 'col': 'm',
                     'p': ['**Petre Ispirescu** (1830-1887)',
                           'A fost tipograf de meserie, dar este cunoscut pentru activitatea de culegător de basme și de legende populare românești.']},
                    {'titlu': 'CULEGEREA', 'col': 't',
                     'p': ['*Legendele sau basmele românilor* (1872)',
                           'Ispirescu a adunat creațiile de la părinți și de la angajații tatălui său, frizer de meserie, și le-a publicat în această culegere. Printre ele: *Prâslea cel voinic și merele de aur*, *Pasărea măiastră*, *Zâna Munților*.']},
                ]},
            ]),
            ('2. FIȘA TEXTULUI', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Ce găsesc în text'], 'lat': [0.27, 0.73],
                 'r': [['Cine sunt personajele principale?', '**Fiul de împărat**, vânător meșter și viteaz, și **Zâna Munților**, care apare ca turturică, ca găinăreasă și ca fată necunoscută la nunți.'],
                       ['Cine mai apare?', 'Împăratul, *„judecător drept și iubitor de pace”*, împărăteasa, dascălii și filozofii, vătaful, credincioșii împăratului, vracii și cititorii de stele.'],
                       ['Unde și când se petrece?', 'Locul și timpul nu sunt precizate. Apar curtea împărătească, pădurea în care fiul de împărat vânează și nunțile din alte împărății.'],
                       ['Ce obstacole apar?', 'Zâna nu i se poate arăta fiului de împărat așa cum este: *„de va lua de bărbat un om de pe pământ, toată puterea ei piere”*. La nunți, fata necunoscută piere de lângă el, iar fiul de împărat se îmbolnăvește.'],
                       ['Cum o recunoaște pe zână?', 'Împăratul pune smoală pe drum, iar fata își pierde un condur. Se potrivește numai piciorului găinăresei, iar fiul de împărat strigă: *„Asta este, mamă.”*'],
                       ['Cum se încheie?', 'Zâna spune: *„mă lepăd de puterea mea cea măiastră”*. Fiul de împărat se face sănătos, ei fac nuntă și rămân în scaunul împărăției.'],
                       ['De la cine a auzit Ispirescu basmul?', 'De la o calfă de bărbier, în copilăria lui.']]},
            ]),
            ('3. CUVINTE NOI DIN NOTELE DE SUBSOL', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Explicația din manual'], 'lat': [0.34, 0.66],
                 'r': [['*filozof* (s. m., pop.)', 'aici, om învățat, priceput în toate; astrolog'],
                       ['*procopsit* (adj., pop.)', 'învățat, instruit, priceput'],
                       ['*galeș* (adj.)', 'melancolic, trist'],
                       ['*a tânji* (vb.)', 'a se afla într-o stare de slăbiciune fizică, a fi bolnăvicios; a lâncezi'],
                       ['*smerenie* (s. f.)', 'modestie, bună-cuviință, respect'],
                       ['*vătaf* (s. m.)', '(în Evul Mediu, în Țara Românească și Moldova) supraveghetor al slugilor de la curtea unui boier sau de la o mănăstire; logofăt'],
                       ['*nălucă* (s. f.)', 'apariție fantastică, imaginară; arătare, fantomă, vedenie, nălucire'],
                       ['*a prinde / a dobândi lipici de cineva* (expr.)', 'a se îndrăgosti de cineva'],
                       ['*condur* (s. m., înv.)', 'pantof femeiesc cu toc înalt, împodobit adesea cu broderii'],
                       ['*calfă* (s. f.)', 'persoană tânără care, după o perioadă de ucenicie, lucra un timp la patronul său']]},
                {'t': 'text', 'p': ['Un cuvânt nou, ales de mine: ………………………………  Explicația lui: ……………………………………………']},
            ]),
            ('4. IMPRESII DUPĂ PRIMA LECTURĂ', [
                {'t': 'text', 'p': ['Înainte de lectură am notat trei lucruri care s-ar putea întâmpla (*Pentru început*, ex. 2, p. 140). Acum răspund la cele trei întrebări din manual (p. 143).']},
                {'t': 'tabel', 'cap': ['Întrebarea din manual', 'Răspunsul meu'], 'lat': [0.5, 0.5],
                 'r': [['**1.** S-a confirmat ceea ce ai anticipat în legătură cu basmul?', '………………………………'],
                       ['**2.** La ce imagini sau sunete te-a făcut să te gândești textul? Trimit acestea la lumea reală?', '………………………………'],
                       ['**3.** Ce personaj ți-a plăcut mai mult? Seamănă cu alte personaje din literatură sau din filme?', '………………………………']]},
            ]),
        ],
    },
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-2',
        'titlu': 'Basmul. Acțiunea, timpul și spațiul',
        'sub': SUB.format(n=2, pp='pp. 144-145'),
        'sursa': 'Sursa: Manual Art 5, pp. 144-145, rubricile Repere și tabelul spațiilor; textul de bază este „Zâna Munților”, cules de Petre Ispirescu.',
        'sect': [
            ('1. BASMUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Basmele** înfățișează o **lume ireală**, cu întâmplări **supranaturale**, creaturi fabuloase, oameni cu puteri supranaturale sau animale cu însușiri omenești.']},
                {'t': 'text', 'p': ['Între povestitor și ascultători există o **convenție**: în basm se poate petrece orice, oricât de surprinzător.']},
            ]),
            ('2. ACȚIUNEA ÎN BASM', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'situația inițială', 'col': 't', 'p': ['o stare de **echilibru**, modificată de un eveniment sau de o împrejurare']},
                    {'titlu': 'restabilirea echilibrului', 'col': 'm', 'p': ['de obicei, prin **trecerea unor probe**']},
                    {'titlu': 'situația finală', 'col': 'a', 'p': ['echilibrul e restabilit, iar eroul e **răsplătit**']},
                ]},
                {'t': 'text', 'p': ['Basmul transmite **încrederea** într-o lume bună și frumoasă.']},
            ]),
            ('3. TIMPUL ȘI SPAȚIUL', [
                {'t': 'text', 'p': ['Cadrul întâmplărilor este **vag, imprecis**: evenimentele nu pot fi așezate în timp și spațiu. Asta anunță chiar **formula de început**.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'formula de început', 'col': 't', 'p': ['*A fost odată ca niciodată; că de n-ar fi, nu s-ar mai povesti…*']},
                    {'titlu': 'formula de încheiere', 'col': 'm', 'p': ['*Iar eu încălecai p-o șea și vă spusei dumneavoastră așa.*']},
                ]},
                {'t': 'tabel', 'cap': ['Spațiul din basm', 'Ce poate însemna'], 'lat': [0.3, 0.7],
                 'r': [['palatul', 'statutul social înalt al familiei împărătești'],
                       ['cotețele găinilor', 'statutul de jos al slujnicei; proba pe care o trece zâna'],
                       ['pădurea', 'loc al pericolelor sau al întâlnirii care schimbă viața; trecere spre lumea supranaturală'],
                       ['munții', 'tărâmul zânei, un spațiu protector'],
                       ['palatele nunților', 'sărbători ale iubirii, unde au loc adevăratele întâlniri'],
                       ['satul', 'lumea oamenilor obișnuiți']]},
            ]),
            ('4. HARTA MENTALĂ', [
                {'t': 'text', 'p': ['**Harta mentală** este o schemă care dă o imagine de ansamblu asupra unei teme, cu cuvinte, idei, desene.',
                                    'Pentru un basm notez: **situația de la început**, **evenimentul care strică echilibrul**, **peripețiile** personajelor și **situația de la final**.']},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-3',
        'titlu': 'Personajele basmului',
        'sub': SUB.format(n=3, pp='pp. 146-147'),
        'sursa': 'Sursa: Manual Art 5, pp. 146-147, rubrica Repere; citatele sunt din „Zâna Munților”.',
        'sect': [
            ('1. CINE TRĂIEȘTE ÎN BASME', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'oameni cu calități supranaturale', 'col': 't', 'p': ['puteri excepționale, capacitatea de a se transforma în altceva']},
                    {'titlu': 'ființe fabuloase', 'col': 'm', 'p': ['zâne, zmei, căpcăuni, animale năzdrăvane']},
                ]},
            ]),
            ('2. EROUL DIN BASM', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Eroul** este în slujba **binelui** și a **dreptății** (erou pozitiv).']},
                {'t': 'text', 'p': ['• Are un **scop**: să îndeplinească o misiune, să-i înfrângă pe cei răi (personajele negative), să-și găsească dragostea sau norocul.',
                                    '• Ca să reușească, trebuie să treacă **probe**.']},
            ]),
            ('3. PIRAMIDA PERSONAJELOR', [
                {'t': 'carduri', 'n': 3, 'c': [
                    {'titlu': 'principale', 'col': 't', 'p': ['în centrul acțiunii']},
                    {'titlu': 'secundare', 'col': 'm', 'p': ['ajută sau încurcă acțiunea']},
                    {'titlu': 'episodice', 'col': 'a', 'p': ['apar o singură dată sau de câteva ori']},
                ]},
            ]),
            ('4. DIN FAPTE LA TRĂSĂTURI', [
                {'t': 'text', 'p': ['Deduc trăsăturile din ce fac și din ce spun personajele. În caiet notez trăsătura lângă pasaj:']},
                {'t': 'tabel', 'cap': ['Pasajul', 'Trăsătura'], 'lat': [0.72, 0.28],
                 'r': [['*„Ajunsese să nu mai aibă dascălii ce să-i dea să învețe.”* (fiul de împărat)', '…'],
                       ['*„Toată curtea împărătească lua în nume de bine pe această găinăreasă, pentru vrednicia și curățenia ei.”* (zâna)', '…']]},
                {'t': 'nota', 'titlu': 'Comparații utile:', 'p': ['fiul împăratului și **Făt-Frumos**; Zâna Munților și **Cenușăreasa**, în diagrame Venn: asemănări la mijloc, deosebiri pe laturi.']},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-4',
        'titlu': 'Semnificațiile textului',
        'sub': SUB.format(n=4, pp='p. 148'),
        'sursa': 'Sursa: Manual Art 5, p. 148 (Interpretare, ex. 1-4, și Autoevaluare L1-L4); definiția situației finale este din Repere, p. 144. Lecția nu are rubrica Repere. Rândurile libere sunt pentru răspunsurile elevilor.',
        'sect': [
            ('1. TEMA BASMULUI', [
                {'t': 'nota', 'titlu': 'Din manual (ex. 3):', 'p': ['Tema basmului *Zâna Munților* este **iubirea dintre două ființe aparținând unor lumi diferite**: lumea oamenilor și lumea ființelor fabuloase.']},
                {'t': 'text', 'p': ['Manualul observă: *„În acest basm nu există o aventură eroică destinată să salveze lumea și să pedepsească răufăcătorii.”* Întrebarea lui (ex. 2): *Care este ideea centrală în jurul căreia se construiește povestea?*',
                                    'Ideea centrală, cu cuvintele mele: ……………………………………………………………………………',
                                    '……………………………………………………………………………………………………………………']},
            ]),
            ('2. CUM SE ÎNCHEIE UN BASM', [
                {'t': 'nota', 'titlu': 'Din Repere, Lecția 2 (p. 144):', 'p': ['Situația finală **restabilește echilibrul** și **aduce răsplătirea eroului**.']},
                {'t': 'text', 'p': ['Întrebarea din manual (ex. 1): *Finalul textului Zâna Munților este, din acest punct de vedere, obișnuit sau neobișnuit? Motivează-ți răspunsul.*',
                                    'Finalul este ………………………………, pentru că ………………………………………………………………']},
            ]),
            ('3. POVESTEA DE DRAGOSTE ÎN PATRU SECVENȚE', [
                {'t': 'text', 'p': ['La ex. 4, pe grupe, urmărim stările sufletești ale personajelor în cele patru secvențe. Pentru fiecare alegem un **titlu** și desenăm un **simbol al iubirii**.']},
                {'t': 'tabel', 'cap': ['Secvența', 'Stările personajelor', 'Titlul ales'], 'lat': [0.4, 0.3, 0.3],
                 'r': [['**a** întâlnirea fiului de împărat cu turturica din pădure', '………………', '………………'],
                       ['**b** întâlnirea fiului de împărat cu găinăreasa', '………………', '………………'],
                       ['**c** întâlnirea lor la cele trei nunți împărătești', '………………', '………………'],
                       ['**d** nunta celor două personaje', '………………', '………………']]},
            ]),
            ('4. AUTOEVALUARE L1-L4', [
                {'t': 'text', 'p': ['Completez, în caiet, următoarele afirmații:']},
                {'t': 'text', 'p': ['• Din ceea ce am învățat, cel mai important mi se pare … .',
                                    '• Cel mai mult mi-a plăcut activitatea … .',
                                    '• Cel mai dificil mi s-a părut … .']},
            ]),
        ],
    },
    # ---------------- Lecția 5 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-5',
        'titlu': 'Text auxiliar. Aladin și lampa fermecată, din O mie și una de nopți',
        'sub': SUB.format(n=5, pp='pp. 149-150'),
        'sursa': 'Sursa: Manual Art 5, pp. 149-150 (caseta „Text auxiliar”, fragmentul, notele de subsol, „Muntele narațiunii”, ex. 1). Lecția nu are rubrica Repere. Întrebările din fișa fragmentului sunt create pentru aceste notițe, răspunsurile vin din text.',
        'sect': [
            ('1. TEXTUL AUXILIAR', [
                {'t': 'tabel', 'cap': ['Ce rețin', 'Din caseta de la p. 149'], 'lat': [0.27, 0.73],
                 'r': [['folclor', 'Fiecare popor sau comunitate a imaginat propriile basme și legende. Ele fac parte din ceea ce specialiștii numesc **folclor**.'],
                       ['*O mie și una de nopți*', 'una dintre cele mai vechi culegeri de basme, care vine din lumea orientală'],
                       ['fragmentul din manual', 'istorisit de **Eusebiu Camilar**'],
                       ['Șeherezada', 'povestește timp de o mie și una de nopți, captează interesul sultanului **Șahriar** și își salvează viața'],
                       ['Aladin', 'un băiat sărac și cam pierde-vară, căutat de un vrăjitor african care are nevoie de ajutorul lui pentru a obține o lampă în stare să-l facă atotputernic']]},
            ]),
            ('2. FIȘA FRAGMENTULUI', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Caut în', 'Ce găsesc în text'], 'lat': [0.44, 0.14, 0.42],
                 'r': [['Cine sunt personajele?', 'pp. 149-150', '……………………………'],
                       ['Ce obiecte fermecate apar?', 'p. 149', '……………………………'],
                       ['Cât timp rămâne Aladin în peșteră?', 'p. 149', '……………………………'],
                       ['Ce face vrăjitorul când Aladin nu-i dă lampa?', 'p. 149', '……………………………'],
                       ['Ce se întâmplă acasă, când mama șterge lampa?', 'pp. 149-150', '……………………………'],
                       ['Cum se schimbă Aladin la sfârșitul fragmentului?', 'p. 150', '……………………………']]},
            ]),
            ('3. MUNTELE NARAȚIUNII', [
                {'t': 'text', 'p': ['Desenez în caiet „muntele narațiunii” și plasez răspunsurile mele la întrebări, urmărind desfășurarea poveștii (ex. 1, p. 150). Urc de la început spre vârf, apoi cobor.']},
                {'t': 'tabel', 'cap': ['Nr.', 'Întrebarea de pe munte', 'Răspunsul meu'], 'lat': [0.08, 0.5, 0.42], 'al': ['c', 'l', 'l'],
                 'r': [['1', 'Ce fac personajele la începutul poveștii?', '……………………………'],
                       ['2', 'Ce doresc personajele?', '……………………………'],
                       ['3', 'Care sunt scopurile lor și problemele cu care se confruntă?', '……………………………'],
                       ['4', 'Care este întâmplarea care înrăutățește situația? *(vârful muntelui)*', '……………………………'],
                       ['5', 'Ce alegeri fac în acest nou context personajele?', '……………………………'],
                       ['6', 'Cum se încheie povestea?', '……………………………']]},
            ]),
            ('4. CUVINTE NOI DIN NOTELE DE SUBSOL', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Explicația din manual'], 'lat': [0.3, 0.7],
                 'r': [['*Mahomed*', 'în arabă, Muhammad, „preaslăvitul”, „cel demn de laudă”, 570-632 d.H.; întemeietorul religiei islamice, considerat de către musulmani profet al lui Allah, care i-a transmis prin îngerul Gabriel învățăturile din Coran'],
                       ['*cutremur* (s. n.)', 'aici, cu glas care provoacă spaima'],
                       ['*belciug* (s. n.)', 'verigă de metal care servește la fixarea unui lacăt, a unui lanț etc.'],
                       ['*zăbavă* (s. f.)', 'aici, răbdare'],
                       ['*petică* (s. f., reg.)', 'cârpă, zdreanță'],
                       ['*sofa* (s. f.)', 'divan îngust, de obicei cu un căpătâi mai ridicat'],
                       ['*a bate colburile* (expr., reg.)', 'a bate drumurile, a umbla de colo până colo (fără nicio treabă sau vreun scop)']]},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-6',
        'titlu': 'Diversitate culturală și lingvistică',
        'sub': SUB.format(n=6, pp='pp. 151-152'),
        'sursa': 'Sursa: Manual Art 5, pp. 151-152, cele trei paragrafe din rubrica Repere; fișa „Nastratin” este din Explorare, ex. 1 (p. 151) și din Repere (p. 152); „Cuvinte călătoare” sunt din Aplicații, ex. 1 (p. 152).',
        'sect': [
            ('1. DIVERSITATEA CULTURALĂ', [
                {'t': 'text', 'p': ['De-a lungul timpului, orice întâlnire între popoare (vecinătatea, comerțul, migrația, explorarea de noi teritorii, războaiele) a dus nu numai la schimburi de bunuri materiale, ci și la schimburi de idei și de valori. **Diversitatea culturală** se referă la existența într-o societate a mai multor culturi, care se influențează reciproc.']},
            ]),
            ('2. NASTRATIN HOGEA', [
                {'t': 'text', 'p': ['Un exemplu reprezentativ pentru schimburile culturale care se produc este personajul Nastratin Hogea, comun mai multor culturi din Balcani (turcă, greacă, macedoneană, sârbă, bulgară, albaneză, română). La noi a devenit cunoscut prin culegerea lui Anton Pann, *Năzdrăvăniile lui Nastratin Hogea*.']},
                {'t': 'tabel', 'cap': ['Fișa „Nastratin”', 'Ce rețin'], 'lat': [0.3, 0.7],
                 'r': [['cine este', 'un învățat din Turcia secolului al XIII-lea, despre care circulă sute de povestiri și anecdote (p. 151)'],
                       ['povestirea din manual', '*Făgăduiala ținută* de Jean-Claude Carrière, din volumul *Cercul mincinoșilor. Povești filozofice din toată lumea* (p. 151)'],
                       ['tâlcul povestirii, într-o propoziție', '……………………………………………………………']]},
            ]),
            ('3. DIVERSITATEA LINGVISTICĂ', [
                {'t': 'text', 'p': ['Diversitatea culturală este asociată, de obicei, și cu o **diversitate lingvistică**: împreună cu obiectele și ideile care se transmit de la un popor la altul, se transmit și cuvintele care le denumesc.']},
            ]),
            ('4. CUVINTE CĂLĂTOARE', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Limba de la care vine', 'Călătoria lui'], 'lat': [0.17, 0.33, 0.5],
                 'r': [['*marfă*', 'maghiară, *marha*', 'acolo înseamnă „vită, vite”; la noi înseamnă „produs comercial”'],
                       ['*franzelă*', 'greacă, *frantzóla*', 'în greacă înseamnă „pâine franțuzească”; în română înseamnă doar o pâine albă, lunguiață'],
                       ['*papagal*', 'greacă, *papagállos*, din arabă, *babbaghâ*', 'în arabă însemna sunetul scos de pasărea respectivă'],
                       ['*crai*', 'bulgară *kralĭ*, sârbă *kralj*, maghiară *király*, cu sensul „rege”', 'numele împăratului Carol cel Mare (742-814), împrumutat de slavi din germanul *Karl*']]},
                {'t': 'text', 'p': ['Călătoria care m-a surprins cel mai mult: ……………………………………………………………']},
            ]),
        ],
    },
    # ---------------- Lecția 7 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-7',
        'titlu': 'Proiect de grup. Itinerar multicultural (anunțare)',
        'sub': SUB.format(n=7, pp='pp. 153-154'),
        'sursa': 'Sursa: Manual Art 5, pp. 153-154 (sarcina de lucru, fragmentele din „Basmele omului” de Vladimir Colin, pașii, modelul fișei de lectură și grila de autoevaluare). Lecția nu are rubrica Repere.',
        'sect': [
            ('1. SARCINA DE LUCRU', [
                {'t': 'nota', 'titlu': 'Itinerar multicultural (p. 153)', 'p': ['Alcătuim **cinci grupe**. Fiecare grupă va prezenta un basm aparținând unei minorități etnice din România. Dacă în zona în care trăim există și alte etnii, o a șasea grupă va alege și va prezenta un basm specific acesteia.']},
                {'t': 'text', 'p': ['Prin tragere la sorți, fiecărei grupe i se repartizează unul dintre fragmentele din volumul *Basmele omului* de Vladimir Colin:']},
                {'t': 'tabel', 'cap': ['Fragmentul', 'Comunitatea', 'Pagina'], 'lat': [0.5, 0.3, 0.2], 'al': ['l', 'l', 'c'],
                 'r': [['*Buruiana neagră*', 'basm maghiar', '153'],
                       ['*Hans și cele patru castele*', 'basm săsesc', '153'],
                       ['*Povestea cântecului*', 'basm ucrainean', '153'],
                       ['*Fierarul năzdrăvan*', 'basm rom', '153'],
                       ['*Povestea fericirii*', 'basm tătăresc', '154']]},
                {'t': 'text', 'p': ['Fragmentul grupei mele: ………………………………………']},
            ]),
            ('2. CELE TREI SĂPTĂMÂNI', [
                {'t': 'text', 'p': ['**Timp de realizare:** trei săptămâni (p. 154).']},
                {'t': 'tabel', 'cap': ['Săptămâna', 'Ce facem'], 'lat': [0.2, 0.8],
                 'r': [['**I**', '**1.** Citim și ascultăm, din manualul digital, fragmentul repartizat și realizăm o fișă de lectură după modelul de mai jos. Căutăm la bibliotecă volumul *Basmele omului* de Vladimir Colin și citim basmul în întregime.'],
                       ['**a II-a**', '**2.** Căutăm informații, cu ajutorul internetului, despre specificul comunității căreia îi aparține basmul: regiunea în care trăiește, numărul aproximativ al persoanelor care fac parte din comunitate, personalități, sărbători, religie, relații familiale, obiceiuri, tradiții, port popular, mâncăruri, formule de salut etc.',],
                       ['', '**3.** Stabilim de comun acord cum realizăm prezentarea și rolul fiecăruia în grupă. Putem folosi obiecte tradiționale, vestimentare sau de uz casnic, fotografii sau fragmente muzicale pentru a ilustra specificul etnic al basmului. Prezentăm proiectul în ultimele două ore de limba și literatura română din săptămâna a II-a.'],
                       ['**a III-a**', '**4.** Reflectăm asupra rezultatelor proiectului: ce elemente comune am descoperit în basmele prezentate (teme, personaje, succesiunea evenimentelor, valori promovate, formule tradiționale etc.), care dintre basme ne-a plăcut mai mult și ce informații noi am aflat despre comunitățile minoritare.']]},
            ]),
            ('3. MODELUL FIȘEI DE LECTURĂ', [
                {'t': 'text', 'p': ['Realizez fișa după modelul din manual (p. 154), pentru fragmentul repartizat grupei mele:']},
                {'t': 'tabel', 'cap': ['Rubrica', 'Completez'], 'lat': [0.5, 0.5],
                 'r': [['**1.** Titlul basmului', '………………………………'],
                       ['**2.** Comunitatea etnică', '………………………………'],
                       ['**3.** Cadrul spațio-temporal (unde și când se petrece acțiunea):', '………………………………'],
                       ['**4.** Personajele: **a** Cine sunt personajele?', '………………………………'],
                       ['**b** Ce trăsături au?', '………………………………'],
                       ['**5.** Specificul etnic (nume de personaje, meserii, obiecte; cuvinte și expresii)', '………………………………'],
                       ['**6.** Elemente comune cu alte basme: **a** valori pe care le promovează: binele, adevărul, cinstea, dragostea, prietenia, loialitatea etc.', '………………………………'],
                       ['**b** obiecte, întâmplări și personaje prin care seamănă cu alte basme cunoscute', '………………………………']]},
            ]),
            ('4. GRILA DE AUTOEVALUARE', [
                {'t': 'text', 'p': ['La final de proiect, mă pot autoevalua pe baza criteriilor din tabel (în manual, p. 154, fiecare criteriu are trei coloane cu fețe).']},
                {'t': 'carduri', 'n': 1, 'c': [
                    {'titlu': 'Documentarea', 'col': 't',
                     'p': ['• Am folosit diverse surse și strategii pentru a mă documenta.',
                           '• Am identificat informațiile și ideile relevante, sintetizând ceea ce am citit.']},
                    {'titlu': 'Munca în echipă', 'col': 'm',
                     'p': ['• M-am implicat în planificarea sarcinilor și am respectat termenele-limită.',
                           '• Am colaborat cu restul echipei și am ținut cont de părerea tuturor.',
                           '• Am propus soluții pentru problemele ivite pe parcurs.']},
                    {'titlu': 'Prezentarea orală', 'col': 'a',
                     'p': ['• Am prezentat oral, pe baza unor repere date, informații corecte, pornind de la textul citit, urmând un plan logic.',
                           '• Am vorbit clar, cursiv, corect.',
                           '• Am combinat elementele paraverbale și nonverbale ale comunicării cu cele verbale.',
                           '• Am folosit în prezentare recuzita adecvată.']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 8 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-8',
        'titlu': 'Elemente paraverbale și nonverbale în prezentarea orală',
        'sub': SUB.format(n=8, pp='pp. 155-156'),
        'sursa': 'Sursa: Manual Art 5, pp. 155-156, rubrica Repere și autoevaluarea.',
        'sect': [
            ('1. CONȚINUTUL ȘI MODUL DE PREZENTARE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Într-o prezentare orală, **ce** spui și **cum** spui sunt la fel de importante.']},
                {'t': 'text', 'p': ['Folosite potrivit, elementele paraverbale și nonverbale îi ajută pe ascultători să înțeleagă tema.']},
            ]),
            ('2. CE FOLOSESC', [
                {'t': 'coloane', 'c': [
                    {'titlu': 'PARAVERBALE (vocea)', 'b': [
                        {'t': 'text', 'p': ['• **intensitatea vocii**: potrivită publicului și sălii, nici prea tare, nici prea încet;',
                                            '• **intonația** subliniază ce e important;',
                                            '• **ritmul** e mai rar decât într-o conversație, ca ascultătorii să aibă timp să înțeleagă;',
                                            '• **pauza** poate scoate în evidență o idee.']},
                    ]},
                    {'titlu': 'NONVERBALE (corpul)', 'b': [
                        {'t': 'text', 'p': ['• **mimica**: deschidere față de public, un chip zâmbitor;',
                                            '• **gesturile**: măsurate și firești, întăresc spusele;',
                                            '• **poziția corpului**: sigură, dreaptă, dar nu rigidă;',
                                            '• **contactul vizual** arată respect; nu privesc doar o persoană.']},
                    ]},
                ]},
            ]),
            ('3. MĂ AUTOEVALUEZ DUPĂ PREZENTARE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'conținutul', 'col': 't', 'p': ['informații clare, bine alese · un plan · explicații la întrebări · legătura cu ce am învățat · opinii motivate · interesul colegilor']},
                    {'titlu': 'prezentarea', 'col': 'm', 'p': ['intonație potrivită, fără blocaje, în timp · contact vizual · corp sigur · ritm potrivit · gesturi naturale · fără să citesc planul · entuziasm']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-9',
        'titlu': 'Acte de limbaj: a promite, a declara',
        'sub': SUB.format(n=9, pp='p. 157'),
        'sursa': 'Sursa: Manual Art 5, p. 157, rubrica Repere și exemplele din Explorare și Aplicații.',
        'sect': [
            ('1. A PROMITE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**A promite** este un act de limbaj prin care vorbitorul **se angajează** să acționeze într-un anumit fel.']},
                {'t': 'text', 'p': ['*Promit să te ajut la teme.* · *Îți promit că vin la timp.*']},
                {'t': 'atentie', 'p': ['Nu fac **promisiuni nerealiste**. *„A promite luna de pe cer”* sau *„marea cu sarea”* înseamnă a promite lucruri imposibile.']},
            ]),
            ('2. A DECLARA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**A declara** este un act de limbaj prin care vorbitorul **anunță**, **recunoaște** sau **își asumă** ceva.']},
                {'t': 'text', 'p': ['Se folosește mai ales în limbajul **oficial**: administrativ, politic, publicistic, juridic.']},
                {'t': 'tabel', 'cap': ['Declarația', 'Unde o auzim'], 'lat': [0.5, 0.5],
                 'r': [['*„Vă declar căsătoriți!”*', 'la cununie'],
                       ['*„Declar ședința deschisă.”*', 'la începutul unei ședințe'],
                       ['*„Declar că nu am fost de față la accident.”*', 'în fața unei autorități']]},
                {'t': 'nota', 'titlu': 'O declarație din basm:', 'p': ['*„Iată, pentru dragostea ta, mă lepăd de puterea mea cea măiastră, numai și tu să mă iubești, precum te iubesc și eu.”* (Zâna Munților): o declarație de intenție și o declarație de dragoste.']},
            ]),
            ('3. ACTE DE LIMBAJ ÎNVĂȚATE', [
                {'t': 'text', 'p': ['a întreba · a solicita · a felicita · **a promite** · **a declara**']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-10',
        'titlu': 'Numeralul. Numeralul cardinal',
        'sub': SUB.format(n=10, pp='pp. 158-159'),
        'sursa': 'Sursa: Manual Art 5, pp. 158-159, rubricile Repere.' + CREATE,
        'sect': [
            ('1. NUMERALUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Numeralul** este partea de vorbire care exprimă un **număr** sau **ordinea** obiectelor prin numărare.']},
                {'t': 'text', 'p': ['**Numeralul cardinal** exprimă un număr: *trei luni, patruzeci de vase*.']},
            ]),
            ('2. SIMPLE ȘI COMPUSE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'p': ['*unu, doi, trei, patru, cinci, șase, șapte, opt, nouă, zece*']},
                    {'titlu': 'compuse', 'col': 'm', 'p': ['*unsprezece, doisprezece, patruzeci, o sută cinci, două mii șaptesprezece*']},
                ]},
                {'t': 'text', 'p': ['*unu/un* și *doi* își schimbă forma după gen: *un băiat / o fată*, *doi băieți / două fete*.']},
            ]),
            ('3. „UN” ȘI „O”: CE SUNT?', [
                {'t': 'text', 'p': ['*Un* și *o* sunt **numerale cardinale** atunci când:']},
                {'t': 'text', 'p': ['• sunt în legătură cu alte numerale: *Adu-mi* **o** *pungă cu aur și* **două** *cu nestemate!*',
                                    '• sunt însoțite de *singur, singură, numai, doar*: **Un** *singur scop avea vrăjitorul.*',
                                    '• exprimă o unitate de măsură: *Duhul s-a ivit după* **o** *secundă.*']},
                {'t': 'tabel', 'cap': ['Propoziția', '*o* este'], 'lat': [0.6, 0.4],
                 'r': [['*Am cumpărat* **o** *carte de povești.*', 'articol nehotărât'],
                       ['*Am* **o** *singură carte de povești.*', 'numeral cardinal'],
                       ['**O** *citesc în fiecare seară.*', 'pronume personal']]},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-11',
        'titlu': 'Numeralul ordinal. Numeralul, aspecte normative',
        'sub': SUB.format(n=11, pp='pp. 160-161'),
        'sursa': 'Sursa: Manual Art 5, pp. 160-161, rubricile Repere.' + CREATE,
        'sect': [
            ('1. NUMERALUL ORDINAL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Numeralul ordinal** arată **ordinea** obiectelor prin numărare.']},
                {'t': 'tabel', 'cap': ['Genul', 'Forma', 'Din ce e alcătuit'], 'lat': [0.3, 0.25, 0.45],
                 'r': [['masculin și neutru', '*al doilea*', '*al* + *doi* + *-le-* + *-a*'],
                       ['feminin', '*a doua*', '*a* + *doua*']]},
                {'t': 'text', 'p': ['Seria începe cu *întâi (întâiul, întâia)* și *primul (prima)*, care sunt **sinonime**: *Întâia noapte a trecut repede. = Prima noapte a trecut repede.*']},
            ]),
            ('2. REGULI DE SCRIERE ȘI DE ACORD', [
                {'t': 'tabel', 'cap': ['Regula', 'Exemplu'], 'lat': [0.55, 0.45],
                 'r': [['numeralul „1” are forma *unu*', '*doi crini: unu alb și unu portocaliu*'],
                       ['*doi* și compusele lui se acordă cu substantivul feminin', '*ora două, clasa a douăsprezecea, patruzeci și două de cărți*'],
                       ['după substantiv, la feminin, merg *întâi* și *întâia*', '*clasa întâi / clasa întâia*'],
                       ['17 și 18 se scriu după numeralele din care sunt compuse', '*șaptesprezece, optsprezece*'],
                       ['14, 16 și 60 au forme speciale', '*paisprezece, șaisprezece, șaizeci*'],
                       ['în texte, numerele se scriu cu cifre, cele sub zece în cuvinte', '*Avem 24 de elevi și trei profesori.*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Numeralele ordinale se pot scrie și cu cifre romane: *clasa a V-a*.']},
            ]),
            ('3. ATENȚIE', [
                {'t': 'atentie', 'p': ['*mii* (numeral: *două mii*) / *mi-i* (*mi* + *îi*: *Mi-i dor de bunici*).',
                                       'În vorbirea neîngrijită apar forme greșite: *unșpe, paișpe, douăj’*. În scris folosesc **forma literară**.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-12',
        'titlu': 'Descrierea unei ființe imaginare',
        'sub': SUB.format(n=12, pp='pp. 162-163'),
        'sursa': 'Sursa: Manual Art 5, pp. 162-163, rubrica Repere, pașii și grila; modelul e din „Șifonierul, leul și vrăjitoarea” de C.S. Lewis.',
        'sect': [
            ('1. CE DESCRIU', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Descrierea unei ființe imaginare** prezintă trăsăturile ei **fizice** și **morale** și scoate în evidență caracterul **fabulos**, prin aspecte surprinzătoare, neobișnuite.']},
            ]),
            ('2. PĂRȚILE DE VORBIRE ALE DESCRIERII', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'substantive', 'col': 't', 'p': ['numesc ființa și părțile ei: *picioare, coadă, barbă*']},
                    {'titlu': 'adjective', 'col': 'm', 'p': ['arată trăsăturile: *ascuțită, cârlionțat, lucios*']},
                    {'titlu': 'verbe', 'col': 'a', 'p': ['la indicativ, **prezent** sau **imperfect**: *era, avea, purta*']},
                ]},
            ]),
            ('3. UN MODEL: FAUNUL', [
                {'t': 'tabel', 'cap': ['Partea', 'Trăsătura din text'], 'lat': [0.3, 0.7],
                 'r': [['statura', 'numai puțin mai înalt decât Lucy'],
                       ['trupul', 'de la mijloc în sus bărbat; picioare de țap, cu păr negru, lucios, și copite; coadă'],
                       ['fața', 'ciudată, dar plăcută, cu barbă ascuțită și păr cârlionțat; câte un corn de o parte și de alta a frunții'],
                       ['îmbrăcămintea', 'un fular roșu de lână']]},
            ]),
            ('4. PAȘII', [
                {'t': 'text', 'p': ['1. Inventez o ființă sau aleg una dintr-o carte și îi dau un nume.',
                                    '2. Hotărăsc ce fel de ființă este: înspăimântătoare, blândă și protectoare sau vicleană.',
                                    '3. Fac o schemă: părțile, trăsăturile fizice și morale, puterile, relația cu alții, o concluzie.',
                                    '4. Scriu descrierea, cu introducere, cuprins și încheiere; revizuiesc; rescriu îngrijit, cu titlu și, dacă vreau, un desen.']},
                {'t': 'nota', 'titlu': 'Grila:', 'p': ['descriere fizică și morală · trăsăturile supranaturale · vocabular potrivit · verbe la prezent sau imperfect · text interesant și original · propoziții corecte']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-15',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea V',
        'sub': SUB.format(n=15, pp='pp. 144-163, 164-165'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 2-11 și cerințele recapitulării de la pp. 164-165.',
        'sect': [
            ('1. BASMUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin'], 'lat': [0.3, 0.7],
                 'r': [['lumea basmului', 'ireală, cu întâmplări supranaturale; în basm se poate petrece orice'],
                       ['acțiunea', 'echilibru → un eveniment îl strică → probe → echilibrul revine, eroul e răsplătit'],
                       ['timpul și spațiul', 'vagi, imprecise; formule de început și de încheiere'],
                       ['personajele', 'oameni cu puteri supranaturale și ființe fabuloase; eroul e în slujba binelui']]},
            ]),
            ('2. COMUNICAREA', [
                {'t': 'text', 'p': ['• În prezentarea orală folosesc **paraverbalul** (intensitatea vocii, intonația, ritmul, pauza) și **nonverbalul** (mimica, gesturile, poziția corpului, contactul vizual).',
                                    '• **A promite**: mă angajez să fac ceva. **A declara**: anunț, recunosc sau îmi asum ceva, mai ales oficial.']},
            ]),
            ('3. DESCRIEREA UNEI FIINȚE IMAGINARE', [
                {'t': 'text', 'p': ['trăsături fizice și morale, aspecte fabuloase · substantive, adjective, verbe la prezent sau imperfect · introducere, cuprins, încheiere']},
            ]),
        ],
    },
    # ---------------- Lecția 16 ----------------
    {
        'cale': 'clasa-5/unitatea-5/lectia-16',
        'titlu': 'Recapitulare. Numeralul',
        'sub': SUB.format(n=16, pp='pp. 158-165'),
        'sursa': 'Sursa: Manual Art 5, pp. 158-161, rubricile Repere ale lecțiilor 9-10.' + CREATE,
        'sect': [
            ('1. FELURILE NUMERALULUI', [
                {'t': 'tabel', 'cap': ['Felul', 'Ce exprimă', 'Exemple'], 'lat': [0.25, 0.3, 0.45],
                 'r': [['cardinal simplu', 'un număr', '*trei, zece*'],
                       ['cardinal compus', 'un număr', '*șaptesprezece, douăzeci și opt, o mie*'],
                       ['ordinal', 'ordinea', '*primul, întâiul, al doilea, a doua, al cincilea*']]},
            ]),
            ('2. „UN” ȘI „O”', [
                {'t': 'text', 'p': ['**numerale** când apar cu alte numerale, cu *singur, numai, doar* sau ca unitate de măsură; altfel sunt, de obicei, **articole nehotărâte**; *o* poate fi și **pronume**: *O văd.*']},
            ]),
            ('3. FORME CORECTE', [
                {'t': 'atentie', 'p': ['*optsprezece*, nu *optâsprezece* · *douăsprezece mii*, cu substantiv feminin · *treizeci și una de litere* · *unul din patru copii* · *șaizeci*, nu *șasezeci* · *paisprezece, șaisprezece*']},
            ]),
        ],
    },
]
