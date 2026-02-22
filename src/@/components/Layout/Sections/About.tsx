'use client';
import { Card } from '@/components/Card/Card';
import { cn, yearsOfExperience } from '@/lib/utilities';
import { SectionScroll } from '@/components/Layout/SectionScroll';
import { Heading } from '@/components/Heading/Heading';
import { techStack } from '@/lib/techStack';

/*
 * About
 */
export const About = () => {
  const xs = 'col-start-1 col-end-13 row-auto';
  return (
    <SectionScroll id="About">
      <Heading>About</Heading>
      <div className="grid auto-rows-auto grid-cols-12 gap-6 text-center">
        <Card
          className={cn(xs, 'p-4 sm:col-end-7 lg:col-end-5 lg:row-span-2')}
          image="/me2.jpg"
          imageAlt="Me and my wife."
        />
        <Card
          className={cn(
            xs,
            'sm:col-start-7 lg:col-start-5 lg:col-end-9 lg:row-span-2',
          )}
          stats="Chris Johnson"
          statsSub={
            <span>
              A seasoned{' '}
              <span className="font-medium text-brand-primary">
                UI Developer
              </span>{' '}
              specializing in{' '}
              <span className="font-medium text-brand-secondary">
                Design Systems
              </span>
              , self-taught and known for a collaborative approach and a
              dedication to crafting impactful user experiences for a diverse
              range of clients.
            </span>
          }
        />
        <Card
          className={cn(
            xs,
            'sm:col-end-7 lg:col-start-9 lg:col-end-13 lg:row-span-1',
          )}
          stats={`${yearsOfExperience()}+`}
          statsSub="Years of experience"
        />
        <Card
          className={cn(
            xs,
            'sm:col-start-7 lg:col-start-9 lg:col-end-13 lg:row-span-1',
          )}
          stats="1000+"
          statsSub="Sites built & delivered for clients"
        />
        <Card
          className={cn(xs, 'sm:col-end-7')}
          stats="Graphic Design"
          statsSub="Associate Degree"
        />
        <Card
          className={cn(xs, 'sm:col-start-7')}
          stats="WCAG AA"
          statsSub="Accessibility compliance"
        />
        <Card className={cn(xs)}>
          <div className="flex h-full w-full flex-col items-center gap-8 py-4">
            <h3 className="text-shadow text-5xl font-bold">Tech Stack</h3>
            <div className="grid w-full gap-6 sm:grid-cols-2">
              {techStack.map((group) => (
                <div
                  key={group.title}
                  className="flex flex-col gap-2 text-left"
                >
                  <Heading className="mb-0 [&>div>hr]:border [&>div]:opacity-25 [&>h2]:text-2xl">
                    {group.title}
                  </Heading>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-brand-primary/50 px-2 py-0.5 text-sm font-extralight"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </SectionScroll>
  );
};
