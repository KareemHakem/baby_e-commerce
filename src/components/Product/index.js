import { Button } from "@mui/material";
import React from "react";
import "./style.css";

export default function Product({ data, handleEditNavigation }) {
  return (
    <div style={{ minHeight: 900 }}>
      <div className="product-detail-container">
        <div className="product-detail-left-side">
          <img
            src={data.image}
            alt="image_product"
            className="card-image-detail-product"
          />
        </div>
        <div className="product-detail-right-side">
          <h1> {data.title} </h1>
          <div className="price-rating-detail-right-side">
            <h3 className="product-price">
              {data.price}
              <p style={{ color: "#00aaf0", fontSize: 18, marginLeft: 3 }}>$</p>
            </h3>
            <h3 className="product-detail-rating">
              <h3>Rate :</h3> <p> {data.rate} </p>
            </h3>
          </div>
          <p className="product-detail-description">{data.description}</p>
          <Button
          className="btn"
            sx={{ marginTop: 10, backgroundColor: "#00aaf0", color: "#000" }}
            onClick={handleEditNavigation}
          >
            Edit Product
          </Button>
        </div>
      </div>
      <div className="review-container">
        <h1>Review</h1>
        <div className="review-product-card">
          <h2>{data.review}</h2>
        </div>
      </div>
    </div>
  );
}
