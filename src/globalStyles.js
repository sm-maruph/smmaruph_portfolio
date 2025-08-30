import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  display: inline-block;
}

html, body, #root {
  height: 100vh;                  /* fallback for older browsers */
  height: 100dvh;                 /* modern safe viewport height */
  min-height: -webkit-fill-available; /* fix for iOS Safari */
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export default GlobalStyle;
