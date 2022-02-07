/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import Header from "../components/Header";
// eslint-disable-next-line no-unused-vars
import React from "react";
import Headshot from "../assets/images/headshot.jpg";

const background = css`
  background: white;
  flex: 1 1 auto;
`;

const half = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #001229;
  height: 800px;
  color: white;
  padding: 25px;
  font-size: 1.5em;
`;

const imageCSS = css`
  border-radius: 20em;
  width: 100px;
  height: 100px;
`;

export default function HomePage() {
  return (
    <>
      <Header />
      <div css={background}>
        <div css={half}>
          <img src={Headshot} alt="andy-face" css={imageCSS} />
          <p>
            <br />
            Hi. I am Andy. <br />
            <br />
            An aspiring developer.
          </p>
        </div>
      </div>
    </>
  );
}
