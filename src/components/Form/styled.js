import styled, { css } from 'styled-components';

const colors = {
  border: {
    default: '#b5b5b5',
    active: '#286fde',
    error: '#e22323'
  },
  font: '#383838'
};

export const StyledForm = styled.form`
  width: 100%;
  margin-top: 1rem;

  button {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 2px;
    background-color: #286fde;
    font-size: 1rem;
    font-weight: 600;
    color: white;
    text-align: center;
    cursor: pointer;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.font};
`;

export const StyledTextInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${colors.border.default};
  border-radius: 2px;
  background-color: white;
  font-size: 1rem;
  color: ${colors.font};
  transition: all ease-in-out 210ms;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${colors.border.active};
  }

  &:focus {
    box-shadow: 0 0 4px ${colors.border.active};
  }
`;

export const StyledRadioGroup = styled.div`
  margin: 0 -0.25rem;
`;

export const StyledRadioLabel = styled.label`
  display: inline-block;
  padding: 0.25rem;
`;

export const StyledField = styled.div`
  position: relative;
  margin-bottom: 1.25rem;

  small {
    color: ${colors.border.error};
  }

  ${(props) =>
    props.error &&
    css`
      ${StyledLabel} {
        color: ${colors.border.error};
      }

      ${StyledTextInput} {
        border-color: ${colors.border.error};
      }
    `}
`;
