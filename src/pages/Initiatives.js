import React from 'react';
import styled from 'styled-components';

import { ApiService, DisplayTitle, InitiativesCard, Tag } from '../components';
import { ParametersCircleF } from '../assets';
import { devices } from '../utilities';

const Initiatives = (props) => {
	const { theme } = props;

	const items = ApiService('posts');

	const list = items['hydra:member'];

	const initiativesCollection = list && list.map((i) => <InitiativesCard key={i.id} theme={theme} initiative={i} />);

	// initiativesCollection && console.log('initiatives => ', initiativesCollection.initiative.tags[0]);

	return (
		<InitiativesStyled className="initiatives">
			<div className="content-wrapper">
				<div className="initiatives__header">
					<DisplayTitle /* tag="h1" */>Vos initiatives</DisplayTitle>
					<ParametersCircleF width={34} fill={theme.midnight} />
				</div>
				<Tag />
				{initiativesCollection}
			</div>
		</InitiativesStyled>
	);
};

// STYLE
const InitiativesStyled = styled.main`
	&.initiatives {
		@media ${devices.large} {
			position: absolute;
			right: 0;
			padding: 56px;
			margin-top: 0;
			width: 800px;
			height: 100%;
			overflow: scroll;
			background: ${(props) => props.backgroundColor || props.theme.background};
			box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.2);
		}

		.initiatives__header {
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

export default Initiatives;
