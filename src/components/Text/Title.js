import React from 'react';

const titleStyle = {
  color: '#001E3C'
};

const Title = props => {
  return <h1 style={titleStyle}>{props.children}</h1>;
};

export default Title;
