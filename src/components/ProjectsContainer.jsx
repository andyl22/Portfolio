import React from "react";
import "./ProjectsContainer.scss";
import OdinProjects from "./OdinProjects";
import PersonalProjects from "./PersonalProjects";
import ComponentProjects from "./ComponentProjects";
import ProjectSection from "./ProjectSection";

export default function Projects() {
  
  return (
    <section className="projects-container">
      <ProjectSection sectionTitle="Personal Projects" projectList={<PersonalProjects/>} sectionDescription="Personal Projects"/>
      <ProjectSection sectionTitle="React Components" projectList={<ComponentProjects/>} sectionDescription="React components"/>
      <ProjectSection sectionTitle="The Odin Projects" projectList={<OdinProjects/>} sectionDescription="Main projects completed as part of TheOdinProject"/>
    </section>
  )
}