import React from 'react';

/*
 * Intro
 */
export const Intro = () => {
  return (
    <React.Fragment>
      <h1 className="flex flex-col items-center justify-between gap-3 text-center drop-shadow-lg">
        <div className="text-base font-extralight tracking-wider opacity-75">
          I&apos;m Chris Johnson
        </div>
        <div className="text-4xl font-bold md:text-5xl">
          <span className="text-brand-primary">Senior </span>
          <span>Front End </span>
          <span className="text-brand-secondary">Developer</span>
        </div>
        <div className="text-base font-extralight tracking-wider opacity-75">
          Passion for Creating and Maintaining Beautiful Code
        </div>
      </h1>
    </React.Fragment>
  );
};
