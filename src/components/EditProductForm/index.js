import React from "react";
import { Formik, Form } from "formik";
import { validationEditSchema as validationSchema } from "../../utils/validationSchema";

import { FormInput } from "../../commons/FormInput";
import { Button } from "../../commons/Button";

import "./style.css";

export default function EditProductForm({
  handleEditProductSubmit,
  productDetail,
  loading,
}) {
  return (
    <Formik
      initialValues={{
        title: productDetail.title || "",
        description: productDetail.description || "",
        image: productDetail.image || "",
        price: productDetail.price || "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleEditProductSubmit}
    >
      {({ isValid, dirty }) => (
        <div>
          <Form className="edit-product-inputs-form-container">
            <div className="edit-product-inputs-form">
              <FormInput
                name="title"
                label="Title"
                placeholder="Title"
                width={330}
              />
              <FormInput
                name="image"
                label="Image"
                placeholder="Image"
                width={330}
              />
              <FormInput
                name="description"
                label="Description"
                placeholder="Description"
                width={330}
              />
              <FormInput
                name="price"
                label="price"
                placeholder="price"
                width={330}
              />
            </div>
            <Button
              title="Edit"
              type="submit"
              disabled={!dirty || !isValid}
              loading={loading}
              width={100}
              style={{ marginTop: 20 }}
            />
          </Form>
        </div>
      )}
    </Formik>
  );
}
