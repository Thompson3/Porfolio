import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web developement"
            subTitle="Launch Green International - (2024 - Present)"
            result="Nigeria"
            des="A very educative and innovative project ready to help every citizen around the world."
          />
          <ResumeCard
            title="School Staff"
            subTitle="Community Secondary School, Enugu - (2023 - 2024)"
            result="Nigeria"
            des="I’m glad I chose to engage in teaching during my service year, it was fulfilling to impart knowledge to so many students before I moved on."
          />
          <ResumeCard
            title="WordPress"
            subTitle="Marian, Calabar - (2020 - 2021)"
            result="Nigeria"
            des="During my industrial training, I gained hands on experience with WordPress, building functional websites. 
            It was a great foundation that allowed me to start working with clients and refining my skills soon after."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
