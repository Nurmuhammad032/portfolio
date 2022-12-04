import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { AppBar } from "../components";
import Router from "next/router";
import { AnimatePresence } from "framer-motion";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { IoIosSunny } from "react-icons/io";
import { BsFillMoonFill } from "react-icons/bs";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // Used for page transition
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <AppBar />
      <div className="flex justify-between items-center w-full absolute top-6 xl:px-14 lg:px-10 md:px-6 px-2">
        <div>
          <h1 className=" text-customBlue text-2xl font-bold">Brand</h1>
        </div>
        <div
          className="hover:bg-[#143963] group w-14 h-14 center-mode transition-all cursor-pointer rounded-full"
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? (
            <BsFillMoonFill className="text-2xl group-hover:text-white" />
          ) : (
            <IoIosSunny className="text-4xl" />
          )}
        </div>
      </div>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </>
  );
}
