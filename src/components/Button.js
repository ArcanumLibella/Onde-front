import React from 'react';

const buttonStyle = {
  backgroundColor: '#758BFD',
  color: 'white'
};

const Button = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
