/** @jsxRuntime classic */
/** @jsx jsx */

import { css, keyframes, jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding-bottom: 5rem;
`;

const animation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
  }
`;

const aboutText = css`
  max-width: 700px;
  font-size: 1rem;
  padding: 0 2rem 2rem 2rem;
  animation: ${animation} 1s ease-in;
`;

const projectsWrapper = css`
  animation: ${animation} 1.5s ease-in;
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <main css={main}>
        <p css={aboutText}>
          <br />
          <br />
          {`Amateur web developer open to entry level or associate opprotunities.`}
          <br />
          <br />
          {`I graduated in 2019 and have worked in software implementation, analytics, and testing since.`}
        </p>
        <div css={projectsWrapper}>
          <ProjectsContainer />
        </div>
      </main>
    </>
  );
}
