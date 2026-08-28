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

    print("\nFise clasa a VIII-a: U1 (12) = 12")
