import React from "react";
import { motion } from "framer-motion";
import { LinkComponent } from "../components";

const about = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="app__section"
    >
      <div className="main-container">
        <div className="mb-[46px]">
          <h1 className="heading">About Me 👨‍</h1>
          <p className="text-2xl">
            A brief intro to who i am and how i do what i do:
          </p>
        </div>
        <h1 className="text-2xl">
          I am <span className="font-bold text-[40px]">Nurmuhammad</span>
        </h1>

        <div className="mt-6">
          <p className="info">
            A web designer from Nigeria. I got into tech while i was student at
            olabisi onabanjo university, Bsc Zoology. I've always been
            fascinated with how things work. fast forward to 2 years later and
            i'm now designing landing pages for business around the world. I{" "}
            <br /> <br />
            believe i've got the right skills and technologies to take your
            online presence on the level it truly deserves. Your website should
            be your no1 sales agent and its works 24/7, Get a quote now that's
            best for your business.
          </p>
        </div>
        <div className="mt-28">
          <LinkComponent url="contact" text="Say Hello" />
        </div>
      </div>
    </motion.section>
  );
};

export default about;
