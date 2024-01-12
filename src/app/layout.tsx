import { cn } from '@lib/utilities';
import { Inter } from 'next/font/google';
import '@styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'theCSSguru | Senior Frontend Software Engineer',
  description: 'theCSSguru | Senior Frontend Software Engineer',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('bg-black font-sans', inter.variable)}>
        {children}
      </body>
    </html>
  );
}
