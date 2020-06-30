import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

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

const Caption = (props) => {
	return <CaptionStyle>{props.children}</CaptionStyle>;
};

export default Caption;
