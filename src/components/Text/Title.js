import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

// TEMPLATE
const Title = (props /* { tag = 'h1' } */) => {
	const { fontSize, fontWeight, color } = props;

	return (
		<TitleStyled /* as={tag} */ color={color} fontSize={fontSize} fontWeight={fontWeight}>
			{props.children}
		</TitleStyled>
	);
};

// STYLE
const TitleStyled = styled.h2`
	color: ${(props) => (props.color ? props.color : props.theme.midnight)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(20))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '600')};

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(26))};
	}
`;

export default Title;
