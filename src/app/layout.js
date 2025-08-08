"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Spline_Sans_Mono } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-spline-mono",
  display: "swap",
});

export default function RootLayout({ children }) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const rightX = useTransform(scrollYProgress, [0, 2], [0, 800]);

  return (
    <html lang="en" className={`${splineSansMono.variable}`} suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div
            ref={scrollRef}
            className="
              relative
              bg-[#f4f4f4] dark:bg-[#1a1a1a]
              text-black dark:text-white
              rounded-none lg:rounded-[30px]
              w-full 
              mx-0 lg:mx-auto 
              max-w-full lg:max-w-[1290px] 
              my-0 sm:my-0 md:my-0 lg:my-6 
              pl-2 pt-2 sm:pl-8 sm:pt-8 md:pl-8 md:pt-8  lg:pl-10  lg:pt-10 
              min-h-screen 
              transition-colors duration-300
              overflow-hidden
            "
          >
            {/* Big animated background text */}
            <div
              className="
                absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 
                text-[160px] sm:text-[200px] md:text-[180px] lg:text-[200px] 
                font-bold 
                text-[#ffffff] dark:text-[#272727] 
                opacity-100 
                pointer-events-none select-none 
                z-0 
                leading-none 
                space-y-4 
                whitespace-nowrap
              "
            >
              {/* Always visible on all screens */}
              <motion.div style={{ x: leftX }}>BILALBILALBILAL</motion.div>
              <motion.div style={{ x: rightX }}>LALBILAL.BILALBILAL</motion.div>
              <motion.div style={{ x: leftX }}>BILALBILALBILALBILA</motion.div>

              {/* Extra line only on small screens (<640px) */}
              <motion.div style={{ x: rightX }} className="block sm:hidden">
                ALBILALBILAL
              </motion.div>
              <motion.div style={{ x: leftX }} className="block sm:hidden">
               BILALBILALBILAL
              </motion.div>
            </div>

            {/* Foreground content */}
            <div className="relative z-10">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
