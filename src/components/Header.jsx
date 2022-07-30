import React from "react";
import PortfolioDropdown from "./PortfolioDropdown";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <span className="portfolio-name">Andy Lau</span>
        <div className="right-header">
          <PortfolioDropdown />
        </div>
      </div>
    </header>
  );
}
