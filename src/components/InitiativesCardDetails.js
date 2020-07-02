import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { DisplayTitle, Paragraph, Button, MiniTag } from '../components';
import { DropCircleF, DropO, FistRaisedF } from '../assets';

const InitiativesCardDetails = props => {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [initiative, setInitiative] = useState([]);

  useEffect(() => {
    fetch(`http://18.224.138.171/api/posts/${id}`)
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setInitiative(result);
      })
      .catch(error => {
        setIsLoaded(true);
        setError(error);
      });
  });

  console.log('initiative', initiative);

  const { name, description, likes, tags, subscriptions } = initiative;
  console.log('tags detailCards', tags);

  const amountOf = data => (data ? data.length : '0');

  return (
    <InitiativesCardDetailsStyled>
      {/* <MiniTag tags={tags} /> */}
      <MiniTag />
      <DropCircleF width="34" />
      <DisplayTitle>{name}</DisplayTitle>
      <Paragraph>{description}</Paragraph>
      <Button>Je participe</Button>
      <div>
        <DropO width="34" />
        <Paragraph>{amountOf(likes)}</Paragraph>
      </div>
      <div>
        <FistRaisedF width="34" />
        <Paragraph>{amountOf(subscriptions)}</Paragraph>
      </div>
      <DisplayTitle>Prochains objectifs</DisplayTitle>
      {/* Post Goal numberCircled  */}
      {/* Post Goal name  */}
      <DisplayTitle>Date de fin</DisplayTitle>
      {/* Format Date */}
      <DisplayTitle>Rendez-vous</DisplayTitle>
      {/* Format Date */}
      <DisplayTitle>Emplacement</DisplayTitle>
      {/* Format Place */}
      <iframe
        width="288"
        height="154"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDzhuwSfm5IUEs3cXThQQFs60o8ouymWLk&q=@43.5153627,3.9120154,14z"
        allowfullscreen
      />
    </InitiativesCardDetailsStyled>
  );
};

// STYLE
const InitiativesCardDetailsStyled = styled.section``;

export default InitiativesCardDetails;
