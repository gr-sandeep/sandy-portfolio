import React from "react";
import { motion } from "framer-motion";
import moment from "moment";

const Experience = () => {
  const startDate = moment("2022-08-04");
  const currentDate = moment();

  const calculateExperience = () => {
    const startDate = moment("2022-08-04");
    const currentDate = moment();

    const years = currentDate.diff(startDate, "years");
    startDate.add(years, "years");

    const months = currentDate.diff(startDate, "months");
    startDate.add(months, "months");

    const days = currentDate.diff(startDate, "days");

    return `${years} years ${months} months ${days} days`;
  };

  return (
    <div
      id="experience"
      className="flex flex-col items-center min-h-screen justify-center gap-20 px-14 w-full"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-10 bg-[#0ea5e9] text-white items-center justify-center w-full p-10 rounded-lg">
        <div className="flex flex-row items-center gap-10">
          <img
            src="/hexaware-logo.png"
            className="w-20 h-20 p-5 bg-white rounded-3xl shadow-lg"
            alt=""
          />
          <div className="flex flex-col font-medium">
            <p className="text-2xl text-black">GenAI Frontend Developer</p>
            <p className="text-lg"> Hexaware Technologies Ltd, Chennai</p>
            <p> Aug 2022 - Present ({calculateExperience()})</p>
          </div>
        </div>

        <div className="flex flex-col items-center px-10">
          <p className="text-sm text-justify"></p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
