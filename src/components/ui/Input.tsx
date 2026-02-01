'use client';

import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-tiny font-inter font-medium uppercase tracking-widest text-slate">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-white border border-taupe/60 px-4 py-3 text-body font-inter text-charcoal',
            'placeholder:text-taupe focus:outline-none focus:border-charcoal transition-colors duration-400',
            error && 'border-red-400 focus:border-red-400',
            className
          )}
          {...props}
        />
        {error && <p className="text-tiny text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-tiny font-inter font-medium uppercase tracking-widest text-slate">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-white border border-taupe/60 px-4 py-3 text-body font-inter text-charcoal resize-none',
            'placeholder:text-taupe focus:outline-none focus:border-charcoal transition-colors duration-400',
            error && 'border-red-400 focus:border-red-400',
            className
          )}
          rows={5}
          {...props}
        />
        {error && <p className="text-tiny text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-tiny font-inter font-medium uppercase tracking-widest text-slate">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            'w-full bg-white border border-taupe/60 px-4 py-3 text-body font-inter text-charcoal',
            'focus:outline-none focus:border-charcoal transition-colors duration-400 appearance-none',
            'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%235f6368%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E")] bg-no-repeat bg-[right_1rem_center]',
            error && 'border-red-400',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <p className="text-tiny text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
