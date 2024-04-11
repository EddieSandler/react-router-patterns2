import React from 'react';
import { Link } from 'react-router-dom';

function ColorsList({ colors }) {
  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <Link to="/colors/new">Add a color</Link>
      <h2>Please select a color:</h2>
      {Object.keys(colors).map(color => (
        <p key={color}>
          <Link to={`/colors/${color}`}>{color}</Link>
        </p>
      ))}
    </div>
  );
}

export default ColorsList;
