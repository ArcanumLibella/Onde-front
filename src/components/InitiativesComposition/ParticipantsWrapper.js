import React, { useState } from 'react';
import axios from 'axios';

import { Paragraph } from '../../components';
import { FistRaisedF } from '../../assets';
import { amountOf } from '../../utilities';

const ParticipantsWrapper = postId => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [participants, setParticipants] = useState();

  !isLoaded &&
    axios
      .get(`https://onde-api.frb.io/api/subscriptions/?Post=${postId}`)
      .then(result => {
        setIsLoaded(true);
        setParticipants(result.data['hydra:member']);
      })
      .catch(error => {
        setIsLoaded(true);
      });

  return (
    <div className="initiativeDetails__action">
      <FistRaisedF width="34" />
      <Paragraph>
        {amountOf(participants)}
        {amountOf(participants) > 1
          ? ' personnes participent'
          : ' personne participe'}
      </Paragraph>
    </div>
  );
};

export default ParticipantsWrapper;
