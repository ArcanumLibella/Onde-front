import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

import { ApiService, InitiativesList, InitiativesCard, Map } from '../components';
import { devices } from '../utilities';

const Initiatives = (props) => {
	const { theme, onDepartmentClick } = props;

	// STATE
	const [ departments, setDepartments ] = useState([]);
    const [ selectedDepartment, setSelectedDepartment ] = useState(false);
    const [ initiatives, setInitiatives] = useState([]);


	// API CALL
	const retrieveDepartmentList = async function() {
		// Retrieve all departments
		Axios.get('https://onde-api.frb.io/api/departments').then((response) => {
			let departmentsList = response.data['hydra:member'];
			departmentsList &&
				departmentsList.map((departmentItem, index) => {
					console.log('departmentItem -> ', departmentItem.code);
				});
			// departmentsList.find(departmentItem => departmentItem.code === code).id
            setDepartments(departmentsList)
            console.log(departments)
            console.log(departmentsList);
			// console.log('departmentsList -> ', departmentsList);
            // console.log('departments -> ', departments);
		});

		// Retrieve all competitions and store them in competitionsList
		// let competitions = await axiosQuery('https://onde-api.frb.io/api/departmentss');
		// competitions.forEach((competition) => {
		// 	let index = competitionsList.indexOf(
		// 		competitionsList.find((competitionsList) => competitionsList.name === competition.family.name)
		// 	);
		// 	competitionsList[index].sports.push({
		// 		name: competition.name,
		// 		id: competition.id
		// 	});
		// });
	};

	// FUNCTIONS
	// To handle click on map and open initiatives dashboard
	const handleClick = function(code, departments) {
        // setSelectedDepartment(number);
        let department = departments.find(department => department.code === code).id

        setSelectedDepartment(code)
        
        Axios
            .get(`https://onde-api.frb.io/api/posts?department=${department}`)
            .then(({data}) => {
                let initiatives = data;
                console.log(data)
            })


        console.log(department)
    };
    
    const getInitiatives = () => {
        let items = ApiService('posts');
        console.log('Romain le meilleur')
        setInitiatives(items['hydra:member']);
    }

	// To map on each initiative
	const items = ApiService('posts');
	const list = items['hydra:member'];
	const initiativesCollection = list && list.map((i) => <InitiativesCard key={i.id} theme={theme} initiative={i} />);

	useEffect(() => {
        retrieveDepartmentList();
        // getInitiatives();
	}, []);

	// USEEFFECT
	// useEffect(() => {
	// 	if (!isLoaded) {
	// 		getDepartements();
	// 		// displayDepartmentName();
	// 		setIsLoaded(true);
	// 	}
	// });

	return (
		<InitiativesStyled className="initiatives">
			<Map theme={theme} onDepartmentClick={handleClick} departments={departments} />
			<InitiativesList theme={theme} /* departmentsList={departmentsList} */ department={selectedDepartment} initiatives={initiatives}>
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
