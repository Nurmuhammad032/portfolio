import { motion } from "framer-motion";
import Head from "next/head";
import route from "next/router";


interface AppProps {
  children: React.ReactNode;
  delay: boolean;
  title: string;
  canonical: string;
}

const Layout = ({ children, delay, title, canonical }: AppProps) => {
  console.log(route.router);

  
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
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
