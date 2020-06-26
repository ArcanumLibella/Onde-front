import React from 'react';
import styled from 'styled-components';
import { rem } from '../../utilities/utils.js';

const ParagraphStyle = styled.p`
	color: ${(props) => props.theme.midnight};
	font-size: ${rem(17)};
	font-weight: 500;
	line-height: 21px;
`;

const Paragraph = (props) => {
	return <ParagraphStyle>{props.children}</ParagraphStyle>;
};

export default Paragraph;
