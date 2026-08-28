import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'icon'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent-ink text-white hover:opacity-90',
  ghost: 'bg-transparent text-ink-soft hover:bg-ink/5 hover:text-ink',
  outline: 'border border-border bg-transparent text-ink hover:border-accent hover:text-accent-ink',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  icon: 'h-9 w-9',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
)
Button.displayName = 'Button'
