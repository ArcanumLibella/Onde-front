import React from 'react';
import { assets } from '../index';
import styled from 'styled-components';

const SvgStyle = styled.svg.attrs(props => ({
  width: '320px'
}))`
  fill: ${props => (props.color ? props.theme.blue : props.theme.grey)};
`;

const IconWrapper = props => {
  const { name } = props;

  if (!assets[name]) {
    return null;
  }

  return <SvgStyle alt={name} src={assets[name]} />;
};

export default IconWrapper;
