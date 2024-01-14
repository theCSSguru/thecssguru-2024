import { Card } from '@/components/Card/Card';
import Link from 'next/link';
import { FaLinkedin, FaSquareGithub, FaSquareXTwitter } from 'react-icons/fa6';

/*
 * Header
 */
export const Header = () => {
  const social = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/thecssguru',
      icon: <FaLinkedin size={32} />,
    },
    {
      name: 'Github',
      url: 'https://github.com/thecssguru',
      icon: <FaSquareGithub size={32} />,
    },
    {
      name: 'X',
      url: 'https://twitter.com/thecssguru',
      icon: <FaSquareXTwitter size={32} />,
    },
  ];
  return (
    <header>
      <Card
        className="bg-gradient-to-tl from-black/30"
        childClassName="flex items-center justify-between"
        tilt={false}
      >
        <div className="text-lg drop-shadow-lg md:text-3xl">
          <span className="mr-2 text-brand-primary">{`{`}</span>
          <span>the</span>
          <span className="font-bold text-brand-secondary">CSS</span>
          <span>guru</span>
          <span className="ml-2 text-brand-primary">{`}`}</span>
        </div>
        <div className="flex gap-1 md:gap-2">
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
        </div>
      </Card>
    </header>
  );
};
