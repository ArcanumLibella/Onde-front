import React from 'react';
import styled from 'styled-components';

import {
  DisplayTitle,
  Title,
  Paragraph,
  Button,
  ImageWrapper,
  TextLink,
  Footer
} from '../components';
import { DropCircleF, FistRaisedCircleF, PinCircleF } from '../assets';
import { rem, devices } from '../utilities';

const Homepage = props => {
  const { theme } = props;

  const IconContainer = props => {
    const { title, paragraph } = props;
    return (
      <div className="step__text">
        <Title color={theme.midnight}>{title}</Title>
        <Paragraph fontSize={rem(17)}>{paragraph}</Paragraph>
      </div>
    );
  };

  return (
    <HomepageStyled>
      <section className="section section--hero">
        <div className="content-wrapper">
          <DisplayTitle>Apporter sa goutte à la mer !</DisplayTitle>
          <Paragraph color={theme.blue}>Plateforme participative</Paragraph>
          <Paragraph>
            Onde donne la parole aux citoyens afin de mener à bien des
            initiatives pour la protection du bassin méditerranéen.
          </Paragraph>
          <ImageWrapper name="CleanUpTheBeach" alt="Nettoyage de plage" />
          <Button textCta="Découvrir les initiatives" linkCta="/initiatives" />
        </div>
      </section>

      <section className="section section--steps">
        <div className="content-wrapper">
          <div className="steps">
            <div className="step">
              <DropCircleF fill={theme.darkBlue} />
              <IconContainer
                title="Ajouter sa goutte"
                paragraph="Pour ceux qui n’ont pas le temps de s’engager, il est possible d’apporter son soutien en cliquant sur la petite goutte à droite de chacune des initiatives. Aucune création de compte n’est requise pour cela !"
              />
            </div>
            <div className="step">
              <FistRaisedCircleF fill={theme.blue} />
              <IconContainer
                title="Participer"
                paragraph="Donner de son temps pour soutenir une initiative qui a du sens. Participer, c’est s’engager dans la poursuite d’objectifs concrets avec plusieurs personnes pour faire bouger les lignes."
              />
            </div>
            <div className="step">
              <PinCircleF fill={theme.green} />
              <IconContainer
                title="Se réunir"
                paragraph="Le rendez-vous fixé par le créateur de l’initiative correspond à la réunion des participants. En fonction du nombre atteint, un objectif est réalisé."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--advantages section--darkBlue">
        <div className="content-wrapper">
          <div className="section__wrapper">
            <div className="section__text">
              <Paragraph
                color={theme.white}
                fontSize={14}
                textTransform="uppercase"
              >
                Vérifications admins
              </Paragraph>
              <DisplayTitle color={theme.white}>
                Se concentrer sur l’essentiel
              </DisplayTitle>
              <Paragraph color={theme.white}>
                Des personnes s’occupent de la vérification des initiatives afin
                de conserver une plateforme agréable, respectueuse et porteuse
                de sens.
              </Paragraph>
            </div>
            <ImageWrapper
              name="SecurityCheck"
              alt="Vérification de la sécurité"
            />
          </div>
        </div>
      </section>

      <section className="section section--features">
        <div className="content-wrapper">
          <div className="feature">
            <div className="feature__text">
              <DisplayTitle>Ne rater aucune information</DisplayTitle>
              <Paragraph>
                Sur la plateforme, suivre l’avancement des initiatives ou
                rechercher des informations c’est simple et rapide. Grâce à nos
                rappels, rester informé en temps réel.
              </Paragraph>
            </div>
            <ImageWrapper
              name="GirlReceivingNotification"
              alt="Fille recevant des notifications"
            />
          </div>
          <div className="feature">
            <div className="feature__text">
              <DisplayTitle>Récompenser l'engagement</DisplayTitle>
              <Paragraph>
                Des badges sont accordés aux utilisateurs réguliers de la
                plateforme ou à ceux qui effectuent une demande pour devenir
                modérateur.
              </Paragraph>
              <TextLink>Devenir modérateur →</TextLink>
            </div>
            <ImageWrapper
              name="BoyUnderneathFirework"
              alt="Garçon sous un feu d'artifice"
            />
          </div>
          <div className="feature">
            <div className="feature__text">
              <DisplayTitle>Diffuser vos initiatives</DisplayTitle>
              <Paragraph>
                Onde est un projet qui a besoin d’être entendu. La fonction de
                partage sur les réseaux sociaux est disponible à tout moment sur
                le détail de l’initiative.
              </Paragraph>
            </div>
            <ImageWrapper
              name="GuysAndChatBubbles"
              alt="Personnes qui discutent"
            />
          </div>
        </div>
      </section>

      <section className="section section--partners section--grey">
        <div className="content-wrapper">
          <div className="section__wrapper">
            <Paragraph
              fontSize={14}
              textTransform="uppercase"
              color={theme.midnight}
            >
              Nos partenaires
            </Paragraph>
            <DisplayTitle>Ils nous font confiance !</DisplayTitle>
            <div className="section__images">
              <ImageWrapper name="LogoWwf" alt="Logo du WWF" />
              <ImageWrapper name="LogoGreenpeace" alt="Logo du Greenpeace" />
              <ImageWrapper
                name="LogoUm"
                alt="Logo du l'Union pour la Méditerrannée"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--signup section--blueBackground">
        <div className="content-wrapper">
          <DisplayTitle color={theme.white}>
            Participer au changement
          </DisplayTitle>
          <Button textCta="S'inscrire" linkCta="/inscription" />
        </div>
      </section>

      <Footer theme={theme} />
    </HomepageStyled>
  );
};

const HomepageStyled = styled.main`
  .section {
    &--hero {
      padding-bottom: 64px;

      @media ${devices.medium} {
        margin: 58px auto 0px;
        max-width: 600px;
        text-align: center;
      }

      @media ${devices.large} {
        margin: 58px auto 40px;
      }

      h1,
      h2,
      p {
        margin-bottom: 16px;
      }

      img {
        margin: -88px 0 -12px;

        @media ${devices.large} {
          margin: -180px 0 -20px;
        }
      }
    }

    &--advantages {
      padding: 48px 0 36px;

      .section {
        &__wrapper {
          @media ${devices.medium} {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }

        &__text {
          margin-bottom: 16px;

          @media ${devices.medium} {
            max-width: 600px;
          }
        }
      }

      h2 {
        margin: 16px auto;
      }

      img {
        margin: 0 auto;
        max-width: 250px;

        @media ${devices.large} {
          width: 400px;
          max-width: 100%;
        }
      }
    }

    &--features {
      padding-top: 64px;

      h2 {
        margin-bottom: 16px;
      }

      p {
        margin-bottom: 24px;
      }

      img {
        margin: 0 auto 64px;

        @media ${devices.large} {
          margin: auto;
        }
      }
    }

    &--partners {
      padding: 44px 0;

      @media ${devices.large} {
        padding: 64px 0;
      }

      .section {
        &__wrapper {
          margin: 0 auto;
          max-width: 800px;

          @media ${devices.large} {
            text-align: center;
          }
        }

        &__images {
          @media ${devices.medium} {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      }

      p {
        margin-bottom: 16px;
      }

      h2 {
        margin-bottom: 48px;
      }

      img {
        margin: 30px auto;
        max-width: 250px;
        max-height: 112px;
      }
    }

    &--signup {
      padding: 58px 0 104px;

      @media ${devices.medium} {
        padding: 80px 0;
      }

      h2 {
        margin-bottom: 48px;
        text-align: center;
      }
    }

    &--darkBlue {
      background-color: ${props => props.theme.darkBlue};
    }

    &--blueBackground {
      background-color: ${props => props.theme.blueBackground};
    }

    &--midnightBlue {
      background-color: ${props => props.theme.midnight};
    }

    &--grey {
      background-color: ${props => props.theme.greyBackground};
    }
  }

  .steps {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${devices.large} {
      flex-direction: row;
    }
  }

  .step {
    margin: 0 auto 36px;
    max-width: 380px;
    text-align: center;

    @media ${devices.large} {
      margin: 0 9px 72px;
      text-align: left;
    }

    h3 {
      margin-bottom: 8px;

      @media ${devices.large} {
        margin-bottom: 16px;
      }
    }

    .icon {
      margin-bottom: 16px;
      width: 48px;

      @media ${devices.large} {
        margin-bottom: 26px;
        width: 68px;
      }
    }
  }

  .feature {
    @media ${devices.large} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 94px;

      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }

    &__text {
      @media ${devices.large} {
        max-width: 500px;
      }
    }
  }
`;

export default Homepage;
