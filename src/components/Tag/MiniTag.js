import React from 'react';
import styled from 'styled-components';

import { Paragraph } from '..';
import { rem } from '../../utilities';

const MiniTag = props => {
  const { tags } = props;
  const { normal, department, partenaire } = tags;

  const normalTags = normal
    ? normal.map(i => {
        return {
          id: i.id,
          name: i.name,
          color: '#45BE93'
        };
      })
    : [];

  const departmentTag = {
    id: department.id,
    name: department.name,
    color: '#23A1F5'
  };

  const partenaireTag = partenaire
    ? {
        id: partenaire.id,
        name: partenaire.name,
        color: '#FF5977'
      }
    : [];

  const coll = [...normalTags, departmentTag];
  const initiativeTags = [...coll, partenaireTag];

  const tagsCollection = initiativeTags.map(i => (
    <Paragraph key={i.id} color={i.color} className="minitag">
      {i.name}
    </Paragraph>
  ));

  return <MiniTagStyled className="minitags">{tagsCollection}</MiniTagStyled>;
};

const MiniTagStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;

  p,
  .minitag {
    position: relative;
    display: inline-block;
    padding: 4px 8px;
    margin: 0 6px;

    font-size: ${rem(12)};
    font-weight: 600;
    white-space: nowrap;
    text-transform: uppercase;
    background: ${props => props.backgroundColor || props.theme.white};
    border: none;
    border-radius: 14px;
    z-index: 1;
  }
`;

export default MiniTag;
