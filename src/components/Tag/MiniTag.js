import React from 'react';
import styled from 'styled-components';

import { rem } from '../../utilities';

import { Paragraph } from '..';

const MiniTag = (props) => {
	const { tags } = props;
	const list = [
		{ id: 1, name: 'Plage', color: 'green' },
		{ id: 2, name: 'Var', color: 'blue' },
		{ id: 3, name: 'WWF', color: 'pink' },
		{ id: 4, name: 'Gard', color: 'red' }
	];

	const initiativeTag = tags.map((i) => i);
	// console.log('initiativeTag', initiativeTag);

	const initiativeTags = list.filter((i) => initiativeTag.includes(i.id));
	// console.log('initiativeTags', initiativeTags);

	const tagsCollection = initiativeTags.map((i) => (
		<Paragraph key={i.id} color={i.color}>
			{i.name}
		</Paragraph>
	));
	// console.log('tagsCollection', tagsCollection);
	return <MiniTagStyled className="minitags">{tagsCollection}</MiniTagStyled>;
};

// STYLE
const MiniTagStyled = styled.div`
	display: flex;
	/* margin: 24px -16px; */

	.tag {
		position: relative;
		display: inline-block;
		padding: 10px 18px;
		margin: 6px;

		color: ${(props) => props.backgroundColor || props.theme.midnight};
		font-size: ${rem(17)};
		font-weight: 500;
		white-space: nowrap;
		background: ${(props) => props.backgroundColor || props.theme.white};
		border: none;
		border-radius: 14px;
		z-index: 1;
	}
`;

export default MiniTag;
