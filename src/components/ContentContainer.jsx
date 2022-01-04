import React from "react";
import "./ContentContainer.scss";
import ProjectsContainer from "./ProjectsContainer";

export default function ContentContainer() {
  return (
    <div className="content-container">
      <ProjectsContainer/>
    </div>
  )
}