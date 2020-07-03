import React, { useState, useEffect } from 'react';

import { ApiService } from './';
import { DropCircleF } from '../assets';

const DropButton = id => {
  const [isActive, setIsActive] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  const toggle = () => setIsActive(!isActive);

  console.log('isActive', isActive);
  const options = {
    method: 'POST',
    data: {
      User: '/api/users/24',
      Post: '/api/posts/5'
    },
    headers: {
      accept: 'application/ld+json',
      "Content-Type: application/ld+json"
    }
  };

  useEffect(() => {
    !isLoaded &&
      fetch('https://onde-api.frb.io/api/likes', options)
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

  console.log(datas);

  return <DropCircleF onClick={toggle} width={34} />;
};

export default DropButton;
