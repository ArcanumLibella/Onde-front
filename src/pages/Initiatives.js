import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { DisplayTitle, InitiativesCard, Tag } from '../components';
import { ParametersCircleF } from '../assets';

const Initiatives = props => {
  const { theme } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://18.224.138.171/api/posts')
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setItems(result);
      })
      .catch(error => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  const list = items['hydra:member'];

  const initiativesCollection =
    list &&
    list.map(i => <InitiativesCard key={i.id} theme={theme} initiative={i} />);

  return (
    <InitiativesStyled>
      <DisplayTitle as="p">Vos initiatives</DisplayTitle>
      <ParametersCircleF width="40" fill={theme.midnight} />
      <Tag />
      {isLoaded || error ? initiativesCollection : 'wait...'}
    </InitiativesStyled>
  );
};

// STYLE
const InitiativesStyled = styled.section``;

export default Initiatives;
