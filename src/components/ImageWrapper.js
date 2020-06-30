import React from 'react';
import styled from 'styled-components';

import { assets } from './index';
import { rem } from '../utilities';

const ImgStyle = styled.img.attrs((props) => ({
	width: rem(props.width) || rem(320)
}))`
  position: relative;
  width: ${(props) => props.width};
  z-index: -1;
`;

const ImageWrapper = (props) => {
	const { name, width, alt } = props;

	if (!assets[name]) {
		return null;
	}

	return <ImgStyle width={width} alt={alt} src={assets[name]} />;
};

export default ImageWrapper;
