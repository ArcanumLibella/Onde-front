import React from 'react';
import styled from 'styled-components';
import { rem } from '../utilities/utils.js';

const TitleStyled = styled.h1`
	color: ${(props) => props.theme.midnight};
	font-size: ${rem(30)};
`;

const Title = (props) => {
	return <TitleStyled>{props.children}</TitleStyled>;
};

export default Title;
