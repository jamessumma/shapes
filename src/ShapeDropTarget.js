import React from 'react';
import { useDrop } from 'react-dnd';

const ShapeDropTarget = ({ onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'shape',
    drop: (item) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const style = {
    border: canDrop ? '2px dashed black' : 'none',
    backgroundColor: isOver ? 'lightgray' : 'white',
    height: '300px',
    width: '300px',
    margin: '10px'
  };

  return <div ref={drop} style={style} />;
};

export default ShapeDropTarget;
