import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

// TEMPLATE
const TextLink = (props) => {
	return <TextLinkStyle>{props.children}</TextLinkStyle>;
};

// STYLE
const TextLinkStyle = styled.p`
	color: ${(props) => props.theme.malibuBlue};
	font-size: ${rem(16)};
	font-weight: '400';
	text-decoration-line: underline;
	line-height: 19px;

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(22))};
		line-height: 27px;
	}
`;

export default TextLink;
