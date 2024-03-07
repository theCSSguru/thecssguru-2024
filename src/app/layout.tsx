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
  title: 'theCSSguru | Frontend UX/UI Developer & Designer',
  description: 'theCSSguru | Frontend UX/UI Developer & Designer',
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
      <body className="bg-black px-8">
        <Space />
        <div className="relative mx-auto w-full max-w-screen-xl">
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
