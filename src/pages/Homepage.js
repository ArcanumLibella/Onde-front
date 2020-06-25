import React from 'react';
import { Title, SubTitle, Paragraph, Button, Picture } from '../components';

const Homepage = props => {
  const { theme } = props;

  const IconWrapper = props => {
    const { iconName, title, paragraph } = props;
    return (
      <>
        <Picture name={iconName} />
        <SubTitle fontWeight="600" color={theme.midnight}>
          {title}
        </SubTitle>
        <Paragraph>{paragraph}</Paragraph>
      </>
    );
  };

  return (
    <>
      <Title>Apporter sa goutte à la mer !</Title>
      <SubTitle>Plateforme participative</SubTitle>
      <Paragraph>
        Onde donne la parole aux citoyens afin de mener à bien des initiatives
        pour la protection du bassin méditerranéen.
      </Paragraph>
      <Picture name="CleanUpTheBeach" />
      <Button>Découvrir les initiatives</Button>
      <Picture isIcon name="HomeFilled" />
      <IconWrapper
        iconName=""
        title="Plateforme participative"
        paragraph="Dire j’aime ton projet, c’est déjà un premier pas ! Pour ceux qui n’ont
        pas le temps de s’engager, il est possible d’offir de la visibilité en
        cliquant sur la petite goutte à droite de chacune des initiatives.
        Aucune création de compte n’est requise pour cela !"
      />
      <IconWrapper
        iconName=""
        title="Participer"
        paragraph="Donner de son temps pour soutenir une initiative qui a du sens. Participer, c’est s’engager dans la poursuite d’objectifs concrets avec plusieurs personnes pour faire bouger les lignes."
      />
      <IconWrapper
        iconName=""
        title="Se réunir"
        paragraph="Le rendez-vous fixé par le créateur de l’initiative correspond à la réunion des participants. En fonction du nombre atteint, un objectif est réalisé."
      />
    </>
  );
};

export default Homepage;
