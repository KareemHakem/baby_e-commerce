import { type } from "./type";
import { axios } from "../../apis/axios";

export const CreateProduct = (value) => async (dispatch) => {
  dispatch({ type: type.CREATE_PRODUCT_REQUEST });
  try {
    const { data } = await axios.post(`/product/`, value);
    dispatch({ type: type.CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.CREATE_PRODUCT_ERROR, payload: err });
  }
};
