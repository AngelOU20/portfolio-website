'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../section/SectionHeading';
import { useSectionInView } from '@/hooks';
import { AiOutlineSend, AiOutlineCopy } from 'react-icons/ai';
import { SectionSubHeading } from '../section';
import { contactSubTitle, contactTitle } from '@/lib/data';

export function Contact() {
  const { ref } = useSectionInView('Contacto');
  const [copyClipboard, setCopyClipboard] = useState(false);

  const email = 'angelprueba81@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopyClipboard(true);
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>{contactTitle}</SectionHeading>
      <SectionSubHeading>{contactSubTitle}</SectionSubHeading>

      <div className="flex gap-2 flex-wrap items-center justify-center sm:flex-nowrap">
        <input
          type="text"
          disabled
          value={email}
          className="bg-black/5 dark:bg-white/95 w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-950"
        />
        <div className="flex gap-2 ">
          <div className="relative group/tooltip">
            <a
              href="mailto:angelprueba81@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex py-2.5 px-4 rounded-lg bg-indigo-500 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-indigo-100 dark:bg-white/10 dark:text-gray-50"
            >
              <AiOutlineSend className="text-lg" />
            </a>
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              Send me email
            </span>
          </div>
          <div className="relative group/tooltip">
            <button
              onClick={handleCopy}
              className="flex py-2.5 px-4 rounded-lg bg-indigo-500 hover:bg-opacity-80 hover:dark:bg-opacity-90 text-indigo-100 dark:bg-white/10 dark:text-gray-50"
            >
              <AiOutlineCopy className="text-lg" />
            </button>
            <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              {copyClipboard === true ? 'Copied' : 'Copy mail'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
