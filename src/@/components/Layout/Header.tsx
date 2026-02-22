import { Button } from '../Button/Button';
import { Navigation } from './Navigation';

/*
 * Header
 */
export const Header = () => {
  return (
    <header className="sticky top-0 z-30 mx-auto flex max-w-screen-xl items-center justify-between overflow-hidden px-8 py-7">
      <div className="logo relative">
        <Button
          href="#home"
          className="border-none p-0 text-3xl font-bold lg:text-3xl"
        >
          <span className="mr-2 text-brand-primary">{`{`}</span>
          <span>the</span>
          <span className="text-brand-secondary">CSS</span>
          <span>guru</span>
          <span className="ml-2 text-brand-primary">{`}`}</span>
        </Button>
      </div>
      <Navigation />
    </header>
  );
};
