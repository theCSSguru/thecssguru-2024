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
  title: 'theCSSguru | Senior Front End Developer',
  description: 'theCSSguru | Senior Front End Developer',
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
    <html
      lang="en"
      className={cn(
        'h-full min-h-full bg-black bg-gradient-to-br from-brand-primary/30 to-black font-sans text-white',
        inter.variable,
      )}
    >
      <body className="h-full min-h-full bg-brand-stripes">{children}</body>
    </html>
  );
}
