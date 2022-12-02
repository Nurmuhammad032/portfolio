import { motion } from "framer-motion";

const Layout = ({ children, delay }) => {
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{
        type: "tween",
        stiffness: 260,
        damping: 20,
        delay: delay && 1,
      }}
      className="app__section"
    >
      {children}
    </motion.section>
  );
};

export default Layout;
