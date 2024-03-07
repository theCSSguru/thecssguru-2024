import React from 'react';
import { social } from '@/lib/social';
import Link from 'next/link';

/*
 * Social
 */
export const Social = () => {
  return (
    <React.Fragment>
      {social.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          title={item.name}
          className="text-brand-secondary opacity-70 drop-shadow-md transition-opacity hover:opacity-100"
        >
          {item.icon}
        </Link>
      ))}
    </React.Fragment>
  );
};
