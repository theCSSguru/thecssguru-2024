'use client';
import { SectionScroll } from '@/components/Layout/SectionScroll';
import { Card } from '@/components/Card/Card';
import { experience } from '@/lib/experience';
import { cn } from '@/lib/utilities';

/*
 * Experience
 */
export const Experience = () => {
  const xs = 'col-start-1 col-end-13 row-auto';
  return (
    <SectionScroll id="experience">
      <div className="flex flex-col gap-8">
        <div className="grid auto-rows-auto grid-cols-12 gap-6 text-center">
          {experience.map((item) => (
            <Card
              key={item.id}
              className={cn(xs, {
                'lg:col-end-8': item.id === 1 || item.id === 7,
                'lg:col-start-8 lg:col-end-13': item.id === 2 || item.id === 8,
                'lg:col-end-9': item.id === 3,
                'lg:col-start-9 lg:col-end-13': item.id === 4,
                'lg:col-end-7': item.id === 5,
                'lg:col-start-7 lg:col-end-13': item.id === 6,
              })}
            >
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <h4 className="text-shadow text-balance text-3xl font-bold">
                  {item.position}
                </h4>
                <h5 className="text-shadow mb-3 text-2xl font-extralight">
                  {item.company}
                </h5>
                <div className="flex flex-wrap justify-center gap-3 text-sm font-extralight">
                  <div className="flex items-center justify-center rounded-full bg-brand-primary/50 px-4 py-1">
                    {item.duration}
                  </div>
                  <div className="flex items-center justify-center rounded-full bg-brand-secondary/50 px-4 py-1">
                    {item.location}
                  </div>
                  <div className="flex items-center justify-center rounded-full bg-black/50 px-4 py-1">
                    {item.time}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionScroll>
  );
};
