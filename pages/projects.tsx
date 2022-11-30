import React from "react";
import { LinkComponent, Project } from "../components";
import { Project } from "../types";

const project: Project[] = [
  {
    title: "Remotely",
    info: "Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.",
    imgUrl: "/images/port1.png",
    link: "https://google.com",
  },
  {
    title: "Remotely",
    info: "Remotely is a remote friendly-company — with our headquarters in San Francisco, a second office in LA, and a strong commitment to ensuring people can do great work here and thrive without having to live near an office. This role is open to candidates across the U.S.",
    imgUrl: "/images/port1.png",
    link: "https://google.com",
  },
];

const projects = () => {
  return (
    <section className="app__section">
      <div className="main-container">
        <div className="mb-16">
          <h1 className="heading">Projects </h1>
          <p className="info mt-6">
            Some things i've been working on in the past few years:
          </p>
        </div>
        <div>
          {project.map((pr: Project, i) => (
            <div className="project__info-wrapper mb-5">
              <div className="lg:w-[48%] mx-auto md:w-4/5 w-full">
                <a href="" className="block 2xl:w-[550px] w-full">
                  <img src={pr.imgUrl} alt="project" className="w-full" />
                </a>
              </div>
              <div className="lg:w-[48%] lg:flex flex-col h-auto justify-evenly">
                <div>
                  <h1 className="xl:text-[40px] lg:text-4xl md:text-2xl text-lg font-bold mb-6">
                    {pr.title}
                  </h1>
                  <p className="text-[16px]">{pr.info}</p>
                </div>
                <div className="mt-12 lg:mt-0">
                  <LinkComponent url="htts://google.com" text="project" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Project />
        </div>
      </div>
    </section>
  );
};

export default projects;
