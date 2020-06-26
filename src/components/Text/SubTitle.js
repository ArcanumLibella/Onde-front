import React from 'react';
import styled from 'styled-components';
import { rem } from '../../utilities';

const SubTitleStyled = styled.h2`
  color: ${props => (props.color ? props.color : props.theme.blue)};
  font-size: ${props => (props.fontSize ? rem(props.fontSize) : rem(18))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
`;

const SubTitle = props => {
  const { fontSize, fontWeight, color } = props;

  return (
    <SubTitleStyled color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {props.children}
    </SubTitleStyled>
  );
};

export default SubTitle;
