import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

const TextLink = props => {
  const { fontSize, color, fontWeight } = props;
  return (
    <TextLinkStyle color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {props.children}
    </TextLinkStyle>
  );
};

const TextLinkStyle = styled.p`
  color: ${props => (props.color ? props.color : props.theme.malibuBlue)};
  font-size: ${props => (props.fontSize ? rem(props.fontSize) : rem(16))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  text-decoration-line: underline;
  line-height: 19px;

  @media ${devices.large} {
    font-size: ${props => (props.fontSize ? rem(props.fontSize) : rem(22))};
    line-height: 27px;
  }
`;

export default TextLink;
