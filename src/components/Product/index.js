import React from "react";

import { useNavigate } from "react-router-dom";
import { Button } from "../../commons/Button";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/deleteProduct/action";

import AddRate from "../../pages/AddRate";
import "./style.css";

export default function Product({ data, deleteLoading, id, AddReview }) {
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
            <div style={{ marginLeft: 30, marginTop: 8 }}>
              <AddRate id={id} />
            </div>
          </div>
          <p className="product-detail-description">{data.description}</p>
          <div className="product-btn">
            <Button
              title="Edit Product"
              onClick={() => navigation(`/product/edit/${id}`)}
              width={50}
              style={{ marginTop: 20, fontSize: 15 }}
            />
            <Button
              title="Delete Product"
              type="submit"
              loading={deleteLoading}
              onClick={() => dispatch(deleteProduct(id), navigation(`/`))}
              width={50}
              style={{ marginTop: 20, fontSize: 15, marginLeft: 10 }}
            />
          </div>
        </div>
      </div>
      <AddReview id={id} />
    </div>
  );
}
