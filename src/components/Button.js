import React from 'react';
import styled from 'styled-components';

import { rem } from '../utilities';

// TEMPLATE
const Button = (props) => {
	const { backgroundColor } = props;
	function handleClick(e) {
		e.preventDefault();
		console.log('The link was clicked.');
	}

	return (
		<ButtonStyle backgroundColor={backgroundColor} onClick={handleClick}>
			{props.children}
		</ButtonStyle>
	);
};

// STYLE
const ButtonStyle = styled.button`
	display: block;
	padding: 14px 20px;
	margin: 0 auto;
	width: 100%;
	max-width: 288px;

	color: ${(props) => props.theme.white};
	font-size: ${rem(17)};
	font-weight: 500;
	letter-spacing: 0.3px;
	background-color: ${(props) => props.backgroundColor || props.theme.malibuBlue};
	border: none;
	border-radius: 4px;
`;

export default Button;
