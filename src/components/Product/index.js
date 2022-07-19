import React from "react";
import { useNavigate } from "react-router-dom";
import { StarRating } from "../Rate";
import { Button } from "../../commons/Button";
import "./style.css";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/deleteProduct/action";

export default function Product({
  data,
  handleEditNavigation,
  handleDeleteProduct,
  deleteLoading,
  id,
  rating,
}) {
  const dispatch = useDispatch();
  const navigation = useNavigate();
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
            {/* <h3 className="product-detail-rating">
              <h3>Rate :</h3> <p> {data.rate} </p>
            </h3> */}
            <div style={{ marginLeft: 30, marginTop: 8 }}>
              <StarRating />
              <h3>{rating}</h3>
            </div>
          </div>
          <p className="product-detail-description">{data.description}</p>
          <div className="product-btn">
            <Button
              title="Edit Product"
              onClick={handleEditNavigation}
              width={50}
              style={{ marginTop: 20, fontSize: 15 }}
            />
            <Button
              title="Delete Product"
              type="submit"
              loading={deleteLoading}
              onClick={() => dispatch(deleteProduct(id), navigation(`/`))}
              width={50}
              style={{ marginTop: 20, fontSize: 15 }}
            />
          </div>
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
