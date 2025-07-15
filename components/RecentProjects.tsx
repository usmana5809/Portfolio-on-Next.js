"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";

import { PinContainer } from "./ui/Pin";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, idx) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={idx}
          >
            <PinContainer
              title={item.title}
              href={item.githubLink}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.image}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-cover w-full h-full"
                />
              </div>

              {/* Technology Icons Row */}
              <div className="flex gap-3 mb-2">
                <FaReact className="text-cyan-400 text-2xl" title="React" />
                <SiTailwindcss className="text-sky-400 text-2xl" title="Tailwind CSS" />
                <BsBootstrap className="text-purple-500 text-2xl" title="Bootstrap" />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div />
                <div className="flex justify-center items-center">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple hover:underline"
                  >
                    View Project
                    <FaLocationArrow className="ms-1" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
