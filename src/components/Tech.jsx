import React from "react";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { IoLogoNpm } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { SiRedux, SiWebpack } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div
      id="tech"
      className="flex flex-col items-center justify-center min-h-screen gap-20"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap gap-10 w-full items-center justify-center">
        <div className="tech-box">
          <h1 className="text-xl font-[500] underline">
            Programming Languages
          </h1>
          <div className="flex items-center gap-10">
            <div>
              <BiLogoTypescript className="tech text-sky-500 " />
              <p>TypeScript</p>
            </div>
            <div>
              <BiLogoJavascript className="tech text-yellow-500 " />
              <p>JavaScript</p>
            </div>
          </div>
        </div>

        <div className="tech-box">
          <h1 className="text-xl font-[500] underline">Frontend Frameworks</h1>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <BiLogoReact className="tech text-blue-500 " />
              <p>React.js</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <RiNextjsLine className="tech " />
              <p>Next.js</p>
            </div>
          </div>
        </div>

        <div className="tech-box">
          <h1 className="text-xl font-[500] underline">
            Markup / CSS Libraries
          </h1>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <BiLogoHtml5 className="tech text-red-500 " />
              <p>HTML</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <BiLogoCss3 className="tech text-blue-500 " />
              <p>CSS</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <BiLogoTailwindCss className="tech text-blue-500 " />
              <p>Tailwind</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <TbBrandFramerMotion className="tech p-1" />
              <p>Framer Motion</p>
            </div>
          </div>
        </div>

        <div className="tech-box">
          <h1 className="text-xl font-[500] underline">State Management</h1>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <BiLogoReact className="tech text-blue-500 " />
              <p>React Context</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <SiRedux className="tech p-2 text-purple-500 text-6xl" />
              <p>Redux</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/zustand.png" className="w-16 tech" alt="" />
              <p>Zustand</p>
            </div>
          </div>
        </div>

        <div className="tech-box">
          <h1 className="text-xl font-[500] underline">Development Tools</h1>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <BiLogoGit className="tech text-red-500 " />
              <p>Git</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <IoLogoNpm className="tech text-red-600 " />
              <p>npm</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <SiWebpack className="tech  p-2" />
              <p>WebPack</p>
            </div>
          </div>
        </div>

        <div className="tech-box">
          <h1 className="text-xl font-[500] underline">Cloud</h1>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center justify-center">
              <VscAzure className="tech text-blue-500  p-2" />
              <p>Microsoft Azure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
