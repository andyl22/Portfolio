/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Header from "../components/Header";
import ProjectsContainer from "../components/ProjectsContainer";
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function ProjectsPage() {
  const main = css`
    background: inherit;
    padding: 5rem 0;
  `;

  return (
    <>
      <Header />
      <main css={main}>
        <ProjectsContainer />
      </main>
    </>
  );
}
