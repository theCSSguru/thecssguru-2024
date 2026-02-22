export const Space = () => {
  return (
    <div className="space-wrap fixed inset-0 z-0">
      <div className="space-bg before:bg-[url('/bgspace.jpg')] after:bg-[url('/bg.jpg')]"></div>
      <div className="bg-brand-radial absolute inset-0 z-20 bg-cover opacity-35"></div>
      <div className="bg-brand-radial absolute inset-0 z-30 bg-cover opacity-65"></div>
      <div className="absolute inset-0 z-40">
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
