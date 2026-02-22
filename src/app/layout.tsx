import { cn } from '@/lib/utilities';
import { Inter } from 'next/font/google';
import { Space } from '@/components/Space/Space';
import { ActiveSectionContextProvider } from '@/context/ActiveSectionContext';
import '@/styles/globals.css';

// Google Font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

// Meta Data
export const metadata = {
  title: 'theCSSguru | Frontend UI Developer, Design Systems',
  description: 'theCSSguru | Frontend UI Developer, Design Systems',
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
    <html lang="en" className={cn('scroll-smooth text-white', inter.variable)}>
      <body className="bg-black">
        <Space />
        <ActiveSectionContextProvider>
          <div className="relative z-20 mx-auto w-full max-w-screen-xl">
            {children}
          </div>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
