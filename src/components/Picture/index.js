import React from 'react';

import IconWrapper from './IconWrapper';
import ImageWrapper from './ImageWrapper';

const Picture = props => {
  const { isIcon, name, width, color } = props;

  return isIcon ? (
    <IconWrapper name={name} color={color} />
  ) : (
    <ImageWrapper name={name} width={width} />
  );
};

export default Picture;
