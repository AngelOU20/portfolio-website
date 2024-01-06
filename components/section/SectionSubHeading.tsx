import React from "react";

type SectionSubHeadingProps = {
  children: React.ReactNode;
};

export function SectionSubHeading ({ children }: SectionSubHeadingProps) {
  return (
    <h3 className="text-center text-base mt-1 mb-6 text-indigo-400 dark:text-[#98FAEC]">
      {children}
    </h3>
  );
}
