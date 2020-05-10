import { createGlobalStyle } from 'styled-components';

export const Custom = createGlobalStyle`
  body,
  .root {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background-color: #f1f2f3;
  }

  body,
  form * {
    font-family: 'Jost', sans-serif;
  }

  .root {
    flex: 1;
  }

  a {
    color: #286fde;
  }

  p,
  li {
    a {
      font-weight: bold;
    }
  }

  p {
    & + p {
      margin-top: 0.5rem;
    }
  }
`;
