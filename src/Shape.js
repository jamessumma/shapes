import React from 'react';

const Shape = ({ color, size }) => {
  const style = {
    backgroundColor: color,
    width: size,
    height: size,
    margin: '10px',
    display: 'inline-block'
  };

  return <div style={style} />;
};

export default Shape;
