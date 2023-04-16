import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

import Image from "next/image";
import darkMoon from "/public/Homepage/darkMoon.png";
import lightMoon from "/public/Homepage/lightMoon.png";
import darkKeyboard from "/public/Homepage/darkKeyboard.png";
import lightKeyboard from "/public/Homepage/lightKeyboard.png";
import darkQuotes from "/public/Homepage/darkQuotes.png";
import lightQuote from "/public/Homepage/lightQuote.png";
import darkChat from "/public/Homepage/darkChat.png";
import lightChat from "/public/Homepage/lightChat.png";

import React, { useState, useEffect } from "react";

function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [imageSrc, setImageSrc] = useState("/public/Homepage/Avatar.png");
  const [imageChatSrc, setImageChatSrc] = useState(darkChat);
  const [imageTodoSrc, setImageTodoSrc] = useState(darkMoon);
  const [imageKeyboardSrc, setImageKeyboardSrc] = useState(darkKeyboard);
  const [imageQuoteSrc, setImageQuoteSrc] = useState(darkQuotes);

  const styles = {
    circle: {
      backgroundColor: darkMode ? "#7b2cbf" : "#0496ff",
    },
    square: {
      backgroundColor: darkMode ? "#ff8500" : "#ffbc42",
    },
    triangle: {
      backgroundColor: darkMode ? "#e56b6f" : "#d81159",
    },
  };

  useEffect(() => {
    if (darkMode) {
      setImageSrc("/Avatar.png");
    } else {
      setImageSrc("/Homepage/Sunglasses.png");
    }

    if (darkMode) {
      setImageChatSrc(darkChat);
    } else {
      setImageChatSrc(lightChat);
    }

    if (darkMode) {
      setImageTodoSrc(darkMoon);
    } else {
      setImageTodoSrc(lightMoon);
    }

    if (darkMode) {
      setImageKeyboardSrc(darkKeyboard);
    } else {
      setImageKeyboardSrc(lightKeyboard);
    }

    if (darkMode) {
      setImageQuoteSrc(darkQuotes);
    } else {
      setImageQuoteSrc(lightQuote);
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Suzy Lawlor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-orange-50 px-10 pt-10 dark:bg-gray-800 md:px-20 lg:px-40">
        <section className=" relative min-h-screen">
          <div
            style={styles.circle}
            className={`absolute top-1 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-0 w-64 h-64 rounded-full blur-3xl ${
              darkMode ? "" : "mix-blend-multiply"
            } filter animate-blob animation-delay-1000`}
          ></div>
          <div
            style={styles.square}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 z-0 w-64 h-64 rounded-full blur-2xl ${
              darkMode ? "" : "mix-blend-multiply"
            } filter animate-blob animation-delay-2000`}
          ></div>
          <div
            style={styles.triangle}
            className={`absolute top-1/4 right-1/2 transform -translate-x-1 -translate-y-1/2 z-0 w-64 h-64 rounded-full blur-3xl ${
              darkMode ? "" : "mix-blend-multiply"
            } filter animate-blob animation-delay-4000`}
          ></div>

          <nav className="text-gray-700 py-10 mb-12 flex justify-between dark:text-gray-50">
            <h1 className="font-burtons text-3xl">Developed by Suzy</h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-3xl"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-3xl"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-700 text-3xl to-blue-400 text-gray-50 px-4 py-2 border-none rounded-md ml-8"
                  href="/resume"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2
              style={{ position: "relative", zIndex: 1 }}
              className="text-8xl py-2 text-orange-200 font-medium dark:text-blue-400 md:text-8xl"
            >
              Suzy Lawlor
            </h2>
            <h3
              style={{ position: "relative", zIndex: 1 }}
              className="text-4xl py-2 text-gray-900 dark:text-orange-100 md:text-4xl"
            >
              Developer and designer.
            </h3>
            <p
              style={{ position: "relative", zIndex: 1 }}
              className="text-3xl py-5 leading-8 text-gray-200 dark:text-gray-200 max-w-xl mx-auto"
            >
              Recent full stack web development graduate with a degree in Fine
              Art and a background in digital content creation and marketing
              design.
            </p>
            <div
              style={{ position: "relative", zIndex: 1 }}
              className="text-5xl flex justify-center gap-16 py-3 text-gray-50 dark:text-gray-50"
            >
              <a
                href="https://www.linkedin.com/in/suzy-lawlor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/suzylawlor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={imageSrc} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-gray-50">A bit about me.</h3>
          </div>
          <div className="lg:flex gap-10 justify-content-center">
            <div className="text-center shadow-sm shadow-pink-400 p-10 rounded-xl my-10 bg-orange-50 dark:bg-gray-800 flex-1 items-center">
              <h3 className="text-lg text-gray-800 font-medium pt-8 pb-2 dark:text-gray-50">
                Digital Designs
              </h3>
              <p className="py-2 text-gray-800 dark:text-gray-50">
                Creating contemporary designs suited for your needs following
                core digital design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-50">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-50">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-50">Indesign</p>
              <p className="text-gray-800 py-1 dark:text-gray-50">Pixelmator</p>
            </div>
            <div className="text-center shadow-md shadow-orange-400 p-10 rounded-xl my-10 bg-orange-50 dark:bg-gray-800 flex-1 items-center">
              <h3 className="text-lg text-gray-800 font-medium pt-8 pb-2 dark:text-gray-50">
                Clean Code
              </h3>
              <p className="py-2 text-gray-800 dark:text-gray-50">
                Writing clear and maintainable code that solves problems and
                delivers value.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-50">JavaScript</p>
              <p className="text-gray-800 py-1 dark:text-gray-50">React</p>
              <p className="text-gray-800 py-1 dark:text-gray-50">Node.js</p>
              <p className="text-gray-800 py-1 dark:text-gray-50">Next.js</p>
            </div>
            <div className="text-center shadow-2xl shadow-orange-500 p-10 rounded-xl my-10 bg-orange-50 dark:bg-gray-800 flex-1 items-center">
              <h3 className="text-lg text-gray-800 font-medium pt-8 pb-2 dark:text-gray-50">
                Content Creation
              </h3>
              <p className="py-2 text-gray-800 dark:text-gray-50">
                Experienced in creating engaging digital content, gaining skills
                in digital marketing strategy.
              </p>
              <h4 className="py-4 text-teal-600">Projects I have worked</h4>
              <p className="text-gray-800 py-1 dark:text-gray-50">
                Website Design
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-50">
                Client Communication
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-50">
                Social Media Campaigns
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-50">
                Online Invitations
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-20 dark:text-orange-100 ">
              Some projects to play with.
            </h3>
          </div>
          <div className="flex gap-30 py-20 lg:flex-wrap pb-40">
            <div className="basis-1/5 flex-1 relative">
              <a
                href="./To-do/todoPage"
                target="_blank"
                className="block relative"
              >
                <div className="rounded-lg overflow-hidden flex items-center justify-center">
                  <AiOutlineCheck className="text-pink-400 text-9xl dark:text-blue-400" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
              </a>
            </div>
            <div className="basis-1/5 flex-1 relative">
              <a href="/Keyboard" target="_blank" className="block relative">
                <div className="rounded-lg overflow-hidden flex items-center justify-center">
                  <FaMusic className="text-pink-400 text-9xl dark:text-blue-400" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
              </a>
            </div>
            <div className="basis-1/5 flex-1 relative">
              <a
                href="./Inspiration/Quotes"
                target="_blank"
                className="block relative"
              >
                <div className="rounded-lg overflow-hidden flex items-center justify-center">
                  <FaHeart className="text-pink-400 text-9xl dark:text-blue-400" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
              </a>
            </div>
            <div className="basis-1/5 flex-1 relative">
              <a
                href="./ChatApp/chatPage"
                target="_blank"
                className="block relative"
              >
                <div className="rounded-lg overflow-hidden flex items-center justify-center">
                  <AiOutlineMessage className="text-pink-400 text-9xl dark:text-blue-400" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"></div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
