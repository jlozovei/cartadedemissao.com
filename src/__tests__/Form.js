import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from 'components/Form';

describe('Renders Form', () => {
  test('Renders Submit', () => {
    const fields = [
      {
        label: 'Seu nome',
        input: {
          name: 'name',
          placeholder: 'Seu nome completo'
        }
      }
    ];

    const onSubmit = jest.fn();
    const { getByText, getByLabelText, getByTestId } = render(
      <Form fields={fields} onSubmit={onSubmit} />
    );

    const submit = getByText('Criar modelo');
    const form = getByTestId('form');
    const inputName = getByLabelText('Seu nome');

    fireEvent.change(inputName, { target: { value: 'John Doe' } });
    fireEvent.submit(form);

    expect(inputName).toHaveValue('John Doe');
    expect(onSubmit).toHaveBeenCalled();
  });
});
