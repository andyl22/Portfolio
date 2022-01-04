import React from "react";
import Project from "./Project";
import "./Projects.scss";
import Etch from "../assets/images/etch-a-sketch.png";
import GoogleHomePage from "../assets/images/google-home-replica.png";
import Calculator from "../assets/images/online-calculator.png";
import ToDoList from "../assets/images/to-do-list.png";
import MemoryCard from "../assets/images/memory-card.png";
import OpenWeather from "../assets/images/open-weather.png";
import YoutubeReplica from "../assets/images/youtube-replica.png";
import Restaurant from "../assets/images/restaurant.png";
import FlowerShop from "../assets/images/shopping-cart.png";

export default function OdinProjects() {
  return (
    <div className="projects-list">
      <Project
        name="Youtube Video Replica"
        imageURL={YoutubeReplica}
        link="https://andyl22.github.io/youtube-video-replica/"
        description="React repliica components"
      />
      <Project
        name="Open Weather"
        imageURL={OpenWeather}
        link="https://andyl22.github.io/open-weather/"
        description="Promises and async/await with the OpenWeather API"
      />
      <Project
        name="To-Do List"
        imageURL={ToDoList}
        link="https://andyl22.github.io/to-do-list/"
        description="Vanilla Javascript - localStorage of tasks and projects"
      />
      <Project
        name="Flower Shop"
        imageURL={FlowerShop}
        link="https://andyl22.github.io/restaurant/"
        description="React router tab-based shopping list"
      />
      <Project
        name="Etch-A-Sketch"
        imageURL={Etch}
        link="https://andyl22.github.io/etch-a-sketch/"
        description="Vanilla Javascript mouse callback events"
      />
      <Project
        name="Online Calculator"
        imageURL={Calculator}
        link="https://andyl22.github.io/online-calculator/"
        description="Vanilla Javascript switch-case for basic arithmetic"
      />
      <Project
        name="Memory Card"
        imageURL={MemoryCard}
        link="https://andyl22.github.io/memory-card/"
        description="React useState - randomized card list and score keeping"
      />
      <Project
        name="Restaurant Page"
        imageURL={Restaurant}
        link="https://andyl22.github.io/restaurant/"
        description="Vanilla Javascript - tab-based click events to render pages"
      />
      <Project
        name="Google Homepage"
        imageURL={GoogleHomePage}
        link="https://andyl22.github.io/reconstruct-google-homepage"
        description="Basic HTML/CSS replica of Google's Homepage"
      />
    </div>
  );
}
