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
  p {
    font-size: 1.2rem;
    p {
      padding: 2rem;
      max-width: 850px;
      margin: 0 auto;
    }
    a {
      color: #2674df;
      &:hover {
        color: #4894fb;
      }
    }
  }
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
        <p>
          <br />
          <b>{`Hi. I'm Andy.`}</b> <br />
          <br />
          <p>
            {`I'm an amateur web developer seeking entry level opportunities in front end development.`}
            <br />
            <br />
            {`Since graduating from college in 2019,
            I've worked with software service companies in various capacities, including implementations, product management, and quality assurance.`}
            <br />
            <br />
            {`While I've enjoyed those roles, I would love to learn and practice programming full-time!`}
            <br />
            <br />
            {`Feel free to check out projects, components, and pages I've worked on below!`}
            <br />
            <br />
          </p>
          <br />
        </p>
        <ProjectsContainer />
      </main>
    </>
  );
}
