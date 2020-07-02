import React, { useState, useEffect } from 'react';

import { Paragraph } from '../components';

const API = 'https://onde-api.frb.io/api/';

const ApiService = route => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    !isLoaded &&
      fetch(API + route)
        .then(res => res.json())
        .then(result => {
          setIsLoaded(true);
          setDatas(result);
        })
        .catch(error => {
          setIsLoaded(true);
          setError(error);
        });
  });

  // const badReturn = error ? (
  //   <Paragraph>Erreur</Paragraph>
  // ) : (
  //   <Paragraph>Veuillez patienter</Paragraph>
  // );

  // return isLoaded || error ? datas : badReturn;
  return datas;
};

export default ApiService;
