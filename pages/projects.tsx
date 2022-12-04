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
            Some things i've been working on in the past few years:
          </p>
        </div>
        <div>
          {projectArray.map((pr: ProjectType, i) => (
            <div className="project__info-wrapper mb-5" key={i}>
              <div className="lg:w-[48%] mx-auto md:w-4/5 w-full">
                <a href="" className="block 2xl:w-[550px] w-full">
                  <img src={pr.imgUrl} alt="project" className="w-full" />
                </a>
              </div>
              <div className="lg:w-[48%] lg:flex flex-col h-auto justify-evenly">
                <div>
                  <h1 className="project__title">{pr.title}</h1>
                  <p className="text-[16px]">{pr.info}</p>
                </div>
                <div className="mt-12 lg:mt-0">
                  <LinkComponent
                    url="https://www.instagram.com/"
                    text="project"
                  />
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
