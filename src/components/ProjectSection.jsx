import React from "react";
import "./ProjectSection.scss";

export default function Projects(props) {
  // eslint-disable-next-line react/prop-types
  const { sectionTitle, projectList, sectionDescription } = props;

  return (
    <section className="project-section">
      <div className="section-info">
        <h1>{sectionTitle}</h1>
        <p>{sectionDescription}</p>
      </div>
      {projectList}
    </section>
  );
}
