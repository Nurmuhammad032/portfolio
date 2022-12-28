import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";

interface AppProps {
  data: {
    imgUrl: string;
    githubLink: string;
    link: string;
  };
}

const Project = ({ data: { imgUrl, githubLink, link } }: AppProps) => {
  return (
    <motion.div
      whileInView={{
        opacity: [0, 1],
        y: [30, 0],
        transition: { type: "tween" },
      }}
      viewport={{ once: true }}
      className="w-full mr-3 mb-3 md:w-[24rem] h-[16rem] overflow-hidden rounded-[10px] relative project__card-wrapper shadow-lg"
    >
      <a href={link}>
        <img
          src={`${imgUrl}`}
          alt="project"
          className="w-full h-full transition-all object-cover"
        />
      </a>
      <div className="absolute right-0 top-0 flex space-x-4 z-10 card__flag-wrapper">
        <a href={githubLink} className="card-flag">
          <AiOutlineGithub className="text-white" />
        </a>
        <a className="card-flag" href={link}>
          <GoBrowser className="text-white" />
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
