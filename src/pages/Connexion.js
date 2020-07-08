import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {
  DisplayTitle,
  InputText,
  ImageWrapper,
  Paragraph
} from '../components';
import { rem, devices } from '../utilities';
import { Link } from 'react-router-dom';

const Connexion = props => {
  const alreadyConnected = () => {
    if (sessionStorage.getItem('User') !== null) {
      console.error('Utilisateur déjà connecté');
    }
  };

  alreadyConnected();

  const logout = () => {
    sessionStorage.removeItem('User');
  };

  //logout();

  const testConnexion = e => {
    e.preventDefault();

    let email = e.target['email'].value,
      password = e.target['password'].value;

    axios
      .post('https://onde-api.frb.io/api/users/login', { email, password })
      .then(({ data }) => {
        sessionStorage.setItem('User', data.id);
        window.location.href = '/';
      })
      .catch(error => {
        console.error(error.response.data.error);
      });
  };

  return (
    <ConnexionStyled>
      <div className="sections">
        <div className="content-wrapper section">
          <div>
            <DisplayTitle fontSize="30" fontWeight="800">
              Heureux de vous retrouver !
            </DisplayTitle>
            <Link to="/inscription">
              <Paragraph fontSize={rem(16)}>Pas encore de compte ?</Paragraph>
            </Link>
            <form onSubmit={e => testConnexion(e)}>
              <InputText>
                <label>Adresse e-mail</label>
              </InputText>
              <InputText>
                <input type="email" name="email" />
              </InputText>
              <InputText>
                <label>Mot de passe</label>
              </InputText>
              <InputText>
                <input type="text" name="password" />
              </InputText>
              <InputText>
                <input type="submit" value="Connecter" />
              </InputText>
            </form>
          </div>
        </div>
        <div className="content-wrapper section section--desktop">
          <ImageWrapper name="LoginIllustration" />
        </div>
      </div>
    </ConnexionStyled>
  );
};

const ConnexionStyled = styled.div`
  input,
  select,
  textarea {
    margin: 5px 0px;
    padding: 12px 16px;
    width: 100%;
    border: 1px solid #001e3c;
    border-radius: 2px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
  }
  input[type='submit'] {
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.malibuBlue};
  }
  .sections {
    display: flex;
    flex-direction: row;
    height: calc(100vh - 75px);
  }
  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    @media ${devices.large} {
      margin-top: 0px;
      justify-content: center;
      width: 50vw;
    }
  }
  .section--desktop {
    display: none;
    background-color: ${props => props.theme.blueBackground};
    @media ${devices.large} {
      display: flex;
    }
  }
`;

export default Connexion;
