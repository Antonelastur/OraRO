// Unitatea V: Lumea de pe scenă — clasa a VII-a
// Sursă: manual Art Klett 2024, proiectarea pe unități 2024-2025 (pagini din
// coloana RESURSE). Convenție: ore de curs, „partea 1/2” / „partea 2/2” unde
// proiectarea alocă 2 ore unei singure lecții de conținut. Ultima unitate a
// clasei a VII-a construită structural.
//
// rezolvareGhid și planLectie rămân null, document intern, nu se publică.
//
// Materiale: fișe de lucru pentru lecțiile 1, 4, 5, 6, 7, 9, 10, 11, 17, 18
// (scripts/build_clasa7_fise.py). Scheme pentru 14 (Numeralul), 15 (Adverbul),
// 16 (Interjecția). Jocuri-quiz pentru 8, 12, 13 (comunicare orală) și 19, 20
// (recapitulare). Lecția 3 (structura textului dramatic) așteaptă o schemă;
// lecțiile 2 (prezentare) și 21 (probă scrisă) rămân fără material aici,
// listate în materiale-restante.md.

export const unitatea5 = {
  id: 'unitatea-5',
  titlu: 'Unitatea V: Lumea de pe scenă',
  lectii: [
    {
      id: 'lectia-1',
      titlu: 'Proiect de grup. De la text la spectacol (anunțare)',
      obiective: [
        'Se familiarizează cu tema, grupele, sarcinile, calendarul și criteriile de evaluare ale proiectului de grup De la text la spectacol.',
      ],
      sursaManual: 'Art 7, Proiect de grup, p. 183 (anunțare)',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-1/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-2',
      titlu: 'Textul dramatic. Vrem să vă dăruim câte o fereastră de Matei Vișniec',
      obiective: [
        'Identifică informații esențiale din textul dramatic Vrem să vă dăruim câte o fereastră de Matei Vișniec, prin relectură pe scene.',
      ],
      sursaManual: 'Art 7, pp. 166-171 (Vrem să vă dăruim câte o fereastră de Matei Vișniec)',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-3',
      titlu: 'Textul dramatic. Structura, rolul indicațiilor scenice, autorul',
      obiective: [
        'Investighează structura textului dramatic și identifică indicațiile scenice.',
      ],
      sursaManual: 'Art 7, p. 172',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-3/schema.svg', titlu: 'Structura textului dramatic' }, altele: [] },
    },
    {
      id: 'lectia-4',
      titlu: 'Arta spectacolului. Personajul dramatic',
      obiective: [
        'Identifică persoanele implicate în realizarea unui spectacol și trăsăturile morale ale personajelor, realizând fișe de identitate.',
      ],
      sursaManual: 'Art 7, pp. 173-174',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-4/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-5',
      titlu: 'Rolul dialogului. Dialogul în textul scris și în spectacol',
      obiective: [
        'Identifică particularitățile dialogului dramatic și rolul lui în construcția personajelor.',
      ],
      sursaManual: 'Art 7, pp. 175-176',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-5/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-6',
      titlu: 'Semnificațiile textului',
      obiective: [
        'Formulează un răspuns personal despre semnificațiile textului dramatic și rolul lecturii.',
      ],
      sursaManual: 'Art 7, p. 177',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-6/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-7',
      titlu: 'Dialogul în textul nonliterar. Interviul (I)',
      obiective: [
        'Descoperă trăsăturile interviului ca text nonliterar dialogat, pe baza unui interviu cu Matei Vișniec.',
      ],
      sursaManual: 'Art 7, pp. 178-180, partea 1/2 (Interviu cu Matei Vișniec)',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-7/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-8',
      titlu: 'Dialogul în textul nonliterar. Interviul (II)',
      obiective: [
        'Verifică, printr-un minitest, înțelegerea trăsăturilor interviului ca text nonliterar.',
      ],
      sursaManual: 'Art 7, pp. 178-180, partea 2/2',
      rezolvareGhid: null, planLectie: null,
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Interviul, minitest',
          pasi: [
            {
              intrebare: 'Din ce categorie de texte face parte interviul?',
              variante: [
                { text: 'text nonliterar, jurnalistic, de tip informativ', corect: true, explicatie: 'Interviul informează, sub forma unui dialog între un reporter și o persoană.' },
                { text: 'text literar narativ', corect: false, explicatie: 'Interviul nu construiește o lume ficțională, ci transmite informații reale.' },
                { text: 'text dramatic', corect: false, explicatie: 'Textul dramatic e scris pentru scenă; interviul e un text jurnalistic.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 178-180',
            },
            {
              intrebare: 'Ce este o întrebare deschisă, într-un interviu?',
              variante: [
                { text: 'O întrebare care îi lasă intervievatului loc să își exprime punctul de vedere', corect: true, explicatie: '„Ce te-a impresionat?” cere un răspuns dezvoltat, nu doar da sau nu.' },
                { text: 'O întrebare la care se răspunde doar cu „da” sau „nu”', corect: false, explicatie: 'Aceea e întrebarea închisă.' },
                { text: 'O întrebare pusă în public, cu voce tare', corect: false, explicatie: '„Deschisă” se referă la tipul răspunsului posibil, nu la locul unde se pune.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 178-180',
            },
            {
              intrebare: 'Care este baza reușitei unui interviu?',
              variante: [
                { text: 'calitatea întrebărilor, fiindcă ea determină calitatea răspunsurilor', corect: true, explicatie: 'Un interviu bun pornește de la întrebări bine gândite, pe baza unei documentări.' },
                { text: 'lungimea răspunsurilor', corect: false, explicatie: 'Un răspuns lung nu e neapărat unul bun; contează întrebarea care l-a provocat.' },
                { text: 'numărul de persoane intervievate', corect: false, explicatie: 'Interviul are, de regulă, o singură persoană intervievată.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 178-180',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-9',
      titlu: 'Text auxiliar. Fragment din Visul unei nopți de vară de William Shakespeare',
      obiective: [
        'Interpretează un fragment din textul dramatic Visul unei nopți de vară de William Shakespeare, prin metoda grupului de lectură.',
      ],
      sursaManual: 'Art 7, „Noi pagini, alte idei”, pp. 181-182 (Visul unei nopți de vară de William Shakespeare, fragment)',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-9/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-10',
      titlu: 'Prezentarea proiectului de grup De la text la spectacol (I)',
      obiective: [
        'Prezintă produsul proiectului de grup De la text la spectacol, în fața clasei.',
      ],
      sursaManual: 'Art 7, Proiect de grup, partea 1/2 (fără pagină exactă asociată în proiectare)',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-10/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-11',
      titlu: 'Evaluarea proiectului de grup De la text la spectacol (II)',
      obiective: [
        'Evaluează proiectele prezentate, oferind și primind feedback, conform grilei de evaluare.',
      ],
      sursaManual: 'Art 7, Proiect de grup, partea 2/2 (fără pagină exactă asociată în proiectare)',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-11/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-12',
      titlu: 'Textul dialogat. Tracul comunicativ',
      obiective: [
        'Discută despre tracul comunicativ și exersează prezentarea orală a unui monolog, printr-un joc de rol.',
      ],
      sursaManual: 'Art 7, pp. 184-185',
      rezolvareGhid: null, planLectie: null,
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Textul dialogat. Tracul comunicativ',
          pasi: [
            {
              intrebare: 'Ce este tracul comunicativ?',
              variante: [
                { text: 'O stare emotivă firească, o neliniște resimțită înainte de a vorbi în public', corect: true, explicatie: 'Tracul e o reacție obișnuită, care poate fi gestionată prin strategii.' },
                { text: 'Un defect de vorbire care nu se poate corecta', corect: false, explicatie: 'Nu e un defect, ci o emoție firească; există strategii de gestionare.' },
                { text: 'O formă de dialog mediat, prin telefon sau aplicații', corect: false, explicatie: 'Aceea e altă noțiune, dialogul mediat, fără legătură cu tracul.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
            {
              intrebare: 'Care dintre acestea este o strategie de gestionare a tracului comunicativ?',
              variante: [
                { text: 'concentrarea asupra respirației și rostirea discursului într-un ritm firesc', corect: true, explicatie: 'Alături de repetiție, mărturisirea emoțiilor și contactul vizual cu persoane cunoscute.' },
                { text: 'vorbitul cât mai repede, ca să se termine mai devreme', corect: false, explicatie: 'Ritmul firesc ajută; graba trădează emoția și îngreunează înțelegerea.' },
                { text: 'evitarea oricărei pregătiri, ca să pară spontan', corect: false, explicatie: 'Pregătirea serioasă a intervenției reduce tracul, nu îl mărește.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
            {
              intrebare: 'La ce trebuie adaptat modul de adresare într-un dialog?',
              variante: [
                { text: 'la locul dialogului, la relațiile dintre vorbitori și la vârsta participanților', corect: true, explicatie: 'Adresarea se potrivește contextului și interlocutorului.' },
                { text: 'doar la ora la care are loc dialogul', corect: false, explicatie: 'Ora nu determină modul de adresare.' },
                { text: 'la numărul de replici schimbate', corect: false, explicatie: 'Numărul de replici nu are legătură cu modul de adresare.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-13',
      titlu: 'Strategii de ascultare activă',
      obiective: [
        'Identifică tehnicile de ascultare activă (încurajare verbală, întrebări de clarificare, reformularea ideilor, evocarea unor situații similare).',
      ],
      sursaManual: 'Art 7, pp. 186-187',
      rezolvareGhid: null, planLectie: null,
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Strategii de ascultare activă',
          pasi: [
            {
              intrebare: 'Prin ce trei comportamente se manifestă ascultarea activă?',
              variante: [
                { text: 'atenția acordată vorbitorului, neîntreruperea lui, oferirea unui feedback', corect: true, explicatie: 'Ascultătorul activ arată atenție, lasă vorbitorul să termine și răspunde la ce a auzit.' },
                { text: 'tăcerea totală, evitarea contactului vizual, notițe permanente', corect: false, explicatie: 'Contactul vizual și semnalele de încurajare fac parte din ascultarea activă.' },
                { text: 'întreruperea rapidă cu propriile idei, ca să se vadă că ești atent', corect: false, explicatie: 'Întreruperea e exact opusul ascultării active.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 186-187',
            },
            {
              intrebare: 'Formulele „Dacă am înțeles eu bine...”, „Vrei să spui că...” sunt un exemplu de:',
              variante: [
                { text: 'reformulare, ca formă de feedback', corect: true, explicatie: 'Receptorul reia cu propriile cuvinte ideea interlocutorului, ca să verifice că a înțeles.' },
                { text: 'întrerupere a vorbitorului', corect: false, explicatie: 'Reformularea se face după ce vorbitorul și-a terminat ideea, nu în locul lui.' },
                { text: 'schimbare a temei de discuție', corect: false, explicatie: 'Dimpotrivă, reformularea rămâne fidelă temei interlocutorului.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 186-187',
            },
            {
              intrebare: 'Ce presupune neîntreruperea vorbitorului?',
              variante: [
                { text: 'amânarea propriei intervenții până când vorbitorul își termină ideea', corect: true, explicatie: 'Dorința de a interveni se semnalează politicos, nu prin tăierea vorbei.' },
                { text: 'renunțarea la orice intervenție proprie', corect: false, explicatie: 'Poți interveni, dar la momentul potrivit și semnalând politicos.' },
                { text: 'ridicarea tonului pentru a prelua cuvântul', corect: false, explicatie: 'E o formă de întrerupere, contrară ascultării active.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 186-187',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-14',
      titlu: 'Numeralul. Posibilități combinatorii ale numeralului',
      obiective: [
        'Reactualizează numeralul cardinal și ordinal, recunoscând valorile morfologice și funcțiile sintactice ale numeralului.',
      ],
      sursaManual: 'Art 7, pp. 188-189',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-14/schema.svg', titlu: 'Numeralul, actualizare' }, altele: [] },
    },
    {
      id: 'lectia-15',
      titlu: 'Adverbul. Posibilități combinatorii ale adverbului',
      obiective: [
        'Reactualizează tipurile de adverb, identificând calitatea de centru sau adjunct și atributul adverbial.',
      ],
      sursaManual: 'Art 7, pp. 190-191',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-15/schema.svg', titlu: 'Adverbul, actualizare' }, altele: [] },
    },
    {
      id: 'lectia-16',
      titlu: 'Interjecția. Onomatopeele. Interjecția predicativă',
      obiective: [
        'Identifică interjecțiile de adresare, onomatopeele și interjecțiile predicative și redactează texte care le conțin.',
      ],
      sursaManual: 'Art 7, pp. 192-193',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: { fisier: '/materiale/clasa-7/unitatea-5/lectia-16/schema.svg', titlu: 'Interjecția. Onomatopeele' }, altele: [] },
    },
    {
      id: 'lectia-17',
      titlu: 'Tipare textuale de structurare a ideilor. Cererea (I)',
      obiective: [
        'Identifică trăsăturile textelor persuasive, informative, procedurale și descriptive, pregătind redactarea unei cereri.',
      ],
      sursaManual: 'Art 7, pp. 194-195, partea 1/2',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-17/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-18',
      titlu: 'Tipare textuale de structurare a ideilor. Cererea (II)',
      obiective: [
        'Redactează o cerere, respectând tiparul textual specific.',
      ],
      sursaManual: 'Art 7, pp. 194-195, partea 2/2',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: { fisier: '/materiale/clasa-7/unitatea-5/lectia-18/fisa.pdf' }, joc: null, infografic: null, schema: null, altele: [] },
    },
    {
      id: 'lectia-19',
      titlu: 'Recapitulare, lectură și comunicare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de lectură din Unitatea V: textul dramatic, interviul, tracul comunicativ, ascultarea activă.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 196-197, partea 1/2',
      rezolvareGhid: null, planLectie: null,
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, lectură și comunicare',
          pasi: [
            {
              intrebare: 'Ce rol au indicațiile scenice într-un text dramatic?',
              variante: [
                { text: 'Ghidează punerea în scenă: mișcarea, tonul, decorul', corect: true, explicatie: 'Indicațiile scenice (didascaliile) nu se rostesc pe scenă, ci orientează regia și actorii.' },
                { text: 'Sunt replicile personajelor principale', corect: false, explicatie: 'Replicile sunt altă componentă a textului dramatic, nu indicațiile scenice.' },
                { text: 'Apar doar în textele nonliterare', corect: false, explicatie: 'Indicațiile scenice sunt specifice textului dramatic, nu textelor nonliterare.' },
              ],
              indiciu: null, sursa: 'Art 7, p. 172',
            },
            {
              intrebare: 'Ce este tracul comunicativ?',
              variante: [
                { text: 'Emoția sau neliniștea resimțită înainte de a vorbi în fața unui public', corect: true, explicatie: 'Tracul comunicativ e o reacție firească, despre care se discută pentru a fi gestionată.' },
                { text: 'O tehnică de ascultare activă', corect: false, explicatie: 'Ascultarea activă e altă temă a unității, nu are legătură directă cu tracul.' },
                { text: 'Un tip de indicație scenică', corect: false, explicatie: 'Tracul comunicativ ține de comunicarea orală, nu de textul dramatic scris.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 184-185',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-20',
      titlu: 'Recapitulare, gramatică și redactare',
      obiective: [
        'Recapitulează, prin exerciții aplicate, achizițiile de gramatică din Unitatea V: numeralul, adverbul, interjecția.',
      ],
      sursaManual: 'Art 7, Recapitulare, pp. 196-197, partea 2/2',
      rezolvareGhid: null, planLectie: null,
      materiale: {
        prezentare: null, video: null, test: null, fisa: null,
        joc: {
          tip: 'quiz', titlu: 'Recapitulare, gramatică și redactare',
          pasi: [
            {
              intrebare: 'Ce fel de numeral este „al douăzeci și șaptelea”?',
              variante: [
                { text: 'numeral ordinal', corect: true, explicatie: 'Arată ordinea prin numărare, nu doar cantitatea.' },
                { text: 'numeral cardinal', corect: false, explicatie: 'Numeralul cardinal ar fi „douăzeci și șapte”, nu „al douăzeci și șaptelea”.' },
                { text: 'adverb', corect: false, explicatie: 'Nu e adverb, e o parte de vorbire distinctă, numeralul.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 188-189',
            },
            {
              intrebare: 'Ce este o onomatopee?',
              variante: [
                { text: 'Un cuvânt care imită un sunet din natură', corect: true, explicatie: 'Bum!, ham!, țiu! sunt onomatopee, imită sunete reale.' },
                { text: 'Un pronume care înlocuiește un substantiv', corect: false, explicatie: 'Onomatopeea nu are legătură cu pronumele.' },
                { text: 'Un tip de circumstanțial', corect: false, explicatie: 'Onomatopeea aparține clasei interjecțiilor, nu părților de propoziție.' },
              ],
              indiciu: null, sursa: 'Art 7, pp. 192-193',
            },
          ],
        },
        infografic: null, schema: null, altele: [],
      },
    },
    {
      id: 'lectia-21',
      titlu: 'Evaluare, probă scrisă',
      obiective: [
        'Verifică, printr-o probă scrisă, nivelul de achiziție a competențelor vizate în Unitatea V.',
      ],
      sursaManual: 'Art 7, Evaluare, p. 198',
      rezolvareGhid: null, planLectie: null,
      materiale: { prezentare: null, video: null, test: null, fisa: null, joc: null, infografic: null, schema: null, altele: [] },
    },
  ],
}
