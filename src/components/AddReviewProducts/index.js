import React from "react";

import { Formik, Form } from "formik";

import { validationPostReviewSchema as validationSchema } from "../../utils/validationSchema";
import { FormInput } from "../../commons/FormInput";
import { Button } from "../../commons/Button";

import "./style.css";

export default function AddReviewProducts({
  handleCreateProductSubmit,
  loading,
  reviews,
  id,
  handleChangeValue,
  value,
}) {
  const review = reviews.filter((item) => item.productId === id);

  console.log(review, "review");
  return (
    <div className="add-review-container">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          review: "",
        }}
        onSubmit={handleCreateProductSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="create-product-inputs-form-container">
            <div className="create-product-inputs-form">
              <FormInput
                name="review"
                label="Review"
                placeholder="Review"
                width={330}
              />
            </div>
            <Button
              title="Add Review"
              type="submit"
              disabled={!dirty || !isValid}
              loading={loading}
              width={100}
              DefaultValue={value}
              style={{ marginTop: 20, textTransform: "lowercase" }}
            />
          </Form>
        )}
      </Formik>
      {review.length === 0 ? (
        <div></div>
      ) : (
        <div className="review-container">
          <h1 className="review-header">Review</h1>
          {review.map((review) => (
            <div className="review-product-card">
              <h2 key={review.id}> {review.review} </h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
