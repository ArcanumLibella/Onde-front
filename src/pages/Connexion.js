import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { DisplayTitle } from '../components';

// TEMPLATE
const Connexion = () => {

    const alreadyConnected = () => {
        if(sessionStorage.getItem('User') !== null) {
            console.error('Utilisateur déjà connecté');
        }
    }

    alreadyConnected();

    const logout = () => { sessionStorage.removeItem('User'); }

    //logout();
    
    const testConnexion = (e) => {
        //empêche l'envoi du formulaire
        e.preventDefault();

        // Récupération des données du formulaires
        let email = e.target['email'].value,
            password = e.target['password'].value

        // Appel API pour savoir si les identifiants fourni sont bon
        Axios
            .post('https://onde-api.frb.io/api/users/login', { email, password })
            .then(({data}) => { 
                //console.log(data);
                sessionStorage.setItem('User', data.id);
                window.location.href = '/';
            })
            .catch((error) => { console.error(error.response.data.error) })
        ;
    }

  return (
    <ConnexionStyled>
      <div className="content-wrapper">
        <div className="section">
        <DisplayTitle>Heureux de vous retrouver !</DisplayTitle>
        <form onSubmit={(e) => testConnexion(e)}>
          <input type="email" name="email"/>
          <input type="text" name="password"/>
          <input type="submit" value="Connecter"/>
        </form>
        </div>
        <div className="section section--desktop">
          
        </div>
      </div>
    </ConnexionStyled>
  );
};

// STYLE
const ConnexionStyled = styled.main`
  display:flex;
  flex-direction: row;
  .section {
    width: 50vw;
  }
  .section--desktop{
    display:none;
  }
`


export default Connexion;
