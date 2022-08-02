import React from "react";
import PortfolioDropdown from "./PortfolioDropdown";
import Headshot from "../assets/images/headshot.jpg";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <span className="portfolio-name">
          <img src={Headshot} alt="andy-face" className="headshot" />
          Andy Lau
        </span>
        <div className="right-header">
          <PortfolioDropdown />
        </div>
      </div>
    </header>
  );
}
