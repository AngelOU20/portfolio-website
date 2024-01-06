import {
  Introduction,
  SectionDivider,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
} from "@/components";

export default function Home () {

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
