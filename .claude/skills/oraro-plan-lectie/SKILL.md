---
name: oraro-plan-lectie
description: "Draftuiește câmpul planLectie pentru o lecție din proiectul OraRO, documentul intern de plan de lecție folosit de prof. Antoanela Pohoață înainte de oră, cu etapele lecției, timpul alocat fiecărei etape, obiective și evaluare. Folosește acest skill ori de câte ori Antoanela cere un plan de lecție, un proiect de lecție, o desfășurare a orei, sau când integrezi o lecție nouă în OraRO și îți amintești că planLectie e obligatoriu pentru fiecare lecție. Diferit de fișele sau prezentările pentru elevi, planul de lecție e document intern, nu se publică niciodată pe site."
---

# Plan de lecție, OraRO

Draftuiești câmpul `planLectie` pentru o lecție din structura de date OraRO, definit în [CLAUDE.md](../../../CLAUDE.md). E document intern, parte din Zona Antoanelei, nu se publică niciodată pe site.

## Sursa

Pornești de la ghidul profesorului, planificarea sau proiectarea pe unități și obiectivele deja stabilite pentru lecție. Dacă există deja un document de plan de lecție printre sursele locale, de exemplu un fișier `Planuri_lectie.docx` în folderul unității, îl citești întâi și extragi structura reală de acolo, nu inventezi un format nou. Dacă nu există, construiești planul din obiectivele lecției și tipul ei de oră, în formatul de mai jos.

## Format fix

```
{
  titlu,          // Unitatea și titlul orei, ex: "Unitatea I — Ora 2"
  data,           // dacă e cunoscută din planificare
  tipOra,         // ex: lecție de predare, evaluare inițială, recapitulare, analiză și remediere
  durata,         // în minute, standard 50
  obiective: [],  // 2-4 obiective concrete, verificabile la finalul orei
  resurse: [],    // materiale folosite efectiv la oră
  desfasurare: [
    { etapa, timp, activitate },
    ...
  ],
  evaluare,       // cum se evaluează elevii la finalul orei
}
```

Etapele standard ale unei ore de 50 de minute, adaptate după tipul orei:

- Moment organizatoric, 2-5 minute, salut, prezență, verificarea materialelor.
- Captarea atenției, 5-10 minute, un element care leagă ora de ce știu deja elevii sau de tema unității.
- Etapa principală, restul timpului, diferă după tipul orei, poate fi predare și fixare, exercițiu dirijat, rezolvarea unui test, joc sau activitate de grup.
- Încheiere și feedback, 5 minute, ce reține elevul, anunțarea temei sau a orei următoare.

Timpul fiecărei etape trebuie să însumeze durata totală a orei.

## Reguli

- Obiectivele planului trebuie să corespundă cu `obiective` de la nivelul lecției, nu inventezi altele noi.
- Nu descrii activități care presupun materiale ce nu există încă în `materiale`, de exemplu un joc netestat sau o prezentare neaprobată.
- Rămâne draft până la aprobarea explicită a Antoanelei, la fel ca orice alt material.
- Dacă planul depinde de rezultate care nu există încă, de exemplu o oră de analiză a unui test administrat anterior, semnalezi asta explicit, nu presupui rezultate.
