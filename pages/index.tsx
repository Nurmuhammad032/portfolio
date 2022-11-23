import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div>
        <div className="main-container">
          <h1 className="dark:text-white text-6xl font-bold leading-[97px] text-customBlack">
            Hello!👋🏻 <br /> My name is Ololade <br /> I'm a Frontend{" "}
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
          </h1>
          <p className="text-2xl dark:text-white text-customBlack mt-7">
            Let me help you grow your business and make your product look pretty
            while at it{" "}
          </p>

          <div className="app__btn">
            <button >Say Hello</button>
          </div>
        </div>
      </div>
    </section>
  );
}