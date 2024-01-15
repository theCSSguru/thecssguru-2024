import React from 'react';
import { testimonials } from '@/lib/testimonials';
import { Card } from '@/components/Card/Card';
import { FaComment } from 'react-icons/fa6';
import { cn } from '@/lib/utilities';

/*
 * Testimonials
 */
export const Testimonials = () => {
  return (
    <React.Fragment>
      {testimonials.map((item, index) => (
        <Card
          key={item.name}
          className={cn('bg-gradient-to-b from-black/50 p-4', {
            'xl:col-span-2': index === 0 || index === 1,
            'lg:col-span-2 xl:col-span-3': index === 2,
            'xl:col-span-3': index === 3,
          })}
          childClassName="drop-shadow-lg"
        >
          <div className="flex h-full flex-col gap-4 rounded-lg border border-transparent bg-black/20 p-6 transition-all duration-300 hover:bg-black/50">
            <div className="flex items-center justify-between gap-2 text-xl font-semibold tracking-wide text-brand-secondary">
              {item.title}
              <FaComment />
            </div>
            <div className="grow font-extralight italic tracking-wide">
              &quot;{item.testimonial}&quot;
            </div>
            <div className="flex flex-wrap items-center justify-end gap-1 text-xs">
              <div className="rounded-full bg-brand-primary/30 px-2 py-0.5">
                {item.name}
              </div>
              <div className="rounded-full bg-black/10 px-2 py-0.5">
                {item.company}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </React.Fragment>
  );
};
