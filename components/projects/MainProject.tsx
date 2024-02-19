'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { mainProjectsData } from '@/lib/data';
import { FaGithub } from 'react-icons/fa';
import { GoLinkExternal } from 'react-icons/go';

type ProjectProps = (typeof mainProjectsData)[number];

interface MainProjectProps extends ProjectProps {
  index: number;
}

export function MainProject({
  title,
  description,
  tags,
  imageUrl,
  links,
  index,
}: MainProjectProps) {
  return (
    <motion.div
      className="flex flex-col rounded-xl justify-between gap-4 border border-black/10 dark:border-white/70 p-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <a className="relative group" href={links.demo} target="_blank" rel="noopener">
        <Image
          className="w-full h-48 sm:h-56 rounded-lg border border-black/10"
          src={imageUrl}
          alt={`Proyecto ${title}`}
        />
        <div className="absolute w-full h-full bg-indigo-700/5 dark:bg-[#45b1a1]/10 rounded-lg top-0 left-0 group-hover:bg-transparent transition duration-300"></div>
      </a>
      <header>
        <p className="text-xs text-indigo-400 font-semibold dark:text-[#98FAEC]">
          Featured Project
        </p>
        <h3 className="text-lg sm:text-xl font-bold">
          <a
            className="text-zinc-700 dark:text-zinc-50 hover:text-indigo-500 dark:hover:text-[#12F7D6] transition ease-in-out duration-300"
            href={links.demo}
            target="_blank"
            rel="noopener"
          >
            {title}
          </a>
        </h3>
      </header>
      <section className="flex flex-1">
        <p className="text-sm">{description}</p>
      </section>
      <footer className="flex flex-col items-end gap-4">
        <ul className="text-gray-700 dark:text-gray-400 text-xs tracking-wide flex flex-wrap gap-x-2 md:gap-x-5 md:gap-y-2 justify-start text-textDark">
          {tags.map((tag) => (
            <li key={tag.name}>{tag.name}</li>
          ))}
        </ul>
        <ul className="text-2xl flex gap-4">
          {links.code ? (
            <li className="text-zinc-700 dark:text-white hover:text-indigo-500 dark:hover:text-[#12F7D6] transition ease-in-out duration-300">
              <a
                href={links.code}
                target="_blank"
                rel="noopener"
                aria-label="Enlace al código fuente en Github"
              >
                <FaGithub />
              </a>
            </li>
          ) : null}

          {links.demo !== '' ? (
            <li className="text-zinc-700 dark:text-white hover:text-indigo-500 dark:hover:text-[#12F7D6] transition ease-in-out duration-300">
              <a
                href={links.demo}
                target="_blank"
                rel="noopener"
                aria-label="Enlace a la demo de la aplicación"
              >
                <GoLinkExternal />
              </a>
            </li>
          ) : null}
        </ul>
      </footer>
    </motion.div>
  );
}
