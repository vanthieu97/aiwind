'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c41e3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5] disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-[#0a0f1a]',
  {
    variants: {
      variant: {
        primary:
          'bg-[#c41e3a] text-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-[#a01830] dark:hover:bg-[#d42a45]',
        secondary:
          'border border-[#e8e6e3] bg-white text-[#1a1a1a] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:bg-[#f5f5f5] dark:border-white/10 dark:bg-white/5 dark:text-white/95 dark:hover:bg-white/10',
        ghost:
          'text-[#1a1a1a] hover:bg-[#f5f5f5] dark:text-white/90 dark:hover:bg-white/5',
        link: 'text-[#c41e3a] underline-offset-4 hover:underline dark:text-amber-400',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-5 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => (
    <button ref={ref} type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);

Button.displayName = 'Button';

export { buttonVariants };
