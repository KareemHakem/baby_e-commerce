import { type } from "./type";
import { axios } from "../../apis/axios";
import { errorHandlers } from "../../utils/errorHandlers";

export const EditProduct = (value, id) => async (dispatch) => {
  dispatch({ type: type.EDIT_PRODUCT_REQUEST });
  try {
    const { data } = await axios.put(`/product/${id}`, value);
    dispatch({ type: type.EDIT_PRODUCT_REQUEST, payload: data });
    console.log(data);
  } catch (err) {
    dispatch({ type: type.EDIT_PRODUCT_ERROR, payload: err });
    errorHandlers(err);
  }
};
