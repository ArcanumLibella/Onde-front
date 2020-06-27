import React from 'react';
import styled from 'styled-components';

import { assets } from './index';
import { rem } from '../utilities';

const ImgStyle = styled.img.attrs(props => ({
  width: rem(props.width) || rem(320)
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
