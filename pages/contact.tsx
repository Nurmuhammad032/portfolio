import { motion } from "framer-motion";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsTelegram, BsTelephoneFill } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { Layout } from "../components";

const contact = () => {
  const socialWrapStyle = "contact-social center-mode group";
  const socialIconStyle =
    "text-2xl dark:text-white hover:text-white group-hover:text-white text-customBlue";

  const sendMessage = () => {
    const url =
      "https://api.telegram.org/bot5921362926:AAFZejcEJvfPReAuo1yvu9Is0rUeC7ap_Wg/sendMessage?chat_id=-887854544&text=nosirov";
  };

  return (
    <Layout delay={false} title="Contact">
      <div className="main-container">
        <div className="md:flex justify-between">
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
              <a href="" className={socialWrapStyle}>
                <TbBrandTelegram className={socialIconStyle} />
              </a>
              <a href="" className={socialWrapStyle}>
                <FaLinkedinIn className={socialIconStyle} />
              </a>
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-2/5">
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
                <label htmlFor="message">Message</label>
                <textarea id="message"></textarea>
              </div>
              <div className="text-end mt-8">
                <div className="app__link">
                  <button type="submit" className="">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
