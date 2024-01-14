import { cn } from '@/lib/utilities';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

// Google Font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Meta Data
export const metadata = {
  title: 'theCSSguru | Senior Software Engineer',
  description: 'theCSSguru | Senior Software Engineer',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

/*
 * Layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'bg-black bg-gradient-to-br from-brand-primary/30 to-black font-sans text-white',
          inter.variable,
        )}
      >
        <div className="bg-brand-stripes min-h-screen">{children}</div>
      </body>
    </html>
  );
}
