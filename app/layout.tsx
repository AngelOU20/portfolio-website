
import "./globals.css";
import { Inter } from "next/font/google";
import { ActiveSectionProvider } from "@/context/activeSection";
import { ThemeProvider } from "../context/theme";
import { Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Julio Ucharima Portfolio",
  description: "I'm a full-stack developer with 1 year of experience.",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 text-gray-900 dark:bg-[#010C15] dark:text-white`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-[#43D9AD] dark:blur-[25rem]"></div>

        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#4D5BCE] dark:blur-[20rem]"></div>

        <ThemeProvider>
          <ActiveSectionProvider>
            {children}
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
