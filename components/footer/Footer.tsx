import React from 'react';

export function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 dark:text-gray-400">
      <small className="mb-2 block text-xs">&copy; 2024 AngelOU20.</small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with React &
        Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion,
        Vercel hosting.
      </p>
    </footer>
  );
}
