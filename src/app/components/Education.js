'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SectionWrapper = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
      });
    } else {
      controls.start({ opacity: 0, x: 100 });
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} animate={controls} initial={{ opacity: 0, x: 100 }}>
      {children}
    </motion.div>
  );
};

export default function Education() {
  return (
    <section className="w-full px-4 sm:px-10 mt-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
        {/* ==================== Education Section ==================== */}
        <SectionWrapper>
          <div className="flex-1">
            <h1 className="text-black dark:text-[#cecece] font-bold font-spline text-[25px] sm:text-[50px] text-left mb-10">
              Education
            </h1>

            <div className="flex gap-6 items-start">
              {/* Vertical Line */}
              <div className="w-[1px] h-[370px] bg-black dark:bg-white rounded-full mt-1"></div>

              {/* Education Entries */}
              <div className="flex flex-col text-left gap-20">
                <div>
                  <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7]">
                    Self-Learning – Frontend Web Development
                  </h2>
                  <p className="text-sm sm:text-base font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
                    March 2025 – Aug 2025 (Ongoing)
                  </p>
                </div>

                <div>
                  <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7] ">
                    UI/UX Design Course
                  </h2>
                  <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] ">
                    Zoople Technologies, Kochi
                  </p>
                  <p className="text-sm sm:text-base font-spline text-gray-700 dark:text-[#c7c7c7]  mt-1">
                    Sep 2024 – Jan 2025
                  </p>
                </div>

                <div>
                  <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7] ">
                    BSc in Computer Science
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-[#c7c7c7]  font-spline">
                    IHRD College of Applied Science, Adoor – Kerala University
                  </p>
                  <p className="text-sm sm:text-base font-spline text-gray-700 dark:text-[#c7c7c7]  mt-1">
                    2021 – 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* ==================== Internship Section ==================== */}
        <SectionWrapper>
          <div className="flex-2 pr-20">
            <h1 className="text-black dark:text-[#cecece]  font-bold font-spline text-[25px] sm:text-[50px] text-left mb-10">
              Internships
            </h1>

            <div className="flex gap-6 items-start">
              {/* Vertical Line */}
              <div className="w-[1px] h-[90px] bg-black dark:bg-white rounded-full mt-1"></div>

              {/* Internship Entry */}
              <div className="flex flex-col text-left gap-4">
                <div>
                  <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7] ">
                    UI/UX Design Intern
                  </h2>
                  <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] ">
                    Zoople Technologies, Kochi
                  </p>
                  <p className="text-sm sm:text-base font-spline text-gray-700 dark:text-[#c7c7c7]  mt-1">
                    Jan 2025 – Feb 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* ==================== Certification Section ==================== */}
      {/* ==================== Certification Section ==================== */}
<SectionWrapper>
  <div className="mt-20">
    <h1 className="text-black dark:text-[#cecece] font-bold font-spline text-[25px] sm:text-[50px] text-left mb-10">
      Certifications
    </h1>

    <div className="flex gap-6 items-start">
      {/* Vertical Line */}
      <div className="w-[1px] h-[550px] bg-black dark:bg-white rounded-full mt-1"></div>

      {/* Certification Entries */}
      <div className="flex flex-col text-left gap-20">
        {/* UI/UX Design Specialization */}
        <div>
          <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7]">
            UI/UX Design Specialization
          </h2>
          <p className="text-sm text-gray-700 dark:text-[#c7c7c7]">Coursera</p>
          <p className="text-sm font-spline sm:text-base text-gray-700 dark:text-[#c7c7c7] mt-1">
            Completed May 2025
          </p>
          <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
            <span className="font-semibold">Credential ID:</span> UXD-2025-01
          </p>
          <a
            href="https://example.com/uiux-certificate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-1 rounded-md bg-[#676767] hover:bg-[#6a6a6a] text-white text-sm font-spline transition"
          >
            Show Certificate
          </a>
        </div>

        {/* Responsive Web Design */}
        <div>
          <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7]">
            Responsive Web Design
          </h2>
          <p className="text-sm text-gray-700 dark:text-[#c7c7c7]">Coursera</p>
          <p className="text-sm font-spline sm:text-base text-gray-700 dark:text-[#c7c7c7] mt-1">
            Completed April 2025
          </p>
          <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
            <span className="font-semibold">Credential ID:</span> RWD-2025-04
          </p>
          <a
            href="https://example.com/responsive-design-certificate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-1 rounded-md bg-[#676767] hover:bg-[#6a6a6a] text-white text-sm font-spline transition"
          >
            Show Certificate
          </a>
        </div>

        {/* JavaScript Basics */}
        <div>
          <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7]">
            JavaScript Basics
          </h2>
          <p className="text-sm text-gray-700 dark:text-[#c7c7c7]">Coursera</p>
          <p className="text-sm font-spline sm:text-base text-gray-700 dark:text-[#c7c7c7] mt-1">
            Completed March 2025
          </p>
          <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
            <span className="font-semibold">Credential ID:</span> JS-2025-03
          </p>
          <a
            href="https://example.com/javascript-certificate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-1 rounded-md bg-[#676767] hover:bg-[#6a6a6a] text-white text-sm font-spline transition"
          >
            Show Certificate
          </a>
        </div>
      </div>
    </div>
  </div>
</SectionWrapper>

    </section>
  );
}
