import { cn } from '@/lib/utilities';

/*
 * Card
 */
export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl border border-white/5 bg-white/5 px-6 py-4 shadow-2xl',
        className,
      )}
    >
      {children}
    </div>
  );
};

type CardProps = {
  className?: string;
  children: React.ReactNode;
};
