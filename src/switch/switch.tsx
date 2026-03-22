'use client';

import { useCallback, useState, type ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export type SwitchProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'role' | 'type'> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export function Switch({
  className,
  checked: controlledChecked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  onClick,
  ...props
}: SwitchProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : uncontrolled;

  const setChecked = useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolled(next);
      onCheckedChange?.(next);
    },
    [isControlled, onCheckedChange]
  );

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      className={cn(
        'peer flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-[#e8e6e3] px-0.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c41e3a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#faf8f5] disabled:cursor-not-allowed disabled:opacity-50 data-[state=on]:bg-[#c41e3a] dark:bg-white/15 dark:focus-visible:ring-offset-[#0a0f1a] dark:data-[state=on]:bg-[#c41e3a]',
        className
      )}
      data-state={checked ? 'on' : 'off'}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || disabled) return;
        setChecked(!checked);
      }}
      {...props}
    >
      <span
        className={cn(
          'pointer-events-none size-5 rounded-full bg-white shadow-sm transition-[margin] duration-200 dark:bg-[#0a0f1a]',
          checked ? 'ml-auto' : 'ml-0'
        )}
        aria-hidden
      />
    </button>
  );
}
