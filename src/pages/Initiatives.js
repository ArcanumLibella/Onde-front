import React from 'react';
import styled from 'styled-components';

import { DisplayTitle, InitiativesCard, Tag } from '../components';
import { ParametersCircleF } from '../assets';

const InitiativesStyled = styled.section``;

const Initiatives = (props) => {
	const { theme } = props;

	// Initiatives collection : GET /api/posts

	const list = [
		{
			id: 1,
			name: 'Nettoyer la plage de Pampelonne',
			description:
				'La plage de Pampelonne accueille chaque été de nombreux fêtards avec comme conséquence des déchets qui s’accumulent. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
			likes: 20,
			tags: [ 1, 2 ]
		},
		{
			id: 2,
			name: 'Végétaliser le parking de la plage de l’Espiguette',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
			likes: 12,
			tags: [ 3 ]
		},
		{
			id: 3,
			name: 'Mobilisation contre la pêche des oursins',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
			likes: 203,
			tags: [ 1, 4 ]
		}
	];
	const initiativesCollection = list.map((i) => <InitiativesCard key={i} theme={theme} initiative={i} />);

	// const coll = [1, 2, 3, 4, 5];
	// const listItems = coll.map(i => <InitiativesCard key={i} theme={theme} />);

	return (
		<InitiativesStyled>
			<DisplayTitle>Vos initiatives</DisplayTitle>
			<ParametersCircleF width="40" fill={theme.midnight} />
			<Tag />
			{initiativesCollection}
		</InitiativesStyled>
	);
};

export default Initiatives;
