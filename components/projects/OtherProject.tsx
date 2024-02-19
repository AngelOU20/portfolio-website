'use client';

import { motion } from 'framer-motion';
import { otherProjectsData } from '@/lib/data';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { BsFolder, BsGithub } from 'react-icons/bs';

type ProjectProps = (typeof otherProjectsData)[number];

interface OtherProjectProps extends ProjectProps {
  index: number;
}

export function OtherProject({
  title,
  description,
  tags,
  links,
  index,
}: OtherProjectProps) {
  return (
    <motion.div
      className="w-full h-80 rounded-sm bg-stone-100 dark:bg-white/10  p-7 flex flex-col justify-between shadow-xl gap-6 hover:-translate-y-2 transition-transform duration-300 group"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5,
      }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <header className="flex justify-between items-center">
        <BsFolder className="text-4xl text-indigo-500 dark:text-[#12F7D6]" />
        <ul className="flex gap-4">
          <li className="text-zinc-700 dark:text-white hover:text-indigo-500 dark:hover:text-[#12F7D6] transition ease-in-out duration-300">
            <a
              href={links.code}
              target="_blank"
              rel="noopener"
              aria-label="Enlace al código fuente en Github"
            >
              <BsGithub className="text-lg" />
            </a>
          </li>
          <li className="text-zinc-700 dark:text-white hover:text-indigo-500 dark:hover:text-[#12F7D6] transition ease-in-out duration-300">
            <a
              href={links.demo}
              target="_blank"
              aria-label="Enlace a la demo de la aplicación"
            >
              <FaExternalLinkAlt className="text-lg" />
            </a>
          </li>
        </ul>
      </header>
      <section className="flex flex-col flex-1">
        <h2 className="text-xl font-semibold tracking-wide group-hover:text-indigo-500 dark:group-hover:text-[#12F7D6]">
          <a href={links.demo} target="_blank" rel="noopener">
            {title}
          </a>
        </h2>
        <p className="text-sm mt-3">{description}</p>
      </section>
      <footer className="text-xs text-gray-700 dark:text-gray-400">
        <ul className="flex items-center gap-2 justify-start flex-wrap">
          {tags.map((item, i) => (
            <li className="list-none" key={i}>
              {item.name}
            </li>
          ))}
        </ul>
      </footer>
    </motion.div>
  );
}
