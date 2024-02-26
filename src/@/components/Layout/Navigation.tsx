'use client';
import useHash from '@/hooks/useHash';
import Link from 'next/link';

/*
 * Navigation
 */
export const Navigation = () => {
  const hash = useHash();

  const links = ['home', 'about', 'portfolio', 'experience', 'contact'];

  return (
    <nav className="overflow-hidden rounded-full border border-brand-secondary/25 bg-brand-secondary/15 px-4 backdrop-blur-sm">
      <ul className="flex text-lg text-white/50 hover:[&_a]:text-white">
        {links.map((item) => {
          return (
            <li
              className={
                item === hash || (hash === '' && item === 'home')
                  ? 'text-white'
                  : ''
              }
              key={item}
            >
              <div className="relative px-6 py-4">
                {item === hash || (hash === '' && item === 'home') ? (
                  <div className="bg-brand-nav-highlight absolute left-[-25%] top-[-25%] z-10 h-[150%] w-[150%]"></div>
                ) : null}
                <Link href={`#${item}`} className="relative z-20">
                  {item}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
