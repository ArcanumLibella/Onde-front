import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

const DisplayTitleStyled = styled.h1`
	/* Display Title 30 */
	color: ${(props) => (props.color ? props.color : props.theme.midnight)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(30))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '800')};

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(40))};
	}
`;

const DisplayTitle = (props) => {
	const { fontSize, fontWeight, color } = props;

	return (
		<DisplayTitleStyled color={color} fontSize={fontSize} fontWeight={fontWeight}>
			{props.children}
		</DisplayTitleStyled>
	);
};

export default DisplayTitle;
