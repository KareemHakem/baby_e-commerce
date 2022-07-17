import { type } from "./type";
import { axios } from "../../apis/axios";

export const getProductId = (id) => async (dispatch) => {
  dispatch({ type: type.GET_PRODUCT_ID_REQUEST });
  try {
    const { data } = await axios.get(`/product/${id}`);
    dispatch({ type: type.GET_PRODUCT_ID_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.GET_PRODUCT_ID_ERROR, payload: err });
  }
};
