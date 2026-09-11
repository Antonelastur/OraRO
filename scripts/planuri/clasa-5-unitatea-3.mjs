// Planuri de lecție detaliate pentru Unitatea III „Pe strada mea", clasa a V-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 5 și ghidul profesorului. Rezolvările
// din ghid nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-5/unitatea-3/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Proiect de grup. În așteptarea Crăciunului (anunțare)',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Se familiarizează cu tema, calendarul și criteriile de evaluare ale proiectului de grup În așteptarea Crăciunului.'],
    resurse: ['Manual Art 5, p. 91', 'Fișa proiectului (/materiale/clasa-5/unitatea-3/lectia-1/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Ce faceți în familie în zilele dinaintea Crăciunului?” Notez pe tablă obiceiurile spuse de elevi.') },
      { etapa: 'Prezentarea proiectului', timp: '12 min', activitate: pasi(
        'Sarcina (p. 91): grupe de 4-5 elevi, un proiect despre Crăciun; temele propuse în manual: sceneta Nașterii, colindele preferate, Crăciunul în lume, o carte despre Crăciun, povestea lui Moș Crăciun, tradiții din comunitate, decorațiuni, scrisoarea către Moș Crăciun (sau o temă propusă de grupă).',
        'Calendarul, două săptămâni: I – alegerea temei și documentarea; II – produsul, împărțirea sarcinilor, repetiția. Prezentarea (3-5 minute) are loc în ultima oră de română dinaintea vacanței.',
        'Împart fișa proiectului.') },
      { etapa: 'Documentarea', timp: '8 min', activitate: pasi(
        '„Sugestii pentru etapa documentării”: ce surse putem folosi (cărți, reviste, internet); fiecare membru consultă cel puțin o sursă și notează de unde a luat informația.',
        'Arăt cum se notează o sursă: titlul, autorul sau site-ul.') },
      { etapa: 'Criteriile de evaluare', timp: '7 min', activitate: pasi(
        'Citim lista de autoevaluare de la p. 91 (sursele, raportarea la temă, colaborarea, produsul, claritatea, atractivitatea) și criteriile din fișă; pentru fiecare, un exemplu concret.') },
      { etapa: 'Formarea grupelor', timp: '15 min', activitate: pasi(
        'Grupele se formează, își aleg tema și produsul (scenetă, colinde cântate, poster, prezentare, decorațiuni, rețetă...).',
        'Fiecare grupă își împarte rolurile (cine se documentează, cine lucrează produsul, cine prezintă) și le notează în fișă.',
        'Trec pe la fiecare grupă și verific să nu se repete temele.') },
      { etapa: 'Încheiere', timp: '3 min', activitate: pasi(
        'Anunț data prezentărilor și verificarea de la sfârșitul primei săptămâni.') },
    ],
    evaluare: 'Fișa de pornire a proiectului; observarea organizării grupelor.',
  },
  'lectia-2': {
    titlu: 'Textul descriptiv literar. O stradă cu sentimente de Ana Blandiana',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din textul descriptiv literar O stradă cu sentimente de Ana Blandiana.'],
    resurse: ['Manual Art 5, pp. 80-81', fisa(2), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        '„Pentru început”, p. 80, ex. 1: fiecare notează o culoare și o emoție pe care le leagă de strada lui; schimbă caietul cu colegul și compară.',
        'Ex. 2: cei trei copaci din imagine: ce emoție ar avea fiecare, dacă ar avea suflet?') },
      { etapa: 'Despre autoare', timp: '3 min', activitate: pasi(
        'Prezentarea de la p. 80: Ana Blandiana este pseudonimul Otiliei Valeria Coman; poetă, prozatoare; motanul Arpagic; poezia deschide volumul „Întâmplări de pe strada mea”.') },
      { etapa: 'Lectura model', timp: '10 min', activitate: pasi(
        'Ex. 3: citesc poezia cu voce tare (sau pornesc înregistrarea din manualul digital); elevii urmăresc în manual.',
        'Lămurim cuvintele din subsol (țuguiat, dibaci, impertinent, horbotă, perfid, infim) și alte cuvinte necunoscute.') },
      { etapa: 'Impresii după prima lectură', timp: '8 min', activitate: pasi(
        'P. 81, ex. 1-2: ce ți-a atras atenția? La ce te-ai gândit citind poezia? Câțiva elevi răspund și își motivează alegerea.',
        'Discuție scurtă: ce vă place la strada voastră?') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (fiecare casă, cu felul ei), ex. 2 (detaliile străzii) și ex. 3 (cuvintele din subsol), individual, 10 minute.',
        'Verificare, 5 minute.') },
      { etapa: 'Temă', timp: '7 min', activitate: pasi(
        'Ex. 3 de la „Impresii după prima lectură”: fiecare notează o întrebare pentru autoare (o citim ora viitoare).',
        'Tema: prezentarea autoarei (p. 80), recitită; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a lecturii și a impresiilor; fișa de exerciții, ex. 1-3.',
  },
  'lectia-3': {
    titlu: 'Textul descriptiv literar. Personificarea',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică particularitățile textului descriptiv literar și personificările din text, comentând rolul lor.'],
    resurse: ['Manual Art 5, pp. 82-83', fisa(3), 'Schema „Textul descriptiv literar. Personificarea” (/materiale/clasa-5/unitatea-3/lectia-3/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei', timp: '4 min', activitate: pasi(
        'Câțiva elevi citesc întrebările pentru autoare; conduc discuția spre ideea că poeta a ales să prezinte strada într-un fel neobișnuit.') },
      { etapa: 'Dirijarea învățării: textul descriptiv literar', timp: '10 min', activitate: pasi(
        '„Explorare”, p. 82, ex. 1: lectură în lanț, câte o strofă, expresiv.',
        'Ex. 2: după ce recunoaștem o poezie (versuri, strofe, rimă).',
        'Ex. 3, individual, apoi în perechi: cele trei părți ale poeziei (introducerea, casele, încheierea) și un titlu pentru fiecare.',
        'Ex. 4: strofa preferată: ce se descrie și cu ce trăsături.') },
      { etapa: 'Notițe: textul descriptiv', timp: '3 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: textul descriptiv (obiect, ființă, cadru, fenomen; părți componente și trăsături); textul descriptiv literar (impresii subiective, limbaj creativ).') },
      { etapa: 'Dirijarea învățării: personificarea', timp: '10 min', activitate: pasi(
        '„Explorare – Personificarea”, ex. 1: șapte grupe, fiecare cu o strofă din partea a doua: desenează casa cu o culoare dominantă, îi dă un nume, îi găsește trăsătura.',
        'Ex. 2: comportamentele omenești ale casei și partea de vorbire prin care sunt exprimate; raportorii prezintă pe scurt.') },
      { etapa: 'Notițe: personificarea', timp: '3 min', activitate: pasi(
        'În caiete, după Repere: figura de stil; personificarea (însușiri omenești date unor ființe necuvântătoare, obiecte, fenomene), cu două exemple din poezie.') },
      { etapa: 'Aplicații: inventarul personificărilor', timp: '5 min', activitate: pasi(
        '„Aplicații”, p. 83, ex. 1, în perechi: tabelul cu personificările din partea a doua (acțiune omenească / însușire omenească); completăm frontal primele rânduri.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (personificare sau nu?) și ex. 2 (felinarul de pe strada mea), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Bilet de ieșire și temă', timp: '3 min', activitate: pasi(
        'Bilet de ieșire: două idei reținute și o întrebare. Le citesc acasă și lămuresc întrebările ora viitoare.',
        'Tema: „Aplicații” de la p. 82, ex. 2, 4 și 6; „Aplicații” de la p. 83, ex. 2-5; „Portofoliu” (un catren cu personificare); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Produsele grupelor; biletele de ieșire; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează un răspuns personal despre semnificația textului O stradă cu sentimente, folosind teoria inteligențelor multiple.'],
    resurse: ['Manual Art 5, p. 84', fisa(4), 'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Lămuresc întrebările din biletele de ieșire.',
        '„Interpretare”, p. 84, ex. 1: care e, pentru voi, imaginea sau ideea cea mai importantă a poeziei? Primesc orice răspuns motivat.') },
      { etapa: 'Interpretare, ex. 2-5', timp: '10 min', activitate: pasi(
        'Ex. 2: tema (strada, casa, sentimentele, maidanezii); îi conduc spre ideea că sentimentele sunt miezul poeziei.',
        'Ex. 3-4: prin ce e deosebită poezia? De ce vede autoarea strada altfel?',
        'Ex. 5: ce ați fi spus voi despre strada voastră?',
        'Feedback constructiv la fiecare răspuns.') },
      { etapa: 'Inteligențele multiple', timp: '15 min', activitate: pasi(
        'Ex. 6: fiecare elev alege sarcina care i se potrivește (lingvistică, logico-matematică, spațial-vizuală, muzicală, corporal-chinestezică, naturalistă, interpersonală, intrapersonală) și lucrează 8 minute.',
        'Prezentări scurte, 7 minute: câte un elev pentru câteva dintre tipurile de sarcini (un desen, o grupare a caselor, un joc de rol, o muzică potrivită...).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (oamenii din spatele caselor), ex. 2 (de acord sau nu?) și ex. 3 (alt titlu), individual, 9 minute.',
        'Verificare, 4 minute. Variantă: fișa de lucru a lecției.') },
      { etapa: 'Reflecție și temă', timp: '7 min', activitate: pasi(
        '„Portofoliu”, ex. 1: toate străzile ar putea avea sentimente, sau noi le dăm viață prin imaginație? Discuție scurtă; fiecare notează concluzia.',
        'Tema: „Portofoliu”, ex. 2 (strada ta, descrisă cu cel puțin o personificare); „Provocări”, ex. 2 (inteligențele tale dominante); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Produsele sarcinilor pe inteligențe; fișa de exerciții, ex. 1-3.',
  },
  'lectia-5': {
    titlu: 'Text auxiliar. O pisică de Tudor Arghezi (fragment)',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică trăsăturile personajului descris în textul auxiliar O pisică de Tudor Arghezi.'],
    resurse: ['Manual Art 5, pp. 85-86', fisa(5), 'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-5/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„V-ați întâlnit vreodată cu un animal pe care ați fi vrut să-l luați acasă?” Doi-trei elevi îl descriu în câteva cuvinte.') },
      { etapa: 'Contextul', timp: '2 min', activitate: pasi(
        'Textul face parte din volumul „Cartea cu jucării” (1931) de Tudor Arghezi; în casă apar copiii Baruțu și Mițura.') },
      { etapa: 'Lectura', timp: '10 min', activitate: pasi(
        'Citesc fragmentul (sau pornesc înregistrarea din manualul digital).',
        'Lămurim cuvintele din subsol: sălaș, lunatic, sofa, doniță, lutră, a tălmăci, opintire, idol, inefabil, moaște, dom, boit.') },
      { etapa: 'Portretul pisicii', timp: '5 min', activitate: pasi(
        'Elevii recitesc și transcriu în caiet pasajele în care e descrisă pisica (cerința de la p. 85).') },
      { etapa: 'Discutarea textului', timp: '10 min', activitate: pasi(
        'P. 86, ex. 1-2: sunt fericiți stăpânii de venirea pisicii (cu exemple)? Tu ai reacționa ca Baruțu sau ca Mițura?',
        'Ex. 3, frontal: potrivim elementele (căutătură, ochi, gură, blană, siluetă...) cu determinările lor.',
        'Ex. 4-6: trăsăturile care reies din „liniștea aristocratică”, „stilul suav”; e pisica personificată?; e o descriere literară? (argumente).',
        'Feedback pozitiv, constructiv.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (cum e primită pisica?), ex. 2 (literar sau nonliterar?) și ex. 3 (comparațiile tale), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Bilet de ieșire: cum te simți la sfârșitul lecției? Un emoticon și un „de ce”.',
        'Recomand „Biblioteci deschise”: „Întoarcerea lui Arpagic” de Ana Blandiana și „Pânza Charlottei” de E.B. White.',
        'Tema: ex. 7 (desenul pisicii, după ex. 3-5); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Pasajele transcrise; biletele de ieșire; fișa de exerciții, ex. 1-3.',
  },
  'lectia-6': {
    titlu: 'Textul descriptiv nonliterar. Persana — un ghem pufos cu o personalitate încântătoare',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Identifică trăsăturile textului descriptiv nonliterar și compară descrierea literară cu cea nonliterară.'],
    resurse: ['Manual Art 5, pp. 87-89', fisa(6), 'Infograficul „Textul descriptiv literar și nonliterar” (/materiale/clasa-5/unitatea-3/lectia-6/infografic.svg)', 'Fotografii cu pisici, pentru anunțuri', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Anunțul pentru pisica pierdută', timp: '10 min', activitate: pasi(
        '„Pentru început”, ex. 1: grupe de 3-4 elevi; fiecare grupă primește fotografia unei pisici și scrie un anunț cu descrierea ei, 5 minute.',
        'Afișez toate fotografiile; grupele citesc anunțurile, iar celelalte ghicesc pisica.',
        'Ex. 2: în textele nonliterare, ființele primesc trăsături omenești? (accentul cade pe exactitatea detaliilor).') },
      { etapa: 'Lectura cu metoda SINELG', timp: '10 min', activitate: pasi(
        'Explic semnele (✓ știam, – altfel decât știam, + nou, ? neclar) și citim articolul în gând, cu creionul în mână.') },
      { etapa: 'Impresii după prima lectură', timp: '5 min', activitate: pasi(
        'P. 88, ex. 1-4: ce semn a predominat; ce s-a confirmat; ce contrazice ce știați; lămurim pasajele cu semnul întrebării.') },
      { etapa: 'Explorare și Repere', timp: '10 min', activitate: pasi(
        '„Explorare”, ex. 1-5: ce ați aflat nou; tema și elementele care o arată (titlul, cuvintele îngroșate, sursa); unde a apărut textul; ce fel de text este; ce ne ajută să vedem aspectele importante (cuvintele îngroșate de la începutul paragrafelor).',
        'În caiete, după Repere și infografic: textul descriptiv nonliterar (informații concrete, ton neutru, limbaj precis) față de cel literar.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (aspectul și detaliile) și ex. 2 (neutru, subiectiv sau sfat?), individual, 7 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Autoevaluare și temă', timp: '5 min', activitate: pasi(
        'Autoevaluare L1-L5: cele trei afirmații, în caiet.',
        'Tema: „Interpretare”, ex. 3, 4, 6 și 9 (tabelul literar-nonliterar); „Provocări”, ex. 2; „Aplicații” (posterul), facultativ, pe grupe; fișa de exerciții, ex. 3 și pagina 2; minitestul, dacă îl folosesc.') },
    ],
    evaluare: 'Anunțurile grupelor; autoevaluarea L1-L5; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Tradiții: sărbătorile de iarnă',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Identifică similitudini privind sărbătorile de iarnă între culturi diferite, pe baza unor exemple din literatură, arte plastice și muzică.'],
    resurse: ['Manual Art 5, pp. 90-92', fisa(7), 'Infograficul „Tradiții: sărbătorile de iarnă” (/materiale/clasa-5/unitatea-3/lectia-7/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '8 min', activitate: pasi(
        '„Pentru început”, p. 90, ex. 1: strofa din „Iarna pe uliță” de George Coșbuc și pictura lui Gheorghe Ciobanu; în perechi, ce emoții și amintiri vă trezesc?',
        'Ex. 2: intrusul din listă și de ce ține el de altă sărbătoare.') },
      { etapa: 'Colindatul', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 1, în grupe de 3-4: de câte ori ați colindat, unde, ce colinde ați cântat, cum ați fost răsplătiți? Fiecare grupă face un mic inventar.',
        'Ex. 2: ce colinde din listă cunoașteți? Facem topul clasei.',
        'Întreb de alte obiceiuri de iarnă, din alte zone ale țării sau din alte țări.') },
      { etapa: 'Aplicații: colinde de aici și de aiurea', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 1: ce eveniment prezintă colindul „O, ce veste minunată”?',
        'Ex. 2: „O, brad frumos” („O Tannenbaum”): cum e descris bradul? (dacă e posibil, ascultăm o variantă).',
        'Ex. 3: „Moș Crăciun cu plete dalbe”: ce amintiri vă trezește?') },
      { etapa: 'Notițe', timp: '3 min', activitate: pasi(
        'În caiete, după Repere și infografic: tradițiile și obiceiurile; sărbătorile diferă de la o comunitate la alta, dar au și aspecte comune (colindatul).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (intrusul), ex. 2 (obiceiul și sărbătoarea) și ex. 3 (sărbători de iarnă în alte țări), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '6 min', activitate: pasi(
        'Ce au în comun sărbătorile de iarnă din culturi diferite? (darurile, lumina, cântecul, masa în familie).',
        'Tema: fișa de exerciții, pagina 2; grupele lucrează la proiectul „În așteptarea Crăciunului”.') },
    ],
    evaluare: 'Inventarele grupelor; fișa de exerciții, ex. 1-3.',
  },
  'lectia-8': {
    titlu: 'Prezentarea proiectului de grup În așteptarea Crăciunului',
    data: null,
    tipOra: 'Proiect',
    durata: 50,
    obiective: ['Prezintă și evaluează, pe grupe, proiectul În așteptarea Crăciunului, conform criteriilor stabilite.'],
    resurse: ['Manual Art 5, p. 91', 'Fișa proiectului cu criteriile de evaluare (/materiale/clasa-5/unitatea-3/lectia-8/fisa.pdf)', 'Produsele proiectelor pe grupe'],
    desfasurare: [
      { etapa: 'Pregătirea prezentărilor', timp: '4 min', activitate: pasi(
        'Stabilim ordinea grupelor; cronometrul pe tablă (3-5 minute pe grupă); grupele își pregătesc recuzita.') },
      { etapa: 'Prezentările', timp: '36 min', activitate: pasi(
        'Fiecare grupă prezintă (scenetă, colinde, poster, prezentare, decorațiuni...), apoi răspunde la una-două întrebări ale colegilor.',
        'Completez grila din fișa proiectului pentru fiecare grupă.',
        'Ceilalți ascultă activ și notează un lucru reușit la fiecare grupă.') },
      { etapa: 'Autoevaluare', timp: '6 min', activitate: pasi(
        'Fiecare elev completează autoevaluarea de la p. 91 (sursele, tema, colaborarea, produsul, claritatea, atractivitatea).') },
      { etapa: 'Încheiere', timp: '4 min', activitate: pasi(
        'Spun ce a mers bine în general; urăm „Sărbători fericite!”; afișăm produsele.') },
    ],
    evaluare: 'Grila de evaluare pe grupe; autoevaluarea elevilor.',
  },
  'lectia-9': {
    titlu: 'Ascultarea activă',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Exersează strategii de ascultare activă într-o situație de comunicare orală.'],
    resurse: ['Manual Art 5, pp. 92-93', fisa(9), 'Quizul „Ascultarea activă” (materialul de joc al lecției)', 'Imagini color cu obiecte, pentru descriere', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Jocul de rol', timp: '6 min', activitate: pasi(
        'Un elev iese câteva momente ca să-și pregătească o prezentare de un minut; clasa primește, în secret, sarcina să nu-l asculte (să nu-l privească, să vorbească între ei).',
        'Elevul prezintă; apoi îl întreb cum s-a simțit.') },
      { etapa: 'Pentru început', timp: '4 min', activitate: pasi(
        '„Pentru început”, p. 92, ex. 1-3: diferența dintre a auzi și a asculta; cum te simți când nu ești ascultat; după ce recunoști un bun ascultător.') },
      { etapa: 'Ghicitorile', timp: '5 min', activitate: pasi(
        '„Explorare”, ex. 1: citesc ghicitorile; elevii pot pune întrebări suplimentare până ghicesc.') },
      { etapa: 'Descrierea după imagini', timp: '8 min', activitate: pasi(
        'Ex. 2: doi-trei voluntari primesc câte o imagine color și o descriu în detaliu; ceilalți completează tabelul (văd, aud, are gust de, miros, pipăi) și pun întrebări sau reformulează.',
        'Ex. 3: comparăm tabelele în perechi și completăm rubricile goale.') },
      { etapa: 'Notițe', timp: '3 min', activitate: pasi(
        'În caiete, după Repere și schema de la p. 93: ascultarea activă (a auzi clar, a interacționa fără să întrerupi, întrebări de clarificare, reformulare, contact vizual, încurajare, concentrare, înțelegere).') },
      { etapa: 'Aplicații: vorbitor, ascultător, observator', timp: '12 min', activitate: pasi(
        '„Aplicații”, p. 93: grupe de câte trei, trei runde; vorbitorul povestește 2-3 minute o întâmplare amuzantă de pe strada lui; ascultătorul dă semnale de atenție, întreabă, reformulează, rezumă; observatorul completează fișa de evaluare.',
        'Circul și observ câte o secvență din fiecare grupă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '8 min', activitate: pasi(
        'Pagina 1: ex. 1 (ascultător activ sau nu?) și ex. 2 (a auzi sau a asculta?), individual, 5 minute; verificare, 3 minute.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: „Reflecții”, ex. 1-3, în enunțuri scurte; fișa de exerciții, ex. 3 și pagina 2. Dacă rămâne timp: quizul lecției.') },
    ],
    evaluare: 'Fișele observatorilor; observarea exercițiului în trei; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Substantivul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Reactualizează categoriile gramaticale ale substantivului: fel, gen, număr.'],
    resurse: ['Manual Art 5, pp. 94-95', fisa(10), 'Schema „Substantivul” (/materiale/clasa-5/unitatea-3/lectia-10/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, ex. 1, variantă rapidă: descriu eu o casă (pereți galbeni, două ferestre pătrate, o ușă mare, un acoperiș țuguiat, un horn înalt), elevii o schițează în 2 minute și numesc părțile ei.') },
      { etapa: 'Istoria cuvântului „casă”', timp: '2 min', activitate: pasi(
        'Ex. 2: casă, din latinescul casa („colibă”); o propoziție în care casă înseamnă „familie”.') },
      { etapa: 'Dirijarea învățării: substantivul comun și propriu', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 1: ce denumesc substantivele din propoziții (ființe, lucruri, fenomene, însușiri, acțiuni, stări).',
        'Ex. 2, joc pe grupe de șase, 5 minute: fișa cu străzi, orașe, țări, prenume, nume de animale, sărbători; câștigă grupa cu cele mai multe substantive corecte.',
        'Ex. 3: Bușteni și Creangă, nume proprii venite din substantive comune.',
        'În caiete, după Repere: substantivul; comun și propriu; scrierea cu literă mare.') },
      { etapa: 'Dirijarea învățării: genul și numărul', timp: '7 min', activitate: pasi(
        '„Explorare”, ex. 1-3: genul (proba un-doi, o-două, un-două); numărul; desinențele de plural.',
        'În caiete: cele trei genuri, cu probe și exemple; numerele; desinența.') },
      { etapa: 'Aplicații frontale', timp: '6 min', activitate: pasi(
        '„Aplicații”, ex. 1 (cuvintele care nu sunt substantive, joc), ex. 4 (genul) și ex. 6 (pluralul, cu desinențele subliniate), la tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce denumește?), ex. 2 (genul și pluralul) și ex. 3 (literă mare sau mică?), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 2, 5, 7, 8 și 9; „Deschideri” (știrea cu pluralul lui cotidian, gadget, laptop, produs, verificat în DOOM3); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Jocul pe grupe; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-11': {
    titlu: 'Articolul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică articolul hotărât și nehotărât și ortografia formelor substantivale articulate hotărât.'],
    resurse: ['Manual Art 5, pp. 96-97', fisa(11), 'Schema „Articolul” (/materiale/clasa-5/unitatea-3/lectia-11/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Jocul Semaforul', timp: '6 min', activitate: pasi(
        '„Explorare – Articolul”, ex. 1: fiecare elev primește un bilețel cu o formă a substantivului (stâlp, stâlpul, un stâlp...) și o scrie pe culoarea potrivită a semaforului desenat pe afiș.') },
      { etapa: 'Ce s-a adăugat?', timp: '2 min', activitate: pasi(
        'Ex. 2: ce s-a adăugat fiecărui substantiv ca să arate cât de cunoscut e obiectul?') },
      { etapa: 'Dirijarea învățării: articolul hotărât și nehotărât', timp: '10 min', activitate: pasi(
        '„Explorare”, ex. 1: unde stau articolele când obiectele sunt cunoscute (la sfârșit).',
        'Ex. 2: unde stau când obiectele sunt mai puțin cunoscute (înainte).',
        'Ex. 3 (normă și abatere): copiii, poeziile; de ce e greșit „exercițile”.') },
      { etapa: 'Notițe', timp: '5 min', activitate: pasi(
        'În caiete, după Repere: articolul; substantiv articulat și nearticulat; articolul hotărât (lipit, cu -u- de legătură: băiatul) și nehotărât (separat); tabelele cu forme.') },
      { etapa: 'Aplicații frontale', timp: '7 min', activitate: pasi(
        '„Aplicații”, ex. 1 (jocul Felinarul: articulate / nearticulate), ex. 2 (intrusul) și ex. 5 (subliniere cu una și două linii), la tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce articol are?), ex. 2 (articulează) și ex. 3 (câți de i?), individual, 10 minute.',
        'Verificare, 5 minute; la ex. 3, explic pe tablă i-urile din copiii și membrii.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 3, 4, 6 și 7; „Deschideri” (anunțurile de la televizor, corectate); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Jocul Semaforul; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-12': {
    titlu: 'Posibilități combinatorii ale substantivului. Prepoziția (I)',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Descoperă părțile secundare de propoziție care determină un substantiv și recunoaște prepoziția simplă.'],
    resurse: ['Manual Art 5, p. 98', fisa(12), 'Schema „Posibilități combinatorii ale substantivului. Atributul” (/materiale/clasa-5/unitatea-3/lectia-12/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Scriu „casa” pe tablă; elevii îi adaugă cuvinte: cum e, a cui e, din ce e făcută (casa bunicii, casa nouă, casa de piatră). Anunț: azi numim partea de propoziție pe care au adăugat-o.') },
      { etapa: 'Dirijarea învățării: atributul', timp: '12 min', activitate: pasi(
        '„Explorare – Atributul”, ex. 1: citim întrebările de sub desene (a cui casă? care casă? ce fel de casă?) și le notăm.',
        'Ex. 2: punem întrebările pentru „casa” și „rafalele” din ultima propoziție.',
        'Ex. 3: prin ce se exprimă atributele (adjectiv sau substantiv).',
        'Ex. 4: câte atribute determină un substantiv în propoziția cu razele de soare.') },
      { etapa: 'Notițe', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: atributul; întrebările lui; substantivul ca centru și atributul ca adjunct; atributul adjectival și substantival; locul atributului.') },
      { etapa: 'Aplicații', timp: '10 min', activitate: pasi(
        '„Aplicații”, ex. 1: asociem fiecare substantiv cu două atribute și construim propoziții.',
        'Ex. 2: atributele din textul despre strada Mariei, la tablă, cu întrebările puse de la substantivul-centru.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (pune întrebarea), ex. 2 (centru și adjunct) și ex. 3 (adjectiv sau substantiv?), individual, 9 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: „Aplicații”, ex. 3 (proverbele de pe mănuși, cu atributele subliniate) și ex. 5; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-13': {
    titlu: 'Posibilități combinatorii ale substantivului. Prepoziția (II)',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Recunoaște prepoziția compusă și identifică atributul substantival prepozițional.'],
    resurse: ['Manual Art 5, p. 99', fisa(13), 'Schema „Prepoziția” (/materiale/clasa-5/unitatea-3/lectia-13/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Scriu „casa de lângă bloc”, „casa fără acoperiș”, „mingea de sub mașină” și întreb: ce cuvinte leagă atributul de substantiv? Din câte cuvinte sunt făcute?') },
      { etapa: 'Reactualizarea', timp: '3 min', activitate: pasi(
        'Atributul: întrebările și exprimarea lui, cu două exemple la tablă.') },
      { etapa: 'Dirijarea învățării: prepoziția', timp: '8 min', activitate: pasi(
        '„Explorare – Prepoziția” (p. 98), ex. 1: ce rol au cuvintele scrise cu albastru.',
        'Ex. 2: fără, de lângă, de pe: câți termeni are fiecare?') },
      { etapa: 'Notițe', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 99) și schema lecției: prepoziția leagă atributul de substantiv și se analizează împreună cu cuvântul pe care îl precedă; prepoziții simple și compuse, inclusiv despre, dinspre, înspre.') },
      { etapa: 'Aplicații', timp: '10 min', activitate: pasi(
        '„Aplicații”, ex. 4 (felul prepozițiilor), la tablă.',
        'Ex. 5 (adevărat sau fals), frontal, cu atributele numărate pe tablă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1 (simplă sau compusă?), ex. 2 (prepoziția care lipsește) și ex. 3 (atributul cu prepoziție), individual, 10 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '6 min', activitate: pasi(
        '„Deschideri”: corectăm oral una dintre propozițiile auzite la radio și explicăm greșeala.',
        'Tema: celelalte două propoziții de la „Deschideri”, corectate și explicate; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-14': {
    titlu: 'Substantivul subiect. Acordul predicatului cu subiectul',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Identifică subiectul simplu și multiplu, exprimat prin substantiv, și verifică acordul predicatului cu subiectul.'],
    resurse: ['Manual Art 5, pp. 100-101', fisa(14), 'Schema „Substantivul subiect. Acordul predicatului cu subiectul” (/materiale/clasa-5/unitatea-3/lectia-14/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Fiecare elev primește un bilețel cu un substantiv și construiește o propoziție în care acesta să fie subiect; câțiva citesc.') },
      { etapa: 'Dirijarea învățării: subiectul', timp: '10 min', activitate: pasi(
        '„Explorare – Subiectul”, ex. 1, în grupe de patru: substantivele din propozițiile despre zăpadă, ce parte de propoziție sunt, de ce parte de propoziție depind, ce întrebare le punem.',
        'Ex. 2-4: subiectele din text (Dan; Monica, Alina și Costin), din câți termeni sunt alcătuite; subiectele multiple de la ex. 4.') },
      { etapa: 'Notițe: subiectul', timp: '4 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: subiectul (întrebarea cine?), simplu și multiplu; termenii legați prin virgulă sau „și”, alăturați sau despărțiți.') },
      { etapa: 'Dirijarea învățării: acordul', timp: '7 min', activitate: pasi(
        '„Explorare – Acordul”, ex. 1-2: persoana și numărul predicatelor, numărul subiectelor; ce observăm?',
        'Ex. 3: „Numărul copiilor... a crescut”: acordul se face doar cu subiectul.',
        'În caiete: regula acordului; la subiect multiplu, predicatul la plural.') },
      { etapa: 'Aplicații', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 1 (subiecte simple și multiple în textul despre Corina), ex. 2 (zăpadă: subiect sau altceva) și ex. 4 (forma corectă), frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (simplu sau multiplu?), ex. 2 (acordul corect) și ex. 3 (subiect sau atribut?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Autoevaluare și temă', timp: '4 min', activitate: pasi(
        'Autoevaluare L8-L11 (cele trei afirmații).',
        'Tema: „Aplicații”, ex. 3; „Reflecții” (eseul de cinci minute: de ce e important să vorbești fără dezacorduri); „Portofoliu” (dezacordurile auzite în trei zile); fișa de exerciții, pagina 2; minitestul, dacă îl folosesc.') },
    ],
    evaluare: 'Exercițiile de grup și de la tablă; autoevaluarea L8-L11; fișa de exerciții, ex. 1-3.',
  },
  'lectia-15': {
    titlu: 'Descrierea unui obiect (I), pregătire',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Identifică cuvinte din câmpul lexical al casei și ordonează informația pe baza unui organizator grafic, pregătind descrierea unui obiect.'],
    resurse: ['Manual Art 5, p. 102', fisa(15), 'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-15/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Joc: Piatra în lac', timp: '4 min', activitate: pasi(
        '„Pentru început”, ex. 1: un minut, fiecare scrie substantivele care îi vin în minte la cuvântul „casă”; câțiva citesc.') },
      { etapa: 'Căsuța preferată', timp: '4 min', activitate: pasi(
        'Ex. 2: fiecare alege una dintre cele trei căsuțe din copaci, spune de ce, și păstrează din listă doar cuvintele potrivite pentru ea.') },
      { etapa: 'Explorare: organizatorul', timp: '18 min', activitate: pasi(
        '„Explorare”, ex. 1-2, individual: organizatorul grafic cu elementele căsuței și câte o trăsătură pentru fiecare, după model.',
        'Ex. 3: locul în care se află căsuța și copacul.',
        'Ex. 4: cum îți imaginezi interiorul? Schiță și trăsături.',
        'Ex. 5: dacă ai personifica-o, ce trăsături omenești ar avea?',
        'Trec printre bănci și ajut.') },
      { etapa: 'Dirijarea învățării: textul descriptiv', timp: '5 min', activitate: pasi(
        'În caiete, după Repere: introducerea (tema, motivul alegerii), cuprinsul (aspectele în detaliu), încheierea (concluzie, părere personală); tema, elementele, publicul, scopul; restrângerea temei.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (lampa de pe birou), ex. 2 (introducere, cuprins sau încheiere?) și ex. 3 (pentru cine scriu?), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Reflecție și temă', timp: '7 min', activitate: pasi(
        'În scris: „Ce am aflat despre cum se construiește un text descriptiv? Ce nu știu încă?”; câțiva citesc.',
        'Tema: organizatorul complet pentru căsuța aleasă (fișa lecției); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Organizatoarele grafice; răspunsurile scrise de la reflecție; fișa de exerciții, ex. 1-3.',
  },
  'lectia-16': {
    titlu: 'Descrierea unui obiect (II), redactare',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează o compunere descriptivă despre un obiect, cu respectarea etapelor scrierii.'],
    resurse: ['Manual Art 5, p. 103', fisa(16), 'Fișa lecției (/materiale/clasa-5/unitatea-3/lectia-16/fisa.pdf)', 'Organizatorul grafic realizat la ora anterioară'],
    desfasurare: [
      { etapa: 'Reactualizarea', timp: '5 min', activitate: pasi(
        'Pentru fiecare dintre cele trei căsuțe, câte un elev prezintă organizatorul făcut ora trecută.') },
      { etapa: 'Exersare: revizuirea', timp: '7 min', activitate: pasi(
        'Fișa de exerciții, ex. 1: rescriem descrierea ghiozdanului fără repetiții, cu o comparație și o personificare; doi elevi citesc.') },
      { etapa: 'Scopul și planul', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 1: fiecare decide pentru o revistă de copii: vrea să impresioneze (a) sau să amuze (b)?',
        'Planul, în organizatorul din manual: din ce e compus obiectul, cum arată, la ce folosește, de ce e important pentru mine; titlul.') },
      { etapa: 'Feedback pe plan', timp: '4 min', activitate: pasi(
        'În perechi, schimb de planuri și câte o sugestie ca textul să fie mai captivant.') },
      { etapa: 'Redactarea', timp: '18 min', activitate: pasi(
        'Fiecare scrie descrierea pe fișa lecției: ciorna, apoi revizuirea (claritate, paragrafe, corectitudine).',
        'Trec printre bănci și notez observații (poate face planul, poate da feedback, textul e coerent și captivant).') },
      { etapa: 'Evaluare reciprocă', timp: '5 min', activitate: pasi(
        '„Aplicații”, ex. 2, prescurtat: colegul verifică textul după grila din manual; fișa de exerciții, ex. 3 („Două stele și o dorință”).') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: varianta finală, pe o coală separată, după observații; fișa de exerciții, ex. 2 și 4; „Evaluarea portofoliului” (mapa cu lucrările din unitățile I-III, în ordinea preferințelor, cu 3-4 rânduri despre evoluție).') },
    ],
    evaluare: 'Grila de evaluare reciprocă; observațiile profesorului; textul final.',
  },
  'lectia-17': {
    titlu: 'Recapitulare, lectură și comunicare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea III: descrierea literară, personificarea, ascultarea activă.'],
    resurse: ['Manual Art 5, pp. 104-105', fisa(17), 'Quizul „Recapitulare, lectură și comunicare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Textul A: casa din „Matilda”', timp: '5 min', activitate: pasi(
        'Citesc fragmentul din „Matilda” de Roald Dahl (p. 104); elevii urmăresc.') },
      { etapa: 'Rezolvare ghidată, A', timp: '8 min', activitate: pasi(
        'Ex. 1 (tema descrierii), ex. 6 (tabelul pasaj – trăsătura casei), ex. 7 (atribute despre casă), ex. 8 (personificarea), frontal.') },
      { etapa: 'Textul B: căsuța din copaci', timp: '5 min', activitate: pasi(
        'Elevii citesc în gând articolul despre „Cuibul Princesei” (p. 105).') },
      { etapa: 'Rezolvare ghidată, B', timp: '8 min', activitate: pasi(
        'Ex. 1 (unde a apărut textul), ex. 2 (două diferențe între descrierea reginei și cea a autorului), ex. 3 (tema, aspectele și trăsăturile, patru termeni de arhitectură, ce informații lipsesc).') },
      { etapa: 'Ascultare activă', timp: '5 min', activitate: pasi(
        'În perechi: unul descrie din memorie căsuța din copaci; celălalt ascultă, pune o întrebare de clarificare și reformulează; apoi schimbă rolurile.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Textele despre far: pagina 1, ex. 1-3, și pagina 2, ex. 4, individual, 11 minute.',
        'Verificare, 4 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: A, ex. 9 (casa domnișoarei Honey, în 8-10 rânduri); B, ex. 4 (căsuța ta de vis, în două variante); fișa de exerciții, ex. 5-6.') },
    ],
    evaluare: 'Observarea rezolvării ghidate și a exercițiului în perechi; fișa de exerciții, ex. 1-4.',
  },
  'lectia-18': {
    titlu: 'Recapitulare, gramatică și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea III: substantivul, articolul, prepoziția, acordul subiect-predicat.'],
    resurse: ['Manual Art 5, pp. 104-105', fisa(18), 'Quizul „Recapitulare, gramatică și redactare” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Lanțul noțiunilor: fiecare elev numește o noțiune de gramatică din unitate și dă un exemplu (substantiv propriu, articol nehotărât, atribut adjectival, prepoziție compusă, subiect multiplu...).') },
      { etapa: 'Rezolvare ghidată pe textul din „Matilda”', timp: '14 min', activitate: pasi(
        'A, ex. 2 (trei substantive care numesc locuința: gen, număr, articol), ex. 3 (subiect simplu și multiplu), ex. 4 (atributele evidențiate), ex. 5 (substantivele proprii), la tablă și în caiete.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1-4, individual, 10 minute.',
        'Verificare, 5 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Pregătirea descrierii', timp: '12 min', activitate: pasi(
        'Fișa de exerciții, ex. 6: descrierea unui obiect din casă pentru un copil de 6 ani; fiecare face planul și scrie începutul; doi-trei elevi citesc.',
        'Verificăm pe loc cerințele: o personificare, trei atribute diferite, un subiect multiplu.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: descrierea de la ex. 6, terminată; fișa de exerciții, ex. 5. Anunț evaluarea de ora viitoare.') },
    ],
    evaluare: 'Observarea rezolvării ghidate; fișa de exerciții, ex. 1-5; descrierea de la ex. 6.',
  },
  'lectia-19': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea III.'],
    resurse: ['Testul tipărit, Manual Art 5, p. 106', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testul (p. 106) și foile de lucru; elevii scriu numele.',
        'Citesc cu voce tare fragmentul și cerințele; explic punctajul: partea A, 60 de puncte, partea B, 30 de puncte, 10 puncte din oficiu.',
        'Recomand împărțirea timpului: cam 20 de minute pentru partea A, 15-20 de minute pentru descriere, 5 minute pentru recitire.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual; răspund doar la întrebări de înțelegere a cerinței.',
        'Anunț timpul la jumătate și cu 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii recitesc și verifică numele; strâng lucrările.',
        'Întreb scurt ce li s-a părut ușor și ce li s-a părut greu; notez pentru ora de analiză a rezultatelor.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
