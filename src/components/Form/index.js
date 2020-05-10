import React from 'react';

import Field from './sub/Field';

import { StyledForm } from './styled';

const Form = ({ onSubmit, fields }) => {
  return (
    <StyledForm onSubmit={onSubmit} data-testid="form">
      {fields.map((field, index) => {
        const { label, input } = field;

        return <Field label={label} input={input} key={index} />;
      })}

      <button type="submit">Criar modelo</button>
    </StyledForm>
  );
};

export default Form;
