"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GraphicDesignPage() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("poster");

  const posters = [
    "images/posters/poster-1.png",
    "images/posters/poster-2.png",
    "images/posters/poster-3.png",
    "images/posters/poster-4.png",
    "images/posters/poster-5.png",
    "images/posters/poster-6.png",
  ];

  return (
    <div className="min-h-screen w-full bg-[#E9E9E9] dark:bg-[#1a1a1a] text-black dark:text-white px-6 py-6 rounded-3xl">
      {/* Back Button */}
      <button
        onClick={() => router.push("/#projects")}
        className="flex items-center text-black dark:text-white hover:text-[#CB7F42] dark:hover:text-[#CB7F42] transition mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="font-spline text-sm">Back</span>
      </button>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-bold text-center font-spline mb-2">
        Poster Design Gallery
      </h1>

      {/* Subheading */}
      <p className="text-center text-sm max-w-[600px] mx-auto font-spline mb-10">
        Showcasing my poster and visual design projects crafted using Photoshop, Illustrator, and Figma.
      </p>

      {/* === Poster Section === */}
      {activeSection === "poster" && (
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center"
          >
 {posters.map((src, index) => (
  <div
    key={index}
    className="w-[330px] h-[440px] bg-gray-200 dark:bg-[#333] rounded-xl overflow-hidden shadow-lg 
               flex items-center justify-center hover:scale-[1.03] transition-transform duration-300"
  >
    <img
      src={src}
      alt={`Poster ${index + 1}`}
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
))}

          </motion.div>
        </div>
      )}
    </div>
  );
}
