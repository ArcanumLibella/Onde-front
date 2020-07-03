import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { ApiService, DisplayTitle, Title, Paragraph, Button, MiniTag, Comment } from '../components';
import { DropCircleF, DropO, FistRaisedF, ShareCircleF } from '../assets';

const InitiativesCardDetails = (props) => {
	const { theme } = props;
	const { id } = useParams();

	const initiative = ApiService(`posts/${id}`);
	// const objectifs = ApiService(`post_goals/${id}`);

	// console.log('initiative', initiative);

	const { name, description, likes, tags, subscriptions } = initiative;
	// console.log('tags detailCards', tags);

	const amountOf = (data) => (data ? data.length : '0');

	return (
		<InitiativesCardDetailsStyled className="initiativeDetails">
			<div className="content-wrapper">
				{/* <MiniTag tags={tags} /> */}
				<div className="initiativeDetails__header">
					<MiniTag />
					<div className="initiativeDetails__icons">
						<ShareCircleF width="34" fill={theme.midnight} />
						<DropCircleF width="34" fill={theme.blue} />
					</div>
				</div>
				<div className="initiativeDetails__content">
					<DisplayTitle>{name}</DisplayTitle>
					<Paragraph>{description}</Paragraph>
					<Button>Je participe</Button>
				</div>
				<div className="initiativeDetails__infos">
					<div className="initiativeDetails__action">
						<DropO width="34" />
						<Paragraph>{amountOf(likes)} personnes ont aimé</Paragraph>
					</div>
					<div className="initiativeDetails__action">
						<FistRaisedF width="34" />
						<Paragraph>{amountOf(subscriptions)} personnes participent</Paragraph>
					</div>
				</div>
				<div className="initiativeDetails__infos">
					{/* {objectifs &&  */}
					<Title>Prochains objectifs</Title>
					<Paragraph>Lorem ipsum dolor sit amet</Paragraph>
				</div>
				<div className="initiativeDetails__infos">
					<Title>Date de fin</Title>
					{/* Format Date */}
				</div>
				<div className="initiativeDetails__infos">
					<Title>Rendez-vous</Title>
					{/* Format Date */}
				</div>
				<div className="initiativeDetails__infos">
					<Title>Emplacement</Title>
					{/* Format Place */}
					<iframe
						title="map"
						width="288"
						height="154"
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDzhuwSfm5IUEs3cXThQQFs60o8ouymWLk&q=@43.5153627,3.9120154,14z"
						allowFullScreen
					/>
				</div>
				<div className="initiativeDetails__infos">
					<Title>Commentaires</Title>
					<Comment
						author="Julie Aubé"
						comment="Belle initiative ! Il est temps d’agir pour préserver la beauté de nos plages."
						likeNumber="7"
						theme={theme}
					/>
					<Comment
						author="Lucas Beaulac"
						comment="Aucune mesure d’interdiction n’est prise pour les fêtes sauvages organisées sur la plage. Résultat, depuis quelques années celle-ci ressemble à une décharge ! 
          Honteux !"
						likeNumber="35"
						theme={theme}
					/>
				</div>
			</div>
		</InitiativesCardDetailsStyled>
	);
};

// STYLE
const InitiativesCardDetailsStyled = styled.main`
	.initiativeDetails {
		&__header {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			margin-bottom: 12px;

			.minitags {
				flex-wrap: wrap;
			}
		}

		&__icons {
			display: flex;

			.icon {
				margin: 0 4px;
			}
		}

		&__content {
			h2,
			p {
				margin-bottom: 16px;
			}

			button {
				margin-bottom: 24px;
			}
		}

		&__infos {
			padding: 32px 0 24px;
			border-top: 1px solid grey;

			h3 {
				margin-bottom: 24px;
			}

			&:last-child {
				margin-bottom: 64px;
			}
		}

		&__action {
			display: flex;
			align-items: center;
			margin-bottom: 12px;

			p {
				margin-left: 4px;
			}
		}
	}

	iframe {
		width: 100%;
		height: 100%;
	}

	.comment {
		margin-bottom: 24px;

		p {
			margin-bottom: 8px;
		}
	}
`;

export default InitiativesCardDetails;
