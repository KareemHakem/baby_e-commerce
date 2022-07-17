import React from "react";
import "./style.css";

export default function CardItems({ product, handleNavigate }) {
  return (
    <div
      onClick={() => handleNavigate(product.id)}
      className="card-item-container"
    >
      <img className="card-image-item" src={product.image} alt="image_item" />
      <h2 className="header-product"> {product.title} </h2>
      <div className="card-price-rating-side">
        <h3 className="card-product-price">
          {product.price}
          <p style={{ color: "#00aaf0", fontSize: 18, marginLeft: 3 }}>$</p>
        </h3>
        <h3 className="product-rating">
          <h3>rate</h3> : <p>{product.rate}</p>
        </h3>
      </div>
      <p className="product-description">{product.description}</p>
    </div>
  );
}
