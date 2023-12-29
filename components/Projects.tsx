import SectionHeading from "./SectionHeading"
import React from "react"
import useFetchProjects from "./FetchProjects"
import Project from "./Project"


type projectData = {
  title: string;
  url: string;
  id: string;
  img: string;
  text: string;
  github: string;
  tags: [];
};

const Projects = async () => {
    const projects = await useFetchProjects() as projectData[]

  return (
    <section id="projects" className="max-w-[1120px] scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}


export default Projects