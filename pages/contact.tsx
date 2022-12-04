import { AnimatePresence, motion } from "framer-motion";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { Layout, Modal } from "../components";
import { ChangeEvent, useState, FocusEvent, FormEvent, useEffect } from "react";
import { FormValidate, FormValue } from "../types";
import axios from "axios";
import nProgress from "nprogress";

const contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formValue, setFormValue] = useState<FormValue>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [showModal]);

  const [validate, setValidate] = useState<FormValidate>({
    isValidName: false,
    isValidEmail: false,
    isValidMessage: false,
  });

  const { name, email, message } = formValue;
  const { isValidName, isValidEmail, isValidMessage } = validate;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const checkValidate = (key: string, value: boolean) => {
    setValidate((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleBlur = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.name) {
      case "name":
        let nameLength = formValue.name.length;
        let isNormalNameLength =
          nameLength > 3 && nameLength < 30 ? false : true;
        checkValidate("isValidName", isNormalNameLength);
        break;
      case "email":
        let checkEmail =
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9-\.]+)\.([a-zA-Z]{2,5})$/;
        let isValidCheckEmail = !checkEmail.test(formValue.email)
          ? true
          : false;
        checkValidate("isValidEmail", isValidCheckEmail);
        break;
      case "message":
        let isNormalLength = formValue.message.length > 20 ? false : true;
        checkValidate("isValidMessage", isNormalLength);
        break;
      default:
        break;
    }
  };

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nProgress.start(); // When hit submit button, progress has to start
    const isFormFilled = Object.values(validate).every((value) => !value);

    // if validate values not equal to true, just return nothing
    if (!isFormFilled) {
      nProgress.done();
      return;
    }

    const token = process.env.NEXT_PUBLIC_BOT_TOKEN;
    const text = `Name:  ${encodeURI(
      name
    )} %0A Email: ${email} %0A Message:  ${encodeURI(message)}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=-887854544&text=${text}`;

    axios
      .get(url)
      .then(() => setShowModal(true))
      .catch((err) => console.log(err))
      .finally(() => {
        // When promise settled, progress has to stop and form values must be empty
        nProgress.done();
        setFormValue((prev) => {
          return {
            ...prev,
            name: "",
            email: "",
            message: "",
          };
        });
      });
  };

  const socialWrapStyle = "contact-social center-mode group";
  const socialIconStyle =
    "text-2xl dark:text-white hover:text-white group-hover:text-white text-customBlue";

  return (
    <Layout delay={false} title="Contact" canonical="/contact">
      <AnimatePresence>
        {showModal && <Modal close={setShowModal} />}
      </AnimatePresence>
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
            <form
              onSubmit={sendMessage}
              className="bg-white rounded-xl py-10 px-5"
            >
              <div className="contact__input-wrapper">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  value={name}
                  id="name"
                />
                {isValidName && (
                  <span className="app__input-validation">
                    Please enter your name.
                  </span>
                )}
              </div>
              <div className="contact__input-wrapper">
                <label htmlFor="mail">Mail</label>
                <input
                  type="text"
                  id="mail"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  value={email}
                />
                {isValidEmail && (
                  <span className="app__input-validation">
                    Please enter your email address in format:
                    youremail@example.com
                  </span>
                )}
              </div>
              <div className="contact__input-wrapper">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  value={message}
                ></textarea>
                {isValidMessage && (
                  <span className="app__input-validation">
                    Sorry, couldn't figure out the input, your message minimal
                    length must be 20.
                  </span>
                )}
              </div>
              <div className="text-end mt-8">
                <div className="app__link">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
