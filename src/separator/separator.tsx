import { type HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type SeparatorProps = HTMLAttributes<HTMLDivElement> & {
  /** @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
};

export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(
        'shrink-0 bg-[#e8e6e3] dark:bg-white/10',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px min-h-[1em]',
        className
      )}
      {...props}
    />
  );
}
