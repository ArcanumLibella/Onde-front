import React from 'react';
import styled from 'styled-components';

import { assets } from './index';
import { rem } from '../utilities';

// TEMPLATE
const ImageWrapper = (props) => {
	const { name, width, alt } = props;

	if (!assets[name]) {
		return null;
	}

	return <ImgStyle width={width} alt={alt} src={assets[name]} />;
};

// STYLE
const ImgStyle = styled.img.attrs((props) => ({
	width: rem(props.width) || rem(320)
}))`
  width: ${(props) => props.width};
`;

export default ImageWrapper;
