import React from 'react';
import styled from 'styled-components';

// import { Button } from '..';

const Tag = (props) => {
	const list = [
		{ id: 1, name: 'Alpes de Haute Provence' },
		{ id: 2, name: 'Alpes Maritimes' },
		{ id: 3, name: 'Var' },
		{ id: 4, name: 'Bouches du Rhône' },
		{ id: 5, name: 'Gard' },
		{ id: 6, name: 'Hérault' },
		{ id: 7, name: 'Aude' },
		{ id: 8, name: 'Pyrénées-Orientales' },
		{ id: 9, name: 'Haute Corse' },
		{ id: 10, name: 'Corse du Sud' }
	];

	const tagsCollection = list.map((i) => <button className="tag">{i.name}</button>);

	return <TagStyled className="tags">{tagsCollection}</TagStyled>;
};

// STYLE
const TagStyled = styled.div`
	display: flex;
	margin: 0 -16px;
	overflow: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	.tag {
		position: relative;
		display: inline-block;
		padding: 10px 18px;
		margin: 6px;

		background: ${(props) => props.backgroundColor || props.theme.white};
		border: none;
		border-radius: 14px;
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
		cursor: pointer;
		z-index: 1;
	}
`;

export default Tag;
