import { Experience } from "../components/experience/Experience";
import {
  Introduction,
  SectionDivider,
  About,
  Projects,
  Skills,
  Contact,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Introduction />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
