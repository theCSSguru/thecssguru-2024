import React from 'react';

export const Space = () => {
  return (
    <div className="space fixed inset-0">
      <div className="bg-space fixed inset-0 z-0 bg-black bg-cover opacity-75"></div>
      <div className="fixed inset-0 z-10 bg-brand-img bg-cover opacity-50 mix-blend-darken"></div>
      <div className="fixed inset-0 z-20 bg-brand-radial bg-cover mix-blend-soft-light"></div>
      <div className="fixed inset-0 z-30 bg-brand-radial bg-cover opacity-50 mix-blend-overlay"></div>
      <div className="fixed inset-0 z-40">
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="absolute left-[70rem] top-[-20rem] flex h-[800dvh] origin-top-left rotate-[70deg] gap-4 opacity-10 lg:top-[-10rem]">
            {Array.from({ length: 4 }, (_, i) => {
              const rand = Math.random() + 2;
              const randFixed = rand.toFixed(2);
              return (
                <div
                  className="brand-lines h-full w-5 bg-white"
                  key={i}
                  style={
                    {
                      '--animation-time': randFixed + 's',
                    } as React.CSSProperties
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
