import React from 'react';
import { assets } from './index';

const IconWrapper = props => {
  const { name } = props;

  if (!assets[name]) {
    return null;
  }

  return <img alt="img" src={assets[name]} />;
};

export default IconWrapper;
