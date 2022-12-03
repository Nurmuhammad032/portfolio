import { motion } from "framer-motion";
import Head from "next/head";

interface AppProps {
  children: React.ReactNode;
  delay: boolean;
  title: String;
}

const Layout = ({ children, delay, title }: AppProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{
          type: "tween",
          delay: delay ? 1 : 0,
        }}
        className="app__section"
      >
        {children}
      </motion.section>
    </>
  );
};

export default Layout;
