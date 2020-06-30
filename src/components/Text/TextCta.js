import React from 'react';
import styled from 'styled-components';

import { rem } from '../../utilities';

const TextCtaStyled = styled.h2`
	/* CTA 17 - Medium */
	color: ${(props) => (props.color ? props.color : props.theme.blue)};
	font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(17))};
	font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '500')};
	line-height: 22px;
	text-transform: uppercase;
`;

const TextCta = (props) => {
	const { fontSize, fontWeight, color } = props;

	return (
		<TextCtaStyled color={color} fontSize={fontSize} fontWeight={fontWeight}>
			{props.children}
		</TextCtaStyled>
	);
};

export default TextCta;
