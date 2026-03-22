import { type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/cn';

const alertVariants = cva(
  'relative w-full rounded-2xl border px-4 py-3 text-sm shadow-[0_1px_3px_rgba(0,0,0,0.06)] [&_svg]:absolute [&_svg]:left-4 [&_svg]:top-3.5 [&_svg]:size-4 [&_svg]:text-current [&:has(svg)]:pl-11',
  {
    variants: {
      variant: {
        default:
          'border-[#e8e6e3] bg-white text-[#1a1a1a] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100',
        info: 'border-sky-200/80 bg-sky-50 text-sky-950 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-100',
        success:
          'border-emerald-200/80 bg-emerald-50 text-emerald-950 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-100',
        warning:
          'border-amber-200/80 bg-amber-50 text-amber-950 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-100',
        destructive:
          'border-red-200/80 bg-red-50 text-red-950 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type AlertProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  );
}

export type AlertTitleProps = HTMLAttributes<HTMLHeadingElement>;

export function AlertTitle({ className, ...props }: AlertTitleProps) {
  return <h5 className={cn('mb-1 font-semibold leading-none tracking-tight', className)} {...props} />;
}

export type AlertDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return <p className={cn('text-sm opacity-90 [&_p]:leading-relaxed', className)} {...props} />;
}

export { alertVariants };
