import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { DisplayTitle, InitiativesCard, Tag } from '../components';
import { ParametersCircleF } from '../assets';
import { devices } from '../utilities';

const InitiativesList = (props, { department }) => {
	const { theme } = props;
	const [ items, setItems ] = useState([]);
	const departmentNumber = department ? department : null;
	const [ isLoaded, setIsLoaded ] = useState(false);

	// STATE
	const [ isClosed, setIsClosed ] = useState('true');

	// FUNCTIONS
	// To get initiatives list
	// const items = ApiService('posts');
	const list = items['hydra:member'];
	const initiativesCollection = list && list.map((i) => <InitiativesCard key={i.id} theme={theme} initiative={i} />);

	// To display initiatives list
	const displayInitiatives = () => {
		department = null;
		setIsClosed(!isClosed);
	};

	// USEEFFECT

	useEffect(() => {
		!isLoaded &&
			axios
				.get('https://onde-api.frb.io/api/posts')
				.then((result) => {
					setIsLoaded(true);
					setItems(result['data']);
				})
				.catch((error) => {
					setIsLoaded(true);
				});
	});

	// useEffect(
	// 	() => {
	// 		if (department) {
	// 			setIsClosed();
	// 		}
	// 	},
	// 	[ department ]
	// );

	return (
		<InitiativesListStyled
			className={isClosed ? /* 'initiativesList is-closed' */ 'initiativesList' : 'initiativesList'}
		>
			<div className="content-wrapper">
				<div className="initiativesList__header">
					<DisplayTitle /* tag="h1" */>Vos initiatives</DisplayTitle>
					<ParametersCircleF width={34} fill={theme.midnight} />
				</div>
				<DisplayTitle onClick={() => displayInitiatives()}>TEST{/* {department} */}</DisplayTitle>
				<Tag />
				{initiativesCollection}
			</div>
		</InitiativesListStyled>
	);
};

// STYLE
const InitiativesListStyled = styled.section`
	&.initiativesList {
		@media ${devices.large} {
			position: relative;
			top: 0;
			right: calc(-100% + 620px);
			padding: 56px;
			margin-top: 0;
			width: 100%;
			max-width: 620px;
			height: 100%;
			overflow: scroll;
			background: ${(props) => props.backgroundColor || props.theme.background};
			box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.2);
			transition: all 0.5s ease-in-out;

			&.is-closed {
				right: calc(-100% - 620px);
			}
		}

		.initiativesList__header {
			display: flex;
			justify-content: space-between;

			@media ${devices.large} {
				display: none;
			}
		}

		.icon {
			cursor: pointer;
		}
	}
`;

export default InitiativesList;
