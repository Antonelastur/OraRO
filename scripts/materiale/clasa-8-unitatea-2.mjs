// Materiale de sprijin originale pentru Unitatea II „Cum sunt ceilalți?",
// clasa a VIII-a. Quizuri pe obiectivele fiecărei lecții; noțiunile vin din
// manualul Art 8 ediția 2025 și din ghid, formulările sunt proprii.
// Nivel de clasa a VIII-a, an de Evaluare Națională: distractorii sunt
// greșelile pe care elevii chiar le fac, nu variante absurde.

export default {
  'lectia-1': {
    joc: {
      tip: 'quiz',
      titlu: 'Take, Ianke și Cadâr de Victor Ion Popa',
      pasi: [
        {
          intrebare: 'Cine sunt cei trei negustori din titlu?',
          variante: [
            { text: 'Un român, un evreu și un turc, prăvăliași vecini într-un târg', corect: true, explicatie: 'Tocmai diferența de etnie și de credință dă sens prieteniei lor.' },
            { text: 'Trei frați din aceeași familie', corect: false, explicatie: 'Nu sunt rude; sunt vecini de prăvălie.' },
            { text: 'Trei elevi de la aceeași școală', corect: false, explicatie: 'Sunt oameni maturi, cu afaceri proprii.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 52-57',
        },
        {
          intrebare: 'Ce fel de operă literară este textul?',
          variante: [
            { text: 'O comedie, text dramatic scris pentru a fi jucat pe scenă', corect: true, explicatie: 'Structura pe replici și indicații scenice arată destinația scenică.' },
            { text: 'Un roman', corect: false, explicatie: 'Romanul e text epic, cu narator, nu cu replici de scenă.' },
            { text: 'O poezie lirică', corect: false, explicatie: 'Nu are nici vers, nici eu liric.' },
          ],
          indiciu: 'Uită-te cum e așezat textul în pagină. Ce vezi înaintea fiecărei replici?',
          sursa: 'Manual Art 8, pp. 52-57',
        },
        {
          intrebare: 'Cum se manifestă, de obicei, prietenia dintre cei trei?',
          variante: [
            { text: 'Prin ceartă și tachinare permanentă, sub care se ascunde afecțiune reală', corect: true, explicatie: 'Umorul piesei vine tocmai din contrastul dintre vorbe și fapte.' },
            { text: 'Prin vorbe frumoase și complimente reciproce', corect: false, explicatie: 'Dimpotrivă, se ceartă aproape tot timpul.' },
            { text: 'Prin evitare, fiecare stând în prăvălia lui', corect: false, explicatie: 'Sunt tot timpul împreună, asta e miezul piesei.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 52-57',
        },
        {
          intrebare: 'Ce e o indicație scenică?',
          variante: [
            { text: 'Textul autorului, de obicei între paranteze, care spune cum se joacă replica sau ce se întâmplă pe scenă', corect: true, explicatie: 'Nu se rostește; e adresată actorilor și regizorului.' },
            { text: 'Replica cea mai importantă a unui personaj', corect: false, explicatie: 'Indicația scenică nu e replică deloc.' },
            { text: 'Titlul fiecărei scene', corect: false, explicatie: 'Titlurile de scenă sunt altceva.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 58-59',
        },
      ],
    },
  },

  'lectia-7': {
    joc: {
      tip: 'quiz',
      titlu: 'Noi și ceilalți',
      pasi: [
        {
          intrebare: 'Care e deosebirea dintre o comunitate multiculturală și una interculturală?',
          variante: [
            { text: 'În cea multiculturală, grupurile trăiesc alături; în cea interculturală, se cunosc și schimbă lucruri între ele', corect: true, explicatie: 'Multiculturalul e coexistență, interculturalul e dialog.' },
            { text: 'Sunt exact același lucru, doar denumiri diferite', corect: false, explicatie: 'Diferența e tocmai gradul de interacțiune.' },
            { text: 'Cea interculturală are un singur grup etnic', corect: false, explicatie: 'Ar fi opusul definiției.' },
          ],
          indiciu: 'Uită-te la prefixe: multi înseamnă mai multe, inter înseamnă între.',
          sursa: 'Manual Art 8, pp. 70-71',
        },
        {
          intrebare: 'Ce este un stereotip?',
          variante: [
            { text: 'O idee simplificată și generalizată despre un grup, aplicată tuturor membrilor lui', corect: true, explicatie: 'Stereotipul poate fi și pozitiv, dar rămâne o generalizare care ignoră persoana.' },
            { text: 'O opinie personală despre cineva pe care îl cunoști bine', corect: false, explicatie: 'Stereotipul se aplică unui grup, nu unei persoane cunoscute.' },
            { text: 'Un adevăr verificat statistic', corect: false, explicatie: 'Tocmai lipsa verificării îl face stereotip.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 70-71',
        },
        {
          intrebare: 'Ce face o relație culturală să fie constructivă?',
          variante: [
            { text: 'Curiozitatea reală față de celălalt și disponibilitatea de a-ți pune la îndoială propriile idei preconcepute', corect: true, explicatie: 'Fără punerea la îndoială, rămâne doar politețe de suprafață.' },
            { text: 'Renunțarea completă la propria cultură', corect: false, explicatie: 'Dialogul intercultural nu cere să te lepezi de ce ești.' },
            { text: 'Evitarea oricărei discuții despre diferențe', corect: false, explicatie: 'Ocolirea subiectului nu construiește nimic.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 70-71',
        },
      ],
    },
  },

  'lectia-9': {
    joc: {
      tip: 'quiz',
      titlu: 'Construcții active și pasive',
      pasi: [
        {
          intrebare: 'Cum se transformă „Elevii au citit piesa” în construcție pasivă?',
          variante: [
            { text: 'Piesa a fost citită de elevi.', corect: true, explicatie: 'Complementul direct devine subiect, iar vechiul subiect devine complement de agent.' },
            { text: 'Piesa au citit elevii.', corect: false, explicatie: 'S-a schimbat doar topica; construcția rămâne activă.' },
            { text: 'Elevii s-au citit piesa.', corect: false, explicatie: 'E o construcție reflexivă, nu pasivă.' },
          ],
          indiciu: 'Cine primea acțiunea în propoziția activă? El devine subiect.',
          sursa: 'Manual Art 8, pp. 74-75',
        },
        {
          intrebare: 'Cum se formează diateza pasivă în limba română?',
          variante: [
            { text: 'Cu verbul a fi și participiul verbului de bază, acordat cu subiectul', corect: true, explicatie: 'Cartea a fost citită, cărțile au fost citite: participiul se acordă.' },
            { text: 'Cu verbul a avea și participiul', corect: false, explicatie: 'Aceea e formarea perfectului compus, nu a pasivului.' },
            { text: 'Cu pronumele reflexiv se, întotdeauna', corect: false, explicatie: 'Există și pasiv cu se, dar nu e singura formă și nu e cea din lecție.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 74-75',
        },
        {
          intrebare: 'Ce funcție sintactică are „de elevi” în „Piesa a fost citită de elevi”?',
          variante: [
            { text: 'complement de agent', corect: true, explicatie: 'Arată cine face de fapt acțiunea, într-o construcție pasivă.' },
            { text: 'complement direct', corect: false, explicatie: 'Complementul direct nu apare într-o construcție pasivă cu verbul a fi.' },
            { text: 'subiect', corect: false, explicatie: 'Subiectul e „piesa”, cea care primește acțiunea.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 74-75',
        },
        {
          intrebare: 'De ce alege un autor construcția pasivă?',
          variante: [
            { text: 'Ca să pună în prim-plan cine sau ce primește acțiunea, nu cine o face', corect: true, explicatie: 'Uneori autorul acțiunii nici nu contează, sau e necunoscut.' },
            { text: 'Ca să scurteze propoziția', corect: false, explicatie: 'Pasivul e de obicei mai lung decât activul.' },
            { text: 'Pentru că activul e greșit gramatical', corect: false, explicatie: 'Ambele sunt corecte; diferă accentul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 74-75',
        },
      ],
    },
  },

  'lectia-10': {
    joc: {
      tip: 'quiz',
      titlu: 'Predicatul verbal și predicatul nominal',
      pasi: [
        {
          intrebare: 'Ce fel de predicat are propoziția „Take este negustor”?',
          variante: [
            { text: 'Predicat nominal, format din verbul copulativ „este” și numele predicativ „negustor”', corect: true, explicatie: 'Verbul copulativ singur nu are înțeles deplin; are nevoie de numele predicativ.' },
            { text: 'Predicat verbal', corect: false, explicatie: 'Predicatul verbal arată o acțiune; „este” aici doar leagă.' },
            { text: 'Nu are predicat', corect: false, explicatie: 'Orice propoziție are un predicat.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 76-77',
        },
        {
          intrebare: 'În care propoziție verbul „a fi” NU este copulativ?',
          variante: [
            { text: 'Ianke este în prăvălie.', corect: true, explicatie: 'Aici „este” înseamnă „se află”, are înțeles deplin, deci e predicat verbal.' },
            { text: 'Ianke este vesel.', corect: false, explicatie: 'Aici „este” leagă subiectul de numele predicativ „vesel”.' },
            { text: 'Ianke este prietenul lui Take.', corect: false, explicatie: 'Tot copulativ, cu numele predicativ „prietenul”.' },
          ],
          indiciu: 'Încearcă să înlocuiești „este” cu „se află”. Dacă merge, nu e copulativ.',
          sursa: 'Manual Art 8, pp. 76-77',
        },
        {
          intrebare: 'Prin ce se poate exprima numele predicativ?',
          variante: [
            { text: 'Prin substantiv, adjectiv, pronume, numeral sau verb la infinitiv', corect: true, explicatie: 'E o clasă largă; nu doar substantive și adjective.' },
            { text: 'Doar prin substantiv', corect: false, explicatie: 'Adjectivul e la fel de frecvent: „este vesel”.' },
            { text: 'Doar prin adjectiv', corect: false, explicatie: 'Substantivul apare la fel de des.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 76-77',
        },
        {
          intrebare: 'Câte cuvinte formează predicatul în „Cadâr a fost mulțumit”?',
          variante: [
            { text: 'Trei: a fost mulțumit, un predicat nominal cu verb copulativ la perfect compus', corect: true, explicatie: 'Verbul copulativ poate fi la orice timp; numele predicativ rămâne parte din predicat.' },
            { text: 'Două: a fost', corect: false, explicatie: 'Fără „mulțumit”, predicatul e incomplet.' },
            { text: 'Unul: mulțumit', corect: false, explicatie: 'Numele predicativ singur nu formează predicatul.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 76-77',
        },
      ],
    },
  },

  'lectia-11': {
    joc: {
      tip: 'quiz',
      titlu: 'Construcțiile cu pronume reflexive',
      pasi: [
        {
          intrebare: 'Cum recunoști un pronume reflexiv?',
          variante: [
            { text: 'Trimite la aceeași persoană cu subiectul: se spală înseamnă că el se spală pe el însuși', corect: true, explicatie: 'Reflexivul întoarce acțiunea asupra celui care o face.' },
            { text: 'Apare întotdeauna la începutul propoziției', corect: false, explicatie: 'Poziția nu are legătură.' },
            { text: 'Se scrie mereu cu cratimă', corect: false, explicatie: 'Cratima apare doar în anumite forme, nu întotdeauna.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 78-79',
        },
        {
          intrebare: 'În „Ei își spun adevărul”, ce funcție sintactică are „își”?',
          variante: [
            { text: 'complement indirect, în dativ', corect: true, explicatie: 'Răspunde la întrebarea „cui?”: își spun lor înșiși.' },
            { text: 'complement direct', corect: false, explicatie: 'Complementul direct e „adevărul”, răspunde la „ce?”.' },
            { text: 'subiect', corect: false, explicatie: 'Subiectul e „ei”.' },
          ],
          indiciu: 'Pune întrebarea de la verb: spun ce? spun cui?',
          sursa: 'Manual Art 8, pp. 78-79',
        },
        {
          intrebare: 'Cum deosebești pronumele reflexiv de pronumele personal cu aceeași formă?',
          variante: [
            { text: 'Verifici dacă trimite la aceeași persoană cu subiectul. Dacă da, e reflexiv.', corect: true, explicatie: 'În „îl spală” e altă persoană; în „se spală” e aceeași.' },
            { text: 'Verifici dacă e la singular sau la plural', corect: false, explicatie: 'Numărul nu deosebește cele două.' },
            { text: 'Verifici dacă apare înainte sau după verb', corect: false, explicatie: 'Poziția variază la amândouă.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 78-79',
        },
        {
          intrebare: 'În „Take se gândește la prieteni”, pronumele „se”...',
          variante: [
            { text: 'nu are funcție sintactică, face parte din forma verbului', corect: true, explicatie: 'Unele verbe sunt reflexive prin natura lor; „se” nu se poate scoate și nu răspunde la nicio întrebare.' },
            { text: 'este complement direct', corect: false, explicatie: 'Nu răspunde la „pe cine?”; nu se poate separa de verb.' },
            { text: 'este subiect', corect: false, explicatie: 'Subiectul e „Take”.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 78-79',
        },
      ],
    },
  },

  'lectia-12': {
    joc: {
      tip: 'quiz',
      titlu: 'Construcțiile impersonale',
      pasi: [
        {
          intrebare: 'Ce este un verb impersonal?',
          variante: [
            { text: 'Un verb care nu are subiect, fiindcă acțiunea nu e făcută de cineva anume: plouă, ninge, tună', corect: true, explicatie: 'Sunt mai ales verbe care denumesc fenomene ale naturii.' },
            { text: 'Un verb care se folosește doar la persoana I', corect: false, explicatie: 'Impersonalul apare, de regulă, doar la persoana a III-a.' },
            { text: 'Un verb fără predicat', corect: false, explicatie: 'Verbul impersonal chiar e predicatul propoziției.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 80-81',
        },
        {
          intrebare: 'În „Se spune că vremea se schimbă”, construcția „se spune” este...',
          variante: [
            { text: 'impersonală: nu știm și nu ne interesează cine spune', corect: true, explicatie: 'Construcția cu „se” ascunde intenționat autorul acțiunii.' },
            { text: 'reflexivă: cineva se spune pe sine', corect: false, explicatie: 'Nu are sens ca cineva să se spună pe sine.' },
            { text: 'pasivă cu verbul a fi', corect: false, explicatie: 'Nu apare verbul a fi; e o construcție cu „se”.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 80-81',
        },
        {
          intrebare: 'De ce apar des construcțiile impersonale în textele oficiale și în presă?',
          variante: [
            { text: 'Pentru că ascund cine e responsabil de afirmație sau de acțiune', corect: true, explicatie: '„Se consideră că...” nu spune cine consideră, deci nimeni nu răspunde de afirmație.' },
            { text: 'Pentru că sunt mai scurte', corect: false, explicatie: 'Nu sunt neapărat mai scurte.' },
            { text: 'Pentru că sunt mai corecte gramatical', corect: false, explicatie: 'Ambele variante sunt corecte.' },
          ],
          indiciu: 'Gândește-te cine răspunde de o afirmație de tipul „se spune că”.',
          sursa: 'Manual Art 8, pp. 80-81',
        },
        {
          intrebare: 'Care propoziție are un verb personal devenit impersonal?',
          variante: [
            { text: 'Îmi trebuie o carte.', corect: true, explicatie: 'A trebui e folosit impersonal; „o carte” e subiectul, nu persoana care are nevoie.' },
            { text: 'Eu citesc o carte.', corect: false, explicatie: 'Verb personal obișnuit, cu subiect clar.' },
            { text: 'Ninge afară.', corect: false, explicatie: 'A ninge e impersonal prin natura lui, nu devenit impersonal.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 80-81',
        },
      ],
    },
  },

  'lectia-13': {
    joc: {
      tip: 'quiz',
      titlu: 'Subiectul',
      pasi: [
        {
          intrebare: 'Prin ce părți de vorbire se poate exprima subiectul?',
          variante: [
            { text: 'Substantiv, pronume, numeral, verb la infinitiv sau supin, adjectiv substantivizat', corect: true, explicatie: 'E o clasă largă; nu doar substantivul poate fi subiect.' },
            { text: 'Numai prin substantiv', corect: false, explicatie: 'Pronumele e la fel de frecvent ca subiect.' },
            { text: 'Numai prin substantiv și pronume', corect: false, explicatie: '„A citi e util” are ca subiect un verb la infinitiv.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 82-83',
        },
        {
          intrebare: 'Ce este subiectul neexprimat?',
          variante: [
            { text: 'Subiectul care nu apare în propoziție, dar se deduce din forma verbului sau din context', corect: true, explicatie: 'În „Citesc o carte”, subiectul „eu” se deduce din terminația verbului.' },
            { text: 'Un subiect greșit formulat', corect: false, explicatie: 'Nu e o greșeală; e o construcție firească în română.' },
            { text: 'Un subiect care lipsește complet, ca la verbele impersonale', corect: false, explicatie: 'La impersonale subiectul chiar nu există; aici doar nu e rostit.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 82-83',
        },
        {
          intrebare: 'În „Ne trebuie mai mult timp”, care e subiectul?',
          variante: [
            { text: 'mai mult timp', corect: true, explicatie: 'Verbul a trebui e impersonal: lucrul de care e nevoie devine subiect, nu persoana.' },
            { text: 'ne', corect: false, explicatie: '„Ne” e complement indirect: cui îi trebuie.' },
            { text: 'nu are subiect', corect: false, explicatie: 'Are: „mai mult timp”.' },
          ],
          indiciu: 'Întreabă: cine sau ce trebuie?',
          sursa: 'Manual Art 8, pp. 82-83',
        },
        {
          intrebare: 'Cum verifici acordul predicatului cu un subiect multiplu?',
          variante: [
            { text: 'Predicatul se pune la plural, chiar dacă fiecare termen al subiectului e la singular', corect: true, explicatie: 'Take și Ianke discută, nu discută.' },
            { text: 'Predicatul se acordă cu ultimul termen al subiectului', corect: false, explicatie: 'Ar fi greșit; subiectul multiplu cere plural.' },
            { text: 'Predicatul rămâne mereu la singular', corect: false, explicatie: 'Exact greșeala pe care o sancționează regula acordului.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 82-83',
        },
      ],
    },
  },

  'lectia-14': {
    joc: {
      tip: 'quiz',
      titlu: 'Construcțiile incidente',
      pasi: [
        {
          intrebare: 'Ce este o construcție incidentă?',
          variante: [
            { text: 'O intervenție a vorbitorului, introdusă în enunț, fără legătură sintactică cu restul', corect: true, explicatie: 'Se poate scoate fără ca propoziția să devină incorectă.' },
            { text: 'Complementul direct al propoziției', corect: false, explicatie: 'Complementul are funcție sintactică; incidenta nu are.' },
            { text: 'O propoziție subordonată', corect: false, explicatie: 'Subordonata e legată sintactic de regentă; incidenta nu e.' },
          ],
          indiciu: 'Încearcă să scoți partea din enunț. Dacă restul stă în picioare, e incidentă.',
          sursa: 'Manual Art 8, pp. 84-85',
        },
        {
          intrebare: 'Cum se marchează, în scris, o construcție incidentă?',
          variante: [
            { text: 'Prin virgule, linii de pauză sau paranteze, de o parte și de alta', corect: true, explicatie: 'Semnul trebuie pus la ambele capete, nu doar la unul.' },
            { text: 'Prin ghilimele', corect: false, explicatie: 'Ghilimelele marchează un citat sau vorbirea directă.' },
            { text: 'Prin două puncte', corect: false, explicatie: 'Două puncte anunță o enumerare sau o explicație.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 84-85',
        },
        {
          intrebare: 'Care variantă e corect punctuată?',
          variante: [
            { text: 'Take, după cum știți, ține prăvălia din colț.', corect: true, explicatie: 'Incidenta e izolată prin virgule la ambele capete.' },
            { text: 'Take după cum știți, ține prăvălia din colț.', corect: false, explicatie: 'Lipsește virgula de la începutul incidentei.' },
            { text: 'Take, după cum știți ține prăvălia din colț.', corect: false, explicatie: 'Lipsește virgula de la sfârșitul incidentei.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 84-85',
        },
        {
          intrebare: 'Ce rol are, de obicei, o construcție incidentă?',
          variante: [
            { text: 'Arată atitudinea vorbitorului sau adaugă o precizare: cred, din păcate, după cum știți', corect: true, explicatie: 'E vocea celui care vorbește, strecurată în enunț.' },
            { text: 'Leagă două propoziții într-o frază', corect: false, explicatie: 'Acela e rolul elementelor de relație.' },
            { text: 'Înlocuiește un substantiv repetat', corect: false, explicatie: 'Aceea e anafora.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 84-85',
        },
      ],
    },
  },

  'lectia-15': {
    joc: {
      tip: 'quiz',
      titlu: 'Fraza. Coordonarea',
      pasi: [
        {
          intrebare: 'Cum afli câte propoziții are o frază?',
          variante: [
            { text: 'Numeri predicatele: câte predicate, atâtea propoziții', corect: true, explicatie: 'E regula sigură, valabilă și când propozițiile sunt lungi sau amestecate.' },
            { text: 'Numeri virgulele', corect: false, explicatie: 'Virgulele nu corespund întotdeauna graniței dintre propoziții.' },
            { text: 'Numeri subiectele', corect: false, explicatie: 'Subiectul poate fi neexprimat, deci numărătoarea ar da greș.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 86-87',
        },
        {
          intrebare: 'Ce este coordonarea prin juxtapunere?',
          variante: [
            { text: 'Legarea a două propoziții doar prin virgulă, fără cuvânt de legătură', corect: true, explicatie: 'A venit, a văzut, a învins: trei propoziții juxtapuse.' },
            { text: 'Legarea prin conjuncția „și”', corect: false, explicatie: 'Aceea e coordonare prin joncțiune.' },
            { text: 'Legarea printr-un pronume relativ', corect: false, explicatie: 'Pronumele relativ introduce o subordonată.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 86-87',
        },
        {
          intrebare: 'Care conjuncții realizează coordonare adversativă?',
          variante: [
            { text: 'dar, iar, însă, ci', corect: true, explicatie: 'Adversativul opune ideea a doua celei dintâi.' },
            { text: 'și, nici', corect: false, explicatie: 'Acelea sunt copulative, adaugă.' },
            { text: 'sau, ori, fie', corect: false, explicatie: 'Acelea sunt disjunctive, dau de ales.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 86-87',
        },
        {
          intrebare: 'Între ce fel de propoziții se poate stabili coordonarea?',
          variante: [
            { text: 'Între propoziții de același fel: două principale sau două subordonate', corect: true, explicatie: 'Coordonarea presupune egalitate; subordonarea presupune dependență.' },
            { text: 'Doar între o principală și o secundară', corect: false, explicatie: 'Aceea e subordonare, nu coordonare.' },
            { text: 'Doar între două principale', corect: false, explicatie: 'Și două subordonate de același fel se pot coordona între ele.' },
          ],
          indiciu: null,
          sursa: 'Manual Art 8, pp. 86-87',
        },
      ],
    },
  },

  'lectia-2': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-2/schema.svg', titlu: 'Cum e construit un text dramatic' } },
  'lectia-3': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-3/schema.svg', titlu: 'Timpul, spațiul, acțiunea, personajele' } },
  'lectia-5': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-5/schema.svg', titlu: 'Cum e construită o cronică de spectacol' } },
  'lectia-8': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-8/schema.svg', titlu: 'Patru feluri de a reacționa, unul singur asertiv' } },
  'lectia-16': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-16/schema.svg', titlu: 'Coordonare și subordonare, față în față' } },
  'lectia-17': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-17/schema.svg', titlu: 'Elipsa și semnul care o marchează' } },
  'lectia-18': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-18/schema.svg', titlu: 'Cronica de film, ce conține și ce nu' } },
  'lectia-20': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-20/schema.svg', titlu: 'Ce am învățat despre lectură în Unitatea II' } },
  'lectia-21': { schema: { fisier: '/materiale/clasa-8/unitatea-2/lectia-21/schema.svg', titlu: 'Toate construcțiile din unitate, la un loc' } },
}
