import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Axios from 'axios';
import { DisplayTitle, InputText } from '../components';
// import { ParametersCircleF } from '../assets';
import { devices, rem } from '../utilities';

const InitiativeCreate = (props) => {
	const [ tags, setTags ] = useState([]);
	const [ departements, setDepartements ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);

	const getTags = () => {
		Axios.get('https://onde-api.frb.io/api/tags').then((response) => {
			setTags(response.data['hydra:member']);
			console.log(response.data['hydra:member']);
		});
	};

	const getDepartements = () => {
		Axios.get('https://onde-api.frb.io/api/departments').then((response) => {
			setDepartements(response.data['hydra:member']);
			console.log(response.data['hydra:member']);
		});
	};

	useEffect(() => {
		if (!isLoaded) {
			getTags();
			getDepartements();
			setIsLoaded(true);
		}
	});

	const createInitiative = (e) => {
		e.preventDefault();

		let form = e.target;

		let goalsName = document.getElementsByName('nameObjectif[]');
		let goalsNumber = document.getElementsByName('number[]');
		let goals = [];

		var i = 0;

		goalsName.forEach((element) => {
			console.log(element.value);
			goals.push([ element.value, goalsNumber[i].value ]);
			i++;
		});

		Axios.post('https://onde-api.frb.io/api/posts', {
			name: form['name'].value,
			description: form['description'].value,
			dateMeeting: form['dateMeeting'].value,
			dateEnd: form['dateEnd'].value,
			dateCreated: new Date(),
			User: `/api/users/${sessionStorage.getItem('User')}`,
			department: `/api/departments/${form['department'].value}`,
			validated: false
		}).then((response) => {
			console.log(response);
			let post = response.data;
			var j = 1;

			goals.map((goal) => {
				Axios.post('https://onde-api.frb.io/api/post_goals', {
					name: goal[0],
					number: parseInt(goal[1]),
					placement: j,
					done: false,
					Post: `/api/posts/${post.id}`
				}).then((response) => {
					console.log(response);
				});

				j++;
			});
		});
	};

	return (
		<InitiativeCreateStyled className="initiativeCreation">
			<div className="content-wrapper">
				<DisplayTitle /* tag="h1" */>Créer votre initiative</DisplayTitle>
				<form
					onSubmit={(e) => {
						createInitiative(e);
					}}
					className="form"
				>
					<fieldset className="form__field">
						<label>
							<InputText>Thème</InputText>
						</label>
						<select>
							{tags.map((tag) => {
								return (
									<option key={tag.id} value={tag.id}>
										{tag.name}
									</option>
								);
							})}
						</select>
					</fieldset>

					<fieldset className="form__field">
						<label>
							<InputText>Titre de l'initiative</InputText>
						</label>
						<input type="text" name="name" />
					</fieldset>

					<fieldset className="form__field">
						<label>
							<InputText>Description</InputText>
						</label>
						<textarea name="description" />
					</fieldset>

					<fieldset className="form__field">
						<label>
							<InputText>Emplacement</InputText>
						</label>
						<select name="department">
							{departements.map((department) => {
								return (
									<option key={department.id} value={department.id}>
										{department.name}
									</option>
								);
							})}
						</select>
					</fieldset>

					<div className="form__fields">
						<fieldset className="form__field">
							<label>
								<InputText>Objectif</InputText>
							</label>
							<input type="number" name="number[]" />
						</fieldset>
						<fieldset className="form__field">
							<label>
								<InputText>Titre de l'objectif</InputText>
							</label>
							<input type="text" name="nameObjectif[]" />
						</fieldset>
					</div>

					<fieldset className="form__field">
						<label>
							<InputText>Date et horaire du rendez-vous</InputText>
						</label>
						<input type="datetime-local" name="dateMeeting" />
					</fieldset>

					<fieldset className="form__field">
						<label>
							<InputText>Date de fin</InputText>
						</label>
						<input type="date" name="dateEnd" />
					</fieldset>

					<input className="form__button" type="submit" name="Voir l'aperçu" placeholder="Voir l'aperçu" />
				</form>
			</div>
		</InitiativeCreateStyled>
	);
};

// STYLE
const InitiativeCreateStyled = styled.main`
	&.initiativeCreation {
		padding-bottom: 80px;
		height: 100%;

		h2 {
			margin-bottom: 24px;
		}

		.form {
			&__field {
				margin: 16px 0;

				input,
				select,
				textarea {
					padding: 12px 16px;
					width: 100%;
					border: 1px solid #001e3c;
					border-radius: 2px;
					box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
				}

				select {
					cursor: pointer;
				}
			}

			&__fields {
				display: flex;

				.form__field {
					&:first-child {
						margin-right: 16px;
						width: 30%;
					}
					&:nth-child(2) {
						margin-right: 0;
						width: calc(70% - 16px);
					}
				}
			}

			&__button {
				position: relative;
				display: block;
				padding: 14px 20px;
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
			}
		}
	}
`;

export default InitiativeCreate;
