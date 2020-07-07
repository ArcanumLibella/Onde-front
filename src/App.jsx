/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import './assets/scss/app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Homepage, Initiatives, Connexion, Missions, Inscription, InitiativeCreate } from './pages';
import { ThemeProvider } from 'styled-components';

// COMPONENTS
import { Navigation, InitiativesCardDetails } from './components';

function App() {
	// Extract our Sass variables into a JS object
	const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./assets/scss/global/_variables.scss');

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<Router>
					<Navigation />
					<Switch>
						<Route path="/initiatives/:id">
							<InitiativesCardDetails theme={theme} />
						</Route>
						<Route path="/initiatives">
							<Initiatives theme={theme} />
						</Route>
						<Route path="/connexion">
							<Connexion theme={theme} />
						</Route>
						<Route path="/missions">
							<Missions theme={theme} />
						</Route>

						<Route path="/inscription">
							<Inscription theme={theme} />
						</Route>

						<Route path="/nouvelle-initiative">
							<InitiativeCreate theme={theme} />
						</Route>

						<Route path="/">
							<Homepage theme={theme} />
						</Route>
					</Switch>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;
