import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

const TextLinkStyle = styled.p`
	/* Link 16 - Normal */
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

const TextLink = (props) => {
	return <TextLinkStyle>{props.children}</TextLinkStyle>;
};

export default TextLink;
