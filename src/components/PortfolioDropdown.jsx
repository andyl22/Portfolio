import React, { useState, useRef, useCallback } from "react";
import "./PortfolioDropdown.scss";
import Dropdown from "./Dropdown";
import ListIcon from "@mui/icons-material/List";

export default function PortfolioDropdown() {
  const [isActive, setIsActive] = useState(false);
  const dropDownRef = useRef();

  const handleClick = useCallback((e) => {
    if(!dropDownRef.current.contains(e.target)) {
      document.removeEventListener("click", handleClick);
      setIsActive(false);
    }
  },[])

  const handleDropDown = () => {
    if(!isActive) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown-container">
      <span ref={dropDownRef}>
        <ListIcon
          onClick={handleDropDown}
          className={isActive ? "list-button hovered-button" : "list-button"}
        />
        {isActive && <Dropdown />}
      </span>
    </div>
  );
}
