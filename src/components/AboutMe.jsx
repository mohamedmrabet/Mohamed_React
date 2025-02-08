import { motion } from "framer-motion";
import picture3 from "../assets/picture3.jpg"
import React from "react";



const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-700">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={picture3}
              alt="Pic Vector"
              srcset=""
            />
          </div>
        </motion.div>
          <motion.div
          whileInView={{opacity:1 , x:0}}
          initial={{opacity:0 , x:100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <p className="my-2 max-w-xl py-6">
              I am a dedicated and versatile Full Stack Developer with a passion for building efficient and user-centric web applications. With over a year of professional experience, I have developed expertise in a wide range of technologies, including React, Next.js, MySQL, PostgreSQL, and MongoDB.

My journey in web development began with a curiosity for how technology works, which has evolved into a continuous pursuit of innovation and growth. I thrive on solving complex challenges and staying up to date with emerging trends in the tech industry.

Beyond coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
                </p>
            </div>
          </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
