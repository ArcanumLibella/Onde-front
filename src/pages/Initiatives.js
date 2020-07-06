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
			<Map theme={theme} onDistrictClick={handleClick} /* minAndMax={handleValues} min={min} max={max} */ />
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
