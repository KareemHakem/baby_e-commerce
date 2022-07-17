import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/product/action";

import CardItems from "../../components/CardItems";

export default function Products() {
  const { loading, data, error } = useSelector((state) => state.product);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  // console.log(data);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleNavigationDetailPage = (id) => {
    navigation(`/product/${id}`);
  };

  if (loading) return "Loading...";
  if (error) return "Error...";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data?.map((products) => (
        <CardItems
          key={products.id}
          handleNavigate={handleNavigationDetailPage}
          product={products}
        />
      ))}
    </div>
  );
}
