import { type } from "./type";
import { axios } from "../../apis/axios";

export const postRate = (value, callback) => async (dispatch) => {
  dispatch({ type: type.POST_RATE_REQUEST });
  try {
    const { data } = await axios.post(`/rate`, value);
    dispatch({ type: type.POST_RATE_SUCCESS, payload: data });
    callback && callback()
  } catch (err) {
    dispatch({ type: type.POST_RATE_ERROR, payload: err });
  }
};
