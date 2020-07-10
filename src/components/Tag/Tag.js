import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { rem, devices } from '../../utilities';

const Tag = props => {
  const [tagsList, setTagsList] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    !isLoaded &&
      axios
        .get(`https://onde-api.frb.io/api/departments`)
        .then(result => {
          setIsLoaded(true);
          setTagsList(result.data['hydra:member']);
        })
        .catch(error => {
          setIsLoaded(true);
        });
  });

  // const handleClick = (idDpartment) =>{
  //   console.log(idDpartment);
  //   props.onTagClick(idDpartment)
  // }


  const tagsCollection =
    tagsList &&
    tagsList.map(i => (
      <button key={i.id} tag={i} initiativesRelated={i.Post} onClick={() => {props.onTagClick(i.code)}} className="tag">
        {i.name}
      </button>
    ));

  return <TagStyled className="tags">{tagsCollection}</TagStyled>;
};

const TagStyled = styled.div`
  display: flex;
  margin: 24px -16px;
  overflow: scroll;

  @media ${devices.large} {
    display: none;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  .tag {
    position: relative;
    display: inline-block;
    padding: 10px 18px;
    margin: 6px;

    color: ${props => props.backgroundColor || props.theme.midnight};
    font-size: ${rem(17)};
    font-weight: 500;
    white-space: nowrap;
    background: ${props => props.backgroundColor || props.theme.white};
    border: none;
    border-radius: 14px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    z-index: 1;
  }
`;

export default Tag;
