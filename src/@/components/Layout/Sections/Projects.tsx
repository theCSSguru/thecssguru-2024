'use client';
import React from 'react';
import { SectionScroll } from '@/components/Layout/SectionScroll';

/*
 * Projects
 */
export const Projects = () => {
  return (
    <SectionScroll id="projects">
      <div className="flex flex-col gap-8">
        <h3 className="text-shadow text-center text-4xl font-bold">Projects</h3>
      </div>
    </SectionScroll>
  );
};
