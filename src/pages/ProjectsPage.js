/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Header from '../components/Header';
import ProjectsContainer from '../components/ProjectsContainer';

export default function ProjectsPage() {

  const main = css`
    background: inherit;
  `

  return (
    <main css={main}>
      <Header />
      <ProjectsContainer />
    </main>
  );
}