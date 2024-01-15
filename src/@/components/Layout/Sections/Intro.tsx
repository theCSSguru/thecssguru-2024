import { Card } from '@/components/Card/Card';

/*
 * Intro
 */
export const Intro = () => {
  return (
    <Card className="flex items-center justify-center bg-gradient-to-b from-brand-primary/20 lg:col-span-2">
      <div className="flex h-full flex-col justify-between gap-4 text-center drop-shadow-lg">
        <div className="flex h-full items-center">
          <h1 className="flex h-full w-full flex-col items-center justify-center gap-1">
            <span className="text-base font-extralight tracking-wider opacity-75">
              Chris Johnson
            </span>
            <span className="text-4xl font-bold md:text-5xl">
              <span className="text-brand-primary">Senior </span>
              <span>Software </span>
              <span className="text-brand-secondary">Engineer</span>
            </span>
            <span className="text-base font-extralight tracking-wider opacity-75">
              Passion for Creating and Maintaining Beautiful Code
            </span>
          </h1>
        </div>
        <div className="rounded-xl bg-black/15 px-6 py-4 text-base tracking-wide opacity-90">
          Front End Engineer with 15 years of experience working with various
          teams and designers, utilizing React and Next JS to create meaningful
          user experiences.
        </div>
      </div>
    </Card>
  );
};
