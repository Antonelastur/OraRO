import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Command = CommandPrimitive

export function CommandDialog({
  open,
  onOpenChange,
  children,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Title className="sr-only">Căutare</DialogPrimitive.Title>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm" />
        <DialogPrimitive.Content className="fixed left-1/2 top-24 z-50 w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-bg-alt shadow-elevated outline-none">
          <CommandPrimitive className="flex flex-col" shouldFilter={false}>
            {children}
          </CommandPrimitive>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export function CommandInput(props: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div className="flex items-center gap-2 border-b border-border px-4">
      <Search className="h-4 w-4 shrink-0 text-ink-soft" />
      <CommandPrimitive.Input
        className={cn(
          'h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft',
        )}
        {...props}
      />
    </div>
  )
}

export function CommandList(props: React.ComponentProps<typeof CommandPrimitive.List>) {
  return <CommandPrimitive.List className="max-h-80 overflow-y-auto p-2" {...props} />
}

export function CommandEmpty(props: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return <CommandPrimitive.Empty className="py-8 text-center text-sm text-ink-soft" {...props} />
}

export function CommandGroup(props: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-ink-soft"
      {...props}
    />
  )
}

export function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      className={cn(
        'flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-accent-soft data-[selected=true]:text-accent-ink',
        className,
      )}
      {...props}
    />
  )
}
