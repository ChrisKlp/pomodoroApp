import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: ${({ theme }) => theme.fontFamily}, sans-serif;
    /* font-family: 'Roboto Slab', serif; */
    /* font-family: 'Space Mono', monospace; */
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.grayishDark};
  }
`;

export default GlobalStyle;
