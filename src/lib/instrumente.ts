// Lucruri comune instrumentelor de clasă: lista elevilor, amestecare, sunet.
// Lista trăiește în localStorage, deci pe browserul curent. Fără backend, e
// singura opțiune; vezi docs/architecture.md, secțiunea 5.
import { useCallback, useEffect, useState } from 'react'

const CHEIE_LISTA = 'oraro:lista-clasei'

export function useListaClasei() {
  const [text, setTextIntern] = useState('')

  useEffect(() => {
    try {
      setTextIntern(localStorage.getItem(CHEIE_LISTA) ?? '')
    } catch {
      // Fereastră privată sau stocare blocată: pornim cu lista goală.
    }
  }, [])

  const setText = useCallback((valoare: string) => {
    setTextIntern(valoare)
    try {
      localStorage.setItem(CHEIE_LISTA, valoare)
    } catch {
      // Nu putem salva, dar lista rămâne folosibilă în sesiunea curentă.
    }
  }, [])

  const nume = text
    .split('\n')
    .map((n) => n.trim())
    .filter(Boolean)

  return { text, setText, nume }
}

// Fisher-Yates, ca amestecarea să fie chiar uniformă.
export function amesteca<T>(lista: T[]): T[] {
  const copie = [...lista]
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copie[i], copie[j]] = [copie[j], copie[i]]
  }
  return copie
}

export function imparteInEchipe<T>(lista: T[], numarEchipe: number): T[][] {
  const amestecat = amesteca(lista)
  const echipe: T[][] = Array.from({ length: numarEchipe }, () => [])
  amestecat.forEach((element, i) => echipe[i % numarEchipe].push(element))
  return echipe
}

export function formateazaCeas(secunde: number): string {
  const absolut = Math.abs(secunde)
  const m = Math.floor(absolut / 60)
  const s = absolut % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

// Bip scurt la finalul numărătorii inverse. Web Audio, fără fișier de sunet.
export function bip() {
  try {
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new Ctx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 880
    gain.gain.setValueAtTime(0.18, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7)
    osc.start()
    osc.stop(ctx.currentTime + 0.7)
    osc.onended = () => ctx.close()
  } catch {
    // Sunetul e un plus, nu o condiție. Dacă browserul nu-l lasă, tăcem.
  }
}
