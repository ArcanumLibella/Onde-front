import React from 'react';
import {
  Title,
  SubTitle,
  Paragraph,
  Button,
  ImageWrapper
} from '../components';
import { DropCircleF, FistRaisedCircleF, PinCircleF } from '../assets';
import { rem } from '../utilities';
import styled from 'styled-components';

const HomepageStyled = styled.section`
  .bluePart {
    background-color: ${props => props.theme.blueBackground};
  }
  .greyPart {
    background-color: ${props => props.theme.greyBackground};
  }
`;

const Homepage = props => {
  const { theme } = props;

  const IconContainer = props => {
    const { title, paragraph } = props;
    return (
      <>
        <SubTitle fontWeight="600" color={theme.midnight}>
          {title}
        </SubTitle>
        <Paragraph>{paragraph}</Paragraph>
      </>
    );
  };

  return (
    <HomepageStyled>
      <Title>Apporter sa goutte à la mer !</Title>
      <SubTitle>Plateforme participative</SubTitle>
      <Paragraph>
        Onde donne la parole aux citoyens afin de mener à bien des initiatives
        pour la protection du bassin méditerranéen.
      </Paragraph>
      <ImageWrapper name="CleanUpTheBeach" />
      <Button>Découvrir les initiatives</Button>
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
      <div className="bluePart">
        <SubTitle color={theme.white} fontSize="14">
          VÉRIFICATIONS ADMINS
        </SubTitle>
        <Title color={theme.white}>Se concentrer sur l’essentiel</Title>
        <Paragraph color={theme.white}>
          Des personnes s’occupent de la vérification des initiatives afin de
          conserver une plateforme agréable, respectueuse et porteuse de sens.
        </Paragraph>
        <ImageWrapper name="SecurityCheck" />
      </div>
      <div className="imageContainer">
        <Title>Ne rater aucune information</Title>
        <Paragraph>
          Sur la plateforme, suivre l’avancement des initiatives ou rechercher
          des informations c’est simple et rapide. Grâce à nos rappels, rester
          informé en temps réel.
        </Paragraph>
        <ImageWrapper name="GirlReceivingNotification" />
      </div>
      <div className="imageContainer">
        <Title>Récompenser l'engagement</Title>
        <Paragraph>
          Des badges sont accordés aux utilisateurs réguliers de la plateforme
          ou à ceux qui effectuent une demande pour devenir modérateur.
        </Paragraph>
        <ImageWrapper name="BoyUnderneathFirework" />
      </div>
      <div className="imageContainer">
        <Title>Diffuser vos initiatives</Title>
        <Paragraph>
          Onde est un projet qui a besoin d’être entendu. La fonction de partage
          sur les réseaux sociaux est disponible à tout moment sur le détail de
          l’initiative.
        </Paragraph>
        <ImageWrapper name="GuysAndChatBubbles" />
      </div>
      <div className="greyPart">
        <SubTitle fontSize="14" color={theme.midnight}>
          NOS PARTENAIRES
        </SubTitle>
        <Title>Ils nous font confiance !</Title>
        {/* add carousel */}
      </div>
      <div className="bluePart">
        <Title color={theme.white}>Participer au changement</Title>
        <Button>S'inscrire</Button>
      </div>
    </HomepageStyled>
  );
};

export default Homepage;
