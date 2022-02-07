import React, { useRef } from "react";
import "./Project.scss";

export default function Project(props) {
  // eslint-disable-next-line react/prop-types
  const { name, imageURL, link, description } = props;
  const imgRef = useRef();
  const textRef = useRef();

  const addHoverEffect = () => {
    imgRef.current.classList.add("img-hovered-effect");
    textRef.current.classList.add("text-hovered-effect");
  };

  const removeHoverEffect = () => {
    imgRef.current.classList.remove("img-hovered-effect");
    textRef.current.classList.remove("text-hovered-effect");
  };

  return (
    <div className="project">
      <a
        href={link}
        onMouseEnter={addHoverEffect}
        onMouseLeave={removeHoverEffect}
      >
        <h2 ref={textRef}>{name}</h2>
        <img
          src={imageURL}
          alt={name}
          id={name}
          draggable={false}
          ref={imgRef}
        />
        <label htmlFor={name}>{description}</label>
      </a>
    </div>
  );
}
