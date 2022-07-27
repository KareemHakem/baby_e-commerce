import React from "react";
import { Formik, Form } from "formik";
import { validationEditSchema as validationSchema } from "../../utils/validationSchema";

import { FormInput } from "../../commons/FormInput";
import { Button } from "../../commons/Button";
import Image from "../../assets/images/photo.png";

import "./style.css";

export default function CreateProductForm({
  handleCreateProductSubmit,
  //   handleChangeValue,
  loading,
}) {
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        image: "" || Image,
        price: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleCreateProductSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className="create-product-inputs-form-container">
          <div className="create-product-inputs-form">
            <FormInput
              name="title"
              label="Title"
              placeholder="Title"
              width={330}
            />
            <FormInput
              name="image"
              label="Image"
              // onChange={handleChangeValue}
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
            title="Create"
            type="submit"
            disabled={!dirty || !isValid}
            loading={loading}
            width={100}
            style={{ marginTop: 20 }}
          />
        </Form>
      )}
    </Formik>
  );
}
