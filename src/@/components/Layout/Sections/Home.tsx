'use client';
import { useSectionInView } from '@/hooks/useSectionInView';

/*
 * Home
 */
export const Home = () => {
  const { ref } = useSectionInView('home');

  return (
    <div id="home" ref={ref}>
      home
    </div>
  );
};
