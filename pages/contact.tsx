import { motion } from "framer-motion";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsTelegram, BsTelephoneFill } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="app__section"
    >
      <div className="main-container">
        <div className="flex justify-between">
          <div className="w-full md:w-3/5 flex flex-col justify-between">
            <div>
              <h1 className="heading mb-4">Get quote</h1>
              <p className="info">Fill up form</p>
            </div>
            <div className="">
              <div className="contact-info">
                <BsTelephoneFill className="text-2xl text-[#0c75ff]" />
                <p>+998 95 052 46 26</p>
              </div>
              <div className="contact-info">
                <MdEmail className="text-2xl text-[#0c75ff]" />
                <p>nurmuhammad2003o@gmail.com</p>
              </div>
              <div className="contact-info">
                <MdLocationPin className="text-2xl text-[#0c75ff]" />
                <p>Tashkent, Sergeli</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <a href="" className="contact-social center-mode">
                <TbBrandTelegram className="text-2xl dark:text-white text-customBlue" />
              </a>
              <a href="" className="contact-social center-mode">
                <FaLinkedinIn className="text-2xl dark:text-white text-customBlue" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <div className="bg-white rounded-xl py-10 px-5">
              <div className="contact__input-wrapper">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" />
              </div>
              <div className="contact__input-wrapper">
                <label htmlFor="mail">Mail</label>
                <input type="text" id="mail" />
              </div>
              <div className="contact__input-wrapper">
                <label htmlFor="mail">Message</label>
                <textarea></textarea>
              </div>
              <div className="text-end mt-8">
                <button
                  type="submit"
                  className="px-7 py-2 text-lg bg-[#0c75ff] rounded-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
