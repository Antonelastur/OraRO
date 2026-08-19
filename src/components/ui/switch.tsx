import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border bg-bg-alt transition-colors data-[state=checked]:bg-accent data-[state=checked]:border-accent',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="pointer-events-none block h-4.5 w-4.5 translate-x-1 rounded-full bg-white shadow-card transition-transform data-[state=checked]:translate-x-5.5" />
    </SwitchPrimitive.Root>
  )
}
