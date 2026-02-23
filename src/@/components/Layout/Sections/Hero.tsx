'use client';
import { Button } from '@/components/Button/Button';
import { Social } from '@/components/Social/Social';
import { SectionScroll } from '@/components/Layout/SectionScroll';
import { FaExternalLinkAlt, FaRegFilePdf } from 'react-icons/fa';

export const Hero = () => {
  return (
    <SectionScroll id="Home" className="lg:pb-32">
      <div className="relative flex h-full w-full flex-col justify-evenly overflow-x-clip lg:relative lg:mb-0 lg:flex-row">
        <div className="order-2 mx-auto -mt-32 flex max-w-full items-center lg:relative lg:order-1 lg:m-0">
          <div className="text-shadow flex w-full flex-col gap-1 lg:gap-2">
            <div className="flex gap-2 pl-1 text-sm font-medium uppercase lg:text-lg">
              <div className="font-bold text-brand-primary">Chris Johnson</div>
              <div>&bull;</div>
              <div className="font-bold text-white/50">Frontend</div>
            </div>
            <div className="grid grid-cols-[auto,_1fr] gap-x-3 gap-y-1 text-3xl lg:gap-4 lg:text-6xl">
              <div className="text-right font-light text-brand-secondary">
                UI
              </div>
              <div className="font-bold">
                Developer
                <span className="text-right font-light text-brand-secondary">
                  ,
                </span>
              </div>
              <div></div>
              <div className="flex flex-col gap-4 lg:gap-12">
                <div className="font-bold">
                  Design{' '}
                  <span className="font-light text-brand-secondary">
                    Systems
                  </span>
                </div>
                <h1 className="text-balance text-base font-extralight leading-7 lg:text-2xl lg:leading-9">
                  Specializing in scalable, accessible frontend experiences.
                </h1>
                <div className="flex flex-col gap-4 lg:flex-row">
                  <Button
                    variant="secondary"
                    href="/ChrisJohnsonResume.pdf"
                    newTab
                    className="items-center gap-2"
                  >
                    Resume <FaRegFilePdf fontSize={14} />
                  </Button>
                  <Button
                    variant="primary"
                    href="https://linkedin.com/in/thecssguru"
                    newTab
                    className="items-center gap-2"
                  >
                    Contact <FaExternalLinkAlt fontSize={14} />
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img-bg -z-10 order-1 mx-auto -mt-16 flex w-full max-w-[542px] flex-col justify-center lg:top-0 lg:order-2 lg:m-0">
          <div className="relative aspect-square">
            <div className="me bg-[url('/me.jpg')]"></div>
            <div className="tech-border">
              <div className="me-stylish bg-[url('/me3.jpg')]"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionScroll>
  );
};
