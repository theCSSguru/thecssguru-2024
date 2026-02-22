import React from 'react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { type SectionName } from '@/context/ActiveSectionContext';
import { cn } from '@/lib/utilities';

export const SectionScroll = ({
  id,
  children,
  className,
}: SectionScrollProps) => {
  const { ref } = useSectionInView(id);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'relative mb-24 grid min-h-[calc(100dvh-118px)] scroll-mt-28 items-center px-8 lg:mb-48 lg:min-h-[calc(100dvh-118px)]',
        className,
      )}
    >
      {children}
    </section>
  );
};

type SectionScrollProps = {
  id: SectionName;
  children: React.ReactNode;
  className?: string;
};
