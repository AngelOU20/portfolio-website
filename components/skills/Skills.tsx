'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { skillTitle, skillSubTitle } from '@/lib/data';
import { useSectionInView } from '@/hooks';
import { SectionSubTitle, SectionTitle } from '../section';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export function Skills() {
  const { ref } = useSectionInView('Habilidades');

  return (
    <section
      id="habilidades"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionTitle>{skillTitle}</SectionTitle>
      <SectionSubTitle>{skillSubTitle}</SectionSubTitle>
      <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800 sm:text-base">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
