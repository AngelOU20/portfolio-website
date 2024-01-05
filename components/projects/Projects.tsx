"use client";

import React, { useRef } from "react";
import { SectionHeading } from "../section/SectionHeading";
import { mainProjectsData, otherProjectsData } from "@/lib/data";
import { MainProject } from "./MainProject";
import { useSectionInView } from "@/hooks";
import { OtherProject } from "./OtherProject";
import { motion, useScroll, useTransform } from "framer-motion";

export function Projects() {
  const { ref } = useSectionInView("Projects", 0.55);

  const refMotion = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: refMotion,
    offset: ["0 1", "1 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[44rem] leading-8 sm:mb-40 scroll-mt-28"
      id="projects"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {mainProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <MainProject {...project} />
          </React.Fragment>
        ))}
      </div>
      <motion.div
        ref={refMotion}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-2 sm:gap-5 sm:mt-8"
      >
        {otherProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <OtherProject {...project} />
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
