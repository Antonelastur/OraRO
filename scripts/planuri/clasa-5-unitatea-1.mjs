// Planuri de lecție detaliate pentru Unitatea I „Despre mine. Selfie", clasa a V-a.
// Fără moment organizatoric (se subînțelege); fiecare etapă are pașii concreți ai
// orei: rubrica și exercițiul din manual, întrebările, ce se notează în caiete,
// fișa de exerciții, tema. Surse: Manual Art 5 și ghidul profesorului. Rezolvările
// din ghid nu intră aici (datele ajung în browser). 50 min / lecție.

const pasi = (...linii) => linii.map((l) => `– ${l}`).join('\n')

export default {
  'lectia-1': {
    titlu: 'Textul literar. „Prietenul meu” de Ioana Pârvulescu',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Identifică informații esențiale din textul literar „Prietenul meu” de Ioana Pârvulescu.'],
    resurse: ['Manual Art 5, pp. 10-12', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-1/fisa-exercitii.pdf)', 'Prezentarea lecției (/materiale/clasa-5/unitatea-1/lectia-1/prezentare.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        '„Pentru început”, p. 10, ex. 1-3: cuvântul selfie (cuvântul anului 2013, după Dicționarele Oxford); de ce și-au făcut copiii din imaginile a-d fotografiile?',
        'Doi-trei elevi povestesc un selfie făcut cu un prieten: când, de ce, ce au simțit.',
        'Anunț: citim povestirea unui băiat care vrea să arate, la ora de română, cine e prietenul lui cel mai bun.') },
      { etapa: 'Lectura model', timp: '12 min', activitate: pasi(
        'Citesc eu textul cu voce tare (ex. 4, „Ascultă textul în lectura profesorului”); elevii urmăresc în manual, pp. 10-12.',
        'Mă opresc de două ori pentru predicții: după ce Claudia îl avertizează pe Bogdan („Ce idee credeți că a avut?”) și după ce banca începe să latre („Ce va face Bogdan acum?”).') },
      { etapa: 'Vocabularul textului', timp: '5 min', activitate: pasi(
        'Explicăm cuvintele din subsol: rigolă, chihuahua.',
        'Elevii spun alte cuvinte pe care nu le-au înțeles (de exemplu: anapoda, a fremăta, hodoronc-tronc); le lămurim din context.',
        'Fiecare notează în caiet trei cuvinte noi, cu sensul lor.') },
      { etapa: 'Impresii după prima lectură', timp: '8 min', activitate: pasi(
        'P. 12, ex. 1: elevii împart foaia de caiet în patru cadrane (Mi-a plăcut..., Nu mi-a plăcut..., Nu am înțeles..., Mi-a amintit de...) și le completează, 4 minute.',
        'Patru-cinci elevi citesc câte un cadran; lămurim împreună ce „nu am înțeles”.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Fișa de exerciții, pagina 1: ex. 1 (ordinea întâmplărilor), ex. 2 (cine face?) și ex. 3 (rezumat cu goluri), individual, 10 minute.',
        'Verificare frontală, 5 minute: ordinea din ex. 1 se citește cu voce tare, ca un rezumat oral al textului (rezolvările sunt în notițele profesorului).') },
      { etapa: 'Reflecție și temă', timp: '4 min', activitate: pasi(
        'Discuție scurtă: ce alte texte sau cărți despre prietenie ați citit?',
        'Tema: citesc prezentarea autoarei (p. 12) și rezolvă ex. 2 de la p. 12 (o întrebare pentru Ioana Pârvulescu); fișa de exerciții, pagina 2, ex. 5 și 6.') },
    ],
    evaluare: 'Observarea sistematică; cadranele cu impresii; fișa de exerciții, ex. 1-3.',
  },
  'lectia-2': {
    titlu: 'Trăsături ale textului literar',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: [
      'Identifică trăsăturile textului literar: lumea imaginară, emoțiile, limbajul expresiv.',
      'Formulează inferențe simple despre personaje și relațiile dintre ele.',
    ],
    resurse: ['Manual Art 5, pp. 13-14', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-2/fisa-exercitii.pdf)', 'Prezentarea lecției (/materiale/clasa-5/unitatea-1/lectia-2/prezentare.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Verificarea temei și captarea atenției', timp: '6 min', activitate: pasi(
        'Trei-patru elevi citesc întrebarea pentru autoare de la temă.',
        'Conduc discuția spre ideea că scriitoarea a ales cum să fie personajele și că le-ar fi putut da și alte trăsături: „Dacă ați fi voi autorii, ce ați schimba la Bogdan?”') },
      { etapa: 'Dirijarea învățării: textul literar', timp: '14 min', activitate: pasi(
        'Explorare „Textul literar”, p. 13, ex. 1-2, frontal: un sentiment din text; universul textului e apropiat sau depărtat de realitate? (cerem motivarea).',
        'Ex. 3-4: pe tablă, două coloane, „sensul obișnuit” și „sensul din text”, pentru a foșni, a fremăta, a zgâlțâi, a vorbi (cu florile), a lătra (banca).',
        'Ex. 5: trei elevi mimează, pe rând, cel mai amuzant moment; ceilalți ghicesc, cu întrebări la care se răspunde doar prin semne (da, nu, aproape).',
        'În caiete, după Repere: textul literar prezintă o lume imaginară, transmite idei, dar mai ales emoții, într-un limbaj expresiv.') },
      { etapa: 'Dirijarea învățării: înțelegerea textului', timp: '10 min', activitate: pasi(
        'Explorare „Înțelegerea textului”, p. 13, ex. 1: personajul principal și trei informații despre el (ce detalii din desen v-au ajutat?).',
        'Ex. 2: desenez pe tablă harta relațiilor, cu Bogdan în centru; elevii numesc relațiile de pe săgeți (prietenie, frate-soră, elev-profesor).',
        'Ex. 3-5, frontal: cum se poartă Adi; cuvintele despre timp; cele trei locuri ale acțiunii.',
        'Concluzie, după Repere: pentru a înțelege o întâmplare, răspundem la Cine? Ce? Când? Unde? Fiecare scrie o propoziție despre ce este vorba în text.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 2 (cele patru întrebări, pe un text nou) și ex. 3 (ce înseamnă de fapt expresiile), individual, 7 minute; verificare, 3 minute.',
        'Pagina 2: ex. 4 (emoțiile din text, cu indiciul din text), în perechi, 4 minute; două perechi citesc.') },
      { etapa: 'Reflecție și temă', timp: '6 min', activitate: pasi(
        'Pălăriile gânditoare („Provocări”, p. 14), variantă scurtă: șase elevi primesc câte un rol (albă – povestește neutru, roșie – emoțiile lui Bogdan, neagră – îl acuză, galbenă – îl apără, verde – ingeniozitatea lui, albastră – coordonează și trage concluzia).',
        'Tema: „Aplicații”, p. 14, ex. 1, 4, 6 și 7, în caiet; „Portofoliu”, ex. 1 (fișele de identitate pentru Bogdan, Claudia și Adi).') },
    ],
    evaluare: 'Observarea sistematică; propoziția Cine-Ce-Când-Unde; fișa de exerciții, ex. 2-4.',
  },
  'lectia-3': {
    titlu: 'Cuvântul-cheie. Tema. Planul simplu de idei',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: [
      'Identifică cuvântul-cheie și ideea principală dintr-un fragment de text.',
      'Stabilește tema unui text și redactează planul simplu de idei.',
    ],
    resurse: ['Manual Art 5, p. 15', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-3/fisa-exercitii.pdf)', 'Schema lecției „De la cuvântul-cheie la planul de idei” (/materiale/clasa-5/unitatea-1/lectia-3/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Joc, „Explorare”, p. 15, ex. 1: un minut, fiecare se gândește la o întrebuințare cât mai neobișnuită a unei chei; le notez pe tablă, într-un ciorchine.',
        'Legătura: azi căutăm „cheia” unui text, cuvântul care deschide înțelesul fiecărui fragment.') },
      { etapa: 'Delimitarea textului în fragmente', timp: '10 min', activitate: pasi(
        'Ex. 2, în perechi: delimitează povestirea „Prietenul meu” în fragmente logice.',
        'Ex. 3: două-trei perechi formează o grupă, își compară delimitările și o aleg pe cea mai bună.',
        'Notez pe tablă delimitarea aleasă de clasă, cu primele și ultimele cuvinte ale fiecărui fragment.') },
      { etapa: 'Dirijarea învățării: cuvântul-cheie și tema', timp: '8 min', activitate: pasi(
        'Ex. 4: potrivim substantivele din manual (cățelul, ora de istorie, ghinioane, pedeapsa, lătratul, prietenii, marți, vinovatul) cu fragmentele de pe tablă.',
        'Ex. 5: familia, prietenia sau școala? Elevii aleg cuvântul-cheie al întregului text și își motivează alegerea.',
        'În caiete, după schema lecției: cuvântul-cheie; tema (se numește printr-un substantiv; teme frecvente: călătoria, copilăria, familia, natura, prietenia, școala).') },
      { etapa: 'Dirijarea învățării: ideea principală și planul simplu', timp: '14 min', activitate: pasi(
        '„Planul simplu de idei”, ex. 1: primul fragment îl facem frontal, după modelul din manual (cuvântul-cheie + un predicat + alte cuvinte); grupele continuă tabelul în caiete.',
        'Ex. 2: fiecare grupă scrie planul simplu pe o coală.',
        'Ex. 3, turul galeriei, scurt: colile se afișează, grupele trec pe la celelalte și lasă câte o observație.',
        'În caiete: ideea principală și planul simplu de idei (ideile principale, în ordinea din text).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (cuvântul-cheie în „Zmeul lui Matei”) și ex. 2 (ideea principală din cuvântul-cheie), individual, 7 minute.',
        'Verificare, 3 minute: doi elevi citesc planul obținut.') },
      { etapa: 'Reflecție și temă', timp: '3 min', activitate: pasi(
        'Întrebare de final: la ce ne ajută planul simplu de idei când povestim un text?',
        'Tema: planul simplu al povestirii, transcris curat în caiet, după observațiile din turul galeriei; fișa de exerciții, pagina 2, ex. 4-6.') },
    ],
    evaluare: 'Observarea sistematică; tabelul grupelor (cuvinte-cheie, idei principale); fișa de exerciții, ex. 1-2.',
  },
  'lectia-4': {
    titlu: 'Semnificațiile textului',
    data: null,
    tipOra: 'Predare, interpretare',
    durata: 50,
    obiective: ['Interpretează semnificațiile textului „Prietenul meu”, răspuns afectiv și discutarea mesajului.'],
    resurse: ['Manual Art 5, p. 16', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-4/fisa-exercitii.pdf)', 'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-4/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Doi elevi citesc planul simplu de idei făcut acasă.',
        'Întreb: „Dincolo de întâmplare, ce vrea să ne spună textul?” Notez răspunsurile într-un colț al tablei; le revedem la final.') },
      { etapa: 'Dirijarea învățării: titlul și comparațiile', timp: '10 min', activitate: pasi(
        '„Interpretare”, p. 16, ex. 1: la cine se referă titlul? Votăm variantele a-d cu mâna ridicată, apoi cer argumente pentru fiecare vot.',
        'Ex. 2: de ce e comparată ziua cu o mașină condusă de un șofer începător pe un drum cu gropi?',
        'Ex. 3: sunteți de acord că profesorii de română dau des teme despre prietenie? De ce credeți că o fac?') },
      { etapa: 'Dirijarea învățării: gândurile și emoțiile lui Bogdan', timp: '12 min', activitate: pasi(
        'Ex. 4: ce înseamnă că oamenii „n-au ochi și ochelari” cu care să-ți vadă sufletul?',
        'Ex. 5-6: de ce i se par minutele ore? Elevii dau exemple proprii de timp care trece prea încet sau prea repede.',
        'Ex. 7: căutăm în text întrebările fără răspuns ale lui Bogdan și le dăm răspunsuri posibile.',
        'Ex. 8-9: de ce n-a fost ziua chiar așa de rea? Care sunt urmările bune? (alegere și argument).',
        'Dau feedback constructiv la fiecare răspuns („Ai o abordare interesantă. Te-ai gândit și la...?”).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (aceeași faptă, două fețe) și ex. 2 (de acord sau nu, cu argument din text), în perechi, 8 minute.',
        'Patru perechi prezintă câte un răspuns, 4 minute; ceilalți spun dacă argumentul se sprijină pe text.',
        'Ex. 3 (dacă Bogdan tăcea), individual, 3 minute.',
        'Variantă pentru o clasă mai lentă: fișa de lucru a lecției, în locul ex. 1-2.') },
      { etapa: 'Reflecție și temă', timp: '8 min', activitate: pasi(
        'Linia valorică („Provocări”, ex. 3): „Există o legătură între a fi fată sau băiat și rezultatele la școală?” Elevii se așază de o parte și de alta a unei linii imaginare; fiecare grupă aduce două argumente; cine își schimbă locul explică de ce.',
        'Revedem ideile notate la început: ce am adăuga acum despre mesajul textului?',
        'Tema: p. 16, ex. 10 și 11 (ceasul emoțiilor lui Bogdan); facultativ, „Provocări”, ex. 1 (norii); fișa de exerciții, pagina 2, ex. 6 (biletul de scuze).') },
    ],
    evaluare: 'Observarea sistematică; calitatea argumentelor din text; fișa de exerciții, ex. 1-3.',
  },
  'lectia-5': {
    titlu: 'Textul nonliterar, scurtă istorie a selfie-ului',
    data: null,
    tipOra: 'Predare, lectură nonliterară',
    durata: 50,
    obiective: ['Identifică scopul și informațiile unui text nonliterar.'],
    resurse: ['Manual Art 5, p. 17', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-5/fisa-exercitii.pdf)', 'Infograficul „Scurtă istorie a selfie-ului” (/materiale/clasa-5/unitatea-1/lectia-5/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        '„Pentru început”, p. 17, ex. 1-2: ce înfățișează cele trei imagini? Ce asemănări și ce deosebiri au?',
        'Conduc răspunsurile spre ideea că toate sunt portrete, dar din epoci diferite.',
        'Anunț: citim un text care nu povestește, ci informează.') },
      { etapa: 'Lectura și înțelegerea textului', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 1: lectură în gând, 3 minute.',
        'Ex. 2: a amuza, a convinge sau a informa? Votăm și cerem argumente.',
        'Ex. 3: la ce aspecte din realitate se referă textul? Le trecem pe tablă pe o axă a timpului: 1524, 1839, 2002, 2013, 2016.',
        'Ex. 4: limbajul e obișnuit sau neobișnuit? Comparăm cu o frază expresivă din „Prietenul meu”.',
        'În caiete, după Repere: textul nonliterar, cele trei scopuri, exemple (afișul, invitația, rețeta, eticheta, articolul de dicționar etc.).') },
      { etapa: 'Aplicații pe textul din manual', timp: '10 min', activitate: pasi(
        'În perechi: ex. 1 (cuvântul-cheie al fiecărui paragraf), ex. 2 (ideile principale), ex. 3 (diferența dintre sensul din DEX și cel din dicționarele Oxford).',
        'Verificare frontală rapidă, cu infograficul lecției pe proiector.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (literar sau nonliterar, cu scopul) și ex. 2 (ce fel de text este), individual, 8 minute; verificare, 4 minute.',
        'Ex. 3 (din literar, în nonliterar), 3 minute; doi elevi citesc variantele lor.') },
      { etapa: 'Reflecție, autoevaluare și temă', timp: '7 min', activitate: pasi(
        '„Reflecții”, p. 17: e dificil să citești un text nonliterar? Ce părere aveți despre selfie-uri?',
        'Autoevaluare L1-L5: fiecare completează în caiet cele trei afirmații (cel mai important..., cel mai mult mi-a plăcut..., cel mai dificil...).',
        'Tema: „Aplicații”, ex. 4; fișa de exerciții, pagina 2, ex. 4 și 5 (afișul clasei); minitestul, dacă îl folosesc.') },
    ],
    evaluare: 'Observarea sistematică; autoevaluarea L1-L5; fișa de exerciții, ex. 1-3.',
  },
  'lectia-6': {
    titlu: 'Text auxiliar, „Hronicul și cântecul vârstelor” de Lucian Blaga',
    data: null,
    tipOra: 'Predare, lectură',
    durata: 50,
    obiective: ['Formulează inferențe simple și compară texte pe tema prieteniei și a descoperirii de sine.'],
    resurse: ['Manual Art 5, pp. 18-19', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-6/fisa-exercitii.pdf)', 'Quizul „Descoperirea lui Lulu” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Aveți un prieten de dinainte de școală? Vă amintiți o întâmplare amuzantă cu el?” Răspund doi-trei elevi.',
        'Predicții pornind de la titlu și de la imaginea din manual: despre ce va fi fragmentul?') },
      { etapa: 'Lectura', timp: '10 min', activitate: pasi(
        'Citesc fragmentul cu voce tare (sau pornesc înregistrarea din manualul digital).',
        'Explic cuvintele din subsol pe măsură ce apar: auroră, într-adins, zenit, a tălmăci, răgaz, dezolat, sacru, a mântui; și expresia „a ține sub trei lacăte și șapte peceți”.') },
      { etapa: 'Discutarea textului', timp: '13 min', activitate: pasi(
        '„Discutarea textului”, p. 19, ex. 1-5, frontal: unde și când; cum i se adresau prietenii; ce profesie avea tatăl (ce secvență v-a ajutat?); personajele; descoperirea.',
        'Ex. 6, cu mâna ridicată pentru fiecare variantă (A-C).',
        'Ex. 8-9: ce cuvinte arată că descoperirea era secretă (elevii le notează în caiet)? De ce credeți că i-a dezvăluit secretul lui Adam?',
        'Dau feedback constructiv, cu întrebări de continuare.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (adevărat sau fals) și ex. 2 (cuvintele din glosar, în propoziții noi), individual, 7 minute.',
        'Ex. 3 (încercarea celor doi prieteni), în perechi, 5 minute.',
        'Verificare, 3 minute.',
        'Dacă rămâne timp: quizul „Descoperirea lui Lulu”, pe proiector.') },
      { etapa: 'Reflecție și temă', timp: '7 min', activitate: pasi(
        'Ex. 11: ce legătură are fragmentul cu „Prietenul meu”?',
        'Ex. 12-13: un elev povestește o experiență în care a descoperit importanța prieteniei; alții recomandă o carte despre prietenie (vezi și „Biblioteci deschise”: „Minunea”, „Amintiri din copilărie”).',
        'Tema: ex. 7 (planul simplu de idei al fragmentului, individual) și ex. 10 (răspunsul la „de ce nu crapă în două?”); fișa de exerciții, pagina 2, ex. 4 (doi povestitori).') },
    ],
    evaluare: 'Observarea sistematică; răspunsurile la ex. 1-9; fișa de exerciții, ex. 1-3.',
  },
  'lectia-7': {
    titlu: 'Identitatea personală. Emoțiile',
    data: null,
    tipOra: 'Interculturalitate',
    durata: 50,
    obiective: ['Asociază experiențe proprii de viață cu cele din filmul „Întors pe dos”, identitate personală și emoții.'],
    resurse: ['Manual Art 5, pp. 20-22', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-7/fisa-exercitii.pdf)', 'Infograficul „Cele cinci emoții din «Întors pe dos»” (/materiale/clasa-5/unitatea-1/lectia-7/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '7 min', activitate: pasi(
        '„Pentru început”, p. 20, ex. 1-2: ce emoții ale lui Bogdan și ale povestitorului lui Blaga vă sunt cunoscute? Ce nume au emoțiile voastre înainte de un test?',
        'Ex. 3: fiecare asociază o culoare pentru surpriză, iubire, descurajare, neliniște; comparăm alegerile și observăm că fiecare simte altfel aceeași emoție.') },
      { etapa: 'Explorare: filmul „Întors pe dos”', timp: '13 min', activitate: pasi(
        'Citim prezentarea filmului (p. 20). Dacă am proiector, arăt o secvență scurtă din film, pregătită dinainte.',
        'Ex. 2, frontal: asociem fiecare personaj-emoție cu descrierea lui.',
        'Discuție: sunt emoțiile firești? La ce folosește fiecare?',
        'În caiete, după Repere și infograficul lecției: emoțiile, personalitatea, identitatea personală.') },
      { etapa: 'Aplicații', timp: '8 min', activitate: pasi(
        '„Aplicații”, p. 21, ex. 1-3, frontal: ce descoperă Bucuria despre Dezgust, Frică și Furie; de ce i se pare inutilă Tristețea; care sunt valorile, pasiunea și însușirile lui Riley (insulele personalității).') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (ce emoție trăiești?), ex. 2 (termometrul emoțiilor) și ex. 3 (emoție sau însușire?), individual, 9 minute.',
        'Verificare, 4 minute; insist pe ex. 3: emoția trece, însușirea rămâne.',
        'Pagina 2, ex. 5 (ce ți-ar spune emoțiile în prima zi într-o școală nouă), oral, 2 minute.') },
      { etapa: 'Reflecție și temă', timp: '7 min', activitate: pasi(
        '„Provocări”, ex. 1: ar fi viața mai bună fără emoții? Fiecare notează două schimbări pozitive și două negative; câțiva citesc.',
        'Tema: „Aplicații”, ex. 4-5 (portretul emoțiilor tale); „Portofoliu” (insulele personalității tale); fișa de exerciții, pagina 2, ex. 6 (scrisoare pentru Bucurie).') },
    ],
    evaluare: 'Observarea sistematică; participarea la discuție; fișa de exerciții, ex. 1-3.',
  },
  'lectia-8': {
    titlu: 'Exprimarea adecvată a emoțiilor. Roluri în comunicare',
    data: null,
    tipOra: 'Comunicare orală',
    durata: 50,
    obiective: ['Exprimă adecvat emoțiile și identifică rolurile de vorbitor și ascultător în comunicare.'],
    resurse: ['Manual Art 5, pp. 22-23', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-8/fisa-exercitii.pdf)', 'Schema „Exprimarea adecvată a emoțiilor. Roluri în comunicare” (/materiale/clasa-5/unitatea-1/lectia-8/schema.svg)', 'Quizul cu același titlu (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 22, ex. 1-2, frontal: după ce semne vă dați seama că cineva are emoții? În ce situații e potrivit să ți le arăți?') },
      { etapa: 'Explorare: cele două desene', timp: '10 min', activitate: pasi(
        'Desenul A, întrebările a-f: ce emoție se vede, cum o exprimă fata, cine e vorbitor și cine ascultător, ce se schimbă când fata răspunde.',
        'Desenul B, întrebările a-c: emoțiile și semnele care le trădează; două perechi improvizează dialogul celor doi copii.',
        'Întrebări suplimentare: comunică personajele? Prin câte moduri? Când șoptim sau strigăm, transmitem un mesaj? Ce roluri pot avea participanții?') },
      { etapa: 'Dirijarea învățării: tipurile de comunicare', timp: '5 min', activitate: pasi(
        'În caiete, după Repere și schema lecției: comunicarea verbală (orală, scrisă), nonverbală (mimică, gesturi, poziția corpului, privire), paraverbală (intonație, intensitatea vocii, ritm); rolurile de vorbitor și ascultător; comunicarea emoțiilor.') },
      { etapa: 'Aplicații orale', timp: '12 min', activitate: pasi(
        '„Aplicații”, p. 23, ex. 1: asociem oral simbolurile cu emoțiile.',
        'Ex. 2: trei-patru elevi mimează câte o situație din manual; clasa ghicește emoția.',
        'Ex. 3, în perechi, cu bilețelele (bucurie, tristețe, frică, furie, dezgust): „Sunt ... pentru că ... și mă simt de parcă ...” / „Îmi pare bine (rău) că simți așa, pentru că ...”; apoi rolurile se schimbă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (verbal, nonverbal, paraverbal) și ex. 3 (potrivit sau nepotrivit), individual, 6 minute.',
        'Ex. 2 (dialogul dintre Tudor și Ana), 3 minute.',
        'Verificare, 4 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        '„Reflecții”, p. 23, ex. 1-2: e bine să ne comunicăm emoțiile? Când ar trebui să le temperăm?',
        'Tema: „Reflecții”, ex. 3 (trei reguli de comunicare a emoțiilor); „Portofoliu” (portretul chinezesc); fișa de exerciții, pagina 2, ex. 4 și 6.') },
    ],
    evaluare: 'Observarea sistematică a participării la jocurile de rol; fișa de exerciții, ex. 1-3.',
  },
  'lectia-9': {
    titlu: 'Propoziția. Tipuri de propoziții',
    data: null,
    tipOra: 'Predare, gramatică',
    durata: 50,
    obiective: ['Definește propoziția și clasifică propozițiile după alcătuire și după aspectul predicatului.'],
    resurse: ['Manual Art 5, pp. 24-25', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-9/fisa-exercitii.pdf)', 'Schema „Propoziția. Tipuri de propoziții” (/materiale/clasa-5/unitatea-1/lectia-9/schema.svg)', 'Quizul „Subiectul și predicatul” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Captarea atenției și reactualizarea', timp: '6 min', activitate: pasi(
        'Elevii deschid manualul la p. 24 și citesc în gând schimbul de mesaje dintre Ruxi și Ilinca.',
        'Frontal, ex. 1-2 de la „Pentru început”: găsesc predicatele, le numără, apoi numără propozițiile.',
        'Îi las să formuleze singuri concluzia: câte predicate, atâtea propoziții.',
        'Reactualizare din clasa a IV-a: „Ce arată predicatul? Dar subiectul?” Doi-trei elevi dau câte un exemplu.',
        'Scriu titlul pe tablă și le spun ce vor ști la final: să recunoască o propoziție și să spună dacă e simplă sau dezvoltată, afirmativă sau negativă.') },
      { etapa: 'Dirijarea învățării: propoziția simplă și dezvoltată', timp: '10 min', activitate: pasi(
        'Explorare, p. 24, ex. 1: elevii caută în a treia replică propoziția alcătuită doar din subiect și predicat.',
        'Ex. 2: tăiem, în celelalte propoziții, tot ce nu e predicat. Întreb: „Mai înțelegem ceva? Ce am pierdut?” Concluzia: predicatul poate forma singur propoziția, dar celelalte cuvinte îi îmbogățesc înțelesul.',
        'Pe tablă și în caiete, după schema lecției: definiția propoziției; părțile principale (predicatul arată ce face subiectul, subiectul arată cine face acțiunea); părțile secundare; propoziția simplă și cea dezvoltată.',
        'Exemplu pe tablă: „Joi latră.” (simplă) → „Joi latră tare în rucsac.” (dezvoltată). Subliniem predicatul cu o linie și subiectul cu două linii, ca în manual.') },
      { etapa: 'Dirijarea învățării: propoziția afirmativă și negativă', timp: '5 min', activitate: pasi(
        'Explorare, p. 24 jos: elevii compară „Vorbesc cu Ilinca la telefon.” cu „Nu vorbesc cu Adi.” și spun ce s-a schimbat în forma verbului.',
        'În caiete, după Repere: propoziția afirmativă și cea negativă, cu exemplul „Cățelul a lătrat. / Cățelul nu a lătrat.”',
        'Joc oral, „Întoarce propoziția”: spun trei propoziții, elevii le transformă pe loc (Adi râde. / Joi nu doarme. / Bogdan întârzie.).') },
      { etapa: 'Dirijarea învățării: ortografia și punctuația', timp: '7 min', activitate: pasi(
        'Explorare, p. 25, ex. 1-4, frontal, pe schimbul de mesaje și pe scena ilustrată.',
        'Întrebări suplimentare, sugerate de ghid: De ce s-a folosit semnul întrebării? Dar semnul exclamării? Când s-a pus punctul? În ce situații apare virgula?',
        'În caiete, după Repere: literă mare la început; la final punct, semnul întrebării sau al exclamării; virgula după o strigare și între termenii unei enumerări; două puncte înaintea enumerării; linia de dialog.',
        'La ex. 4, un elev scrie pe tablă dialogul dintre Ruxi și Ilinca, cu linie de dialog; clasa corectează.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '17 min', activitate: pasi(
        'Împart fișa de exerciții. Pagina 1 (ex. 1-5), individual, 10 minute, cu cronometrul pe tablă.',
        'Verificare frontală, 5 minute: câte un elev citește răspunsul, clasa confirmă sau corectează (rezolvările sunt în notițele profesorului). Insist pe ex. 2: „Bună, Irina!” nu are predicat, deci nu e propoziție.',
        'Ultimele 2 minute, în perechi: ex. 6, „Scara propoziției”. Câștigă perechea care urcă toate treptele corect.',
        'Elevii care termină repede trec la ex. 7, „Potrivește”; cu cei care se blochează lucrez la ex. 3. Dacă rămâne timp: quizul „Subiectul și predicatul”, pe proiector.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Reflecție, „Deschideri”, p. 25: cum ar fi o lume în care oamenii n-ar folosi propoziții, ci cuvinte înșiruite la întâmplare? Răspund doi-trei elevi.',
        'Bilet de ieșire: pe o foaie, fiecare scrie o propoziție simplă, apoi aceeași propoziție dezvoltată și negativă. Le strâng la ușă.',
        'Tema: manual, p. 25, Aplicații, ex. 1, 4, 5 și 7; fișa de exerciții, pagina 2, ex. 8 și 9.') },
    ],
    evaluare: 'Observarea sistematică; verificarea fișei de exerciții (ex. 1-5) și a biletelor de ieșire; tema (manual, p. 25, ex. 1, 4, 5, 7).',
  },
  'lectia-10': {
    titlu: 'Cuvântul și dicționarul',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Explică rolul dicționarului și structura unui articol de dicționar, ordonarea alfabetică a cuvintelor.'],
    resurse: ['Manual Art 5, pp. 26-27', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-10/fisa-exercitii.pdf)', 'Schema „Cuvântul și dicționarul” (/materiale/clasa-5/unitatea-1/lectia-10/schema.svg)', 'Quizul cu același titlu (materialul de joc al lecției)', 'Un dicționar tipărit'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 26, ex. 1-2: cuvântul pentru fiecare obiect din imagini; ce sensuri are azi cuvântul carte (carte de joc, carte de identitate...)?',
        'Arăt un dicționar tipărit: cine l-a folosit și pentru ce?') },
      { etapa: 'Dirijarea învățării: cuvântul', timp: '10 min', activitate: pasi(
        '„Explorare”, p. 26: citim fragmentul lui Dan Coman (cuvântul lemn repetat până nu mai înseamnă nimic).',
        'Întrebările a-d, frontal: cuvinte necunoscute deduse din context; sunetele și sensul lui lemn; vară și alt cuvânt cu aceeași formă; prin ce se aseamănă și prin ce se deosebesc a spune și a rosti.',
        'În caiete, după Repere: vocabularul; cuvântul (sens și sunete); contextul; cuvinte cu același sens, dar formă diferită, și cuvinte cu aceeași formă, dar sens diferit.') },
      { etapa: 'Dirijarea învățării: dicționarul', timp: '10 min', activitate: pasi(
        'P. 27, ex. 1: fragmentul din „Povestea frindelului”: ce conține un dicționar? Pot intra cuvinte noi?',
        'Ex. 2: articolul CÂINE: ce informații ne dă? Le numim pe rând (plural, parte de vorbire, sens, expresii, sens figurat, formă regională, origine); explic semnul ◊.',
        'În caiete: dicționarul, tipuri de dicționare, ordinea alfabetică (după prima literă diferită), articolul de dicționar, DEX.') },
      { etapa: 'Aplicații', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 3, în perechi, ca întrecere: cele 12 cuvinte în ordine alfabetică.',
        'Ex. 4, la tablă: seria emoționat, emoție... ordonată, cu literele interioare încercuite.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (același cuvânt, alt sens), ex. 2 (care vine primul în dicționar?) și ex. 3 (pe ce pagină?), individual, 8 minute.',
        'Verificare, 5 minute; la ex. 2 și 3 insist pe literele cu diacritice: ă și â după a, î după i, ș după s, ț după t.') },
      { etapa: 'Reflecție și temă', timp: '4 min', activitate: pasi(
        '„Deschideri”, p. 27: două informații noi, utile; în ce situații v-ar ajuta un dicționar pe telefon (dexonline)?',
        'Tema: „Aplicații”, ex. 1, 2, 5 și 6 (cu DEX sau dexonline); „Portofoliu” (un obiect inventat și articolul lui de dicționar); fișa de exerciții, pagina 2, ex. 4-6.') },
    ],
    evaluare: 'Observarea sistematică; întrecerea de la ex. 3; fișa de exerciții, ex. 1-3.',
  },
  'lectia-11': {
    titlu: 'Sinonimele. Antonimele',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Identifică sinonime și antonime și le folosește adecvat contextului.'],
    resurse: ['Manual Art 5, pp. 28-29', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-11/fisa-exercitii.pdf)', 'Schema „Sinonimele. Antonimele” (/materiale/clasa-5/unitatea-1/lectia-11/schema.svg)', 'Quizul „Sinonime și antonime” (materialul de joc al lecției)'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        '„Pentru început”, p. 28: cum era Riley când Bucuria ținea butoanele și cum era când le lua Tristețea?',
        'Bucuria și tristețea sunt emoții asemănătoare sau opuse? De ce?') },
      { etapa: 'Dirijarea învățării: sinonimele', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 1-3: sensul, forma și partea de vorbire a cuvintelor din cele două serii.',
        'Ex. 4, la tablă: bun înlocuit cu apropiat, priceput, gustos, valoros, după context.',
        'Ex. 5: arbore, pom sau copac? De ce nu se pot înlocui oricând între ele?',
        'Ex. 6: un verb în locul expresiilor subliniate.',
        'În caiete, după schema lecției: sinonimele; aceeași parte de vorbire; alegerea după context; sinonime pentru fiecare sens; sinonime pentru expresii.') },
      { etapa: 'Dirijarea învățării: antonimele', timp: '5 min', activitate: pasi(
        '„Explorare”, ex. 1-2: cuvintele cu sens opus din textul despre Riley și din secvența lui Blaga (în sus, în jos).',
        'În caiete: antonimele, aceeași parte de vorbire.') },
      { etapa: 'Aplicații frontale', timp: '8 min', activitate: pasi(
        '„Aplicații”, ex. 2: a scoate înlocuit cu sinonimul potrivit fiecărui context; doi elevi la tablă, ceilalți în caiete.',
        'Ex. 3: intrusul din fiecare serie, cu explicație.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1: ex. 1 (sinonime sau antonime?), ex. 2 (cuvântul mare în contexte diferite) și ex. 3 (expresia într-un cuvânt), individual, 9 minute.',
        'Verificare, 4 minute.',
        'Pagina 2, ex. 5 (ghicitori cu sinonime și antonime), oral, 2 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        '„Deschideri”, p. 29: la ce ne ajută sinonimele și antonimele când vorbim și scriem? Adunăm exemple (evităm repetițiile, nuanțăm, arătăm contrastul).',
        'Tema: „Aplicații”, ex. 1, 5, 6, 7 și 9; fișa de exerciții, pagina 2, ex. 4 și 6.') },
    ],
    evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-3.',
  },
  'lectia-12': {
    titlu: 'Câmpul lexical',
    data: null,
    tipOra: 'Predare, vocabular',
    durata: 50,
    obiective: ['Definește câmpul lexical și grupează termeni după trăsături de sens comune.'],
    resurse: ['Manual Art 5, pp. 30-31', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-12/fisa-exercitii.pdf)', 'Schema „Câmpul lexical” (/materiale/clasa-5/unitatea-1/lectia-12/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Selfie-ul de familie de la p. 30: cine sunt persoanele din fotografie? Ce alcătuiesc ele împreună? Când își face o familie un selfie?') },
      { etapa: 'Dirijarea învățării: gruparea după sens', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 2: cuvintele din jurul fotografiei care numesc rudenia naturală.',
        'Ex. 3-4: desenez pe tablă arborele familiei din fotografie; elevii răspund la întrebări și completează: frate, fiu, fiică, nepoți, unchi, mătușă, verișori; ginere, socri, soț, soție.',
        'În caiete, după schema lecției: câmpul lexical (cuvinte legate de aceeași idee, cu trăsături de sens comune și trăsături care le deosebesc).') },
      { etapa: 'Dirijarea învățării: lărgirea câmpului lexical', timp: '6 min', activitate: pasi(
        'Ex. 1-3: un sinonim pentru mătușă; ce parte de vorbire sunt cuvintele; alte cuvinte, derivate și expresii (bunicuță, frate vitreg).',
        'În caiete: sinonimele și expresiile intră în câmpul lexical; cuvintele sunt aceeași parte de vorbire; un cuvânt cu mai multe sensuri poate intra în câmpuri diferite (amar).') },
      { etapa: 'Aplicații', timp: '10 min', activitate: pasi(
        '„Aplicații”, ex. 1: citesc versurile lui Shel Silverstein; elevii ridică mâna la fiecare fruct.',
        'Ex. 2 și 4, frontal: denumirea câmpurilor lexicale.',
        'Ex. 6, joc pe grupe: două minute, cât mai multe cuvinte din câmpul lexical al florii; câștigă grupa cu cele mai multe cuvinte corecte.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1 (sortează cuvintele), ex. 2 (un cuvânt, două câmpuri) și ex. 3 (ghicitori de familie), individual, 8 minute.',
        'Verificare, 5 minute.') },
      { etapa: 'Reflecție și temă', timp: '4 min', activitate: pasi(
        '„Deschideri”, ex. 1: la ce alte materii ne ajută câmpul lexical?',
        'Tema: „Aplicații”, ex. 3 (zece termeni din câmpul lexical al filmului) și ex. 5 (intrusul); „Deschideri”, ex. 2 (compunere cu un câmp lexical, cuvintele subliniate); fișa de exerciții, pagina 2.') },
    ],
    evaluare: 'Observarea sistematică; jocul pe grupe; fișa de exerciții, ex. 1-3.',
  },
  'lectia-13': {
    titlu: 'Tipurile de sunete',
    data: null,
    tipOra: 'Predare, fonetică',
    durata: 50,
    obiective: ['Diferențiază vocalele, consoanele și semivocalele, corespondența sunet-literă.'],
    resurse: ['Manual Art 5, pp. 32-33', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-13/fisa-exercitii.pdf)', 'Schema „Tipurile de sunete” (/materiale/clasa-5/unitatea-1/lectia-13/schema.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Sunetele din jur (ploaia, clopoțelul, vântul) și sunetele cu care vorbim.',
        '„Pentru început”, p. 32: Joi a răsturnat cutiile cu litere; care litere redau vocale și care redau consoane?') },
      { etapa: 'Dirijarea învățării: vocale, consoane, semivocale', timp: '12 min', activitate: pasi(
        '„Explorare”, ex. 1: despărțim sunet și vocală în silabe; câte vocale are fiecare silabă? Concluzie: o silabă, o singură vocală.',
        'Ex. 2 (con-soa-nă, fe-reas-tră, pia-ță, zi-uă): litera colorată redă o vocală sau nu? Pronunț clar vocala din „inimă” și semivocala din „iepure”; elevii repetă.',
        'Ex. 3: i-ul de la finalul lui flori și nori; ex. 4: pronunțarea corectă a lui x în exact, exemplu, examinare, expresiv.',
        'În caiete, după schema lecției: vocalele, consoanele, semivocalele, i „șoptit”.') },
      { etapa: 'Dirijarea învățării: alfabetul și corespondența sunet-literă', timp: '10 min', activitate: pasi(
        '„Explorare”, ex. 1: jocul cu cartonașe (31 de litere): elevii se așază în ordinea alfabetică; fără cartonașe, spun alfabetul în lanț.',
        'Ex. 2-4: litere și sunete în emoție, tristețe, frică, dezgust, text; ce sunete redă x; literele pentru [k], [î], [u], [ŭ], [v].',
        'Ex. 5: despărțim la tablă ceață, cireș, ghiozdan, ghețar etc. și observăm când ce, ci, ge, gi, che, chi, ghe, ghi redau un sunet și când două.',
        'În caiete: litera, alfabetul (31 de litere), excepțiile de la regula „o literă, un sunet”.') },
      { etapa: 'Aplicații', timp: '6 min', activitate: pasi(
        '„Aplicații”, ex. 1, la tablă: V, C, S sub literele din bancă, idee, ploaie.',
        'Ex. 7, oral: vocala i sau i „șoptit” la finalul cuvintelor din listă.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '13 min', activitate: pasi(
        'Pagina 1: ex. 1-4, individual, 8 minute.',
        'Verificare, 5 minute; la ex. 3 despărțim în silabe, ca să vedem dacă după grupul de litere urmează o vocală.') },
      { etapa: 'Reflecție și temă', timp: '4 min', activitate: pasi(
        '„Deschideri”, p. 33: citim cu voce tare o propoziție scrisă fără diacritice; ce se întâmplă cu înțelesul?',
        'Tema: „Aplicații”, ex. 3, 4, 6 și 8; fișa de exerciții, pagina 2, ex. 5-7.') },
    ],
    evaluare: 'Observarea sistematică; exercițiile de la tablă; fișa de exerciții, ex. 1-4.',
  },
  'lectia-14': {
    titlu: 'Silaba. Accentul',
    data: null,
    tipOra: 'Predare, fonetică',
    durata: 50,
    obiective: ['Desparte cuvintele în silabe și identifică accentul corect, conform DOOM3.'],
    resurse: ['Manual Art 5, pp. 34-35', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-14/fisa-exercitii.pdf)', 'Schema „Silaba. Accentul” (/materiale/clasa-5/unitatea-1/lectia-14/schema.svg)', 'Quizul „Silaba și accentul” (materialul de joc al lecției)', 'DOOM3'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '4 min', activitate: pasi(
        'Bătăi din palme pe silabe: numele a trei-patru elevi, apoi câteva cuvinte date.',
        'Citim versurile lui Marin Sorescu de la p. 34.') },
      { etapa: 'Dirijarea învățării: silaba', timp: '8 min', activitate: pasi(
        '„Explorare”, p. 34, a-d: despărțim pornește și pată; cuvântul alcătuit dintr-o singură vocală; cum despărțim albăstrie și purece la capăt de rând; de ce a ales poetul forma purece.',
        'În caiete, după schema lecției: silaba; cuvinte cu una, două sau mai multe silabe; liniuța de despărțire, pusă o singură dată, la capăt de rând.') },
      { etapa: 'Dirijarea învățării: accentul', timp: '10 min', activitate: pasi(
        'Ex. 1-2: ce silabă se pronunță mai intens în carte, câmpie, ochelarii, pată?',
        'Ex. 3: citim cu voce tare propoziția cu ácele și acéle.',
        'Ex. 4-5: pricină și ianuarie (normă și abatere); de ce a pus poetul accent pe puréci?',
        'Prezint DOOM3 (vocala accentuată e subliniată) și dexonline.',
        'În caiete: accentul; nu are loc fix în limba română; poate deosebi sensul cuvintelor scrise la fel; DOOM3.') },
      { etapa: 'Aplicații', timp: '10 min', activitate: pasi(
        '„Aplicații”, ex. 1 și 5, la tablă: despărțire în silabe și silaba accentuată.',
        'Ex. 8, oral: propoziții cu cópii și copíi, véselă și vesélă.',
        'Ex. 9: citim în cor lista, cu accentul din DOOM3.',
        'Ex. 11: corectăm accentul greșit din cele două propoziții.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '14 min', activitate: pasi(
        'Pagina 1: ex. 1-4, individual, 10 minute.',
        'Verificare, 4 minute. Dacă rămâne timp: quizul „Silaba și accentul”.') },
      { etapa: 'Autoevaluare și temă', timp: '4 min', activitate: pasi(
        'Autoevaluare L9-L14: cele trei afirmații, în caiet.',
        'Tema: „Aplicații”, ex. 2, 3, 6, 7 și 10; „Deschideri”, ex. 2 (cuvinte auzite accentuate greșit); fișa de exerciții, pagina 2, ex. 5-8; minitestul, dacă îl folosesc.') },
    ],
    evaluare: 'Observarea sistematică; autoevaluarea L9-L14; fișa de exerciții, ex. 1-4.',
  },
  'lectia-15': {
    titlu: 'Etapele scrierii, pregătirea pentru redactare',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Cunoaște și aplică primele etape ale scrierii unui text, pregătirea pentru redactare.'],
    resurse: ['Manual Art 5, p. 36', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-15/fisa-exercitii.pdf)', 'Infograficul „Cele cinci etape ale scrierii” (/materiale/clasa-5/unitatea-1/lectia-15/infografic.svg)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '6 min', activitate: pasi(
        '„Pentru început”, p. 36, ex. 1: fiecare notează trei cuvinte legate de o experiență personală amuzantă.',
        'Ex. 2, în perechi: și-o povestesc pe scurt unul altuia.') },
      { etapa: 'Dirijarea învățării: etapele scrierii', timp: '12 min', activitate: pasi(
        'Repere, p. 36, cu infograficul lecției: pregătirea pentru redactare, scrierea ciornei, revizuirea, editarea, publicarea.',
        'Pentru fiecare etapă, elevii dau un exemplu de acțiune concretă (aleg subiectul, scriu prima variantă, șterg ce nu e important...).',
        'În caiete: cele cinci etape, ca o scară; ne putem întoarce oricând la o treaptă anterioară.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '10 min', activitate: pasi(
        'Pagina 1: ex. 1 (în ce etapă sunt?) și ex. 2 (pentru cine și de ce scriu?), individual, 6 minute.',
        'Verificare, 4 minute.') },
      { etapa: 'Pregătirea propriului text', timp: '17 min', activitate: pasi(
        '„Explorare”, ex. 1: fiecare stabilește scopul și publicul relatării despre experiența aleasă.',
        'Ex. 2: răspunde, în caiet, la cele șase întrebări: cine? ce? când? unde? de ce? cum?',
        'Ex. 3: planul compunerii: introducere, trei-patru idei pentru cuprins, încheiere.',
        'Trec printre bănci și ajut; la final, doi elevi citesc planul, iar clasa spune ce ar mai trebui adăugat.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Care etapă vi s-a părut cea mai grea azi? De ce?',
        'Tema: fișa de exerciții, pagina 2, ex. 4-6; planul se aduce ora viitoare (scriem textul).') },
    ],
    evaluare: 'Observarea sistematică; planurile relatării; fișa de exerciții, ex. 1-3.',
  },
  'lectia-16': {
    titlu: 'Redactarea și revizuirea textului',
    data: null,
    tipOra: 'Redactare',
    durata: 50,
    obiective: ['Redactează și revizuiește un text de relatare a unei experiențe personale, respectând structura introducere-cuprins-încheiere.'],
    resurse: ['Manual Art 5, p. 37', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-16/fisa-exercitii.pdf)', 'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-16/fisa.pdf)', 'Planul realizat la ora anterioară'],
    desfasurare: [
      { etapa: 'Captarea atenției și reactualizarea', timp: '5 min', activitate: pasi(
        'Doi elevi citesc planul de ora trecută.',
        'Recapitulăm etapele scrierii: la care ajungem azi? (ciorna, revizuirea, editarea).') },
      { etapa: 'Dirijarea învățării: structura relatării', timp: '8 min', activitate: pasi(
        'Repere, p. 37: relatarea; introducerea, cuprinsul și încheierea (cuprinsul e partea cea mai mare); paragraful; cuvintele de legătură (mai întâi, apoi, după aceea, mai târziu, în cele din urmă).',
        'Desenez pe tablă modelul de pagină din manual: titlu, introducere, cuprins (Mai întâi..., Apoi..., În cele din urmă...), încheiere.') },
      { etapa: 'Exersare: fișa de exerciții', timp: '9 min', activitate: pasi(
        'Pagina 1: ex. 1 (introducere, cuprins sau încheiere?), ex. 2 (cuvinte care leagă întâmplările) și ex. 3 (unde începe un paragraf nou?), individual, 6 minute.',
        'Verificare, 3 minute.') },
      { etapa: 'Scrierea ciornei', timp: '15 min', activitate: pasi(
        '„Aplicații”, ex. 1: fiecare scrie ciorna relatării, după plan, pe foaia organizată ca în model.',
        'Trec printre bănci; ajut mai ales la introducere (să stârnească interesul) și la ordinea întâmplărilor.') },
      { etapa: 'Revizuirea în perechi', timp: '9 min', activitate: pasi(
        'Ex. 2: colegul de bancă citește textul și dă o sugestie; apoi schimbă rolurile.',
        'Ex. 4: fiecare își verifică textul cu lista de control din fișa lecției (Da/Nu la fiecare criteriu).') },
      { etapa: 'Reflecție și temă', timp: '4 min', activitate: pasi(
        'Ex. 6, oral: ce etapă a scrierii a sărit Bogdan când și-a scris compunerea?',
        'Tema: ex. 3 (forma finală, după sugestiile colegului, pe fișa lecției); „Deschideri” (impresiile despre scriere, cel mult zece rânduri); fișa de exerciții, pagina 2, ex. 4-6. Ora viitoare, doi-trei elevi citesc din scaunul autorului (ex. 5).') },
    ],
    evaluare: 'Lista de control din fișa lecției; observarea revizuirii în perechi; fișa de exerciții, ex. 1-3.',
  },
  'lectia-17': {
    titlu: 'Recapitulare, citire și comprehensiune',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează strategii de citire și comprehensiune pe un text narativ nou: delimitare în fragmente, temă, idei principale.'],
    resurse: ['Manual Art 5, pp. 38-39, ex. 1-9', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-17/fisa-exercitii.pdf)', 'Fișa lecției (/materiale/clasa-5/unitatea-1/lectia-17/fisa.pdf)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Scaunul autorului', timp: '6 min', activitate: pasi(
        'Doi-trei elevi citesc relatarea scrisă acasă din scaunul autorului (ex. 5, p. 37); clasa pune câte o întrebare despre text sau despre cum a fost scris.') },
      { etapa: 'Lectura textului', timp: '7 min', activitate: pasi(
        'Citesc fragmentul din „Povestește-mi ceva” de Sharon Creech (p. 38); elevii urmăresc în manual.',
        'Primele impresii: ce fel de fată e Salamanca?') },
      { etapa: 'Rezolvare ghidată, ex. 1-9', timp: '15 min', activitate: pasi(
        'Ex. 1, în perechi: fragmentele logice și cuvântul-cheie al fiecăruia.',
        'Ex. 2-3, frontal, la tablă: tema (cu motivare) și planul simplu de idei.',
        'Ex. 4-5: literar sau nonliterar (cu argumente); Cine? Ce? Când? Unde?',
        'Ex. 6-9, oral, rapid: ochii lui Phoebe, emoția Salamancăi, de ce e considerată curajoasă, concluzia de la final.') },
      { etapa: 'Obținerea performanței: fișa de exerciții, pe un text nou', timp: '17 min', activitate: pasi(
        'Textul „Biletele fără semnătură”: pagina 1, ex. 1-3, și pagina 2, ex. 4-5, individual, 12 minute.',
        'Verificare, 5 minute: tema, fragmentele și ideile principale se citesc cu voce tare.') },
      { etapa: 'Reflecție și temă', timp: '5 min', activitate: pasi(
        'Adunăm pe tablă pașii pe care îi facem la un text nou: citesc, răspund la Cine-Ce-Când-Unde, împart în fragmente, găsesc cuvintele-cheie, formulez ideile, stabilesc tema.',
        'Tema: fișa de exerciții, pagina 2, ex. 6-8; fișa lecției („Fotografia din primul rând”).') },
    ],
    evaluare: 'Observarea sistematică; planul simplu de la ex. 3; fișa de exerciții, ex. 1-5.',
  },
  'lectia-18': {
    titlu: 'Recapitulare, gramatică, vocabular și redactare',
    data: null,
    tipOra: 'Recapitulare',
    durata: 50,
    obiective: ['Recapitulează noțiuni de gramatică și vocabular din unitate și redactează un text integrator, respectând etapele scrierii.'],
    resurse: ['Manual Art 5, p. 39, ex. 10-20', 'Fișa de exerciții (/materiale/clasa-5/unitatea-1/lectia-18/fisa-exercitii.pdf)', 'Quizul „Recapitulare, gramatică și vocabular” (materialul de joc al lecției)', 'Caietele elevilor'],
    desfasurare: [
      { etapa: 'Captarea atenției', timp: '5 min', activitate: pasi(
        'Lanțul noțiunilor: fiecare elev numește o noțiune de limbă din unitate și dă un exemplu (propoziție simplă, sinonim, semivocală, silabă accentuată...).') },
      { etapa: 'Rezolvare ghidată: gramatică și vocabular', timp: '15 min', activitate: pasi(
        'P. 39, ex. 10-11, frontal: felul propozițiilor și transformările cerute.',
        'Ex. 12: ce ne lămurește articolul CĂUȘ despre text?',
        'Ex. 13, la tablă: ordinea din dicționar.',
        'Ex. 14-16, în perechi: sinonime, antonime și câmpul lexical al naturii, pe cuvintele din text.') },
      { etapa: 'Rezolvare ghidată: fonetică', timp: '6 min', activitate: pasi(
        'Ex. 17-19, la tablă: felul sunetelor; litere și sunete; silabe și silaba accentuată.') },
      { etapa: 'Obținerea performanței: fișa de exerciții', timp: '15 min', activitate: pasi(
        'Pagina 1, ex. 1-4, și pagina 2, ex. 5-7, individual, 11 minute.',
        'Verificare, 4 minute. Dacă rămâne timp: quizul lecției.') },
      { etapa: 'Pregătirea redactării și temă', timp: '9 min', activitate: pasi(
        'Ex. 20: relatarea unei experiențe dintr-o zi obișnuită de școală, cu emoticoane. Fiecare răspunde la cele șase întrebări și face planul, 6 minute.',
        'Citim criteriile din manual (conținut, părțile textului, exprimare, ortografie și punctuație, așezare în pagină).',
        'Tema: redactarea textului de la ex. 20, cu autoevaluare după criterii; fișa de exerciții, pagina 2, ex. 8. Anunț evaluarea de ora viitoare.') },
    ],
    evaluare: 'Observarea sistematică; fișa de exerciții, ex. 1-7; textul de la ex. 20, evaluat după criteriile din manual.',
  },
  'lectia-19': {
    titlu: 'Evaluare, probă scrisă',
    data: null,
    tipOra: 'Evaluare',
    durata: 50,
    obiective: ['Demonstrează, într-o probă scrisă, competențele dobândite în unitate: vocabular, gramatică, comprehensiune, redactare.'],
    resurse: ['Testul tipărit, Manual Art 5, p. 40', 'Barem de corectare, Ghid, p. 89'],
    desfasurare: [
      { etapa: 'Instructajul', timp: '5 min', activitate: pasi(
        'Distribui testul (p. 40) și foile de lucru; elevii scriu numele.',
        'Citesc cu voce tare fragmentul și cerințele; explic punctajul: partea A, 60 de puncte, partea B, 30 de puncte, 10 puncte din oficiu.',
        'Recomand împărțirea timpului: cam 20 de minute pentru partea A, 15-20 de minute pentru relatare, 5 minute pentru recitire.') },
      { etapa: 'Rezolvarea individuală', timp: '40 min', activitate: pasi(
        'Elevii lucrează individual; răspund doar la întrebări de înțelegere a cerinței.',
        'Anunț timpul la jumătate și cu 5 minute înainte de final.') },
      { etapa: 'Strângerea lucrărilor', timp: '5 min', activitate: pasi(
        'Elevii recitesc și verifică numele; strâng lucrările.',
        'Întreb scurt ce li s-a părut ușor și ce li s-a părut greu; notez pentru ora de analiză a rezultatelor.') },
    ],
    evaluare: 'Evaluare sumativă scrisă, notată după baremul din Ghid, p. 89.',
  },
}
