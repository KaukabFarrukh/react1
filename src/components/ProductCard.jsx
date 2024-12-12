import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
    const { name, price, image } = product;  

    return (
        <div style={cardStyles}>
      <div
        style={{
          ...imageContainerStyles,
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
     
    );
  }

  const cardStyles = {
    width: "200px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const imageContainerStyles = {
    height: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px",
  };

  ProductCard.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ProductCard;
