import React from "react";
import Project from "./Project";
import "./Projects.scss";
import KanbanBoard from "../assets/images/kanban-board.png";
import Ecommerce from "../assets/images/ecommerce.png";

export default function PersonalProjects() {
  return (
    <div className="projects-list">
      <Project
        name="E-Commerce Shop"
        imageURL={Ecommerce}
        link="https://parks-shop.herokuapp.com/"
        description="Next.js Framework. Next API pages, basic cart and checkout system with Stripe integration"
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
