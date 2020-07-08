import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { InitiativesList, Map } from '../components';
import { devices } from '../utilities';

const Initiatives = (props) => {
	const { theme } = props;

	const [ departments, setDepartments ] = useState();
	const [ selectedDepartment, setSelectedDepartment ] = useState(false);

	const retrieveDepartmentList = async function() {
		axios.get('https://onde-api.frb.io/api/departments').then((response) => {
			let departmentsList = response.data['hydra:member'];
			// departmentsList && departmentsList.map((departmentItem, index) => {});
			setDepartments(departmentsList);
		});
	};

	const handleClick = function(number) {
		setSelectedDepartment(number);
	};

	return (
		<InitiativesStyled className="initiatives">
			<Map theme={theme} onDepartmentClick={handleClick} />
			<InitiativesList theme={theme} department={selectedDepartment} />
		</InitiativesStyled>
	);
};

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
