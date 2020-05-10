import styled, { css } from 'styled-components';

export const StyledLetter = styled.article`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border: 1px solid #636363;
  border-radius: 2px;
  background-color: #f9f1dd;

  * {
    font-family: 'Kalam', sans-serif;
  }

  p {
    margin: 0 0 2rem;
    font-size: 1.25rem;
    text-align: justify;

    &.user-name {
      margin-top: 3.25rem;
      text-decoration: overline;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    display: none;
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 2px;
    background-color: black;
    font-size: 0.875rem;
    color: white;
  }

  @media screen and (max-width: 990px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    border: none;
    border-radius: 0;
    transition: all ease-in-out 210ms;

    ${(props) =>
      props.visible
        ? css`
            opacity: 1;
            visibility: visible;
          `
        : css`
            opacity: 0;
            visibility: hidden;
          `}

    button {
      display: inline-block;
    }
  }

  @media screen and (min-width: 991px) {
    * {
      ${(props) =>
        props.visible
          ? css`
              opacity: 1;
              visibility: visible;
            `
          : css`
              opacity: 0;
              visibility: hidden;
            `}
    }
  }
`;
