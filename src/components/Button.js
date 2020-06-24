import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.malibuBlue};
  font-size: 17px;
  font-weight: 500;
  padding: 14px 20px;
  border: none;
  letter-spacing: 0.3px;
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
