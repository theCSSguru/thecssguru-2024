import { experience } from '@/lib/experience';
import { FaComputer } from 'react-icons/fa6';
import { Card } from '@/components/Card/Card';

/*
 * Experience
 */
export const Experience = () => {
  return (
    <Card
      tilt={false}
      className="bg-gradient-to-b from-white/20 p-6 pt-4 sm:row-start-1 sm:row-end-3 lg:row-end-4 xl:col-span-2"
    >
      <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold tracking-wide drop-shadow-lg">
        <FaComputer />
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {experience.map((item) => (
          <div
            key={item.duration}
            className="rounded-md border border-transparent bg-white/5 p-4 shadow-lg transition-all duration-300 hover:border-brand-primary/30"
          >
            <div className="mb-2 text-lg font-extralight leading-none tracking-wide">
              {item.position}
            </div>
            <div className="flex flex-col gap-1 text-xs">
              <div className="flex flex-wrap gap-1">
                <div className="rounded-full bg-brand-primary/30 px-2 py-0.5">
                  {item.company}
                </div>
                <div className="rounded-full bg-brand-secondary/50 px-2 py-0.5">
                  {item.location}
                </div>
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
    </Card>
  );
};
