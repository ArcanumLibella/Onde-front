import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { DropCircleF } from '../assets';

const DropButton = props => {
  const { initiativeId } = props;

  const [isLiked, setIsLiked] = useState(false);
  const [checkIsLiked, setCheckIsLiked] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!checkIsLiked) {
      alreadyLiked();
    }
  });

  const alreadyLiked = () => {
    axios
      .get(
        `https://onde-api.frb.io/api/likes?User=${sessionStorage.getItem(
          'User'
        )}&Post=${initiativeId}`
      )
      .then(response => {
        if (response.data['hydra:member'].length === 1) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      });
  };

  const toggle = () => {
    if (!isLiked) {
      axios
        .post('https://onde-api.frb.io/api/likes', {
          User: `/api/users/${sessionStorage.getItem('User')}`,
          Post: `/api/posts/${initiativeId}`
        })
        .then(result => {
          setIsLiked(true);
        })
        .catch(error => {
          setError(error);
          setIsLiked(true);
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
              setIsLiked(false);
            });
        });
    }
  };

  error && console.log(error);

  return <DropCircleF onClick={toggle} width={34} fill={isLiked && 'blue'} />;
};

export default DropButton;
