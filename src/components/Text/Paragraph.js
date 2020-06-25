import React from 'react';
import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${props => props.theme.midnight};
  font-size: 17px;
  font-weight: 500;
  line-height: 21px;
`;

const Paragraph = props => {
  return <ParagraphStyle>{props.children}</ParagraphStyle>;
};

export default Paragraph;
