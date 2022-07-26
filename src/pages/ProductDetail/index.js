import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getProductId } from "../../redux/productId/action";

import AddReview from "../AddReview";
import Product from "../../components/Product";
import Error from "../../commons/Error";
import Loading from "../../commons/Loading";

export default function ProductDetail() {
  const { loading, data, error } = useSelector((state) => state.productId);
  const { deleteLoading } = useSelector((state) => state.deleteProduct);
  const { reviews } = useSelector((state) => state.reviews);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductId(id));
  }, [dispatch, id]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <Product
        data={data}
        deleteLoading={deleteLoading}
        id={id}
        reviews={reviews}
        AddReview={AddReview}
      />
    </div>
  );
}
