import React from 'react';
import styled from 'styled-components';

import { rem, devices } from '../../utilities';

const FootnoteStyle = styled.p`
	/* Footnote 13 - Regular */
	color: ${(props) => props.theme.malibuBlue};
	font-size: ${rem(13)};
	font-weight: '400';
	line-height: 16px;

	@media ${devices.large} {
		font-size: ${(props) => (props.fontSize ? rem(props.fontSize) : rem(16))};
		line-height: 19px;
	}
`;

const Footnote = (props) => {
	return <FootnoteStyle>{props.children}</FootnoteStyle>;
};

export default Footnote;
