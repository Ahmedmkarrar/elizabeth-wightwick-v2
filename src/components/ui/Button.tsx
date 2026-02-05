'use client';

import { cn } from '@/lib/utils';
import { forwardRef, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'inline-flex items-center justify-center font-inter font-normal tracking-wide transition-all duration-400 ease-out',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-brand text-white hover:bg-brand-dark': variant === 'primary',
            'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white': variant === 'secondary',
            'text-charcoal hover:text-brand': variant === 'ghost',
            'text-charcoal underline-offset-4 hover:underline': variant === 'link',
          },
          {
            'h-9 px-5 text-tiny': size === 'sm',
            'h-11 px-7 text-small': size === 'md',
            'h-13 px-9 text-body': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
