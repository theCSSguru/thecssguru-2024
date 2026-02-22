'use client';

import { cn } from '@/lib/utilities';

type HeadingProps = {
  children?: React.ReactNode;
  className?: string;
};

/*
 * Heading
 */
export const Heading = ({ children, className }: HeadingProps) => {
  return (
    <div className={cn('mb-6 grid', className)}>
      <h2 className="text-shadow relative z-10 text-5xl font-bold lg:text-7xl">
        {children}
      </h2>
      <div className="relative z-0 grid gap-1">
        <hr className="rounded-full border-2 border-brand-primary opacity-75" />
        <hr className="rounded-full border-2 border-brand-secondary opacity-50" />
      </div>
    </div>
  );
};
