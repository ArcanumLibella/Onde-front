import React from 'react';
import { assets } from './index';

const iconWrapper = props => {
  return <img src={assets[props.name]}></img>;
};
export default iconWrapper;
