import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  DisplayTitle,
  Paragraph,
  TextLink,
  InputText,
  ImageWrapper
} from '../components';
import { devices, rem } from '../utilities';

const Inscription = () => {
  const [isParticuler, setIsParticulier] = useState(true);

  const createUser = e => {
    e.preventDefault();

    let form = e.target;

    console.log(form['condition'].value);

    if (form['password'].value === form['password_confirm'].value) {
      if (form['type'].value == 1) {
        var roles = 'ROLE_PARTENAIRE';
      } else {
        roles = 'ROLE_USER';
      }

      axios
        .post('https://onde-api.frb.io/api/users', {
          email: form['email'].value,
          surname: form['surname'] ? form['surname'].value : '',
          name: form['name'].value,
          password: form['password'].value,
          roles: [roles],
          fonction: form['fonction'] ? form['fonction'].value : ''
        })
        .then(response => {
          console.log(response);
          sessionStorage.setItem('User', response.data.id);
          window.location.href = '/';
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <InscriptionStyled className="inscription">
      <div className="inscription__wrapper">
        <div className="content-wrapper">
          <div className="inscription__form">
            <div className="inscription__header">
              <DisplayTitle>Bienvenue !</DisplayTitle>
              <Paragraph fontSize={16}>Vous avez déjà un compte ?</Paragraph>
              <TextLink fontSize={16}>Connectez-vous</TextLink>
            </div>

            <form
              id="formUser"
              onSubmit={e => {
                createUser(e);
              }}
              className="form"
            >
              <div className="form__fields">
                <fieldset className="form__field form__field--inline">
                  <input
                    type="radio"
                    name="type"
                    value="0"
                    id="typeParticulier"
                    onClick={() => setIsParticulier(true)}
                    defaultChecked
                  />
                  <label>
                    <InputText>Particulier</InputText>
                  </label>
                </fieldset>

                <fieldset className="form__field form__field--inline">
                  <input
                    type="radio"
                    name="type"
                    value="1"
                    id="typePartenaire"
                    onClick={() => setIsParticulier(false)}
                  />
                  <label>
                    <InputText>Partenaire</InputText>
                  </label>
                </fieldset>
              </div>

              {isParticuler && (
                <div className="form__fields form__fields--block">
                  <fieldset className="form__field">
                    <label>
                      <InputText>Prénom</InputText>
                    </label>
                    <InputText>
                      <input type="text" name="surname" />
                    </InputText>
                  </fieldset>
                  <fieldset className="form__field">
                    <label>
                      <InputText>Nom</InputText>
                    </label>
                    <InputText>
                      <input type="text" name="name" />
                    </InputText>
                  </fieldset>
                </div>
              )}

              {!isParticuler && (
                <div className="form__fields form__fields--block">
                  <fieldset className="form__field">
                    <label>
                      <InputText>Nom du partenaire</InputText>
                    </label>
                    <InputText>
                      <input type="text" name="name" />
                    </InputText>
                  </fieldset>

                  <fieldset className="form__field">
                    <label>
                      <InputText>Role</InputText>
                    </label>
                    <InputText>
                      <input type="text" name="fonction" />
                    </InputText>
                  </fieldset>
                </div>
              )}

              <fieldset className="form__field">
                <label>
                  <InputText>Adresse e-mail</InputText>
                </label>
                <InputText>
                  <input type="email" name="email" />
                </InputText>
              </fieldset>

              <fieldset className="form__field">
                <label>
                  <InputText>Mot de passe</InputText>
                </label>
                <InputText>
                  <input type="password" name="password" />
                </InputText>
              </fieldset>

              <fieldset className="form__field">
                <label>
                  <InputText>Confirmer le mot de passe</InputText>
                </label>
                <InputText>
                  <input type="password" name="password_confirm" />
                </InputText>
              </fieldset>

              <fieldset className="form__field form__field--inline">
                <input type="checkbox" name="condition" />
                <label>
                  <InputText>J'accepte les conditions</InputText>
                </label>
              </fieldset>

              <input
                className="form__button"
                type="submit"
                value="Confirmer l'inscription"
              />
            </form>
          </div>
        </div>
        <div className="inscription__image">
          <ImageWrapper name="LoginIllustration" />
        </div>
      </div>
    </InscriptionStyled>
  );
};

const InscriptionStyled = styled.main`
  &.inscription {
    padding-bottom: 80px;
    height: 100%;
    @media ${devices.medium} {
      height: calc(100vh - 75px);
    }
    @media ${devices.large} {
      margin-top: 0;
    }
    .inscription {
      &__wrapper {
        @media ${devices.large} {
          height: calc(100vh - 75px);
        }
        img {
          display: none;
          @media ${devices.large} {
            display: block;
          }
        }
      }
      &__header {
        margin-bottom: 16px;
      }
      &__form {
        @media ${devices.large} {
          padding-top: 32px;
        }
      }
      &__image {
        display: none;
        @media ${devices.large} {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50%;
          height: 100vh;
          background-color: ${props => props.theme.blueBackground};
        }
      }
    }
    h2 {
      margin-bottom: 16px;
    }
    .form {
      @media ${devices.large} {
        width: 100%;
        max-width: 500px;
      }
      &__field {
        margin: 16px 0;
        select {
          cursor: pointer;
        }
        textarea {
          font-family: 'Inter', sans-serif;
          font-size: ${rem(12)};
          font-weight: 500;
          line-height: 20px;
          @media ${devices.large} {
            line-height: 27px;
          }
        }
        input,
        select,
        textarea {
          padding: 12px 16px;
          width: 100%;
          border: 1px solid #001e3c;
          border-radius: 2px;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
        }
        input[type='checkbox'],
        input[type='radio'] {
          margin: 0;
          width: auto;
          box-shadow: none;
        }
        &--inline {
          p {
            display: inline;
            margin-left: 8px;
          }
        }
      }
      &__fields {
        display: flex;
        .form__field {
          &:first-child {
            margin-right: 16px;
            width: 30%;
          }
          &:nth-child(2) {
            margin-right: 0;
            width: calc(70% - 16px);
          }
        }
        &--block {
          display: block;
          @media ${devices.medium} {
            display: flex;
            margin: -16px 0 -16px;
          }
          .form__field {
            &:first-child {
              width: 100%;
              @media ${devices.medium} {
                margin-right: 16px;
                width: 50%;
              }
            }
            &:nth-child(2) {
              width: 100%;
              @media ${devices.medium} {
                margin-right: 0;
                width: calc(50% - 16px);
              }
            }
          }
        }
        &--inline {
          .form__field {
            display: flex;
          }
        }
      }
      &__button {
        position: relative;
        display: block;
        padding: 14px 20px;
        margin: 0 auto;
        width: 100%;
        color: ${props => props.theme.white};
        font-size: ${rem(17)};
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.3px;
        background-color: ${props =>
          props.backgroundColor || props.theme.malibuBlue};
        border: none;
        border-radius: 4px;
        box-shadow: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        z-index: 1;
        &:hover {
          background-color: ${props =>
            props.backgroundColor || props.theme.darkBlue};
          box-shadow: 0px 5px 10px $malibuBlue;
        }
      }
    }
  }
`;

export default Inscription;
