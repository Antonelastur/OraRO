import { unitati as unitatiClasa5 } from './clasa-5/index.js'
import { unitati as unitatiClasa6 } from './clasa-6/index.js'
import { unitati as unitatiClasa7 } from './clasa-7/index.js'
import { unitati as unitatiClasa8 } from './clasa-8/index.js'

// Registru central al claselor active în OraRO.
// Clasele a VI-a și a VII-a sunt înregistrate acum că au materiale pe aproape
// toate lecțiile (110 din 122, respectiv 105 din 119); restul sunt prezentări
// și teste, care au nevoie de unelte externe (NotebookLM, Google Forms).
// Clasa a VIII-a rămâne cu index gol, dar importată, până se construiește
// conținutul.
export const clase = {
  'clasa-5': { titlu: 'Clasa a V-a', unitati: unitatiClasa5 },
  'clasa-6': { titlu: 'Clasa a VI-a', unitati: unitatiClasa6 },
  'clasa-7': { titlu: 'Clasa a VII-a', unitati: unitatiClasa7 },
  'clasa-8': { titlu: 'Clasa a VIII-a', unitati: unitatiClasa8 },
}
