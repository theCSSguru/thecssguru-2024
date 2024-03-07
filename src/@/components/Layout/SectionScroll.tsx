import React from 'react';
import { useSectionInView } from '@/hooks/useSectionInView';
import { type SectionName } from '@/context/ActiveSectionContext';

export const SectionScroll = ({ id, children }: SectionScrollProps) => {
  const { ref } = useSectionInView(id);

  return (
    <section id={id} ref={ref} className="scroll-mt-0 pt-28">
      {children}
    </section>
  );
};

type SectionScrollProps = {
  id: SectionName;
  children: React.ReactNode;
};
