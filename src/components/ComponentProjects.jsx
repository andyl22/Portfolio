import React from "react";
import Project from "./Project";
import "./Projects.scss";
import MultiSelect from "../assets/images/multi-select.png";
import DragAndDrop from "../assets/images/drag-and-drop.png";
import LikeButton from "../assets/images/like-button.png";
import ImageSlider from "../assets/images/image-slider.png";

export default function ComponentProjects() {
  return (
    <div className="projects-list">
      <Project
        name="Image Slider"
        imageURL={ImageSlider}
        link="https://andyl22.github.io/image-slider/"
        description="Keyboard navigation and image enlargement modal"
      />
      <Project
        name="Multi-Select"
        imageURL={MultiSelect}
        link="https://andyl22.github.io/multi-select/"
        description="Built from scratch that supports data sourcing from an API"
      />
      <Project
        name="Drag And Drop"
        imageURL={DragAndDrop}
        link="https://andyl22.github.io/Drag-n-Drop-Form/"
        description="Drag images in a form with HTML5 Drag and Drop API"
      />
      <Project
        name="Like Button"
        imageURL={LikeButton}
        link="https://andyl22.github.io/like-button/"
        description="Simple animated heart icon with a basic API call setup"
      />
    </div>
  );
}
