import React from 'react';

const subTitleStyle = {
  color: '#23A1F5'
};

const SubTitle = props => {
  return <h2 style={subTitleStyle}>{props.children}</h2>;
};

export default SubTitle;
