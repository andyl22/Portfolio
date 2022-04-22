import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage.js";
import ProjectsPage from "./pages/ProjectsPage.js";

function App() {
  return (
    // eslint-disable-next-line no-undef
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
