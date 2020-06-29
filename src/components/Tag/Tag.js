import React from 'react';

import { Paragraph } from '..';

const MiniTag = props => {
  const list = [
    { id: 1, name: 'Plage', color: 'green' },
    { id: 2, name: 'Var', color: 'blue' },
    { id: 3, name: 'WWF', color: 'pink' },
    { id: 4, name: 'Gard', color: 'red' }
  ];

  const tagsCollection = list.map(i => <Paragraph>{i.name}</Paragraph>);

  return <>{tagsCollection}</>;
};

export default MiniTag;
