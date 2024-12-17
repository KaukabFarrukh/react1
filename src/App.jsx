import React from "react";
import Gallery from "./components/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./pages/navbar.jsx";
import Footer from "./pages/footer.jsx";
import Counter from "./pages/counter.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Main container */}
      <div style={appStyles}>
        <Navbar />
        <h1 style={headingStyles}>Book Gallery</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Gallery />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const appStyles = {
  fontFamily: "'Poppins', Arial, sans-serif",
  backgroundColor: "#ffffff",
  color: "#444",
  minHeight: "100vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const headingStyles = {
  textAlign: "center",
  color: "#2c3e50",
  margin: "30px 0",
  fontSize: "3rem",
  fontWeight: "600",
  letterSpacing: "1.5px",
  textTransform: "capitalize",
  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.1)",
};

export default App;
