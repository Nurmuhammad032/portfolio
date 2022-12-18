import { Layout, LinkComponent } from "../components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout delay title="Nosirov" canonical="/contact">
      <div>
        <div className="main-container">
          <motion.h1
            exit={{ x: 100, opacity: 0 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="xl:text-[60px] lg:text-[50px] md:text-[36px] text-[28px] font-bold xl:leading-[97px] lg:leading-[77px] md:leading-[57px] leading-[42px]"
          >
            Hello!👋🏻 <br /> My name is Nurmuhammad <br /> I'm a Frontend{" "}
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
          </motion.h1>
          <motion.p exit={{ opacity: 0 }} className="lg:text-2xl text-xs mt-7">
            Strong in frontend development with intuitive problem-solving
            skills. Passionate about implementing, launching new projects and
            learning new technologies.
          </motion.p>
          <motion.div
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring" }}
            className="mt-28"
          >
            <LinkComponent url={"contact"} text="Say Hello" />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
