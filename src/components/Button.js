import React from 'react';
import styled from 'styled-components';
import { rem } from '../utilities';

const ButtonStyle = styled.button`
  padding: 14px 20px;
  color: ${props => props.theme.white};
  font-size: ${rem(17)};
  font-weight: 500;
  letter-spacing: 0.3px;
  background-color: ${props => props.theme.malibuBlue};
  border: none;
  border-radius: 4px;
`;

const Button = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return <ButtonStyle onClick={handleClick}>{props.children}</ButtonStyle>;
};

export default Button;
