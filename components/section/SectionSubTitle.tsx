import React from 'react';

type SectionSubTitleProps = {
  children: React.ReactNode;
};

export function SectionSubTitle({ children }: SectionSubTitleProps) {
  return (
    <h3 className="text-center text-sm sm:text-base mt-1 mb-6 text-indigo-400 dark:text-[#98FAEC]">
      {children}
    </h3>
  );
}
