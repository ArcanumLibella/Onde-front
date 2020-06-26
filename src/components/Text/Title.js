import React from 'react';
import styled from 'styled-components';
import { rem } from '../../utilities';

const TitleStyled = styled.h1`
  color: ${props => (props.color ? props.color : props.theme.midnight)};
  font-size: ${props => (props.fontSize ? rem(props.fontSize) : rem(30))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '800')};
`;

const Title = props => {
  const { fontSize, fontWeight, color } = props;

  return (
    <TitleStyled color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {props.children}
    </TitleStyled>
  );
};

export default Title;
