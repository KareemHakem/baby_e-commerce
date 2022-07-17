import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProductId } from "../../redux/productId/action";

import Product from "../../components/Product";
import Error from "../../commons/Error";
import Loading from "../../commons/Loading";

export default function ProductDetail() {
  const { loading, data, error } = useSelector((state) => state.productId);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { id } = useParams();

  // console.log(data.id);

  useEffect(() => {
    dispatch(getProductId(id));
  }, [dispatch, id]);

  const handleEditNavigation = () => {
    navigation(`/product/edit/${id}`);
  };

  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div>
      <Product data={data} handleEditNavigation={handleEditNavigation} />
    </div>
  );
}
