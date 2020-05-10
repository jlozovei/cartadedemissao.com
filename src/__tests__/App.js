import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from '../App';

const wrapper = () => render(<App />);

describe('Renders App', () => {
  test('Rendered correctly', () => {
    const { getByText, getByTestId } = wrapper();

    const title = getByText('Carta de Demissão');
    const form = getByTestId('form');
    const submit = getByText('Criar modelo');

    expect(title).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  /*
  test('Renders Letter', () => {
    const { getByText, getByLabelText, getByTestId } = wrapper();

    // const submit = getByText('Criar modelo');
    const form = getByTestId('form');
    const inputName = getByLabelText('Seu nome');
    const inputRole = getByLabelText('Seu cargo');
    const inputCompany = getByLabelText('Nome da Empresa');
    const radioReason = getByText('Motivos particulares');
    const radioNotice = getByText('Vou cumprir todo o aviso');
    const radioAcknowledgement = getByText('Sim');

    const letter = getByTestId('letter');

    fireEvent.change(inputName, { target: { value: 'John Doe' } });
    fireEvent.change(inputRole, { target: { value: 'Front-end Developer' } });
    fireEvent.change(inputCompany, { target: { value: 'Testers Inc.' } });
    fireEvent.click(radioReason);
    fireEvent.click(radioNotice);
    fireEvent.click(radioAcknowledgement);

    act(() => {
      // fireEvent.click(submit);
      fireEvent.submit(form);
    });

    // expect(letter).toBeInTheDocument();
    // expect(letter).toBeInTheDocument();
  });
  */
});
