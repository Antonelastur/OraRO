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

    print("\nFise clasa a VIII-a: U1 (12) + U2 (9) = 21")
