import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

const ParagraphStyled = styled.h2`
	/* Body 18 - Medium */
	color: ${(props) => (props.color ? props.color : props.theme.blue)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(18))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
	line-height: 22px;

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(23))};
		line-height: 32px;
	}
`;

const ParagraphBig = (props) => {
	const { fontSize, fontWeight, color } = props;

	return (
		<ParagraphStyled color={color} fontSize={fontSize} fontWeight={fontWeight}>
			{props.children}
		</ParagraphStyled>
	);
};

export default ParagraphBig;
