import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../utilities/devices.js';

// COMPONENTS
import { IconWrapper } from '../components';
import { HomeF, HomeO, DropF, DropO, HeartF, HeartO, UserF, UserO } from '../assets/icons/all-icons.js';

const HeaderStyle = styled.header`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 75px;
	background-color: ${(props) => props.theme.white};

	@media ${devices.large} {
		top: 0;
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
		font-size: 0.625rem;
		font-weight: 500;

		@media ${devices.large} {
			margin: 0 20px;
			font-size: 1.125rem;
		}

		&:first-child {
			@media ${devices.large} {
				display: none;
			}
		}

		.icon {
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
		max-width: 128px;
		max-height: 45px;
		z-index: 10;
	}
`;

const Navigation = () => {
	return (
		<HeaderStyle className="content-wrapper">
			<IconWrapper name="OndeLogo" />
			<nav role="navigation">
				<ul className="content-wrapper">
					<li>
						<HomeO />
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

export default Navigation;
