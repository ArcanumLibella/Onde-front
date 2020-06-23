import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<header className="header">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/initiatives">Initiatives</Link>
					</li>
					<li>
						<Link to="/connexion">Connexion</Link>
					</li>
					<li>
						<Link to="/missions">Missions</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Menu;
