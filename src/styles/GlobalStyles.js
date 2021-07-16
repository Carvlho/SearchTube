import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background: whitesmoke;
    overflow-x: hidden;
    background-color: #131419;
    font-size: 16px;
    width: 100vw;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: '', sans-serif;
    color: var(--black);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;