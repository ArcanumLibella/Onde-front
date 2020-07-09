import React from 'react';

import { Paragraph, Title } from '../';

const GoalWrapper = props => {
  const { goals } = props;

  const goalCollection =
    goals &&
    goals.map(i => (
      <div key={i} classname={i.done}>
        <Paragraph>{i.number}</Paragraph>
        <Paragraph>{i.name}</Paragraph>
      </div>
    ));

  if (goalCollection.length > 0) {
    return (
      <div className="initiativeDetails__infos">
        <Title>Prochains objectifs</Title>
        {goalCollection}
      </div>
    );
  } else return '';
};

export default GoalWrapper;
