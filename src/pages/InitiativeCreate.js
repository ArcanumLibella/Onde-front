import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ApiService, DisplayTitle, InitiativesCard, Tag } from '../components';
import { ParametersCircleF } from '../assets';
import { devices } from '../utilities';
import Axios from 'axios';

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

	// initiativesCollection && console.log('initiatives => ', initiativesCollection.initiative.tags[0]);

	return (
		<div>
			<form
				onSubmit={(e) => {
					createInitiative(e);
				}}
			>
				<label>Nom de l'initiative</label>
				<select>
					{tags.map((tag) => {
						return (
							<option key={tag.id} value={tag.id}>
								{tag.name}
							</option>
						);
					})}
				</select>

				<label>Nom de l'initiative</label>
				<input type="text" name="name" />

				<label>Description</label>
				<textarea name="description" />

				<label>Emplacement</label>
				<select name="department">
					{departements.map((department) => {
						return (
							<option key={department.id} value={department.id}>
								{department.name}
							</option>
						);
					})}
				</select>

				<div>
					<label>Objectifs</label>
					<input type="number" name="number[]" />
					<label>Nom de l'objectif</label>
					<input type="text" name="nameObjectif[]" />
				</div>

				<label>Date et horraire du rendez-vous</label>
				<input type="datetime-local" name="dateMeeting" />

				<label>Date de fin</label>
				<input type="date" name="dateEnd" />

				<input type="submit" name="Voir l'aperçu" />
			</form>
		</div>
	);
};

export default InitiativeCreate;
