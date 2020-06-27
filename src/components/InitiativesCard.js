import React from 'react';
import styled from 'styled-components';

import { Title, Paragraph, Button } from '../components';
import { DropCircleF } from '../assets';

const InitiativesCardStyled = styled.section``;

const InitiativesCard = props => {
  const { theme } = props;

  return (
    <InitiativesCardStyled>
      {/* Connect back tags related */}
      <Title>Nettoyer la plage de Pampelonne</Title>
      <Paragraph>
        La plage de Pampelonne accueille chaque été de nombreux fêtards avec
        comme conséquence des déchets qui s’accumulent...
      </Paragraph>
      <div>
        <DropCircleF width="34" fill={theme.blue} />
        {/* Connect back nbr "gouttes" */}
        <Paragraph>25</Paragraph>
      </div>
      <Button>Je participe</Button>
    </InitiativesCardStyled>
  );
};

export default InitiativesCard;
