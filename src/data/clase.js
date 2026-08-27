import { unitati as unitatiClasa5 } from './clasa-5/index.js'
import { unitati as unitatiClasa6 } from './clasa-6/index.js'
import { unitati as unitatiClasa8 } from './clasa-8/index.js'

// Registru central al claselor active în OraRO.
// Clasa a VI-a e înregistrată acum că are materiale pe aproape toate lecțiile
// (110 din 122). Clasa a VII-a rămâne pe dinafară până ajunge la un nivel
// asemănător. Clasa a VIII-a rămâne cu index gol, dar importată, până se
// construiește conținutul.
export const clase = {
  'clasa-5': { titlu: 'Clasa a V-a', unitati: unitatiClasa5 },
  'clasa-6': { titlu: 'Clasa a VI-a', unitati: unitatiClasa6 },
  'clasa-8': { titlu: 'Clasa a VIII-a', unitati: unitatiClasa8 },
}
