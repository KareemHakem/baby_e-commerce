import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { CreateProduct } from "../../redux/createProduct/action";

import CreateProductForm from "../../components/CreateProductForm";

export default function CreateProducts() {
  const { loading } = useSelector((state) => state.createProduct);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleCreateProductSubmit = (value) => {
    dispatch(CreateProduct(value));
    navigation(`/product`);
  };

  return (
    <div>
      <CreateProductForm
        handleCreateProductSubmit={handleCreateProductSubmit}
        loading={loading}
      />
    </div>
  );
}
