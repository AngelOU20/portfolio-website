// "use client";

// import {
//   Introduction,
//   SectionDivider,
//   About,
//   Experience,
//   Loader,
//   Projects,
//   Skills,
//   Contact,
//   Header,
//   ThemeSwitch,
//   Footer,
// } from "@/components";
// import { useState } from "react";

// export default function Home () {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showContent, setShowContent] = useState(false);

//   const handleLoaderLoaded = () => {
//     setIsLoading(false);
//     setTimeout(() => setShowContent(true), 450);
//   };

//   return (
//     <>
//       {showContent && (
//         <>
//           <Header />

//           <main className="flex flex-col items-center px-4 pt-28 sm:pt-36">
//             <Introduction />
//             <SectionDivider />
//             <About />
//             <Experience />
//             <Skills />
//             <Projects />
//             <Contact />
//           </main>

//           <ThemeSwitch />
//           <Footer />
//         </>
//       )}
//       <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
//     </>
//   );
// }
