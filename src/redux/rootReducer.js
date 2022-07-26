import { combineReducers } from "redux";
import product from "./product/reducer";
import productId from "./productId/reducer";
import EditProduct from "./EditProduct/reducer";
import createProduct from "./createProduct/reducer";
import deleteProduct from "./deleteProduct/reducer";
import reviews from "./reviews/reducer";
import createReview from "./postReview/reducer";
import rate from "./rate/reducer";

const rootReducer = combineReducers({
  product,
  productId,
  EditProduct,
  createProduct,
  deleteProduct,
  reviews,
  createReview,
  rate,
});

export default rootReducer;
