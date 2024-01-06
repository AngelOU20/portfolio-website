import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader ({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fill-none h-screen w-screen flex justify-center items-center overflow-hidden"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            className="h-40 w-40 fill-none text-indigo-500 dark:text-[#64ffda]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="J" transform="translate(18.000000, 18.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 1,
                  }}
                  fill="currentColor"
                  d="M32.5 17.5V37.5H27.5V35H22.5V37.5C22.5 38.8261 23.0268 40.0979 23.9645 41.0355C24.9021 41.9732 26.1739 42.5 27.5 42.5H32.5C33.8261 42.5 35.0979 41.9732 36.0355 41.0355C36.9732 40.0979 37.5 38.8261 37.5 37.5V17.5H32.5Z"
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="
                  M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z
                "
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
