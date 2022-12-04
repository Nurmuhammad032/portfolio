import { motion } from "framer-motion";

interface AppProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ close }: AppProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "tween" }}
        className="w-full h-full bg-black/60 z-50 fixed left-0 top-0"
      ></motion.div>
      <div className="fixed z-[51] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ type: "tween" }}
          className="w-5/6 xl:w-[35rem] bg-white shadow-xl py-6 px-4 rounded"
        >
          <div>
            <h1 className="text-[#302b48] text-2xl">
              You just sent a Message, Thank you!
            </h1>
          </div>
          <div className="my-5">
            <p className="text-[#a1a0a3]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur debitis necessitatibus voluptatum tempore delectus
              impedit!
            </p>
          </div>
          <div className="text-end">
            <button
              className="py-2 px-8 bg-[#01c76e] text-white"
              onClick={() => close(false)}
            >
              Okay
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
