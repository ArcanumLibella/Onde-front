import React from 'react';
import styled from 'styled-components';

const SubTitleStyled = styled.h2`
  color: ${props => props.theme.blue};
  font-size: 18px;
  font-weight: 500;
`;

const SubTitle = props => {
  return <SubTitleStyled>{props.children}</SubTitleStyled>;
};

export default SubTitle;
