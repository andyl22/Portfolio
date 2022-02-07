import React from "react";
import PortfolioDropdown from "./PortfolioDropdown";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <span className="portfolio-name">Andy Lau</span>
      <div className="right-header">
        <div className="header-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <PortfolioDropdown />
        </div>
      </div>
    </header>
  );
}
