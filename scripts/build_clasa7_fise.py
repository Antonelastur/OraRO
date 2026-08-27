# -*- coding: utf-8 -*-
"""Generează fișele de lucru restante pentru clasa a VII-a.

Materiale de sprijin originale: enunțuri proprii, conținut de bază (definiții,
trăsături de specie) doar în casete „Reper”, din Art 7 (Sâmihăian et al., Art
Klett), cu pagina notată în subsol.

Rulează din rădăcina proiectului:  python scripts/build_clasa7_fise.py
"""
import os
import sys

sys.path.insert(0, os.path.dirname(__file__))
from fisa_engine import sheet, sheet2, set_clasa

set_clasa("clasa-7")


def fisa_semnificatii(out, subtitlu, intrebare, sursa):
    sheet(out, "Fișă de lucru — Semnificațiile textului", subtitlu, [
        {"t": "lines", "n": 1, "title": "Prima impresie", "weight": 2,
         "prompt": "Ce ai simțit la prima lectură? Alege un cuvânt care numește o emoție și explică de ce."},
        {"t": "lines", "n": 2, "title": "Ideea centrală", "weight": 2,
         "prompt": "Formulează într-o propoziție ideea centrală a textului, așa cum ai înțeles-o tu."},
        {"t": "lines", "n": 3, "title": "Răspuns personal", "weight": 4,
         "prompt": [intrebare, "Scrie-ți poziția și susține-o cu două argumente și un citat scurt din text."]},
        {"t": "lines", "n": 4, "title": "Atitudinile personajelor", "weight": 3,
         "prompt": "Alege un personaj și explică atitudinea lui într-un moment-cheie. Ești de acord cu felul în care reacționează?"},
        {"t": "lines", "n": 5, "title": "Legătura cu tine", "weight": 3,
         "prompt": "Ai trăit sau ai văzut o situație asemănătoare? Povestește pe scurt."},
    ], sursa)


def fisa_text_auxiliar(out, subtitlu, titlu_text, texte_baza, sursa):
    sheet(out, f"Fișă de lucru — Text auxiliar: {titlu_text}", subtitlu, [
        {"t": "table", "n": 1, "title": "Jurnalul cu dublă intrare", "rows": 5,
         "cols": ["Fragment care mi-a atras atenția", "Ce gândesc / ce simt despre el"], "widths": [255, 255]},
        {"t": "lines", "n": 2, "title": "Trăsăturile personajelor", "weight": 3,
         "prompt": "Ce trăsături ale personajelor se desprind din fragment? Susține fiecare trăsătură cu o faptă sau o replică."},
        {"t": "lines", "n": 3, "title": "Legături cu textul de bază", "weight": 3,
         "prompt": f"Ce asemănări și ce deosebiri găsești între acest fragment și {texte_baza}?"},
        {"t": "lines", "n": 4, "title": "Sugestie de lectură", "weight": 2,
         "prompt": "Recomandă textul unui coleg, în 2-3 rânduri: de ce merită citit?"},
    ], sursa)


def fisa_legarea_secventelor(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Legarea secvențelor narative", subtitlu, [
        {"t": "table", "n": 1, "title": "Înlănțuire sau alternanță", "rows": 4, "row_h": 34,
         "cols": ["Secvența din text", "Cum e legată de precedenta", "Cuvântul sau formula care o leagă"],
         "widths": [190, 170, 170],
         "prompt": "Ia un text narativ citit la clasă și completează pentru patru treceri dintre secvențe."},
        {"t": "lines", "n": 2, "title": "Recunoaște procedeul", "weight": 3,
         "prompt": "Într-un text la alegere, găsește un pasaj de înlănțuire și unul de alternanță. Transcrie prima propoziție a fiecăruia."},
        {"t": "lines", "n": 3, "title": "Scrii tu", "weight": 4,
         "prompt": "Scrie un scurt fragment narativ (6-8 rânduri) în care două fire de acțiune se desfășoară în paralel. Marchează trecerile cu formule de alternanță."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 14-15): Înlănțuirea leagă secvențele aceluiași fir narativ în ordine cronologică, "
        "prin alăturare sau prin cuvinte ca apoi, când, după aceea, în cele din urmă. Alternanța prezintă două "
        "fire narative în paralel: naratorul întrerupe un fir pentru a-l continua pe celălalt, cu formule ca "
        "în acest timp, în același timp, pe când se întâmplau acestea."))


def fisa_narator_enumeratie(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Naratorul, personajele, autorul. Enumerația", subtitlu, [
        {"t": "table", "n": 1, "title": "Autor sau narator", "rows": 3, "row_h": 32,
         "cols": ["Afirmația", "Se referă la autor sau la narator?"], "widths": [340, 170],
         "data": [["Persoana reală care a scris textul.", ""],
                  ["Vocea care povestește întâmplările din text.", ""],
                  ["Poate fi un personaj din poveste.", ""]]},
        {"t": "lines", "n": 2, "title": "Statutul personajelor", "weight": 3,
         "prompt": "Notează, pentru două personaje, statutul lor (social, familial) și o trăsătură dominantă, cu o dovadă din text."},
        {"t": "lines", "n": 3, "title": "Enumerația", "weight": 3,
         "prompt": "Găsește în text o enumerație. Transcrie-o și explică ce efect are: accentuează abundența, ritmul, varietatea?"},
        {"t": "lines", "n": 4, "title": "Scrii tu", "weight": 3,
         "prompt": "Descrie un loc aglomerat folosind o enumerație de cel puțin patru termeni."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 16-17): Autorul este persoana reală care scrie textul; naratorul este vocea care "
        "relatează întâmplările și poate fi sau nu un personaj. Enumerația este o figură de stil care înșiră "
        "termeni de același fel, pentru a sublinia abundența, varietatea sau ritmul."))


def fisa_etapele_scrierii(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Etapele scrierii. Organizarea unui text", subtitlu, [
        {"t": "table", "n": 1, "title": "Cele cinci etape", "rows": 5, "row_h": 30,
         "cols": ["Etapa", "Ce fac la această etapă"], "widths": [150, 360],
         "data": [["1. Pregătirea", ""], ["2. Ciorna", ""], ["3. Revizuirea", ""],
                  ["4. Editarea", ""], ["5. Publicarea", ""]]},
        {"t": "lines", "n": 2, "title": "Situația de comunicare", "weight": 3,
         "prompt": "Alege ce vei scrie: o recenzie de carte, o prezentare de film sau una de blog. Notează pentru cine scrii, cu ce scop și pe ce canal."},
        {"t": "lines", "n": 3, "title": "Ciorna", "weight": 5,
         "prompt": "Scrie prima variantă a textului (minimum 10 rânduri): o scurtă recenzie sau prezentare, cu titlu și o apreciere clară."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 40-41): Redactarea are cinci etape: pregătirea, ciorna, revizuirea (claritate, "
        "logică, timpuri verbale, repetiții, pleonasme), editarea (titlu centrat, ortografie, punctuație, "
        "imagini) și publicarea. Recenzia este un text nonliterar care prezintă o operă cu aprecieri critice."))


def fisa_stil(out, subtitlu, sursa):
    sheet(out, "Fișă de lucru — Calitățile stilului", subtitlu, [
        {"t": "table", "n": 1, "title": "Recunoaște calitatea", "rows": 5, "row_h": 30,
         "cols": ["Calitatea stilului", "Un exemplu (din text sau propriu)"], "widths": [180, 330],
         "data": [["Naturalețea", ""], ["Armonia", ""], ["Varietatea", ""],
                  ["Concizia", ""], ["Originalitatea", ""]]},
        {"t": "lines", "n": 2, "title": "Rescrie pentru concizie", "weight": 3,
         "prompt": "Rescrie mai concis: „Din punctul meu de vedere personal, eu cred că este un lucru foarte bun și pozitiv.”"},
        {"t": "lines", "n": 3, "title": "Rescrie pentru varietate", "weight": 3,
         "prompt": "Rescrie evitând repetițiile: „Băiatul a luat cartea. Băiatul a deschis cartea. Băiatul a citit din carte.”"},
        {"t": "lines", "n": 4, "title": "Un scurt text propriu", "weight": 3,
         "prompt": "Scrie 4-5 rânduri despre un loc care îți place, ținând cont de naturalețe, armonie și originalitate."},
    ], sursa, reper_text=(
        "Reper (manual, pp. 42-43): Calitățile stilului sunt naturalețea (exprimare firească), armonia "
        "(sonoritate plăcută, fără cacofonii), varietatea (evitarea repetițiilor), concizia (spui mult în "
        "cuvinte puține) și originalitatea (o voce proprie). Ele completează proprietatea, puritatea și "
        "originalitatea învățate în clasa a VI-a."))


if __name__ == "__main__":
    fisa_legarea_secventelor("unitatea-1/lectia-2/fisa.pdf",
                             "Unitatea I, Lecția 2 · Cum e lumea de Veronica D. Niculescu", "Art 7, pp. 14-15")
    fisa_narator_enumeratie("unitatea-1/lectia-3/fisa.pdf",
                            "Unitatea I, Lecția 3 · Cum e lumea de Veronica D. Niculescu", "Art 7, pp. 16-17")
    fisa_semnificatii("unitatea-1/lectia-4/fisa.pdf",
                      "Unitatea I, Lecția 4 · Cum e lumea de Veronica D. Niculescu",
                      "Crezi că personajul principal se schimbă pe parcursul textului sau rămâne la fel?",
                      "Art 7, pp. 18-19")
    fisa_text_auxiliar("unitatea-1/lectia-6/fisa.pdf", "Unitatea I, Lecția 6",
                       "Amintiri din copilărie de Ion Creangă (fragment)",
                       "textul de bază al unității (Cum e lumea de Veronica D. Niculescu)",
                       "Art 7, „Noi pagini, alte idei”, pp. 22-23")
    fisa_etapele_scrierii("unitatea-1/lectia-18/fisa.pdf",
                          "Unitatea I, Lecția 18", "Art 7, pp. 40-41")
    fisa_stil("unitatea-1/lectia-19/fisa.pdf",
              "Unitatea I, Lecția 19", "Art 7, pp. 42-43")
    print("\nFise clasa a VII-a, Unitatea I: 6")
