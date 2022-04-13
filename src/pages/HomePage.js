/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Header from "../components/Header";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Headshot from "../assets/images/headshot.jpg";

const main = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 25px;
  font-size: 1.6rem;
  a {
    color: white;
    text-decoration: underline;
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
        </p>
      </main>
    </>
  );
}
