import React from "react";
import Project from "./Project";
import "./Projects.scss";
import KanbanBoard from "../assets/images/kanban-board.png";

export default function PersonalProjects() {
  return (
    <div className="projects-list">
      <Project
        name="E-Commerce Shop"
        imageURL={KanbanBoard}
        link="https://parks-shop.herokuapp.com/"
        description="E-Commerce site built with Node.JS (In Development)"
      />
      <Project
        name="Kanban Board"
        imageURL={KanbanBoard}
        link="https://andyl22-kanban-board.herokuapp.com/"
        description="MERN App with react-beautiful-dnd"
      />
    </div>
  );
}
