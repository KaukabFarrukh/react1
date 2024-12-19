import React, { useState, useContext } from "react";
import { ColorContext } from "../contexts/ColorContext"; // Import context if dynamic navbar is needed
import "../styles/ColorPicker.css";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  const { setNavbarColor } = useContext(ColorContext); // Optional for dynamic navbar color

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    setNavbarColor(selectedColor); // Update navbar color dynamically (optional)
  };

  return (
    <div className="color-picker-page" style={{ backgroundColor: color }}>
      <h2>Pick a Color</h2>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        style={{ cursor: "pointer", margin: "20px" }}
      />
      <p>Selected Color: {color}</p>
    </div>
  );
};

export default ColorPicker;
