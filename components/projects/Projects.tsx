'use client';

import React, { useState } from 'react';
import { SectionTitle, SectionSubTitle } from '../section';
import { mainProjectsData, otherProjectsData } from '@/lib/data';
import { projectTitle, projectSubTitle } from '@/lib/data';
import { MainProject, OtherProject } from './';
import { useSectionInView } from '@/hooks';

export function Projects() {
  const { ref } = useSectionInView('Proyectos', 0.4);
  const [showAllMainProjects, setShowAllMainProjects] = useState(false);

  const handleShowMore = () => {
    setShowAllMainProjects(true);
  };

  const handleShowLess = () => {
    setShowAllMainProjects(false);
  };

  const mainProjectsToShow = showAllMainProjects
    ? mainProjectsData
    : mainProjectsData.slice(0, 4);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[40rem] sm:max-w-[60rem] leading-8 sm:mb-40 scroll-mt-28"
      id="proyectos"
    >
      <SectionTitle>{projectTitle}</SectionTitle>
      <SectionSubTitle>{projectSubTitle}</SectionSubTitle>

      <div className="max-w-[24rem] sm:max-w-[60rem] m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-10">
        {mainProjectsToShow.map((project, index) => (
          <React.Fragment key={index}>
            <MainProject index={index} {...project} />
          </React.Fragment>
        ))}
      </div>

      <div className="text-center mt-10">
        {showAllMainProjects ? (
          <button
            onClick={handleShowLess}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600
            dark:bg-white/10 dark:text-gray-50 hover:dark:bg-white/20"
          >
            Ver menos proyectos
          </button>
        ) : (
          <button
            onClick={handleShowMore}
            className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600
            dark:bg-white/10 dark:text-gray-50 hover:dark:bg-white/20"
          >
            Ver más proyectos
          </button>
        )}
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
