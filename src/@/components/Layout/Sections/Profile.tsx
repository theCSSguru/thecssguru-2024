import React from 'react';
import Image from 'next/image';

/*
 * Profile
 */
export const Profile = () => {
  return (
    <React.Fragment>
      <Image
        src="/me.jpg"
        alt="Chris Johnson | theCSSguru"
        width={300}
        height={300}
        className="aspect-square h-auto w-full rounded-full border-8 border-black/50 shadow-xl outline-double outline-white/5"
      />
    </React.Fragment>
  );
};
