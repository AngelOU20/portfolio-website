"use client";

import React from "react";
import Image from "next/image";
import ProgrammingLight from "@/public/about/programming-light.svg";
import DogWalkingLight from "@/public/about/dog_walking-light.svg";
import HealthyHabitLight from "@/public/about/healthy_habit-light.svg";
import ProgrammingDark from "@/public/about/programming-dark.svg";
import DogWalkingDark from "@/public/about/dog_walking-dark.svg";
import HealthyHabitDark from "@/public/about/healthy_habit-dark.svg";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components";
import { useSectionInView, useTheme } from "@/hooks";

export function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();

  const imgPrograming = theme === "dark" ? ProgrammingDark : ProgrammingLight;
  const imgDogWalking = theme === "dark" ? DogWalkingDark : DogWalkingLight;
  const imgHealthyHabit =
    theme === "dark" ? HealthyHabitDark : HealthyHabitLight;

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-center">
        I am a{" "}
        <span className="font-medium">
          23-year-old Computer Engineering and Systems student
        </span>
        ,<span className="italic">passionate about programming</span> and an{" "}
        <span className="underline">insatiable thirst for knowledge</span>. My
        journey in Full-Stack development has been short but intense, mastering
        technologies such as{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Node.js, MongoDB, .Net and Laravel
        </span>
        . I am{" "}
        <span className="font-medium">
          committed, responsible and collaborative
        </span>
        , always looking to learn new technologies. Currently, I am in search of
        a{" "}
        <span className="font-medium">
          full-time position as a software developer
        </span>
        , ready to take my enthusiasm and skills to new horizons.
      </p>
      <p className="mb-3 text-center">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
      <div className="relative h-[340px] sm:h-[300px]">
        <Image
          src={imgPrograming}
          alt="Images profile light mode"
          quality="95"
          priority={true}
          className="absolute h-44 w-44 sm:h-48 sm:w-48 rounded-full  border-[0.35rem] border-white shadow-xl dark:fill-current dark:text-[#12F7D6]"
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
