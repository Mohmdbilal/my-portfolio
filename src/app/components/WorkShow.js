"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function WorkShowBackground() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-200px",
    amount: "some",
  });

  const router = useRouter();

  const handleUIDesignClick = () => {
    router.push("/designs"); // ✅ Go to UI Design page
  };

  const handleFrontendClick = () => {
    router.push("/frontend-dev"); // ✅ Go to Frontend page
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full flex flex-col items-center justify-start pt-16 pb-10 px-4 sm:px-6 md:px-10 lg:px-16 space-y-8"
    >
      {/* Main Heading */}
      <h2 className="text-black dark:text-white text-[38px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold font-spline mt-8 text-center leading-tight">
        Work Showcase
      </h2>

      {/* Description */}
      <h2 className="text-[12px] sm:text-[16px] w-full max-w-[500px] font-regular text-center font-spline text-black dark:text-white pb-4 mx-auto">
        Explore my process — from crafting clean UI designs in Figma to
        developing fully functional, responsive frontends that bring those
        designs to life with precision and care.
      </h2>

      {/* === UI Design Card === */}
      <div
        onClick={handleUIDesignClick}
        className="cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 w-full max-w-[700px] rounded-[20px] bg-[#BCBCBC] hover:bg-[#8b8b8b] hover:dark:bg-[#676767] dark:bg-[#505050] text-black dark:text-[#dfdfdf] p-6 flex flex-col justify-center items-start group"
      >
        <h3 className="text-xl font-bold mb-2 text-left font-spline group-hover ">
          Creative UI Design
        </h3>
        <p className="text-sm text-left font-spline max-w-[500px]">
          Designing clean, modern, and intuitive user interfaces tailored for
          user experience.
        </p>
      </div>

      {/* === Frontend Card === */}
      <div
        onClick={handleFrontendClick}
        className="cursor-pointer hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 w-full max-w-[700px] rounded-[20px] bg-[#D9D9D9] hover:bg-[#8c8c8c] hover:dark:bg-[#606060] dark:bg-[#3f3f3f] text-black dark:text-[#dfdfdf]  p-6 flex flex-col justify-center items-start group"
      >
        <h3 className="text-xl font-bold mb-2 text-left font-spline group-hover">
          Responsive Development
        </h3>
        <p className="text-sm text-left font-spline max-w-[500px]">
          Turning those designs into fully functional websites using modern
          frontend tools and frameworks.
        </p>
      </div>
    </motion.section>
  );
}
