import { combineReducers } from "redux";
import product from "./product/reducer";
import productId from "./productId/reducer";
import EditProduct from "./EditProduct/reducer";
import createProduct from "./createProduct/reducer"

const rootReducer = combineReducers({
  product,
  productId,
  EditProduct,
  createProduct,
});

export default rootReducer;
