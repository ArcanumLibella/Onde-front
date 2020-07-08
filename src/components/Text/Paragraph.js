import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

const Paragraph = props => {
  const { fontSize, fontWeight, color, textTransform } = props;

  return (
    <ParagraphStyle
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textTransform={textTransform}
    >
      {props.children}
    </ParagraphStyle>
  );
};

const ParagraphStyle = styled.p`
  color: ${props => (props.color ? props.color : props.theme.midnight)};
  font-size: ${props => (props.fontSize ? rem(props.fontSize) : rem(16))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
  line-height: 20px;
  text-transform: ${props => (props.textTransform ? 'uppercase' : 'none')};

  @media ${devices.large} {
    font-size: ${props => (props.fontSize ? rem(props.fontSize) : rem(22))};
    line-height: 27px;
  }
`;

export default Paragraph;
