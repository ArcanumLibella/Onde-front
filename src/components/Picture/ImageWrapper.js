import React from 'react';
import { assets } from '../index';
import styled from 'styled-components';

const ImgStyle = styled.img.attrs(props => ({
  width: props.width + 'px' || '320px'
}))`
  width: ${props => props.width};
`;

const ImageWrapper = props => {
  const { name, width } = props;

  if (!assets[name]) {
    return null;
  }

  return <ImgStyle width={width} alt={name} src={assets[name]} />;
};

export default ImageWrapper;
