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
                    Frontend Web Development (Self Learning)
                  </h2>
                  <p className="text-sm sm:text-base font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
                    Apr 2025 - Sept 2025 (Ongoing)
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
                    UI/UX Design Intern &<br/>
                    Freelance Graphic Designer
                  </h2>
                  <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] ">
                    Zoople Technologies, Kochi
                  </p>
                  <p className="text-sm sm:text-base font-spline text-gray-700 dark:text-[#c7c7c7]  mt-1">
                    Jan 2025 – Present
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

         <div>
          <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7]">
            JavaScript Basics
          </h2>
          <p className="text-sm text-gray-700 dark:text-[#c7c7c7]">GreatStack</p>
          <p className="text-sm font-spline sm:text-base text-gray-700 dark:text-[#c7c7c7] mt-1">
            Completed Sept 2025
          </p>
          <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
            <span className="font-semibold">Credential ID:</span> 12343348-180287
          </p>
          <a
            href="https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/certificates/schools/164876/certificates/180287/users/12343348/pdf/12343348_180287.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-1 rounded-md bg-[#676767] hover:bg-[#6a6a6a] text-white text-sm font-spline transition"
          >
            Show Certificate
          </a>
        </div>
        {/* UI/UX Design Specialization */}
        <div>
          <h2 className="text-[16px] sm:text-xl font-semibold font-spline text-black dark:text-[#c7c7c7]">
            Build Wireframes and Low-Fidelity Prototypes
          </h2>
          <p className="text-sm text-gray-700 dark:text-[#c7c7c7]">Coursera</p>
          <p className="text-sm font-spline sm:text-base text-gray-700 dark:text-[#c7c7c7] mt-1">
            Completed Oct 2024
          </p>
          <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
            <span className="font-semibold">Credential ID:</span> 5KS0A97GTYD9
          </p>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/5KS0A97GTYD9"
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
            Principles of UX/UI Design
          </h2>
          <p className="text-sm text-gray-700 dark:text-[#c7c7c7]">Coursera</p>
          <p className="text-sm font-spline sm:text-base text-gray-700 dark:text-[#c7c7c7] mt-1">
            Completed Aug 2024
          </p>
          <p className="text-sm font-spline text-gray-700 dark:text-[#c7c7c7] mt-1">
            <span className="font-semibold">Credential ID:</span> 0A531GK0GQC8
          </p>
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/0A531GK0GQC8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-1 rounded-md bg-[#676767] hover:bg-[#6a6a6a] text-white text-sm font-spline transition"
          >
            Show Certificate
          </a>
        </div>

        {/* JavaScript Basics */}
       
      </div>
    </div>
  </div>
</SectionWrapper>

    </section>
  );
}
