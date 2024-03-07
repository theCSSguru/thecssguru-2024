'use client';
import { SectionScroll } from '../SectionScroll';
import { Card } from '@/components/Card/Card';
import Image from 'next/image';

/*
 * About
 */
export const About = () => {
  return (
    <SectionScroll id="about">
      <Card className="bg-gradient-to-b from-brand-primary/20 p-6 sm:row-end-2 lg:col-span-2 xl:col-span-6">
        <div className="flex h-full flex-col justify-between gap-4 xl:grid xl:grid-cols-[1fr_auto_auto_1fr] xl:items-center">
          <div className="mx-auto flex max-w-52 xl:col-start-2 xl:mr-6">
            <Image
              src="/me.png"
              alt="Chris Johnson | theCSSguru"
              width={300}
              height={300}
              className="aspect-square h-auto w-full rounded-full border-8 border-black/50 shadow-xl outline-double outline-white/5"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 text-center drop-shadow-lg">
            <div className="flex items-center">
              <h1 className="flex w-full flex-col items-center justify-center gap-1">
                <span className="text-base font-extralight tracking-wider opacity-75">
                  Chris Johnson
                </span>
                <span className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="text-brand-primary">Senior </span>
                  <span>Front End </span>
                  <span className="text-brand-secondary">Developer</span>
                </span>
                <span className="text-balance text-base font-extralight tracking-wider opacity-75">
                  Passion for Creating and Maintaining Beautiful Code
                </span>
              </h1>
            </div>
          </div>
          <div className="text-balance rounded-xl bg-black/15 px-6 py-4 text-center text-base tracking-wide opacity-90 xl:col-span-4">
            Front End Developer with 15 years of experience working with various
            teams and designers, utilizing React and Next JS to create
            meaningful user experiences.
          </div>
        </div>
      </Card>
    </SectionScroll>
  );
};
