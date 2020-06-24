import React from 'react';
import styled from 'styled-components';

const ParagraphStyle = styled.p`
  color: ${props => props.theme.midnight};
  font-size: 17px;
  font-weight: 700;
`;

const Paragraph = props => {
  return <ParagraphStyle>{props.children}</ParagraphStyle>;
};

export default Paragraph;
