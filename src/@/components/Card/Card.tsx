'use client';
import { cn } from '@/lib/utilities';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

/*
 * Card
 */
export const Card = ({
  children,
  className,
  tilt = true,
  tiltSoft,
  stats,
  statsSub,
  image,
  imageAlt,
}: CardProps) => {
  const cardDefaultStyles =
    'rounded-2xl p-10 border border-white/20 border-b-white/10 border-r-white/10 bg-white/10 shadow-2xl';

  const tiltDeg = tiltSoft ? '5deg' : '10deg';
  const tiltDegNeg = tiltSoft ? '-5deg' : '-10deg';

  /* eslint-disable */
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [tiltDeg, tiltDegNeg],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [tiltDegNeg, tiltDeg],
  );
  /* eslint-enable */

  if (tilt) {
    /* eslint-disable */
    const handleMouseMove = (e: any) => {
      const rect = e.target.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };
    /* eslint-enable */

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const renderContent = () => {
      if (stats) {
        return (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 py-4">
            <h3 className="text-shadow text-7xl font-bold">{stats}</h3>
            <h4 className="text-shadow text-2xl font-extralight">{statsSub}</h4>
          </div>
        );
      }
      if (image) {
        return (
          <div className="h-full w-full overflow-hidden rounded-xl">
            <Image
              src={image}
              width={720}
              height={960}
              alt={imageAlt ?? ''}
              className="h-full w-full object-cover"
            />
          </div>
        );
      }
      return children;
    };

    return (
      <motion.div
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: 'preserve-3d',
        }}
        className={cn(cardDefaultStyles, className)}
      >
        <div
          style={{
            transform: 'translateZ(75px)',
            transformStyle: 'preserve-3d',
          }}
          className="h-full"
        >
          {renderContent()}
        </div>
      </motion.div>
    );
  }
  return <div className={cn(cardDefaultStyles, className)}>{children}</div>;
};

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  tilt?: boolean;
  tiltSoft?: boolean;
  stats?: string;
  statsSub?: string;
  image?: string;
  imageAlt?: string;
};
