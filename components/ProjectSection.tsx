import React from "react";
import SlideUp from "./SlideUp";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Cinema Website",
    description: `A full-stack website project using ReactJS, NodeJS, Express, and MySQL.
    
    Some basic functions:
    * Manage Accounts
    * Leave and Edit comments
    * Real-time reflecting with booking system  
    `,
    image: "/fullstackUI.png",
    github: "https://github.com/dtrongkhoa/MovieRating_FullStack",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "Tic Tac Toe",
    description: `A simple Tic Tac Toe game
    User can change their name and restart it when draw or at least one player win`,
    image: "/Tic-Tac-Toe.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects{" "}
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {/* <Link href={project.link}> */}
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                    {/* </Link> */}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 whitespace-pre-line">
                      {project.description}
                    </p>

                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {/* <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
