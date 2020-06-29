import React from 'react';

const withEllipsis = (value = '', maxChars = 12, trailingCharCount = 3) => {
  console.log('value', value);
  console.log('value.length', value.length);

  if (value.length <= maxChars) return value;

  const front = value.substring(0, maxChars - trailingCharCount);

  console.log('maxChars', maxChars);
  console.log('front', front);

  const mid = '...';

  const end =
    trailingCharCount === 0
      ? ''
      : value.substring(value.length - trailingCharCount);

  return `${front}${mid}${end}`;
};

const Truncate = props => {
  const { children, maxChars, trailingCharCount } = props;

  return withEllipsis(children, maxChars, trailingCharCount);
};

export default Truncate;
