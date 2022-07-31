/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/Header";
import Headshot from "./assets/images/headshot.jpg";
import ProjectsContainer from "./components/ProjectsContainer";

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  font-size: 1.6rem;
`;

const aboutText = css`
  max-width: 700px;
  font-size: 1rem;
  padding: 0 2rem 2rem 2rem;
`;

const imageCSS = css`
  border-radius: 1em;
  width: 100px;
  height: 100px;
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <main css={main}>
        <img src={Headshot} alt="andy-face" css={imageCSS} />
        <p css={aboutText}>
          <br />
          <br />
          {`Amateur web developer open to entry level or associate opprotunities.`}
          <br />
          <br />
          {`I graduated in 2019 and have worked at software technology companies since. My primary professional experience is in managing customer implementation projects, product analytics, and testing software.`}
          <br />
          <br />
          {`Check out projects, components, and pages I've worked on below. Any feedback is welcome`}
        </p>
        <ProjectsContainer />
      </main>
    </>
  );
}
