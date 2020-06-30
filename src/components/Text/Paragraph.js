import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

// TEMPLATE
const Paragraph = (props) => {
	const { fontSize, fontWeight, color } = props;

	return (
		<ParagraphStyle color={color} fontSize={fontSize} fontWeight={fontWeight}>
			{props.children}
		</ParagraphStyle>
	);
};

// STYLE
const ParagraphStyle = styled.p`
	/* Body 16 - Regular */
	color: ${(props) => (props.color ? props.color : props.theme.midnight)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(16))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
	line-height: 20px;

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(22))};
		line-height: 27px;
	}
`;

export default Paragraph;
