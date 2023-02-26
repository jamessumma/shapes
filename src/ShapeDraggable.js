import React from 'react';
import { useDrag } from 'react-dnd';
import Shape from './Shape';
import ShapeDragPreview from './ShapeDragPreview';

const ShapeDraggable = ({ color, size }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: 'shape', color, size },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <>
      <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <Shape color={color} size={size} />
      </div>
      {isDragging && <ShapeDragPreview color={color} size={size} />}
    </>
  );
};

export default ShapeDraggable;
