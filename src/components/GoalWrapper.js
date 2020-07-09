import React from 'react';
import styled from 'styled-components';

import { Paragraph } from '.';

const GoalWrapper = props => {
  const { goals } = props;

  const goalCollection =
    goals &&
    goals.map(i => (
      <DivStyled key={i} classname={i.done}>
        <Paragraph>{i.number}</Paragraph>
        <Paragraph>{i.name}</Paragraph>
      </DivStyled>
    ));

  return goalCollection;
};

const DivStyled = styled.div``;

export default GoalWrapper;
