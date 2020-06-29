import React from 'react';

import { Paragraph } from '..';

const MiniTag = props => {
  const { tags } = props;
  const list = [
    { id: 1, name: 'Plage', color: 'green' },
    { id: 2, name: 'Var', color: 'blue' },
    { id: 3, name: 'WWF', color: 'pink' },
    { id: 4, name: 'Gard', color: 'red' }
  ];

  const initiativeTag = tags.map(i => i);

  const initiativeTags = list.filter(i => initiativeTag.includes(i.id));

  const tagsCollection = initiativeTags.map(i => (
    <Paragraph color={i.color}>{i.name}</Paragraph>
  ));

  return <>{tagsCollection}</>;
};

export default MiniTag;
