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
      className="flex flex-col items-center min-h-screen justify-center gap-20 px-10 sm:px-20 md:px-40 pt-20 w-full"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-10 border-2 shadow-lg shadow-white text-white items-center justify-center w-full p-10 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/hexaware-logo.png"
            className="w-20 h-20 p-5 bg-white rounded-3xl shadow-lg"
            alt=""
          />
          <div className="flex flex-col text-center md:text-left font-medium">
            <p className="text-xl md:text-2xl">
              GenAI Frontend Developer
            </p>
            <p className="text-base md:text-lg">
              Hexaware Technologies Ltd, Chennai
            </p>
            <p className="text-sm md:text-base">
              Aug 2022 - Present ({calculateExperience()})
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>
              Developed and launched multiple projects from scratch using
              React.js, Tailwind CSS and Ant Design Components.
            </li>
            <li>
              Implemented state management solutions like React Context, Redux,
              and Zustand for efficient data handling and application
              performance optimization based on project complexity.
            </li>
            <li>
              Conducted and participated in code reviews and ensuring best
              practices and standards are followed
            </li>
            <li>
              Utilized React Router for efficient navigation and routing in
              applications.
            </li>
            <li>
              Produced multiple visual elements of web applications by
              converting complex Adobe and Figma design wireframes into
              interactive web applications
            </li>
            <li>
              Collaborating with backend developers, designers and other
              stakeholders to seamlessly integrate frontend and backend
              functionalities
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
