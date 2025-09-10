import React from 'react';
import { Header } from '@/components/Layout/Header';
import { Hero } from '@/components/Layout/Sections/Hero';
import { About } from '@/components/Layout/Sections/About';
import { Projects } from '@/components/Layout/Sections/Projects';
import { Experience } from '@/components/Layout/Sections/Experience';
import { Contact } from '@/components/Layout/Sections/Contact';
import { Footer } from '@/components/Layout/Footer';

export const dynamic = 'error'; // or 'force-static'

/*
 * HomePage
 */
export default function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
