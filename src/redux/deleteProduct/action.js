import { type } from "./type";
import { axios } from "../../apis/axios";
import { errorHandlers } from "../../utils/errorHandlers";

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: type.DELETE_PRODUCT_REQUEST });
  try {
    const { data } = await axios.delete(`/product/${id}`);
    dispatch({ type: type.DELETE_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.DELETE_PRODUCT_ERROR, payload: err });
    errorHandlers(err);
  }
};
