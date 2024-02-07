'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView, useTheme } from '@/hooks';
import { SectionHeading, SectionSubHeading } from '../section';
import { experienceTitle, experienceSubTitle } from '@/lib/data';
import { experiencesData } from '@/lib/data';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function Experience() {
  const { ref } = useSectionInView('Experiencia');
  const { theme } = useTheme();

  return (
    <motion.section
      id="experiencia"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 1 },
        hidden: { opacity: 0, y: 60 },
      }}
    >
      <SectionHeading>{experienceTitle}</SectionHeading>
      <SectionSubHeading>{experienceSubTitle}</SectionSubHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : '#010C15',
                fontSize: '1.5rem',
              }}
              dateClassName="font-semibold"
            >
              <h3 className="font-semibold capitalize !mb-1">{experience.title}</h3>
              <p className="font-normal !mt-0 !mb-2">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
