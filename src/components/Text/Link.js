import React from 'react';
import styled from 'styled-components';

import { rem } from '../../utilities';

const LinkStyle = styled.p`
  color: ${props => props.theme.malibuBlue};
  font-size: ${rem(16)};
  font-weight: '400';
  text-decoration-line: underline;
`;

const Link = props => {
  return <LinkStyle>{props.children}</LinkStyle>;
};

export default Link;
