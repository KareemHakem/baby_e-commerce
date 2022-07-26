import { type } from "./type";
import { axios } from "../../apis/axios";

export const getRate = () => async (dispatch) => {
  dispatch({ type: type.GET_RATE_REQUEST });

  try {
    const { data } = await axios.get(`/rate`);
    dispatch({ type: type.GET_RATE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.GET_RATE_ERROR, payload: err });
  }
};
