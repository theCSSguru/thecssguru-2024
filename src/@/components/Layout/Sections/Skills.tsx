import { Card } from '@/components/Card/Card';
import { skills } from '@/lib/skills';
import { FaLaptopCode } from 'react-icons/fa6';

/*
 * Skills
 */
export const Skills = () => {
  return (
    <Card className="bg-gradient-to-b from-brand-secondary/30 lg:col-span-2 xl:col-span-2 xl:col-start-5">
      <h2 className="mb-2 flex items-center gap-3 text-2xl font-bold tracking-wide drop-shadow-lg">
        <FaLaptopCode />
        Skills
      </h2>
      <div className="flex flex-wrap gap-1 text-xs">
        {skills.map((item) => (
          <div key={item} className="rounded-full bg-black/10 px-2 py-0.5">
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
};
