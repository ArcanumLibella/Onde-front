import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { DisplayTitle, InputText, ImageWrapper } from '../components';
import { devices, rem } from '../utilities';

const InitiativeCreate = (props) => {
	const [ tags, setTags ] = useState([]);
	const [ departements, setDepartements ] = useState([]);
	const [ isLoaded, setIsLoaded ] = useState(false);

	const getTags = () => {
		axios.get('https://onde-api.frb.io/api/tags').then((response) => {
			setTags(response.data['hydra:member']);
		});
	};

	const getDepartements = () => {
		axios.get('https://onde-api.frb.io/api/departments').then((response) => {
			setDepartements(response.data['hydra:member']);
		});
	};

	useEffect(
		() => {
			getTags();
			getDepartements();
			setIsLoaded(true);
		},
		[ isLoaded ]
	);

	const createInitiative = (e) => {
		e.preventDefault();

		let form = e.target;

		let goalsName = document.getElementsByName('nameObjectif[]');
		let goalsNumber = document.getElementsByName('number[]');
		let goals = [];

		var i = 0;

		goalsName.forEach((element) => {
			goals.push([ element.value, goalsNumber[i].value ]);
			i++;
		});

		let description = `<p>${form['description'].value}</p>`;

		axios
			.post('https://onde-api.frb.io/api/posts', {
				name: form['name'].value,
				description: description,
				dateMeeting: form['dateMeeting'].value,
				dateEnd: form['dateEnd'].value,
				dateCreated: new Date(),
				User: `/api/users/${sessionStorage.getItem('User')}`,
				department: `/api/departments/${form['department'].value}`,
				validated: false,
				tags: [ `/api/tags/${form['tag'].value}` ]
			})
			.then((response) => {
				let post = response.data;
				var j = 1;

				goals.map((goal) => {
					axios
						.post('https://onde-api.frb.io/api/post_goals', {
							name: goal[0],
							number: parseInt(goal[1]),
							placement: j,
							done: false,
							Post: `/api/posts/${post.id}`
						})
						.then((response) => {});
					window.location.pathname = '/initiative-ajoutee';
					j++;
				});
			});
	};

	return (
		<InitiativeCreateStyled className="initiativeCreation">
			<div className="content-wrapper">
				<DisplayTitle /* tag="h1" */>Créer votre initiative</DisplayTitle>
				<div className="initiativeCreation__wrapper">
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
							<InputText>
								<select name="tag">
									{tags.map((tag) => {
										return (
											<option key={tag.id} value={tag.id}>
												{tag.name}
											</option>
										);
									})}
								</select>
							</InputText>
						</fieldset>

						<fieldset className="form__field">
							<label>
								<InputText>Titre de l'initiative</InputText>
							</label>
							<InputText>
								<input type="text" name="name" />
							</InputText>
						</fieldset>

						<fieldset className="form__field">
							<label>
								<InputText>Description</InputText>
							</label>
							<InputText>
								<textarea name="description" />
							</InputText>
						</fieldset>

						<fieldset className="form__field">
							<label>
								<InputText>Emplacement</InputText>
							</label>
							<InputText>
								<select name="department">
									{departements.map((department) => {
										return (
											<option key={department.id} value={department.id}>
												{department.name}
											</option>
										);
									})}
								</select>
							</InputText>
						</fieldset>

						<div className="form__fields">
							<fieldset className="form__field">
								<label>
									<InputText>Objectif</InputText>
								</label>
								<InputText>
									<input type="number" name="number[]" />
								</InputText>
							</fieldset>
							<fieldset className="form__field">
								<label>
									<InputText>Titre de l'objectif</InputText>
								</label>
								<InputText>
									<input type="text" name="nameObjectif[]" />
								</InputText>
							</fieldset>
						</div>

						<fieldset className="form__field">
							<label>
								<InputText>Date et horaire du rendez-vous</InputText>
							</label>
							<InputText>
								<input type="datetime-local" name="dateMeeting" />
							</InputText>
						</fieldset>

						<fieldset className="form__field">
							<label>
								<InputText>Date de fin</InputText>
							</label>
							<InputText>
								<input type="date" name="dateEnd" />
							</InputText>
						</fieldset>

						<input
							className="form__button"
							type="submit"
							name="Voir l'aperçu"
							placeholder="Voir l'aperçu"
						/>
					</form>
					<ImageWrapper name="CreateInitiative" width="350" />
				</div>
			</div>
		</InitiativeCreateStyled>
	);
};

const InitiativeCreateStyled = styled.main`
	&.initiativeCreation {
		padding-bottom: 80px;
		height: 100%;

		.initiativeCreation__wrapper {
			@media ${devices.large} {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
			}

			img {
				display: none;

				@media ${devices.large} {
					display: block;
					margin: 80px 80px 0 0;
				}
			}
		}

		h2 {
			margin-bottom: 24px;
		}

		.form {
			@media ${devices.large} {
				width: 100%;
				max-width: 500px;
			}

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

				textarea {
					font-family: 'Inter', sans-serif;
					font-size: ${rem(12)};
					font-weight: 500;
					line-height: 20px;

					@media ${devices.large} {
						line-height: 27px;
					}
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
