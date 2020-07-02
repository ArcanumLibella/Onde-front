import React from 'react';
import styled from 'styled-components';

import { rem } from '../../utilities';

import { Paragraph } from '..';

const MiniTag = (props) => {
	// const { tags } = props;
	const tags = [ 1, 2, 3, 4 ];

	const list = [
		{ id: 1, name: 'Plage', color: '#45BE93' },
		{ id: 2, name: 'Var', color: 'blue' },
		{ id: 3, name: 'WWF', color: 'pink' },
		{ id: 4, name: 'Gard', color: 'red' }
	];

	const initiativeTag = tags.map((i) => i);

	const initiativeTags = list.filter((i) => initiativeTag.includes(i.id));

	const tagsCollection = initiativeTags.map((i) => (
		<Paragraph key={i.id} color={i.color} className="minitag">
			{i.name}
		</Paragraph>
	));

	return <MiniTagStyled className="minitags">{tagsCollection}</MiniTagStyled>;
};

const MiniTagStyled = styled.div`
	display: flex;

	p,
	.minitag {
		position: relative;
		display: inline-block;
		padding: 4px 8px;
		margin: 0 6px;

		/* color: ${(props) => props.backgroundColor || props.theme.midnight}; */
		font-size: ${rem(12)};
		font-weight: 600;
		white-space: nowrap;
		text-transform: uppercase;
		background: ${(props) => props.backgroundColor || props.theme.white};
		border: none;
		border-radius: 14px;
    z-index: 1;
    
    &:first-child {
      margin-left: 0;
    }
	}
`;

export default MiniTag;
