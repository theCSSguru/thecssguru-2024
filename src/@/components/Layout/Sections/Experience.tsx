import React from 'react';
import { experience } from '@/lib/experience';
import { FaComputer } from 'react-icons/fa6';

/*
 * Experience
 */
export const Experience = () => {
  return (
    <React.Fragment>
      <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold tracking-wide drop-shadow-lg">
        <FaComputer />
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {experience.map((item) => (
          <div
            key={item.time}
            className="rounded-md border border-transparent bg-white/5 p-4 shadow-lg transition-all duration-300 hover:border-brand-primary/30"
          >
            <div className="mb-2 text-lg font-extralight leading-none tracking-wide">
              {item.position}
            </div>
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex gap-1">
                <div className="rounded-full bg-brand-primary/30 px-2 py-0.5">
                  {item.company}
                </div>
                <div className="rounded-full bg-brand-secondary/50 px-2 py-0.5">
                  {item.location}
                </div>
              </div>
              <div className="flex gap-1">
                <div className="rounded-full bg-black/10 px-2 py-0.5">
                  {item.time}
                </div>
                <div className="rounded-full bg-white/10 px-2 py-0.5">
                  {item.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
