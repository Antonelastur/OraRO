// Planuri de lecție detaliate pentru Unitatea IV „Vreau să salvez lumea", clasa a V-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 5 și ghidul profesorului. Rezolvările
// din ghid nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-5/unitatea-4/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul narativ literar. Tezeu și Minotaurul de Florin Bican',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din textul narativ Tezeu și Minotaurul de Florin Bican.'],
    resurse: ['Manual Art 5, pp. 108-109', fisa(1), 'Quizul „Tezeu și Minotaurul” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '8 min', activitate: pasi(
        '„Pentru început”, p. 108, ex. 1: grupe de câte patru; fiecare grupă își alege un erou din istorie, iar un reprezentant îl prezintă în două-trei propoziții.',
        'Ex. 2: doi-trei elevi numesc eroi imaginari din cărți sau filme.',
        'Ex. 3: zeii din imagini; ce însemne îi fac ușor de recunoscut (legătura cu ora de istorie, Olimpul).') },
      { etapa: 'Despre autor', timp: '2 min', activitate: pasi(
        'Caseta de la p. 108: Florin Bican (n. 1956), scriitor și traducător; textul este o repovestire a legendei, scrisă special pentru elevii care învață după acest manual.') },
      { etapa: 'Lectura model', timp: '12 min', activitate: pasi(
        'Ex. 4: citesc textul cu voce tare; elevii urmăresc în manual.',
        'Lămurim cuvintele: a hălădui (subsol), tribut, ocară, lighioană, falnic, a îndupleca, cală.',
        'Notez pe tablă, pe măsură ce apar, numele personajelor și locurile: Creta, Atena, labirintul, Naxos.') },
      { etapa: 'Impresii după prima lectură', timp: '8 min', activitate: pasi(
        'P. 109, ex. 1-2: ce ți-a plăcut cel mai mult? Te regăsești în vreun personaj? Câțiva elevi răspund și își motivează alegerea.',
        'Ex. 3: fiecare notează în caiet o întrebare pe care i-ar pune-o lui Tezeu; citim trei-patru întrebări.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine e cine?) și ex. 2 (cine ar fi putut spune?), individual, 10 minute.',
        'Verificare frontală, 5 minute; la clasele rapide, quizul „Tezeu și Minotaurul” în locul verificării.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: recitește textul și notează în caiet, în ordine, cinci întâmplări importante; fișa de exerciții, pagina 2 (ex. 3-5).') },
    ],
    evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Timp, spațiu și acțiune',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Recunoaște reperele temporale și spațiale ale acțiunii și înțelege particularitățile de construcție a textului narativ.'],
    resurse: ['Manual Art 5, pp. 110-111', fisa(2), 'Schema „Timp, spațiu și acțiune. Legenda” (/materiale/clasa-5/unitatea-4/lectia-2/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi-trei elevi citesc cele cinci întâmplări notate; ceilalți verifică ordinea.') },
      { etapa: 'Originea lui Tezeu', timp: '5 min', activitate: pasi(
        '„Explorare”, p. 110, ex. 1: citim caseta despre nașterea lui Tezeu și proba inelului aruncat în mare.',
        'Întrebarea din manual: de ce e sigur Tezeu că va învinge, iar Egeu se îndoiește? Ce știe Tezeu despre sine și Egeu nu știe?') },
      { etapa: 'Lectura pe roluri', timp: '8 min', activitate: pasi(
        'Ex. 2: grupe de câte cinci (naratorul, Minos, Dedal, Egeu, Tezeu); citim pe roluri fragmentul până la plecarea lui Tezeu.',
        'Colegii care au același rol în celelalte grupe urmăresc lectura după criteriile din manual (cursiv, cu gesturi și mimică; intervine la timp; își sprijină colegii).') },
      { etapa: 'Joc: Investigatorul', timp: '8 min', activitate: pasi(
        'Ex. 3: grupe de câte șapte; investigatorul pune întrebările din listă (personajul principal, personajele secundare, unde, când, ce declanșează acțiunea, de ce pleacă eroul) și notează răspunsurile.',
        'Doi investigatori prezintă ce au aflat; completăm pe tablă reperele de timp și de spațiu.') },
      { etapa: 'Explorare, ex. 4-10', timp: '7 min', activitate: pasi(
        'Frontal: ex. 4-5 (soluția lui Minos și a lui Dedal; ce face regele după construirea labirintului); ex. 6 (adevărat sau fals, a-e).',
        'Ex. 7-9: Minotaurul, ființă reală sau supranaturală? De ce există mai multe variante ale luptei? Zeul din legendă și purtarea lui.',
        'Ex. 10: de unde provine numele Mării Egee.') },
      { etapa: 'Notițe: legenda', timp: '3 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: legenda (explicații imaginare pentru originea unor lucruri, locuri, fenomene; transmisă oral, apoi scris); legenda antică (zeii intervin supranatural, timp îndepărtat).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (harta locurilor), ex. 2 (real sau supranatural?) și ex. 3 (cuvinte care arată timpul), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Aplicații”, p. 111, ex. 1 (expresia „firul Ariadnei”), 2 (ordonarea întâmplărilor), 3, 4 (povestirea orală a întâmplărilor prin care trece Ariadna) și 6 (eseul de cinci minute, pe o foaie); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea lecturii pe roluri și a jocului; fișa de exerciții, ex. 1-3.',
  },
  'lectia-3': {
    titlu: 'Personajele',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Identifică trăsăturile fizice și morale ale personajelor și modelele comportamentale din legendele grecești.'],
    resurse: ['Manual Art 5, pp. 112-113', fisa(3), 'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-3/fisa.pdf)', 'Coli mari și carioci, pentru harta personajelor', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi-trei elevi citesc eseul de cinci minute (era necesar popasul pe Naxos?); ascultăm argumente pro și contra.') },
      { etapa: 'Harta personajelor', timp: '8 min', activitate: pasi(
        '„Explorare”, p. 112, ex. 1: grupe de 4-5; pe o coală scriu în centru Tezeu și Minos, apoi celelalte personaje, legate prin săgeți (rudenie, ajutor, dușmănie).',
        'Două grupe își prezintă harta; celelalte completează ce lipsește.') },
      { etapa: 'Eroul grec', timp: '4 min', activitate: pasi(
        'Ex. 2: e nașterea din zeu singurul motiv pentru care Tezeu e erou?',
        'Ex. 3: istoria cuvântului erou; ce sens are azi și ce sens avea la greci.') },
      { etapa: 'Trăsăturile lui Tezeu și ale lui Minos', timp: '6 min', activitate: pasi(
        'Ex. 4, în perechi: pentru trăsăturile din listă (curajos, puternic, falnic, inteligent, încrezător, infidel, hotărât, frumos, uituc), fragmentul din text care o dovedește; notează în tabelul din fișa lecției.',
        'Ex. 5-6, frontal: două situații în care Minos nu e curajos; de ce nu lasă Minotaurul să moară de foame (elevii aleg o variantă și o motivează).') },
      { etapa: 'Notițe: personajele legendei', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: zeii (Olimp, părinții eroilor), eroii sau semizeii (recunoscuți după o faptă excepțională, destin adesea nefericit), oamenii obișnuiți; eroul grec, simbol al luptei împotriva dezordinii.') },
      { etapa: 'Joc: Cubul', timp: '8 min', activitate: pasi(
        '„Aplicații”, p. 113, ex. 4: grupe de 3-4; fiecare grupă aruncă cubul și rezolvă sarcina despre Minotaur (descrieți, comparați, asociați, analizați, aplicați, argumentați).',
        'Câte un reprezentant spune răspunsul grupei, într-un minut.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (zeu, erou sau om?), ex. 2 (ghicește personajul) și ex. 3 (erou fără pată?), individual, 8 minute.',
        'Verificare, 4 minute; la ex. 3 citim câteva greșeli ale lui Tezeu, cu fapta.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Aplicații”, p. 112, ex. 1 (blazonul lui Tezeu) și ex. 2 (textul de o pagină despre Tezeu: fișa de identitate, înfățișarea, patru trăsături morale); „Provocări”, p. 113, ex. 1-2 (monștrii învinși de Tezeu); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Hărțile personajelor și produsele grupelor la jocul Cubul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează o opinie despre semnificația textului Tezeu și Minotaurul și despre valorile recunoscute social și cultural.'],
    resurse: ['Manual Art 5, p. 114', fisa(4), 'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Doi elevi prezintă blazonul lui Tezeu; un elev citește începutul textului despre Tezeu.') },
      { etapa: 'Interpretare, ex. 1-5', timp: '8 min', activitate: pasi(
        '„Interpretare”, p. 114, frontal: tema textului (ex. 1); pentru cine luptă Tezeu (ex. 2); ce obțin atenienii (ex. 3).',
        'Ex. 4: tu cum ai putea fi generos cu cei din jur? Două-trei exemple.',
        'Ex. 5: găsim în text momentul în care lui Tezeu îi e teamă și ce face.') },
      { etapa: 'Ce l-a ajutat pe Tezeu', timp: '8 min', activitate: pasi(
        'Ex. 6: patru grupe, câte una pentru inteligență, antrenament, susținerea primită, îndrăzneala opiniei; fiecare caută în text dovezi, 4 minute.',
        'Raportorii prezintă, câte un minut.') },
      { etapa: 'Labirintul și personajele', timp: '7 min', activitate: pasi(
        'Ex. 7: elevii completează în caiete cele trei afirmații despre labirint (dificultatea luptei, mijloc de apărare, victoria rațiunii); citim câteva variante.',
        'Ex. 8-9: de ce îi dă Ariadna ghemul; două momente în care Tezeu le face rău apropiaților.',
        'Ex. 10: asociem personajele cu semnificațiile, pe tablă; notițele se trec în fișa lecției.') },
      { etapa: 'Discuție: finalul și monștrii de azi', timp: '4 min', activitate: pasi(
        'Ex. 11-13: e finalul fericit sau nefericit? Ce înseamnă lumea ca „un labirint fără ziduri”? Care sunt azi „monștrii” cu care luptăm?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (simboluri), ex. 2 (firul Ariadnei, azi) și ex. 3 (final fericit pentru cine?), individual, 8 minute.',
        'Verificare, 4 minute; la ex. 1 și 3 primesc orice răspuns bine argumentat.') },
      { etapa: 'Cvintetul și tema', timp: '7 min', activitate: pasi(
        '„Portofoliu”: citim modelul de cvintet pentru „monstru” și regulile pentru fiecare vers; fiecare începe în caiet cvintetul „Eroul” (primele două versuri).',
        'Tema: cvintetul „Eroul”, terminat; „Provocări” (labirintul din noi), un răspuns scris de 5-6 rânduri; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a argumentelor; produsele grupelor; fișa de exerciții, ex. 1-3.',
  },
  'lectia-5': {
    titlu: 'Comparația',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații dintr-un text explicativ, prin lectura ghidată a imaginii.'],
    resurse: ['Manual Art 5, p. 115', fisa(5), 'Schema „Comparația” (/materiale/clasa-5/unitatea-4/lectia-5/schema.svg)', 'Quizul „Comparația” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '3 min', activitate: pasi(
        'Doi-trei elevi citesc cvintetul „Eroul”; verificăm regulile versurilor.') },
      { etapa: 'Joc: animalele eroilor', timp: '5 min', activitate: pasi(
        '„Explorare”, p. 115, ex. 1, în perechi: cu ce animal se aseamănă Tezeu (curajos, puternic) și Ariadna (devotată, înțeleaptă)? Perechile își spun alegerile și le motivează.') },
      { etapa: 'Explorare, ex. 2-5', timp: '8 min', activitate: pasi(
        'Ex. 2: comparații din vorbirea de zi cu zi pentru culori (albastru ca..., galben ca...).',
        'Ex. 3, pe grupe: trei însușiri ale cozii Minotaurului, pornind de la comparația cu biciul din text.',
        'Ex. 4: la ce parte de vorbire se raportează comparațiile (verb, adjectiv, substantiv).',
        'Ex. 5: cuvintele care leagă cei doi termeni.') },
      { etapa: 'Notițe: comparația', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: definiția; comparatul și comparantul; elementele comune (exemplul labirint – păienjeniș); elementele de legătură: ca, precum, cât, asemenea cu, aidoma cu, întocmai ca, la fel ca.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        '„Aplicații”, ex. 1, frontal: elementul potrivit pentru o comparație figură de stil.',
        'Ex. 2: comparațiile din versurile lui Ion Pillat; pentru fiecare, comparatul și comparantul.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (părțile comparației), ex. 2 (figură de stil sau nu?) și ex. 3 (ghicitori cu comparații), individual, 10 minute.',
        'Verificare, 5 minute; insist pe diferența dintre „ca un tunet” și „ca arhitect”.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Comparația”, frontal; notez întrebările cu cele mai multe răspunsuri greșite.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 3 (text de 5-7 rânduri cu o comparație); „Provocări” (câte o comparație din rețete, ghicitori, cântece, filme); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-6': {
    titlu: 'Textul multimodal. Banda desenată: Hoțul fulgerului de Rick Riordan',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică componentele textului multimodal și comparațiile dintr-o bandă desenată.'],
    resurse: ['Manual Art 5, pp. 116-118', fisa(6), 'Infograficul „Textul multimodal. Banda desenată” (/materiale/clasa-5/unitatea-4/lectia-6/infografic.svg)', 'Quizul „Textul multimodal. Banda desenată” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 116: folosiți emoticoane în mesaje? De ce? O prezentare în care ați pus și imagini: pe ce suport?') },
      { etapa: 'Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Ex. 1: cum povestesc, în afară de cuvinte, filmul, baletul, jocurile pe calculator?',
        'Ex. 2: cele cinci coduri dintr-un film; ex. 3: ce facem ca să receptăm sau să construim o narațiune; ex. 4: suportul unui text care îmbină mai multe modalități.') },
      { etapa: 'Lectura benzii desenate', timp: '8 min', activitate: pasi(
        'Ex. 5: prezint pe scurt seria lui Rick Riordan (zei și semizei în lumea de azi; Percy, întruchiparea lui Perseu); elevii citesc banda desenată în gând.',
        'Ex. 6-7: ce v-a plăcut, ce n-ați înțeles, de ce v-a amintit? Câte modalități de comunicare folosește banda?') },
      { etapa: 'Cum se citește o bandă desenată', timp: '6 min', activitate: pasi(
        'Ex. 8-12, frontal: direcțiile de citire și mărimea desenelor; unde sunt replicile și gândurile; rolul semnelor de punctuație și al literelor repetate; cum e sugerată mișcarea lui Percy; cum e desenată lupta din prima vinietă a ultimei benzi.') },
      { etapa: 'Notițe: textul multimodal', timp: '6 min', activitate: pasi(
        'În caiete, după Repere și infograficul lecției: textul multimodal; codurile (lingvistic, vizual, auditiv, gestual, spațial); suportul (hârtie, digital, live); simplu și complex.',
        'Elementele benzii desenate: planșa, banda, vinieta, bulele (vorbire, gând, strigăt), recitativul, ideogramele, onomatopeele, liniile de mișcare, punctuația.') },
      { etapa: 'Aplicații, ex. 2-3', timp: '5 min', activitate: pasi(
        'În perechi: numărul benzilor, al vinietelor și al recitativelor (ex. 2); ideogramele, onomatopeele, semnele de punctuație și rolul lor (ex. 3). Verificăm frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (cuvintele benzii desenate), ex. 2 (ce fel de bulă?) și ex. 3 (simplu sau complex?), individual, 8 minute.',
        'Verificare, 3 minute; dacă rămâne timp, quizul „Textul multimodal. Banda desenată”.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 1 și 4-8; fișa de exerciții, pagina 2 (banda cu trei viniete: Tezeu intră în labirint). Opțional, „Provocări”: cele două volume ale lui Riordan.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-3; banda desenată de la tema.',
  },
  'lectia-7': {
    titlu: 'Textul explicativ (aplicativ)',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Identifică informații dintr-un text explicativ injonctiv, prin lectură ghidată.'],
    resurse: ['Manual Art 5, p. 119', fisa(7), 'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-7/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Trei-patru elevi arată banda desenată de pe fișa de exerciții; clasa numește elementele folosite (recitativ, bule, onomatopee).') },
      { etapa: 'Lectura textului', timp: '6 min', activitate: pasi(
        '„Aplicații”, p. 119, ex. 1: citim indicațiile pentru realizarea unei benzi desenate: lista materialelor și cei opt pași, cu schițele lor.') },
      { etapa: 'Aplicații, ex. 2-6', timp: '12 min', activitate: pasi(
        'Ex. 2 (A și B): ce se întâmplă în text și care e scopul lui.',
        'Ex. 3-4: titlul și subtitlurile, mărimea literelor și culorile; numărul paragrafelor și cum sunt evidențiate.',
        'Ex. 5: modul la care sunt cele mai multe verbe; transformăm două verbe la negativ (alege – nu alege).',
        'Ex. 6: rolul schițelor.') },
      { etapa: 'Notițe: textul explicativ aplicativ', timp: '5 min', activitate: pasi(
        'În caiete, cu sprijinul fișei lecției: scopul (instrucțiuni: cum se face ceva); structura (titlu, materiale, pași ordonați, numerotați sau pe paragrafe); verbe la imperativ; schițe, marcatori, culori.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (labirintul de hârtie, pașii ordonați), ex. 2 (la imperativ) și ex. 3 (instrucțiune sau poveste?), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Autoevaluare L1-L7', timp: '5 min', activitate: pasi(
        'P. 119: elevii completează în caiet cele trei afirmații (cel mai important, cel mai plăcut, cel mai dificil); citim câteva și notez ce trebuie reluat.') },
      { etapa: 'Portofoliu și temă', timp: '5 min', activitate: pasi(
        '„Portofoliu”: fiecare realizează, după instrucțiunile citite, o bandă desenată după Tezeu și Minotaurul (pe hârtie sau online); stabilim data expoziției și a turului galeriei.',
        'Tema: minitestul L1-L7 de la p. 119; fișa de exerciții, pagina 2 (sfaturile Ariadnei).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; autoevaluarea; fișa de exerciții, ex. 1-3.',
  },
  'lectia-8': {
    titlu: 'Text auxiliar. Eu sunt Malala de Malala Yousafzai și Patricia McCormick',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Interpretează textul auxiliar Eu sunt Malala, stabilind legături interdisciplinare cu istoria, geografia și religia.'],
    resurse: ['Manual Art 5, pp. 120-121', fisa(8), 'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-8/fisa.pdf)', 'Hartă a lumii sau atlas'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        'Întrebarea de la p. 120: ai vrea să salvezi lumea, să fii erou? Poți schimba în bine ceva din lumea ta?',
        'Citim caseta despre Malala; găsim pe hartă Pakistanul, orașul Karachi și Marea Britanie, unde s-a refugiat familia.',
        'Legătura cu religia și istoria: explicăm, după subsol, cine sunt talibanii și ce le interziceau femeilor; ce este Premiul Nobel pentru Pace.') },
      { etapa: 'Lectura textului', timp: '8 min', activitate: pasi(
        'Citesc fragmentul cu voce tare; elevii urmăresc.',
        'Lămurim cuvintele din subsol (taliban, Karachi, New York Times, jani, aba, paștun) și expresia „în vizorul talibanilor”.') },
      { etapa: 'Predarea reciprocă', timp: '12 min', activitate: pasi(
        'Ex. 5: împart textul în șase fragmente; șase elevi joacă, pe rând, rolul profesorului: indică cine citește fragmentul, cine îl povestește, răspund la întrebările colegilor și scriu pe tablă ideea principală.',
        'Elevii copiază în caiete cele șase idei principale.') },
      { etapa: 'Discutarea textului', timp: '7 min', activitate: pasi(
        'Ex. 1-4, frontal: persoanele din text; unde și când se petrec întâmplările; pentru ce luptă Malala și la ce pericole se expune.',
        'Ex. 6-8: sentimentele Malalei; de la cine a moștenit curajul și de ce se teme totuși tatăl; până unde merge devotamentul ei.') },
      { etapa: 'Malala și Tezeu', timp: '5 min', activitate: pasi(
        'Ex. 9: fiecare alege două dintre trăsăturile din manual (curaj, generozitate, pacifism, hotărâre, solidaritate) și le justifică în jurnalul cu dublă intrare din fișa lecției.',
        'Ex. 10: oral, în ce măsură poate fi comparată Malala cu Tezeu.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '9 min', activitate: pasi(
        'Pagina 1: ex. 1 (axa vieții Malalei) și ex. 2 (adevărat sau fals?), individual, 6 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 9 (toate cele cinci trăsături, cu justificare) și ex. 10 în scris; fișa de exerciții, pagina 2 (inclusiv scrisoarea către Malala).',
        '„Biblioteci deschise”: recomand „Odiseea” de Homer și „Legendele Olimpului” de Alexandru Mitru.') },
    ],
    evaluare: 'Observarea predării reciproce; jurnalul cu dublă intrare; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Modele comportamentale eroice de-a lungul timpului',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Recunoaște valori și aspirații umane în modelul eroului grec și identifică similitudini între culturi diferite.'],
    resurse: ['Manual Art 5, pp. 122-123', fisa(9), 'Infograficul „Modele comportamentale eroice” (/materiale/clasa-5/unitatea-4/lectia-9/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 122, ex. 1-2: ce valori întruchipează Tezeu? Avem nevoie azi de eroi? Cum ar fi lumea cu mai mulți eroi?') },
      { etapa: 'Știu – Vreau să știu – Am învățat', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 1: fiecare desenează în caiet tabelul cu trei rubrici și completează primele două (ce știe despre eroi, și de la istorie; ce ar vrea să afle).',
        'Elevii citesc în gând informațiile de la pp. 122-123 (Ghilgameș, eroii greci, Eneas, sfântul, regele și cavalerul medieval, eroul național, eroul universal, supereroii).',
        'Grupe de 4-5: aleg ce păstrează pentru fișa grupei; un reprezentant o citește.') },
      { etapa: 'Explorare, ex. 2-5', timp: '8 min', activitate: pasi(
        'Ex. 2: rolul culorilor și al marcatorilor din text.',
        'Ex. 3, în perechi: axa cronologică din manual, copiată în caiete, cu eroii fiecărei epoci.',
        'Ex. 4-5, frontal: trei trăsături ale eroilor greci care s-au transmis mai departe; se va schimba modelul de erou în viitor?') },
      { etapa: 'Notițe: modelul eroic', timp: '4 min', activitate: pasi(
        'În caiete, după Repere și infograficul lecției: eroul, ființă excepțională în care se proiectează valori permanente; transformarea modelului (eroul grec, de origine divină, unic, idealizat; eroul contemporan, adesea un om obișnuit; rolul presei și al televiziunii).') },
      { etapa: 'Aplicații, ex. 1 și 3', timp: '5 min', activitate: pasi(
        'Ex. 1: câte un erou contemporan pentru drepturile omului, spațiul cosmic, știință, artă, sport.',
        'Ex. 3: grupele de la început completează a treia rubrică, „Am învățat”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (eroul și epoca lui), ex. 2 (supereroul și strămoșul lui) și ex. 3 (ce au în comun?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Bilet de ieșire și temă', timp: '5 min', activitate: pasi(
        'Bilet de ieșire: un erou despre care am aflat azi și o valoare pe care o întruchipează.',
        'Tema: „Aplicații”, ex. 2 (tabelul cu eroul antic, național și universal, în caiet); „Portofoliu”: prezentarea ta ca erou, pentru cartea eroilor clasei; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Fișele grupelor; biletele de ieșire; fișa de exerciții, ex. 1-3.',
  },
  'lectia-10': {
    titlu: 'Atitudini comunicative. Acte de limbaj: a întreba, a solicita, a felicita',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Identifică și performează actele de limbaj a întreba, a solicita, a felicita, într-o situație de comunicare dată.'],
    resurse: ['Manual Art 5, pp. 124-125', fisa(10), 'Quizul „Acte de limbaj: a întreba, a solicita, a felicita” (materialul de joc al lecției)', 'Bilețele cu situații de comunicare'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '3 min', activitate: pasi(
        '„Pentru început”, p. 124: după ce vă dați seama că un prieten vă ascultă sau nu cu atenție? Notez indiciile pe tablă.') },
      { etapa: 'Atitudini comunicative', timp: '7 min', activitate: pasi(
        '„Explorare”, ex. 1, în perechi: cele patru aspecte (informația, starea vorbitorului, așteptarea, relația) pentru propoziția „Să dispară cățelul ăsta din casa mea!”, după modelul din manual.',
        'Ex. 2: doi elevi rostesc cele două propoziții cu gesturile și tonul potrivite; clasa observă diferențele.') },
      { etapa: 'Notițe: atenția și empatia', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: atitudinile comunicative (ce transmite vorbitorul, dincolo de cuvinte, despre sine și despre relație); atenția; empatia.') },
      { etapa: 'Discursul Adorei Svitak', timp: '8 min', activitate: pasi(
        '„Explorare”, p. 125, ex. 1: prezint pe scurt vorbitoarea și conferințele TED; citesc fragmentele din discurs.',
        'Ex. 2: sunteți de acord că lumea are nevoie de idei îndrăznețe și de optimism? Două-trei păreri.',
        'Ex. 3: ce acte de limbaj găsim în text (întrebarea de la început, solicitarea, mulțumirea de la final).') },
      { etapa: 'Notițe: actele de limbaj', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: actul de limbaj; a întreba, a solicita, a felicita, fiecare cu o formulare familiară și una politicoasă.') },
      { etapa: 'Aplicații: situații de comunicare', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 1-3: fiecare pereche extrage un bilet cu o situație și formulează întrebarea, solicitarea sau felicitarea potrivită, cu mijloace verbale, nonverbale și paraverbale.',
        'Patru-cinci perechi joacă situația; clasa spune dacă formularea se potrivește relației dintre vorbitori.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce face vorbitorul?) și ex. 2 (de la prieten la director), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Quiz și temă', timp: '6 min', activitate: pasi(
        'Quizul „Acte de limbaj”, frontal.',
        'Tema: părerea despre discursul Adorei (ex. 2), 5-6 rânduri în caiet; fișa de exerciții, pagina 2. Jocul de rol „Eu sunt eroul...” („Aplicații”, p. 124) se pregătește acasă, dacă o reluăm la o oră de comunicare.') },
    ],
    evaluare: 'Observarea sistematică a jocurilor de rol; quizul; fișa de exerciții, ex. 1-2.',
  },
  'lectia-11': {
    titlu: 'Pronumele. Pronumele personal (I)',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează cunoștințele despre pronume și înlocuiește substantive cu pronume personale potrivite.'],
    resurse: ['Manual Art 5, p. 126', fisa(11), 'Schema „Pronumele. Pronumele personal” (/materiale/clasa-5/unitatea-4/lectia-11/schema.svg)', 'Quizul „Pronumele personal” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 126, în perechi: înlocuiți numele eroilor contemporani (Maica Tereza, Neil Armstrong, Nadia Comăneci, Bob Dylan) cu pronume; perechile citesc propozițiile.') },
      { etapa: 'Explorare, ex. 1-5', timp: '12 min', activitate: pasi(
        'Ex. 1: pronumele care înlocuiesc substantivele scrise italic (pompierii, ziaristele).',
        'Ex. 2-3: pronumele personale din conversația din manual, cu persoana și numărul lor.',
        'Ex. 4: înlocuim substantivele cu pronume și precizăm genul (el, ea, ei, ele).',
        'Ex. 5: cuvintele colorate (el – îl, mine – mă...): ce parte de vorbire sunt și prin ce se deosebesc.') },
      { etapa: 'Notițe: pronumele personal', timp: '8 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: pronumele (înlocuiește un substantiv); pronumele personal: persoana I, a II-a, a III-a (vorbitorul, ascultătorul, cel despre care se vorbește), numărul, genul numai la persoana a III-a.',
        'Formele accentuate și neaccentuate, cu exemple (mine – mă, mie – îmi, mi); pronunțarea lui eu, el, ei, ele cu ĭe și a lui ea cu ĭa.') },
      { etapa: 'Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        '„Aplicații”, p. 127, ex. 1, frontal: pronumele personale din textul despre Marie Curie.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (pronumele potrivit), ex. 2 (fișa pronumelui) și ex. 3 (accentuat sau neaccentuat?), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Pronumele personal”, frontal; notez ce greșesc mai mulți elevi, pentru ora următoare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 2 (persoana și numărul pronumelor, a-f); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-12': {
    titlu: 'Pronumele. Pronumele personal (II)',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică pronumele personale și compară mesajele de tip SMS cu norma limbii române standard.'],
    resurse: ['Manual Art 5, p. 127', fisa(12), 'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-12/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '5 min', activitate: pasi(
        'Ex. 2 (persoana și numărul), frontal; lămuresc greșelile frecvente de la quiz.') },
      { etapa: 'Aplicații, ex. 3-4', timp: '8 min', activitate: pasi(
        'Ex. 3: completăm oral propozițiile a-f cu pronume personale potrivite.',
        'Ex. 4, joc: ce parte de vorbire este cuvântul colorat; câștigă cine termină primul corect. Discutăm omonimele: mine (pronume) – mine (substantiv), -i (pronume) – -i (verb).') },
      { etapa: 'Pastila de ortografie', timp: '8 min', activitate: pasi(
        'Ex. 5: câte o propoziție cu nu-l, n-o, nu-i, ce-l, scrisă de elevi la tablă.',
        'Ex. 6: forma corectă (mi-au / miau, l-a / la, i-a / ia, ne-a / nea), cu explicația: pronume + verb, cu cratimă.',
        'În caiete: tabelul ortogramelor, cu câte un exemplu.') },
      { etapa: 'Analiza după model', timp: '6 min', activitate: pasi(
        'Ex. 7: copiem modelul („ei” – pronume personal, persoana a III-a, numărul plural, genul masculin, forma accentuată) și analizăm frontal două pronume din propoziția a.') },
      { etapa: 'Deschideri: SMS-ul', timp: '5 min', activitate: pasi(
        'Citim SMS-ul din manual și îl corectăm la tablă; de ce apar asemenea greșeli în mesaje?',
        'Fișa lecției: elevii rescriu în limba standard mesajele de tip SMS și subliniază pronumele personale (termină acasă, dacă e nevoie).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (analiza pronumelor) și ex. 2 (ortograme), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 7 (toate pronumele, după model); fișa lecției, terminată; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa lecției; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Pronumele personal de politețe',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște pronumele personale de politețe și formulele reverențioase și le folosește în situații de comunicare adecvate.'],
    resurse: ['Manual Art 5, pp. 128-129', fisa(13), 'Schema „Pronumele personal de politețe” (/materiale/clasa-5/unitatea-4/lectia-13/schema.svg)', 'Quizul „Pronumele de politețe” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Cum vă adresați unui coleg, bunicului, doamnei directoare? Notez pe tablă formulele spuse de elevi și observăm diferențele.') },
      { etapa: 'Explorare, ex. 1-4', timp: '9 min', activitate: pasi(
        'Ex. 1-2: ce arată cuvintele colorate din discuție, persoana și numărul lor, care au forme diferite după gen.',
        'Ex. 3: ce exprimă grupurile de cuvinte din știrea de ziar și din adresa de pe plic.',
        'Ex. 4, normă și abatere: corectăm scrierea formulelor reverențioase.') },
      { etapa: 'Notițe: pronumele de politețe', timp: '8 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: tabelul formelor (persoana a II-a: dumneata, dumitale, dumneavoastră; persoana a III-a: dumnealui, dumneaei, dumnealor; dânsul, dânsa...), cu prescurtările.',
        'Formulele reverențioase (Majestatea Voastră, Excelența Sa), cu majusculă la fiecare cuvânt; variantele familiare (mata, matale); dumneavoastră cere verbul la plural.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '7 min', activitate: pasi(
        'Ex. 1-2: în știrea despre Adrian Marte, pronumele de politețe, formulele reverențioase și pronumele personale.',
        'Ex. 3: asociem persoanele cu formulele reverențioase (prinț, patriarh, înalt funcționar, preot, voievod, papă).') },
      { etapa: 'Joc de rol: interviul', timp: '5 min', activitate: pasi(
        'Ex. 7: un elev e jurnalist, altul ambasador; interviu de trei-patru întrebări. Clasa notează pronumele de politețe folosite și verifică acordul verbului.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (pronumele potrivit), ex. 2 (pe scurt) și ex. 3 (formula de adresare directă), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz și temă', timp: '5 min', activitate: pasi(
        'Quizul „Pronumele de politețe”, frontal.',
        'Tema: „Aplicații”, ex. 4 (adevărat sau fals), 5 (analiza după model) și 6 (prescurtările); „Portofoliu”: invitația către primar; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea jocului de rol; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-14': {
    titlu: 'Adjectivul. Articolul demonstrativ',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează categoriile gramaticale ale adjectivului, acordul cu substantivul și rolul articolului demonstrativ.'],
    resurse: ['Manual Art 5, pp. 130-131', fisa(14), 'Schema „Adjectivul. Articolul demonstrativ” (/materiale/clasa-5/unitatea-4/lectia-14/schema.svg)', 'Quizul „Adjectivul și articolul demonstrativ” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Joc: Supergirl este o fată...', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 130: grupe de câte patru; în două minute, cât mai multe adjective pentru „Supergirl este o fată...”. Grupa câștigătoare își citește lista.') },
      { etapa: 'Explorare, ex. 1-9', timp: '12 min', activitate: pasi(
        'Ex. 1-3: adjectivele din textul despre Spiderman, substantivele determinate, genul și numărul lor: ce observăm?',
        'Ex. 4: desinențele (curajos, curajoasă, curajoși, curajoase); ex. 5: adjectivul gri nu își schimbă forma.',
        'Ex. 6: din ce provine adjectivul desenat; ex. 7: ce se întâmplă cu uriaș pus înaintea substantivului; ex. 8: ce parte de propoziție sunt adjectivele.',
        'Ex. 9, normă și abatere: zglobiii copii / copiii zglobii.') },
      { etapa: 'Notițe: adjectivul', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: definiția; adjective propriu-zise și provenite din verb la participiu; desinența; variabile și invariabile; acordul în gen și număr; locul adjectivului (înaintea substantivului preia articolul hotărât); funcția de atribut.') },
      { etapa: 'Articolul demonstrativ', timp: '5 min', activitate: pasi(
        '„Explorare”, p. 131: pelerina cea roșie, băiatul cel mic: între ce părți de vorbire stau cuvintele colorate și ce rol au.',
        'În caiete, după Repere: tabelul formelor (cel, celui, cei, celor; cea, celei, cele, celor) și acordul cu substantivul.') },
      { etapa: 'Aplicații, ex. 1, 2 și 5', timp: '6 min', activitate: pasi(
        'Ex. 1: dictez propoziția despre penar; elevii subliniază cu o linie adjectivele propriu-zise, cu două pe cele provenite din verb.',
        'Ex. 2: seria cu adjective numai variabile; ex. 5: articolele demonstrative din versurile lui Eminescu.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (acordul adjectivului), ex. 2 (variabil sau invariabil?) și ex. 3 (adjectivul trece în față), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz și temă', timp: '5 min', activitate: pasi(
        'Quizul „Adjectivul și articolul demonstrativ”, frontal.',
        'Tema: „Aplicații”, ex. 3, 4, 6 și 7 (analiza după model); „Deschideri”: 8-10 adjective acordate greșit în presă sau online, cu sursa; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-15': {
    titlu: 'Gradele de comparație ale adjectivului',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște gradele de comparație ale adjectivului și adjectivele care nu au grade de comparație.'],
    resurse: ['Manual Art 5, pp. 132-133', fisa(15), 'Schema „Gradele de comparație ale adjectivului” (/materiale/clasa-5/unitatea-4/lectia-15/schema.svg)', 'Quizul „Gradele de comparație ale adjectivului” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Explorare, ex. 1-6', timp: '10 min', activitate: pasi(
        'Ex. 1-3: dialogul copiilor despre costumele de supereroi: ce compară, formele de egalitate și de inegalitate, gradul superior și inferior.',
        'Ex. 4-5: cuierul cu pelerine (cea mai lungă; aproape la fel de lungă).',
        'Ex. 6, normă și abatere: de ce sunt greșite „foarte superbă” și „cea mai perfectă”?') },
      { etapa: 'Notițe: gradele de comparație', timp: '10 min', activitate: pasi(
        'În caiete, după Repere și schema lecției, un tabel cu adjectivul curajos: pozitivul; comparativul de superioritate, de egalitate, de inferioritate; superlativul relativ (de superioritate și de inferioritate) și absolut (de superioritate și de inferioritate), cu cuvintele ajutătoare.',
        'Adjective fără grade: cele care erau comparative sau superlative în latină (superior, optim, superb), cele cu însușire care nu se poate modifica (unic, complet, principal), cele al căror sens nu permite comparația (acvatic, bucureștean).') },
      { etapa: 'Deschideri: de la superlativ la comparație', timp: '4 min', activitate: pasi(
        'Transformăm oral, după model, „ochi foarte albaștri” și „un băiat foarte curajos” în comparații.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (toate gradele) și ex. 2 (recunoaște gradul), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Gradele de comparație ale adjectivului”, frontal.') },
      { etapa: 'Autoevaluare L11-L14', timp: '4 min', activitate: pasi(
        'P. 133: elevii completează în caiet cele trei afirmații (cel mai important, cel mai plăcut, cel mai dificil); citim câteva.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: minitestul de la p. 133, ex. 1-5; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; autoevaluarea; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Descrierea unei persoane. Autoportretul (I), pregătire',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Analizează autoportrete vizuale și texte de tip autoportret, identificând trăsăturile fizice și morale ale unei persoane.'],
    resurse: ['Manual Art 5, p. 134', fisa(16), 'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-16/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 134, ex. 1: prin ce putem transmite informații despre noi (fotografie, profil, desen, text)?',
        'Ex. 2: sensul cuvântului autoportret (auto- „de sine” + portret).') },
      { etapa: 'Autoportretele pictate', timp: '10 min', activitate: pasi(
        '„Explorare”, ex. 1: cele două picturi; elevii le prezintă după reperele din manual: portretul fizic (culori, forme, dimensiuni), semnele unei pasiuni, starea exprimată de chip, culoarea dominantă, trăsăturile care reies.',
        'Ex. 2: care autoportret vă place mai mult? Trei-patru opinii motivate.') },
      { etapa: 'Autoportretele scrise', timp: '10 min', activitate: pasi(
        'Ex. 3: citim autoportretul Laurei (în versuri) și pe al lui Luca (în proză).',
        'Ex. 4, în caiete: persoana la care sunt scrise, stilul, tipul informațiilor, trăsăturile celor doi copii.',
        'Ex. 5: pe care dintre ei l-ai alege prieten și de ce?') },
      { etapa: 'Notițe: portretul și autoportretul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere: portretul (elemente fizice și morale, trăsături care particularizează); autoportretul (portretul pe care și-l face cineva singur, la persoana I).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (fizic sau moral?), ex. 2 (portret sau autoportret?) și ex. 3 (autoportretul în obiecte), individual, 10 minute.',
        'Verificare, 5 minute; la ex. 3, trei elevi își prezintă obiectele.') },
      { etapa: 'Bilet de ieșire și temă', timp: '7 min', activitate: pasi(
        'Bilet de ieșire: o trăsătură după care ar vrea să-i recunoască, din autoportret, colegii.',
        'Tema: pe fișa lecției, lista cu tot ce te definește și restrângerea ei la cinci aspecte („Aplicații”, p. 135, ex. 1-2); fișa de exerciții, pagina 2. Explic cum se face lista: aspect fizic, pasiuni, obiceiuri, calități, defecte, un lucru pe care colegii nu-l știu.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; biletele de ieșire; fișa de exerciții, ex. 1-3.',
  },
  'lectia-17': {
    titlu: 'Redactarea autoportretului (II)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează propriul autoportret, cu respectarea etapelor scrierii.'],
    resurse: ['Manual Art 5, p. 135', fisa(17), 'Fișa lecției (/materiale/clasa-5/unitatea-4/lectia-17/fisa.pdf)', 'Lista de trăsături realizată la ora anterioară'],
    desfasurare: [
      { etapa: 'Verificarea listei', timp: '4 min', activitate: pasi(
        'Trei-patru elevi citesc cele cinci aspecte alese (ex. 2); verificăm să apară și trăsături fizice, și morale.') },
      { etapa: 'Planul', timp: '5 min', activitate: pasi(
        'Ex. 3: fiecare completează planul din fișa de exerciții (ex. 1): ordinea celor cinci aspecte și un detaliu concret pentru fiecare.') },
      { etapa: 'Revizuirea, pe un model', timp: '6 min', activitate: pasi(
        'Fișa de exerciții, ex. 2: citim paragraful Marei și stabilim frontal ce trebuie corectat (repetițiile, greșeala de scriere); elevii îl rescriu.') },
      { etapa: 'Ciorna', timp: '17 min', activitate: pasi(
        'Ex. 4: fiecare scrie în caiet prima variantă a autoportretului, după plan, cu un paragraf pentru fiecare aspect; se lucrează pe fișa lecției (cerința, ciorna).',
        'Trec pe la bănci și ajut la introducere și la arătarea trăsăturilor prin fapte.') },
      { etapa: 'Revizuirea în perechi', timp: '10 min', activitate: pasi(
        'Ex. 5 și ex. 8: fiecare își verifică textul cu lista de control din fișa de exerciții (ex. 3, coloana „Eu”), apoi schimbă caietul cu colegul, care completează coloana „Colegul” și îi face o sugestie.') },
      { etapa: 'Încheierea', timp: '4 min', activitate: pasi(
        'Fișa de exerciții, ex. 4: fiecare scrie două încheieri posibile și o alege pe cea mai potrivită; doi elevi le citesc.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Portofoliu”, varianta finală pe o coală albă, cu paragrafe, scris lizibil, cu fotografie sau desen (ex. 6).',
        'Afișăm autoportretele în clasă; turul galeriei (ex. 7) se face când le aduc toți elevii.') },
    ],
    evaluare: 'Lista de control (autoevaluare și evaluare reciprocă); observarea redactării; autoportretul final, în portofoliu.',
  },
  'lectia-18': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea IV: personajele, semnificațiile textului, actele de limbaj.'],
    resurse: ['Manual Art 5, pp. 136-137', fisa(18), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '3 min', activitate: pasi(
        'Ciorchine pe tablă: fiecare elev numește o noțiune de lectură sau de comunicare din unitate (legendă, erou, comparație, bandă desenată, act de limbaj...).') },
      { etapa: 'Lectura textului', timp: '6 min', activitate: pasi(
        'Ex. 1, p. 136: citesc fragmentul din „Legendele Olimpului” de Alexandru Mitru, lupta lui Heracle cu leul din Nemeea.') },
      { etapa: 'Ex. 2-4', timp: '7 min', activitate: pasi(
        'Ex. 2, frontal: personajele, evenimentul, locul, de ce nu putea fi ucis leul.',
        'Ex. 3-4: ordinea imaginilor din banda desenată și câte o propoziție pentru fiecare vinietă.') },
      { etapa: 'Cadranele', timp: '8 min', activitate: pasi(
        'Ex. 5: grupe de câte patru; pe o coală, cele patru cadrane (descrierea leului, armele lui Heracle, calitățile lui, ce i-a impresionat).',
        'Două grupe își prezintă planșa.') },
      { etapa: 'Ex. 6-11', timp: '6 min', activitate: pasi(
        'Frontal: de ce se sperie leul tocmai când Heracle rămâne fără arme; ce puteri au amândoi; de ce nu se știe cât a durat lupta; în ce transformă Heracle pielea leului; o comparație din text; un supererou care seamănă cu Heracle.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1-3 pe legenda „Perseu și Meduza” (text nou, repovestit pentru fișă), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și comunicare”; notez noțiunile care trebuie reluate înainte de evaluare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 18 (dialogul cu Heracle, felicitarea cu pronume de politețe), scris în caiet; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Planșele grupelor; quizul; fișa de exerciții, ex. 1-3.',
  },
  'lectia-19': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea IV: pronumele personal, adjectivul, gradele de comparație.'],
    resurse: ['Manual Art 5, pp. 136-137', fisa(19), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Două-trei felicitări pentru Heracle (ex. 18); clasa verifică pronumele de politețe și acordul verbului.') },
      { etapa: 'Ex. 12-13', timp: '7 min', activitate: pasi(
        'Ex. 12: persoana, numărul, genul și forma pronumelor personale din cele două fragmente, la tablă.',
        'Ex. 13: adjectivele care descriu ochii leului și felul lor.') },
      { etapa: 'Ex. 14-17', timp: '6 min', activitate: pasi(
        'Ex. 14: ce fel de adjectiv este „aprinse”; ex. 15: adjectivul fără grad de comparație de la începutul textului.',
        'Ex. 16: „puternic” la toate gradele, la tablă; ex. 17: articolele demonstrative potrivite.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (pronumele), ex. 2 (adjectivele) și ex. 3 (adjectivul „iute”), individual, 11 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pregătirea compunerii', timp: '10 min', activitate: pasi(
        'Ex. 19: completăm în caiete schema despre Heracle (numele dat de romani, nașterea, însușirile fizice și morale, lupta cu leul, platoșa și coiful).',
        'Citim cerințele de redactare (conținut, introducere-cuprins-încheiere, paragrafe, corectitudine, aspect); fiecare scrie introducerea.') },
      { etapa: 'Quiz', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, gramatică și redactare”.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 19, compunerea de 10-12 rânduri despre Heracle; fișa de exerciții, pagina 2.',
        'Anunț evaluarea: lectura unui text nou, pronumele personal și de politețe, adjectivul și gradele de comparație, comparația, descrierea unei persoane.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; quizul; fișa de exerciții, ex. 1-3; schema compunerii.',
  },
  'lectia-20': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea IV.'],
    resurse: ['Testul tipărit, Manual Art 5, p. 138', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testele (fragmentul din „Metamorfozele” lui Ovidiu, în repovestirea lui Grigore Tănăsescu) și foile de răspuns.',
        'Citesc cerințele cu voce tare; structura: A, 60 de puncte (zece itemi a câte 6 puncte: pronume, formula reverențioasă, adjective, grade de comparație, personajul, comparația, descrierea, semnificația); B, 30 de puncte (descrierea unui prieten, 10-15 rânduri); 10 puncte din oficiu.',
        'Recomand: circa 25 de minute pentru A, 15 minute pentru B, ultimele minute pentru recitire. Răspund doar la întrebări de înțelegere a cerințelor.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual, pe foaia separată; supraveghez discret.',
        'Anunț timpul rămas la 20 de minute și la 5 minute înainte de final; le reamintesc să treacă la subiectul B dacă au rămas blocați la un item.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii își recitesc lucrarea (ortografie, punctuație, paragrafe), apoi strâng foile.',
        'Notez itemii care au ridicat cele mai multe întrebări, pentru corectare și pentru discuția de după.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
