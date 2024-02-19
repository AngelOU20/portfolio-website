'use client';

import React from 'react';

import { SectionTitle, SectionSubTitle } from '../section';
import { mainProjectsData, otherProjectsData } from '@/lib/data';
import { projectTitle, projectSubTitle } from '@/lib/data';
import { MainProject, OtherProject } from './';
import { useSectionInView } from '@/hooks';

export function Projects() {
  const { ref } = useSectionInView('Proyectos', 0.4);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[40rem] sm:max-w-[60rem] leading-8 sm:mb-40 scroll-mt-28"
      id="proyectos"
    >
      <SectionTitle>{projectTitle}</SectionTitle>
      <SectionSubTitle>{projectSubTitle}</SectionSubTitle>

      <div className="max-w-[24rem] sm:max-w-[60rem] m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-10">
        {mainProjectsData.map((project, index) => (
          <React.Fragment key={index}>
            <MainProject index={index} {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="mt-28">
        <SectionTitle>Otros proyectos destacados</SectionTitle>
        <SectionSubTitle>Ver el archivo</SectionSubTitle>

        <div className="max-w-[20rem] sm:max-w-[60rem] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10">
          {otherProjectsData.map((project, index) => (
            <React.Fragment key={index}>
              <OtherProject index={index} {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
