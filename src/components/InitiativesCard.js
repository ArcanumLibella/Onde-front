import React from 'react';
import styled from 'styled-components';

import { Title, Paragraph, Button, MiniTag } from '../components';
import { DropCircleF } from '../assets';

const InitiativesCardStyled = styled.section``;

const InitiativesCard = props => {
  const { theme, initiative } = props;

  const { name, description, likes, tags } = initiative;
  // Initiative informations : GET ​/api​/posts​/{id}
  // Tags are in collection : tags[]
  // Gouttes are in collection : likes[]

  return (
    <InitiativesCardStyled>
      <MiniTag tags={tags} />

      <Title>{name}</Title>
      {/* <Title>{console.log(tags)}</Title> */}
      <Paragraph>{description}</Paragraph>
      <div>
        <DropCircleF width="34" fill={theme.blue} />
        <Paragraph>{likes}</Paragraph>
      </div>
      <Button>Je participe</Button>
    </InitiativesCardStyled>
  );
};

export default InitiativesCard;
