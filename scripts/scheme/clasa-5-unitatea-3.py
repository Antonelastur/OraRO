# Scheme-notițe, clasa a V-a, Unitatea III „Pe strada mea”. Conținutul vine
# din rubricile Repere ale Manualului Art 5, pp. 80-105; exemplele noi sunt
# anunțate în subsol. Generare:
# python scripts/scheme_notite.py scripts/scheme/clasa-5-unitatea-3.py

SUB = 'Clasa a V-a · Unitatea III, Lecția {n} · Manual, {pp} · notițe pentru caiet'
CREATE = ' Unele exemple sunt create pentru aceste notițe.'

SCHEME = [
    # ---------------- Lecția 1 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-1',
        'titlu': 'Proiect de grup. În așteptarea Crăciunului',
        'sub': SUB.format(n=1, pp='p. 91'),
        'sursa': 'Sursa: Manual Art 5, p. 91 (sarcina, pașii, sugestiile și criteriile de autoevaluare).',
        'sect': [
            ('1. SARCINA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['În grupe de **4-5 elevi**, pregătim înainte de vacanță un proiect despre **Crăciun**.']},
                {'t': 'text', 'p': ['**Teme posibile:** o scenetă despre nașterea lui Isus; colindele preferate; sărbătorirea Crăciunului în lume; o carte despre Crăciun; povestea lui Moș Crăciun; tradițiile de iarnă din comunitatea noastră; decorațiuni pentru brad; o scrisoare către Moș Crăciun.',
                                    '**Timp:** două săptămâni. **Prezentarea:** 3-5 minute, în ultima oră de română dinaintea vacanței.']},
            ]),
            ('2. PAȘII', [
                {'t': 'tabel', 'cap': ['Săptămâna', 'Ce facem'], 'lat': [0.2, 0.8],
                 'r': [['I', 'Alegem tema și ne documentăm.'],
                       ['II', 'Alegem produsul (scenetă, colinde, poster, PowerPoint, decorațiuni, prezentarea unei cărți, o rețetă), ne împărțim sarcinile și repetăm prezentarea, cu toată recuzita.']]},
            ]),
            ('3. DOCUMENTAREA', [
                {'t': 'text', 'p': ['1. Stabilim sursele: cărți, reviste, internet.',
                                    '2. Fiecare consultă cel puțin o sursă, ia notițe și **notează sursa**.',
                                    '3. Prezentăm în grupă ce am aflat și alegem informațiile pe care le folosim.']},
            ]),
            ('4. CUM MĂ AUTOEVALUEZ', [
                {'t': 'text', 'p': ['• am folosit sursele de informare · • m-am raportat la temă · • am colaborat în echipă și mi-am asumat rolul · • produsul e de calitate · • prezentarea e clară și atractivă']},
            ]),
        ],
    },
    # ---------------- Lecția 2 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-2',
        'titlu': 'Textul descriptiv literar. O stradă cu sentimente de Ana Blandiana',
        'sub': SUB.format(n=2, pp='pp. 80-81'),
        'sursa': 'Sursa: Manual Art 5, pp. 80-81 (caseta autoarei, textul poeziei, notele de subsol, „Pentru început” ex. 1 și 3, „Impresii după prima lectură”). Lecția nu are rubrica Repere, deci notițele nu conțin definiții. Tabelele de completat sunt create pentru aceste notițe.',
        'sect': [
            ('1. AUTOAREA ȘI VOLUMUL', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'AUTOAREA', 'col': 'm',
                     'p': ['**Ana Blandiana** (n. 1942) este un pseudonim, adică numele de artist pe care și l-a ales Otilia Valeria Coman.',
                           'Este poetă, prozatoare și publicistă. Cărțile ei au fost traduse în multe limbi.']},
                    {'titlu': 'VOLUMUL', 'col': 't',
                     'p': ['Pentru copii, Ana Blandiana a scris: *Întâmplări din grădina mea* (1987), *Întâmplări de pe strada mea* (1988), *Cartea albă a lui Arpagic* (1998).',
                           'Poezia *O stradă cu sentimente* deschide volumul **Întâmplări de pe strada mea**.']},
                ]},
            ]),
            ('2. FIȘA POEZIEI', [
                {'t': 'text', 'p': ['**Titlul:** *O stradă cu sentimente* · **Autoarea:** Ana Blandiana · **Volumul:** *Întâmplări de pe strada mea*']},
                {'t': 'tabel', 'cap': ['Casa sau obiectul', 'Un detaliu din poezie', 'Ce face, ce simte'], 'lat': [0.32, 0.38, 0.30],
                 'r': [['casa cu pereții portocalii', '*flori și perdele cu horbote*, *glasuri de copii*', '…………………'],
                       ['gardul de zid', '*cioburi de sticlă*', '…………………'],
                       ['vila', '*iederă și obloane închise*', '…………………'],
                       ['căsuța mică și albă', '*o bătrânică peltică, o pisică și o furnică*', '…………………'],
                       ['casa din colț', '*etaj și balcon*, *blocul de beton*', '…………………'],
                       ['cele două clădiri', '*înalte și subțiri*, *din oțel și granit*', '…………………'],
                       ['casa cu aleea de zgură', '*piticul de ghips și cocoșul de fier*', '…………………']]},
            ]),
            ('3. CUVINTE NOI DIN NOTELE DE SUBSOL', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'Sensul din manual'], 'lat': [0.25, 0.75],
                 'r': [['*țuguiat*', 'ascuțit, prelungit, în formă de țugui'],
                       ['*dibaci*', 'îndemânatic, abil, priceput'],
                       ['*impertinent*', 'obraznic'],
                       ['*horbotă* (regional)', 'dantelă'],
                       ['*perfid*', '(despre oameni) care, deși pare binevoitor sau indiferent, ascunde răutate, viclenie; prefăcut'],
                       ['*infim*', 'extrem de mic; neînsemnat']]},
            ]),
            ('4. ÎNAINTE ȘI DUPĂ PRIMA LECTURĂ', [
                {'t': 'text', 'p': ['**Înainte de lectură** (ex. 1): notez o culoare și o emoție pe care le asociez cu strada mea, apoi schimb caietul cu colegul sau cu colega de bancă, ca să ne comparăm răspunsurile. Apoi ascult poezia în lectura profesorului.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'culoarea străzii mele', 'col': 't', 'p': ['……………………………']},
                    {'titlu': 'emoția mea', 'col': 'm', 'p': ['……………………………']},
                ]},
                {'t': 'tabel', 'cap': ['Impresii după prima lectură', 'Răspunsul meu'], 'lat': [0.5, 0.5],
                 'r': [['Ce mi-a atras atenția în poezia Anei Blandiana?', '……………………………'],
                       ['La ce m-am gândit citind sau auzind poezia?', '……………………………'],
                       ['O întrebare pe care aș vrea să i-o adresez autoarei', '……………………………']]},
            ]),
        ],
    },
    # ---------------- Lecția 3 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-3',
        'titlu': 'Textul descriptiv literar. Personificarea',
        'sub': SUB.format(n=3, pp='pp. 80-83'),
        'sursa': 'Sursa: Manual Art 5, pp. 80-83, rubricile Repere; exemplele sunt din „O stradă cu sentimente” de Ana Blandiana.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul descriptiv** prezintă un obiect, o ființă, un cadru din natură sau un fenomen al naturii, evidențiind **părțile componente** și **trăsăturile particulare**.']},
                {'t': 'nota', 'titlu': 'Textul descriptiv literar', 'p': ['prezintă **impresii și percepții subiective** despre ce descrie. E construit prin folosirea **creativă** a limbajului, ca obiectul să fie prezentat cât mai sugestiv.']},
            ]),
            ('2. CUM E CONSTRUITĂ O DESCRIERE', [
                {'t': 'text', 'p': ['**Obiectul descris** → **părțile lui componente** → **trăsăturile** fiecărei părți.']},
                {'t': 'tabel', 'cap': ['Casa cu pereții portocalii', 'Trăsătura'], 'lat': [0.4, 0.6],
                 'r': [['pereții', '*portocalii*'],
                       ['ferestrele', 'prin ele se văd *flori și perdele cu horbote*'],
                       ['din casă', '*se aud glasuri de copii*']]},
            ]),
            ('3. FIGURA DE STIL. PERSONIFICAREA', [
                {'t': 'text', 'p': ['**Figura de stil** este un procedeu care sporește **expresivitatea** unei comunicări.']},
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Personificarea** atribuie **însușiri omenești** unor ființe necuvântătoare, unor obiecte sau unor fenomene ale naturii.']},
                {'t': 'tabel', 'cap': ['O acțiune omenească', 'O însușire omenească'], 'lat': [0.5, 0.5],
                 'r': [['casa *„râde toată ziua în hohote”*', 'casele sunt *„ambițioase, încăpățânate, curioase, vesele, triste, bârfitoare, timide”*']]},
                {'t': 'text', 's': 14, 'c': 'g', 'p': ['Acțiunile omenești sunt exprimate prin **verbe**, însușirile prin **adjective**.']},
            ]),
            ('4. DESPRE AUTOARE ȘI CUVINTE NOI', [
                {'t': 'text', 'p': ['**Ana Blandiana** este pseudonimul Otiliei Valeria Coman: poetă, prozatoare, publicistă. Pentru copii: *Întâmplări din grădina mea*, *Întâmplări de pe strada mea*, cu motanul **Arpagic**.']},
                {'t': 'tabel', 'cap': ['Cuvântul', 'Sensul'], 'lat': [0.3, 0.7],
                 'r': [['*țuguiat*', 'ascuțit, prelungit'], ['*dibaci*', 'îndemânatic, priceput'],
                       ['*impertinent*', 'obraznic'], ['*horbotă*', 'dantelă (regional)']]},
            ]),
        ],
    },
    # ---------------- Lecția 4 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-4',
        'titlu': 'Semnificațiile textului',
        'sub': SUB.format(n=4, pp='p. 84'),
        'sursa': 'Sursa: Manual Art 5, p. 84 (Interpretare ex. 1-6, Portofoliu, Provocări); sarcinile din tabel sunt prescurtate din ex. 6. Lecția nu are rubrica Repere, deci notițele nu conțin definiții. Spațiile de completat sunt create pentru aceste notițe.',
        'sect': [
            ('1. CUM INTERPRETEZ POEZIA', [
                {'t': 'text', 'p': ['Întrebările din manual sunt piste pentru gândit și pentru caiet. Răspund cu cuvintele mele și îmi motivez ideile cu exemple din poezie.']},
                {'t': 'tabel', 'cap': ['Întrebarea din manual', 'Pista mea'], 'lat': [0.62, 0.38],
                 'r': [['1. Care este, în opinia mea, ideea sau imaginea cea mai importantă a poeziei?', '………………………'],
                       ['2. Care este tema poeziei? Pot alege: strada, casa, sentimentele, maidanezii sau altă temă.', '………………………'],
                       ['3. Prin ce este deosebită poezia: ideile, felul în care sunt exprimate, sonoritatea versurilor?', '………………………'],
                       ['4. De ce cred că autoarea percepe strada într-un mod deosebit, original?', '………………………'],
                       ['5. Dacă aș fi scris eu poezia, ce aș fi vrut să spun despre strada mea?', '………………………']]},
            ]),
            ('2. POEZIA CITITĂ PRIN INTELIGENȚE DIFERITE', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['Un text poate fi interpretat prin prisma diferitelor inteligențe pe care le stăpânește fiecare cititor.']},
                {'t': 'text', 'p': ['Aleg, dintre sarcinile de mai jos, pe aceea care mi se potrivește și o rezolv. Prezint apoi soluția mea colegilor.']},
                {'t': 'tabel', 'cap': ['Inteligența', 'Sarcina, pe scurt', 'Sarcina aleasă'], 'lat': [0.25, 0.60, 0.15], 'al': ['l', 'l', 'c'],
                 'r': [['**lingvistică**', 'Recitește textul și prezintă oral ce ai înțeles, ce ți-a plăcut sau ce te-a nedumerit.', '☐'],
                       ['**logico-matematică**', 'Găsește pentru fiecare casă o formă geometrică sau o formulă care i se potrivește. Explică cum ai gândit.', '☐'],
                       ['**spațial-vizuală**', 'Desenează strada cu sentimente, așa cum ți-o reprezinți pe baza informațiilor din text.', '☐'],
                       ['**muzicală**', 'Gândește-te ce tip de muzică s-ar potrivi pentru fiecare dintre cele șapte case. Explică alegerile tale.', '☐'],
                       ['**corporal-chinestezică**', 'Mimează emoțiile pe care ți le transmite fiecare casă descrisă în poezie.', '☐'],
                       ['**naturalistă**', 'Grupează casele în câteva categorii. Precizează pe ce criterii ai făcut clasificarea.', '☐'],
                       ['**interpersonală**', 'Realizează un joc de rol cu un coleg sau o colegă: un scurt dialog între casele din poezie și un trecător.', '☐'],
                       ['**intrapersonală**', 'Scrie un pasaj, în jurnalul tău, despre emoțiile pe care le-ai avut citind și discutând poezia.', '☐']]},
            ]),
            ('3. PORTOFOLIU ȘI PROVOCĂRI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'PORTOFOLIU', 'col': 'a',
                     'p': ['1. Crezi că toate străzile din lume ar putea avea sentimente? Sau că noi, oamenii, suntem cei care pot da viață unei străzi, unei case, unui obiect, prin imaginație? **Notează răspunsul tău în caiet.**',
                           '2. Descrie cât mai plastic strada pe care locuiești, folosind cel puțin o personificare. Poți adăuga un desen sau o fotografie.']},
                    {'titlu': 'PROVOCĂRI', 'col': 'm',
                     'p': ['1. Identifică, pentru fiecare tip de inteligență din tabel, trei elemente care o pot descrie.',
                           '2. **Notează în caiet** care sunt inteligențele tale dominante.']},
                ]},
                {'t': 'nota', 'titlu': 'Inteligențele mele dominante', 'p': ['1. ………………………………   2. ………………………………   3. ………………………………']},
            ]),
        ],
    },
    # ---------------- Lecția 5 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-5',
        'titlu': 'Text auxiliar. O pisică de Tudor Arghezi (fragment)',
        'sub': SUB.format(n=5, pp='pp. 85-86'),
        'sursa': 'Sursa: Manual Art 5, pp. 85-86 (rubrica „Text auxiliar”, textul, notele de subsol, Discutarea textului ex. 3, „Biblioteci deschise”). Lecția nu are rubrica Repere, deci notițele nu conțin definiții. Manualul nu dă date biografice despre autor. Tabelul portretului este creat pentru aceste notițe.',
        'sect': [
            ('1. DESPRE TEXT', [
                {'t': 'tabel', 'cap': ['', 'Ce notez'], 'lat': [0.25, 0.75],
                 'r': [['Autorul', '**Tudor Arghezi**'],
                       ['Titlul', '*O pisică* (fragment)'],
                       ['Volumul', '*Cartea cu jucării* (1931)'],
                       ['Cerința din manual', 'Citește următorul fragment și **transcrie în caiet pasajele în care este descrisă pisica**.']]},
            ]),
            ('2. FIȘA TEXTULUI', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Ce găsesc în text'], 'lat': [0.25, 0.75],
                 'r': [['Cine apare?', '**pisica** (neagră, cu ochii *lunatici*); copiii **Baruțu** și **Mițura**; **Bunica**; povestitorul, care vorbește despre *noi*, stăpânii casei'],
                       ['Când?', '*A intrat acum două luni în casă.*'],
                       ['Unde?', 'în casa familiei: *apartamentul nostru*, *gospodăria noastră de unelte*']]},
            ]),
            ('3. PORTRETUL PISICII', [
                {'t': 'text', 'p': ['Pentru a reconstitui înfățișarea pisicii, asociez elementele din prima coloană cu informațiile din text și **transcriu pasajul** potrivit.']},
                {'t': 'tabel', 'cap': ['Elementul', 'Pasajul transcris din text'], 'lat': [0.25, 0.75],
                 'r': [['căutătură', '…………………………………………………………'], ['ochi', '…………………………………………………………'],
                       ['gură', '…………………………………………………………'], ['blană', '…………………………………………………………'],
                       ['siluetă', '…………………………………………………………'], ['gleznă', '…………………………………………………………'],
                       ['pas', '…………………………………………………………'], ['culoare', '…………………………………………………………'],
                       ['constituție', '…………………………………………………………'], ['labe', '…………………………………………………………']]},
            ]),
            ('4. CUVINTE NOI DIN NOTELE DE SUBSOL', [
                {'t': 'coloane', 'c': [
                    {'b': [{'t': 'tabel', 's': 13.5, 'cap': ['Cuvântul', 'Sensul'], 'lat': [0.34, 0.66],
                            'r': [['*sălaș* (popular)', 'adăpost, locuință; culcuș'],
                                  ['*lunatic*', '(despre somn, privire, mers) de somnambul'],
                                  ['*sofa*', 'divan îngust, de obicei cu un căpătâi mai ridicat'],
                                  ['*doniță*', 'vas făcut din doage de lemn, cu toartă (și capac), în care se cară și se ține apa'],
                                  ['*lutră*', 'vidră, dihor de apă'],
                                  ['*a tălmăci*', 'a explica, a lămuri; a dezlega, a ghici o problemă, o întrebare etc.']]}]},
                    {'b': [{'t': 'tabel', 's': 13.5, 'cap': ['Cuvântul', 'Sensul'], 'lat': [0.34, 0.66],
                            'r': [['*opintire*', 'sforțare, efort'],
                                  ['*idol* (figurat)', 'ființă sau lucru care reprezintă obiectul unui cult sau al unei mari iubiri'],
                                  ['*inefabil*', 'care nu poate fi exprimat în cuvinte'],
                                  ['*moaște* (figurat)', 'vestigii prețioase ale trecutului'],
                                  ['*dom*', 'catedrală impunătoare, biserică principală în unele orașe italiene, germane etc.'],
                                  ['*boit* (regional)', 'vopsit']]}]},
                ]},
            ]),
            ('5. BIBLIOTECI DESCHISE', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'Întoarcerea lui Arpagic', 'col': 't', 'sub': 'de Ana Blandiana', 'p': ['pentru cine vrea să afle mai multe despre motanul Arpagic']},
                    {'titlu': 'Pânza Charlottei', 'col': 'm', 'sub': 'de E.B. White', 'p': ['roman în care păienjenița de pe copertă are parte de o aventură incredibilă']},
                ]},
            ]),
        ],
    },
    # ---------------- Lecția 6 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-6',
        'titlu': 'Textul descriptiv nonliterar. Persana, un ghem pufos cu o personalitate încântătoare',
        'sub': SUB.format(n=6, pp='pp. 87-89'),
        'sursa': 'Sursa: Manual Art 5, p. 88, rubrica Repere (cuvânt cu cuvânt); p. 87, ex. 3, metoda SINELG; articolul de la pp. 87-88; p. 89, Interpretare ex. 9 și Autoevaluare L1-L5. Tabelele de completat sunt create pentru aceste notițe.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV NONLITERAR', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Textul descriptiv nonliterar** prezintă în detaliu un obiect, o ființă, un peisaj din natură sau un fenomen al naturii, evidențiind părțile sale componente și trăsăturile specifice acestuia.']},
                {'t': 'nota', 'p': ['Spre deosebire de textul descriptiv literar, care prezintă impresii, percepții subiective sau chiar descrieri bazate pe imaginație, în textul descriptiv nonliterar sunt prezentate informații, date concrete și reale privitoare la obiectul descris. Tonul folosit este unul neutru, iar limbajul este precis, cu multe cuvinte aparținând câmpului lexical în care se încadrează tema descrierii.']},
            ]),
            ('2. CITESC CU METODA SINELG', [
                {'t': 'text', 'p': ['Pe măsură ce parcurg textul, notez pe margine, cu creionul, următoarele semne:',
                                    '• o bifă ({v:**✓**}) pentru o situație în care textul îți confirmă ceva ce știi deja;',
                                    '• un minus ({r:**–**}) pentru o informație care contrazice ceea ce știi sau e ușor diferită față de ceea ce știi;',
                                    '• un plus ({t:**+**}) dacă întâlnești o informație nouă;',
                                    '• un semn de întrebare ({m:**?**}) în dreptul ideilor care ți se par neclare sau în cazul în care vrei să știi mai multe despre un anumit aspect.']},
            ]),
            ('3. ARTICOLUL DESPRE PERSANĂ', [
                {'t': 'text', 'p': ['**Titlul:** *Persana, un ghem pufos cu o personalitate încântătoare* · **Sursa:** www.animalutze.com/articole/pisica-persana.php']},
                {'t': 'tabel', 'cap': ['Aspectul', 'Unde îl găsesc în text', 'Detaliile'], 'lat': [0.2, 0.42, 0.38],
                 'r': [['corpul', 'paragrafele *Sub aparențele de animal greoi…* și *Musculatura persanei…*', '………………………'],
                       ['blana', 'paragraful **Blana persanei**', '………………………'],
                       ['capul', 'paragraful **Capul persanei**', '………………………'],
                       ['urechile', 'paragraful **Urechile persanei**', '………………………'],
                       ['ochii', 'în paragraful despre urechi: *Ochii, în ton cu culoarea blănii…*', '………………………'],
                       ['temperamentul', 'ultimul paragraf: *Din punctul de vedere al temperamentului…*', '………………………']]},
            ]),
            ('4. LITERAR ȘI NONLITERAR', [
                {'t': 'text', 'p': ['Comparăm *Persana* cu textul literar *O pisică* de Tudor Arghezi. **Copiez în caiet tabelul și bifez trăsăturile** pe care le consider specifice fiecărui text.']},
                {'t': 'tabel', 'cap': ['', 'Textul descriptiv literar', 'Textul descriptiv nonliterar'], 'lat': [0.44, 0.28, 0.28], 'al': ['l', 'c', 'c'],
                 'r': [['Se referă la ceva din realitate.', '', ''],
                       ['Prezintă impresii, percepții subiective.', '', ''],
                       ['Prezintă informații care pot fi verificate.', '', ''],
                       ['Limbajul este precis.', '', ''],
                       ['Tonul este neutru.', '', '']]},
            ]),
            ('5. AUTOEVALUARE L1-L5', [
                {'t': 'text', 'p': ['**Completez, în caiet, următoarele afirmații:**',
                                    '• Din ceea ce am învățat, cel mai important mi se pare … .',
                                    '• Cel mai mult mi-a plăcut activitatea … .',
                                    '• Cel mai dificil mi s-a părut … .']},
            ]),
        ],
    },
    # ---------------- Lecția 7 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-7',
        'titlu': 'Tradiții: sărbătorile de iarnă',
        'sub': SUB.format(n=7, pp='p. 90'),
        'sursa': 'Sursa: Manual Art 5, p. 90 (rubrica Repere cuvânt cu cuvânt, Pentru început, Explorare ex. 1-2, Aplicații ex. 1-2). Spațiile de completat sunt create pentru aceste notițe.',
        'sect': [
            ('1. TRADIȚII ȘI OBICEIURI', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Tradițiile și obiceiurile** fac parte din cultura unui popor sau din cultura unor comunități mai restrânse.']},
                {'t': 'text', 'p': ['Acestea se transmit din generație în generație, de la o regiune la alta, uneori de la o cultură la alta, fiind reconsiderate și îmbogățite permanent.']},
            ]),
            ('2. SĂRBĂTORILE DE IARNĂ', [
                {'t': 'nota', 'p': ['Sărbătorile de iarnă sunt petrecute diferit, în funcție de tradițiile și obiceiurile fiecărei comunități, dar există și aspecte comune, care pot crea punți de comunicare între oameni care aparțin unor culturi diferite. **Colindatul este una dintre aceste tradiții.**']},
            ]),
            ('3. COLINDE', [
                {'t': 'text', 'p': ['Colindatul este un obicei străvechi, transmis din generație în generație. Din manual: *Steaua sus răsare*, *Trei magi de la Răsărit*, *O, ce veste minunată*, *O, brad frumos*, *Florile dalbe*, *Leru-i ler*, *Domn-Domn să-nălțăm*.',
                                    'De Crăciun se cântă colinde românești, dar și colinde preluate din alte culturi.']},
                {'t': 'carduri', 'c': [
                    {'titlu': 'O, ce veste minunată', 'col': 't',
                     'p': ['un vechi colind românesc, cunoscut în diferite variante, în funcție de regiunea unde se cântă',
                           'adaptat de compozitori în muzica ușoară și în cea cultă',
                           'partitura cultă: **Dimitrie Georgescu-Kiriac**, la începutul secolului al XX-lea']},
                    {'titlu': 'O, brad frumos', 'col': 'm', 'sub': 'în germană *O Tannenbaum*',
                     'p': ['melodie populară din **Silezia**, din secolul al XVI-lea',
                           'versurile, compuse mai târziu de **Ernst Anschütz** (1780-1861)',
                           'tradus în multe limbi ale lumii']},
                ]},
            ]),
            ('4. COLINDATUL MEU', [
                {'t': 'tabel', 'cap': ['Întrebarea', 'Răspunsul meu'], 'lat': [0.4, 0.6],
                 'r': [['a. De câte ori am fost la colindat?', '……………………………………………'],
                       ['b. Unde am colindat?', '……………………………………………'],
                       ['c. Ce colinde am cântat?', '……………………………………………'],
                       ['d. Cum am fost răsplătit?', '……………………………………………']]},
            ]),
            ('5. POEZIA ȘI PICTURA', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'poezia', 'col': 'a', 'p': ['*Iarna pe uliță* de **George Coșbuc**']},
                    {'titlu': 'pictura', 'col': 'n', 'p': ['*De sărbători* (2017) de **Gheorghe Ciobanu**']},
                ]},
                {'t': 'text', 'p': ['Ce au acestea în comun? Ce emoții sau amintiri îmi trezesc? ………………………………………………………']},
            ]),
        ],
    },
    # ---------------- Lecția 9 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-9',
        'titlu': 'Ascultarea activă',
        'sub': SUB.format(n=9, pp='pp. 92-93'),
        'sursa': 'Sursa: Manual Art 5, pp. 92-93, rubrica Repere, schema și fișa de observare.',
        'sect': [
            ('1. A AUZI ȘI A ASCULTA', [
                {'t': 'text', 'p': ['Ca să asculți, trebuie să auzi. Dar a asculta înseamnă mai mult: să fii **atent** și să **înțelegi** ce ți se spune.']},
            ]),
            ('2. CE ÎNSEAMNĂ ASCULTAREA ACTIVĂ', [
                {'t': 'text', 's': 15.5, 'p': ['**Ascultarea activă** este o strategie esențială în comunicare. Presupune:']},
                {'t': 'carduri', 'n': 2, 'c': [
                    {'titlu': 'să auzi', 'col': 't', 'p': ['să primești clar mesajul, fără zgomote care să-l perturbe']},
                    {'titlu': 'să interacționezi', 'col': 'm', 'p': ['asculți fără să întrerupi; știi când poți interveni cu întrebări sau cu un rezumat; urmărești gesturile, păstrezi contactul vizual, îl încurajezi pe vorbitor']},
                    {'titlu': 'să te concentrezi', 'col': 'a', 'p': ['îți menții atenția']},
                    {'titlu': 'să înțelegi', 'col': 'n', 'p': ['știi de ce asculți: relaxare, informare, analiză']},
                ]},
                {'t': 'text', 'p': ['Asculți ca să auzi, ca să te gândești la ce ai auzit, ca să arăți **empatie**, ca să urmărești gesturile vorbitorului și ca să spui ce ai înțeles (prin **reformulare**) sau să pui **întrebări**.']},
            ]),
            ('3. SEMNELE UNUI ASCULTĂTOR BUN', [
                {'t': 'text', 'p': ['• participă la comunicare în egală măsură cu vorbitorul și păstrează contactul vizual;',
                                    '• îl încurajează pe vorbitor cu sunete sau gesturi de aprobare;',
                                    '• pune întrebări sau reformulează ideile, ca să fie sigur că a înțeles;',
                                    '• respectă regulile de preluare a cuvântului;',
                                    '• la final, poate face un rezumat clar al celor auzite.']},
            ]),
        ],
    },
    # ---------------- Lecția 10 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-10',
        'titlu': 'Substantivul',
        'sub': SUB.format(n=10, pp='pp. 94-95'),
        'sursa': 'Sursa: Manual Art 5, pp. 94-95, rubricile Repere.' + CREATE,
        'sect': [
            ('1. CE ESTE SUBSTANTIVUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Substantivul** este partea de vorbire care denumește ființe, lucruri, fenomene ale naturii, însușiri, acțiuni, stări sufletești, considerate în sens larg **obiecte**.']},
                {'t': 'text', 'p': ['*copil, casă, ninsoare, răutate, plimbare, bucurie*']},
            ]),
            ('2. SUBSTANTIVE COMUNE ȘI PROPRII', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'comune', 'col': 't', 'p': ['denumesc o **clasă** de obiecte de același fel', '*stradă, oraș, floare*']},
                    {'titlu': 'proprii', 'col': 'm', 'p': ['denumesc **individualități**: nume de persoane, țări, localități, ape, sărbători; se scriu cu **literă mare**', '*Ana, România, Mureș, Crăciun*']},
                ]},
                {'t': 'text', 'p': ['Există substantive proprii obținute din substantive comune: *floare → Floarea*.']},
            ]),
            ('3. GENUL ȘI NUMĂRUL', [
                {'t': 'tabel', 'cap': ['Genul', 'Cum îl recunosc', 'Exemplu'], 'lat': [0.2, 0.4, 0.4], 'al': ['l', 'c', 'l'],
                 'r': [['masculin', 'un – doi', '*un copil, doi copii*'],
                       ['feminin', 'o – două', '*o fată, două fete*'],
                       ['neutru', 'un – două', '*un caiet, două caiete*']]},
                {'t': 'text', 'p': ['**Numărul:** singular (un singur obiect) și plural (două sau mai multe obiecte).',
                                    '**Desinențele** sunt sunetele de la sfârșitul substantivului care arată genul și numărul: *maidanez∅ – maidanezi*, *cas-ă – cas-e*, *bloc∅ – bloc-uri*.']},
            ]),
            ('4. ATENȚIE', [
                {'t': 'atentie', 'p': ['Același cuvânt poate fi substantiv sau verb: *un pahar de* **vin** (substantiv) / **Vin** *acasă.* (verb). Verific formele de plural în **DOOM3**.']},
            ]),
        ],
    },
    # ---------------- Lecția 11 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-11',
        'titlu': 'Articolul',
        'sub': SUB.format(n=11, pp='pp. 96-97'),
        'sursa': 'Sursa: Manual Art 5, pp. 96-97, rubricile Repere, tabelele și modelele.',
        'sect': [
            ('1. CE ESTE ARTICOLUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Articolul** însoțește întotdeauna un substantiv și arată **în ce măsură** obiectul le este cunoscut vorbitorilor.']},
                {'t': 'text', 'p': ['• Articolul se analizează **întotdeauna împreună cu substantivul**.',
                                    '• Substantivele pot fi **articulate** (*semaforul, un semafor*) sau **nearticulate** (*semafor*).',
                                    '• În dicționar, substantivele apar **nearticulate**.']},
            ]),
            ('2. ARTICOLUL HOTĂRÂT', [
                {'t': 'text', 'p': ['Arată că obiectul e **cunoscut** de vorbitor și de ascultător. Se adaugă **la sfârșitul** substantivului, într-un singur cuvânt. La masculin și neutru singular se leagă prin **-u-**: *băiat-u-l*.']},
                {'t': 'tabel', 'cap': ['', 'masculin', 'feminin', 'neutru'], 'lat': [0.19, 0.27, 0.27, 0.27], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['singular', '-l, -le, -a, -lui', '-a, -i', '-l, -lui'], ['plural', '-i, -lor', '-le, -lor', '-le, -lor']]},
            ]),
            ('3. ARTICOLUL NEHOTĂRÂT', [
                {'t': 'text', 'p': ['Arată că obiectul e **mai puțin cunoscut**. Se așază **înaintea** substantivului, ca un cuvânt separat.']},
                {'t': 'tabel', 'cap': ['', 'masculin', 'feminin', 'neutru'], 'lat': [0.19, 0.27, 0.27, 0.27], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['singular', 'un, unui', 'o, unei', 'un, unui'], ['plural', 'niște, unor', 'niște, unor', 'niște, unor']]},
                {'t': 'tabel', 'cap': ['', 'articulat hotărât', 'articulat nehotărât'], 'lat': [0.2, 0.4, 0.4], 'al': ['l', 'c', 'c'],
                 'r': [['singular', '*fulgul*', '*un fulg*'], ['plural', '*fulgii*', '*niște fulgi*']]},
            ]),
            ('4. NORMĂ: CÂȚI „I” SCRIU', [
                {'t': 'tabel', 'cap': ['Cuvântul', 'face parte din cuvânt', 'desinența', 'articolul hotărât'], 'lat': [0.25, 0.25, 0.25, 0.25], 'al': ['l', 'c', 'c', 'c'],
                 'r': [['*copiii*', 'copi-', '-i', '-i'], ['*poeziile*', 'poezi-', '-i-', '-le']]},
                {'t': 'atentie', 'p': ['De aceea scriem *exercițiile* (exerciți- + -i- + -le), nu *exercițile*.']},
            ]),
        ],
    },
    # ---------------- Lecția 12 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-12',
        'titlu': 'Posibilități combinatorii ale substantivului. Atributul',
        'sub': SUB.format(n=12, pp='p. 98'),
        'sursa': 'Sursa: Manual Art 5, p. 98, rubrica Repere și exemplele din Explorare.',
        'sect': [
            ('1. ATRIBUTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Atributul** este partea secundară de propoziție care **determină un substantiv**.']},
                {'t': 'text', 'p': ['Întrebările atributului: **al/a/ai/ale cui?**, **care?**, **ce fel de?**']},
                {'t': 'tabel', 'cap': ['Întrebarea', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['a cui casă?', '*Casa* **bătrânei** *este mică, mică.*'],
                       ['care casă?', '*Casa* **nouă** *este mare și bârfitoare.*'],
                       ['ce fel de casă?', '*Casa* **de cărămidă** *are pereți portocalii.*']]},
            ]),
            ('2. SUBSTANTIVUL CENTRU ȘI ADJUNCT', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'centru', 'col': 't', 'p': ['substantivul determinat de alte cuvinte', '**casa** *Anei*, **casa** *verde*, **casa** *de piatră*']},
                    {'titlu': 'adjunct', 'col': 'm', 'p': ['cuvântul care determină substantivul', '*casa* **Anei**, *casa* **de piatră**']},
                ]},
            ]),
            ('3. CUM SE EXPRIMĂ ATRIBUTUL', [
                {'t': 'tabel', 'cap': ['Prin', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['adjectiv', '*strada* **largă**'], ['substantiv', '*strada* **bunicii**, *strada* **din centru**']]},
                {'t': 'text', 'p': ['• Un substantiv poate avea **unul sau mai multe** atribute: *Palidele raze de soare…*',
                                    '• De obicei, atributul stă **după** substantiv, dar poate sta și **înainte**.']},
            ]),
        ],
    },
    # ---------------- Lecția 13 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-13',
        'titlu': 'Prepoziția',
        'sub': SUB.format(n=13, pp='p. 99'),
        'sursa': 'Sursa: Manual Art 5, pp. 98-99, rubrica Repere și exemplele din Explorare.',
        'sect': [
            ('1. CE ESTE PREPOZIȚIA', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Prepoziția** este partea de vorbire care **leagă un atribut** de substantivul determinat.']},
                {'t': 'text', 'p': ['Prepoziția se analizează **împreună** cu partea de vorbire pe care o precedă și intră în componența atributului.']},
                {'t': 'text', 'p': ['*Casa* **fără acoperiș** *va fi demolată.* · *Casa* **de lângă blocul înalt** *este încrezută.*']},
            ]),
            ('2. FELURILE PREPOZIȚIILOR', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'simple', 'col': 't', 'sub': 'un singur termen', 'p': ['*cu, de, după, fără, în, între, la, lângă, pe, pentru, peste, până*']},
                    {'titlu': 'compuse', 'col': 'm', 'sub': 'doi sau mai mulți termeni', 'p': ['*de la, de lângă, de pe, de peste, de prin, de sub, pe după, pe la, pe sub, de pe la, de pe lângă, de pe sub*']},
                ]},
                {'t': 'nota', 'titlu': 'Compuse scrise într-un singur cuvânt:', 'p': ['*despre* (de + spre), *dinspre* (din + spre), *înspre* (în + spre)']},
            ]),
        ],
    },
    # ---------------- Lecția 14 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-14',
        'titlu': 'Substantivul subiect. Acordul predicatului cu subiectul',
        'sub': SUB.format(n=14, pp='pp. 100-101'),
        'sursa': 'Sursa: Manual Art 5, pp. 100-101, rubricile Repere și modelele.' + CREATE,
        'sect': [
            ('1. SUBIECTUL', [
                {'t': 'text', 's': 16, 'c': 'n', 'p': ['**Subiectul** este partea de propoziție care arată **cine** face acțiunea exprimată de un predicat verbal.']},
                {'t': 'text', 'p': ['Întrebarea subiectului: **cine?** Subiectul și predicatul sunt într-o strânsă relație.']},
                {'t': 'tabel', 'cap': ['Întrebarea', 'Exemplu'], 'lat': [0.3, 0.7],
                 'r': [['cine aleargă?', '*__Pisicile__ _aleargă_.*'], ['cine a apărut?', '*__Soarele__ _a apărut_ iar pe cer.*']]},
            ]),
            ('2. SUBIECTUL SIMPLU ȘI MULTIPLU', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'simplu', 'col': 't', 'p': ['un singur termen', '*__Zăpada__ cădea neîncetat.*']},
                    {'titlu': 'multiplu', 'col': 'm', 'p': ['doi sau mai mulți termeni, legați prin virgulă sau prin *și*', '*__Fetele__ și __băieții__ _merg_ la joacă.*']},
                ]},
                {'t': 'text', 'p': ['Termenii subiectului multiplu pot sta unul lângă altul sau pot fi despărțiți de alte părți de propoziție.']},
            ]),
            ('3. ACORDUL PREDICATULUI CU SUBIECTUL', [
                {'t': 'text', 's': 15.5, 'p': ['Verbul predicat se acordă în **persoană** și **număr** cu substantivul subiect.']},
                {'t': 'tabel', 'cap': ['Subiectul', 'Predicatul'], 'lat': [0.5, 0.5],
                 'r': [['*Vecinul meu* (singular)', '*a plecat* (singular)'],
                       ['*Prietenii lui* (plural)', '*l-au însoțit* (plural)'],
                       ['*Bunicii și părinții* (multiplu)', '*au stabilit* (întotdeauna plural)']]},
                {'t': 'atentie', 'p': ['Acordul se face **doar cu substantivul subiect**, nu cu alte cuvinte din propoziție: *Grupul elevilor* **a plecat** *în excursie* (nu *au plecat*).']},
            ]),
        ],
    },
    # ---------------- Lecția 15 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-15',
        'titlu': 'Descrierea unui obiect',
        'sub': SUB.format(n=15, pp='pp. 102-103'),
        'sursa': 'Sursa: Manual Art 5, pp. 102-103, rubrica Repere, organizatorul grafic și grila.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV ARE TREI PĂRȚI', [
                {'t': 'carduri', 'c': [
                    {'titlu': 'introducerea', 'col': 't', 'p': ['precizează **tema** descrierii; poate spune de ce am ales obiectul sau cu ce scop îl descriu']},
                    {'titlu': 'cuprinsul', 'col': 'm', 'p': ['descrie **în detaliu** diferite aspecte ale obiectului']},
                    {'titlu': 'încheierea', 'col': 'a', 'p': ['o **concluzie**, un punct de vedere personal despre obiect']},
                ]},
            ]),
            ('2. ÎNAINTE SĂ SCRIU', [
                {'t': 'text', 'p': ['1. Stabilesc **tema**: ce obiect descriu.',
                                    '2. Notez **toate elementele componente** pe care le-aș putea descrie.',
                                    '3. Mă gândesc **pentru cine** și **cu ce scop** scriu, apoi **aleg** doar elementele potrivite.',
                                    '4. Pot adăuga fotografii sau desene.']},
                {'t': 'carduri', 'n': 4, 'c': [
                    {'titlu': 'din ce este compus', 'col': 'n'},
                    {'titlu': 'cum arată', 'col': 'n'},
                    {'titlu': 'pentru ce e folosit', 'col': 'n'},
                    {'titlu': 'de ce e important pentru mine', 'col': 'n'},
                ]},
            ]),
            ('3. PAȘII REDACTĂRII', [
                {'t': 'text', 'p': ['planul → aleg aspectele potrivite perspectivei mele → titlul → prima variantă → **revizuirea** (claritate, paragrafe, gramatică, ortografie, punctuație) → varianta finală, lizibilă.']},
            ]),
            ('4. GRILA', [
                {'t': 'text', 'p': ['• Reiese clar obiectul descris, aspectele și trăsăturile lui și părerea mea.',
                                    '• Are introducere, cuprins și încheiere; elementele, tonul și limbajul se potrivesc scopului și cititorilor.',
                                    '• Titlul se potrivește cu scopul textului.',
                                    '• Exprimarea e clară și corectă; textul e așezat corect în pagină; nu plictisește cititorul.']},
            ]),
        ],
    },
    # ---------------- Lecția 17 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-17',
        'titlu': 'Recapitulare. Lectură și comunicare în Unitatea III',
        'sub': SUB.format(n=17, pp='pp. 80-93, 104-105'),
        'sursa': 'Sursa: Manual Art 5, rubricile Repere ale lecțiilor 1-7 și cerințele recapitulării de la pp. 104-105.',
        'sect': [
            ('1. TEXTUL DESCRIPTIV', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin'], 'lat': [0.3, 0.7],
                 'r': [['textul descriptiv', 'prezintă un obiect, o ființă, un cadru din natură, un fenomen, cu **părțile** și **trăsăturile** lor'],
                       ['textul descriptiv literar', 'impresii și percepții **subiective**, limbaj creativ, sugestiv'],
                       ['tema descrierii', 'obiectul sau ființa care se descrie'],
                       ['personificarea', 'figură de stil care dă **însușiri omenești** unor ființe necuvântătoare, obiecte, fenomene']]},
            ]),
            ('2. CUM ANALIZEZ O DESCRIERE', [
                {'t': 'text', 'p': ['1. Precizez **tema** descrierii.',
                                    '2. Găsesc **părțile** obiectului descris și le asociez cu **trăsăturile** din text.',
                                    '3. Caut **figurile de stil**, de exemplu personificarea.',
                                    '4. Observ dacă descrierea transmite **impresii** (literară) sau mai ales **informații** (de exemplu, termeni de specialitate).']},
            ]),
            ('3. ASCULTAREA ACTIVĂ', [
                {'t': 'text', 'p': ['Aud clar mesajul, mă concentrez, nu întrerup, păstrez contactul vizual, încurajez vorbitorul, pun întrebări și reformulez ca să verific dacă am înțeles.']},
            ]),
        ],
    },
    # ---------------- Lecția 18 ----------------
    {
        'cale': 'clasa-5/unitatea-3/lectia-18',
        'titlu': 'Recapitulare. Substantivul, articolul, atributul, subiectul',
        'sub': SUB.format(n=18, pp='pp. 94-105'),
        'sursa': 'Sursa: Manual Art 5, pp. 94-103, rubricile Repere ale lecțiilor 8-12.' + CREATE,
        'sect': [
            ('1. SUBSTANTIVUL ȘI ARTICOLUL', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.22, 0.46, 0.32],
                 'r': [['substantivul', 'denumește obiecte în sens larg; comun sau propriu', '*stradă / Ana*'],
                       ['genul', 'masculin (un–doi), feminin (o–două), neutru (un–două)', '*copil, fată, caiet*'],
                       ['numărul', 'singular / plural, arătat de desinențe', '*casă – case*'],
                       ['articolul hotărât', 'obiect cunoscut; la sfârșitul cuvântului', '*strada, fulgii*'],
                       ['articolul nehotărât', 'obiect mai puțin cunoscut; înaintea cuvântului', '*o stradă, niște fulgi*']]},
            ]),
            ('2. ATRIBUTUL ȘI PREPOZIȚIA', [
                {'t': 'tabel', 'cap': ['Noțiunea', 'Ce rețin', 'Exemplu'], 'lat': [0.22, 0.46, 0.32],
                 'r': [['atributul', 'determină un substantiv; *al cui? care? ce fel de?*', '*casa* **veche**'],
                       ['atribut prin adjectiv', '', '*strada* **largă**'],
                       ['atribut prin substantiv', 'cu sau fără prepoziție', '*strada* **bunicii**, **din centru**'],
                       ['prepoziția', 'leagă atributul de substantiv; simplă sau compusă', '*de, pe / de pe, de lângă*']]},
            ]),
            ('3. SUBIECTUL ȘI ACORDUL', [
                {'t': 'text', 'p': ['Subiectul răspunde la **cine?** și poate fi **simplu** sau **multiplu**. Predicatul se acordă cu subiectul în persoană și număr; la subiectul multiplu, acordul e **la plural**: *__Gerul__ și __zăpada__ _au făcut_ ravagii.*']},
            ]),
            ('4. REDACTAREA: DESCRIEREA UNUI OBIECT', [
                {'t': 'text', 'p': ['Introducerea (tema) → cuprinsul (aspectele obiectului, în detaliu) → încheierea (părerea mea).']},
            ]),
        ],
    },
]
