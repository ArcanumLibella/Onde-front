import React from 'react';
import styled from 'styled-components';

import { DisplayTitle, Paragraph, ImageWrapper, Button } from '../components';
import { devices } from '../utilities';

const InitiativeAdded = props => {
  return (
    <InitiativeAddedStyled className="initiativeAdded">
      <div className="content-wrapper">
        <div className="initiativeAdded__wrapper">
          <ImageWrapper name="InitiativeSuccess" width="300" />
        </div>
        <DisplayTitle>Votre initiative est créée !</DisplayTitle>
        <Paragraph>
          Vous pouvez la retrouver dans votre bibliothèque ou en effectuant une
          recherche !
        </Paragraph>
        <Button textCta="Retourner à l’accueil" linkCta="/" />
      </div>
    </InitiativeAddedStyled>
  );
};

const InitiativeAddedStyled = styled.main`
  &.initiativeAdded {
    margin-top: 62px;
    height: calc(100vh - 75px - 60px);

    @media ${devices.large} {
      margin-top: 36px;
      height: calc(100vh - 75px);
    }

    img {
      margin: 0 auto 40px;
      max-width: 175px;

      @media ${devices.large} {
        margin: 0 auto 64px;
        max-width: 300px;
      }
    }

    h2 {
      margin: 64px 0 16px;
      text-align: center;
    }

    p {
      margin: 0 auto 36px;
      text-align: center;

      @media ${devices.large} {
        margin: 0 auto 56px;
        max-width: 600px;
      }
    }
  }
`;

export default InitiativeAdded;
