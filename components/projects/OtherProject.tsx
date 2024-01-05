import React from "react";
import { otherProjectsData } from "@/lib/data";
import { Tag } from "./Tag";
import { GoLinkExternal } from "react-icons/go";

type ProjectProps = (typeof otherProjectsData)[number];

export function OtherProject({ title, description, tags, link }: ProjectProps) {
  return (
    <a
      className="block group border-2 border-gray-100 hover:border-gray-200 
      rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <article className="relative flex flex-col justify-between w-full py-6 px-7">
        <h3 className="text-gray-700  text-lg font-bold dark:text-white">
          {title}
        </h3>
        <p className="text-slate-400 dark:text-white/70">{description}</p>
        <div className="flex gap-3 mt-1.5 items-center">
          {tags.map((tag, index) => (
            <Tag key={index} {...tag} />
          ))}
        </div>
        <div className="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
          <GoLinkExternal className="text-gray-400 text-2xl dark:text-gray-50" />
        </div>
      </article>
    </a>
  );
}
