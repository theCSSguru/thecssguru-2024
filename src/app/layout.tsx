import { cn } from '@/lib/utilities';
import { Inter } from 'next/font/google';
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
      <body className="bg-black">
        <div className="bg-brand-radial fixed inset-0 z-0 mix-blend-hard-light"></div>
        <div className="bg-brand-img fixed inset-0 z-10 bg-cover opacity-50 mix-blend-darken"></div>
        <div className="fixed inset-0 z-30 flex gap-20 opacity-10">
          {Array.from({ length: 4 }, (_, i) => {
            return (
              <div
                className="relative left-[60dvw] top-[-10dvh] h-[200dvh] w-5 origin-top rotate-[69deg] bg-white"
                key={i}
              ></div>
            );
          })}
        </div>
        <div className="relative z-40 mx-auto max-w-screen-2xl">
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
