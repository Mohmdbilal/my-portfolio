"use client";
import { useEffect } from "react";
import { MdEmail, MdPhone, MdHome } from "react-icons/md";
import { FaBehance, FaLinkedin } from "react-icons/fa";

export default function EndContactSection() {
  // Scroll to top handler
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full flex justify-center py-8 mt-20 px-4 relative">
      <div className="w-[1000px] relative bg-[#BCBCBC] dark:bg-[#292929] rounded-[30px] flex flex-col justify-center items-center px-6 py-8 pt-6 space-y-4">

        {/* Home Icon with Pulse */}
        <a
          href="/"
          onClick={handleScrollToTop}
          title="Go Home"
          className="absolute top-[-18px] right-[-10px] bg-[#4b4b4b] text-white rounded-2xl w-[50px] h-[50px] flex items-center justify-center animate-pulse shadow-lg hover:scale-110 transition duration-300"
        >
          <MdHome size={25} />
        </a>

        <div className="flex flex-wrap justify-between w-full gap-3">
          {/* Contact Block 1 */}
          <a
            href="mailto:mohmdzbilal@gmail.com"
            className="w-full sm:w-[48%] md:w-[270px] flex items-center gap-3 text-black dark:text-white hover:text-[#CB7F42] dark:hover:text-[#CB7F42] transition-colors duration-300 bg-[#D9D9D9] dark:bg-[#3a3a3a] rounded-xl px-4 py-3"
            title="Email"
          >
            <MdEmail size={22} />
            <span className="font-spline text-sm sm:text-base">
              mohmdzbilal@gmail.com
            </span>
          </a>

          {/* Contact Block 2 */}
          <a
            href="tel:9496510486"
            className="w-full sm:w-[48%] md:w-[220px] flex items-center gap-3 text-black dark:text-white hover:text-[#CB7F42] dark:hover:text-[#CB7F42] transition-colors duration-300 bg-[#D9D9D9] dark:bg-[#3a3a3a] rounded-xl px-4 py-3"
            title="Phone"
          >
            <MdPhone size={22} />
            <span className="font-spline text-sm sm:text-base">
              +91 9496510486
            </span>
          </a>

          {/* Contact Block 3 */}
          <a
            href="https://www.behance.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[48%] md:w-[150px] flex items-center gap-3 text-black dark:text-white hover:text-[#CB7F42] dark:hover:text-[#CB7F42] transition-colors duration-300 bg-[#D9D9D9] dark:bg-[#3a3a3a] rounded-xl px-4 py-3"
            title="Behance"
          >
            <FaBehance size={22} />
            <span className="font-spline text-sm sm:text-base">Behance</span>
          </a>

          {/* Contact Block 4 */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[48%] md:w-[150px] flex items-center gap-3 text-black dark:text-white hover:text-[#CB7F42] dark:hover:text-[#CB7F42] transition-colors duration-300 bg-[#D9D9D9] dark:bg-[#3a3a3a] rounded-xl px-4 py-3"
            title="LinkedIn"
          >
            <FaLinkedin size={22} />
            <span className="font-spline text-sm sm:text-base">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
