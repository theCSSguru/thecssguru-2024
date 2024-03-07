import { Navigation } from './Navigation';

/*
 * Header
 */
export const Header = () => {
  return (
    <header className="fixed inset-x-8 z-50 mx-auto flex max-w-screen-xl items-center justify-between py-7">
      <div className="logo relative text-3xl font-bold">
        <a href="#home">
          <span className="mr-2 text-brand-primary">{`{`}</span>
          <span>the</span>
          <span className="text-brand-secondary">CSS</span>
          <span>guru</span>
          <span className="ml-2 text-brand-primary">{`}`}</span>
        </a>
      </div>
      <Navigation />
    </header>
  );
};
