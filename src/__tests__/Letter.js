import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Letter from 'components/Letter';

import notice from 'models/notice.json';

describe('Renders Letter', () => {
  test('Renders with user info', () => {
    const user = {
      name: 'John Doe',
      role: 'Front-end developer',
      company: 'Testers Inc.',
      notice: 'full'
    };

    const handleLetterVisibility = jest.fn();

    const { getByText, getByLabelText, getByTestId } = render(
      <Letter user={user} handleLetterVisibility={handleLetterVisibility} />
    );

    const userName = getByText('John Doe');
    const userNotice = getByText(notice[user.notice]);
    const closeButton = getByText('Fechar');

    fireEvent.click(closeButton);

    expect(userName).toBeInTheDocument();
    expect(userNotice).toBeInTheDocument();
    expect(handleLetterVisibility).toHaveBeenCalled();
  });
});
