// Planuri de lecție detaliate pentru Unitatea III „Harta sentimentelor”, clasa a VII-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 7, pp. 88-122, și ghidul
// profesorului. Numerotarea lecțiilor din OraRO diferă de cea din manual (unele
// lecții din manual au două ore). Rezolvările din ghid și ale fișelor nu intră
// aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-7/unitatea-3/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul liric. Lacul de Mihai Eminescu. Structura textului poetic',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică organizarea textului poetic pe strofe și versuri, reflectând asupra sentimentului de dragoste, pe baza poeziei Lacul de Mihai Eminescu.'],
    resurse: ['Manual Art 7, pp. 88-89', fisa(1), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Dragostea, „Pentru început”, ex. 1-2', timp: '6 min', activitate: pasi(
        'Fiecare elev scrie „dragoste” în mijlocul unei foi și notează în jur spre cine sau spre ce se poate îndrepta sentimentul; trei elevi citesc.',
        'Tabloul „Cu barca” de Theodor Aman: cum se vede iubirea față de natură și de om? Ce emoții trezește?') },
      { etapa: 'Despre autor', timp: '3 min', activitate: pasi(
        'Caseta de la p. 88: Mihai Eminescu, Botoșani și Ipotești, debutul la 16 ani, „Junimea”; „Lacul”, publicată în 1876 în „Convorbiri literare”, cu temele dragostea și natura.') },
      { etapa: 'Lectura model', timp: '5 min', activitate: pasi(
        'Citesc poezia de două ori, rar; elevii urmăresc în manual.') },
      { etapa: 'Impresii după prima lectură, ex. 1-4', timp: '5 min', activitate: pasi(
        'Ce v-a plăcut, ce v-a nedumerit, ce imagine ați reținut; iubirea aduce aici fericire sau suferință?') },
      { etapa: 'Poezia și celelalte arte, Explorare, ex. 1-2', timp: '3 min', activitate: pasi(
        'Cu ce arte ați asocia poezia? Ce elemente de așezare în pagină arată că „Lacul” e o poezie?') },
      { etapa: 'Cadranul, ex. 3, în perechi', timp: '5 min', activitate: pasi(
        'Câte strofe are textul, cum se numesc strofele de patru versuri, ce măsură au versurile primei strofe, ce fel de rimă are poezia.') },
      { etapa: 'Silabele accentuate, ex. 4', timp: '4 min', activitate: pasi(
        'Primul vers despărțit în silabe pe tablă, cu silabele accentuate marcate; ce structură se repetă și ce sugerează?') },
      { etapa: 'Notițe: versificația', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 89): poezia, versificația, versul, măsura, strofa, rima (împerecheată, încrucișată, îmbrățișată, monorimă, imperfectă, semirimă), ritmul.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (patru catrene scrise pentru fișă și rima lor), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-2 (rima și măsura catrenelor eminesciene); fișa de exerciții, pagina 2.',
        '„Provocări”, opțional: trei cântece asociate poeziei.') },
    ],
    evaluare: 'Observarea lucrului în perechi; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Textul liric. Exprimarea emoțiilor și a sentimentelor',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Disociază emoțiile de sentimente și identifică mărcile subiectivității în textul liric, diferențiind autorul de vocea lirică.'],
    resurse: ['Manual Art 7, pp. 90-91', fisa(2), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-2/fisa.pdf)', 'Fâșii de hârtie colorată'],
    desfasurare: [
      { etapa: 'Culorile iubirii, Explorare, ex. 1', timp: '5 min', activitate: pasi(
        'Fiecare elev asociază iubirii o culoare, își justifică alegerea și lipește fâșia pe panoul în formă de inimă.') },
      { etapa: 'Emoție și sentiment, ex. 2-3', timp: '4 min', activitate: pasi(
        'Diferența dintre emoție și sentiment, pornind de la explicația de la p. 90; dragostea e emoție sau sentiment?') },
      { etapa: 'Cercul emoțiilor, ex. 4', timp: '5 min', activitate: pasi(
        'Pe cercul lui Plutchik: patru emoții și două sentimente ale îndrăgostitului din „Lacul”, cu versurile lor.') },
      { etapa: 'Diagrama T, ex. 5', timp: '5 min', activitate: pasi(
        'Grupe de 4-6: emoțiile găsite, împărțite în pozitive și negative; o grupă prezintă.') },
      { etapa: 'Notițe: lirismul și textul liric', timp: '3 min', activitate: pasi(
        'În caiete, după Repere (p. 90): lirismul, textul liric, subiectivitatea.') },
      { etapa: 'Verbele așteptării, Aplicații, ex. 1-4', timp: '5 min', activitate: pasi(
        'Ce redau verbele la indicativ din prima și ultima strofă; verbele încordării așteptării; gesturile imaginate; rolul conjunctivului (variantele a-d).') },
      { etapa: 'Vocea lirică, Explorare, ex. 1-4', timp: '6 min', activitate: pasi(
        'Grupe de 4-5: părțile de vorbire la persoana I din „Lacul” și ce semnifică; a cui e vocea, a autorului sau a unui îndrăgostit imaginar?',
        'Versurile lui Cărtărescu și Baudelaire: de ce „eu” nu e autorul? Alte mărci ale subiectivității în versurile eminesciene de la p. 91.') },
      { etapa: 'Notițe: vocea lirică și subiectivitatea', timp: '3 min', activitate: pasi(
        'În caiete, după Repere (p. 91): vocea lirică ficțională, ipostazele ei, mărcile subiectivității.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (emoție sau sentiment?) și ex. 2 (mărcile subiectivității), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații (primul set), ex. 5-6, și Aplicații (al doilea set), ex. 1-6; fișa lecției; fișa de exerciții, pagina 2.',
        '„Provocări”, opțional: expresia „a-ți găsi jumătatea”, prin mitul androginului.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Limbajul figurat',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică epitetele, personificările, comparațiile și enumerația din textul liric și interpretează semnificațiile lor.'],
    resurse: ['Manual Art 7, p. 92', fisa(3), 'Schema „Limbajul figurat. Epitetul, personificarea, comparația, enumerația” (/materiale/clasa-7/unitatea-3/lectia-3/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cadrul natural, Explorare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Lista elementelor de natură din „Lacul”; culorile, elementele asociate și epitetele cromatice.') },
      { etapa: 'Momentul întâlnirii, ex. 3-4', timp: '3 min', activitate: pasi(
        'În ce moment al zilei își imaginează tânărul întâlnirea? Prima strofă sugerează același moment?') },
      { etapa: 'Epitete, personificare, repetiție, ex. 5-7', timp: '6 min', activitate: pasi(
        'Felul epitetelor din strofa a IV-a și ce sugerează; personificarea din prima strofă; cuvântul repetat în strofa a II-a.') },
      { etapa: 'Sunetele și ordinea cuvintelor, ex. 8-10', timp: '6 min', activitate: pasi(
        'Consoana repetată în primele versuri și efectul lui l și u; ordinea firească a primelor două versuri și rostul inversiunii.') },
      { etapa: 'Comparația și enumerația, ex. 11-12', timp: '4 min', activitate: pasi(
        'Comparațiile din „Călin (file din poveste)” și enumerația din „Trecut-au anii...”.') },
      { etapa: 'Notițe: figurile de stil', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 92) și schema lecției: epitetul (prin adjectiv, adverb, substantiv), personificarea (verb, adjectiv, vocativ), comparația (termeni de legătură), enumerația.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (recunoaște figura de stil) și ex. 2 (epitetul), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '4 min', activitate: pasi(
        'Epitetul combinat cu altă figură în strofa a III-a; rolul lui „singuratic” la început de enunț.') },
      { etapa: 'Simetria, Aplicații, ex. 5, oral', timp: '2 min', activitate: pasi(
        'Lacul din prima și din ultima strofă: ce legătură au imaginile cu trăirile îndrăgostitului?') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-4; fișa de exerciții, pagina 2.',
        '„Provocări”: definiția proprie a dragostei, cu o figură de stil.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează un răspuns personal despre semnificațiile și mesajul poeziei Lacul.'],
    resurse: ['Manual Art 7, p. 93', fisa(4), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Locul izolat, Interpretare, ex. 1-2', timp: '5 min', activitate: pasi(
        'De ce alege tânărul un loc izolat? Cele trei cercuri protectoare create de natură în jurul îndrăgostiților.') },
      { etapa: 'Lacul-oglindă, ex. 3', timp: '4 min', activitate: pasi(
        'Cu ce obiect asociem luciul apei? Ce se vede în el din cer și din pământ? Ce poate simboliza lacul?') },
      { etapa: 'Nufărul și barca, ex. 4-6', timp: '7 min', activitate: pasi(
        'Simbolurile nufărului potrivite în text, cu justificare; barca, spațiu al îndrăgostiților; luntrea lui Caron și altă semnificație a bărcii.') },
      { etapa: 'Luna, ex. 7', timp: '6 min', activitate: pasi(
        'Citim fragmentul din „Dicționar de simboluri”: cum învinge omul, prin iubire, moartea, asemenea astrului care renaște?') },
      { etapa: 'Titlul și planurile, ex. 8-9', timp: '6 min', activitate: pasi(
        'De ce moment al universului amintesc noaptea, apa, lumina lunii? Interpretarea titlului; legătura dintre planul terestru și cel ceresc.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (simbolurile) și ex. 2 (real sau imaginat?), individual, 7 minute.',
        'Verificare, 4 minute; ascultăm interpretări diferite, cu argumente.') },
      { etapa: 'Brâncuși, „Provocări”', timp: '5 min', activitate: pasi(
        'Cele trei semnificații asociate cu Masa tăcerii, Poarta sărutului și Coloana infinită, cu justificare.') },
      { etapa: 'Fișa lecției, ex. 2', timp: '3 min', activitate: pasi(
        'Ideea centrală a poeziei, într-o propoziție; două-trei formulări citite.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției, ce a rămas; fișa de exerciții, pagina 2.',
        'Portofoliu: prezentarea unui cuplu celebru de îndrăgostiți din literatură (o jumătate de pagină).') },
    ],
    evaluare: 'Observarea participării la discuție; fișa de exerciții, ex. 1-2. Temă de portofoliu: prezentarea unui cuplu celebru de îndrăgostiți din literatură.',
  },
  'lectia-5': {
    titlu: 'Textul liric. Am legat... de Marin Sorescu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică vocea ficțională și caracteristicile poeziei moderne în textul Am legat... de Marin Sorescu.'],
    resurse: ['Manual Art 7, pp. 94-96', fisa(5), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Piramida, „Pentru început”, ex. 1', timp: '6 min', activitate: pasi(
        'Un minut individual (patru jocuri de copii, două de adulți), un minut în perechi, un minut în grupe de patru; lista clasei pe o planșă.') },
      { etapa: 'Predicția, ex. 2', timp: '2 min', activitate: pasi(
        'Despre ce joc ar putea fi vorba într-o poezie numită „Am legat...”?') },
      { etapa: 'Despre autor și lectura', timp: '6 min', activitate: pasi(
        'Caseta de la p. 94: Marin Sorescu, poet modern, dramaturg, prozator, autor și de cărți pentru copii; poezia face parte din volumul „Poeme” (1965).',
        'Citesc poezia de două ori.') },
      { etapa: 'Impresii după prima lectură, ex. 1-3', timp: '4 min', activitate: pasi(
        'S-a confirmat predicția? Alte nume ale jocului și verbele din care vin; o imagine surprinzătoare.') },
      { etapa: 'Versificația, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Strofele și numărul lor de versuri; rima și măsura; de ce nu respectă poezia regulile tradiționale (variantele date).') },
      { etapa: 'Investigația, ex. 4', timp: '5 min', activitate: pasi(
        'Grupe de 4-5: organizatorul cu ce se leagă la ochi, cu ce, ce „instrumente” de găsire se folosesc.') },
      { etapa: 'Vocea și anotimpul, ex. 5-8', timp: '4 min', activitate: pasi(
        'A cui poate fi vocea (copil, adolescent, om matur, creator)? Anotimpurile din tablouri și din poezie; diferența dintre jocul din poezie și cel din tablouri.') },
      { etapa: 'Legile naturii și ironia, ex. 9-12', timp: '4 min', activitate: pasi(
        'Legile naturii nesocotite și cauza; marca politeții din vorbele soarelui; ce mărturisește verbul „am încercat”; situația e tristă sau amuzantă?') },
      { etapa: 'Notițe: poezia modernă', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 96): strofe variate, versuri albe și libere, vorbire colocvială, ironie verbală și situațională, teme noi.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '8 min', activitate: pasi(
        'Pagina 1: ex. 1 (tradițională sau modernă?) și ex. 2 (jocul, pe strofe), individual, 6 minute.',
        'Verificare, 2 minute.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-7 (inclusiv poezia lui Jacques Prévert); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Limbajul figurat. Metafora',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică metaforele din text, le clasifică și le interpretează semnificația.'],
    resurse: ['Manual Art 7, pp. 97-98', fisa(6), 'Schema „Limbajul figurat. Metafora” (/materiale/clasa-7/unitatea-3/lectia-6/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Măștile cuvintelor, Explorare, ex. 1', timp: '5 min', activitate: pasi(
        'Limbajul figurat ca joc de-a v-ați ascunselea: completăm cele două propoziții de la p. 97 și găsim sensurile neobișnuite ale cuvintelor din poezie.') },
      { etapa: 'Sensuri figurate, ex. 2-4', timp: '5 min', activitate: pasi(
        'Un sinonim contextual pentru „a lega”; sensul figurat al lui „zâmbet”; ce părți de vorbire sunt cuvintele cu sens figurat.') },
      { etapa: 'Metafore la clasici, ex. 5-7', timp: '6 min', activitate: pasi(
        'Versul din „Scrisoarea I” și cel din „Iarna” lui Alecsandri: care metaforă e mai ușor de descifrat și de ce? Ghicitoarea populară ca metaforă.') },
      { etapa: 'Figura de stil din combinații, ex. 8-9', timp: '3 min', activitate: pasi(
        'Ce figură sunt determinantele din cele trei grupuri de la ex. 8? Cu ce se combină repetiția lui „am legat”?') },
      { etapa: 'Notițe: metafora', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 97) și schema lecției: metafora ca comparație prescurtată, schema cu termenul eliminat, metafora prin substantiv sau verb, clară (explicită) și mai puțin clară (implicită), combinată cu alte figuri.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '4 min', activitate: pasi(
        'Fragmentele cu metafore clare și ce sugerează metafora mai puțin clară.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (din comparație, metaforă) și ex. 2 (din metaforă, comparație), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Comparații devenite metafore, Aplicații, ex. 6, oral', timp: '4 min', activitate: pasi(
        'Transformăm oral comparațiile de la p. 98 în metafore, după model.') },
      { etapa: 'Metafora în pictură, „Provocări”', timp: '2 min', activitate: pasi(
        'Tabloul lui Salvador Dalí: care ar fi metafora?') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-5 și 7; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează un răspuns personal despre semnificațiile și mesajul poeziei Am legat...'],
    resurse: ['Manual Art 7, p. 99', fisa(7), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-7/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ce e jocul? Interpretare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Competiție, distracție, învățare, evadare, autocunoaștere? Trei reguli ale jocului schimbate în poezie și ce vrea omul să obțină.') },
      { etapa: 'Copacii, ex. 3-5', timp: '6 min', activitate: pasi(
        'Ce părți ale lumii unește copacul? Omul care își ascunde condiția de muritor, pus alături de versurile din „Revedere”; pomul cunoașterii.') },
      { etapa: 'Păsările, ex. 6-8', timp: '5 min', activitate: pasi(
        'Ce reprezintă păsările pentru om; păsările celebre (pasărea măiastră, Phoenix, porumbelul); semnificația cântecului.') },
      { etapa: 'Tristețea, masca, iubirea, ex. 10-11', timp: '5 min', activitate: pasi(
        'Zâmbetul exprimă cu adevărat trăirea? De ce cade masca în fața iubirii?') },
      { etapa: 'Soarele și timpul, ex. 12-13', timp: '5 min', activitate: pasi(
        'Prin ce figură e prezentat soarele și ce poruncă îi dă omului? Timpul astrelor și timpul omului, cu versurile eminesciene de la p. 99.') },
      { etapa: 'Ce vrea omul să înșele? Ex. 14-16', timp: '4 min', activitate: pasi(
        'Ce încearcă omul să înșele legând la ochi lucrurile și sentimentele? Jocul e acum amuzant sau grav? Ce reflecție despre condiția umană ascunde?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (căutătorii) și ex. 2 (regulile schimbate), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Măștile de pe rețele, „Provocări”', timp: '3 min', activitate: pasi(
        'Se ascund oamenii după măști pe rețelele sociale? Două-trei păreri argumentate.') },
      { etapa: 'Autoevaluare L1-L7', timp: '3 min', activitate: pasi(
        'Elevii completează în caiete cele trei enunțuri de la p. 99.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Interpretare, ex. 9 (tabloul lui Magritte); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea participării la discuție; fișa de exerciții, ex. 1-2; autoevaluarea achizițiilor din lecțiile 1-7.',
  },
  'lectia-8': {
    titlu: 'Text auxiliar. Iarna de Mircea Cărtărescu',
    data: null,
    tipOra: 'Lectură, text auxiliar',
    durata: 50,
    obiective: ['Compară impresiile create de poeziile Lacul și Iarna, formulând puncte de vedere personale.'],
    resurse: ['Manual Art 7, pp. 100-101', fisa(8), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-8/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Seara de iarnă acasă', timp: '3 min', activitate: pasi(
        'Unde vă simțiți cel mai bine acasă într-o seară de iarnă și de ce?') },
      { etapa: 'Despre autor', timp: '2 min', activitate: pasi(
        'Textul de la p. 100: Mircea Cărtărescu, scriitor contemporan; poezia, din volumul „Dublu CD” (1998), surprinde viața de zi cu zi.') },
      { etapa: 'Lectura', timp: '4 min', activitate: pasi(
        'Citesc poezia; elevii urmăresc.') },
      { etapa: 'Discutarea textului, ex. 1-5', timp: '7 min', activitate: pasi(
        'Emoțiile trăite la lectură; spațiul și obiectele cotidiene; anotimpul și partea zilei; cine sunt cei doi; simțurile implicate, cu fragmente.') },
      { etapa: 'Figurile de stil, ex. 6-10', timp: '7 min', activitate: pasi(
        'Repetiția și epitetele cromatice din prima strofă; metafora farmecului, comparată cu versurile din „Lacul”; geamurile înghețate, aerul negru, aburii.') },
      { etapa: 'Gesturi, pleonasm, final, ex. 11-16', timp: '7 min', activitate: pasi(
        'Gesturile care dezvăluie sentimentele; pleonasmul și de ce se repetă (variantele date); diminutivul; figura de stil din final; cele două repetiții ale luminii.') },
      { etapa: 'O scenă banală devenită poezie, ex. 17-18', timp: '4 min', activitate: pasi(
        'Cum capătă valoare poetică o scenă obișnuită? Legătura cu mitul lui Filemon și Baucis.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (adevărat sau fals?) și ex. 2 („Lacul” și „Iarna”), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Biblioteci deschise', timp: '2 min', activitate: pasi(
        'Prezint „Poema rondelurilor” de Alexandru Macedonski și „Cântecele inocenței și ale experienței” de William Blake.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Discutarea textului, ex. 19 (tabloul lui Chagall); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Tradiții și obiceiuri legate de sentimente și emoții (I)',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Formulează opinii despre importanța sărbătorilor dedicate sentimentelor, investigând modul de exprimare a sentimentelor în literatura populară.'],
    resurse: ['Manual Art 7, pp. 102-103', fisa(9), 'Infograficul „Tradiții și obiceiuri legate de sentimente și emoții (I)” (/materiale/clasa-7/unitatea-3/lectia-9/infografic.svg)', 'Bilețele'],
    desfasurare: [
      { etapa: 'Linia valorică, „Pentru început”, ex. 1', timp: '7 min', activitate: pasi(
        'E bine să avem zile ale fericirii, respectului, amabilității, toleranței? Fiecare scrie răspunsul pe un bilet și se așază de o parte sau de alta a clasei.',
        'Fiecare grup pregătește două argumente și încearcă să-i convingă pe ceilalți.') },
      { etapa: 'Dorul, ex. 2', timp: '3 min', activitate: pasi(
        'Ziua dorului, 13 mai: când v-a fost dor ultima dată de cineva sau de ceva?') },
      { etapa: 'Știu / Vreau să știu, Explorare, ex. 1', timp: '5 min', activitate: pasi(
        'Grupe de 4-5: primele două rubrici ale tabelului despre cântecele populare care exprimă sentimente; câte o grupă prezintă.') },
      { etapa: 'Lectura informațiilor', timp: '8 min', activitate: pasi(
        'Citim despre dor, cu fragmentele de doină a-d, despre mitul Zburătorului (de la Cantemir la Heliade Rădulescu și Eminescu), despre Dragobete și Ziua îndrăgostiților.') },
      { etapa: 'Notițe și infografic', timp: '5 min', activitate: pasi(
        'Proiectez infograficul; în caiete: dorul și originea cuvântului, Zburătorul, Dragobetele (24 februarie), Ziua îndrăgostiților (14 februarie).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (zilele sentimentelor) și ex. 2 (adevărat sau fals?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Doina, Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Sentimentul dominant din „Doină, doină, cântic dulce!” și relația dintre sufletul omului și doină.') },
      { etapa: 'Am învățat, Aplicații, ex. 2', timp: '4 min', activitate: pasi(
        'Grupele completează a treia rubrică a tabelului; un reprezentant o citește.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.',
        '„Provocări”: citiți mitul lui Eros și Psyche dintr-o culegere de mituri și pregătiți rezumatul pentru ora viitoare.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Tradiții și obiceiuri legate de sentimente și emoții (II)',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Diferențiază elementele specifice mitului de cele ale ritualurilor, pe exemplul mitului lui Eros și Psyche.'],
    resurse: [
      'Manual Art 7, p. 103',
      fisa(10),
      'Infograficul „Doina, mitul, ritualul” (/materiale/clasa-7/unitatea-3/lectia-10/infografic.svg)',
      'Mitul lui Eros și Psyche, citit de elevi ca temă dintr-o culegere de mituri (textul nu e în manual)',
    ],
    desfasurare: [
      { etapa: 'Eros și Dragobetele', timp: '4 min', activitate: pasi(
        'Manualul îl pune pe Dragobete alături de Eros, zeul grec al iubirii: ce știți despre Eros?') },
      { etapa: 'Notițe: doina, mitul, ritualul', timp: '7 min', activitate: pasi(
        'Proiectez infograficul; în caiete, după Repere (p. 103): doina (înscrisă de UNESCO în 2009 în patrimoniul imaterial), mitul (timpul începuturilor, după Mircea Eliade), ritualul (ceremonial la naștere, nuntă, moarte, la muncile câmpului, la trecerea anotimpurilor).') },
      { etapa: 'Rezumatul mitului, din scaunul autorului', timp: '12 min', activitate: pasi(
        'Doi-trei elevi rezumă mitul lui Eros și Psyche; colegii completează ce lipsește și spun ce ține de mit în povestire.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (doină, mit sau ritual?) și ex. 2 (cu cuvintele tale), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Mit și ritual în obiceiurile românești', timp: '7 min', activitate: pasi(
        'Grupe de 4-5: ce ține de mit și ce ține de ritual în Zburător, Dragobete, plugușor, orația de nuntă; câte un raportor.') },
      { etapa: 'Momentele mitului, fișa, ex. 3', timp: '6 min', activitate: pasi(
        'Fiecare completează pe fișă situația inițială, interdicția, încălcarea, încercările și finalul mitului; verificăm frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2, ex. 4 (un obicei al comunității mele).') },
    ],
    evaluare: 'Aprecieri pe rezumatele mitului; fișa de exerciții.',
  },
  'lectia-11': {
    titlu: 'Atitudini comunicative',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică mijloacele lingvistice de manifestare a respectului și a toleranței și modalitățile de exprimare a emoțiilor.'],
    resurse: ['Manual Art 7, pp. 104-105', fisa(11), 'Quizul „Atitudini comunicative. Exprimarea emoțiilor” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Florile, „Pentru început”, ex. 1-2', timp: '4 min', activitate: pasi(
        'Replicile din imaginile a-b: ce sentimente exprimă băiatul? Ce atitudine are fata? Dar profesoara?') },
      { etapa: 'Respect și toleranță, Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Politețea fetei și a profesoarei; mijloacele de respect folosite de băiat; replicile intolerante din dialogul de la p. 104; reguli pentru un dialog cu respect și toleranță.') },
      { etapa: 'Notițe: dialogul, respectul, toleranța', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 104): dialogul formal și informal; cum se manifestă respectul (formule, pronume de politețe, forme reverențioase); cum se manifestă toleranța.') },
      { etapa: 'Emoția în voce, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Rostim în patru feluri enunțurile a-d și spunem ce emoție transmite fiecare; ce transmit imaginile a-b; melodia Mariei Tănase, dacă o putem asculta, cu trei adjective pentru tonalitate.') },
      { etapa: 'Notițe: exprimarea emoțiilor', timp: '2 min', activitate: pasi(
        'În caiete, după Repere (p. 105): gesturi, mimică, intonație, inversiune, pauză, repetiție, interjecții, silabisire.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (respect și toleranță) și ex. 2 (formal sau informal?), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Tipul dialogului, Aplicații, ex. 1', timp: '3 min', activitate: pasi(
        'Dialogurile a-c: formale sau informale? Ce elemente verbale ne ajută?') },
      { etapa: 'Jocul de rol, ex. 2', timp: '9 min', activitate: pasi(
        'Două grupe joacă situațiile a-b (consiliul elevilor la director; elevul ignorat la secretariat); clasa evaluează pe grilele respectului și toleranței de la p. 105.') },
      { etapa: 'Quizul', timp: '3 min', activitate: pasi(
        'Quizul „Atitudini comunicative. Exprimarea emoțiilor”, frontal.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.',
        '„Provocări”, opțional: filmul „Minunea” și zece situații de respect și toleranță exprimate nonverbal.') },
    ],
    evaluare: 'Interevaluare pe grilele de la p. 105; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-12': {
    titlu: 'Textul descriptiv (I)',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Descoperă elementele unui portret care pot face obiectul unei descrieri, prin lectura ghidată a imaginii.'],
    resurse: ['Manual Art 7, pp. 106-107', fisa(12), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-12/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Sunetele emoțiilor, Explorare, ex. 1', timp: '3 min', activitate: pasi(
        'Elevii rostesc sunetele sau cuvintele pentru bucurie, tristețe, frică, surpriză.') },
      { etapa: 'Chipurile fetei, ex. 2-3', timp: '8 min', activitate: pasi(
        'Emoțiile din cele patru imagini de la p. 106 și descrierea orală a fiecărui chip: ținuta capului, gura, ochii, sprâncenele, obrajii, fruntea, mâinile.') },
      { etapa: 'Un chip care m-a trădat, ex. 4', timp: '4 min', activitate: pasi(
        'Doi-trei elevi povestesc o situație în care cei din jur le-au citit emoția pe chip și cum s-ar fi putut stăpâni.') },
      { etapa: 'Schema chipului băiatului, ex. 5', timp: '9 min', activitate: pasi(
        'Grupe de 4-5: schema cu elementele și proprietățile (ochi, gene, sprâncene, buze, gură, nas, frunte, păr); un reprezentant face descrierea orală.') },
      { etapa: 'Notițe: descrierea', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 107): descrierea, obiectivă și subiectivă; pașii: numești obiectul, elementele componente, proprietățile, impresia generală; persoana și limbajul fiecărui fel de descriere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (chipul emoțiilor) și ex. 2 (elemente și proprietăți), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Ghicește colegul, Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Doi-trei elevi descriu oral chipul unui coleg; clasa trebuie să-l recunoască din prima încercare.') },
      { etapa: 'Fișa lecției, ex. 1', timp: '2 min', activitate: pasi(
        'Distribui fișa lecției și citim prima cerință; se rezolvă acasă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea lucrului pe grupe; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Textul descriptiv (II)',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Diferențiază descrierea obiectivă de cea subiectivă, prin exerciții de descriere orală.'],
    resurse: ['Manual Art 7, p. 107', fisa(13), 'Quizul „Textul descriptiv. Obiectiv și subiectiv” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Versuri-portret, Explorare, ex. 6', timp: '6 min', activitate: pasi(
        'Citim versurile de la p. 107 (Eminescu, Coșbuc, Blaga, Nichita Stănescu) și numim figurile de stil care descriu chipuri.') },
      { etapa: 'Descrierea grupei, îmbogățită', timp: '6 min', activitate: pasi(
        'Grupele de ora trecută adaugă două figuri de stil descrierii chipului băiatului și citesc noua variantă: cum ți se pare față de prima?') },
      { etapa: 'Obiectiv și subiectiv, recapitulare', timp: '4 min', activitate: pasi(
        'Tabel rapid pe tablă: persoana, limbajul, figurile de stil, scopul, pentru fiecare fel de descriere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (figuri de stil în portret) și ex. 2 (din obiectiv, subiectiv), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Ochii unei persoane dragi, Aplicații, ex. 2', timp: '7 min', activitate: pasi(
        'Câțiva elevi descriu oral, subiectiv, ochii unei persoane dragi, cu o comparație și două epitete; colegii identifică figurile.') },
      { etapa: 'My Fair Lady, ex. 3', timp: '6 min', activitate: pasi(
        'Descriem împreună figura din imaginea de la p. 107, întâi obiectiv, apoi subiectiv.') },
      { etapa: 'Quizul', timp: '5 min', activitate: pasi(
        'Quizul „Textul descriptiv. Obiectiv și subiectiv”, frontal.') },
      { etapa: 'Pygmalion, „Provocări”', timp: '2 min', activitate: pasi(
        'Prezint pe scurt mitul lui Pygmalion și cele două filme recomandate.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2.',
        '„Provocări”, opțional: schimbarea fizică a personajelor-Galateea din cele două filme.') },
    ],
    evaluare: 'Observarea descrierilor orale; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-14': {
    titlu: 'Substantivul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează categoriile gramaticale ale substantivului: substantive comune/proprii, simple/compuse, numărabile/nonnumărabile, colective, cazuri.'],
    resurse: ['Manual Art 7, pp. 108-109', fisa(14), 'Schema „Substantivul. Locuțiunea substantivală” (/materiale/clasa-7/unitatea-3/lectia-14/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Substantivele sentimentelor, „Pentru început”', timp: '4 min', activitate: pasi(
        'Joc: în două minute, cât mai multe substantive comune și proprii din câmpul lexical al sentimentelor.') },
      { etapa: 'Versurile Magdei Isanos, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Emoția din versuri; analiza substantivelor scrise italic, cu funcția lor; cazul și funcția substantivelor din textul despre solidaritate.') },
      { etapa: 'Colective, nonnumărabile, compuse, ex. 4-7', timp: '6 min', activitate: pasi(
        'Substantivul colectiv din text; formarea colectivelor din listă; substantivele nonnumărabile; compusele din enunțul cu „gură-cască”.') },
      { etapa: 'Genul prin sufixe, ex. 8-9', timp: '3 min', activitate: pasi(
        'Cuvintele de bază ale substantivelor derivate din listă și ce observăm despre gen; cuvântul neobișnuit din versurile lui Alexandru Mușina.') },
      { etapa: 'Notițe: substantivul', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (pp. 108-109) și schema lecției: comune și proprii, simple și compuse, genurile și sufixele moționale, numărabile și nonnumărabile (doar singular, doar plural, masive), colective, articularea, cele cinci cazuri cu funcțiile lor.') },
      { etapa: 'Locuțiunea substantivală', timp: '3 min', activitate: pasi(
        'Sinonime pentru „părere de rău” și „tragere de inimă”; definiția din Repere, în caiete.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (felul substantivului) și ex. 2 (feminin și masculin), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Pluralul substantivelor compuse din listă, la tablă; substantivele colective.') },
      { etapa: 'Locuțiunile din Eminescu, Aplicații, ex. 5', timp: '2 min', activitate: pasi(
        'Locuțiunile substantivale din versurile a-b.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-4 și 6-7; fișa de exerciții, pagina 2.',
        '„Provocări”, opțional: o poezie cu întrebări, cu substantivele subliniate și cazul lor.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Prepoziția',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică prepozițiile simple, compuse și locuțiunile prepoziționale și regimul lor cazual.'],
    resurse: ['Manual Art 7, pp. 110-111', fisa(15), 'Schema „Prepoziția. Locuțiunea prepozițională” (/materiale/clasa-7/unitatea-3/lectia-15/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Alex, colegul nou, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Felul prepozițiilor din textul de la p. 110; funcția cuvintelor din fața cărora stau; prepozițiile cu sens și cele doar de legătură.') },
      { etapa: 'Locuțiunea prepozițională, Explorare', timp: '3 min', activitate: pasi(
        'Înlocuim grupurile colorate din textul despre Alex cu o prepoziție.') },
      { etapa: 'Regimul cazual, Explorare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Ce caz cer prepozițiile colorate și locuțiunile din textele de la p. 110?') },
      { etapa: 'Notițe: prepoziția', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (pp. 110-111) și schema lecției: prepoziții simple și compuse, cu sens și fără; locuțiunea prepozițională și ce nu trebuie confundat cu ea; cazurile cerute (acuzativ, genitiv, dativ); adverbele asemenea, conform; articolul genitival repetat.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Prepozițiile din textul Simonei Popescu, simple și compuse; cazul cerut de prepozițiile din textul despre vrăbii.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (felul și cazul) și ex. 2 (locuțiunea prepozițională), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Prepoziția potrivită, Aplicații, ex. 4', timp: '4 min', activitate: pasi(
        'Alegem prepoziția potrivită în enunțurile de la p. 111, cu explicație.') },
      { etapa: '„Ca și”, „Provocări”', timp: '4 min', activitate: pasi(
        'Citim explicația de la p. 111 și reformulăm două enunțuri cu „ca și” folosit greșit; când e permis „ca și”?') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3 și 5; fișa de exerciții, pagina 2; trei greșeli cu „ca și” auzite la radio sau televizor, notate.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Posibilități combinatorii ale substantivului',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică funcțiile sintactice ale substantivului și cazurile acestora, precizând dacă substantivul e centru sau adjunct.'],
    resurse: ['Manual Art 7, pp. 112-113', fisa(16), 'Schema „Posibilitățile combinatorii ale substantivului” (/materiale/clasa-7/unitatea-3/lectia-16/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Mihai și testul, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Subiectele din textul de la p. 112 și felul lor; subiectele neexprimate; numele predicativ și cazul lui.') },
      { etapa: 'Numele predicativ în alte cazuri, ex. 4', timp: '3 min', activitate: pasi(
        'Cazul substantivelor nume predicative din cele trei propoziții.') },
      { etapa: 'Substantivul centru, ex. 5-7', timp: '6 min', activitate: pasi(
        'Substantivele centru din text și adjuncții lor; cazul atributelor prepoziționale; funcția și cazul lui „Georgescu” și „elevilor”.') },
      { etapa: 'Substantivul adjunct al verbului, ex. 8-9', timp: '6 min', activitate: pasi(
        'Funcția și cazul substantivelor din enunțurile de la ex. 8; ce parte de vorbire determină complementul prepozițional din „plini de chiciură”.') },
      { etapa: 'Notițe: funcțiile substantivului', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (pp. 112-113) și schema lecției: subiectul (exprimat simplu sau multiplu, neexprimat subînțeles sau inclus), numele predicativ în N, Ac, G; atributul substantival (genitival, prepozițional, în N, în D); complementele și circumstanțialele, cu cazurile lor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (textul „Concursul”, scris pentru fișă, și funcțiile substantivelor), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Subiectele și numele predicative din enunțurile despre frustrare; funcția adjuncților substantivelor centru.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-4 (analiza substantivelor din „Dumbrava minunată”, după model); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Adjectivul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează tipurile de adjective, variabilitatea și gradele de comparație ale adjectivului.'],
    resurse: ['Manual Art 7, pp. 114-115', fisa(17), 'Schema „Adjectivul. Gradele de comparație” (/materiale/clasa-7/unitatea-3/lectia-17/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Rochia roșie, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Adjectivele propriu-zise și cele provenite din alte părți de vorbire din textul de la p. 114; variabile sau invariabile, numărul de forme; cum se acordă.') },
      { etapa: 'Gradele, ex. 4, în perechi', timp: '4 min', activitate: pasi(
        'Adjectivele din text cu și fără grade de comparație și gradul celor care au.') },
      { etapa: 'Superlativul expresiv, ex. 5-6', timp: '5 min', activitate: pasi(
        'Cum s-a format superlativul absolut în exemplele de la ex. 5; efectul adjectivului antepus în versurile Constanței Buzea.') },
      { etapa: 'Formarea adjectivelor, ex. 7', timp: '4 min', activitate: pasi(
        'Derivate și compuse din listele a-b, frontal.') },
      { etapa: 'Notițe: adjectivul', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (pp. 114-115) și schema lecției: felurile adjectivului, variabil și invariabil, acordul, tabelul gradelor de comparație, mijloacele expresive ale superlativului absolut, adjectivele fără grade, locul adjectivului și articolul, formarea.') },
      { etapa: 'Locuțiunea adjectivală', timp: '3 min', activitate: pasi(
        'Sinonime pentru „de treabă” și „cu nasul pe sus”; ce determină; definiția din Repere, în caiete.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (felul adjectivului) și ex. 2 (superlativul expresiv), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Acordul, Aplicații, ex. 1, oral', timp: '3 min', activitate: pasi(
        'Primele trei adjective din paranteze, acordate frontal; restul, acasă.') },
      { etapa: 'Rețeta bucuriei, Aplicații, ex. 2', timp: '3 min', activitate: pasi(
        'Locuțiunile adjectivale din rețetă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1 (textul transcris, cu acordul) și ex. 3 (analiza adjectivelor din rețetă, după model); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-18': {
    titlu: 'Posibilități combinatorii ale adjectivului',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică funcțiile sintactice ale adjectivului, precizând dacă adjectivul e centru sau adjunct.'],
    resurse: ['Manual Art 7, pp. 116-117', fisa(18), 'Schema „Posibilitățile combinatorii ale adjectivului” (/materiale/clasa-7/unitatea-3/lectia-18/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Replica fetei, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Funcția adjectivelor din replica fetei către mama ei; de ce părți de vorbire depind; adjectivul centru din replică.') },
      { etapa: 'Ce determină adjectivul, ex. 4', timp: '4 min', activitate: pasi(
        'Substantiv, pronume sau numeral: ce determină adjectivele din cele patru enunțuri și ce fel de adjective sunt.') },
      { etapa: 'Adjectivul centru, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Adjectivele centru din enunțurile de la p. 116, cu determinările lor și partea de vorbire prin care sunt exprimate.') },
      { etapa: 'Notițe: funcțiile adjectivului', timp: '8 min', activitate: pasi(
        'În caiete, după Repere (pp. 116-117) și schema lecției: adjectivul adjunct, atribut adjectival (pe lângă substantiv, pronume, numeral) sau nume predicativ; adjectivul centru și determinările lui (complement prepozițional, indirect, circumstanțiale); dublul rol.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Atributele adjectivale din textul despre adolescenți, cu felul adjectivelor; numele predicative din enunțurile de la ex. 2.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (atribut sau nume predicativ?) și ex. 2 (adjectivul centru), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 3-4', timp: '4 min', activitate: pasi(
        'Adjectivele centru din enunțurile de la ex. 3 și părțile de propoziție care depind de ele, frontal.') },
      { etapa: 'Autoevaluare L12-L16', timp: '3 min', activitate: pasi(
        'Elevii completează în caiete cele trei enunțuri de la p. 117.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 5 (analiza adjectivelor din fragmentul lui Gabriel Liiceanu, după model); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea achizițiilor din lecțiile 12-16.',
  },
  'lectia-19': {
    titlu: 'Textul descriptiv (III), pregătire',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Observă detaliile unui portret de tip tablou, realizând planul și ciorna unui text descriptiv.'],
    resurse: ['Manual Art 7, p. 118', fisa(19), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-19/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Autoportretul oral, „Pentru început”', timp: '5 min', activitate: pasi(
        'Câțiva elevi își fac oral portretul, cu câte un adjectiv pentru ochi, păr, mâini, statură și o comparație pentru o trăsătură de caracter.') },
      { etapa: 'Portretul Ecaterinei Manu, Explorare, a', timp: '10 min', activitate: pasi(
        'Privim tabloul lui Constantin Lecca și răspundem la întrebările de la p. 118: impresia generală, ochii, nasul, buzele, fruntea, coafura, mâinile, hainele, bijuteriile, fundalul, trăsăturile morale sugerate.') },
      { etapa: 'Lista de cuvinte, ex. b', timp: '6 min', activitate: pasi(
        'Adjective, verbe sinonime și figuri de stil pentru detaliile alese, după modelele de la p. 118; le notăm pe tablă și în caiete.') },
      { etapa: 'Notițe: descrierea unei persoane', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 118): schema elementelor și a proprietăților, detaliile despre chip, statură, îmbrăcăminte, trăsăturile morale sugerate, impresia lăsată.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (portretul, pe elemente) și ex. 2 (sinonime pentru descriere), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Planul descrierii, fișa, ex. 3', timp: '8 min', activitate: pasi(
        'Fiecare elev completează planul descrierii tinerei din tablou (ex. c de la p. 118).') },
      { etapa: 'Începutul ciornei', timp: '4 min', activitate: pasi(
        'Fișa de exerciții, ex. 4: elevii scriu primele rânduri, cu impresia generală; doi citesc.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: ciorna descrierii (150-300 de cuvinte), pe fișa lecției.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; planurile descrierii.',
  },
  'lectia-20': {
    titlu: 'Textul descriptiv (IV), redactare',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează un text descriptiv, cu verificarea finală a compunerii.'],
    resurse: ['Manual Art 7, p. 118, grila de autoevaluare', fisa(20), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-20/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'O descriere de revizuit, fișa, ex. 1-2', timp: '9 min', activitate: pasi(
        'Citim descrierea scrisă pentru fișă și găsim împreună problemele (repetiții, lipsa figurilor de stil, impresia vagă), cu soluția fiecăreia.') },
      { etapa: 'Grila de la p. 118', timp: '3 min', activitate: pasi(
        'Citim criteriile: conținutul (chip, statură, îmbrăcăminte, personalitate), exprimarea, structura, ortografia și așezarea în pagină.') },
      { etapa: 'Revizuirea ciornei proprii', timp: '12 min', activitate: pasi(
        'Fiecare își revizuiește ciorna de acasă după grilă și după verificarea de pe fișa de exerciții, ex. 4; trec printre bănci.') },
      { etapa: 'Varianta finală', timp: '15 min', activitate: pasi(
        'Transcrierea curată a descrierii, pe fișa lecției.') },
      { etapa: 'Autoevaluarea', timp: '4 min', activitate: pasi(
        'Fiecare se autoevaluează pe grila de la p. 118.') },
      { etapa: 'Două lecturi', timp: '5 min', activitate: pasi(
        'Doi elevi își citesc descrierile; colegii spun ce detaliu i-a impresionat și ce figură de stil au reținut. Strâng descrierile.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 3 (descrierea îmbunătățită), dacă n-a fost făcută în clasă.') },
    ],
    evaluare: 'Autoevaluare pe grila de la p. 118; descrierea, strânsă pentru apreciere.',
  },
  'lectia-21': {
    titlu: 'Comentarea unor pasaje dintr-un text. Descrierea unei emoții (I)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Identifică emoțiile în texte-suport și formulează ideea principală a unor pasaje comentate.'],
    resurse: ['Manual Art 7, p. 119', fisa(21), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-21/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Dorința” de Ana Blandiana, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Citim poezia de la p. 119: emoția dominantă, alte emoții, de ce e un text liric.') },
      { etapa: 'Notițe: comentarea unui pasaj', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 119): citirea atentă, identificarea ideilor, semnificația legată de figurile de stil, citatele introduse corect, limbajul clar și sobru.') },
      { etapa: 'Comentariul pe grupe, ex. 4', timp: '10 min', activitate: pasi(
        'Grupe de 4-5, pe primele șase versuri: ideea generală, legătura dintre dimineață, lumină și hârtia neîncepută, simțurile, figurile de stil, rolul conjunctivului.') },
      { etapa: 'Comentariul grupei, Aplicații, ex. 1', timp: '8 min', activitate: pasi(
        'Grupele își transformă observațiile într-un comentariu de 5-10 rânduri; un reprezentant îl citește din scaunul autorului.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (liric sau epic?) și ex. 2 (comentariul, pas cu pas, pe strofa din „Lacul”), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Limbaj potrivit? Fișa, ex. 3, oral', timp: '4 min', activitate: pasi(
        'Care enunțuri se potrivesc într-un comentariu și de ce?') },
      { etapa: 'Fișa lecției', timp: '3 min', activitate: pasi(
        'Citim cerințele fișei lecției; se rezolvă acasă.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 4 (comentariul meu); fișa lecției; ciorna pentru emoția din copilărie (Explorare, ex. 5), pentru ora viitoare.') },
    ],
    evaluare: 'Aprecieri pe comentariile grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-22': {
    titlu: 'Comentarea unor pasaje dintr-un text. Descrierea unei emoții (II)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Descrie o emoție experimentată personal, urmând etapele ghidate de comentare a unui pasaj.'],
    resurse: ['Manual Art 7, p. 119', fisa(22), 'Fișa lecției (/materiale/clasa-7/unitatea-3/lectia-22/fisa.pdf)', 'Un panou pentru afișarea compunerilor'],
    desfasurare: [
      { etapa: 'O emoție din copilărie', timp: '4 min', activitate: pasi(
        'Fiecare își amintește o emoție puternică din copilărie: unde era, cu cine, ce s-a întâmplat; doi-trei spun pe scurt.') },
      { etapa: 'Recomandările de la p. 119', timp: '3 min', activitate: pasi(
        'Reamintim: momentul, trecerea de la impresia generală la detalii, persoana I, timpul trecut.') },
      { etapa: 'Obținerea performanței: fișa de exerciții, pagina 1', timp: '10 min', activitate: pasi(
        'Ex. 1 (emoția și detaliile ei) și ex. 2 (general sau particular?), individual, 7 minute; verificarea ex. 2, 3 minute.') },
      { etapa: 'Ciorna compunerii, Aplicații, ex. 2', timp: '14 min', activitate: pasi(
        'Fiecare scrie compunerea de 150-300 de cuvinte pe fișa lecției, pornind de la detaliile notate.') },
      { etapa: 'Schimbul în perechi', timp: '6 min', activitate: pasi(
        'Fiecare citește compunerea colegului și îi spune un lucru reușit și o sugestie.') },
      { etapa: 'Revizuirea și transcrierea', timp: '9 min', activitate: pasi(
        'Elevii își revizuiesc textul după sugestii și îl transcriu.') },
      { etapa: 'Panoul', timp: '2 min', activitate: pasi(
        'Compunerile gata se afișează pe panou.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: transcrierea compunerii, dacă nu e gata; fișa de exerciții, pagina 2, ex. 3.') },
    ],
    evaluare: 'Interevaluare prin discuție în perechi; aprecieri pe compuneri.',
  },
  'lectia-23': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea III: structura textului poetic, limbajul figurat, textul descriptiv.'],
    resurse: ['Manual Art 7, pp. 120-121', fisa(23), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ciorchinele unității', timp: '3 min', activitate: pasi(
        'Pe tablă, „Harta sentimentelor”; elevii spun pe rând câte o noțiune de lectură sau de comunicare învățată în unitate.') },
      { etapa: 'Lectura', timp: '5 min', activitate: pasi(
        'Citesc fragmentele din „Pelerinaj sentimental” de Otilia Cazimir (p. 120); lămurim micșunea, mosc, iatac, scrin.') },
      { etapa: 'Stări și figuri de stil, cerințele 1-6', timp: '8 min', activitate: pasi(
        'Starea produsă de lectură; patru emoții ale celui care revine; două mărci ale subiectivității; figurile de stil din strofa a IX-a (pe grupe); locurile evocate; simțurile.') },
      { etapa: 'Tabelul emoțiilor, cerința 8', timp: '6 min', activitate: pasi(
        'În perechi, apoi în grupe de patru: emoțiile provocate de locuri și obiecte în copilărie și la maturitate; un reprezentant prezintă.') },
      { etapa: 'Figuri protectoare, rimă, măsură, cerințele 9-12', timp: '6 min', activitate: pasi(
        'Figurile protectoare ale copilăriei; lucrurile din ultima strofă și semnificația lor; tipul de rimă și măsura din prima strofă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (poezia „Casa bunicilor”, scrisă pentru fișă, și noțiunile recapitulate), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '7 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”, frontal; discutăm răspunsurile greșite.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: cerința 7 (comentariul ultimelor două versuri din strofa a doua); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-24': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea III: substantivul, prepoziția, adjectivul.'],
    resurse: ['Manual Art 7, p. 121', fisa(24), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Un vers din poezie', timp: '3 min', activitate: pasi(
        'Scriu pe tablă versul cu plafonul scund; ce adjective sunt și ce funcție au?') },
      { etapa: 'Substantivul, cerințele 13-15', timp: '7 min', activitate: pasi(
        'Funcția substantivelor din cele două versuri; locuțiunile din enunțul de la cerința 14; analiza substantivelor din strofa a VI-a, frontal.') },
      { etapa: 'Prepoziția, cerința 16', timp: '3 min', activitate: pasi(
        'Cazul cerut de prepozițiile și locuțiunile din cele cinci enunțuri.') },
      { etapa: 'Adjectivul, cerințele 17-20', timp: '8 min', activitate: pasi(
        'Adjective cu patru, trei și două forme; formarea celor patru adjective; analiza adjectivelor din versurile de la cerința 19; locuțiunile adjectivale și gradul lor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-3 (patru enunțuri, substantivele și adjectivele lor), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '7 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”, frontal; la greșeli, revenim la notițe.') },
      { etapa: 'Portretul oral, cerința 21', timp: '4 min', activitate: pasi(
        'Doi elevi fac oral portretul unui bunic sau al unei persoane care le-a ocrotit copilăria.') },
      { etapa: 'Pregătirea evaluării', timp: '4 min', activitate: pasi(
        'Anunț proba de ora viitoare: un text liric nou, zece cerințe de limbă și lectură (partea A) și descrierea unui prieten (partea B).',
        'Ce recitesc acasă: notițele despre versificație, figurile de stil, substantiv, prepoziție, adjectiv și descriere.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: cerința 22 (compunerea de cel puțin 150 de cuvinte despre bunicii din poezie); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; rezultatele la quiz.',
  },
  'lectia-25': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea III.'],
    resurse: ['Testul, Manual Art 7, p. 122', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; manualul e deschis la p. 122 (fragmentul din „Primele iubiri” de Nicolae Labiș).',
        'Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (descrierea unui prieten, cel puțin 150 de cuvinte, cu patru epitete și o comparație), 10 puncte din oficiu.',
        'Timpul orientativ: 5 minute pentru citirea textului, 18 pentru partea A, 17 pentru compunere; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.',
        'Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să numere epitetele și comparația din compunere.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
