import React from "react";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div style={appStyles}>
      <h1 style={headingStyles}>Book Gallery</h1>
      <Gallery />
    </div>
  );
}

const appStyles = {
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f8f9fa",
  minHeight: "100vh",
  padding: "20px",
};

const headingStyles = {
  textAlign: "center",
  color: "#333",
  margin: "20px 0",
  fontSize: "2.5rem",
  fontWeight: "bold",
  letterSpacing: "2px",
  textTransform: "uppercase",
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
};

export default App
