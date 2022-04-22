import React, { useState } from "react";
import "./Project.scss";

export default function Project(props) {
  // eslint-disable-next-line react/prop-types
  const { name, imageURL, link, description } = props;
  const [showDetails, setShowDetails] = useState(false);

  const toggleContents = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className="project"
      onMouseEnter={toggleContents}
      onMouseLeave={toggleContents}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2>{name}</h2>
        <div className="imageContainer">
          <img src={imageURL} alt={name} id={name} draggable={false} />
          {showDetails ? <p>{description}</p> : null}
        </div>
      </a>
    </div>
  );
}
