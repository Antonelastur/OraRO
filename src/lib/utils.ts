import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Datele lecțiilor țin căi locale ca '/materiale/...', absolute față de
// rădăcina site-ului. Pe Vercel baza e '/', deci prefixul e gol; funcția
// rămâne ca să meargă și dacă site-ul e mutat vreodată sub un subfolder.
export function caleMaterial(fisier: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + fisier
}
