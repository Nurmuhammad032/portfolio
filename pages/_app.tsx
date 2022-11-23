import "../styles/globals.css";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { AppBar } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("");

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
    <div>
      <AppBar />
      <h1 className=" text-customBlue text-2xl font-bold absolute top-6 left-[73px]">Brand</h1>
      <Component {...pageProps} />
    </div>
  );
}
