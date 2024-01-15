import { Header } from '@/components/Layout/Header';
import { Card } from '@/components/Card/Card';
import { Profile } from '@/components/Layout/Sections/Profile';
import { Experience } from '@/components/Layout/Sections/Experience';
import { Footer } from '@/components/Layout/Footer';
import { Intro } from '@/components/Layout/Sections/Intro';
import { Testimonials } from '@/components/Layout/Sections/Testimonials';

/*
 * Page
 */
export default function HomePage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4 p-4 sm:min-h-screen">
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Profile />
        <Intro />
        <Experience />
        <Card className="bg-gradient-to-b from-brand-secondary/30 sm:row-start-2 sm:row-end-4 lg:col-span-2 lg:row-end-3 xl:col-span-3">
          lorem4
        </Card>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
