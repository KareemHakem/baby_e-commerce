import * as Yup from "yup";

export const validationEditSchema = Yup.object().shape({
  title: Yup.string().required().min(5).label("Title"),
  description: Yup.string().required().min(20).label("Description"),
  price: Yup.number().required().label("Price"),
});

export const validationPostReviewSchema = Yup.object().shape({
  review: Yup.string().required().max(60).label("Review"),
});
