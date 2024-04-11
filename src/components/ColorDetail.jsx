import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import  '../Colors.css'


function ColorDetail({ colors }) {
    const { color } = useParams();  // Extract the color from the URL.
    const colorHex = colors[color.toLowerCase()];  // Access the color value from the state.

    if (!colorHex) {
        return <Navigate replace to="/colors" />;  // Redirect if the color doesn't exist.
    }

    return (
        <div style={{ height: "100vh", backgroundColor: colorHex, color: '#FFF', textAlign: "center", padding: "20px" }}>
            <h1>This is {color}</h1>
            <h2>Isn't it beautiful?</h2>
            {/* Link to go back to the colors list */}
            <Link to="/colors" style={{ color: '#FFF', marginTop: '20px' }}>Go Back</Link>
        </div>
    );
}

export default ColorDetail;
