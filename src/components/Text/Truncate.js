import React from 'react';

const withEllipsis = props => {
  const { value, maxChars, trailingCharCount } = props;

  console.log('value', value);

  if (value.length <= maxChars) return value;

  const front = value.substring(0, maxChars - trailingCharCount);

  const mid = '...';

  const end =
    trailingCharCount === 0
      ? ''
      : value.substring(value.length - trailingCharCount);

  return `${front}${mid}${end}`;
};

const Truncate = props => {
  const { children, maxChars, trailingCharCount } = props;
  const value = children;

  return withEllipsis(value, maxChars, trailingCharCount);
};

export default Truncate;
