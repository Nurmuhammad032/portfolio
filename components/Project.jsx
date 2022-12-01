import Link from "next/link";
import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";

const Project = ({ data: { imgUrl, githubLink, link } }) => {
  return (
    <div className="w-full mr-3 mb-3 md:w-[24rem] h-[16rem] overflow-hidden rounded-[10px] relative project__card-wrapper">
      <a href={link} className="">
        <img
          src={`${imgUrl}`}
          alt="project"
          className="w-full h-full transition-all object-cover"
        />
      </a>
      <div className="absolute right-0 top-0 flex space-x-4 z-10 card__flag-wrapper">
        <a href={githubLink} className="card-flag">
          <AiOutlineGithub />
        </a>
        <a className="card-flag" href={link}>
          <GoBrowser />
        </a>
      </div>
    </div>
  );
};

export default Project;
