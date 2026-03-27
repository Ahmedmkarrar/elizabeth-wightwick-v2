import { cn, getStatusLabel, getStatusColor } from '@/lib/utils';

interface BadgeProps {
  status: string;
  createdAt?: string;
  className?: string;
}

export default function Badge({ status, createdAt, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-[11px] font-inter font-medium uppercase tracking-widest rounded-sm',
        getStatusColor(status),
        className
      )}
    >
      {getStatusLabel(status, createdAt)}
    </span>
  );
}
