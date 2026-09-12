// Planuri de lecție detaliate pentru Recapitularea inițială, clasa a VIII-a:
// prezentarea manualului și o oră de recapitulare. Ghidul profesorului Art 8
// precizează că manualul nu are evaluare inițială și recomandă un test doar la
// preluarea unei clase noi; OraRO nu are nici el un test pentru această oră.
// Fără moment organizatoric; pași concreți, fără rezolvările fișei. 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')
const fisa = (n) => `Fișa de exerciții (/materiale/clasa-8/recapitulare-initiala/lectia-${n}/fisa-exercitii.pdf)`

export default {
  'lectia-1': {
    titlu: 'Prezentarea manualului',
    data: null,
    tipOra: 'Organizare, prezentarea disciplinei',
    durata: 50,
    obiective: ['Se familiarizează cu structura și resursele manualului de clasa a VIII-a.'],
    resurse: [
      'Manualul de clasa a VIII-a, Editura Art Klett, ediția 2025, câte un exemplar pentru fiecare elev',
      'Caietele elevilor',
      'Tablă, pentru harta unităților',
    ],
    desfasurare: [
      { etapa: 'Ce am descoperit în vacanță', timp: '5 min', activitate: pasi(
        'Întreb: ce carte, ce film sau ce loc v-a impresionat în vacanță? Trei-patru elevi răspund.',
        'Anunț că e anul Evaluării Naționale și că manualul ne însoțește până acolo.') },
      { etapa: 'Tema anului', timp: '4 min', activitate: pasi(
        'Scriu pe tablă „Reflecții asupra lumii”, tema programei pentru clasa a VIII-a.',
        'Citim, de la pp. 4-5, ce și-au propus autorii și de ce unitățile au titluri-întrebări.') },
      { etapa: 'Cele cinci unități', timp: '8 min', activitate: pasi(
        'Paginile 4-5: Unde găsim frumusețea?, Cum sunt ceilalți?, Cum descoperim lumea?, Unde găsim adevărul?, Încotro se îndreaptă lumea?, cu domeniile fiecăreia.',
        'Autorii textelor de bază: Mihai Eminescu, Lucian Blaga, Nichita Stănescu, Victor Ion Popa, Angela Baciu, Mihail Sadoveanu, Ray Bradbury; elevii spun ce au mai citit de la ei.') },
      { etapa: 'Rubricile unei lecții', timp: '8 min', activitate: pasi(
        'Deschidem prima lecție (p. 10) și găsim rubricile: Pentru început, Explorare, Repere, Aplicații, Interpretare, Provocări, Evaluare/Autoevaluare/Portofoliu, Noi pagini – alte idei.',
        'Explic ce facem cu fiecare: Repere se trec în caiete, exercițiile din manual nefăcute în clasă rămân temă, la fiecare lecție lucrăm și pe o fișă de exerciții.') },
      { etapa: 'Cuprinsul și varianta digitală', timp: '5 min', activitate: pasi(
        'Cuprinsul de la pp. 6-7: cum găsim o lecție după unitate și domeniu.',
        'Varianta digitală: cele trei feluri de activități multimedia interactive și butoanele principale (p. 4).') },
      { etapa: 'Vânătoarea în manual, în perechi', timp: '10 min', activitate: pasi(
        'Fiecare pereche notează în caiet pagina: primul text al anului, lecția despre derivare și compunere, proiectul de grup din Unitatea III, recapitularea Unității I, textul dramatic din Unitatea II.',
        'Verificăm frontal; prima pereche cu toate paginile corecte câștigă.') },
      { etapa: 'Cum vom fi evaluați', timp: '5 min', activitate: pasi(
        'Teste la finalul fiecărei unități, proiecte, portofoliu, observarea sistematică (p. 8), autoevaluare; la final, Evaluarea Națională.',
        'Manualul nu are test inițial; ora viitoare recapitulăm materia clasei a VII-a pe o fișă.') },
      { etapa: 'Unitatea mea preferată', timp: '3 min', activitate: pasi(
        'Fiecare elev notează în caiet unitatea care îl atrage cel mai mult și de ce, într-o propoziție.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: răsfoiți Unitatea I și notați o poezie sau o imagine care vă stârnește curiozitatea; aduceți caietul de clasa a VII-a.') },
    ],
    evaluare: 'Observarea sistematică a elevilor, fără notare.',
  },
  'lectia-2': {
    titlu: 'Recapitulare și evaluare inițială',
    data: null,
    tipOra: 'Recapitulare și evaluare inițială',
    durata: 50,
    obiective: ['Recapitulează selectiv conținuturile asociate clasei a VII-a și susține un test predictiv.'],
    resurse: [
      'Caietele elevilor, tabla',
      fisa(2),
      'Test inițial pregătit de profesor, doar dacă se aplică: manualul și Ghidul nu conțin unul, iar în OraRO nu există încă',
    ],
    desfasurare: [
      { etapa: 'Adevărat sau fals', timp: '5 min', activitate: pasi(
        'Citesc afirmațiile; elevii ridică mâna dreaptă pentru adevărat, stânga pentru fals, apoi cineva justifică:',
        '„Comparația alătură doi termeni printr-un cuvânt de legătură.” / „Rima împerecheată are schema abab.” / „Didascaliile sunt rostite de actori.” / „Pronumele negativ apare doar în enunțuri negative.” / „Interviul folosește mai ales întrebări închise.”') },
      { etapa: 'Reperele de lectură', timp: '8 min', activitate: pasi(
        'Întrebări rapide și notițe în caiete, într-un tabel de recapitulare: textul liric (vocea lirică, versificația, figurile de stil), textul epic (naratorul, personajul, mijloacele de caracterizare), textul dramatic (replici, didascalii), interviul.') },
      { etapa: 'Limba, la tablă', timp: '10 min', activitate: pasi(
        'Pe enunțuri scurte scrise de mine: felurile pronumelui, valorile numeralului, felurile adverbului, interjecția predicativă, gradele adjectivului.',
        'Funcțiile sintactice cu întrebările lor: subiect, predicat, nume predicativ, atribut, complemente, circumstanțiale.') },
      { etapa: 'Obținerea performanței: fișa de exerciții, pagina 1', timp: '12 min', activitate: pasi(
        'Ex. 1-2: textul „Seara la mare” (scris pentru fișă) și reperele de lectură, individual, 8 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Fișa de exerciții, pagina 2, ex. 3-4', timp: '10 min', activitate: pasi(
        'Pronumele; alte părți de vorbire, cu felul și funcția, individual, 7 minute.',
        'Verificare, 3 minute; notez pe tablă ce greșesc mai mulți elevi.') },
      { etapa: 'Ce trebuie reluat', timp: '3 min', activitate: pasi(
        'Fiecare elev scrie pe un bilet două teme la care s-a simțit nesigur; strâng biletele, pentru a planifica recapitulările din Unitatea I.') },
      { etapa: 'Temă', timp: '2 min', activitate: pasi(
        'Tema: fișa de exerciții, ex. 5.',
        'Dacă aplic un test inițial propriu (clasă preluată), el înlocuiește pagina 2 a fișei, iar fișa rămâne în întregime temă.') },
    ],
    evaluare: 'Observarea sistematică a elevilor; fișa de exerciții; biletele cu temele de reluat. Testul inițial, dacă se aplică, fără notare în catalog.',
  },
}
