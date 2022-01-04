import React from "react";
import PortfolioDropdown from "./PortfolioDropdown";
import './Header.scss'

export default function Header() {
  return (
    <header>
      <span className="portfolio-name">Andy Lau</span>
      <div className="right-header">
        <div className="header-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <PortfolioDropdown />
        </div>
      </div>
    </header>
  );
}
