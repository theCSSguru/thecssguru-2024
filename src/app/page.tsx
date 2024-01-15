import { Header } from '@/components/Layout/Header';
import { Intro } from '@/components/Layout/Sections/Intro';
import { Skills } from '@/components/Layout/Sections/Skills';
import { Experience } from '@/components/Layout/Sections/Experience';
import { Testimonials } from '@/components/Layout/Sections/Testimonials';
import { Footer } from '@/components/Layout/Footer';

/*
 * Page
 */
export default function HomePage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4 p-4 sm:min-h-screen">
      <Header />
      <main className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8">
        <Intro />
        <Skills />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
