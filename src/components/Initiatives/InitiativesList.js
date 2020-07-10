import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { DisplayTitle, InitiativesCard, Tag } from '..';
import { ParametersCircleF } from '../../assets';
import { devices } from '../../utilities';

const InitiativesList = ( props ) => {
  const {theme, initiatives} = props;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isClosed, setIsClosed] = useState('true');


    const initiativesCollection =
    initiatives &&
      initiatives.map(i => (
        <InitiativesCard key={i.id} theme={theme} id={i.id} />
      ));


  const displayInitiatives = () => {
    //department = null;
    setIsClosed(!isClosed);
  };

  return (
    <InitiativesListStyled
      className={isClosed ? 'initiativesList' : 'initiativesList'}
    >
      <div className="content-wrapper">
        <div className="initiativesList__header">
          <DisplayTitle>Vos initiatives</DisplayTitle>
          <ParametersCircleF width={34} fill={theme.midnight} />
        </div>
        <DisplayTitle onClick={() => displayInitiatives()}></DisplayTitle>
        <Tag />
        {initiativesCollection.length > 0 ? initiativesCollection : "Aucune initiatives crées pour ce département pour l'instant"}
      </div>
    </InitiativesListStyled>
  );
};

const InitiativesListStyled = styled.section`
  &.initiativesList {
    @media ${devices.large} {
      position: relative;
      top: 0;
      right: calc(-100% + 620px);
      padding: 56px;
      margin-top: 0;
      width: 100%;
      max-width: 620px;
      height: 100%;
      overflow: scroll;
      background: ${props => props.backgroundColor || props.theme.background};
      box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease-in-out;

      &.is-closed {
        right: calc(-100% - 620px);
      }
    }

    .initiativesList__header {
      display: flex;
      justify-content: space-between;

      @media ${devices.large} {
        display: none;
      }
    }

    .icon {
      cursor: pointer;
    }
  }
`;

export default InitiativesList;
