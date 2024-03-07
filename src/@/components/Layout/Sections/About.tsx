'use client';
import { Card } from '@/components/Card/Card';
import { cn } from '@/lib/utilities';
import { SectionScroll } from '../SectionScroll';
import { skills } from '@/lib/skills';
import { tools } from '@/lib/tools';
import Image from 'next/image';

/*
 * About
 */
export const About = () => {
  const xs = 'col-start-1 col-end-13 row-auto rounded-2xl p-10';
  return (
    <SectionScroll id="about">
      <div className="grid auto-rows-auto grid-cols-12 gap-6 text-center">
        <Card
          className={cn(
            xs,
            'p-4 mix-blend-luminosity sm:col-end-7 lg:col-end-5 lg:row-span-2',
          )}
        >
          <div className="h-full w-full overflow-hidden rounded-xl">
            <Image
              src="/me2.jpg"
              width={720}
              height={960}
              alt="Me and my fiance"
              className="h-full w-full object-cover"
            />
          </div>
        </Card>
        <Card
          className={cn(
            xs,
            'sm:col-start-7 lg:col-start-5 lg:col-end-9 lg:row-span-2',
          )}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 py-4">
            <h3 className="text-shadow text-7xl font-bold">About</h3>
            <p className="text-balance text-lg font-extralight">
              Chris Johnson is a seasoned Front End Developer, self taught and
              known for his collaborative approach and dedication to crafting
              impactful user experiences for a diverse range of clients.
            </p>
          </div>
        </Card>
        <Card
          className={cn(
            xs,
            'sm:col-end-7 lg:col-start-9 lg:col-end-13 lg:row-span-1',
          )}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-4">
            <h3 className="text-shadow text-7xl font-bold">15+</h3>
            <h4 className="text-shadow text-2xl font-extralight">
              Years of experience
            </h4>
          </div>
        </Card>
        <Card
          className={cn(
            xs,
            'sm:col-start-7 lg:col-start-9 lg:col-end-13 lg:row-span-1',
          )}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-4">
            <h3 className="text-shadow text-7xl font-bold">1000+</h3>
            <h4 className="text-shadow text-2xl font-extralight">
              Clients sites worked on
            </h4>
          </div>
        </Card>
        <Card
          className={cn(
            xs,
            'sm:col-end-7 lg:col-end-5 lg:row-span-1 lg:row-start-3',
          )}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-4">
            <h3 className="text-shadow text-7xl font-bold">Axis</h3>
            <h4 className="text-shadow text-2xl font-extralight">
              Booking Engine UI/UX
            </h4>
          </div>
        </Card>
        <Card
          className={cn(
            xs,
            'sm:col-start-7 lg:col-start-1 lg:col-end-5 lg:row-span-1 lg:row-start-4',
          )}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-4">
            <h3 className="text-shadow text-7xl font-bold">AA</h3>
            <h4 className="text-shadow text-2xl font-extralight">
              Accessability compliance
            </h4>
          </div>
        </Card>
        <Card
          className={cn(
            xs,
            'col-end-13 sm:col-end-7 lg:col-start-5 lg:col-end-9 lg:row-span-2 lg:row-start-3',
          )}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 py-4">
            <h3 className="text-shadow text-7xl font-bold">Skills</h3>
            <div className="flex flex-wrap justify-center gap-1">
              {skills.map((item) => (
                <div
                  key={item}
                  className="rounded-full bg-brand-secondary/25 px-2 py-0.5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Card>
        <Card
          className={cn(
            xs,
            'col-end-13 sm:col-start-7 lg:col-start-9 lg:col-end-13 lg:row-span-2 lg:row-start-3',
          )}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 py-4">
            <h3 className="text-shadow text-7xl font-bold">Tools</h3>
            <div className="flex flex-wrap justify-center gap-1">
              {tools.map((item) => (
                <div
                  key={item}
                  className="rounded-full bg-brand-secondary/25 px-2 py-0.5"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </SectionScroll>
  );
};
