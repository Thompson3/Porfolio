import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row lg:gap-20 gap-10"
    >
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2024</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc Degree."
            subTitle="University of Cross River State, Nigeria."
            result="Success"
          />
          <ResumeCard
            title="Computer Training Programme."
            subTitle="Hebron Information Technology Tutors."
            result="Success"
          />
          <ResumeCard
            title="Ethical Hacking."
            subTitle="EC-Council."
            result="Success"
          />
          <ResumeCard
            title="Project Management Profession."
            subTitle="Learn To Live Business School, United Kingdom."
            result="Success"
          />
          <ResumeCard
            title="Android Application Development."
            subTitle="Great Learning."
            result="Success"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2024</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="West African Examinations Council."
            subTitle="Holy Standard College."
            result="Success"
          />
          <ResumeCard
            title="National Examination Council."
            subTitle="Holy Standard College."
            result="Success"
          />
          <ResumeCard
            title="Certificate of National Service."
            subTitle="National Youth Service Corps."
            result="Success"
          />
          <ResumeCard
            title="Python for Absolute Beginners."
            subTitle="EC-Council."
            result="Success"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
