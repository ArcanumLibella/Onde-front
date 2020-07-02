import React, { useState, useEffect } from 'react';

import { Paragraph } from '../components';

const API = 'http://18.224.138.171/api/';

const ApiService = route => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
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

  const badReturn = error ? (
    <Paragraph>Erreur</Paragraph>
  ) : (
    <Paragraph>Veuillez patienter</Paragraph>
  );

  return isLoaded || error ? datas : badReturn;
};

export default ApiService;
