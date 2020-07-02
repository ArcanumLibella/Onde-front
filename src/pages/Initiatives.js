import React from 'react';
import styled from 'styled-components';

import { ApiService, DisplayTitle, InitiativesCard, Tag } from '../components';
import { ParametersCircleF } from '../assets';

const Initiatives = props => {
  const { theme } = props;

  const items = ApiService('posts');

  const list = items['hydra:member'];

  const initiativesCollection =
    list &&
    list.map(i => <InitiativesCard key={i.id} theme={theme} initiative={i} />);

  // initiativesCollection && console.log('initiatives => ', initiativesCollection.initiative.tags[0]);

  return (
    <InitiativesStyled className="initiatives">
      <div className="content-wrapper">
        <div className="initiatives__header">
          <DisplayTitle /* tag="h1" */>Vos initiatives</DisplayTitle>
          <ParametersCircleF width={34} fill={theme.midnight} />
        </div>
        <Tag />
        {initiativesCollection}
      </div>
    </InitiativesStyled>
  );
};

// STYLE
const InitiativesStyled = styled.main`
  .initiatives {
    &__header {
      display: flex;
      justify-content: space-between;
    }

    .icon {
      width: 60px;
    }
  }
`;

export default Initiatives;
