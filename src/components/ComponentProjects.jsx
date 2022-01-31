import React from "react";
import Project from "./Project";
import "./Projects.scss";
import MultiSelect from "../assets/images/multi-select.png";
import DragAndDrop from "../assets/images/drag-and-drop.png";
import SimpleEventTimeline from "../assets/images/simple-event-timeline.png";
import LikeButton from "../assets/images/like-button.png";
import ImageSlider from "../assets/images/image-slider.png";

export default function ComponentProjects() {
  return (
    <div className="projects-list">
      <Project
        name="Image Slider"
        imageURL={ImageSlider}
        link="https://andyl22.github.io/image-slider/"
        description="Tab focus with enlarge image to modal"
      />
      <Project
        name="Multi-Select Dropdown"
        imageURL={MultiSelect}
        link="https://andyl22.github.io/multi-select/"
        description="Multi-select built from scratch"
      />
      <Project
        name="Drag And Drop"
        imageURL={DragAndDrop}
        link="https://andyl22.github.io/Drag-n-Drop-Form/"
        description="Modal form with images drag-and-drop"
      />
      <Project
        name="Like Button"
        imageURL={LikeButton}
        link="https://andyl22.github.io/like-button/"
        description="Like Button with API call"
      />
      <Project
        name="Simple Event Timeline"
        imageURL={SimpleEventTimeline}
        link="https://andyl22.github.io/Simple-Event-Timeline/"
        description="Simple container search page created using React"
      />
    </div>
  );
}
