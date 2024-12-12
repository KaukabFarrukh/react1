import React from "react";
import ProductCard from "./ProductCard";
import gatsbyImage from "../assets/images/gatsby.jpg";
import nineteenEightyFourImage from "../assets/images/1984.jpg";
import mockingbirdImage from "../assets/images/mockingbird.png";
import prideImage from "../assets/images/pride.png";
import catcherImage from "../assets/images/catcher.jpg";

const Gallery = () => {
  const products = [
    { id: 1, name: "The Great Gatsby", price: "15.99", image: gatsbyImage },
    { id: 2, name: "1984", price: "12.49", image: nineteenEightyFourImage },
    { id: 3, name: "To Kill a Mockingbird", price: "10.99", image: mockingbirdImage },
    { id: 4, name: "Pride and Prejudice", price: "14.99", image: prideImage },
    { id: 5, name: "The Catcher in the Rye", price: "16.50", image: catcherImage },
  ];

  return (
    <div style={galleryStyles}>
      <h1 style={headingStyles}>Book Gallery</h1>
      <div style={productGridStyles}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const galleryStyles = {
  textAlign: "center",
  padding: "20px",
};

const headingStyles = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "20px",
  textTransform: "uppercase",
};

const productGridStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

export default Gallery;
