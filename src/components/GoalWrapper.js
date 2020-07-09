import React from 'react';

import { Paragraph } from '.';

const GoalWrapper = props => {
  const { goals } = props;
  console.log('goals', goals);

  const goal = goals.map(i => <Paragraph>{i.name}</Paragraph>);

  // name, placement, number, done;
  console.log(goal);

  return { goal };
};

export default GoalWrapper;
