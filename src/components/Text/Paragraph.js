import React from 'react';

const paragraphStyle = {
  color: '#001E3C'
};

const Paragraph = props => {
  return <p style={paragraphStyle}>{props.children}</p>;
};

export default Paragraph;
