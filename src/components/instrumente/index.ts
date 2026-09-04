// Registrul instrumentelor de clasă. Stă separat de componente ca fiecare
// fișier să exporte un singur fel de lucru, altfel se strică fast refresh.
import { Dices, Hourglass, Shuffle, Timer, UserRound, Users } from 'lucide-react'
import {
  Cronometru, GeneratorEchipe, NumaratoareInversa, RoataAleatorie, SelectorElev, Zar,
} from './unelte'

export const INSTRUMENTE = [
  { id: 'cronometru', nume: 'Cronometru', descriere: 'Măsoară cât durează o activitate.', icon: Timer, Component: Cronometru },
  { id: 'numaratoare-inversa', nume: 'Numărătoare inversă', descriere: 'Dă un timp de lucru și anunță când s-a terminat.', icon: Hourglass, Component: NumaratoareInversa },
  { id: 'selector-elev', nume: 'Selector elev', descriere: 'Alege un elev la întâmplare, corect, fără repetare.', icon: UserRound, Component: SelectorElev },
  { id: 'roata-aleatorie', nume: 'Roată aleatorie', descriere: 'Aceeași alegere, dar cu spectacol.', icon: Shuffle, Component: RoataAleatorie },
  { id: 'generator-echipe', nume: 'Generator echipe', descriere: 'Împarte clasa în echipe, amestecat.', icon: Users, Component: GeneratorEchipe },
  { id: 'zar', nume: 'Zar', descriere: 'Unul, două sau trei zaruri.', icon: Dices, Component: Zar },
] as const

export function gasesteInstrument(id: string | undefined) {
  return INSTRUMENTE.find((i) => i.id === id)
}
