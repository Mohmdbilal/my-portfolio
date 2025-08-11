"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Sample project data (replace with your actual projects)
const projects = [
  {
    title: "Netflix-clone/Vite/Firebase",
    image: "images/work/netflixhome.png",
    demoLink: "https://netflix-clone-eight-rho-56.vercel.app/",
    codeLink: "https://github.com/Mohmdbilal/netflix-clone",
  },
  {
    title: "Ecommerce-product-page",
    image: "images/work/product.png",
    demoLink: "https://ecommerce-product-page-ashen.vercel.app/",
    codeLink: "https://github.com/Mohmdbilal/Ecommerce-product-page",
  },
  // Add more projects as needed
];

export default function ResponsiveDesignPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-[#E9E9E9] dark:bg-[#1a1a1a] text-black dark:text-white px-6 py-6 rounded-3xl transform -translate-x-6 -translate-y-4">
      {/* Back Button */}
      <button
        onClick={() => router.push("/#projects")}
        className="flex items-center text-black dark:text-white hover:text-[#CB7F42] dark:hover:text-[#CB7F42] transition mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span className="font-spline text-sm">Back</span>
      </button>

      {/* Page Description */}
      <p className="max-w-[400px] text-sm leading-relaxed font-spline my-16">
        This page showcases my frontend development skills where I bring designs
        to life using React, Next.js, and modern web technologies. Each project
        is built with a focus on responsiveness, clean code, and smooth user
        experience across all screen sizes.
      </p>

      {/* Project Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 pl-10 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
// Reusable Card Component
function ProjectCard({ title, image, demoLink, codeLink }) {
  return (
    <div className="w-full max-w-[430px] bg-white dark:bg-[#2a2a2a] p-6 md:p-10 rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <div className="w-[340px] h-[215px] bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-center mb-6 font-spline">
        {title}
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F0F0F0] dark:bg-[#444] text-black dark:text-white px-4 py-2 rounded-lg text-sm hover:bg-white dark:hover:bg-[#333] hover:text-[#CB7F42] dark:hover:text-[#CB7F42]  transition-all duration-300 ease-in-out text-center"
        >
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F0F0F0] dark:bg-[#444] text-black dark:text-white px-4 py-2 rounded-lg text-sm hover:bg-white dark:hover:bg-[#333] hover:text-[#CB7F42] dark:hover:text-[#CB7F42]  transition-all duration-300 ease-in-out text-center"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
