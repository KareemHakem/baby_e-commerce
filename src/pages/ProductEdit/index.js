import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { EditProduct } from "../../redux/EditProduct/action";

import EditProductForm from "../../components/EditProductForm";

export default function ProductEdit() {
  const { loading } = useSelector((state) => state.EditProduct);
  const { data } = useSelector((state) => state.productId);



  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  console.log(id);

  const handleEditProductSubmit = (value) => {
    dispatch(EditProduct(value, id));
    navigation(`product/${id}`);
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
