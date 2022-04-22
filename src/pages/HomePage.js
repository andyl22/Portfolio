/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Headshot from "../assets/images/headshot.jpg";

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
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
          <b> Hi. I&#8217;m Andy.</b> <br />
          <br />
          Thanks for visiting!
          <br />
          <p>
            I started learning web development from TheOdinProject in 2021, and
            more recently, started working on personal projects.
            <br />
            <br />
            {`Outside of programming, I enjoy the occassional book and video games. I'm also a huge basketball fan, but lately, less of a player and more of a NBA viewer.`}
          </p>
          <Link to="/projects">
            {`Checkout the projects that I've been working on.`}
          </Link>
          <br />
          Any feedback is appreciated!
        </p>
      </main>
    </>
  );
}
