import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h1`
  color: ${props => props.theme.midnight};
  font-size: 30px;
`;

const Title = props => {
  return <TitleStyled>{props.children}</TitleStyled>;
};

export default Title;
