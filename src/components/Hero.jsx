import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/Sandy.jpg"
            className="w-[300px] h-[300px] md:h-[350px] md:w-[350px] rounded-full shadow-xl shadow-gray-100 hover:shadow-gray-200 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl "
            alt="Image"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col max-w-[800px] gap-4 items-center justify-center"
        >
          <h1 className="title md:text-4xl text-3xl">G R Sandeep</h1>
          <h2 className="text-lg font-medium bg-gradient-to-r text-transparent from-pink-500 to-blue-500 bg-clip-text transition-all duration-300 opacity-100 hover:opacity-80">
            React.js Developer
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-center px-2 sm:px-5">
            Skilled Frontend Developer and an active member of the Generative AI
            team at Hexaware, proficient in front-end technologies, including
            HTML, CSS, JavaScript and React.js. I leverage Tailwind CSS and Ant
            Design to rapidly create responsive components. Let's collaborate to
            build something exceptional!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
