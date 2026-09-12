// Planuri de lecție detaliate, Unitatea I „Unde găsim frumusețea?”, clasa a VIII-a.
// Pași concreți pe rubricile și exercițiile din Manual Art 8, pp. 10-50, cu fișa
// de exerciții a lecției folosită la „Obținerea performanței”. Exercițiile din
// manual nerezolvate în clasă rămân temă. Fără răspunsuri (ghid sau fișă).
// 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-8/unitatea-1/lectia-${n}/fisa-exercitii.pdf)`
const fl = (n) => `Fișa lecției (/materiale/clasa-8/unitatea-1/lectia-${n}/fisa.pdf)`

export default {
  'lectia-1': {
    titlu: 'Textul liric. O, rămâi... de Mihai Eminescu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește și înțelege textul liric O, rămâi... de Mihai Eminescu, identificând tema frumuseții naturii.'],
    resurse: ['Manual Art 8, p. 10', fisa(1), 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Pentru început”, ex. 1-2', timp: '5 min', activitate: pasi(
        'Ce loc din natură le amintește elevilor de copilărie și ce îi dădea frumusețe.',
        'Ce stări le produce tabloul „În pădure” de Nicolae Grigorescu.') },
      { etapa: 'Autorul și poezia', timp: '3 min', activitate: pasi(
        'Caseta despre Mihai Eminescu (p. 10); poezia a apărut în „Convorbiri literare”, în 1879.') },
      { etapa: 'Lectura model, ex. 3', timp: '10 min', activitate: pasi(
        'Citesc poezia de două ori; a doua oară, elevii marchează în manual unde se schimbă vocea care vorbește.') },
      { etapa: 'Impresii după prima lectură, ex. 1-4', timp: '7 min', activitate: pasi(
        'Starea produsă de lectură; imaginea preferată; alte poezii eminesciene; asemănarea cu tabloul.') },
      { etapa: 'Lectura pe voci', timp: '6 min', activitate: pasi(
        'Un elev citește monologul pădurii, altul ultimele două strofe; clasa spune ce ton se potrivește fiecărei voci.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '12 min', activitate: pasi(
        'Pagina 1: ex. 1 (cine vorbește și ce spune) și ex. 2 (adevărat sau fals), individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Eminescu și pădurea', timp: '4 min', activitate: pasi(
        'Elevii amintesc alte poezii eminesciene cu codrul; notăm titlurile pe tablă, pentru ora viitoare.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Impresii după prima lectură, ex. 3, în scris; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-2': {
    titlu: 'Structura poeziei și caracteristicile textului liric. Versificația',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică structura compozițională, vocile ficționale și elementele de versificație ale textului liric.'],
    resurse: ['Manual Art 8, p. 11', fisa(2), fl(2), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Vocile, Explorare, ex. 1-3', timp: '7 min', activitate: pasi(
        'Vocile ficționale și fragmentele poeziei; cuvintele-cheie; cui îi e adresat monologul pădurii, rolul interjecției și al imperativului.') },
      { etapa: 'Momentul rememorat, ex. 4-6', timp: '6 min', activitate: pasi(
        'Ce moment din copilărie rememorează adultul; cuvintele care arată că reflecțiile vin mai târziu; schimbarea spațiului în final.') },
      { etapa: 'Textul liric, ex. 7', timp: '4 min', activitate: pasi(
        'Sentimentele din fiecare parte și mărcile subiectivității.') },
      { etapa: 'Versificația, ex. 8-9', timp: '4 min', activitate: pasi(
        'Tipul de strofă, măsura ultimelor patru versuri, rima.') },
      { etapa: 'Notițe: textul liric și versificația', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (p. 11): textul liric, vocea ficțională, mărcile subiectivității, versul, strofa, măsura, tipurile de rimă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (patru strofe, versificația), individual, 7 minute.',
        'Verificare, 4 minute; numărăm silabele împreună la tablă.') },
      { etapa: 'Pădurea și apa, Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Însușirea comună a pădurii și formele apei în strofele din „Din străinătate” și „Floare albastră”.') },
      { etapa: 'Rima și măsura, ex. 3-4', timp: '3 min', activitate: pasi(
        'Tipul de rimă din cele trei strofe; măsura, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-3': {
    titlu: 'Limbajul figurat. Aliterația',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Recunoaște figurile de stil din poezie și analizează rolul aliterației.'],
    resurse: ['Manual Art 8, p. 12', fisa(3), fl(3), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ghilimelele, Explorare, ex. 1', timp: '3 min', activitate: pasi(
        'Rolul ghilimelelor și stările din chemarea pădurii personificate.') },
      { etapa: 'Epitetele, ex. 2', timp: '5 min', activitate: pasi(
        'Epitetele despre copil și pădure, tipul lor și ce sugerează.') },
      { etapa: 'Timpul în comparații, ex. 3', timp: '4 min', activitate: pasi(
        'Cele trei cuvinte din câmpul lexical al timpului și semnificația comparațiilor.') },
      { etapa: 'Metafora, ex. 4', timp: '3 min', activitate: pasi(
        'Metafora din versurile despre luna plină și ce sugerează.') },
      { etapa: 'Repetiția și aliterația, ex. 5-9', timp: '8 min', activitate: pasi(
        'Repetițiile din text; consoana repetată în versul despre valuri și poziția ei; exemplele de la ex. 8; consoanele din rimă.') },
      { etapa: 'Notițe: figurile de stil', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (p. 12): personificarea, epitetul, comparația, metafora (explicită și implicită), repetiția, aliterația.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (figura de stil) și ex. 2 (aliterația), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aliterațiile, Aplicații', timp: '6 min', activitate: pasi(
        'Versurile a-c (Alecsandri, Eminescu, Nichita Stănescu): consoanele repetate și ce sugerează.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (repetiția într-o poezie eminesciană).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Formulează opinii personale despre semnificațiile poeziei O, rămâi....'],
    resurse: ['Manual Art 8, p. 13', fisa(4), fl(4), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Pădurea copilăriei, Interpretare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Ce reprezintă pădurea pentru copil; elementele vegetale și animale; planul terestru și cel astral.') },
      { etapa: 'Creșterea, ex. 4', timp: '3 min', activitate: pasi(
        'Cum diferă creșterea pădurii de creșterea copilului.') },
      { etapa: 'Darurile pădurii, ex. 5, în perechi', timp: '5 min', activitate: pasi(
        'Ce crede pădurea că numai ea îi poate dărui copilului și ce semnifică.') },
      { etapa: 'Portretul copilului, ex. 6-7', timp: '4 min', activitate: pasi(
        'Asemănarea cu un prinț; taina dezvăluită în strofa a treia.') },
      { etapa: 'Ghid de învățare, ex. 8', timp: '9 min', activitate: pasi(
        'Grupe de 4-5 urmăresc animația din varianta digitală și răspund la cele trei cerințe; raportorii prezintă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (darurile pădurii) și ex. 2 (copilul și adultul), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Chemarea, Narcis, văpaia, ex. 9-11', timp: '5 min', activitate: pasi(
        'Cum e chemarea pădurii; copilul ca Narcis; ce se întâmplă cu timpul când luna se oglindește în apă.') },
      { etapa: 'Despărțirea, ex. 12-15', timp: '4 min', activitate: pasi(
        'De ce pleacă adolescentul; sensul verbului „a șuiera”; câmpul; de ce adultul nu mai poate înțelege pădurea.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; Portofoliu (dialogul peste ani, minimum 100 de cuvinte); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Aprecieri pe raportările grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-5': {
    titlu: 'Textul liric. Izvorul nopții de Lucian Blaga. Structura textului poetic',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește textul Izvorul nopții de Lucian Blaga și identifică vocea ficțională, structura și cuvintele-cheie ale poeziei.'],
    resurse: ['Manual Art 8, pp. 14-15', fisa(5), 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Pentru început”, ex. 1-2', timp: '4 min', activitate: pasi(
        'Ține frumusețea umană doar de aspectul fizic? Ce atrage în portretul lui Nicolae Tonitza.') },
      { etapa: 'Autorul și lectura, ex. 3', timp: '5 min', activitate: pasi(
        'Caseta despre Lucian Blaga (p. 14); citesc poezia de două ori.') },
      { etapa: 'Impresii după prima lectură, ex. 1-3', timp: '4 min', activitate: pasi(
        'Ce le-a plăcut, la ce s-au gândit, ce i-a surprins.') },
      { etapa: 'Muzică, dans, pictură, ex. 4-7', timp: '5 min', activitate: pasi(
        'Piesa lui Florin Bogardo (varianta digitală) și schimbările din text; dansul potrivit; legătura cu tabloul; citatele lui Paul Valéry și Alexandru Macedonski.') },
      { etapa: 'Structura, Explorare, ex. 1-6', timp: '8 min', activitate: pasi(
        'Substantivele de adresare și locul lor; adjectivele care însoțesc cuvântul „ochi”; sensul adresării finale; frumusețe fizică sau mister; de ce un substantiv în primul vers.') },
      { etapa: 'Investigația, ex. 7', timp: '8 min', activitate: pasi(
        'Trei grupe (artiștii, gânditorii, detectivii) răspund pe poster la întrebările lor; un reprezentant prezintă; sintetizez.') },
      { etapa: 'Notițe: structura poeziei moderne', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 15): cuvintele-cheie, vocea ficțională și contextul, versurile albe și libere.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '9 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce fel de vers?) și ex. 2 (câmpul lexical al întunericului), individual, 6 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 1-4; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Aprecieri pe posterele grupelor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-6': {
    titlu: 'Figurile de stil. Hiperbola',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Analizează figurile de stil din poezie, cu accent pe hiperbolă.'],
    resurse: ['Manual Art 8, p. 16', fisa(6), fl(6), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ochii iubitei, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Elementul evidențiat în portret; asocierea figurilor de stil; ce trăsătură a iubitei pune în valoare fiecare.') },
      { etapa: 'Enumerația, ex. 4', timp: '3 min', activitate: pasi(
        'Ce sugerează formele de relief înșirate.') },
      { etapa: 'Exagerarea, ex. 5-7', timp: '6 min', activitate: pasi(
        'Cum li se pare imaginea mării de întuneric; scopul exagerării și figura combinată; exagerări din vorbirea de zi cu zi.') },
      { etapa: 'Notițe: enumerația și hiperbola', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 16): enumerația, hiperbola (mărire, micșorare, combinarea cu alte figuri), exemple din vorbirea curentă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (hiperbolă sau nu?) și ex. 2 (enumerația), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Superlativul și hiperbola, Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Tipul de superlativ din descrierea ochilor și ce sugerează; semnificația hiperbolei din poezie.') },
      { etapa: 'Coșbuc și Arghezi, ex. 3', timp: '6 min', activitate: pasi(
        'În perechi, hiperbolele și enumerațiile din versurile a-b și figurile care le realizează.') },
      { etapa: 'Enunțuri cu hiperbolă, ex. 4', timp: '4 min', activitate: pasi(
        'Fiecare scrie cele două enunțuri; câțiva citesc.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (cele două picturi).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-7': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Discută semnificațiile poeziei Izvorul nopții și realizează o interpretare creativă.'],
    resurse: ['Manual Art 8, p. 17', fisa(7), fl(7), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Concizie și profunzime, Interpretare, ex. 1', timp: '4 min', activitate: pasi(
        'Se opune simplitatea formei ideilor profunde?') },
      { etapa: 'Ochiul, ex. 2', timp: '4 min', activitate: pasi(
        'Ochiul ca lumină spirituală; revenim la răspunsurile de la p. 16.') },
      { etapa: 'Metafora „adâncii”, ex. 3', timp: '4 min', activitate: pasi(
        'Partea de vorbire a cuvântului și elementul natural din comparația subînțeleasă.') },
      { etapa: 'Ochii-izvor și noaptea tainică, ex. 4-5', timp: '6 min', activitate: pasi(
        'Discutăm variantele a-d de la fiecare exercițiu sau formulăm altele.') },
      { etapa: 'Iubirea, mister? ex. 6', timp: '4 min', activitate: pasi(
        'Argumente cu exemple din poezie.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (de acord sau nu?) și ex. 2 (simboluri), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Semnificația de ansamblu, ex. 7-8', timp: '5 min', activitate: pasi(
        'Varianta cea mai potrivită sau o interpretare proprie; alte texte cu care se leagă poezia.') },
      { etapa: 'Picturile, ex. 9', timp: '3 min', activitate: pasi(
        'Care portret e mai aproape de imaginea iubitei și de ce.') },
      { etapa: 'Interpretarea creativă, Provocări', timp: '6 min', activitate: pasi(
        'Elevii se grupează după limbajul artistic ales și își fac planul (fișa de exerciții, ex. 3).') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; interpretarea creativă, pe grupe; fișa de exerciții, ex. 4.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; planurile grupelor.',
  },
  'lectia-8': {
    titlu: 'Textul liric. Lecția de citire de Nichita Stănescu. Limbajul poetic și versificația',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește textul Lecția de citire de Nichita Stănescu și identifică trăsăturile textului liric din secolul al XX-lea.'],
    resurse: ['Manual Art 8, pp. 18-19', fisa(8), 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Pentru început”, ex. 1-3', timp: '5 min', activitate: pasi(
        'Artele din imagini și cea preferată; a șaptea artă; se poate învăța arta cuvântului?') },
      { etapa: 'Autorul și lectura, ex. 4', timp: '6 min', activitate: pasi(
        'Caseta despre Nichita Stănescu (p. 18); citesc poezia de două ori.') },
      { etapa: 'Impresii după prima lectură, ex. 1-3', timp: '4 min', activitate: pasi(
        'Ce le-a amintit poezia; enunțurile greu de înțeles; o întrebare pentru mine.') },
      { etapa: 'Vocea și adresarea, Explorare, ex. 1-2', timp: '4 min', activitate: pasi(
        'A cui poate fi vocea ficțională; cui se adresează și de ce se teme.') },
      { etapa: 'Lumea poeziei, ex. 3-4', timp: '4 min', activitate: pasi(
        'Elementele lumii imaginate; cuvintele care apar de trei ori și legătura dintre ele.') },
      { etapa: 'Versificația, ex. 5-7', timp: '6 min', activitate: pasi(
        'Strofele și numele lor; măsura și rima din strofa a doua; versuri albe sau libere; în perechi, mărcile subiectivității.') },
      { etapa: 'Notițe: poezia modernă', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 19): înnoirile poeziei din secolul al XX-lea, caligrama.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (lumea ca scriere) și ex. 2 (adevărat sau fals), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '2 min', activitate: pasi(
        'Câmpul lexical al literaturii; sensul din text al alfabetului, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-6; fișa de exerciții, pagina 2; opțional, Provocări (caligrama).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-9': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Compară textul cu o operă de artă plastică și cu poezia O, rămâi..., formulând opinii despre semnificațiile lui.'],
    resurse: ['Manual Art 8, p. 20', fisa(9), fl(9), 'Reproducerea operei de artă din manual'],
    desfasurare: [
      { etapa: 'Cele trei imagini, Interpretare, ex. 1', timp: '4 min', activitate: pasi(
        'Elemente din poezie în imaginile din realitatea de azi.') },
      { etapa: 'Metaforele, ex. 2-3', timp: '6 min', activitate: pasi(
        'Metaforele peștelui și ale păsărilor; sensul pietrei care poate fi citită.') },
      { etapa: 'Norii și epitetele, ex. 4-5', timp: '5 min', activitate: pasi(
        'Figura de stil a norilor și ce simbolizează; epitetele din strofa a treia.') },
      { etapa: 'Literatura și viața, ex. 6', timp: '4 min', activitate: pasi(
        'Discutăm variantele a-d.') },
      { etapa: 'Actul creației, ex. 7-9', timp: '6 min', activitate: pasi(
        'Repetiția și derivatele din penultima strofă; tabloul lui Magritte; punctul de fugă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (simboluri) și ex. 2 (poezia modernă), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Totul e scriere, ex. 10-11', timp: '4 min', activitate: pasi(
        'Copie a realului sau recompunere? Sensul invocării divinității.') },
      { etapa: 'Interjecția și condiționalul, ex. 12-13', timp: '4 min', activitate: pasi(
        'Interjecția comună cu „O, rămâi...”; ce exprimă verbele din ultima strofă.') },
      { etapa: 'Titlul, ex. 14', timp: '3 min', activitate: pasi(
        'Explicăm titlul, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-10': {
    titlu: 'Compararea textelor sub aspectul conținutului și al structurii',
    data: null,
    tipOra: 'Recapitulare, lectură',
    durata: 50,
    obiective: ['Compară cele trei poezii studiate din punctul de vedere al temei, versificației și figurilor de stil.'],
    resurse: ['Manual Art 8, p. 21', fisa(10), fl(10), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Criteriile, Explorare, ex. 1', timp: '4 min', activitate: pasi(
        'Ce aspecte putem compara la două sau mai multe texte; le notez pe tablă.') },
      { etapa: 'Investigația, ex. 2', timp: '14 min', activitate: pasi(
        'Trei grupe de 4-5, cu sarcinile din grafic (temă și voce, versificație și punere în pagină, figuri și imagini); lucrează pe poster, după modelul de la p. 21, 10 minute.',
        'Verific pe parcurs că fiecare observație e confirmată de cele trei texte.') },
      { etapa: 'Prezentarea, ex. 3', timp: '6 min', activitate: pasi(
        'Câte un elev sau o pereche din fiecare grupă prezintă concluziile.') },
      { etapa: 'Notițe: compararea textelor', timp: '4 min', activitate: pasi(
        'În caiete, după Repere (p. 21): criteriile, aspectele de conținut și de formă, prezentarea în paralel.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (trei poezii, față în față) și ex. 2 (conținut sau formă?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Diagrama Venn, Aplicații', timp: '5 min', activitate: pasi(
        'Grupele încep diagrama cu trei cercuri; o termină acasă.') },
      { etapa: 'Autoevaluare L1-L9', timp: '3 min', activitate: pasi(
        'Cele trei enunțuri de la p. 21, în caiete.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: diagrama Venn și justificarea temei frumuseții; fișa lecției; fișa de exerciții, pagina 2; opțional, Portofoliu.') },
    ],
    evaluare: 'Aprecieri pe posterele grupelor; fișa de exerciții, ex. 1-2; autoevaluarea L1-L9.',
  },
  'lectia-11': {
    titlu: 'Text auxiliar. O pasăre înaltă de Dan Coman',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Citește textul auxiliar O pasăre înaltă de Dan Coman și identifică frumusețea din viața cotidiană.'],
    resurse: ['Manual Art 8, pp. 22-23', fisa(11), fl(11), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Introducerea de la p. 22', timp: '3 min', activitate: pasi(
        'Frumusețea poate fi găsită și în viața de zi cu zi; cine este Dan Coman.') },
      { etapa: 'Lectura', timp: '4 min', activitate: pasi(
        'Citesc poezia; elevii caută cele două planuri ale existenței în care e descoperită frumusețea.') },
      { etapa: 'Eseul de cinci minute, ex. 1', timp: '7 min', activitate: pasi(
        'Fiecare scrie 5 minute despre ce l-a impresionat; doi-trei citesc.') },
      { etapa: 'Vocea și frumusețea, ex. 2-4', timp: '6 min', activitate: pasi(
        'Pe cine reprezintă vocea; ce e frumusețea pentru bărbat și cui i se opune; locuțiunile care împart poezia.') },
      { etapa: 'Nivelul sintactic, ex. 5-7', timp: '7 min', activitate: pasi(
        'Grupe de 4-5: predicatele din prima parte, subiectul din ultimul enunț, lipsa predicatelor din a doua parte; tipul de vers și lipsa majusculelor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (cele două planuri) și ex. 2 (adevărat sau fals), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Fotografia și musculița, ex. 8-12', timp: '5 min', activitate: pasi(
        'Unde e păstrată fotografia; cum influențează viața bărbatului; musculița și diminutivul; variantele a-d; „nimic real”.') },
      { etapa: 'Pasărea și finalul, ex. 17-19', timp: '4 min', activitate: pasi(
        'Ce simbolizează flamingo; ultimele două versuri; sentimentul final.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: ex. 13-16 și ex. 20; fișa lecției; fișa de exerciții, pagina 2; opțional, Provocări (o poezie din cotidian).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-12': {
    titlu: 'Valori culturale românești în lume',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Discută despre contribuțiile românești la arta modernă mondială, precum Brâncuși și Enescu.'],
    resurse: ['Manual Art 8, pp. 24-25', fisa(12), 'Infograficul „Valori culturale românești în lume” (/materiale/clasa-8/unitatea-1/lectia-12/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Topul personalităților, „Pentru început”, ex. 1', timp: '5 min', activitate: pasi(
        'În perechi, trei personalități românești care au contribuit la patrimoniul lumii, într-un top.') },
      { etapa: 'Domeniile, ex. 2', timp: '4 min', activitate: pasi(
        'Completăm tabelul cu personalitățile și domeniile lor; elevii mai adaugă nume.') },
      { etapa: 'Brâncuși și Enescu, Explorare', timp: '8 min', activitate: pasi(
        'Citim cele două prezentări (p. 24); fiecare notează ce îi face pe cei doi valori ale umanității.') },
      { etapa: 'Notițe', timp: '4 min', activitate: pasi(
        'Proiectez infograficul; în caiete, după Repere (p. 24): Brâncuși, esența obiectului; Enescu, „cinci într-unu”; inspirația din folclor.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (Brâncuși sau Enescu?) și ex. 2 (operele), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Rapsodia română, Aplicații, ex. 1', timp: '5 min', activitate: pasi(
        'Ascultăm fragmentul din varianta digitală: instrumentele, linia melodică, motivele repetate.') },
      { etapa: 'Măiastra, ex. 2-3', timp: '6 min', activitate: pasi(
        'Citim fragmentul lui Dan Grigorescu; comparăm Măiastra (1912) cu Pasărea în văzduh (1940).') },
      { etapa: 'Legături, ex. 4', timp: '3 min', activitate: pasi(
        'O legătură între poeziile unității și arta lui Brâncuși sau a lui Enescu.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 5; fișa de exerciții, pagina 2; opțional, Provocări (Alexandra Nechita).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-13': {
    titlu: 'Strategii de ascultare activă',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Exersează strategiile de ascultare activă în situații de comunicare.'],
    resurse: ['Manual Art 8, pp. 26-27', fisa(13), 'Quizul „Strategii de ascultare activă” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Pentru început”, ex. 1-3', timp: '5 min', activitate: pasi(
        'Să asculți sau să vorbești? Tipurile de comunicare verbală din imagini și cele trei poezii; unde nu poate apărea ascultarea activă.') },
      { etapa: 'A auzi și a asculta, Explorare, ex. 1-3', timp: '5 min', activitate: pasi(
        'Imaginile de la p. 26: diferența dintre a auzi și a asculta; de ce mama și prietena nu ascultă activ; alte bariere.') },
      { etapa: 'Barierele din poezii, ex. 4', timp: '3 min', activitate: pasi(
        'Barierele de ascultare din „O, rămâi...” și „Lecția de citire”.') },
      { etapa: 'Semnele și momentul opiniei, ex. 5-6', timp: '4 min', activitate: pasi(
        'Semnele nonverbale ale ascultării; când e bine să-ți spui părerea.') },
      { etapa: 'Strategiile eficiente, ex. 7', timp: '4 min', activitate: pasi(
        'În perechi, strategiile bune și cele rele, cu câte un exemplu.') },
      { etapa: 'Notițe: ascultarea activă', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (pp. 26-27): cele patru etape și beneficiile ascultării active.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '9 min', activitate: pasi(
        'Pagina 1: ex. 1 (a auzi sau a asculta?) și ex. 2 (etapele), individual, 6 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Discuția în grupe, Aplicații', timp: '10 min', activitate: pasi(
        'Grupe de 4-5, câte o temă a-d; moderatorul notează ideile, observatorul completează grila de la p. 27; moderatorii prezintă concluziile.') },
      { etapa: 'Quizul', timp: '3 min', activitate: pasi(
        'Quizul „Strategii de ascultare activă”, câteva întrebări, frontal.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: Explorare, ex. 8-9, în scris; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Grilele observatorilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-14': {
    titlu: 'Categorii semantice (actualizare)',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Actualizează cunoștințele despre sinonime, antonime, omonime și cuvinte polisemantice.'],
    resurse: ['Manual Art 8, pp. 28-30', fisa(14), 'Schema „Categorii semantice” (/materiale/clasa-8/unitatea-1/lectia-14/schema.svg)', 'DEX'],
    desfasurare: [
      { etapa: 'Dialogul despre teme, „Pentru început”, ex. 1-6', timp: '6 min', activitate: pasi(
        'Sinonime, antonime, omonime, sensurile lui „a comenta”, confuzia paronimică din replică, frontal.') },
      { etapa: 'Sinonimele și antonimele, Explorare, ex. 1-7', timp: '8 min', activitate: pasi(
        'Sinonimele din versuri; „a îngâna”; sinonimul lui „sodiu”; locuțiunea „a râde în nas”; antonimele; prefixele negative; „cu capul în nori”.') },
      { etapa: 'Omonimele și polisemia, Explorare, ex. 1-4', timp: '6 min', activitate: pasi(
        'Perechile din imagini; tipurile de omonime; „veselă” și „dar”; în perechi, sensurile lui „ochi”.') },
      { etapa: 'Paronimele, Explorare, ex. 1-2', timp: '3 min', activitate: pasi(
        'Paronimele din versuri și cele de pe flori.') },
      { etapa: 'Notițe', timp: '7 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 28-30): sinonime, antonime, omonime (totale, parțiale, lexico-gramaticale), omofone, omografe, cuvântul polisemantic, paronimele.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (sinonime și antonime) și ex. 2 (ce relație?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 2 și 6', timp: '5 min', activitate: pasi(
        'Omonimele lui „lună” și „pas”; în perechi, expresiile sinonime din seriile A și B.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3, 4, 7, 8; fișa de exerciții, pagina 2; opțional, Provocări.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-15': {
    titlu: 'Derivarea. Compunerea (actualizare)',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Actualizează cunoștințele despre derivare și compunere, cu exerciții aplicate.'],
    resurse: ['Manual Art 8, pp. 31-33', fisa(15), 'Schema „Derivarea. Compunerea” (/materiale/clasa-8/unitatea-1/lectia-15/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Versurile lui Topîrceanu, Explorare, ex. 1', timp: '5 min', activitate: pasi(
        'În perechi, derivatele cu sufixe și cu prefixe; încercuim afixele.') },
      { etapa: 'Sufixele, ex. 2-4', timp: '7 min', activitate: pasi(
        'Sufixe lexicale și gramaticale; ce arată sufixele din tabel; valoarea diminutivelor.') },
      { etapa: 'Prefixele, ex. 5-7', timp: '4 min', activitate: pasi(
        'Prefixele din listă; formarea lui „străveziu” și a lui „a învălui”.') },
      { etapa: 'Compunerea, Explorare, ex. 1-4', timp: '6 min', activitate: pasi(
        'Compusele din versurile lui Minulescu; tabelul procedeelor, pe grupe; abrevierile; elementele savante.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 31-33): sufixele, prefixele, seria derivativă, derivatele parasintetice, procedeele compunerii, elementele savante.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (derivatul) și ex. 2 (compusul), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Afixele derivatelor și procedeele compunerii, frontal.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3-6; fișa de exerciții, pagina 2; opțional, Provocări (cuvinte-valiză).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-16': {
    titlu: 'Conversiunea. Familia de cuvinte',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Definește conversiunea și identifică familia lexicală a unor cuvinte.'],
    resurse: ['Manual Art 8, pp. 34-35', fisa(16), 'Schema „Conversiunea. Familia de cuvinte” (/materiale/clasa-8/unitatea-1/lectia-16/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: '„Frumos”, Explorare, ex. 1-2', timp: '4 min', activitate: pasi(
        'Partea de vorbire a cuvintelor din cele trei enunțuri; comparăm cu derivatele și compusul din pictură.') },
      { etapa: 'Conversiunea, ex. 3-6', timp: '10 min', activitate: pasi(
        'În grupe și în perechi: substantivele, adjectivele, adverbele și prepozițiile obținute prin conversiune; cazul cerut de prepoziții.') },
      { etapa: 'Notițe: conversiunea', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (pp. 34-35): definiția, ce se poate obține prin conversiune, participiu și supin.') },
      { etapa: 'Familia lui „floare”, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Grupe de 4-5 completează tabelul; de ce „floral”, „florentin”, „floretă” nu intră în familie; familia și câmpul lexical.') },
      { etapa: 'Notițe: familia și câmpul lexical', timp: '3 min', activitate: pasi(
        'Definițiile din Repere (p. 35).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (din ce parte de vorbire?) și ex. 2 (familia cuvântului „munte”), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'Cuvintele obținute prin conversiune din enunțurile date, frontal.') },
      { etapa: 'Familia lui „nor”, ex. 3', timp: '3 min', activitate: pasi(
        'Construim familia pe tablă.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 2 și 4; Portofoliu (coșul cu fructe); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-17': {
    titlu: 'Împrumuturile',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Identifică tipurile de cuvinte din vocabularul limbii române, după originea lor.'],
    resurse: ['Manual Art 8, pp. 36-37', fisa(17), 'Schema „Împrumuturile. Neologismele” (/materiale/clasa-8/unitatea-1/lectia-17/schema.svg)', 'DEX'],
    desfasurare: [
      { etapa: 'Cuvinte din alte limbi, Explorare, ex. 1-2', timp: '5 min', activitate: pasi(
        'Fiecare spune un cuvânt preluat dintr-o limbă străină studiată; cele trei liste din versurile lui Dan Coman.') },
      { etapa: 'Tânărul de ieri și cel de azi, Tipuri de împrumuturi, ex. 1-3', timp: '7 min', activitate: pasi(
        'Asociem cuvintele cu cele două desene; originea lor; „drept” și „direct”.') },
      { etapa: 'Seriile, ex. 4-6', timp: '3 min', activitate: pasi(
        'Seria cu împrumuturi noi; formarea celorlalte cuvinte; mijloace externe sau interne.') },
      { etapa: 'Notițe', timp: '8 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (pp. 36-37): cuvinte moștenite, formate, împrumutate; împrumuturi vechi și noi, cu limbile lor; neologismele.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (de unde vine cuvântul?) și ex. 2 (vechi sau nou?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Etichetele, Aplicații, ex. 1', timp: '4 min', activitate: pasi(
        'În perechi, împrumuturile vechi și noi de pe etichete.') },
      { etapa: 'Neologisme și „a servi”, ex. 2-3', timp: '5 min', activitate: pasi(
        'Neologismele din strofe; enunțurile în care „a servi” e folosit greșit.') },
      { etapa: 'Forma corectă, ex. 4', timp: '4 min', activitate: pasi(
        'Formele corecte ale împrumuturilor, verificate în DEX.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: fișa de exerciții, pagina 2; opțional, Provocări (neologismele din „Lecția de citire”).') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-18': {
    titlu: 'Registrele limbii',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Recunoaște registrele limbii, solemn, standard, familiar, și elementele de argou și jargon.'],
    resurse: ['Manual Art 8, pp. 38-39', fisa(18), 'Schema „Registrele limbii. Argoul. Jargonul” (/materiale/clasa-8/unitatea-1/lectia-18/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Cele trei desene, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Vocabularul, gramatica și pronunția din cele trei situații; diferențele dintre enunțurile a-b; unde apare limbajul cultivat.') },
      { etapa: 'Notițe: registrele', timp: '6 min', activitate: pasi(
        'Proiectez schema; în caiete, după Repere (p. 38): registrul solemn, standard, familiar, cu vocabularul, gramatica și pronunția fiecăruia.') },
      { etapa: 'Argoul și jargonul, Explorare, ex. 1-4', timp: '6 min', activitate: pasi(
        'Sensul cuvintelor din dialogul elevilor și cum s-au format; termenii din informatică; „parol” la Caragiale.') },
      { etapa: 'Notițe: argoul și jargonul', timp: '4 min', activitate: pasi(
        'Definițiile și mijloacele de formare a termenilor argotici (Repere, p. 39).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce registru?) și ex. 2 (în registrul standard), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-2', timp: '5 min', activitate: pasi(
        'Registrul enunțurilor a-d; clasificarea adjectivelor pe registre.') },
      { etapa: 'Termenii argotici, ex. 4', timp: '4 min', activitate: pasi(
        'Termenii din fragmentul lui Mircea Sântimbreanu și echivalentele lor standard.') },
      { etapa: 'Jargonul tinerilor, ex. 5', timp: '4 min', activitate: pasi(
        'Sensul termenilor de jargon și de argou din text.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2.',
  },
  'lectia-19': {
    titlu: 'Fonetica',
    data: null,
    tipOra: 'Predare, fonetică',
    durata: 50,
    obiective: ['Identifică diftongii, triftongii, vocalele în hiat și pronunția cuvintelor de origine străină.'],
    resurse: ['Manual Art 8, pp. 40-41', fisa(19), 'Quizul „Fonetica” (materialul de joc al lecției)', 'DOOM3'],
    desfasurare: [
      { etapa: 'Versurile Magdei Isanos, Explorare, ex. 1-3', timp: '7 min', activitate: pasi(
        'Diftongii, triftongii și hiaturile; literele și sunetele din trei cuvinte; i „șoptit” din enunțul dat.') },
      { etapa: 'Notițe: sunetele și literele', timp: '5 min', activitate: pasi(
        'În caiete, după Repere (p. 40): grupurile de litere, i „șoptit”, diftongul, triftongul, hiatul.') },
      { etapa: 'Cuvintele de origine străină, Explorare, ex. 1-8', timp: '8 min', activitate: pasi(
        'Pronunția lui „e-mail”; împrumuturi adaptate și neadaptate; litera u; „bleumarin”; literele duble; literele care nu se citesc; articularea.') },
      { etapa: 'Notițe: împrumuturile neadaptate', timp: '4 min', activitate: pasi(
        'Repere (p. 41): scrierea și pronunțarea după DOOM3, articolul cu sau fără cratimă, numele proprii străine.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (diftong, triftong sau hiat?) și ex. 2 (litere și sunete), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-4', timp: '5 min', activitate: pasi(
        'Sunetele literelor colorate; obiectele din ilustrație; intrușii din serii; articularea cu cratimă.') },
      { etapa: 'Quizul', timp: '5 min', activitate: pasi(
        'Quizul „Fonetica”, frontal.') },
      { etapa: 'Mâncărurile, ex. 8', timp: '2 min', activitate: pasi(
        'Pronunțăm împreună cele patru denumiri.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Aplicații, ex. 5-7; Portofoliu (cele două liste); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-20': {
    titlu: 'Organizarea coerentă a textului. Anafora',
    data: null,
    tipOra: 'Predare, limbă română',
    durata: 50,
    obiective: ['Explică rolul anaforei și al coerenței în organizarea unui text.'],
    resurse: ['Manual Art 8, pp. 42-43', fisa(20), fl(20), 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Textul-clădire, Explorare, ex. 1-4', timp: '7 min', activitate: pasi(
        'Reconstituim textul despre jurnalul de lectură al Anei; cuvintele care ne-au ajutat; paragrafele; tema.') },
      { etapa: 'Texte fără logică, ex. 5', timp: '5 min', activitate: pasi(
        'De ce exemplele a-e nu sunt logice.') },
      { etapa: 'Notițe: coerența', timp: '6 min', activitate: pasi(
        'În caiete, după Repere (p. 42): ordinea logică, temporală, spațială; regulile continuității, progresiei și noncontradicției.') },
      { etapa: 'Anafora, Explorare, ex. 1-2', timp: '6 min', activitate: pasi(
        'Cum sunt reluate „Ioana” și „comentariile”; în grupe, anaforicele din exemplele a-g și partea lor de vorbire.') },
      { etapa: 'Notițe: anafora', timp: '3 min', activitate: pasi(
        'Antecedentul, anaforicul, felurile anaforicelor (Repere, p. 43).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (enunțuri amestecate, ordinea și legăturile), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Aplicații, ex. 1-3', timp: '7 min', activitate: pasi(
        'Ordinea enunțurilor din „Apă, praf și soare”; anaforicele din exemplele a-b; eliminăm repetițiile din textul despre Mihai.') },
      { etapa: 'Autoevaluare L13-L19', timp: '2 min', activitate: pasi(
        'Cele trei enunțuri de la p. 43, în caiete.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: Portofoliu (text de 100-150 de cuvinte, cu patru anaforice ale lui „text”); fișa lecției; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; autoevaluarea L13-L19.',
  },
  'lectia-21': {
    titlu: 'Etapele scrierii. Integrarea feedbackului (partea 1/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează o ciornă și primește feedback pe baza unei grile de evaluare.'],
    resurse: ['Manual Art 8, pp. 44-45', fisa(21), 'Fișa lecției cu grila de evaluare (/materiale/clasa-8/unitatea-1/lectia-21/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Etapele și feedbackul, „Pentru început”', timp: '7 min', activitate: pasi(
        'Reamintim cele cinci etape ale scrierii; fiecare completează fișa cu cele patru întrebări despre feedback, pentru mine.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (etapele scrierii) și ex. 2 (feedback util?), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Sarcina și grila, Explorare, ex. 1', timp: '5 min', activitate: pasi(
        'Citim versurile lui Ion Pillat și reperele sarcinii; parcurgem grila de evaluare.') },
      { etapa: 'Planul, fișa de exerciții, ex. 3', timp: '5 min', activitate: pasi(
        'Fiecare își notează reperele: elementele peisajului, două figuri de stil, emoția, tema.') },
      { etapa: 'Ciorna', timp: '12 min', activitate: pasi(
        'Elevii redactează compunerea (minimum 100 de cuvinte) și o recitesc.') },
      { etapa: 'Schimbul de caiete și feedbackul', timp: '8 min', activitate: pasi(
        'Perechile își schimbă caietele și completează grila, cu sugestii concrete; fiecare notează cel puțin două sugestii primite (Explorare, ex. 2).') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: ciorna terminată, dacă nu e gata; fișa de exerciții, ex. 4.') },
    ],
    evaluare: 'Grilele de feedback completate de colegi; fișa de exerciții, ex. 1-2.',
  },
  'lectia-22': {
    titlu: 'Etapele scrierii. Integrarea feedbackului (partea 2/2)',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Integrează feedbackul primit și editează textul pentru prezentare.'],
    resurse: ['Manual Art 8, pp. 44-45', fisa(22), fl(22), 'Ciornele și grilele de feedback de la ora anterioară'],
    desfasurare: [
      { etapa: 'Sugestiile, fișa de exerciții, ex. 1', timp: '8 min', activitate: pasi(
        'Fiecare trece sugestiile primite pe fișă și decide ce acceptă și cum modifică textul (Repere, p. 45).') },
      { etapa: 'Întrebări pentru colegi', timp: '4 min', activitate: pasi(
        'Elevii cer lămuriri colegului care le-a dat feedback, unde ceva nu e clar.') },
      { etapa: 'Rescrierea, Aplicații, ex. 1', timp: '12 min', activitate: pasi(
        'Elevii rescriu pasajele modificate; trec printre bănci.') },
      { etapa: 'Editarea, Aplicații, ex. 2', timp: '8 min', activitate: pasi(
        'Verificarea finală (fișa de exerciții, ex. 2) și transcrierea pe o foaie curată.') },
      { etapa: 'Pregătirea lecturii, fișa, ex. 3', timp: '4 min', activitate: pasi(
        'Pasajul important, schimbările de ton, pauzele.') },
      { etapa: 'Din scaunul autorului, Aplicații, ex. 3', timp: '10 min', activitate: pasi(
        'Trei-patru elevi își citesc compunerile; colegii spun ce s-a îmbunătățit față de ciornă.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Portofoliu (compunerea și fișa de autoevaluare pe grilă); fișa de exerciții, ex. 4. Strâng lucrările editate.') },
    ],
    evaluare: 'Compunerile editate, strânse pentru apreciere; prezentările din scaunul autorului.',
  },
  'lectia-23': {
    titlu: 'Rolul elementelor grafice în prezentarea unui text',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Realizează o prezentare de text cu includerea unor elemente grafice.'],
    resurse: ['Manual Art 8, pp. 46-47', fisa(23), fl(23), 'Textul editat la ora anterioară'],
    desfasurare: [
      { etapa: 'Cărțile ilustrate, Explorare, ex. 1-3', timp: '6 min', activitate: pasi(
        'Cărțile „citite” înainte de alfabet; profesia femeii din imagine; ordinea în care observăm elementele.') },
      { etapa: 'Tipurile de imagini, ex. 4-5', timp: '5 min', activitate: pasi(
        'Imaginile a-f și rolul lor; cum atrage atenția textul din banda desenată.') },
      { etapa: 'Imagini și legende, ex. 6-7', timp: '4 min', activitate: pasi(
        'Caligrama lui Apollinaire și imaginile din „Micul Prinț”; diferența față de elementele multimedia.') },
      { etapa: 'Notițe: elementele grafice', timp: '7 min', activitate: pasi(
        'În caiete, după Repere (pp. 46-47): funcțiile imaginilor, lectura în formă de Z, regulile pentru slide-uri, legenda.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (tipul și rolul imaginii) și ex. 2 (reguli pentru slide), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Imaginea pentru versurile lui Pillat, Aplicații, ex. 1-2', timp: '6 min', activitate: pasi(
        'Tabloul lui Arcimboldo sau fotografia: care se potrivește și de ce; alte propuneri.') },
      { etapa: 'Planul posterului, fișa de exerciții, ex. 3', timp: '7 min', activitate: pasi(
        'În perechi, elevii aleg poezia de toamnă (Aplicații, ex. 3) și plănuiesc posterul sau prezentarea.') },
      { etapa: 'Temă', timp: '4 min', activitate: pasi(
        'Tema: Aplicații, ex. 3 (posterul sau prezentarea digitală); Portofoliu (fișa de autoevaluare); fișa de exerciții, ex. 4.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții, ex. 1-2; planurile posterelor.',
  },
  'lectia-24': {
    titlu: 'Recapitulare (partea 1/2)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de lectură și limbă română din unitate.'],
    resurse: ['Manual Art 8, pp. 48-49', fisa(24), 'Quizul „Recapitulare, lectură și limbă română” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Ciorchinele unității', timp: '3 min', activitate: pasi(
        'Pe tablă, „Unde găsim frumusețea?”; elevii spun câte o noțiune de lectură sau de limbă din unitate.') },
      { etapa: 'Lectura', timp: '4 min', activitate: pasi(
        'Citesc „Școala frumuseții” de Geo Dumitrescu (p. 48).') },
      { etapa: 'Cerințele 1-7', timp: '7 min', activitate: pasi(
        'Impresia, tipul versurilor, registrul, aliterațiile, vocea ficțională și mărcile ei, persoana a doua.') },
      { etapa: 'Investigația, cerința 12', timp: '12 min', activitate: pasi(
        'Patru grupe trag la sorți câte o strofă și rezolvă sarcinile pe poster, 8 minute; reprezentanții prezintă.') },
      { etapa: 'Limba, cerințele 16-20', timp: '6 min', activitate: pasi(
        'Sinonime și antonime, omonime, sensuri, paronime, formarea cuvintelor, selectiv, frontal.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1-2 (poezia „Grădina bunicii”, scrisă pentru fișă, și noțiunile recapitulate), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '4 min', activitate: pasi(
        'Quizul „Recapitulare, lectură și limbă română”, frontal.') },
      { etapa: 'Temă', timp: '3 min', activitate: pasi(
        'Tema: cerințele 8-11 și 21-23; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Aprecieri pe posterele grupelor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-25': {
    titlu: 'Recapitulare (partea 2/2)',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează conținuturile de redactare și comunicare orală din unitate.'],
    resurse: ['Manual Art 8, pp. 48-49', fisa(25), 'Quizul „Recapitulare, redactare și comunicare orală” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Discuția cu observator, cerința 24', timp: '10 min', activitate: pasi(
        'Grupe de cinci discută 6 minute dacă frumusețea fizică e importantă; observatorul completează grila de la p. 27 și raportează.') },
      { etapa: 'Opinii și comparații, cerințele 13-15', timp: '6 min', activitate: pasi(
        'Frumusețea în afara sau în interiorul omului; frumusețea în creația artistului; comparația cu textele de bază.') },
      { etapa: 'Pregătirea compunerii, cerința 25', timp: '8 min', activitate: pasi(
        'Fiecare își face planul comparației dintre „Izvorul nopții” și „Școala frumuseții”: portretele, trei figuri de stil din fiecare poezie.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '11 min', activitate: pasi(
        'Pagina 1: ex. 1 (grila de redactare) și ex. 2 (roluri în discuție), individual, 7 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Quizul', timp: '5 min', activitate: pasi(
        'Quizul „Recapitulare, redactare și comunicare orală”, frontal.') },
      { etapa: 'Pregătirea evaluării', timp: '5 min', activitate: pasi(
        'Anunț proba de ora viitoare: o poezie nouă, zece cerințe de limbă și lectură (partea A) și o compunere de cel puțin 200 de cuvinte despre semnificația poeziei, cu reperele exersate (partea B).',
        'Ce recitesc acasă: notițele despre textul liric, versificație, figurile de stil, categoriile semantice, formarea cuvintelor, registre, fonetică.') },
      { etapa: 'Temă', timp: '5 min', activitate: pasi(
        'Tema: cerința 25 (compunerea, cu feedbackul unui coleg); opțional, cerința 26; fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Grilele observatorilor; fișa de exerciții, ex. 1-2; rezultatele la quiz.',
  },
  'lectia-26': {
    titlu: 'Evaluare',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Susține testul de evaluare sumativă pentru unitate.'],
    resurse: ['Testul tipărit, Manual Art 8, p. 50', 'Barem de corectare din Ghidul profesorului'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Elevii au pe bancă doar foaia de răspuns și instrumentele de scris; distribui testul (poezia „Minunea” de Ana Blandiana, p. 50).',
        'Anunț structura: partea A, 60 de puncte (zece cerințe de limbă și lectură), partea B, 30 de puncte (compunere de cel puțin 200 de cuvinte despre semnificația poeziei, cu cele patru repere), 10 puncte din oficiu.',
        'Timpul orientativ: 5 minute pentru citirea textului, 18 pentru partea A, 17 pentru compunere; cerințele se rezolvă în ordinea preferată, cu numărul lor scris în față.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii rezolvă proba; răspund doar la întrebări despre formularea cerințelor.',
        'Anunț timpul rămas la 20 și la 5 minute; la 5 minute le reamintesc să verifice cele patru repere ale compunerii și paragrafele.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Strâng foile, verific numele pe fiecare; anunț că rezultatele și greșelile frecvente se discută după corectare.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghidul profesorului.',
  },
}
