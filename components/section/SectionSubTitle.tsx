'use client';

import React from 'react';
import { motion } from 'framer-motion';

type SectionSubTitleProps = {
  children: React.ReactNode;
};

export function SectionSubTitle({ children }: SectionSubTitleProps) {
  return (
    <motion.h3
      className="text-center text-base mt-1 mb-6 text-indigo-400 dark:text-[#98FAEC]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.h3>
  );
}
