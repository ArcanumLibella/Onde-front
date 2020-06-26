import React from 'react';
import styled from 'styled-components';

import { rem } from '../../utilities';

const ParagraphStyle = styled.p`
  color: ${props => (props.color ? props.color : props.theme.midnight)};
  line-height: 21px;
  font-size: ${props => (props.fontSize ? rem(props.fontSize) : rem(17))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '500')};
`;

const Paragraph = props => {
  const { fontSize, fontWeight, color } = props;

  return (
    <ParagraphStyle color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {props.children}
    </ParagraphStyle>
  );
};

export default Paragraph;
