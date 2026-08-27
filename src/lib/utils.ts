import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Datele lecțiilor țin căi locale ca '/materiale/...', absolute față de
// domeniu. Site-ul e servit sub un subfolder (ex. /OraRO/ pe GitHub Pages),
// așa că orice fișier local trebuie prefixat cu baza reală de la build.
export function caleMaterial(fisier: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + fisier
}
