import { Presentation, Video, FileText, Gamepad2, LayoutTemplate, Workflow, ClipboardCheck, type LucideIcon } from 'lucide-react'
import type { TipMaterial } from '@/lib/lectii'

// label = numele complet (antetul cardului de material);
// short = eticheta scurtă de pe chip-ul din lista de lecții.
export const materialMeta: Record<TipMaterial, { label: string; short: string; Icon: LucideIcon }> = {
  prezentare: { label: 'Prezentare', short: 'Prezentare', Icon: Presentation },
  video: { label: 'Video', short: 'Video', Icon: Video },
  fisa: { label: 'Fișă de lucru', short: 'Fișă', Icon: FileText },
  joc: { label: 'Joc', short: 'Joc', Icon: Gamepad2 },
  infografic: { label: 'Infografic', short: 'Infografic', Icon: LayoutTemplate },
  schema: { label: 'Schemă', short: 'Schemă', Icon: Workflow },
  test: { label: 'Test', short: 'Test', Icon: ClipboardCheck },
}
