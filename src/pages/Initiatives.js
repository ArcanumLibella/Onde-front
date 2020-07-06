import React from 'react';
import styled from 'styled-components';

import { ApiService, InitiativesList, InitiativesCard, Map } from '../components';
import { devices } from '../utilities';

const Initiatives = (props) => {
	const { theme } = props;

	const items = ApiService('posts');

	const list = items['hydra:member'];

	const initiativesCollection = list && list.map((i) => <InitiativesCard key={i.id} theme={theme} initiative={i} />);

	// initiativesCollection && console.log('initiatives => ', initiativesCollection.initiative.tags[0]);

	return (
		<InitiativesStyled className="initiatives">
			<Map theme={theme}>Coucou la map</Map>
			<InitiativesList theme={theme}>{initiativesCollection}</InitiativesList>
		</InitiativesStyled>
	);
};

// STYLE
const InitiativesStyled = styled.main`
	&.initiatives {
		@media ${devices.large} {
			margin-top: 0;
			width: 100%;
			height: 100vh;
		}
	}

	.map {
		display: none;

		@media ${devices.large} {
			display: block;
		}
	}
`;

export default Initiatives;
