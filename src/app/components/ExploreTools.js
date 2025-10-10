"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const toolImages = [
  "/images/icons/figma.png",
  "/images/icons/react.png",
  "/images/icons/nextjs.png",
  "/images/icons/html.png",
  "/images/icons/css.png",
  "/images/icons/javascript.png",
  "/images/icons/tailwind.png",
  "/images/icons/bootstrap.png",
  "/images/icons/firebase.png",
  "/images/icons/photoshop.png",   // Added Photoshop
  "/images/icons/illustrator.png", // Added Illustrator
  "/images/icons/vercel.png",
  "/images/icons/git.png",
  "/images/icons/github.png",
];

const darkToolImages = [
  "/images/icons/figmadark.png",
  "/images/icons/reactdark.png",
  "/images/icons/nextjsdark.png",
  "/images/icons/htmldark.png",
  "/images/icons/cssdark.png",
  "/images/icons/javascriptdark.png",
  "/images/icons/tailwinddark.png",
  "/images/icons/bootstrapdark.png",
  "/images/icons/firebasedark.png",
  "/images/icons/photoshopdark.png",   // Added Photoshop dark
  "/images/icons/illustratordark.png", // Added Illustrator dark
  "/images/icons/verceldark.png",
  "/images/icons/gitdark.png",
  "/images/icons/githubdark.png",
];

export default function ExploreTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="w-full px-4 sm:px-10 md:px-20 py-10 sm:py-20">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6"
      >
        <h2 className="text-[15px] sm:text-[16px] w-[260px] font-regular text-left font-spline text-black dark:text-white pb-4 sm:pb-4">
          Here are the core technologies and tools I work with to build fast,
          modern, and user-friendly web applications — from frontend frameworks
          to design and collaboration platforms.
        </h2>
      </motion.div>

      {/* Grid for large screens */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="hidden sm:flex flex-col gap-6"
      >
        {/* Top Row - 9 tools */}
        <div className="flex flex-wrap justify-start gap-4">
          {toolImages.slice(0, 9).map((src, index) => {
            const darkSrc = darkToolImages[index];
            return (
              <motion.div
                key={index}
                className="w-[200px] h-[180px] border-[2px] border-[#b9b9b9] border-dotted dark:border-[#434343] rounded-md overflow-hidden 
                  transition-transform duration-300 ease-in-out 
                  hover:scale-[1.07] hover:shadow-2xl hover:border-gray-800 dark:hover:border-gray-200 
                  hover:bg-[#f5f4f4] dark:hover:bg-[#212121]"
                whileHover={{ scale: 1.07 }}
              >
                <>
                  <img
                    src={src}
                    alt={`tool-${index}`}
                    className="block dark:hidden w-full h-full object-contain p-4"
                  />
                  <img
                    src={darkSrc}
                    alt={`tool-${index}-dark`}
                    className="hidden dark:block w-full h-full object-contain p-4"
                  />
                </>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Row - remaining tools */}
        <div className="flex flex-wrap justify-start gap-4">
          {toolImages.slice(9).map((src, index) => {
            const darkSrc = darkToolImages[index + 9];
            return (
              <motion.div
                key={index + 9}
                className="w-[200px] h-[180px] border-[2px] border-[#b9b9b9] border-dotted dark:border-[#434343] rounded-md overflow-hidden 
                  transition-transform duration-300 ease-in-out 
                  hover:scale-[1.07] hover:shadow-2xl hover:border-gray-800 dark:hover:border-[#e4e4e4] 
                  hover:bg-[#f5f4f4] dark:hover:bg-[#212121]"
                whileHover={{ scale: 1.07 }}
              >
                <>
                  <img
                    src={src}
                    alt={`tool-${index + 9}`}
                    className="block dark:hidden w-full h-full object-contain p-4"
                  />
                  <img
                    src={darkSrc}
                    alt={`tool-${index + 9}-dark`}
                    className="hidden dark:block w-full h-full object-contain p-4"
                  />
                </>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

     {/* Grid for small screens */}
<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
  className="sm:hidden grid grid-cols-2 gap-4"
>
  {toolImages.map((src, index) => {
    const darkSrc = darkToolImages[index];
    return (
      <motion.div
        key={index}
        className="w-full h-[120px] border-[2px] border-[#b9b9b9] border-dotted dark:border-[#4a4a4a] rounded-md overflow-hidden 
          transition-transform duration-300 ease-in-out 
          hover:scale-[1.07] hover:shadow-2xl hover:border-gray-800 dark:hover:border-[#e4e4e4] 
          hover:bg-[#f5f4f4] dark:hover:bg-[#212121]"
        whileHover={{ scale: 1.07 }}
      >
        <>
          <img
            src={src}
            alt={`tool-${index}`}
            className="block dark:hidden w-full h-full object-contain p-4"
          />
          <img
            src={darkSrc}
            alt={`tool-${index}-dark`}
            className="hidden dark:block w-full h-full object-contain p-4"
          />
        </>
      </motion.div>
    );
  })}
</motion.div>

    </section>
  );
}
