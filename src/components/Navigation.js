import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../data/devices.js';

// import { Logo } from '../assets/images/logo.svg';

const Header = styled.header`
	position: fixed;

	@media ${devices.large} {
		top: 0;
		bottom: auto;
		box-shadow: 0px 0.8px 10px rgba(128, 138, 159, 0.23);
	}
`;

const NavWrapper = styled.nav`
	position: fixed;
	bottom: 0;
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
		margin: 0 20px;
		font-size: 1.125rem;
		font-weight: 500;

		&:first-child {
			@media ${devices.large} {
				display: none;
			}
		}
	}
`;

const Navigation = () => {
	return (
		<Header>
			{/* <Logo src="../assets/images/logo.svg" /> */}
			{/* <Logo /> */}
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
