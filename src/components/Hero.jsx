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
            className="w-[300px] h-[300px] md:h-[350px] md:w-[350px] rounded-full shadow-xl shadow-gray-500 hover:shadow-gray-600 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl "
            alt="Image"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col max-w-[600px] gap-2 items-center justify-center"
        >
          <h1 className="title md:text-4xl text-3xl">G R Sandeep</h1>
          <h2 className="text-lg font-medium bg-gradient-to-r text-transparent from-pink-500 to-blue-500 bg-clip-text transition-all duration-300 opacity-100 hover:opacity-80">
            Frontend Developer
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-pretty text-center">
            I'm a web developer skilled in React.js, Next.js, Tailwind, focused
            on building clean, scalable applications. I create efficient
            solutions for dynamic user experiences. Let's build something great
            together!
            <br />
            <br />
            Experienced React.js Developer with a strong background in building
            efficient and scalable web applications. Proficinet in front-end
            technologies such as HTML, CSS and JavaScript.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
