import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../utilities/devices.js';
import { rem } from '../utilities/utils.js';

// COMPONENTS
import { Picture } from '../components';
import { HomeF, HomeO, DropF, DropO, HeartF, HeartO, UserF, UserO } from '../assets/icons/all-icons.js';

const HeaderStyle = styled.header`
	position: sticky;
	top: 0;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 75px;
	background-color: ${(props) => props.theme.white};

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

	a {
		&:first-child {
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
			<Picture name="OndeLogo" />
			<nav role="navigation">
				<ul className="content-wrapper">
					<Link to="/">
						<li>
							<HomeO />
							Accueil
						</li>
					</Link>
					<Link to="/initiatives">
						<li>
							<DropO />
							Initiatives
						</li>
					</Link>
					<Link to="/missions">
						<li>
							<HeartO />
							Missions
						</li>
					</Link>
					<Link to="/connexion">
						<li>
							<UserO />
							Connexion
						</li>
					</Link>
				</ul>
			</nav>
		</HeaderStyle>
	);
};

export default Navigation;
