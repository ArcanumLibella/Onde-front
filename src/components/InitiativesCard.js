import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { DisplayTitle, Paragraph, Button, MiniTag, Truncate } from '../components';
import { DropCircleF } from '../assets';
import { devices } from '../utilities';

const InitiativesCard = (props) => {
	const { theme, initiative } = props;

	const { name, description, likes, tags, id } = initiative;

	return (
		<InitiativesCardStyled className="initiative">
			{/* <MiniTag tags={tags} /> */}
			<MiniTag />

			<DisplayTitle>
				<Truncate maxChars="40" trailingCharCount="0">
					{name}
				</Truncate>
			</DisplayTitle>
			<Paragraph fontSize={17}>
				<Truncate maxChars="120" trailingCharCount="0">
					{description}
				</Truncate>
			</Paragraph>
			<div className="initiative__cta">
				<div className="like">
					<DropCircleF width={34} fill={theme.blue} />
					<Paragraph fontSize={17}>{likes.length}</Paragraph>
				</div>
				<Button textCta="En savoir plus" linkCta={`/initiatives/${id}`} />
			</div>
		</InitiativesCardStyled>
	);
};

const InitiativesCardStyled = styled.article`
	margin-bottom: 64px;

	.initiative__cta {
		@media ${devices.large} {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 24px;

			button {
				margin: 0;
			}
		}
	}

	.minitags {
		display: flex;
		margin-bottom: 24px;
	}

	h2 {
		margin-bottom: 16px;
	}

	.like {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin: 24px 0;

		p {
			margin: 0 8px;
		}
	}
`;

export default InitiativesCard;
