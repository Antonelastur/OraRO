# Fișe de exerciții, clasa a V-a, Unitatea I „Despre mine. Selfie”.
# Exerciții originale pe conținutul lecțiilor (Manual Art 5). Textele fără autor
# sunt create pentru fișe. Rezolvările: notite-profesor/clasa-5/unitatea-1/.
# Generare: python scripts/fise_exercitii.py scripts/fise/clasa-5-unitatea-1.py

SUB = 'Clasa a V-a · Unitatea I, Lecția {n} · Manual, {pp} · lucru în clasă'
NOTA = ('Exerciții originale (Manual Art 5, {pp}); textele fără autor sunt create pentru fișă. '
        'Exercițiile din manual rămân temă pentru acasă.')


def fisa(n, pp, reper, *pagini):
    return {'cale': f'clasa-5/unitatea-1/lectia-{n}', 'sub': SUB.format(n=n, pp=pp),
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


AF = ['Afirmația', 'A / F']

FISE = [
    fisa(1, 'pp. 10-12',
         'Reper: Povestirea „Prietenul meu” de Ioana Pârvulescu relatează ziua de marți în care Bogdan, '
         'elev în clasa a V-a, își aduce cățelul la școală. Răspunde din memorie, apoi verifică în manual.',
         [
             T(1, 'Ordinea întâmplărilor', 'Numerotează întâmplările de la 1 la 6, în ordinea din text.',
               ['Întâmplarea', 'Nr.'], [440, 70], gol(
                   'Banca lui Bogdan și a lui Adi începe să latre.',
                   'Bogdan își face un selfie cu Adi, după ore.',
                   'O mașină îl stropește pe Bogdan la trecerea de pietoni.',
                   'Bogdan recunoaște că el este vinovatul.',
                   'Bogdan se trezește târziu și își caută ochelarii.',
                   'Adi este trimis afară din clasă.'), row_h=20),
             T(2, 'Cine face?', ['Scrie cine face fiecare lucru: Bogdan, Claudia, Adi, bunica,',
                                 'profesoara de istorie sau dirigintele.'],
               ['Ce face', 'Personajul'], [370, 140], gol(
                   'Le spune vecinilor că Bogdan e bun la matematică.',
                   'Spune că ideea lui Bogdan e o nebunie.',
                   'Iese din clasă cu capul în pământ, fără să spună nimic.',
                   'Crede că Adi a lătrat și îl trimite afară.',
                   'Spune, cu voce severă, că fapta să nu se mai repete.',
                   'Aduce la școală un cățel, în rucsac.'), row_h=20),
             X(3, 'Rezumat cu goluri', [
                 'Completează golurile cu informații din text.',
                 'Într-o zi de ________, Bogdan urma să dea prima teză la ________________.',
                 'Compunerea lui despre prietenul cel mai bun avea doar ______ fraze.',
                 'De aceea a adus la școală, în rucsac, cățelul lui, pe nume ________.',
                 'La ora de ____________, câinele a lătrat, iar ______ a fost trimis afară din clasă.',
                 'La final, prietenul lui cel mai bun este ________. La teză, Bogdan ia nota ______.']),
             L(4, 'Pe scurt', 'Povestește în 2-3 propoziții ziua de marți, ca pentru un coleg care a lipsit.'),
         ],
         [
             T(5, 'Adevărat sau fals?', 'Scrie A (adevărat) sau F (fals).', AF, [440, 70], gol(
                 'Bogdan și Claudia sunt frați.',
                 'Claudia este în clasa a V-a, ca Bogdan.',
                 'Joi se numește așa pentru că Bogdan l-a primit într-o joi.',
                 'Prima oră din ziua aceea a fost matematica.',
                 'Supărarea lui Adi a trecut repede.'), row_h=20),
             T(6, 'Albumul zilei de marți', [
                 'Imaginează-ți că Bogdan a făcut câte o fotografie în patru momente ale zilei.',
                 'Scrie pentru fiecare o legendă de o propoziție: ce s-a întâmplat și ce a simțit el.'],
               ['Fotografia', 'Legenda'], [150, 360], gol(
                   '1. Dimineața, pe drum', '2. La ora de istorie', '3. Când spune adevărul', '4. După ore, cu Adi'),
               row_h=30),
             X(7, 'Detaliile contează', [
                 'Încercuiește răspunsul corect.',
                 'a) Dimineața, Bogdan își caută: ghiozdanul / ochelarii / cheile.',
                 'b) Joi este un câine: ciobănesc / chihuahua / dalmațian.',
                 'c) Coada lui Joi seamănă cu: un semicerc / un cerc / o linie dreaptă.',
                 'd) După ce a fost descoperit, Joi a fost dus: acasă / în cancelarie / în curte.',
                 'e) Plin de apă, Bogdan arăta ca un personaj din filmul: Minunea / 101 dalmațieni.']),
             L(8, 'Întrebări pentru personaje', [
                 'Scrie o întrebare pentru Adi și una pentru Claudia.',
                 'Sub fiecare, scrie răspunsul pe care crezi că l-ar da personajul.'], 2),
         ]),

    fisa(2, 'pp. 13-14',
         'Reper (manual, p. 13): Textul literar prezintă o lume imaginară și transmite idei, dar mai ales emoții și '
         'sentimente, într-un limbaj expresiv. Lumea lui poate fi mai apropiată sau mai îndepărtată de cea reală. '
         'Ca să înțelegi o întâmplare, răspunzi la întrebările: Cine? Ce? Când? Unde?',
         [
             T(1, 'Aproape sau departe de realitate?', [
                 'Scrie R dacă întâmplarea ar fi posibilă în realitate și I dacă e posibilă',
                 'doar într-o lume imaginară.'],
               ['Întâmplarea', 'R / I'], [440, 70], gol(
                   'Un băiat își aduce cățelul la școală, în rucsac.',
                   'Un câine povestește la ora de română cum a fost la teză.',
                   'O fată vede în nori cai de mare și canguri.',
                   'O bancă fermecată începe să cânte la ora de istorie.',
                   'Un elev primește nota zece la teza de matematică.'), row_h=20),
             T(2, 'Cele patru întrebări', [
                 'Citește textul și completează tabelul.',
                 '„Sâmbătă dimineață, Irina și bunicul ei au urcat în podul casei de la țară. Căutau',
                 'o ladă cu fotografii vechi. Între două cărți prăfuite, Irina a găsit o poză cu bunicul',
                 'la zece ani, ținând în brațe un cățel. «Acesta era Azorel, cel mai bun prieten al meu.»”'],
               ['Întrebarea', 'Răspunsul'], [110, 400], gol('Cine?', 'Ce fac?', 'Când?', 'Unde?')),
             T(3, 'Ce înseamnă de fapt?', [
                 'Scrie litera explicației potrivite pentru fiecare expresie din „Prietenul meu”.',
                 'A = a pornit brusc și foarte repede          B = s-a uitat foarte supărată',
                 'C = a fugit cât a putut de repede              D = te înduioșează'],
               ['Expresia din text', 'Litera'], [420, 90], gol(
                   'Bogdan a luat-o la fugă „în viteza a patra”.',
                   'Un șofer „a țâșnit ca din pușcă”.',
                   'Profesoara „ne-a fulgerat pe amândoi cu privirea”.',
                   'Privirea lui Joi „îți topește inima”.'), row_h=20),
         ],
         [
             T(4, 'Emoțiile din text', 'Ce simte fiecare personaj? Scrie emoția și cuvintele care te-au ajutat.',
               ['Personajul și momentul', 'Emoția', 'Indiciul din text'], [230, 110, 170],
               [['Claudia, când află ideea lui Bogdan', '', ''], ['Colegii, când apare Joi', '', ''],
                ['Adi, când e trimis afară', '', ''], ['Joi, acasă, la finalul zilei', '', '']], row_h=26),
             T(5, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Textul literar transmite doar informații exacte.',
                 'Un text literar poate transmite emoții și sentimente.',
                 'Lumea textului literar e imaginară, chiar când seamănă cu cea reală.',
                 'Limbajul textului literar este expresiv.'), row_h=20),
             L(6, 'Bogdan într-o lume fantastică', [
                 'Rescrie în 4-5 propoziții momentul în care Joi e descoperit în clasă, dar mută-l',
                 'într-o lume imaginară: Joi vorbește, băncile zboară sau altceva ales de tine.'], 3),
         ]),

    fisa(3, 'p. 15',
         'Reper (manual, p. 15): Cuvântul-cheie este un substantiv sau un grup de cuvinte care numește aspectul cel '
         'mai important dintr-un fragment. Tema este ideea centrală a textului și se numește printr-un substantiv. '
         'Ideea principală pornește de la cuvântul-cheie, la care adaugi un predicat și alte cuvinte. '
         'Planul simplu de idei cuprinde ideile principale, în ordinea din text.',
         [
             X(1, 'Zmeul lui Matei', [
                 'Citește textul. Sub fiecare fragment, încercuiește cuvântul-cheie potrivit.',
                 '[1] Matei și-a construit singur un zmeu din hârtie roșie. A lucrat la el trei seri la rând.',
                 '         zmeul    ·    hârtia    ·    seara',
                 '[2] Duminică, pe deal, vântul a ridicat zmeul mai sus decât pe toate celelalte.',
                 '         duminica    ·    zborul    ·    dealul',
                 '[3] Deodată, sfoara s-a rupt, iar zmeul s-a agățat în vârful unui plop înalt.',
                 '         plopul    ·    vântul    ·    necazul',
                 '[4] Vecinul Andrei a adus o scară și l-au coborât împreună. Așa au devenit prieteni.',
                 '         scara    ·    ajutorul    ·    etajul']),
             T(2, 'Din cuvântul-cheie, ideea principală', 'Adaugă un predicat și alte cuvinte, ca în model.',
               ['Fr.', 'Cuvântul-cheie', 'Ideea principală'], [40, 130, 340],
               [['1', 'zmeul', 'Matei își construiește singur un zmeu.'], ['2', '', ''], ['3', '', ''], ['4', '', '']],
               row_h=24),
             L(3, 'Un titlu nou', 'Propune un alt titlu pentru text, care să anunțe tema. Explică alegerea într-o propoziție.'),
         ],
         [
             T(4, 'Care este tema?', 'Scrie tema potrivită: călătoria, copilăria, familia, natura, prietenia, școala.',
               ['Pe scurt, textul...', 'Tema'], [400, 110], gol(
                   '...povestește prima zi a unei fete în clasa a V-a.',
                   '...urmărește doi frați care pleacă cu trenul să vadă alte orașe.',
                   '...arată cum se schimbă pădurea de la un anotimp la altul.',
                   '...descrie masa de duminică a bunicilor, părinților și copiilor.',
                   '...este „Zmeul lui Matei”, de pe prima pagină.'), row_h=20),
             T(5, 'Planul amestecat', 'Ideile principale ale altei povestiri s-au amestecat. Numerotează-le în ordine.',
               ['Ideea principală', 'Nr.'], [440, 70], gol(
                   'Familia lipește afișe în tot cartierul.',
                   'Mița este adusă acasă.',
                   'Pisica Mița dispare într-o seară de toamnă.',
                   'Copiii îi pregătesc pisicii un culcuș nou.',
                   'O vecină aude un mieunat din pivniță.'), row_h=20),
             T(6, 'Idee principală sau detaliu?', 'Pentru textul despre zmeu, scrie IP (idee principală) sau D (detaliu).',
               ['Enunțul', 'IP / D'], [440, 70], gol(
                   'Zmeul era din hârtie roșie.',
                   'Zmeul se agață într-un plop după ce se rupe sfoara.',
                   'Matei a lucrat la zmeu trei seri.',
                   'Vecinul îl ajută pe Matei să coboare zmeul.'), row_h=20),
         ]),

    fisa(4, 'p. 16',
         'Reper: Interpretezi un text când explici ce înțelesuri au faptele, cuvintele și gesturile personajelor. '
         'Orice interpretare se sprijină pe ceva din text. Textul discutat: „Prietenul meu” de Ioana Pârvulescu.',
         [
             T(1, 'Aceeași faptă, două fețe', 'Bogdan își aduce cățelul la școală. Completează tabelul.',
               ['Întrebarea', 'Răspunsul tău'], [200, 310], gol(
                   'Ce a greșit Bogdan?', 'Cine a suferit din cauza lui?',
                   'Ce a făcut bine, la final?', 'Cum și-a reparat greșeala?'), row_h=30),
             T(2, 'De acord sau nu?', 'Scrie DA sau NU și dă un argument din text.',
               ['Afirmația', 'DA / NU', 'Argumentul'], [230, 60, 220],
               [['Claudia a avut dreptate să-l oprească.', '', ''], ['Profesoara a fost nedreaptă cu Adi.', '', ''],
                ['Dirigintele nu era chiar supărat.', '', ''], ['Bogdan este un prieten bun.', '', '']], row_h=30),
             L(3, 'Dacă Bogdan tăcea', [
                 'Ce s-ar fi întâmplat dacă Bogdan n-ar fi spus adevărul?',
                 'Scrie o urmare pentru Adi și una pentru prietenia lor.'], 2),
         ],
         [
             L(4, 'Ordinea selfie-urilor', [
                 'La final, Bogdan își face un selfie întâi cu Adi și abia apoi cu Joi.',
                 'Ce arată această ordine despre ce a înțeles el? Scrie 2-3 propoziții.'], 2),
             T(5, 'Comparațiile spun ceva', 'Explică ce arată fiecare comparație despre personaj.',
               ['Comparația din text', 'Ce arată'], [260, 250], gol(
                   'Adi, „roșu ca focul, apoi alb ca zăpada”', 'Joi mârâia „ca un urs”',
                   'Joi, când merge, „zici că-i un fulg”'), row_h=28),
             L(6, 'Biletul de scuze', 'Scrie biletul prin care Bogdan i-ar fi putut cere iertare lui Adi (4-5 propoziții).', 3),
         ]),

    fisa(5, 'p. 17',
         'Reper (manual, p. 17): Textul nonliterar se referă la aspecte din realitate. El poate fi scris cu scopul de '
         'a informa, de a convinge sau de a amuza cititorul. Afișul, fluturașul, invitația, articolul de ziar sau de '
         'revistă, rețeta, instrucțiunile, eticheta și articolul de dicționar sunt texte nonliterare.',
         [
             T(1, 'Literar sau nonliterar?', [
                 'Scrie L sau N. Pentru textele nonliterare, scrie și scopul: a informa, a convinge',
                 'sau a amuza.'],
               ['Fragmentul', 'L / N', 'Scopul'], [330, 60, 120],
               [['Biblioteca e deschisă de luni până vineri, între 8 și 15.', '', ''],
                ['Norii își plimbau turmele albe peste satul adormit.', '', ''],
                ['Luați caietele Bufnița! Au cele mai rezistente coperte!', '', ''],
                ['De ce a luat elevul scara la școală? Ca să ajungă la liceu!', '', ''],
                ['Ghiozdanul meu oftează greu în fiecare luni dimineață.', '', ''],
                ['Amestecați făina cu laptele și coaceți 20 de minute.', '', '']], row_h=20),
             T(2, 'Ce fel de text este?', 'Scrie tipul: afiș, rețetă, invitație, etichetă, instrucțiuni, articol de dicționar.',
               ['Textul', 'Tipul'], [370, 140], gol(
                   'SELFIE s. n. Fotografie pe care o persoană și-o face sieși.',
                   'Te aștept la ziua mea, sâmbătă, la ora 17, în parc!',
                   'Ingrediente: 3 ouă, 200 g de zahăr, 250 g de făină.',
                   'Țineți apăsat butonul roșu 3 secunde pentru a porni.',
                   'Suc de mere 100% natural, 1 l. A se păstra la rece.',
                   'Concert de colinde, 20 decembrie, sala festivă. Intrarea liberă!'), row_h=20),
             L(3, 'Din literar, în nonliterar', [
                 'Rescrie fiecare propoziție ca pe o informație exactă, fără limbaj expresiv.',
                 'a) Soarele și-a întins degetele de aur peste oraș.',
                 'b) Ploaia a bătut cu degetele în geam toată noaptea.'], 2),
         ],
         [
             T(4, 'Joi în două texte', [
                 'Citește textul informativ și compară-l cu felul în care e descris Joi în „Prietenul meu”.',
                 '„Chihuahua este una dintre cele mai mici rase de câini. Un exemplar adult cântărește,',
                 'de regulă, sub trei kilograme. Rasa își trage numele de la statul Chihuahua din Mexic.”'],
               ['', 'Povestirea', 'Textul informativ'], [110, 200, 200],
               [['Scopul', '', ''], ['Limbajul', '', ''], ['Un exemplu', '', '']], row_h=30),
             L(5, 'Afișul clasei', [
                 'Scrie un afiș pentru o expoziție cu selfie-urile clasei: titlu, dată, loc, program',
                 'și o propoziție care să convingă vizitatorii.'], 3),
         ]),

    fisa(6, 'pp. 18-19',
         'Reper: Fragmentul din „Hronicul și cântecul vârstelor” de Lucian Blaga evocă o întâmplare din copilăria '
         'scriitorului: o descoperire pe care o ține secretă și pe care încearcă apoi să o verifice împreună cu un prieten.',
         [
             T(1, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Copiii erau născuți în ani diferiți.',
                 'Mamei îi plăcea să audă strigătele prietenilor din curte.',
                 'Adam jură că spune adevărul, cu formula „zău curat”.',
                 'Cei doi pornesc pe uliță în aceeași direcție.',
                 'La capătul încercării, cerul se despică în două.'), row_h=20),
             X(2, 'Cuvinte din glosar, în propoziții noi', [
                 'Înlocuiește cuvintele dintre paranteze cu: răgaz, a mântui, a tălmăci, într-adins.',
                 'a) După ce am (terminat) ______________ tema, am ieșit la joacă.',
                 'b) Bunicul mi-a (explicat) ______________ ce înseamnă visul.',
                 'c) Te-am lăsat să aștepți (intenționat) ______________.',
                 'd) În (timpul liber dintre ore) ______________, am citit o poveste.']),
             T(3, 'Încercarea celor doi prieteni', 'Completează tabelul pe scurt.',
               ['Etapa', 'Ce se întâmplă în text'], [150, 360], gol(
                   'Ce credeau copiii', 'Ce au făcut', 'Ce s-a întâmplat', 'Ce le-ai spune tu'), row_h=26),
         ],
         [
             T(4, 'Doi povestitori', 'Compară cele două texte citite în această unitate.',
               ['', '„Prietenul meu”', 'Fragmentul lui Blaga'], [150, 180, 180],
               [['Cine povestește?', '', ''], ['Cine sunt prietenii?', '', ''],
                ['Ce secret sau plan are?', '', ''], ['Cum se termină?', '', '']], row_h=26),
             T(5, 'Copilăria de atunci și de azi', 'Compară lumea din fragment cu a ta.',
               ['', 'În fragment', 'Azi, la tine'], [150, 180, 180],
               [['Unde se joacă copiii?', '', ''], ['Cum se cheamă la joacă?', '', ''],
                ['Cum jură că spun adevărul?', '', '']], row_h=26),
             L(6, 'A doua zi', [
                 'Scrie un dialog de 4 replici între povestitor și Adam, a doua zi, când unul dintre ei',
                 'are o nouă idee de a pune cerul la încercare. Folosește linia de dialog.'], 3),
         ]),

    fisa(7, 'pp. 20-21',
         'Reper (manual, p. 21): Emoțiile sunt trăiri de scurtă durată, cu o intensitate care variază; sunt reacții '
         'firești la situațiile din viața unei persoane. Personalitatea este formată din însușirile stabile ale unui om. '
         'Identitatea personală este ceea ce îl caracterizează pe un om și îl deosebește de ceilalți.',
         [
             T(1, 'Ce emoție trăiești?', 'Scrie emoția potrivită: bucurie, tristețe, frică, furie, dezgust.',
               ['Situația', 'Emoția'], [400, 110], gol(
                   'Mâine pleci în excursie cu toată clasa.',
                   'Un coleg îți ia locul la coadă fără să întrebe.',
                   'Muști dintr-un măr și vezi în el un vierme.',
                   'Auzi pași pe scară, seara, când ești singur acasă.',
                   'Prietenul tău cel mai bun se mută în alt oraș.'), row_h=20),
             T(2, 'Termometrul emoțiilor', 'Ordonează cuvintele de la emoția cea mai slabă la cea mai puternică.',
               ['Cuvintele amestecate', 'În ordine'], [230, 280], gol(
                   'furios, nemulțumit, supărat', 'îngrozit, îngrijorat, speriat', 'fericit, mulțumit, bucuros'),
               row_h=24),
             T(3, 'Emoție sau însușire?', 'Scrie E (emoție, de scurtă durată) sau Î (însușire stabilă).',
               ['Cuvântul', 'E / Î', 'Cuvântul', 'E / Î'], [185, 70, 185, 70],
               [['speriat', '', 'răbdător', ''], ['harnic', '', 'furios', ''],
                ['surprins', '', 'sincer', ''], ['generos', '', 'rușinat', '']], row_h=20),
         ],
         [
             T(4, 'Emoțiile personajelor', 'Scrie ce simte fiecare personaj în situația dată.',
               ['Personajul și situația', 'Emoția'], [380, 130], gol(
                   'Bogdan, după ce Adi a fost trimis afară din clasă',
                   'Povestitorul lui Blaga, când Adam spune că și cu el vine cerul',
                   'Riley, după ce familia se mută în alt oraș'), row_h=24),
             T(5, 'Ce ți-ar spune emoțiile?', 'E prima ta zi într-o școală nouă. Ce ți-ar spune fiecare emoție?',
               ['Emoția', 'Ce ți-ar spune'], [110, 400], gol('Bucuria', 'Frica', 'Tristețea', 'Furia'), row_h=26),
             L(6, 'Scrisoare pentru Bucurie', [
                 'Bucuria crede că Tristețea nu are niciun rost. Scrie-i un bilet de 4-5 propoziții',
                 'în care să-i arăți când ne ajută tristețea.'], 3),
         ]),

    fisa(8, 'pp. 22-23',
         'Reper (manual, p. 22): Comunicarea poate fi verbală (prin cuvinte, orală sau scrisă), nonverbală (mimică, '
         'gesturi, poziția corpului, contact vizual) și paraverbală (intonație, intensitatea vocii, ritmul vorbirii). '
         'În comunicarea orală, participanții au rolurile de vorbitor și ascultător.',
         [
             T(1, 'Cum comunic?', 'Scrie V (verbal), NV (nonverbal) sau PV (paraverbal).',
               ['Semnul', 'Tipul', 'Semnul', 'Tipul'], [185, 70, 185, 70],
               [['ridici din umeri', '', 'îți tremură vocea', ''], ['spui „Sunt fericit!”', '', 'te încrunți', ''],
                ['vorbești în șoaptă', '', 'scrii „Mi-e dor de tine”', ''],
                ['eviți privirea celuilalt', '', 'vorbești repede, fără pauze', '']], row_h=20),
             X(2, 'Cine vorbește, cine ascultă?', [
                 'Tudor o vede pe Ana stând singură pe o bancă. Citește dialogul și răspunde.',
                 '— Ce s-a întâmplat, Ana? Pari supărată.',
                 '— Am pierdut brățara primită de la bunica.',
                 '— Îmi pare rău. Vrei s-o căutăm împreună în sala de sport?',
                 '— Da, mulțumesc! Mă simt deja mai bine.',
                 'a) Cine este vorbitor în prima replică? __________  Dar ascultător? __________',
                 'b) De câte ori se schimbă rolurile? ______',
                 'c) Ce emoție are Ana la început? ______________  Dar la final? ______________']),
             T(3, 'Potrivit sau nepotrivit?', 'Scrie P (potrivit) sau N (nepotrivit) pentru felul în care e exprimată emoția.',
               ['Situația', 'P / N'], [440, 70], gol(
                   'Pierzi un meci și arunci cu mingea spre arbitru.',
                   'Înainte de serbare, îi spui profesorului că ai emoții.',
                   'Un coleg îți spune că i s-a pierdut câinele, iar tu râzi.',
                   'Ești supărat pe fratele tău și îi spui calm ce te-a deranjat.',
                   'Primești un cadou care nu-ți place și strâmbi din nas.'), row_h=20),
         ],
         [
             T(4, 'Aceeași propoziție, altă emoție', [
                 'Rostește propoziția „Ai venit.” în patru feluri.',
                 'Notează cum sună vocea și ce face fața.'],
               ['Emoția', 'Vocea (paraverbal)', 'Fața, gesturile (nonverbal)'], [110, 200, 200],
               [['bucurie', '', ''], ['furie', '', ''], ['surpriză', '', ''], ['tristețe', '', '']], row_h=26),
             L(5, 'Ascultătorul atent', [
                 'Scrie câte un răspuns potrivit pentru fiecare replică.',
                 'a) „Mâine am concurs și mi-e frică să nu greșesc.”',
                 'b) „Nimeni nu m-a chemat azi la joacă.”'], 2),
             L(6, 'Emoția ascunsă', [
                 'Scrie un mesaj de 3 propoziții care să transmită o emoție fără să-i spui numele.',
                 'Colegul tău trebuie să o ghicească.'], 2),
         ]),

    fisa(9, 'pp. 24-25',
         'Reper (manual, pp. 24-25): Propoziția este o comunicare cu un singur predicat. Predicatul arată '
         'ce face subiectul; subiectul arată cine face acțiunea. Propoziția simplă are doar predicat și '
         'subiect; cea dezvoltată are și cel puțin o parte secundară. După forma verbului cu rol de '
         'predicat, propoziția este afirmativă sau negativă.',
         [
             T(1, 'Propoziție sau nu?', 'Scrie DA dacă grupul de cuvinte este propoziție și NU dacă nu este.',
               ['Grupul de cuvinte', 'DA / NU'], [400, 110], gol(
                   'Copiii se joacă în parc.', 'Pe o bancă verde.', 'Ploaia a încetat.',
                   'Foarte frumos și liniștit.', 'Cu o carte în mână.'), row_h=20),
             X(2, 'Vânătoarea de predicate', [
                 'Citește mesajul lui Vlad și încercuiește predicatele.',
                 '„Bună, Irina! Mâine plecăm la munte. Tata a luat bilete. Tu vii? Mama face sandvișuri.”',
                 'Câte propoziții are mesajul? _____   De ce „Bună, Irina!” nu e propoziție? ______________']),
             X(3, 'Cine face? Ce face?', [
                 'Completează subiectul sau predicatul care lipsește; scrie S sau P deasupra lui.',
                 'a) ____________ latră la poștaș.     b) Bunica ____________ o plăcintă.',
                 'c) ____________ zboară spre țările calde.     d) Elevii ____________ în bancă.']),
             T(4, 'Adevărat sau fals?', 'Scrie A (adevărat) sau F (fals).', ['Afirmația', 'A / F'], [430, 80], gol(
                 'O propoziție poate avea două predicate.',
                 'Propoziția simplă are doar subiect și predicat.',
                 'Propoziția „Nu știu.” este negativă.',
                 'În scris, propoziția începe cu literă mică.'), row_h=20),
             L(5, 'Întoarce propoziția', [
                 'Schimbă forma predicatului: din afirmativă în negativă sau invers.',
                 'a) Nu am văzut filmul.     b) Luca ascultă muzică.     c) Câinele nu a mâncat.     d) Eu înțeleg exercițiul.']),
         ],
         [
             T(6, 'Scara propoziției', 'La fiecare treaptă, păstrează propoziția de dinainte și adaugă un singur cuvânt nou. '
                                      'Propoziția trebuie să rămână corectă.',
               ['Treapta', 'Propoziția'], [70, 440], [['1', 'Pisica doarme.'], ['2', ''], ['3', ''], ['4', '']], row_h=24),
             T(7, 'Potrivește', ['Scrie litera potrivită lângă fiecare propoziție.',
                                 'A = simplă, afirmativă     B = simplă, negativă     C = dezvoltată, afirmativă     D = dezvoltată, negativă'],
               ['Propoziția', 'Litera'], [410, 100], gol(
                   'Soarele răsare.', 'Nu am uitat tema acasă.', 'Vântul nu bate.',
                   'Andrei a câștigat concursul de șah.', 'Mașina nu a pornit dimineața.', 'Florile cresc.')),
             L(8, 'Detectivul de greșeli', [
                 'Fiecare propoziție are câte o greșeală de scriere sau de punctuație. Rescrie-le corect.',
                 'a) ana citește o carte.     b) Ce faci Mihai?',
                 'c) Am cumpărat mere pere și prune.     d) Vino repede, andrei!'], 2),
             L(9, 'Mesaj cu reguli', 'Scrie un mesaj de patru propoziții către un prieten, despre weekendul tău: una simplă, una dezvoltată, '
                                    'una negativă și una care se termină cu semnul întrebării. Numerotează-le.', 3),
         ]),

    fisa(10, 'pp. 26-27',
         'Reper (manual, pp. 26-27, 33): Cuvântul are sens (conținutul) și sunete (forma); sensul se stabilește în '
         'context. În dicționar, cuvintele sunt în ordine alfabetică; dacă primele litere sunt identice, ordonarea se '
         'face după prima literă diferită. În alfabetul limbii române, ă și â vin după a, î după i, ș după s, ț după t.',
         [
             T(1, 'Același cuvânt, alt sens', 'Scrie sensul cuvântului dintre ghilimele în fiecare propoziție.',
               ['Propoziția', 'Sensul'], [290, 220], gol(
                   'Pe „lac” plutesc două bărci.', 'Mama a dat cu „lac” pe ușa veche.',
                   'Am rupt „tocul” de la pantof.', 'Pune creionul în „toc”, te rog.',
                   'Am pierdut „cheia” de la casă.', 'Aceasta e „cheia” problemei.'), row_h=20),
             X(2, 'Care vine primul în dicționar?', [
                 'Încercuiește, din fiecare pereche, cuvântul care apare primul în dicționar.',
                 'a) sac – șah       b) țară – tată       c) măr – mare       d) înger – iarnă       e) joc – joacă']),
             T(3, 'Pe ce pagină?', [
                 'O pagină de dicționar începe cu „pisică” și se termină cu „plajă”.',
                 'Scrie DA dacă fiecare cuvânt se află pe această pagină și NU dacă nu se află.'],
               ['Cuvântul', 'DA / NU', 'Cuvântul', 'DA / NU'], [185, 70, 185, 70],
               [['pix', '', 'pian', ''], ['pițigoi', '', 'plan', ''], ['pistol', '', 'pisc', '']], row_h=20),
         ],
         [
             T(4, 'Citește articolul de dicționar', [
                 'Articol simplificat, după informațiile din manual (p. 17):',
                 'SELFIE, selfie-uri, s. n. Fotografie pe care o persoană și-o face sieși cu un dispozitiv',
                 'digital. – Din engl. selfie.'],
               ['Întrebarea', 'Răspunsul'], [230, 280], gol(
                   'Care este cuvântul-titlu?', 'Care este forma de plural?', 'Ce parte de vorbire este?',
                   'Ce înseamnă?', 'Din ce limbă provine?'), row_h=22),
             T(5, 'Prescurtările din dicționar', 'Scrie ce înseamnă fiecare prescurtare.',
               ['Prescurtarea', 'Înseamnă', 'Prescurtarea', 'Înseamnă'], [100, 155, 100, 155],
               [['s. m.', '', 'adj.', ''], ['s. f.', '', 'vb.', ''], ['s. n.', '', 'expr.', '']], row_h=22),
             L(6, 'Ordonează alfabetic', ['Scrie cuvintele în ordinea din dicționar.',
                                          'scară, scoică, scaun, scânteie, scade, scăunel']),
         ]),

    fisa(11, 'pp. 28-29',
         'Reper (manual, pp. 28-29): Sinonimele sunt cuvinte cu formă diferită și sens asemănător sau identic; '
         'antonimele au formă diferită și sens opus. În ambele cazuri, cuvintele sunt aceeași parte de vorbire. '
         'Alegerea sinonimului depinde de context; un cuvânt cu mai multe sensuri are sinonime pentru fiecare sens.',
         [
             T(1, 'Sinonime sau antonime?', 'Scrie S (sinonime) sau A (antonime).',
               ['Perechea', 'S / A', 'Perechea', 'S / A'], [185, 70, 185, 70],
               [['vesel – trist', '', 'prieten – amic', ''], ['a zâmbi – a surâde', '', 'cald – rece', ''],
                ['curajos – fricos', '', 'a privi – a se uita', ''], ['mult – puțin', '', 'a sfârși – a termina', '']],
               row_h=20),
             T(2, 'Cuvântul „mare”, în contexte diferite', [
                 'Înlocuiește „mare” cu sinonimul potrivit: puternică, spațioasă, imensă, înalt, importantă.'],
               ['Propoziția', 'Sinonimul'], [380, 130], gol(
                   'Blocul nostru are o curte mare.', 'Afară a început o ploaie mare.', 'Am simțit o bucurie mare.',
                   'Fratele meu e mare, a crescut mult vara asta.', 'Azi e o zi mare pentru echipa noastră.'), row_h=20),
             T(3, 'Expresia, într-un singur cuvânt', 'Găsește un verb sinonim pentru fiecare expresie.',
               ['Expresia', 'Sinonimul', 'Expresia', 'Sinonimul'], [165, 90, 165, 90],
               [['a o lua la sănătoasa', '', 'a-și lua inima în dinți', ''], ['a trage chiulul', '', 'a face ochii mari', ''],
                ['a-și bate capul', '', 'a trage cu urechea', '']], row_h=22),
         ],
         [
             T(4, 'Antonime cu un început de cuvânt', 'Formează antonimul adăugând la început ne-, des- sau dez-.',
               ['Cuvântul', 'Antonimul', 'Cuvântul', 'Antonimul'], [165, 90, 165, 90],
               [['fericit', '', 'a face', ''], ['atent', '', 'a lega', ''], ['cinstit', '', 'a încuia', '']], row_h=22),
             X(5, 'Ghicitori cu sinonime și antonime', [
                 'Găsește cuvântul care se potrivește ambelor indicii.',
                 'a) sinonim cu „amic”, antonim cu „dușman”: ______________',
                 'b) sinonim cu „voios”, antonim cu „trist”: ______________',
                 'c) sinonim cu „iute”, antonim cu „încet”: ______________',
                 'd) sinonim cu „a sfârși”, antonim cu „a începe”: ______________']),
             L(6, 'Textul pe dos', [
                 'Înlocuiește cu antonime: dimineața, caldă, senină, vesel, a urcat, încet.',
                 '„Dimineața era caldă și senină. Un băiat vesel a urcat încet pe deal.”'], 2),
         ]),

    fisa(12, 'pp. 30-31',
         'Reper (manual, pp. 30-31): Câmpul lexical cuprinde cuvintele care se raportează la aceeași idee și sunt '
         'aceeași parte de vorbire; au trăsături de sens comune, dar și trăsături care le deosebesc. În câmpul lexical '
         'al unui cuvânt intră și sinonimele lui și expresiile care îl conțin. Un cuvânt cu mai multe sensuri poate '
         'intra în câmpuri lexicale diferite.',
         [
             T(1, 'Sortează cuvintele', [
                 'Așază cuvintele în câmpul lexical potrivit: vioară, lopată, asistentă, stetoscop, trandafir,',
                 'dirijor, stropitoare, pacient, tobă, răsad, bandaj, pian.'],
               ['Muzica', 'Grădina', 'Spitalul'], [170, 170, 170], rows=4, row_h=22),
             T(2, 'Un cuvânt, două câmpuri', 'Scrie două câmpuri lexicale în care poate intra fiecare cuvânt.',
               ['Cuvântul', 'Câmpul 1', 'Câmpul 2'], [110, 200, 200],
               [['notă', '', ''], ['cheie', '', ''], ['rădăcină', '', ''], ['masă', '', '']], row_h=22),
             X(3, 'Ghicitori de familie', [
                 'Completează cu termenul de rudenie potrivit.',
                 'a) Sora tatălui meu este ______________.     b) Copilul unchiului meu este ______________.',
                 'c) Fiul surorii mele este ______________.     d) Soțul surorii mele este ______________.']),
         ],
         [
             T(4, 'Câmpul lexical al prieteniei', 'Scrie șase substantive din câmpul lexical al prieteniei.',
               ['', '', ''], [170, 170, 170], rows=2, row_h=24),
             L(5, 'Mesaj pentru un prieten', 'Folosește trei dintre substantivele de mai sus într-un mesaj scurt. Subliniază-le.', 2),
             T(6, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'În câmpul lexical al unui cuvânt pot intra și expresii.',
                 'Cuvintele unui câmp lexical au mereu formă asemănătoare.',
                 'Un cuvânt cu mai multe sensuri poate intra în câmpuri diferite.',
                 'Într-un câmp lexical pot fi amestecate substantive și verbe.'), row_h=20),
             T(7, 'Completează seria', 'Adaugă câte două cuvinte în fiecare câmp lexical.',
               ['Câmpul lexical', 'Cuvinte date', 'Adaugă două'], [120, 190, 200],
               [['vremea', 'ploaie, ninsoare', ''], ['sportul', 'minge, arbitru', ''], ['bucătăria', 'cratiță, aragaz', '']],
               row_h=22),
         ]),

    fisa(13, 'pp. 32-33',
         'Reper (manual, pp. 32-33): Vocalele [a], [ă], [î], [e], [i], [o], [u] pot forma singure o silabă; consoanele '
         'se pronunță cu ajutorul unei vocale; semivocalele seamănă cu vocalele, dar nu pot forma singure o silabă. '
         'Alfabetul are 31 de litere. Grupurile ce, ci, ge, gi, che, chi, ghe, ghi notează un singur sunet când sunt '
         'urmate de o vocală în aceeași silabă.',
         [
             X(1, 'Literele care lipsesc', [
                 'Completează literele care lipsesc din alfabet.',
                 'a) a, ă, ___, b       b) h, i, ___, j       c) s, ___, t       d) t, ___, u       e) v, ___, x, y, z']),
             X(2, 'Schimbă o vocală', [
                 'Schimbă o singură vocală și obține alt cuvânt. Scrie-l alături.',
                 'lac → ____________    mare → ____________    vis → ____________    dor → ____________']),
             T(3, 'Un sunet sau două?', 'Grupul de litere de după linie notează un sunet sau două? Scrie 1 sau 2.',
               ['Cuvântul', '1 / 2', 'Cuvântul', '1 / 2'], [185, 70, 185, 70],
               [['ceai – ce', '', 'cerc – ce', ''], ['ghindă – ghi', '', 'gheață – ghe', ''],
                ['gem – ge', '', 'geantă – ge', '']], row_h=20),
             T(4, 'Litere și sunete', 'Scrie câte litere și câte sunete are fiecare cuvânt.',
               ['Cuvântul', 'Litere', 'Sunete'], [250, 130, 130],
               [['ceapă', '', ''], ['chip', '', ''], ['fix', '', ''], ['ghete', '', ''], ['lux', '', '']], row_h=20),
         ],
         [
             T(5, 'Cum sună i-ul de la final?', 'Scrie V (vocală), S (semivocală) sau Ș (i „șoptit”).',
               ['Cuvântul', 'V / S / Ș', 'Cuvântul', 'V / S / Ș'], [185, 70, 185, 70],
               [['lupi', '', 'tigri', ''], ['rai', '', 'pași', ''], ['membri', '', 'pui', '']], row_h=20),
             X(6, 'Diacriticele schimbă sensul', [
                 'Încercuiește cuvântul potrivit.',
                 'a) Am prins un (peste / pește) mare.          b) Am trecut (peste / pește) pod.',
                 'c) Bunica (tine / ține) pisica în brațe.         d) Mă gândesc la (tine / ține).',
                 'e) Colegii au izbucnit în (ras / râs).            f) Tata s-a (ras / râs) înainte de serbare.']),
             L(7, 'Textul fără diacritice', [
                 'Rescrie corect, cu diacritice:',
                 '„Maine mergem la munte cu fratii mei. Imi iau caciula si manusile.”'], 2),
         ]),

    fisa(14, 'pp. 34-35',
         'Reper (manual, pp. 34-35): Silaba este formată dintr-o vocală sau dintr-un grup de sunete care conține o '
         'vocală și se pronunță cu un singur efort expirator. Accentul este pronunțarea mai intensă a unei silabe; în '
         'limba română nu are loc fix și poate deosebi sensul unor cuvinte scrise la fel (ácele – acéle).',
         [
             T(1, 'Desparte în silabe', 'Desparte în silabe și scrie numărul silabelor.',
               ['Cuvântul', 'Despărțirea în silabe', 'Nr.'], [150, 290, 70],
               [['prietenie', '', ''], ['fotografie', '', ''], ['cățeluș', '', ''], ['emoție', '', ''],
                ['bibliotecă', '', '']], row_h=20),
             X(2, 'Cuvinte din silabe amestecate', [
                 'Așază silabele în ordine și scrie cuvântul.',
                 'a) co · cio · tă · la → ______________        b) nic · cea · sor → ______________',
                 'c) tu · pră · ră · ji → ______________        d) ven · ră · a · tu → ______________']),
             X(3, 'Silaba accentuată', [
                 'Desparte în silabe și subliniază silaba accentuată.',
                 'fereastră: ______________    telefon: ______________    caiet: ______________',
                 'cameră: ______________    elev: ______________    vacanță: ______________']),
             L(4, 'Cuvintele școlii', [
                 'Scrie patru cuvinte din câmpul lexical al școlii. Desparte-le în silabe',
                 'și subliniază silaba accentuată.']),
         ],
         [
             T(5, 'Accentul schimbă sensul', 'Explică ce înseamnă cuvântul, după cum e accentuat.',
               ['Cuvântul', 'Sensul'], [110, 400], gol('úmbrele', 'umbréle', 'módele', 'modéle'), row_h=22),
             X(6, 'Numără silabele', [
                 'Citește propoziția: „Joi e un câine mic, dar are un lătrat mare.”',
                 'a) Subliniază cuvintele de o silabă.      b) Câte silabe are propoziția? ______']),
             T(7, 'Unde cade accentul?', 'Scrie câte trei cuvinte de două silabe în fiecare coloană.',
               ['Accent pe prima silabă (ex.: carte)', 'Accent pe a doua silabă (ex.: elev)'], [255, 255], rows=3, row_h=26),
             L(8, 'Propoziții cu accent', 'Scrie o propoziție cu „úmbrele” și „umbréle” și una cu „módele” și „modéle”.'),
         ]),

    fisa(15, 'p. 36',
         'Reper (manual, p. 36): Etapele scrierii sunt: 1. pregătirea pentru redactare (subiect, public, scop, '
         'cele șase întrebări, plan); 2. scrierea ciornei; 3. revizuirea; 4. editarea; 5. publicarea. '
         'Te poți întoarce oricând la o etapă anterioară.',
         [
             T(1, 'În ce etapă sunt?', 'Scrie numărul etapei (1-5) în care faci fiecare lucru.',
               ['Ce fac', 'Etapa'], [440, 70], gol(
                   'Îmi aleg subiectul și mă gândesc cine va citi textul.',
                   'Scriu prima variantă, fără să mă opresc la fiecare cuvânt.',
                   'Șterg propozițiile care nu au legătură cu subiectul.',
                   'Scriu titlul la mijloc și încep fiecare paragraf cu alineat.',
                   'Citesc textul colegilor, de pe scaunul autorului.',
                   'Răspund la întrebările: cine? ce? când? unde? de ce? cum?',
                   'Verific dacă ideile sunt clare și exprimarea e corectă.'), row_h=20),
             T(2, 'Pentru cine și de ce scriu?', 'Stabilește publicul și scopul (a informa, a amuza, a convinge).',
               ['Situația', 'Publicul', 'Scopul'], [270, 120, 120],
               [['Îi scrii bunicii cum a fost prima zi de școală.', '', ''],
                ['Scrii un anunț pentru târgul de carte al școlii.', '', ''],
                ['Povestești prietenilor o pățanie hazlie.', '', '']], row_h=22),
             L(3, 'Același eveniment, alt cititor', [
                 'Un elev îi scrie unui prieten: „Excursia a fost super, m-am pierdut, ce tare!”',
                 'Rescrie mesajul pentru doamna dirigintă, în 2-3 propoziții.'], 2),
         ],
         [
             T(4, 'Cele șase întrebări', [
                 'Citește relatarea și răspunde la cele șase întrebări.',
                 '„Vinerea trecută, în excursia clasei la Grădina Botanică, Luca a rămas în urmă',
                 'ca să fotografieze o floare rară. Când a ridicat privirea, grupul dispăruse. Speriat,',
                 'și-a amintit sfatul dirigintei și a rămas lângă poarta serei, unde l-au găsit colegii.”'],
               ['Întrebarea', 'Răspunsul'], [90, 420], gol('Cine?', 'Ce?', 'Când?', 'Unde?', 'De ce?', 'Cum?'), row_h=20),
             X(5, 'Care început e mai bun?', [
                 'Citește două introduceri pentru relatarea lui Luca.',
                 'A: „Vă voi povesti ce s-a întâmplat în excursie.”',
                 'B: „N-am crezut că o floare mă poate face să mă pierd într-o grădină.”',
                 'Care introducere stârnește mai mult interesul? ____  De ce? _________________________________']),
             L(6, 'Introducerea ta', 'Scrie o introducere captivantă, de 2-3 propoziții, pentru o întâmplare trăită de tine.', 2),
         ]),

    fisa(16, 'p. 37',
         'Reper (manual, p. 37): Relatarea prezintă detaliat un eveniment la care a participat cel care îl povestește. '
         'Orice text are introducere, cuprins și încheiere; cuprinsul este partea cea mai mare. Paragraful începe cu '
         'alineat și dezvoltă o singură idee. Cuvinte ca mai întâi, apoi, după aceea, în cele din urmă păstrează '
         'ordinea în timp a întâmplărilor.',
         [
             T(1, 'Introducere, cuprins sau încheiere?', 'Scrie I, C sau Î pentru fiecare fragment dintr-o relatare.',
               ['Fragmentul', 'I / C / Î'], [430, 80], gol(
                   'Totul a început într-o sâmbătă, când bunicul a scos cutia cu unelte.',
                   'Apoi am tăiat scândurile și le-am bătut în cuie, una câte una.',
                   'De atunci, știu că un lucru făcut cu mâna ta are altă valoare.',
                   'Mai întâi, am desenat pe hârtie căsuța pentru păsări.'), row_h=20),
             X(2, 'Cuvinte care leagă întâmplările', [
                 'Completează cu: mai întâi, apoi, după aceea, în cele din urmă.',
                 '„Sâmbătă am făcut prima mea prăjitură. ______________, am citit rețeta de două ori.',
                 '______________ am amestecat ouăle cu zahărul. ______________ am adăugat făina și am pus',
                 'tava în cuptor. ______________, după o oră de așteptare, am gustat-o împreună cu mama.”']),
             X(3, 'Unde începe un paragraf nou?', [
                 'Textul are trei paragrafe, dar a fost scris fără alineate. Marchează cu // locul unde',
                 'începe fiecare paragraf nou.',
                 '„Anul trecut am participat la primul meu concurs de înot. Eram emoționat, dar hotărât',
                 'să câștig. Când s-a dat startul, am sărit în apă și am înotat cât am putut de repede. La',
                 'jumătatea bazinului, un coleg m-a depășit, dar n-am renunțat. Am ajuns al doilea. Atunci',
                 'am înțeles că nu locul contează, ci faptul că nu m-am oprit.”']),
         ],
         [
             X(4, 'Ce nu își are locul?', [
                 'Taie propoziția care nu are legătură cu ideea paragrafului.',
                 '„În excursie am vizitat o cetate veche. Ghidul ne-a arătat sala în care se păstrau armele.',
                 'Sora mea are un hamster pe nume Bob. Din turn, am văzut tot orașul ca pe o hartă.”']),
             L(5, 'Fără repetiții', [
                 'Revizuiește textul, ca să nu mai repete „eu” și „am mers”:',
                 '„Eu am mers la bunica. Eu am mers apoi în grădină. Eu am mers seara acasă.”'], 2),
             L(6, 'Sfatul colegului', [
                 'Un coleg a scris: „Am fost la mare. A fost frumos. Am venit acasă.”',
                 'Scrie-i două sugestii: ce ar putea adăuga și cum ar putea începe mai interesant.'], 2),
         ]),

    fisa(17, 'pp. 38-39',
         'Recapitulare (manual, pp. 13-17): textul literar și textul nonliterar, cele patru întrebări ale textului '
         'narativ, cuvântul-cheie, ideea principală, planul simplu de idei, tema, emoțiile personajelor.',
         [
             X(1, 'Biletele fără semnătură', [
                 'Citește textul.',
                 '„Toată săptămâna, Radu a găsit în cutia poștală bilețele fără semnătură. Pe primul',
                 'scria: «Ai desenat frumos la ora de arte.» Pe al doilea: «Mulțumesc că m-ai ajutat',
                 'la matematică.» Radu s-a mirat, apoi s-a îngrijorat: cine îl urmărea? Vineri, a coborât',
                 'în fugă și a prins-o pe Ilinca, noua lui vecină, cu un bilet în mână. Fetița s-a înroșit',
                 'până la urechi. «Nu cunosc pe nimeni în bloc», a șoptit ea. «M-am gândit că, dacă îți scriu,',
                 'poate vei vrea să fim prieteni.» Radu a zâmbit. În aceeași zi, a scris și el primul lui',
                 'bilet: «Mergem mâine în parc?»”',
                 'Textul este literar sau nonliterar? ______________  De ce? ______________________________']),
             T(2, 'Cine, ce, când, unde?', 'Completează tabelul.', ['Întrebarea', 'Răspunsul'], [110, 400],
               gol('Cine?', 'Ce fac?', 'Când?', 'Unde?'), row_h=20),
             T(3, 'Șirul emoțiilor', 'Ce simte Radu? Scrie emoția și cuvântul din text care o arată.',
               ['Momentul', 'Emoția', 'Cuvântul din text'], [230, 130, 150],
               [['Când găsește primele bilete', '', ''], ['Când se întreabă cine îl urmărește', '', ''],
                ['Când află cine scria biletele', '', '']], row_h=22),
         ],
         [
             T(4, 'Fragmente și idei principale', [
                 'Împarte textul în trei fragmente. Scrie cuvintele cu care începe fiecare',
                 'și ideea principală.'],
               ['Fr.', 'Începe cu...', 'Ideea principală'], [40, 150, 320],
               [['1', '', ''], ['2', '', ''], ['3', '', '']], row_h=26),
             X(5, 'Tema', [
                 'Încercuiește tema textului și scrie un cuvânt din text care o susține.',
                 'familia    ·    prietenia    ·    școala    ·    călătoria        Cuvântul: ______________']),
             T(6, 'Adevărat sau fals?', 'Scrie A sau F.', AF, [440, 70], gol(
                 'Biletele erau semnate de Ilinca.',
                 'Ilinca s-a mutat de curând în bloc.',
                 'Radu o prinde pe Ilinca într-o marți.',
                 'La final, și Radu scrie un bilet.'), row_h=20),
             L(7, 'De ce fără semnătură?', 'De ce crezi că Ilinca nu și-a semnat biletele? Scrie 2-3 propoziții.', 2),
             L(8, 'Răspunsul Ilincăi', 'Scrie biletul prin care Ilinca îi răspunde lui Radu (2-3 propoziții).', 2),
         ]),

    fisa(18, 'p. 39',
         'Recapitulare (manual, pp. 24-37): propoziția (simplă sau dezvoltată, afirmativă sau negativă), ortografia '
         'și punctuația ei, dicționarul, sinonimele și antonimele, câmpul lexical, sunetele, silaba, accentul, relatarea.',
         [
             T(1, 'Felul propozițiilor', 'Scrie S (simplă) sau D (dezvoltată) și A (afirmativă) sau N (negativă).',
               ['Propoziția', 'S / D', 'A / N'], [370, 70, 70],
               [['Radu zâmbește.', '', ''], ['Ilinca nu a semnat biletele.', '', ''], ['Vecina nu răspunde.', '', ''],
                ['Copiii merg mâine în parc.', '', ''], ['Biletul a căzut pe scară.', '', '']], row_h=20),
             X(2, 'Semnele de punctuație', [
                 'Pune semnele de punctuație care lipsesc și literele mari unde e nevoie.',
                 'a) radu ai primit un bilet          b) Am cumpărat caiete creioane și o gumă',
                 'c) Vii mâine la mine                  d) Ce frumos a desenat Ilinca']),
             L(3, 'În ordinea din dicționar', 'Scrie în ordine alfabetică: cartof, cărare, carte, carieră, cartier.'),
             T(4, 'Sinonime și antonime', 'Scrie un sinonim și un antonim pentru fiecare cuvânt.',
               ['Cuvântul', 'Sinonim', 'Antonim'], [150, 180, 180],
               [['vesel', '', ''], ['curajos', '', ''], ['a începe', '', ''], ['harnic', '', '']], row_h=20),
         ],
         [
             X(5, 'Intrusul', [
                 'Taie cuvântul care nu se potrivește în câmpul lexical.',
                 'a) catalog, cretă, tablă, ciocan, bancă          b) ploaie, ninsoare, lingură, vânt, ceață',
                 'c) bucurie, frică, furie, tristețe, fereastră']),
             X(6, 'Vocale, consoane, semivocale', [
                 'Scrie, în ordine, V (vocală), C (consoană) sau S (semivocală) pentru fiecare literă.',
                 'soare: ___ ___ ___ ___ ___       cuib: ___ ___ ___ ___       iarnă: ___ ___ ___ ___ ___']),
             T(7, 'Silaba și accentul', 'Desparte în silabe și subliniază silaba accentuată.',
               ['Cuvântul', 'Silabele', 'Cuvântul', 'Silabele'], [110, 145, 110, 145],
               [['aventură', '', 'minunat', ''], ['prieteni', '', 'bucurie', '']], row_h=22),
             L(8, 'Relatare scurtă', [
                 'Relatează în 5-6 propoziții o întâmplare dintr-o pauză. Folosește cel puțin două cuvinte',
                 'de legătură (mai întâi, apoi, în cele din urmă) și o propoziție negativă.'], 3),
         ]),
]
