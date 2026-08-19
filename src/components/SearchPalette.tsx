import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { clase } from '@/data/clase.js'
import { toateLectiile } from '@/lib/lectii'

const TOATE_LECTIILE = toateLectiile(clase)

function potriveste(text: string, interogare: string) {
  return text.toLowerCase().includes(interogare.toLowerCase())
}

export function useSearchPalette() {
  const [deschis, setDeschis] = useState(false)

  useEffect(() => {
    function peTasta(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setDeschis((v) => !v)
      }
    }
    document.addEventListener('keydown', peTasta)
    return () => document.removeEventListener('keydown', peTasta)
  }, [])

  return { deschis, setDeschis }
}

export function SearchPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [interogare, setInterogare] = useState('')
  const navigate = useNavigate()

  const rezultate = useMemo(() => {
    if (!interogare.trim()) return []
    return TOATE_LECTIILE.filter(
      ({ lectie }) =>
        potriveste(lectie.titlu, interogare) ||
        potriveste(lectie.sursaManual, interogare) ||
        lectie.obiective.some((o) => potriveste(o, interogare)),
    ).slice(0, 20)
  }, [interogare])

  function alege(clasaId: string, unitateId: string, lectieId: string) {
    onOpenChange(false)
    setInterogare('')
    navigate(`/${clasaId}/${unitateId}/${lectieId}`)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        value={interogare}
        onValueChange={setInterogare}
        placeholder="Caută o lecție, un obiectiv, o sursă..."
        autoFocus
      />
      <CommandList>
        {interogare.trim() && rezultate.length === 0 && (
          <CommandEmpty>Nicio lecție găsită pentru „{interogare}”.</CommandEmpty>
        )}
        {rezultate.length > 0 && (
          <CommandGroup heading="Lecții">
            {rezultate.map(({ clasaId, clasaTitlu, unitateId, unitateTitlu, lectie }) => (
              <CommandItem
                key={`${clasaId}-${lectie.id}`}
                value={`${lectie.id}-${clasaId}`}
                onSelect={() => alege(clasaId, unitateId, lectie.id)}
              >
                <BookOpen className="h-4 w-4 shrink-0 text-accent" />
                <span className="flex flex-col">
                  <span className="font-medium">{lectie.titlu}</span>
                  <span className="text-xs text-ink-soft">
                    {clasaTitlu} · {unitateTitlu}
                  </span>
                </span>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  )
}

export default SearchPalette
