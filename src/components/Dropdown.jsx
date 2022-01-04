import React, { useEffect, useRef } from "react";
import './Dropdown.scss';

export default function Dropdown() {
  const dropdownRef = useRef();
  useEffect(() => {
    dropdownRef.current.classList.add("active");
  })

  return (
    <div className="dropdown" ref={dropdownRef}>
      <a href="https://github.com/andyl22">Github</a>
      <a href="https://www.linkedin.com/in/andy-lau-b46570a8/">LinkedIn</a>
    </div>
  );
}
