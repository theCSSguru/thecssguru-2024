'use client';
import { Button } from '@/components/Button/Button';
import { Social } from '@/components/Social/Social';
import { SectionScroll } from '@/components/Layout/SectionScroll';
import Image from 'next/image';

export const Hero = () => {
  return (
    <SectionScroll id="home">
      <div className="relative mb-24 flex w-full pt-8 lg:mb-0 lg:pt-0">
        <div className="relative z-10 mx-auto flex max-w-[90%] items-center lg:m-0 lg:max-w-full">
          <div className="text-shadow flex flex-col gap-2">
            <div className="flex gap-2 pl-1 text-sm font-medium uppercase lg:text-lg">
              <div className="text-brand-primary">Chris Johnson</div>
              <div>&bull;</div>
              <div className="text-white/50">Frontend</div>
            </div>
            <div className="grid grid-cols-[auto,_1fr] gap-3 text-4xl lg:gap-4 lg:text-6xl">
              <div className="text-right font-extralight text-brand-secondary">
                UX/UI
              </div>
              <div className="font-bold">Developer</div>
              <div className="text-right font-extralight text-brand-secondary">
                &
              </div>
              <div className="flex flex-col gap-8 lg:gap-12">
                <div className="font-bold">Designer</div>
                <div className="text-base font-extralight leading-6 lg:text-balance lg:text-2xl lg:leading-8">
                  Passion for creating beautiful user experiences.
                </div>
                <div className="flex flex-col gap-4 lg:flex-row">
                  <Button
                    variant="secondary"
                    href="/ChrisJohnsonResume.pdf"
                    newTab
                  >
                    view resume
                  </Button>
                  <Button variant="primary" href="#contact">
                    contact me
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img-bg absolute -left-28 top-28 flex w-96 items-center justify-center pr-10 md:left-auto md:right-[50dvw] lg:relative lg:left-0 lg:top-0 lg:w-max">
          <Image
            src="/me.jpg"
            width={542}
            height={813}
            alt="Chris Johnson"
            className="relative -top-24 max-w-full mix-blend-lighten"
          />
        </div>
      </div>
    </SectionScroll>
  );
};
