import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rem } from '../utilities';

// TEMPLATE
const Button = (props) => {
	const { textCta, linkCta, backgroundColor } = props;

	return (
		<ButtonStyle className="cta" backgroundColor={backgroundColor}>
			<Link className="cta__link cta-text" to={linkCta}>
				{textCta}
			</Link>
		</ButtonStyle>
	);

	// const { backgroundColor } = props;
	// function handleClick(e) {
	// 	e.preventDefault();
	// 	console.log('The link was clicked.');
	// }

	// return (
	// 	<ButtonStyle backgroundColor={backgroundColor} onClick={handleClick}>
	// 		{props.children}
	// 	</ButtonStyle>
	// );
};

// STYLE
const ButtonStyle = styled.button`
	position: relative;
	display: block;
	padding: 14px 20px;
	margin: 0 auto;
	width: 100%;
	max-width: 288px;

	color: ${(props) => props.theme.white};
	font-size: ${rem(17)};
	font-weight: 500;
	line-height: 22px;
	letter-spacing: 0.3px;
	background-color: ${(props) => props.backgroundColor || props.theme.malibuBlue};
	border: none;
	border-radius: 4px;
	box-shadow: none;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	z-index: 1;

	&:hover {
		background-color: ${(props) => props.backgroundColor || props.theme.darkBlue};
		box-shadow: 0px 5px 10px $malibuBlue;
	}
`;

export default Button;
