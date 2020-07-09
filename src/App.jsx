/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import './assets/scss/app.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import {
	Homepage,
	Initiatives,
	Connexion,
	Missions,
	Inscription,
	InitiativeCreate,
	InitiativeAdded,
	Disclaimer
} from './pages';
import { Navigation, InitiativesCardDetails } from './components';

function App() {
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

						<Route path="/initiative-ajoutee">
							<InitiativeAdded theme={theme} />
						</Route>

						<Route path="/disclaimer">
							<Disclaimer theme={theme} />
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
