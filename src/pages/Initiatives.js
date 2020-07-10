import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { InitiativesList, Map } from '../components';
import { devices } from '../utilities';

const Initiatives = (props) => {
	const { theme } = props;

	const [ departments, setDepartments ] = useState();
	const [ selectedDepartment, setSelectedDepartment ] = useState(false);
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ initiatives, setInitiatives ] = useState([]);

	const retrieveDepartmentList = async function() {
		axios.get('https://onde-api.frb.io/api/departments').then((response) => {
			let departmentsList = response.data['hydra:member'];
			setDepartments(departmentsList);
		});
	};

	const getInitiatives = (departement) => {
		let selectedDepartment = '';

		if (departement) {
			let idDepartment = departments.find((el) => el.code === departement).id;
			selectedDepartment = `&department=${idDepartment}`;
		}

		axios
			.get(`https://onde-api.frb.io/api/posts?validated=1${selectedDepartment}`)
			.then((result) => {
				setInitiatives(result['data']['hydra:member']);
			})
			.catch((error) => {
				setIsLoaded(true);
			});
	};

	useEffect(() => {
		if (!isLoaded) {
			retrieveDepartmentList();
			getInitiatives();
			setIsLoaded(true);
		}
	});

	const handleClick = function(number) {
		setSelectedDepartment(number);
		getInitiatives(number);
	};

	return (
		<InitiativesStyled className="initiatives">
			<Map theme={theme} onDepartmentClick={handleClick} />
			<InitiativesList theme={theme} initiatives={initiatives} onTagClick={(id) => { handleClick(id)}} />
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
