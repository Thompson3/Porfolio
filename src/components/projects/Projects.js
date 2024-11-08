import React from 'react'
import Title from '../layouts/Title'
import { projectOne} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Launch Green International"
          des="Dedicated space that aims to transform climate science and sustainability research by making it more accesssible, actionable and impactful."
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects