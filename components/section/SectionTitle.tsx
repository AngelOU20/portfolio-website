import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-2xl sm:text-3xl font-semibold capitalize text-center">
      {children}
    </h2>
  );
}
