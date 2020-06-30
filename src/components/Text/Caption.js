import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

// TEMPLATE
const Caption = (props) => {
	return <CaptionStyle>{props.children}</CaptionStyle>;
};

// STYLE
const CaptionStyle = styled.p`
	/* Caption 12 - Regular */
	color: ${(props) => props.theme.malibuBlue};
	font-size: ${rem(12)};
	font-weight: '400';
	line-height: 15px;

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(16))};
		font-weight: 500;
		line-height: 19px;
	}
`;

export default Caption;
