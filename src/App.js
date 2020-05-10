import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ReactGA from 'react-ga';

import Container from 'components/Container';
import Column from 'components/Column';
import Header from 'components/Header';
import Form from 'components/Form';
import Letter from 'components/Letter';

const App = () => {
  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState({
    name: '',
    role: '',
    company: '',
    reason: '',
    notice: '',
    acknowledgement: ''
  });
  const [isLetterVisible, setIsLetterVisible] = useState(false);

  const onSubmit = (data) => {
    setUser({ ...data });
    setIsLetterVisible(true);

    ReactGA.event({
      category: 'Letter',
      action: 'Created a model'
    });
  };

  const handleLetterVisibility = (isVisible) => {
    setIsLetterVisible(isVisible);
  };

  useEffect(() => {
    ReactGA.pageview('/');
  });

  return (
    <Container>
      <Column>
        <Header />

        <Form
          onSubmit={handleSubmit(onSubmit)}
          fields={[
            {
              label: 'Seu nome',
              input: {
                name: 'name',
                placeholder: 'Seu nome completo',
                ref: register({ required: true }),
                error: errors?.name
              }
            },

            {
              label: 'Seu cargo',
              input: {
                name: 'role',
                placeholder: 'O cargo que você ocupa atualmente',
                ref: register({ required: true }),
                error: errors?.role
              }
            },

            {
              label: 'Nome da Empresa',
              input: {
                name: 'company',
                placeholder: 'Razão Social ou Nome Fantasia',
                ref: register({ required: true }),
                error: errors?.company
              }
            },

            {
              label: 'Por que você está saindo da empresa?',
              input: {
                type: 'radio',
                name: 'reason',
                ref: register({ required: true }),
                error: errors?.reason,
                choices: [
                  {
                    label: 'Para estudar',
                    value: 'study'
                  },
                  {
                    label: 'Intercâmbio',
                    value: 'travel'
                  },
                  {
                    label: 'Motivos particulares',
                    value: 'personal'
                  }
                ]
              }
            },

            {
              label: 'Vai cumprir aviso prévio?',
              input: {
                type: 'radio',
                name: 'notice',
                ref: register({ required: true }),
                error: errors?.notice,
                choices: [
                  {
                    label: 'Vou cumprir todo o aviso',
                    value: 'full'
                  },
                  {
                    label: 'Vou cumprir uma parte do aviso',
                    value: 'custom'
                  },
                  {
                    label: 'Não vou cumprir o aviso',
                    value: 'none'
                  }
                ]
              }
            },

            {
              label: 'Quer deixar um agradecimento na carta?',
              input: {
                type: 'radio',
                name: 'acknowledgement',
                ref: register({ required: true }),
                error: errors?.acknowledgement,
                choices: [
                  {
                    label: 'Sim',
                    value: 1
                  },
                  {
                    label: 'Não',
                    value: 0
                  }
                ]
              }
            }
          ]}
        />
      </Column>
      <Column>
        <Letter
          user={user || {}}
          visible={isLetterVisible}
          handleLetterVisibility={handleLetterVisibility}
        />
      </Column>
    </Container>
  );
};

export default App;
