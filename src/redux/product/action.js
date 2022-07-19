import { type } from "./type";
import { axios } from "../../apis/axios/index";

export const getProducts =
  (keyword = "", pageNumber = "", limit) =>
  async (dispatch) => {
    dispatch({ type: type.GET_PRODUCT_REQUEST });
    try {
      const { data } = await axios.get(
        `/product?q=${keyword}&_page=${pageNumber}&_limit=${limit}`
      );
      dispatch({ type: type.GET_PRODUCT_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: type.GET_PRODUCT_ERROR, payload: err });
    }
  };
