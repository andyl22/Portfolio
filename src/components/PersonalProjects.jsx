import React from "react";
import Project from "./Project";
import "./Projects.scss";
import KanbanBoard from "../assets/images/kanban-board.png";
import Ecommerce from "../assets/images/ecommerce.png";
import Grid from "../assets/images/grid.png";

export default function PersonalProjects() {
  return (
    <div className="projects-list">
      <Project
        name="Grid"
        imageURL={Grid}
        link="https://andyl22.github.io/Grid/"
        description="Simple grid with reordering, sorting, and text/picklist editing. No backend."
      />
      <Project
        name="E-Commerce Shop"
        imageURL={Ecommerce}
        link="https://parks-shop.herokuapp.com/"
        description="E-commerce website with backend and frontend"
      />
      <Project
        name="Kanban Board (MERN App)"
        imageURL={KanbanBoard}
        link="https://andyl22-kanban-board.herokuapp.com/"
        description="JS, Emotion CSS, react-beautiful-dnd"
      />
    </div>
  );
}
