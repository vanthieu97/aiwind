import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type = 'text', ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      'flex h-10 w-full min-w-0 rounded-xl border border-[#e8e6e3] bg-white px-3 py-2 text-sm text-[#1a1a1a] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors placeholder:text-[#8a8a8a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c41e3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5] disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus-visible:ring-offset-[#0a0f1a]',
      className
    )}
    {...props}
  />
));

Input.displayName = 'Input';
