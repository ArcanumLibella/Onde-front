import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  ApiService,
  InitiativesList,
  InitiativesCard,
  Map
} from '../components';
import { devices } from '../utilities';

const Initiatives = props => {
  const { theme } = props;

  const [departments, setDepartments] = useState();
  const [selectedDepartment, setSelectedDepartment] = useState(false);

  const retrieveDepartmentList = async function() {
    axios.get('https://onde-api.frb.io/api/departments').then(response => {
      let departmentsList = response.data['hydra:member'];
      departmentsList &&
        departmentsList.map((departmentItem, index) => {
          console.log('departmentItem -> ', departmentItem.code);
        });
      // departmentsList.find(departmentItem => departmentItem.code === code).id
      setDepartments(departmentsList);
      console.log('departmentsList -> ', departmentsList);
      console.log('departments -> ', departments);
    });

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

  const handleClick = function(number) {
    setSelectedDepartment(number);
  };

  // useEffect(() => {
  // 	if (!isLoaded) {
  // 		getDepartements();
  // 		// displayDepartmentName();
  // 		setIsLoaded(true);
  // 	}
  // });

  return (
    <InitiativesStyled className="initiatives">
      <Map theme={theme} onDepartmentClick={handleClick} />
      <InitiativesList
        theme={theme}
        /* departmentsList={departmentsList} */ department={selectedDepartment}
      />
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
