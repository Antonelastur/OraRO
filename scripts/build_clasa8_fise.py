# -*- coding: utf-8 -*-
"""Generează fișele de lucru pentru clasa a VIII-a.

Materiale de sprijin originale: enunțuri proprii, conținut de bază (definiții,
trăsături de specie) doar în casete „Reper”, din Art 8 (Sâmihăian et al., Art
Klett, ed. 2025), cu pagina notată în subsol. Exercițiile pornesc de la textul
deja citit la clasă, nu prezintă fapte de intrigă drept certe.

Rulează din rădăcina proiectului:  python scripts/build_clasa8_fise.py
"""
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fisa_engine import sheet, sheet2, set_clasa

set_clasa("clasa-8")


# ---------- generice ----------

def fisa_semnificatii(out, subtitlu, intrebare, sursa):
    sheet(out, "Fișă de lucru — Semnificațiile textului", subtitlu, [
        {"t": "lines", "n": 1, "title": "Prima impresie", "weight": 2,
         "prompt": "Ce stare ți-a lăsat lectura? Alege un cuvânt care numește o emoție și explică de ce."},
        {"t": "lines", "n": 2, "title": "Ideea centrală", "weight": 2,
         "prompt": "Formulează într-o propoziție semnificația de ansamblu a textului, așa cum ai înțeles-o tu."},
        {"t": "lines", "n": 3, "title": "Răspuns personal", "weight": 4,
         "prompt": [intrebare, "Scrie-ți poziția și susține-o cu două argumente și un citat scurt din text."]},
        {"t": "lines", "n": 4, "title": "Un vers-cheie", "weight": 3,
         "prompt": "Alege un vers pe care îl consideri cel mai important. Comentează-l în 2-3 rânduri, legându-l de tema poeziei."},
        {"t": "lines", "n": 5, "title": "Legătura cu tine", "weight": 3,
         "prompt": "Ce experiență sau ce gând de-al tău se leagă de acest text? Explică pe scurt."},
    ], sursa)


def fisa_text_auxiliar(out, subtitlu, titlu_text, texte_baza, sursa):
    sheet(out, f"Fișă de lucru — Text auxiliar: {titlu_text}", subtitlu, [
        {"t": "table", "n": 1, "title": "Jurnalul cu dublă intrare", "rows": 5,
         "cols": ["Fragment care mi-a atras atenția", "Ce gândesc / ce simt despre el"], "widths": [255, 255]},
        {"t": "lines", "n": 2, "title": "Tema și tonul", "weight": 3,
         "prompt": "Ce temă tratează textul și ce ton are (grav, ironic, melancolic, luminos)? Susține cu un citat."},
        {"t": "lines", "n": 3, "title": "Legături cu textele de bază", "weight": 3,
         "prompt": f"Ce asemănări și ce deosebiri găsești între acest text și {texte_baza}?"},
        {"t": "lines", "n": 4, "title": "Sugestie de lectură", "weight": 2,
         "prompt": "Recomandă textul unui coleg, în 2-3 rânduri: de ce merită citit?"},
    ], sursa)


# ---------- Unitatea I ----------

def fisa_versificatie(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Structura poeziei. Versificația", subtitlu, [
        {"t": "table", "n": 1, "title": "Vocile ficționale în O, rămâi...", "rows": 3, "row_h": 34,
         "cols": ["Fragmentul (strofele)", "Cine vorbește / cine își amintește", "Un cuvânt-cheie"],
         "widths": [180, 210, 120]},
        {"t": "table", "n": 2, "title": "Prozodia ultimelor patru versuri", "rows": 4, "row_h": 30,
         "cols": ["Aspect", "Ce observ"], "widths": [180, 330],
         "data": [["Tipul de strofă", ""], ["Măsura (nr. de silabe)", ""], ["Rima", ""], ["Ritmul", ""]]},
        {"t": "lines", "n": 3, "title": "Mărcile subiectivității", "weight": 3,
         "prompt": "Transcrie trei mărci lexico-gramaticale ale subiectivității (persoana I, interjecții, exclamații, verbe de trăire) și spune ce sentiment exprimă fiecare."},
        {"t": "lines", "n": 4, "title": "Liric, epic sau dramatic", "weight": 3,
         "prompt": "Poezia e un monolog al pădurii către un copil ajuns adult. Ce elemente de text dramatic sau epic găsești în ea? Argumentează de ce rămâne, totuși, text liric."},
    ], sursa, reper_text=(
        "Reper (manual, p. 11): Textul liric exprimă mai ales stări, emoții, sentimente, cu marca cea mai "
        "puternică a subiectivității la persoana I singular. Versul e un rând sfârșit cu un spațiu gol; strofa "
        "e o grupare de versuri (distih, terțină, catren). Măsura = numărul de silabe dintr-un vers. Rima e "
        "potrivirea sunetelor de la sfârșit de vers, de la ultima vocală accentuată: împerecheată (a a b b), "
        "încrucișată (a b a b), îmbrățișată (a b b a), monorimă, semirimă."))


def fisa_figuri_stil(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Limbajul figurat. Aliterația", subtitlu, [
        {"t": "table", "n": 1, "title": "Figurile de stil din O, rămâi...", "rows": 5, "row_h": 30,
         "cols": ["Citatul din text", "Figura de stil", "Ce sugerează"], "widths": [200, 130, 180]},
        {"t": "lines", "n": 2, "title": "Aliterația", "weight": 3,
         "prompt": "Găsește în poezie un vers în care se repetă aceeași consoană. Transcrie-l, subliniază consoana și spune ce efect sonor creează (imitativ sau expresiv)."},
        {"t": "lines", "n": 3, "title": "Figuri combinate", "weight": 3,
         "prompt": "Alege un vers în care două figuri de stil lucrează împreună (de exemplu epitet + comparație). Explică ce câștigă imaginea din combinarea lor."},
    ], sursa, reper_text=(
        "Reper (manual, p. 12): Personificarea atribuie însușiri omenești unor ființe necuvântătoare, "
        "lucruri sau fenomene. Epitetul determină un substantiv sau un verb prin cuvinte ce evidențiază "
        "însușiri deosebite. Comparația exprimă un raport de asemănare, cu un cuvânt de legătură (ca, "
        "precum, cât). Metafora trece de la sensul obișnuit la altul, pe baza unei comparații subînțelese "
        "(explicită sau implicită). Aliterația repetă o consoană sau un grup de consoane în cuvinte apropiate, "
        "pentru un efect imitativ sau expresiv."))


def fisa_hiperbola(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Hiperbola. Enumerația", subtitlu, [
        {"t": "table", "n": 1, "title": "Ochii iubitei, în Izvorul nopții", "rows": 3, "row_h": 32,
         "cols": ["Citatul", "Figura de stil", "Trăsătura pusă în valoare"], "widths": [180, 130, 200]},
        {"t": "lines", "n": 2, "title": "Exagerarea", "weight": 3,
         "prompt": "În ce vers ochii iubitei acoperă pământul „c-o mare de-ntuneric”? Ce figură de stil e aceasta și cu ce altă figură se combină? Ce scop are exagerarea?"},
        {"t": "lines", "n": 3, "title": "Enumerația", "weight": 2,
         "prompt": "Transcrie enumerația formelor de relief din poezie. Ce sugerează alăturarea lor?"},
        {"t": "lines", "n": 4, "title": "Scrii tu", "weight": 3,
         "prompt": "Construiește două enunțuri cu câte o hiperbolă: unul care arată că ai foarte multe teme, altul că nu ți-ai văzut un prieten de mult."},
    ], sursa, reper_text=(
        "Reper (manual, p. 16): Enumerația înșiruie mai mulți termeni de același fel, ca să atragă atenția "
        "asupra aspectelor descrise sau să accentueze ideea. Hiperbola exagerează intenționat însușirile "
        "unei ființe sau ale unui obiect, ale unei întâmplări, ca să-l impresioneze pe cititor; trăsăturile pot "
        "fi mărite sau micșorate. Apare și în vorbirea curentă („arde de nerăbdare”, „frumoasă foc”) și e "
        "construită întotdeauna prin combinare cu alte figuri de stil."))


def fisa_comparare_texte(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Compararea textelor", subtitlu, [
        {"t": "table", "n": 1, "title": "Trei poezii, în paralel", "rows": 5, "row_h": 30,
         "cols": ["Criteriu", "O, rămâi... (Eminescu)", "Izvorul nopții (Blaga)", "Lecția de citire (Stănescu)"],
         "widths": [120, 130, 130, 130],
         "data": [["Tema", "", "", ""], ["Ipostaza vocii lirice", "", "", ""],
                  ["Elementul acvatic", "", "", ""], ["Versificația (rimă, strofe)", "", "", ""],
                  ["Figura de stil dominantă", "", "", ""]]},
        {"t": "lines", "n": 2, "title": "Asemănare de conținut", "weight": 3,
         "prompt": "Numește o asemănare de conținut (temă, idee, sentiment) între cele trei texte și susține-o cu câte un detaliu din fiecare."},
        {"t": "lines", "n": 3, "title": "Deosebire de formă", "weight": 3,
         "prompt": "Care poezie e cea mai inovatoare ca formă (așezare în pagină, rimă, ritm)? Compară cu celelalte două."},
    ], sursa, reper_text=(
        "Reper (manual, p. 21): Compararea a două sau mai multe texte se face identificând asemănările și "
        "deosebirile, prezentate în paralel. Se recomandă: stabilirea criteriilor; analiza conținutului (idei, "
        "sentimente, temă, ipostaza vocii, câmpuri lexicale); analiza formei (organizarea și dispunerea "
        "versurilor, sonoritate — ritm, rimă, măsură, aliterații —, figuri de stil, imagini artistice)."))


def fisa_coerenta_anafora(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Organizarea coerentă a textului. Anafora", subtitlu, [
        {"t": "table", "n": 1, "title": "Antecedent și anaforic", "rows": 4, "row_h": 32,
         "cols": ["Antecedentul (cuvântul reluat)", "Anaforicul", "Ce parte de vorbire e anaforicul"],
         "widths": [200, 150, 160],
         "prompt": "Ia un text scurt la alegere și completează pentru patru reluări."},
        {"t": "lines", "n": 2, "title": "Cele trei reguli", "weight": 3,
         "prompt": "Explică pe scurt regula continuității, regula progresiei și regula noncontradicției. Dă câte un exemplu de enunț care le încalcă."},
        {"t": "lines", "n": 3, "title": "Elimină repetițiile", "weight": 4,
         "prompt": "Rescrie textul: „Mihai a citit un volum de poezie, fiindcă Mihai îndrăgește literatura. Mihai consideră că literatura este un mijloc de cunoaștere.” Folosește anaforice diferite."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 42-43): Coerența e ansamblul de trăsături care asigură logica textului: ordine "
        "logică, temporală, spațială. Reguli: continuității (enunțurile au în comun un minim de informație, "
        "prin reluări), progresiei (fiecare enunț aduce ceva nou, fără repetarea informației), noncontradicției "
        "(fără informații contradictorii, fără schimbarea persoanei sau a timpului narării). Anafora reia un "
        "cuvânt (antecedent) printr-un altul (anaforic) care trimite la aceeași realitate; anaforicul poate fi "
        "pronume, numeral, adverb, substantiv sau grup nominal, „da”/„nu”, verbul „a face” cu pronume neutru."))


def fisa_feedback_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Etapele scrierii. Oferirea feedbackului", subtitlu, [
        {"t": "lines", "n": 1, "title": "Etapele redactării", "weight": 2,
         "prompt": "Notează, în ordine, cele cinci etape ale unei bune redactări și spune ce faci la fiecare."},
        {"t": "lines", "n": 2, "title": "Ciorna comentariului", "weight": 5,
         "prompt": "Redactează prima variantă (minimum 100 de cuvinte) a unui comentariu de versuri la alegere din unitate: prezintă două elemente ale peisajului, interpretează două figuri de stil, precizează un sentiment și tema."},
        {"t": "table", "n": 3, "title": "Feedback pentru un coleg", "rows": 4, "row_h": 30,
         "cols": ["Aspect vizat", "Ce merge bine", "Sugestie concretă"], "widths": [150, 180, 180],
         "data": [["Conținutul", "", ""], ["Organizarea", "", ""],
                  ["Corectitudinea limbii", "", ""], ["Aspectul scrierii", "", ""]]},
    ], sursa, reper_text=(
        "Reper (manual, pp. 44-45): Feedbackul în redactare e procesul prin care observațiile și sugestiile "
        "despre o lucrare sunt folosite de autor ca s o îmbunătățească. Cine îl oferă face observații și "
        "sugestii concrete, într-un limbaj clar; observațiile nu trebuie să fie excesiv negative, iar "
        "aprecierile se însoțesc de sugestii de modificare concrete."))


def fisa_feedback_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Integrarea feedbackului", subtitlu, [
        {"t": "lines", "n": 1, "title": "Ce am primit", "weight": 3,
         "prompt": "Notează cel puțin două sugestii primite de la colegul tău. Sunt clare? Dacă nu, ce întrebare i-ai pune?"},
        {"t": "lines", "n": 2, "title": "Ce integrez și de ce", "weight": 3,
         "prompt": "Alege sugestiile pe care le consideri utile pentru text și explică pe scurt de ce. Ce lași deoparte și din ce motiv?"},
        {"t": "lines", "n": 3, "title": "Pasajele rescrise", "weight": 4,
         "prompt": "Rescrie aici pasajele din comentariul tău în care ai operat modificări în urma feedbackului."},
    ], [
        {"t": "table", "n": 4, "title": "Editare", "rows": 4, "row_h": 26,
         "cols": ["Verificare", "Da / Nu"], "widths": [400, 110],
         "data": [["Ideile se înlănțuie logic, cu paragrafe distincte", ""],
                  ["Se folosește doar persoana a III-a, registrul standard", ""],
                  ["Cel mult o greșeală de ortografie și două de punctuație", ""],
                  ["Alineatele sunt marcate, scrisul e îngrijit", ""]]},
        {"t": "lines", "n": 5, "title": "Forma finală", "weight": 6,
         "prompt": "Transcrie comentariul în formă finală, pe curat, gata de prezentat din scaunul autorului."},
    ], sursa)


def fisa_elemente_grafice(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Rolul elementelor grafice în prezentarea unui text", subtitlu, [
        {"t": "table", "n": 1, "title": "Citește o imagine", "rows": 4, "row_h": 30,
         "cols": ["Elementul din imagine", "Prim-plan / plan secund / fundal", "Ce rol are"],
         "widths": [180, 180, 150],
         "prompt": "Alege o imagine care însoțește un text (manual, afiș, bandă desenată) și completează."},
        {"t": "lines", "n": 2, "title": "Funcția imaginii", "weight": 3,
         "prompt": "Ce funcție are imaginea față de text: emoționează, informează, convinge, amuză? Cum ți-ai dat seama?"},
        {"t": "lines", "n": 3, "title": "Text și multimedia", "weight": 3,
         "prompt": "Ce aduce în plus o prezentare multimedia (videoclip, animație, sunet) față de o imagine statică dintr-o carte? Dă un exemplu."},
        {"t": "lines", "n": 4, "title": "Proiectează tu", "weight": 3,
         "prompt": "Ai de prezentat pe un slide semnificația unei poezii din unitate. Ce imagine alegi, ce dimensiune, ce culori, ce așezare în pagină? Motivează."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 46-47): Elementele grafice sunt mesaje vizuale cu limbaj universal, cod propriu "
        "și funcții diverse (să emoționeze, să informeze, să convingă, să amuze). Lectura unei imagini are "
        "două procese rapide: identificarea și interpretarea. Percepția se orientează întâi spre elementele "
        "însuflețite, apoi spre obiecte și simboluri; spre prim-plan, apoi spre fundal; spre stânga-sus, apoi "
        "spre dreapta-jos."))


# ---------- Unitatea II ----------

def fisa_text_dramatic(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul dramatic. Structuri textuale", subtitlu, [
        {"t": "table", "n": 1, "title": "Indicații scenice: externe sau interne", "rows": 5, "row_h": 28,
         "cols": ["Indicația scenică (transcrisă din text)", "Externă / internă", "Ce anunță"],
         "widths": [230, 110, 170]},
        {"t": "lines", "n": 2, "title": "Structura textuală din didascalii", "weight": 3,
         "prompt": "Ce structură textuală (narativă, descriptivă, dialogată, explicativă) predomină în indicația de decor de la începutul actului I? Susține cu un citat."},
        {"t": "lines", "n": 3, "title": "Ce stârnește râsul", "weight": 3,
         "prompt": "Comedia provoacă râsul prin înfățișarea personajelor, comportamentul, limbajul lor sau situații. Alege un fragment din Take, Ianke și Cadâr și arată prin ce anume e comic."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 58-59): Textul dramatic e scris ca să fie jucat pe scenă. Actul e subdiviziunea "
        "formală a piesei, cu acțiune unitară, separat prin coborârea cortinei; scena sau tabloul e "
        "subdiviziunea actului, delimitată de intrarea sau ieșirea unui personaj ori de schimbarea locului și "
        "a timpului. Actele se notează cu cifre romane, scenele cu cifre arabe. Componente: indicațiile "
        "scenice (didascaliile) — externe/inițiale (titlul, lista personajelor, spațiul, timpul, decorul) și "
        "interne/funcționale (intrări, ieșiri, gesturi, ton, tăceri; numele personajului în fața replicii) — și "
        "textul dialogat (replicile). Comedia stârnește râsul prin tipuri umane sau situații neașteptate."))


def fisa_timp_spatiu_dramatic(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Timpul, spațiul, acțiunea, personajele", subtitlu, [
        {"t": "table", "n": 1, "title": "Timpul și spațiul în teatru", "rows": 4, "row_h": 28,
         "cols": ["Aspect", "În Take, Ianke și Cadâr"], "widths": [200, 310],
         "data": [["Durata (timpul reprezentației)", ""], ["Momentul (timpul ficțiunii)", ""],
                  ["Spațiul-scenă", ""], ["Spațiul ficțiunii", ""]]},
        {"t": "lines", "n": 2, "title": "Conflictul dramatic", "weight": 3,
         "prompt": "Ce anume a generat neînțelegerile dintre personaje? Cine se înfruntă și din ce cauză? Cum se rezolvă?"},
        {"t": "table", "n": 3, "title": "Fișă de identitate a unui personaj", "rows": 5, "row_h": 26,
         "cols": ["Rubrica", "Ce am aflat din text"], "widths": [180, 330],
         "data": [["Nume, vârstă, statut social", ""], ["Naționalitate, religie", ""],
                  ["O trăsătură (directă, din indicații sau alte personaje)", ""],
                  ["O trăsătură (indirectă, din felul de a vorbi)", ""], ["O replică relevantă", ""]]},
    ], sursa, reper_text=(
        "Reper (manual, pp. 60-61): Timpul în teatru are durata (timpul reprezentației) și momentul (timpul "
        "ficțiunii). Spațiul are spațiul-scenă (al reprezentării) și spațiul ficțiunii, pe care spectatorul îl "
        "imaginează ca fragment de lume. Acțiunea dramatică e succesiunea de evenimente care duce de la "
        "situația inițială la cea finală; conflictul dramatic — înfruntarea dintre personaje, idei sau situații "
        "din interese sau sentimente opuse — este element fundamental. Personajul dramatic are dublă "
        "natură (ființă ficțională + actor) și e construit direct sau indirect."))


def fisa_cronica_spectacol(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Cronica de spectacol", subtitlu, [
        {"t": "table", "n": 1, "title": "Fapt sau opinie, în cronica lui Ștefan Popa", "rows": 4, "row_h": 28,
         "cols": ["Enunțul din cronică", "Fapt / opinie", "Cuvântul care te ajută"], "widths": [240, 110, 160]},
        {"t": "lines", "n": 2, "title": "Ce aspecte examinează", "weight": 3,
         "prompt": "Notează patru elemente ale spectacolului luate în discuție în cronică (regie, scenografie, jocul actorilor, decor, coloană sonoră…). Ce spune autorul despre fiecare?"},
        {"t": "lines", "n": 3, "title": "Punctul de vedere final", "weight": 3,
         "prompt": "Ce judecată de valoare formulează cronicarul la final? Ce rezervă are față de spectacol?"},
        {"t": "lines", "n": 4, "title": "Titlul", "weight": 2,
         "prompt": "Explică de ce se potrivește titlul „Omenescul personajelor” pentru această cronică."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 65-67): Cronica de spectacol e un comentariu de specialitate, scris imediat "
        "după premieră, care poate lua în discuție orice element de bază al spectacolului: regie, scenografie, "
        "coregrafie, jocul actorilor, decor, costume, coloană sonoră, efecte, atmosferă. La final, autorul "
        "formulează de obicei un punct de vedere despre valoarea spectacolului. E un text de opinie, cu grad "
        "mare de subiectivitate, semnat adesea de o personalitate; apare în reviste de specialitate sau pe "
        "bloguri."))


def fisa_subordonarea(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Fraza. Subordonarea", subtitlu, [
        {"t": "table", "n": 1, "title": "Principală sau subordonată", "rows": 4, "row_h": 30,
         "cols": ["Fraza (desparte-o în propoziții)", "Ce propoziție e secundară", "Elementul regent"],
         "widths": [230, 130, 150]},
        {"t": "lines", "n": 2, "title": "Elementul de relație", "weight": 3,
         "prompt": "Pentru trei fraze la alegere, spune prin ce e introdusă subordonata: conjuncție, locuțiune conjuncțională, pronume/adjectiv relativ sau nehotărât, adverb relativ sau nehotărât."},
        {"t": "lines", "n": 3, "title": "Transformă", "weight": 3,
         "prompt": "Transformă fraza „Trenul nu a sosit încă; are întârziere.” într-o frază cu o principală și o subordonată, adăugând un element de relație potrivit și punctuația necesară."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 88-89): După rol, propoziția e principală (sens de sine stătător) sau secundară/"
        "subordonată (depinde ca sens de un cuvânt din altă propoziție — elementul regent, aflat în "
        "propoziția regentă). O frază are cel puțin o principală. Subordonarea se realizează prin joncțiune: "
        "conjuncții subordonatoare (că, să, dacă, deși, fiindcă…) și locuțiuni conjuncționale subordonatoare "
        "(cu toate că, din cauză că, pentru ca să…), care apar doar în frază, sau prin pronume și adjective "
        "relative și nehotărâte, adverbe relative (unde, când, cum, cât) și adverbe nehotărâte (oriunde, "
        "oricum…), care îndeplinesc și funcție sintactică în propoziția introdusă."))


def fisa_enunturi_eliptice(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Enunțuri eliptice. Norme de punctuație", subtitlu, [
        {"t": "table", "n": 1, "title": "Ce lipsește și cum se recuperează", "rows": 4, "row_h": 30,
         "cols": ["Enunțul eliptic", "Secvența omisă (recuperată din context)", "Elipsă verbală / nominală"],
         "widths": [200, 200, 110]},
        {"t": "lines", "n": 2, "title": "Marcarea elipsei", "weight": 3,
         "prompt": "Prin ce semn se marchează în scris elipsa verbală (virgulă sau linie de pauză)? Dă câte un exemplu propriu pentru fiecare."},
        {"t": "lines", "n": 3, "title": "Propoziții fragmentare", "weight": 3,
         "prompt": "Scrie un scurt schimb de replici (4-6 rânduri) în care să apară: o propoziție fragmentară dintr-o coordonare, un răspuns scurt la o întrebare și un răspuns printr-un adverb (da / nu / desigur)."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 90-91): Elipsa e omisiunea unor secvențe recuperabile din context, exprimate "
        "anterior. Elipsa verbală = omiterea totală sau parțială a predicatului (Eu am fost în parc și tu, la "
        "film). Elipsa nominală = omiterea unui substantiv (Eu am vrut o prăjitură cu ciocolată, iar Ioana, cu "
        "fistic). Propozițiile fragmentare apar în structuri coordonate (se păstrează doar informația nouă), în "
        "răspunsuri la întrebări (doar partea de vorbire cerută de cuvântul interogativ) sau în răspunsuri "
        "înlocuite integral prin adverbe (da, nu, ba da, desigur). Elipsa verbală se marchează în scris prin "
        "virgulă sau linie de pauză, iar în vorbire printr-o pauză."))


def fisa_cronica_film_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Cronica de film. Pregătirea", subtitlu, [
        {"t": "lines", "n": 1, "title": "Filmul ales", "weight": 1,
         "prompt": "Alege un film sau un scurtmetraj de animație urmărit la clasă. Notează titlul, titlul original, genul."},
        {"t": "table", "n": 2, "title": "Întrebările cronicarului", "rows": 4, "row_h": 30,
         "cols": ["Întrebare", "Răspuns pe scurt"], "widths": [140, 370],
         "data": [["CE? (film, gen, semnificație, ce nu se divulgă)", ""],
                  ["CINE? (regizor, scenarist, actori / voci)", ""],
                  ["CÂND și UNDE? (producție, premieră, acțiune)", ""],
                  ["CUM? (jocul actorilor, coloana sonoră, cum te-ai simțit)", ""]]},
        {"t": "lines", "n": 3, "title": "Ce nu divulg", "weight": 3,
         "prompt": "Notează două detalii de acțiune pe care nu le vei include în cronică, ca să nu strici surpriza. De ce tocmai acestea?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 92-93): Cronica de film e un text scris după vizionare, care examinează regia, "
        "scenariul, jocul actorilor, coloana sonoră, efectele speciale etc.; autorul poate formula puncte de "
        "vedere personale. O cronică nu oferă toate detaliile acțiunii, ca să încurajeze cititorii să vadă "
        "filmul. Înainte de redactare urmărești filmul cu atenție, îți iei notițe și răspunzi la întrebările: ce? "
        "cine? când și unde? cum?"))


def fisa_cronica_film_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Cronica de film. Redactarea. Etica redactării", subtitlu, [
        {"t": "lines", "n": 1, "title": "Cele cinci paragrafe", "weight": 5,
         "prompt": "Redactează cronica pe cinci paragrafe: 1. informații generale (titlu original, gen, regizor, scenarist); 2. prezentare pe scurt, fără punctul culminant și finalul; 3. părerea ta, motivată; 4. mesajul filmului; 5. producătorul, anul, premiile."},
        {"t": "lines", "n": 2, "title": "Titlul", "weight": 2,
         "prompt": "Formulează un titlu care să conțină și titlul filmului."},
    ], [
        {"t": "table", "n": 3, "title": "Etica redactării", "rows": 4, "row_h": 26,
         "cols": ["Verificare", "Da / Nu"], "widths": [400, 110],
         "data": [["Textul este original, scris cu propriile cuvinte", ""],
                  ["Opiniile preluate de la altcineva sunt între ghilimele, cu sursa notată", ""],
                  ["Scrisul e lizibil sau tehnoredactarea respectă regulile de estetică a paginii", ""],
                  ["Rezumatul nu dezvăluie punctul culminant sau deznodământul", ""]]},
        {"t": "lines", "n": 4, "title": "Forma finală", "weight": 6,
         "prompt": "Transcrie cronica pentru etapa de publicare, de mână sau la calculator, respectând normele de redactare."},
    ], sursa)


def fisa_proiect_cerinte(out, subtitlu, nume, tema, cerinte, calendar, criterii, sursa):
    sheet(out, f"Fișă de proiect — {nume}", subtitlu, [
        {"t": "lines", "n": 1, "title": "Tema", "weight": 1, "prompt": tema},
        {"t": "lines", "n": 2, "title": "Ce trebuie să conțină", "weight": 1,
         "prompt": [f"• {c}" for c in cerinte]},
        {"t": "lines", "n": 3, "title": "Calendar", "weight": 1, "prompt": calendar},
        {"t": "table", "n": 4, "title": "Criterii de evaluare (punctaj orientativ)", "rows": len(criterii),
         "cols": ["Criteriu", "Punctaj"], "widths": [420, 90], "data": [[c, p] for c, p in criterii]},
        {"t": "lines", "n": 5, "title": "Împărțirea sarcinilor în grup", "weight": 3,
         "prompt": "Scrieți numele fiecărui membru al grupei și de ce răspunde."},
    ], sursa)


# ---------- Unitatea III ----------

def fisa_text_dincolo_clasificari(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul literar, dincolo de clasificări", subtitlu, [
        {"t": "table", "n": 1, "title": "Trăsături epice și lirice, în textul Angelei Baciu", "rows": 4, "row_h": 30,
         "cols": ["Citatul din text", "Trăsătură epică / lirică", "Ce arată"], "widths": [200, 140, 170]},
        {"t": "lines", "n": 2, "title": "Cele două planuri", "weight": 3,
         "prompt": "Textul are un plan al adultului-narator (persoana I) și unul al Fetiței cu codițe (persoana a III-a). Transcrie câte un pasaj pentru fiecare și spune ce relație crezi că e între ele."},
        {"t": "lines", "n": 3, "title": "Obiectele-cu-Suflet", "weight": 3,
         "prompt": "Alege un obiect din camera sau din casa ta care ar putea avea suflet. Descrie-l în 4-5 rânduri, cu o poveste care e doar a ta."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 98-100): Mulți autori contemporani scriu texte care depășesc granițele "
        "tipurilor tradiționale, combinând trăsături ale textului epic (narator, întâmplări, personaje, indici "
        "de timp și de spațiu) cu trăsături ale textului liric (subiectivitate, emoție, limbaj figurat, persoana "
        "I, mărci ale trăirii). Literatura se dovedește astfel un spațiu al creativității neîngrădite."))


def fisa_lumea_fictionala(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Lumea ficțională", subtitlu, [
        {"t": "lines", "n": 1, "title": "Semnale ale ficțiunii", "weight": 3,
         "prompt": "Ce aspecte din text îți arată că e vorba despre o lume inventată, nu despre lumea reală? Dă trei exemple."},
        {"t": "lines", "n": 2, "title": "Limbajul creează lumea", "weight": 3,
         "prompt": "Autoarea scrie unele cuvinte cu majusculă după alte reguli decât cele obișnuite (Obiectele-cu-Suflet). Cum contribuie această alegere la construirea Țării-Obiectelor-cu-Suflet?"},
        {"t": "lines", "n": 3, "title": "Pactul cu cititorul", "weight": 3,
         "prompt": "Ce înseamnă că, intrând într-o lume ficțională, cititorul „face un pact”? Ce comunică autoarea despre felul în care înțelege lumea, prin această poveste?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 101-102): Ficțiunea (din lat. fictio, „născocire”) e o reprezentare produsă de "
        "imaginație, cu invenția de evenimente și personaje imaginare. Ficțiunea literară e o lume inventată, "
        "construită cu ajutorul limbajului, mai apropiată sau mai îndepărtată de realitate. Cititorul face un "
        "pact: acceptă că nu va găsi o lume reală, ci una inventată, prin care autorul comunică ceva despre "
        "felul în care percepe lumea. Limbajul e cel care creează lumea: alegerea cuvintelor, îmbinarea lor, "
        "organizarea în paragrafe, așezarea în pagină, ortografia, punctuația."))


def fisa_structuri_textuale(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Combinarea structurilor textuale", subtitlu, [
        {"t": "table", "n": 1, "title": "Recunoaște structura", "rows": 5, "row_h": 28,
         "cols": ["Fragmentul (din text sau dintr-un text nonliterar)", "Narativă / descriptivă / dialogată / explicativă / argumentativă", "Întrebarea la care răspunde"],
         "widths": [200, 170, 140]},
        {"t": "lines", "n": 2, "title": "Ce câștigă textul din combinare", "weight": 3,
         "prompt": "Alege un pasaj în care se îmbină două structuri textuale. Ce aduce fiecare? Cum ar fi textul fără una dintre ele?"},
        {"t": "lines", "n": 3, "title": "Structura dominantă", "weight": 3,
         "prompt": "Care structură predomină în textul Angelei Baciu? Pe baza ei, cum ai numi sensul global al textului: mai degrabă o poveste, o descriere, o explicație sau o luare de poziție?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 103-104): Într-un text literar apar structuri textuale diverse, recunoscute după "
        "funcție: narative (întâmplări raportate la timp — cine? ce face? când?), descriptive (personaje, "
        "peisaje, obiecte în spațiu — cum arată? ce trăsături are?), dialogate (replicile personajelor — cine "
        "vorbește? despre ce?), explicative (explicații pentru a înțelege acțiuni sau elemente ale lumii "
        "ficționale — cum se explică?), argumentative (susținerea unui punct de vedere cu argumente și "
        "exemple — de ce?). Combinarea lor dă dinamism textului; structura dominantă indică sensul global."))


def fisa_text_discontinuu(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul discontinuu", subtitlu, [
        {"t": "table", "n": 1, "title": "Continuu, discontinuu sau mixt", "rows": 4, "row_h": 30,
         "cols": ["Documentul (hartă, tabel, diagramă, reclamă, orar…)", "Continuu / discontinuu / mixt", "Cum se citește"],
         "widths": [230, 130, 150]},
        {"t": "lines", "n": 2, "title": "Descifrează un text discontinuu", "weight": 4,
         "prompt": "Alege o hartă sau o diagramă. Ce informații cuprinde? Ce repere folosești ca să te orientezi? Notează trei date pe care le extragi din ea."},
        {"t": "lines", "n": 3, "title": "Rolul documentului", "weight": 3,
         "prompt": "Textul discontinuu ales descrie ceva, explică ceva sau ajută la orientare? Dă un exemplu de text discontinuu cu alt rol decât cel identificat."},
    ], sursa, reper_text=(
        "Reper (manual, p. 106): După format, textele pot fi continue (propoziții și paragrafe înșiruite — "
        "eseuri, rapoarte, romane), discontinue (informații neliniare — liste, tabele, hărți, diagrame, "
        "reclame, orare) sau mixte (combină cele două — reviste, pagini web). Textul discontinuu e un "
        "document vizual care nu e organizat în propoziții și paragrafe, deci lectura lui nu e liniară; ca să-l "
        "descifreze, cititorul trebuie să înțeleagă modul de organizare specific documentului."))


def fisa_argumentativ_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul argumentativ. Reperele", subtitlu, [
        {"t": "table", "n": 1, "title": "Părțile unei argumentări", "rows": 3, "row_h": 34,
         "cols": ["Partea", "Ce conține", "Conectori care o marchează"], "widths": [110, 230, 170],
         "data": [["Introducere", "teza sau opinia față de o teză dată", ""],
                  ["Cuprins", "argumente și contraargumente + exemple", ""],
                  ["Încheiere", "concluzia, relevanța argumentelor pentru teză", ""]]},
        {"t": "lines", "n": 2, "title": "Recunoaște conectorii", "weight": 3,
         "prompt": "Notează câte doi conectori pentru: exprimarea opiniei, introducerea unui argument, introducerea unui contraargument, introducerea unui exemplu, introducerea concluziei."},
        {"t": "lines", "n": 3, "title": "Ordonează o argumentare", "weight": 3,
         "prompt": "Alege o teză (de exemplu: „Ca să înțelegi lumea, trebuie să-ți folosești imaginația.”). Scrie, în ordine: opinia, un argument cu un exemplu, un contraargument, concluzia."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 110-111): Un text argumentativ, oral sau scris, are scopul de a convinge. "
        "Conține: 1. o introducere, care enunță teza (o opinie sau o judecată de valoare) sau exprimă o "
        "poziție față de o teză dată; 2. un cuprins, cu argumente și contraargumente (explicații sau justificări) "
        "și exemple care le ilustrează; 3. o încheiere, cu o concluzie succintă. Conectori: pentru opinie "
        "(consider că, părerea mea este că), argument (pentru că, deoarece), pro-contra (deși, totuși, pe de "
        "o parte), exemplu (de exemplu, de pildă), concluzie (așadar, în concluzie, prin urmare)."))


def fisa_argumentativ_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Construirea unei argumentări", subtitlu, [
        {"t": "lines", "n": 1, "title": "Teza și opinia", "weight": 2,
         "prompt": "Alege o teză din unitate. Scrie-ți opinia față de ea, cu o formulă de tipul „Consider că…”."},
        {"t": "lines", "n": 2, "title": "Argumente cu exemple", "weight": 4,
         "prompt": "Scrie două argumente, ierarhizate (în primul rând… în al doilea rând…), fiecare întărit cu un exemplu concret (dintr-un text, un film, o piesă muzicală sau din experiența ta)."},
        {"t": "lines", "n": 3, "title": "Un contraargument", "weight": 3,
         "prompt": "Formulează un contraargument și arată de ce, totuși, poziția ta rămâne în picioare."},
    ], [
        {"t": "table", "n": 4, "title": "Verificare", "rows": 4, "row_h": 26,
         "cols": ["Criteriu", "Da / Nu"], "widths": [400, 110],
         "data": [["Introducerea enunță clar opinia", ""],
                  ["Fiecare argument are cel puțin un exemplu", ""],
                  ["Conectorii de argument, exemplu și concluzie sunt folosiți corect", ""],
                  ["Concluzia arată relevanța argumentelor pentru teză", ""]]},
        {"t": "lines", "n": 5, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie argumentarea în formă finală, gata de prezentat oral, într-un minut, în fața clasei."},
    ], sursa)


def fisa_completiva_directa(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Completiva directă", subtitlu, [
        {"t": "table", "n": 1, "title": "Complement direct sau completivă directă", "rows": 4, "row_h": 30,
         "cols": ["Enunțul / fraza", "CD sau CD-ivă (propoziție)", "Elementul regent"], "widths": [230, 140, 140]},
        {"t": "lines", "n": 2, "title": "Elementele de relație", "weight": 3,
         "prompt": "Pentru trei fraze, spune prin ce e introdusă completiva directă: conjuncție (că, să, dacă, de), adverb relativ, pronume relativ (cu/fără „pe”), adjectiv pronominal relativ, pronume sau adjectiv pronominal nehotărât."},
        {"t": "lines", "n": 3, "title": "Corectează", "weight": 3,
         "prompt": "Corectează: „Vreau ca să mergem la film.” · „Cred căci merită atenție.” · „M-a întrebat că cine sunt eu.” · „Mi-a amintit că ce bine era în vacanță.”"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 118-119): Completiva directă este realizarea propozițională a complementului "
        "direct și răspunde la întrebările pe cine?, ce?. Regentul ei poate fi un verb, o locuțiune verbală sau "
        "o interjecție predicativă (Iată ce cadou am primit!). Se introduce prin conjuncții și locuțiuni "
        "conjuncționale subordonatoare (că, să, ca…să, dacă, de, cum că), adverbe relative (cum, unde, "
        "când, cât, încotro), pronume relative cu sau fără „pe” (care, cine, ce, câți, ceea ce), adjective "
        "pronominale relative, pronume și adjective pronominale nehotărâte. Stă de obicei după regentă, fără "
        "virgulă; antepusă și evidențiată, poate fi despărțită prin virgulă sau linie de pauză, dar nu obligatoriu."))


def fisa_completiva_indirecta(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Completiva indirectă", subtitlu, [
        {"t": "table", "n": 1, "title": "Expansiune: din complement indirect în completivă indirectă", "rows": 4, "row_h": 30,
         "cols": ["Complement indirect", "Completiva indirectă (rescrisă ca propoziție)"], "widths": [230, 280],
         "data": [["I-am dat prietenului meu jurnalul.", ""], ["Bravo lui!", ""],
                  ["Profesorul le pune întrebări elevilor.", ""], ["A trimis mesaje tuturor.", ""]]},
        {"t": "lines", "n": 2, "title": "Regentul și elementul de relație", "weight": 3,
         "prompt": "Pentru trei fraze la alegere, spune ce parte de vorbire e regentul (verb, adjectiv, adverb, interjecție) și prin ce e introdusă completiva indirectă (pronume relativ în dativ, adjectiv pronominal relativ, pronume sau adjectiv pronominal nehotărât)."},
        {"t": "lines", "n": 3, "title": "Poziție și punctuație", "weight": 3,
         "prompt": "Unde stă, de obicei, completiva indirectă față de regentă? Când se desparte prin virgulă? Dă un exemplu propriu pentru fiecare situație."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 121-122): Completiva indirectă este realizarea propozițională a complementului "
        "indirect și răspunde la întrebarea cui?. Regentul poate fi un verb sau o locuțiune verbală, un "
        "adjectiv, un adverb sau o interjecție (Bravo cui a câștigat concursul!). Unele completive indirecte pot "
        "fi dublate în regentă prin clitic pronominal în dativ. Se introduce prin pronume relativ în dativ, "
        "adjective pronominale relative, pronume nehotărâte în dativ, adjective pronominale nehotărâte. Stă "
        "adesea după regentă, fără virgulă; antepusă, poate fi despărțită prin virgulă, dar nu obligatoriu."))


def fisa_completiva_prepozitionala(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Completiva prepozițională", subtitlu, [
        {"t": "table", "n": 1, "title": "Complement prepozițional sau completivă prepozițională", "rows": 4, "row_h": 30,
         "cols": ["Enunțul / fraza", "CP sau CP-ivă (propoziție)", "Întrebarea (de ce? despre ce? la ce?…)"],
         "widths": [230, 130, 150]},
        {"t": "lines", "n": 2, "title": "Regentul", "weight": 3,
         "prompt": "Pentru trei fraze, spune ce parte de vorbire e regentul: verb, locuțiune verbală, adjectiv, adverb, interjecție. Dă câte un exemplu."},
        {"t": "lines", "n": 3, "title": "Elementele de relație", "weight": 3,
         "prompt": "Notează câte un exemplu de completivă prepozițională introdusă prin: conjuncție (că, să, dacă, ca…să), locuțiune conjuncțională (ca nu cumva să), pronume relativ, pronume nehotărât, adverb relativ."},
        {"t": "lines", "n": 4, "title": "Punctuație", "weight": 2,
         "prompt": "Când se desparte prin virgulă completiva prepozițională antepusă? Scrie un exemplu în care e reluată prin pronume demonstrativ."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 124-125): Completiva prepozițională este realizarea propozițională a "
        "complementului prepozițional și răspunde la întrebările de cine?, de ce?, despre ce?, la ce?, cu "
        "cine? etc. Regentul poate fi un verb (cu categoria modului sau la o formă nepersonală), o locuțiune "
        "verbală, un adjectiv, un adverb sau o interjecție (Halal de cine a crezut-o!). Se introduce prin "
        "conjuncții subordonatoare (că, să, dacă, ca…să), locuțiuni conjuncționale (ca nu cumva să), "
        "pronume și adjective pronominale relative sau nehotărâte, adverbe relative. Stă de obicei după "
        "regentă, fără virgulă; antepusă și reluată prin pronume demonstrativ sau personal, se desparte prin virgulă."))


def fisa_comparatie_analogie_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Comparație și analogie", subtitlu, [
        {"t": "table", "n": 1, "title": "Comparație pe criterii", "rows": 4, "row_h": 30,
         "cols": ["Criteriul", "Elementul A", "Elementul B"], "widths": [150, 180, 180],
         "prompt": "Alege două elemente (obiecte, personaje, texte, imagini) și compară-le pe patru criterii."},
        {"t": "lines", "n": 2, "title": "Mijloace ale comparației", "weight": 3,
         "prompt": "Scrie trei enunțuri despre cele două elemente, folosind: gradul comparativ de egalitate (la fel de… ca), de superioritate (mai…), superlativul relativ (cel mai…)."},
        {"t": "lines", "n": 3, "title": "Analogia", "weight": 3,
         "prompt": "Propune câte o analogie pentru: copilărie, frumusețe, imaginație. Explică pe ce asemănare parțială se bazează fiecare."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 126-127): Compararea a două sau mai multe elemente evidențiază asemănările "
        "și deosebirile, pe criterii relevante, folosind mijloace ale gradelor de comparație: comparativ de "
        "egalitate (tot atât de…, la fel de…), de inegalitate (mai…; mai puțin…), superlativ relativ (cel/cea "
        "mai…). Analogia se bazează pe compararea unor noțiuni, situații sau fenomene între care există o "
        "asemănare parțială; e folosită des pentru a explica noțiuni abstracte prin asocierea lor cu elemente "
        "concrete și familiare."))


def fisa_comparatie_analogie_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Un text cu comparație și analogie", subtitlu, [
        {"t": "lines", "n": 1, "title": "Criteriile", "weight": 2,
         "prompt": "Alege două imagini, două texte sau două personaje. Stabilește patru criterii după care le poți pune în paralel."},
        {"t": "lines", "n": 2, "title": "Ciorna", "weight": 5,
         "prompt": "Scrie un text (10-15 rânduri) în care compari cele două elemente pe criteriile alese și inserezi câte o analogie potrivită pentru fiecare."},
    ], [
        {"t": "table", "n": 3, "title": "Verificare", "rows": 4, "row_h": 26,
         "cols": ["Criteriu", "Da / Nu"], "widths": [400, 110],
         "data": [["Textul evidențiază aspectele comune și pe cele diferite", ""],
                  ["Conține câte o analogie pentru fiecare element", ""],
                  ["Textul e coerent și clar structurat", ""],
                  ["Exprimarea e nuanțată și corectă (grade de comparație folosite corect)", ""]]},
        {"t": "lines", "n": 4, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie textul în formă finală, cu așezarea în pagină corectă și fără greșeli."},
    ], sursa)


def fisa_proiect_grila(out, subtitlu, nume, criterii, sursa):
    sheet(out, f"Grilă de evaluare — {nume}", subtitlu, [
        {"t": "table", "n": 1, "title": "Grila", "rows": len(criterii),
         "cols": ["Criteriu", "Punctaj maxim", "Obținut"], "widths": [300, 110, 100],
         "data": [[c, p, ""] for c, p in criterii]},
        {"t": "lines", "n": 2, "title": "Ce a mers bine", "weight": 3,
         "prompt": "Notează două lucruri reușite în proiectul grupului vostru."},
        {"t": "lines", "n": 3, "title": "Ce am schimba", "weight": 3,
         "prompt": "Dacă ați relua proiectul, ce ați face altfel? De ce?"},
        {"t": "lines", "n": 4, "title": "Nota pe care ne-o dăm și de ce", "weight": 3,
         "prompt": "Autoevaluare: ce notă credeți că merită proiectul și cum o justificați?"},
    ], sursa)


# ---------- Unitatea IV ----------

def fisa_epic_structuri(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul epic. Structuri textuale. Inserția", subtitlu, [
        {"t": "table", "n": 1, "title": "Cele două planuri narative din Iapa lui Vodă", "rows": 3, "row_h": 32,
         "cols": ["Aspect", "Rama (povestirea-cadru)", "Povestea comisului Ioniță"], "widths": [120, 195, 195],
         "data": [["Cine povestește", "", ""], ["Când se petrece", "", ""], ["Unde se petrece", "", ""]]},
        {"t": "lines", "n": 2, "title": "Inserția", "weight": 3,
         "prompt": "Ce secvență asigură trecerea de la rama povestirii la povestea comisului Ioniță? Transcrie-o. De ce e nevoie de o legătură firească între cele două fire?"},
        {"t": "lines", "n": 3, "title": "Structuri textuale în dialog", "weight": 3,
         "prompt": "Alege din dialogul răzeșului cu boierul o secvență explicativă și una argumentativă. Ce temă are fiecare?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 136-137): În textul epic, întâmplările pot fi organizate pe mai multe planuri "
        "narative, legate prin înlănțuire, alternanță sau inserție. Inserția e procedeul de includere a unei "
        "povești în interiorul alteia; numită și povestire în ramă, apare în O mie și una de nopți, "
        "Decameronul, Povestirile din Canterbury, iar în literatura română în Hanu Ancuței de Mihail "
        "Sadoveanu, unde nouă povestitori narează, la un han, istorii personale. Inserția cere legături "
        "între planuri, astfel încât un fir narativ să îl genereze pe celălalt firesc."))


def fisa_naratori_antiteza(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Naratorii și personajele. Antiteza", subtitlu, [
        {"t": "table", "n": 1, "title": "Cei doi naratori", "rows": 3, "row_h": 32,
         "cols": ["Aspect", "Naratorul din ramă", "Comisul Ioniță (naratorul poveștii inserate)"],
         "widths": [130, 175, 205],
         "data": [["Persoana verbului", "", ""], ["Participă la acțiune?", "", ""], ["Ce rol are", "", ""]]},
        {"t": "lines", "n": 2, "title": "Schimbarea rolului narator–personaj", "weight": 3,
         "prompt": "Explică pe scurt cum, în povestirea în ramă, naratorul din cadru devine ascultător, iar un personaj devine narator. De ce e esențial statutul de ascultător pentru convenția poveștii în poveste?"},
        {"t": "lines", "n": 3, "title": "Antiteza", "weight": 4,
         "prompt": "Găsește în text o antiteză: la nivel de enunț (verbe sau însușiri opuse) și la nivelul întregii povestiri (valorile familiei comisului față de cele ale vecinilor, sau vremea de război față de întâlnirea de la han). Ce subliniază opoziția?"},
    ], sursa, reper_text=(
        "Reper (manual, pp. 138-139): Povestirea în ramă presupune schimbarea rolului narator–personaj: "
        "naratorul din cadru devine ascultător, iar un personaj devine narator, rămânând uneori și personaj "
        "în propria narațiune. Ascultătorii devin parte a unui ritual al comunicării. Antiteza e figura de stil "
        "care alătură doi termeni (idei, obiecte, personaje, situații, planuri narative) ca să sublinieze "
        "opoziția dintre ei; se poate constitui la nivelul unor enunțuri (alb–negru, sus–jos) sau la nivelul "
        "întregii opere (planuri narative opuse, personaje în opoziție)."))


def fisa_reclama(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul multimodal. Reclama", subtitlu, [
        {"t": "table", "n": 1, "title": "Cei patru „actori” ai unei reclame", "rows": 4, "row_h": 28,
         "cols": ["Actorul", "Cine e, în reclama analizată"], "widths": [230, 280],
         "data": [["Cel care deține produsul (firmă, instituție)", ""],
                  ["Cel care produce reclama (agenție de publicitate)", ""],
                  ["Cel care distribuie produsul (mass-media)", ""],
                  ["Cel care cumpără produsul (consumatorul)", ""]]},
        {"t": "lines", "n": 2, "title": "Principiile unei reclame reușite", "weight": 3,
         "prompt": "Analizează o reclamă la alegere după: atenția, înțelegerea, încrederea, marca, acțiunea, efectul. Care principii sunt respectate și care nu?"},
        {"t": "lines", "n": 3, "title": "Multimodalitatea", "weight": 3,
         "prompt": "Ce modalități de comunicare combină reclama (cuvinte, imagini, sunete, culori, lumini)? Cum contribuie fiecare la mesaj?"},
        {"t": "lines", "n": 4, "title": "Scrii tu un slogan", "weight": 2,
         "prompt": "Propune un slogan pentru un produs pe care îl preferi (rechizite, jocuri, haine, produse de igienă). Explică ce nevoie a publicului vizează."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 142-143): Textul multimodal combină două sau mai multe modalități de "
        "comunicare: cuvinte, imagini, sunete, gesturi, lumini, culori. Reclama e un text nonliterar, de obicei "
        "multimodal, prezent în locuri publice, în mass-media sau pe internet, care răspândește informații ce "
        "pun un produs într-o lumină pozitivă. Presupune patru „actori”: cel care deține produsul, cel care "
        "produce reclama, cel care o distribuie, cel care cumpără. O reclamă reușită respectă principiile: "
        "atenția, înțelegerea, încrederea, marca, acțiunea, efectul, și respectă drepturile de autor."))


def fisa_pro_contra_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Tipare textuale: pro-contra", subtitlu, [
        {"t": "table", "n": 1, "title": "Argumente pro și contra", "rows": 4, "row_h": 30,
         "cols": ["Argument pro (+ un exemplu)", "Contraargument corespunzător (+ un exemplu)"],
         "widths": [255, 255],
         "prompt": "Alege o temă (de exemplu: „Ar trebui să existe reclame dedicate copiilor.”) și completează patru perechi."},
        {"t": "lines", "n": 2, "title": "Conectorii opoziției", "weight": 3,
         "prompt": "Notează cinci conectori care marchează trecerea de la un argument la un contraargument (dar, totuși, dimpotrivă, în schimb, pe de altă parte…). Scrie câte un enunț cu doi dintre ei."},
        {"t": "lines", "n": 3, "title": "Poziția autorului", "weight": 3,
         "prompt": "Într-un text cu argumente pro și contra, autorul se poate situa de partea unora. Alege o poziție față de tema ta și spune ce serie de argumente o susține."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 158-159): Orice temă poate fi abordată din perspective opuse. În textul "
        "argumentativ, teza poate fi susținută prin argumente pro (în acord cu ea) sau combătută prin "
        "contraargumente (în dezacord). În același text pot apărea și argumente pro, și contra, iar autorul se "
        "poate situa de partea unora. Atât argumentele pro, cât și cele contra trebuie însoțite de exemple. "
        "Trecerea de la un argument la un contraargument se face cu conectori: dar, or, dimpotrivă, totuși, cu "
        "toate acestea, în schimb, din contră, în timp ce, pe de altă parte."))


def fisa_pro_contra_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Un text pro-contra", subtitlu, [
        {"t": "lines", "n": 1, "title": "Planul textului", "weight": 3,
         "prompt": "Alege tema. Notează: opinia din introducere; două argumente pro cu exemple, fiecare cu contraargumentul lui și un exemplu; concluzia care îți reafirmă poziția, anulând contraargumentele."},
        {"t": "lines", "n": 2, "title": "Ciorna", "weight": 5,
         "prompt": "Scrie prima variantă a textului (50-100 de cuvinte), cu introducere, cuprins și încheiere, folosind conectorii opoziției."},
    ], [
        {"t": "table", "n": 3, "title": "Verificare", "rows": 5, "row_h": 26,
         "cols": ["Criteriu", "Da / Nu"], "widths": [400, 110],
         "data": [["Opinia e formulată clar în introducere", ""],
                  ["Fiecare argument pro are un exemplu", ""],
                  ["Fiecare contraargument e în relație logică cu argumentul pro și are un exemplu", ""],
                  ["Conectorii de trecere pro–contra sunt folosiți corect", ""],
                  ["Încheierea susține poziția din introducere, anulând contraargumentele", ""]]},
        {"t": "lines", "n": 4, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie textul în formă finală, corectând ortografia și punctuația, gata de citit din scaunul autorului."},
    ], sursa)


# ---------- Unitatea V ----------

def fisa_structuri_epice(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Structuri textuale în textul epic", subtitlu, [
        {"t": "table", "n": 1, "title": "Recunoaște îmbinarea", "rows": 4, "row_h": 30,
         "cols": ["Fragmentul din Fahrenheit 451", "Structurile prezente", "Succesiune / alternanță / inserție"],
         "widths": [230, 150, 130]},
        {"t": "lines", "n": 2, "title": "Structura dominantă", "weight": 3,
         "prompt": "Alege un paragraf. Ce structură textuală domină (narativă, descriptivă, dialogată, explicativă, argumentativă)? Ce alte structuri sunt inserate în ea și cu ce rol?"},
        {"t": "lines", "n": 3, "title": "Scrii tu", "weight": 4,
         "prompt": "Prezintă o carte pe care ai salva-o dintr-un incendiu, folosind trei structuri textuale diferite: o descriere a cărții, o narațiune despre cum ai primit-o, o explicație despre de ce contează pentru tine."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 172-173): Textul epic are o structură complexă, în care se repere secvențele "
        "textuale de bază: narativă, descriptivă, dialogată, explicativă și argumentativă. Structurile "
        "dominante pot conține alte structuri, îmbinate: prin succesiune (o structură urmează alteia), prin "
        "alternanță (structuri în grupaje care se repetă rând pe rând), prin inserție (o structură apare în "
        "interiorul alteia)."))


def fisa_personaje_conflict(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Personajele. Conflictul", subtitlu, [
        {"t": "table", "n": 1, "title": "Felul personajelor din Fahrenheit 451", "rows": 4, "row_h": 28,
         "cols": ["Personajul", "Principal / secundar; protagonist / antagonist; individual / colectiv", "Evoluează sau rămâne neschimbat?"],
         "widths": [110, 250, 150]},
        {"t": "lines", "n": 2, "title": "Perechi antitetice", "weight": 3,
         "prompt": "Autorul își construiește personajele în perechi antitetice. Identifică o pereche (de exemplu Montag și Beatty, sau Clarisse și Mildred) și explică în ce constă antiteza."},
        {"t": "table", "n": 3, "title": "Tipuri de conflict", "rows": 3, "row_h": 30,
         "cols": ["Tipul de conflict", "Unde apare în roman (o secvență)"], "widths": [230, 280],
         "data": [["om – societate", ""], ["om – tehnologie", ""], ["om – sine însuși", ""]]},
    ], sursa, reper_text=(
        "Reper (manual, pp. 174-175): În operele epice există conflict exterior și interior. Conflictul poate fi: "
        "om – altă persoană (ciocnire de interese sau de valori), om – societate (personajul încalcă normele "
        "comunității), om – natură (înfruntă forțele naturii sau provoacă dezastre), om – tehnologie "
        "(confruntarea cu inteligența artificială, roboți, nave spațiale), om – sine însuși (porniri și atitudini "
        "contradictorii, propriile limite), om – soartă sau forțe supranaturale."))


def fisa_text_opinie(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Textul de opinie", subtitlu, [
        {"t": "lines", "n": 1, "title": "Opinia autorului", "weight": 3,
         "prompt": "Care este teza textului lui Harari? Transcrie enunțul în care opinia autorului se vede limpede. Ce argumente raționale și ce argumente emoționale folosește?"},
        {"t": "table", "n": 2, "title": "Strategii și conectori", "rows": 5, "row_h": 28,
         "cols": ["Formularea din text", "Ce exprimă (obiecție, concesie, analogie, concluzie, exemplificare…)"],
         "widths": [200, 310],
         "data": [["„ai putea obiecta că”", ""], ["„în mod asemănător”", ""], ["„totuși”", ""],
                  ["„de exemplu”", ""], ["„iată de ce”", ""]]},
        {"t": "lines", "n": 3, "title": "Scrii tu", "weight": 4,
         "prompt": "Scrie un scurt text de opinie (6-8 rânduri) pe tema: ar trebui folosită inteligența artificială în școală? Susține-ți poziția cu un argument rațional și unul emoțional și folosește măcar doi conectori."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 178-180): Textul de opinie e un text nonliterar în care autorul își expune "
        "opiniile legate de o temă, ca să convingă cititorii. Presupune: susținerea opiniei cu argumente "
        "raționale (fapte, dovezi, exemple, deducții) și emoționale (impresii, convingeri); strategii ca "
        "obiecția, concesia, analogia, examenul critic, confruntarea; conectori pentru ierarhia argumentelor "
        "și pentru legătura dintre idei (adaos, analogie, concesie, concluzie, exemplificare, explicație, "
        "obiecție, opoziție, rectificare). Predomină structurile argumentative și explicative, cu secvențe de "
        "dialog fictiv, narative sau descriptive cu rol de exemplificare."))


def fisa_preferinte_opinii_1(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Modalități de exprimare a preferințelor și a opiniilor", subtitlu, [
        {"t": "table", "n": 1, "title": "Ce valoare exprimă", "rows": 6, "row_h": 26,
         "cols": ["Enunțul", "Certitudine / incertitudine / probabilitate / necesitate / dorință / apreciere"],
         "widths": [230, 280],
         "data": [["Am convingerea că viitorul va fi mai bun.", ""],
                  ["Mă îndoiesc că se va întâmpla cum ai spus.", ""],
                  ["S-ar putea să plouă mâine.", ""],
                  ["Este nevoie să ne mobilizăm pentru acest proiect.", ""],
                  ["Mi-e dor de vacanță!", ""],
                  ["Din nefericire, devenim cu greu înțelepți.", ""]]},
        {"t": "lines", "n": 2, "title": "Cuvintele-cheie", "weight": 3,
         "prompt": "Pentru fiecare enunț, subliniază cuvântul sau expresia care ți-a arătat ce valoare exprimă."},
        {"t": "lines", "n": 3, "title": "Scrii tu", "weight": 3,
         "prompt": "Scrie câte un enunț propriu care exprimă: certitudine, incertitudine, apreciere pozitivă, apreciere negativă."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 198-199): În exprimarea preferințelor și a opiniilor, un rol important îl au "
        "cuvintele și expresiile care redau atitudinea subiectivă a vorbitorului: verbe de opinie, adverbe, "
        "adjective, locuțiuni și expresii. Ele pot exprima: certitudinea (știu că, am convingerea că, e "
        "limpede că; firește, în mod evident), incertitudinea (bănuiesc că, presupun că, mă îndoiesc că; "
        "oarecum), probabilitatea (s-ar putea să, nu e exclus să; poate, probabil, pesemne), necesitatea "
        "(trebuie să, se cuvine să, e nevoie să; neapărat), dorința (doresc să, vreau să), aprecierea pozitivă "
        "(apreciez, merit să, sunt bucuros că; e bine, util) și aprecierea negativă (detest să, îmi pare rău, "
        "regret că; din păcate, din nefericire)."))


def fisa_preferinte_opinii_2(out, subtitlu, sursa):
    sheet2(out, "Fișă de lucru — Un text de opinie", subtitlu, [
        {"t": "lines", "n": 1, "title": "Întrebarea și opinia", "weight": 2,
         "prompt": "Pornind de la titlul unității, „Încotro se îndreaptă lumea?”, formulează-ți opinia, cu o formulă de exprimare a punctului de vedere."},
        {"t": "lines", "n": 2, "title": "Ciorna", "weight": 5,
         "prompt": "Scrie prima variantă a textului de opinie (aproximativ 200 de cuvinte), cu introducere, cuprins și încheiere marcate prin paragrafe. Susține opinia prin două argumente, fiecare cu un exemplu."},
    ], [
        {"t": "table", "n": 3, "title": "Verificare", "rows": 4, "row_h": 26,
         "cols": ["Criteriu", "Da / Nu"], "widths": [400, 110],
         "data": [["Opinia e formulată limpede în introducere", ""],
                  ["Cele două argumente sunt susținute de exemple", ""],
                  ["Sunt folosite mijloace lingvistice de exprimare a opiniei (verbe de opinie, adverbe, expresii)", ""],
                  ["Textul are introducere, cuprins și încheiere marcate prin paragrafe", ""]]},
        {"t": "lines", "n": 4, "title": "Forma finală", "weight": 6,
         "prompt": "Rescrie textul de opinie în formă finală, corectând ortografia, punctuația și așezarea în pagină."},
    ], sursa)


if __name__ == "__main__":
    # ---------- Unitatea I ----------
    fisa_versificatie("unitatea-1/lectia-2/fisa.pdf",
                      "Unitatea I, Lecția 2 · O, rămâi... de Mihai Eminescu", "Art 8, p. 11")
    fisa_figuri_stil("unitatea-1/lectia-3/fisa.pdf",
                     "Unitatea I, Lecția 3 · O, rămâi... de Mihai Eminescu", "Art 8, p. 12")
    fisa_semnificatii("unitatea-1/lectia-4/fisa.pdf",
                      "Unitatea I, Lecția 4 · O, rămâi... de Mihai Eminescu",
                      "Ce reprezintă pădurea pentru copil: putere, vechime, protecție, altceva?",
                      "Art 8, p. 13")
    fisa_hiperbola("unitatea-1/lectia-6/fisa.pdf",
                   "Unitatea I, Lecția 6 · Izvorul nopții de Lucian Blaga", "Art 8, p. 16")
    fisa_semnificatii("unitatea-1/lectia-7/fisa.pdf",
                      "Unitatea I, Lecția 7 · Izvorul nopții de Lucian Blaga",
                      "Este iubirea ceva ce poate fi complet înțeles sau un mister imposibil de descifrat?",
                      "Art 8, p. 17")
    fisa_semnificatii("unitatea-1/lectia-9/fisa.pdf",
                      "Unitatea I, Lecția 9 · Lecția de citire de Nichita Stănescu",
                      "Lumea poeziei e o copie a realului sau o recompunere a lui din ceea ce contează pentru artist?",
                      "Art 8, p. 20")
    fisa_comparare_texte("unitatea-1/lectia-10/fisa.pdf",
                         "Unitatea I, Lecția 10 · O, rămâi... / Izvorul nopții / Lecția de citire", "Art 8, p. 21")
    fisa_text_auxiliar("unitatea-1/lectia-11/fisa.pdf", "Unitatea I, Lecția 11",
                       "O pasăre înaltă de Dan Coman",
                       "textele de bază ale unității (O, rămâi..., Izvorul nopții, Lecția de citire)",
                       "Art 8, „Noi pagini, alte idei”, pp. 22-23")
    fisa_coerenta_anafora("unitatea-1/lectia-20/fisa.pdf",
                          "Unitatea I, Lecția 20", "Art 8, pp. 42-43")
    fisa_feedback_1("unitatea-1/lectia-21/fisa.pdf",
                    "Unitatea I, Lecția 21 (manual, partea 1/2)", "Art 8, pp. 44-45")
    fisa_feedback_2("unitatea-1/lectia-22/fisa.pdf",
                    "Unitatea I, Lecția 22 (manual, partea 2/2)", "Art 8, pp. 44-45")
    fisa_elemente_grafice("unitatea-1/lectia-23/fisa.pdf",
                          "Unitatea I, Lecția 23", "Art 8, pp. 46-47")

    # ---------- Unitatea II ----------
    fisa_text_dramatic("unitatea-2/lectia-2/fisa.pdf",
                       "Unitatea II, Lecția 2 · Take, Ianke și Cadâr de Victor Ion Popa", "Art 8, pp. 58-59")
    fisa_timp_spatiu_dramatic("unitatea-2/lectia-3/fisa.pdf",
                              "Unitatea II, Lecția 3 · Take, Ianke și Cadâr de Victor Ion Popa", "Art 8, pp. 60-61")
    fisa_semnificatii("unitatea-2/lectia-4/fisa.pdf",
                      "Unitatea II, Lecția 4 · Take, Ianke și Cadâr de Victor Ion Popa",
                      "În ciuda diferențelor etnice și religioase, ce îi apropie pe Take, Ianke și Cadâr?",
                      "Art 8, pp. 63-64")
    fisa_cronica_spectacol("unitatea-2/lectia-5/fisa.pdf",
                           "Unitatea II, Lecția 5 · Omenescul personajelor de Ștefan Popa", "Art 8, pp. 65-67")
    fisa_text_auxiliar("unitatea-2/lectia-6/fisa.pdf", "Unitatea II, Lecția 6",
                       "Nathan Înțeleptul de Gotthold Ephraim Lessing (fragment)",
                       "textul de bază al unității (Take, Ianke și Cadâr de Victor Ion Popa)",
                       "Art 8, „Noi pagini, alte idei”, pp. 68-69")
    fisa_subordonarea("unitatea-2/lectia-16/fisa.pdf",
                      "Unitatea II, Lecția 16", "Art 8, pp. 88-89")
    fisa_enunturi_eliptice("unitatea-2/lectia-17/fisa.pdf",
                           "Unitatea II, Lecția 17", "Art 8, pp. 90-91")
    fisa_cronica_film_1("unitatea-2/lectia-18/fisa.pdf",
                        "Unitatea II, Lecția 18 (manual, partea 1/2)", "Art 8, pp. 92-93")
    fisa_cronica_film_2("unitatea-2/lectia-19/fisa.pdf",
                        "Unitatea II, Lecția 19 (manual, partea 2/2)", "Art 8, pp. 92-93")

    # ---------- Unitatea III ----------
    fisa_text_dincolo_clasificari("unitatea-3/lectia-1/fisa.pdf",
                                  "Unitatea III, Lecția 1 · În Țara-Obiectelor-cu-Suflet de Angela Baciu", "Art 8, pp. 98-100")
    fisa_lumea_fictionala("unitatea-3/lectia-2/fisa.pdf",
                          "Unitatea III, Lecția 2 · În Țara-Obiectelor-cu-Suflet de Angela Baciu", "Art 8, pp. 101-102")
    fisa_structuri_textuale("unitatea-3/lectia-3/fisa.pdf",
                            "Unitatea III, Lecția 3 · În Țara-Obiectelor-cu-Suflet de Angela Baciu", "Art 8, pp. 103-104")
    fisa_semnificatii("unitatea-3/lectia-4/fisa.pdf",
                      "Unitatea III, Lecția 4 · În Țara-Obiectelor-cu-Suflet de Angela Baciu",
                      "Textul e o pledoarie pentru a privi „altfel” lumea sau vorbește despre autocunoaștere? Care interpretare ți se apropie?",
                      "Art 8, p. 105")
    fisa_text_discontinuu("unitatea-3/lectia-5/fisa.pdf",
                          "Unitatea III, Lecția 5", "Art 8, p. 106")
    fisa_text_auxiliar("unitatea-3/lectia-6/fisa.pdf", "Unitatea III, Lecția 6",
                       "Pescărușul Jonathan Livingston de Richard Bach (fragment)",
                       "textul de bază al unității (În Țara-Obiectelor-cu-Suflet de Angela Baciu)",
                       "Art 8, „Noi pagini, alte idei”, pp. 107-108")
    fisa_proiect_cerinte(
        "unitatea-3/lectia-8/fisa.pdf", "Unitatea III, Lecția 8 · Proiect de grup",
        "Limbi inventate",
        "În grupe de 3-4 elevi, alegeți o limbă inventată (auxiliară, fictivă, experimentală, secretă sau ludică) și prezentați-o colegilor printr-o prezentare PowerPoint sau un produs media.",
        ["Categoria din care face parte limba aleasă și de ce a fost inventată",
         "Exemple relevante din cărți, filme sau documentare",
         "Cel puțin o regulă de formare sau de pronunție a limbii",
         "Sursele consultate, citate corect",
         "Rolul fiecărui membru al echipei"],
        "Timp de realizare: o săptămână.",
        [("Materialul e bine structurat și ușor de înțeles", "3p"),
         ("Informațiile sunt relevante pentru limba aleasă", "3p"),
         ("Fiecare membru a contribuit la material și la prezentare", "2p"),
         ("Prezentarea e clară și dovedește creativitate", "2p")],
        "Art 8, Proiect de grup, p. 109")
    fisa_argumentativ_1("unitatea-3/lectia-9/fisa.pdf",
                        "Unitatea III, Lecția 9 (manual, partea 1/2)", "Art 8, pp. 110-111")
    fisa_argumentativ_2("unitatea-3/lectia-10/fisa.pdf",
                        "Unitatea III, Lecția 10 (manual, partea 2/2)", "Art 8, pp. 110-111")
    fisa_completiva_directa("unitatea-3/lectia-15/fisa.pdf",
                            "Unitatea III, Lecția 15", "Art 8, pp. 118-119")
    fisa_completiva_indirecta("unitatea-3/lectia-17/fisa.pdf",
                              "Unitatea III, Lecția 17", "Art 8, pp. 121-122")
    fisa_completiva_prepozitionala("unitatea-3/lectia-19/fisa.pdf",
                                   "Unitatea III, Lecția 19", "Art 8, pp. 124-125")
    fisa_comparatie_analogie_1("unitatea-3/lectia-20/fisa.pdf",
                               "Unitatea III, Lecția 20 (manual, partea 1/2)", "Art 8, pp. 126-127")
    fisa_comparatie_analogie_2("unitatea-3/lectia-21/fisa.pdf",
                               "Unitatea III, Lecția 21 (manual, partea 2/2)", "Art 8, p. 127")

    # ---------- Unitatea IV ----------
    reclama_criterii = [
        ("Reclama se referă la domeniul de conținut tras la sorți", "2p"),
        ("Reclama captează atenția și lasă o impresie memorabilă", "2p"),
        ("Mesajul-cheie e ușor de înțeles și convinge", "2p"),
        ("Marca produsului se reține ușor; e clar ce trebuie să facă beneficiarul", "2p"),
        ("Reclama e originală și respectă drepturile de autor", "1p"),
        ("Prezentarea activității echipei e succintă, clară, în timpul dat", "1p"),
    ]
    fisa_proiect_cerinte(
        "unitatea-4/lectia-1/fisa.pdf", "Unitatea IV, Lecția 1 · Proiect de grup",
        "Realizarea unei reclame",
        "În grupe de 5-7 elevi, concepeți o reclamă (afiș/panou, audio sau video) la un produs dintr-un domeniu tras la sorți: divertisment, cultural, geografic sau turistic.",
        ["Produsul ales și o analiză cu punctele lui forte și slabe",
         "Ce puncte intră în reclamă și care se evită",
         "Tipul de reclamă (afiș, audio, video) și rolul fiecărui membru",
         "Pentru audio/video: maximum 30 de secunde; aplicațiile folosite pentru afiș",
         "Respectarea drepturilor de autor"],
        "Timp de realizare: două săptămâni, cu prezentare de 2-3 minute la final.",
        reclama_criterii,
        "Art 8, Proiect de grup, p. 146 (anunțare)")
    fisa_epic_structuri("unitatea-4/lectia-3/fisa.pdf",
                        "Unitatea IV, Lecția 3 · Iapa lui Vodă de Mihail Sadoveanu", "Art 8, pp. 136-137")
    fisa_naratori_antiteza("unitatea-4/lectia-4/fisa.pdf",
                           "Unitatea IV, Lecția 4 · Iapa lui Vodă de Mihail Sadoveanu", "Art 8, pp. 138-139")
    fisa_semnificatii("unitatea-4/lectia-5/fisa.pdf",
                      "Unitatea IV, Lecția 5 · Iapa lui Vodă de Mihail Sadoveanu",
                      "Despre ce fel de adevăr e vorba în povestire: a respecta adevărul istoric, a face dreptate oamenilor sau a fi tu însuți în orice împrejurare?",
                      "Art 8, pp. 140-141")
    fisa_reclama("unitatea-4/lectia-6/fisa.pdf",
                 "Unitatea IV, Lecția 6", "Art 8, pp. 142-143")
    fisa_text_auxiliar("unitatea-4/lectia-7/fisa.pdf", "Unitatea IV, Lecția 7",
                       "Hainele cele noi ale împăratului de Hans Christian Andersen",
                       "textul de bază al unității (Iapa lui Vodă de Mihail Sadoveanu)",
                       "Art 8, „Noi pagini, alte idei”, pp. 144-145")
    fisa_proiect_grila("unitatea-4/lectia-8/fisa.pdf", "Unitatea IV, Lecția 8 · Proiect de grup (prezentare)",
                       "Realizarea unei reclame", reclama_criterii,
                       "Art 8, Proiect de grup, p. 146")
    fisa_pro_contra_1("unitatea-4/lectia-16/fisa.pdf",
                      "Unitatea IV, Lecția 16 (manual, partea 1/2)", "Art 8, pp. 158-159")
    fisa_pro_contra_2("unitatea-4/lectia-17/fisa.pdf",
                      "Unitatea IV, Lecția 17 (manual, partea 2/2)", "Art 8, pp. 158-159")

    # ---------- Unitatea V ----------
    fisa_structuri_epice("unitatea-5/lectia-3/fisa.pdf",
                         "Unitatea V, Lecția 3 · Fahrenheit 451 de Ray Bradbury", "Art 8, pp. 172-173")
    fisa_personaje_conflict("unitatea-5/lectia-4/fisa.pdf",
                            "Unitatea V, Lecția 4 · Fahrenheit 451 de Ray Bradbury", "Art 8, pp. 174-175")
    fisa_semnificatii("unitatea-5/lectia-5/fisa.pdf",
                      "Unitatea V, Lecția 5 · Fahrenheit 451 de Ray Bradbury",
                      "De ce crezi că guvernul a interzis cărțile în Fahrenheit 451? Ai fi de acord cu interzicerea unor cărți?",
                      "Art 8, pp. 176-177")
    fisa_text_opinie("unitatea-5/lectia-6/fisa.pdf",
                     "Unitatea V, Lecția 6 · Când vei fi adult, e posibil să nu ai un loc de muncă, după Yuval Noah Harari",
                     "Art 8, pp. 178-180")
    fisa_text_auxiliar("unitatea-5/lectia-7/fisa.pdf", "Unitatea V, Lecția 7",
                       "Prima lecție de geometrie de Ov. S. Crohmălniceanu (fragment)",
                       "textul de bază al unității (Fahrenheit 451 de Ray Bradbury)",
                       "Art 8, „Noi pagini, alte idei”, pp. 181-182")
    fisa_preferinte_opinii_1("unitatea-5/lectia-17/fisa.pdf",
                             "Unitatea V, Lecția 17 (manual, partea 1/2)", "Art 8, pp. 198-199")
    fisa_preferinte_opinii_2("unitatea-5/lectia-18/fisa.pdf",
                             "Unitatea V, Lecția 18 (manual, partea 2/2)", "Art 8, pp. 198-199")

    print("\nFise clasa a VIII-a: U1 (12) + U2 (9) + U3 (14) + U4 (9) + U5 (7) = 51")
