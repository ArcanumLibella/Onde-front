import React, { useState } from 'react';
import axios from 'axios';

import { DropCircleF } from '../assets';

const DropButton = props => {
  const { userId, initiativeId } = props;

  const [isLiked, setIsLiked] = useState(false);

  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);

  const toggle = () => {
    if (!isLiked) {
      axios
        .post('https://onde-api.frb.io/api/likes', {
          User: userId,
          Post: `/api/posts/${initiativeId}`
        })
        .then(res => res.json())
        .then(result => {
          setDatas(result);
          setIsLiked(true);
        })
        .catch(error => {
          setError(error);
          setIsLiked(false);
        });
    } else {
      axios
        .delete(`https://onde-api.frb.io/api/likes/${initiativeId}`, {
          User: userId,
          Post: `/api/posts/${initiativeId}`
        })
        .then(res => res.json())
        .then(result => {
          setDatas(result);
          setIsLiked(false);
        })
        .catch(error => {
          setError(error);
          setIsLiked(true);
        });
    }
  };

  // console.log('datas dbutton', datas);
  // console.log('isLiked dbutton', isLiked);
  error && console.log(error);

  return <DropCircleF onClick={toggle} width={34} />;
};

export default DropButton;
