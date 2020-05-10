import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  :before,
  :after {
    display: none;
    content: '';
  }

  html,
  body {
    height: auto;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    font-size: 16px;
    line-height: calc(100% + 8px);
  }

  html,
  body,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    line-height: calc(100% + 8px);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
