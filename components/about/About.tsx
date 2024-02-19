'use client';

import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';

import {
  programmingLight,
  programmingDark,
  dogWalkingDark,
  dogWalkingLight,
  healthyHabitLight,
  healthyHabitDark,
} from '@/public/about';

import { aboutMeContent } from '@/lib/data';
import { motion } from 'framer-motion';
import { SectionTitle, SectionSubTitle } from '@/components';
import { useSectionInView, useTheme } from '@/hooks';

export function About() {
  const { ref } = useSectionInView('Sobre mi');
  const { theme } = useTheme();

  const imgPrograming = theme === 'dark' ? programmingDark : programmingLight;
  const imgDogWalking = theme === 'dark' ? dogWalkingDark : dogWalkingLight;
  const imgHealthyHabit = theme === 'dark' ? healthyHabitDark : healthyHabitLight;

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sobre-mi"
    >
      <SectionTitle>{aboutMeContent.aboutTitle}</SectionTitle>
      <SectionSubTitle>{aboutMeContent.aboutSubTitle}</SectionSubTitle>

      <p className="mb-3 text-left">{parse(aboutMeContent.firstParagraph)}</p>
      <p className="mb-3 text-left">{parse(aboutMeContent.secondParagraph)}</p>

      <div className="relative h-[340px] sm:h-[300px]">
        <Image
          src={imgPrograming}
          alt="Images profile light mode"
          quality="95"
          priority={true}
          className="absolute h-44 w-44 sm:h-48 sm:w-48 rounded-full border-[0.35rem] border-white shadow-xl dark:fill-current dark:text-[#12F7D6]"
        />
        <Image
          src={imgHealthyHabit}
          alt="Images profile light mode"
          quality="95"
          priority={true}
          className="absolute left-32 bottom-2 h-40 w-40 sm:left-64 sm:top-20 sm:h-48 sm:w-48 rounded-full border-[0.35rem] border-white shadow-xl"
        />
        <Image
          src={imgDogWalking}
          alt="Images profile light mode"
          quality="95"
          priority={true}
          className="absolute -right-0 sm:-right-2 h-40 w-40 sm:top-2 sm:h-48 sm:w-48 rounded-full border-[0.35rem] border-white shadow-xl "
        />
      </div>
    </motion.section>
  );
}
