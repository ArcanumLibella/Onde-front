import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

// TEMPLATE
const Surtitle = (props) => {
	return <SurtitleStyle>{props.children}</SurtitleStyle>;
};

// STYLE
const SurtitleStyle = styled.h3`
	/* Surtitle 14 - Regular */
	color: ${(props) => props.theme.midnight};
	font-size: ${rem(14)};
	font-weight: '400';
	line-height: 17px;
	text-transform: uppercase;

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(18))};
		line-height: 27px;
	}
`;

export default Surtitle;
