import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { DropCircleF } from '../assets';

const DropButton = props => {
  const { userId, initiativeId } = props;

  const [isLiked, setIsLiked] = useState(false);
  const [checkIsLiked, setCheckIsLiked] = useState(false);

  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

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
        // console.log(response.data['hydra:member'].length);

        if (response.data['hydra:member'].length === 1) {
          // console.log('deja liké');
          setIsLiked(true);
        } else {
          // console.log('pas liké');

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
          // console.log(result);
          // setDatas(result);
          setIsLiked(true);
        })
        .catch(error => {
          setError(error);
          setIsLiked(true);
        });
    } else {
      // console.log(sessionStorage.getItem('User') + ' ' + initiativeId);
      axios
        .get(
          `https://onde-api.frb.io/api/likes?User=${sessionStorage.getItem(
            'User'
          )}&Post=${initiativeId}`
        )
        .then(response => {
          console.log(response.data['hydra:member'][0]);
          let likeToDelete = response.data['hydra:member'][0].id;

          axios
            .delete(`https://onde-api.frb.io/api/likes/${likeToDelete}`)
            .then(response => {
              console.log('Like supprimé');
              setIsLiked(false);
            });
        });

      // axios
      //   .delete(`https://onde-api.frb.io/api/likes/${initiativeId}`, {
      //     User: userId,
      //     Post: `/api/posts/${initiativeId}`
      //   })
      //   .then(res => res.json())
      //   .then(result => {
      //     setDatas(result);
      //     setIsLiked(false);
      //   })
      //   .catch(error => {
      //     setError(error);
      //     setIsLiked(true);
      //   });
    }
  };

  // console.log('datas dbutton', datas);
  // console.log('isLiked dbutton', isLiked);
  error && console.log(error);

  return <DropCircleF onClick={toggle} width={34} />;
};

export default DropButton;
