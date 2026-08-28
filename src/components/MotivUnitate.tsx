// Filigran tematic pe antetul paginii Unitate: un motiv din arta populară
// românească, desenat în linie (line-art), tuș navy la 4-5% opacitate, în
// colțul din dreapta-sus. Pur decorativ: aria-hidden, nu prinde clicuri.
//
import type { ReactElement } from 'react'

// Motivele (7) și alocarea pe unități se fac după conținutul real al unității,
// nu la întâmplare. Reutilizarea unui motiv la două unități e intenționată
// când tema chiar se repetă (masca = „ceilalți" și „scena"; soarele =
// începutul de an și „despre mine").

type Motiv =
  | 'soare'
  | 'pasare'
  | 'coloana'
  | 'masca'
  | 'cerb'
  | 'fus'
  | 'corabie'

const ALOCARE: Record<string, Motiv> = {
  // Clasa a V-a
  'clasa-5/recapitulare-initiala': 'soare',
  'clasa-5/unitatea-1': 'soare', //  Despre mine. Selfie
  'clasa-5/unitatea-2': 'masca', //  De-a ce mă joc
  'clasa-5/unitatea-3': 'fus', //    Pe strada mea
  'clasa-5/unitatea-4': 'coloana', // Vreau să salvez lumea
  'clasa-5/unitatea-5': 'pasare', // Călătoresc prin basme
  'clasa-5/unitatea-6': 'corabie', // Din carte spre departe
  // Clasa a VI-a
  'clasa-6/recapitulare-initiala': 'soare',
  'clasa-6/unitatea-1': 'fus', //     Acasă, în familie, printre cărți
  'clasa-6/unitatea-2': 'masca', //   Printre colegi și prieteni
  'clasa-6/unitatea-3': 'corabie', // Dincolo de ferestre
  'clasa-6/unitatea-4': 'pasare', //  Popasuri cu tâlc (legende, fabule)
  'clasa-6/unitatea-5': 'cerb', //    Călătorii de tot felul
  // Clasa a VII-a
  'clasa-7/recapitulare-initiala': 'soare',
  'clasa-7/unitatea-1': 'corabie', // Călătorie în necunoscut
  'clasa-7/unitatea-2': 'masca', //   Aproape de ceilalți
  'clasa-7/unitatea-3': 'pasare', //  Harta sentimentelor
  'clasa-7/unitatea-4': 'fus', //     Cu noroc, fără noroc (ursitoarele)
  'clasa-7/unitatea-5': 'masca', //   Lumea de pe scenă
  // Clasa a VIII-a
  'clasa-8/recapitulare-initiala': 'soare',
  'clasa-8/unitatea-1': 'coloana', // Unde găsim frumusețea? (valori în lume)
  'clasa-8/unitatea-2': 'masca', //   Cum sunt ceilalți?
  'clasa-8/unitatea-3': 'corabie', // Cum descoperim lumea?
  'clasa-8/unitatea-4': 'cerb', //    Unde găsim adevărul?
  'clasa-8/unitatea-5': 'pasare', //  Încotro se îndreaptă lumea?
}

const PATHS: Record<Motiv, ReactElement> = {
  // Soare cu raze, rozetă din crestături populare.
  soare: (
    <g>
      <circle cx="50" cy="50" r="15" />
      <path d="M50 12 L50 27 M50 73 L50 88 M12 50 L27 50 M73 50 L88 50 M23 23 L34 34 M66 66 L77 77 M77 23 L66 34 M34 66 L23 77" />
      <path d="M50 6 q4 3 0 6 q-4 -3 0 -6 M94 50 q-3 4 -6 0 q3 -4 6 0" />
    </g>
  ),
  // Pasărea măiastră în zbor, coadă lungă, aripă ridicată.
  pasare: (
    <g>
      <path d="M18 62 C30 40 44 34 56 40 C50 30 52 20 60 14 C60 26 66 32 78 30 C70 40 74 52 86 56 C70 58 58 66 52 80 C48 66 34 62 18 62 Z" />
      <circle cx="60" cy="26" r="1.6" />
    </g>
  ),
  // Coloana infinitului, module romboidale suprapuse.
  coloana: (
    <g>
      <path d="M50 8 L64 22 L50 36 L36 22 Z M50 36 L64 50 L50 64 L36 50 Z M50 64 L64 78 L50 92 L36 78 Z" />
      <path d="M40 8 L60 8 M40 92 L60 92" />
    </g>
  ),
  // Masca de colindat, cap de capră cu coarne și panglici.
  masca: (
    <g>
      <path d="M38 34 C30 20 22 12 14 12 C20 22 22 30 30 38 M62 34 C70 20 78 12 86 12 C80 22 78 30 70 38" />
      <path d="M32 36 C32 58 40 82 50 88 C60 82 68 58 68 36 C60 30 40 30 32 36 Z" />
      <path d="M42 48 q4 -4 8 0 M50 48 q4 -4 8 0" />
      <path d="M46 68 q4 4 8 0 M44 88 l-4 6 M56 88 l4 6" />
    </g>
  ),
  // Cerbul, coarne ramificate, motiv de colind și de covor.
  cerb: (
    <g>
      <path d="M40 92 L42 58 C42 48 46 42 54 42 L58 42 C64 42 66 48 66 56 L66 92" />
      <path d="M54 42 C50 34 48 28 50 20 M50 20 L42 14 M50 20 L58 12 M50 28 L44 24 M50 28 L57 22" />
      <path d="M58 42 C62 34 64 28 62 20 M62 20 L70 14 M62 20 L55 12 M62 28 L68 24" />
      <circle cx="52" cy="40" r="1.4" />
    </g>
  ),
  // Fusul și furca de tors, cu o buclă de fir, motiv al depănării poveștii.
  fus: (
    <g>
      <path d="M28 90 L52 20 M52 20 C46 12 52 4 58 8 C56 14 60 18 66 16 C62 22 64 28 58 30 C54 24 52 22 52 20 Z" />
      <path d="M66 88 L74 52 M74 52 L70 46 L78 46 Z M74 52 l-3 -2 M74 52 l3 -2" />
      <path d="M52 34 C64 40 66 50 70 52" />
    </g>
  ),
  // Corabia cu pânze, pe val.
  corabie: (
    <g>
      <path d="M20 66 C34 78 66 78 80 66 L74 62 L26 62 Z" />
      <path d="M50 62 L50 14 M50 18 C60 22 66 32 66 44 L50 44 Z M50 20 C42 24 38 34 38 44 L50 44" />
      <path d="M14 82 q8 -6 16 0 q8 6 16 0 q8 -6 16 0 q8 6 16 0" />
    </g>
  ),
}

export function MotivUnitate({ clasa, unitate }: { clasa: string; unitate: string }) {
  const motiv = ALOCARE[`${clasa}/${unitate}`]
  if (!motiv) return null

  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute -top-2 right-0 h-40 w-40 text-ink opacity-[0.05] lg:h-52 lg:w-52"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[motiv]}
    </svg>
  )
}

export default MotivUnitate
