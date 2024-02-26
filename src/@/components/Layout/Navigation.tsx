'use client';
import { links } from '@/lib/links';
import { cn } from '@/lib/utilities';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';

/*
 * Navigation
 */
export const Navigation = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav className="overflow-hidden rounded-full border border-brand-secondary/25 bg-brand-secondary/15 px-4 backdrop-blur-sm">
      <ul className="flex">
        {links.map((link) => {
          return (
            <li key={link}>
              <div className="relative px-6 py-4">
                <Link
                  href={`#${link}`}
                  className={cn('text-lg text-white/50 hover:text-white', {
                    'text-white': activeSection === link,
                  })}
                  onClick={() => {
                    setActiveSection(link);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link}
                  {link === activeSection ? (
                    <motion.span
                      className="bg-brand-nav-highlight absolute left-[-25%] top-[-25%] z-10 h-[150%] w-[150%]"
                      layoutId="activeSection"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  ) : null}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
