import React from 'react';
import styled from 'styled-components';

import { DisplayTitle, ParagraphBig, Paragraph, Button, ImageWrapper, TextLink } from '../components';
import { DropCircleF, FistRaisedCircleF, PinCircleF } from '../assets';
import { rem } from '../utilities';

// TEMPLATE
const Homepage = (props) => {
	const { theme } = props;

	const IconContainer = (props) => {
		const { title, paragraph } = props;
		return (
			<div class="">
				<ParagraphBig fontWeight="600" color={theme.midnight}>
					{title}
				</ParagraphBig>
				<Paragraph>{paragraph}</Paragraph>
			</div>
		);
	};

	return (
		<HomepageStyled>
			{/* HERO */}
			<section className="section section--hero">
				<div className="content-wrapper">
					<DisplayTitle>Apporter sa goutte à la mer !</DisplayTitle>
					<ParagraphBig>Plateforme participative</ParagraphBig>
					<Paragraph>
						Onde donne la parole aux citoyens afin de mener à bien des initiatives pour la protection du
						bassin méditerranéen.
					</Paragraph>
					<ImageWrapper name="CleanUpTheBeach" alt="Nettoyage de plage" />
					<Button>Découvrir les initiatives</Button>
				</div>
			</section>

			{/* STEPS */}
			<section className="section section--steps">
				<div className="content-wrapper">
					<ImageWrapper isIcon name="HomeFilled" />
					<DropCircleF width={rem(30)} fill={theme.darkBlue} />
					<IconContainer
						title="Plateforme participative"
						paragraph="Dire j’aime ton projet, c’est déjà un premier pas ! Pour ceux qui n’ont
            pas le temps de s’engager, il est possible d’offir de la visibilité en
            cliquant sur la petite goutte à droite de chacune des initiatives.
            Aucune création de compte n’est requise pour cela !"
					/>
					<FistRaisedCircleF width={rem(30)} fill={theme.blue} />
					<IconContainer
						title="Participer"
						paragraph="Donner de son temps pour soutenir une initiative qui a du sens. Participer, c’est s’engager dans la poursuite d’objectifs concrets avec plusieurs personnes pour faire bouger les lignes."
					/>
					<PinCircleF width={rem(30)} fill={theme.green} />
					<IconContainer
						title="Se réunir"
						paragraph="Le rendez-vous fixé par le créateur de l’initiative correspond à la réunion des participants. En fonction du nombre atteint, un objectif est réalisé."
					/>
				</div>
			</section>

			{/* ADVANTAGES */}
			<section className="section section--advantages section--blue">
				<div className="content-wrapper">
					<ParagraphBig color={theme.white} fontSize="14">
						VÉRIFICATIONS ADMINS
					</ParagraphBig>
					<DisplayTitle color={theme.white}>Se concentrer sur l’essentiel</DisplayTitle>
					<Paragraph color={theme.white}>
						Des personnes s’occupent de la vérification des initiatives afin de conserver une plateforme
						agréable, respectueuse et porteuse de sens.
					</Paragraph>
					<ImageWrapper name="SecurityCheck" />
				</div>
			</section>

			{/* FEATURES */}
			<section className="section section--features">
				<div className="content-wrapper">
					<div className="imageContainer">
						<DisplayTitle>Ne rater aucune information</DisplayTitle>
						<Paragraph>
							Sur la plateforme, suivre l’avancement des initiatives ou rechercher des informations c’est
							simple et rapide. Grâce à nos rappels, rester informé en temps réel.
						</Paragraph>
						<ImageWrapper name="GirlReceivingNotification" />
					</div>
					<div className="imageContainer">
						<DisplayTitle>Récompenser l'engagement</DisplayTitle>
						<Paragraph>
							Des badges sont accordés aux utilisateurs réguliers de la plateforme ou à ceux qui
							effectuent une demande pour devenir modérateur.
						</Paragraph>
						<TextLink>Devenir modérateur →</TextLink>
						<ImageWrapper name="BoyUnderneathFirework" />
					</div>
					<div className="imageContainer">
						<DisplayTitle>Diffuser vos initiatives</DisplayTitle>
						<Paragraph>
							Onde est un projet qui a besoin d’être entendu. La fonction de partage sur les réseaux
							sociaux est disponible à tout moment sur le détail de l’initiative.
						</Paragraph>
						<ImageWrapper name="GuysAndChatBubbles" />
					</div>
				</div>
			</section>

			{/* PARTNERS */}
			<section className="section section--partners section--grey">
				<div className="content-wrapper">
					<ParagraphBig fontSize="14" color={theme.midnight}>
						NOS PARTENAIRES
					</ParagraphBig>
					<DisplayTitle>Ils nous font confiance !</DisplayTitle>
					{/* add carousel */}
				</div>
			</section>

			{/* SIGNUP */}
			<section className="section section--signup section--blue">
				<div className="content-wrapper">
					<DisplayTitle color={theme.white}>Participer au changement</DisplayTitle>
					<Button>S'inscrire</Button>
				</div>
			</section>
		</HomepageStyled>
	);
};

// STYLE
const HomepageStyled = styled.main`
	margin-top: 16px;

	.section {
		padding-bottom: 64px;

		&--hero {
			h1,
			h2,
			p {
				margin-bottom: 16px;
			}

			img {
				margin: -88px 0 -12px;
			}
		}

		&--blue {
			background-color: ${(props) => props.theme.blueBackground};
		}

		&--grey {
			background-color: ${(props) => props.theme.greyBackground};
		}
	}
`;

export default Homepage;
