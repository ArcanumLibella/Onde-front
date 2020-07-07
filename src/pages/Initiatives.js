import React, { useState } from 'react';
import styled from 'styled-components';

import { ApiService, InitiativesList, InitiativesCard, Map } from '../components';
import { devices } from '../utilities';

const Initiatives = (props) => {
	const { theme } = props;
	const items = ApiService('posts');
	const list = items['hydra:member'];

	// STATE
	const [ selectedDepartment, setSelectedDepartment ] = useState(false);

	// To handle click on map and open dashboard
	const handleClick = function(number) {
		setSelectedDepartment(number);
	};

	// To map on each initiative
	const initiativesCollection = list && list.map((i) => <InitiativesCard key={i.id} theme={theme} initiative={i} />);

	return (
		<InitiativesStyled className="initiatives">
			<Map theme={theme} onDepartmentClick={handleClick} />
			<InitiativesList theme={theme} department={selectedDepartment}>
				{initiativesCollection}
			</InitiativesList>
		</InitiativesStyled>
	);
};

// STYLE
const InitiativesStyled = styled.main`
	&.initiatives {
		@media ${devices.large} {
			margin-top: 0;
			width: 100%;
			height: calc(100vh - 75px);
			overflow: hidden;
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
