'use client';

import React from 'react';
import { SectionHeading } from '../section/SectionHeading';
import { mainProjectsData, otherProjectsData } from '@/lib/data';
import { projectTitle, projectSubTitle } from '@/lib/data';
import { MainProject, OtherProject } from './';
import { useSectionInView } from '@/hooks';
import { SectionSubHeading } from '../section';

export function Projects() {
  const { ref } = useSectionInView('Proyectos', 0.4);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[44rem] leading-8 sm:mb-40 scroll-mt-28"
      id="proyectos"
    >
      <SectionHeading>{projectTitle}</SectionHeading>
      <SectionSubHeading>{projectSubTitle}</SectionSubHeading>
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
