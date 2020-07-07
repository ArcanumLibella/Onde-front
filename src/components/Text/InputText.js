import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

// TEMPLATE
const InputText = (props) => {
	const { fontSize, fontWeight, color, textTransform } = props;

	return (
		<InputTextStyle color={color} fontSize={fontSize} fontWeight={fontWeight} textTransform={textTransform}>
			{props.children}
		</InputTextStyle>
	);
};

// STYLE
const InputTextStyle = styled.p`
	color: ${(props) => (props.color ? props.color : props.theme.midnight)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(12))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
	line-height: 20px;
	text-transform: ${(props) => (props.textTransform ? 'uppercase' : 'none')};

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(16))};
		line-height: 27px;
	}
`;

export default InputText;
