import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ColorsList from './components/ColorsList.jsx';
import ColorDetail from './components/ColorDetail.jsx';
import AddColorForm from './components/AddColorForm.jsx';
import './App.css'

function App() {
    const [colors, setColors] = useState({
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    });

    const addColor = (newColorName, newColorValue) => {
        setColors(oldColors => ({
            ...oldColors,
            [newColorName.toLowerCase()]: newColorValue // Ensure the key is lowercase
        }));
    };

    return (
        <Router>
            <Routes>
                <Route path="/colors" element={<ColorsList colors={colors} />} />
                <Route path="/colors/new" element={<AddColorForm addColor={addColor} />} />
                <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
                <Route path="*" element={<Navigate replace to="/colors" />} />
            </Routes>
        </Router>
    );
}

export default App;
