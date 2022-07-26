import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { EditProduct } from "../../redux/EditProduct/action";
import { getProductId } from "../../redux/productId/action";
import { getProducts } from "../../redux/product/action";

import EditProductForm from "../../components/EditProductForm";

export default function ProductEdit() {
  const { loading, success } = useSelector((state) => state.EditProduct);
  const { data } = useSelector((state) => state.productId);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  const handleEditProductSubmit = (value) => {
    dispatch(
      EditProduct(value, id, () => {
        dispatch(getProductId(id));
        dispatch(getProducts());
      })
    );
    navigation(`/product/${id}`);
  };

  return (
    <div>
      <EditProductForm
        handleEditProductSubmit={handleEditProductSubmit}
        loading={loading}
        productDetail={data}
      />
    </div>
  );
}
