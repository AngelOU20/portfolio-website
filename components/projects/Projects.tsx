"use client";

import React from "react";
import { SectionHeading } from "../section/SectionHeading";
import { mainProjectsData, otherProjectsData } from "@/lib/data";
import { MainProject } from "./MainProject";
import { useSectionInView } from "@/hooks";
import { OtherProject } from "./OtherProject";
import { SectionSubHeading } from "../section";

export function Projects () {
  const { ref } = useSectionInView("Projects", 0.55);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[44rem] leading-8 sm:mb-40 scroll-mt-28"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <SectionSubHeading>Most recent work</SectionSubHeading>
      <div>
        {mainProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <MainProject {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 gap-2 sm:gap-5 sm:mt-8">
        {otherProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <OtherProject {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
