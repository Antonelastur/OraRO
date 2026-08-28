import { unitati as unitatiClasa5 } from './clasa-5/index.js'
import { unitati as unitatiClasa6 } from './clasa-6/index.js'
import { unitati as unitatiClasa7 } from './clasa-7/index.js'
import { unitati as unitatiClasa8 } from './clasa-8/index.js'

// Registru central al claselor active în OraRO.
// Toate cele patru clase de gimnaziu sunt înregistrate acum că au materiale pe
// aproape toate lecțiile (a VI-a: 110/122, a VII-a: 105/119, a VIII-a: 103/117
// fără recapitularea inițială); restul sunt prezentări și teste, care au nevoie
// de unelte externe (NotebookLM, Google Forms).
export const clase = {
  'clasa-5': { titlu: 'Clasa a V-a', unitati: unitatiClasa5 },
  'clasa-6': { titlu: 'Clasa a VI-a', unitati: unitatiClasa6 },
  'clasa-7': { titlu: 'Clasa a VII-a', unitati: unitatiClasa7 },
  'clasa-8': { titlu: 'Clasa a VIII-a', unitati: unitatiClasa8 },
}
