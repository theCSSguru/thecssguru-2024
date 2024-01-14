import { Header } from '@/components/Layout/Header';
import { Card } from '@/components/Card/Card';
import { Profile } from '@/components/Layout/Sections/Profile';
import { Experience } from '@/components/Layout/Sections/Experience';
import { Footer } from '@/components/Layout/Footer';
import { Intro } from '@/components/Layout/Sections/Intro';

/*
 * Page
 */
export default function HomePage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4 p-4 md:min-h-screen">
      <Header />
      <main className="grid grid-rows-[auto_1fr_auto] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="bg-gradient-to-b from-white/10 md:col-span-1">
          <Profile />
        </Card>
        <Card className="flex items-center justify-center bg-gradient-to-b from-brand-primary/20 lg:col-span-2">
          <Intro />
        </Card>
        <Card
          tiltSoft
          className="bg-gradient-to-b from-white/20 md:col-start-2 md:col-end-3 md:row-span-2 lg:col-start-3 lg:col-end-4 xl:col-start-auto xl:col-end-auto"
        >
          <Experience />
        </Card>
        <Card className="bg-gradient-to-b from-brand-secondary/30 md:row-start-2 md:row-end-4 lg:col-span-2 lg:row-end-3 xl:col-span-3">
          lorem4
        </Card>
        <Card className="bg-gradient-to-b from-white/10 md:col-span-2 lg:col-span-1">
          lorem5
        </Card>
        <Card className="bg-gradient-to-b from-white/10 md:col-span-2 lg:col-span-1">
          lorem6
        </Card>
        <Card className="bg-gradient-to-b from-white/10 md:col-span-2 xl:col-span-1">
          lorem7
        </Card>
        <Card className="bg-gradient-to-b from-white/10 md:col-span-2 lg:col-span-1">
          lorem8
        </Card>
      </main>
      <Footer />
    </div>
  );
}
