import React, { useState, useRef, useCallback } from "react";
import "./PortfolioDropdown.scss";
import PortfolioDropdownContent from "./PortfolioDropdownContent";
import ListIcon from "@mui/icons-material/Menu";

export default function PortfolioDropdown() {
  const [isActive, setIsActive] = useState(false);
  const dropDownRef = useRef();

  const handleClick = useCallback((e) => {
    if (!dropDownRef.current.contains(e.target)) {
      document.removeEventListener("click", handleClick);
      setIsActive(false);
    }
  }, []);

  const handleDropDown = () => {
    if (!isActive) {
      document.addEventListener("click", handleClick);
    } else {
      document.removeEventListener("click", handleClick);
    }
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown-container">
      <button ref={dropDownRef} className="dropdown-button">
        <ListIcon
          onClick={handleDropDown}
          className={isActive ? "list-button hovered-button" : "list-button"}
        />
        {isActive && <PortfolioDropdownContent />}
      </button>
    </div>
  );
}
