import React from 'react';
import styled from 'styled-components';

import { rem } from '../../utilities';

// TEMPLATE
const TextCta = (props) => {
	const { fontSize, fontWeight, color } = props;

	return (
		<TextCtaStyled color={color} fontSize={fontSize} fontWeight={fontWeight}>
			{props.children}
		</TextCtaStyled>
	);
};

// STYLE
const TextCtaStyled = styled.h2`
	/* CTA 17 - Medium */
	color: ${(props) => (props.color ? props.color : props.theme.midnight)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(17))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
	line-height: 22px;
	text-transform: uppercase;
`;

export default TextCta;
