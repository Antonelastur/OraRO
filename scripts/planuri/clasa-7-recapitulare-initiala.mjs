// Planuri de lecție detaliate pentru Recapitularea inițială, clasa a VII-a:
// prezentarea manualului și o oră de recapitulare. Ghidul profesorului Art 7
// (II.1) precizează că manualul nu conține un test inițial și îl recomandă doar
// la preluarea unei clase noi; OraRO nu are nici el un test pentru această oră.
// Fără moment organizatoric; pași concreți, fără rezolvările fișei (datele ajung
// în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-7/recapitulare-initiala/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Prezentarea manualului',
    data: null,
    tipOra: 'Organizare, prezentarea manualului',
    durata: 50,
    obiective: ['Se familiarizează cu structura și resursele manualului de clasa a VII-a.'],
    resurse: ['Manualul Art 7, varianta tipărită și cea digitală', 'Ghidul profesorului Art 7, II.1, Prezentarea manualului'],
    desfasurare: [
      { etapa: 'Ce am descoperit în vacanță', timp: '5 min', activitate: pasi(
        'Întreb: ce carte, ce film sau ce loc nou ați descoperit în vacanță? Ce v-a surprins?',
        'Trei-patru elevi răspund; leg răspunsurile de tema anului.') },
      { etapa: 'Tema anului', timp: '4 min', activitate: pasi(
        'Scriu pe tablă „Orizonturile lumii și ale cunoașterii”, tema programei pentru clasa a VII-a.',
        'Citim, de la p. 4, ce și-au propus autorii: să știi să comunici înseamnă să descoperi lucruri despre lume și despre tine.') },
      { etapa: 'Cele cinci unități', timp: '8 min', activitate: pasi(
        'Paginile 4-5: parcurgem titlurile unităților, Călătorie în necunoscut, Aproape de ceilalți, Harta sentimentelor, Cu noroc, fără noroc, Lumea de pe scenă, și domeniile fiecăreia (lectură, interculturalitate, comunicare orală, limbă română, redactare).',
        'Autorii textelor de bază: Veronica D. Niculescu, Ioan Slavici, Mihai Eminescu, Marin Sorescu, I.L. Caragiale, Matei Vișniec; elevii spun ce au mai citit de la ei.') },
      { etapa: 'Rubricile unei lecții', timp: '8 min', activitate: pasi(
        'Deschidem o lecție din Unitatea I și găsim rubricile: Pentru început, Explorare, Repere, Aplicații, Interpretare, Provocări, Portofoliu, Autoevaluare, Noi pagini – alte idei.',
        'Explic ce facem cu fiecare: Repere se trec în caiete, exercițiile din manual nefăcute în clasă rămân temă, la fiecare lecție lucrăm și pe o fișă de exerciții.') },
      { etapa: 'Cuprinsul și varianta digitală', timp: '5 min', activitate: pasi(
        'Cuprinsul de la p. 6: cum găsim o lecție după unitate și domeniu.',
        'Varianta digitală: activitățile multimedia interactive (ascultare și observare, animații, exerciții cu feedback) și butoanele principale.') },
      { etapa: 'Vânătoarea în manual, în perechi', timp: '10 min', activitate: pasi(
        'Fiecare pereche caută și notează în caiet pagina: primul text al anului, o lecție de limbă română cu o noțiune nouă, un proiect de grup, recapitularea Unității I, un text de teatru din Unitatea V.',
        'Verificăm frontal; prima pereche cu toate paginile corecte câștigă.') },
      { etapa: 'Cum vom fi evaluați', timp: '5 min', activitate: pasi(
        'Teste la finalul fiecărei unități, proiecte de grup, portofoliu, autoevaluare, observarea activității la oră.',
        'Manualul nu are test inițial; ora viitoare recapitulăm materia clasei a VI-a pe o fișă.') },
      { etapa: 'Unitatea mea preferată', timp: '3 min', activitate: pasi(
        'Fiecare elev notează în caiet unitatea care îl atrage cel mai mult și de ce, într-o propoziție.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: răsfoiți Unitatea I și notați un titlu sau o imagine care vă stârnește curiozitatea; aduceți caietul de clasa a VI-a pentru recapitulare.') },
    ],
    evaluare: 'Observarea sistematică a elevilor, fără notare.',
  },
  'lectia-2': {
    titlu: 'Recapitulare și evaluare inițială',
    data: null,
    tipOra: 'Recapitulare inițială',
    durata: 50,
    obiective: ['Recapitulează selectiv conținuturile asociate clasei a VI-a și susține un test predictiv.'],
    resurse: [
      'Caietele elevilor, tabla',
      fisa(2),
      'Test inițial pregătit de profesor, doar dacă se aplică: manualul și Ghidul nu conțin unul, iar în OraRO nu există încă',
    ],
    desfasurare: [
      { etapa: 'Adevărat sau fals', timp: '5 min', activitate: pasi(
        'Citesc afirmațiile; elevii ridică mâna dreaptă pentru adevărat, stânga pentru fals, apoi cineva justifică:',
        '„Naratorul la persoana a III-a participă mereu la acțiune.” / „Verbul la imperativ exprimă un îndemn sau un ordin.” / „Adverbul își schimbă forma după gen și număr.” / „Complementul direct răspunde la întrebarea pe cine? ce?” / „Dialogul are cel puțin două replici legate logic.”') },
      { etapa: 'Reperele de lectură', timp: '8 min', activitate: pasi(
        'Întrebări rapide și notițe în caiete, într-un tabel de recapitulare: naratorul (persoana, tipul), momentele subiectului, personajele (principal, secundar, episodic; trăsături numite și deduse), descrierea, dialogul și verbele de declarație.') },
      { etapa: 'Limba, la tablă', timp: '10 min', activitate: pasi(
        'Pe enunțuri scurte scrise de mine: modurile personale ale verbului, cazurile substantivului, pronumele personal, gradele adjectivului și ale adverbului, felurile adverbului.',
        'Părțile de propoziție cu întrebările lor: subiect, predicat, atribut, complement direct, indirect, circumstanțiale.') },
      { etapa: 'Obținerea performanței: fișa de exerciții, pagina 1', timp: '12 min', activitate: pasi(
        'Ex. 1-2: textul „Pe deal” (scris pentru fișă) și reperele de lectură, individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Fișa de exerciții, pagina 2, ex. 3-4', timp: '10 min', activitate: pasi(
        'Partea de vorbire și funcția sintactică; modul și timpul verbelor, individual, 7 minute.',
        'Verificare, 3 minute; notez pe tablă ce greșesc mai mulți elevi.') },
      { etapa: 'Ce trebuie reluat', timp: '3 min', activitate: pasi(
        'Fiecare elev scrie pe un bilet două teme la care s-a simțit nesigur; strâng biletele, pentru a planifica recapitulările din Unitatea I.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 5-6.',
        'Dacă aplic un test inițial propriu (clasă preluată), el înlocuiește pagina 2 a fișei, iar fișa rămâne în întregime temă.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții; biletele cu temele de reluat. Testul inițial, dacă se aplică, fără notare în catalog.',
  },
}
