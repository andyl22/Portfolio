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

const aboutText = css`
  max-width: 700px;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 3rem 1rem;
`;

const projectsWrapperAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: translateY(-30px);
  }
  50% {
    opacity: 0.5;
    
  }
  100% {
    opacity: 1;
  }
`;

const projectsWrapper = css`
  animation: ${projectsWrapperAnimation} 0.5s ease-in;
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <main css={main}>
        <p css={aboutText}>{`Stuff I've worked on.`}</p>
        <div css={projectsWrapper}>
          <ProjectsContainer />
        </div>
      </main>
    </>
  );
}
