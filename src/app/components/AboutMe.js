"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    once: false,
  });

  const [scrollDir, setScrollDir] = useState("down");

  // 🔁 Detect scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  const getAnimation = () => {
    if (isInView) {
      return { x: 0, opacity: 1 }; // slide in from right
    } else {
      return scrollDir === "down"
        ? { x: "100%", opacity: 0 } // slide out right when scrolling down to next section
        : { x: "100%", opacity: 0 }; // slide out right when scrolling up
    }
  };

  return (
    <div
      className="relative w-full min-h-[550px] mt-[150px] sm:mt-[180px]  sm:min-h-fit py-8 sm:py-12 md:pb-20 sm:px-0 overflow-hidden"
      ref={ref}
    >
      <div className="w-full flex justify-end">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={getAnimation()}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row w-full"
        >
          {/* Side Card */}
          <div
            className="bg-[#353535] dark:bg-[#646464]
             flex items-center justify-center
             rounded-tl-[10px] rounded-bl-[10px]  sm:rounded-tl-[10px] sm:rounded-bl-[10px] sm:rounded-tr-[0px]
             w-full sm:w-[60px] 
             h-[60px] sm:h-[300px] md:h-[280px]
             mb-4 sm:mb-0 sm:mt-10"
          >
            <h1
              className="text-white font-bold font-spline text-3xl  
               w-full text-center sm:w-[350px]"
            >
              <span className="block sm:hidden">ABOUT ME</span>
              <span className="hidden sm:inline-block rotate-[-90deg] origin-center whitespace-nowrap w-auto">
                ABOUT ME
              </span>
            </h1>
          </div>

          {/* Main Content */}
          <div
            className="flex-1
             bg-[#fffefe] dark:bg-[#2c2c2c]
             rounded-l-[20px] shadow-lg
             flex items-center justify-center
             pl-2 py-6 sm:py-8 md:py-12"
          >
            <div className="w-full max-w-[1080px]  text-center px-3">
              <p className="text-black dark:text-white text-justify  text-sm leading-normal sm:text-base sm:leading-relaxed md:text-[16px]">
                As a frontend developer with a background in BSc Computer
                Science and UI/UX design, I build responsive user interfaces
                that blend design precision with clean, efficient code. My core
                skills include HTML, CSS, and JavaScript, with deep experience
                in React.js and Next.js—working with components, props, hooks,
                context, routing, and API handling using Axios. I&apos;m
                familiar with advanced Next.js features like file-based routing
                and data fetching (SSR, SSG, ISR) for scalable, optimized apps.
                I use Tailwind CSS for utility-first styling and Framer Motion
                for smooth UI animations. Figma helps me bridge the
                design-to-code workflow effectively. I write reusable,
                maintainable components and handle real-world challenges like
                API integration, state management, and data-driven UI
                development. I also work with MongoDB and Mongoose to manage
                backend data in full-stack applications using Next.js API
                routes, handling full CRUD operations, schema modeling, and
                secure database connectivity with MongoDB Atlas. I use Git and
                GitHub for version control and collaboration. I&apos;m
                passionate about modern frontend tools and full-stack
                development best practices, and I&apos;m currently seeking
                opportunities to contribute to real-world projects and impactful
                digital experiences
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
