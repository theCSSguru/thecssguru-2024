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
      <Card className="flex items-center justify-between bg-gradient-to-tl from-black/30">
        <div className="text-lg md:text-3xl">
          <span className="mr-2 text-brand-primary">{`{`}</span>
          <span>the</span>
          <span className="font-bold text-brand-secondary">CSS</span>
          <span>guru</span>
          <span className="ml-2 text-brand-primary">{`}`}</span>
        </div>
        <div className="flex gap-1 md:gap-2">
          {social.map((item) => (
            <Link
              key={item.name}
              href={item.url}
              target="_blank"
              title={item.name}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </Card>
    </header>
  );
};
