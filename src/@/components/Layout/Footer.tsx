import { Card } from '@/components/Card/Card';

/*
 * Footer
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Card className="bg-gradient-to-tl from-black/50" tilt={false}>
        <div className="text-center text-sm opacity-25 md:text-base">
          &copy; Copyright {currentYear} of theCSSguru
        </div>
      </Card>
    </footer>
  );
};
