import React from 'react';
import { social } from '@/lib/social';
import { Button } from '../Button/Button';

/*
 * Social
 */
export const Social = () => {
  return (
    <React.Fragment>
      {social.map((item) => (
        <Button
          key={item.id}
          href={item.url}
          newTab
          variant="secondary"
          className="p-4 opacity-25 hover:opacity-100"
        >
          {item.icon}
        </Button>
      ))}
    </React.Fragment>
  );
};
