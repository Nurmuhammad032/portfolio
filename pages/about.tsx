import React from "react";
import { motion } from "framer-motion";
import { Layout, LinkComponent } from "../components";

const about = () => {
  return (
    <Layout delay={false} title="About" canonical="/contact">
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
            A Fontend Developer from Uzbekistan. I have been learning frontend
            technologies since November (2021) at Astrum IT Academy. <br />{" "}
            <br />
            Passionate on reading books, coding and playing table tennis.
            Possesses Intermediate level of english. <br /> <br /> Skills:{" "}
            <br />- Languages(including framework, libraries): Javascript,
            Typescript, ReactJs, NextJs <br />
            - Web technologies: Html5, Css (bootstrap, tailwind. preprocessor:
            Sass) <br />- Able to quickly learn new technologiesHi
          </p>
        </div>
        <div className="mt-28">
          <LinkComponent url="contact" text="Say Hello" />
        </div>
      </div>
    </Layout>
  );
};

export default about;
