import React from "react";
import Project from "./Project";
import "./Projects.scss";
import KanbanBoard from "../assets/images/kanban-board.png";

export default function PersonalProjects() {
  return (
    <div className="projects-list">
      <Project
        name="Kanban Board"
        imageURL={KanbanBoard}
        link="https://andyl22-kanban-board.herokuapp.com/"
        description="Basic MERN application deployed on heroku"
      />
    </div>
  );
}
