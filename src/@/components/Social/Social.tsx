import React from 'react';
import { Card } from '@/components/Card/Card';
import { social } from '@/lib/social';
import Link from 'next/link';

/*
 * Social
 */
export const Social = () => {
  return (
    <React.Fragment>
      {social.map((item) => (
        <Card key={item.name} className="border-none p-0" tiltSoft>
          <Link
            href={item.url}
            target="_blank"
            title={item.name}
            className="opacity-90 drop-shadow-lg"
          >
            {item.icon}
          </Link>
        </Card>
      ))}
    </React.Fragment>
  );
};
