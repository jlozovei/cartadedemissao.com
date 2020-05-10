import React from 'react';

import {
  StyledLabel,
  StyledField,
  StyledTextInput,
  StyledRadioGroup,
  StyledRadioLabel
} from '../styled';

const Field = ({ label, input, children }) => {
  const type = input?.type || 'text';
  const hasChoices = input?.choices;

  return (
    <StyledField error={input.error}>
      {!hasChoices ? (
        <React.Fragment>
          <StyledLabel htmlFor={input.name}>{label}</StyledLabel>
          <StyledTextInput type={type} {...input} id={input.name} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <StyledLabel>{label}</StyledLabel>
          <StyledRadioGroup>
            {input.choices.map((choice, index) => {
              const { label, value } = choice;
              const { name, ref } = input;

              return (
                <StyledRadioLabel key={index}>
                  <input type="radio" name={name} value={value} ref={ref} /> {label}
                </StyledRadioLabel>
              );
            })}
          </StyledRadioGroup>
        </React.Fragment>
      )}

      {input.error && <small>Este campo é obrigatório</small>}
    </StyledField>
  );
};

export default Field;
