import React from "react";
import "./ProjectsContainer.scss";
import OdinProjects from "./OdinProjects";
import PersonalProjects from "./PersonalProjects";
import ComponentProjects from "./ComponentProjects";
import ProjectSection from "./ProjectSection";

export default function Projects() {
  return (
    <section className="projects-container">
      <ProjectSection
        sectionTitle="Personal Projects"
        projectList={<PersonalProjects />}
      />
      <ProjectSection
        sectionTitle="Components"
        projectList={<ComponentProjects />}
      />
      <ProjectSection
        sectionTitle="The Odin Project"
        projectList={<OdinProjects />}
        sectionDescription="Cool/Favorite Projects completed as part of TheOdinProject"
      />
    </section>
  );
}
