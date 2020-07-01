import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

// TEMPLATE
const DisplayTitle = (props /* { tag = 'h1' } */) => {
	const { fontSize, fontWeight, color } = props;

	return (
		<DisplayTitleStyled /* as={tag} */ color={color} fontSize={fontSize} fontWeight={fontWeight}>
			{props.children}
		</DisplayTitleStyled>
	);
};

// STYLE
const DisplayTitleStyled = styled.h2`
	color: ${(props) => (props.color ? props.color : props.theme.midnight)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(30))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '800')};

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(40))};
	}
`;

export default DisplayTitle;
