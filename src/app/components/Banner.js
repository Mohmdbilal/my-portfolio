import { MdEmail, MdPhone } from "react-icons/md";
import { FaBehance, FaLinkedin } from "react-icons/fa";


export default function Banner() {
  return (
    <div className="mt-[120px] px-4 sm:px-6 md:px-20 font-spline overflow-x-hidden">
      <div className="mt-8 sm:mt-0">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#CB7F42]">Hey,</h1>
        <h2 className="w-[350px] sm:w-auto text-5xl font-normal mt-4 text-black dark:text-white leading-tight">
          I'm Muhammed Bilal
        </h2>

        <div className="flex flex-col items-center">
          {/* Mobile Image */}
          <div className="block sm:hidden mt-10 w-[160px] h-[170px] rounded-[20px] overflow-hidden shadow-lg">
            <img
              src="/images/banner/profilephoto.jpg"
              alt="Profile Photo"
              className="w-full h-full object-cover rounded-[30px]"
            />
          </div>

          {/* Rectangle */}
<div
  className="mt-10 w-full max-w-[400px] sm:max-w-[900px] md:max-w-[800px] lg:max-w-[800px] h-[210px] sm:h-[200px] lg:h-[230px] 
             bg-[#292929] dark:bg-[#353535] 
             rounded-[40px] mx-auto 
             flex flex-col items-center justify-center 
             px-4 sm:px-10 pt-0 lg:pt-0 
             relative 
             animate-custom-pulse"
  style={{ boxShadow: "inset 8px 8px 8px -2px rgba(0, 0, 0,0.14)" }}
>

            {/* Text & Social Icons */}
            <div className="flex flex-col gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left w-full">
              {/* Heading + Download CV */}
              <div className="w-full flex flex-col gap-4 items-center sm:items-start justify-center sm:justify-start ">
                <h1 className="text-white text-3xl lg:text-5xl font-spline font-light w-auto">
                  UI/UX & FRONTEND
                </h1>

                <a
                  href="/path-to-your-cv.pdf"
                  download
                  className="bg-[#CB7F42] dark:bg-[#a76a38] text-white text-sm  font-spline font-light px-4  rounded-xl w-[130px] h-[40px] flex items-center justify-center"
                >
                  DOWNLOAD CV
                </a>
              </div>

              {/* Social Links Rectangle */}
              <div
                className="w-[290px] sm:w-[250px] h-[38px] sm:h-[38px] bg-[#ffffff] dark:bg-[#e0dfdf] rounded-xl flex items-center justify-center sm:justify-start mx-auto sm:mx-0"
                style={{ boxShadow: "inset 0 2px 8px -2px rgba(0, 0, 0, 0.9)" }}
              >
                <ul className="flex flex-row gap-9 sm:gap-10 text-xl sm:text-1xl text-black justify-center sm:justify-start w-full px-4">
                  <li>
                    <a
                      href="mailto:mohmdzbilal@gmail.com"
                      className="hover:text-[#CB7F42]"
                      title="Email"
                    >
                      <MdEmail />
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:9496510486"
                      className="hover:text-[#CB7F42]"
                      title="Phone"
                    >
                      <MdPhone />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#CB7F42]"
                      title="Behance"
                    >
                      <FaBehance />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#CB7F42]"
                      title="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop Image */}
            <div className="hidden sm:block absolute -top-8 lg:-top-10 right-3 w-[200px]  lg:w-[230px] h-[220px] lg:h-[250px] rounded-[30px] overflow-hidden shadow-lg">
              <img
                src="/images/banner/profilephoto.jpg"
                alt="Profile Photo"
                className="w-full h-full object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
