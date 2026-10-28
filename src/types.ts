export type MaterialFisier = { fisier: string }
// fișa de lucru a lecției și/sau fișa de exerciții pentru clasă
export type MaterialFisa = { fisier?: string | null; exercitii?: string | null }
export type MaterialVideo = { link: string }
export type NivelTest = { nivel: string; linkGoogleForms: string }
export type MaterialTest = {
  linkGoogleForms?: string | null
  niveluri?: NivelTest[]
  rubrica?: string | null
  fisierPrintabil?: string | null
  // document privat (Google Drive), deschis doar de contul profesoarei
  linkDocument?: string | null
}
export type MaterialImagine = { fisier: string; titlu?: string | null }
export type MaterialJocFisier = { titlu: string; fisier: string }
export type JocVarianta = { text: string; corect: boolean; explicatie: string }
export type JocPas = { intrebare: string; variante: JocVarianta[]; indiciu: string | null; sursa: string }
export type MaterialJocQuiz = { tip: 'quiz' | 'escape-room'; titlu: string; pasi: JocPas[] }
export type MaterialJoc = MaterialJocFisier | MaterialJocQuiz

export type Materiale = {
  prezentare: MaterialFisier | null
  video: MaterialVideo | null
  test: MaterialTest | null
  fisa: MaterialFisa | null
  joc: MaterialJoc | null
  infografic: MaterialImagine | null
  schema: MaterialImagine | null
  altele: unknown[]
}

// `activitate` e vocea profesorului (instrucțiunile pentru ea). `elevi`, opțional,
// e textul adresat direct elevilor, singurul afișat pe tablă. Fără el, tabla arată
// doar titlul etapei și cronometrul.
// `joc`, opțional, e un joc interactiv de sortare, afișat pe tablă la etapa respectivă.
// `materiale`, opțional, spune ce materiale ale lecției se folosesc la etapa asta;
// tabla le arată la pasul respectiv. Fără el la nicio etapă, tabla le arată pe toate.
// Joc de sortare pe tablă: cuvintele se așază pe categorii (de exemplu culorile unui semafor).
// Înlocuiește jocurile cu bilețele decupate. Stă pe etapa în care se joacă, nu printre materiale.
export type JocSortare = {
  tip: 'sortare'
  titlu: string
  instructiune?: string
  categorii: { id: string; nume: string; descriere?: string; culoare: string }[]
  elemente: { text: string; categorie: string }[]
  sursa: string
}

export type MaterialElev = 'prezentare' | 'video' | 'fisa' | 'joc' | 'infografic' | 'schema'
export type EtapaLectie = { etapa: string; timp: string; activitate: string; elevi?: string; materiale?: MaterialElev[]; joc?: JocSortare }

export type PlanLectie = {
  titlu: string
  data: string | null
  tipOra: string
  durata: number
  obiective: string[]
  resurse: string[]
  desfasurare: EtapaLectie[]
  evaluare: string
} | null

export type Lectie = {
  id: string
  titlu: string
  obiective: string[]
  sursaManual: string
  rezolvareGhid: string | null
  planLectie: PlanLectie
  materiale: Materiale
}

export type Unitate = {
  id: string
  titlu: string
  lectii: Lectie[]
}

export type Clasa = {
  titlu: string
  unitati: Unitate[]
}

export type Clase = Record<string, Clasa>

export type LectieCuContext = {
  clasaId: string
  clasaTitlu: string
  unitateId: string
  unitateTitlu: string
  lectie: Lectie
}
