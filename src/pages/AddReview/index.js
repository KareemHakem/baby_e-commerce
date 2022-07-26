import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../redux/reviews/action";
import { postReview } from "../../redux/postReview/action";

import AddReviewProducts from "../../components/AddReviewProducts";
import Loading from "../../commons/Loading";
import Error from "../../commons/Error";

export default function AddReview() {
  const { loading } = useSelector((state) => state.createReview);
  const { reviews, loadingReview, error } = useSelector(
    (state) => state.reviews
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const handleCreateProductSubmit = (value) => {
    const body = {
      review: value.review,
      productId: id,
    };
    dispatch(
      postReview(body, () => {
        dispatch(getReviews());
      })
    );
  };

  if (loadingReview) return <Loading />;
  if (error) return <Error />;

  return (
    <AddReviewProducts
      handleCreateProductSubmit={handleCreateProductSubmit}
      loading={loading}
      reviews={reviews}
      id={id}
    />
  );
}
