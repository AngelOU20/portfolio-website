"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { mainProjectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import { IoLink } from "react-icons/io5";
import { LinkButton, Tag } from ".";

type ProjectProps = (typeof mainProjectsData)[number];

export function MainProject({
  title,
  description,
  tags,
  imageUrl,
  links,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section
        className="bg-gray-100 max-w-[44rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:relative sm:h-[20rem] hover:bg-gray-200 transition 
      dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-8 sm:pr-0 sm:pt-10 sm:max-w-[50%] flex flex-col h-full justify-between gap-4 sm:gap-1">
          <h3 className="text-2xl font-semibold my-0">{title}</h3>
          <p className="leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-3 sm:mt-2 sm:mb-2">
            {tags.map((tag, index) => (
              <Tag key={index} {...tag} />
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <LinkButton href={links.code} label="Code" />
            {links.demo && (
              <LinkButton href={links.demo} label="Demo" icon={<IoLink />} />
            )}
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="sm:absolute hidden sm:block sm:top-8 sm:-right-44 w-[30rem] h-[26rem] rounded-t-lg shadow-2xl transition  group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}
