import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import { DisplayTitle, Title, GoalWrapper, Paragraph, Comment, TextLink, HeaderInitiatives } from '..';
import { DropO, BackO } from '../../assets';
import { devices, formatDate } from '../../utilities';

const InitiativesCardDetails = (props) => {
	const { theme } = props;
	const { id } = useParams();

	const [ isLoaded, setIsLoaded ] = useState(false);
	const [ initiative, setInitiative ] = useState();

	useEffect(() => {
		!isLoaded &&
			axios
				.get(`https://onde-api.frb.io/api/posts/${id}`)
				.then((result) => {
					setIsLoaded(true);
					setInitiative(result);
				})
				.catch((error) => {
					setIsLoaded(true);
				});
	});

	const destructureData = () => {
		if (initiative) {
			const { data: { Post, Tags, Goal } } = initiative;

			const { dateEnd, dateMeeting, likes } = Post;

			return (
				<InitiativesCardDetailsStyled className="initiativeDetails">
					<div className="content-wrapper">
						<div className="initiativeDetails__head">
							<div className="initiativeDetails__title">
								<DisplayTitle>Vos initiatives</DisplayTitle>
								<Paragraph fontWeight={500} color={theme.blue}>
									Sur le littoral méditerranéen
								</Paragraph>
							</div>
							<Link to={`/initiatives`}>
								<div className="initiativeDetails__back">
									<BackO width={24} />
									<TextLink color={theme.black}>Retour</TextLink>
								</div>
							</Link>
						</div>
						<HeaderInitiatives theme={theme} initiativeData={Post} initiativeTags={Tags} />
						<div className="initiativeDetails__infos">
							<div className="initiativeDetails__action">
								<DropO width="34" />
								<Paragraph>
									{amountOf(likes)}
									{amountOf(likes) > 1 ? ' personnes ont aimé' : ' personne a aimé'}
								</Paragraph>
							</div>
							{/* <div className="initiativeDetails__action">
								<FistRaisedF width="34" />
								<Paragraph>
                  {amountOf(subscriptions)} personnes participent
                </Paragraph>
							</div> */}
						</div>
						<GoalWrapper goals={Goal} />
						<div className="initiativeDetails__dates">
							<div className="initiativeDetails__infos">
								<Title>Date de fin</Title>
								<Paragraph>{formatDate(dateEnd)}</Paragraph>
							</div>
							<div className="initiativeDetails__infos">
								<Title>Rendez-vous</Title>
								<Paragraph>{formatDate(dateMeeting)}</Paragraph>
								<Paragraph>Plage de Pampelonne</Paragraph>
							</div>
						</div>
						{/* <div className="initiativeDetails__infos">
              <Title>Emplacement</Title>
              <iframe
                title="map"
                width="288"
                height="154"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDzhuwSfm5IUEs3cXThQQFs60o8ouymWLk&q=@43.5153627,3.9120154,14z"
                allowFullScreen
              />
            </div> */}
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
		}

		return 'Chargement des initiatives...';
	};

	const amountOf = (data) => (data ? data.length : 0);

	return destructureData();
};

const InitiativesCardDetailsStyled = styled.main`
	.initiativeDetails {
		&__head {
			display: flex;
			justify-content: space-between;
		}
		&__title {
			h1,
			h2 {
				margin-bottom: 12px;
			}
			p {
				margin-bottom: 40px;
			}
		}
		&__back {
			display: flex;
			align-items: center;
			cursor: pointer;
			p {
				margin-left: 8px;
				text-decoration: none;
			}
		}
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
				@media ${devices.large} {
					margin-bottom: 24px;
				}
			}
			em,
			time {
				font-style: normal;
				font-weight: bold;
			}
			button {
				margin-bottom: 24px;
			}
		}
		&__cta {
			@media ${devices.medium} {
				display: flex;
				align-items: flex-end;
				justify-content: space-between;
				margin: 16px 0 32px;
				p,
				button {
					margin: 0;
				}
			}
		}
		&__infos {
			padding: 32px 0 24px;
			border-top: 1px solid lightgrey;
			@media ${devices.large} {
				padding: 64px 0 32px;
			}
			h3 {
				margin-bottom: 24px;
			}
			&:last-child {
				margin-bottom: 64px;
				@media ${devices.large} {
					margin-bottom: 0;
				}
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
		&__dates {
			@media ${devices.large} {
				display: flex;
				flex-direction: row-reverse;
				justify-content: space-between;
				border-top: 1px solid lightgrey;
				.initiativeDetails__infos {
					border: none;
					&:last-child {
						margin-bottom: 0;
					}
				}
			}
			.initiativeDetails__infos {
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
	iframe {
		width: 100%;
		height: 100%;
	}
	.comment {
		margin-bottom: 24px;
		> p {
			margin-bottom: 8px;
		}
	}
`;

export default InitiativesCardDetails;
