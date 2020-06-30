import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ImageWrapper } from '../components';
import { HomeF, DropO, HeartO, UserO } from '../assets';
import { devices, rem } from '../utilities';

// TEMPLATE
const Navigation = (props) => {
	return (
		<HeaderStyle className="content-wrapper">
			<ImageWrapper name="OndeLogo" />
			<nav role="navigation">
				<ul className="content-wrapper">
					<li>
						<HomeF />
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<DropO />
						<Link to="/initiatives">Initiatives</Link>
					</li>
					<li>
						<HeartO />
						<Link to="/missions">Missions</Link>
					</li>
					<li>
						<UserO />
						<Link to="/connexion">Connexion</Link>
					</li>
				</ul>
			</nav>
		</HeaderStyle>
	);
};

// STYLE
const HeaderStyle = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 75px;
	background-color: ${(props) => props.theme.white};
	z-index: 100;

	@media ${devices.large} {
		bottom: auto;
		box-shadow: 0px 0.8px 10px rgba(128, 138, 159, 0.23);
	}

	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: ${(props) => props.theme.background};
		box-shadow: 0px -0.8px 10px rgba(128, 138, 159, 0.23);

		@media ${devices.large} {
			top: 0;
			bottom: auto;
			justify-content: flex-end;
			box-shadow: 0px 0.8px 10px rgba(128, 138, 159, 0.23);
		}
	}

	ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 100vw;
		height: 60px;
		color: ${(props) => props.theme.grey};

		@media ${devices.large} {
			justify-content: flex-end;
			height: 75px;
			color: ${(props) => props.theme.black};
		}
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: ${rem(10)};
		font-weight: 500;

		@media ${devices.large} {
			margin: 0 20px;
			font-size: ${rem(18)};
		}

		&:first-child {
			@media ${devices.large} {
				display: none;
			}
		}

		svg {
			margin-bottom: 3px;
			width: 21px;
			height: 21px;
			fill: ${(props) => props.theme.grey};

			@media ${devices.large} {
				display: none;
			}
		}
	}

	img {
		width: 100%;
		max-width: 94px;
		max-height: 32px;
		z-index: 10;

		@media ${devices.large} {
			max-width: 128px;
			max-height: 45px;
		}
	}
`;

export default Navigation;
