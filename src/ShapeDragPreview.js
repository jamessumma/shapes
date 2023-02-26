import React from 'react';

const ShapeDragPreview = ({ color, size }) => {
  const style = {
    backgroundColor: color,
    width: size,
    height: size,
    opacity: 0.5
  };

  return <div style={style} />;
};

export default ShapeDragPreview;
