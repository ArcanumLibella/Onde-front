import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { DropCircleF } from '../assets';

const DropButton = props => {
  const { initiativeId, theme } = props;

  const [isInitiativeLiked, setIsInitiativeLiked] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://onde-api.frb.io/api/likes?User=${sessionStorage.getItem(
          'User'
        )}&Post=${initiativeId}`
      )
      .then(response => {
        if (response.data['hydra:member'].length === 1) {
          setIsInitiativeLiked(true);
        } else {
          setIsInitiativeLiked(false);
        }
      });
  });

  const toggle = () => {
    if (!isInitiativeLiked) {
      axios
        .post('https://onde-api.frb.io/api/likes', {
          User: `/api/users/${sessionStorage.getItem('User')}`,
          Post: `/api/posts/${initiativeId}`
        })
        .then(result => {
          setIsInitiativeLiked(true);
        })
        .catch(error => {
          setError(error);
          setIsInitiativeLiked(true);
        });
    } else {
      axios
        .get(
          `https://onde-api.frb.io/api/likes?User=${sessionStorage.getItem(
            'User'
          )}&Post=${initiativeId}`
        )
        .then(response => {
          let likeToDelete = response.data['hydra:member'][0].id;

          axios
            .delete(`https://onde-api.frb.io/api/likes/${likeToDelete}`)
            .then(response => {
              setIsInitiativeLiked(false);
            });
        });
    }
  };

  error && console.log(error);

  return (
    <DropCircleF
      onClick={toggle}
      width={34}
      fill={isInitiativeLiked ? theme.blue : theme.midnight}
    />
  );
};

export default DropButton;
