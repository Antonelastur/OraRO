import { Presentation, Video, FileText, Gamepad2, BarChart3, Workflow, ClipboardCheck, type LucideIcon } from 'lucide-react'
import type { TipMaterial } from '@/lib/lectii'

export const materialMeta: Record<TipMaterial, { label: string; Icon: LucideIcon }> = {
  prezentare: { label: 'Prezentare', Icon: Presentation },
  video: { label: 'Video', Icon: Video },
  fisa: { label: 'Fișă de lucru', Icon: FileText },
  joc: { label: 'Joc', Icon: Gamepad2 },
  infografic: { label: 'Infografic', Icon: BarChart3 },
  schema: { label: 'Schemă', Icon: Workflow },
  test: { label: 'Test', Icon: ClipboardCheck },
}
