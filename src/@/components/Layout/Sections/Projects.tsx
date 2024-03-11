'use client';
import React, { useRef } from 'react';
import { SectionScroll } from '@/components/Layout/SectionScroll';
import { Card } from '@/components/Card/Card';
import { cn } from '@/lib/utilities';
import { motion, useScroll, useTransform } from 'framer-motion';

/*
 * Projects
 */
export const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0.4 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const xs = 'col-start-1 col-end-13 row-auto';
  return (
    <SectionScroll id="projects">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <div className="flex flex-col gap-8">
          <div className="grid auto-rows-auto grid-cols-12 gap-6 text-center">
            <Card
              className={cn(xs, 'md:col-end-7 lg:col-end-13')}
              stats="Axis"
              statsSub="Booking Engine UI/UX Design and Development"
            />
            <Card
              className={cn(
                xs,
                'md:col-start-7 md:col-end-13 lg:col-start-1 lg:col-end-5',
              )}
              image="/axis-srp.jpg"
              imageAlt="Axis Search Results Page"
            />
            <Card
              className={cn(xs, 'md:col-end-7 lg:col-start-5 lg:col-end-9')}
              image="/axis-pdp.jpg"
              imageAlt="Axis Property Detail Page"
            />
            <Card
              className={cn(
                xs,
                'md:col-start-7 md:col-end-13 lg:col-start-9 lg:col-end-13',
              )}
              image="/axis-booknow.jpg"
              imageAlt="Axis Book Now Page"
            />
            <Card
              className={cn(xs, 'md:col-end-7 lg:col-end-13')}
              stats="Locally Epic"
              statsSub="Native iOS/Android UI/UX Design and Development"
            />
            <Card
              className={cn(
                xs,
                'md:col-start-7 md:col-end-13 lg:col-start-1 lg:col-end-5',
              )}
              image="/le-offers.jpg"
              imageAlt="Locally Epic Offers Page"
            />
            <Card
              className={cn(xs, 'md:col-end-7 lg:col-start-5 lg:col-end-9')}
              image="/le-details.jpg"
              imageAlt="Locally Epic Details Page"
            />
            <Card
              className={cn(
                xs,
                'md:col-start-7 md:col-end-13 lg:col-start-9 lg:col-end-13',
              )}
              image="/le-search.jpg"
              imageAlt="Locally Epic Search Page"
            />
          </div>
        </div>
      </motion.div>
    </SectionScroll>
  );
};
