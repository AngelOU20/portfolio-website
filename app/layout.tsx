import './globals.css';
import { Inter } from 'next/font/google';
import { ActiveSectionProvider } from '@/context/activeSection';
import { ThemeProvider } from '../context/theme';
import { Footer, Header, ThemeSwitch } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Julio Ucharima Portfolio',
  description: "I'm a full-stack developer with 1 year of experience.",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} pt-28 sm:pt-36 relative bg-gray-50 text-gray-900 dark:bg-[#0a192f] dark:text-white`}
      >
        <div className="bg-[#ffdfe0] absolute -z-10 top-[-6rem] right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#43D9AD] dark:blur-[15rem]"></div>

        <div className="bg-[#ddd9ff] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#5867d6] dark:blur-[12rem]"></div>

        <ThemeProvider>
          <ActiveSectionProvider>
            <Header />
            {children}
            <ThemeSwitch />
            <Footer />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
