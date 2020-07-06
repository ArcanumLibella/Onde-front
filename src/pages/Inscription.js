import React, { useState } from 'react';
import Axios from 'axios';

import { DisplayTitle } from '../components';
import { doc } from 'prettier';
import { Redirect } from 'react-router-dom';

// TEMPLATE
const Inscription = () => {

    const [isParticuler, setIsParticulier] = useState(true);

    const createUser = (e) => {
        e.preventDefault();

        let form = e.target;

        console.log(form['condition'].value);

        if(form['password'].value === form['password_confirm'].value){
            if(form['type'].value == 1) { var roles = 'ROLE_PARTENAIRE'; } else { var roles = 'ROLE_USER'; } 


            Axios
                .post('https://onde-api.frb.io/api/users', {
                    email: form['email'].value,
                    surname: form['surname'] ? form['surname'].value : '',
                    name: form['name'].value,
                    password: form['password'].value,
                    roles: [roles],
                    fonction: form['fonction'] ? form['fonction'].value : ''
                })
                .then((response) => {
                    console.log(response)
                    sessionStorage.setItem('User', response.data.id);
                    window.location.href = '/'
                })
                .catch((error) => console.error(error))
            ;
        }
    }

  return (
    <div className="content-wrapper">
      <DisplayTitle>Bienvenue !</DisplayTitle>

      <form id="formUser" onSubmit={(e) => {createUser(e)}}>
            <label>Particulier</label> 
            <input type="radio" name="type" value="0" id="typeParticulier" onClick={() => setIsParticulier(true) } defaultChecked/>
            <label>Partenaire</label> 
            <input type="radio" name="type" value="1" id="typePartenaire" onClick={() => setIsParticulier(false) }/> 

            {isParticuler &&
            <div> 
                <label>Prénom</label> 
                <input type="text" name="surname" />
                <label>Nom</label> 
                <input type="text" name="name" />
            </div>
            }

            {!isParticuler &&
                <div>
                    <label>Nom du partenaire</label> 
                    <input type="text" name="name" />

                    <label>Role</label> 
                    <input type="text" name="fonction" />
                </div>
            }

            

            <label>Adresse e-mail</label> 

            <input type="email" name="email" />

            <label>Mot de passe</label> 
            <input type="password" name="password" />

            <label>Confirmer le mot de passe</label>
            <input type="password" name="password_confirm" />

            <input type="checkbox" name="condition" />

            <input type="submit" value="Confirmer l'inscription" />
      </form>
    </div>
  );
};

// STYLE

export default Inscription;
