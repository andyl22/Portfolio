/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../components/Header";

export default function AboutPage() {
  const main = css`
    padding: 20px 0;
    flex: 1 1 auto;
    color: white;
    p {
      padding: 2rem;
      max-width: 850px;
      font-size: 1.3rem;
      margin: 0 auto;
    }
  `;

  return (
    <>
      <Header />
      <main css={main}>
        <h1>About</h1>
        <p>
          I started learning web development from TheOdinProject.
          <br />
          Working on personal and learning projects since January 2022.
          <br />
          <br />
          When I am not working or learning, I enjoy relaxing through playing
          video games, reading books, and watching sports (NFL/NBA).
        </p>
      </main>
    </>
  );
}
