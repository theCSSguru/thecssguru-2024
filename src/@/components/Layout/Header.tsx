import { Card } from '@/components/Card/Card';

/*
 * Header
 */
export const Header = () => {
  return (
    <header>
      <Card className="flex items-center justify-between bg-gradient-to-tl from-black/30">
        <div className="text-3xl">
          <span className="mr-2 text-brand-primary">{`{`}</span>
          <span>the</span>
          <span className="font-bold text-brand-secondary">CSS</span>
          <span>guru</span>
          <span className="ml-2 text-brand-primary">{`}`}</span>
        </div>
        <div>bruh</div>
      </Card>
    </header>
  );
};
