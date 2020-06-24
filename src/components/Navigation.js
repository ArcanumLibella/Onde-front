import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../utilities/devices.js';

// COMPONENTS
import { IconWrapper } from '../components';

const Header = styled.header`
	position: fixed;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 68px;
	background-color: ${(props) => props.theme.white};

	@media ${devices.large} {
		top: 0;
		bottom: auto;
		box-shadow: 0px 0.8px 10px rgba(128, 138, 159, 0.23);
	}
`;

const NavWrapper = styled.nav`
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
`;

const Menu = styled.ul`
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

	li {
		font-size: 1.125rem;
		font-weight: 500;

		@media ${devices.large} {
			margin: 0 20px;
		}

		&:first-child {
			@media ${devices.large} {
				display: none;
			}
		}
	}
`;

const Navigation = () => {
	return (
		<Header className="content-wrapper">
			<IconWrapper name="OndeLogo" />
			<NavWrapper role="navigation">
				<Menu className="content-wrapper">
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/initiatives">Initiatives</Link>
					</li>
					<li>
						<Link to="/missions">Missions</Link>
					</li>
					<li>
						<Link to="/connexion">Connexion</Link>
					</li>
				</Menu>
			</NavWrapper>
		</Header>
	);
};

export default Navigation;
