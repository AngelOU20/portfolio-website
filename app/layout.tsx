import "./globals.css";
import { Inter } from "next/font/google";
import { Footer, Header } from "@/components";
import { ActiveSectionProvider } from "@/context/activeSection";
import { ThemeSwitch } from "../components/switch/ThemeSwitch";
import { ThemeProvider } from "../context/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julio | Personal Portfolio",
  description: "Julio is a front-end developer with 1 year of experience.",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 relative pt-28 sm:pt-36 dark:bg-[#010C15] dark:text-white`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#43D9AD] "></div>

        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4D5BCE]"></div>

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
