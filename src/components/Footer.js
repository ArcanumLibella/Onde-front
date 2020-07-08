import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { DisplayTitle, Paragraph, ImageWrapper, TextLink } from '../components';
import { InstagramF, FacebookF, TwitterF } from '../assets';
import { rem, devices } from '../utilities';

const Footer = props => {
  const { theme } = props;

  return (
    <FooterStyle>
      <div className="link--wrapper">
        <div className="section--wrapper">
          <Link to="/">
            <ImageWrapper name="OndeLogoWhite" />
          </Link>
        </div>
        <div className="section--wrapper">
          <DisplayTitle color={theme.white} fontWeight={600} fontSize={20}>
            À propos
          </DisplayTitle>
          <TextLink color={theme.white} fontSize={16}>
            Qui sommes-nous?
          </TextLink>
          <TextLink color={theme.white} fontSize={16}>
            Nos engagements
          </TextLink>
          <TextLink color={theme.white} fontSize={16}>
            Mentions légales
          </TextLink>
        </div>
        <div className="section--wrapper">
          <DisplayTitle color={theme.white} fontWeight={600} fontSize={20}>
            Assistance
          </DisplayTitle>
          <TextLink color={theme.white} fontSize={16}>
            Aide
          </TextLink>
          <TextLink color={theme.white} fontSize={16}>
            Politique d’utilisation des données
          </TextLink>
          <TextLink color={theme.white} fontSize={16}>
            Conditions
          </TextLink>
        </div>
        <div className="section--wrapper">
          <DisplayTitle color={theme.white} fontWeight={600} fontSize={20}>
            Nous rejoindre
          </DisplayTitle>
          <TextLink color={theme.white} fontSize={16}>
            Initiatives
          </TextLink>
          <TextLink color={theme.white} fontSize={16}>
            Devenir modérateur
          </TextLink>
          <TextLink color={theme.white} fontSize={16}>
            Contact
          </TextLink>
        </div>
      </div>
      <div className="subLink--wrapper">
        <div className="socialLogo--wrapper">
          <InstagramF fill="white" width={32} />
          <TwitterF fill="white" width={32} />
          <FacebookF fill="white" width={32} />
        </div>
        <Paragraph color={theme.white} fontSize={13}>
          © 2020 Onde, All rights reserved
        </Paragraph>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.darkBlueBackground};
  padding: 50px 16px 100px 16px;
  .link--wrapper {
    flex-direction: row;
  }
  .section--wrapper {
    margin-bottom: 36px;
    & :first-child {
      margin-bottom: 20px;
    }
    & :nth-child(n + 2) {
      margin: 10px 0;
    }
  }
  .subLink--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .socialLogo--wrapper {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
    }
  }
  @media ${devices.large} {
    height: 360px;
    padding: 60px 0px 0px 0px;
    .link--wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: 80%;
    }
    .section--wrapper {
      margin-bottom: 0px;
      width: 16%;
      & :first-child {
        margin-bottom: 30px;
        font-weight: 800;
        font-size: ${rem(26)};
      }
      & :nth-child(n + 2) {
        font-weight: regular;
        font-size: ${rem(22)};
      }
    }
    .subLink--wrapper {
      height: 20%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 5%;
      .socialLogo--wrapper {
        margin: 0 10px;
      }
      p {
        margin-left: 28%;
        font-size: ${rem(16)};
      }
    }
  }
`;

export default Footer;
