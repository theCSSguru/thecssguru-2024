import { Header } from '@/components/Layout/Header';
import { Card } from '@/components/Card/Card';
import { Footer } from '@/components/Layout/Footer';

/*
 * Page
 */
export default function HomePage() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] gap-4 p-4 md:min-h-screen">
      <Header />
      <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="bg-gradient-to-tl from-black/10 md:col-span-1">
          lorem1
        </Card>
        <Card className="bg-gradient-to-tl from-brand-primary/15 lg:col-span-2">
          lorem2
        </Card>
        <Card className="bg-gradient-to-tl from-white/20 md:col-start-2 md:col-end-3 md:row-span-2 lg:col-start-3 lg:col-end-4 xl:col-start-auto xl:col-end-auto">
          lorem3
        </Card>
        <Card className="bg-gradient-to-tl from-brand-secondary/15 md:row-start-2 md:row-end-4 lg:col-span-2 lg:row-end-3 xl:col-span-3">
          lorem4
        </Card>
        <Card className="bg-gradient-to-tl from-white/5 md:col-span-2 lg:col-span-1">
          lorem5
        </Card>
        <Card className="bg-gradient-to-tl from-white/5 md:col-span-2 lg:col-span-1">
          lorem6
        </Card>
        <Card className="bg-gradient-to-tl from-white/5 md:col-span-2 xl:col-span-1">
          lorem7
        </Card>
        <Card className="bg-gradient-to-tl from-white/5 md:col-span-2 lg:col-span-1">
          lorem8
        </Card>
      </main>
      <Footer />
    </div>
  );
}
