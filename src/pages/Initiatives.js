import React from 'react';
import styled from 'styled-components';

import { Title } from '../components';
import { ParametersCircleF } from '../assets';

const InitiativeStyled = styled.section``;

const Initiatives = props => {
  const { theme } = props;

  return (
    <InitiativeStyled>
      <Title>Vos initiatives</Title>
      <ParametersCircleF width="40" fill={theme.midnight} />
    </InitiativeStyled>
  );
};

export default Initiatives;
