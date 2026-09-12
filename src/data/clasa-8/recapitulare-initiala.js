// Recapitulare inițială — clasa a VIII-a
// Sursă: 8. Ghid.pdf (Editura Art Klett, Sâmihăian, Dobra, Halaszi,
// Davidoiu-Roman, Corcheș, 2025), Proiectarea unităților de învățare,
// Unitatea I, primele două rânduri: „Prezentarea manualului” și
// „Recapitulare/evaluare inițială”, fiecare 1 oră, fără pagină de manual
// asociată (activități administrative de început de an).
//
// Discrepanță de ediție rezolvată explicit cu Antoanela: 8_proiectare pe
// unitati.doc și 8_planificare calendaristica.doc din sursele locale sunt
// scrise pentru anul școlar 2022-2023, cu o structură de unități diferită
// de manualul din folder (ediție 2025). S-a ales manualul nou + ghidul ca
// autoritate — ghidul conține propriile planificare și proiectare
// actualizate pentru ediția 2025, folosite aici.
//
// Convenție de numerotare: ore de curs din proiectarea ghidului, ca la
// clasele a VI-a și a VII-a (vezi nota din CLAUDE.md).
//
// rezolvareGhid rămâne null, document intern, nu se publică. planLectie
// conține o schiță de plan în 6 pași (momentele lecției), afișată pe site sub
// eticheta discretă „Doar profesor” din PlanProfesor.tsx.
//
// Testul predictiv de la lecția 2 NU se publică: site-ul e static, iar elevii
// au linkul. Rămâne `test: null`, proba se tipărește separat.

export const recapitulareInitiala = {
  id: 'recapitulare-initiala',
  titlu: 'Recapitulare inițială',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Prezentarea manualului',
      obiective: [
        'Se familiarizează cu structura și resursele manualului de clasa a VIII-a.',
      ],
      sursaManual: 'Ghidul profesorului, Proiectarea unităților de învățare, Unitatea I, „Prezentarea manualului” (fără pagină asociată)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Prezentarea manualului',
        data: null,
        tipOra: 'Organizare, prezentarea disciplinei',
        durata: 50,
        obiective: [
          'Se familiarizează cu structura și resursele manualului de clasa a VIII-a.',
        ],
        resurse: [
          'Manualul de clasa a VIII-a, Editura Art Klett, ediția 2025, câte un exemplar pentru fiecare elev',
          'Caietele elevilor',
          'Tablă, pentru harta unităților',
        ],
        desfasurare: [
          {
            etapa: 'Ce am descoperit în vacanță',
            timp: '5 min',
            activitate: '– Întreb: ce carte, ce film sau ce loc v-a impresionat în vacanță? Trei-patru elevi răspund.\n– Anunț că e anul Evaluării Naționale și că manualul ne însoțește până acolo.',
          },
          {
            etapa: 'Tema anului',
            timp: '4 min',
            activitate: '– Scriu pe tablă „Reflecții asupra lumii”, tema programei pentru clasa a VIII-a.\n– Citim, de la pp. 4-5, ce și-au propus autorii și de ce unitățile au titluri-întrebări.',
          },
          {
            etapa: 'Cele cinci unități',
            timp: '8 min',
            activitate: '– Paginile 4-5: Unde găsim frumusețea?, Cum sunt ceilalți?, Cum descoperim lumea?, Unde găsim adevărul?, Încotro se îndreaptă lumea?, cu domeniile fiecăreia.\n– Autorii textelor de bază: Mihai Eminescu, Lucian Blaga, Nichita Stănescu, Victor Ion Popa, Angela Baciu, Mihail Sadoveanu, Ray Bradbury; elevii spun ce au mai citit de la ei.',
          },
          {
            etapa: 'Rubricile unei lecții',
            timp: '8 min',
            activitate: '– Deschidem prima lecție (p. 10) și găsim rubricile: Pentru început, Explorare, Repere, Aplicații, Interpretare, Provocări, Evaluare/Autoevaluare/Portofoliu, Noi pagini – alte idei.\n– Explic ce facem cu fiecare: Repere se trec în caiete, exercițiile din manual nefăcute în clasă rămân temă, la fiecare lecție lucrăm și pe o fișă de exerciții.',
          },
          {
            etapa: 'Cuprinsul și varianta digitală',
            timp: '5 min',
            activitate: '– Cuprinsul de la pp. 6-7: cum găsim o lecție după unitate și domeniu.\n– Varianta digitală: cele trei feluri de activități multimedia interactive și butoanele principale (p. 4).',
          },
          {
            etapa: 'Vânătoarea în manual, în perechi',
            timp: '10 min',
            activitate: '– Fiecare pereche notează în caiet pagina: primul text al anului, lecția despre derivare și compunere, proiectul de grup din Unitatea III, recapitularea Unității I, textul dramatic din Unitatea II.\n– Verificăm frontal; prima pereche cu toate paginile corecte câștigă.',
          },
          {
            etapa: 'Cum vom fi evaluați',
            timp: '5 min',
            activitate: '– Teste la finalul fiecărei unități, proiecte, portofoliu, observarea sistematică (p. 8), autoevaluare; la final, Evaluarea Națională.\n– Manualul nu are test inițial; ora viitoare recapitulăm materia clasei a VII-a pe o fișă.',
          },
          {
            etapa: 'Unitatea mea preferată',
            timp: '3 min',
            activitate: '– Fiecare elev notează în caiet unitatea care îl atrage cel mai mult și de ce, într-o propoziție.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: răsfoiți Unitatea I și notați o poezie sau o imagine care vă stârnește curiozitatea; aduceți caietul de clasa a VII-a.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor, fără notare.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: null,
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
    {
      id: 'lectia-2',
      titlu: 'Recapitulare și evaluare inițială',
      obiective: [
        'Recapitulează selectiv conținuturile asociate clasei a VII-a și susține un test predictiv.',
      ],
      sursaManual: 'Ghidul profesorului, Proiectarea unităților de învățare, Unitatea I, „Recapitulare/evaluare inițială” (fără pagină asociată)',
      rezolvareGhid: null,
      planLectie: {
        titlu: 'Recapitulare și evaluare inițială',
        data: null,
        tipOra: 'Recapitulare și evaluare inițială',
        durata: 50,
        obiective: [
          'Recapitulează selectiv conținuturile asociate clasei a VII-a și susține un test predictiv.',
        ],
        resurse: [
          'Caietele elevilor, tabla',
          'Fișa de exerciții (/materiale/clasa-8/recapitulare-initiala/lectia-2/fisa-exercitii.pdf)',
          'Test inițial pregătit de profesor, doar dacă se aplică: manualul și Ghidul nu conțin unul, iar în OraRO nu există încă',
        ],
        desfasurare: [
          {
            etapa: 'Adevărat sau fals',
            timp: '5 min',
            activitate: '– Citesc afirmațiile; elevii ridică mâna dreaptă pentru adevărat, stânga pentru fals, apoi cineva justifică:\n– „Comparația alătură doi termeni printr-un cuvânt de legătură.” / „Rima împerecheată are schema abab.” / „Didascaliile sunt rostite de actori.” / „Pronumele negativ apare doar în enunțuri negative.” / „Interviul folosește mai ales întrebări închise.”',
          },
          {
            etapa: 'Reperele de lectură',
            timp: '8 min',
            activitate: '– Întrebări rapide și notițe în caiete, într-un tabel de recapitulare: textul liric (vocea lirică, versificația, figurile de stil), textul epic (naratorul, personajul, mijloacele de caracterizare), textul dramatic (replici, didascalii), interviul.',
          },
          {
            etapa: 'Limba, la tablă',
            timp: '10 min',
            activitate: '– Pe enunțuri scurte scrise de mine: felurile pronumelui, valorile numeralului, felurile adverbului, interjecția predicativă, gradele adjectivului.\n– Funcțiile sintactice cu întrebările lor: subiect, predicat, nume predicativ, atribut, complemente, circumstanțiale.',
          },
          {
            etapa: 'Obținerea performanței: fișa de exerciții, pagina 1',
            timp: '12 min',
            activitate: '– Ex. 1-2: textul „Seara la mare” (scris pentru fișă) și reperele de lectură, individual, 8 minute.\n– Verificare, 4 minute.',
          },
          {
            etapa: 'Fișa de exerciții, pagina 2, ex. 3-4',
            timp: '10 min',
            activitate: '– Pronumele; alte părți de vorbire, cu felul și funcția, individual, 7 minute.\n– Verificare, 3 minute; notez pe tablă ce greșesc mai mulți elevi.',
          },
          {
            etapa: 'Ce trebuie reluat',
            timp: '3 min',
            activitate: '– Fiecare elev scrie pe un bilet două teme la care s-a simțit nesigur; strâng biletele, pentru a planifica recapitulările din Unitatea I.',
          },
          {
            etapa: 'Temă',
            timp: '2 min',
            activitate: '– Tema: fișa de exerciții, ex. 5.\n– Dacă aplic un test inițial propriu (clasă preluată), el înlocuiește pagina 2 a fișei, iar fișa rămâne în întregime temă.',
          },
        ],
        evaluare: 'Observarea sistematică a elevilor; fișa de exerciții; biletele cu temele de reluat. Testul inițial, dacă se aplică, fără notare în catalog.',
      },
      materiale: {
        prezentare: null,
        video: null,
        test: null,
        fisa: { exercitii: '/materiale/clasa-8/recapitulare-initiala/lectia-2/fisa-exercitii.pdf' },
        joc: null,
        infografic: null,
        schema: null,
        altele: [],
      },
    },
  ],
}
