import { Navigation } from './Navigation';

/*
 * Header
 */
export const Header = () => {
  return (
    <header className="fixed z-50 mx-auto flex w-full max-w-screen-2xl items-center justify-between py-7">
      <div className="text-lg font-bold md:text-3xl">
        <a href="#home">
          <span className="mr-2 text-brand-primary">{`{`}</span>
          <span>the</span>
          <span className="text-brand-secondary">CSS</span>
          <span>guru</span>
          <span className="ml-2 text-brand-primary">{`}`}</span>
        </a>
      </div>
      <div className="flex gap-1 md:gap-2">
        <Navigation />
      </div>
    </header>
  );
};
