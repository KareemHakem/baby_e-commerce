import { combineReducers } from "redux";
import product from "./product/reducer";
import productId from "./productId/reducer";
import EditProduct from "./EditProduct/reducer";
import createProduct from "./createProduct/reducer";
import deleteProduct from "./deleteProduct/reducer";

const rootReducer = combineReducers({
  product,
  productId,
  EditProduct,
  createProduct,
  deleteProduct,
});

export default rootReducer;
