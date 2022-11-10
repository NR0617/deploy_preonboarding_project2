// GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin-top: 10em;
    pre {
      width: 80vw;
    white-space:pre-wrap;
  }
code {
  word-break: break-all;
}
a{
  word-break: break-all;
}
  }
`;

export default GlobalStyle;
