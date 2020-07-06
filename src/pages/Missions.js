import React from 'react';
import styled from 'styled-components';

import { DisplayTitle, Title, Paragraph, Button, ImageWrapper, TextLink, Footer, } from '../components';
import { rem, devices } from '../utilities';

// TEMPLATE
const Missions = (props) => {
  const { theme } = props;

  return (
    <MissionsStyled>
      <div className="content-wrapper">
        <div className="section-wrapper section-wrapper--top">
          <DisplayTitle fontSize="30" fontWeight="800" color={theme.midnight}>
            Une plateforme qui encourage la prise de parole et les échanges entre
            activistes
          </DisplayTitle>
          <Paragraph fontSize={rem(17)}>Onde offre un outil aux citoyens déjà engagés,
            aux personnes sensibles à la cause animale et environnementale afin d’agir pour la protection du littoral et des eaux méditerranéennes.
          </Paragraph>
        </div>
        <div className="section-wrapper">
          <Title>
            Des changements climatiques désastreux pour la Méditerranée
          </Title>
          <Paragraph fontSize={rem(17)}>
            La région méditerranéenne et ses 460 millions d’habitants devraient être touchés plus fortement par le réchauffement climatique que le reste de la planète.
          </Paragraph>
          <Paragraph fontSize={rem(17)}>
            Le rapport établit par le plan Bleu prévoit une augmentation de la température de l’air de plusieurs degrés, une baisse sensible de la pluviométrie, une augmentation du niveau de la mer et une augmentation de la fréquence et de la violence d’événements extrêmes comme la sécheresse ou les inondations.
          </Paragraph>
          <Paragraph fontSize={rem(17)}>
          Les conséquences de ces changements seraient multiples : variation rapide du cycle de l’eau, évolutions de la biodiversité, modifications au niveau des forêts et des sols et bien sûr des conséquences directes sur les activités humaines.
          </Paragraph>
        </div>
        <div className="section-wrapper">
          <Title>
          Quelles initiatives face à ces enjeux ?
          </Title>
          <Paragraph fontSize={rem(17)}>
          Les initiatives internationales peinent encore à trouver une pleine réalisation.
          </Paragraph>
          <Paragraph fontSize={rem(17)}>
            Le Plan d’Action pour la Méditerranée (PAM) a mis en place, en 1975, un cadre permettant la prise de décision régionale en matière d’environnement.      
          </Paragraph>
          <Paragraph fontSize={rem(17)}>
            L’initiative de l’Union Européenne initiée dans les années 90 avec « le processus de Barcelone » se poursuit encore aujourd’hui et se concentre sur la dépollution de la Méditerranée.      
          </Paragraph>
        </div>
        <div className="section-wrapper">
          <Title>
            Votre réponse avec la plateforme participative
          </Title>
          <Paragraph fontSize={rem(17)}>
            En créant ou en participant à des initiatives, vous devenez un acteur à part entière des actions écologiques.      
          </Paragraph>
          <Paragraph fontSize={rem(17)}>
            Avoir une transparence et une visibilité sur le statut de chaque projet c’est désormais facile et accessible à tous !
          </Paragraph>
          <Paragraph fontSize={rem(17)}>
            Il s’agit d’engager la volonté politique de chacun dans leur localité et à toutes les échelles.
          </Paragraph>
          <Paragraph fontWeight="600">
            Il n’y a pas de petite action.
          </Paragraph>
          <Paragraph fontSize={rem(17)}>
            Attendre après les efforts des politiciens et des gouvernements ne semble plus envisageable face à l’urgence de cette crise.
          </Paragraph>
        </div>
        <div className="section-wrapper">
          <Title>
            Mobilisons-nous ensemble pour les générations futures.
          </Title>
          <Paragraph fontSize={rem(17)}>
            Amicalement,
            L’équipe Onde
          </Paragraph>
        </div>
      </div>
    </MissionsStyled>
  );

};

// STYLE
const MissionsStyled = styled.main`
  padding-bottom: 100px;
  .section-wrapper{
    margin-top: 50px;
    h2{
      margin: 20px 0;
    }
    h3{
      margin: 20px 0;
    }
  }
  .section-wrapper--top{
    margin-top: 0px;
  };
  @media ${devices.large} {
    padding-bottom: 50px;
    .section-wrapper--top{
      text-align: center;
      margin: 0 auto;
      max-width: 820px;
      padding-top: 25px;
    }
  }
`
export default Missions;
