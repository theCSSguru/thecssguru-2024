'use client';
import React, { useState } from 'react';
import { links } from '@/lib/links';
import { cn } from '@/lib/utilities';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/ActiveSectionContext';
import { Button } from '../Button/Button';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Link from 'next/link';

/*
 * Navigation
 */
export const Navigation = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [navOpen, setNavOpen] = useState(false);

  const mobile =
    'hidden fixed top-24 left-8 right-8 rounded-2xl overflow-hidden border border-brand-secondary/25 bg-brand-secondary/15 backdrop-blur [&>ul]:flex-col [&>ul]:text-center [&>ul>li>div>a]:text-2xl';
  const desktop =
    'lg:flex lg:relative lg:top-0 lg:left-auto lg:right-auto lg:rounded-full lg:px-4 lg:backdrop-blur-sm lg:[&>ul]:flex-row lg:[&>ul>li>div>a]:text-xl';

  const handleOnClick = () => {
    if (navOpen === true) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };

  const handleCloseNavAfterLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <React.Fragment>
      <div className="lg:hidden">
        <Button variant="primary" className="px-4" onClick={handleOnClick}>
          {navOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </Button>
      </div>
      <nav
        className={cn(mobile, desktop, {
          flex: navOpen,
        })}
      >
        <ul className="flex w-full">
          {links.map((link) => {
            return (
              <li key={link}>
                <div className="relative px-6 py-4">
                  <Link
                    href={`#${link}`}
                    className={cn(
                      'text-white/50 transition-all hover:text-white',
                      {
                        'text-white': activeSection === link,
                      },
                    )}
                    onClick={() => {
                      setActiveSection(link);
                      setTimeOfLastClick(Date.now());
                      handleCloseNavAfterLinkClick();
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
    </React.Fragment>
  );
};
