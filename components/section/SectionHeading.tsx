import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export function SectionHeading ({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-semibold capitalize text-center">
      {children}
    </h2>
  );
}
