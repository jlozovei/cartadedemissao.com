import React from 'react';

import { StyledLetter } from './styled';

import intros from 'models/intros.json';
import reasons from 'models/reasons.json';
import notice from 'models/notice.json';
import acknowledgements from 'models/acknowledgements.json';

import months from 'constants/months';
import randomInt from 'helpers/randomInt';

const Letter = ({ user, visible, handleLetterVisibility }) => {
  const renderReason = () => {
    let string = reasons[user.reason];
    string = string && string.replace('<#role#>', user.role.toUpperCase());

    return string;
  };

  const dateString = `___________, ${new Date().getDate()} de ${
    months[new Date().getMonth()]
  } de ${new Date().getFullYear()}.`;

  return (
    <StyledLetter visible={visible} data-testid="letter">
      <button onClick={() => handleLetterVisibility(false)}>Fechar</button>

      <p>
        {intros[randomInt(0, intros.length)]} {user.company}
      </p>

      <p>Prezado(s) Senhor(es)</p>

      <p>{renderReason()}</p>

      <p>{notice[user.notice]}</p>

      {Boolean(+user.acknowledgement) && (
        <p>{acknowledgements[randomInt(0, acknowledgements.length)]}</p>
      )}

      <p className="date">{dateString}</p>

      <p className="user-name">{user.name}</p>
    </StyledLetter>
  );
};

export default Letter;
