import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2000 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Cross River State, Calabar (2018 - 2023)"
            result="3.80/5"
            des="Gave me a strong foundation in science, which I now apply to build innovative and practical solutions as a developer."
          />
          <ResumeCard
            title="Project Management Profession"
            subTitle="Learn to Live Business School United Kingdom (2023 - 2024)"
            result="4.75/5"
            des="My PMP background helps me lead teams effectively, ensuring smooth execution of projects and alignment with business goals"
          />
          <ResumeCard
            title="Android Development"
            subTitle=" Great Learning (2023 - 2023)"
            result="4.2/5"
            des="It has provided me with the skills and knowledge to build user friendly mobile apps, helping me turn ideas into functional, high quality Android applications."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sole Developer"
            subTitle="Launch Green International - (2024 - Present)"
            result="Nigeria"
            des="With a first time trial by the CEO and I delivered as expected."
          />
          <ResumeCard
            title="Manager"
            subTitle="Bet9ja Cross River State - (2017 - 2024)"
            result="Nigeria"
            des="My managerial role has honed my skills in team leadership, customer service, and operational efficiency, allowing me to manage daily operations effectively and ensure a smooth, engaging experience for customers. "
          />
          <ResumeCard
            title="Social Media Evaluator"
            subTitle="CrowedGen by Appen - (2020 - present)"
            result="Australia"
            des=" I focus on identifying misinformation, ensuring content accuracy, and maintaining the integrity of online platforms to create a more reliable and trustworthy user experience."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education