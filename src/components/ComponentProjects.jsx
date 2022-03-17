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
        description="Tab focus with enlarged image"
      />
      <Project
        name="Multi-Select Dropdown"
        imageURL={MultiSelect}
        link="https://andyl22.github.io/multi-select/"
        description="Multi-select"
      />
      <Project
        name="Drag And Drop"
        imageURL={DragAndDrop}
        link="https://andyl22.github.io/Drag-n-Drop-Form/"
        description="Form with images drag-and-drop"
      />
      <Project
        name="Like Button"
        imageURL={LikeButton}
        link="https://andyl22.github.io/like-button/"
        description="Like Button with API call"
      />
    </div>
  );
}
