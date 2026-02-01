import { cn } from '@/lib/utils';

interface DividerProps {
  variant?: 'default' | 'gold';
  className?: string;
}

export default function Divider({ variant = 'default', className }: DividerProps) {
  return (
    <div
      className={cn(
        variant === 'default' ? 'divider' : 'divider-gold',
        className
      )}
    />
  );
}
