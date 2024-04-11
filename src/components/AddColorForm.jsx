// src/components/AddColorForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddColorForm({ addColor }) {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#ffffff");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) return; // Make sure there's a name entered
        addColor(name, color);
        navigate(`/colors/${name}`); // Redirect to the new color detail page
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Color Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="color">Color Value:</label>
                <input
                    type="color"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Color</button>
        </form>
    );
}

export default AddColorForm;
