import React, { useEffect, useRef } from "react";
import "./Dropdown.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Dropdown() {
  const dropdownRef = useRef();
  useEffect(() => {
    dropdownRef.current.classList.add("active");
  });

  return (
    <div className="dropdown" ref={dropdownRef}>
      <a href="https://github.com/andyl22" className="sm-link">
        <GitHubIcon fontSize="small" htmlColor="black" />
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/andy-lau-b46570a8/"
        className="sm-link"
      >
        <LinkedInIcon fontSize="small" htmlColor="blue" />
        LinkedIn
      </a>
    </div>
  );
}
