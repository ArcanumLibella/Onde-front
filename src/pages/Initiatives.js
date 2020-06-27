import React from 'react';
import styled from 'styled-components';

import { Title, InitiativesCard } from '../components';
import { ParametersCircleF } from '../assets';

const InitiativesStyled = styled.section``;

const Initiatives = props => {
  const { theme } = props;

  return (
    <InitiativesStyled>
      <Title>Vos initiatives</Title>
      <ParametersCircleF width="40" fill={theme.midnight} />
      <InitiativesCard theme={theme} />
    </InitiativesStyled>
  );
};

export default Initiatives;
