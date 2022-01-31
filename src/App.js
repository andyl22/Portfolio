import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/about" element={<AboutPage/>} />
        <Route exact path="/projects" element={<ProjectsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
