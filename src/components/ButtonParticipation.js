import React, { useState } from 'react';
import styled from 'styled-components';

import { rem } from '../utilities';
import axios from 'axios';

const ButtonParticipation = (props) => {
	const { backgroundColor, user, post } = props;

	const [ isParticipate, setIsParticipate ] = useState(false);
	const [ idParticipation, setIdParticipation ] = useState(null);

	const alreadyParticipe = (user, post) => {
		if (user) {
			axios.get(`https://onde-api.frb.io/api/subscriptions?User=${user}&Post=${post}`).then(({ data }) => {
				if (data['hydra:totalItems'] === 1) {
					setIsParticipate(true);
					setIdParticipation(data['hydra:member'][0].id);
				}
			});
		}
	};

	const toParticipe = (user, post) => {
		if (user) {
			if (isParticipate && idParticipation) {
				axios
					.delete(`https://onde-api.frb.io/api/subscriptions/${idParticipation}`)
					.then(() => setIsParticipate(false));
			} else {
				axios
					.post(`https://onde-api.frb.io/api/subscriptions/`, {
						User: `/api/users/${user}`,
						Post: `/api/posts/${post}`
					})
					.then((response) => {
						setIsParticipate(true);
					});
			}
		} else {
			window.location.href = `/connexion?redirect=/initiatives/${post}`;
		}
	};

	alreadyParticipe(user, post);

	return (
		<ButtonStyle className="cta" backgroundColor={isParticipate ? 'green' : backgroundColor}>
			<p
				className="cta__link"
				onClick={() => {
					toParticipe(user, post);
				}}
			>
				{isParticipate ? 'Vous participez' : 'Je participe'}
			</p>
		</ButtonStyle>
	);
};

const ButtonStyle = styled.button`
	position: relative;
	display: block;
	margin: 0 auto;
	width: 100%;
	max-width: 288px;

	color: ${(props) => props.theme.white};
	font-size: ${rem(17)};
	font-weight: 500;
	line-height: 22px;
	letter-spacing: 0.3px;
	background-color: ${(props) => props.backgroundColor || props.theme.malibuBlue};
	border: none;
	border-radius: 4px;
	box-shadow: none;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	z-index: 1;

	&:hover {
		background-color: ${(props) => props.backgroundColor || props.theme.darkBlue};
		box-shadow: 0px 5px 10px $malibuBlue;
	}
`;

export default ButtonParticipation;
