'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks';
import { BsMoon, BsSun } from 'react-icons/bs';

export function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900 dark:text-white"
      onClick={toggleTheme}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      aria-label={
        theme === 'light'
          ? 'Button to switch to dark theme'
          : 'Button to switch to light theme'
      }
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
