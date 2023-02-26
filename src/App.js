import React, { useState } from 'react';
import './App.css';
import ShapeDraggable from './ShapeDraggable';
import ShapeDropTarget from './ShapeDropTarget';

const App = () => {
  const [shapes, setShapes] = useState([]);

  const handleDrop = (shape) => {
    setShapes([...shapes, shape]);
  };
  return (
    <div className="App">
      <div className="Toolbar">
        <h2>Shapes</h2>
        <div className="ShapeList">
          <ShapeDraggable color="red" size="50px" />
          <ShapeDraggable color="blue" size="50px" />
          <ShapeDraggable color="green" size="50px" />
        </div>
      </div>
      <div className="Canvas">
        <h2>Canvas</h2>
        <ShapeDropTarget />
      </div>
    </div>
  );
};

export default App;
