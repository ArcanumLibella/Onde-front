import React from 'react';
import { Title, SubTitle, Paragraph, Button, IconWrapper } from '../components';

const Homepage = () => {
  return (
    <>
      <Title>Apporter sa goutte à la mer !</Title>
      <SubTitle>Plateforme participative</SubTitle>
      <Paragraph>
        Onde donne la parole aux citoyens afin de mener à bien des initiatives
        pour la protection du bassin méditerranéen.
      </Paragraph>
      <Button>Découvrir les initiatives</Button>
      <IconWrapper name="CleanUpTheBeach" />
    </>
  );
};

export default Homepage;
