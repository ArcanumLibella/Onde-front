import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Department = ({ /* number ,*/ points, code, onDepartmentClick }) => {
	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ numberInitiatives, setNumberInitiatives ] = useState(0);

	const handleClick = function() {
		onDepartmentClick(code);
	};

	const retrieveDepartmentList = async function() {};

	const initiativesNumber = (code) => {
		axios.get('https://onde-api.frb.io/api/departments').then((response) => {
			let departmentsList = response.data['hydra:member'];
			
			let idDepartment = departmentsList.find(el => el.code === code).id
			let selectedDepartment = `&department=${idDepartment}`

			axios.get(`https://onde-api.frb.io/api/posts?validated=1${selectedDepartment}`)
				.then(({ data }) => {
					setNumberInitiatives(data['hydra:totalItems'])
				})
		});

		
	}

	useEffect(() => {
		if(!isLoaded){
			retrieveDepartmentList();
			initiativesNumber(code)
			setIsLoaded(true)
		}
	})

	return (
		<path
			onClick={() => {
				onDepartmentClick(code);
			}}
			id={code}
			data-name="department"
			className="department"
			d={points}
			// style={{ fill: color }}
			fill="#437EBA"
			stroke="white"
			strokeWidth="0.5"
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	);
};

export default Department;
