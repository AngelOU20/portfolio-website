import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  href: string;
  label: string;
  icon?: JSX.Element;
};

export function LinkButton({ href, label, icon }: LinkButtonProps) {
  return (
    <Link
      className="group/live flex items-center gap-2 text-lg px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:gap-6 transition-[gap] dark:bg-white dark:text-gray-950"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
      {icon && (
        <span className="text-2xl group-hover/live:rotate-45 transition-transform opacity-75">
          {icon}
        </span>
      )}
    </Link>
  );
}
