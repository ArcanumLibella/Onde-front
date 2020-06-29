import React from 'react';

import { Button } from '..';

const MiniTag = props => {
  const list = [
    { id: 1, name: 'Plage', color: 'green' },
    { id: 2, name: 'Var', color: 'blue' },
    { id: 3, name: 'WWF', color: 'pink' },
    { id: 4, name: 'Gard', color: 'red' }
  ];

  const tagsCollection = list.map(i => <Button>{i.name}</Button>);

  return <>{tagsCollection}</>;
};

export default MiniTag;
