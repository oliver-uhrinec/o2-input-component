import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'On Air Var';
    src: url('/assets/fonts/OnAirVar.woff2');
  }

  body {
    font-family: 'On Air Var', sans-serif;
  }
`;

export default GlobalStyle;
