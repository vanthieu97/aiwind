import { type HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type ProgressProps = HTMLAttributes<HTMLDivElement> & {
  /** 0–100 */
  value: number;
  max?: number;
};

export function Progress({ className, value, max = 100, ...props }: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-[#e8e6e3] dark:bg-white/10',
        className
      )}
      {...props}
    >
      <div
        className="h-full rounded-full bg-[#c41e3a] transition-[width] duration-300 ease-out dark:bg-amber-400/90"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
