import { LinkComponent } from "../components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      className="app__section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <div className="main-container">
          <h1 className="xl:text-[60px] lg:text-[50px] md:text-[36px] text-[28px] font-bold xl:leading-[97px] lg:leading-[77px] md:leading-[57px] leading-[42px]">
            Hello!👋🏻 <br /> My name is Ololade <br /> I'm a Frontend{" "}
            <span
              className="font-bold"
              style={{
                background:
                  "linear-gradient(90.2deg, #3B82F6 63.77%, #EC4899 83.43%, #3B82F6 99.94%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Developer
            </span>
          </h1>
          <p className="lg:text-2xl text-xs mt-7">
            Let me help you grow your business and make your product look pretty
            while at it{" "}
          </p>
          <div className="mt-28">
            <LinkComponent url={"contact"} text="Say Hello" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
