"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileLight from "@/public/profile/profile-light-mode.svg";
import ProfileDark from "@/public/profile/profile-dark-mode.webp";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView, useTheme } from "@/hooks";

export function Introduction () {
  const { ref } = useSectionInView("Home", 0.5);
  const { theme } = useTheme();

  const imageUrl = theme === "dark" ? ProfileDark : ProfileLight;

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={imageUrl}
              alt="Images profile"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-56 w-56 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-[#010C15]/60"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="relative mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="absolute text-indigo-400 left-2 -top-4 text-sm sm:text-lg dark:text-[#98FAEC]">
          &lt;h1&gt;
        </span>
        Hey, I'm{" "}
        <span className="font-bold text-indigo-500 dark:text-[#12F7D6]">
          Julio Ucharima.
        </span>
        <br />
        I'm a <span className="font-bold">Full-Stack developer.</span>
        <span className="absolute text-indigo-400  -right-2 -bottom-4 text-sm sm:text-lg dark:text-[#98FAEC]">
          &lt;/h1&gt;
        </span>
      </motion.h1>

      <motion.p
        className="mb-10 mt-10 text-sm sm:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        I enjoy building <span className="italic">sites & apps</span>. My focus
        is <span className="underline">React (Next.js)</span>.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition dark:bg-gray-950 dark:border-black/5"
          href="#contact"
        >
          Contact me here
          <BsArrowRight className="opacity-75 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition cursor-pointer border border-black/5 dark:bg-white/10 dark:text-white/80"
          href="/CV_Julio_Ucharima_Ortiz.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-75 group-hover:animate-bounce transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/julio-angel-ucharima-ortiz-05a994221/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105  transition cursor-pointer border border-black/5 dark:bg-white/10 dark:text-white/80 dark:hover:text-gray-100"
        >
          <BsLinkedin className="text-xl" />
        </a>
        <a
          href="https://github.com/AngelOU20"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/5 dark:bg-white/10 dark:text-white/80 dark:hover:text-gray-100"
        >
          <BsGithub className="text-xl" />
        </a>
      </motion.div>
    </section>
  );
}
