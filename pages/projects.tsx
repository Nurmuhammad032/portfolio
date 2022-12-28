import React from "react";
import { Layout, LinkComponent, Project } from "../components";
import { ProjectType } from "../types";
import {
  footerProject,
  projectArray,
} from "../components/customData/projectData";

const projects = () => {
  return (
    <Layout delay={false} title="Projects" canonical="/contact">
      <div className="main-container">
        <div className="mb-16">
          <h1 className="heading">Projects </h1>
          <p className="info mt-6">
            Some things i've been working on in the past few months: <br />
            <span className="text-lg text-slate-400">
              (I worked only as a Frontend Developer in these projects)
            </span>
          </p>
        </div>
        <div>
          {projectArray.map((pr: ProjectType, i) => (
            <div className="project__info-wrapper mb-8" key={i}>
              <div className="lg:w-[48%] md:w-4/5 w-full">
                <a href={`${pr.link}`} className="block 2xl:w-[550px] w-full">
                  <img
                    src={pr.imgUrl}
                    alt="project"
                    className="w-full rounded-lg"
                  />
                </a>
              </div>
              <div className="lg:w-[48%] lg:flex flex-col h-auto my-3 justify-evenly">
                <div>
                  <h1 className="project__title">{pr.title}</h1>
                  <p className="text-[16px]">{pr.info}</p>
                </div>
                <div className="mt-12 lg:mt-0">
                  <LinkComponent url={pr.link} text="Project" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="project__title mt-7 mb-7">Keep Scrolling</h1>
          <div className="flex flex-wrap justify-evenly">
            {footerProject.map((item, i) => (
              <Project data={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default projects;
