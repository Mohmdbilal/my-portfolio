"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function CreativeDesignPage() {
  const router = useRouter();

  const projects = [
    {
      title: "My-Portfolio",
      image: "images/work/designportfolio.png",
      figmaLink:
        "https://www.figma.com/design/rqZL8J9IPPYZgW97VlB4Fe/my-portfolio?node-id=0-1&t=11YgRkq6CvVcWoBa-1",
    },
    {
      title: "Medicare Hospital",
      image: "images/work/medicare.png",
      figmaLink:
        "https://www.figma.com/design/ICzXpRbAKM4SvDlPGnXzec/medicare?node-id=0-1&t=MKrZDlD6xgvnYRMc-1",
    },
    {
      title: "Ecommerce-product-page",
      image: "/images/work/product.png",
      figmaLink: "https://www.figma.com/design/P8dENSmXxfKiKy8P7S0sTC/product-page?node-id=0-1&t=rKaLOB52fDHXpT4g-1",
    },
    {
      title: "Authentication-App",
      image: "/images/work/authentication.png",
      figmaLink: "https://www.figma.com/design/zxsOVmm5oeNZqnCsBX0EAe/Authentication-App?node-id=0-1&t=gDmv1gW52GHjdo3L-1",
    },
  ];

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
      <p className="max-w-[400px] text-sm leading-relaxed font-spline my-16 pl-10">
        This page showcases a series of projects that began as Figma designs and
        were later developed into fully functional frontend interfaces. Each
        project reflects my creative design thinking and ability to translate
        visual concepts into responsive, interactive user experiences.
      </p>

      {/* Project Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 pl-10 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              figmaLink={project.figmaLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Card Component
function ProjectCard({ title, image, portfolioLink, figmaLink }) {
  return (
    <div className="w-full max-w-[430px] bg-white dark:bg-[#2a2a2a] p-6 md:p-10 rounded-xl shadow-lg transform hover:scale-[1.025] transition-all duration-300 ease-in-out">
      {/* Image */}
      <div className="flex justify-center mb-4">
        <div className="w-[340px] h-[215px] bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Project Title */}
      <h2 className="text-lg font-semibold text-center mb-6 font-spline">
        {title}
      </h2>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F0F0F0] dark:bg-[#444] text-black dark:text-white px-4 py-2 rounded-lg text-sm hover:bg-white dark:hover:bg-[#333] hover:text-[#CB7F42] dark:hover:text-[#CB7F42] transition text-center"
        >
          View Figma Design
        </a>
      </div>
    </div>
  );
}
