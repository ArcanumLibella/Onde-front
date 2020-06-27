import React from 'react';
import styled from 'styled-components';

import { Paragraph } from '.';

const MiniTag = props => {
  const { tags } = props;
  const list = [
    { id: 1, name: 'Plage' },
    { id: 2, name: 'Var' },
    { id: 3, name: 'WWF' },
    { id: 4, name: 'Gard' }
  ];

  const initiativeTag = tags.map(i => i);
  const tagsCollection = list.map(i => i);

  const initiativeTags = tagsCollection.filter(x =>
    initiativeTag.includes(x.id)
  );

  // const tagsCollection = list.map(i => <Paragraph>{i}</Paragraph>);

  // console.log(tagsCollection),
  // console.log(initiativeTag);
  return (
    <>
      {/* <Paragraph>{console.log('initiativeTag', initiativeTag)}</Paragraph>{' '}
      <Paragraph>{console.log('tagsCollection', tagsCollection)}</Paragraph> */}
      <Paragraph>{console.log('initiativeTags', initiativeTags)}</Paragraph>
    </>
  );
};

export default MiniTag;
