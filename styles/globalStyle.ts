import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.gray_background};
  }

  :root{
    --vh: 100%;

  }
  
  #root {
    margin: 0 auto;
  }
  
  html {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body, button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
    Helvetica Neue, sans-serif;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    -webkit-tap-highlight-color : transparent;
  }

  input {
    outline: none;
  }
  
  a, a:visited {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
