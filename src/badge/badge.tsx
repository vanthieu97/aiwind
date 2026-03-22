import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[#1a1a1a] text-white dark:bg-white/90 dark:text-[#0a0f1a]',
        secondary:
          'border-transparent bg-[#e8e6e3] text-[#1a1a1a] dark:bg-white/10 dark:text-slate-100',
        accent:
          'border-transparent bg-[#c41e3a]/12 text-[#c41e3a] dark:bg-[#c41e3a]/20 dark:text-amber-400',
        outline:
          'border-[#e8e6e3] text-[#1a1a1a] dark:border-white/15 dark:text-slate-200',
        success:
          'border-transparent bg-emerald-500/12 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400',
        warning:
          'border-transparent bg-amber-500/15 text-amber-900 dark:bg-amber-500/20 dark:text-amber-300',
        destructive:
          'border-transparent bg-red-500/12 text-red-800 dark:bg-red-500/20 dark:text-red-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type BadgeProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
