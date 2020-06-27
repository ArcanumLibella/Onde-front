import React from 'react';
import styled from 'styled-components';

import { Title, InitiativesCard, MiniTag } from '../components';
import { ParametersCircleF } from '../assets';

const InitiativesStyled = styled.section``;

const Initiatives = props => {
  const { theme } = props;

  // Initiatives collection : GET /api/posts

  const list = [
    {
      id: 1,
      name: 'Nettoyer la plage de Pampelonne',
      description:
        'La plage de Pampelonne accueille chaque été de nombreux fêtards avec comme conséquence des déchets qui s’accumulent...',
      likes: 20,
      tags: [1, 2]
    },
    {
      id: 2,
      name: 'Végétaliser le parking de la plage de l’Espiguette',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      likes: 12,
      tags: [3]
    },
    {
      id: 3,
      name: 'Mobilisation contre la pêche des oursins',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      likes: 203,
      tags: [1, 4]
    }
  ];
  const initiativesCollection = list.map(i => (
    <InitiativesCard key={i} theme={theme} initiative={i} />
  ));

  // const coll = [1, 2, 3, 4, 5];
  // const listItems = coll.map(i => <InitiativesCard key={i} theme={theme} />);

  return (
    <InitiativesStyled>
      <Title>Vos initiatives</Title>
      <ParametersCircleF width="40" fill={theme.midnight} />
      {initiativesCollection}
    </InitiativesStyled>
  );
};

export default Initiatives;
